# VetPets, Hospitales Veterinarios: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a hospitalesvetpets.com.mx, así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://hospitalesvetpets.com.mx/ . Hospital veterinario con urgencias 24/7 en Naciones Unidas y consultorios dentro de PETCO en Zapopan |
| Prioridad | **ALTA**: en una urgencia, los teléfonos de sus sucursales no se pueden tocar para llamar (el único enlace `tel:` es el de WhatsApp) y dice tener 5 sucursales pero solo da 4 direcciones |
| Contacto publicado | WhatsApp 33 1863 5121; Naciones Unidas 33 3682 2817 y 33 3110 6394; Acueducto 33 3611 2596; Bosque Real 33 3658 7307; Ávila Camacho 33 1578 6909; FB /hospitalvetpets; IG @vetpetsgdl |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Los teléfonos de las cuatro sucursales están escritos como texto: el único enlace para llamar (`tel:`) es el del WhatsApp 33 1863 5121 | En una urgencia, desde el celular hay que copiar el número a mano | `original.html` |
| 2 | El contador dice 5 sucursales en Zapopan y hay fotos de "Cañadas" y "Real Center", pero solo se publican 4 direcciones (Naciones Unidas, Acueducto, Bosque Real, Ávila Camacho) | El cliente no sabe si hay una sucursal más cerca | `original.html` (`data-number-value="5"`) y `crudo.json` |
| 3 | Solo Acueducto publica horario; Bosque Real y Ávila Camacho no | Hay que llamar para saber si están abiertas | `crudo.json` |
| 4 | Sin meta description ni datos de veterinaria para Google (solo los genéricos de WordPress) | Google no muestra sus sucursales ni sus horarios como veterinaria | `original.html` |
| 5 | El bloque de sucursales se repite igual en las cuatro páginas; hay muros de Facebook e Instagram incrustados y dos videos | Páginas pesadas y repetitivas en el celular | `crudo.json`, `original.html` |
| 6 | Detalles: "Agenda un cita" | Errata en el botón principal | `crudo.json` |

Lo que sí funciona: urgencias 24/7 claras, fotos reales de sus instalaciones, WhatsApp directo.

## Qué le ofrecemos

- Un selector "¿Es una emergencia?" que en un toque manda a Naciones Unidas con sus teléfonos y su mapa, con la hora de Guadalajara.
- Todos los teléfonos listos para llamar desde el celular.
- Sus sucursales con dirección, horario y mapa, y datos para Google de cada una.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Estuve viendo la página de VetPets y me gustó mucho ver sus instalaciones y el servicio de urgencias 24/7. Noté que, desde el celular, los teléfonos de sus sucursales no se pueden tocar para llamar (solo el de WhatsApp) y que el sitio dice 5 sucursales pero muestra 4 direcciones. Me dedico a rediseñar sitios y preparé una propuesta donde, en una urgencia, el dueño de la mascota ve en un toque a dónde ir y a quién llamar. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Dirección y teléfono de la quinta sucursal (¿Cañadas?) y si Real Center es Bosque Real.
- Horarios de todas las sucursales.
- Dónde se hacen cirugías y endoscopias.
- Si el WhatsApp atiende urgencias.
