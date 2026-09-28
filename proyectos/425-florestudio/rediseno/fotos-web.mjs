// Fotos del clon → copias .webp ligeras en ../assets/web/
// Fuente: proyectos/425-florestudio/sitio/assets/wp-content/uploads/
//
// Fotos seleccionadas (producto real de Florestudio; sin stock ni IA):
//   2026/01/PHOTO-2026-01-23-15-03-43.jpg     (1024x1536) — logo/marca (icono)
//   2026/01/WhatsApp-Image-2026-01-26-at-17.41.54.jpeg (835x292) — banner/hero
//   2026/05/IMGha-300x300.jpg                 (300x300) — 24 Rosas Rojas con Gypsophilia
//   2026/05/hermosasyrojas-300x300.jpg        (300x300) — 50 Rosas Rosas y Rojas
//   2026/05/24-rosas-y-10-girsoles-300x300.webp (300x300) — 24 Rosas y 10 Girasoles
//   2026/05/24Mixblc-300x300.jpg              (300x300) — 24 Rosas Blancas y Rojas
//   2026/05/50Mixblc-300x300.webp             (300x300) — 50 Rosas Blancas y Rojas
//   2026/05/50rosas-300x300.jpg               (300x300) — 50 Rosas Rojas y Blancas
//   2026/05/10-girasoles-12-rosas-300x300.webp (300x300) — 12 Rosas y 10 Girasoles
//   2026/02/12-amarillas-1-300x300.webp       (300x300) — 12 Rosas Amarillas Premium
//
// Uso: node fotos-web.mjs   (desde proyectos/425-florestudio/rediseno/)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [ruta relativa al origen, nombre de salida, lado largo máximo]
const lista = [
  ['2026/01/PHOTO-2026-01-23-15-03-43.jpg',                 'logo-florestudio',      400],
  ['2026/01/WhatsApp-Image-2026-01-26-at-17.41.54.jpeg',    'banner-hero',           1200],
  ['2026/05/IMGha-300x300.jpg',                             'rosas-24-gypsophilia',  600],
  ['2026/05/hermosasyrojas-300x300.jpg',                    'rosas-50-mix',          600],
  ['2026/05/24-rosas-y-10-girsoles-300x300.webp',           'rosas-girasoles-24-10', 600],
  ['2026/05/24Mixblc-300x300.jpg',                          'rosas-24-blancas-rojas',600],
  ['2026/05/50Mixblc-300x300.webp',                         'rosas-50-blancas-rojas',600],
  ['2026/05/50rosas-300x300.jpg',                           'rosas-50-rojas',        600],
  ['2026/05/10-girasoles-12-rosas-300x300.webp',            'rosas-12-girasoles-10', 600],
  ['2026/02/12-amarillas-1-300x300.webp',                   'rosas-12-amarillas',    600],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  if (!fs.existsSync(entrada)) {
    console.warn(`FALTA: ${archivo}`);
    continue;
  }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre === 'logo-florestudio' ? 90 : 80, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
  console.log(`${nombre}.webp -> ${info.width}x${info.height}`);
}

console.log(`\n${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB → ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
