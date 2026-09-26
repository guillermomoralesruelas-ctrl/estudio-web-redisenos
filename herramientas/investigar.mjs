#!/usr/bin/env node
// Fase 1 — Investigación automática de un sitio.
// Uso: node herramientas/investigar.mjs <url> <carpeta-proyecto> [--max 8]
// Salidas (dentro de proyectos/<carpeta>/):
//   investigacion/crudo.json      todo lo extraído, página por página
//   investigacion/resumen.json    colores, fuentes, contacto, plataforma, imágenes únicas
//   referencias/*.png             capturas del sitio original (escritorio y celular)
//   assets.json                   borrador del manifiesto de imágenes (Claude lo depura)
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [, , urlArg, carpeta, ...resto] = process.argv;
if (!urlArg || !carpeta) { console.error('Uso: node herramientas/investigar.mjs <url> <carpeta> [--max 8]'); process.exit(1); }
const MAX = Number(resto[resto.indexOf('--max') + 1]) || 8;
const inicio = new URL(urlArg);
const dirProy = path.join(RAIZ, 'proyectos', carpeta);
const dirInv = path.join(dirProy, 'investigacion');
const dirRef = path.join(dirProy, 'referencias');
fs.mkdirSync(dirInv, { recursive: true });
fs.mkdirSync(dirRef, { recursive: true });

const log = (...a) => console.log('[investigar]', ...a);
const slugPagina = (u) => {
  const p = new URL(u).pathname.replace(/\/+$/, '');
  return (p === '' ? 'inicio' : p.split('/').filter(Boolean).join('-')).toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40) || 'pagina';
};

