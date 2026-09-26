#!/usr/bin/env node
/**
 * fabricador.mjs — Orquestador de fabricación masiva de sitios.
 *
 * Comandos:
 *   node herramientas/fabricador.mjs init              Carga los ~1,173 bots de la API a fabricador.db
 *   node herramientas/fabricador.mjs estado            Muestra el progreso actual
 *   node herramientas/fabricador.mjs scrape            Scrapea bots pendientes (reanudable)
 *     --plantillas                                     Solo uno por grupo de plantilla (primero)
 *     --rubro FITNESS                                  Solo ese rubro
 *     --max 10                                         Máximo N bots en esta ejecución
 *
 * La base de datos (datos/fabricador.db) persiste entre sesiones y cuentas de Claude.
 */
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const RAIZ    = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DB_PATH = path.join(RAIZ, 'datos', 'fabricador.db');
const API     = 'http://localhost/16092026-chats/admin/bots_data.php';
const JINA    = 'https://r.jina.ai/';

// ── Asignación rubro → plantilla ────────────────────────────────────────────
const PLANTILLA_POR_RUBRO = {
  SALUD: 'salud-bienestar', SPA: 'salud-bienestar', ESTETICA: 'salud-bienestar',
  VETERINARIA: 'salud-bienestar', MASCOTAS: 'salud-bienestar',
  TURISMO: 'turismo-aventura', EVENTOS: 'turismo-aventura',
  HOSPEDAJE: 'hospedaje',
  GASTRONOMIA: 'restaurante-bar',
  FITNESS: 'fitness-gym',
  INMUEBLES: 'inmobiliaria',
  EDUCACION: 'educacion',
  RETAIL: 'negocio-local', SERVICIOS: 'negocio-local', AUTOMOTRIZ: 'negocio-local',
  LEGAL: 'negocio-local', FINANZAS: 'negocio-local', '': 'negocio-local',
};

const TERCEROS = ['easybroker.com','terappio.com','tripadvisor.','airbnb.','booking.com',
  'facebook.com','instagram.com','yelp.com','opentable.com','google.com',
  'maps.app','goo.gl','airbnb.mx'];

