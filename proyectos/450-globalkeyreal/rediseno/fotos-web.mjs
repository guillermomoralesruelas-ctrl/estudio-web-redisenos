// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-11 se bajaron a ../assets/originales/
// las fotos de portada de 25 de sus propiedades publicadas (assets.easybroker.com, a 1200 px), la imagen de su portada,
// su logotipo y los de AMPI, FIABCI, REALTOR y World Properties.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/450-globalkeyreal/rediseno)
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
  const lado = n.startsWith('departamentos-en-preventa-en-zona-') ? 2000 : 1400;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipos: el de GlobalKey (llave dorada y letras negras) y los de las asociaciones.
for (const n of ['logo', 'logo-_ampi_logo_agua', 'logo-fiabci_logo1', 'logo-world-properties', 'logo-realtor']) await sharp(path.join(origen, `${n}.png`)).trim({ threshold: 10 }).resize({ height: 160, withoutEnlargement: true }).png().toFile(path.join(destino, `${n}.png`));
await sharp(path.join(origen, 'departamentos-en-preventa-en-zona-real-z.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
