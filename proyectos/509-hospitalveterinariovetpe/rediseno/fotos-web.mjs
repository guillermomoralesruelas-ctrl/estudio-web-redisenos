// El clon guarda en sitio/assets/wp-content/uploads/2024/04/ fotos propias de VetPets: sus sucursales por dentro
// (Naciones Unidas con su quirófano, Acueducto, Ávila Camacho, Cañadas y Real Center), tres portadas con su personal y
// pacientes, y el logo. Este script crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo y el
// clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/509-hospitalveterinariovetpe/rediseno)
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

const lista = [
  ['2024/04/cover-1-vetpets.png', 'portada-perro', 1366],
  ['2024/04/cover-2-vetpets.png', 'portada-quirofano', 1366],
  ['2024/04/cover-contacto-vetpets2.png', 'portada-gato', 1366],
  ['2024/04/naciones-unidas.png', 'naciones-unidas', 900],
  ['2024/04/acueducto.png', 'acueducto', 900],
  ['2024/04/avila-camacho.png', 'avila-camacho', 900],
  ['2024/04/canadas.png', 'canadas', 900],
  ['2024/04/real-center.png', 'real-center', 900],
];
let antes = 0, despues = 0;
for (const [archivo, nombre, ancho] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
}
await sharp(path.join(origen, '2022/03/Vetpets-logo.png')).resize({ width: 480 }).png().toFile(path.join(destino, 'logo.png'));
// Ícono: la V roja de su logo sobre blanco con borde azul.
fs.writeFileSync(path.join(destino, 'icono.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#fff" stroke="#015fb1" stroke-width="6"/><path d="M14 16h10l8 22 8-22h10L37 50h-10Z" fill="#c8102e"/></svg>');
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
