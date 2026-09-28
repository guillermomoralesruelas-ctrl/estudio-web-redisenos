#!/usr/bin/env node
// Método 1.1 — Control de calidad y comparación ANTES (clon) / DESPUÉS (rediseño).
//
// Uso:  node herramientas/qa-rediseno.mjs <carpeta>          p. ej. 175-casaorigenes
//       node herramientas/qa-rediseno.mjs <carpeta> --solo-rediseno
//
// Requiere haber compilado antes:  cd proyectos/<carpeta>/rediseno && npm run build
// No necesita XAMPP: levanta un servidor estático propio sobre proyectos/.
//
// Salidas:
//   proyectos/<carpeta>/qa/antes-escritorio.png, antes-movil.png        (clon, página completa)
//   proyectos/<carpeta>/qa/despues-escritorio.png, despues-movil.png    (rediseño, página completa)
//   proyectos/<carpeta>/qa/reporte-rediseno.json                        (métricas de ambos)
//   proyectos/<carpeta>/entregables/comparacion-antes-despues.jpg       (lámina para el cliente)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { lanzarNavegador } from './navegador.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PROY = path.join(RAIZ, 'proyectos');
const carpeta = process.argv[2];
const soloRediseno = process.argv.includes('--solo-rediseno');
if (!carpeta) { console.error('Uso: node herramientas/qa-rediseno.mjs <carpeta>'); process.exit(1); }
const dirP = path.join(PROY, carpeta);
const hayRediseno = fs.existsSync(path.join(dirP, 'rediseno', 'dist', 'index.html'));
if (!hayRediseno && soloRediseno) { console.error(`No existe proyectos/${carpeta}/rediseno/dist/index.html. Compila primero: cd proyectos/${carpeta}/rediseno && npm run build`); process.exit(1); }
if (!hayRediseno) console.log('Todavía no hay rediseño compilado: solo se diagnostica el clon (paso 2 del método 1.1).');
const dirQa = path.join(dirP, 'qa');
fs.mkdirSync(dirQa, { recursive: true });
fs.mkdirSync(path.join(dirP, 'entregables'), { recursive: true });

