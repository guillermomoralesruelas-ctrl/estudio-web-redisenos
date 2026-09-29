# BCS Eco Tours: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://loretobaytours.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/103-bcsecotours/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 103-bcsecotours`) |

## En una línea

Es la misma empresa de tours, con sus tres safaris y sus precios, la ballena azul, el snorkel, el buceo, la pesca, sus lanchas Keiko y su contacto. Cambia la forma: todo en una página en español y, con "Tu lugar en la Keiko", cada grupo ve sus lugares en la lancha, el precio desde y reserva por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 24 imágenes rotas y 31 recursos fallidos | 0 imágenes rotas, 0 errores, 0 recursos fallidos, 0 desbordes; 7,684 px en escritorio y 13,135 px en celular |
| Tres H1 en la portada (uno por diapositiva) | 1 H1 |
| Imágenes con "Foto galería", "Tour" o "Blog" como texto alternativo | Texto alternativo que describe cada foto |
| 11.4 MB de imágenes (un PNG del blog pesa 4.2 MB) | 9 fotos .webp (0.95 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Los tres safaris con sus precios desde por persona ($1,350 compartido, $1,800 privado, $2,500 especial), su lema y un resumen de su texto. **Duración: 5 a 6 horas**, la de sus textos (su ficha dice "1 horas").
- Capacidad de 10 a 16 pasajeros en compartido y privado (su texto); el especial no dice capacidad y así se indica.
- Islas, "posibles encuentros", actividades, equipo incluido y "Del Mar a la Mesa": sus listas, sin emojis.
- Ballena azul: temporada, precios ($2,300 por persona compartido con mínimo 5; $21,000 privado hasta 10), lo que incluye y el itinerario, de su página /ballenaazul/.
- Snorkel, buceo y pesca: resumen de sus páginas.
- Preguntas frecuentes: las siete de su página; la respuesta "Si, claro lo hacemos bien" queda como "Sí, lo filetean y lo empacan" (su pregunta en inglés dice "we filet and package fish").
- Cuatro de sus diez testimonios en español (el sitio en español no pone nombres; no se usaron los nombres de la versión en inglés).

## Qué se agregó (no existía en el original)

- **"Tu lugar en la Keiko"**: ilustración de la lancha vista desde arriba con 16 lugares. Eliges safari, pasajeros (1 a 16), actividades y fecha; tus lugares se pintan, el precio desde se multiplica por pasajero y aparece el aviso de capacidad de su texto. El WhatsApp lleva todo. La ilustración no es el plano real (lo dice en la sección); el valor inicial de 4 pasajeros es solo un ejemplo.
- Textos nuestros: el H1, la bajada de la portada, los títulos de sección, "Tu lugar en la Keiko" y su explicación, los avisos de la calculadora, los botones y los mensajes de WhatsApp.
- Barra fija en el celular: WhatsApp, Llamar (el mismo número del WhatsApp, 613 100 9373) y Cómo llegar.
- "Cómo llegar" a Google Maps con la dirección de la oficina y otro a la Marina Dársena (búsqueda por dirección; su sitio no tiene mapa embebido).
- JSON-LD `LocalBusiness` + `TravelAgency` con dirección, teléfono, correo, formas de pago y los tres safaris.

## Qué se quitó o no se usó

- La foto de la cola de ballena: lleva la marca de agua de otro fotógrafo.
- Tortuga, peces, mantas, la bandera, la tira "linea" y las dos turistas en la playa.
- El blog, los videos, la versión en inglés, el formulario de reserva y el enlace "admin/login" del menú.

## Qué se conserva al pie de la letra

- Fco. de Ulloa 240, Loreto, B.C.S., 23880; WhatsApp 613 100 9373; contacto@bcs.tours; Facebook y YouTube.
- Más de 28 años, lanchas Keiko y Keiko I de 30 pies (9.5 m) diseñadas por ellos, motor Yamaha 250 HP y el equipo de a bordo.
- Precios, capacidades, islas, especies, equipo incluido, itinerario de ballena azul y formas de pago.

## Pendiente de confirmar con el cliente

- La duración real de cada safari (5 a 6 horas en el texto, "1 horas" en la ficha).
- La capacidad del Safari Especial y si el privado con menos de 10 pasajeros es posible.
- Si los precios de ballena azul de /ballenaazul/ siguen vigentes y cómo se relacionan con los safaris (su máximo es 10 personas; los safaris dicen 16).
- Si las fotos de fauna (lobos marinos, buzo) y del paisaje con cardones son suyas o de un banco de imágenes.
- Si el teléfono para llamar es el mismo del WhatsApp.

## Dónde está cada cosa

- Textos, safaris, precios, ballena azul y preguntas: `rediseno/src/data/content.ts`
- Diseño, secciones y "Tu lugar en la Keiko" (la lancha en SVG): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/img/` y `sitio/assets/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
