// Método 1.2 en la nube: el clon solo bajó 4 fotos. El 2026-10-10 se bajaron a ../assets/originales/ las fotos de sus tours
// (playamarietas.mx/uploads/) que son suyas según sus metadatos (iPhone 11 Pro y 15 Pro Max, lentes Ray-Ban Meta y una
// Fujifilm X-T4 en temporada de ballenas) y tres más tomadas en Playa Escondida y el Puente de Piedra, más su logotipo.
// No se usan la vista aérea de Punta Mita (firmada por un fotógrafo, Petr Myska) ni las PNG de 1536 × 1024 con siluetas.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/468-grimaradventures/rediseno)
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
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
let info = await sharp(path.join(origen, 'logo.webp')).trim().png().toFile(path.join(destino, 'logo.png'));
medidas.logo = [info.width, info.height];
await sharp(path.join(origen, 'icono.webp')).trim().resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'playa-escondida-aerea.jpeg')).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
