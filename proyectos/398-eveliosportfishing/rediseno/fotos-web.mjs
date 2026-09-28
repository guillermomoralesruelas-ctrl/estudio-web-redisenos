// Fotos propias del clon (sitio/assets/wp-content/uploads/go-x/u/, sitio de IONOS): sus capturas (marlin, dorado),
// clientes a bordo, su lancha, una ballena frente a la costa de Puerto Escondido, delfines bajo el agua, una tortuga y
// el premio del Torneo de Pesca 2024. No se usan el delfín y el marlín saltando ni los peces vela ilustrados (parecen
// de banco). No se descargó nada nuevo. Este script crea copias .webp en ../assets/web/, el logo, el favicon, la
// imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/398-eveliosportfishing/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads/go-x/u');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const fotos = [
  ['c81138e6-5e33-4b05-a5d8-6003e8fed71c/image.jpg', 'f-ballena', 1600],
  ['4b58a969-b554-4da9-af64-83c46c9fbc7a/image.jpg', 'f-delfines', 1400],
  ['e163dafa-cebe-486d-8ba9-074ca68a9c69/image.jpg', 'f-lancha', 720],
  ['b3d7c364-f539-4326-8015-7afa1d93fff6/image.jpg', 'f-premio', 960],
  ['ae9a07ec-7f51-42d0-8687-f6c376a10ef7/image.jpg', 'f-dorado', 738],
  ['2dfb2dc6-7893-4ace-92c6-d9eb0b366b5b/image.jpg', 'f-marlin', 960],
  ['e97840ab-cfa6-4de6-8338-e2ed9dfd4111/image.jpg', 'f-clientes', 960],
  ['636748c6-4a78-44ac-b778-ce0d1b0023ec/l177,t0,w898,h898/image-768x768.jpg', 'f-tortuga', 768],
  ['c934c51c-e481-4e66-8b7f-016528e03dfa/image.jpg', 'f-playa', 1000],
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

const logo = path.join(origen, 'b87ad721-0071-4801-b468-f929afd40123/l0,t0,w950,h950/image.png');
const infoLogo = await sharp(logo).trim().resize({ height: 160 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
await sharp(logo).trim().resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
