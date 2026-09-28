# Homme Barbers: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://barberiaencancun.com/ |
| Prioridad | ALTA: barbería activa con precios publicados, pero su teléfono no se puede tocar para llamar, no tiene WhatsApp y usa dos nombres distintos |
| Contacto publicado | Tel. +52 998 103 3712, Av. Huayacán 77533, IG @homme.barbers, FB Homme Barbers |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El teléfono, la ubicación y el horario de la portada son enlaces que no llevan a ningún lado (`href="#"`); no hay ningún enlace `tel:` ni WhatsApp. | Desde el celular no se puede llamar ni escribir con un toque, y es un negocio "sin cita". | `curl` del inicio |
| 2 | El sitio se llama "Homme Barbers" pero sus páginas de servicios dicen "El Taller Barbershop" y las capas de las fotos también. | El cliente no sabe si es el mismo lugar; confunde en Google Maps. | `curl` del inicio y de las páginas de servicios |
| 3 | La dirección es solo "Av. Huayacán, 77533" (una reseña dice que está dentro de una plaza). | Quien no conoce la zona no sabe en qué plaza entrar. | `curl` del inicio |
| 4 | El horario dice "Lunes a Domingo 10 a.m.–8:30 p.m. Domingos 6:30 p.m.". | No queda claro a qué hora cierran el domingo. | `curl` del inicio |
| 5 | Usan fotos de banco, una de Cristiano Ronaldo y algunas que parecen hechas con IA. | Resta credibilidad frente a sus buenas fotos reales del local. | Clon, `wp-content/uploads/` |

## Qué le ofrecemos

- Una página donde el cliente marca lo que se va a hacer y ve si le conviene un paquete, con "Abierto ahora" y botones de llamar, WhatsApp y cómo llegar.
- Un solo nombre, dirección con la plaza y fotos reales.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Vi el sitio de Homme Barbers: me gustan sus precios claros, pero noté que el teléfono no se puede tocar para llamar desde el celular y que algunas páginas dicen "El Taller Barbershop". Armé una propuesta donde el cliente marca lo que se quiere hacer y ve si le conviene un paquete, y llama o escribe con un toque. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿El nombre es Homme Barbers o El Taller?
- ¿El 998 103 3712 tiene WhatsApp?
- ¿En qué plaza están y a qué hora cierran el domingo?
