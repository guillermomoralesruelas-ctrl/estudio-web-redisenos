// El clon guarda las fotos en sitio/assets/img con nombres codificados (%20, %C3%A1) y pesos de hasta 634 KB.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/538-hotelpacificpalace/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['imagotipo.png', 'icono', 96],
  ['logo.png', 'logo-pacific', 640],
  ['logo1.png', 'logo-hoteles-palace', 330],
  ['logo2.png', 'logo-luna-palace', 330],
  ['logo3.png', 'logo-oceano-palace', 330],
  ['general/Fachada%20Hotel%20Pacific%20Palce%20Mazatlan%20Sinaloa.webp', 'fachada-aerea', 1800],
  ['rooms/Habitacion_Junior_Suite_con_vista_al_Mar_de_Hotel_Pacific_Palace_Mazatlan.webp', 'junior-suite-mar', 1400],
  ['rooms/Habitacion_Junior_Suite_con_vista_a_la_Ciudad_de_Hotel_Pacific_Palace_Mazatlan.webp', 'junior-suite-ciudad', 1400],
  ['restaurant/Restaurante%20Sunset%20de%20Hotel%20Pacific%20Palace%20Mazatl%C3%A1n.webp', 'restaurante-sunset', 1400],
  ['restaurant/Bar%20Polinesio%20de%20Hotel%20Pacific%20Palace%20Mazatl%C3%A1n.webp', 'bar-polinesio', 1400],
  ['pricing/Especialidad%20internacional%20restaurante%20pelican%20hotel%20Pacific%20Palace%20Mazatl%C3%A1n.jpg', 'plan-todo-incluido', 1200],
  ['pricing/Buffet%20de%20restaurante%20terraza%20de%20Oceano%20Palace%20Mazatlan.jpg', 'plan-desayuno-buffet', 1200],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
