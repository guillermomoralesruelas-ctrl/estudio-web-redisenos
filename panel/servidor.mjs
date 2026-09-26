#!/usr/bin/env node
// Panel del Estudio Web — servidor local (sin dependencias externas).
// Inicia con:  node panel/servidor.mjs     (o doble clic en panel.cmd)
// Abre:        http://localhost:4000
//
// Motor: cada fase se ejecuta llamando a Claude Code sin pantalla:
//   claude -p "<instrucción>" --output-format stream-json --verbose --permission-mode acceptEdits --allowedTools ...
// Las instrucciones de cada fase están en plantillas/fases/*.md (editables).

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUERTO = Number(process.env.PANEL_PUERTO || 4000);
const ES_WIN = process.platform === 'win32';

// ---------- Base de datos ----------
const db = new DatabaseSync(path.join(RAIZ, 'datos', 'estudio.db'));
db.exec('PRAGMA foreign_keys = ON;');
db.exec(fs.readFileSync(path.join(RAIZ, 'datos', 'esquema.sql'), 'utf8'));
{
  const cols = db.prepare('PRAGMA table_info(proyectos)').all().map((c) => c.name);
  if (!cols.includes('numero')) db.exec('ALTER TABLE proyectos ADD COLUMN numero INTEGER');
  if (!cols.includes('carpeta')) db.exec('ALTER TABLE proyectos ADD COLUMN carpeta TEXT');
  db.exec('UPDATE proyectos SET carpeta = slug WHERE carpeta IS NULL');
}
const exportar = () => spawnSync(process.execPath, ['--no-warnings', path.join(RAIZ, 'herramientas', 'db.mjs'), 'exportar'], { stdio: 'ignore' });

// ---------- Fases ----------
const FASES = [
  { n: 0, nombre: 'Alta del proyecto', tipo: 'interna', desc: 'Carpeta numerada, registro y plantilla' },
  { n: 1, nombre: 'Investigación', tipo: 'claude', archivo: '1-investigacion.md', desc: 'Recorre el sitio, capturas, textos, colores, problemas', estadoBd: 'analisis' },
  { n: 2, nombre: 'Recursos', tipo: 'claude', archivo: '2-recursos.md', desc: 'Descarga y optimiza las imágenes' },
  { n: 3, nombre: 'Concepto de diseño', tipo: 'claude', archivo: '3-concepto.md', desc: 'Plan con la skill frontend-design', aprobacion: true },
  { n: 4, nombre: 'Construcción', tipo: 'claude', archivo: '4-construccion.md', desc: 'Sitio Vite + React + Tailwind' },
  { n: 5, nombre: 'Control de calidad', tipo: 'claude', archivo: '5-calidad.md', desc: 'Capturas, errores, correcciones' },
  { n: 6, nombre: 'Propuesta y aprobación', tipo: 'claude', archivo: '6-aprobacion.md', desc: 'Documento para el cliente; al aprobar: commit + etiqueta', aprobacion: true },
  { n: 7, nombre: 'Integraciones (chat)', tipo: 'proximamente', desc: 'Bot de WhatsApp, analítica' },
  { n: 8, nombre: 'Publicación', tipo: 'proximamente', desc: 'GitHub, Vercel, dominio' },
];

const ahora = () => new Date().toLocaleString('sv-SE').replace('T', ' ');
const proyectoPorId = (id) => db.prepare('SELECT * FROM proyectos WHERE id = ?').get(id);
const fasesDe = (id) => db.prepare('SELECT * FROM fases WHERE proyecto_id = ? ORDER BY numero').all(id);
const setFase = (id, n, campos) => {
  const claves = Object.keys(campos);
  db.prepare(`UPDATE fases SET ${claves.map((k) => `${k} = ?`).join(', ')} WHERE proyecto_id = ? AND numero = ?`).run(...claves.map((k) => campos[k]), id, n);
};
function asegurarFases(id) {
  for (const f of FASES) {
    db.prepare('INSERT OR IGNORE INTO fases (proyecto_id, numero, estado) VALUES (?,?,?)').run(id, f.n, f.tipo === 'proximamente' ? 'proximamente' : 'pendiente');
  }
}
for (const p of db.prepare('SELECT id FROM proyectos').all()) asegurarFases(p.id);
// Si el panel se cerró a media fase, esa fase queda como error para poder reintentarla
db.exec("UPDATE fases SET estado = 'error', resumen = 'El panel se cerró mientras la fase corría. Vuelve a ejecutarla.' WHERE estado = 'en_curso'");

