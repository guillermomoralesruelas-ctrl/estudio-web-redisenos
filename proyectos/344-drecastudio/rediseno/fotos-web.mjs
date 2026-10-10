// Método 1.2 en la nube: el clon de WordPress no trae las galerías (están en subpáginas). El 2026-10-10 se bajaron a
// ../assets/originales/ las 37 fotos de sus galerías Familiar (sesiones de estudio), Empresarial (evento en la Bolsa
// Mexicana de Valores) y Gastronomía (drecastudio.com/wp-content/uploads/), y el logotipo. Su galería "Sociales" no tiene fotos.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/344-drecastudio/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
await sharp(path.join(origen, 'logo-dreca.png')).resize({ width: 600 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'Norma-y-Bruna-47.jpg')).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
