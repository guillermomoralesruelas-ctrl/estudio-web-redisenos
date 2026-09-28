# Dr. Daniel Robles Pereyra — oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon no son problemas del cliente.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://drdanielrobles.com/ |
| Prioridad | **MEDIA** — sitio funcional pero sin WhatsApp y con SEO técnico mejorable |
| Contacto publicado | (33) 3640 0933 · (33) 3640 0998 · Facebook · Instagram (sin WhatsApp publicado) |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sin WhatsApp visible en ninguna página | Muchos pacientes prefieren escribir antes de llamar; sin WhatsApp la única vía es el teléfono o el formulario, lo que puede hacer perder consultas | `crudo.json` (inicio y contacto) — solo aparecen teléfonos, Facebook e Instagram |
| 2 | JSON-LD dice `@type: "WebPage"`, no `Physician` ni `MedicalBusiness` | Google no puede mostrar el consultorio como resultado de negocio local con teléfono, horario y ubicación en el panel lateral de búsqueda | `original.html` (script ld+json) |
| 3 | Meta description genérica igual en todas las páginas | Google usa esa descripción como snippet en los resultados de búsqueda; si todas las páginas tienen la misma, no diferencia rinoplastia de lipoescultura | `crudo.json` — las cinco páginas scrapeadas tienen la misma description |
| 4 | Formulario de cita en páginas de procedimientos sin confirmación ni backend visible | El paciente llena el formulario y no recibe acuse; puede perder consultas sin saberlo | `crudo.json` — páginas de aumento mamario, implante, reducción: botón "ENVIAR" sin feedback |
| 5 | No publica horario de atención | El paciente de turismo médico o del extranjero (Houston, EE. UU.) no sabe cuándo puede llamar | `crudo.json` — ninguna página menciona horario |

## Qué le ofrecemos

- Página única moderna donde la silueta interactiva del cuerpo lleva al paciente al procedimiento que le interesa y abre WhatsApp con el nombre ya escrito — sin que tenga que buscar el número ni redactar el mensaje.
- JSON-LD correcto con `Physician` + `MedicalBusiness`, dirección exacta y número de teléfono — para que aparezca en Google Maps y en el panel lateral de búsqueda.
- Barra móvil fija con WhatsApp, llamar y cómo llegar para los pacientes que visitan desde el celular.
- Meta descriptions y títulos únicos para cada procedimiento.
- Todo con sus propias fotos, sus credenciales reales y sus testimonios reales.

## Mensaje sugerido para el primer contacto

> Hola, doctor Robles. Vi su sitio en drdanielrobles.com y noté que no publica WhatsApp; muchos pacientes prefieren escribir antes de llamar. Preparé una propuesta con sus fotos y sus 30 procedimientos donde cada uno abre WhatsApp con el nombre ya escrito. ¿Le puedo mostrar cómo quedaría?

## Preguntas para la conversación

- ¿Tiene número de WhatsApp para atender consultas? (pendiente en el rediseño)
- ¿Cuáles son los procedimientos que más solicita su paciente ideal?
- ¿Atiende pacientes de turismo médico con frecuencia? (sección dedicada en el sitio)
- ¿El formulario de citas llega a su correo o usa alguna plataforma de gestión?
- ¿Tiene horario fijo de consulta que se pueda publicar?
