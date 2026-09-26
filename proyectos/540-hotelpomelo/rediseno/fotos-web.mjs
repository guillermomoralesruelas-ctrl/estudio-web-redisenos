// Método 1.2: las 143 imágenes originales (assets/pomelo, 56 MB) son demasiado pesadas para servirlas tal cual.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/pomelo-web/
// (no toca los originales). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/540-hotelpomelo/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/pomelo');
const destino = path.join(aqui, '../assets/pomelo-web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  // marca e ilustraciones
  ['ba925d88-HotelPomelo_LogotipoRGB_Granate.png', 'logo-pomelo', 600],
  ['3fb607d6-El_Chiringuito_Logotipo-07.png', 'logo-chiringuito', 600],
  ['a248a615-PelicanoFondo_Pomelo_reflejo_AzulMarino.png', 'ilus-pelicano', 520],
  ['f8bc1771-MonoFondo_Pomelo_Rosa.png', 'ilus-mono', 520],
  ['fc99e909-IguanaFondo_Pomelo_Naranja.png', 'ilus-iguana', 520],
  ['188e0cda-OstraFondo_Pomelo_AzulMarino.png', 'ilus-ostra', 520],
  // portada
  ['c363eed5-PISCINA_JARDIN_1988.jpg', 'portada-piscina', 2000],
  ['1986d580-PISCINA_JARDIN_1841.jpg', 'portada-piscina-vertical', 1400],
  // bienvenida
  ['9b50abc8-PISCINA_JARDIN_1332.jpg', 'jardin-camastros', 1400],
  ['060904f2-IMG_1900.jpg', 'pergola-mar', 1600],
  // habitaciones
  ['20-Galeria_habitaciones_7.jpg', 'hab-cama', 1600],
  ['21-Galeria_habitaciones_8.jpg', 'hab-escritorio', 1400],
  ['23-Galeria_habitaciones_10.jpg', 'hab-flores', 1400],
  ['33-Galeria_habitaciones_12.jpg', 'hab-terraza', 1400],
  ['29-Galeria_habitaciones_6.jpg', 'hab-bano', 1400],
  ['34-Galeria_habitaciones_16.jpg', 'hab-ducha-exterior', 1400],
  ['6280cfe8-Copia_de_HABITACION_1676.jpg', 'hab-vista', 1400],
  // espacios
  ['768884b5-PERGOLA_1958.jpg', 'pergola-sala', 1600],
  ['1ac1c3b8-IMG_1961.jpg', 'pergola-bar', 1400],
  ['c628b83d-PERGOLA_1923.jpg', 'pergola-cocos', 1400],
  // chiringuito
  ['2fca27ac-CHIRINGUITO_5613.jpg', 'chiringuito-noche', 1800],
  ['4853fc29-CHIRINGUITO_5267.jpg', 'chiringuito-arroz', 1400],
  ['adc33dd2-PhotoRed_7_.jpg', 'chiringuito-mesa', 1400],
  ['1afb6f6c-PERGOLA_1836.jpg', 'cocina-pergola', 1200],
  ['996894b4-CHIRINGUITO_5757.jpg', 'cocina-chiringuito', 1200],
  ['29e7973e-HABITACION_1472-2.jpg', 'cocina-habitacion', 1200],
  // experiencias
  ['95be1d6e-PISCINA_JARDIN_1825.jpg', 'exp-dolce', 1400],
  ['e6b609d4-mathieu-chirico-sFSZuKI2CvY-unsplash_1_.jpg', 'exp-surf', 1400],
  ['b14e469f-629A6AB9-A374-4A1D-8094-60F80E096842.PNG', 'exp-masaje', 1200],
  ['ab6f5d20-677BCEB0-7F62-4732-B1D7-E00C98842148.PNG', 'exp-yoga', 1200],
  ['e40e2a2d-Playa_tropical_con_cuencos_y_velas.png', 'exp-holistica', 1200],
  ['28bb759c-Mujeres_a_caballo_en_la_costa_volca_nica.png', 'exp-caballo', 1200],
  ['9029f775-B894C3F9-A9D1-4E6D-A941-A0B3B388636F.PNG', 'exp-picnic', 1200],
  // eventos
  ['65d9626c-N_26L-208.jpg', 'evento-boda', 1600],
  ['d654a928-N_26L-10.jpg', 'evento-carpa', 1400],
  ['a6630453-IMG_3855.jpg', 'evento-mesa', 1400],
  // nosotros y contacto
  ['78352b7a-Collage_FranAngela.png', 'fran-angela', 1000],
  ['4fd9c037-IMG_2050.jpg', 'fachada', 1400],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas));
