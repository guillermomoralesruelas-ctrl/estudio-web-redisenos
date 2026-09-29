# Barón Barbershop: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://baronbarbershop.com/ |
| Método | **1.2 en la nube**: el clon (Hostinger Horizons) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/102-baronbarbershop/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 102-baronbarbershop`) |

## En una línea

La misma barbería de Ventura, con sus tres cortes, sus barberos, su galería y su horario, en una página que se lee sin JavaScript de terceros y donde se ve de un vistazo qué incluye cada corte.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El HTML llega vacío: todo lo arma el JavaScript de Hostinger Horizons | Página con contenido real: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| Sin fotos (están en el CDN de Hostinger) | 12 fotos reales y el logotipo en .webp locales |

## Qué se cambió (mismo contenido, otra forma)

- Las tres tarjetas de corte se volvieron "¿Qué incluye tu corte?".
- "Sobre Barón Barbershop" y sus tres pilares se resumieron en la portada.
- "Agenda tu cita" y "Visítanos en Ventura" quedaron en una sola sección.

## Qué se agregó (no existía en el original)

- **"¿Qué incluye tu corte?"** (elemento memorable): tres botones sobre la lista completa de servicios; se encienden los incluidos, se ve cuánto sube el precio y el WhatsApp lleva el corte.
- WhatsApp por barbero ("Agendar con Jahir", etc.).
- Textos nuestros: el H1, la entrada de la portada, las entradas de las secciones y los botones.
- Barra fija en el celular (WhatsApp, Cortes, Cómo llegar), JSON-LD `BarberShop` y Open Graph.

## Qué se quitó o no se usó

- La foto "Interior" de Unsplash (no es su barbería).
- Las pestañas "Barba", "Paquetes" y "Extras" (en la captura de su sitio solo tienen contenido los cortes).
- El botón "Agendar en línea": su enlace vive dentro del JavaScript y no se pudo ver desde la nube.
- El selector de idioma (solo se hizo la versión en español).

## Pendiente de confirmar con el cliente

- El enlace de su sistema de reservas en línea, para agregarlo junto al WhatsApp.
- Servicios y precios de barba, paquetes y extras.
- Su sitio no publica teléfono para llamadas; la barra del celular lleva WhatsApp, Cortes y Cómo llegar.
