#!/usr/bin/env node
// Método 1.1 — Prepara proyectos/<carpeta>/rediseno/ a partir de plantillas/rediseno-1.1/.
//
// Uso:  node herramientas/nuevo-rediseno.mjs <carpeta> [--public <ruta relativa a rediseno/>] [--nombre "Nombre"]
//   p. ej.  node herramientas/nuevo-rediseno.mjs 540-hotelpomelo
//
// Qué hace:
//   1. Busca en sitio/assets la carpeta con más imágenes y la usa como publicDir (o la que pases con --public).
//   2. Copia la plantilla a rediseno/ reemplazando {{NOMBRE}}, {{CARPETA}}, {{SLUG}}, {{PUBLICDIR}}.
//   3. Crea CAMBIOS.md, OPORTUNIDADES.md y entregables/plan-diseno.md si no existen.
//   4. Escribe rediseno/IMAGENES.txt con la lista de imágenes disponibles (ruta + medidas si se pueden leer).
// Nunca sobrescribe archivos que ya existan.
// Después: cd proyectos/<carpeta>/rediseno && npm install
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const carpeta = args[0];
const opt = (n) => { const i = args.indexOf(n); return i > -1 ? args[i + 1] : undefined; };
if (!carpeta) { console.error('Uso: node herramientas/nuevo-rediseno.mjs <carpeta> [--public ../sitio/assets] [--nombre "Nombre"]'); process.exit(1); }
const dirP = path.join(RAIZ, 'proyectos', carpeta);
if (!fs.existsSync(path.join(dirP, 'sitio'))) { console.error(`No existe proyectos/${carpeta}/sitio (el clon del método 3). Para sitios sin clon usa el método 1.2.`); process.exit(1); }

const IMG = /\.(webp|jpe?g|png|avif|gif|svg)$/i;
function listar(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) listar(p, base, out);
    else if (IMG.test(e.name)) out.push({ ruta: path.relative(base, p).split(path.sep).join('/'), bytes: fs.statSync(p).size });
  }
  return out;
}

// 1. publicDir: la carpeta de sitio/assets que más imágenes contiene (a cualquier profundidad).
let publicDir = opt('--public');
if (!publicDir) {
  const raizAssets = path.join(dirP, 'sitio', 'assets');
  const conteo = new Map();
  for (const f of listar(raizAssets)) {
    const partes = f.ruta.split('/');
    // cuenta la imagen en cada carpeta ancestro, para elegir la más específica que concentra la mayoría
    for (let i = 0; i < partes.length; i++) { const k = partes.slice(0, i).join('/'); conteo.set(k, (conteo.get(k) || 0) + 1); }
  }
  const total = conteo.get('') || 0;
  let elegida = '';
  for (const [k, n] of conteo) if (n >= total * 0.8 && k.length > elegida.length) elegida = k;
  publicDir = '../sitio/assets' + (elegida ? '/' + elegida : '');
  console.log(`publicDir detectado: ${publicDir}  (${conteo.get(elegida) || 0} de ${total} imágenes)`);
}
const dirPublic = path.resolve(dirP, 'rediseno', publicDir);

// Nombre del negocio: --nombre, o resumen.json, o la carpeta.
let nombre = opt('--nombre'), web = '[PENDIENTE]';
try { const r = JSON.parse(fs.readFileSync(path.join(dirP, 'investigacion', 'resumen.json'), 'utf8')); nombre ||= r.nombre; web = r.sitio || web; } catch {}
nombre ||= carpeta.replace(/^\d+-/, '');
const slug = carpeta.replace(/^\d+-/, '');
const vars = {
  NOMBRE: nombre, CARPETA: carpeta, SLUG: slug, PUBLICDIR: publicDir, WEB: web,
  FECHA: new Date().toISOString().slice(0, 10),
  PUBLICDIR_REL: path.relative(dirP, dirPublic).split(path.sep).join('/') + '/',
};
const sustituir = (t) => t.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in vars ? vars[k] : m));

// 2 y 3. Copiar plantilla sin sobrescribir.
const PLANT = path.join(RAIZ, 'plantillas', 'rediseno-1.1');
const destinos = {
  'CAMBIOS.md': path.join(dirP, 'CAMBIOS.md'),
  'OPORTUNIDADES.md': path.join(dirP, 'OPORTUNIDADES.md'),
  'plan-diseno.md': path.join(dirP, 'entregables', 'plan-diseno.md'),
  'gitignore.txt': path.join(dirP, 'rediseno', '.gitignore'),
};
const creados = [], existentes = [];
function copiar(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const src = path.join(dir, e.name);
    if (e.isDirectory()) { copiar(src); continue; }
    const rel = path.relative(PLANT, src);
    const dst = destinos[rel] || path.join(dirP, 'rediseno', rel);
    if (fs.existsSync(dst)) { existentes.push(path.relative(dirP, dst)); continue; }
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, sustituir(fs.readFileSync(src, 'utf8')));
    creados.push(path.relative(dirP, dst));
  }
}
copiar(PLANT);

// 4. Inventario de imágenes.
let lista = listar(dirPublic);
try {
  const sharp = (await import('sharp')).default;
  for (const f of lista) {
    try { const m = await sharp(path.join(dirPublic, f.ruta)).metadata(); f.medidas = `${m.width}x${m.height}`; } catch {}
  }
} catch {}
lista.sort((a, b) => b.bytes - a.bytes);
fs.writeFileSync(path.join(dirP, 'rediseno', 'IMAGENES.txt'),
  `# Imágenes disponibles en publicDir (${publicDir}), de mayor a menor peso.\n# En el código: \`\${import.meta.env.BASE_URL}<ruta>\`\n` +
  lista.map((f) => `${f.ruta}\t${f.medidas || '?'}\t${Math.round(f.bytes / 1024)} KB`).join('\n') + '\n');

console.log(`\nNegocio: ${nombre}\nCreados (${creados.length}):\n  ${creados.join('\n  ')}`);
if (existentes.length) console.log(`Ya existían (no se tocaron):\n  ${existentes.join('\n  ')}`);
console.log(`Imágenes disponibles: ${lista.length} (ver rediseno/IMAGENES.txt)`);
console.log(`\nSiguiente:\n  cd proyectos/${carpeta}/rediseno\n  npm install\n  (escribe el plan y el sitio)\n  npm run build\n  cd ../../.. && node herramientas/qa-rediseno.mjs ${carpeta}`);
