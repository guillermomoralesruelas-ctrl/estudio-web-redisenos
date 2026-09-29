// El clon guarda en sitio/assets/wp-content/uploads/ las cuatro fotos propias del spa (cabina, cabina de aparatos,
// sala de meditación y sauna) y el logotipo. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/324-dolcebellaspa/rediseno)
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
  ['2023/01/cabina.jpeg', 'cabina'],
  ['2024/01/instalaciones-dolcebella-spa-2024-01-23-12-07-59-3.jpg', 'cabina-aparatos'],
  ['2024/01/instalaciones-dolcebella-spa-2024-01-23-12-07-55.jpg', 'sala-meditacion'],
  ['2024/01/instalaciones-dolcebella-spa-2024-01-23-12-07-58-2.jpg', 'sauna'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${nombre}.webp`));
}
await sharp(path.join(origen, '2023/01/logo_nuevo.png')).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#7a3d73"/><path d="M32 14c6 7 6 17 0 26-6-9-6-19 0-26zM32 40c-4-7-11-11-18-11 1 8 8 13 18 11zm0 0c4-7 11-11 18-11-1 8-8 13-18 11z" fill="#fbf6f2"/><path d="M16 46h32" stroke="#fbf6f2" stroke-width="3" stroke-linecap="round"/></svg>');
console.log('ok');
