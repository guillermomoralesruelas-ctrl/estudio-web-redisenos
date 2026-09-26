#!/usr/bin/env node
// Fase 5 — Control de calidad del sitio nuevo.
// Requiere haber ejecutado antes `npm run build` en proyectos/<carpeta>/sitio.
// Uso: node herramientas/qa.mjs <carpeta>
// Salidas: proyectos/<carpeta>/qa/reporte.json, qa/reporte.md, qa/*.png
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const carpeta = process.argv[2];
if (!carpeta) { console.error('Uso: node herramientas/qa.mjs <carpeta>'); process.exit(1); }
const sitio = path.join(RAIZ, 'proyectos', carpeta, 'sitio');
const dirQa = path.join(RAIZ, 'proyectos', carpeta, 'qa');
fs.mkdirSync(dirQa, { recursive: true });
if (!fs.existsSync(path.join(sitio, 'dist', 'index.html'))) { console.error('No existe sitio/dist. Ejecuta primero: npm run build'); process.exit(1); }

const PUERTO = 4390 + Math.floor(Math.random() * 100);
const servidor = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['vite', 'preview', '--port', String(PUERTO), '--strictPort'], { cwd: sitio, shell: process.platform === 'win32' });
const URL_SITIO = `http://localhost:${PUERTO}/`;
const cerrar = () => { try { process.platform === 'win32' ? spawn('taskkill', ['/pid', String(servidor.pid), '/t', '/f']) : servidor.kill(); } catch {} };

for (let i = 0; i < 60; i++) {
  try { const r = await fetch(URL_SITIO); if (r.ok) break; } catch {}
  await new Promise((r) => setTimeout(r, 500));
}

const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
const resultados = [];
for (const [nombre, w, h] of [['movil', 375, 812], ['tablet', 768, 1024], ['escritorio', 1280, 800]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  const errores = [], fallidas = [];
  page.on('console', (m) => m.type() === 'error' && errores.push(m.text()));
  page.on('pageerror', (e) => errores.push(e.message));
  page.on('requestfailed', (r) => fallidas.push(r.url()));
  page.on('response', (r) => r.status() >= 400 && fallidas.push(`${r.status()} ${r.url()}`));
  await page.goto(URL_SITIO, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 100)); } window.scrollTo(0, 0); });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  const datos = await page.evaluate(() => ({
    desbordeX: document.documentElement.scrollWidth - window.innerWidth,
    h1: document.querySelectorAll('h1').length,
    sinAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).map((i) => i.src),
    rotas: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
    enlacesVacios: [...document.querySelectorAll('a')].filter((a) => !a.getAttribute('href') || a.getAttribute('href') === '#').length,
    botonesSinNombre: [...document.querySelectorAll('button')].filter((b) => !(b.innerText.trim() || b.getAttribute('aria-label'))).length,
    alto: document.body.scrollHeight,
    titulo: document.title,
  }));
  await page.screenshot({ path: path.join(dirQa, `${nombre}-inicio.png`) });
  await page.screenshot({ path: path.join(dirQa, `${nombre}-completa.png`), fullPage: true });
  resultados.push({ vista: nombre, ancho: w, ...datos, erroresConsola: errores, recursosFallidos: fallidas });
  await ctx.close();
}
await browser.close();
cerrar();

const problemas = [];
for (const r of resultados) {
  if (r.desbordeX > 0) problemas.push(`${r.vista}: desborde horizontal de ${r.desbordeX}px`);
  if (r.h1 !== 1) problemas.push(`${r.vista}: hay ${r.h1} H1 (debe ser 1)`);
  if (r.sinAlt.length) problemas.push(`${r.vista}: ${r.sinAlt.length} imágenes sin alt`);
  if (r.rotas.length) problemas.push(`${r.vista}: ${r.rotas.length} imágenes rotas`);
  if (r.erroresConsola.length) problemas.push(`${r.vista}: ${r.erroresConsola.length} errores de consola`);
  if (r.recursosFallidos.length) problemas.push(`${r.vista}: ${r.recursosFallidos.length} recursos fallidos`);
  if (r.botonesSinNombre) problemas.push(`${r.vista}: ${r.botonesSinNombre} botones sin nombre accesible`);
}
const reporte = { fecha: new Date().toISOString(), aprobado: problemas.length === 0, problemas, resultados };
fs.writeFileSync(path.join(dirQa, 'reporte.json'), JSON.stringify(reporte, null, 2));
const md = [
  `# Control de calidad — ${carpeta}`,
  `Fecha: ${reporte.fecha}`,
  '',
  reporte.aprobado ? '**Resultado: sin problemas automáticos detectados.**' : `**Resultado: ${problemas.length} problema(s).**`,
  '',
  ...problemas.map((p) => `- ${p}`),
  '',
  '| Vista | Desborde X | H1 | Sin alt | Rotas | Errores consola | Alto (px) |',
  '|---|---|---|---|---|---|---|',
  ...resultados.map((r) => `| ${r.vista} (${r.ancho}px) | ${r.desbordeX} | ${r.h1} | ${r.sinAlt.length} | ${r.rotas.length} | ${r.erroresConsola.length} | ${r.alto} |`),
  '',
  'Capturas: `qa/movil-*.png`, `qa/tablet-*.png`, `qa/escritorio-*.png`.',
].join('\n');
fs.writeFileSync(path.join(dirQa, 'reporte.md'), md);
console.log(md);
process.exit(0);
