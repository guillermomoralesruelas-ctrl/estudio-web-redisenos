# Kiteboard Mexico Ikarus: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://kiteboardmexico.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/612-kiteboardmexicoikarus/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 612-kiteboardmexicoikarus`) |

## En una línea

Misma escuela, mismas clases, rentas, cuartos, reseñas y contacto, en inglés como su sitio; cambia la forma: las tarifas repartidas en muchas fichas se juntan en un boleto que suma clase y hospedaje de tu viaje.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 62 a 66 imágenes rotas de 84, 60 errores de consola, 1 recurso fallido | 0, 0 y 0 |

## Qué se cambió (mismo contenido, otra forma)

- Las ventajas de su portada (agua plana y baja, lancha de apoyo, desde 2002, todas las edades) quedan en 4 frases.
- Precios de clases y rentas de Kiteboard Lessons, y de cuartos y camping de Accommodations, en un solo lugar.
- Reseñas de Tripadvisor recortadas con "…".

## Qué se agregó (no existía en el original)

- El elemento **"Your kite trip, priced before you pack"** (`Trip` y `Kite` en `App.tsx`): clase, personas, hospedaje y noches; boleto con total, un kite por hora en el agua y WhatsApp con el resumen.
- WhatsApp directo (`wa.me/529988744245`) en encabezado, boleto y barra del celular; "Get directions" a Google Maps.
- JSON-LD `SportsActivityLocation` y `LodgingBusiness`; description propia (la suya nombra "Anthar Racca KITEBOARD CENTER"); Open Graph; `hreflang` a su versión en francés.
- Textos nuestros (en inglés): el H1, "Your kite trip, priced before you pack" y su explicación, "Your ticket", "… on the water", "Estimated total", "Send this to Ikarus", "I have my own place", "Private lessons are one student each…", "Lessons and rentals", "Stay on the lagoon", "From riders on Tripadvisor", "Find us in Isla Blanca", "Talk to the school" y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- "The best place to learn kitesurfing and wingfoiling in Mexico, and one of the best places… on this planet".
- Los sellos de bitcoin y Good Travel Scan, los logos de socios y el mapa de Google como imagen.
- El menú del restaurante completo (queda una línea; sigue en su página).

## Qué se conserva al pie de la letra

- Precios de clases grupales ($3,300, $4,800, $8,400 por persona) y privadas ($2,300, $4,500, $6,600, $12,000), rentas y supervisión.
- Tarifas de Accommodations: studio king $2,772, triple $2,244, doble $1,980, camping $600 y $840, persona extra $250, pase de día.
- Dirección, WhatsApp, correo, redes, idiomas de las clases y "since 2002".

## Pendiente de confirmar con el cliente

- **Tarifas de cuartos**: su página Accommodations y sus fichas de reservación dan precios distintos (doble $1,980 contra $1,800; triple $2,244 contra $2,040; king $2,772 contra 126 USD). El rediseño usa Accommodations.
- Si quieren versión en español (enseñan en español y el sitio no la tiene).
- El nombre "Anthar Racca KITEBOARD CENTER" de su descripción para Google.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el elemento: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
