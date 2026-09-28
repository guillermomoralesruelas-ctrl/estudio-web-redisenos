// El clon de FioriNET (Magento) solo trae tres banners con texto encimado; las fotos de sus
// arreglos se cargan del catálogo en línea. Se bajaron 14 fotos de producto (600 a 1080 px) de
// su tienda (/media/catalog/product/…) a assets/originales/ y este script crea copias .webp
// ligeras en assets/web/ (publicDir de Vite). No toca el clon.
// Uso: node fotos-web.mjs   (desde proyectos/414-fiorinet/rediseno)
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

// [archivo en assets/originales/, nombre de salida en assets/web/, lado largo máximo]
const lista = [
  ['10-calas-fv_1_1_1.jpg', 'calas-florero', 600],
  ['tulipanes-fv_1_2.jpg', 'tulipanes-florero', 600],
  ['250_rosas_blancas_en_cer_mica.jpg', 'rosas-blancas-250', 900],
  ['amor_a_primera_vista.jpg', 'amor-primera-vista', 700],
  ['bouquet-de-rosas22a_2.jpg', 'bouquet-rosas', 600],
  ['calas_y_rosas_m_1_1_1.jpg', 'calas-rosas', 600],
  ['centro_de_rosas_fn_1_1_1.jpg', 'centro-rosas', 600],
  ['cesta_primavera.jpg', 'cesta-primavera', 800],
  ['cielo_9.jpg', 'cielo', 600],
  ['colorful_1.jpg', 'colorful', 1000],
  ['santuario_orquidea_blanca.jpg', 'santuario-orquidea', 600],
  ['corona-phalaenopsis_blanca_2_2_1.jpg', 'corona-orquidea-blanca', 600],
  ['flores-para-pesame_2.jpg', 'flores-pesame', 600],
  ['24-rosas-blancas-2019_2.jpg', 'rosas-blancas-24', 600],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  if (!fs.existsSync(entrada)) { console.warn('No encontrado:', archivo); continue; }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Logotipo (PNG con transparencia, 224 × 88)
fs.copyFileSync(path.join(origen, 'logo-new.png'), path.join(destino, 'logo-fiorinet.png'));
console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
