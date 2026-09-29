# Hacienda La Magdalena: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.haciendalamagdalena.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/481-haciendalamagdalena/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 481-haciendalamagdalena`) |

## En una línea

De 13 páginas con slider, jQuery y un motor de reservas, a una sola página con el tablero de llaves de la recepción, todos sus precios publicados y WhatsApp en cada paquete, cena, espacio y servicio de spa.

## Qué estaba roto o incompleto en el clon

- 14 imágenes rotas y 27 recursos fallidos (slider, íconos de Font Awesome, AOS y Bootstrap desde CDN).
- El formulario de reserva envía a un motor externo (Sybelio) que no funciona fuera de su dominio.
- La galería se arma con JavaScript y en el clon queda vacía.

## Qué se cambió (mismo contenido, otra forma)

- Habitaciones: de un slider por tipo a un tablero de 24 llaves con la ficha de cada tipo.
- Paquetes, promociones, cenas, extras y spa: de páginas separadas a secciones con precio visible.
- Eventos: los 6 espacios en una lista, con la capacidad máxima que da su sitio (480, 350 y 180) como barra; los que no dicen capacidad dicen "ceremonias y eventos íntimos" (su texto habla de "eventos sociales pequeños").
- Contacto: los 7 correos agrupados por área, como en su página, y su mapa de Google incrustado (el mismo iframe de su página de contacto).

## Qué se agregó (no existía en el original)

- WhatsApp con mensaje prellenado en cada habitación, paquete, cena, promoción, evento y spa, y en la barra fija del celular (con Llamar y Cómo llegar).
- JSON-LD de tipo `Hotel` con dirección, coordenadas de su mapa y número de habitaciones; Open Graph; `alt` en todas las fotos.
- Enlace a Google Maps y a sus opiniones en Tripadvisor (el enlace está en su sitio).

## Qué se quitó o no se usó

- El motor de reservas de Sybelio y el aviso "¡Con el mejor precio garantizado!": en la propuesta, las reservas van por WhatsApp. Si se conserva el motor, hay que conectar su botón.
- Los beneficios de salud del spa (combatir el dolor, eliminar toxinas, regenerar la piel): se dejó solo nombre, duración y precio.
- Los sellos de Tesoros de México, Haciendas y Casonas de Jalisco, Cosy Places y "Certified member" LGBT: no se muestran hasta confirmar que siguen vigentes.
- El blog externo (haciendalamagdalenajalisco.blogspot.com), la versión en inglés y el aviso de copyright 2023.
- Google Tag Manager y los scripts de terceros.

## Qué se conserva al pie de la letra

- Habitaciones y sus características, historia, espacios de eventos, centro de negocios y servicios, según sus páginas.
- Precios con IVA: paquetes de hospedaje (por pareja por noche), cenas románticas, desayunos, picnic, sesión fotográfica, medio día de spa, celebraciones y masajes y faciales.
- Promociones: larga estancia 20% desde 4 noches, 4x3 y tarifa para grupos desde 10 habitaciones.
- Dirección, dos teléfonos, correos y redes de su página de contacto.

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio no publica WhatsApp. Se usó el primer teléfono, 33 3897 0648 (`523338970648`); confirmar si tiene WhatsApp en ese número o en otro.
- **Número de habitaciones:** su página de habitaciones dice 10 alcobas y 2 master suites (24 en total, el dato que se usó); su página de servicios dice 7 alcobas y 1 master suite.
- Qué foto corresponde a qué habitación: la de dos camas con dosel se puso en "Alcoba" y la del tapiz bordado en "Master suite" (su texto dice que una está "inspirada en la India"); ambas son deducciones.
- Si los precios de paquetes, cenas y spa siguen vigentes.
- Si siguen vigentes las membresías que muestra su sitio.
- El correo del spa es una cuenta de Gmail (spatierraslejanas@gmail.com): ¿tienen uno del dominio?

## Dónde está cada cosa

- Textos, precios, habitaciones, espacios y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el tablero de llaves: `rediseno/src/App.tsx`
- Colores, fuentes y la madera del tablero: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/img/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
