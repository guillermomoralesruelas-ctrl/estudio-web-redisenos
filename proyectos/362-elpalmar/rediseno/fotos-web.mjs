// El clon guarda sus fotos en sitio/assets/assets/: 50 fotos propias de platillos y cócteles (verticales 4:5, con el nombre
// del platillo y su logo impresos arriba o abajo), las dos charolas y el logo. No se usan las charolas (llevan credenciales
// C2PA de imagen generada) ni los PNG de 2 MB de cócteles, nigiris y Tres Puertos (sin metadatos de cámara).
// Este script recorta cada foto al centro en 5:4 (quita el nombre y el logo impresos) y crea copias .webp en assets/web/.
// Vite usa assets/web/ como publicDir. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/362-elpalmar/rediseno)
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

// [archivo original, nombre de salida]
const lista = [
  ['vamos%20empezando/torre-palmar.jpg', 'torre-palmar'],
  ['caliente/pulpo-zaran.jpg', 'pulpo-zarandeado'],
  ['ceviches%20aguachiles%20y%20tostadas/aguachile.jpg', 'aguachile'],
  ['ceviches%20aguachiles%20y%20tostadas/ceviche-loreto.jpg', 'ceviche-loreto'],
  ['ceviches%20aguachiles%20y%20tostadas/ceviche-san-carlos.JPG', 'ceviche-san-carlos'],
  ['ceviches%20aguachiles%20y%20tostadas/tostada-mzt.JPG', 'tostada-mazatlan'],
  ['taquiza/tacos-gobernador.jpg', 'tacos-gobernador'],
  ['vamos%20empezando/campechana.jpg', 'campechana'],
  ['sushi%20entradas/camarones-yu.jpg', 'camarones-yu'],
  ['arroz/yakimeshi-sup.JPG', 'yakimeshi'],
  ['roll/rainbow-roll.jpg', 'rainbow-roll'],
  ['caliente/hamburguesa.jpg', 'hamburguesa'],
  ['cocteles/margarita-mango.JPG', 'margarita-mango'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const { width, height } = await sharp(entrada).metadata();
  const alto = Math.round(width * 0.8);
  const top = Math.round((height - alto) / 2);
  const info = await sharp(entrada)
    .extract({ left: 0, top, width, height: alto })
    .resize({ width: Math.min(width, 1000) })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo (PNG transparente, letras oscuras): solo el dibujo (palmera, sol y ola) para el encabezado claro y el favicon.
const dibujo = { left: 165, top: 50, width: 640, height: 660 };
await sharp(path.join(origen, 'logo.png')).extract(dibujo).resize(160).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
await sharp(path.join(origen, 'logo.png')).extract(dibujo).resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
