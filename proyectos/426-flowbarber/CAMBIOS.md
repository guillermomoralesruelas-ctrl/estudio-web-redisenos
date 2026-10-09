# Flow Barber: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://flowbarberpdc.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron de `flowbarberpdc.com/assets/` a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/426-flowbarber/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma barbería en una página en español, con sus fotos reales, sus precios y un "Arma tu visita" que calcula precio, duración y hora de salida antes de reservar en Fresha.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto (el sitio es una app de Lovable que las carga con JavaScript) | Sus 10 fotos y el logotipo en `assets/originales/`, en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Sus páginas de inicio, servicios, nosotros, equipo, galería y contacto se juntan en una sola, en español (su sitio abre en inglés).
- "Reservar" lleva siempre a su enlace de Fresha (en su sitio, el botón de la cabecera lleva a la página de contacto).
- Los videos `.mov` de la galería no se usan: pesan mucho y no todos los navegadores los reproducen.

## Qué se agregó (no existía en el original)

- **"Arma tu visita"** (elemento memorable): eliges qué te vas a hacer (corte, barba, corte y barba o solo niños), cuántos cortes infantiles, el día (los próximos 7, con el domingo cerrado) y la hora de llegada. Calcula el total, el tiempo de servicio (suma de las duraciones que publican), la hora de salida y la hora límite para llegar según su horario, con una barra del día y "Reservar en Fresha". La disponibilidad real la confirma Fresha.
- Textos del estudio: "Barbería · Centro de Playa del Carmen", el resumen de precio y horario del hero, "¿Cuánto tiempo y a qué hora sales?" y su explicación, los rótulos de la calculadora, "Ubicación y horario" y los textos alternativos.
- Enlace "Cómo llegar" a Google Maps, barra fija en el celular (reservar, Instagram, cómo llegar), JSON-LD `BarberShop` con horario y coordenadas de su ficha de Google, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El teléfono **+52 984 123 4567**: es un número de plantilla, no el suyo. Por eso **no hay WhatsApp ni "Llamar"**; en su lugar, Fresha e Instagram. Cuando den su número, va en `negocio.whatsapp` y `negocio.telefono` de `content.ts`.
- El botón de TripAdvisor (lleva a la portada de tripadvisor.com, no a su ficha), el enlace a `facebook.com/flowbarber` (no se pudo confirmar que sea suyo), el selector de idioma y el distintivo "Edit with Lovable".
- Las preguntas frecuentes de su código (dan precios distintos a los de servicios y dicen "5ta Avenida").

## Qué se conserva al pie de la letra

- Nombre, logotipo, dirección, horario, enlace de reservas de Fresha, Instagram, enlace para dejar reseña en Google. Sus textos de presentación, historia y filosofía, "Cortes a la medida, cuidado facial, talento profesional", los 4 servicios con precio, equivalencia en dólares y duración, y el equipo (Topo, barbero principal, 8 años; Samir Garduño, barbero profesional, 6 años).

## Pendiente de confirmar con el cliente

- **Su teléfono y WhatsApp reales.**
- Precio del corte y del combo: $300 y $600 en servicios; $350 y $500 en sus preguntas frecuentes (se usaron los de servicios).

## Dónde está cada cosa

- Textos, servicios, equipo y horario: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
