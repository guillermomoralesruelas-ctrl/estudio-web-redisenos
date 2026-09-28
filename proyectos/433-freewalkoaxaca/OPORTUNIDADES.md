# Free Walk Oaxaca: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://freewalkoaxaca.com/ |
| Prioridad | **MEDIA**: el sitio funciona y tiene buen contenido, pero sus scripts de terceros son lentos y el horario está sepultado en formularios de JS |
| Contacto publicado | +52 951 525 7240 · WhatsApp 529515257240 · info@freewalkoaxaca.com · Instagram @oaxacafreewalkingtour |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El horario del Free Walking Tour está repartido en tres páginas distintas y dentro de formularios de WordPress que requieren JavaScript para mostrarse. Un turista que quiere saber "¿a qué hora sale el tour?" tiene que buscar en varias páginas y esperar que carguen los formularios. | Un turista que llega a Oaxaca tiene el tiempo contado: si no encuentra el horario en 10 segundos, busca otra opción. La sombrilla amarilla es su seña más reconocible; el sitio no la aprovecha para decir "el próximo tour sale a las 10:00, en 30 minutos". | `crudo.json` páginas 1, 2 y 4; `original.html` formularios #wpcf7-form |
| 2 | El enlace de WhatsApp en la página principal va a `whatsapp.com/send?phone=529515257240&text=Hello,%20i%20need%20more%20info%20about%20private%20tour)` — con un paréntesis de cierre `")"` al final del mensaje, lo que hace que el mensaje llegue con el paréntesis extra. | Pequeño detalle que puede hacer que el mensaje se vea poco profesional al recibirlo. | `resumen.json` campo `whatsapp`, `original.html` |
| 3 | El widget de TripAdvisor y el de Google Reviews (TrustIndex) cargan scripts de terceros que rastrean al visitante y ralentizan la página en conexiones lentas (WiFi de hostal, datos móviles). | Los turistas en Oaxaca frecuentemente usan datos móviles o la WiFi del hospedaje. Un sitio lento puede hacer que se vaya antes de reservar. | `original.html`: scripts de `tripadvisor.com` y `cdn.trustindex.io` |
| 4 | La meta description es precisa ("Join a free walking tour with local guides in oaxaca. FREE to join, TIP-BASED walking tour.") pero no menciona el punto de encuentro (Teatro Macedonio Alcalá), que es lo que busca en Google el turista que ya está en la ciudad ("free walking tour oaxaca teatro"). | Sin la dirección en la descripción, Google puede mostrar un snippet genérico que no responde la pregunta más importante del turista: ¿dónde me paro? | `original.html` `<meta name="description">` |
| 5 | No hay JSON-LD estructurado en el sitio original. Google no puede mostrar las estrellas de TripAdvisor directamente en los resultados de búsqueda, ni las horas de apertura en Google Maps desde el sitio. | Un negocio con 450+ reseñas de 5 estrellas merece que Google lo muestre con estrellas en los resultados. El JSON-LD hace eso gratis. | `original.html`: ausencia de `<script type="application/ld+json">` |

## Qué le ofrecemos

- Un sitio en una sola página que responde en segundos la pregunta del turista: "¿a qué hora y dónde?" — con el horario real de hoy calculado en la hora de Oaxaca.
- El botón de WhatsApp llena solo el mensaje con la fecha, hora, idioma y número de personas que el turista elige, sin teclear nada.
- Sin scripts de TripAdvisor ni TrustIndex: las reseñas se muestran en texto plano, el sitio carga rápido.
- JSON-LD con las estrellas y el horario para que Google los muestre en los resultados de búsqueda.
- Una sola URL limpia para compartir en Instagram Stories o en las reseñas de TripAdvisor.

## Mensaje sugerido para el primer contacto

> Hola, ¿hablas con Free Walk Oaxaca? Mi nombre es Guillermo, hago sitios web para negocios locales en México.
>
> Revisé su sitio y el horario del Free Walking Tour está repartido en tres páginas distintas — un turista que quiere saber "¿a qué hora salimos?" tiene que buscar un rato.
>
> Les armé una propuesta de cómo podría verse el sitio con el horario visible de entrada y un botón que llena solo el mensaje de WhatsApp con la hora que el turista elige. ¿Les cuento en 5 minutos?

## Preguntas para la conversación

- Los nombres y fotos de los guías (Carlos Padilla, María Rincón, Iván García) aparecen en el about-us del sitio pero sus fotos no están en el clon. ¿Tienen fotos propias de sus guías para usarlas?
- El WhatsApp del tour privado tiene un paréntesis extra al final del mensaje prellenado. ¿Lo corregimos como parte del rediseño?
- ¿Siguen operando el tour los domingos con solo tres salidas (10:00, 13:00, 16:00) o ya cambiaron el horario?
- ¿Les gustaría el sitio en español también, o solo en inglés?
