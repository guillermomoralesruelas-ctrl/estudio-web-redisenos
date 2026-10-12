// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-12 se bajaron a ../assets/originales/
// las fotos grandes (data-rsbigimg, hasta 1200 px) de 17 propiedades de su catálogo (21 fotos) publicado en firmainmobiliaria.com
// (se dejaron fuera las que llevan marca de agua de otras inmobiliarias, los renders y las láminas con texto) y el logotipo.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el logotipo con fondo transparente y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/166-casaenrenta/rediseno)
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
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: el original es un roble blanco sobre negro (260 × 142). Se usa la luminosidad como transparencia
// para tener el roble y las letras en blanco (fondos oscuros) y en tinta (fondos claros).
const { data, info } = await sharp(path.join(origen, 'logo.jpg')).trim({ threshold: 40 }).greyscale().raw().toBuffer({ resolveWithObject: true });
for (const [nombre, color] of [['logo-blanco.png', [255, 255, 255]], ['logo-tinta.png', [27, 31, 26]]]) {
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    rgba[i * 4] = color[0]; rgba[i * 4 + 1] = color[1]; rgba[i * 4 + 2] = color[2];
    rgba[i * 4 + 3] = Math.min(255, Math.max(0, (data[i] - 30) * 1.3));
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toFile(path.join(destino, nombre));
}
await sharp(path.join(origen, 'tapalpa-cabana-golf-sala.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
