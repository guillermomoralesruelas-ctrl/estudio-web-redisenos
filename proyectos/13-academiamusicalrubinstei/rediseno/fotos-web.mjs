// Método 1.2 en la nube: las 6 fotos de la galería del sitio en vivo (galeria_files/Media/Foto1…6) se bajaron a
// assets/originales/. Tres son tarjetas de maestros con texto a la izquierda: se recorta solo la foto. Las otras tres
// son los salones. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/13-academiamusicalrubinstei/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// Tarjetas de maestros (800×600): la foto ocupa la parte derecha.
for (const [archivo, nombre] of [['foto1.jpg', 'araceli'], ['foto2.jpg', 'moises'], ['foto5.jpg', 'karla']]) {
  await sharp(path.join(origen, archivo)).extract({ left: 300, top: 0, width: 500, height: 600 }).webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
}
for (const [archivo, nombre] of [['foto3.jpg', 'salon-guitarras'], ['foto4.jpg', 'salon-puerta'], ['foto6.jpg', 'guitarra-atril']]) {
  await sharp(path.join(origen, archivo)).webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#8b1e1e"/><rect x="12" y="16" width="40" height="32" rx="3" fill="#faf6ef"/><path d="M22 16v20M32 16v20M42 16v20" stroke="#1d1a18" stroke-width="5"/></svg>');
console.log('ok');
