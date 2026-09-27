// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: 8 fotos propias del estudio de Hermosillo
// (la fachada con su letrero, cinco fotos de clase en la barra tomadas por WhatsApp en 2021, la foto de espalda sobre
// el tapete y el retrato de Cocoy), su logo, su ícono y tres portadas de su blog con texto encima. Ninguna trae
// metadatos de Google Maps/Picasa ni de IA. No se usan: la selfie con cubrebocas (WhatsApp 12.03.02 PM (1)), el
// fondo degradado de Instagram ni las portadas del blog. No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// logo y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/498-hmoestudiobarre/rediseno)
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

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['2021/12/B75.jpg', 'fachada', 1600],
  ['2021/12/WhatsApp-Image-2021-07-31-at-12.03.03-PM.jpeg', 'clase-sentadilla', 1200],
  ['2021/12/WhatsApp-Image-2021-07-31-at-12.03.02-PM-e1639518498277.jpeg', 'clase-barra', 1200],
  ['2021/12/WhatsApp-Image-2021-07-31-at-12.03.03-PM-1-e1639518571540.jpeg', 'clase-fila', 1084],
  ['2021/12/WhatsApp-Image-2021-07-31-at-12.03.01-PM-e1639518263663.jpeg', 'clase-grupo', 927],
  ['2021/12/WhatsApp-Image-2021-03-11-at-1.04.22-PM.jpeg', 'espalda-tapete', 1000],
  ['2021/12/WhatsApp-Image-2021-12-15-at-5.14.02-PM.jpeg', 'cocoy', 1024],
  ['2020/09/logo-1.png', 'logo', 600],
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

// Favicon: su ícono (el 7 blanco sobre el degradado rosa y verde agua) a 64 px.
await sharp(path.join(origen, '2020/09/cropped-perfil-1.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
