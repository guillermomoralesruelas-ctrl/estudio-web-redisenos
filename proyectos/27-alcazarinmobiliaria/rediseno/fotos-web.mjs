// Método 1.2 en la nube: el clon no traía ninguna foto (todas viven en assets.easybroker.com). El 2026-10-09 se bajaron
// a ../assets/originales/: propiedades/ (la foto de portada de cada una de sus 137 propiedades publicadas, 450x300,
// tal como la muestra su listado), destacadas/ (la foto grande de 8 propiedades para el hero y las destacadas),
// logo.jpg y terraza.jpeg (las fotos de su organización en EasyBroker).
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/27-alcazarinmobiliaria/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(path.join(destino, 'p'), { recursive: true });
const sinExt = (f) => f.replace(/\.(jpe?g|png)$/i, '');

// Fotos de portada del listado: se sirven a su tamaño (450 px) en la carpeta p/.
for (const f of fs.readdirSync(path.join(origen, 'propiedades'))) {
  await sharp(path.join(origen, 'propiedades', f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 450, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, 'p', `${sinExt(f)}.webp`));
}
const medidas = {};
for (const f of fs.readdirSync(path.join(origen, 'destacadas'))) {
  const info = await sharp(path.join(origen, 'destacadas', f)).rotate()
    .resize({ width: 1500, height: 1500, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78 }).toFile(path.join(destino, `${sinExt(f)}.webp`));
  medidas[sinExt(f)] = [info.width, info.height];
}
// Logotipo: el fondo blanco se vuelve transparente para usarlo sobre cualquier color.
const { data, info } = await sharp(path.join(origen, 'logo.jpg')).resize({ width: 900 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  if (m > 235) data[i + 3] = 0; else if (m > 200) data[i + 3] = Math.round(255 * (235 - m) / 35);
}
await sharp(data, { raw: info }).trim().png().toFile(path.join(destino, 'logo.png'));
const l = await sharp(path.join(destino, 'logo.png')).metadata();
medidas.logo = [l.width, l.height];
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#3F4044"/><text x="32" y="45" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="38" fill="#C9AE72">A</text></svg>');
await sharp(path.join(origen, 'destacadas/casa-con-alberca-en-huayapam.jpeg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(fs.readdirSync(path.join(destino, 'p')).length, 'portadas,', Object.keys(medidas).length, 'fotos grandes');
