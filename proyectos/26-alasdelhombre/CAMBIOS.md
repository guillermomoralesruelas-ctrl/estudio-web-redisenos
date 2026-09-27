# Alas del Hombre: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://alas.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/26-alasdelhombre/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 26-alasdelhombre`) |

## En una línea

Es la misma empresa de parapente, con su vuelo tándem de $1,980, sus 11 paquetes con precios, su escuela, sus certificaciones, opiniones y contacto. Cambia la forma: todo en una página y, con "¿Y después de aterrizar?", el visitante elige qué quiere hacer al tocar tierra y ve el paquete que lo incluye, con el trayecto dibujado, el día parada por parada y la reserva por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 28 imágenes rotas y 58 recursos fallidos (escritorio y celular) | 0 imágenes rotas, 0 errores, 0 recursos fallidos; 5,184 px en escritorio y 7,648 px en celular, 0 desbordes, 1 H1 |
| Scripts de terceros (jQuery dos veces, Google Translate, gtag) | Sin scripts de terceros |
| 9 fotos de 4.13 MB | 9 copias .webp de 0.73 MB con `rediseno/fotos-web.mjs` (más `icono.png` sacado del logo) |

## Qué se cambió (mismo contenido, otra forma)

- La portada y las 11 páginas de paquetes se juntan en una página.
- Un solo H1, "Vuelo en parapente en Valle de Bravo". La portada en vivo no tiene H1.
- Los paquetes pasan de 11 páginas a una lista con precio y un detalle; cada paquete conserva su lema, despegue, número de vuelos, paradas del día y precio.
- WhatsApp en formato `wa.me/527222541403` con mensaje prellenado según el paquete (su enlace usa `api.whatsapp.com/send?phone=+52…&text=Hola`).
- El teléfono lleva `tel:+527262626382` y el correo `mailto:`.
- Google Maps con una búsqueda de "Alas del Hombre, Valle de Bravo" (sus páginas de paquetes incrustan un mapa de Google; aquí se enlaza, sin iframe).

## Qué se agregó (no existía en el original)

- **"¿Y después de aterrizar?"**: 14 opciones para elegir (comer en La Michoacana, hotel, masaje, lancha, vino espumoso, pedir matrimonio, karts, video, cascadas, tirolesa y finca de café, stupa budista, traslado desde CDMX…); las que ya no caben en ningún paquete se desactivan. Lista de paquetes que coinciden y detalle con dibujo del trayecto (Monte Alto o El Peñón, una o dos alas), el día parada por parada, precio y WhatsApp. Las opciones son una agrupación nuestra de lo que dice cada paquete. **[PENDIENTE confirmar]** que la agrupación es correcta.
- Textos nuestros: "Tu primer vuelo, con un piloto al lado", "Vuelas en tándem: el piloto lleva el ala y tú disfrutas la vista", "¿Y después de aterrizar?" y su bajada, "Después del vuelo quiero…", "Aprende a volar tú solo" y su párrafo, "Te esperamos en Valle de Bravo", "Despegas en…", los botones y los mensajes de WhatsApp.
- JSON-LD `SportsActivityLocation` con dirección, teléfono, correo, mapa y redes. Open Graph.
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se quitó o no se usó

- Google Translate, gtag y jQuery: no se incluyen scripts de terceros.
- Fotos de banco de los paquetes (masaje, meditación, cena, anillo, letrero "Yo ❤ Valle"): solo se usan sus fotos de vuelo.
- Los enlaces a "Aventura en El Peñón" y "Acrobático en El Peñón" (dan 404 en su sitio).
- Tienda de equipo, tours internacionales y noticias (se mencionan en una línea en la escuela).
- El curso SIV (está comentado en su sitio).

## Qué se conserva al pie de la letra

- Vuelo de 20 minutos por $1,980 con diploma, transporte local, seguro e impuestos; foto o video $395 aparte; qué traer.
- Precios y contenido de los 11 paquetes, de $3,219 a $9,969.
- "Los primeros, con más de 40 años de trayectoria"; certificación AVLM reconocida por la F.A.I.; Mención de Honor SECTUR; sello Safe Travels; RNT 32151100001.
- Las tres opiniones con su nombre.
- Dirección, teléfono, WhatsApp, correo, Facebook, Instagram y YouTube.

## Pendiente de confirmar con el cliente

- Precio del vuelo: $1,980 en español y $2,190 en la versión en inglés. Se usa $1,980.
- Si los precios de los paquetes siguen vigentes (algunos dicen "promoción").
- Si todavía hacen vuelos desde El Peñón (las páginas del menú dan 404, pero "Descubre Temascaltepec" despega ahí).
- El punto exacto de Google Maps (se usa una búsqueda por nombre).
- Si la agrupación de opciones de "¿Y después de aterrizar?" es correcta.

## Dónde está cada cosa

- Textos, paquetes, precios y fotos: `rediseno/src/data/content.ts`
- Diseño, secciones y "¿Y después de aterrizar?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
