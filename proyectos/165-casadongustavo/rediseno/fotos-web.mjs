import { createRequire } from 'module';
import { promises as fs } from 'fs';
import path from 'path';
const require = createRequire(import.meta.url);
const sharp = require(path.resolve('../../../herramientas/node_modules/sharp'));

const SRC = '../assets/originales';
const DST = '../assets/web';
await fs.mkdir(DST, { recursive: true });

const fotos = [
  { src: 'hero.jpg',             dst: 'hero.webp',             w: 1800 },
  { src: 'patio-principal.jpg',  dst: 'patio-principal.webp',  w: 1200 },
  { src: 'master-suite.jpg',     dst: 'master-suite.webp',     w: 1200 },
  { src: 'comedor-principal.jpg',dst: 'comedor-principal.webp',w: 1200 },
  { src: 'jardin.jpg',           dst: 'jardin.webp',            w: 900  },
  { src: 'comedor-colonial.jpg', dst: 'comedor-colonial.webp', w: 900  },
  { src: 'galeria-1.jpg',        dst: 'galeria-1.webp',        w: 900  },
  { src: 'galeria-2.jpg',        dst: 'galeria-2.webp',        w: 900  },
  { src: 'galeria-3.jpg',        dst: 'galeria-3.webp',        w: 900  },
  { src: 'galeria-4.jpg',        dst: 'galeria-4.webp',        w: 900  },
];

for (const f of fotos) {
  await sharp(path.join(SRC, f.src))
    .resize({ width: f.w, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(DST, f.dst));
  console.log('✓', f.dst);
}
console.log('Listo.');
