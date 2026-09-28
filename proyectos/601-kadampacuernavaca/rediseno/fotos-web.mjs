// Crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Origen: el clon (../sitio/assets/web/image) y cuatro imágenes que no estaban en el clon y se bajaron
// con curl del sitio en vivo a ../assets/originales/ (ver FUENTE.txt ahí).
// Uso: node fotos-web.mjs   (desde proyectos/601-kadampacuernavaca/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const clon = path.join(aqui, '../sitio/assets/web/image');
const originales = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo de origen, nombre de salida en assets/web/, lado largo máximo]
const lista = [
  // El centro en Río Conchos 321: jardín y gompa con los ocho signos auspiciosos (página /contactus)
  [path.join(originales, 'centro-fachada-2025.jpeg'), 'centro-jardin', 1800],
  // La sangha reunida en el jardín del centro (portada del clon)
  [path.join(clon, '43899-bbd264ae/487760149_28934411989540894_3370743963831351785_n.jpg'), 'sangha-jardin', 1600],
  // Guen Kelsang Nampur enseñando en la sala de meditación (página /nuestrasclases)
  [path.join(originales, 'guen-nampur-ensenando.jpeg'), 'nampur-ensenando', 900],
  // Retrato de Guen Kelsang Nampur, fondo recortado (página /nosotros)
  [path.join(originales, 'guen-nampur.png'), 'nampur-retrato', 700],
  // Venerable Gueshe Kelsang Gyatso Rimpoché, fondo transparente (portada del clon)
  [path.join(clon, '43901-6ef8dded/corazon.webp'), 'gueshe-la', 900],
  // Je Tsongkhapa, ilustración con fondo transparente (página /nuestrasclases)
  [path.join(originales, 'je-tsongkhapa.webp'), 'je-tsongkhapa', 800],
  // Logotipo azul (rectángulo) y logotipo blanco del pie
  [path.join(clon, '393-43f76221/LogoKadampaCuernavaca2022_Rectangulo%20A-Trans.png'), 'logo-azul', 640],
  [path.join(clon, '44090-1f80c345/Logo-CMKCuerna-curvas-blanco.webp'), 'logo-blanco', 500],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [entrada, nombre, lado] of lista) {
  if (!fs.existsSync(entrada)) { console.warn('No encontrado:', entrada); continue; }
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5, alphaQuality: 90 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Imagen para Open Graph (jpg, 1200 px)
await sharp(path.join(originales, 'centro-fachada-2025.jpeg')).resize({ width: 1200 }).jpeg({ quality: 80 }).toFile(path.join(destino, 'og-centro.jpg'));
console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas, null, 2));
