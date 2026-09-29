// Método 1.2 en la nube: el clon (Next.js) solo traía el logotipo. Se bajaron del sitio en vivo (befit.mx/*.png) las
// fotos reales del gimnasio y se guardaron en assets/originales/: las dos sucursales, una clase de funcional y una zona
// de pesas (está en su servidor, pero su página no la usa). Las de box, crossfit, zumba, zumba step, spinning y la
// portada son de banco y no se usaron. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/449-gimnasiobefit/rediseno)
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

for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg'))) {
  await sharp(path.join(origen, f)).webp({ quality: 80 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
await sharp(path.join(origen, 'logo-be-fit.png')).webp({ quality: 95 }).toFile(path.join(destino, 'logo-be-fit.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#2340a8"/><text x="32" y="42" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="26" fill="#fff">BF</text></svg>');
console.log('ok');
