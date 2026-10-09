// Método 1.2 en la nube: el clon solo traía la foto del letrero. El 2026-10-09 se bajaron a ../assets/originales/ las de
// su sitio (forter.mx/img/): planta, patio de block, vigueta, varilla, armex, camión revolvedor y las fotos de producto
// (los bultos de cemento y mortero son de Cemex), más su marca y logotipos.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/430-forter/rediseno)
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
const producto = /^(block-gris|vigueta-v|bovedilla|cemento-gris|mortero|varilla-|armex-c|malla|alambre|alambron)/;
for (const f of fs.readdirSync(origen)) {
  if (!f.endsWith('.webp')) continue;
  const n = f.replace(/\.webp$/, '');
  const esProducto = producto.test(n);
  const info = await sharp(path.join(origen, f))
    .resize({ width: esProducto ? 480 : 1500, height: esProducto ? 640 : 1500, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: esProducto ? 74 : 76 }).toFile(path.join(destino, esProducto ? `p/${n}.webp` : `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
for (const f of ['wordmark-red.png', 'wordmark-white.png', 'mark.png']) {
  const info = await sharp(path.join(origen, f)).trim().resize({ width: f === 'mark.png' ? 160 : 520 }).png().toFile(path.join(destino, f));
  medidas[f.replace('.png', '')] = [info.width, info.height];
}
await sharp(path.join(origen, 'mark.png')).trim().resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'hero-forter.webp')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
