// Método 1.2 en la nube: el clon (WordPress de Mirai) no traía fotos. Se bajaron del sitio en vivo
// (static-resources-elementor.mirai.com e images.mirai.com) a ../assets/originales/: fachada, rooftop con alberca,
// atardecer, vista aérea, terraza, florería Flor de Mar, pasillo, una obra de Mónica Andrade, huésped en el balcón,
// las 14 fotos de sus tipos de apartamento (room-<id>.jpg) y su logotipo.
// No se usan las fotos de actividades (yoga, golf, pesca, buggy, cine) ni las del destino (Arco, ballena, pelícanos):
// parecen de banco. Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/416-flamboyanhotelresidences/rediseno)
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
    .resize({ width: 1300, height: 1300, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
fs.copyFileSync(path.join(origen, 'logo.png'), path.join(destino, 'logo.png'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#2F5A2E"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#F2C9B8">F</text></svg>');
await sharp(path.join(origen, 'alberca-rooftop.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
