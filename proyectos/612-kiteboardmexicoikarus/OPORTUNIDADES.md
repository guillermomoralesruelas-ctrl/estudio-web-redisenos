# Kiteboard Mexico Ikarus: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://kiteboardmexico.com/ |
| Prioridad | MEDIA: escuela y hotel con buenas fotos, precios publicados y reseñas, pero con tarifas de cuartos que no coinciden entre páginas y precios repartidos en muchas fichas |
| Contacto publicado | WhatsApp +52 998 874 4245, info@kiteboardmexico.com, IG @ikaruskiteboarding, FB /kiteboardmexico |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` (en inglés, como su sitio) |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Las tarifas de cuartos no coinciden: Accommodations dice doble $1,980, triple $2,244 y king $2,772; sus fichas de reservación dicen "DOUBLE ROOM $1,800", "TRIPLE ROOM ($ 2,040)" y "KING SIZE WITH PRIVATE KITCHEN (126 USD)". | El huésped no sabe qué precio es el bueno y puede reclamar al pagar. | `curl` de /accommodations/ |
| 2 | La descripción para Google habla de "Anthar Racca KITEBOARD CENTER", no de Ikarus. | En los resultados aparece un nombre que el visitante no reconoce. | `curl` del inicio |
| 3 | En la lista de páginas del sitio aparecen "Kite Lessonns" (con doble n) y "Page 404". | Restos de trabajo a la vista. | `curl` de /accommodations/ |
| 4 | Los precios están en más de 15 fichas separadas (cada clase, cada cuarto, cada renta); no hay forma de saber cuánto cuesta un viaje completo. | Quien compara destinos de kite quiere el total antes de escribir. | `curl` de /kiteboard-lessons/ y /accommodations/ |
| 5 | Tienen versión en francés pero no en español, aunque enseñan en español. | Se pierden los visitantes nacionales. | Menú de idiomas del sitio |

## Qué le ofrecemos

- Un boleto que suma clase y hospedaje del viaje con sus tarifas y lo manda por WhatsApp.
- Tarifas unificadas, nombre correcto para Google y, si quieren, versión en español.

## Mensaje sugerido para el primer contacto

> Hi! / ¡Hola! Revisando escuelas de kite en Cancún vi su sitio: muy buenas fotos y todos sus precios publicados. Noté que las tarifas de los cuartos cambian entre páginas (doble a $1,980 o a $1,800). Armé una propuesta donde el visitante elige clase, personas y cuarto, ve el total de su viaje y lo manda por WhatsApp. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Cuáles son las tarifas vigentes de los cuartos?
- ¿Quieren una versión en español?
- ¿"Anthar Racca" es otro nombre de la escuela?
