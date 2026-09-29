// El clon guarda en sitio/assets/wp-content/plugins/clandestinoh-widgets-elementor/assets/img/ las fotos de las dos casonas:
// el rooftop de Recreo (dos tomas), la fachada de la calle Recreo, el patio y los arcos de Pila Seca, una sala con escalera
// y una suite. No se usa la vista de San Miguel (es la foto de su guía de la ciudad, no del hotel).
// Este script crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/544-hotelrecreoclandestino/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/plugins/clandestinoh-widgets-elementor/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['recreo-1024x652.jpg', 'recreo-rooftop'], ['DSC04043.jpg', 'recreo-terraza'], ['clandestino-recreo2-1024x683.jpg', 'recreo-calle'],
  ['clandestino-pila-seca-1024x701.jpg', 'pila-patio'], ['pila_DSC05299-1024x699.jpg', 'pila-arcos'],
  ['clandestino-2-1-1024x768.jpg', 'sala'], ['DSC04902.jpg', 'suite'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#2b211d"/><path d="M16 50 V30 a16 16 0 0 1 32 0 V50 Z" fill="#e6b9a2"/></svg>');
console.log('ok');
