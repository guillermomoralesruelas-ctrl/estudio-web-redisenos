# AquaCore Adventures: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://aquacoreadventures.com/ |
| Método | **1.2**: rediseño a mano (1.1) con las fotos propias y los textos de Progreso tomados con curl del sitio en vivo el 2026-09-28, porque el clon solo trae íconos y fotos de banco |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/47-aquacoreadventures/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 47-aquacoreadventures`) |

## En una línea

Es el mismo operador, con sus mismos textos (en inglés, como su sitio principal), precios, calendarios de temporada, teléfono, WhatsApp y dirección; cambia que se ve con sus fotos reales en vez de íconos y fotos de banco, que cada botón abre WhatsApp directo con la actividad y el mes ya escritos, y que Progreso se explica mes por mes: eliges el mes y se ordenan sus siete actividades de mejor a peor temporada.

## Qué estaba roto o incompleto en el clon

Datos de `qa/reporte-rediseno.json` y revisión a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| No se descargó ningún CSS ni JS: sale sin estilos, con los menús desplegados como listas enormes; 14 recursos fallidos | Sitio estático de un solo JS y CSS, sin scripts de terceros: 0 errores y 0 recursos fallidos |
| Desborde horizontal de 400 px en escritorio y 1,226 px en el celular; más de 16,000 px de alto | 0 px de desborde; 8,351 px en escritorio y 14,502 px en móvil |
| Falta el video de la portada y la foto `destination-cancun` | Portada con una foto aérea real de yate en Cancún |
| Las 8 "fotos" de servicios son íconos de línea y las de destino parecen de banco (Wikimedia) | 26 fotos reales de su flota de Progreso, su escuela de kite en Isla Blanca y su paddleboard, tomadas de sus páginas interiores |

## Qué se cambió (mismo contenido, otra forma)

- Las cuatro costas (Cancún, Progreso, Riviera Maya, Los Cabos) van como lista tipográfica con su frase y sus actividades, en lugar de tarjetas con íconos.
- La flota de Progreso (15 barcos de Marina Yucalpetén) va como lista con foto pequeña, eslora, huéspedes, horas y precio "from", con filtro por tamaño de grupo.
- Kitesurf en Isla Blanca, paddleboard en Progreso y las 8 experiencias de Cancún, cada una con sus textos originales en una sección.
- Paleta y tipografía de su sitio: marino `#0a2540`, laguna `#1273b0`, arena `#f7f4ef`; Playfair Display y Outfit de @fontsource, solo latín.

## Qué se agregó (no existía en el original)

- **"Wind or glass? Progreso, month by month."**: eliges el mes (arranca en el actual, hora de Mérida); un dibujo de la costa de Progreso cambia con la temporada (nortes con cometas, mar liso con yate, lluvias con nubes) y las siete actividades se ordenan Peak, Good y Low con su precio y su nota. Al tocar una, el WhatsApp dice el mes y la actividad. El dibujo no se mueve con `prefers-reduced-motion`.
- WhatsApp directo a wa.me/529991786704 con mensaje prellenado según el barco, la actividad o el mes.
- Barra fija en el celular: WhatsApp, Call y Maps.
- Enlaces a Google Maps de su oficina en Punta Cancún y de Marina Yucalpetén, armados con la dirección.
- JSON-LD `LocalBusiness` con dirección, coordenadas y horario.
- Textos redactados por nosotros: los títulos de sección, la explicación del calendario y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- La página intermedia `/thank-you/whatsapp/` que espera 3 segundos antes de abrir WhatsApp.
- El video de 5.4 MB de la portada.
- Los emojis del menú, los íconos de línea y las fotos de destino de banco.
- Google Tag Manager, Google Analytics y el píxel de Facebook.

## Qué se conserva al pie de la letra

- Teléfono y WhatsApp +52 999 178 6704, correo aquacoreadventures@gmail.com, dirección Blvd. Kukulcán km 8, Punta Cancún, y horario lunes a domingo de 9:00 a 21:00.
- Precios de Progreso: yates desde $7,999 MXN (15 barcos, de $7,999 a $49,999), jet ski desde $2,999 MXN la hora, paddleboard $650 MXN, cenote snorkel $3,640 MXN y cenote diving $5,070 MXN.
- Los calendarios Peak/Good/Low de cada actividad, leídos de sus páginas, y sus avisos (nortes, flamingos, pez vela, veda de mero, tormentas).
- Sus razones para reservar directo, sus cifras (4.9/5, 350+ reviews, cancelación gratis hasta 48 h, respuesta en 1 hora) y los Travelers' Choice 2023 a 2025.

## Pendiente de confirmar con el cliente

- **Idioma:** el rediseño va en inglés como su sitio principal; tienen versión /es/. Confirmar si quieren las dos.
- **Ciudad:** en la base de datos figura en Cabo San Lucas; su oficina está en Punta Cancún y su base "local" parece ser Progreso (lada 999).
- Precios de Cancún, Riviera Maya y Los Cabos: no los publica y así se quedaron.
- La Tiara 34ft y la Sea Ray 50ft no tienen foto en su sitio.
- Si el punto de Google Maps armado con la dirección es el correcto.
- Si quieren conservar la analítica (GTM, Facebook) en la versión final.
- Fotos propias de Cancún, Riviera Maya y Los Cabos para reemplazar las de banco.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: originales en `assets/originales/` (bajadas de su sitio en vivo), copias .webp en `assets/web/` (`publicDir` en `rediseno/vite.config.ts`, las genera `rediseno/fotos-web.mjs`)
