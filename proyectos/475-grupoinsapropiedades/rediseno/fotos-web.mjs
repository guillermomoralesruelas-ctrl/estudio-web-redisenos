// Método 1.2 en la nube: el clon de EasyBroker trae miniaturas de 450 px. El 2026-10-12 se bajaron a ../assets/originales/
// las fotos de portada de 36 de sus propiedades publicadas (assets.easybroker.com, a 1200 px), tres fotos de su oficina
// (sesión de 2021 con cámara Sony y fotos de 2023 publicadas en su sitio), los retratos de Leonardo Sánchez y Elsa Tello
// y su logotipo (versión descriptiva e icono).
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), los logotipos recortados y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/475-grupoinsapropiedades/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  if (n.startsWith('logo')) continue;
  const lado = n.startsWith('oficina-') ? 1600 : n.startsWith('equipo-') ? 900 : 1200;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipos: el descriptivo (casa morada y "GRUPO INSA, inmobiliaria & avalúos"), y el icono.
for (const n of ['logo', 'logo-icono']) {
  const info = await sharp(path.join(origen, `${n}.png`)).trim({ threshold: 10 }).resize({ height: 200, withoutEnlargement: true }).png().toFile(path.join(destino, `${n}.png`));
  medidas[n] = [info.width, info.height];
}
await sharp(path.join(origen, 'ensenada-ocean-front-lot-main-street-0-44acre.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
