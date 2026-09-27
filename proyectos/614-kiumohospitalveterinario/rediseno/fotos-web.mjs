// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: fotos propias del hospital (fachada de la sucursal
// Guadalupe, quirófano, rayos X, ultrasonido, farmacia, spa), del equipo con uniforme Kiumo (recortes PNG con fondo
// transparente), de mascotas atendidas y su logo. Ninguna trae metadatos de Google Maps/Picasa ni de IA. No se usan:
// las de los artículos del blog (B2-*, de banco), las de marcas de alimento ni las pequeñas en círculo (001-004).
// No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// favicon (el perrito de triángulos de su logo). Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/614-kiumohospitalveterinario/rediseno)
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

// [archivo original, nombre de salida, lado largo máximo, recorte opcional]
export const lista = [
  // La fachada trae abajo una franja con su logo y "SUC. KIUMO GUADALUPE": se recorta.
  ['2024/08/Inicio_kiumoguadalupe_banner1-1.webp', 'fachada-guadalupe', 1600, { left: 0, top: 0, width: 1876, height: 1375 }],
  ['2024/05/IMG_1912-scaled.jpg', 'bulldog-juegos', 1100],
  ['2024/05/a2-1.jpg', 'consulta-cachorro', 900],
  ['2024/05/a3-1.jpg', 'ultrasonido', 900],
  ['2024/05/a4-1.jpg', 'quirofano', 900],
  ['2024/08/Inicio_bloque1_grooming.webp', 'spa-limpieza', 1200],
  ['2024/08/Inicio_bloque3_gromingdepomeranian.jpg', 'spa-pomerania', 677],
  ['2024/05/339x471.jpg', 'farmacia', 471],
  ['2024/05/v1.png', 'equipo-chihuahua', 700],
  ['2024/05/v2.png', 'equipo-sonrisa', 700],
  ['2024/05/v3-1.png', 'equipo-brazos', 700],
  ['2024/05/v5.png', 'equipo-pomerania', 700],
  ['2024/05/Captura-de-Pantalla-2024-05-24-a-las-14.15.10.png', 'gato-panuelo', 599],
  ['2024/05/Captura-de-Pantalla-2024-05-24-a-las-14.13.38.png', 'perrito-cachorro', 222],
  ['2024/05/Kiumo-hospital-logo.png', 'logo', 520],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado, recorte] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  let img = sharp(entrada);
  if (recorte) img = img.extract(recorte);
  const info = await img
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5, alphaQuality: 90 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el perrito de triángulos de la parte alta de su logo, recortado a su contenido.
const logo = path.join(origen, '2024/05/Kiumo-hospital-logo.png');
const simbolo = await sharp(logo).extract({ left: 0, top: 0, width: 1600, height: 720 }).png().toBuffer();
await sharp(simbolo).trim().resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(destino, 'icono.png'));
await sharp(simbolo).trim().resize(240, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 85 }).toFile(path.join(destino, 'simbolo.webp'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
