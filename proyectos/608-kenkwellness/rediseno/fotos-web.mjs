// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/. Solo 8 son fotos propias de la casa (galería de
// marzo de 2025: tres posturas de yoga frente a su muro de piedra, la recepción con globos, la bolsa de la gift card,
// dos del equipo en la inauguración y las repisas de la tienda holística) más la foto de su té con logo. El resto son
// fotos de banco (spas, masajes, meditación en la playa) y acuarelas de plantilla de 2021: no se usan. No se usa el
// té (su etiqueta dice "Antidepresiva": afirmación de salud) ni la selfie del equipo (gal6). Ninguna foto propia trae
// metadatos de Google Maps/Picasa ni marcas de IA. No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// logo y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/608-kenkwellness/rediseno)
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
  ['2025/03/gal1.jpg', 'yoga-loto', 1600],
  ['2025/03/gal2.jpg', 'yoga-invertida', 1200],
  ['2025/03/gal3.jpg', 'yoga-luna', 1200],
  ['2025/03/gal4.jpg', 'recepcion', 1400],
  ['2025/03/gal5.jpg', 'giftcard', 1000],
  ['2025/03/gal7.jpg', 'equipo', 1200],
  ['2025/03/gal8.jpg', 'repisas', 1200],
  ['2025/02/kenko-logo.png', 'logo', 700],
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

// Favicon: su propio favicon (el mandala del logo) a 64 px.
await sharp(path.join(origen, '2025/01/cropped-favicon-kenko-192x192.jpg')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
