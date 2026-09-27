# HOUSE Restaurante: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html`, en `investigacion/crudo.json` (captura del 2026-09-26) o descargando el sitio real con curl (2026-09-27). Los defectos del clon (fuentes bloqueadas, desbordes, carruseles sin sus scripts) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://lascasasbb.com/es/house-restaurante-en-cuernavaca/ y sus subpáginas (menús de desayuno, brunch, comida y cena, para llevar y Birthday Breakfast), dentro del sitio del hotel Las Casas B+B. Restaurante de cocina mexicana y mediterránea en Fray Bartolomé de las Casas 110, Centro, Cuernavaca |
| Prioridad | **ALTA**: botones que no funcionan donde se pide o se reserva ("Llamar ahora" sin enlace en Para llevar y en el Birthday Breakfast; el WhatsApp de la página de Comida manda al hotel, no al restaurante) y horarios que se contradicen entre sus páginas |
| Contacto publicado | Tel. y WhatsApp del restaurante +52 777 318 3782; reservas en OpenTable; IG @houserestaurante, FB /HouseCuernavaca; Rappi. Hotel: +52 777 318 7777, reservaciones@lascasasbb.com |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados con curl el 2026-09-27 (las siete páginas del restaurante responden 200; las descargas se guardaron fuera del estudio).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **"Llamar ahora" no llama.** En `/para-llevar/` los dos botones con el ícono de teléfono ("LLAMAR AHORA" y "LLAMAR AL +52 777-318-3782") y en `/feliz-cumpleanos/` el de "LLAMAR AHORA" tienen el enlace vacío (`href=""`): abren la misma página en otra pestaña. | Son justo las páginas donde se hace un pedido (comida a domicilio y el desayuno de cumpleaños de $625). Quien prefiere llamar se queda sin llamada. | curl de `/para-llevar/` (2 `href=""`) y `/feliz-cumpleanos/` (1 `href=""`) |
| 2 | **El WhatsApp de la página de Comida va al hotel.** En `/menu-de-comida/`, los botones "whatsapp" de "¿Comemos hoy?" y de "Reserva Tu Mesa En HOUSE" abren el WhatsApp del hotel (52 777 318 7777), no el del restaurante (52 777 318 3782) que usan las demás páginas. | Las reservas de comida llegan a otra bandeja, donde pueden tardar o perderse; el cliente espera respuesta del restaurante. | curl de `/menu-de-comida/`: 6 enlaces a `phone=527773187777` contra 2 a `527773183782` |
| 3 | **Horarios que se contradicen.** La página principal dice que la comida es "todos los días, 12:00 p.m.–6:00 p.m." y que de lunes a jueves cierran a las 10:00 p.m.; las páginas de desayuno, brunch y comida dicen que el sábado la comida es de 1:00 a 6:00, el domingo de 1:00 a 8:00 y que la cena de lunes a jueves es "hasta 10:30 pm"; la de para llevar, que la cena de lunes a jueves es de 6:00 a 8:30 p.m. y la comida del domingo hasta las 6:00. Además: "Última reservación dos horas antes del cierre" junto a una tabla que da otras horas. | Gente que llega el sábado a las 12:30 esperando comer, o que reserva tarde un martes; llamadas para preguntar; y Google no sabe qué horario mostrar. | curl de la principal, `/menu-de-desayuno/`, `/menu-de-desayuno-brunch-de-domingo/`, `/menu-de-comida/`, `/menu-de-cena/` y `/para-llevar/` (secciones "HORARIOS") |
| 4 | **Dos cartas de desayuno con precios distintos, las dos en línea.** El botón "VER MENÚ" del desayuno en la página principal abre `Desayuno-Espanol-v10-04-26-.pdf` (abril): Chilaquiles HOUSE $235, avocado toast $290, migas $145, "Breakfast special" $355. La página `/menu-de-desayuno/` abre `Menu-Desayuno-Espanol-v14-09-2026.pdf` (septiembre): $255, $225, $185 y "El especial" $280. | El cliente llega con un precio y en la mesa encuentra otro; es la queja más fácil de evitar. | curl de la principal y de `/menu-de-desayuno/`; los dos PDF leídos con `pdftotext` |
| 5 | **La carta solo está en PDF e imágenes.** Las cuatro cartas (desayuno, brunch, comida y cena, postres) son PDF de ~1 MB o fotos JPG de cada página; en el texto de la página de cena solo aparecen seis platillos con precio. El PDF de comida se llama `v26-06-06` pero por dentro dice "v22/08/26". | En el celular hay que abrir y ampliar un PDF para ver un precio; Google no lee bien las cartas en imagen, y quien busca "mole negro Cuernavaca" o "brunch Cuernavaca precio" no los encuentra ahí. | curl de las cuatro páginas de menú (enlaces a `.pdf` y `.jpg`) |
| 6 | **Para Google, las páginas del restaurante son el hotel.** Sus datos estructurados (JSON-LD) solo describen un `Hotel` con el teléfono del hotel (777 318 7777): no hay datos de `Restaurant` con su teléfono, horario, tipo de cocina, carta ni reservas. | Google no puede mostrar su horario ni "Reservar" en los resultados del restaurante, y puede dar el teléfono del hotel. | curl de la principal (`application/ld+json`: `Hotel`, `Organization`, `WebSite`) |
| 7 | Detalles menores: el enlace de OpenTable lleva un identificador de sesión fijo (`corrid=525aeb64…`), el mismo en todos los botones; los WhatsApp no llevan mensaje, salvo los de la página de cena; en el inicio del restaurante, la imagen "Around this table everyone belongs." (con arcoíris) parece generada con IA (pendiente de confirmar); textos con erratas ("Ultima reservacion", "Viernes Y Sabados"). | Pequeños descuidos en un sitio que por lo demás está muy cuidado. | curl de las páginas del restaurante |

