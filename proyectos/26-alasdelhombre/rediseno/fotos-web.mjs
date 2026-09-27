// El clon guarda sus imágenes en sitio/assets/: fotos propias de vuelos en tándem (varias con EXIF de GoPro: son de sus
// cámaras de casco y de bastón), el lago de Valle de Bravo con parapentes, El Peñón de Temascaltepec y su logo. Las
// de masaje, meditación, cena con velas y anillo son de banco y no se usan; tampoco los sellos, certificados y logos de
// clientes. Ninguna foto trae metadatos de Google Maps/Picasa ni de IA. No se descargó nada nuevo.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/26-alasdelhombre/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['sliderimages/gmc3_slidenu.jpg', 'lago-parapentes', 1920],
  ['sliderimages/maja2slide.jpg', 'tandem-selfie', 1400],
  ['sliderimages/maja1slide.jpg', 'ala-sobre-lago', 1400],
  ['assets/vuelo-en-parapente-valle-de-bravo-070126.jpg', 'tandem-pueblo', 1128],
  ['assets/images/dos-dias-vuelo-en-parapente-home070126.jpg', 'tandem-lago', 800],
  ['assets/images/vuela-el-penon-temascaltepec-180822.jpg', 'tandem-penon', 800],
  ['assets/images/maja-alas-del-hombre-vuelo-en-parapente-valle-de-bravo.jpg', 'tandem-sol', 900],
  ['assets/images/tourdeundia070722.jpg', 'lago-orilla', 800],
  ['assets/images/logoalas4.jpg', 'logo', 177],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el círculo de su logo (los primeros 60 px del ancho) a 64 px.
await sharp(path.join(origen, 'assets/images/logoalas4.jpg'))
  .extract({ left: 2, top: 4, width: 56, height: 56 })
  .resize(64, 64)
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
