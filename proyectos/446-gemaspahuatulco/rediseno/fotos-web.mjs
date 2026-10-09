// Método 1.2 en la nube: el clon no trae fotos (su sitio las sirve desde content.app-sources.com). El 2026-10-09 se bajaron
// a ../assets/originales/ sus fotos propias (cabina, recepción, productos, masajes en la playa, en terrazas y albercas, en
// yate) y su logotipo. No se usan las fotos de banco de su página de faciales ni los vales con modelo de banco.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/446-gemaspahuatulco/rediseno)
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

const medidas = {};
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
const logo = path.join(origen, 'logo.png');
const info = await sharp(logo).trim().resize({ width: 360 }).png().toFile(path.join(destino, 'logo.png'));
medidas.logo = [info.width, info.height];
// Icono: la flor de loto de su logotipo (parte superior), sobre arena.
const recorte = await sharp(logo).trim().png().toBuffer({ resolveWithObject: true });
const meta = recorte.info;
const flor = await sharp(recorte.data).extract({ left: 0, top: 0, width: meta.width, height: Math.round(meta.height * 0.42) }).trim()
  .resize(52, 52, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#F6EFE6' } }).composite([{ input: flor, gravity: 'center' }]).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'playa-dos.jpeg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
