#!/usr/bin/env node
// Método 1.1 — Lista los mejores candidatos para rediseñar, leyendo datos/fabricador.db en SOLO LECTURA.
// (El fabricador puede estar corriendo: este script no escribe nada.)
//
// Uso:  node --no-warnings herramientas/candidatos-1.1.mjs [plantilla] [--max 20]
//   plantillas: hospedaje, restaurante-bar, fitness-gym, salud-bienestar, turismo-aventura,
//               inmobiliaria, educacion, negocio-local
//
// Criterios: estado 'construido', calidad 'funcional', con sitio/index.html, sin rediseno/ todavía,
// y con web propia (descarta directorios y portales de reservas de terceros).
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const plantilla = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a));
const iMax = args.indexOf('--max');
const max = iMax > -1 ? Number(args[iMax + 1]) : 20;

const TERCEROS = ['booking', 'airbnb', 'expedia', 'hotelmix', 'amimir', 'tripadvisor', 'cloudbeds', 'facebook', 'instagram', 'google', 'allinclusive', 'despegar', 'trivago', 'hoteles.com', 'wixsite', 'linktr', 'ueni', 'negocio.site', 'business.site', 'wa.me', 'doctoralia', 'sitios.', 'pages.'];

const db = new DatabaseSync(path.join(RAIZ, 'datos', 'fabricador.db'), { readOnly: true });
const filas = db.prepare(`
  SELECT numero, carpeta, nombre, rubro, ciudad, web, plantilla, plataforma, paginas_scrapeadas AS paginas, imagenes_encontradas AS imagenes
  FROM sitios
  WHERE estado = 'construido' AND calidad = 'funcional' AND carpeta IS NOT NULL
    ${plantilla ? 'AND plantilla = ?' : ''}
  ORDER BY imagenes_encontradas DESC, paginas_scrapeadas DESC
`).all(...(plantilla ? [plantilla] : []));

const out = [], sinFotos = [];
function contarImagenes(d) {
  if (!fs.existsSync(d)) return 0;
  let n = 0;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) n += e.isDirectory() ? contarImagenes(path.join(d, e.name)) : /\.(webp|jpe?g|png|avif)$/i.test(e.name) ? 1 : 0;
  return n;
}
for (const f of filas) {
  const web = (f.web || '').toLowerCase();
  if (!web || TERCEROS.some((t) => web.includes(t))) continue;
  const dir = path.join(RAIZ, 'proyectos', f.carpeta);
  if (!fs.existsSync(path.join(dir, 'sitio', 'index.html'))) continue;
  if (fs.existsSync(path.join(dir, 'rediseno'))) continue;
  // Imágenes que el clon sí descargó. Squarespace/Wix las cargan de su CDN y el clon queda sin fotos → método 1.2.
  f.locales = contarImagenes(path.join(dir, 'sitio', 'assets'));
  if (f.locales < 5) { sinFotos.push(f.carpeta); continue; }
  out.push(f);
  if (out.length >= max) break;
}
console.table(out.map((f) => ({ carpeta: f.carpeta, nombre: f.nombre.slice(0, 38), ciudad: (f.ciudad || '').slice(0, 24), plantilla: f.plantilla, imgs: f.imagenes, locales: f.locales, pags: f.paginas, web: f.web.slice(0, 50) })));
if (sinFotos.length) console.log(`Sin imágenes locales en el clon (candidatos a método 1.2): ${sinFotos.slice(0, 15).join(', ')}${sinFotos.length > 15 ? '…' : ''}`);
console.log('Antes de elegir, abre el clon en XAMPP y el sitio real: descarta los que sean de una cadena grande o no tengan fotos propias.');
