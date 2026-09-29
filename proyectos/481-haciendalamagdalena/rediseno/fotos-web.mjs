// El clon guarda en sitio/assets/img/ las 8 fotos de la hacienda (slider de portada, foto de inicio y dos destacadas;
// todas con el mismo retoque y sin marcas de agua) y el logo caligráfico. Este script crea copias .webp en
// assets/web/ (publicDir de Vite), el logo y el ícono. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/481-haciendalamagdalena/rediseno)
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

const lista = [
  ['home.jpg', 'casco-anochecer', 1800],
  ['slider/01.jpg', 'habitacion-tapiz', 1400],
  ['slider/02.jpg', 'alberca-morisca', 1400],
  ['slider/03.jpg', 'terraza-comedor', 1400],
  ['slider/04.jpg', 'capilla-verde', 1400],
  ['slider/05.jpg', 'spa-cabina', 1400],
  ['featured-01.jpg', 'estanque', 720],
  ['featured-02.jpg', 'alcoba-doble', 720],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, height: ancho, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// El logo caligráfico (crema sobre transparente) para el encabezado oscuro, y el ícono.
await sharp(path.join(origen, 'logo.png')).trim().resize({ height: 140 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'logo.png')).trim().resize(64, 64, { fit: 'contain', background: '#1d2a22' }).flatten({ background: '#1d2a22' }).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
