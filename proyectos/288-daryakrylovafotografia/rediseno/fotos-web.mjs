// Método 1.2 en la nube: el clon (Vigbo) no trae fotos utilizables; el 2026-10-12 se bajaron a ../assets/originales/
// las 78 fotos de su página /portafolio (static-cdn4-2.vigbo.tech, a 2000 px), su retrato de /nosotros y su logotipo.
// Nombres: ecom-NN (eCommerce y catálogo), info-NN (infografías para marketplaces), creativa-NN (fotografía creativa),
// sitio-NN (fotografía en sitio), en el orden de su portafolio.
// NO se usan: las 13 que traen credenciales C2PA de Adobe Firefly (contenido generado o retocado con IA) ni las de
// marcas globales (Montblanc, Polo, Neutrogena, OGX, Sally Hansen, La Roche-Posay, Grisi), ni info-03 (misma escena que creativa-26, con IA).
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/288-daryakrylovafotografia/rediseno)
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

const conIA = ['creativa-01', 'creativa-03', 'creativa-06', 'creativa-09', 'creativa-24', 'creativa-25', 'creativa-26', 'creativa-35', 'creativa-36', 'creativa-37', 'creativa-40', 'ecom-01', 'ecom-02', 'info-03'];
const marcas = ['creativa-04', 'creativa-19', 'creativa-21', 'creativa-22', 'creativa-29', 'ecom-14', 'ecom-15'];

const medidas = {};
for (const f of fs.readdirSync(origen).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort()) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  if (n === 'logo' || conIA.includes(n) || marcas.includes(n)) continue;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 1200, height: 1500, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo: "dK creative studio" en blanco sobre negro (cuadro de 978 px).
await sharp(path.join(origen, 'logo.png')).resize({ width: 240 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'creativa-13.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
