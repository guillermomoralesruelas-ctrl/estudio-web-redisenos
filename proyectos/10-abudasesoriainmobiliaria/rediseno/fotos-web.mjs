// Método 1.2 en la nube: el clon solo trae la portada genérica (fotos de banco) y la lista de inmuebles se carga con
// JavaScript. El 2026-10-10 se leyeron las 54 fichas de abudbienesraices.com/inmuebles y se bajó la primera foto de cada una
// a ../assets/originales/portadas/<id>.jpg (Firebase Storage, vía wsrv.nl porque el proxy de la nube rompe el %2F de la URL).
// No se usa la portada del terreno de Mérida (BDf9iHIXRfiNMjF4XXwG): trae la marca de agua de otra inmobiliaria.
// Este script crea copias .webp en ../assets/web/p/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/10-abudasesoriainmobiliaria/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales/portadas');
const destino = path.join(aqui, '../assets/web/p');
fs.mkdirSync(destino, { recursive: true });

const medidas = {};
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f) && !f.startsWith('BDf9'))) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 960, height: 960, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Portada: fachada colonial del centro histórico (ficha AUtMOsheoqtJr2DVVrPm), más grande.
const portada = path.join(origen, 'AUtMOsheoqtJr2DVVrPm.jpg');
await sharp(portada).rotate().resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, '../portada.webp'));
await sharp(portada).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, '../compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(Object.keys(medidas).length, 'fotos');
