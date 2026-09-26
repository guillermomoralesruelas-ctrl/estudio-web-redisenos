#!/usr/bin/env node
/**
 * clonar.mjs — Descarga un sitio y lo recrea localmente, idéntico al original.
 * Uso: node herramientas/clonar.mjs <slug>
 *
 * Resultado: proyectos/<carpeta>/sitio/
 *   index.html   — HTML limpio con rutas relativas
 *   assets/      — CSS, imágenes y SVGs del sitio original
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DB   = path.join(RAIZ, 'datos', 'fabricador.db');

const slug = process.argv[2];
if (!slug) { console.error('Uso: node herramientas/clonar.mjs <slug>'); process.exit(1); }

// ── Leer datos del bot ───────────────────────────────────────────────────────
const db  = new DatabaseSync(DB);
const bot = db.prepare('SELECT * FROM sitios WHERE slug=?').get(slug);
if (!bot) { console.error(`No encontré "${slug}" en fabricador.db`); process.exit(1); }
const base   = bot.web_home;
const dirSitio = path.join(RAIZ, 'proyectos', bot.carpeta, 'sitio');
const dirAssets = path.join(dirSitio, 'assets');
fs.mkdirSync(dirAssets, { recursive: true });

const log = (...a) => console.log('[clonar]', ...a);

// ── Descargar con reintentos ─────────────────────────────────────────────────
async function descargar(url, reintentos = 3) {
  for (let i = 0; i < reintentos; i++) {
    try {
      const r = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130' },
        signal: AbortSignal.timeout(20000),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r;
    } catch (e) {
      if (i === reintentos - 1) throw e;
      await new Promise(r => setTimeout(r, 1500));
    }
  }
}

async function descargarArchivo(url, destino) {
  const r = await descargar(url);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, buf);
  return buf.length;
}

// ── Extraer todas las URLs de assets de un texto ─────────────────────────────
function extraerUrls(texto, baseUrl) {
  const absoluta = (u) => {
    if (!u || u.startsWith('data:') || u.startsWith('//') === false && u.startsWith('http')) {
      try { return new URL(u, baseUrl).href; } catch { return null; }
    }
    if (u.startsWith('//')) return 'https:' + u;
    try { return new URL(u, baseUrl).href; } catch { return null; }
  };

  const urls = new Set();
  // src="..." href="..." url('...')
  for (const [, u] of texto.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
    const a = absoluta(u);
    if (a && /\.(webp|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot)(\?|$)/i.test(a)) urls.add(a);
  }
  for (const [, u] of texto.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)) {
    const a = absoluta(u);
    if (a && !a.startsWith('data:')) urls.add(a);
  }
  return [...urls];
}

// Ruta relativa dentro de assets/ manteniendo subrutas (ej. pay/visa.svg)
function rutaLocal(url, baseUrl) {
  try {
    const base = new URL(baseUrl);
    const u    = new URL(url);
    if (u.host !== base.host) {
      // Recurso externo (ej. Google Fonts): incluir host en carpeta
      return path.join('externo', u.host, u.pathname.replace(/^\//, ''));
    }
    // Mismo dominio: usar la ruta sin la barra inicial
    return u.pathname.replace(/^\//, '');
  } catch { return path.basename(url); }
}

// ── 1. Descargar HTML fresco (Node fetch → UTF-8 correcto) ───────────────────
log('Descargando HTML de', base);
const htmlRes  = await descargar(base);
const htmlOrig = await htmlRes.text();

// ── 2. Encontrar CSS del sitio ───────────────────────────────────────────────
const cssUrls = [];
for (const [, u] of htmlOrig.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/g)) {
  try { cssUrls.push(new URL(u, base).href); } catch {}
}
for (const [, u] of htmlOrig.matchAll(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']stylesheet["']/g)) {
  try { cssUrls.push(new URL(u, base).href); } catch {}
}
log(`CSS encontrado: ${cssUrls.length} archivo(s)`);

// ── 3. Descargar CSS y extraer sus assets ────────────────────────────────────
let cssCombinadoAssets = [];
for (const cssUrl of cssUrls) {
  try {
    const cssRes  = await descargar(cssUrl);
    const cssText = await cssRes.text();
    const local   = rutaLocal(cssUrl, base);
    const dest    = path.join(dirAssets, local);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, cssText, 'utf8');
    log(`CSS  OK  ${local}`);
    // Assets referenciados en el CSS
    cssCombinadoAssets.push(...extraerUrls(cssText, cssUrl));
  } catch (e) { log(`CSS  ✗  ${cssUrl} — ${e.message}`); }
}

// ── 4. Descargar todas las imágenes y otros assets ───────────────────────────
const htmlAssets = extraerUrls(htmlOrig, base);
const todos = [...new Set([...htmlAssets, ...cssCombinadoAssets])]
  .filter(u => { try { return new URL(u).host === new URL(base).host; } catch { return false; } });

log(`Assets a descargar: ${todos.length}`);
let ok = 0, fail = 0;
for (const url of todos) {
  const local = rutaLocal(url, base);
  const dest  = path.join(dirAssets, local);
  if (fs.existsSync(dest)) { ok++; continue; }
  try {
    const bytes = await descargarArchivo(url, dest);
    process.stdout.write(`  OK  ${local} (${(bytes/1024).toFixed(1)}kb)\n`);
    ok++;
    await new Promise(r => setTimeout(r, 200));
  } catch (e) {
    process.stdout.write(`  ✗   ${local} — ${e.message}\n`);
    fail++;
  }
}
log(`Assets: ${ok} OK, ${fail} fallaron`);

// ── 5. Guardar HTML original con timestamp ───────────────────────────────────
const ahora = new Date();
const ts = ahora.toLocaleString('es-MX', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
});
const encabezado = `<!--\n  Sitio: ${base}\n  Descargado: ${ts}\n  Slug: ${slug}\n-->\n`;
const dirInv = path.join(RAIZ, 'proyectos', bot.carpeta, 'investigacion');
fs.mkdirSync(dirInv, { recursive: true });
fs.writeFileSync(path.join(dirInv, 'original.html'), encabezado + htmlOrig, 'utf8');
log(`Original guardado: investigacion/original.html`);

// ── 6. Reescribir HTML con rutas relativas ───────────────────────────────────
let html = htmlOrig;

// Reemplazar rutas absolutas → relativas a assets/
const reemplazos = [...new Set([...htmlAssets, ...cssUrls])];
for (const url of reemplazos) {
  try {
    const u     = new URL(url);
    const local = rutaLocal(url, base);
    // Formas en que puede aparecer: /ruta , https://dominio/ruta
    const patrones = [
      u.pathname,                          // /assets/logo.png
      url,                                 // https://www.1mrfitness.com/assets/logo.png
    ];
    for (const p of patrones) {
      html = html.split(p).join(`assets/${local}`);
    }
  } catch {}
}

// Quitar la versión del CSS (?v=xxxx) que ya no aplica
html = html.replace(/\?v=[a-f0-9]+/g, '');

// Asegurar charset UTF-8 y base para navegación interna
if (!html.includes('<base ')) {
  html = html.replace('<head>', '<head>\n<base href="./">');
}

// ── 6. Guardar index.html ────────────────────────────────────────────────────
fs.writeFileSync(path.join(dirSitio, 'index.html'), html, 'utf8');
log(`Guardado: sitio/index.html`);

// ── 7. Actualizar fabricador.db ──────────────────────────────────────────────
db.prepare(`UPDATE sitios SET estado='construido', actualizado=datetime('now') WHERE slug=?`).run(slug);
db.prepare(`INSERT INTO eventos(slug,tipo,detalle) VALUES(?,?,?)`).run(slug, 'clonar_ok', `${ok} assets, ${fail} errores`);

log(`\n✓ Listo: proyectos/${bot.carpeta}/sitio/index.html`);
log(`  Abre en: http://localhost/project-1-25092026/proyectos/${bot.carpeta}/sitio/`);
