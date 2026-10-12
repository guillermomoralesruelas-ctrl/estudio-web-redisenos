// Método 1.2 en la nube: el clon de EasyBroker solo guardó la ficha de una casa de la red (Casa Azul, con marca de agua de otra inmobiliaria).
// El 2026-10-12 se bajaron a ../assets/originales/ las fotos de portada (1200 px, assets.easybroker.com) de las propiedades
// que Thó Real Estate publica a su nombre, y su logotipo. Este script crea copias .webp en ../assets/web/ (publicDir de Vite),
// el logotipo recortado y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/155-casaazulgran/rediseno)
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
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: casa dorada, "Tho" y mariposa sobre fondo blanco; se recorta el blanco sobrante.
await sharp(path.join(origen, 'logo.png')).flatten({ background: '#ffffff' }).trim({ threshold: 12 }).resize({ height: 240 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'eb-wd4857.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
