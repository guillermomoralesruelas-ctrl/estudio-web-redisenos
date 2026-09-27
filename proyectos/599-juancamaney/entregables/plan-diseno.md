# Juan Camaney: plan de rediseño (método 1.1)

**Sitio original:** https://juancamaney.com/ (WordPress con el tema "Shaver", WPBakery, Revolution Slider y WooCommerce; páginas Inicio, Reservar, Barbería, Menú de servicios, Tienda, Franquicias y noticias). Reservas con Booksy (app), WhatsApp y teléfono.

**Materia prima:** `investigacion/crudo.json` (Inicio, Reservar, Barbería, Servicios y Tienda) y `investigacion/resumen.json` (WhatsApp 999 902 9264, teléfono 999 131 7745, barberia@juancamaney.mx, Instagram, Facebook y YouTube). El clon es solo el inicio; sus imágenes están en `sitio/assets/wp-content/uploads/`.

**Comprobado en vivo** (curl al sitio real el 2026-09-27: Inicio, Servicios, Barbería, Tienda y Franquicias; la página Reservar respondió una vez y otra cortó la conexión): mismos precios del inicio ($325, $295, $325), el menú completo de servicios es una imagen, el WhatsApp de la barbería lleva el mensaje "Quiero saber el precio de los producto", ningún teléfono tiene enlace `tel:`, su JSON-LD es `Organization`/`Article` y la página de Servicios sigue listando sucursales en La Isla Mérida y Paseo Interlomas (CDMX). No se bajó ninguna imagen nueva.

**Rubro:** barbería tradicional con bar ("bar & barbería", "barbería social"), billar, pantalla de 80 pulgadas, boleo de calzado y boutique de productos propios, en Plaza Urban Center, Mérida. Tipo para Google: `HairSalon` (schema.org no tiene un tipo de barbería).

**Sobre las fotos (revisadas antes de construir, hoja de contactos con sharp):** el clon trae **cinco fotos propias usables**: sus productos con su etiqueta de la calavera de sombrero (pomadas Imperial, Burguesa y Revolucionaria y aceites Cítrico y Maderas, 720 px, fondo claro). Sin EXIF de Google/Picasa ni marcas de IA. También su calavera (150 px) y la ilustración de "¿Por qué Juan Camaney?". **No se usan:** el sillón Chesterfield "de entrada" y el sillón de barbero de "servicios" (muy oscuros y con cara de foto de banco; su sitio usa otras de Shutterstock, así que no se puede asegurar que sean de su local), el sillón recortado y los grabados antiguos (clip-art) y las texturas de tapiz (de banco, una con número de Pixabay). Las fotos de su local ("Fantásticas instalaciones") están en otra página que el clon no trae: pendiente pedirlas.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): en escritorio la captura sale en blanco (el tema oculta la página hasta que termina su JavaScript), en móvil alto 0; 60 errores de consola (certificados, recursos del dominio real) y 2 CSS con 404.
- Fotos: copias `.webp` de 7 imágenes (1.95 MB → 0.25 MB) y favicon con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Agendar**: Booksy a un toque y WhatsApp con el servicio escrito.
2. Dejar claros **servicios y precios** (hoy los tres principales están en el inicio y el resto en una imagen).
3. Contar que **no es solo barbería**: barra, billar, pantalla, boleo; "no necesitas un corte para visitarme".
4. Vender sus productos (tienda en línea, Mercado Libre, WhatsApp).
5. Dónde están y cuándo abren.

## Dirección visual (primera pasada)
Club de caballeros de noche: cuero, dorado y papel de etiqueta antigua, como sus latas.

| Token | Color | Uso y contraste (calculado) |
|---|---|---|
| `noche` | `#15100c` | Encabezado, portada, rockola y pie |
| `cuero` | `#241a13` | Secciones "El club" y "¿Por qué?" |
| `oro` | `#d6ae4c` | El dorado de su tema. Sobre `noche` 9.0:1, sobre `cuero` 8.1:1; botones con texto `noche` 9.0:1 |
| `oro-hondo` | `#7a5a14` | Enlaces sobre `crema` 5.4:1 |
| `crema` | `#f4ecdc` | Fondo claro |
| `hueso` | `#efe4cf` | Texto principal sobre `noche` 15.0:1 y `cuero` 13.5:1 |
| `polvo` | `#c9bba3` | Texto secundario sobre `cuero` 9.0:1 |
| `tinta` | `#2b2119` | Texto sobre `crema` 13.4:1 |
| `vino` | `#8a3b32` | Precios y etiqueta del disco; sobre `crema` 6.5:1 |

