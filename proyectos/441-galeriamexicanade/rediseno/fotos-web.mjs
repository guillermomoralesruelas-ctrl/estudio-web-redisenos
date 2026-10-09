// Método 1.2 en la nube: el clon no trae fotos (Squarespace las sirve desde images.squarespace-cdn.com). El 2026-10-09 se
// bajaron a ../assets/originales/ la foto principal de las 38 piezas de su colección (p/), sus fotos de interiorismo
// (int-), de curaduría y exposiciones (cur-), retratos de diseñadores (dis-), la casa-estudio y sus logotipos.
// No se usan las imágenes generadas con IA de su portada ni de sus noticias.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/441-galeriamexicanade/rediseno)
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

const medidas = {};
const esFoto = (f) => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith('logo');
for (const f of fs.readdirSync(path.join(origen, 'p')).filter(esFoto)) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, 'p', f)).flatten({ background: '#ffffff' })
    .resize({ width: 640, height: 800, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `p/${n}.webp`));
  medidas[`p/${n}`] = [info.width, info.height];
}
for (const f of fs.readdirSync(origen).filter(esFoto)) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f))
    .resize({ width: 1500, height: 1500, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo blanco (original) y en tinta para fondos claros.
const logo = path.join(origen, 'logo.webp');
let info = await sharp(logo).trim().resize({ width: 520 }).png().toFile(path.join(destino, 'logo-blanco.png'));
medidas['logo-blanco'] = [info.width, info.height];
const { data, info: i2 } = await sharp(logo).trim().resize({ width: 520 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let k = 0; k < data.length; k += 4) { data[k] = 26; data[k + 1] = 24; data[k + 2] = 22; }
await sharp(data, { raw: i2 }).png().toFile(path.join(destino, 'logo-tinta.png'));
medidas['logo-tinta'] = [i2.width, i2.height];
// Icono: el anillo del logotipo, en tinta sobre crema.
const { data: d3, info: i3 } = await sharp(logo).extract({ left: 212, top: 0, width: 150, height: 150 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let k = 0; k < d3.length; k += 4) { d3[k] = 26; d3[k + 1] = 24; d3[k + 2] = 22; }
await sharp({ create: { width: 170, height: 170, channels: 4, background: '#F3EEE5' } })
  .composite([{ input: await sharp(d3, { raw: i3 }).png().toBuffer() }]).png().toBuffer()
  .then((b) => sharp(b).resize(64, 64).png().toFile(path.join(destino, 'icono.png')));
await sharp(path.join(origen, 'casa-estudio.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
