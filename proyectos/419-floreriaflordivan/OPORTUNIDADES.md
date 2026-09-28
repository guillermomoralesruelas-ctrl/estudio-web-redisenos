# Florería Flordivan: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28, en su API de tienda y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.flordivan.com/ |
| Prioridad | ALTA: su página de eventos (la que vende bodas) muestra "Lorem ipsum" bajo cada pareja y un error del feed de Instagram; tienda con buen catálogo y fotos propias |
| Contacto publicado | WhatsApp 33 1410 7828 y 33 1410 7894, IG @flordivan_boutique, FB /floreriaflordivan |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | En "Diseño floral para eventos sociales", bajo "Mariana y Omar", "Dulce y Armando" y "Joel y Emiliano", aparece texto de relleno en latín ("Sed nec blandit nibh. Pellentesque commodo…") y, al final, "Error: No feed found. Please go to the Instagram Feed settings page". | Es la página que vende bodas y eventos, el ticket más alto: los novios que la visitan ven texto de plantilla y un error. | `curl https://www.flordivan.com/floristas-decoracion-de-eventos/` |
| 2 | Errores del catálogo: "Sorpesa rosa"; la "Caja de Rosas Fucsia" tiene el SKU de la blanca (CAJROSBCO-1); las fotos de "Amanecer" y "Blanco puro" están intercambiadas; ramos y arreglos personalizados salen con precio $0 en su tienda. | Confunde al cliente y a su propio equipo al surtir pedidos. | API `/wp-json/wc/store/v1/products` |
| 3 | El horario de entrega se contradice: "Entregamos de lunes a sábado desde las 9:00am hasta la 1:00pm" y "elige si deseas la entrega por la mañana o por la tarde". | En regalos la hora importa: genera mensajes para aclarar o expectativas equivocadas. | Ficha de cualquier producto (p. ej. /boutique/esfera-rosa/) |
| 4 | No hay dirección ni punto de recolección, y el sitio menciona dos Instagram (@flordivan_boutique en el enlace, @flordivan en eventos). | Para Google Maps y para quien quiere recoger, no existen; las redes se dividen. | `crudo.json` y `original.html` |
| 5 | Todas las fichas muestran "0 de 5" estrellas y "No hay reseñas aún". | Un contador en cero comunica que nadie ha comprado. | Tienda y fichas |

## Qué le ofrecemos

- Una página donde el cliente arma su caja (cantidad, color y tarjeta) y la pide por WhatsApp con todo escrito.
- Página de eventos sin relleno, con sus fotos reales de bodas y un botón para cotizar.
- Catálogo ordenado y sin estrellas en cero.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Vi su página de diseño floral para bodas y noté que bajo las parejas (Mariana y Omar, Dulce y Armando…) todavía aparece texto de relleno en latín y un aviso de error del feed de Instagram. Sus arreglos son preciosos; preparé una propuesta donde el cliente llena su caja de rosas, elige color y escribe su tarjeta antes de pedir por WhatsApp. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Cuál es el horario real de entrega?
- ¿Tienen tienda física o punto de recolección?
- ¿Qué Instagram usan?
- ¿Tienen fotos de las cajas redondas por color y de sus bodas con los nombres de las parejas?
