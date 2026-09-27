# Humareda Prime: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.humaredaprime.com/ (WordPress con Elementor, una sola página). Steak house con coctelería de autor y vista al mar en Blvd. Vicente Fox Quesada 106, Costa Sol, Boca del Río, Ver. |
| Prioridad | **MEDIA**: el sitio funciona (WhatsApp, teléfono y Maps llegan a ellos), pero no enseña nada de su carta más que nueve nombres de cortes, sin precios ni bebidas; además sigue publicada la entrada de ejemplo "Hello world!" de WordPress, que está en su mapa del sitio para Google |
| Contacto publicado | Tel. y WhatsApp 229 550 7070. No enlaza redes sociales ni correo |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-27 (`https://www.humaredaprime.com/` responde 200 y es **igual** a `original.html`), su mapa del sitio y las páginas que enlaza.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Sigue publicada la entrada de ejemplo de WordPress.** `/2026/06/06/hello-world/` abre una página "Hello world! - Humareda Prime" con el texto "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!", y está en su mapa del sitio para Google (`post-sitemap.xml`) junto con la página del autor "admin" y la categoría "Uncategorized". Además, `/wp-json/wp/v2/users` muestra públicamente el usuario administrador ("admin"). | Google puede mostrar "Hello world!" al buscar el restaurante: se ve descuidado para un steak house premium. Dejar a la vista el nombre del usuario administrador facilita los intentos de entrar al sitio. | curl de `sitemap_index.xml`, `post-sitemap.xml`, `/2026/06/06/hello-world/` (200), `/author/admin/` (200) y `/wp-json/wp/v2/users` (200) |
| 2 | **No hay carta.** "Nuestros Cortes" son nueve nombres (Rib Eye, Arrachera, T-Bone, Top Sirloin, New York, Rib Eye 2", Cowboy, Porterhouse y Costillar de Rib Eye) sin precios, pesos ni descripción; no aparece nada de entradas, guarniciones, postres, vinos ni de la "mixología de autor" que promete la portada. El sitio no tiene más páginas. | Quien compara dónde cenar quiere saber cuánto va a gastar; sin carta ni precios, escribe para preguntar o se va con otro restaurante que sí los enseña. | `crudo.json` y `original.html`; `page-sitemap.xml` solo tiene el inicio |
| 3 | **El horario se lee con dificultad.** "D-J: 13:00 p.m. a 22:00 / V-S 13:00 p.m. a 24:00 a.m.": abreviaturas de días y "p.m." y "a.m." sobrantes en horas de 24. | Es el dato que más se consulta antes de ir; hay que descifrarlo. | `original.html`, sección "Visítanos" |
| 4 | **Google no sabe que es un restaurante.** Sus datos estructurados (Yoast) solo dicen "WebPage" y "Organization": no hay tipo `Restaurant`, dirección, horario ni teléfono. No tiene meta description: Google y WhatsApp arman la vista previa pegando el texto de la página ("…vista al mar. Reserva por WhatsApp Llámanos El estándar del corte en Boca del Río, Veracrúz. …"). La página está declarada en inglés (`lang="en-US"`, `og:locale` `en_US`). | Menos posibilidades de salir con su horario y dirección en Google, y una vista previa desordenada al compartir el enlace. | `original.html`: `ld+json` de Yoast, 0 `name="description"`, `<html lang="en-US">` |
| 5 | **El WhatsApp solo pregunta "disponibilidad".** Los cuatro botones mandan "Hola, me gustaría hacer una reservación en Humareda Prime. ¿Podrían apoyarme con disponibilidad?", sin día, hora ni personas. | Cada reservación empieza con idas y vueltas ("¿para qué día?", "¿cuántos son?") que el sitio podría resolver. | `original.html`: 4 enlaces `wa.me/522295507070` con el mismo mensaje |
| 6 | Detalles menores: errata "Veracrúz" en un título; los tres botones flotantes (llamar, WhatsApp, Maps) son solo íconos sin nombre para lectores de pantalla y los de llamar abren una pestaña nueva (`target="_blank"`); las seis fotos de la galería no tienen texto alternativo; no enlaza Instagram ni Facebook; el mapa de Google va incrustado (más peso en el celular). | Pequeñas pérdidas de confianza, de accesibilidad y de visibilidad. | `original.html` |

Nota: el sitio **está bien hecho en lo básico**: fotos propias muy buenas (su letrero, el salón, la terraza frente a la playa, sus cortes y cócteles), WhatsApp con mensaje prellenado, teléfono con enlace, dirección, horario y Google Maps, y se ve bien en el celular. El argumento no es "su sitio está mal", sino **que enseñe lo que venden y que reservar sea un solo mensaje**.

## Qué le ofrecemos

- Retirar la entrada "Hello world!" y la página de autor, y ocultar el usuario administrador (trabajo en su WordPress, con su permiso).
- Su carta con precios en la página (en cuanto nos la compartan), empezando por los nueve cortes.
- "El mar desde tu mesa": el cliente elige día y hora, ve si le toca el mar con luz o de noche (con la hora real de la puesta de sol en Boca del Río) y reserva por WhatsApp con día, hora y personas ya escritos.
- Horario claro, barra fija en el celular (Reservar, Llamar, Cómo llegar), datos de restaurante para Google (tipo, dirección, horario, teléfono) y una vista previa limpia al compartir.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta (por WhatsApp al 229 550 7070). Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi la página de Humareda Prime y sus fotos de la terraza frente al mar están muy bien. Les escribo porque noté que en su sitio sigue publicada la entrada de ejemplo de WordPress ("Hello world!"), y Google la tiene registrada; también que la página solo muestra los nombres de los cortes, sin precios ni bebidas. Les preparé una propuesta de cómo podría verse su sitio, con la carta, el horario claro y una sección para reservar por WhatsApp eligiendo día, hora y personas (y ver si les toca el mar con luz o de noche). Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Nos pueden compartir su carta con precios (cortes con sus pesos, entradas, guarniciones, postres, vinos y coctelería)?
- ¿Hasta qué hora reciben la última reservación o la última orden de cocina?
- ¿Todas las mesas o solo la terraza tienen vista al mar? ¿Se puede pedir mesa en terraza al reservar?
- ¿El Rib Eye 2" es de dos pulgadas de grosor?
- ¿Tienen Instagram o Facebook que quieran enlazar?
- ¿"Carnes Finas San Juan", el letrero junto al suyo en la fachada, tiene relación con el restaurante?
- ¿Quién administra su WordPress? (para retirar la entrada de ejemplo y ocultar el usuario administrador)
