// El clon guarda sus imágenes en sitio/assets/images/: 31 fotos propias de bodas documentales
// de Christian Macías, en Guadalajara, Jalisco, y destinos. La mayoría son 1200×800 px a color.
// También hay su retrato en blanco y negro (1000×1250 px). Todas parecen de bodas reales;
// ninguna trae metadatos de Google Maps/Picasa ni marcas de IA.
// No se descargó nada nuevo. Este script crea copias .webp ligeras SOLO de las que usa el rediseño
// en assets/web/ (no toca el clon). Vite usa ../sitio/assets/images/ como publicDir pero como
// las fotos son muchas se mantiene directo; solo se generan webp para el hero y las galerías.
// Uso: node fotos-web.mjs   (desde proyectos/214-christianmacias/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
// Hero: vestido de novia (1280×853) → amplio para pantalla completa
// Galería: la serie boda-documental-guadalajara (1200×800), más haciendas y sesiones
// Sobre mí: el retrato bn (1000×1250) → 800 px de alto
// Guías: tres fotos de destinos (800px originales) → ya son pequeñas
const lista = [
  // Hero y portada
  ['vestido-de-novia-espalda-abrazo-boda-christian-macias.jpg', 'hero', 1400],
  // Sobre mí - retrato en b&n
  ['christian-macias-fotografo-bodas-retrato-bn.webp', 'retrato-bn', 800],
  // Galería principal — selección de 18 mejores
  ['boda-documental-guadalajara-christian-macias-01.jpg', 'galeria-01', 1000],
  ['boda-documental-guadalajara-christian-macias-02.jpg', 'galeria-02', 1000],
  ['boda-documental-guadalajara-christian-macias-03.jpg', 'galeria-03', 1000],
  ['boda-documental-guadalajara-christian-macias-04.jpg', 'galeria-04', 1000],
  ['boda-documental-guadalajara-christian-macias-05.jpg', 'galeria-05', 1000],
  ['boda-documental-guadalajara-christian-macias-06.jpg', 'galeria-06', 1000],
  ['boda-documental-guadalajara-christian-macias-07.jpg', 'galeria-07', 1000],
  ['boda-documental-guadalajara-christian-macias-08.jpg', 'galeria-08', 1000],
  ['boda-documental-guadalajara-christian-macias-10.jpg', 'galeria-10', 1000],
  ['boda-documental-guadalajara-christian-macias-11.jpg', 'galeria-11', 1000],
  ['boda-documental-guadalajara-christian-macias-14.jpg', 'galeria-14', 1000],
  ['boda-documental-guadalajara-christian-macias-17.jpg', 'galeria-17', 1000],
  ['boda-documental-guadalajara-christian-macias-19.jpg', 'galeria-19', 1000],
  ['boda-documental-guadalajara-christian-macias-20.jpg', 'galeria-20', 1000],
  // Hacienda Benazuza (grande)
  ['hacienda-benazuza-ceremonia-novios-hora-dorada-christian-macias-1600.jpg', 'benazuza-ceremonia', 1200],
  ['hacienda-benazuza-primer-baile-noche-chispas-christian-macias-1600.jpg', 'benazuza-baile', 1200],
  ['hacienda-benazuza-ceremonia-invitados-sombrillas-christian-macias-1600.jpg', 'benazuza-sombrillas', 1200],
  // Destinos — guías
  ['sesion-evelyn-antonio-santo-domingo-oaxaca-amanecer-christian-macias-800.jpg', 'oaxaca', 800],
  ['hacienda-el-centenario-cactus-hora-dorada-boda-tequila-christian-macias-800.jpg', 'tequila', 800],
  ['monte-coxala-novios-atardecer-lago-chapala-christian-macias-800.jpg', 'chapala', 800],
  // Sesión previa
  ['sesion-compromiso-bosque-luz-dorada-guadalajara-christian-macias.jpg', 'sesion-previa', 1000],
  // Buganvilias y muro azul
  ['fotografia-documental-bodas-buganvilias-christian-macias.webp', 'buganvilias', 800],
  ['fotografo-bodas-guadalajara-muro-azul-christian-macias.webp', 'muro-azul', 800],
  // Zapatos (detalle)
  ['zapatos-de-novia-detalle-boda-christian-macias.jpg', 'zapatos', 800],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  if (!fs.existsSync(entrada)) {
    console.warn(`Falta: ${archivo}`);
    continue;
  }
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
