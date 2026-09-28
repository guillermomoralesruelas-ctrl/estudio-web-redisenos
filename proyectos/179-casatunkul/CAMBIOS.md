# Casa Tunkul: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.tunkul.mx/ |
| Método | **1.1**: imágenes del clon (`sitio/assets/assets/images/`), textos de `investigacion/crudo.json` |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/179-casatunkul/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismos datos del hotel boutique (3 suites, reseñas de Booking, historia del poeta Martínez Herrera, contacto y dirección) con diseño limpio y mapa real. Se corrige que el clon tenía todas las imágenes en `.assets/` (punto al inicio del path) y no cargaban; el rediseño las sirve correctamente desde `publicDir`.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Imágenes referenciadas como `.assets/assets/images/` (punto inicial) → todas las 20 imágenes daban 404 | publicDir apunta a `../sitio/assets/assets/images/`; las imágenes se sirven correctamente como `hero.jpg`, `room-1.jpg`, etc. |
| CSS (`styles.css`), scripts (`script.js`, `i18n.js`, `site-config.js`, `cookie-consent.js`) daban 404 | No aplicable en el rediseño (CSS de Tailwind, sin dependencias externas) |
| Galería de habitaciones cargaba las fotos desde `blob:` URLs (JavaScript del motor de reservas de Booking) → fotos de habitaciones no disponibles fuera del navegador en vivo | Las 4 fotos de habitaciones disponibles en el clon se usan directamente |
| Clon tiene H1 (el original sí tenía H1) | 1 H1 correcto en el rediseño |
| 0 desborde en escritorio y móvil | 0 desborde en el rediseño también |

## Qué se cambió (mismo contenido, otra forma)

- Las 6 reseñas de Booking (texto, autor, mes/año, nota) se muestran en tarjetas individuales en lugar del carrusel con flechas del original.
- El motor de reservas Cloudbeds se expone directamente como botón CTA en lugar de un widget embebido inline.
- La "Guía local a pie" del original (lista larga de 25+ lugares con distancias) se simplificó en el texto de ubicación — el detalle está disponible en la sección Historia con contexto del barrio.
- La sección "Áreas comunes" usa las 4 fotos disponibles (patio, courtyard, lounge, room-4) en un grid visual en lugar del carrusel de blob URLs que no cargaban.

## Qué se agregó (no existía en el original)

- **Barra fija inferior en móvil** con botones "Correo" y "Reservar" — el original no tiene acceso rápido en celular.
- **Google Maps iframe** con la dirección real (Calle 55 No. 559 B, Barrio de Santiago) — el original tenía el mapa en la sección de Ubicación pero requería JavaScript del motor de Booking para funcionar.
- **Contadores de reseñas** (9.6/10, 108 reseñas, 77 × 10/10) visibles en la sección de reseñas.
- **JSON-LD `LodgingBusiness`** con nombre, dirección, email, URL y aggregateRating.
- **Open Graph** completo: título, descripción, imagen (`hero.jpg`), URL.
- **Fuente Cormorant Garamond** como tipografía serif — evoca la herencia cultural del Barrio de Santiago y el linaje del poeta Martínez Herrera.

## Qué se quitó o no se usó

- **Guía local a pie** (25+ lugares recomendados con distancias): se resume en texto breve; la lista completa está en `investigacion/crudo.json` si el cliente la quiere de vuelta.
- **Sección "Qué hacer cerca"** con filtros (Comer, Cafés, Bares, Cultura, Parques): requería JavaScript para filtrar; no hay datos de contacto ni precios propios del negocio en esa sección.
- **Award badge** (Digital-Award_RA-2026.png) del clon: la imagen estaba en `../sitio/assets/assets/awards/` que queda fuera del publicDir configurado; se menciona en texto en la sección Reseñas.
- **Enlace "Panel Admin"** del pie de página del original: no aplica en el rediseño.

## Qué se conserva al pie de la letra

- Nombre: Casa Tunkul.
- Dirección: Calle 55 No. 559 B entre calles 72 y 74, Barrio de Santiago, Centro, Mérida, Yucatán.
- Email: jrivera@tunkul.mx.
- Motor de reservas: https://hotels.cloudbeds.com/reservation/4yhpKG (el mismo del original).
- Textos de las 3 suites (habitación king con tina, habitación queen cálida, suite armónica king) y sus amenidades.
- Textos del restaurante, áreas comunes e historia de Víctor Manuel Martínez Herrera.
- Las 6 reseñas de Booking con textos reales del export (Karla, Joseph, Joris, Lisa, Sol, Adalberto).
- Métricas verificadas: 9.6/10, 108 reseñas, 77 × 10/10.

## Pendiente de confirmar con el cliente

- **WhatsApp**: el sitio original no publica ningún número de WhatsApp. ¿Tienen uno para consultas directas?
- **Fotos de habitaciones**: el clon solo tiene 4 fotos de habitaciones (room-1 a room-4); las fotos individuales de cada suite en el original se cargaban con JavaScript de Booking y no se pudieron extraer. ¿Puede el cliente facilitar más imágenes?
- **Guía local**: ¿quieren incluir la lista completa de 25 lugares recomendados (está en `investigacion/crudo.json`)?

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: del clon en `sitio/assets/assets/images/` (`publicDir` en `rediseno/vite.config.ts`)
