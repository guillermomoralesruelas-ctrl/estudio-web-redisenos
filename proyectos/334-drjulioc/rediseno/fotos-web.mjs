// El clon guarda en sitio/assets/wp-content/uploads/2025/07/ la sesión de fotos del Dr. Julio Jiménez en su consultorio
// (de pie, sentado en su escritorio, en la puerta) y dos banners con fondo gris. Este script crea copias .webp en
// assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/334-drjulioc/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads/2025/07');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['Dr.Julio_1-681x1024.jpg', 'dr-consultorio'], ['Dr.Julio_22-scaled-e1753820744489-715x1024.jpg', 'dr-librero'],
  ['Dr.Julio_7-1024x681.jpg', 'dr-escritorio'], ['Dr.Julio_9-scaled-e1753804932291-768x1024.jpg', 'dr-puerta'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1024, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#2743d8"/><path d="M20 16v22a8 8 0 0 0 16 0V16M44 16v32" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/></svg>');
console.log('ok');