async function autoscroll(page) {
  await page.evaluate(async () => {
    const paso = Math.max(400, window.innerHeight * 0.8);
    for (let y = 0; y < document.body.scrollHeight && y < 40000; y += paso) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}

async function abrir(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  } catch {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(3000);
  }
}

// Se ejecuta dentro de la página: extrae todo lo útil
function extraer() {
  const abs = (u) => { try { return new URL(u, location.href).href; } catch { return null; } };
  const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const texto = (el) => (el.innerText || '').replace(/\s+/g, ' ').trim();

  const imgs = [...document.images].map((i) => {
    let src = i.currentSrc || i.src;
    if (i.srcset) {
      const mayor = i.srcset.split(',').map((s) => s.trim().split(/\s+/)).map(([u, w]) => ({ u, w: parseInt(w) || 0 })).sort((a, b) => b.w - a.w)[0];
      if (mayor?.u) src = mayor.u;
    }
    const lazy = i.getAttribute('data-src') || i.getAttribute('data-lazy-src') || i.getAttribute('data-original');
    if ((!src || src.startsWith('data:')) && lazy) src = lazy;
    return { src: abs(src), alt: i.alt || '', conAlt: i.hasAttribute('alt'), w: i.naturalWidth, h: i.naturalHeight, rota: i.complete && i.naturalWidth === 0 && !!i.src && !i.src.startsWith('data:') };
  }).filter((i) => i.src && !i.src.startsWith('data:'));

  const fondos = [];
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none') for (const m of bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)) { const u = abs(m[1]); if (u && !u.startsWith('data:')) fondos.push(u); }
  }
  const red = performance.getEntriesByType('resource').map((r) => r.name).filter((n) => /\.(jpe?g|png|webp|avif|gif|svg|mp4|webm)(\?|$)/i.test(n));

  const conteo = (arr) => { const c = {}; arr.forEach((x) => { if (x) c[x] = (c[x] || 0) + 1; }); return Object.entries(c).sort((a, b) => b[1] - a[1]); };
  const els = [...document.querySelectorAll('body *')].slice(0, 4000).filter(visible);
  const colores = conteo(els.flatMap((e) => { const s = getComputedStyle(e); return [s.color, s.backgroundColor].filter((c) => c && c !== 'rgba(0, 0, 0, 0)'); })).slice(0, 20);
  const fuentes = conteo(els.map((e) => getComputedStyle(e).fontFamily)).slice(0, 10);

  const enlaces = [...document.querySelectorAll('a[href]')].map((a) => ({ texto: texto(a).slice(0, 80), href: abs(a.getAttribute('href')), zona: a.closest('header,nav') ? 'nav' : a.closest('footer') ? 'footer' : 'cuerpo' })).filter((a) => a.href);
  const hrefs = enlaces.map((e) => e.href);
  const redesRx = /(facebook|instagram|tiktok|youtube|twitter|x\.com|linkedin|pinterest)\./i;

  const html = document.documentElement.outerHTML.slice(0, 400000);
  const plataforma = /wp-content|wp-includes/.test(html) ? 'WordPress' : /wixstatic|wix\.com/.test(html) ? 'Wix' : /cdn\.shopify|Shopify\./.test(html) ? 'Shopify' : /squarespace/.test(html) ? 'Squarespace' : /webflow/.test(html) ? 'Webflow' : /__next/.test(html) ? 'Next.js' : 'desconocida';

  return {
    url: location.href,
    titulo: document.title,
    descripcion: document.querySelector('meta[name="description"]')?.content || '',
    idioma: document.documentElement.lang || '',
    og: Object.fromEntries([...document.querySelectorAll('meta[property^="og:"]')].map((m) => [m.getAttribute('property'), m.content])),
    encabezados: [...document.querySelectorAll('h1,h2,h3')].filter(visible).map((h) => ({ nivel: h.tagName, texto: texto(h).slice(0, 200) })),
    texto: texto(document.body).slice(0, 25000),
    botones: [...document.querySelectorAll('a,button')].filter((b) => visible(b) && /reserv|book|compr|buy|contact|cotiz|agenda|whats|llam|call|inscri|join|start|empieza/i.test(texto(b))).map((b) => ({ texto: texto(b).slice(0, 60), href: b.href || '' })).slice(0, 30),
    imagenes: imgs,
    fondos: [...new Set(fondos)],
    red: [...new Set(red)],
    colores,
    fuentes,
    enlaces,
    contacto: {
      telefonos: [...new Set(hrefs.filter((h) => h.startsWith('tel:')).map((h) => h.slice(4)))],
      emails: [...new Set(hrefs.filter((h) => h.startsWith('mailto:')).map((h) => h.slice(7).split('?')[0]))],
      whatsapp: [...new Set(hrefs.filter((h) => /wa\.me|whatsapp\.com/.test(h)))],
      redes: [...new Set(hrefs.filter((h) => redesRx.test(h)))],
      mapas: [...new Set(hrefs.filter((h) => /maps\.app|google\.[a-z.]+\/maps|goo\.gl\/maps/.test(h)))],
    },
    formularios: [...document.forms].map((f) => ({ accion: f.action, campos: [...f.elements].map((e) => e.name || e.id || e.type).filter(Boolean) })),
    tecnico: {
      plataforma,
      h1: document.querySelectorAll('h1').length,
      imagenesSinAlt: imgs.filter((i) => !i.conAlt).length,
      imagenesRotas: imgs.filter((i) => i.rota).map((i) => i.src),
      altoPagina: document.body.scrollHeight,
    },
  };
}

const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
const escritorio = await browser.newContext({ viewport: { width: 1366, height: 900 }, locale: 'es-MX', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36' });
const movil = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: 'es-MX' });
const page = await escritorio.newPage();

log('Abriendo', inicio.href);
await abrir(page, inicio.href);
await autoscroll(page);
const paginas = [];
const home = await page.evaluate(extraer);
paginas.push(home);
await page.screenshot({ path: path.join(dirRef, '01-inicio-escritorio.png'), fullPage: true, timeout: 60000 }).catch(() => page.screenshot({ path: path.join(dirRef, '01-inicio-escritorio.png') }));

const pm = await movil.newPage();
await abrir(pm, inicio.href);
await autoscroll(pm);
await pm.screenshot({ path: path.join(dirRef, '02-inicio-movil.png') });
await pm.screenshot({ path: path.join(dirRef, '03-inicio-movil-completa.png'), fullPage: true, timeout: 60000 }).catch(() => {});
await pm.close();

// Subpáginas: enlaces del mismo dominio en el menú o el pie
const host = new URL(home.url).host;
const candidatas = [...new Set(home.enlaces.filter((e) => e.zona !== 'cuerpo').map((e) => e.href.split('#')[0]))]
  .filter((h) => { try { const u = new URL(h); return u.host === host && u.href !== home.url && !/\.(pdf|jpe?g|png|zip)$/i.test(u.pathname) && !/(cart|carrito|checkout|login|account|cuenta|wp-admin|feed)/i.test(u.pathname); } catch { return false; } })
  .slice(0, MAX);
