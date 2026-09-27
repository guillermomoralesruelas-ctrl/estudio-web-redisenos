# Florería Guadalajara: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://floreriaguadalajara.com/ |
| Prioridad | **MEDIA**: el sitio funciona y tiene WhatsApp, pero Google no la identifica como florería y el teléfono no tiene enlace de llamada |
| Contacto publicado | Tel. 3322106699 (también WhatsApp, via plugin joinchat), instagram.com/floreriaguadalajara, facebook.com/floreriagdl |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **No tiene H1 en ninguna página.** El inicio, los productos y la página de Nosotros no declaran ningún H1 | Google no sabe qué es el sitio. Sin H1, la palabra clave principal ("florería en Guadalajara") no existe para el buscador y el sitio pierde posiciones frente a competidores que sí lo tienen | `investigacion/original.html` — sin etiqueta `<h1>` en todo el documento |
| 2 | **No tiene Open Graph.** Al compartir el sitio en WhatsApp, Facebook o mensajes de texto, no aparece la foto de los arreglos, solo el texto sin imagen | Un cliente que quiere recomendar la florería a alguien no puede enviarle un enlace atractivo; el mensaje llega sin foto y es menos convincente | `investigacion/original.html` — sin `<meta property="og:image">` |
| 3 | **El JSON-LD no declara el negocio como florería.** El único JSON-LD es de tipo `WebPage`, `BreadcrumbList` y `WebSite` — no hay `Florist` ni `LocalBusiness` | Google no muestra el horario, el teléfono ni el tipo de negocio en los resultados de búsqueda y en Maps; pierde visibilidad frente a otras florerías | `investigacion/original.html` — script `application/ld+json` sin `Florist` |
| 4 | **El teléfono (3322106699) no tiene enlace `tel:` en ninguna parte del sitio.** Aparece cuatro veces como texto plano | En celular, el cliente tiene que copiar el número a mano en lugar de marcarlo con un toque; se pierde la llamada | `investigacion/original.html` — sin `href="tel:"` en todo el HTML |
| 5 | **La descripción del sitio mezcla mayúsculas y lenguaje informal** ("¡SI PIENSAS EN ELLA MÁNDALE FLORES! \| Aquí encontraras lo MAS EXCLUSIVO de la Ciudad") | No es lo que Google muestra en los resultados como descripción confiable de un negocio; reduce el CTR en buscadores | `investigacion/original.html` — `<meta name="description">` |

## Qué le ofrecemos

- Una página que Google identifica como florería (JSON-LD tipo `Florist` con horarios y teléfono), para aparecer en búsquedas de "florería en Guadalajara" con datos completos.
- H1 claro con la propuesta de la marca, Open Graph para que los enlaces que se comparten lleguen con la foto de los arreglos.
- Teléfono con enlace de llamada directa y WhatsApp con mensajes prellenados por ocasión (San Valentín, Día de las Madres, cumpleaños, boda), para que pedir sea más fácil.
- El selector "¿Para quién es?" que convierte las categorías de WooCommerce en una propuesta emocional y directa.
- Barra fija en celular con WhatsApp, llamar y cómo llegar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, soy Guillermo. Vi su florería en línea y me fijé que cuando alguien comparte el sitio por WhatsApp no aparece la foto — solo el link. Armé una propuesta donde los arreglos se ven desde el primer vistazo, con botón directo a WhatsApp para pedir. ¿Les gustaría verla?

## Preguntas para la conversación

- ¿El número 3322106699 también lo usan para WhatsApp? (el sitio solo lo muestra como teléfono; el plugin de joinchat lo tiene configurado con ese mismo número).
- ¿Tienen un establecimiento registrado en Google Maps? (el sitio no publica dirección física).
- ¿Quieren que el sitio tenga enlace a Twitter/X? (el resumen.json detectó @floreriagdl pero no aparece en el diseño propuesto).
