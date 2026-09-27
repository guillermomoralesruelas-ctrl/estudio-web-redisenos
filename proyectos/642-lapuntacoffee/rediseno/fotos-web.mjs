// El clon guarda las fotos en sitio/assets/ (10 archivos: el logo, 8 fotos de la alberca, sus cafés, smoothies y el açaí bowl,
// y IMG_1927.jpg, que NO es una foto: es un recuadro rosa que dice "Placeholder for IMG_1927.jpg"; también sale así en el sitio en línea).
// Ninguna foto trae metadatos EXIF ni XMP (screenshot-1.png y screenshot-2.png solo dicen "Screenshot"): no hay marcas de IA.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/ (no toca el clon), más el favicon.
// Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/642-lapuntacoffee/rediseno)
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
  ['IMG_5143.jpg', 'cafe-hojas', 1400],          // latte en vaso de vidrio entre hojas y flores de plumeria (portada del sitio)
  ['IMG_5164.jpg', 'alberca', 1400],             // la alberca vista desde arriba (dron)
  ['IMG_5119.jpg', 'latte-orilla', 1400],        // latte en la orilla de la alberca, horizontal
  ['screenshot-1.png', 'latte-sentada', 1100],   // latte en la orilla, junto a una persona sentada
  ['screenshot-2.png', 'latte-piernas', 1100],   // latte en la orilla, vista desde arriba
  ['IMG_5206.jpg', 'acai', 1100],                // Brazilian açaí bowl
  ['IMG_8614.jpg', 'moonrise', 1100],            // smoothie Moonrise en el jardín
  ['sunshine-smoothie.webp', 'sunshine', 1020],  // dos smoothies Sunshine brindando junto a la alberca
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo (JPG con fondo blanco): se recorta el blanco sobrante y se hace una copia .webp.
const logo = path.join(origen, '2b0fda41-5733-410c-b29e-b98d95baee72.JPG');
antes += fs.statSync(logo).size;
const recortado = await sharp(logo).trim({ background: '#ffffff', threshold: 12 }).toBuffer();
const infoLogo = await sharp(recortado).resize({ width: 520, height: 520, fit: 'inside' }).webp({ quality: 88 }).toFile(path.join(destino, 'logo.webp'));
despues += infoLogo.size;
medidas.logo = [infoLogo.width, infoLogo.height];

// Favicon: el logo completo (taza con el sol) sobre blanco, 64x64.
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#ffffff' } })
  .composite([{ input: await sharp(recortado).resize(58, 58, { fit: 'contain', background: '#ffffff' }).toBuffer(), left: 3, top: 3 }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length + 1} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
