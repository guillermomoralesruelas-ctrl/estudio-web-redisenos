# Florería Mrs. Flowers: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-27), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.mrsflowers.com.mx/ |
| Prioridad | **MEDIA**: el sitio funciona en línea (WooCommerce activo, WhatsApp correcto), pero usa cientos de fotos generadas con IA como fotos de producto y el JSON-LD no declara el tipo de negocio correcto para Google |
| Contacto publicado | WhatsApp +52 55 1878 4901 (`wa.me/525518784901`), Tel. 55 1878 4901 |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Cientos de fotos de producto llevan en el nombre `ChatGPT-Image-*` — son imágenes generadas con IA, no del negocio real. Los usuarios ven fotos de IA como referencia de lo que van a recibir, y el producto real puede ser diferente. | Genera desconfianza y posibles reclamaciones: el cliente espera el arreglo de la foto de IA y recibe algo diferente; reduce conversiones porque las fotos de IA se ven genéricas, no auténticas. | `investigacion/crudo.json` (alt de imágenes: "ChatGPT-Image-*"), src URLs del HTML original |
| 2 | El JSON-LD del sitio no declara el tipo `Florist` de schema.org: Google no muestra la florería como tal en búsquedas de flores locales, y las estrellas de reseñas no aparecen en el resultado de búsqueda. | Pierde visibilidad en búsquedas como "flores a domicilio CDMX" frente a competidores que sí tienen el tipo correcto. | `investigacion/original.html` — revisar el bloque JSON-LD del `<head>` |
| 3 | No hay `<meta description>` con el servicio principal: el texto que Google muestra en los resultados de búsqueda lo genera automáticamente de cualquier texto de la página, que puede ser el del menú de navegación. | El resultado en Google no comunica "entrega hoy en 2 a 3 horas" — el diferenciador principal del negocio no llega a los usuarios antes de que entren al sitio. | `investigacion/original.html` — `<head>` del HTML |
| 4 | El WhatsApp del sitio (el enlace del hero) ya incluye un mensaje prellenado, pero el mensaje es genérico: "Hola, quiero ayuda para elegir un arreglo floral en Mrs. Flowers." No dice nada sobre entrega hoy. | Las personas que buscan entrega urgente no ven en el mensaje ninguna urgencia; puede hacer que el florista responda con más preguntas antes de confirmar la disponibilidad de entrega hoy. | `investigacion/crudo.json` → URL de WhatsApp en la página de inicio |

## Qué le ofrecemos

- Un sitio de una página que no depende de WooCommerce: sin carrito roto, sin JavaScript de plugins que falla.
- El elemento "¿Llega hoy?": un reloj en tiempo real que dice cuánto tiempo queda para ordenar con entrega hoy (antes de las 6 pm), con cuenta regresiva y botón de WhatsApp directo.
- Fotos reales del negocio (las que ya tienen, tomadas por ellos mismos) usadas como protagonistas, no como complemento de las de IA.
- JSON-LD tipo `Florist`, title y description con el diferenciador de "entrega en 2-3 horas", para mejorar su visibilidad en Google.
- WhatsApp prellenado por tipo de pedido: ramos, girasoles, rosas especiales, arreglos funerales; y con el contexto de entrega hoy.
- Sitio que abre sin servidor y funciona en XAMPP o en cualquier hosting estático.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Vi que tienen su tienda en mrsflowers.com.mx y me pareció que el servicio de entrega en 2-3 horas es un diferenciador muy fuerte. Quería comentarles que noté que varias de las fotos de sus productos tienen en el nombre "ChatGPT-Image", lo que indica que son imágenes generadas con IA; puede generar desconfianza si los clientes comparan la foto con el arreglo real.
>
> Hice una propuesta de página para ustedes — más sencilla, sin carrito, con sus fotos reales y un reloj que muestra cuánto tiempo queda para ordenar con entrega hoy — si les interesa verla, con gusto se la comparto. No tiene costo ni compromiso.

## Preguntas para la conversación

- ¿Tienen más fotos reales (de WhatsApp o cámara) de sus arreglos que no están publicadas en el sitio?
- ¿Cuáles son sus horarios completos de atención? El sitio solo dice "antes de las 6 PM" pero no publica horario de apertura ni días.
- ¿Tienen cuenta de Instagram o Facebook? No aparecen publicadas en el sitio.
- ¿El número 55 1878 4901 es el único contacto (WhatsApp y llamadas)?
