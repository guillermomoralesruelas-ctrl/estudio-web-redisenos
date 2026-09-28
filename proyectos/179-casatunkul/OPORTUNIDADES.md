# Casa Tunkul: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.tunkul.mx/ |
| Prioridad | **MEDIA**: el sitio está técnicamente bien hecho; las oportunidades son de visibilidad y conversión |
| Contacto publicado | Email: jrivera@tunkul.mx · Reservas: Cloudbeds |
| Propuesta para enseñar | `rediseno/dist/index.html` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sin WhatsApp en ninguna página — el único contacto directo es el email y el motor de reservas | Un hotel boutique de 3 habitaciones recibe muchas consultas previas ("¿hay disponibilidad este fin?", "¿aceptan perros?"); sin WhatsApp esas conversaciones no llegan | `investigacion/crudo.json`: sección de contacto y pie de página |
| 2 | El mapa de Google en la sección de ubicación requiere JavaScript del motor de Booking para cargarse — no se muestra al visitante que navega directo al sitio sin JavaScript activo | El hotel está en el Barrio de Santiago, una calle que puede ser difícil de encontrar; sin mapa accesible el huésped llega con dudas | `investigacion/crudo.json`: sección "Encuéntranos en Google Maps" muestra solo texto |
| 3 | Las 9.6/10 y 108 reseñas de Booking están en un widget JavaScript que Google no puede leer | Una calificación de 9.6/10 con 108 reseñas es un argumento de venta enorme; Google no lo ve y no puede mostrar las estrellas en resultados de búsqueda | `investigacion/crudo.json`: bloque de reseñas cargado con JS |
| 4 | Sin JSON-LD (datos estructurados) ni Open Graph completo en el HTML | Al compartir el enlace del hotel por WhatsApp aparece sin imagen ni descripción; Google no puede mostrar el rating ni el tipo de alojamiento en resultados | HTML de `investigacion/crudo.json` |

## Qué le ofrecemos

- WhatsApp visible en todo momento para capturar consultas que hoy se van sin respuesta.
- Mapa de Google real en la sección de ubicación (iframe estático, sin dependencia de JavaScript externo).
- Calificación 9.6/10 con 108 reseñas visible para Google mediante JSON-LD — puede aparecer en resultados con estrellas.
- Vista previa correcta al compartir el enlace (imagen del patio + descripción del hotel).
- Diseño que comunica el nivel boutique y la herencia yucateca de Martínez Herrera desde el primer vistazo.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, vi Casa Tunkul y quedé muy bien impresionado — 9.6/10 con 108 reseñas en Booking es algo que muy pocos hoteles boutique logran. Noté que esas calificaciones no llegan a Google (están en un widget que los buscadores no leen), y que el mapa de ubicación no carga para quien visita directo el sitio. Preparé una propuesta que corrige esto y añade WhatsApp para las consultas previas. ¿Les gustaría echarle un vistazo?

## Preguntas para la conversación

- ¿Tienen WhatsApp para consultas directas de huéspedes?
- ¿El email jrivera@tunkul.mx es el mejor punto de contacto, o hay uno específico para reservas?
- ¿Pueden facilitar más fotos de las habitaciones? El clon solo tiene 4 imágenes de rooms.
- ¿La guía local a pie (25 lugares recomendados) la quieren mantener en el rediseño?
