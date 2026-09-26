# Hotel Bravo Tepic: plan de rediseño (método 1.1)

**Sitio original:** https://hotelbravotepic.com.mx/ (sitio propio en PHP con una plantilla de Bootstrap 4 de agencia de viajes, "Concepto y diseño por AM."; sin motor de reservas: el formulario "Reserva una habitación" y el menú "Reservaciones" apuntan a `#`).
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/images/`: lobby, cuatro fotos de habitación, logotipo, dos fotos de Tepic y un fondo de palmeras; íconos en `sitio/assets/favicon/`), textos en `investigacion/crudo.json` (inicio, /acerca-de, /habitaciones y /contacto) y contacto en `investigacion/resumen.json`. Los cuatro números de "Acerca de Tepic, Nayarit" salen como "0" en `crudo.json` (son contadores animados); sus valores reales (1531, 2274, 471 y 30) se tomaron del atributo `data-end-value` de /acerca-de, descargada con curl el 2026-09-26.
**Rubro:** hospedaje, hotel de ciudad económico. **Ciudad:** Tepic, Nayarit (Calle Bravo #186 Pte., Centro).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): sin desbordes, pero **ningún H1** (el sitio tampoco tiene), 6 imágenes rotas en escritorio y en móvil (todas: logotipo, lobby y las cuatro habitaciones), 38 errores de consola en escritorio y 34 en móvil, y 35 y 31 recursos fallidos.
- La causa: el `index.html` del clon pide `images/…`, `styles/…` y `plugins/…` en la raíz de `sitio/`, pero los archivos se guardaron en `sitio/assets/`. Por eso la página sale sin estilos (Bootstrap, Owl Carousel, Font Awesome y `main_styles.css` dan 404), sin fotos y con el texto en columna.
- Los scripts (jQuery, GreenSock, ScrollMagic, datepicker, API de Google Maps, SDK de Facebook y su chat) no se descargaron o fallan fuera del dominio.
- `habitacion-familiar.jpg` es **el mismo archivo** que `habitacion-doble.jpg` (mismo MD5, igual en el sitio real): no hay foto propia de la Familiar ni de sus 6 camas individuales. No se descarga nada nuevo; queda pendiente.
- Las fotos se sirven como copias .webp (de 2.16 MB a 0.84 MB) con `rediseno/fotos-web.mjs`.

## Qué tiene que lograr el sitio
1. **Reservar llamando o escribiendo.** El hotel no tiene motor de reservas: hoy se reserva por teléfono ((311) 212-9565 y 212-0327) o por correo. El sitio nuevo tiene que hacer que esa llamada o ese mensaje salgan en un toque, ya con la habitación elegida.
2. Que el huésped elija bien su habitación: las cuatro se distinguen por **las camas** (1 matrimonial, 1 king size, 2 matrimoniales o 6 individuales) y por **el clima** (ventilador o aire acondicionado), y eso hoy está en listas de viñetas en otra página.
3. Vender sus dos promociones (una noche gratis al reservar 6 noches seguidas y el salón para negocios a $150 por hora) y dejar claro que es un espacio libre de humo.

Público: viajeros de trabajo que llegan al centro de Tepic, familias de paso hacia la costa (San Blas está a 30 minutos) y personas que llegan en autobús (a 15 minutos de la central camionera).

## Dirección visual
Hotel de ciudad sencillo y cuidado: el vino del logotipo, el crema de sus paredes y el azul y arena de las colchas a cuadros que salen en todas las fotos de habitación.

| Token | Color | Uso |
|---|---|---|
| `crema` | `#f8f3e6` | Fondo general (las paredes de las fotos) |
| `vino` | `#450022` | Color de la marca (logotipo y `main_styles.css`): encabezado de secciones oscuras, botón principal y títulos |
| `vino-2` | `#64133a` | Hover del botón y bordes sobre vino |
| `colcha` | `#2e3a8c` | Azul de las colchas: camas del dibujo, promociones y enlaces activos (blanco encima: 9.6:1) |
| `arena` | `#e3d1a0` | Arena de las colchas: cuadros de las camas y fondo de la ficha elegida (tinta encima: 12:1) |
| `tinta` | `#231a1e` | Títulos y texto fuerte; texto normal `#4d4347` (8.3:1 sobre crema) |

