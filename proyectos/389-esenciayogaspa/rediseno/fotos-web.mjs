// Método 1.2 en la nube: el clon de Squarespace solo trae la portada (que además es un muro de idioma). El 2026-10-11 se bajaron a
// ../assets/originales/ las fotos de sus páginas en español (inicio, quiénes somos, yoga, spa, experiencias y contacto),
// el logotipo y los sellos de Yoga Alliance y TripAdvisor (images.squarespace-cdn.com, a 1500 px).
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/389-esenciayogaspa/rediseno)
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
  if (n.startsWith('logo') || n === 'yoga-alliance' || n === 'tripadvisor') continue;
  const lado = 1400;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo (loto turquesa y rosa, 300 px en su sitio) y sellos: se copian como PNG.
await sharp(path.join(origen, 'logo-esencia.png')).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'yoga-alliance.png')).png().toFile(path.join(destino, 'yoga-alliance.png'));
await sharp(path.join(origen, 'fachada-grupo.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
