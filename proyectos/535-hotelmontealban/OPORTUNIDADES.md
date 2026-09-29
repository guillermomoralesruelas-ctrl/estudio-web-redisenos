# Hotel Monte Albán (Oaxaca): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con curl el 2026-09-29 y en `investigacion/crudo.json`. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://hotelmontealban.com/ . Hotel de 16 habitaciones en una casona del siglo XVIII frente a la Catedral de Oaxaca |
| Prioridad | **MEDIA**: sitio nuevo y completo, pero con 12 imágenes que no cargan, datos que se contradicen y el contenido solo con JavaScript |
| Contacto publicado | WhatsApp 951 311 6838; tel. reservas 951 516 2330; reservashotelmontealban@hotmail.com |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | 12 de las 20 imágenes de su código (galerías de habitaciones, patio colonial, fachada de noche) no existen en el servidor: devuelven la página en vez de la foto | Galerías vacías o rotas justo donde el viajero decide | curl a cada ruta de `/src/assets/images/` |
| 2 | La política dice "Mayores de 12 años" y el pie dice "Solo Adultos (+18)" | Una familia con adolescentes no sabe si puede reservar | `crudo.json` |
| 3 | La dirección dice "General Antonio de León 1" y el mapa busca "Alameda de León 1" | Confunde al que llega por su cuenta | `crudo.json` y JavaScript |
| 4 | El HTML llega vacío: todo el contenido lo arma el JavaScript | Google y las vistas previas de WhatsApp o redes pueden no leer tarifas ni textos | curl |
| 5 | El panel de administración (precios, reservas) vive dentro del JavaScript público y guarda los datos en el navegador | Los cambios de precios y las solicitudes pueden no llegar a otros equipos; conviene revisarlo con quien hizo el sitio | JavaScript del sitio |

Lo que sí funciona: tarifas claras por ocupación, "sin anticipos", WhatsApp y teléfono visibles, fotos reales y bonitas de habitaciones y de la Guelaguetza.

## Qué le ofrecemos

- "Recorre la casona antes de llegar": el viajero toca cada parte de la mansión y ve qué hay ahí.
- Una página que se lee sin JavaScript, sin imágenes rotas y con una sola edad mínima y una sola dirección.

## Mensaje sugerido para el primer contacto

> Hola, vi el sitio del Hotel Monte Albán y me gustaron mucho las fotos de sus habitaciones y de la Guelaguetza en el patio. Noté que varias fotos de las galerías no cargan y que el sitio dice "Mayores de 12 años" en un lugar y "Solo adultos (+18)" en otro. Me dedico a rediseñar sitios y preparé una propuesta donde el viajero recorre la casona zona por zona antes de reservar. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Edad mínima y dirección correctas.
- Las fotos que faltan (galerías de habitaciones, patio, fachada de noche).
- Si reciben las solicitudes del formulario de su sitio.
