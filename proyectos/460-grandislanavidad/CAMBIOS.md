# Grand Isla Navidad Resort: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.islanavidad.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/460-grandislanavidad/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 460-grandislanavidad`) |

**Negocio:** Grand Isla Navidad Resort — hotel de lujo Todo Incluido en la Costa Alegre, entre la Laguna de la Navidad (sitio Ramsar) y el Océano Pacífico. Marina de 207 yates, campo de golf de campeonato (Country Club Isla Navidad), spa, restaurantes y bodas. Circuito de los Marinos s/n, Fracc. Isla Navidad, 28838 Manzanillo, Colima. Tel. +52 314 331 0500. WhatsApp: +52 612 218 6591. No es cadena ni directorio. Tipo para Google: `Resort` (schema.org).

## En una línea

Mismo resort, mismos datos y textos; cambia la forma: paleta oscura premium (negro cálido de manglar, café dorado y crema arena de la marca), Cormorant Garamond para títulos, sin los 9 errores de consola ni las 6 imágenes rotas del clon, y "¿A qué despiertas?" — selector interactivo que muestra la vista real desde cada grupo de suites (laguna Ramsar, Pacífico, marina de 207 yates) con el dibujo ilustrativo de cada entorno y el botón de reserva.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 6 imágenes rotas (íconos de amenidades de habitaciones, servidos desde el tema de WordPress no descargado) | Sin imágenes rotas: el rediseño no usa esos íconos |
| 9 errores de consola (scripts de WordPress: motor de reservas ecommerce-365, Revolution Slider, Asksuite chatbot, Google Tag Manager, DoubleClick, Microsoft Clarity, TripAdvisor widget) | 0 errores de consola: sin dependencias externas |
| Motor de reservas (widget ecommerce-365) no funciona en el clon | Enlace directo al motor oficial en botones de reserva |
| Carrusel de habitaciones (Revolution Slider) no carga sin el JS de WordPress | Galería estática con fotos de cada suite |
| Clon pesa más de 3.95 MB en imágenes (JPEG y webp sin optimizar) | Fotos convertidas a .webp (76 % quality) con `fotos-web.mjs`: 2.39 MB total (19 fotos + logo) |

## Qué se cambió (mismo contenido, otra forma)

- **Paleta:** el original tiene fondo blanco con marrón (`#8e623a`) y dorado (`#be8627`). El rediseño invierte la jerarquía: fondo oscuro premium (`#0e0c09`, negro cálido como tronco de manglar) con los mismos marrones y dorados de la marca como acento — consonante con el nivel de lujo del resort.
- **Tipografía:** el original carga cinco familias de Google Fonts (Jost, Montserrat, Playfair Display, Libre Caslon Display, EB Garamond). El rediseño usa Cormorant Garamond 500/600 (títulos, elegante sin serifa de display) y Inter Variable 400/500 (texto), ambos con `@fontsource` solo latin, sin Google Fonts.
- **Estructura:** el original tiene múltiples páginas (Nuestro Hotel, Habitaciones, Gastronomía, Bodas, Actividades…). El rediseño integra los contenidos más importantes en una sola página con scroll: hero → todo incluido → gastronomía → "¿A qué despiertas?" → experiencias → golf → bodas → Costa Alegre → ¿por qué reservar directo? → visítanos.
- **Gastronomía:** el original presenta los cuatro espacios (Grand Café, Oasis Pool Bar, El Faro Lobby Bar, La Plazuela) en diferentes secciones de la página. El rediseño los unifica en una cuadrícula de 4 tarjetas.
- **Habitaciones:** el original usa un carrusel de Revolution Slider (no funciona en el clon) con cinco tipos de suite. El rediseño los integra en el elemento memorable "¿A qué despiertas?" organizados por vista.
- **Botones de reserva:** el original tiene dos versiones del mismo enlace (escritorio y móvil) al motor ecommerce-365. El rediseño simplifica a un botón por suite.
- **Testimonios:** el original muestra 10 reseñas de Google (en el crudo.json, incluyendo dos que mencionan instalaciones deterioradas y falta de mantenimiento). El rediseño no incluye testimonios: no se inventan nuevos y los originales contienen críticas que el hotel puede no querer destacar; se declara en pendientes.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿A qué despiertas?"** (componente `AQueDespertas` en `App.tsx`). El resort ocupa una isla entre la Laguna de la Navidad (sitio Ramsar con cuatro tipos de manglar) y el Océano Pacífico, con marina de 207 yates. La vista desde la habitación cambia radicalmente según el lado del edificio — dato real del sitio que el original no usa en su selector de suites. El componente muestra tres vistas dibujadas en SVG (laguna al amanecer con aves, Pacífico con terraza, marina de noche con yates), y al elegir una vista aparece qué suite la tiene (según sus descripciones reales), sus amenidades, y botones de reserva en el motor oficial y WhatsApp con la suite ya escrita.
  - Textos nuevos: título "¿A qué despiertas?"; "Grand Isla Navidad está en una isla: la laguna al norte, el Pacífico al oeste, la marina al sur. La vista desde tu habitación depende del lado que elijas."; "Suite con esta vista" / "Suites con esta vista"; `aria-label` del dibujo; "Ver todas las habitaciones →".
  - Mensaje de WhatsApp: "Hola, me interesa reservar la [nombre de la suite] con vista a [nombre de la vista]. ¿Me pueden dar disponibilidad y tarifa?"
