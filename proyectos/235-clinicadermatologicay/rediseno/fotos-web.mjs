// El clon guarda las fotos del doctor y la clínica en sitio/assets/doctor/, sitio/assets/machines/ y sitio/assets/clinica/.
// Todas son fotos propias: el doctor en consulta y en quirófano, los equipos médicos y la recepción.
// Ninguna trae EXIF de Google/Picasa ni credenciales C2PA.
// Los logos de marca (brand/sello-sm.svg y brand/logo-footer-dark.svg) son SVG, no se convierten.
// Los logos de fabricante (logos/) son .webp ya optimizados (96 px de alto) y se copian directamente.
// Este script crea copias .webp ligeras en ../assets/web/ (no toca el clon).
// También escribe src/data/fotos.json con las medidas para poner width y height.
// Uso: node fotos-web.mjs   (desde proyectos/235-clinicadermatologicay/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origenAssets = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(path.join(destino, 'logos'), { recursive: true });
fs.mkdirSync(path.join(destino, 'machines'), { recursive: true });

let antes = 0, despues = 0;
const medidas = {};

async function webp(de, a, ancho, calidad = 76) {
  const entrada = path.join(origenAssets, de);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: calidad, effort: 5 })
    .toFile(path.join(destino, a));
  despues += info.size;
  medidas[a] = [info.width, info.height];
}

// Doctor (fotos principales)
await webp('doctor/aristides-craft.webp', 'aristides-craft.webp', 928, 82);  // doctor en quirófano (portada)
await webp('doctor/aristides.webp', 'aristides.webp', 471, 82);              // retrato del doctor

// Clínica
await webp('clinica/recepcion.webp', 'recepcion.webp', 1200, 78);            // recepción de la clínica

// Equipos médicos (cada uno a 560 px de ancho — buen tamaño para cards de 280 px en retina)
const maquinas = [
  ['machines/fotona.webp', 'machines/fotona.webp', 560],
  ['machines/alma-hybrid.webp', 'machines/alma-hybrid.webp', 560],
  ['machines/acupulse.webp', 'machines/acupulse.webp', 560],
  ['machines/resurfx.webp', 'machines/resurfx.webp', 560],
  ['machines/endymed.webp', 'machines/endymed.webp', 560],
  ['machines/alma-primex.webp', 'machines/alma-primex.webp', 560],
  ['machines/hydrafacial.webp', 'machines/hydrafacial.webp', 560],
  ['machines/artas.webp', 'machines/artas.webp', 560],
  ['machines/vaser.webp', 'machines/vaser.webp', 560],
  ['machines/lpg.webp', 'machines/lpg.webp', 560],
];
for (const [de, a, ancho] of maquinas) await webp(de, a, ancho);

// Logos de fabricante (96 px de alto en origen, se copian a 120 px de ancho para retina)
const logosOrigen = ['lumenis', 'fotona', 'alma', 'artas-ix', 'hydrafacial', 'endymed', 'visia'];
for (const nombre of logosOrigen) await webp(`logos/${nombre}.webp`, `logos/${nombre}.webp`, 240, 85);

// Imagen Open Graph: el doctor en quirófano, recortada a 1200x630
await sharp(path.join(origenAssets, 'doctor/aristides-craft.webp'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile(path.join(destino, 'compartir.jpg'));

// Favicon: el sello del doctor (SVG circular) convertido a PNG 64x64
// El archivo brand/sello-sm.svg es un sello circular dorado — ideal para favicon.
// Lo copiamos como SVG para el <link rel="icon" type="image/svg+xml"> ya declarado en index.html.
fs.copyFileSync(
  path.join(origenAssets, 'brand/sello-sm.svg'),
  path.join(destino, 'sello.svg')
);

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} imágenes: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
