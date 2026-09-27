# Gran Familia: plan de rediseño (método 1.1)

**Sitio original:** https://www.lagranfamilia.mx/ (tres páginas en HTML con Tailwind por CDN y Alpine: inicio, `menu-desayuno.html` "Menú Mañana" y `menu-tarde.html` "Menú Tarde"). Todos los "RESERVAR", "Reservar Mesa" y "CONTACTAR" abren WhatsApp (`wa.me/524444115560`, sin mensaje); "Llamar Ahora" es `tel:+524444115560`. No tiene reservas ni pedidos en línea.
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/assets/img/`), textos de las tres páginas en `investigacion/crudo.json` (inicio, menú de la mañana y menú de la tarde, completos), contacto en `investigacion/resumen.json`.
**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- `https://www.lagranfamilia.mx/`, `/menu-desayuno.html` y `/menu-tarde.html` responden 200 y son iguales a la captura (solo cambia el token de Cloudflare).
- `/assets/js/tailwind-config.js`: sus colores (`gf-rojo #B91C1C`, `gf-verde #15803D`, `gf-texto #1f2937`, `gf-piedra #57534e`) y sus fuentes (Besley y Lato).
- Hallazgos para `OPORTUNIDADES.md`: sus dos JSON-LD, el H1 vacío, la ausencia de Open Graph, el dominio `granfamilia.mx` (no existe) y que cualquier dirección inventada (`/robots.txt`, `/sitemap.xml`, `/pagina-que-no-existe`) responde 200 con el inicio.
No se descargó ninguna imagen nueva.

**Rubro:** restaurante de cocina potosina tradicional ("Cocina Rancho", dice su logo): desayunos y almuerzos, comida corrida entre semana y barbacoa de borrego los fines de semana. **Ciudad:** San Luis Potosí, S.L.P. (Av. Vasco de Quiroga 209, Industrial Aviación 1ra Secc., C.P. 78140). En la base del estudio está como GASTRONOMIA, y lo es. Un solo local, "Est. 2025", con fotos propias de sus platillos: no es cadena ni directorio.

**Sobre las fotos:** el clon trae 9 fotos y el logo en negro y en blanco. Son publicaciones de sus redes, con su logo y su dirección como marca de agua. Ninguna trae metadatos (ni EXIF ni XMP). **Se usan 7:** la mesa con chilaquiles con cecina, plato de fruta y jugo sobre mantel a cuadros (la mejor: es su local), chilaquiles, cecina, omelette, hotcakes con Nutella, la barra de ensaladas y el guisado servido del chafing (comida corrida). La cecina y el omelette llevan letras de anuncio arriba: se recortan. **No se usan:** la portada de su sitio ("Ambiente del Restaurante"), una familia de modelos en un salón que no se parece al de sus demás fotos (parece de banco, con su logo encima), y el anuncio "El desayuno perfecto ¡SÍ EXISTE!" (letras y un plato sobre madera que parece montaje). Faltan fotos del salón, de la fachada y de la barbacoa (pendiente).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 5,089 px de alto, desborde 0, **14 de 14 imágenes rotas**, 1 H1 (vacío), **25 errores de consola y 22 recursos fallidos**. Móvil: 8,302 px, 14 rotas, 23 errores y 21 fallidos.
- Las imágenes están en `sitio/assets/assets/img/` pero el HTML las pide en `assets/img/`; tampoco están `assets/js/tailwind-config.js` ni `assets/js/main.js`. Sin la configuración de Tailwind no existen sus colores `gf-*`: la portada sale gris, el título blanco sobre blanco y los botones vacíos. El mapa de Google (iframe) sale en blanco.
- Fotos: 7 copias `.webp` y el logo en dos versiones con `rediseno/fotos-web.mjs` en `assets/web/` (3.03 MB → 0.63 MB); el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar mesa por WhatsApp** (su única acción; hoy el WhatsApp llega vacío) diciendo qué día y cuántos.
2. **Ver el menú completo con precios** sin cambiar de página, y entender sus notas ("Refill", "Var", "1-2 ing", "Preparado / Clamato").
3. Saber **qué hay cada día**: abren diario de 8:00 a.m. a 6:00 p.m., la comida corrida es solo de lunes a viernes de 1:00 a 5:00 p.m. y la barbacoa de borrego solo sábados y domingos, hasta agotar existencia. Hoy eso está repartido en tres lugares distintos.
4. Cómo llegar (el sitio tiene un mapa incrustado, pero ningún enlace para abrir la ruta).

Público: familias y gente que trabaja en la zona Industrial Aviación de San Luis Potosí: desayuno o almuerzo entre semana, comida corrida económica y el plan de fin de semana con barbacoa.

## Dirección visual (primera pasada)
El rojo y el verde de su `tailwind-config.js`, el negro de su logo (una placa con mazorcas y un corazón, "Cocina Rancho"), el mantel a cuadros rojo y blanco de su foto de la mesa, y el papel crema de fonda.

