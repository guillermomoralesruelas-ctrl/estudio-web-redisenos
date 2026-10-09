// Método 1.2 en la nube: el clon (sitio ADN de Sección Amarilla, Duda) no traía fotos. Se bajaron del sitio en vivo
// (irp.cdn-website.com/0c631ede/…, 800 px) a ../assets/originales/ las fotos reales de la clínica: laboratorio,
// consultorios, quirófano, recepción y tienda (farmacia, alimentos, accesorios, correas, antipulgas) y el logotipo.
// No se bajó 076-1920w.jpg (perro salchicha con veterinaria sobre fondo blanco: foto de banco).
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/244-clinicaveterinariadel/rediseno)
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
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg') && n !== 'logo.jpg')) {
  const nombre = f.replace('.jpg', '');
  const info = await sharp(path.join(origen, f)).rotate().webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
// Logotipo: el JPG trae fondo blanco; se pasa a PNG con el blanco transparente.
const { data, info } = await sharp(path.join(origen, 'logo.jpg')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  if (m > 235) data[i + 3] = 0;
}
await sharp(data, { raw: info }).png().toFile(path.join(destino, 'logo.png'));
medidas.logo = [info.width, info.height];
// Ícono e imagen para compartir.
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#DB232C"/><text x="32" y="42" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="24" fill="#fff">Dr.</text></svg>');
await sharp(path.join(origen, 'recepcion.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(medidas);
