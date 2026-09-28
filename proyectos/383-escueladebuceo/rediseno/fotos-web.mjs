// Fotos propias del clon (sitio/assets/wp-content/uploads/): la playa y la costa de Cabo Pulmo (2017-2018), el grupo de
// snorkel en un río y la foto bajo el agua de "Nosotros". Dos traen XMP de Adobe Photoshop (edición), sin marcas de IA.
// No se usan las fotos de pxhere.com (banco gratuito), Scuba_AllGear (Wikimedia) ni whale-shark-297lwug (banco).
// No se descargó nada nuevo. Este script crea copias .webp en ../assets/web/, el logo, el favicon, la imagen para
// compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/383-escueladebuceo/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const fotos = [
  ['2018/01/Cabo-Pulmo-Noviembre-2017-14.jpg', 'f-playa', 1600],
  ['2018/04/cabopulmo1.jpg', 'f-costa', 1400],
  ['2018/02/skindiver-700x500.jpg', 'f-snorkel', 700],
  ['2018/01/somos-pa02.jpg', 'f-fondo', 1600],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo con letras blancas (para fondo oscuro).
const logo = path.join(origen, '2018/01/logo-PA-bco.png');
const infoLogo = await sharp(logo).trim().resize({ height: 140 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
await sharp(path.join(origen, '2017/05/cropped-logo-PA-192x192.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
