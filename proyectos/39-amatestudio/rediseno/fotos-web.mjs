// El clon guarda en sitio/assets/images/ las fotos de AMATE Studio: la terraza con alberca de la portada, las fachadas
// de arquitectura y de ZUL, una obra en construcción, y los interiores de Harbor 401, Harbor 107 y Rosamorada H5.
// Este script crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/39-amatestudio/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

for (const n of ['hero', 'servicio-arquitectura', 'servicio-interiorismo', 'servicio-construccion', 'rosamorada-h5', 'harbor-401', 'harbor-107', 'zul']) {
  await sharp(path.join(origen, `${n}.webp`)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${n}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#262320"/><path d="M14 48 L32 14 L50 48 M22 36 H42" stroke="#d9bfa0" stroke-width="4" fill="none"/></svg>');
console.log('ok');
