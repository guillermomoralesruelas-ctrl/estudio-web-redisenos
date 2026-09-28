# Go México Adventures: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://gomexicoadventures.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/456-gomexicoadventures/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 456-gomexicoadventures`) |

## En una línea

Mismo negocio, mismas 7 experiencias con sus precios, horarios, capacidades y "qué incluye", mismo punto de encuentro, WhatsApp y opiniones; cambia la forma: una página en español donde tu grupo "se sube a la trajinera" y ve en qué experiencias cabe y cuánto sale, con solo fotos reales.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 42,334 px de alto y 160,085 px de desborde horizontal (carruseles que repiten experiencias) | 6,482 px en escritorio, 0 desborde |
| 2 imágenes rotas en el celular, 44–46 errores y 8 recursos fallidos | 0, 0 y 0 |
| `crudo.json` vacío | Textos de `original.html`, /es/ y las 7 fichas en español |

## Qué se cambió (mismo contenido, otra forma)

- Las 7 experiencias, que en el inicio aparecen repetidas en cuatro carruseles, quedan una sola vez cada una en el elemento, con los datos de su ficha (horas, capacidad, precio por persona o por grupo, horarios, edades e incluye).
- El sitio abre en español (el original abre en inglés); se usan sus textos de /es/.
- Sus 4 opiniones, con la foto de cada cliente, se corrigieron solo en ortografía.
- El precio "tachado" de la trajinera ($1,050 → $750) se conserva.

## Qué se agregó (no existía en el original)

- El elemento **"Súbanse: ¿cuántos van?"** (`Trajinera`, `Tarjeta` y `ACuantosVan` en `App.tsx`): trajinera en SVG con el arco "Somos N" y la banca que se llena, filtro por hora, experiencias que caben y total calculado.
- WhatsApp prellenado por experiencia ("somos N personas… ¿qué fechas tienen?"), barra fija en el celular y enlace a Google Maps del punto de encuentro.
- Sección "Cómo llegar" con punto de encuentro, muelle, estacionamiento, horario y temporada (datos que en el original solo están dentro de cada ficha).
- JSON-LD `TouristAttraction` con horario, ofertas y redes; title, description y Open Graph con foto real (el original no tiene `og:image`).
- Textos nuestros: "Súbanse: ¿cuántos van?", "Las trajineras de Xochimilco llevan su nombre pintado en el arco. Pinta el tuyo con el tamaño de tu grupo…", "Somos N", "+N que ya no caben en una trajinera", "¿A qué hora?", "Cuando sea", "Al amanecer", "En la mañana", "En la tarde", "De noche", "… experiencias para N personas, de la más económica a la más completa.", "en total para N", "por el grupo (≈ … por persona)", "Qué incluye, horarios y edades", "Preguntar fechas", "Reservar en línea", "No caben en:", "Totales calculados con los precios que publica su sitio…", "Cómo llegar", "Punto de encuentro", "Muelle", "Estacionamiento", "Temporada", "Lo que dicen sus visitantes", "Opiniones publicadas en su sitio.", "Kayak, trajinera y chinampas en los canales de Xochimilco".

## Qué se quitó o no se usó

- Todas las imágenes hechas con IA: los PNG con nombre UUID y los "ChatGPT-Image-…" (los originales traen credenciales C2PA de OpenAI; las copias de WordPress perdieron la marca). Eso incluye la foto principal de "Kayak al amanecer" y la de "Viaje del mes".
- "Login" y "Sign Up", que llevan al sitio de demostración de su plantilla (wptravelenginedemo.com).
- "Blog & Tips" ("No posts found!"), "Collaborators" (un logo sin enlace) y los tipos de viaje sin experiencias propias (senderismo, gran altitud, city tour).
- El segundo correo (gomexicoadventure@gmail.com): se usa info@gomexicoadventures.com.
- X (Twitter).

## Qué se conserva al pie de la letra

- Nombres, duraciones, capacidades, precios y "qué incluye" de las 7 experiencias; punto de encuentro, muelle, estacionamiento, horario (5:00 a 23:00) y temporada.
- WhatsApp +52 56 5927 1819, correo y redes.
- Su texto de "¿Qué es Go México Adventures?" y sus tres razones.

## Pendiente de confirmar con el cliente

- Precio de "Sabores en la Chinampa Cueyatl Cuicatl": $199 por persona (ficha) o $399 (portada); ¿depende del menú?
- Si hay precio de niño (sus fichas dicen "Niño (Child)" sin precio) y si el kayak de la Ruta del Toro se cobra igual a niños desde 3 años.
- Dirección exacta del punto de encuentro para Google Maps (hoy se busca "PILARES San Marcos Xochimilco").
- Fotos reales para "Kayak al amanecer" y para la Chinampa Atlicpac (hoy se usan fotos reales de la laguna y del jardín).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y la trajinera: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó nada nuevo.
