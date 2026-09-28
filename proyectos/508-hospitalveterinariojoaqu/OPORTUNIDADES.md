# Hospital Veterinario Joaquín Buxadé: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.hveterinario.com/ |
| Prioridad | MEDIA: hospital con fotos propias de sus salas y de todo su equipo, pero el sitio es una plantilla antigua de una sola página, sin correo, sin redes, sin horario de su segunda unidad y con faltas de ortografía |
| Contacto publicado | Tels. (222) 296 7091 (Recta a Cholula, 24 h) y (222) 290 8808 (Lomas de Angelópolis), WhatsApp 221 361 1332 |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El título de la página es una lista de palabras sin acentos: "Hospital Veterinario Joaquin Buxade Hospital Veterinario en Puebla Hospitalizacion de Mascotas Diagnostico de Mascotas Estetica Canina…". | Es lo que se ve en Google y en la pestaña; parece spam y Google lo corta. | `curl` del inicio |
| 2 | Faltas de ortografía a la vista: "intalaciones", "garantizán", "atencíon", "Diagnósticamos", "fisioterapeúticas", "esta lista". | En un hospital, los errores de texto restan confianza. | `curl` del inicio |
| 3 | No publica correo, redes sociales ni horario de la unidad Lomas de Angelópolis; su dirección es solo "Centro Lomas 6". | Quien no quiere llamar no tiene otra vía (salvo el botón de WhatsApp) y no sabe si esa unidad está abierta. | `curl` del inicio |
| 4 | Los testimonios con nombre llevan fotos que parecen de banco (niños con un westie, una señora con un gato sobre fondo blanco). | Si alguien las reconoce, pone en duda testimonios que sí son buenos (Tori, Blacky). | Clon, `images/testimonial/` |
| 5 | Sin agente de navegador, el servidor responde "Error 406 - Not Acceptable" (Mod Security). | Algunas herramientas de vista previa (WhatsApp, redes) pueden no mostrar la tarjeta del enlace. | `curl` sin agente, 2026-09-28 |

## Qué le ofrecemos

- Un plano del hospital que se recorre sala por sala con sus fotos reales y WhatsApp por servicio, y el teléfono de urgencias 24 h siempre a un toque.
- Textos corregidos, título y descripción para Google, datos por unidad y sus 13 médicos con retrato.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Revisando hospitales veterinarios de Puebla vi su sitio: tienen muy buenas fotos de sus salas y de todo su equipo, pero en Google la página aparece como una lista de palabras sin acentos. Armé una propuesta donde se recorre el hospital sala por sala con sus fotos, y el teléfono de urgencias 24 horas está siempre a un toque. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Qué horario tiene la unidad Lomas de Angelópolis y cuál es su dirección completa?
- ¿Tienen correo y redes sociales que quieran publicar?
- ¿Qué servicios hay en cada unidad?
- ¿Las fotos de los testimonios son de sus clientes?
