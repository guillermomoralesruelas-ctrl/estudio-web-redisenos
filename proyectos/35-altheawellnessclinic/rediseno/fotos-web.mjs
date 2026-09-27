// El clon guarda en sitio/assets/web/image/<id>/ las fotos de su portada. Se usan solo las 5 fotos propias de la clínica
// (lobby con su letrero, sala con el espejo iluminado, IV, consulta de toxina y facial con exosomas), editadas en Adobe y sin
// marcas de IA. NO se usan: "Althea Wellness Clinic - Home.PNG" (fondo de destellos) ni las dos de Sofwave
// (269076 y 269078), que traen credenciales C2PA de gpt-image ("trainedAlgorithmicMedia"): son imágenes generadas con IA.
// El logo no está en el clon (404): el rediseño usa un logotipo de texto como el letrero de su recepción.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon), el favicon y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/35-altheawellnessclinic/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/web/image');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const fotos = [
  ['267429-0127a153/ALTHEA%20WELLNESS%20CLINIC%20-%20PLAYA%20DEL%20CARMEN%20BOTOX%20BOUTIQUE%20BAJA%20%28FEB2026%29%20Lobby.jpg', 'lobby', 1500],
  ['267370-083c4961/ALTHEA%20WELLNESS%20CLINIC%20-%20PLAYA%20DEL%20CARMEN%20BOTOX%20BOUTIQUE%20BAJA%20%28FEB2026%29.jpg', 'sala', 1000],
  ['267355-8f1672d9/ALTHEA%20WELLNESS%20CLINIC%20-%20IV%20Therapy%20Playa%20del%20Carmen%202.jpg', 'iv', 1000],
  ['267356-5440001f/ALTHEA%20WELLNESS%20CLINIC%20-%20medicina%20estetica%20-%20botox.jpg', 'consulta', 1000],
  ['267467-5d1f69f5/ALTHEA%20WELLNESS%20CLINIC%20-%20PLAYA%20DEL%20CARMEN%20BOTOX%20BOUTIQUE%20BAJA%20-%20exosomas.jpg', 'exosomas', 1200],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Imagen para compartir (Open Graph): el lobby en 1200 x 630, en JPG.
await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));

// Favicon: una "A" como la de su letrero, en su taupe (#A48D78 de su tema) sobre marfil. Dibujado por nosotros.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="12" fill="#f6f1ea"/><path d="M32 11 L50 53 H44 L39.5 42 H24.5 L20 53 H14 Z M26.6 37 H37.4 L32 23.6 Z" fill="#7a6552"/></svg>`;
await sharp(Buffer.from(svg)).png().toFile(path.join(destino, 'icono.png'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`${fotos.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`, medidas);
