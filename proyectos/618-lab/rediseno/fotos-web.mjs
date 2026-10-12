// Método 1.2 en la nube: el clon de Squarespace no sirve para rediseñar. El 2026-10-12 se bajaron a ../assets/originales/
// 37 fotos propias de lab-baja.mx (inicio, /rcoffee, /lab-centro, /lab-playita, /cowork-2-1, /location; a 2500 px)
// y su logotipo (lab-tri.png). No se usan los carteles de películas, los flyers ni las capturas de Airbnb.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el logotipo y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/618-lab/rediseno)
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
  const lado = ['lab-entrada', 'playita-palapa', 'playita-terraza'].includes(n) ? 2000 : 1400;
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: las letras L A B en triángulo, color pizarra, fondo transparente.
await sharp(path.join(origen, 'logo-lab-tri.png')).trim({ threshold: 10 }).resize({ height: 160, withoutEnlargement: true }).png().toFile(path.join(destino, 'logo-lab.png'));
await sharp(path.join(origen, 'lab-entrada.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
