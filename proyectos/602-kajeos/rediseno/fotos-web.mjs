// El clon guarda en sitio/assets/wp-content/uploads/ las fotos de las propiedades de KAJEOS (fotos de sus fichas y
// tomas de dron de los terrenos) y su logo; las imágenes de portada y categorías son renders de la plantilla y no se
// usan. Este script crea copias .webp en assets/web/ (publicDir de Vite) de las fotos de propiedades, el logo, el ícono
// y la imagen para compartir. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/602-kajeos/rediseno)
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
  ['2025/05/Terrenos-Lic-Mariano-1-1-525x328.jpg', 'p-las-torres'],
  ['2025/05/Terrenos-Lic-Mariano-4-1-525x328.jpg', 'p-ciudad-judicial'],
  ['2025/05/Terrenos-Lic-Mariano-2-1-980x777.jpg', 'terreno-dron'],
  ['2025/10/1522093003-525x328.webp', 'p-magdalena'],
  ['2025/09/1515772251-525x328.webp', 'p-saucedal'],
  ['2025/08/WhatsApp-Image-2025-08-27-at-10.43.44-AM-4-525x328.jpeg', 'p-actipan'],
  ['2025/08/341042870-525x328.webp', 'p-avista'],
  ['2025/08/WhatsApp-Image-2025-08-12-at-11.22.11-AM-525x328.jpeg', 'p-granito'],
  ['2025/08/WhatsApp-Image-2025-08-11-at-3.17.09-PM-3-525x328.jpeg', 'p-zavaleta'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1000, height: 800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
const logo = await sharp(path.join(origen, '2025/04/logo-kajeos-imobiliaria-puebla.png')).trim().resize({ width: 320 }).webp({ quality: 92, alphaQuality: 100 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];
// Ícono: la "K" del logo (el cuadro de la izquierda), sobre blanco.
{
  const recortado = await sharp(path.join(origen, '2025/04/logo-kajeos-imobiliaria-puebla.png')).trim().toBuffer();
  const m = await sharp(recortado).metadata();
  const k = await sharp(recortado).extract({ left: 0, top: 0, width: m.height, height: m.height }).png().toBuffer();
  const k2 = await sharp(k).trim().resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const fondo = Buffer.from('<svg width="64" height="64"><rect width="64" height="64" rx="14" fill="#ffffff"/></svg>');
  await sharp(fondo).composite([{ input: k2, left: 8, top: 8 }]).png().toFile(path.join(destino, 'icono.png'));
}
await sharp(path.join(origen, '2025/08/WhatsApp-Image-2025-08-11-at-3.17.09-PM-3-525x328.jpeg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`, JSON.stringify(medidas));
