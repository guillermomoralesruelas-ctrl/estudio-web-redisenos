// Método 1.2 en la nube: el clon de EasyBroker solo trae la plantilla y miniaturas. El 2026-10-12 se bajaron a ../assets/originales/
// las fotos de portada (a 1200 px, el máximo que da assets.easybroker.com) de 48 de las 52 propiedades que su catálogo marca
// "Asesor: Carsa Inmobiliaria", seis fotos de interiores y el logotipo (una diapositiva de 1280×720 con márgenes blancos).
// Se dejaron fuera volantes, planos y fichas técnicas.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el logotipo recortado y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/152-carsainmobiliaria/rediseno)
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
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: se recorta el blanco de la diapositiva. Completo (casa + letras) y solo la casa para la cabecera.
const logo = await sharp(path.join(origen, 'logo.jpg')).trim({ threshold: 20 }).toBuffer({ resolveWithObject: true });
await sharp(logo.data).resize({ width: 360 }).png().toFile(path.join(destino, 'logo.png'));
const casa = await sharp(logo.data).extract({ left: 0, top: 0, width: logo.info.width, height: Math.round(logo.info.height * 0.6) }).trim({ threshold: 20 }).toBuffer();
await sharp(casa).resize({ width: 120 }).png().toFile(path.join(destino, 'logo-casa.png'));
await sharp(path.join(origen, 'modelo-santiago-paseo-de-santiago.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
