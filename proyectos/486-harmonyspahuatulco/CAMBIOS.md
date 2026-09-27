# Harmony Spa Huatulco: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.spahuatulco.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/486-harmonyspahuatulco/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 486-harmonyspahuatulco`) |

## En una línea

Mismo negocio, mismos 8 paquetes, mismos precios, mismo teléfono y dirección; lo que cambia es que el traslado gratis a tu hotel —hoy escondido en el `alt="Beauty centre"` de una sola imagen— pasa a ser el argumento principal de la página, con un selector de paquetes que arma el mensaje de WhatsApp por ti.

## Qué estaba roto o incompleto en el clon

`investigacion/crudo.json` y `resumen.json` quedaron vacíos: Jina Reader chocó con un reto anti-bot al leer `spahuatulco.com` ("Robot Challenge Screen", confirmado también al intentar `curl` desde la nube el 2026-09-27: redirige a `/.well-known/sgcaptcha/`). El HTML sí se pudo clonar completo (`sitio/index.html` / `investigacion/original.html`), así que todo el contenido real se sacó de ahí.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin sus 4 CSS del tema (404): el clon se ve sin maquetar, en una sola columna | Maquetado propio con Tailwind, con los tokens de la marca real (ver plan de diseño) |
| `promos/promo.js.php` no se pudo descargar: el popup de promociones (SweetAlert2) nunca corre | No se recreó: su contenido real (qué promoción, vigencia) no se puede confirmar sin ese script |
| `js/jquery-2.1.4.min.js` y el resto del JS no cargan: menú, reproductor y validaciones no funcionan | Todo el sitio es React sin dependencia de jQuery ni de esos plugins |
| 28 imágenes rotas del tema (`content/spa/images/*`, `images/update/02.jpg`, `03.jpg`…) | Solo se usan las 6 fotos que sí llegaron completas y que son reales del negocio (ver abajo) |

## Qué se cambió (mismo contenido, otra forma)

- Los 8 paquetes (Temazcal $500, Temazcal Plus $650, Masaje $900, Golden $900, Anti Edad $950, Hidratante $950, Premium $1,200, Parejas $2,500), antes en tarjetas sueltas de Elementor, ahora son un único selector ordenable (por precio o por duración) que arma el mensaje de WhatsApp con el paquete elegido.
- El dato del traslado gratis, antes solo dentro de una imagen (`images/transporte.jpg`, con `alt="Beauty centre"` en el original), ahora es texto real al principio y al final del elemento memorable.
- Los 3 `<h1>` del original (el logo, "Harmony SPA Huatulco: 01 958 122 9345" y la dirección, los tres en el pie) se resolvieron en un solo `<h1>` real, el de la portada; el teléfono y la dirección siguen en el sitio, como texto normal.
- El domo del temazcal, que en el original solo aparecía recortado dentro de un flyer de precios (`images/update01.jpg`), se recortó sin el texto para usarlo como foto del temazcal.
- La fachada con las camionetas (`images/transporte.jpg`) se recortó quitándole la franja de texto ("Cortesía a Nuestros clientes VIP…"): ese mensaje ya lo dice el propio texto del sitio, en vez de repetirlo quemado en la imagen.

## Qué se agregó (no existía en el original)

- El elemento memorable "Ida y vuelta, ya resuelta": selector de paquetes por precio/duración que arma el mensaje de WhatsApp con el paquete, la duración y el precio ya puestos, y pide que pasen por el cliente a su hotel.
- Botón de WhatsApp por paquete (antes solo había un botón general con un texto fijo: "Hola, quiero información de tarifas en Spa Huatulco por favor.").
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar).
- JSON-LD tipo `DaySpa` con dirección, coordenadas y los 8 paquetes como `Offer` (el original no tenía datos estructurados).
- Textos alternativos reales en las 6 fotos (el original tenía 11 `alt=""` y alts genéricos de plantilla: "Beauty centre", "Full service", "Geotermal centre").
- Favicon e imagen para compartir (Open Graph) propios, hechos con el color exacto del logo real del negocio; el original no tenía ninguno de los dos.

## Qué se quitó o no se usó

- El popup de promociones (SweetAlert2 + Swiper): dependía de `promos/promo.js.php`, que no se pudo descargar, así que no se sabe qué promoción real mostraba.
- El "Tour Virtual", que en el original enlaza a `mexicotravelclub.com` (un tercero, no el negocio): no se linkeó porque no es material propio del spa y no se pudo confirmar que siga vigente.
- `sitio/assets/images/nutricion.jpg`: es una foto de banco (frutas y verduras genéricas), no una foto del negocio.
- Los `<meta name="keywords">` y el aviso "México Travel Club, Agencia de Publicidad en México" del pie (créditos de la agencia que hizo el sitio original, no del negocio).

## Qué se conserva al pie de la letra

- Los 8 paquetes, sus duraciones y sus precios en MXN.
- Teléfono (958 122 9345 / WhatsApp +52 958 122 9345), dirección completa, Facebook e Instagram.
- La frase "Más de 25 años de experiencia ofreciendo tratamientos que conectan el cuerpo y el alma."
- Los 4 servicios (Spa & Relax, Temazcal, Tratamientos faciales, Nutrición y cuidados alimenticios) y el bloque "¿Qué encontrarás en Harmony Spa?" (Tratamientos cosméticos, Cabinas privadas, Hermoso temazcal), con sus textos originales.

## Pendiente de confirmar con el cliente

- Horario de atención: no está publicado en el sitio original: no se puso en el rediseño.
- Si los 8 paquetes y sus precios (el pie del original dice "© 2019") siguen vigentes.
- Si el WhatsApp del botón (+52 958 122 9345) sigue siendo el correcto.
- Qué promoción real mostraba el popup que no se pudo recuperar.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` a partir de `sitio/assets/images/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó nada nuevo.
