// Método 1.2 en la nube: el clon no traía ninguna foto. El 2026-10-09 se bajaron a ../assets/originales/ las de sus dos
// sitios (bacalar.com.mx, ventas, y azulbacalar.com, administración y rentas, que comparten marca, correo y WhatsApp):
// laguna-* (la laguna; la del muelle viene de su Facebook y la del dron de su página de contacto), cdp-* (Casa de Piedra),
// malena-* (renders del desarrollo Malena), renta-* (propiedades que administran en renta vacacional) y logo.png.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/75-azulbacalar/rediseno)
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
const sinExt = (f) => f.replace(/\.(jpe?g|png|webp)$/i, '');

const medidas = {};
for (const f of fs.readdirSync(origen)) {
  if (f === 'logo.png') continue;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 })
    .toFile(path.join(destino, `${sinExt(f)}.webp`));
  medidas[sinExt(f)] = [info.width, info.height];
}
// Logotipo: recortado; y una versión con el texto en blanco (el gris del logotipo no se lee sobre el azul de la laguna).
await sharp(path.join(origen, 'logo.png')).trim().resize({ width: 640 }).png().toFile(path.join(destino, 'logo.png'));
const { data, info } = await sharp(path.join(destino, 'logo.png')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  if (Math.abs(r - g) < 14 && Math.abs(g - b) < 14) { data[i] = data[i + 1] = data[i + 2] = 255; } // gris del texto → blanco
}
await sharp(data, { raw: info }).png().toFile(path.join(destino, 'logo-claro.png'));
medidas.logo = [info.width, info.height];
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0B5B74"/><g fill="#9FE3E8"><rect x="12" y="15" width="40" height="5"/><rect x="12" y="24" width="28" height="5"/><rect x="12" y="33" width="40" height="5"/><rect x="12" y="42" width="34" height="5"/></g></svg>');
await sharp(path.join(origen, 'laguna-dron.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
