# La Punta Coffee: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://lapuntacoffee.com/ (una página en HTML, en inglés con botón "ES"). Café y bar de jugos junto a la alberca, dentro del hotel La Punta Rooms, Brisas de Zicatela, Puerto Escondido |
| Prioridad | **ALTA**: sus dos botones "Order on WhatsApp" y el teléfono publicado llevan a un número que parece de plantilla (954 123 4567), y "Order on UberEats" abre la portada general de Uber Eats: ninguna forma de pedir del sitio llega al café |
| Contacto publicado | lapuntacoffee@gmail.com, Instagram @lapuntacoffee (sin enlace en el sitio). El teléfono y WhatsApp publicados parecen de plantilla |
| Propuesta para enseñar | `rediseno/dist/index.html` (en español: `?lang=es`), `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-27 (`https://lapuntacoffee.com/` responde 200 y es **igual** a `original.html`) y sus imágenes en línea.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El WhatsApp y el teléfono parecen de plantilla.** Los dos botones "Order on WhatsApp" (portada y Visit Us) van a `wa.me/529541234567`, y el teléfono escrito es "+52 954 123 4567": la lada de Puerto Escondido seguida de 123 4567. | Quien quiere pedir o preguntar le escribe a un número que no es el suyo (o que no existe): son pedidos que nunca llegan, justo desde el botón principal de la página. | curl del inicio: 2 enlaces a `wa.me/529541234567` y el texto `+52 954 123 4567` |
| 2 | **"Order on UberEats" no lleva a su tienda.** El botón abre `https://ubereats.com`, la portada general de Uber Eats, no la página de La Punta Coffee. | El cliente tiene que buscarlos a mano dentro de la app; muchos se rinden. Si no están en Uber Eats, el botón promete algo que no existe. | curl del inicio: `href="https://ubereats.com"` |
| 3 | **Quedaron restos de la construcción a la vista.** Bajo la galería se lee "Tip: Convert HEIC images to JPG (Preview → File → Export → JPEG) and keep the exact file names above.", y la primera foto de la galería es un recuadro rosa que dice "Placeholder for IMG_1927.jpg" (con el texto alternativo "Pool drone shot over turquoise pool"). | Se ve como una página a medio terminar; resta confianza en un sitio que por lo demás tiene fotos muy bonitas. | curl del inicio y de `https://lapuntacoffee.com/IMG_1927.jpg` (imagen de 10 KB con el texto "Placeholder") |
| 4 | **El correo y el Instagram no tienen enlace, y no dice que están dentro de La Punta Rooms.** "lapuntacoffee@gmail.com" y "@lapuntacoffee" son texto que no se puede tocar; el sitio no menciona el hotel, que sí dice su Instagram ("Cafecito y bar de jugos adentro de @lapuntarooms.pxm"). Su Instagram tiene 0 publicaciones. | Con el WhatsApp roto, el correo y el Instagram son lo único que queda, y hay que copiarlos a mano. Quien llega a la dirección no sabe que tiene que entrar a un hotel. | curl del inicio (0 `mailto:`, 0 enlaces a instagram.com); perfil público de Instagram consultado con curl |
| 5 | **Google no sabe qué son.** No tiene datos de negocio (JSON-LD con dirección, horario y tipo de negocio), Open Graph ni favicon (`favicon.ico` da 404); la description es solo "La Punta Coffee — espresso, smoothies & sunshine in Puerto Escondido." | Al compartir el enlace por WhatsApp sale sin foto; en Google no aparece su horario ni que es una cafetería en Zicatela. | curl: `ld+json` 0, `og:` 0, `rel="icon"` 0; `/favicon.ico`, `/robots.txt` y `/sitemap.xml` dan 404 |
| 6 | Detalles menores: los smoothies dan dos precios ("$80 / $120") sin decir de qué tamaño; en español dice "corazones de hemp"; los textos alternativos de la galería están corridos (el del dron está en otra foto); en el celular la navegación no cabe y la página se mueve de lado; el mapa de Google va incrustado. | Pequeñas dudas en el menú y un sitio que se siente menos cuidado en el celular, donde lo ve casi todo su público. | `original.html` (menú en el script `data`, `alt` de la galería, `.navlinks` sin versión móvil) |

Nota: el sitio **tiene lo básico bien**: fotos propias muy buenas, el menú completo con precios, horario, dirección, enlace a Google Maps y versión en español. El argumento no es "su sitio está mal", sino **que los botones para pedir lleguen a ellos** y que no se vea a medio terminar.

## Qué le ofrecemos

- Contacto que sí funciona: WhatsApp con su número real y mensaje prellenado (en cuanto nos lo den), correo con un toque e Instagram enlazado; su tienda de Uber Eats si la tienen.
- El menú completo en inglés y español, con los tamaños claros y las notas explicadas.
- "¿Cuánto traes?": el cliente toca los billetes que trae de la playa y ve qué le alcanza del menú.
- "Dentro de La Punta Rooms" a la vista, Google Maps, barra fija en el celular, y datos de cafetería para Google (horario, dirección, tipo de negocio) y vista previa al compartir.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta (por correo a lapuntacoffee@gmail.com o por Instagram @lapuntacoffee, que son los contactos que sí son suyos). Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi su página y sus fotos junto a la alberca están increíbles. Les escribo porque noté que los botones de "Order on WhatsApp" y el teléfono de la página llevan al número 954 123 4567, que parece de ejemplo, así que los pedidos por ahí no les estarían llegando; y el botón de Uber Eats abre la página general de Uber Eats. Les preparé una propuesta de cómo podría verse su sitio, en inglés y español, con el menú claro y una sección para que el cliente vea qué le alcanza con lo que trae de la playa. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es su número de WhatsApp para pedidos? ¿Reciben llamadas?
- ¿Están en Uber Eats? ¿Cuál es su enlace?
- ¿Los dos precios de los smoothies son 12 oz y 16 oz?
- ¿A qué se agregan los extras (maca, espirulina, hemp) y cuestan $15 cada uno?
- ¿Cualquiera puede entrar al café aunque no se hospede en La Punta Rooms? ¿Quieren que se diga que están dentro del hotel?
- ¿Aceptan tarjeta o solo efectivo?
- ¿Tienen fotos de los snacks, de los jugos y de la barra?
