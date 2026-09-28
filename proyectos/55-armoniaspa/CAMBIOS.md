# Armonía Spa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.armoniaspa.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/55-armoniaspa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 55-armoniaspa`) |

**Negocio:** Armonía Spa — spa en Chihuahua, Chihuahua con tratamientos faciales, masajes, depilación láser IPL y tridiodo, manicure y pedicure. Tel. 56 2055 7964. WhatsApp: +52 56 2055 7964. Correo: armonia.spa32@gmail.com. Tipo para Google: `HealthAndBeautyBusiness`.

## En una línea

Mismo spa, mismos 28 servicios con sus precios reales; cambia la forma: CSS y JavaScript que no cargaban en el clon ahora funcionan; fondo blanco limpio con acento rosa `#d4538a`, Playfair Display en cursiva para el tagline, 6 categorías de servicios con pestañas y "¿Cuánto cuesta tu plan de depilación?" — calculador interactivo que compara IPL vs tridiodo por zona con el total y WhatsApp prellenado.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| CSS no cargó: `css/styles.css` da 404 (el clon lo buscaba en raíz absoluta `/img/`) | Sin dependencias externas: Tailwind v4 en el build |
| 43 imágenes rotas (todas las del sitio: rutas absolutas no trasladadas) | Todas las fotos propias cargadas desde `assets/web/` (publicDir) |
| 51 recursos con 404 (CSS + imágenes) | 0 recursos fallidos |
| Desborde de 222 px en móvil | 0 desborde en escritorio y móvil |
| El carrusel de promociones (JavaScript propio) no funciona | Las 6 imágenes de promo se muestran en cuadrícula fija sin JS externo |
| Páginas "Servicios" y "Citas" muestran "PRÓXIMAMENTE..." con imagen de construcción | Todos los servicios con precios integrados en una sola página |
| Sin meta description ni JSON-LD en el sitio original | Title, description y JSON-LD `HealthAndBeautyBusiness` agregados |

## Qué se cambió (mismo contenido, otra forma)

- **Paleta:** el original usa rosa `#f46ab5` y rosa claro `#efbdc6`. El rediseño toma ese mismo espíritu rosa pero con un tono más profundo `#d4538a` que mantiene contraste AA sobre fondos blancos (ratio > 4.5:1), con fondo blush `#fdf0f4` para secciones alternas.
- **Tipografía:** el original no carga fuentes externas (usaba las del sistema). El rediseño agrega Playfair Display 400 italic para etiquetas de sección y taglines, e Inter 400/500/600 para texto — ambas con `@fontsource` solo latin, sin Google Fonts.
- **Estructura:** el original es una sola página larga con el menú en el header y los 28 servicios uno tras otro. El rediseño introduce pestañas por categoría para evitar la página interminable de tarjetas.
- **Servicios:** el original muestra una lista plana de 28 servicios. El rediseño los organiza en 6 categorías con pestañas (Faciales, Masajes, Depilación con cera, Láser IPL, Láser tridiodo, Manicure & Pedicure) para facilitar la comparación por zona.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Cuánto cuesta tu plan de depilación?"** (componente `CalculadorLaser` en `App.tsx`). El spa ofrece dos tecnologías de láser (IPL y tridiodo) para cuatro zonas corporales, con precios publicados. El calculador permite: elegir tecnología, seleccionar zonas (cada zona muestra su precio real publicado), ver el total en tiempo real, y mandar un WhatsApp con la tecnología, las zonas y el total ya escritos. Todos los precios son del sitio original.
  - Textos nuevos: título "¿Cuánto cuesta tu plan de depilación?"; "Elige las zonas que quieres tratar y la tecnología. El precio es el publicado en el sitio."; nota sobre el número de sesiones; etiquetas "por sesión" y "paquete 10 sesiones".
  - Mensaje de WhatsApp: "Hola, estoy interesada/o en un plan de depilación láser [IPL/tridiodo] en Armonía Spa. Zonas: [lista]. Total estimado: $[total] MXN. ¿Me pueden dar más información y disponibilidad?"
