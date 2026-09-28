# Escuela de Buceo Proyecto Azul: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.buceoproyectoazul.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/383-escueladebuceo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 383-escueladebuceo`) |

## En una línea

Misma escuela, mismos 20 cursos con sus requisitos, mismas albercas, calendario de viajes, tienda, teléfonos y horario; cambia la forma: en vez de 20 páginas separadas, un mapa tipo metro donde cada quien ve qué curso le toca según su nivel y edad.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 15 de 15 imágenes rotas (rutas `…com.mxassets/` sin diagonal) y 55 errores de consola | 0 y 0 |
| Desborde horizontal de 284 px (escritorio) y 1,174 px (celular) | 0 |
| Contadores "0+ Alumnos, 0+ Certificaciones, 0+ Viajes" | Cifras que sí publica su sitio: 1998, 20 cursos, 2 albercas y 14 viajes del calendario |

## Qué se cambió (mismo contenido, otra forma)

- Las 20 fichas de curso quedan en `content.ts` con su objetivo, "consiste en" y requisitos, resumidos sin cambiar números, edades ni niveles.
- El calendario de Viajes pasa a una cuadrícula por mes con enlace a cada viaje; los títulos se escriben en tipo oración ("Tiburones toro y cenotes").
- Teléfonos escritos igual en todo el sitio (55 4167 4956, 55 6306 1563 y WhatsApp 55 5478 4150).

## Qué se agregó (no existía en el original)

- El elemento **"La Línea Azul"** (`LineaAzul`, `Ramales`, `Punto`, `Ficha`, `estadoDe` y `trayecto` en `App.tsx`): mapa de cursos por ramales, selector de nivel y edad, estado de cada estación, estaciones que faltan y WhatsApp prellenado con el curso, el nivel y la edad.
- WhatsApp con el número completo (`wa.me/525554784150`) y barra fija en el celular.
- JSON-LD `SportsActivityLocation` y `Store` con dirección, horario y redes; description sin "4 Albercas"; favicon con su óvalo.
- Textos nuestros: "La Línea Azul" y su explicación, "¿En qué estación vas?", los niveles ("Todavía no sé nadar", "Sé nadar, aún no tengo certificación"…), los nombres de ramales ("Para probar", "Sin ser buzo", "Especialidades"), "Puedes tomarlo", "Ya la tienes", "Ya no la necesitas", "Desde … años", "Necesitas …", "Antes te faltan estas estaciones", "Terminal: título PADI y/o SSI.", "Preguntar por este curso", "Ver su ficha", "Volver al mapa", "Dos albercas, oriente y poniente", "Un viaje a bucear casi cada mes", "Una escuela 100% mexicana", "Visítanos en la tienda", "Escríbenos o llámanos" y los pies de foto.

## Qué se quitó o no se usó

- Fotos de banco: tres de pxhere.com, la de equipo de Wikimedia (Scuba_AllGear) y la del tiburón ballena (whale-shark-297lwug).
- "Somos la Escuela de Buceo Más Completa de Ciudad de México" e "Impartimos el curso más completo de Snorkel Diver de todo el país" (superlativos).
- Los contadores en 0, el carrusel de la portada, la reserva en inglés de Tourmaster y el texto "imunify-bot-check".
- Los 4 productos de la tienda (sin precio en la página): queda el enlace a su tienda.

## Qué se conserva al pie de la letra

- Nombres, edades mínimas, niveles, sesiones, buceos y bitácora de cada curso; enlaces a sus fichas.
- Fechas y destinos de los 14 viajes; VIP Trip.
- Dirección, horario, teléfonos, WhatsApp, correo, Facebook e Instagram; "Hacemos burbujas desde 1998", "Vivimos en la Tierra… Soñamos en el Mar…", su misión, Raíz Verde, Sea Shepherd y seguro DAN.

## Pendiente de confirmar con el cliente

- **¿Cuántas albercas?** Su description dice 4, Nosotros dice 3 y Albercas muestra 2: el rediseño usa las 2 con nombre (Leandro Valle y Parque Lira).
- **Año del calendario de viajes** (el sitio no lo dice) y costos.
- "18 cursos" en su texto contra 20 en su menú: el rediseño muestra los 20.
- Dirección exacta de cada deportivo (los enlaces de "Cómo llegar" buscan el nombre del deportivo en Google Maps).
- Si hay un curso de instructor (su frase dice "hasta ser Instructor de Buceo Internacional", pero no hay ficha).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el mapa: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
