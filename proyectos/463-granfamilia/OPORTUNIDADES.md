# Gran Familia: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.lagranfamilia.mx/ (inicio, `/menu-desayuno.html` y `/menu-tarde.html`). Restaurante de cocina potosina en Av. Vasco de Quiroga 209, Industrial Aviación, San Luis Potosí |
| Prioridad | **ALTA**: los datos que el sitio le da a Google dicen dos direcciones distintas (una es "Av. Venustiano Carranza 1050, Tequisquiapan") y su foto apunta a un dominio que no existe; además presenta como "Reseña de Google" cuatro testimonios que parecen de ejemplo y elogian platillos que no están en su menú |
| Contacto publicado | Tel. y WhatsApp +52 444 411 5560 (no publica correo ni redes sociales) |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-27: las tres páginas responden 200 y son iguales a la captura (solo cambia el token de Cloudflare).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Le da a Google dos direcciones distintas.** El inicio tiene dos bloques de datos de restaurante (JSON-LD): uno dice "Av. Venustiano Carranza 1050, Tequisquiapan" y el otro "Av. Vasco de Quiroga 209, Industrial Aviación 1ra Secc", cada uno con coordenadas diferentes (22.151, -100.985 y 22.1565, -100.9855). La imagen de uno apunta a `granfamilia.mx`, un dominio que no existe; el otro tiene `image`, `url` e `@id` vacíos. | Google puede mostrar la dirección equivocada o no confiar en ninguna; alguien que busque cómo llegar puede terminar en Av. Venustiano Carranza, en Tequisquiapan. | `original.html` y curl del inicio (dos `application/ld+json`); `nslookup granfamilia.mx` → "Non-existent domain" |
| 2 | **Testimonios que parecen de ejemplo, marcados "Reseña de Google".** Cuatro reseñas con iniciales ("Mariana R.", "Luis M.", "Claudia P.", "Javier T."), sin enlace; una elogia "el Asado de Boda" y otra "las gorditas", que no están en ninguno de sus dos menús. Sus datos para Google además declaran 4.7 estrellas con 150 reseñas. | Si un cliente busca el asado de boda o las gorditas y no existen, desconfía de todo lo demás; y presentar como reseñas de Google textos que no lo son puede ir contra las reglas de Google. Sus reseñas reales valen más. | `crudo.json` (inicio, "Historias de Gran Familia"; menús de la mañana y de la tarde); `original.html` (`aggregateRating`) |
| 3 | **La foto grande de la portada no parece de su restaurante.** "Ambiente del Restaurante" es una familia de modelos (papá, mamá e hija) en un salón que no se parece al de sus demás fotos, con su logo encima; parece de banco. Tienen fotos reales muy buenas (su mesa con mantel a cuadros) que no usan ahí. | La primera imagen que ve el cliente no es Gran Familia; quien la reconoce como foto de banco desconfía. | `original.html` (`WhatsApp Image 2025-12-13 at 16.24.05_6f16f09-1.jpg`) |
| 4 | **Reservar por WhatsApp llega vacío y no hay cómo abrir la ruta.** Todos los "RESERVAR", "Reservar Mesa" y "CONTACTAR" abren `wa.me/524444115560` sin mensaje; el número del pie también abre WhatsApp aunque parece para llamar. Hay un mapa incrustado pero ningún enlace para abrir la ruta en Google Maps. | Cada reserva empieza con "Hola" y un ida y vuelta de preguntas (qué día, cuántos, a qué hora); en el celular, el mapa incrustado no lleva a la navegación. | `crudo.json` (enlaces `wa.me` sin `?text=`), `original.html` (iframe de `google.com/maps/embed`) |
| 5 | **Lo que hay cada día está repartido.** El horario (lunes a domingo, 8 a 6) está en el pie; que la comida corrida es solo de lunes a viernes de 1 a 5 está dentro del menú de la tarde; la barbacoa de sábado y domingo en una franja al final del inicio. Nada dice a qué hora cambia el menú de la mañana al de la tarde. | Llamadas y mensajes para preguntar "¿hoy hay comida corrida?" o "¿a qué hora hay barbacoa?"; gente que llega el sábado buscando la comida corrida. | `crudo.json` (las tres páginas) |
| 6 | **Google ve poco.** El H1 del inicio está vacío (el título grande es un H2), no tiene Open Graph (al compartir el enlace por WhatsApp sale sin foto) y cualquier dirección inventada (`/robots.txt`, `/sitemap.xml`, `/pagina-que-no-existe`) responde 200 con el inicio, así que no hay mapa del sitio. | Menos visitas de quien busca "comida corrida San Luis Potosí" o "barbacoa Industrial Aviación", y enlaces compartidos sin vista previa. | curl: `<h1 …></h1>` vacío, `og:` 0, `/pagina-que-no-existe` → 200 |
| 7 | Detalles menores: "$150 mxn mxn" en la comida corrida; "Tacos Rojos (Queso $120 mxn / Pollo $155 mxn) Var"; los chilaquiles cuestan distinto en la mañana ($125, cecina +$49) y en la tarde ($110, cecina +$59) sin explicarlo; "Est. 2025" junto a "© 2024"; notas sin explicar ("Refill", "1-2 ing", "Preparado / Clamato $25 / $30", jugos "Paraíso" y "Mézclalo"); usa Tailwind por CDN, que su propio fabricante indica no usar en un sitio publicado (más lento). | Pequeños descuidos que generan preguntas y restan confianza a un sitio que por lo demás se ve cuidado. | `crudo.json` y `original.html` (`cdn.tailwindcss.com`) |

