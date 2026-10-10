// Método 1.2 en la nube: el clon solo bajó 7 avatares de reseñas. El 2026-10-10 se bajaron a ../assets/originales/ desde
// storage.googleapis.com/junglerealtors/ las fotos de las 19 propiedades destacadas de su inicio, las fotos del equipo
// (about-us y contact-form), las 4 fotos de destinos, el reconocimiento "Best in Tulum 2024", su logotipo y su ícono.
// Dos fotos de propiedad traen abajo una franja con el asesor y el teléfono: se recortan para quedarse con la propiedad.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/600-junglerealtor/rediseno)
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

const recortes = {
  'p-alkavena302bac': { left: 0, top: 0, width: 1434, height: 570 },
  'p-bacalar-2br': { left: 210, top: 0, width: 814, height: 860 },
};

const medidas = {};
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f) && f !== 'logo.jpg')) {
  const n = f.replace(/\.[^.]+$/, '');
  let img = sharp(path.join(origen, f)).rotate();
  if (recortes[n]) img = img.extract(recortes[n]);
  const info = await img.resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
const { info } = await sharp(path.join(origen, 'logo.jpg')).trim({ threshold: 20 }).resize({ width: 520 }).png().toBuffer({ resolveWithObject: true })
  .then(async (r) => { fs.writeFileSync(path.join(destino, 'logo.png'), r.data); return r; });
medidas.logo = [info.width, info.height];
await sharp(path.join(origen, 'icono.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'p-ltcuyjr.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
