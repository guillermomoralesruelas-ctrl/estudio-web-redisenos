#!/usr/bin/env node
// Fase 1 — Investigación automática de un sitio vía Jina AI Reader (r.jina.ai).
// Sin navegador, sin API key, sin instalación extra.
// Uso: node herramientas/investigar.mjs <url> <carpeta-proyecto> [--max 8]
// Salidas:
//   investigacion/crudo.json    contenido por página
//   investigacion/resumen.json  contacto, imágenes, links, plataforma detectada
//   assets.json                 borrador del manifiesto de imágenes
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [, , urlArg, carpeta, ...resto] = process.argv;
if (!urlArg || !carpeta) {
  console.error('Uso: node herramientas/investigar.mjs <url> <carpeta> [--max 8]');
  process.exit(1);
}
const MAX = Number(resto[resto.indexOf('--max') + 1]) || 8;
const inicio = new URL(urlArg);
const dirProy = path.join(RAIZ, 'proyectos', carpeta);
const dirInv  = path.join(dirProy, 'investigacion');
const dirRef  = path.join(dirProy, 'referencias');
fs.mkdirSync(dirInv, { recursive: true });
fs.mkdirSync(dirRef, { recursive: true });

const log = (...a) => console.log('[investigar]', ...a);

const slugPagina = (u) => {
  const p = new URL(u).pathname.replace(/\/+$/, '');
  return (p === '' ? 'inicio' : p.split('/').filter(Boolean).join('-'))
    .toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40) || 'pagina';
};

async function jinaFetch(url) {
  const jinaUrl = `https://r.jina.ai/${url}`;
  const res = await fetch(jinaUrl, {
    headers: {
      'Accept': 'application/json',
      'X-Return-Format': 'markdown',
      'X-With-Images-Summary': 'true',
      'X-With-Links-Summary': 'true',
    },
    signal: AbortSignal.timeout(45000),
  });
  if (!res.ok) throw new Error(`Jina devolvió ${res.status} para ${url}`);
  return await res.json();
}

function detectarPlataforma(content = '') {
  if (/wp-content|wp-includes|wordpress/i.test(content)) return 'WordPress';
  if (/wixstatic|wix\.com/i.test(content)) return 'Wix';
  if (/cdn\.shopify|myshopify/i.test(content)) return 'Shopify';
  if (/squarespace/i.test(content)) return 'Squarespace';
  if (/webflow/i.test(content)) return 'Webflow';
  if (/next\.js|__next/i.test(content)) return 'Next.js';
  return 'desconocida';
}

