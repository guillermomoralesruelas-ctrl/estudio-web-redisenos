// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-11 se bajaron a ../assets/originales/
// las fotos de portada de 17 de sus 1,877 propiedades publicadas (assets.easybroker.com, a 1200 px; se dejaron fuera las que
// llevan marca de agua de otras inmobiliarias) y el logotipo.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/573-inmobiliariafeyte/rediseno)
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
  const lado = n.startsWith('residencia-en-venta-con-alberca') ? 2000 : 1400;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo completo (vertical) y solo el símbolo de las dos casas para la cabecera.
await sharp(path.join(origen, 'logo.png')).resize({ width: 300 }).png().toFile(path.join(destino, 'logo.png'));
const simbolo = await sharp(path.join(origen, 'logo.png')).extract({ left: 0, top: 0, width: 1487, height: 1360 }).png().toBuffer();
await sharp(simbolo).trim().resize({ width: 160 }).png().toFile(path.join(destino, 'logo-marca.png'));
await sharp(path.join(origen, 'residencia-en-venta-con-alberca-4-recama.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
