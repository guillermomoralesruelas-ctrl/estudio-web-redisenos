# Florería Lizette: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://florerializette.mx/ |
| Prioridad | **MEDIA**: la tienda funciona bien con WooCommerce y tienen entrega en línea, pero el sitio carga lento y el catálogo no está diseñado para convertir desde la primera visita |
| Contacto publicado | +52 81 1918 7398 · pedidos@florerializette.mx · WhatsApp 528119187398 · Instagram floreria_lizette.mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La imagen principal del hero es el favicon del sitio (192×192 px), no un arreglo de flores. La sección más importante de la página — la que debería enamorar al visitante en 3 segundos — muestra un ícono pequeño en lugar de su mejor arreglo. | Una florería vende emoción antes que precio. Si la primera imagen que ve el visitante es un ícono de 192 px en vez de un ramo espectacular, la página no genera el impulso de "quiero ese arreglo". | `crudo.json` página 1: `![Image 3: Para celebrar](cropped-favicon-floreria-lizette-192x192.png)` en posición de hero |
| 2 | El sitio está construido sobre WordPress + WooCommerce con Elementor Pro y múltiples plugins (order-delivery-date, pixel de Facebook, wp.com tracking). En conexiones móviles de Monterrey, la carga puede superar los 5-7 segundos. | El 60%+ del tráfico de una florería viene de móvil, especialmente de personas que buscan "flores de cumpleaños Monterrey" o "corona fúnebre urgente" desde el teléfono. Una carga lenta en el momento urgente (pésame, regalo de cumpleaños de hoy) puede hacer que el pedido se vaya a la florería de al lado. | `original.html`: scripts de elementor-pro, order-delivery-date-for-woocommerce, pixel de Facebook, cdn.wp.com |
| 3 | El catálogo de arreglos fúnebres no está destacado en la página principal. Para llegar a los arreglos fúnebres hay que saber que existen y hacer clic en el menú; la página de inicio los menciona brevemente pero no muestra el servicio 24/7 de forma prominente. | Las coronas y arreglos fúnebres son el segmento de mayor urgencia: alguien que necesita una corona para un velatorio que empieza en 2 horas no tiene tiempo para explorar un menú. Si el servicio 24/7 no está visible de entrada, pueden llamar a otra florería. | `crudo.json` página 1: la sección fúnebre aparece como el segundo bloque, sin indicar "entrega inmediata" en el primer vistazo |
| 4 | No hay JSON-LD en el sitio original. Con 4.9 ★ en Google y +800 clientes, merecen que Google muestre las estrellas directamente en los resultados de búsqueda al buscar "florería Monterrey" o "flores a domicilio Monterrey". | El JSON-LD de tipo `Florist` con `aggregateRating` hace que las estrellas aparezcan en los resultados de búsqueda sin costo adicional. Para una florería con buen rating es publicidad gratuita. | `original.html`: ausencia de `<script type="application/ld+json">` |
| 5 | Los datos de contacto en el JSON de contacto (resumen.json) incluyen números como `0.7005702853431144` que son coordenadas aleatorias de los píxeles de seguimiento de wp.com, no teléfonos. Aunque el teléfono real sí aparece publicado (+52 81 1918 7398), la duplicación de datos puede confundir a scrapers y directorios que indexan el sitio. | Bajo impacto inmediato, pero puede provocar que directorios de negocios muestren datos incorrectos si los extraen automáticamente. | `resumen.json` campo `telefonos` |

## Qué le ofrecemos

- Un sitio que en 3 segundos muestra su mejor arreglo (no un favicon) y los dos botones que importan: "Ver arreglos de ocasión" y "Arreglos fúnebres 24/7".
- El selector "¿Para qué ocasión?" que filtra el catálogo y llena el mensaje de WhatsApp automáticamente — el cliente hace menos pasos para pedir.
- El servicio fúnebre 24/7 visible desde el hero, con botón directo a WhatsApp para consultar disponibilidad inmediata.
- Un sitio sin WordPress ni plugins: carga en menos de 2 segundos en móvil.
- JSON-LD con las estrellas de Google para que el rating de 4.9 ★ aparezca en los resultados de búsqueda.

## Mensaje sugerido para el primer contacto

> Hola, ¿hablas con Florería Lizette? Mi nombre es Guillermo, hago sitios web para negocios en Monterrey.
>
> Revisé su sitio y noté que la imagen principal muestra el ícono del sitio en lugar de uno de sus arreglos — los ramos y coronas que tienen son preciosos, y en la pantalla principal casi no se ven.
>
> Les preparé una propuesta de cómo podría verse su página con uno de sus ramos como imagen de entrada y un botón que llena solo el mensaje de WhatsApp con la ocasión que elige el cliente. ¿Les cuento en 5 minutos?

## Preguntas para la conversación

- El rediseño no incluye la tienda en línea (carrito de WooCommerce). ¿Quieren mantener la tienda separada y usar el rediseño como página de presentación, o les interesa integrar el catálogo de productos en el nuevo diseño?
- El conteo de diseños por categoría (54 ramos, 45 Limited Love, etc.) puede cambiar con el tiempo. ¿Con qué frecuencia actualizan el catálogo?
- ¿Tienen fotos de sus floristas o del taller para agregar a una sección "Nosotros"? El sitio original la tiene pero el clon no trajo las imágenes del equipo.
