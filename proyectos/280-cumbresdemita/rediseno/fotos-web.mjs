// El clon guarda en sitio/assets/ las imágenes de Cumbres de Mita: vistas aéreas del desarrollo y de los lotes, la casa
// club, la alberca, y los renders de Nahya y Kumo Living. Su sitio aclara que "las imágenes son renders". No se usan la
// del golf ni el gym (no se pudo confirmar que sean del desarrollo). Este script crea copias .webp en assets/web/
// (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/280-cumbresdemita/rediseno)
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
  ['hero-bg.jpg', 'punta-mita'], ['desarrollo-aerea.jpg', 'desarrollo'], ['lote-vista.jpg', 'lotes'],
  ['amenidades-club.jpg', 'casa-club'], ['amenidades-alberca.jpg', 'alberca'], ['kumo-render.jpg', 'kumo'], ['nahya-render.jpg', 'nahya'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1f3d2b"/><path d="M8 46 L24 22 L34 36 L42 26 L56 46 Z" fill="#d9c9a3"/></svg>');
console.log('ok');
