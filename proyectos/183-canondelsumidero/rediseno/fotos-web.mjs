// El clon guarda en sitio/assets/imagenes/ las fotos de Kichan Bajlum: zona arqueológica de Palenque, Misol-Ha, Agua Azul,
// Roberto Barrios (con su marca), una ruina en la selva, Flores (Guatemala), el letrero de Palenque, sus camionetas con
// grupos y la laguna con balsas. Este script crea copias .webp en assets/web/ (publicDir de Vite). No se bajó nada nuevo.
// Uso: node fotos-web.mjs   (desde proyectos/183-canondelsumidero/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/imagenes');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['pagina/pagina/k-1.webp', 'palenque', 1600], ['pagina/pagina/k-2.webp', 'misolha', 1600], ['pagina/pagina/k-3.webp', 'laguna', 1600],
  ['cuadrado/1756732376.webp', 'templo', 800], ['cuadrado/1756733121.webp', 'aguaazul', 800], ['cuadrado/1758824097.webp', 'robertobarrios', 800],
  ['cuadrado/1756841383.webp', 'selva', 800], ['cuadrado/1759616956.webp', 'flores', 800], ['cuadrado/1760059026.webp', 'grupo', 800],
  ['cuadrado/1760059025.webp', 'camioneta', 800],
];
for (const [archivo, nombre, ancho] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#12332a"/><path d="M14 46h36l-4-7H18Zm6-9h24l-4-7H24Zm6-9h12l-3-7h-6Z" fill="#e0a43a"/></svg>');
console.log('ok');
