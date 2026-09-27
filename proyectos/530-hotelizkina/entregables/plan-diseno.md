# Hotel Izkina: plan de rediseño (método 1.1)

**Sitio original:** https://izkina.com/ (sitio propio en PHP, CodeIgniter con una plantilla de Bootstrap para hoteles; páginas Inicio, Habitaciones y una por habitación, Galería, Historia, Reservaciones, Contacto, Términos y Condiciones y versión en inglés). Tiene **su propio motor de reservas** en `/reservaciones` (formulario con fechas, adultos y niños que se envía por POST a `/reservaciones/buscar`, y "Consultar Reserva Existente" con código), y cada página de habitación trae su propio formulario de reserva.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/images/` y `sitio/assets/uploads/`), textos en `investigacion/crudo.json` (inicio, reservaciones, habitaciones, galería e historia), contacto en `investigacion/resumen.json`.

**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- Las cuatro páginas de habitación (`/habitaciones/pajaro-azul`, `/paloma`, `/tukan` y `/jilguero`): el texto de cada una (dónde está, qué la distingue) y que Paloma tiene además un sofá cama individual.
- `/terminos-y-condiciones`: check-in 15:00 y check-out 12:00, identificación oficial y confirmación por escrito.
- `/contacto`: horario de atención (Lun - Vie 9:00 am–6:00 pm; Sab - Dom 11:00 am–4:00 pm), el texto "En el corazón de la isla, donde todo sucede" y las coordenadas de su mapa incrustado (20.5080919, -86.9496562).
- Solo para `OPORTUNIDADES.md`: el inicio (responde 200 y coincide con `original.html`, salvo los tokens de sesión), `/reservaciones` (con y sin fechas en la dirección), `/galeria`, `/historia`, `/robots.txt`, `/sitemap.xml` (404) y `/language/set/en`.
- No se bajó ninguna imagen nueva.

**Rubro:** casa hotel de 4 habitaciones (cada una con nombre de pájaro) en una casa antigua restaurada, con alberca de chukum en área compartida y cocina común, en Calle Dr. Adolfo Rosado Salas 200, Centro, Cozumel, Quintana Roo, a pasos del malecón. Tipo para Google: `Hotel`.

**Idioma:** el sitio está en español (con versión en inglés). El rediseño va en español.

**Sobre las fotos (revisadas antes de construir):** el clon trae **cuatro fotos propias de 1600 px**, una por habitación (`uploads/rooms/`). Sus metadatos dicen "Roksana Rita Photography, © 2025" con la página de la fotógrafa en pic-time: son fotos de una sesión profesional, no de Google Maps (no traen EXIF de Picasa ni de Google) ni de otro negocio, y no traen marcas ni metadatos de IA. Además hay **seis miniaturas de 210 px** de la casa (`images/estancia/`: alberca, banca con mosaicos, patio con sala, fruta, bebidas y un adorno de pared), el logotipo en café y en arena, el logo sobre arena (`about-us-1.jpg`, 720 px) y dos gráficos del tema. **Cuatro fotos propias con calidad alcanzan**; las miniaturas solo sirven en tamaño chico (se usan cuatro a 210 px, sin agrandar). No están en el clon: las tres fotos del carrusel de portada (el clon las pide al sitio real), las 30 de la galería y las cuatro de la historia (postal, antes, durante y ahora). Quedan pendientes; no se descargaron.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 3,914 px y móvil 6,225 px, desborde 0, 21 imágenes, 0 rotas, 0 errores de consola y 0 recursos fallidos, **ningún H1** (igual que el sitio) y una imagen sin `alt`.
- Se ve bien porque **depende del sitio real**: las tres fotos del carrusel de portada y los scripts (`core.min.js`, `script.js`) se piden a izkina.com; sin internet, la portada queda sin foto y el carrusel, el selector de fechas y la galería de "Estancia" no funcionan.
- Las miniaturas de "Estancia" son de 210 px y el carrusel las muestra en círculo, una a la vez, con los mismos seis textos repetidos dos veces.
- Fotos: copias `.webp` de las 4 fotos de habitación, 4 miniaturas y el logo (0.96 MB → 0.35 MB) y un favicon del logotipo en arena, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar directo**: su motor (`/reservaciones` y el formulario de cada habitación) a un toque, y WhatsApp para dudas.
2. **Elegir habitación**: las cuatro cuestan casi lo mismo ($2,000 o $2,500) y tienen la misma capacidad (2 adultos); lo que las distingue está escondido en su página de detalle: dónde está cada una y con qué despiertas (la alberca, la luz de la esquina, la cocina para madrugar, el patio).
3. Que se entienda **qué es Izkina**: una casa antigua restaurada, con chukum, mosaicos hechos a mano, puertas antiguas como cabeceras y lámparas de Michoacán; "Izkina" significa "esquina" en maya yucateco.
4. Ser **honesto** como ya lo es el sitio: el ruido del centro algunos fines de semana; check-in y check-out; cómo llegar.

Público: parejas y viajeros que buscan una casa con carácter en el centro de Cozumel, buzos (el texto de Tukan dice que es "el preferido de los buceadores") y quien quiere caminar al malecón.

## Dirección visual (primera pasada)
Una casa de chukum: paredes crema y arena de sus fotos, el café del logotipo, el verde salvia de la sección "IZKINA" de su sitio y el agua de su alberca.

