// El clon guarda en sitio/assets/ las fotos de Joy D Fadez: tres fades hechos en el estudio (fade.jpg, fade2.jpg,
// fade3.jpg) y la sesión en un rooftop. No se usan corte.jpg ni ejecutivo.jpg: parecen de banco (luz y encuadre de
// estudio fotográfico, sin nada del estudio). Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/594-joydfadez/rediseno)
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

for (const [archivo, nombre] of [['fade.jpg', 'fade-1'], ['fade2.jpg', 'fade-2'], ['fade3.jpg', 'fade-3'], ['rooftop.jpg', 'rooftop']]) {
  await sharp(path.join(origen, archivo)).rotate().resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1b1a19"/><path d="M38 12v28a10 10 0 0 1-20 0" stroke="#d4ae62" stroke-width="7" fill="none" stroke-linecap="square"/></svg>');
console.log('ok');