| Token | Color | Uso |
|---|---|---|
| `manta` | `#faf6ee` | Fondo general |
| `maiz` | `#f1e7d2` | Bloques alternos (menú) |
| `rojo` | `#b91c1c` | Su rojo: botones con texto blanco (6.5:1), precios y enlaces sobre manta (6.0:1) y maíz (5.3:1), el mantel |
| `rojo-oscuro` | `#8f1616` | Hover de botones |
| `verde` | `#166534` | Su verde, un tono más oscuro para texto (6.6:1 sobre manta): "Hoy", horarios y avisos |
| `tinta` | `#1c1917` | El negro de su logo: títulos, pie (manta sobre tinta 16:1) |
| `texto` | `#44403c` | Texto corrido (9.5:1 sobre manta, 8.4:1 sobre maíz) |

**Tipografía:** las de su sitio, en @fontsource y solo latino: **Besley** (sus títulos, serif de fonda con remates marcados; 600 y 700) y **Lato** (su texto; 400 y 700).

## Elemento memorable: "¿Qué día vienes?"
Lo que distingue a Gran Familia no es un platillo sino **su semana**: abre todos los días, entre semana hay comida corrida de 1 a 5 y el fin de semana hay barbacoa de borrego hasta que se acaba ("¡Llega temprano!"). En su sitio eso está en tres lugares (el pie, el menú de la tarde y una franja al final del inicio).

1. Un **mantel a cuadros** rojo y blanco (el de su foto) con **siete platos** vistos desde arriba, uno por día (lunes a domingo). Los de entre semana llevan dibujado el plato de la comida corrida (sopa, plato fuerte, agua y postre alrededor); los de sábado y domingo, el taco de barbacoa. El de hoy (hora de San Luis Potosí, `America/Mexico_City`) dice "Hoy" y viene elegido.
2. Al tocar un plato, su **ficha del día**: horario (8:00 a.m. a 6:00 p.m.), una barra de 8 a 18 h con la franja de la comida corrida (13 a 17 h) o la de la barbacoa ("hasta agotar existencia"), y una marca de "ahora" si es hoy y están abiertos. Debajo, lo que hay ese día con sus precios: comida corrida $150 (agua fresca, sopa del día, plato fuerte y postre) o los especiales de fin de semana (barbacoa de borrego 1 kg $780, taco de barbacoa $33, menudo chico $116, quesabirria $55), y siempre los menús de la mañana y de la tarde.
3. Botón **"Reservar mesa para el sábado 3 de octubre"** (la próxima fecha de ese día) que abre WhatsApp con el día, la fecha y huecos para personas y hora.

Sale del negocio: son sus días, su horario, su comida corrida, sus especiales y sus precios. No se inventa a qué hora cambia el menú de la mañana al de la tarde (el sitio no lo dice: pendiente).

## Estructura
1. Encabezado: logo, navegación (Favoritos, ¿Qué día vienes?, Menú, Visítanos) y "Reservar mesa".
2. Portada: H1 "Gran Familia" con "Cocina potosina de rancho", su frase "Donde la tradición se sienta a la mesa." y su párrafo, WhatsApp y "Ver el menú"; la foto de la mesa; tres datos: abierto diario de 8 a 6, comida corrida lunes a viernes, barbacoa sábado y domingo.
3. Favoritos de la casa: "Dos momentos, el mismo sazón de hogar." con sus 8 favoritos (4 de la mañana, 4 de la tarde) en un mosaico de fotos de distinto tamaño, no tarjetas iguales.
4. **¿Qué día vienes?** (mantel).
5. El menú completo en dos pestañas (Mañana y Tarde), con las notas explicadas.
6. Nuestra esencia: sus dos párrafos, con la foto del guisado servido.
7. Visítanos: dirección, horario, WhatsApp, teléfono y Google Maps; "Sé parte de la familia."
8. Pie con el logo blanco y su frase; barra fija en el celular (Reservar, Llamar, Cómo llegar).

## Revisión contra lo genérico (segunda pasada)
- Rojo, crema y serif es la "fonda" por defecto. Se ancla en lo suyo: el **mantel a cuadros** de su foto aparece una sola vez, como campo del elemento memorable; la placa de su logo es el único adorno del encabezado y del pie.
- Se quitan: las etiquetas pequeñas en mayúsculas ("DESCUBRE NUESTROS SABORES", "NUESTRA ESENCIA", "LO QUE DICEN DE NOSOTROS", "SOLO FINES DE SEMANA"), la marca de agua del logo sobre la portada, el zoom lento de la foto, las entradas animadas de cada texto, el acercamiento de las fotos al pasar el ratón, los botones en mayúsculas espaciadas y las cuatro tarjetas de testimonios.
- Los favoritos no van en ocho tarjetas iguales: mosaico con una foto grande por momento del día.
- El menú no va en tarjetas: renglones con puntos hasta el precio, como una carta impresa.
- Una sola cosa se mueve: el plato elegido sube un poco; quieto con `prefers-reduced-motion`.
- Sin reseñas: las cuatro del sitio no se pueden comprobar y mencionan platillos que no están en su menú (ver `CAMBIOS.md`).