- **Barra fija en el celular** con Reservar (WhatsApp), Llamar (call center: `tel:+526121750860`) y Cómo llegar (Google Maps).
- **JSON-LD `Resort`** con datos reales: nombre, descripción, URL, logo, imagen, teléfono, dirección, coordenadas, Google Maps, redes y amenidades. El original solo tiene `WebPage` y `WebSite` (generado por Yoast, sin tipo de negocio).
- **Title** "Grand Isla Navidad Resort | Todo Incluido frente a Barra de Navidad" (el suyo dice "Inicio - Grand Isla Navidad Resort", sin información de utilidad).
- **Meta description** real con servicios, ubicación y teléfono (el original usa el primer párrafo del sitio, truncado con "…").
- **Open Graph** completo con imagen principal (vista aérea del resort).
- **Favicon** desde el propio clon (`favicon.png` → `icono.png` en `assets/web/`).
- **Sección "¿Por qué reservar directo?"** con las 5 razones del sitio original, destacadas antes del contacto.
- **Enlace a Google Maps** tanto en la sección Visítanos como en la barra móvil.
- **`lang="es-MX"`** en el HTML (el original usa `lang="es"` en algunas páginas, pero el `inLanguage` del JSON-LD también dice `"es"`).
- **`prefers-reduced-motion`**: todas las transiciones y el comportamiento del scroll se anulan con esa media query.
- **Contraste AA**: texto crema `#f0ead8` sobre fondo `#0e0c09` (contraste > 14:1); botón CTA café `#7a3b14` con texto crema (> 5.8:1); texto suave `#b8aa8e` sobre `#0e0c09` (> 5.2:1).
- **Un solo H1** (el original no se revisó directamente para H1, pero tenía múltiples encabezados h2 prominentes en la portada).
- **Accesibilidad**: `aria-pressed` en los botones de vista, `aria-label` en todos los íconos y navegación, `role="group"` en el selector, foco visible.

## Qué se quitó o no se usó

- El widget de reservas (ecommerce-365 inline), el Revolution Slider, el Asksuite chatbot, Google Tag Manager, DoubleClick, Microsoft Clarity, TripAdvisor widget — no se incrustan scripts de terceros.
- El video de YouTube de la portada (regla de no scripts ni embeds de terceros). Se conserva el enlace al canal de YouTube en el pie.
- La sección de Instagram inline (las fotos se muestran en el clon desde la API de Instagram; no funciona localmente).
- Los testimonios (mencionados arriba: contienen críticas; pendiente de confirmar con el cliente).
- Los íconos de amenidades (imágenes de íconos PNG del tema de WordPress, no disponibles en el clon).
- Las páginas adicionales (Gastronomía, Actividades detalladas, Golf, Bodas, Grupos y Eventos, Ubicación, Recibe Ofertas, Aviso de Privacidad): el rediseño es una sola página.
- Los dos números de WhatsApp (`526122186591` — número principal — y `526121050164` — call center); el rediseño usa el `526122186591` como WhatsApp principal en todos los botones, excepto en la barra móvil "Llamar" donde se usa el call center (`6121750860`).
- Las fotos que solo se usan como fondo de banner de promociones especiales (`banner-promo-home-h-es-1.webp`, `banner-promo-home-v-es.webp`): apuntan a una página de promociones, no se usan sin contexto.
- La foto de la panorámica de Costa Alegre en el clon (tamaño reducido 600x496 px, sirve como ilustración en esa sección).
- Las imágenes del crudo.json de Creative Commons (Laguna de La Manzanilla, Monumento México-Filipinas, Cocodrilario): no están en el clon y sus licencias se atribuyen a terceros.

