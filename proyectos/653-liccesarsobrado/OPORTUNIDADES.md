# Lic. César Sobrado: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y en la redirección de su enlace bit.ly (revisada el 2026-10-09). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://www.cesarsobrado.com/ |
| Prioridad | **ALTA**: todos sus botones de cita llevan a un WhatsApp sin el 52 de México |
| Contacto publicado | Tel. 998 480 9900 · Porto Napoli 21, Viocenter, local 7, consultorio 3, Cancún |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Todos sus botones ("Agenda tu consulta", "Agendar consulta", "Quiero más información", "Platiquemos") y hasta su teléfono van a `bit.ly/Quierounacitadenutriicion`, que abre `api.whatsapp.com/send?phone=9984809900`: el número va sin el 52 de México, así que WhatsApp no lo reconoce como número mexicano. | Es su única vía para agendar desde el sitio: quien toca el botón puede no llegar a su chat y no hay otra forma visible de escribirle. | `crudo.json` (los enlaces bit.ly) y redirección del enlace (`curl -I`, 2026-10-09) |
| 2 | Los íconos de Facebook, Instagram y WhatsApp del inicio llevan a su misma página de inicio. | El paciente que quiere ver más de su trabajo no encuentra sus redes; da impresión de sitio sin terminar. | `crudo.json`, inicio: `[Facebook](https://www.cesarsobrado.com/)` |
| 3 | El teléfono no tiene enlace para llamar (no hay `tel:`); la dirección solo aparece en la página de contacto. | En el celular no se puede llamar con un toque y Google no asocia bien la dirección con el negocio. | `original.html` (sin `tel:`); `crudo.json` |
| 4 | Sin datos estructurados de negocio local (su JSON-LD solo describe la página) y sin horario publicado. | Google no puede mostrar su dirección, teléfono ni horario como ficha de nutriólogo en Cancún. | `original.html`: JSON-LD de Yoast con `WebPage` y `WebSite` |
| 5 | Las fotos de sus tres secciones de casos son modelos de banco, cuando tiene una sesión de fotos profesional en su consultorio. | Sus propias fotos generan más confianza; las de banco las usan muchos otros sitios. | `original.html`, imágenes `Nutricionista-en-cancun…` |

## Qué le ofrecemos

- Un WhatsApp que sí abre su chat, con un mensaje que ya dice la meta del paciente y qué quiere medir.
- "La supermedición": su paso de antropometría explicado sobre una silueta, para quitar el miedo a la primera consulta.
- Una sola página con sus servicios, sus cinco pasos y su dirección, con llamar y cómo llegar a un toque en el celular.
- Datos para Google (nutriólogo en Cancún, dirección y teléfono).

## Mensaje sugerido para el primer contacto

> Hola, ¿hablo con el Lic. César Sobrado? Soy Guillermo, hago sitios web para negocios locales.
>
> Revisé su sitio y noté que el botón "Agenda tu consulta" abre WhatsApp con su número sin el 52, así que a algunos pacientes no les abre su chat.
>
> Le preparé una propuesta de cómo podría verse su sitio, con ese botón corregido y una sección que explica lo que mide en su consulta. ¿Se la enseño en 5 minutos?

## Preguntas para la conversación

- ¿El 998 480 9900 es su WhatsApp? ¿Recibe mensajes del sitio?
- ¿Qué horario de consulta tiene y le gustaría publicar el precio?
- ¿Tiene Facebook o Instagram para enlazarlos?
- ¿Atiende también en línea o solo en Viocenter?
