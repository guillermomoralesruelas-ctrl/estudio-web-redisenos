// Método 1.2 en la nube: el clon no traía fotos. Se bajaron de su sitio (assets.zyrosite.com, Hostinger) a
// ../assets/originales/ sus fotos (patio de arcos, zaguán, suites y detalles, salón, eventos, bóveda y el pueblo de
// Nochistlán) y su logotipo. No se usan una foto repetida, una toalla repetida y una foto muy chica.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/623-labovedahotel/rediseno)
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
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg') && true)) {
  const nombre = f.replace('.jpg', '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1300, height: 1300, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(origen, 'logo.png')).resize({ width: 480 }).png().toFile(path.join(destino, 'logo.png'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#2A3345"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#D4AA6A">B</text></svg>');
await sharp(path.join(origen, 'patio-arcos.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
