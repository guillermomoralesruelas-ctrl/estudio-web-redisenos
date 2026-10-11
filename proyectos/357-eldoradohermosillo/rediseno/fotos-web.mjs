// Método 1.2 en la nube: el clon de Google Sites solo trae la portada. El 2026-10-10 se bajaron a ../assets/originales/
// las fotos de todas sus páginas (inicio, habitaciones estándar y ejecutiva, restaurante, servicios y galería), las 8 páginas
// de la carta, las 5 tablas del plan Larga Estadía y el logotipo (lh7-us.googleusercontent.com, a su tamaño máximo).
// Las fotos de habitaciones solo existen a 440×550 en el sitio original; no se agrandan.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/357-eldoradohermosillo/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  if (n.startsWith('logo') || n.startsWith('tabla') || n.startsWith('banner')) continue;
  const lado = 1400;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: letras rojas sobre negro; se recorta el fondo negro para usarlo sobre fondo oscuro.
await sharp(path.join(origen, 'logo-eldorado.png')).trim().resize({ width: 520 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'fachada-noche.png')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
