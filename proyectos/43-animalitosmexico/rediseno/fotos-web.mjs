// El clon guarda sus imágenes en sitio/assets/assets/: fotos propias de cada hospital (images-css/*mo1: los fondos de
// las páginas de Miguel Ángel, Interlomas, Polanco, Prado Norte, Vértiz y Zona Esmeralda), su logo en SVG y muchas
// imágenes de banco (retratos de estudio de perros y gatos, veterinarios con guantes, el banner de resonancia) y
// capturas de Google Maps. Ninguna foto propia trae metadatos de Google Maps/Picasa ni de IA. Solo se usan las propias.
// No se descargó nada nuevo.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon), el logo en azul y el favicon.
// Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/43-animalitosmexico/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['css/main/images-css/miguelmo1.jpg', 'miguel-angel', 900],
  ['css/main/images-css/interlomasmo1.jpg', 'interlomas', 800],
  ['css/main/images-css/polancomo1.jpg', 'polanco', 900],
  ['css/main/images-css/pradomo1.jpeg', 'prado-norte', 1200],
  ['css/main/images-css/vertizmo1.jpg', 'consultorio-ultra-love', 900],
  ['css/main/images-css/zona4.jpg', 'zona-esmeralda', 1600],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada, { limitInputPixels: false })
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo: su SVG (sin color) pintado con su azul #008fd3 y en blanco; favicon con la "a" de su logo sobre azul.
const svg = fs.readFileSync(path.join(origen, 'images/Logos/animalitos-1.svg'), 'utf8');
fs.writeFileSync(path.join(destino, 'logo.svg'), svg.replace('<svg ', '<svg fill="#008fd3" '));
fs.writeFileSync(path.join(destino, 'logo-blanco.svg'), svg.replace('<svg ', '<svg fill="#ffffff" '));
const a = await sharp(Buffer.from(svg.replace('<svg ', '<svg fill="#ffffff" ')), { density: 300 })
  .extract({ left: 150, top: 150, width: 420, height: 440 }).png().toBuffer().catch(() => null);
const fondo = sharp({ create: { width: 64, height: 64, channels: 4, background: '#008fd3' } });
if (a) {
  const letra = await sharp(a).trim().resize(44, 44, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  await fondo.composite([{ input: letra, gravity: 'center' }]).png().toFile(path.join(destino, 'icono.png'));
} else {
  await fondo.png().toFile(path.join(destino, 'icono.png'));
}

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
