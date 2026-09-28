# La Purificadora: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.lapurificadora.com/ |
| Método | **1.2**: fotos descargadas del sitio en vivo → `assets/originales/` → convertidas a .webp en `assets/web/` |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/643-lapurificadora/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismos datos del hotel de lujo boutique (7 habitaciones, restaurante, terraza, eventos, contacto) sobre una base visual limpia y sin bugs. El rediseño añade WhatsApp visible todo el tiempo y corrige el botón de reserva que tenía fechas de 2023 hardcodeadas.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| CSS principal (`dist/css/main.css`) daba 404 → desborde X de 722 px en escritorio y 1,562 px en móvil | 0 desborde en todas las vistas |
| 0 H1 en toda la página | 1 H1 (`La Purificadora — Hotel Boutique en el Centro Histórico de Puebla`) |
| Todos los botones "Reservar" llevan a SynXis con `arrive=2023-06-18&depart=2023-06-19` hardcodeados — fechas de hace tres años | CTA de reserva apunta al motor sin fechas (`...&level=hotel&locale=en-US...`) |
| Sin meta description | `<meta name="description" content="Hotel boutique en el Centro Histórico de Puebla…">` |
| `<iframe>` de Google Maps con `src=""` vacío | Sección de mapa no incluida (src vacío en el original; confirmar dirección con el cliente antes de agregar) |
| Imágenes con alt genérico ("Image 1", "Image 2"…) | Alt descriptivo en las 15 imágenes del rediseño |

## Qué se cambió (mismo contenido, otra forma)

- Nombres de habitaciones normalizados a título en español: "corner-suite" → "Corner Suite", "balcony room" → "Balcony", "superior room" → "Superior".
- Sección "Neighborhood" renombrada a "Barrio El Alto" (el nombre real del barrio y el único menú en inglés del original).
- Carrusel de 8 fotos de "Acerca" reemplazado por un bloque de texto + créditos de arquitectura (Legorreta+Legorreta), que comunica el valor patrimonial sin depender de JavaScript.
- Carrousels del original (jQuery) reemplazados por galerías estáticas 3-foto en Terraza y Restaurante.

## Qué se agregó (no existía en el original)

- **Barra fija inferior en móvil** con botón de WhatsApp y botón de Reserva — el original no tiene acceso rápido en celular.
- **WhatsApp visible** en navbar (escritorio) y en sección Contacto.
- **JSON-LD `LodgingBusiness`** con nombre, dirección, teléfono, URL y coordenadas (Puebla, Centro Histórico).
- **Open Graph** completo: `og:title`, `og:description`, `og:image`, `og:url`.
- **Créditos de diseño** en la sección Hero: Ricardo Legorreta, Laureana Toledo (arte), Chef Nanyely Pastrana.
- Horarios del restaurante incorporados en la sección (Lun–Jue 7am–11pm, Vie–Sáb 7am–12am) — en el original solo aparecen como texto plano.

## Qué se quitó o no se usó

- **Sección Wellness / SPA**: el clon no descargó ninguna foto del spa (la carpeta no existe en `sitio/assets/`); sin imagen no se puede presentar el servicio con calidad. Pendiente de confirmar con el cliente.
- **Sección Acerca** con carrousel de 8 fotos: simplificada a texto + créditos de arquitectura en la sección Hero.
- **Enlace "Empleos"** (apuntaba a `grupohabita.mx/#empleos`): fuera del alcance del rediseño del hotel.
- **Enlace a Twitter/X** del grupo Habita: no se incluye porque pertenece al grupo, no al hotel.
- **Formulario de contacto y de cotización de eventos**: se reemplaza por WhatsApp y botón de reserva (el formulario original no tenía backend visible y no enviaba nada en el clon).

## Qué se conserva al pie de la letra

- Nombres y descripciones de las 7 habitaciones (Corner Suite, Corner Suite Balcony, Top Suite, Superior, Superior Twin, Balcony, Balcony Twin).
- Teléfono: `+52 (222) 309 1920`.
- WhatsApp: `522221317724`.
- Dirección: Callejón de la 10 Norte 802, Barrio El Alto, Centro Histórico, Puebla.
- Instagram: `@lapurificadora` | Facebook: `GrupoHabita`.
- Motor de reservas SynXis (sin fechas hardcodeadas).
- Textos del restaurante, terraza, barrio y eventos extraídos de `investigacion/crudo.json`.

## Pendiente de confirmar con el cliente

- Fotos del SPA: ¿se pueden facilitar para agregar la sección Wellness?
- ¿El WhatsApp `522221317724` es el correcto para reservas del hotel? (en el original solo aparece en el pie de página).
- ¿Menú del restaurante actualizado? (el PDF enlazado es de `dist/docs/la-purificadora/menu-restaurant-all.pdf`).
- Google Maps: confirmar coordenadas exactas para el iframe antes de publicar.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: descargadas del sitio en vivo en `assets/originales/`, convertidas a .webp en `assets/web/` (`publicDir` en `rediseno/vite.config.ts`)
