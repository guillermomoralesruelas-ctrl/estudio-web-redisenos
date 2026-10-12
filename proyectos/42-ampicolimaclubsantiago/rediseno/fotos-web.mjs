// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-11 se bajaron a ../assets/originales/
// las fotos de portada de 20 propiedades publicadas por los socios (assets.easybroker.com), los logotipos de los socios
// tal como aparecen en su página "Socios AMPI" (socio-NN), el logotipo blanco de AMPI Colima y la foto de "Representación".
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/42-ampicolimaclubsantiago/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');
sharp.cache(false);

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const medidas = {};
for (const f of fs.readdirSync(origen).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  const entrada = sharp(path.join(origen, f), { limitInputPixels: false }).rotate();
  if (n.startsWith('socio-')) {
    // Logotipos de los socios: se recortan los bordes y se dejan a 320 px con su transparencia.
    const buf = await entrada.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).png().toBuffer();
    const info = await sharp(buf).trim({ threshold: 12 }).resize({ width: 320, height: 200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 86, alphaQuality: 90 }).toFile(path.join(destino, `${n}.webp`));
    medidas[n] = [info.width, info.height];
    continue;
  }
  if (n === 'logo-ampi-colima') { await entrada.trim({ threshold: 10 }).resize({ height: 140, withoutEnlargement: true }).png().toFile(path.join(destino, `${n}.png`)); continue; }
  const info = await entrada.flatten({ background: '#ffffff' })
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Imagen para compartir: logotipo blanco de AMPI Colima sobre su verde.
const logo = await sharp(path.join(origen, 'logo-ampi-colima.png')).trim({ threshold: 10 }).resize({ width: 640 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0E6B3F' } }).composite([{ input: logo, gravity: 'centre' }]).jpeg({ quality: 86 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'imágenes');
