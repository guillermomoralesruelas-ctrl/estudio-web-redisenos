# Arena Hybrid Club (Aguascalientes): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con curl el 2026-09-29 y en `investigacion/crudo.json`. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://arenahybridclub.com/ . Gimnasio de rendimiento híbrido (HYROX, fuerza y recovery) en Blvd. Colosio 406, Puerto las Hadas, Aguascalientes |
| Prioridad | **MEDIA**: sitio nuevo y cuidado, pero su contenido depende de JavaScript, el contador de membresías dice 0 y el espacio se muestra con renders |
| Contacto publicado | WhatsApp 449 769 7866; Instagram @arenahybridclub |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El contador de la Anualidad Área de Pesas dice "0 de 100 membresías disponibles" junto al botón "Reserva tu membresía" | Parece agotada aunque la estén vendiendo | `crudo.json` |
| 2 | El sitio está hecho en Lovable y todo el contenido se arma con JavaScript; sin él la página queda vacía | Google y las vistas previas de WhatsApp o redes pueden no leer precios ni textos | curl y `original.html` |
| 3 | La galería "Conoce el espacio" muestra renders sin decir que lo son (solo una imagen dice "render arquitectónico") | Si el cliente llega y el espacio no es igual, pierde confianza | `crudo.json` |
| 4 | No hay horario ni fecha de apertura | El interesado no sabe cuándo puede ir | `crudo.json` |

Lo que sí funciona: precios completos y claros, qué incluye cada plan, fotos reales de la comunidad de corredores, WhatsApp y dirección.

## Qué le ofrecemos

- "Carril por carril": el interesado dice cuántas clases toma al mes y ve qué plan le conviene, con su costo por clase.
- Una página que se lee sin JavaScript, sin el contador en 0 y con fotos reales del espacio cuando abra.

## Mensaje sugerido para el primer contacto

> Hola, vi el sitio de Arena Hybrid Club y me gustó mucho cómo presentan sus planes y su club de corredores. Noté que el contador de la anualidad de pesas dice "0 de 100 disponibles" junto al botón de reservar, y que no aparece el horario. Me dedico a rediseñar sitios y preparé una propuesta donde el interesado elige cuántas clases toma al mes y ve qué plan le conviene. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Fecha de apertura y horario.
- Fotos reales del espacio.
- Qué significa el contador en 0.
