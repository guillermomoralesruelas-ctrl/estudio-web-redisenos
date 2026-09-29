# Harmonía Pilates (Tlalnepantla): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados en `investigacion/original.html` y `investigacion/crudo.json` (capturados el 2026-09-26). La nube no llega a harmoniapilates.com (403), así que no se pudo comprobar en vivo. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://www.harmoniapilates.com/ . Estudio de Pilates Reformer semipersonalizado (máximo 8 alumnos) con el maestro Josué Miranda, Av. de los Ejidos 64, Los Reyes Ixtacala, Tlalnepantla |
| Prioridad | **ALTA**: su único botón de WhatsApp lleva un número sin código de país, así que puede no abrir el chat del estudio |
| Contacto publicado | WhatsApp 56 2570 0521 (botón sin +52); Instagram @harmonia.pilates; Facebook /estudio.harmonia.pilates; formulario propio |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El botón de WhatsApp apunta a `api.whatsapp.com/send?phone=5625700521`, sin el 52 de México | WhatsApp pide el número en formato internacional; sin él, el botón puede abrir un chat vacío o con otro número y el interesado se va | `original.html` |
| 2 | En la tabla de horarios, 11 de las 13 clases salen con una palomita gris clara, pero la leyenda solo explica ámbar (mañana) y azul (tarde) | Parece que casi todas las clases están llenas o deshabilitadas; quien busca horario no sabe si hay lugar | `original.html` (tabla "Horarios de Clases") |
| 3 | La dirección no está escrita en ninguna parte: solo dentro del mapa y como "Tlalnepantla, Estado de México" | Quien lo ve en el celular sin cargar el mapa no sabe dónde queda; Google tampoco la lee | `crudo.json` y `original.html` |
| 4 | Sin datos estructurados (JSON-LD), sin imagen para compartir (`og:image`) y sin enlace para llamar (`tel:`) | Al compartir el enlace por WhatsApp no sale foto; Google no sabe que es un estudio con dirección y precios | `original.html` |
| 5 | Las preguntas frecuentes dicen "agenda en nuestra plataforma", pero no hay enlace a ninguna | El alumno no sabe dónde reservar sus clases | `crudo.json` |
| 6 | Promesas de salud en beneficios y testimonios ("alivia dolores de espalda", "excelente para rehabilitación", "me cambió la vida") | Son afirmaciones delicadas que conviene cuidar; se pueden decir los mismos beneficios sin prometer resultados | `crudo.json` |

Lo que sí funciona: precios muy claros con vigencias, fotos reales del estudio y del maestro, grupo máximo de 8 y preguntas frecuentes útiles (vestimenta, estatura mínima, cancelación con 24 horas).

## Qué le ofrecemos

- "Elige tu hora y tu reformer": el interesado toca su clase y su paquete, ve los ocho reformers del estudio y le llega el WhatsApp escrito con día, hora, paquete y precio.
- WhatsApp y teléfono que funcionan, dirección visible, mapa, barra fija en el celular y datos para Google.

## Mensaje sugerido para el primer contacto

> Hola, vi el sitio de Harmonía Pilates y me gustó mucho que los precios y las vigencias estén tan claros. Noté que el botón de WhatsApp lleva el número sin el 52 de México, y en algunos teléfonos eso no abre su chat. Me dedico a rediseñar sitios y preparé una propuesta donde el alumno elige su clase y su reformer y les llega el mensaje listo. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Si el 56 2570 0521 es su WhatsApp y si tienen otro teléfono.
- Qué significa la palomita gris en su horario (clase llena o sin clase).
- Qué plataforma usan para agendar y si quieren enlazarla.
- Cuántos reformers tienen y si se puede apartar reformer fuera de VIP y Elite.
