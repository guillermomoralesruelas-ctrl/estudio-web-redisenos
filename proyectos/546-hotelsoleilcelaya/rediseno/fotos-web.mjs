// Fotos del clon (sitio/assets/imagenes/): las 3 de habitaciones de su sitio (Ejecutiva, Junior Suite y Master Suite,
// 1142 x 580). No se usan: parallax.jpg (fachada con el letrero "Euro Inn", otra marca), los fondos bg/0*.jpg
// (lavados y en espejo) ni quick-reservation.jpg. Las galerías de salones y del restaurante no están en el clon.
// No se descargó nada nuevo. Este script crea copias .webp en ../assets/web/, el logo, el favicon, la imagen para
// compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/546-hotelsoleilcelaya/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/imagenes');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const fotos = [
  ['habitaciones/ejecutiva.jpg', 'f-ejecutiva'],
  ['habitaciones/jr.jpg', 'f-junior'],
  ['habitaciones/master.jpg', 'f-master'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo: "soleil HOTEL BUSINESS CLASS" (80 x 92); se usa tal cual, y su versión cuadrada para el favicon.
const infoLogo = await sharp(path.join(origen, 'logo.png')).webp({ quality: 95 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
await sharp(path.join(origen, 'logo4.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

await sharp(path.join(origen, fotos[1][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
