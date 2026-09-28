# Inmobiliaria Titán: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28, en su API pública y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://inmobiliariatitan.com/ |
| Prioridad | MEDIA: inventario grande y al día (132 fichas), pero el sitio muestra datos de prueba y textos de plantilla en inglés, no tiene WhatsApp y Google lo ve como "Homepage" sin descripción |
| Contacto publicado | Tel. (477) 391 4080, ventas@inmobiliariatitan.com, FB /Inmobiliaria.titan, YouTube @inmobiliariatitan, LinkedIn |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | No hay WhatsApp en ninguna parte: solo el teléfono (477) 391 4080 y un formulario. | Quien ve una casa desde el celular quiere mandar un mensaje con la ficha; hoy tiene que llamar en horario. | `curl` del inicio: 0 enlaces `wa.me` |
| 2 | El título de la página es "Homepage - Inmobiliaria Titán" y no tiene descripción para Google. | Es lo que aparece en los resultados de búsqueda: "Homepage" no dice qué venden ni dónde. | `curl` del inicio |
| 3 | El buscador de la portada muestra una zona llamada "COLONIA PRUEBA" y escribe la ciudad de cuatro formas (León, León de los Aldama, León de los Aldamas, "León de los Aladama"). | Datos de prueba a la vista restan seriedad; las variantes parten los resultados de búsqueda por ciudad. | `curl` del inicio; API `/wp-json/wp/v2/property_city` |
| 4 | Textos de la plantilla en inglés: "Your search results", "Need an account? Register here!", "How To Find Us", "Opening Hours", "Price High to Low"… | Un sitio en español con botones en inglés se ve a medio terminar. | `curl` del inicio |
| 5 | 15 de sus 132 fichas no muestran precio o superficie en el listado, y todos los precios dicen "A SOLO $". | Sin precio o m² el visitante no puede comparar; "A SOLO" en un terreno de $9.4 millones suena a oferta de tianguis. | Páginas /tipos/venta/ y /tipos/renta/ |

## Qué le ofrecemos

- Una página que compara cada propiedad con las de su mismo tipo por precio por m², y agenda visita por WhatsApp con la ficha ya en el mensaje.
- Datos limpios (sin zonas de prueba ni ciudades mal escritas), textos en español y datos para Google.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Revisando inmobiliarias de León vi su sitio y noté que el buscador de su portada muestra una zona llamada "COLONIA PRUEBA" y que no tienen un botón de WhatsApp. Armé una propuesta con su inventario real donde cada casa o terreno se compara por precio por metro cuadrado con los de su tipo, y se agenda la visita por WhatsApp. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Qué número de WhatsApp usan para ventas?
- ¿Tienen oficina con dirección para ponerla en el mapa?
- ¿Los precios de renta son mensuales? ¿La superficie publicada es de terreno o de construcción?
- ¿Las 15 fichas sin precio siguen disponibles?
