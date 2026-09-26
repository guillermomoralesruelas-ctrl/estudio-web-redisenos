// El clon guarda las fotos en sitio/assets/wp-content/uploads/ (50 imágenes: platillos, el restaurante, el chef,
// logotipos, insignias de premios, fotos de perfil de las reseñas de Google y algunas que parecen de banco,
// como pexels-helena-lopes-696218-1-1-300x200.jpg, que NO se usan).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/328-donsanchez/rediseno)
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
const lista = [
  ['2022/07/cropped-favicon-naranja_Mesa-de-trabajo-1-192x192.png', 'icono', 96],
  ['2022/07/Act_06julio.png', 'logo', 806],
  ['2022/07/Recurso-1.png', 'logo-claro', 518],
  // El restaurante y el chef
  ['2022/07/DonSanchezSesionExtra-22-1-1.jpg', 'muro-neon', 1600],
  ['2022/06/DonSanchezRestaurante23.jpg', 'salon', 1100],
  ['2023/06/ChefEdgar-DonSanchez1.jpg', 'chef-edgar-roman', 1100],
  ['2022/07/Carrusel-rehearsal.jpg', 'cena-de-grupo', 1024],
  ['2022/06/DonSanchezSesionExtra-24.jpg', 'mesa-foto', 900],
  ['2023/06/PremiacionDonSanchez-Dic20227.jpg', 'coctel', 900],
  ['2023/06/Diamonds-Award-Don-Sanchez-San-Jose-del-Cabo-Restaurant.jpg', 'five-star-diamond', 818],
  ['2024/07/guia2.png', 'insignia-guia-2024', 640],
  ['2022/09/file.png', 'insignia-queer-destinations', 600],
  // Platillos (el nombre de cada archivo del sitio dice qué platillo es)
  ['2024/11/grilled.jpg', 'grilled-octopus', 1025],
  ['2024/11/sterling.jpg', 'beef-brisket', 1025],
  ['2024/11/desert.jpg', 'desert-catch', 1025],
  ['2024/11/quail.jpg', 'quail-pozole', 1025],
  ['2024/11/jicama.jpg', 'jicama-sashimi', 1025],
  ['2024/11/churros.jpg', 'churros', 1025],
  ['2023/09/tar-tar-de-la-pesca-del-dia-don-sanchez-los-cabos.jpg', 'catch-tartar', 1025],
  ['2023/09/surf-and-turf-taco-don-sanchez-restaurant-san-jose-del-cabo.jpg', 'surf-and-turf-taco', 1025],
  ['2023/09/MenuDonSanchez-34.jpg', 'charred-beets', 1025],
  ['2023/09/risotto-langosta-don-sanchez-los-cabos.jpg', 'lobster-chili', 1025],
  ['2023/09/carpaccio-de-abulon-don-sanchez-los-cabos-restaurante.jpg', 'abalone-carpaccio', 1025],
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
