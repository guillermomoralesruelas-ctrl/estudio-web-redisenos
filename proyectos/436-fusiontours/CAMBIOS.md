# Fusion Tours: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://fusiontoursrivieramaya.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/436-fusiontours/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Misma agencia (Fusion Tours Riviera Maya, +20 años, +40 tours), mismos datos de contacto reales, sin WooCommerce ni scripts de terceros: un selector interactivo de tipo de aventura que filtra el catálogo y pre-llena WhatsApp con el tour de interés.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 4 recursos con 404 (el clon no descargó ciertas imágenes de WooCommerce, ni el logo de builder.io API TEMP) | Solo se usan imágenes que están en `sitio/assets/wp-content/`: 17 imágenes locales sin roturas |
| El logo del sitio original era una URL temporal de builder.io API (`api.builder.io/api/v1/image/assets/TEMP/…`) que puede dejar de existir en cualquier momento | Logotipo en texto + icono SVG compass incorporado; no depende de un CDN externo |
| La imagen hero del sitio también era de builder.io TEMP (playa tropical con palmeras) y no se descargó | Se usa `Sian-Kaan-1024x682.jpg` del catálogo propio como fondo del hero |
| El clon del sitio (WordPress + WooCommerce + plugins) tenía 65 px de desborde horizontal en escritorio | 0 px de desborde en escritorio y móvil en el rediseño |
| Los precios no se capturaron en el scraping (requieren JavaScript de WooCommerce para mostrarse) | Se usa "Cotizar" como CTA; no se inventan precios |

## Qué se cambió (mismo contenido, otra forma)

- El catálogo de tours pasó de una tienda WooCommerce con paginación (28 productos en varias páginas) a un sistema de filtro por categoría de aventura: el visitante elige qué le interesa y ve los tours relevantes con WhatsApp pre-llenado.
- Los datos de contacto (WhatsApp x2, emails x2, redes sociales) están en `src/data/content.ts`, bien organizados y sin duplicados.
- Las fotos de tours (que sí se descargaron: 17 imágenes reales del negocio) se sirven directamente desde `sitio/assets/wp-content/` vía `publicDir`, sin copia.

## Qué se agregó (no existía en el original)

- **"¿Qué tipo de aventura buscas?"** (elemento memorable): 5 chips de categoría (Cultura & Historia, Naturaleza & Cenotes, Mar & Buceo, Yates & Veleros, Adrenalina & Aventura). Al clicar uno se despliegan los tours de esa categoría con foto real, descripción y botón "Cotizar" que abre WhatsApp con el nombre del tour pre-llenado. Sin selección muestra 6 tours destacados del catálogo.
- JSON-LD tipo `TourOperator` con nombre, descripción, ciudad, teléfono y redes sociales reales.
- `<title>` y `<meta description>` optimizados para SEO (el original no tenía meta description en el scraping de la página de tours).
- Barra de stats ("+20 años", "+600 clientes/año", "+40 tours") tomada del propio sitio original.
- FAQ con acordeón React (las 5 preguntas del sitio original, sin JavaScript de terceros).
- Footer con las dos direcciones de WhatsApp y dos emails del negocio.

## Qué se quitó o no se usó

- Plugin WooCommerce y sistema de carrito (WordPress + plugins de tienda): el rediseño es un sitio de presentación con CTA a WhatsApp, no tienda.
- Fotos de clientes (`client-1` a `client-10`) se usan solo en la sección de Nosotros como galería; no hay sección de "testimonios" inventados.
- El texto "MADE WITH LOVE FOR SNC DESIGNS" del footer del original: no se incluye la atribución al diseñador anterior.
- Las 10+ imágenes del sitio que vienen de URL externas (builder.io, otras CDN) y no se descargaron en el clon.
- El blog vacío ("¡Hola mundo!") y el widget de comentarios de WordPress.
- El selector de moneda MXN/USD (barra de WooCommerce).

## Qué se conserva al pie de la letra

- Nombre: **Fusion Tours** / Fusion Tours Riviera Maya.
- WhatsApp principal: **+52 984-218-1414** (529842181414).
- WhatsApp secundario: **+52 984-278-5840** (529842785840).
- Emails: **reservationsfusiontoursrvm@gmail.com** y **fusiontoursrvm2025@gmail.com**.
- Redes sociales: facebook.com/fusiontoursrvm, instagram.com/fusiontoursrvm, x.com/FusionToursRVM.
- Stats del sitio original: +20 años, +600 clientes en el último año, +40 tours.
- Nombres reales de los tours y sus descripciones (del scraping de `crudo.json`).
- Las 5 preguntas frecuentes del FAQ original, con sus respuestas literales.
- La frase del sitio: "Fusion Tours Riviera Maya nació con la misión de ofrecer experiencias auténticas, seguras y llenas de emoción."

## Pendiente de confirmar con el cliente

- Precios de los tours: no están en el scraping. Para mostrarlos en el rediseño se necesita que el cliente los proporcione o que se acceda a la API de WooCommerce con autenticación.
- Ciudad/dirección física: el sitio dice "Playa del Carmen, Quintana Roo" pero no publica domicilio exacto ni local.
- El WhatsApp del footer del sitio original tenía un `blob:http://localhost/…` (URL temporal de local) como logo del botón flotante — confirmar que el número 529842181414 es el correcto.
- ¿Tienen logo en formato vectorial (SVG/AI) o PNG de alta resolución? El logo que aparece en el sitio era un enlace TEMP de builder.io y puede desaparecer.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/wp-content/` (`publicDir` en `rediseno/vite.config.ts`)
