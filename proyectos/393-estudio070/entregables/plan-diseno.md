# Estudio 070: plan de rediseño (método 1.1)

**Sitio original:** https://estudio070.com/ (WordPress.com; páginas Inicio, Bodas, XV años, Marcas, Gastronomía, Quiénes somos, Testimonios, Contacto, Blog y varias galerías). Contacto por WhatsApp (botones en todas las páginas), correo y un formulario de Jetpack.

**Materia prima:** `investigacion/crudo.json` (Inicio, Bodas, 15 años, Productos y Alimentos) y `investigacion/resumen.json` (WhatsApp 5529694578 en todos los botones, correo estudio070mx@gmail.com, cuatro Instagram y videos de YouTube). **El clon sale en blanco**: su `sitio/index.html` tiene rotas todas las etiquetas de cierre (`</title>` quedó como `<assetsassets…/title>`), así que el navegador no pinta nada (alto 0 en el QA). Es un defecto nuestro, no del cliente; sus fotos sí están en `sitio/assets/wp-content/uploads/`.

**Comprobado en vivo** (curl al sitio real el 2026-09-27): los 7 botones de WhatsApp del inicio y los 5 de Bodas usan `api.whatsapp.com/send?phone=5529694578`, sin el 52 de México; Bodas sigue ofreciendo "25% de Descuento en nuestra preventa 2025"; la meta description dice "en Caracas y Ciudad de México"; no hay JSON-LD de negocio. No se bajó ninguna imagen nueva.

**Rubro:** estudio de fotografía y video (bodas, 15 años, embarazo y newborn, marcas, gastronomía y sesiones) en la Colonia Narvarte, CDMX. Tipo para Google: `ProfessionalService`.

**Sobre las fotos (revisadas antes de construir):** el clon trae **unas 55 fotos propias de su portafolio**, de 360 a 1200 px (una de 2500 px), de todas sus líneas: bodas (siluetas frente a un retablo, antesala en blanco y negro, bokeh nocturno), XV años, embarazo y newborn, marcas (ropa deportiva, zapatos infantiles, eventos corporativos), gastronomía (paletas, pasteles, cupcake) y retratos. Ninguna trae EXIF de Picasa o Google Maps ni marcas de IA; una lleva su marca "070". **Hay de sobra**, aunque la mayoría son chicas (unos 400×600): el diseño las usa en cuadros medianos. No se usan un desnudo artístico de embarazo ni el producto de vapeo. Su "logo" es solo un favicon de 32 px: el encabezado usa el nombre en texto, como su propio sitio.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): **página en blanco** en escritorio y móvil (alto 0, 0 H1, 0 imágenes) y un recurso con 404, porque el HTML del clon quedó roto.
- Fotos: copias `.webp` de 36 fotos (2.62 MB → 1.52 MB) y su favicon, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Escribir por WhatsApp** con el servicio ya escrito (y a un número que funcione).
2. **Ver su trabajo por tipo de servicio**: novios, quinceañeras, embarazadas y marcas buscan cosas distintas.
3. Confianza: dos fotógrafos en cada evento, video y drone, cobertura ilimitada en 4K, testimonios.
4. Dónde están: Narvarte, con cita para asesoría.

## Dirección visual (primera pasada)
El cuarto oscuro con el ámbar de su tema.

| Token | Color | Uso |
|---|---|---|
| `oscuro` | `#141312` | Encabezado, portada, contacto y títulos (16.7:1 sobre `papel`) |
| `carbon` | `#2a2826` | La hoja de contactos (texto blanco 14.7:1) |
| `ambar` | `#e7a203` | Su color de acento: botones con texto `oscuro` (8.5:1), números de cuadro y círculo de lápiz (6.7:1 sobre `carbon`) |
| `ambar-hondo` | `#8a5f00` | Enlaces sobre fondo claro (5.1:1 sobre `papel`, 5.6:1 sobre blanco) |
| `papel` | `#f6f3ec` | Fondo claro |
| `texto` | `#3a3a3a` | Su gris de texto (10.3:1 sobre `papel`) |

**Tipografía:** **Syne** (700) en títulos y **Work Sans** (400 y 600) en texto, dos de las familias que carga su tema de WordPress.com; de @fontsource y solo latino.

## Elemento memorable: "La hoja de contactos"
Así revisan su trabajo los fotógrafos: un rollo impreso en una hoja, cuadro por cuadro, y un círculo con lápiz graso en la toma elegida. El elemento: seis pestañas con sus servicios (Bodas, 15 años, Embarazo y newborn, Marcas, Gastronomía, Sesiones); cada una muestra **una tira de negativo** con seis de sus fotos numeradas como cuadros (070-1A, 070-1B…), y al tocar un cuadro **se marca con un círculo ámbar** y se "revela" en grande. Al lado, su texto de ese servicio, **quién lo hace** (de su sitio: los dos en bodas y XV, Sabina en embarazo y newborn, Cristhian en marcas y gastronomía) y WhatsApp con **el mismo mensaje que ya usa su sitio en esa sección** ("Quiero conocer más sobre sus paquetes y servicios para bodas"…), ahora con el número correcto.

Sale del negocio: las fotos, los servicios, quién hace cada uno y los mensajes son suyos. Los números de cuadro son un recurso visual (070 es su nombre). No repite nada anterior: no es un selector con precios ni un mapa; es su propio portafolio presentado como material de fotógrafo.

## Estructura
1. Encabezado: "Estudio 070" en texto, navegación y WhatsApp.
2. Portada: los novios frente a la ciudad, H1 "Fotografía de bodas, 15 años y eventos", su presentación y botones.
3. **La hoja de contactos.**
4. Dos fotógrafos en cada evento: Sabina y Cristhian, 8 años, y dos testimonios.
5. Preguntas frecuentes (sus cuatro).
6. Contacto: WhatsApp, correo, Narvarte con Google Maps, Instagram.
7. Pie y barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: las galerías de mosaico sin texto, los enlaces a galerías repetidos, el formulario de Jetpack, la barra de WordPress.com ("Únete a otros 26 suscriptores"), los comentarios con pingbacks y la promoción de preventa 2025 (vencida).
- Sin etiquetas en mayúsculas, sin numeración de secciones, sin puntos medios; los únicos números son los de los cuadros de la tira.
- Solo se mueven el círculo de lápiz y el revelado de la foto grande; quietos con `prefers-reduced-motion` (el círculo se ve completo).
- Sin inventar: sin precios, sin paquetes, sin dirección exacta (solo la colonia), sin mencionar Caracas.
- Sin videos incrustados ni scripts de terceros.
