// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-12 se leyó su catálogo completo
// (26 propiedades en 2 páginas de grupofractal.mx/properties) y se bajaron a ../assets/originales/ una foto por propiedad
// (assets.easybroker.com, a 1200 px; algunas con su marca "fractal"), tres interiores extra, su logotipo y su retrato
// de "Arturo Bienes Raíces" (página ¿Quiénes somos?).
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el logotipo recortado y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/473-grupofractal/rediseno)
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
  if (n.startsWith('logo') || n.startsWith('arturo')) continue;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Retrato: la imagen original trae el logotipo a la izquierda; se recorta solo a la persona.
const ret = await sharp(path.join(origen, 'arturo-fractal.jpg')).extract({ left: 1262, top: 380, width: 520, height: 772 })
  .webp({ quality: 80 }).toFile(path.join(destino, 'arturo.webp'));
medidas.arturo = [ret.width, ret.height];
// Logotipo: letras negras y la "a" dorada, sobre transparente.
const logo = await sharp(path.join(origen, 'logo-fractal.png')).trim({ threshold: 10 }).resize({ height: 120, withoutEnlargement: true }).png().toFile(path.join(destino, 'logo.png'));
medidas.logo = [logo.width, logo.height];
await sharp(path.join(origen, 'eb-5463356.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'imágenes');
