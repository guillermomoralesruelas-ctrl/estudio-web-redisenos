// Método 1.2 en la nube: el clon no traía ninguna foto (todas viven en assets.easybroker.com). El 2026-10-09 se bajaron
// a ../assets/originales/: propiedades/ (la foto principal, 1200 px, de las 9 propiedades destacadas de su inicio y de
// una propiedad representativa de cada zona con 3 o más en venta), logo.gif y ampi-guadalajara.png (de su organización).
// Algunas fotos de preventa son renders de los desarrollos, tal como los publica la inmobiliaria.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/37-alturamaximareal/rediseno)
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

const medidas = {};
for (const f of fs.readdirSync(path.join(origen, 'propiedades'))) {
  const info = await sharp(path.join(origen, 'propiedades', f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, 'p', `${sinExt(f)}.webp`));
  medidas[sinExt(f)] = [info.width, info.height];
}
// Logotipo: el fondo blanco se vuelve transparente y se recorta; también una versión blanca para fondos oscuros.
const { data, info } = await sharp(path.join(origen, 'logo.gif')).resize({ width: 900 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const blanco = Buffer.from(data);
for (let i = 0; i < data.length; i += 4) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  const a = m > 235 ? 0 : m > 190 ? Math.round(255 * (235 - m) / 45) : 255;
  data[i + 3] = a; blanco[i] = blanco[i + 1] = blanco[i + 2] = 255; blanco[i + 3] = a;
}
await sharp(data, { raw: info }).trim().png().toFile(path.join(destino, 'logo.png'));
await sharp(blanco, { raw: info }).trim().png().toFile(path.join(destino, 'logo-blanco.png'));
const l = await sharp(path.join(destino, 'logo.png')).metadata();
medidas.logo = [l.width, l.height];
const a = await sharp(path.join(origen, 'ampi-guadalajara.png')).resize({ width: 240 }).webp({ quality: 85 }).toFile(path.join(destino, 'ampi.webp'));
medidas.ampi = [a.width, a.height];
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1B2A6B"/><path d="M10 38 L32 20 L54 38" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><rect x="28" y="31" width="8" height="8" fill="#fff"/></svg>');
await sharp(path.join(origen, 'propiedades/EB-UE3808.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
