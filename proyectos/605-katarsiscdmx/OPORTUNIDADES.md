# Katarsis: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-27 y en `investigacion/`. Los defectos del clon (retratos en blanco por `lazy.js`, iconos rotos) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.katarsis.mx/ |
| Prioridad | MEDIA: su sitio funciona (tiene H1, datos para Google y pago en línea), pero le dice a Google que está abierto las 24 horas en consultorios que solo atienden con cita, y vende con fotos de banco de médicos en lugar de su equipo real |
| Contacto publicado | Tel. y WhatsApp 55 5107 3098, contacto@katarsis.mx, FB /katarsismx, IG @katarsis.psicoterapia_, TikTok @katarsis.psicoterapia |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sus datos para Google dicen que está abierto de 00:00 a 23:59 los siete días, y el texto repite "Atención 24/7"; pero su pie dice "Sólo atendemos previa cita" en sus tres direcciones. | Google puede mostrar "Abierto 24 horas" en sus consultorios: alguien puede llegar sin cita o escribir de madrugada esperando respuesta. En salud mental, esa expectativa pesa. | `curl https://www.katarsis.mx/`: JSON-LD `openingHoursSpecification` y la FAQ del JSON-LD ("La atención es 24/7 previa cita") |
| 2 | La imagen que aparece al compartir su página (`og:image`) y las de la portada son fotos de banco (una mujer en un balcón, unos pies caminando); en el tema quedan fotos de médicos con estetoscopio. Los retratos reales de su equipo, que son su mejor argumento, cargan tarde (marcador borroso `blur.png`). | Un centro de psicoterapia se distingue por las personas: mostrar modelos de banco resta confianza, y al compartir el enlace no se ve a nadie del equipo. | `curl` del inicio: `og:image` → `banner1.jpeg`; imágenes `banner1.jpeg`, `banner2.jpg`, `blur.png` |
| 3 | La portada dice "Atendemos en nuestro Centro ubicado en zona de hospitales, San Fernando… Tlalpan", en singular, pero el pie da tres sedes; dos no tienen número (Toriello Guerra no tiene ni calle) y solo la de Tlalpan tiene mapa. | Quien quiere terapia presencial no sabe a cuál ir ni dónde está exactamente la dirección. | `crudo.json` (inicio y pie de /empresas); JSON-LD en vivo |
| 4 | No hay forma de buscar psicoterapeuta por lo que te pasa: el equipo está en un carrusel y en una página aparte, y el WhatsApp general dice "Hola, deseo  información" (con doble espacio), sin decir con quién. | El paciente tiene que leer diez perfiles para saber quién atiende duelo o ansiedad, y la recepción recibe mensajes sin contexto. | `/nuestro-equipo`; `wa.me/525551073098/?text=Hola,%20deseo%20%20información` |
| 5 | Frases como "Tenemos los mejores psicólogos" y "Somos la mejor comunidad de psicólogos online", y "ATENCIÓN 24/7". | Superlativos sin sustento en un servicio de salud; pueden restar credibilidad y chocar con las reglas de publicidad en salud. | `/nosotros`, `/faq`, inicio |

## Qué le ofrecemos

- Que Google muestre bien cuándo y dónde atienden (con cita), y que al compartir su página se vea a su equipo.
- Una forma de encontrar psicoterapeuta por tema, con cédula y enfoque, que termina en un WhatsApp con el nombre de la persona.
- Sus tres sedes claras, cada una con su mapa.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Vi el sitio de Katarsis y noté que los datos que su página le da a Google dicen que están abiertos las 24 horas todos los días, aunque en el sitio aclaran que solo atienden con cita; Google puede mostrarlo así en sus consultorios. Preparé una propuesta de su página que resuelve eso y deja buscar a sus psicoterapeutas por tema, con su cédula y su foto real. ¿Les puedo compartir el enlace?

## Preguntas para la conversación

- ¿Cuál es su horario real de atención y de respuesta por WhatsApp?
- Calle y número de las sedes de Tlalpan y Félix Parra; ¿quién atiende en cada sede?
- ¿Todo el equipo atiende en línea y presencial?
- ¿Prefieren que el botón de cada psicoterapeuta lleve a su pago en línea o a WhatsApp?
