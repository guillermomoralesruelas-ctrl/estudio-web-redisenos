// El clon (sitio/) es el inicio del hotel Las Casas B+B, donde está HOUSE Restaurante. Sus imágenes están en
// sitio/assets/wp-content/uploads/. Casi todas son del hotel (habitaciones, spa, alberca); del restaurante solo hay una
// foto propia (el comedor junto a la alberca, de noche) y dos del jardín. Las fotos de platillos de las páginas del
// restaurante NO están en el clon y no se descargan (pendiente, ver CAMBIOS.md).
// NO se usan (ver CAMBIOS.md):
//   - Around-this-table-everyone-belongs.png: un anuncio con letras ("Around this table everyone belongs.") y una mesa
//     con limón, copa y un arcoíris que parece generada con IA. No trae metadatos que lo digan: pendiente de confirmar.
//   - spa-masajes-pareja-cuernavaca.jpg (spa, parece de banco), Palacio-cortes.jpg (no se sabe si es suya), las fotos de
//     habitaciones y los sellos (MICHELIN, Marco Beteta): son del hotel, no del restaurante.
// Ninguna foto trae metadatos (ni EXIF ni XMP), así que no hay marca de edición con IA que revisar.
// Este script crea copias .webp ligeras SOLO de lo que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/552-houserestaurante/rediseno)
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

// [archivo original, nombre de salida, ancho máximo]
const lista = [
  ['3673004b-35fd-4511-b626-1daf3dfc86e2.jpg', 'comedor-noche', 1086],
  ['LAS_CASAS_BB-0651.jpeg', 'jardin', 1200],
  ['1-Vacaciones-de-Semana-Santa-en-Las-Casas-BB.jpg', 'jardin-alberca', 1400],
  ['14-Alberca-Climatizada-Las-Casas-BB-Hotel-Boutique-Restaurante-y-Spa-en-Cuernavaca-.jpg', 'alberca-mesero', 800],
  ['HOUSE-LOGO-WHITE-300px.png', 'logo-blanco', 300],
  ['Logo-House-150x150.png', 'logo', 150],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: nombre.startsWith('logo') ? 90 : 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su logo HOUSE (negro, transparente) sobre blanco, 64 px.
await sharp(path.join(origen, 'Logo-House-150x150.png')).flatten({ background: '#ffffff' }).resize(64, 64).png().toFile(path.join(destino, 'favicon.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
