# Evelio Sport Fishing: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.eveliosfishing.com/ |
| Prioridad | ALTA: negocio familiar con fotos reales y precios, pero su botón de WhatsApp manda a un número sin el 52 de México |
| Contacto publicado | Tel. 954 100 9497, FB /evelio.cruzmorales, YouTube @Eveliosportfishing |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Los 4 enlaces de WhatsApp abren `wa.me/9541009497`, sin el 52: WhatsApp no encuentra el número. | Es el canal por el que un turista reserva; hoy el botón no lleva a su chat. | `curl` del inicio |
| 2 | El paseo a playas tiene precio de 2 a 5 personas y de 7 a 10, pero no para 6; delfines no tiene precio. | Un grupo de seis no sabe cuánto paga. | `curl` del inicio |
| 3 | No dice desde dónde salen (muelle o playa) ni tiene mapa. | El turista no sabe a dónde llegar. | `curl` del inicio |
| 4 | Al entrar aparece un banner de cookies con texto legal europeo (RGPD) muy largo y el video pide consentimiento. | En el celular tapa la página antes de ver una sola foto. | `crudo.json` y `curl` del inicio |

## Qué le ofrecemos

- Una página donde el turista elige el mes de su viaje y cuántos van, ve qué salidas hay (con la temporada de ballenas) y cuánto le toca a cada quien, y escribe por un WhatsApp que sí funciona.
- Precios completos, punto de salida en el mapa y sin banners que tapen.

## Mensaje sugerido para el primer contacto

> Hola, Evelio. Vi su sitio y noté que el botón de WhatsApp no funciona: el número va sin el 52 de México y no abre su chat. Armé una propuesta donde el turista elige el mes de su viaje y cuántos van, ve qué salidas hay (ballenas de noviembre a marzo) y cuánto le toca a cada quien, y le escribe directo. ¿Le comparto el enlace?

## Preguntas para la conversación

- ¿Cuánto cuesta el paseo para 6 personas y el tour de delfines?
- ¿La pesca de $7,000 es por lancha? ¿Para cuántas personas?
- ¿Desde qué playa o muelle salen?