Nota: el sitio **está bien hecho** en lo básico: tiene su menú completo con precios en la página (no en PDF), fotos reales de sus platillos, su dirección, horario y teléfono a la vista y botones de WhatsApp en todas partes. El argumento no es "su sitio está mal", sino **que Google tenga su dirección correcta, que las reseñas sean las suyas y que reservar sea un solo mensaje**.

## Qué le ofrecemos

- Una sola dirección y un solo juego de datos para Google (restaurante, horario, teléfono, reservas por WhatsApp y los especiales de fin de semana con precio), y vista previa con foto al compartir el enlace.
- "¿Qué día vienes?": un mantel con los siete días; cada uno dice qué hay (comida corrida entre semana, barbacoa de borrego el fin de semana, con precios) y reserva ese día por WhatsApp con la fecha escrita.
- Los dos menús en una sola página, en pestañas, con las notas explicadas.
- Su foto real en la portada; sin reseñas de ejemplo (y, si quieren, enlace a sus reseñas reales de Google); barra fija en el celular con Reservar, Llamar y Cómo llegar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Estuve viendo la página de Gran Familia y noté que los datos que le da a Google traen dos direcciones distintas: la de Vasco de Quiroga 209 y otra en Av. Venustiano Carranza 1050, Tequisquiapan, así que Google podría mandar a alguien al lugar equivocado. Les preparé una propuesta de cómo podría verse su sitio, con su menú completo, una sección para ver qué hay cada día (comida corrida entre semana, barbacoa el fin de semana) y reservar por WhatsApp con el día ya escrito. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿La dirección de Venustiano Carranza 1050 es otra sucursal, una anterior o un error?
- ¿A qué hora cambia el menú de la mañana al de la tarde? ¿La barbacoa se sirve desde que abren? ¿Se puede apartar por kilo?
- ¿Las reseñas del sitio son de clientes reales? ¿Les interesa enlazar las de su perfil de Google?
- ¿La foto de la familia de la portada es de su restaurante? ¿Tienen fotos del salón, de la fachada y de la barbacoa?
- ¿Qué llevan los jugos Tropical, Paraíso y Mézclalo? ¿El refill del café es sin costo? ¿El preparado y el Clamato se suman al precio de la cerveza?
- ¿Los precios distintos de los chilaquiles en la mañana y en la tarde son a propósito?
- ¿Tienen Facebook, Instagram o correo para agregar al sitio? ¿En qué año abrieron?
