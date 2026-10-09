// Método 1.2 en la nube: el clon (sitio en React servido desde su servidor) no traía fotos. Se bajaron del sitio en
// vivo (hangartrc.com/assets/, 1920 px .webp) a ../assets/originales/ sus 27 fotos de instalaciones (las mismas de su
// galería, con sus mismos nombres sin el sufijo de compilación) y su logotipo.
// Este script crea copias .webp más ligeras en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/485-hangartrc/rediseno)
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
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.webp'))) {
  const nombre = f.replace('.webp', '');
  const info = await sharp(path.join(origen, f))
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(origen, 'logo.png')).trim().toFile(path.join(destino, 'logo.png'));
const meta = await sharp(path.join(destino, 'logo.png')).metadata();
medidas.logo = [meta.width, meta.height];
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#111111"/><text x="32" y="46" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="38" fill="#F5D157">H</text></svg>');
await sharp(path.join(origen, 'logo-wall.webp')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos', medidas.logo);
