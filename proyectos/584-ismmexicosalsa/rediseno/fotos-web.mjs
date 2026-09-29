// El clon guarda en sitio/assets/wp-content/uploads/ las fotos de ISM Mexico: clases en el Parque México (2022), el grupo
// en la explanada, parejas bailando en Arthurfest, la inauguración del estudio de Cerrada de Hamburgo 4 (2024), cinco
// retratos del equipo con playera ISM y la foto de Kentaro. No se usan la foto de Unsplash (cámara y laptop), la de
// "BUSAN" (evento en otra ciudad) ni los avatares de reseñas. Este script crea copias .webp en assets/web/.
// Uso: node fotos-web.mjs   (desde proyectos/584-ismmexicosalsa/rediseno)
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

const lista = [
  ['2022/12/20220312_CDMXParqueMexicoClassesSalsaBachataKentaro_0154-scaled.jpg', 'parque-pareja', 1400],
  ['2022/12/20220312_CDMXParqueMexicoClassesSalsaBachataKentaro_0498-scaled.jpg', 'parque-grupo', 1400],
  ['2022/12/20220312_CDMXParqueMexicoClassesSalsaBachataKentaro_0070-scaled-1024x683.jpg', 'parque-giro', 1024],
  ['2023/03/IMG_2894-scaled.jpg', 'parque-clase', 1400],
  ['2022/12/Arthurfest-12-scaled-1024x768.jpg', 'social', 1024],
  ['2022/12/Arthurfest-11-scaled-683x1024.jpg', 'social-vertical', 683],
  ['2024/01/20240120_InaugurationISMStudioHamburgo4_0210-1024x683.jpg', 'estudio', 1024],
  ['2022/12/280609549_398076928993782_5061057277220187698_n.jpeg', 'kentaro', 700],
  ['2024/12/DSC_0377-scaled.jpg', 'equipo-1', 700], ['2024/12/DSC_0807-scaled.jpg', 'equipo-2', 700],
  ['2024/12/DSC_1037.jpg', 'equipo-3', 700], ['2024/12/DSC_1055-scaled.jpg', 'equipo-4', 700], ['2024/12/DSC_1394-scaled.jpg', 'equipo-5', 700],
];
for (const [archivo, nombre, ancho] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#17151c"/><circle cx="32" cy="32" r="18" fill="#c42a22"/><path d="M26 22 C40 26 40 38 26 42" stroke="#ffb627" stroke-width="5" fill="none" stroke-linecap="round"/></svg>');
console.log('ok');
