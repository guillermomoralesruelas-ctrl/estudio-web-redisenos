// Método 1.2 en la nube: el clon trae pocas fotos (su WordPress las carga con lazy-load). El 2026-10-10 se bajaron a
// ../assets/originales/ las fotos de su portafolio (georgieuris.com/wp-content/uploads/2024/): retrato, retrato para
// empresas, moda y publicidad. Sus metadatos dicen "@georgie.uris" (autor y copyright) y varias son de una Canon EOS 5D
// Mark III. No se usan las que muestran marcas o celebridades (HP, Colgate, Fox Sports, Neymar), las páginas de revista ni
// los collages. Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/448-georgieurisfotografia/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f) && f !== 'icono.jpg')) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
await sharp(path.join(origen, 'icono.jpg')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'modelo-morena.jpg')).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
