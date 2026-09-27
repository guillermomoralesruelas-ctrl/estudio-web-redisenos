# Kenkō Wellness: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://kenkowellness.com.mx/ (WordPress con Elementor). Casa holística de Claudia y Lucía García en Naucalpan, Edo. Méx. |
| Prioridad | **ALTA**: su inicio muestra un bloque de la plantilla con correo, teléfono y dirección falsos ("1250 Golden house, new york", 0514-9856-47565), el botón "Llámanos" no marca y el sitio da dos direcciones y dos WhatsApp distintos |
| Contacto publicado | WhatsApp (55) 1939 8546 (y 55 6435 9242 en Gift Card); tel. (55) 5548 7500; claudia.garcia@kenkowellness.com.mx y hola@kenkowellness.com.mx; IG @wellness.kenko; FB y TikTok @kenkowellnessmx |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio, Catálogo, Clases, Talleres, Membresía, Gift Card, Promociones, Equipo) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Datos de contacto falsos en el inicio.** Quedó un bloque de la plantilla: "Make an Appointment", "Nulla porttitor accumsan tincidunt… Lorem ipsum dolor sit amet", Email instructoralina@gmail.com, Phone 0514-9856-47565 y Address "1250 Golden house, new york". | Quien busca cómo contactarlas puede escribir a un correo ajeno o marcar un número que no existe; además se ve descuidado para una casa que vende confianza. | Inicio en vivo y `crudo.json` |
| 2 | **Dos direcciones distintas.** Inicio, Clases y Catálogo dicen Calle Gral. Felipe Ángeles #22, Lomas del Huizachal, Naucalpan; Gift Card y Membresía dicen Paseo de la Herradura #403 B, Parques de la Herradura, Interlomas, con otro enlace de Maps. | Clientes que llegan al lugar equivocado; Google no sabe cuál es la buena. | Páginas en vivo (pie) |
| 3 | **El botón "Llámanos" no marca** (`tel:%20`, vacío) y la Gift Card manda a otro WhatsApp (55 6435 9242); los demás botones van al 55 1939 8546 sin mensaje. | Llamadas perdidas y mensajes repartidos entre dos números. | Inicio y `/giftcard/` en vivo |
| 4 | **Precios escondidos y catálogo revuelto.** Los precios están en /catalogo-2/, lejos del inicio, junto a textos muy largos; la Fórmula KenKo 360, su propuesta principal, no dice cómo se arma ni cuánto cuesta. | La gente no llega a los precios o no entiende qué pedir. | `/catalogo-2/` y `/formula-kenko-360/` en vivo |
| 5 | **Promesas de salud muy fuertes y fotos de banco.** "Kundalini yoga… es 16 veces más potente que cualquier otro yoga", Flores de Bach "sin efectos secundarios para sanar problemas emocionales y físicos", talleres que "fortalecen el sistema inmunológico" o reducen "la depresión"; casi todas las fotos de masajes, spa y meditación son de banco; contadores en "+ 0". | Resta credibilidad y puede traer problemas; sus fotos propias (la sala de yoga, la recepción, el equipo) son mejores. | `/clases/`, `/catalogo-2/`, `/talleres/` en vivo |
| 6 | **Google no sabe qué negocio es.** Sin meta description y sin datos de negocio (JSON-LD), con promociones vencidas (10 de Mayo, "Inscríbete en Abril", código KenKoYogaMar25). | Menos visibilidad en búsquedas locales; se ve desactualizado. | Inicio y `/promociones/` en vivo |

Nota: **tienen mucha oferta real, precios publicados y un equipo grande**; el argumento es limpiar lo que quedó de la plantilla y ordenar todo alrededor de su Plan 360.

## Qué le ofrecemos

- "Tu Plan 360": su mandala convertido en menú; el cliente toca servicios de mente, espíritu y cuerpo, ve cuánto suman y lo manda por WhatsApp.
- Una página con sus fotos propias, sin plantilla ni fotos de banco, con una sola dirección, un solo WhatsApp y el teléfono que sí marca.
- Horario de yoga, paquetes y membresías a la vista; datos de negocio para Google.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por Instagram @wellness.kenko o por WhatsApp al 55 1939 8546). Tono: respetuoso y útil.

> Hola Claudia, buen día. Soy Guillermo, hago sitios web para negocios locales. Estuve viendo la página de Kenkō y me gustó mucho la idea de la Fórmula 360. Les escribo porque noté que en el inicio quedó un bloque de la plantilla con un correo, un teléfono y una dirección de Nueva York que no son suyos, que el botón "Llámanos" no marca y que el sitio da dos direcciones distintas (Naucalpan e Interlomas). Les preparé una propuesta de cómo podría verse, donde cada persona arma su Plan 360 con sus servicios y precios y lo manda por WhatsApp. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es su dirección actual: Naucalpan o Interlomas?
- ¿Qué WhatsApp y qué teléfono quieren en el sitio?
- ¿Precios de meditación, respiración y tarot? ¿Siguen vigentes los del catálogo?
- ¿Quieren mostrar los tratamientos médico-estéticos y la herbolaria?
- ¿Horario de atención de la casa? ¿Nos comparten fotos de sus cabinas y servicios?
