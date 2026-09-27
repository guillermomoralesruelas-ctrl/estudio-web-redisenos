# HMO Estudio BARRE 7: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://barre-7.com.mx/ (WordPress con Divi). Estudio de barre de Cocoy Landavazo en Bv. Paseo de las Quintas, Hermosillo, Son. |
| Prioridad | **MEDIA**: nada está roto, pero la página del estudio no tiene horarios, el menú saca a la gente a otro sitio (la plataforma en línea), sigue el aviso de COVID y Google no la ve como gimnasio |
| Contacto publicado | WhatsApp 662 150 2587 (en botones, sin número escrito); Instagram @barre.7; Facebook /BARRE-7-767301326952339 |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (inicio, `/preguntas-frecuentes/`, `/beneficios/`, `/opciones/`) y en `investigacion/original.html`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **No hay horarios.** Ni el inicio ni ninguna página del estudio dice qué días y a qué hora son las clases; los 9 botones abren WhatsApp con solo "Hola". | Toda persona interesada tiene que preguntar lo básico por mensaje; muchas no lo hacen y buscan otro estudio que sí lo diga. | Inicio en vivo (sin "horario"); `original.html` |
| 2 | **El menú saca a la gente del estudio.** "Inicio", "Entrenamientos", "Suscripciones", "Certificación" e "Iniciar sesión" llevan a barre-7.com, su plataforma de clases en línea; sus "Preguntas frecuentes" solo hablan de iniciar sesión y cancelar suscripciones. | Quien busca clases en Hermosillo y toca "Inicio" termina en otra página que le vende la suscripción en línea. | Inicio y `/preguntas-frecuentes/` en vivo |
| 3 | **Sigue el aviso de la pandemia.** «Contamos con las medidas sanitarias necesarias para que puedas entrenar de manera segura», y todas las fotos de clase son de 2021, con cubrebocas. | Da la impresión de un sitio que no se ha actualizado en cuatro años. | Inicio en vivo |
| 4 | **Google no sabe que es un estudio de ejercicio.** El único dato estructurado es un `Article` con autor "memo"; no hay dirección, teléfono ni horario para Google. La portada tiene un H1 vacío, siete H2 vacíos y sus 8 fotos del estudio tienen el texto alternativo vacío. | Menos visibilidad en búsquedas como "barre Hermosillo" y en Google Maps. | Inicio en vivo (JSON-LD y encabezados) |
| 5 | **Paquetes desordenados y sin ayuda para elegir.** Aparecen 8, 12, 16, 20, 4 y 1 clase, sin precio por clase ni sugerencia; el teléfono no está escrito ni se puede tocar para llamar. | Quien compara no ve rápido que el de 20 clases sale a $65 por clase contra $200 la suelta. | Inicio en vivo |

Nota: **los precios son claros y el WhatsApp funciona**. El argumento es convertir más visitas en clases de prueba: horarios, la página enfocada en el estudio de Hermosillo y datos para Google.

## Qué le ofrecemos

- "Tu mes en la barra": la alumna elige cuántas veces por semana quiere ir y ve qué paquete le conviene, cuánto sale cada clase y manda WhatsApp con eso escrito.
- Una página solo del estudio de Hermosillo: qué pasa en una clase, Cocoy, sus alumnas, dirección con Google Maps, y la opción en línea como un enlace aparte.
- WhatsApp, llamada y cómo llegar a un toque en el celular; datos de gimnasio para Google.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por Instagram @barre.7 o por WhatsApp al 662 150 2587). Tono: respetuoso y útil.

> Hola Cocoy, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi la página del estudio de Hermosillo y me gustó mucho cómo explicas el barre. Te escribo porque noté que la página no tiene los horarios de las clases, que el botón "Inicio" lleva a la plataforma en línea en lugar del estudio y que todavía aparece el aviso de medidas sanitarias. Te preparé una propuesta de cómo podría verse, con una parte donde cada alumna elige cuántas veces por semana quiere ir y ve qué paquete le conviene. Si te interesa, te la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué horarios tienen y qué días abren?
- ¿Cuánto cuesta la clase de prueba? ¿Los precios siguen vigentes?
- ¿El 662 150 2587 recibe llamadas? ¿Cuál es el número exterior del estudio?
- ¿La vigencia de 30 días cuenta desde la compra o desde la primera clase?
- ¿Quieren que el estudio y la plataforma en línea tengan páginas separadas?
- ¿Nos comparten fotos recientes de las clases?
