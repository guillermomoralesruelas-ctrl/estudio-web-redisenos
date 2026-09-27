# Hotel Tradicional: plan de rediseño (método 1.1)

**Sitio original:** https://www.hoteltradicional.com/ (PHP con una plantilla de Bootstrap para turismo; páginas Inicio, Hotel Tradicional `/tradicional.php`, Servicios, Paquetes, Galería, Contacto, Reserva y tres páginas legales). Reserva en línea con el motor **Nobeds** (iframe `https://nobeds.app/DirectForm/Step/1508168107` en `/reserva.php`) y botón de WhatsApp "Necesito información" con mensaje prellenado.

**Materia prima:** clon en `../sitio/` (19 imágenes en `sitio/assets/images/`), textos en `investigacion/crudo.json` (inicio, reserva, tradicional, servicios y paquetes), contacto en `investigacion/resumen.json`.

**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- `https://www.hoteltradicional.com/` responde 200 y es **igual** a `investigacion/original.html`.
- Check-in "Después de las 15:00 hrs." y check-out "Antes de las 12:00 hrs." (de `/terminos-condiciones.php`).
- El título "¡Hospédate con Nosotros!" (de `/contacto.php`).
- El enlace del motor de reservas (del iframe de `/reserva.php`); el motor responde 200.
- Solo para `OPORTUNIDADES.md`: `robots.txt`, `sitemap.xml`, `/aviso-privacidad.php`, `/galeria.php`, `/covid.php` y la página del motor.
- No se bajó ninguna imagen nueva.

**Rubro:** hotel temático de 34 habitaciones en una casona con jardín, en Calle 1ro. de Marzo 58, Barrio de La Merced, San Cristóbal de Las Casas, Chiapas, a 4 cuadras de la Catedral. Tiene una colección de más de 1300 piezas de los grupos étnicos de Chiapas (indumentaria, máscaras, arte utilitario), tours diarios, paquetes con precio "desde" y experiencias (Conventos y Mistelas, cata de pox, Panzudos Mercedarios…). Su texto de `/tradicional.php` lo llama "Hotel Misión Colonial San Cristóbal" y el escudo del logo dice "Misión Colonial" (¿mismo grupo? pendiente). Tipo para Google: `Hotel`.

**Sobre las fotos (revisadas antes de construir):** de las 19 imágenes del clon, **solo 3 son del hotel**: el pasillo con vitrinas de trajes (`slider/slider7.jpg`), una habitación con dos camas (`slider/slider2.jpg`) y el telar de cintura de su colección (`slider/slider3.jpg`, con una pantalla que dice "Hotel MC Misión Colonial"). Hay 2 de la ciudad (`scbg.jpg`, un andador al amanecer, retocado en Photoshop y con apariencia de foto de banco; `dealsbg.jpg`, una multitud de noche), el logotipo, 6 logos de distintivos, 5 fotos de perfil de las opiniones y 2 gráficos del tema. Ninguna trae marcas ni metadatos de IA (las del hotel dicen "Adobe Fireworks CS6"). **Tres fotos propias alcanzan** para un rediseño digno si el diseño se apoya en la colección y los paquetes y no en una galería. Se usan las 3, el andador (con alt y pie honestos: "foto de la ciudad") y el logo. Las fotos de su galería, habitaciones, experiencias y paquetes existen en el sitio real pero el clon no las bajó (pendiente: pedírselas al hotel).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 2,314 px y móvil 3,170 px, desborde 0, **18 imágenes, las 18 rotas, 3 H1, 34 y 33 errores de consola y 33 recursos fallidos** en cada tamaño: el HTML del clon pide `css/…` e `images/…`, pero los archivos quedaron en `sitio/assets/…`. Sin estilos ni imágenes, el clon es texto plano.
- Fotos: copias `.webp` de las 4 fotos y el logo (0.98 MB → 0.39 MB) y un favicon recortado del escudo del logo, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar**: su motor Nobeds a un toque, y WhatsApp para dudas.
2. Que se entienda **qué lo hace distinto**: una casona colonial con una colección textil en sus pasillos, a 4 cuadras de la Catedral.
3. **Vender sus paquetes y tours**: hoy son seis tarjetas con listas iguales y ningún botón para preguntar por uno.
4. Cómo llegar, llamar, check-in y check-out.

Público: turistas nacionales y extranjeros que visitan San Cristóbal (parejas, familias, grupos) y quieren conocer Chiapas desde la ciudad.

## Dirección visual (primera pasada)