Nota: el sitio **está bien hecho**: textos muy buenos y propios (la cocina de Daniela Salgado Romero, cada momento del día), preguntas frecuentes útiles (valet, mascotas, lluvia, accesibilidad, sin alcohol), reservas en OpenTable, pedidos por WhatsApp y Rappi, y buena presencia en guías. El argumento no es "su sitio está mal", sino **que los botones de pedir y reservar funcionen, que haya un solo horario y un solo precio, y que la carta se lea sin abrir un PDF**.

## Qué le ofrecemos

- Una página para HOUSE, con un solo horario (el de su página principal, a confirmar), la carta completa con precios en la página, en pestañas, y el PDF como respaldo.
- Todos los botones al WhatsApp del restaurante, con el mensaje ya escrito (día, hora y personas), y "Llamar" que sí llama; barra fija en el celular con Reservar, Llamar y Cómo llegar.
- "¿Más México o más Mediterráneo?": su frase "México y el Mediterráneo se encuentran en la mesa de HOUSE" convertida en una mesa con sus 33 platillos colocados según sus ingredientes; se elige un lado y se reserva para probar ese platillo.
- Datos de restaurante para Google (horario, teléfono, cocina, carta y reservas), dentro del hotel.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Estuve viendo la página de HOUSE y noté un par de cosas que les pueden estar costando pedidos: en la página de comida para llevar y en la del Birthday Breakfast, el botón "Llamar ahora" no marca a ningún número, y en la página de Comida el WhatsApp manda al número del hotel en lugar del restaurante. También los horarios cambian de una página a otra. Les preparé una propuesta de cómo podría verse la página del restaurante, con la carta completa y sus precios sin abrir PDF, un solo horario y reservas por WhatsApp con el mensaje ya escrito. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es el horario correcto? Comida del sábado y del domingo (¿desde las 12:00 o la 1:00?, ¿hasta las 6:00 o las 8:00?) y cierre de lunes a jueves (¿10:00 o 10:30?). ¿La cena del domingo existe (el domingo cierran a las 8:00)?
- ¿Qué carta de desayuno vale, la de abril o la de septiembre? ¿La de brunch (abril) sigue vigente?
- Los precios de tres ensaladas (arúgula $315, César $295, caprese $255) salen apilados en el PDF: ¿son esos?
- ¿Nos pueden pasar la carta de vinos y de coctelería (Rosa Mexicano, Limoncello Spritz, HOUSE Zero Proof)? No la encontramos en las páginas del restaurante.
- ¿Tienen fotos de sus platillos en buena resolución para usarlas? ¿La imagen "Around this table everyone belongs." es una foto o fue generada?
- ¿Los reconocimientos (Fodor’s Choice, Marco Beteta, Wanderlog 2026, OpenTable, más de 1,250 reseñas en Google, 4.8 en OpenTable) están vigentes? ¿La MICHELIN Key es solo del hotel?
- ¿Quieren que el WhatsApp de reservas sea siempre el del restaurante (777 318 3782)?
