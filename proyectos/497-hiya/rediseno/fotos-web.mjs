// Método 1.2 en la nube: el clon (Webflow) no traía fotos. Se bajaron del sitio en vivo (cdn.prod.website-files.com)
// a ../assets/originales/ sus 4 fotos propias (la barra con la linterna, el salón, los spicy persian pickles y la
// robata), su logotipo manuscrito (verde y washi) y los títulos manuscritos de su carta.
// No se usan dos fotos que vienen de otro proyecto de Webflow (Screenshot 2023-05-08, platos con otro logotipo).
// Este script crea copias .webp de las fotos y versiones claras (washi) de los títulos en ../assets/web/.
// Uso: node fotos-web.mjs   (desde proyectos/497-hiya/rediseno)
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
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg'))) {
  const nombre = f.replace('.jpg', '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
// Títulos manuscritos (negro sobre transparente) → color washi #EBEBE6 para fondo oscuro
for (const f of fs.readdirSync(origen).filter((n) => n.startsWith('titulo-'))) {
  const { data, info } = await sharp(path.join(origen, f)).ensureAlpha().trim().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) { data[i] = 235; data[i + 1] = 235; data[i + 2] = 230; }
  await sharp(data, { raw: info }).png().toFile(path.join(destino, f));
  medidas[f.replace('.png', '')] = [info.width, info.height];
}
for (const f of ['logo-washi.png', 'logo-verde.png']) {
  const out = await sharp(path.join(origen, f)).trim().resize({ width: 900 }).png().toFile(path.join(destino, f));
  medidas[f.replace('.png', '')] = [out.width, out.height];
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#465A50"/><text x="32" y="44" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="34" fill="#EBEBE6">Hi</text></svg>');
await sharp(path.join(origen, 'salon.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(medidas);
