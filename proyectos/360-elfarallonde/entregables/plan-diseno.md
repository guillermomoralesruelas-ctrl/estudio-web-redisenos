# El Farallón de Tepic: plan de rediseño (método 1.1)

**Sitio original:** https://elfarallondetepic.mx/ (WordPress con el tema Zakra y Elementor; cinco páginas: inicio, /historia, /menus, /gallery y /contact).
**Materia prima:** clon en `../sitio/` (45 imágenes en `sitio/assets/wp-content/uploads/`), textos y menú completo con precios en `investigacion/crudo.json` (las cinco páginas), contacto en `investigacion/resumen.json`. Para OPORTUNIDADES se descargó el sitio real con curl el 2026-09-26 (inicio, /historia, /menus y /contact) a una carpeta temporal fuera del estudio; de ahí no se tomó ningún texto nuevo para el sitio: todo lo del negocio sale de `crudo.json`.
**Rubro:** restaurante de mariscos estilo Nayarit (pescado zarandeado). **Ciudad:** Zapopan, Jalisco (Av. Niño Obrero 560, Fracc. Camino Real, zona de Chapalita). **Ojo:** a pesar del nombre, no está en Tepic: nació en Tepic en 1975 y a principios de los 80 se mudó a Guadalajara. El sitio solo publica una sucursal. No es una cadena ni un directorio: fotos propias de sus platillos.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): desborde horizontal de 1,320 px en escritorio y 2,210 px en móvil, **ningún H1**, 27 imágenes rotas en escritorio y 10 en móvil, 50 y 33 errores de consola.
- Causa de las imágenes rotas: el clon reescribió las rutas como `https://elfarallondetepic.mxassets/wp-content/...` (dominio pegado a `assets/`), así que no cargan ni del clon ni del sitio real. Los archivos sí están en `sitio/assets/wp-content/uploads/`.
- Los errores de consola son de nombres de dominio que no resuelven (la misma ruta mal armada) y de scripts de Elementor y Zakra.
- La página del clon mide más de 41,000 px de alto: los carruseles y la galería de Elementor salen desarmados, una foto debajo de otra.
- En el clon hay una foto de banco (`2019/07/shrimp-400572_1920.jpg`, nombre típico de Pixabay): **no se usa**.
- Fotos: 27 copias `.webp` (de 17.16 MB a 1.82 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Que el antojo termine en un mensaje o una llamada:** reservar mesa o pedir a domicilio (el sitio dice "Contamos con servicio a domicilio"). No hay reservas en línea: el botón "RESERVACIONES" del sitio abre Google Maps.
2. **Enseñar el menú completo con precios en la misma página** (hoy está en /menus, partido en columnas, y en un PDF).
3. Contar sus 50 años (1975, Tepic → Guadalajara) y sus estandartes: Empanadas de camarón, Piña Cantamar y Pescado Zarandeado.
4. Dirección, horario (todos los días de 12:00 a 18:00) y cómo llegar.

Público: familias y grupos de Guadalajara y Zapopan que van a comer mariscos al mediodía, clientes de hace décadas ("Por más de 10 años los he visitado", "desde hace ya unos 25 años") y quien pide a domicilio.

## Dirección visual
La brasa del zarandeado y la mesa de madera de sus fotos, con el naranja de su CSS (`#e67700`, el color que más se repite en `original.html`) y el oro del escudo del 50 aniversario.

| Token | Color | Uso |
|---|---|---|
| `crema` | `#f6efe4` | Fondo general (mantel y loza clara de las fotos) |
| `papel` | `#ece2d1` | Bloques alternos y menú |
| `carbon` | `#211a16` | Texto de títulos y fondo de la sección de la báscula (la parrilla) |
| `texto` | `#4a3f38` | Texto normal (8.9:1 sobre crema, 8:1 sobre papel) |
| `naranja` | `#e67700` | Naranja del sitio original: botones, con texto carbón encima (5.7:1) |
| `brasa` | `#a34b00` | Naranja oscuro para texto y enlaces sobre claro (5.2:1 sobre crema, 4.6:1 sobre papel) |
| `oro` | `#d9a640` | Oro del escudo: detalles sobre carbón (7.7:1) |

**Tipografía:** las del sitio original, que `original.html` pide a Google Fonts: **Cormorant Garamond** 600 y 700 (títulos) y **Lato** 400 y 700 (texto), de @fontsource y solo el subconjunto latino.

## Elemento memorable: "La báscula del zarandeado"
El pescado zarandeado, su platillo estrella, se cobra **por kilo** ($629 el kilo según su menú), igual que el pescado frito ($546 el kilo), y el pulpo y los camarones zarandeados vienen en porciones con peso (250 g, $546; 400 g, $436). Nadie sabe cuánto va a pagar por "un pescado de kilo y medio" hasta que llega la cuenta. El elemento es una **báscula de carátula**, como la del mercado, dibujada en SVG: arriba, en el plato, la foto real del platillo; abajo, la aguja marca el peso. Eliges el platillo (Pescado zarandeado, Pescado frito, Pulpo zarandeado o Camarones zarandeados) y, en los que se cobran por kilo, cuánto quieres con − y + (de ½ kg a 3 kg, de cuarto en cuarto). Si el platillo no tiene foto en su sitio (el pescado frito), el plato muestra su nombre. La aguja se mueve y aparece el total aproximado con el precio de su menú. Eliges "Para comer allá" o "A domicilio" y el botón de WhatsApp lleva todo escrito: platillo, peso y total aproximado. Sale del negocio: es un restaurante de zarandeado nayarita donde el peso decide la cuenta. Solo usa precios y pesos publicados; se avisa que el total es aproximado porque depende de la pieza.

## Estructura
1. Encabezado crema: escudo del 50 aniversario, navegación (Zarandeados, Menú, Historia, Opiniones, Visítanos) y "Llamar".
2. Portada: H1 "El Farallón de Tepic", "Excelencia y tradición en mariscos", "Sirviendo los mejores mariscos desde hace 50 años", botones WhatsApp y Ver el menú, y datos reales: todos los días de 12:00 a 18:00, Niño Obrero 560 (Chapalita, Zapopan), servicio a domicilio, desde 1975. Foto grande del pescado zarandeado.
3. Los zarandeados: la báscula (elemento memorable) y, debajo, los tacos zarandeados, el salmón y los "manjares zarandeados".
4. Nuestra historia: el texto completo de /historia, la foto del pescado y pulpo zarandeados, y sus tres estandartes (Empanadas de camarón y Piña Cantamar con foto; el Pescado Zarandeado remite a la báscula). Calidad, tradición y sabor como texto corrido.
5. Menú completo en pestañas: Los sabrosos (los platillos con foto del inicio del sitio), Aguachiles y cócteles, Ostiones y tostadas, Pulpos y camarones, Los incomparables, Zarandeados e Infantil. Precios con línea punteada; enlace al PDF del menú 2025.
6. Opiniones: las tres del sitio, con nombre y sin foto.
7. Galería: 8 fotos de platillos (sin la foto de banco).
8. Visítanos en carbón con la foto de la mesa de fondo: dirección, horario, teléfonos, correo (el bueno, no el del enlace roto), servicio a domicilio, Facebook, Instagram y "Cómo llegar en Google Maps".
9. Pie y barra fija en el celular (WhatsApp, llamar y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin la plantilla de restaurante oscuro y dorado con carrusel: el fondo es claro como sus fotos, y el único bloque oscuro es la báscula (la parrilla) y el contacto.
- Sin etiquetas pequeñas en mayúsculas sobre cada sección ni numeración; los títulos del sitio en mayúsculas raras ("eL FARALLÓN", "gERARDO sANTOYO V.") se escriben normal.
- Los platillos de "De la casa" no van en filas de tarjetas iguales como en el inicio del sitio: van dentro del menú, como carta, con miniatura.
- Calidad, tradición y sabor no son tres tarjetas con ícono: son tres frases en el texto de la historia.
- Sin animaciones al hacer scroll; lo único que se mueve es la aguja de la báscula, y se queda quieta con `prefers-reduced-motion`.
- No se inventan precios, pesos por persona, horarios de cocina, reseñas ni sucursales. La báscula no dice "para cuántas personas alcanza" porque el sitio no lo publica.
- Sin mapa incrustado, sin Elementor ni scripts de terceros; sin Twitter (el enlace del sitio lleva a una cuenta sin confirmar).
