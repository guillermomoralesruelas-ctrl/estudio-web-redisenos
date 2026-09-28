// Las fotos del clon (sitio/assets/) pesan hasta 5.7 MB y miden hasta 5568 px (sesión con Nikon Z fc).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/575-inmotionbybrahm/rediseno)
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

// [archivo original en sitio/assets/, nombre de salida en assets/web/, lado largo máximo]
const lista = [
  ['Imagenes/Inicio/abajoInicio.jpg', 'tres-triangulo', 2000],
  ['Imagenes/Inicio/Slider1.jpg', 'plancha-lateral', 1600],
  ['Imagenes/Inicio/Slider2.JPG', 'plancha-tobilleras', 1200],
  ['Imagenes/Inicio/Slider3.jpg', 'escorpion', 1200],
  ['imagenesClases/1ea2f5ec-5d72-4d01-a982-5ee40e2c8cbf.JPG', 'cross-training', 1100],
  ['imagenesClases/45ab8f9f-d099-4235-803a-bcbf8493079f.jpg', 'vinyasa-suave', 1100],
  ['imagenesClases/6edf32c2-eda2-4645-9322-6248a2d1291f.jpg', 'power-pilates', 1100],
  ['imagenesClases/7d18c6e5-c67b-47d9-be22-69989fb1d79f.jpg', 'power-vinyasa', 1100],
  ['imagenesClases/d2ba5ca3-1664-4386-8759-b44c6bb09143.jpg', 'vinyasa-flow', 1100],
  ['imagenesClases/da565a52-f2dd-43e2-9e43-3331c28f926a.jpg', 'rocket-yoga', 1100],
  ['imagenesClases/e15f1279-ea68-4e44-96e6-110934e210c5.JPG', 'sculpt', 1100],
  ['imagenesClases/e5745cc8-4669-4815-93af-e064c493a37f.JPG', 'yoga-integral', 1100],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  if (!fs.existsSync(entrada)) { console.warn('No encontrado:', archivo); continue; }
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Logotipos (PNG con transparencia) y favicon, tal cual en tamaño web
for (const [archivo, nombre] of [['Logos/Logo-01.png', 'logo-verde.png'], ['Logos/Logo-02.png', 'logo-claro.png']]) {
  const info = await sharp(path.join(origen, archivo)).resize({ width: 600 }).png({ compressionLevel: 9 }).toFile(path.join(destino, nombre));
  medidas[nombre] = [info.width, info.height];
}
fs.copyFileSync(path.join(origen, 'favicon.png'), path.join(destino, 'favicon.png'));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas));
