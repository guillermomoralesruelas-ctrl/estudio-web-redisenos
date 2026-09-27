// El clon guarda las imágenes en sitio/assets/assets/ (16 archivos: la foto de la entrada del restaurante, 13 fotos de
// platillos en platillos/, la portada del menú en img/fotomenu.png, el sello "HB" en favicon.png y el fondo de su
// portada en img/background.webp).
// NO se usa img/background.webp (2752x1536, el fondo de su portada): es un banquete en una terraza frente al mar con
// una máquina de pasta, alcachofas y una botella con la etiqueta deformada; parece una imagen generada con IA, no una
// foto del restaurante (ver CAMBIOS.md y OPORTUNIDADES.md). Ninguna imagen trae metadatos de edición con IA.
// Este script crea copias .webp ligeras SOLO de lo que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/496-higuerablanca/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo, recorte opcional {left, top, width, height}]
// El logo (cangrejo con copa y "Higuera Blanca Restaurante") se recorta de la portada de su menú (img/fotomenu.png):
// el clon no trae el logo suelto.
const lista = [
  ['img/fotomenu.png', 'logo', 420, { left: 100, top: 88, width: 420, height: 346 }],
  ['historia-restaurante.png', 'entrada', 1000],
  ['platillos/Vuelvealavidamarinera.jpeg', 'vuelve-a-la-vida', 1100],
  ['platillos/Acamayasenchipotladas.jpeg', 'acamayas', 1100],
  ['platillos/Camaronesalmojodeajo.jpeg', 'camarones-mojo', 960],
  ['platillos/Caldoderebanadaderobalo.jpeg', 'caldo-robalo', 960],
  ['platillos/Lomochilelimon.jpeg', 'negrillo-chile-limon', 960],
  ['platillos/EnsaladaMichelle.jpeg', 'ensalada-michelle', 960],
  ['platillos/DobladasMalpica.jpeg', 'dobladas-malpica', 960],
  ['platillos/Picadasdehueva.jpeg', 'picadas-hueva', 960],
  ['platillos/Platanorellenodemariscos.jpeg', 'platano-relleno', 960],
  ['platillos/salmonensalsachuntey.jpeg', 'salmon-chutney', 960],
  ['platillos/Coladelangostaalamantequilla.jpeg', 'cola-langosta', 960],
  ['platillos/Tentaculosteriyaki.jpeg', 'tentaculos', 960],
];

let antes = 0, despues = 0;
const vistos = new Set();
const medidas = {};
for (const [archivo, nombre, lado, recorte] of lista) {
  const entrada = path.join(origen, archivo);
  if (!vistos.has(archivo)) { antes += fs.statSync(entrada).size; vistos.add(archivo); }
  let img = sharp(entrada);
  if (recorte) img = img.extract(recorte);
  const info = await img
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su sello "HB" (favicon.png del sitio), 64x64 y 180x180.
await sharp(path.join(origen, 'favicon.png')).resize(64, 64, { fit: 'cover' }).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'favicon.png')).resize(180, 180, { fit: 'cover' }).png().toFile(path.join(destino, 'icono-180.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
