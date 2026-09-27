// El clon solo trae el inicio de juancamaney.com; sus imágenes están en sitio/assets/wp-content/uploads/.
// Fotos propias usables: las cinco de sus productos con su etiqueta de la calavera (pomadas Imperial, Burguesa y
// Revolucionaria; aceites para barba Cítrico y Maderas, 720 px), más su calavera y su ilustración "¿Por qué Juan
// Camaney?". Ninguna trae EXIF de Google Maps/Picasa ni marcas de IA.
// No se usan: el sillón Chesterfield de la entrada y el sillón de barbero de "servicios" (no se puede comprobar que sean
// de su local y parecen de banco; su sitio también usa fotos de Shutterstock), el sillón recortado y los grabados
// antiguos (clip-art), las texturas de tapiz (de banco: una se llama texture-3475980, número de Pixabay) y los logos de
// Mercado Libre y WhatsApp. No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon).
// Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/599-juancamaney/rediseno)
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

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['2013/06/juan-camaney-pomada-imperial-super-fuerte-1-720x720.png', 'pomada-imperial', 720],
  ['2020/10/juan-camaney-pomada-burguesa-mate-720x720.png', 'pomada-burguesa', 560],
  ['2020/10/juan-camaney-pomada-revolucionaria-fuerte-1-720x720.png', 'pomada-revolucionaria', 560],
  ['2020/10/juan-camaney-aceite-para-barba-citrico-720x720.png', 'aceite-citrico', 560],
  ['2020/10/juan-camaney-aceite-para-barba-maderas-1-720x720.png', 'aceite-maderas', 560],
  ['2020/11/preguntas_juan-camaney.png', 'por-que', 335],
  ['2020/11/calavera2-150x150.png', 'calavera', 150],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su calavera de sombrero, a 64 px.
await sharp(path.join(origen, '2020/11/calavera2-150x150.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
