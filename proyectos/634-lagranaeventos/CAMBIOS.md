# La Grana Eventos: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lagranaeventos.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/634-lagranaeventos/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 634-lagranaeventos`) |

## En una línea

Es el mismo lugar con sus textos, fotos, paquetes y precios; cambia la forma: una sola página donde mueves el número de invitados, ves en un plano a escala cuánto jardín ocupa tu fiesta y cuánto cuesta cada paquete, y escribes por WhatsApp o llamas con un toque.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 5 H1 (los textos del carrusel) | Un solo H1 |
| El carrusel de la portada se queda cargando (franja blanca) | Foto fija del lago con su puente |
| 2 imágenes rotas (logo y foto del toldo) | 10 imágenes, 0 rotas |
| 21 y 20 errores de consola | 0 errores, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- Las cinco columnas de Paquetes pasan al plano "¿Cuánto jardín ocupa tu fiesta?", un paquete a la vez con su total para el número de invitados elegido.
- Las listas de Todo Incluido Plus y Premium se agruparon (por ejemplo "Seguridad, limpieza e implementos para baños", "Cristalería, mantelería, servilleta de tela y plato base de mimbre") sin quitar nada.
- Se corrigieron "Tifanny" → "Tiffany" y "bricolines" → "brincolines"; "Renta de la terraza x 5 horas" → "por 5 horas".
- Las cinco páginas quedan en una; Galería y Ubicación se sustituyen por fotos y un enlace a Google Maps.
- Las listas de eventos van como texto corrido.

## Qué se agregó (no existía en el original)

- **"¿Cuánto jardín ocupa tu fiesta?"**: plano a escala de 1,500 m² con regla de 10 m, una mesa de 10 por cada diez invitados, la pista del paquete a escala, día de la semana, total por invitados con las reglas de cada paquete y WhatsApp con paquete, invitados y día. Textos nuestros: el título, la entrada ("Mueve el número de invitados…"), la nota del dibujo simbólico, los avisos ("El Paquete Básico es solo de lunes a jueves", "…para hasta 80 personas; tiene 'Persona extra $250'…", "Este paquete es para mínimo 100 personas") y "Precios de su página de paquetes (enero de 2026)".
- Botones y títulos: "Pedir informes por WhatsApp", "Ver paquetes y precios", "Diseñada para los amantes de la libertad y la naturaleza" (de su texto), "El espacio ideal para festejar", "Y para sus eventos más íntimos", "Bodas en el bosque, pista bajo las estrellas", "Preguntar por esta fecha", "Cuéntenos la fecha, el tipo de evento y cuántos invitados espera" y la nota de la pista de madera con cristal.
- WhatsApp con mensaje prellenado, enlaces `tel:` en los tres celulares, barra fija en el celular, Google Maps con las coordenadas de su propio mapa, JSON-LD `EventVenue`, Open Graph y favicon.

## Qué se quitó o no se usó

- El carrusel, el buscador, el mapa incrustado de Google (con su clave de API), "Copyright 2015 / Powered & Designed by MA:D Resultados Creativos".
- La galería de ~50 fotos (no están en el clon).

## Qué se conserva al pie de la letra

- Textos de Inicio (Bosque de La Primavera, 4 km del Periférico, 1,500 m², 400 invitados, 150 vehículos, tipos de eventos), las tres preguntas frecuentes (la tercera sin el enlace a Paquetes) y "¿Aún no está seguro si podemos ayudarlo?…".
- Paquetes y precios: Básico $10,000 (lunes a jueves, hasta 80, hasta las 8 pm, 5 horas) con sus extras; Básico Plus $450 p/p; Todo Incluido desde $790 p/p; Plus desde $990 p/p; Premium desde $1,300 p/p (6 horas); todos los per cápita con mínimo 100 personas.
- Celulares 33 1047 9460, 33 2183 3491 y 33 1227 2774; dirección Prol. Mariano Otero 4281, Fracc. El Fortín, C.P. 45066, Zapopan; Facebook e Instagram.

## Pendiente de confirmar con el cliente

- Cuál de sus tres celulares tiene WhatsApp (se usa el 33 1227 2774, el de "¡Llámanos!").
- Si el Básico acepta más de 80 personas con "Persona extra $250" y hasta cuántas.
- Si los paquetes por persona cambian entre semana o en fin de semana, y si el mínimo de 100 se cobra aunque vengan menos.
- El tamaño del toldo según invitados en los Todo Incluido.
- Si los precios de enero de 2026 siguen vigentes.
- Fotos recientes y de mejor calidad (las del clon son de 2015 y de WhatsApp de 2018) y las de la galería.
- Horario de atención.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
