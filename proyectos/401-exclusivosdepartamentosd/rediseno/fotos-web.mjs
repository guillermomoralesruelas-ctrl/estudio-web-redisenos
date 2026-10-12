// Método 1.2 en la nube: el clon de EasyBroker solo trae la hoja de estilos de la plantilla "Ensenada", sin fotos.
// El 2026-10-12 se bajaron a ../assets/originales/ la foto de portada (1200 px, la más grande que da EasyBroker) de 21 propiedades
// de Baja California Sur que publica su catálogo (revisadas a mano: ninguna lleva marca de agua de otra inmobiliaria) y el logotipo; además, las fotos de 3 de sus 9 propiedades destacadas en la portada y una de la preventa sobre Calzada del Valle (San Pedro), la ficha que guardó el fabricador.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el logotipo y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/401-exclusivosdepartamentosd/rediseno)
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
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: el sello circular amarillo; se recorta el borde negro de las esquinas con una máscara circular.
const L = 200, r = 95;
const mascara = Buffer.from(`<svg width="${L}" height="${L}"><circle cx="${L / 2}" cy="${L / 2}" r="${r}" fill="#fff"/></svg>`);
const logo200 = await sharp(path.join(origen, 'logo.png')).resize({ width: L, height: L }).png().toBuffer();
await sharp(logo200).composite([{ input: mascara, blend: 'dest-in' }]).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, '799-has-chuenque-tripui-playa-juncalito.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
