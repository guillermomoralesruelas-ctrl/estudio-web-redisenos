# Hotel Monte Albán: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotelmontealban.com/ |
| Método | **1.2 en la nube**: el clon no traía fotos; las reales se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/535-hotelmontealban/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 535-hotelmontealban`) |

## En una línea

El mismo hotel en su casona del siglo XVIII, con sus habitaciones, tarifas, Guelaguetza, restaurante y políticas, en una página que se lee sin JavaScript de terceros y donde se puede recorrer la casona zona por zona antes de reservar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El HTML llega vacío: todo lo arma un JavaScript de 380 KB, más Google Fonts | Página con contenido real y fuentes locales |
| Sin imágenes (12 de las 20 rutas de imagen de su código devuelven la página, no la foto) | Solo las 5 fotos reales que sí existen, en .webp: 0 rotas, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- "Arquitectura Colonial Única", "La Guelaguetza", "Restaurante" y "Ubicación Privilegiada" se juntaron en "Recorre la casona antes de llegar".
- "Precios por noche por habitación" y las tres habitaciones quedaron en una sola sección con su foto y su botón de WhatsApp.
- "Información & Políticas" quedó en "Antes de venir".
- Se conserva el mapa de Google que ya usa su sitio (embed sin clave).

## Qué se agregó (no existía en el original)

- **"Recorre la casona antes de llegar"** (elemento memorable): plano esquemático con cinco zonas; al tocar una se ve qué hay ahí, con foto cuando la hay y reserva de boletos en el patio.
- Textos nuestros: el H1, las entradas de las secciones y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `Hotel` y Open Graph.

## Qué se quitó o no se usó

- El formulario de cotización y el panel de administración que viven dentro del JavaScript del sitio.
- Las dos imágenes llamadas `regenerated_image` (patio con mosaicos y restaurante): el nombre sugiere que fueron retocadas con IA. La fachada de la portada se ve reescalada, pero es la que ellos usan.
- Frases como "Preservación histórica certificada" y "Reservación 100% segura".
- El selector de idioma (solo se hizo la versión en español).

## Pendiente de confirmar con el cliente

- Edad mínima: su sitio dice "Mayores de 12 años" en la política y "Solo Adultos (+18)" en el pie. Se usó +12.
- Dirección: dicen "General Antonio de León 1" y su mapa busca "Alameda de León 1". Se usó la primera.
- Si la persona extra ($250) aplica en todas las habitaciones y cuántas personas caben como máximo.
