# Hotel Tradicional: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.hoteltradicional.com/ (PHP con plantilla de Bootstrap; motor de reservas Nobeds). Hotel temático de 34 habitaciones en Calle 1ro. de Marzo 58, Barrio de La Merced, San Cristóbal de Las Casas, Chiapas |
| Prioridad | **MEDIA**: el sitio funciona (reserva en línea, WhatsApp, teléfono), pero mezcla su identidad con la de Hotel Misión Colonial (textos, aviso de privacidad, correo y el mapa del sitio para Google apuntan a otro dominio), se contradice sobre su colección y sus seis paquetes no tienen ningún botón para pedirlos |
| Contacto publicado | Tel. +52 967 631 6851; WhatsApp 967 631 6216 (y otro, 967 678 1538, en sus términos); reserva@hoteltradicional.com; Facebook, Instagram y YouTube |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-27 (`https://www.hoteltradicional.com/` responde 200 y es **igual** a `original.html`) y las páginas que se indican.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El sitio habla de otro hotel.** En "Hotel Tradicional" (`/tradicional.php`) el texto dice tres veces "Hotel Misión Colonial San Cristóbal"; el aviso de privacidad da como contacto `reserva@misioncolonial.com` (4 veces) y los términos piden facturar a `facturacion@misioncolonial.com`. Su `robots.txt` le dice a Google que el mapa del sitio es `http://misioncolonial.com/sitemap.xml`, y `/sitemap.xml` solo lista páginas de misioncolonial.com (incluida `tematico.php` y `reuniones.php`, que no existen en este sitio). | El huésped no sabe si está reservando en el Tradicional o en otro hotel, y el aviso de privacidad nombra a otro responsable. Google recibe el mapa de otro dominio y no uno propio: menos páginas del hotel en los resultados. | curl de `/tradicional.php`, `/aviso-privacidad.php`, `/terminos-condiciones.php`, `/robots.txt` y `/sitemap.xml` |
| 2 | **Se contradice sobre su colección**, que es su gran diferencia: el inicio dice "2a. colección más grande en México", `/tradicional.php` "la segunda más grande de México" y los términos "La 3ra. Colección más grande del país". | Un dato que debería dar confianza la resta cuando no coincide. | `crudo.json` (inicio y tradicional) y curl de `/terminos-condiciones.php` |
| 3 | **Los paquetes no tienen cómo pedirse.** Seis paquetes con precio "desde" ($2,100 a $6,050) y ningún botón, fecha ni vigencia; los tours diarios no tienen precio ni días de salida, y los ocho "Más Información" de las experiencias llevan al formulario de contacto. | Lo que mejor puede vender (paquetes de varias noches con tours) obliga al cliente a copiar el nombre y escribir por su cuenta; muchos no lo hacen. | `crudo.json` (paquetes y servicios); curl de `/paquetes.php`: solo los enlaces generales |
| 4 | **El motor de reservas muestra una habitación confusa.** Consultado el 2026-09-27 para una noche (27 a 28 de septiembre), solo ofrecía "Habitación Cuádruple" con "Max: 2 Guests" a MXN 450. En el sitio no hay tipos de habitación ni tarifas, y `/reserva.php` mete el motor en un marco con el ancho y alto de la pantalla del dispositivo (`screen.width`), no de la ventana. | Una cuádruple para dos personas a ese precio hace dudar o genera reservas equivocadas; sin habitaciones en el sitio, el cliente no puede comparar antes de entrar al motor. | curl de `/reserva.php` (iframe) y de `https://nobeds.app/DirectForm/Step/1508168107` |
| 5 | **Dos WhatsApp distintos.** Los botones usan 967 631 6216 y los términos piden enviar comprobantes al (967) 678 1538. | Un depósito enviado al número equivocado es una reserva que se pierde o se retrasa. | `original.html` y curl de `/terminos-condiciones.php` |
| 6 | **Google lo lee mal.** Tres `<title>` y tres H1 por página; el mismo título "¿Buscas Hoteles…?" en todas las páginas; description genérica ("…con excelentes instalaciones ¡Entra Aquí!"); sin datos estructurados de hotel; imágenes con `alt` como "testimonial_094_01" o "in_th_030_01". Sigue con Google Analytics Universal (`UA-884297-1`), que Google dejó de procesar: no está midiendo visitas. | Menos visibilidad para "hotel en San Cristóbal de las Casas" y ninguna estadística de cuánta gente entra. | `original.html` y curl de `/galeria.php` |
| 7 | Detalles que envejecen el sitio: "© 2021", el "Protocolo COVID-19" en el pie, el logo de Safe Travels y una opinión sobre las medidas por COVID; el formulario de contacto no menciona el aviso de privacidad (solo está enlazado en el pie); erratas ("Recorrdio", "cursiosos", "Romanticas"); los carruseles repiten los mismos logos y experiencias dos o tres veces. | Pequeñas pérdidas de confianza. | `crudo.json` y `original.html` |