**Tipografía:** Montserrat, la del sitio original (`main_styles.css` la pide a Google Fonts), de @fontsource y solo el subconjunto latino: 400, 500, 600 y 700.

## Elemento memorable
**"¿Cómo quieres dormir?"**: las cuatro habitaciones se eligen por lo que de verdad las distingue según su propio sitio: las camas y el clima. Cada habitación se dibuja vista desde arriba, con sus camas en proporción (individual, matrimonial y king size en sus medidas estándar) y la colcha a cuadros azul y arena de sus fotos, más un ícono de ventilador o de aire acondicionado. Un filtro deja ver todas, solo las que tienen aire acondicionado o solo las de ventilador. Al tocar una, se abre su ficha: foto real (la Familiar no tiene; se dice), precio "desde" por noche, lo que incluye y dos botones que ya llevan la habitación: "Pedir disponibilidad por WhatsApp" y "Llamar para reservar". Debajo, su promoción real: "Recibe una noche gratis al reservar 6 noches consecutivas". Sale del negocio: la Familiar con 6 camas individuales es poco común, y en Tepic hace calor, así que el aire acondicionado decide. El dibujo es ilustrativo (el sitio no publica planos ni medidas de los cuartos) y así se avisa.

## Estructura
1. Encabezado crema con el logotipo, navegación y "Llamar (311) 212-9565".
2. Portada: "Calle Bravo #186 Pte., Centro de Tepic", el H1 "Hotel Bravo Tepic", "Hospédate y combina negocios, descanso y diversión", WhatsApp y llamar, datos reales (desde $650 MXN por noche, a 15 minutos de la central camionera, a 30 minutos de la playa en San Blas, espacio libre de humo) y la foto del lobby.
3. ¿Cómo quieres dormir? (elemento memorable), que es la sección de habitaciones.
4. Promociones en azul colcha: "¡Noche gratis!" (6 noches seguidas) y "¡Precio especial!" del salón para negocios ($150 por hora, qué incluye), con WhatsApp para cada una.
5. El hotel: "Combina negocios, descanso y diversión", su texto, y el aviso de espacio libre de humo completo.
6. Servicios: las nueve amenidades de /acerca-de con su frase.
7. Tepic: "Acerca de Tepic, Nayarit", "Lugar de piedras macizas", su texto, sus cuatro números y las dos fotos de la ciudad que están en su sitio (atardecer con el volcán y la antigua fábrica de Bellavista), con `alt` que dice que son de la ciudad.
8. Contacto en vino: dirección, teléfonos, correo, Facebook, "Reservación de habitaciones, tarifas, salones, promociones e información en general.", WhatsApp, llamar y "Cómo llegar en Google Maps".
9. Pie y barra fija en el celular (llamar, WhatsApp y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin la portada con palmeras de plantilla de viajes, sin parallax, sin carrusel y sin el formulario de fechas que no reserva (en el original solo deja elegir años).
- Sin etiquetas pequeñas en mayúsculas ni numeración; los nombres de las camas no van en mayúsculas ("1 MATRIMONIAL" pasa a "1 cama matrimonial").
- Las habitaciones no son cuatro tarjetas iguales con foto: son dibujos distintos porque las camas son distintas, y una sola ficha abierta.
- Las dos promociones no son tarjetas gemelas: la noche gratis se cuenta con siete casillas (seis pagadas y una gratis); el salón, con su precio por hora y lo que incluye.
- Servicios como lista con frase, sin íconos de Font Awesome.
- Sin contadores animados: los números de Tepic se ven de una vez.
- Sin animaciones al hacer scroll; el único movimiento es el cambio de ficha y se quita con `prefers-reduced-motion`.
- No se inventan fotos (la Familiar queda sin foto), tarifas por temporada, horarios de check-in, reseñas ni medidas de los cuartos. El reproductor del video de 53 MB no se incrusta: queda fuera y pendiente.
- Sin mapa incrustado, sin API de Google Maps, sin SDK ni chat de Facebook: un botón que abre Maps y un enlace a su Facebook.
