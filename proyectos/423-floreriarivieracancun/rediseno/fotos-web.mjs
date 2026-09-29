// El clon guarda en sitio/assets/img/ siete fotos propias de sus arreglos (con su marca de agua FloreriaRiviera.com), de
// 300 x 360 px. Este script crea copias .webp en assets/web/ (publicDir de Vite) con el código del arreglo, y el ícono con
// una de ellas. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/423-floreriarivieracancun/rediseno)
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

// Qué foto va con qué arreglo sale del orden de su HTML (imagen y luego nombre y precio).
const lista = [
  ['fantasy0060.jpg', 'r74'], ['lilies0001.jpg', 'r96'], ['fantasy0059.jpg', 'r8'], ['roses0110.jpg', 'r103'],
  ['roses0086.jpg', 'r1'], ['fantasy0061.jpg', 'r3'], ['roses0117.jpg', 'r13'],
];
let antes = 0, despues = 0;
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).webp({ quality: 86, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
}
await sharp(path.join(origen, 'roses0110.jpg')).resize(64, 64, { fit: 'cover' }).png().toFile(path.join(destino, 'icono.png'));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
