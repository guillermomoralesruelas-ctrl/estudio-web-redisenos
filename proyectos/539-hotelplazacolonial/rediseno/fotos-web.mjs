// El clon guarda en sitio/assets/wp-content/uploads/ seis fotos propias del hotel de 2026 (HotelPlazaColonial*.jpg,
// 1024 x 682, editadas en Photoshop, sin EXIF de Google/Picasa ni credenciales C2PA) y la fachada al atardecer del slider
// de 2017 (slide1.jpg). NO se usa 2026/08/ChatGPT-Image-4-ago-2026-02_59_03-p.m.png: trae credenciales C2PA de
// "OpenAI Media Service" (imagen generada con IA, la de la promoción "3a noche gratis"). No se descargó nada nuevo.
// Este script crea copias .webp ligeras en ../assets/web/ (no toca el clon), la imagen para compartir, el favicon
// y src/data/fotos.json con las medidas de cada archivo.
// Uso: node fotos-web.mjs   (desde proyectos/539-hotelplazacolonial/rediseno)
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

const fotos = [
  ['2026/04/HotelPlazaColonial206.jpg', 'fachada', 1024],
  ['2017/01/slide1.jpg', 'fachada-tarde', 1600],
  ['2026/04/HotelPlazaColonial20.jpg', 'recepcion', 1024],
  ['2026/04/HotelPlazaColonial203.jpg', 'sala', 1024],
  ['2026/04/HotelPlazaColonial126.jpg', 'habitacion', 1024],
  ['2026/04/HotelPlazaColonial185.jpg', 'balcon', 1024],
  ['2026/04/HotelPlazaColonial109.jpg', 'detalle', 1024],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Imagen para compartir (Open Graph): la fachada de día, en 1200 x 630.
await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));

// Favicon: una ventana con postigos azules sobre el amarillo de la fachada. Dibujado por nosotros.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="12" fill="#e0a851"/><path d="M18 54V26a14 14 0 0 1 28 0v28Z" fill="#fbf6ec"/><path d="M22 52V27a10 10 0 0 1 10-10v35Zm20 0V27a10 10 0 0 0-10-10v35Z" fill="#1587a8"/></svg>`;
await sharp(Buffer.from(svg)).png().toFile(path.join(destino, 'icono.png'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${fotos.length} fotos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
