// El clon guarda sus imágenes en sitio/assets/images/: tres fotos propias del hotel (slider/slider2, slider3 y slider7),
// dos fotos de la ciudad (scbg.jpg y dealsbg.jpg), el logotipo, seis logos de distintivos, cinco fotos de perfil de
// las opiniones y dos gráficos del tema (quote.png, loader.png).
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// favicon, recortado del escudo del logotipo. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/549-hoteltradicional/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['logotradicional.png', 'logo-hotel-tradicional', 522],
  ['slider/slider7.jpg', 'pasillo-vitrinas', 1200],
  ['slider/slider2.jpg', 'habitacion', 1200],
  ['slider/slider3.jpg', 'telar-de-cintura', 1200],
  ['scbg.jpg', 'san-cristobal-andador', 1600],
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

// Favicon: el escudo "HT / Misión Colonial" de la izquierda del logotipo, en un cuadrado transparente.
await sharp(path.join(origen, 'logotradicional.png'))
  .extract({ left: 0, top: 0, width: 72, height: 74 })
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
