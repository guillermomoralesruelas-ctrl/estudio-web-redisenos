// El clon guarda sus imágenes en sitio/assets/: ocho capturas de 1920 px de sus videos Insta360 de vuelos tándem
// (images/360photosandvideos/ e images/360/), El Peñón sobre las nubes (images/penon.jpg), un piloto con la vela
// "FLUMEN Paragliding" (images/penon2.jpg), las fotos de sus tarjetas de vuelo (600 a 855 px), capturas de reseñas de
// Google (images/testimonios/, no se usan) y logos (el suyo en blanco, APPI, Club El Peñón, Temascaltepec).
// Ninguna trae metadatos de Google Maps/Picasa ni de IA (varias dicen "Adobe Photoshop"). No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// favicon, hecho con su logo (el ala blanca con la etiqueta rosa) sobre el azul noche. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/388-escueladevuelo/rediseno)
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
const lista = [
  ['images/360photosandvideos/VID_20260419_113139_00_075_2026-05-17_13-04-47_screenshot.jpg', 'vuelo-penon', 1600],
  ['images/360photosandvideos/VID_20220527_120607_00_035_2022-05-27_14-44-03_screenshot.jpg', 'vuelo-saludo', 1000],
  ['images/360photosandvideos/VID_20230418_163710_00_105_2023-05-13_19-24-44_screenshot.jpg', 'vuelo-sonrisas', 1000],
  ['images/360/VID_20260418_121524_00_056_2026-07-24_14-19-56_screenshot.jpg', 'vuelo-nubes', 1000],
  ['images/sinlimitesdeedad.jpg', 'sin-limite-de-edad', 841],
  ['media/yootheme/cache/c5/happyfaces01-c5a5ba46.jpg', 'amor-y-paz', 855],
  ['images/penon.jpg', 'el-penon', 1600],
  ['images/penon2.jpg', 'piloto-flumen', 1400],
  ['images/vuelosparapentevalledebravo-aventura.jpg', 'aventurero', 600],
  ['media/yootheme/cache/8f/vuelosparapentevalledebravo-explorer4x3-600-8f2d0e4c.jpg', 'explorador', 610],
  ['media/yootheme/cache/41/00-1-41d2aa69.jpg', 'explorador-vip', 855],
  ['media/yootheme/cache/a4/vuelosparapentevalledebravo-volarengrupo-a4a84a48.jpg', 'grupo-exploradores', 610],
  ['media/yootheme/cache/7c/vuelosparapentevalledebravo-volarengrupo2x2-7ccdc06b.jpg', 'grupo-2x2', 610],
  ['media/yootheme/cache/0f/360-big-0f31f37f.jpg', 'precio-amigos', 610],
  ['images/logo-parapentevalledebravo-temascaltepec300.png', 'logo-flumen', 300],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre.startsWith('logo') ? 90 : 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su logo pequeño (media/yootheme/cache/cd/logo-mobile-….png, blanco) sobre el azul noche, en 64 px.
const ala = await sharp(path.join(origen, 'media/yootheme/cache/cd/logo-mobile-cd9f8be5.png')).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#141a3d' } })
  .composite([{ input: ala, left: 8, top: 8 }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
