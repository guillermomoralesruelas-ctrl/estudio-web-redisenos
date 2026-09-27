// Grand Isla Navidad Resort — fotos propias del clon a .webp para el rediseño.
// Las fotos viven en sitio/assets/wp-content/uploads/2025/{04,05,07,08}/
// y sitio/assets/wp-content/uploads/2026/06/.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en
// ../assets/web/ (publicDir de vite.config.ts). No toca el clon.
// Uso: node fotos-web.mjs  (desde proyectos/460-grandislanavidad/rediseno)

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const base = path.join(aqui, '../sitio/assets/wp-content/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [ruta relativa a base, nombre de salida sin extensión, ancho máx]
const lista = [
  // Hero: vista aérea del resort y la laguna
  ['2025/08/modulo-destino-vista-aerea-grand-isla-navidad-resort-1.webp',    'aerea-resort',   1280],
  // Laguna y manglar (elemento memorable)
  ['2025/08/modulo-destino-vista-aerea-laguna-grand-isla-navidad-resort-6.webp', 'laguna',     1280],
  // Alberca (elemento memorable + experiencias)
  ['2025/08/modulo-destino-alberca-grand-isla-navidad-resort-3.webp',        'alberca',        1200],
  // Bar alberca (Oasis Pool Bar)
  ['2025/08/modulo-destino-bar-alberca-grand-isla-navidad-resort-4.webp',    'bar-alberca',    1200],
  // Lobby bar (El Faro)
  ['2025/08/modulo-destino-lobby-bar-grand-isla-navidad-resort-4.webp',      'lobby-bar',      1200],
  // Lobby
  ['2025/08/modulo-destino-lobby-grand-isla-navidad-resort-5.webp',          'lobby',          1200],
  // Restaurante Grand Café
  ['2025/08/restaurante-hotel-en-manzanillo-grand-isla-navidad-resort-2.webp', 'restaurante',  1200],
  // Restaurante La Plazuela
  ['2025/04/restaurante-la-plazuela-hotel-en-manzanillo-grand-isla-navidad-resort.webp', 'plazuela', 1200],
  // Bodas
  ['2025/05/carrusel-bodas-home-grand-isla-navidad-resort-1.webp',           'bodas-1',        900],
  ['2025/05/carrusel-bodas-home-grand-isla-navidad-resort-2.webp',           'bodas-2',        900],
  // Golf
  ['2025/08/golf-country-club-home-grand-isla-navidad-resort-3b.webp',       'golf',           1280],
  // Habitaciones
  ['2025/08/suite-presidencial-hotel-isla-navidad-resort-03.jpg',            'suite-presidencial', 1200],
  ['2025/08/master-suite-hotel-isla-navidad-resort-05.jpg',                  'suite-master',   1200],
  ['2025/08/suite-ejecutiva-hotel-isla-navidad-resort-06.jpg',               'suite-ejecutiva', 1200],
  ['2025/08/suite-gobernador-hotel-isla-navidad-resort-09.jpg',              'suite-gobernador', 1200],
  ['2025/08/suite-grand-de-lujo-hotel-isla-navidad-resort-07.jpg',           'habitacion-lujo', 1200],
  // Marina
  ['2025/05/modulo-experiencia-home-grand-isla-navidad-resort-3.webp',       'marina',         900],
  // Panorámica Costa Alegre
  ['2026/06/panoramica-costa-alegre-grand-isla-navidad-resort-1.webp',       'costa-alegre',   1280],
  // Laguna (turismo)
  ['2025/07/modulo-manzanillo-laguna-hotel-grand-isla-navidad-resort.webp',  'laguna-cerca',   1050],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [rel, nombre, lado] of lista) {
  const entrada = path.join(base, rel);
  if (!fs.existsSync(entrada)) { console.warn(`FALTANTE: ${rel}`); continue; }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo (PNG con fondo transparente)
const logoSrc = path.join(base, '2025/04/logo-isla-navidad.png');
if (fs.existsSync(logoSrc)) {
  antes += fs.statSync(logoSrc).size;
  const infoLogo = await sharp(logoSrc).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
  despues += infoLogo.size;
  medidas.logo = [infoLogo.width, infoLogo.height];
}

// Favicon
const favSrc = path.join(base, '2025/05/favicon.png');
if (fs.existsSync(favSrc)) {
  await sharp(favSrc).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
}

console.log(`${lista.length + 1} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
