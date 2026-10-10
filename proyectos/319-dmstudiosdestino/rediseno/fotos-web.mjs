// Método 1.2 en la nube: el clon de Wix trae las imágenes en tamaños pequeños. El 2026-10-10 se bajaron a ../assets/originales/
// las fotos de su página "Estudio de grabación" (static.wixstatic.com, tamaño original): cabina, control room, consola,
// Avalon 737 y la guitarra en el sillón; en las pantallas del control room se lee "DM Studios". También el logotipo K-box
// (no se usa en la página). No se usan los logotipos de tarjetas ni la bocina de producto.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/319-dmstudiosdestino/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f) && !f.startsWith('logo'))) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
await sharp(path.join(origen, 'consola-monitores.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
