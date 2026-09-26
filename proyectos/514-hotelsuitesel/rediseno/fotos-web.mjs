// El clon guarda las fotos en sitio/assets (img/, wp-content/uploads/revslider/ y storage/) con nombres codificados (%20, %C3%AD).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/514-hotelsuitesel/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['favicon.png', 'icono', 96],
  ['img/logo-hotel-and-suites-el-moro-footer.png', 'logo-el-moro', 400],
  ['wp-content/uploads/revslider/home-page/1742495420-Sin-t%C3%ADtulo-3.jpg', 'alberca-atardecer', 1920],
  ['wp-content/uploads/revslider/home-page/1738876078-slider6.jpg', 'cupula-palmeras', 1600],
  ['wp-content/uploads/revslider/home-page/1742494609-Sin-t%C3%ADtulo-4.jpg', 'fuente-edificio', 1600],
  ['wp-content/uploads/revslider/home-page/1777332849-MORO%20DRONE%20WEB%201920%2012.jpg', 'vista-aerea', 1400],
  ['img/habitaciones/1777498852-69f27ae47c912270x270.jpg', 'estandar-doble', 640],
  ['img/habitaciones/1777346460-69f0279ccecd0270x270.jpg', 'suite-familiar', 640],
  ['img/habitaciones/1777498090-69f277ea18c0d270x270.jpg', 'suite-con-desvan', 640],
  ['img/habitaciones/1777479336-69f22ea8cba46270x270.jpg', 'suite-deluxe', 640],
  ['img/habitaciones/1777478325-69f22ab5a7c28270x270.jpg', 'master-suite', 640],
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
