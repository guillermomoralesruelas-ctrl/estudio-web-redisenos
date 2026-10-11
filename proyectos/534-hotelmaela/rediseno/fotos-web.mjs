// Método 1.2 en la nube: el clon de Duda solo trae la portada. El 2026-10-11 se bajaron a ../assets/originales/
// las fotos de sus páginas (inicio, habitaciones, experiencias, historia y galería) y los logotipos del hotel
// (irp.cdn-website.com, a 1920 px). Las fotos de la ciudad (Santo Domingo, andador, mole) son las que publica el hotel.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/534-hotelmaela/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  if (n.startsWith('logo')) continue;
  const lado = 1400;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipos: se copian como PNG.
for (const n of ['logo-color', 'logo-blanco']) await sharp(path.join(origen, `${n}.webp`)).resize({ width: 600, withoutEnlargement: true }).png().toFile(path.join(destino, `${n}.png`));
await sharp(path.join(origen, 'fachada.webp')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
