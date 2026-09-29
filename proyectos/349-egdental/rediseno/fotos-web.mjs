// El clon guarda en sitio/assets/wp-content/uploads/ dos fotos del equipo de EG Dental (2024), la del edificio de la
// clínica en Zona Río ("Visit Us") y cuatro antes/después de su galería; el resto son fotos de iStock y de banco, que no
// se usan. Este script crea copias .webp en assets/web/ (publicDir de Vite), un ícono con sus iniciales y la imagen
// para compartir. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/349-egdental/rediseno)
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
  ['2024/02/Affordable-Dentist-in-Tijuana-Mexico-2-768x433.jpg', 'equipo'],
  ['2024/02/Affordable-Dentist-in-Tijuana-Mexico-1-768x433.jpg', 'equipo-tres'],
  ['2024/02/Visit-Us.jpg', 'edificio'],
  ['2023/06/WhatsApp-Image-2022-02-23-at-33153-PM-1-1.jpg', 'caso-1'],
  ['2023/06/4-04SM-11.jpg', 'caso-2'],
  ['2023/06/Monica-Spivey-BEFORE-AFTER-bA-1-768x768.jpg', 'caso-3'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Ícono: sus iniciales "EG" (el clon no trae su logo en imagen).
const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="16" fill="#0a7178"/><text x="32" y="42" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle">EG</text></svg>');
await sharp(svg).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, '2024/02/Affordable-Dentist-in-Tijuana-Mexico-2-768x433.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`, JSON.stringify(medidas));
