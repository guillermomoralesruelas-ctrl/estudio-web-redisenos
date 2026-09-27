// El clon guarda las fotos en sitio/assets/assets/images/ (18 imágenes: logo, favicon, fotos de sus bebidas y alimentos,
// la foto doble de su local y una captura de Google Maps). Nota: los metadatos de 10 fotos de producto dicen
// "Edited with Google AI" (compositeWithTrainedAlgorithmicMedia): son fotos de sus vasos y platos retocadas con IA.
// Se usan porque son las que el negocio publica de sus productos, y se anota como pendiente (CAMBIOS.md).
// NO se usan: galleta.png (parece foto de banco), refresco.jpeg (foto de producto de Coca-Cola) y map.png (captura de Google Maps).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/133-cafessiacoffeelunch/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo, recorte opcional {left, top, width, height}]
// hero-bg1.jpg (1536x1024) es una foto doble de su local separada por una curva blanca: se recortan las dos mitades.
const lista = [
  ['logo.png', 'logo', 768],
  ['hero-bg1.jpg', 'terraza', 1000, { left: 0, top: 0, width: 700, height: 1024 }],
  ['hero-bg1.jpg', 'ventanita', 1000, { left: 860, top: 0, width: 676, height: 1024 }],
  ['americano.png', 'americano', 720],
  ['capuccino.png', 'capuccino', 720],
  ['latte.png', 'latte', 720],
  ['chai-latte.png', 'chai-latte', 720],
  ['dirty-chai-latte.png', 'dirty-chai', 720],
  ['tisana.png', 'tisana', 720],
  ['limonada.png', 'limonada', 720],
  ['croissant-papas.png', 'croissant', 900],
  ['morning-burrito-papas.png', 'morning-burrito', 720],
  ['muffing-papas.png', 'muffin', 720],
  ['banana-crumble.jpeg', 'banana-crumble', 720],
];

let antes = 0, despues = 0;
const vistos = new Set();
const medidas = {};
for (const [archivo, nombre, lado, recorte] of lista) {
  const entrada = path.join(origen, archivo);
  if (!vistos.has(archivo)) { antes += fs.statSync(entrada).size; vistos.add(archivo); }
  let img = sharp(entrada);
  if (recorte) img = img.extract(recorte);
  const info = await img
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: la "C" naranja de su logo (logo-c.png) sobre fondo crema, 64x64.
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#faf6f1' } })
  .composite([{ input: await sharp(path.join(origen, 'logo-c.png')).resize(52, 52, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(), left: 6, top: 6 }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
