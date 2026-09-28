# Doggie's Hospital Veterinario: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://doggies.mx/ |
| Prioridad | MEDIA: sitio moderno con fotos profesionales, pero sin WhatsApp, sin horarios de 2 de sus 3 hospitales y con enlaces al dominio de pruebas de Webflow |
| Contacto publicado | Urgencias 81 1234 0944, Serena 81 9688 6760, atencion@doggies.mx, IG @doggieshospitalveterinario, FB /doggieshospital |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | No hay WhatsApp: "Agenda tu cita" y "Urgencias" solo marcan por teléfono. | Mucha gente prefiere escribir para agendar o mandar una foto de la herida. | `curl` del inicio |
| 2 | Solo Doggie's Especialidades dice "Abierto las 24 hrs"; Serena y Sur no tienen horario, y Sur ni teléfono. | De noche, quien vive cerca de Sur no sabe si ir o no. | `curl` del inicio |
| 3 | En Aviso de privacidad y Términos, el menú lleva a `doggies-site.webflow.io` (el dominio de pruebas de Webflow), no a doggies.mx. | Los visitantes salen a una copia de pruebas del sitio. | `curl` de /aviso-de-privacidad.html |
| 4 | El inicio no tiene meta description. | Google arma el resumen solo y puede no decir "urgencias 24 horas". | `curl` del inicio |
| 5 | Faltas: "diagnostico", "Enterate", "Quienes somos", "esta compuesto". | Detalles que restan en un hospital de especialidades. | `curl` del inicio |

## Qué le ofrecemos

- Un reloj de 24 horas que le dice al dueño qué hospital le abre a la hora de su urgencia, con el botón para llamar, y sus fotos profesionales al frente.
- WhatsApp, horarios por hospital, enlaces corregidos y datos para Google.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Revisando hospitales veterinarios de Monterrey vi su sitio: sus fotos son muy buenas, pero noté que no tiene WhatsApp y que Serena y Sur no dicen su horario, algo clave de noche. Armé una propuesta con un reloj de 24 horas donde el dueño ve qué hospital le abre a esa hora y llama con un toque. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Qué horario tienen Serena y Sur? ¿Sur tiene teléfono?
- ¿Tienen un WhatsApp para citas?
- ¿Quieren que el sitio muestre qué especialidades hay en cada hospital?
