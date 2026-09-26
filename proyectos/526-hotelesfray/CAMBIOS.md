# Hoteles Fray: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotelesfray.com/ (WordPress, Divi) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/526-hotelesfray/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 526-hotelesfray`) |

## En una línea

Mismos dos hoteles, mismos textos, fotos, teléfonos y motor de reservas; cambia la forma: una sola página donde eliges tu hotel y todo el sitio (color, reservas, WhatsApp, teléfono, mapa, habitaciones y restaurante) se ajusta a él.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 3 imágenes rotas en escritorio y 4 en móvil (píxeles de seguimiento de AdRoll) | 0 imágenes rotas; no hay scripts de seguimiento |
| 33 errores de consola: fuentes de íconos de Divi bloqueadas por CORS, y scripts de GTM, Facebook y AdRoll | 0 errores |
| Íconos de Divi como cuadros vacíos | Íconos en SVG dentro del código |
| Carruseles de cada hotel sin avanzar | Fotos fijas por sección |
| Buscador de reservas que depende de jQuery UI | Formulario propio con fechas nativas que abre el mismo Cloudbeds |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Fray Junípero, Fray Select y Habitaciones se juntaron en **una sola página** que cambia según el hotel elegido.
- Las habitaciones ya no aparecen todas mezcladas (en el original hay dos secciones seguidas llamadas "Habitación estándar"): se muestran las del hotel elegido, con un enlace para ver las del otro.
- Se reordenaron las secciones: primero elegir y reservar, luego el hotel, sus habitaciones y su restaurante.
- Los textos se copiaron con correcciones mínimas de redacción ("¿Porqué…?", "harán de tu evento" por "hará", "c on equipos", "a un costado", acentos y puntuación de las opiniones).
- Fotos: 30 copias `.webp` de las fotos del clon (de 5.5 MB a 2.2 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.

## Qué se agregó (no existía en el original)

- **Elemento memorable: el selector de hotel** (componente `Portada` y el hook `useHotel` en `App.tsx`). El hotel elegido cambia el color de los botones (`data-hotel` en `<html>`, variables `--acento` en `index.css`) y el destino de todos los botones. Se recuerda en el navegador con `localStorage`, solo como comodidad. Textos nuevos: "Dos hoteles en el centro de Tepic. ¿Cuál es el tuyo?", "Estás viendo este hotel", "Ver este hotel", "Reservar en Fray Junípero / Fray Select", "Habitaciones en …", "Ver las de …".
- Barra de reserva con hotel, llegada, salida y código promocional, que abre `https://hotels.cloudbeds.com/es/reservation/<código>/?checkin=…&checkout=…&promo=…`, igual que el formulario del sitio original. Textos nuevos: "Reserva directo y con desayuno buffet incluido", "Reservar en nuestro sitio te da recompensas de The Guestbook", "Ver disponibilidad".
- Botones nuevos: "Pregúntanos por WhatsApp", "Cotizar un evento en …", "Cómo llegar". Mensaje de WhatsApp prellenado adaptado del original: "Hola, me comunico desde su sitio web. Quiero información del Hotel …".
- Títulos nuevos: "Todas nuestras habitaciones incluyen" (del original), "Visítanos en Tepic".
- Barra fija en el celular: reservar, WhatsApp, llamar y cómo llegar, del hotel elegido.
- Enlaces a Google Maps de cada hotel (búsqueda por nombre y dirección).
- JSON-LD con los dos `Hotel` (dirección, teléfono, correo, servicios y marca "Hoteles Fray"); el original solo publica `WebSite` y `Organization`.
- Accesibilidad: un solo H1, `alt` en todas las fotos (en el inicio del original 18 de 42 imágenes no tienen), contraste AA (el ámbar de Junípero se usa como fondo con texto oscuro y, como texto, en su versión oscura `#8a5a00`), enlace para saltar a reservar y `prefers-reduced-motion`.

## Qué se quitó o no se usó

- Scripts de seguimiento (Google Tag Manager, píxel de Facebook, AdRoll). Si el cliente los quiere, se agregan al publicar.
- La "Guía Tepic", el blog, "Qué hacer en Tepic", "Cultura y Museos", "Ofertas" y "Grupos": sus páginas no están en `crudo.json`.
- Los tours virtuales y los videos de YouTube (se pueden enlazar cuando el cliente lo pida).
- El selector de idioma EN.
- La foto de la Jr. Suite y la de la Habitación panorámica: no están en el clon; esas dos habitaciones van solo con texto.
- El banner "Convenio de tarifas Hotel Empresa" (imagen con texto) y el logo de "Visita Tepic": el convenio se explica con texto.

## Qué se conserva al pie de la letra

- Los dos hoteles con sus textos: Fray Junípero Serra (frente a la Catedral, Restaurante Capistrano, terrazas panorámicas, estacionamiento subterráneo y gimnasio Life Fitness) y Fray Select (el más nuevo, Restaurante Piso Uno, desayuno buffet en la terraza "no aplica en reservas de grupo").
- Las habitaciones: Superior, Jr. Suite, Master Suite y Estándar de 1, 2 o 3 camas en Junípero; Estándar King, Doble y Panorámica en Select; y lo que incluyen todas.
- Contacto: Sebastián Lerdo de Tejada Pte. 23, +52 311 212 2525, recepcion@hotelfrayjunipero.com; Av. Prisciliano Sánchez Sur 130, +52 311 133 7060, recepcion@hotelfrayselect.com; Facebook e Instagram.
- The Guestbook (hasta 15% de recompensa), convenio de tarifas, salones de eventos, las tres opiniones con su ciudad de origen y los premios que publican (Booking.com 2026 9.4, Tripadvisor Travellers' Choice 2024, myHotel 2025 y KAYAK Travel Awards 2023).
- Los códigos de Cloudbeds de cada hotel y el aviso de privacidad en PDF.

## Pendiente de confirmar con el cliente

- Tarifas: el sitio no las publica. ¿Quieren mostrar un "desde $…"?
- Fotos de la Jr. Suite y de la Habitación panorámica en buena resolución.
- Si "cancelación flexible" y "reserva sin anticipo" (aparecen en su meta description) aplican a los dos hoteles, para ponerlos en la barra de reserva.
- Si quieren conservar los scripts de seguimiento.
- Qué incluye el convenio de tarifas y a quién se le pide (correo o WhatsApp).

## Dónde está cada cosa

- Textos y datos de cada hotel: `rediseno/src/data/content.ts` (objeto `hoteles`)
- Diseño, selector y reserva: `rediseno/src/App.tsx`
- Colores por hotel y fuente: `rediseno/src/index.css` (`@theme` y `[data-hotel]`)
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y ejecuta `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 526-hotelesfray` después del QA).
