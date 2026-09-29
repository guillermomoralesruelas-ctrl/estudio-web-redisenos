# Colegio Banting (Coyoacán): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a colegiobanting.edu.mx, así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.colegiobanting.edu.mx/ . Colegio bilingüe de preescolar, primaria y secundaria en Chichimecas MZ70 LT20, Ajusco, Coyoacán, CDMX, desde 1994 |
| Prioridad | **ALTA**: el sitio es nuevo y ambicioso (asesor de voz, chat, agendador), pero sus testimonios usan retratos hechos con IA marcados como "verified", algo delicado para una escuela |
| Contacto publicado | WhatsApp y tel. 55 7583 9898; admisiones@colegiobanting.edu.mx; Instagram @colegiobanting; Facebook CentrodeFormacionEscolarBanting |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Dos fotos de testimonios se llaman `madre-valores-ai.jpg` y `padre-horarios-ai.jpg` (retratos generados con IA) y llevan la palomita de "verified" | Si una familia lo nota, pierde la confianza en todos los testimonios; en una escuela pesa el doble | `original.html` y `sitio/assets/images/testimonials/` |
| 2 | La foto `padre-integral.jpg` (un papá con su hijo) aparece como "Madre de familia" | Error visible junto a un testimonio | `crudo.json` |
| 3 | La oficina atiende de 7:00 a 18:00, pero el horario extendido llega a las 19:00 y secundaria entra a las 6:45 | Las familias que trabajan no saben quién las atiende a esas horas | `crudo.json` (inicio y pie) |
| 4 | "GOOGLE REFERENCE SCHOOL 2026", mientras su historia dice que Google los reconoció en 2013–2015 | Un sello con año actual que no corresponde puede leerse como exagerado | `original.html` y `crudo.json` (/nosotros) |
| 5 | El agendador de visitas carga en un iframe y el propio sitio avisa "El agendador en línea está tardando en cargar" | La acción principal (agendar visita) depende de un servicio que puede fallar | `crudo.json` |
| 6 | "4.9/5" se basa en su propia encuesta anual | Pesa menos que reseñas públicas de Google | `crudo.json` |

Lo que sí funciona: colegiatura publicada ("desde $3,316"), horario detallado por nivel, WhatsApp con mensaje, textos cuidados y fotos reales de alumnos.

## Qué le ofrecemos

- "¿A qué hora pasas por él?": la familia que trabaja ve el día de su hijo hasta la hora en que puede recogerlo y pide informes con ese dato.
- Quitar los retratos hechos con IA y corregir la etiqueta de la foto del papá.
- Una página que agenda por WhatsApp sin depender de un iframe.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Estuve viendo el sitio de Colegio Banting y me gustó mucho cómo explican el día de cada nivel. Noté que dos fotos de los testimonios de padres están hechas con inteligencia artificial (así se llaman los archivos) y llevan la palomita de "verificado", y que una foto de un papá dice "Madre de familia". Me dedico a rediseñar sitios y preparé una propuesta donde la familia elige a qué hora pasa por su hijo y ve cómo se cubre su día con el horario extendido. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Costos por nivel e inscripción 2026-2027.
- Si el horario extendido y el transporte tienen costo.
- Quién atiende de 18:00 a 19:00 y desde las 6:45.
- Fotos reales de familias para reemplazar los retratos hechos con IA.
