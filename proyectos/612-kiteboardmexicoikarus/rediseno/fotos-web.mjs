// Fotos propias del clon (sitio/assets/wp-content/uploads/): vistas aéreas del centro y de la laguna de Isla Blanca,
// una clase con instructor, un kite al atardecer, alumnos en la laguna y dos cuartos del hotel. No se usan el mapa de
// Google, los sellos (Good Travel Scan, bitcoin) ni los logos de socios. No se descargó nada nuevo. Este script crea
// copias .webp en ../assets/web/, el logo, el favicon, la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/612-kiteboardmexicoikarus/rediseno)
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
  ['2019/08/KING-3-1024x661.webp', 'f-centro', 1024],
  ['2019/08/9-HOURS-PRIVATE-LESSON-BEGINNERS.jpeg', 'f-laguna', 1600],
  ['2022/11/aerea.jpg', 'f-isla', 1600],
  ['2023/01/School1home.jpg', 'f-clase', 410],
  ['2023/01/Rentals1home.jpg', 'f-atardecer', 410],
  ['2022/11/foto-video-Isla-Blanca-Kite3.webp', 'f-alumnos', 645],
  ['2023/01/kingsize.jpg', 'f-king', 567],
  ['2022/11/2bed.jpg', 'f-doble', 567],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo claro (letras grises "IKARUS" sobre transparente): va sobre fondo oscuro.
const logo = await sharp(path.join(origen, '2019/07/logo-light2-e1669772196355.png')).trim().resize({ height: 68 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];
const rec = await sharp(path.join(origen, '2019/07/logo-light2-e1669772196355.png')).trim().toBuffer({ resolveWithObject: true });
const marca = await sharp(rec.data).extract({ left: 0, top: 0, width: rec.info.width, height: Math.round(rec.info.height * 0.62) }).trim().toBuffer();
await sharp(marca).resize(52, 52, { fit: 'contain', background: '#12303a' }).extend({ top: 6, bottom: 6, left: 6, right: 6, background: '#12303a' }).flatten({ background: '#12303a' }).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, fotos[1][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