// ---------- Registro (log) por proyecto ----------
const clientes = new Set();
function emitir(evento) {
  const dato = `data: ${JSON.stringify(evento)}\n\n`;
  for (const c of clientes) c.write(dato);
}
function registrar(p, fase, tipo, texto) {
  const e = { ts: ahora(), proyecto: p.id, fase, tipo, texto };
  const dir = path.join(RAIZ, 'proyectos', p.carpeta, '.panel');
  fs.mkdirSync(dir, { recursive: true });
  fs.appendFileSync(path.join(dir, 'actividad.jsonl'), JSON.stringify(e) + '\n');
  emitir({ evento: 'log', ...e });
}
function leerActividad(p, max = 500) {
  const f = path.join(RAIZ, 'proyectos', p.carpeta, '.panel', 'actividad.jsonl');
  if (!fs.existsSync(f)) return [];
  return fs.readFileSync(f, 'utf8').trim().split('\n').slice(-max).map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
}
const bitacora = (pid, accion, detalle = null) => db.prepare('INSERT INTO bitacora (proyecto_id, autor, accion, detalle) VALUES (?,?,?,?)').run(pid, 'panel', accion, detalle);

// ---------- Alta de proyecto (fase 0) ----------
function slugDeUrl(u) {
  const host = new URL(u).hostname.replace(/^www\./, '');
  const partes = host.split('.');
  const base = partes.length > 2 && partes.at(-2).length <= 3 ? partes.at(-3) : partes.at(-2) || partes[0];
  return base.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'sitio';
}
function siguienteNumero() {
  const bd = db.prepare('SELECT MAX(numero) m FROM proyectos').get().m || 0;
  const carpetas = fs.existsSync(path.join(RAIZ, 'proyectos'))
    ? fs.readdirSync(path.join(RAIZ, 'proyectos')).map((d) => d.match(/^(\d{2,})-/)).filter(Boolean).map((m) => parseInt(m[1], 10))
    : [];
  return Math.max(bd, ...carpetas, 0) + 1;
}
function crearProyecto(urlTexto, nombreOpcional) {
  let url = urlTexto.trim();
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  const u = new URL(url);
  let slug = slugDeUrl(u.href);
  if (db.prepare('SELECT 1 FROM proyectos WHERE slug = ?').get(slug)) {
    let i = 2; while (db.prepare('SELECT 1 FROM proyectos WHERE slug = ?').get(`${slug}-${i}`)) i++; slug = `${slug}-${i}`;
  }
  const numero = siguienteNumero();
  const carpeta = `${String(numero).padStart(2, '0')}-${slug}`;
  const nombre = nombreOpcional?.trim() || slug;
  const dir = path.join(RAIZ, 'proyectos', carpeta);
  for (const sub of ['investigacion', 'referencias', 'contenido', 'assets', 'entregables', 'qa', '.panel']) fs.mkdirSync(path.join(dir, sub), { recursive: true });
  const plantilla = fs.readFileSync(path.join(RAIZ, 'plantillas', 'PROYECTO.md'), 'utf8');
  fs.writeFileSync(path.join(dir, 'PROYECTO.md'), plantilla.replaceAll('{{NOMBRE}}', nombre).replaceAll('{{SLUG}}', slug).replaceAll('{{URL}}', u.href).replaceAll('{{FECHA}}', ahora().slice(0, 10)));
  const r = db.prepare('INSERT INTO proyectos (slug, numero, carpeta, nombre, url_origen) VALUES (?,?,?,?,?)').run(slug, numero, carpeta, nombre, u.href);
  const id = Number(r.lastInsertRowid);
  asegurarFases(id);
  setFase(id, 0, { estado: 'hecha', inicio: ahora(), fin: ahora(), resumen: `Carpeta proyectos/${carpeta} creada y registrada en la base de datos.` });
  bitacora(id, 'Proyecto creado desde el panel', u.href);
  const p = proyectoPorId(id);
  registrar(p, 0, 'sistema', `Proyecto ${carpeta} creado para ${u.href}`);
  exportar();
  return p;
}

