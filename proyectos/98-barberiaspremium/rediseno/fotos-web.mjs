// El clon guarda en sitio/assets/assets/ fotos propias de Barberías Premium: tres cortes reales (lacio, rebelde y con
// remolinos) y las fachadas de sus tres sucursales. No se usan el retrato y los tres "looks de ejemplo" del mismo
// modelo (su sitio los marca como ilustrativos), la foto del cine ni las piezas de la app. Este script crea copias .webp en
// assets/web/ (publicDir de Vite), el logo y el ícono. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/98-barberiaspremium/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['corte-lacio.jpg', 'corte-lacio'],
  ['corte-rebelde.jpg', 'corte-rebelde'],
  ['corte-remolinos.jpg', 'corte-remolinos'],
  ['franchise-plaza.webp', 'sucursal-plaza-real'],
  ['franchise-centro.webp', 'sucursal-centro'],
  ['sucursal-express.jpg', 'sucursal-express'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(origen, 'logo-premium.png')).resize({ width: 480 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'chat-avatar-premium.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