- **Barra fija en el celular** con WhatsApp, Llamar (`tel:525620557964`) y Maps.
- **Enlace a Google Maps** en la sección Visítanos y en la barra móvil.
- **JSON-LD `HealthAndBeautyBusiness`** con nombre, descripción, URL, teléfono, correo, dirección, redes y catálogo de 3 servicios de ejemplo con precio. El sitio original no tiene JSON-LD.
- **Title** "Armonía Spa Chihuahua | Tratamientos faciales, masajes y depilación láser" (el original no tiene title útil).
- **Meta description** real con servicios, ciudad y teléfono.
- **Open Graph** completo.
- **Favicon** desde el logo del clon (`logo.png` → `icono.png` en `assets/web/`).
- **`lang="es-MX"`** en el HTML.
- **`prefers-reduced-motion`**: todas las transiciones y scroll se anulan.
- **Contraste AA**: texto `#2a2a2a` sobre blanco (ratio > 14:1); acento `#d4538a` en botones con texto blanco (ratio > 4.5:1); texto suave `#2a2a2a/70` sobre fondo blush `#fdf0f4` (ratio > 5:1).
- **Un solo H1** (el original tenía múltiples H1 en la misma página).

## Qué se quitó o no se usó

- El carrusel de promociones original (JavaScript propio) — las 6 imágenes se muestran en cuadrícula.
- Las 8 fotos de Freepik (acrilicas, dep_cera, Fibroblast, manicure, manicure_spa, polygel, semi, soft_gel) — no se usan fotos de stock de terceros. Para los servicios de uñas y fibroblast se reutilizan fotos propias de categorías similares.
- Las 2 fotos de Google Maps (copo.jpg, propuest2.jpg — EXIF de Picasa).
- Las 3 fotos de testimonios (persona1, persona2, persona3 — sin contexto de autoría, very small 275×183 px) — no se usan testimonios sin verificar.
- La imagen `contruccion.jpg` (página en construcción) — ya no aplica.
- La imagen `spa.png` (logo con fondo transparente pero muy pequeña a 500×500) — se usa el LogoCompleto.png convertido a .webp.
- El botón "Agendar Cita" del original que lleva a la página `citas.html` (que muestra "PRÓXIMAMENTE..") — todos los botones de cita van directamente a WhatsApp.
- El formulario de contacto no existe en el sitio (está pendiente de construcción según el clon).

## Qué se conserva al pie de la letra

- Todos los nombres de los 28 servicios y sus precios publicados:
  - Faciales: Limpieza facial ($450), Limpieza facial profunda ($600), Dermapen ($700), Hollywood Peeling ($1,000), Limpieza Corporal ($600), Fibroblast ($700)
  - Masajes: Masaje Relajante ($600), Masaje Descontracturante ($700)
  - Depilación con cera: cuerpo completo ($600), piernas ($300), axilas ($150), área de bikini ($200)
  - Depilación láser IPL: cuerpo completo 10 sesiones ($6,500), piernas por sesión ($400), axilas por sesión ($200), área de bikini por sesión ($300)
  - Depilación láser tridiodo: cuerpo completo 10 sesiones ($7,000), piernas por sesión ($450), axilas ($250), área de bikini ($350)
  - Manicure/Pedicure: Pedicure ($250), Manicure ($250), Pedicure Spa ($300), Manicure Spa ($300), Uñas semipermanentes ($120), Uñas acrílicas ($200), Soft Gel ($200), Polygel ($250)
- El texto completo de "Sobre nosotros": "En Armonía Spa creemos que el bienestar verdadero nace del equilibrio entre el cuerpo, la mente y el espíritu…"
- Contacto: tel. 56 2055 7964, WhatsApp +52 56 2055 7964, correo armonia.spa32@gmail.com.
- Redes: Facebook `share/1HsurQztsa/`, Instagram `armonia_spa30`.
- Las 6 imágenes de promoción del spa (Promo1–Promo6).

## Pendiente de confirmar con el cliente

- **Dirección física:** el sitio original no publica la dirección exacta. El enlace de Maps usa "Armonía Spa Chihuahua" como búsqueda. Confirmar la dirección para el JSON-LD.
- **Horarios:** el sitio original no publica horarios de atención. Confirmar para agregarlos.
- **Vigencia de las promociones:** las 6 imágenes de promo están en el clon pero no tienen fecha de vigencia. Confirmar cuáles siguen vigentes antes de publicar.
- **Tecnología IPL vs tridiodo:** el calculador describe IPL como "luz pulsada" y tridiodo como "mayor precisión" basándose en terminología común. Confirmar si el spa quiere otra descripción.
- **Fotografías sin marca de autoría:** las 18 fotos propias no tienen marca de agua ni crédito explícito en el sitio. Se asume que son del negocio.

## Dónde está cada cosa

- Textos y datos, precios, zonas del calculador: `rediseno/src/data/content.ts`
- Diseño y secciones, calculador (`CalculadorLaser`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: fotos del clon convertidas a .webp en `assets/web/` (generadas con `node fotos-web.mjs` desde `rediseno/`). `assets/web/` no va en git: se regenera con `node fotos-web.mjs`.
- Capturas para comparar: `referencias/capturas-2026-09-27/`.