// ---------- Llamar a Claude Code ----------
function resolverClaude() {
  if (process.env.CLAUDE_BIN) return process.env.CLAUDE_BIN;
  const r = spawnSync(ES_WIN ? 'where' : 'which', ['claude'], { encoding: 'utf8' });
  const rutas = (r.stdout || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  return rutas.find((x) => /\.exe$/i.test(x)) || rutas.find((x) => /\.cmd$/i.test(x)) || rutas[0] || null;
}
const comillas = (a) => (/[\s"()*&|<>^,]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a);

const HERRAMIENTAS_PERMITIDAS = [
  'Read', 'Write', 'Edit', 'MultiEdit', 'Glob', 'Grep', 'WebFetch', 'WebSearch', 'TodoWrite', 'Skill',
  'Bash(node *)', 'Bash(npm *)', 'Bash(npx *)', 'Bash(git status*)', 'Bash(git log*)', 'Bash(git diff*)',
  'Bash(mkdir *)', 'Bash(ls *)', 'Bash(cp *)', 'Bash(mv *)', 'Bash(cat *)', 'Bash(head *)', 'Bash(tail *)', 'Bash(wc *)',
  'PowerShell(node *)', 'PowerShell(npm *)', 'PowerShell(npx *)',
].join(',');
const HERRAMIENTAS_PROHIBIDAS = ['Bash(rm *)', 'Bash(git push*)', 'Bash(git reset*)', 'Bash(git commit*)', 'PowerShell(Remove-Item*)'].join(',');

let ejecucion = null; // { proyectoId, fase, hijo, modo: 'una' | 'todo', detenida }

function armarPrompt(p, f, comentarios) {
  const comun = fs.readFileSync(path.join(RAIZ, 'plantillas', 'fases', '_comun.md'), 'utf8');
  const cuerpo = fs.readFileSync(path.join(RAIZ, 'plantillas', 'fases', f.archivo), 'utf8');
  const extra = comentarios
    ? `\n**Comentarios de la persona para rehacer esta fase:**\n\n> ${comentarios.replace(/\n/g, '\n> ')}\n\nAjusta el trabajo existente según estos comentarios; no empieces de cero si no hace falta.\n`
    : '';
  const reemplazos = {
    '{{URL}}': p.url_origen, '{{CARPETA}}': p.carpeta, '{{RUTA}}': `proyectos/${p.carpeta}`, '{{SLUG}}': p.slug,
    '{{NOMBRE}}': p.nombre, '{{NUMERO}}': String(p.numero).padStart(2, '0'), '{{FASE}}': `${f.n} ${f.nombre}`,
    '{{COMENTARIOS}}': extra, '{{FECHA}}': ahora().slice(0, 10),
  };
  let texto = comun + '\n' + cuerpo;
  for (const [k, v] of Object.entries(reemplazos)) texto = texto.replaceAll(k, v ?? '');
  return texto;
}

const rel = (x) => (typeof x === 'string' ? path.relative(RAIZ, x).replace(/\\/g, '/') || x : x);
function resumirHerramienta(nombre, input = {}) {
  const detalle = input.file_path ? rel(input.file_path) : input.command ? String(input.command).slice(0, 180)
    : input.url ? input.url : input.pattern ? input.pattern : input.query ? input.query : input.skill ? input.skill
    : input.description ? input.description : '';
  return `${nombre}${detalle ? ': ' + detalle : ''}`;
}

function ejecutarFase(p, n, { comentarios = null, modo = 'una' } = {}) {
  const f = FASES[n];
  if (!f || f.tipo !== 'claude') throw new Error('Esa fase no se ejecuta con Claude.');
  if (ejecucion) throw new Error('Ya hay una fase en curso. Espera a que termine o detenla.');
  const bin = resolverClaude();
  if (!bin) {
    setFase(p.id, n, { estado: 'error', resumen: 'No encontré el comando "claude". Instala Claude Code: npm install -g @anthropic-ai/claude-code' });
    emitir({ evento: 'estado', proyecto: p.id });
    throw new Error('No encontré Claude Code (comando "claude").');
  }
  const prompt = armarPrompt(p, f, comentarios);
  const rutaPrompt = path.join(RAIZ, 'proyectos', p.carpeta, '.panel', `prompt-fase-${n}.md`);
  fs.mkdirSync(path.dirname(rutaPrompt), { recursive: true });
  fs.writeFileSync(rutaPrompt, prompt);
  const instruccion = `Lee el archivo proyectos/${p.carpeta}/.panel/prompt-fase-${n}.md y ejecuta todas sus instrucciones de principio a fin.`;
  const args = ['-p', instruccion, '--output-format', 'stream-json', '--verbose', '--permission-mode', 'acceptEdits',
    '--allowedTools', HERRAMIENTAS_PERMITIDAS, '--disallowedTools', HERRAMIENTAS_PROHIBIDAS, '--name', `${p.carpeta} fase ${n}`];

  let hijo;
  if (ES_WIN && /\.(cmd|bat)$/i.test(bin)) {
    hijo = spawn([comillas(bin), ...args.map(comillas)].join(' '), { cwd: RAIZ, shell: true, stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, FORCE_COLOR: '0' } });
  } else {
    hijo = spawn(bin, args, { cwd: RAIZ, stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, FORCE_COLOR: '0' } });
  }
  ejecucion = { proyectoId: p.id, fase: n, hijo, modo, detenida: false };
  setFase(p.id, n, { estado: 'en_curso', inicio: ahora(), fin: null, comentarios: comentarios ?? null });
  registrar(p, n, 'sistema', `▶ Fase ${n}: ${f.nombre}${comentarios ? ' (con tus comentarios)' : ''}`);
  emitir({ evento: 'estado', proyecto: p.id });

  const crudo = fs.createWriteStream(path.join(RAIZ, 'proyectos', p.carpeta, '.panel', `fase-${n}.jsonl`), { flags: 'a' });
  let resto = '', resultado = null, errTexto = '';
  hijo.stdout.setEncoding('utf8');
  hijo.stdout.on('data', (trozo) => {
    resto += trozo;
    const lineas = resto.split('\n');
    resto = lineas.pop();
    for (const l of lineas) {
      if (!l.trim()) continue;
      crudo.write(l + '\n');
      let d; try { d = JSON.parse(l); } catch { continue; }
      if (d.type === 'system' && d.subtype === 'init') registrar(p, n, 'sistema', `Sesión de Claude iniciada${d.model ? ' (' + d.model + ')' : ''}`);
      else if (d.type === 'assistant') {
        for (const c of d.message?.content || []) {
          if (c.type === 'text' && c.text?.trim()) registrar(p, n, 'claude', c.text.trim());
          if (c.type === 'tool_use') registrar(p, n, 'herramienta', resumirHerramienta(c.name, c.input));
        }
      } else if (d.type === 'user') {
        for (const c of d.message?.content || []) {
          if (c.type === 'tool_result' && c.is_error) {
            const t = Array.isArray(c.content) ? c.content.map((x) => x.text || '').join(' ') : String(c.content || '');
            registrar(p, n, 'aviso', t.slice(0, 400));
          }
        }
      } else if (d.type === 'result') resultado = d;
    }
  });
  hijo.stderr.setEncoding('utf8');
  hijo.stderr.on('data', (t) => { errTexto += t; });
  const limite = setTimeout(() => { registrar(p, n, 'aviso', 'La fase superó 60 minutos; se detiene.'); detener(); }, 60 * 60 * 1000);

  hijo.on('close', (codigo) => {
    clearTimeout(limite);
    crudo.end();
    const eje = ejecucion; ejecucion = null;
    const pr = proyectoPorId(p.id);
    const costo = resultado?.total_cost_usd ?? null;
    if (eje?.detenida) {
      setFase(p.id, n, { estado: 'error', fin: ahora(), resumen: 'Detenida por la persona.' });
      registrar(pr, n, 'sistema', '■ Fase detenida.');
    } else if (resultado && !resultado.is_error && resultado.subtype === 'success') {
      const estado = f.aprobacion ? 'esperando' : 'hecha';
      setFase(p.id, n, { estado, fin: ahora(), costo_usd: costo, resumen: resultado.result || '' });
      registrar(pr, n, 'fin', `✓ Fase ${n} terminada${costo != null ? ` · costo aprox. $${costo.toFixed(2)} USD` : ''}${f.aprobacion ? ' · esperando tu aprobación' : ''}`);
      bitacora(p.id, `Panel: fase ${n} ${f.nombre} ${estado === 'hecha' ? 'terminada' : 'lista para aprobar'}`);
    } else {
      const motivo = resultado?.result || resultado?.subtype || errTexto.trim().slice(-600) || `Claude terminó con código ${codigo}`;
      setFase(p.id, n, { estado: 'error', fin: ahora(), costo_usd: costo, resumen: motivo });
      registrar(pr, n, 'error', `✗ Fase ${n} con error: ${motivo}`);
    }
    exportar();
    emitir({ evento: 'estado', proyecto: p.id });
    const fila = fasesDe(p.id).find((x) => x.numero === n);
    if (eje?.modo === 'todo' && fila.estado === 'hecha') setTimeout(() => continuar(p.id), 500);
  });
  return true;
}

function siguienteFase(id) {
  const fs_ = fasesDe(id);
  if (fs_.some((f) => f.estado === 'esperando')) return null;
  const f = fs_.find((x) => ['pendiente', 'error'].includes(x.estado) && FASES[x.numero].tipo === 'claude');
  return f ? f.numero : null;
}
function continuar(id) {
  const n = siguienteFase(id);
  if (n == null || ejecucion) return false;
  ejecutarFase(proyectoPorId(id), n, { modo: 'todo' });
  return true;
}
function detener() {
  if (!ejecucion) return false;
  ejecucion.detenida = true;
  const pid = ejecucion.hijo.pid;
  if (ES_WIN) spawn('taskkill', ['/pid', String(pid), '/t', '/f']); else ejecucion.hijo.kill('SIGTERM');
  return true;
}

// ---------- Aprobaciones y commit ----------
function git(args) { return spawnSync('git', args, { cwd: RAIZ, encoding: 'utf8' }); }
function commitVersion(p) {
  if (spawnSync('git', ['--version']).status !== 0) return { ok: false, msg: 'Git no está instalado; no se hizo el commit.' };
  if (!fs.existsSync(path.join(RAIZ, '.git'))) git(['init', '-b', 'main']);
  if (!git(['config', 'user.name']).stdout.trim()) git(['config', 'user.name', 'Estudio Web']);
  if (!git(['config', 'user.email']).stdout.trim()) git(['config', 'user.email', 'estudio@localhost']);
  git(['add', '-A', '--', `proyectos/${p.carpeta}`, ...(fs.existsSync(path.join(RAIZ, 'datos', 'estudio.json')) ? ['datos/estudio.json'] : [])]);
  const previas = db.prepare('SELECT COUNT(*) n FROM versiones WHERE proyecto_id = ?').get(p.id).n;
  const etiqueta = `${p.slug}-v${previas + 1}`;
  const msg = `${p.carpeta}: versión ${previas + 1} aprobada\n\nSitio original: ${p.url_origen}\nAprobada desde el panel el ${ahora()}.\n\nCo-Authored-By: Claude <noreply@anthropic.com>`;
  const c = git(['commit', '-m', msg]);
  const hash = git(['rev-parse', '--short', 'HEAD']).stdout.trim();
  git(['tag', '-a', etiqueta, '-m', `${p.carpeta} v${previas + 1}`]);
  db.prepare('INSERT INTO versiones (proyecto_id, etiqueta, commit_hash) VALUES (?,?,?)').run(p.id, etiqueta, hash);
  return { ok: c.status === 0, msg: c.status === 0 ? `Commit ${hash} con etiqueta ${etiqueta}.` : `git commit: ${(c.stderr || c.stdout).trim().slice(0, 300)}` };
}
function aprobar(id, n, seguir) {
  const p = proyectoPorId(id);
  setFase(id, n, { estado: 'hecha', fin: ahora() });
  registrar(p, n, 'sistema', `👍 Aprobaste la fase ${n}: ${FASES[n].nombre}.`);
  bitacora(id, `Panel: fase ${n} aprobada`);
  if (n === 6) {
    const r = commitVersion(p);
    registrar(p, n, r.ok ? 'fin' : 'aviso', r.msg);
    db.prepare("UPDATE proyectos SET estado = 'revision' WHERE id = ?").run(id);
  }
  exportar();
  emitir({ evento: 'estado', proyecto: id });
  if (seguir) setTimeout(() => continuar(id), 300);
}

// ---------- Vista previa del sitio ----------
const vistas = new Map();
function vistaPrevia(p) {
  const sitio = path.join(RAIZ, 'proyectos', p.carpeta, 'sitio');
  if (!fs.existsSync(path.join(sitio, 'package.json'))) throw new Error('Este proyecto todavía no tiene sitio (fase 4).');
  if (vistas.has(p.id)) return vistas.get(p.id).url;
  const puerto = 5200 + p.id;
  const modo = fs.existsSync(path.join(sitio, 'dist', 'index.html')) ? ['vite', 'preview'] : ['vite'];
  const hijo = spawn(ES_WIN ? 'npx.cmd' : 'npx', [...modo, '--port', String(puerto), '--strictPort'], { cwd: sitio, shell: ES_WIN, stdio: 'ignore' });
  const url = `http://localhost:${puerto}/`;
  vistas.set(p.id, { hijo, url });
  hijo.on('close', () => vistas.delete(p.id));
  return url;
}

// ---------- Archivos del proyecto ----------
function archivosDe(p) {
  const base = path.join(RAIZ, 'proyectos', p.carpeta);
  const existe = (r) => fs.existsSync(path.join(base, r));
  const lista = (dir, rx) => (existe(dir) ? fs.readdirSync(path.join(base, dir)).filter((f) => rx.test(f)).sort().map((f) => `${dir}/${f}`) : []);
  const docs = ['PROYECTO.md', 'contenido/contenido.md', ...lista('entregables', /\.md$/), 'qa/reporte.md'].filter(existe);
  const imagenes = [...lista('referencias', /\.(png|jpe?g|webp)$/i), ...lista('qa', /-inicio\.png$/), ...lista('entregables', /\.(png|jpe?g)$/i)];
  const assets = existe('assets') ? (function contar(d) { return fs.readdirSync(d, { withFileTypes: true }).reduce((s, e) => s + (e.isDirectory() ? contar(path.join(d, e.name)) : 1), 0); })(path.join(base, 'assets')) : 0;
  return { docs, imagenes, assets, sitio: existe('sitio/package.json'), dist: existe('sitio/dist/index.html') };
}

// ---------- HTTP ----------
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.md': 'text/plain; charset=utf-8', '.json': 'application/json; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };
const json = (res, codigo, dato) => { res.writeHead(codigo, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(dato)); };
const cuerpo = (req) => new Promise((ok) => { let b = ''; req.on('data', (c) => (b += c)); req.on('end', () => { try { ok(b ? JSON.parse(b) : {}); } catch { ok({}); } }); });

