// El clon guarda en sitio/assets/ una sesión de fotos propia de Fátima Buenfil: en consulta con un glucómetro, midiendo
// con calorímetro a una paciente, en su escritorio con alimentos y en el gimnasio. Las demás (servicios, blog) son de
// banco y no se usan. Este script crea copias .webp en assets/web/ (publicDir de Vite), el logo y el ícono. No se descargó
// nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/438-fatimabuenfilnutricion/rediseno)
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

const lista = [
  ['templates/rt_salient/custom/images/swiper/fatima-buenfil-nutricion-clinica-merida-1.jpg', 'consulta'],
  ['templates/rt_salient/custom/images/01-calorimetria-slide.jpg', 'calorimetria'],
  ['images/menus-asesoria-nutricia.jpg', 'escritorio'],
  ['images/nutricion-deporte-fatima.jpg', 'deporte'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
const logo = path.join(origen, 'templates/rt_salient/custom/images/logo/fatima-buenfil-nutricion-clinica-logo.png');
await sharp(logo).png().toFile(path.join(destino, 'logo.png'));
// Solo la flor del logo (los primeros 160 px) como ícono.
await sharp(logo).extract({ left: 0, top: 0, width: 160, height: 160 }).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
