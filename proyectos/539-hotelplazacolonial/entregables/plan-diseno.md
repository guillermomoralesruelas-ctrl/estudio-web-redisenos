# Hotel Plaza Colonial: plan de rediseño (método 1.1)

**Sitio original:** https://www.hotelplazacolonial.com/
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/uploads/`), textos de 5 páginas en `investigacion/crudo.json` (inicio, /habitaciones, /habitaciones-2/, /instalaciones-2/, /contacto-2/), contacto en `investigacion/resumen.json` y HTML en `investigacion/original.html`. Hallazgos comprobados en vivo con `curl` el 2026-09-27 (el sitio responde desde la nube).
**Rubro:** hotel de ciudad en casona colonial. **Ciudad:** Campeche, Campeche (Calle 10 No. 15, Centro Histórico).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-27): 4,309 px en escritorio y 6,404 px en el celular, 0 desborde, 0 imágenes rotas, 0 H1, 37 errores de consola y 4 recursos fallidos (404 de scripts del tema; `jQuery is not defined` y `wp is not defined` porque su JS no carga en el clon; los `ERR_CERT_AUTHORITY_INVALID` son del proxy de la nube, no del sitio).
- A ojo: el slider de la portada (Revolution Slider 5.2.5.4) queda vacío en el clon y el formulario "¡Reserve ahora!" pierde su calendario (flatpickr desde unpkg).

## Qué tiene que lograr el sitio
1. Que quien busca hotel en el Centro Histórico de Campeche elija fechas y llegue a **su motor de reservas** (GetABed, `hotelplazacolonial.hpaq.me/rooms.php`) con las fechas ya puestas.
2. Que pueda preguntar por una habitación concreta (Jr. Suite con balcón o estándar) por WhatsApp o por teléfono (ext. 305, reservaciones).
3. Ubicarlo y ver qué hay a pasos: sus 5 recomendaciones (Malecón, baluartes, Calle 59, luz y sonido, Museo de Arquitectura Maya).

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| amarillo | #e0a851 | El amarillo de su fachada, muestreado de `HotelPlazaColonial206.jpg` (promedio de 3,808 puntos). Muro del dibujo y fondo de "¡Reserve ahora!". Noche encima 7.09:1; tinta 7.06:1 |
| azul | #1587a8 | El azul de sus postigos, muestreado de la misma foto. Solo en el dibujo y viñetas (3.85:1 sobre cal, arriba del 3:1 de gráficos) |
| azulhondo | #0e6480 | El mismo azul, más hondo, para botones y enlaces. Blanco encima 6.66:1; sobre cal 6.18:1 |
| cal | #fbf6ec | El blanco de cal de cornisas y marcos. Fondo general. Tinta encima 13.91:1; gris 5.72:1 |
| noche | #1c2830 | El cielo del atardecer de `slide1.jpg` y la herrería de los balcones. Fondo del elemento, pie. Cal encima 15.05:1 |
| tinta / gris | #24272c / #5c626a | Texto principal y secundario (gris sobre blanco 6.16:1) |

**Tipografía:** su logo es un monograma "HP" en caligrafía y su tema usa Roboto, Patua One y PT Sans Narrow (genéricas). Títulos en Cormorant Garamond (clásica, con el trazo contrastado de la caligrafía del logo); texto en Inter. Con @fontsource, solo latino.

## Elemento memorable
**"Abre una ventana"**: su propia frase —"su inconfundible fachada amarilla y balcones con ventanas azules"— hecha interfaz. La fachada se dibuja en SVG con sus colores reales (muro amarillo, cornisa y marcos de cal, herrería negra, postigos azules de tablillas y la placa redonda "Plaza Colonial" junto a la puerta, como en su foto). Cada hueco abre una parte real del hotel: tocas el **balcón** y sus postigos se abren (giran sobre la bisagra) y se enciende la luz de dentro: aparece la **Jr. Suite** ("Balcony with view" en su sitio) con su foto, su texto y su lista de amenidades; la **ventana** alta abre la Habitación estándar, la **puerta** la recepción, la **ventana baja** la sala y los servicios, y el **portón** la piscina (09:00 a 20:00, toallas sin costo) y el estacionamiento gratuito 24 h. Debajo, "¡Reserve ahora!" (su título) lleva las fechas elegidas a su motor de reservas en su formato (día-mes-año) y arma el WhatsApp con la habitación que abriste y las fechas.
**Por qué no repite otros:** "¿Con qué quieres despertar?" elige habitación por lo que ves al despertar desde el logo; "plano de mesas y de jardín" es una planta; "vista al despertar" es una vista desde dentro. Aquí es la **fachada vista desde la calle**, que es la identidad del hotel, y se abre hacia adentro.
**Límite honesto:** el sitio no dice qué ventana es de qué habitación: el dibujo lo aclara ("Dibujo ilustrativo…"), y las fotos de habitación dicen "Foto de una de las habitaciones del hotel" porque el sitio no las asigna a un tipo. Sin precios: el sitio no publica tarifas (las da su motor).

## Estructura
1. Encabezado: nombre, "Campeche", enlaces (Habitaciones, A pasos del hotel, Contacto) y "Reservar".
2. Portada: H1 "Hotel Plaza Colonial, el alma de la Ciudad Amurallada" (su frase "El Alma de la Ciudad Amurallada"), su texto de bienvenida y la foto de la fachada de día.
3. Abre una ventana (el elemento), sobre fondo noche.
4. ¡Reserve ahora!: fechas → su motor; WhatsApp; reservaciones ext. 305.
5. A pasos del hotel: la fachada al atardecer y sus 5 actividades con sus textos.
6. Lo que escriben sus huéspedes: los 3 comentarios de su portada (sin inventar autores).
7. Contacto: dirección, teléfonos, correo, Google Maps, Facebook y sus 6 servicios; foto del detalle bordado.
8. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador (las actividades van sin números).
- Animar cada sección al hacer scroll: solo giran los postigos del hueco elegido (quietos con prefers-reduced-motion).
- Tarjetas idénticas: las actividades van en lista con filetes y los comentarios como citas con una línea amarilla.
- Inventar tarifas, reseñas con nombre, estrellas o premios. No se usa la imagen de la promoción "3a noche gratis": está hecha con IA (C2PA de OpenAI) y vence el 30 de septiembre de 2026.
- Ningún mapa ni script de terceros: "Cómo llegar" es un enlace a Google Maps con las coordenadas de su propio mapa incrustado.