| Token | Color | Uso |
|---|---|---|
| `chukum` | `#f3ebdf` | Fondo: las paredes de chukum de las fotos |
| `papel` | `#fbf7f1` | Bandas claras alternas |
| `tinta` | `#2b2118` | Títulos (13.3:1 sobre `chukum`) y banda oscura de contacto |
| `texto` | `#5a4a3b` | Texto corrido (7.2:1 sobre `chukum`, 7.9:1 sobre `papel`) |
| `cafe` | `#7a5f3c` | Botones con texto blanco (5.95:1) y enlaces (5.0:1 sobre `chukum`); oscurecido del café del logo `#8a7049` (3.95:1, solo en el logo) |
| `arena` | `#d7a46f` | El arena del logotipo y de su CSS: detalles, y texto sobre `tinta` (7.1:1) |
| `salvia` | `#a3b5aa` | La banda verde de "IZKINA": solo con texto `tinta` (7.3:1) |
| `agua` | `#1f6468` | El agua de la alberca y el turquesa de las lámparas de Tukan (de `#267377` de su CSS): botones con blanco (6.8:1) y enlaces (5.8:1 sobre `chukum`) |
| pájaros | azul `#2f5f9e`, gris `#8d8f99`, negro y naranja `#e8892a`, amarillo `#e7c33a` | Solo en los dibujos de los pájaros |

**Tipografía:** las de su sitio (`style.css`): **Oswald** en títulos (en el sitio va en mayúsculas; aquí en tipo normal) y **Lato** en texto, de @fontsource, solo latino.

## Elemento memorable: "¿Con qué quieres despertar?"
El hotel tiene cuatro habitaciones con nombre de pájaro, y su logo, el Giglio, "evoca las cuatro esquinas del mundo" (su texto). Las cuatro habitaciones valen casi lo mismo; lo que las hace distintas es **con qué despiertas**, y eso lo dice cada página de detalle:
- Pájaro Azul: "Despiertas y el agua está ahí" (planta baja, ventanal directo a la alberca).
- Paloma: "La más espaciosa. La más luminosa. La de la esquina" (dos ventanales).
- Tukan: "El preferido de los buceadores", junto a la cocina compartida, "perfecta para quien madruga sin querer despertar a nadie".
- Jilguero: ventanal al patio interior, "silenciosa, luminosa y profundamente acogedora".

El elemento: un dibujo cuadrado con una cruz escalonada al centro (inspirada en el Giglio) y **un pájaro en cada esquina**, dibujado con su color (pájaro azul, paloma gris, tucán con su pico naranja, jilguero amarillo), cada uno con un pequeño signo de lo que ve al despertar (ondas de agua, dos ventanas, una cafetera, una hoja del patio). Cuatro botones: "Con el agua a un paso", "Con luz todo el día", "Temprano, sin despertar a nadie" y "Con el silencio del patio". Al elegir uno, un camino se traza desde el centro hasta su esquina, el pájaro se ilumina (los demás se atenúan) y se abre la ficha de esa habitación: su foto, su frase y su texto, precio por noche, cama, capacidad y dos botones con la habitación ya escrita: "Reservar en línea" (su página de habitación, con el formulario de su motor) y "Preguntar por WhatsApp". También se puede tocar el pájaro directamente. Se aclara que es un dibujo simbólico y no el plano de la casa.

Sale del negocio: los nombres de pájaro, el significado de "esquina", el Giglio y los textos de sus habitaciones; no inventa nada. No repite ningún elemento anterior: no es selector de personas, camas, noches ni filtros de puertas; se elige por el despertar.

## Estructura
1. Encabezado: logo, navegación (Habitaciones, La casa, Historia, Cómo llegar) y "Reservar ahora" (su motor).
2. Portada: "Casa hotel en el centro de Cozumel", H1 "Hotel Izkina", su frase "Tu refugio elegante y acogedor en el Caribe Mexicano.", "Reservar ahora" y WhatsApp; foto de Tukan y cuatro datos (4 habitaciones con nombre de pájaro, desde $2,000 por noche, check-in 15:00 y check-out 12:00, a pasos del malecón).
3. Izkina significa esquina (banda salvia): su texto y el del Giglio, con el logo.
4. **¿Con qué quieres despertar?** (las habitaciones).
5. La casa: chukum, alberca en área compartida, cocina común, fruta fresca cada mañana, renta de auto o moto (WhatsApp), con cuatro miniaturas.
6. La historia de Izkina: su texto recortado.
7. Antes de reservar: check-in y check-out, identificación, confirmación por escrito, el aviso del ruido del centro (suyo) y enlace a sus términos.
8. Cómo llegar y contacto (banda oscura): "En el corazón de la isla, donde todo sucede", dirección, Maps, teléfono, WhatsApp, correo, Instagram, horario de atención y "Consultar mi reserva".
9. Pie y barra fija en el celular: Reservar, WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el carrusel de portada y el de "Estancia" (que repite sus seis textos dos veces), la palabra gigante "BIENVENIDOS" de fondo, los títulos en mayúsculas, las cuatro tarjetas iguales de habitación (pasan al despertar) y el formulario de fechas de la portada (no envía adultos ni niños: se manda al motor).
- No se usan: "Hotel de lujo con las mejores vistas y comodidades" (su description; no coincide con una casa en el centro que avisa del ruido) ni la cita "La calidad nunca es un accidente…" (va firmada "John Ruski").
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios.
- Una sola cosa se mueve: el camino al pájaro elegido; quieto con `prefers-reduced-motion`.
- Sin inventar: sin tamaño en m² (el sitio lo deja vacío), sin reseñas, sin fotos de la alberca grande ni de la galería (no están en el clon), sin desayuno incluido por habitación (el sitio solo pone un ícono "breakfast" en tres fichas; pendiente), sin política de niños (el sitio dice "0 Niños"; pendiente).
- Sin mapa incrustado ni scripts de terceros: un botón que abre Google Maps.