log(`Subpáginas a revisar: ${candidatas.length}`);
let n = 4;
for (const url of candidatas) {
  try {
    log('Abriendo', url);
    await abrir(page, url);
    await autoscroll(page);
    const datos = await page.evaluate(extraer);
    paginas.push(datos);
    await page.screenshot({ path: path.join(dirRef, `${String(n).padStart(2, '0')}-${slugPagina(url)}.png`) });
    n++;
  } catch (e) { log('No se pudo abrir', url, e.message); }
}
await browser.close();

// Resumen consolidado
const todas = new Map();
for (const p of paginas) {
  const pag = slugPagina(p.url);
  for (const i of p.imagenes) if (!todas.has(i.src)) todas.set(i.src, { url: i.src, alt: i.alt, w: i.w, h: i.h, pagina: pag, origen: 'img' });
  for (const f of p.fondos) if (!todas.has(f)) todas.set(f, { url: f, pagina: pag, origen: 'fondo' });
  for (const r of p.red) if (!todas.has(r) && /\.(jpe?g|png|webp|avif|gif)(\?|$)/i.test(r)) todas.set(r, { url: r, pagina: pag, origen: 'red' });
}
const unir = (k) => [...new Set(paginas.flatMap((p) => p.contacto[k]))];
const resumen = {
  sitio: inicio.href,
  fecha: new Date().toISOString(),
  paginasRevisadas: paginas.map((p) => ({ url: p.url, titulo: p.titulo, h1: p.encabezados.filter((h) => h.nivel === 'H1').map((h) => h.texto) })),
  plataforma: home.tecnico.plataforma,
  idioma: home.idioma,
  colores: home.colores,
  fuentes: home.fuentes,
  contacto: { telefonos: unir('telefonos'), emails: unir('emails'), whatsapp: unir('whatsapp'), redes: unir('redes'), mapas: unir('mapas') },
  llamadasAccion: home.botones,
  problemas: {
    imagenesSinAlt: paginas.reduce((s, p) => s + p.tecnico.imagenesSinAlt, 0),
    imagenesRotas: [...new Set(paginas.flatMap((p) => p.tecnico.imagenesRotas))],
    paginasSinH1: paginas.filter((p) => p.tecnico.h1 === 0).map((p) => p.url),
    paginasConVariosH1: paginas.filter((p) => p.tecnico.h1 > 1).map((p) => p.url),
    sinDescripcion: paginas.filter((p) => !p.descripcion).map((p) => p.url),
  },
  imagenes: [...todas.values()],
};
fs.writeFileSync(path.join(dirInv, 'crudo.json'), JSON.stringify(paginas, null, 2));
fs.writeFileSync(path.join(dirInv, 'resumen.json'), JSON.stringify(resumen, null, 2));

// Borrador de assets.json (se omiten íconos pequeños y SVG decorativos)
const borrador = {
  base: '',
  destino: 'assets',
  nota: 'Borrador automático de investigar.mjs. Claude lo depura en la fase 1.',
  assets: resumen.imagenes
    .filter((i) => !/\.svg(\?|$)/i.test(i.url) && !(i.w && i.h && i.w < 80 && i.h < 80))
    .map((i) => {
      let archivo = decodeURIComponent(path.basename(new URL(i.url).pathname)) || 'imagen';
      archivo = archivo.replace(/[^\w.\-]/g, '_');
      return { carpeta: i.pagina, url: i.url, archivo, alt: i.alt || '' };
    }),
};
const destinoAssets = path.join(dirProy, 'assets.json');
const actual = fs.existsSync(destinoAssets) ? JSON.parse(fs.readFileSync(destinoAssets, 'utf8')) : null;
if (!actual || !actual.assets?.length || actual.nota?.startsWith('Borrador')) fs.writeFileSync(destinoAssets, JSON.stringify(borrador, null, 2));

log(`Listo: ${paginas.length} páginas, ${resumen.imagenes.length} imágenes únicas, ${fs.readdirSync(dirRef).length} capturas.`);
log(`Plataforma: ${resumen.plataforma} | Colores top: ${resumen.colores.slice(0, 5).map((c) => c[0]).join(' ; ')}`);