// ── Base de datos ────────────────────────────────────────────────────────────
function abrirDB() {
  const db = new DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS sitios (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      slug        TEXT UNIQUE NOT NULL,
      nombre      TEXT,
      rubro       TEXT,
      ciudad      TEXT,
      web         TEXT,
      web_home    TEXT,
      plantilla   TEXT,
      numero      INTEGER,
      carpeta     TEXT,
      estado      TEXT DEFAULT 'pendiente',
      es_plantilla INTEGER DEFAULT 0,
      error       TEXT,
      paginas_scrapeadas INTEGER DEFAULT 0,
      imagenes_encontradas INTEGER DEFAULT 0,
      creado      TEXT DEFAULT (datetime('now')),
      actualizado TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS eventos (
      id     INTEGER PRIMARY KEY AUTOINCREMENT,
      slug   TEXT,
      tipo   TEXT,
      detalle TEXT,
      ts     TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_estado    ON sitios(estado);
    CREATE INDEX IF NOT EXISTS idx_plantilla ON sitios(plantilla);
    CREATE INDEX IF NOT EXISTS idx_rubro     ON sitios(rubro);
  `);
  return db;
}

function urlHome(web) {
  if (!web) return null;
  try {
    const u = new URL(web);
    const esTercero = TERCEROS.some(t => u.host.includes(t));
    return esTercero ? web : (u.origin + '/');
  } catch { return null; }
}

function log(slug, tipo, detalle, db) {
  db.prepare('INSERT INTO eventos(slug,tipo,detalle) VALUES(?,?,?)').run(slug, tipo, detalle);
}

// ── COMANDO: init ────────────────────────────────────────────────────────────
async function cmdInit() {
  const db = abrirDB();
  const existentes = db.prepare('SELECT COUNT(*) as n FROM sitios').get().n;
  if (existentes > 0) {
    console.log(`Base de datos ya tiene ${existentes} registros.`);
    console.log('Para reiniciar desde cero borra datos/fabricador.db y vuelve a correr init.');
    return;
  }

  console.log('Cargando bots desde la API...');
  let pagina = 1, total = 0;
  const insert = db.prepare(`
    INSERT OR IGNORE INTO sitios(slug,nombre,rubro,ciudad,web,web_home,plantilla,estado,es_plantilla)
    VALUES(?,?,?,?,?,?,?,?,?)
  `);

  // Primero recopilamos todo para asignar números correlativos
  const todos = [];
  do {
    const r = await fetch(`${API}?per=200&page=${pagina}&sort=nombre&dir=asc`).then(r => r.json());
    if (!r.rows?.length) break;
    for (const b of r.rows) {
      const home = urlHome(b.web);
      const plantilla = PLANTILLA_POR_RUBRO[b.rubro || ''] || 'negocio-local';
      todos.push({ slug: b.slug, nombre: b.nombre, rubro: b.rubro || '', ciudad: b.ciudad || '',
        web: b.web || '', home, plantilla });
    }
    total += r.rows.length;
    process.stdout.write(`\r  Descargando... ${total}`);
    pagina++;
  } while (true);
  console.log(`\n  Total: ${total} bots`);

  // Marcar el primero de cada plantilla como "es_plantilla"
  const primeroPorPlantilla = new Set();
  const plantillasUnicas = [...new Set(Object.values(PLANTILLA_POR_RUBRO))];
  for (const p of plantillasUnicas) {
    const primero = todos.find(b => b.plantilla === p && b.home);
    if (primero) primeroPorPlantilla.add(primero.slug);
  }

  // Insertar todos con número correlativo (01 ya existe, empezamos en 02)
  let numero = 2;
  for (const b of todos) {
    if (!b.home) {
      insert.run(b.slug, b.nombre, b.rubro, b.ciudad, b.web, null, b.plantilla, 'omitido', 0);
    } else {
      const esPl = primeroPorPlantilla.has(b.slug) ? 1 : 0;
      insert.run(b.slug, b.nombre, b.rubro, b.ciudad, b.web, b.home, b.plantilla, 'pendiente', esPl);
      db.prepare('UPDATE sitios SET numero=?, carpeta=? WHERE slug=?')
        .run(numero, `${String(numero).padStart(2,'0')}-${b.slug}`, b.slug);
      numero++;
    }
  }

  const stats = db.prepare(`
    SELECT estado, COUNT(*) n FROM sitios GROUP BY estado
  `).all();
  console.log('\nEstado inicial:');
  for (const s of stats) console.log(`  ${s.estado.padEnd(12)} ${s.n}`);

  const plantillas = db.prepare(`
    SELECT plantilla, slug, nombre, rubro FROM sitios WHERE es_plantilla=1 ORDER BY plantilla
  `).all();
  console.log('\nSitios marcados como plantilla (primero de cada grupo):');
  for (const p of plantillas) console.log(`  ${p.plantilla.padEnd(20)} ${p.slug.padEnd(25)} ${p.rubro}`);
  console.log('\nListo. Corre:  node herramientas/fabricador.mjs scrape --plantillas');
}

// ── COMANDO: estado ──────────────────────────────────────────────────────────
function cmdEstado() {
  const db = abrirDB();
  const total = db.prepare('SELECT COUNT(*) n FROM sitios').get().n;
  if (!total) { console.log('BD vacía. Corre primero: node herramientas/fabricador.mjs init'); return; }

  console.log(`\n── FABRICADOR — ${new Date().toLocaleString('es-MX')} ──`);
  const estados = db.prepare('SELECT estado, COUNT(*) n FROM sitios GROUP BY estado ORDER BY n DESC').all();
  for (const e of estados) {
    const bar = '█'.repeat(Math.round(e.n / total * 30));
    console.log(`  ${e.estado.padEnd(12)} ${String(e.n).padStart(5)}  ${bar}`);
  }
  console.log(`  ${'TOTAL'.padEnd(12)} ${String(total).padStart(5)}`);

  const porPlantilla = db.prepare(`
    SELECT plantilla, COUNT(*) total,
      SUM(CASE WHEN estado='scrapeado' OR estado='construido' OR estado='aprobado' THEN 1 ELSE 0 END) listos
    FROM sitios WHERE estado != 'omitido' GROUP BY plantilla ORDER BY total DESC
  `).all();
  console.log('\n── Por plantilla ──');
  for (const p of porPlantilla) {
    const pct = Math.round(p.listos / p.total * 100);
    console.log(`  ${p.plantilla.padEnd(22)} ${String(p.listos).padStart(4)}/${p.total} (${pct}%)`);
  }

  const recientes = db.prepare(`
    SELECT slug, nombre, estado, rubro FROM sitios
    WHERE estado NOT IN ('pendiente','omitido') ORDER BY actualizado DESC LIMIT 8
  `).all();
  if (recientes.length) {
    console.log('\n── Procesados recientemente ──');
    for (const r of recientes) console.log(`  [${r.estado.padEnd(10)}] ${r.slug.padEnd(30)} ${r.rubro}`);
  }
  console.log('');
}

// ── SCRAPING con Jina ────────────────────────────────────────────────────────
async function jinaGet(url) {
  const res = await fetch(`${JINA}${url}`, {
    headers: { 'Accept': 'application/json', 'X-Return-Format': 'markdown',
      'X-With-Images-Summary': 'true', 'X-With-Links-Summary': 'true' },
    signal: AbortSignal.timeout(40000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const j = await res.json();
  return j.data || j;
}

function extraerImagenes(jinaData) {
  const imgs = new Map();
  if (jinaData.images && typeof jinaData.images === 'object') {
    for (const [src, alt] of Object.entries(jinaData.images)) {
      try { new URL(src); imgs.set(src, { src, alt: typeof alt === 'string' ? alt : '' }); } catch {}
    }
  }
  for (const [, alt, src] of (jinaData.content || '').matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
    try { const u = new URL(src, jinaData.url || '').href; if (!imgs.has(u)) imgs.set(u, { src: u, alt }); } catch {}
  }
  return [...imgs.values()].filter(i => !/\.svg(\?|$)/i.test(i.src));
}

function extraerSubpaginas(jinaData, host, max = 4) {
  if (!jinaData.links || typeof jinaData.links !== 'object') return [];
  const omitir = /(cart|carrito|checkout|login|account|cuenta|wp-admin|feed|#)/i;
  const ext    = /\.(pdf|jpe?g|png|zip|mp4)$/i;
  const vistos = new Set([jinaData.url]);
  const result = [];
  for (const href of Object.values(jinaData.links)) {
    try {
      const u = new URL(href, jinaData.url);
      const limpio = u.origin + u.pathname;
      if (u.host !== host || vistos.has(limpio) || omitir.test(u.pathname) || ext.test(u.pathname)) continue;
      vistos.add(limpio);
      result.push(limpio);
      if (result.length >= max) break;
    } catch {}
  }
  return result;
}

async function scrapeBot(bot, dirProy) {
  const dirInv = path.join(dirProy, 'investigacion');
  fs.mkdirSync(dirInv, { recursive: true });

  // HTML original (código fuente completo)
  try {
    const htmlRes = await fetch(bot.web_home, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130' },
      signal: AbortSignal.timeout(20000),
    });
    if (htmlRes.ok) {
      const htmlText = await htmlRes.text();
      const ts = new Date().toLocaleString('es-MX', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
      });
      const encabezado = `<!--\n  Sitio: ${bot.web_home}\n  Descargado: ${ts}\n  Slug: ${bot.slug}\n-->\n`;
      fs.writeFileSync(path.join(dirInv, 'original.html'), encabezado + htmlText, 'utf8');
    }
  } catch { /* si falla el HTML directo, Jina igual guarda el contenido */ }

  const host = new URL(bot.web_home).host;
  const paginas = [];

  // Página principal (Jina)
  const home = await jinaGet(bot.web_home);
  paginas.push({ url: home.url || bot.web_home, titulo: home.title || '',
    descripcion: home.description || '', contenido: home.content || '',
    imagenes: extraerImagenes(home) });

  // Subpáginas (hasta 4)
  const subs = extraerSubpaginas(home, host);
  for (const sub of subs) {
    await new Promise(r => setTimeout(r, 2000)); // respetar Jina
    try {
      const d = await jinaGet(sub);
      paginas.push({ url: d.url || sub, titulo: d.title || '',
        descripcion: d.description || '', contenido: d.content || '',
        imagenes: extraerImagenes(d) });
    } catch (e) { /* subpágina fallida, continuar */ }
  }

  // Consolidar imágenes únicas
  const imgs = new Map();
  for (const p of paginas) for (const i of p.imagenes) if (!imgs.has(i.src)) imgs.set(i.src, i);

  // Contacto básico
  const todo = paginas.map(p => p.contenido).join('\n');
  const telefonos = [...new Set((todo.match(/\+?\d[\d\s\-().]{7,}\d/g) || []).filter(t => t.replace(/\D/g,'').length >= 7))];
  const emails    = [...new Set(todo.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g) || [])];
  const whatsapp  = [...new Set(todo.match(/wa\.me\/\S+|whatsapp\.com\/\S+/g) || [])];
  const redes     = [...new Set(todo.match(/https?:\/\/(www\.)?(facebook|instagram|tiktok|youtube|twitter|x\.com|linkedin)\.[^\s)>"]+/g) || [])];

  const resumen = {
    sitio: bot.web_home, fecha: new Date().toISOString(), motor: 'jina-reader',
    slug: bot.slug, nombre: bot.nombre, rubro: bot.rubro, ciudad: bot.ciudad,
    plantilla: bot.plantilla,
    paginasRevisadas: paginas.map(p => ({ url: p.url, titulo: p.titulo })),
    contacto: { telefonos, emails, whatsapp, redes },
    imagenes: [...imgs.values()],
  };

  fs.writeFileSync(path.join(dirInv, 'crudo.json'),  JSON.stringify(paginas, null, 2));
  fs.writeFileSync(path.join(dirInv, 'resumen.json'), JSON.stringify(resumen, null, 2));

  // Borrador assets.json
  const borrador = {
    base: '', destino: 'assets', nota: 'Borrador automático — fabricador.mjs',
    assets: resumen.imagenes.map(i => {
      let archivo = decodeURIComponent(path.basename(new URL(i.src).pathname)) || 'imagen';
      return { carpeta: 'secciones', url: i.src, archivo: archivo.replace(/[^\w.\-]/g,'_'), alt: i.alt || '' };
    }),
  };
  fs.writeFileSync(path.join(dirProy, 'assets.json'), JSON.stringify(borrador, null, 2));

  return { paginas: paginas.length, imagenes: imgs.size };
}

// ── COMANDO: scrape ──────────────────────────────────────────────────────────
async function cmdScrape(args) {
  const soloPlantillas = args.includes('--plantillas');
  const maxIdx   = args.indexOf('--max');
  const max      = maxIdx >= 0 ? parseInt(args[maxIdx + 1]) : Infinity;
  const rubroIdx = args.indexOf('--rubro');
  const rubroFiltro = rubroIdx >= 0 ? args[rubroIdx + 1].toUpperCase() : null;

  const db = abrirDB();
  const total = db.prepare('SELECT COUNT(*) n FROM sitios').get().n;
  if (!total) { console.log('BD vacía. Corre primero: init'); return; }

  let query = `SELECT * FROM sitios WHERE estado='pendiente' AND web_home IS NOT NULL`;
  if (soloPlantillas) query += ` AND es_plantilla=1`;
  if (rubroFiltro)    query += ` AND rubro='${rubroFiltro}'`;
  query += ` ORDER BY es_plantilla DESC, id ASC`;

  const pendientes = db.prepare(query).all();
  const aLimpiar = pendientes.slice(0, max);
  console.log(`Scrapeando ${aLimpiar.length} sitio(s)${soloPlantillas ? ' (modo plantillas)' : ''}...\n`);

  let ok = 0, errores = 0;
  for (const bot of aLimpiar) {
    process.stdout.write(`  [${String(bot.numero).padStart(4,'0')}] ${bot.slug.padEnd(35)}`);
    const dirProy = path.join(RAIZ, 'proyectos', bot.carpeta);
    fs.mkdirSync(path.join(dirProy, 'assets'), { recursive: true });
    fs.mkdirSync(path.join(dirProy, 'referencias'), { recursive: true });
    fs.mkdirSync(path.join(dirProy, 'contenido'), { recursive: true });
    fs.mkdirSync(path.join(dirProy, 'entregables'), { recursive: true });

    db.prepare(`UPDATE sitios SET estado='scrapeando', actualizado=datetime('now') WHERE slug=?`).run(bot.slug);

    try {
      await new Promise(r => setTimeout(r, 1500));
      const res = await scrapeBot(bot, dirProy);
      db.prepare(`UPDATE sitios SET estado='scrapeado', paginas_scrapeadas=?, imagenes_encontradas=?, error=NULL, actualizado=datetime('now') WHERE slug=?`)
        .run(res.paginas, res.imagenes, bot.slug);
      log(bot.slug, 'scrape_ok', `${res.paginas} págs, ${res.imagenes} imgs`, db);
      console.log(`✓  ${res.paginas}p ${res.imagenes}i`);
      ok++;
    } catch (e) {
      db.prepare(`UPDATE sitios SET estado='error', error=?, actualizado=datetime('now') WHERE slug=?`)
        .run(e.message.slice(0, 200), bot.slug);
      log(bot.slug, 'scrape_error', e.message.slice(0, 200), db);
      console.log(`✗  ${e.message.slice(0, 60)}`);
      errores++;
    }
  }

  console.log(`\n── Resultado ──`);
  console.log(`  OK:      ${ok}`);
  console.log(`  Errores: ${errores}`);
  const pendientesRestantes = db.prepare(`SELECT COUNT(*) n FROM sitios WHERE estado='pendiente' AND web_home IS NOT NULL`).get().n;
  console.log(`  Pendientes restantes: ${pendientesRestantes}`);
  console.log('\nCorre "estado" para ver el progreso completo.');
}

// ── Dispatcher ───────────────────────────────────────────────────────────────
const [,, cmd, ...args] = process.argv;
switch (cmd) {
  case 'init':   await cmdInit();        break;
  case 'estado': cmdEstado();            break;
  case 'scrape': await cmdScrape(args);  break;
  default:
    console.log('Uso: node herramientas/fabricador.mjs <init|estado|scrape> [opciones]');
    console.log('  init                       Carga bots de la API a la BD');
    console.log('  estado                     Muestra el progreso');
    console.log('  scrape [--plantillas]      Scrapea pendientes');
    console.log('         [--rubro FITNESS]   Solo ese rubro');
    console.log('         [--max 10]          Máximo N sitios');
}
