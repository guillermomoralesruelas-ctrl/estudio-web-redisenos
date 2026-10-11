# IG Capital: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.igcapitalqueretaro.com/ (plantilla de EasyBroker) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas de 450 px; se leyeron inicio (2 páginas), rentas, quiénes somos, premios y contacto, y se bajaron las fotos de portada de sus 39 propiedades y el logotipo a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/563-igcapital/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria especialista en Zibatá en una sola página: "La escalera de Zibatá" con sus 28 casas en venta y preventa ordenadas por precio, sus 11 rentas por zona, una sección para propietarios, quiénes son y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas y un buscador genérico de EasyBroker que no funciona sin su servidor | Fotos de portada a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- El listado de EasyBroker (filtros con 14 monedas, recámaras de 0 a 10) se cambia por un tope de precio, recámaras y zona.
- Los títulos de las propiedades se acortan al nombre del modelo ("CASA EN VENTA EN ZIBATÁ CASA YAVIA" → "Casa Yavia"); cada tarjeta enlaza a su ficha completa en su sitio.
- Las rentas se muestran con su precio mensual y filtro por zona.

## Qué se agregó (no existía en el original)

- **"La escalera de Zibatá"** (elemento memorable): cada barra es una de sus 28 casas en Zibatá, de la más accesible ($3.4 M) a la más grande ($13.2 M); las de preventa van rayadas. Al mover el tope se encienden las que caben, se puede filtrar por recámaras y al tocar una barra aparece su tarjeta con el precio por m² (cálculo del estudio con su precio y m²).
- WhatsApp por propiedad con el nombre, la zona y el precio.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, mapa), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Los formularios de contacto y de propietarios (se enlaza al de propietarios en su sitio).
- Las páginas por zona (Altozano, Campanario, Juriquilla, Zákia y Zarú, Tequisquiapan) que no tenían propiedades distintas de las del inicio y rentas.

## Qué se conserva al pie de la letra

- Teléfono y WhatsApp 442 476 1972, redes (Facebook, Instagram, TikTok, YouTube), texto de quiénes somos, servicios, zonas y la nominación en premios inmobiliarios.
- Precio, operación (venta, preventa o renta), tipo, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Dirección de oficina y correo: el sitio no los publica. El enlace a Google Maps es una búsqueda por nombre.
- Hay nombres repetidos con datos distintos (dos "Casa Turquesa", dos "Casa Roble", dos "Casa Encino") y "Casa Matea" y "Casa Munay" están como departamento; se respetaron.
- "Casa Blanca" aparece en "El Marqués Queretano"; se puso en Zibatá porque su título dice Zibatá.
- Los precios cambian: los datos son del 2026-10-11.

## Dónde está cada cosa

- Propiedades: `rediseno/src/data/propiedades.ts`; textos: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
