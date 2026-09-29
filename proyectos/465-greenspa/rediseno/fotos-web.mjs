// El clon guarda en sitio/assets/wp-content/uploads/ tres fotos propias de GreenSpa (una terapeuta dando masaje, un facial
// con aparatología y el equipo frente a la fachada), las hojas recortadas de su diseño y el logo en SVG. Este script crea
// copias .webp en assets/web/ (publicDir de Vite), dos hojas y el ícono. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/465-greenspa/rediseno)
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
  ['2024/08/1-c-terapeutas-SIN-LOGO-HAY-UNO-NUEVO.webp', 'terapeuta-masaje'],
  ['2024/08/1-c-terapeutas1.webp', 'terapeuta-facial'],
  ['2025/05/Equipo-GreenSpa.jpg', 'equipo-fachada'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Dos de sus hojas recortadas (con transparencia) para el certificado y los fondos.
for (const [archivo, nombre] of [['2024/08/Hoja1.webp', 'hoja-a'], ['2024/08/Hoja3.webp', 'hoja-b']]) {
  await sharp(path.join(origen, archivo)).resize({ width: 420, withoutEnlargement: true }).webp({ quality: 80, alphaQuality: 90 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.copyFileSync(path.join(origen, '2024/08/GreenSpa_Bco.svg'), path.join(destino, 'logo-blanco.svg'));
await sharp(path.join(origen, '2025/05/cropped-logo_greenspa_web-192x192.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
