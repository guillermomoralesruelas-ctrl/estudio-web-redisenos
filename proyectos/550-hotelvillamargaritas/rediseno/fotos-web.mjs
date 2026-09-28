// El clon guarda las fotos en sitio/assets/public/img/ (galería de 9 fotos y el logotipo). No trae fotos de habitaciones:
// las 15 de las habitaciones (5 por tipo, 768 x 512) se bajaron del sitio real el 2026-09-28, con permiso del estudio, a
// ../assets/habitaciones/ (método 1.2). La quinta de la Suite Familiar es la misma que la segunda y no se usa.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/550-hotelvillamargaritas/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/public/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['logo-villa-margaritas-v2.png', 'icono', 96],
  ['logo-villa-margaritas-v2.png', 'logo-villa-margaritas', 320],
  ['galeria/VILLA-MARGARITA-4.jpg', 'entrada', 1500],
  ['galeria/VILLA-MARGARITA-6.jpg', 'lobby', 1600],
  ['galeria/VILLA-MARGARITA-5.jpg', 'elevador', 1200],
  ['galeria/VILLA-MARGARITA-7.jpg', 'desayuno', 1100],
  ['galeria/VILLA-MARGARITA-3.jpg', 'chilaquiles', 1100],
  ['galeria/VILLA-MARGARITA-8.jpg', 'cafe', 1100],
  ['galeria/VILLA-MARGARITA-9.jpg', 'enchiladas', 1100],
  ['galeria/VILLA-MARGARITA-1.jpg', 'salon-mural', 1920],
  ['galeria/VILLA-MARGARITA-2.jpg', 'salon-reuniones', 1600],
];

// Fotos de habitaciones: [archivo en ../assets/habitaciones, nombre de salida]
const cuartos = [
  ['DOBLE-MATRIMONIAL-1.jpg', 'doble-1'], ['DOBLE-MATRIMONIAL-2.jpg', 'doble-2'], ['DOBLE-MATRIMONIAL-3.jpg', 'doble-3'],
  ['KING-SIZE-1.jpg', 'king-1'], ['KING-SIZE-3.jpg', 'king-2'], ['KING-SIZE-5.jpg', 'king-3'],
  ['SUITE-FAMILIAR-1.jpg', 'suite-1'], ['SUITE-FAMILIAR-4.jpg', 'suite-2'], ['SUITE-FAMILIAR-3.jpg', 'suite-3'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
for (const [archivo, nombre] of cuartos) {
  const entrada = path.join(aqui, '../assets/habitaciones', archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length + cuartos.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