**Tipografía:** las familias que ya carga su tema: **Rye** (letrero del Oeste) solo en el nombre, el H1 y la etiqueta del disco; **Playfair Display** (700 e itálica) en títulos; **Trocchi** en texto. De @fontsource, solo latino.

## Elemento memorable: "La rockola de la casa"
Su inicio tiene una sección "Selección musical" con **cinco listas de Spotify propias** (Rock, Old School, Fonógrafo, Rock & Roll y Rock en Español) y termina con una invitación: *"Si crees que hay una pieza musical icónica que hace falta en mi lista, házmelo saber"*. Pero son cinco palabras sueltas en un rincón y no hay forma de "hacérselo saber".

El elemento: una **rockola dibujada en SVG** (gabinete de madera en arco, vidrio con el disco, brazo del tocadiscos, tubos de luz con burbujas y la placa "Juan Camaney"). Eliges uno de sus cinco discos y la etiqueta vino del disco cambia a ese nombre, el brazo baja y el disco gira; debajo, "Escuchar la lista en Spotify" (enlace a su lista real). Luego, **"¿Le falta una canción?"**: escribes canción y artista y el botón abre WhatsApp con "a su lista Old School le hace falta esta pieza: …", que es justo lo que su sitio pide. Y **"Y ya que suena, ¿a qué vienes?"**: solo a pasar el rato o uno de sus tres servicios con precio, con el mensaje a la vista ("quiero agendar un corte de cabello ($325)… que suene su lista Old School") y Booksy al lado.

Sale del negocio: son sus listas, su frase, sus servicios y sus precios; el bar-barbería es un lugar para pasar el rato y la música es parte de eso. No repite nada anterior: no es un selector de habitaciones, una báscula, un plano, un checklist ni un reloj; es su propia rockola. El giro del disco y las burbujas se detienen con `prefers-reduced-motion` (y hay un botón "Detener el disco").

## Estructura
1. Encabezado: calavera y "Juan Camaney", navegación y "Reservar" (Booksy).
2. Portada: H1 "Bar & barbería", su concepto (barberías londinenses, club), Booksy y WhatsApp, horario y dónde; la Pomada Imperial como imagen.
3. Servicios: los tres con precio en renglones de menú con puntos, WhatsApp por servicio y enlace a su menú completo.
4. El club: "No necesitas un corte para visitarme", barra, pantalla de 80", billar, boleo y boutique.
5. **La rockola de la casa.**
6. Tienda "Creados artesanalmente": tres pomadas (una destacada), dos aceites con foto y tres productos sin foto en lista, cada uno con WhatsApp y tienda en línea; Mercado Libre.
7. ¿Por qué Juan Camaney? (su texto) y una línea de franquicias.
8. Visítanos: dirección, Google Maps, horario, teléfono, WhatsApp, correo y redes.
9. Pie y barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el carrusel de logos "Amigos" (repetido cinco veces), los videos de YouTube, el feed de Instagram, el newsletter, el buscador, el texto de relleno SEO de la página Reservar ("reserva con los mejores barberos en Mérida" repetido) y el "¡Muy pronto!" de la barbería rodante.
- Sin etiquetas en mayúsculas sobre las secciones (su sitio las usa en todas: "Menú de / SERVICIOS"), sin numeración, sin puntos medios.
- Sin filas de tarjetas iguales: servicios como menú con renglones de puntos, el club como lista con filete dorado, la tienda con una pomada destacada, dos en par, dos frascos y el resto en lista.
- Solo se mueve la rockola; nada entra con animación al hacer scroll.
- Sin inventar: sin reseñas, sin nombres de barberos, sin precios del menú en imagen, sin descripciones de las listas (solo sus nombres). "Sanitizante" y "Anticaída" no se usan (afirmaciones de salud); se dicen "spray para la barba" y "fijación fuerte" (de su propia URL).
- Sin mapas, videos ni scripts de terceros: Booksy, Spotify y Maps son enlaces.
