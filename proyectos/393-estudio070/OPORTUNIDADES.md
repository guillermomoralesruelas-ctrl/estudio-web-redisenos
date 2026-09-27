# Estudio 070: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://estudio070.com/ (WordPress.com). Estudio de fotografía y video de Sabina Silva y Cristhian Cañizales, Colonia Narvarte, CDMX |
| Prioridad | **ALTA**: todos sus botones de WhatsApp llevan a un número sin el 52 de México (`phone=5529694578`), que WhatsApp lee como un número de Brasil: quien toca "Envía un mensaje por Whatsapp" no les llega. Además siguen ofreciendo la "preventa 2025" |
| Contacto publicado | WhatsApp 55 2969 4578 (con el enlace mal formado); estudio070mx@gmail.com; Instagram @estudio070 (y @fotopop, @fotografoencdmx, @saborvisual) |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` (el "antes" sale en blanco porque el clon está roto: enseñar mejor el sitio real) y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio y Bodas) y en `crudo.json` (Inicio, Bodas, 15 años, Productos y Alimentos).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Su WhatsApp no funciona desde el sitio.** Los botones "Envía un mensaje por Whatsapp" y el número 5529694578 enlazan a `api.whatsapp.com/send?phone=5529694578`, sin el código de país 52. WhatsApp toma el 55 como el código de Brasil, así que abre un chat con un número que no es el suyo (o no existe). Son 7 enlaces en el inicio, 5 en Bodas y más en cada servicio. | WhatsApp es su principal forma de contacto: cada novia, quinceañera o marca que toca el botón se topa con un error y probablemente contrata a otro fotógrafo. | Inicio y `/fotografos-de-bodas-cdmx/` en vivo; `resumen.json` |
| 2 | **Promoción vencida.** Bodas y 15 años siguen diciendo "obtén un 25% de Descuento en nuestra preventa 2025" y "¡Reserva tu fecha 2025 ahora!". | Da la impresión de un sitio abandonado, o genera reclamos de clientes que piden el 25%. | `/fotografos-de-bodas-cdmx/` en vivo y `crudo.json` (15 años) |
| 3 | **¿Caracas o Ciudad de México?** La descripción para Google dice "en Caracas y Ciudad de México", un enlace de videos es `videos-de-bodas-caracas` y la página de 15 años dice "en México o Venezuela". | Confunde a quien busca fotógrafo en CDMX y le resta fuerza en Google para "fotógrafo de bodas CDMX". | Inicio en vivo (meta description) y `crudo.json` |
| 4 | **Enlaces y redes revueltos.** El enlace "YouTube" de Bodas lleva a Instagram (@fotografoencdmx); el sitio manda a cuatro Instagram distintos (@estudio070, @fotopop, @fotografoencdmx, @saborvisual). En la página de 15 años, la pregunta frecuente habla de "las fotos de mi boda". | Dispersa a sus seguidores y se ve poco cuidado en un negocio que vende cuidado del detalle. | `crudo.json` |
| 5 | **Google no sabe qué negocio es ni dónde está.** No hay datos estructurados de negocio (sin dirección, teléfono ni servicios); la dirección solo dice "Colonia Narvarte". | Menos visibilidad en búsquedas locales y en Google Maps. | Inicio en vivo (sin JSON-LD de negocio) |

Nota: **su trabajo es muy bueno y variado** (bodas, XV, embarazo, newborn, marcas, gastronomía), con testimonios reales y dos fotógrafos que asisten en persona. El argumento principal es simple y urgente: **arreglar el WhatsApp**, y de paso ordenar su portafolio por servicio.

## Qué le ofrecemos

- "La hoja de contactos": el cliente elige su servicio y revisa su trabajo como en una hoja de contactos de fotógrafo, con quién lo hace y WhatsApp con el mensaje de ese servicio, al número correcto.
- WhatsApp y llamada a un toque en cada pantalla (barra fija en el celular).
- Todo en una página, sin promociones vencidas, enfocado en Ciudad de México y con datos de negocio para Google.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por Instagram @estudio070 o al correo estudio070mx@gmail.com; **no por el botón de su sitio**, que no funciona; si es por WhatsApp, marcando +52 55 2969 4578). Tono: respetuoso y útil.

> Hola Sabina y Cristhian, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi su página y su trabajo de bodas y XV años está increíble. Les escribo porque noté que los botones de "Envía un mensaje por WhatsApp" de su sitio llevan al número sin el 52 de México, y WhatsApp lo abre como un número de Brasil, así que esos mensajes no les llegan. También sigue la promoción de preventa 2025. Les preparé una propuesta de cómo podría verse su sitio, con su portafolio por servicio y el WhatsApp funcionando. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El 55 2969 4578 también recibe llamadas? ¿Cuál es la dirección del estudio en Narvarte?
- ¿Siguen trabajando en Caracas? ¿Quieren mencionarlo?
- ¿Tienen una promoción para 2026? ¿Quieren publicar rangos de precio o paquetes?
- ¿Cuál es su Instagram principal?
- ¿Nos comparten fotos en alta resolución de su portafolio?
