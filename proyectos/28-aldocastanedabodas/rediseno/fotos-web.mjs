// Método 1.2 en la nube: el clon no traía ninguna foto (todas viven en assets.zyrosite.com). El 2026-10-09 se bajaron
// a ../assets/originales/ (a 1600 px) una foto por cada uno de sus 16 capítulos de boda (s-*.jpg, tomadas de la página
// de cada sesión), la foto del hero de su inicio, la del fotógrafo de su página "Acerca de Aldo", tres más para la galería
// y su logotipo. Todas son de su portafolio; no se encontraron imágenes de banco ni generadas.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/28-aldocastanedabodas/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const medidas = {};
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg'))) {
  const nombre = f.replace('.jpg', '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
// Logotipo en negro y en blanco (para fondos oscuros).
const logo = sharp(path.join(origen, 'logo.png')).trim().resize({ width: 600 });
const l = await logo.clone().png().toFile(path.join(destino, 'logo.png'));
await logo.clone().negate({ alpha: false }).png().toFile(path.join(destino, 'logo-blanco.png'));
medidas.logo = [l.width, l.height];
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#141210"/><path d="M32 13 50 47H14Z" fill="none" stroke="#C9A877" stroke-width="5"/><circle cx="47" cy="15" r="4" fill="#C9A877"/></svg>');
await sharp(path.join(origen, 'hero.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
