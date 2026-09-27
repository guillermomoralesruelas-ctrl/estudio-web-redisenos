// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: ~55 fotos propias de su portafolio (bodas, XV
// años, embarazo y newborn, marcas, gastronomía y sesiones), casi todas de 360 a 1200 px (una de 2500 px), más su
// favicon (logo-070.jpg, 32 px) y el encabezado de 2024. Ninguna trae metadatos de Google Maps/Picasa ni de IA; una
// lleva su marca "070". No se usan: la de desnudo artístico de embarazo (sesion-de-fotos-embarazada-1) ni la del
// producto de vapeo (marca-sesión-producto). No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/393-estudio070/rediseno)
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

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['2020/09/maria-alejandra-y-pedro-luis.jpg', 'boda-mirador', 1800],
  ['2020/06/novios-en-contraluz-en-boda.jpg', 'boda-contraluz', 1200],
  ['2020/06/boda-nocturna.jpg', 'boda-nocturna', 1200],
  ['2018/10/antesala-novia-1.jpg', 'boda-antesala', 880],
  ['2021/09/novia-fotografia-de-bodas.jpg', 'boda-novia-cielo', 612],
  ['2021/09/novios-en-sesion-de-fotos-de-boda.jpg', 'boda-velo', 668],
  ['2020/06/quinceac3b1era-en-exteriores.jpg', 'xv-exteriores', 1200],
  ['2020/08/quinceac3b1era-retrato.jpg', 'xv-retrato', 585],
  ['2019/07/pose-sesion-de-fotos-15-anos.jpg', 'xv-trono', 614],
  ['2019/07/poses-sesion-de-fotos-quinceanera.jpg', 'xv-helechos', 611],
  ['2019/07/quinceanera-sesion-de-fotos-poses.jpg', 'xv-salon', 610],
  ['2021/09/fotografica-15-anos.jpg.jpg', 'xv-pastel', 687],
  ['2020/06/embarazada-con-vuelo-de-telas.jpg', 'embarazo-telas', 1200],
  ['2020/06/embarazo-en-exteriores.jpg', 'embarazo-bosque', 1200],
  ['2020/06/sesic3b3n-de-fotos-de-embarazo.jpg', 'embarazo-estudio', 1200],
  ['2021/09/fotografia-para-embarazadas-pareja.jpg', 'embarazo-pareja', 612],
  ['2020/06/new-born-foto-pose.jpg', 'newborn-gorro', 1200],
  ['2021/09/sesion-de-fotos-de-bebes.jpg', 'newborn-mono', 543],
  ['2020/06/marca-modelo-ropa-deportiva.jpg', 'marca-deportiva', 1200],
  ['2020/06/marca-zapatos-infantiles.jpg', 'marca-zapatos', 1200],
  ['2020/06/marca-evento-corporativo.jpg', 'marca-evento', 1200],
  ['2020/06/marcas-conferencia-corporativo.jpg', 'marca-conferencia', 1200],
  ['2020/06/marca-sesic3b3n-exterior.jpg', 'marca-lancha', 1200],
  ['2021/09/retrato-corporativo.jpg', 'marca-retrato', 537],
  ['2020/06/gastronc3b3mico-fresas.jpg', 'gastro-fresas', 1200],
  ['2020/06/gastronc3b3mico-cupcake.jpg', 'gastro-cupcake', 1200],
  ['2020/06/gastronc3b3mico-barra.jpg', 'gastro-barra', 1200],
  ['2021/09/paletas-fotografia-profesiona.jpg', 'gastro-paletas', 558],
  ['2021/09/helado-fotografia-gastronomica.jpg', 'gastro-helado', 550],
  ['2021/09/producto-fotografia-gastronomica.jpg', 'gastro-angel', 545],
  ['2020/06/sesic3b3n-de-fotos-modelaje.jpg', 'sesion-modelaje', 1200],
  ['2020/06/sesic3b3n-baile.jpg', 'sesion-baile', 1200],
  ['2020/06/sesic3b3n-graduacic3b3n.jpg', 'sesion-graduacion', 1200],
  ['2021/09/retrato-sesion-de-fotos-profesional.jpg', 'sesion-humo', 546],
  ['2020/01/sesion-profesional-de-fotos-en-exteriores.jpg', 'sesion-escalera', 613],
  ['2021/09/modelo-sesion-de-fotos-profesional.jpg', 'sesion-trio', 547],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su propio favicon (logo-070.jpg, 32 px) ampliado a 64 px sin suavizar.
await sharp(path.join(origen, '2018/10/logo-070.jpg')).resize(64, 64, { kernel: 'nearest' }).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