function estadoCompleto(p) {
  const fases = fasesDe(p.id).map((f) => ({ ...f, ...FASES[f.numero], estado: f.estado }));
  return { ...p, fases, archivos: archivosDe(p), vista: vistas.get(p.id)?.url || null, ejecutando: ejecucion?.proyectoId === p.id ? ejecucion.fase : null };
}

const servidor = http.createServer(async (req, res) => {
  const u = new URL(req.url, `http://${req.headers.host}`);
  const partes = u.pathname.split('/').filter(Boolean);
  try {
    if (u.pathname === '/' || u.pathname === '/index.html') {
      res.writeHead(200, { 'Content-Type': TIPOS['.html'] });
      return res.end(fs.readFileSync(path.join(RAIZ, 'panel', 'public', 'index.html')));
    }
    if (u.pathname === '/api/eventos') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
      res.write('retry: 2000\n\n');
      clientes.add(res);
      const latido = setInterval(() => res.write(': ok\n\n'), 25000);
      req.on('close', () => { clearInterval(latido); clientes.delete(res); });
      return;
    }
    if (u.pathname === '/api/estado') {
      return json(res, 200, { claude: resolverClaude(), ejecucion: ejecucion ? { proyecto: ejecucion.proyectoId, fase: ejecucion.fase } : null, raiz: RAIZ });
    }
    if (u.pathname === '/api/proyectos' && req.method === 'GET') {
      const lista = db.prepare('SELECT * FROM proyectos ORDER BY COALESCE(numero, 999), id').all().map((p) => {
        const fases = fasesDe(p.id);
        return { id: p.id, numero: p.numero, carpeta: p.carpeta, nombre: p.nombre, url: p.url_origen, hechas: fases.filter((f) => f.estado === 'hecha').length, total: FASES.filter((f) => f.tipo !== 'proximamente').length, esperando: fases.some((f) => f.estado === 'esperando'), error: fases.some((f) => f.estado === 'error'), corriendo: ejecucion?.proyectoId === p.id };
      });
      return json(res, 200, lista);
    }
    if (u.pathname === '/api/proyectos' && req.method === 'POST') {
      const b = await cuerpo(req);
      if (!b.url) return json(res, 400, { error: 'Falta la URL.' });
      let p; try { p = crearProyecto(b.url, b.nombre); } catch (e) { return json(res, 400, { error: 'URL no válida: ' + e.message }); }
      emitir({ evento: 'estado', proyecto: p.id });
      if (b.iniciar) setTimeout(() => continuar(p.id), 300);
      return json(res, 201, estadoCompleto(p));
    }
    if (partes[0] === 'api' && partes[1] === 'proyectos' && partes[2]) {
      const p = proyectoPorId(Number(partes[2]));
      if (!p) return json(res, 404, { error: 'No existe el proyecto.' });
      const accion = partes[3];
      if (!accion) return json(res, 200, estadoCompleto(p));
      if (accion === 'actividad') return json(res, 200, leerActividad(p));
      if (req.method !== 'POST') return json(res, 405, { error: 'Método no permitido' });
      const b = await cuerpo(req);
      try {
        if (accion === 'todo') { if (!continuar(p.id)) return json(res, 409, { error: ejecucion ? 'Ya hay una fase en curso.' : 'No hay fases pendientes (o hay una esperando aprobación).' }); }
        else if (accion === 'fase') ejecutarFase(p, Number(b.fase), { modo: b.seguir ? 'todo' : 'una' });
        else if (accion === 'aprobar') aprobar(p.id, Number(b.fase), !!b.seguir);
        else if (accion === 'cambios') { if (!b.comentario?.trim()) return json(res, 400, { error: 'Escribe qué quieres cambiar.' }); ejecutarFase(p, Number(b.fase), { comentarios: b.comentario.trim(), modo: 'una' }); }
        else if (accion === 'detener') detener();
        else if (accion === 'vista') return json(res, 200, { url: vistaPrevia(p) });
        else if (accion === 'abrir-carpeta') { spawn(ES_WIN ? 'explorer' : 'xdg-open', [path.join(RAIZ, 'proyectos', p.carpeta)], { detached: true, stdio: 'ignore' }).unref(); }
        else return json(res, 404, { error: 'Acción desconocida' });
      } catch (e) { return json(res, 409, { error: e.message }); }
      return json(res, 200, estadoCompleto(proyectoPorId(p.id)));
    }
    if (partes[0] === 'f' && partes[1]) {
      // Archivos dentro de proyectos/<carpeta>/ (solo lectura)
      const ruta = path.resolve(RAIZ, 'proyectos', ...partes.slice(1).map(decodeURIComponent));
      if (!ruta.startsWith(path.join(RAIZ, 'proyectos') + path.sep) || !fs.existsSync(ruta) || fs.statSync(ruta).isDirectory()) { res.writeHead(404); return res.end('No encontrado'); }
      res.writeHead(200, { 'Content-Type': TIPOS[path.extname(ruta).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      return fs.createReadStream(ruta).pipe(res);
    }
    res.writeHead(404); res.end('No encontrado');
  } catch (e) {
    console.error(e);
    json(res, 500, { error: e.message });
  }
});

servidor.listen(PUERTO, '127.0.0.1', () => {
  const url = `http://localhost:${PUERTO}`;
  console.log(`\n  Panel del Estudio Web: ${url}\n  Raíz: ${RAIZ}\n  Claude Code: ${resolverClaude() || 'NO ENCONTRADO (npm install -g @anthropic-ai/claude-code)'}\n\n  Deja esta ventana abierta mientras usas el panel. Ctrl+C para cerrar.\n`);
  if (ES_WIN && !process.env.PANEL_SIN_NAVEGADOR) spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore' }).unref();
});
process.on('SIGINT', () => { detener(); for (const v of vistas.values()) { try { ES_WIN ? spawn('taskkill', ['/pid', String(v.hijo.pid), '/t', '/f']) : v.hijo.kill(); } catch {} } process.exit(0); });