| Token | Color | Uso |
|---|---|---|
| `cal` | `#f7f1e6` | Fondo: el encalado de la casona |
| `papel` | `#fffbf4` | Bandas claras alternas |
| `tinta` | `#2b1f1a` | Títulos (14.2:1 sobre `cal`) |
| `texto` | `#5a4a40` | Texto corrido (7.5:1 sobre `cal`) |
| `naranja` | `#cc7100` | El naranja del logotipo: solo detalles y gráficos (3.2:1, no se usa en texto chico) |
| `ocre` | `#8f4a00` | Botones con texto blanco (6.7:1) y enlaces (5.9:1 sobre `cal`) |
| `anil` | `#25285e` | El añil del brocado: bandas oscuras de la colección y contacto (blanco 13.6:1) |
| `oro` | `#e9b35f` | Detalles y botón sobre añil (7.2:1) |
| `grana` | `#a3243b` | La grana cochinilla: acento en títulos y precios (6.5:1 sobre `cal`) |
| `morado`, `jade` | `#6e3f8f`, `#2f7d6d` | Solo en los motivos de la faja |

**Tipografía:** las de su sitio (`style.css`): **Josefin Sans** en títulos y **Poppins** en texto, de @fontsource, solo latino.

## Elemento memorable: "Teje tu viaje por Chiapas"
El hotel se define por el arte textil de Chiapas y vende paquetes que combinan noches en el hotel con tours. El elemento une las dos cosas: **cada paquete se dibuja como una faja tejida en un telar de cintura** (el mismo telar de su foto).

1. Seis botones, uno por paquete (Chiapas Mágico, Chiapas en 3 Días, Bellezas Naturales de Chiapas, Luna de Miel, Selva Misteriosa, Todo Chiapas).
2. La faja se teje de izquierda a derecha desde el palo del telar: **una franja añil con luna por cada noche** (en Todo Chiapas, las 2 noches en Palenque en otro color), una franja de puntos para los desayunos, **un motivo por cada tour** (zigzag para el Sumidero, ondas para Montebello, grecas escalonadas para Palenque, rombos para Chamula y Zinacantán, dientes para Bonampak y Yaxchilán), la comida en la selva o la decoración con vino, y **los flecos: los souvenirs de obsequio**.
3. Al lado, el nombre, el precio "desde" por persona o por pareja, cuántas noches y tours trae, y la lista de lo que incluye con su muestra de color (al pasar el mouse por un renglón se resalta su franja). Botón "Preguntar por este paquete" a WhatsApp con el paquete y el precio escritos.
4. Debajo, **sus cinco tours diarios** con el mismo motivo de cada circuito, cada uno con su WhatsApp.

Sale del negocio: sus paquetes y circuitos reales, con sus textos y precios, y su identidad textil. No inventa nada: los motivos son geométricos y se aclara que no reproducen piezas de su colección; el número de franjas sale de los renglones de cada paquete. No repite ningún elemento anterior (no es selector de camas, reloj, mapa, báscula, cuenta ni vista).

## Estructura
1. Encabezado: logo, navegación (El hotel, La colección, Paquetes y tours, Experiencias, Contacto) y "Reservar ahora" (motor).
2. Portada: H1 "Hotel Tradicional San Cristóbal", su ubicación, "Reservar ahora" y "Necesito información"; la foto del pasillo con vitrinas y cuatro datos (34 habitaciones, más de 1300 piezas, 4 cuadras de la Catedral, check-in y check-out).
3. Bienvenidos: su texto, su frase entre comillas, la foto de la habitación, los servicios y el check-in.
4. La colección (banda añil): "Hotel temático, un concepto diferente", la foto del telar, "+1300" y las tres salas.
5. **Teje tu viaje por Chiapas** y los tours diarios.
6. Experiencias exclusivas (8).
7. Opiniones de nuestros clientes (4, recortadas).
8. Descubra San Cristóbal, con la foto de la ciudad.
9. Compromiso ambiental (seis grupos plegables) y los distintivos que publica.
10. Contacto (banda añil) y pie con sus enlaces legales.
11. Barra fija en el celular: Reservar, WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- La plantilla de turismo del sitio (rojo `#D60D45` y azul `#005294`) no es de la marca: se deja y se construye con el naranja de su logo y los colores de sus textiles.
- Se quitan: los carruseles (portada, distintivos, experiencias y compromiso ambiental, que repiten sus elementos dos o tres veces), las seis tarjetas de paquetes idénticas (pasan a la faja), los tres H1, las fotos de perfil de las opiniones y los logos de distintivos (quedan como texto).
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios; los textos en mayúsculas del sitio pasan a tipo normal.
- Una sola cosa se mueve: la faja al tejerse; quieta con `prefers-reduced-motion`.
- Sin inventar: no hay tipos de habitación ni tarifas por noche (el sitio no los publica; el motor cambia por fecha), ni precios de tours o experiencias, ni fechas de vigencia de los paquetes, ni el lugar exacto de la colección en el país (el sitio se contradice).
