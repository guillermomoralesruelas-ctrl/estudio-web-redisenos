# Kichan Bajlum: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://kichanbajlumtours.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/183-canondelsumidero/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 183-canondelsumidero`) |

## En una línea

El mismo tour operador de Palenque, con sus 23 tours compartidos, traslados y paquetes, en una sola página donde el viajero toca en un mapa lo que quiere ver y quedan los tours que lo incluyen, con precio, hora de salida y WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ver `qa/reporte-rediseno.json` → `antes` | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| La carpeta dice "Cañón del Sumidero con Miradores y Chiapa de Corzo", pero el sitio no ofrece ese tour: todo sale de Palenque | Se presenta como lo que es: tours desde Palenque |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, tours desde Palenque, San Cristóbal y paquetes en una sola página.
- Las 23 tarjetas de tours compartidos se volvieron una lista filtrable junto al mapa, ordenada por precio.
- "Tu próxima aventura en tres pasos" y las preguntas frecuentes quedaron en "Antes de viajar".

## Qué se agregó (no existía en el original)

- **"¿Qué quieres ver desde Palenque?"** (elemento memorable): un mapa esquemático (se dice que no está a escala) con Palenque y once destinos (zona arqueológica, Aluxes, Misol-Ha, Agua Azul, Roberto Barrios, Metzabok, Selva Lacandona, Bonampak, Yaxchilán, Tikal y San Cristóbal). Se tocan lugares y la lista deja los tours que los incluyen todos; el tour elegido dibuja su ruta en rojo. El WhatsApp lleva el nombre y el precio del tour.
- Todos los WhatsApp van al 52 916 112 8394 con el código de país.
- Textos nuestros: la entrada del H1, la explicación del mapa, las frases de traslados y paquetes, y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), enlace a Google Maps por dirección, JSON-LD `TravelAgency` y Open Graph.

## Qué se quitó o no se usó

- Las calificaciones por tour como estrellas grandes (quedan como dato: "★ 4.9 (91)").
- "Mejores rutas", "Reserva segura" y "+10 años de experiencia" (sin más dato).
- Los tours privados y los "5 tours de San Cristóbal" (la página de San Cristóbal dice "No se encontraron tours disponibles").
- El blog, la guía de viaje, el formulario de contacto y los logos de plataformas.
- Los logotipos y la foto del letrero de Palenque.

## Qué se conserva al pie de la letra

- Los 23 tours compartidos con su hora de salida, duración, precio por persona y calificación.
- Traslados: Tren Maya ↔ hotel $150, Palenque–San Cristóbal $450, Palenque–Flores $1,200 (por grupo).
- Paquetes desde San Cristóbal: Chiapas Express $4,999, Aventura Chiapas $3,700, Explora Chiapas $7,875 (1 a 10 personas).
- Qué llevar y las tres opiniones con nombre y plataforma.
- Contacto: Av. Benito Juárez s/n, Col. Centro, Palenque; tel. 916 345 2452; WhatsApp 916 112 8394; informacion@kichantravel.com.

## Pendiente de confirmar con el cliente

- **WhatsApp:** los botones de /tours/Palenque van a `wa.me/9163452452` sin el 52; ¿cuál número quieren para WhatsApp, 916 112 8394 o 916 345 2452?
- Dirección: el pie da dos códigos postales (29960 y 29950) y el formulario dice "Barrio Centro Ocosingo".
- Duración del tour "Roberto Barrios y traslado a San Cristóbal" (dice "1").
- Los tours desde San Cristóbal (anuncian 5, la página no muestra ninguno) y si ofrecen Cañón del Sumidero.
- Si "Aventura Chiapas" (5 días, $3,700) es más barato que "Chiapas Express" (4 días, $4,999) a propósito.

## Dónde está cada cosa

- Tours, lugares del mapa, traslados, paquetes y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el mapa: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/imagenes/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
