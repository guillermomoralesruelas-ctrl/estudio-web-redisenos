# Fusion Tours: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://fusiontoursrivieramaya.com/ |
| Prioridad | **MEDIA**: agencia con +20 años y buen catálogo, pero su tienda WordPress es lenta y el logo puede desaparecer en cualquier momento |
| Contacto publicado | WhatsApp +52 984-218-1414 · reservationsfusiontoursrvm@gmail.com · Instagram @fusiontoursrvm |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El logo del sitio es una imagen alojada en una URL temporal de builder.io (`api.builder.io/api/v1/image/assets/TEMP/…`). Las URLs TEMP de builder.io expiran y dejan de estar disponibles sin previo aviso. Si eso pasa, el sitio queda sin logo. | Una agencia de turismo que vende +$600 paquetes al año necesita que su marca sea visible. Si el logo desaparece, pierde credibilidad en el primer impacto visual. | `crudo.json` página principal, imagen con alt "Fusion Tours Logo" |
| 2 | La imagen del hero (el fondo de entrada del sitio, la foto de playa tropical con palmeras) también viene de la misma CDN temporal de builder.io. | Si la imagen hero desaparece, la primera pantalla del sitio queda en blanco o con un fondo gris. Es la primera impresión de un turista que llega desde Google o Instagram. | `crudo.json` primer `src` de imagen |
| 3 | Los precios de los tours no son visibles sin JavaScript de WooCommerce. Un visitante con JavaScript limitado, AdBlock o conexión lenta puede ver el catálogo sin ningún precio. | Un turista que no puede ver los precios no puede decidir si el tour cabe en su presupuesto. Sin ese dato, es probable que cierre la pestaña y busque otra agencia que sí los muestre. | `crudo.json`: ninguna página scrapeada incluye precios en el texto visible |
| 4 | El footer del sitio tiene links de Facebook e Instagram que apuntan a las URLs genéricas `https://www.facebook.com/` y `https://www.instagram.com/` (sin la cuenta), aunque en otras partes del sitio sí aparecen los links correctos (fusiontoursrvm). | Un turista que intenta verificar la agencia en redes sociales desde el footer llega a la página principal de Facebook/Instagram en vez de a la cuenta de Fusion Tours. | `crudo.json` footer del HTML principal |
| 5 | El sitio dice "MADE WITH LOVE FOR SNC DESIGNS" en el pie de página. La atribución al estudio que hizo el sitio anterior es visible para cualquier visitante. | Aunque no es un problema de funcionalidad, reduce la percepción de profesionalismo y puede generar preguntas del cliente sobre quién administra su sitio. | `crudo.json` footer |

## Qué le ofrecemos

- Un sitio que no depende de CDNs temporales externas: logo e imagen hero siempre visibles.
- Un selector de tipo de aventura que filtra el catálogo y pre-llena WhatsApp con el tour elegido, sin necesidad de WooCommerce ni carrito.
- Links de redes sociales correctos en todos los lugares del sitio.
- Carga rápida sin plugins de WordPress ni WooCommerce.
- JSON-LD para que Google pueda mostrar los datos del negocio correctamente en los resultados de búsqueda.

## Mensaje sugerido para el primer contacto

> Hola, ¿hablas con Fusion Tours? Mi nombre es Guillermo, hago sitios web para agencias de turismo en México.
>
> Revisé su sitio y noté que el logo y la imagen principal vienen de un servidor externo temporal que puede dejar de funcionar sin aviso — si eso pasa, el sitio queda sin logo.
>
> Les armé una propuesta de cómo podría verse el sitio sin ese riesgo, con un selector de tours que llena solo el mensaje de WhatsApp según lo que busca el visitante. ¿Les cuento en 5 minutos?

## Preguntas para la conversación

- ¿Tienen el logo en formato vectorial (SVG o AI) o PNG de alta resolución? El logo actual depende de un CDN temporal.
- ¿Cuáles son los precios de los principales tours? No estaban visibles en el scraping del sitio.
- ¿El WhatsApp principal (984-218-1414) sigue siendo el de reservas, o cambiaron al 984-278-5840?
- ¿Tienen dirección física (local u oficina) en Playa del Carmen? El sitio no la publica.
- ¿Quieren que el rediseño también tenga versión en inglés, dado que su mercado es mayoritariamente turistas extranjeros?