Nota: el hotel **tiene mucho a su favor**: una colección textil real en sus pasillos, buena ubicación, reservas en línea que funcionan, WhatsApp con mensaje, paquetes con precio y opiniones con nombre. El argumento no es "su sitio está mal", sino **que se vea como un solo hotel, que la colección luzca y que los paquetes se puedan pedir con un toque**.

## Qué le ofrecemos

- Un sitio con una sola identidad (Hotel Tradicional), su aviso de privacidad y su mapa del sitio propios (con su permiso y con los textos legales que ellos aprueben).
- "Teje tu viaje por Chiapas": cada paquete se ve como una faja tejida (noches, desayunos, tours y souvenirs) y se pide por WhatsApp con el nombre y el precio ya escritos; los tours diarios con su propio botón.
- La colección al frente, el motor de reservas a un toque, check-in y check-out a la vista, barra fija en el celular y datos de hotel para Google.
- Cuando nos compartan fotos: habitaciones por tipo, jardín, pérgola, restaurante y la colección.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta (por WhatsApp al 967 631 6216). Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi la página del Hotel Tradicional y me gustó mucho lo de su colección de textiles chiapanecos. Les escribo porque noté que en la página "Hotel Tradicional" el texto habla de "Hotel Misión Colonial", y que el aviso de privacidad y el mapa del sitio que recibe Google son de misioncolonial.com; también que sus paquetes no tienen un botón para pedirlos. Les preparé una propuesta de cómo podría verse su sitio, con la colección al frente y los paquetes que se piden por WhatsApp con un toque. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Hotel Tradicional y Hotel Misión Colonial son del mismo grupo? ¿Quieren que cada sitio hable solo de su hotel?
- ¿Su colección es la segunda o la tercera más grande del país? ¿Tienen una fuente que citar?
- ¿Qué tipos de habitación tienen, con capacidad y tarifa "desde"? ¿La "Habitación Cuádruple" de su motor es para 2 o para 4 personas?
- ¿Siguen vigentes los paquetes y sus precios? ¿Para qué fechas, desde cuántas personas y qué incluyen los tours (transporte, entradas)?
- ¿Cuánto cuestan y qué días salen los tours diarios? ¿Y las experiencias?
- ¿Cuál es el WhatsApp correcto para reservas y para comprobantes: 967 631 6216 o 967 678 1538?
- ¿Siguen vigentes los distintivos (H, M, Punto Limpio, Safe Travels, Cambio Ambiental, Pacto Mundial, Marca Chiapas)?
- ¿Nos pueden compartir fotos de las habitaciones, el jardín, la pérgola, la fachada, el restaurante y la colección? ¿La foto del andador de la ciudad es suya o de un banco de imágenes?
- ¿El horario del Museo de Historia (10 a 18 h) y la entrada gratuita a sus museos aplican a todos los huéspedes?