function extraerContacto(texto = '') {
  const telefonos = [...new Set((texto.match(/\+?\d[\d\s\-().]{7,}\d/g) || []).filter(t => t.replace(/\D/g, '').length >= 7))];
  const emails    = [...new Set((texto.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g) || []))];
  const whatsapp  = [...new Set((texto.match(/wa\.me\/\S+|whatsapp\.com\/\S+/g) || []))];
  const redes     = [...new Set((texto.match(/https?:\/\/(www\.)?(facebook|instagram|tiktok|youtube|twitter|x\.com|linkedin|pinterest)\.[^\s)>"]+/g) || []))];
  return { telefonos, emails, whatsapp, redes };
}

function extraerImagenes(jinaData, paginaSlug) {
  const imgs = [];
  // images viene como { url: alt } en la respuesta de Jina
  if (jinaData.images && typeof jinaData.images === 'object') {
    for (const [src, alt] of Object.entries(jinaData.images)) {
      if (src && !src.startsWith('data:')) {
        imgs.push({ src, alt: typeof alt === 'string' ? alt : '', pagina: paginaSlug, origen: 'img' });
      }
    }
  }
  // También extraemos imágenes del markdown con ![alt](url)
  const mdImgs = [...(jinaData.content || '').matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)];
  for (const [, alt, src] of mdImgs) {
    try {
      const url = new URL(src, jinaData.url).href;
      if (!url.startsWith('data:') && !imgs.find(i => i.src === url)) {
        imgs.push({ src: url, alt, pagina: paginaSlug, origen: 'markdown' });
      }
    } catch { /* url relativa inválida */ }
  }
  return imgs;
}

function extraerLinks(jinaData) {
  const links = [];
  if (jinaData.links && typeof jinaData.links === 'object') {
    for (const [texto, href] of Object.entries(jinaData.links)) {
      try { links.push({ texto, href: new URL(href, jinaData.url).href }); } catch { /* skip */ }
    }
  }
  return links;
}

// ── Página de inicio ────────────────────────────────────────────────────────
log('Consultando', inicio.href);
let home;
try {
  const r = await jinaFetch(inicio.href);
  home = r.data || r;
} catch (e) {
  log('Error al consultar inicio:', e.message);
  process.exit(1);
}

const homeSlug = slugPagina(home.url || inicio.href);
const homeLinks = extraerLinks(home);
const homeImgs  = extraerImagenes(home, homeSlug);
const homeContacto = extraerContacto(home.content || '');
const plataforma = detectarPlataforma(home.content || '');

log(`Título: ${home.title || '(sin título)'}`);
log(`Plataforma: ${plataforma} | Imágenes: ${homeImgs.length} | Links: ${homeLinks.length}`);

const paginas = [{
  url: home.url || inicio.href,
  titulo: home.title || '',
  descripcion: home.description || '',
  contenido: home.content || '',
  imagenes: homeImgs,
  links: homeLinks,
  contacto: homeContacto,
  plataforma,
}];

// ── Subpáginas (mismo dominio, solo nav/footer links) ───────────────────────
const host = inicio.host;
const candidatas = [...new Set(
  homeLinks
    .filter(l => {
      try {
        const u = new URL(l.href);
        return u.host === host
          && u.href !== home.url
          && !/\.(pdf|jpe?g|png|zip|mp4)$/i.test(u.pathname)
          && !/(cart|carrito|checkout|login|account|cuenta|wp-admin|feed)/i.test(u.pathname);
      } catch { return false; }
    })
    .map(l => l.href.split('#')[0])
)].slice(0, MAX);

log(`Subpáginas a revisar: ${candidatas.length}`);
for (const url of candidatas) {
  try {
    log('Consultando', url);
    const r = await jinaFetch(url);
    const d = r.data || r;
    const slug = slugPagina(url);
    paginas.push({
      url: d.url || url,
      titulo: d.title || '',
      descripcion: d.description || '',
      contenido: d.content || '',
      imagenes: extraerImagenes(d, slug),
      links: extraerLinks(d),
      contacto: extraerContacto(d.content || ''),
    });
  } catch (e) { log('No se pudo consultar', url, '—', e.message); }
}

// ── Consolidar imágenes únicas ───────────────────────────────────────────────
const todasImgs = new Map();
for (const p of paginas) {
  for (const i of p.imagenes) {
    if (!todasImgs.has(i.src)) todasImgs.set(i.src, i);
  }
}

// ── Consolidar contacto ──────────────────────────────────────────────────────
const unir = (k) => [...new Set(paginas.flatMap(p => p.contacto[k]))];

const resumen = {
  sitio: inicio.href,
  fecha: new Date().toISOString(),
  motor: 'jina-reader',
  paginasRevisadas: paginas.map(p => ({ url: p.url, titulo: p.titulo })),
  plataforma,
  idioma: '',
  contacto: {
    telefonos: unir('telefonos'),
    emails: unir('emails'),
    whatsapp: unir('whatsapp'),
    redes: unir('redes'),
  },
  imagenes: [...todasImgs.values()],
  nota: 'Sin capturas de pantalla (Playwright no disponible). Para capturas instala: cd herramientas && npx playwright install chromium',
};

fs.writeFileSync(path.join(dirInv, 'crudo.json'),  JSON.stringify(paginas, null, 2));
fs.writeFileSync(path.join(dirInv, 'resumen.json'), JSON.stringify(resumen, null, 2));

// ── Borrador assets.json ─────────────────────────────────────────────────────
const borrador = {
  base: '',
  destino: 'assets',
  nota: 'Borrador automático de investigar.mjs (Jina). Claude lo depura en la fase 1.',
  assets: resumen.imagenes
    .filter(i => {
      try { return !!/\.svg(\?|$)/i.test(i.src) === false && new URL(i.src); } catch { return false; }
    })
    .map(i => {
      let archivo = decodeURIComponent(path.basename(new URL(i.src).pathname)) || 'imagen';
      archivo = archivo.replace(/[^\w.\-]/g, '_');
      return { carpeta: i.pagina, url: i.src, archivo, alt: i.alt || '' };
    }),
};

const destinoAssets = path.join(dirProy, 'assets.json');
const actual = fs.existsSync(destinoAssets) ? JSON.parse(fs.readFileSync(destinoAssets, 'utf8')) : null;
if (!actual || !actual.assets?.length || actual.nota?.includes('Borrador')) {
  fs.writeFileSync(destinoAssets, JSON.stringify(borrador, null, 2));
}

log(`Listo: ${paginas.length} páginas, ${resumen.imagenes.length} imágenes únicas.`);
log(`Contacto: ${unir('telefonos').join(', ') || '—'} | Redes: ${unir('redes').length}`);
