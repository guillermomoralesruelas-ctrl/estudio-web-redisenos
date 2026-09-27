// Las imágenes del clon están en sitio/assets/cdn/shop/ (publicDir de Vite).
// El clon de Shopify solo trajo unas pocas de las cientos de fotos de producto;
// las que están disponibles y son propias del negocio:
//   files/EE60A0DF-…CC5.jpg  (1440x1440) — foto lifestyle de joyería sobre piedra
//   files/IMG_1822.jpg        (3024x4032) — mano con anillo de boda gold
//   files/IMG_2336.jpg        (3024x4032) — anillo de compromiso en dedo
//   files/6CB3AF3A-…268.jpg  (3024x4032) — Anillo Sorrento de diamante oval
//   files/IMG_3068.jpg        (3024x3024) — argollas de boda en caja negra
//   files/IMG_9186.jpg        (3024x4032) — mano con sortija gema de color
//   files/IMG_1786.jpg        (3070x1947) — mesa con joyas / taller
//   collections/9FF5FC95-….jpg (1500x2000) — imagen colección anillos
//   collections/835237B4-….jpg (1179x1158) — imagen colección aretes
//   collections/IMG-4446.png  (1086x1448) — imagen colección engagement
//   collections/F75FC1F0-….webp (1080x1080) — imagen colección pulseras
//   collections/272E5EE1-….webp (1080x1080) — imagen colección collares
// NO se usa: 1000_F_318385552_…removebg-preview.png (stock de Shutterstock)
// Este script crea copias .webp ligeras en assets/web/ (el publicDir que usará Vite en el rediseño).
// Uso: node fotos-web.mjs   (desde proyectos/368-emilianajoyeriafina/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/cdn/shop');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['files/EE60A0DF-6E66-4CA0-8467-72607EFA3CC5.jpg', 'hero-joyeria', 1600],
  ['files/IMG_1822.jpg', 'mano-anillo-boda', 1200],
  ['files/IMG_2336.jpg', 'anillo-compromiso', 1200],
  ['files/6CB3AF3A-4EBF-4823-935E-A8E60F8E6268.jpg', 'anillo-sorrento', 1200],
  ['files/IMG_3068.jpg', 'argollas-boda', 1200],
  ['files/IMG_9186.jpg', 'sortija-gema', 1200],
  ['files/IMG_1786.jpg', 'taller-joyas', 1400],
  ['collections/9FF5FC95-E68F-4E76-995C-E6731D7B6C63.jpg', 'coleccion-anillos', 800],
  ['collections/835237B4-0EC3-4BC0-87FA-CBD6C008009C.jpg', 'coleccion-aretes', 800],
  ['collections/IMG-4446.png', 'coleccion-engagement', 800],
  ['collections/F75FC1F0-C562-4B8A-A478-7577483EE511.webp', 'coleccion-pulseras', 800],
  ['collections/272E5EE1-EA0D-4586-96DC-02A9FD59005C.webp', 'coleccion-collares', 800],
  ['files/Emiliana_logo-01.png', 'logo', 500],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre === 'logo' ? 90 : 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
  console.log(`${nombre}.webp -> ${info.width}x${info.height}`);
}

// Favicon: logo Emiliana sobre fondo crema oscuro
const logoBuffer = await sharp(path.join(origen, 'files/Emiliana_logo-01.png'))
  .resize(60, 18, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#1a0d00' } })
  .composite([{ input: logoBuffer, left: 2, top: 23 }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`\n${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
