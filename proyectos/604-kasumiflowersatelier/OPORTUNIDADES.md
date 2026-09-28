# Kasumi Flowers Atelier: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.kasumiflowers.com/ |
| Prioridad | **MEDIA**: el sitio está técnicamente bien hecho y tiene tienda en línea propia; las oportunidades son de captación y visibilidad |
| Contacto publicado | Email: info@kasumiflowers.com · IG @kasumiflowersatelier · FB @KasumiFlorerias · Tel. +52 (951) 207 7809 (Oaxaca) |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sin WhatsApp en ninguna página — el único contacto directo es el email | Una florería de autor recibe muchas consultas previas a bodas y eventos ("¿hacen centros de mesa para 20 mesas?", "¿cuánto cuesta el paquete boda?"); sin WhatsApp esas conversaciones no llegan o se enfrían | `resumen.json`: `whatsapp: []` en todos los hallazgos de contacto |
| 2 | Sin `<meta name="description">` con contenido real — la etiqueta existe pero está vacía | Al buscar "florería Oaxaca" o "flores para boda Oaxaca" en Google, el resultado muestra un fragmento de texto tomado al azar del HTML en lugar de una descripción atractiva | HTML del scrape: `<meta name="description" content="">` |
| 3 | Sin datos estructurados (JSON-LD / Schema.org) | Google no puede identificar el negocio como florería local, no muestra la dirección ni el horario en resultados de búsqueda, y no lo incluye en Google Maps automáticamente | HTML del scrape: sin `<script type="application/ld+json">` |
| 4 | La ubicación aparece solo como texto en el footer — sin mapa interactivo en ninguna página | Para un cliente que busca llegar al atelier (Jazmines 618-A, Col. Reforma — una calle residencial de Oaxaca), no hay manera de abrir directamente la ruta en su teléfono | `crudo.json`: sin iframe de mapa en las 5 páginas scrapeadas |

## Qué le ofrecemos

- WhatsApp visible en todo momento para capturar consultas de bodas y eventos de alto valor que hoy llegan por email o no llegan.
- Meta description y Open Graph: la florería se verá bien al aparecer en Google y al compartir el enlace por WhatsApp o redes sociales.
- JSON-LD `LocalBusiness`: Google puede mostrar la dirección, el teléfono y el horario directamente en resultados de búsqueda.
- Google Maps embed en la página de contacto: el cliente puede abrir la ruta a Jazmines 618-A sin salir del sitio.
- Diseño que comunica el nivel de atelier de autor y los 30 años de trayectoria desde el primer vistazo.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, revisé el sitio de Kasumi Flowers y me pareció muy bien hecho — la selección de la colección y los talleres están presentados de forma muy clara. Noté que la meta description está vacía (Google muestra texto al azar en lugar de una descripción de la florería) y que no hay un mapa para llegar al atelier en Jazmines 618-A. Preparé una propuesta que corrige esto y añade WhatsApp para consultas de bodas y eventos. ¿Les gustaría echarle un vistazo?

## Preguntas para la conversación

- ¿Tienen WhatsApp para consultas de bodas y eventos? (no aparece publicado en el sitio)
- ¿El producto "Lujo Escarlata Signature Box" $4,500 sigue vigente y quieren que aparezca en la propuesta?
- ¿Hay fotos propias del portfolio que quieran incluir? (el clon solo descargó las imágenes del home)
- ¿La sucursal de Tuxtla Gutiérrez, Chiapas tiene los mismos horarios?