// --- servidor estático mínimo sobre proyectos/ ---
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.mp4': 'video/mp4' };
const servidor = http.createServer((req, res) => {
  const ruta = path.join(PROY, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!ruta.startsWith(PROY) || !fs.existsSync(ruta) || fs.statSync(ruta).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TIPOS[path.extname(ruta).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(ruta).pipe(res);
});
await new Promise((r) => servidor.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${servidor.address().port}/${encodeURIComponent(carpeta)}`;

const VISTAS = [['escritorio', 1280, 800], ['movil', 390, 844]];
const browser = await lanzarNavegador();

async function medir(url, prefijo) {
  const out = [];
  for (const [vista, w, h] of VISTAS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    const errores = [], fallidos = [];
    page.on('console', (m) => m.type() === 'error' && errores.push(m.text()));
    page.on('pageerror', (e) => errores.push(e.message));
    page.on('response', (r) => r.status() >= 400 && fallidos.push(`${r.status()} ${r.url()}`));
    try { await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }); } catch (e) { errores.push('carga: ' + e.message.split('\n')[0]); }
    // reducedMotion: carruseles quietos en la primera foto, para comparar siempre lo mismo.
    // Recorrer despacio para que carguen las imágenes con loading="lazy".
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 450) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 160)); }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1800);
    const datos = await page.evaluate(() => ({
      alto: document.body.scrollHeight,
      desbordeX: document.documentElement.scrollWidth - window.innerWidth,
      h1: document.querySelectorAll('h1').length,
      imagenes: document.images.length,
      rotas: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
      sinAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length,
      titulo: document.title,
    }));
    const archivo = path.join(dirQa, `${prefijo}-${vista}.png`);
    // Chromium no captura de una vez páginas de más de ~16,000 px: en ese caso se guarda solo el principio.
    const clip = datos.alto > 16000 ? { x: 0, y: 0, width: w, height: 16000 } : undefined;
    await page.screenshot({ path: archivo, fullPage: true, clip });
    out.push({ vista, ancho: w, ...datos, errores, fallidos, captura: path.relative(dirP, archivo) });
    await ctx.close();
  }
  return out;
}

const reporte = { fecha: new Date().toISOString(), carpeta };
if (!soloRediseno && fs.existsSync(path.join(dirP, 'sitio', 'index.html'))) reporte.antes = await medir(`${BASE}/sitio/index.html`, 'antes');
if (hayRediseno) reporte.despues = await medir(`${BASE}/rediseno/dist/index.html`, 'despues');
await browser.close();
servidor.close();

if (!hayRediseno) {
  fs.writeFileSync(path.join(dirQa, 'reporte-rediseno.json'), JSON.stringify(reporte, null, 2));
  console.log(`\nDiagnóstico del clon — ${carpeta}`);
  for (const r of reporte.antes || []) {
    console.log(`  ${r.vista.padEnd(10)} alto ${r.alto}px  desborde ${r.desbordeX}  imágenes ${r.imagenes}  rotas ${r.rotas.length}  errores ${r.errores.length}  fallidos ${r.fallidos.length}`);
    for (const f of r.fallidos.slice(0, 15)) console.log(`     ${f}`);
  }
  console.log(`Capturas: qa/antes-*.png   Reporte: qa/reporte-rediseno.json`);
  process.exit(0);
}

// Problemas del rediseño (lo que debe quedar en cero antes de entregar).
const problemas = [];
for (const r of reporte.despues) {
  if (r.desbordeX > 0) problemas.push(`${r.vista}: desborde horizontal de ${r.desbordeX}px`);
  if (r.h1 !== 1) problemas.push(`${r.vista}: ${r.h1} H1 (debe ser 1)`);
  if (r.rotas.length) problemas.push(`${r.vista}: ${r.rotas.length} imágenes rotas`);
  if (r.sinAlt) problemas.push(`${r.vista}: ${r.sinAlt} imágenes sin alt`);
  if (r.errores.length) problemas.push(`${r.vista}: ${r.errores.length} errores de consola`);
  if (r.fallidos.length) problemas.push(`${r.vista}: ${r.fallidos.length} recursos con error`);
}
reporte.problemasRediseno = problemas;
reporte.aprobado = problemas.length === 0;
fs.writeFileSync(path.join(dirQa, 'reporte-rediseno.json'), JSON.stringify(reporte, null, 2));

// --- lámina ANTES / DESPUÉS ---
async function columna(prefijo) {
  const d = await sharp(path.join(dirQa, `${prefijo}-escritorio.png`)).extract({ left: 0, top: 0, width: 1280, height: 800 }).resize(960, 600).toBuffer();
  const mMeta = await sharp(path.join(dirQa, `${prefijo}-movil.png`)).metadata();
  const m = await sharp(path.join(dirQa, `${prefijo}-movil.png`)).extract({ left: 0, top: 0, width: Math.min(390, mMeta.width), height: Math.min(844, mMeta.height) }).resize(277, 600).toBuffer();
  return sharp({ create: { width: 1257, height: 600, channels: 3, background: '#1e1e1e' } }).composite([{ input: d, left: 0, top: 0 }, { input: m, left: 980, top: 0 }]).png().toBuffer();
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const texto = (t, size, color, w = 1337, h = 44) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><text x="0" y="${size}" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="${size}" fill="${color}">${esc(t)}</text></svg>`);
const nombre = (reporte.despues[0].titulo || carpeta).split('|')[0].trim() || carpeta;
const capas = [{ input: texto(`${nombre}: clon (antes) y rediseño método 1.1 (después)`, 30, '#141414'), left: 40, top: 26 }];
let y = 90;
if (reporte.antes) {
  capas.push({ input: texto('ANTES: clon del sitio actual (método 3)', 22, '#782828'), left: 40, top: y });
  capas.push({ input: await columna('antes'), left: 40, top: y + 38 });
  y += 38 + 600 + 34;
}
capas.push({ input: texto('DESPUÉS: rediseño (método 1.1)', 22, '#1e6e3c'), left: 40, top: y });
capas.push({ input: await columna('despues'), left: 40, top: y + 38 });
y += 38 + 600 + 40;
const salida = path.join(dirP, 'entregables', 'comparacion-antes-despues.jpg');
await sharp({ create: { width: 1337, height: y, channels: 3, background: '#f5f5f2' } }).composite(capas).jpeg({ quality: 86 }).toFile(salida);

console.log(`\nQA del rediseño — ${carpeta}`);
for (const r of reporte.despues) console.log(`  ${r.vista.padEnd(10)} alto ${r.alto}px  desborde ${r.desbordeX}  H1 ${r.h1}  imágenes ${r.imagenes}  rotas ${r.rotas.length}  errores ${r.errores.length}  fallidos ${r.fallidos.length}`);
if (reporte.antes) for (const r of reporte.antes) console.log(`  (clon) ${r.vista.padEnd(10)} desborde ${r.desbordeX}  rotas ${r.rotas.length}  fallidos ${r.fallidos.length}`);
console.log(problemas.length ? `\nPROBLEMAS:\n - ${problemas.join('\n - ')}` : '\nSin problemas automáticos.');
console.log(`Lámina: ${path.relative(RAIZ, salida)}\nReporte: ${path.relative(RAIZ, path.join(dirQa, 'reporte-rediseno.json'))}`);
process.exit(0);