## Qué se conserva al pie de la letra

- Todos los nombres de las suites y sus amenidades: Suite Presidencial (Sala · Comedor · Piano · Bar con Barra · Terraza · Jacuzzi · Vista a la marina), Master Suite (Sala · Comedor · Cocina), Suite Ejecutiva (Sala · Comedor · Terraza · Vapor en el baño · Barra de bar), Suite Gobernador (Sala · Comedor · Balcón · Tocador), Habitación Grand de Lujo (Pantalla plana · Aire acondicionado · Tina · Balcón).
- Todos los textos de gastronomía: Grand Café, Oasis Pool Bar, El Faro Lobby Bar, Restaurante La Plazuela.
- El texto del Todo Incluido y la nota de bebidas premium.
- Las 8 actividades: albercas, marina, kayak/paddle-board, safari de aves, tenis, jet skis, gimnasio, canchas de futbol.
- La descripción de la Costa Alegre (literalmente del sitio).
- Las 5 razones para reservar directo (del sitio original).
- La descripción de bodas y su capacidad.
- Los datos de la Laguna de la Navidad como sitio Ramsar con cuatro tipos de manglar.
- Contacto: +52 314 331 0500, +52 612 175 0860 (call center), WhatsApp +52 612 218 6591, Circuito de los Marinos s/n, Fracc. Isla Navidad, 28838 Manzanillo, Colima.
- Motor de reservas: `secure.ecommerce-365.com/portals/IslaNavidad/` (enlace directo).
- Redes: Instagram `islanavidadresort`, Facebook `GrandIslaNavidad`, YouTube `@grandislanavidadresort`, TripAdvisor.
- Fotos del clon (19 fotos + logo), convertidas a .webp en `assets/web/`.

## Pendiente de confirmar con el cliente

- **Testimonios:** el sitio original tiene 10 reseñas de Google (en `crudo.json`). Dos de ellas mencionan instalaciones deterioradas y falta de mantenimiento ("muy deterioradas se ven manchadas, sucias", "algunos espacios necesitan mantenimiento urgente"). No se usaron en el rediseño porque el cliente puede no querer mostrarlas. Si el cliente tiene reseñas positivas verificadas, se pueden agregar.
- **Vista de cada suite:** el rediseño asigna vista a cada suite según sus amenidades ("Vista a la marina" en Presidencial, "Terraza" en Ejecutiva, "Balcón" en Gobernador y de Lujo). Confirmar con el hotel qué vistas corresponden a cada tipo de suite.
- **Coordenadas GPS:** se usan 19.1914, -104.6800 (aproximadas del área de Barra de Navidad); confirmar con el enlace de Google Maps del hotel.
- **Precios:** el sitio original no publica precios (el motor de reservas los muestra en tiempo real). El rediseño no inventa precios.
- **Dos WhatsApp:** el sitio tiene dos números wa.me: `526122186591` (el que aparece en la barra de herramientas) y `526121050164` (el del call center y el widget flotante). El rediseño usa el primero para los botones de reserva. Confirmar cuál es el correcto para recibir reservaciones.
- **Campo de golf:** no hay precios de green fees en el sitio. Se enlaza por WhatsApp para preguntar.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones, "¿A qué despiertas?" (`AQueDespertas`, `DibujoLaguna`, `DibujoPacifico`, `DibujoMarina`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon `sitio/assets/wp-content/uploads/`; copias `.webp`, logo y favicon en `assets/web/` (el `publicDir` de `rediseno/vite.config.ts`). `assets/web/` no va en git: se regenera con `node fotos-web.mjs` desde `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (generadas con `node herramientas/guardar-capturas.mjs 460-grandislanavidad`).
