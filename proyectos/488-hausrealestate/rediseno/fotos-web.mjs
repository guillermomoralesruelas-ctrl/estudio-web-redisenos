// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-11 se bajaron a ../assets/originales/
// las fotos de portada de 46 de sus 707 propiedades publicadas (assets.easybroker.com, a 1200 px), la foto de la portada,
// la de la fundadora, la del kayak, el logotipo de Haus y el de AMPI Playa del Carmen.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/488-hausrealestate/rediseno)
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
  const lado = n === 'sala-portada' ? 2000 : 1400;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipos: se copian como PNG (el de Haus es turquesa con letras blancas, para fondo oscuro).
for (const n of ['logo', 'logo-ampi']) await sharp(path.join(origen, `${n}.png`)).trim({ threshold: 10 }).resize({ width: 420, withoutEnlargement: true }).png().toFile(path.join(destino, `${n}.png`));
await sharp(path.join(origen, 'sala-portada.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
