# El Palmar: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://elpalmarmzt.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/362-elpalmar/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 362-elpalmar`) |

## En una línea

Es el mismo restaurante, con su menú completo (168 platillos y sus precios), su lema, sus cifras, sus reseñas de Google, su mapa, su horario y sus teléfonos. Cambia la forma: una página más ligera y clara y, con "La costa en un ceviche", un mapa del Pacífico donde cada ceviche o aguachile con nombre de lugar se ve en su sitio, con ingredientes, precio y WhatsApp para pedirlo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 57 imágenes rotas y 62 recursos fallidos en escritorio (61 en celular): las rutas con espacios (`vamos%20empezando/…`) no resuelven fuera de su servidor | 0 imágenes rotas, 0 errores, 0 recursos fallidos; 5,053 px en escritorio y 7,211 px en celular, 0 desbordes, 1 H1 |
| GSAP, ScrollTrigger y Google Fonts cargados de fuera | Sin scripts de terceros; solo el iframe de su mapa de Google |
| 29 MB de imágenes (nueve PNG de más de 1 MB) | 13 fotos .webp de 0.76 MB con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Las fotos se recortaron al centro en 5:4 para quitar el nombre del platillo y el logo que llevan impresos.
- El menú queda en 9 pestañas (sus mismas categorías) con lista de platillos, descripción y precios; los puntos medios del "Campechano" pasan a comas y ese platillo se llama "Campechano" (en su sitio el nombre es la lista de ingredientes).
- El platillo sin nombre de la sección Teriyaki se llama "Teriyaki".
- Las fotos de "Nuestros sabores" (siete galerías deslizables) se usan como foto de cada categoría del menú.
- De sus seis reseñas de Google se usan tres, con su texto completo (acentos corregidos en "está" y "aguachile").
- El encabezado es claro y usa solo el dibujo del logo (palmera, sol y ola): el logo completo tiene letras oscuras que no se leen sobre fondo azul.
- El teléfono de "Llamar" es el 669 546 6940, que su sitio marca "solo llamadas"; WhatsApp va al 669 100 5111.

## Qué se agregó (no existía en el original)

- **"La costa en un ceviche"**: mapa del Golfo de California y la costa del Pacífico con los siete lugares que dan nombre a sus ceviches y aguachiles (San Carlos, Loreto, Maviri, Altata, Mazatlán, Teacapán y San Blas). Al tocar uno aparece el platillo con su descripción, sus precios (grande y tostada), su foto cuando existe (Loreto, San Carlos y Mazatlán) y un WhatsApp para pedirlo. Las ubicaciones son aproximadas y se dice en la página; la línea de costa es un dibujo simplificado nuestro. Para Mazatlán se usa la foto de su "Tostada Mazatlán". **[PENDIENTE confirmar]** que el nombre de cada platillo viene del lugar.
- Textos nuestros: "Mariscos y sushi en Mazatlán" (H1), la bajada de la portada, "La costa en un ceviche" y su texto, "Este platillo no tiene foto en su sitio", "El círculo naranja punteado marca El Palmar…", "Todo su menú, con precios en pesos. Elige una categoría.", "Lo que dicen en Google Maps", "Reseñas publicadas en su sitio…", los botones y los mensajes de WhatsApp (el de domicilio es el suyo).
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar. Enlace "Cómo llegar" a Google Maps y un enlace de respaldo detrás del iframe.
- JSON-LD `Restaurant` con dirección, coordenadas de su mapa, horario, teléfono, cocina y redes. Open Graph con la Torre del Palmar.

## Qué se quitó o no se usó

- Las fotos de las charolas (`Charola-grande.png` y `Charola-pequeña.png`): llevan credenciales C2PA de imagen generada. Las charolas siguen en el menú, sin foto.
- Los PNG de cócteles, nigiris y Tres Puertos (2 MB cada uno, sin datos de cámara).
- Misión, visión y los cinco valores (son para su equipo, no para quien busca dónde comer).
- El formulario de reservación (arma un WhatsApp con nombre, personas, fecha y hora): aquí el botón abre WhatsApp directo. Se puede agregar si lo piden.
- El cambio de idioma a inglés, el precargador y el cursor propio.

## Qué se conserva al pie de la letra

- "Aquí la vida es más sabrosa", "+5 Años frente al mar", "+40 Platillos únicos", "4.8 Google", "Ven a donde termina la tierra".
- Los 168 platillos con sus nombres, descripciones y precios, sus secciones y sus notas ("Servidos con ensalada fresca, arroz y salsa tatemada", "Servidos con cubeta de helado de vainilla").
- Dirección, horario, los dos teléfonos, WhatsApp, Facebook, Instagram, Rappi, DiDi Food y su mapa de Google.

## Pendiente de confirmar con el cliente

- Si los ceviches llevan el nombre de esos lugares y si la foto de la "Tostada Mazatlán" sirve para el ceviche Mazatlán.
- Nombres en inglés dentro del menú en español ("Chocolate Cake", "House Red", "Flavoured Margarita", "Fresh Lemonade"): se dejaron como están.
- Fotos reales de las charolas.
- Si "4.8" sigue siendo su calificación en Google.

## Dónde está cada cosa

- Textos, menú, lugares del mapa y fotos: `rediseno/src/data/content.ts`
- Diseño, secciones y "La costa en un ceviche": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
