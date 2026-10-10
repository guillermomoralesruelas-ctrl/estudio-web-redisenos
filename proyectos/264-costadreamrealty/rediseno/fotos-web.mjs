// Método 1.2 en la nube: el clon solo trae el logotipo y unas capturas; el catálogo vive en EasyBroker. El 2026-10-10 se
// leyeron las 3 páginas de costadreamrealty.com/properties (50 propiedades) y se bajó la foto de portada de cada una de
// assets.easybroker.com a ../assets/originales/portadas/<código EB>.jpg. No se usa EB-TB7446 (captura de Google Maps).
// Algunas portadas son renders de preventa publicados por la propia inmobiliaria.
// Este script crea copias .webp en ../assets/web/p/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/264-costadreamrealty/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales/portadas');
const destino = path.join(aqui, '../assets/web/p');
fs.mkdirSync(destino, { recursive: true });

const medidas = {};
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f) && f !== 'EB-TB7446.jpg')) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Portada: piscina infinita del hotel boutique de Mazunte (EB-TV5789).
const portada = path.join(origen, 'EB-TV5789.jpg');
await sharp(portada).rotate().webp({ quality: 78 }).toFile(path.join(destino, '../portada.webp'));
await sharp(portada).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, '../compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(Object.keys(medidas).length, 'fotos');
