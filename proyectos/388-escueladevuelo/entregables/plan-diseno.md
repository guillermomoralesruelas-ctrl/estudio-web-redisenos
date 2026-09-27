# Escuela de Vuelo FLUMEN: plan de rediseño (método 1.1)

**Sitio original:** https://www.parapentevalledebravo.com/ (Joomla con el tema YOOtheme "Vision"; páginas Inicio, una por vuelo (Aventurero, Explorador, Explorer VIP, Volar en grupo, Precio amigo, Promo), FAQ, El Peñón, Carta responsiva, 360 videos, Reservaciones, políticas y versión en inglés). **Reservas y pagos en línea** con Planyo en `/reservaciones` (pago con Stripe; también transferencia, PayPal, MercadoPago o efectivo según su FAQ). Los cursos están en otro sitio suyo, https://aprendeavolar.com.mx/es/.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json` (inicio, Aventurero, Explorador, Explorer VIP y Volar en grupo), contacto en `investigacion/resumen.json` (no trae teléfono ni WhatsApp: los "teléfonos" que lista son fechas de los nombres de archivo).

**Datos que no están en `crudo.json`** (tomados del sitio real el 2026-09-27 con curl a través de Jina Reader, `r.jina.ai`, porque el sitio responde 406 de Mod_Security a curl directo y luego deja de contestar; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- `/reservaciones`: los pasos de su ayuda, "¡Las reservaciones no son válidas sin el pago previo!", **el WhatsApp +52 722 521 0695** ("a veces estamos volando y no contestamos en el momento") y la nota de la comisión de Stripe.
- `/experiencias/faq`: punto de encuentro (Oficina FLUMEN, calle Del Salitre, con su enlace de Google Maps), preguntas de pagos e información (qué necesito, cómo ir vestido, retraso, comida, acompañantes, cámara), contacto (info@parapentevalledebravo.com, WA 7225210695 de 8:30 a 19:30), cancelaciones y condiciones climáticas, y los textos de El Peñón (despegue, aterrizaje "Piano" o "África").
- `/experiencias/precio-amigo`: grupo de 4 a $1,999 y de 6 a $1,899 por persona, y sus términos.
- `/experiencias/promo`: descuento entre semana (se cita solo el de $50 por persona).
- `/experiencias/faq/el-penon`, `/experiencias/faq/carta-responsiva` y la política de cancelaciones: solo para leer; en el rediseño se enlazan, no se copian enteros.
- No se bajó ninguna imagen nueva.

**Rubro:** escuela de parapente y vuelos tándem (turismo de aventura). Vuelan en El Peñón, Temascaltepec, "a 15 km de Valle de Bravo", Estado de México. Tipo para Google: `SportsActivityLocation` (subtipo de `LocalBusiness`).

**Idioma:** el sitio está en español (con una parte en inglés; su HTML dice `lang="en-gb"` por error). El rediseño va en español.

**Sobre las fotos (revisadas antes de construir):** el clon trae **8 capturas de 1920 px de sus videos Insta360** (nombres `VID_2022…` a `VID_2026…`, pasajeros en vuelo tándem sobre la sierra, en dos se ve El Peñón), `penon.jpg` (El Peñón sobre las nubes, 2000 px), `penon2.jpg` (un piloto con la vela "FLUMEN Paragliding") y 9 fotos de tarjetas de 600 a 855 px. Ninguna tiene EXIF de Picasa o Google Maps ni marcas o metadatos de IA (varias dicen "Adobe Photoshop"); son claramente del negocio (su vela lleva su nombre). **Hay de sobra.** No se usan las 14 capturas de reseñas de Google (`images/testimonios/`, capturas de pantalla de texto) ni los logos de APPI, Club El Peñón y Temascaltepec. No están en el clon: las fotos de las páginas de cada vuelo (`explorer360vip-001.jpg`, `group001.jpg`, `vuelosparapentevalledebravo-explorer.jpg`) ni las 13 de "Fotos GOPRO"; quedan pendientes.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 8,330 px y móvil 12,311 px, desborde 0, **4 H1**, 41 imágenes, **21 rotas en escritorio y 16 en móvil**, 28 y 23 errores de consola y recursos fallidos (404): los scripts de YOOtheme y Joomla (`uikit.min.js`, `theme.js`, `core.min.js`…) y las versiones `.webp` que pide el tema en `media/yootheme/cache/`.
- A ojo: la portada queda sin fotos (el carrusel de 8 capturas no arranca sin sus scripts), las tarjetas de vuelo salen sin foto, "Si buscas calidad, es con nosotros" y "Quiénes somos" dejan grandes huecos blancos, los testimonios y los logos de "Trabajando con" no aparecen.
- Fotos: copias `.webp` de 14 fotos y el logo (5.18 MB → 0.83 MB) y un favicon con su ala, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar y pagar el vuelo**: su reserva en línea (Planyo en `/reservaciones`) a un toque, y WhatsApp (con el vuelo ya escrito) para dudas.
2. **Elegir el vuelo**: Aventurero, Explorador y Explorador VIP 360 se parecen en la tarjeta; lo que cambia es **cuánto tiempo pasas en el aire, hasta dónde te lleva el piloto y qué fotos te llevas**.
3. Volar en grupo: los paquetes para 4 y el Precio amigos.
4. Confianza sin prometer de más: dónde se vuela (El Peñón), quién vuela (pilotos APPI, con enlace para verificar la licencia), y lo que hay que saber antes (ropa, puntualidad, pago, cancelación, clima), con sus propias palabras.

Público: turistas de fin de semana en Valle de Bravo (sobre todo de la Ciudad de México), grupos de amigos y cumpleaños, familias y personas mayores ("La edad no es ninguna restricción", testimonio de su sitio); y quien después quiere aprender (cursos).

## Dirección visual (primera pasada)
El cielo de sus capturas 360 y la noche azul del tema, con el rosa de la etiqueta de su logo y el verde de los pinos de Temascaltepec.

| Token | Color | Uso |
|---|---|---|
| `noche` | `#141a3d` | Encabezado, portada, bandas oscuras y títulos (de `#181937` de su CSS) |
| `niebla` | `#f3f5f8` | Fondo claro |
| `papel` | `#ffffff` | Bandas y tarjetas |
| `texto` | `#454b5c` | Texto corrido (7.9:1 sobre `niebla`), de `#4a4e58` de su CSS |
| `rosa` | `#ff2e64` | El rosa de su logo y su CSS: botones con texto `noche` (4.7:1) y detalles sobre `noche` (4.7:1). Nunca texto blanco sobre rosa (3.6:1) |
| `rosa-hondo` | `#c8174a` | Enlaces sobre fondo claro (5.2:1) |
| `pino` | `#2f5d3a` | Los pinos de la sierra: el terreno del dibujo y botones con texto blanco (7.6:1) |
| `cielo` | `#dbe9f6` | El cielo del dibujo |

**Tipografía:** las de su tema: **Barlow Semi Condensed** (600) en títulos y **Barlow** (400, 500 y 700) en texto, de @fontsource y solo latino. Títulos en tipo normal, no en mayúsculas.

## Elemento memorable: "El recorrido de tu vuelo"
Los tres vuelos salen del mismo lugar, El Peñón, y su propio sitio los distingue por el tiempo en el aire y la distancia: Aventurero "vuelo en termales" de 20-25 min; Explorador "vuelo en termales y de distancia", "paseo por las montañas", 30-45 min; Explorador VIP 360 "vuelo XC en termales", 45+ min, fotos Insta360 editadas y "terminar el vuelo con las acrobacias".

El elemento: un **dibujo de perfil de la sierra** (cielo, montañas de pinos, el monolito de El Peñón, el despegue y el aterrizaje "Piano" o "África") donde se traza **el recorrido del vuelo elegido**: el Aventurero sube en unas vueltas de térmica junto al despegue y baja al aterrizaje; el Explorador sube más y sale a pasear por las montañas; el VIP va más alto y más lejos y termina con una espiral de acrobacias antes de aterrizar. Debajo, una **regla de minutos en el aire (0 a 60)** con la franja de cada vuelo (20-25, 30-45, 45 o más). Tres botones (nombre, minutos y precio); al elegir, se dibuja el recorrido, se marca su franja y se abre la ficha: foto, su frase, su texto, qué incluye, precio y "Reservar este vuelo" (su reserva en línea) y "Preguntar por WhatsApp" con el vuelo escrito. Se aclara que es un dibujo simbólico: la ruta real la decide el piloto según el viento.

Sale del negocio: el lugar, las duraciones, lo que incluye cada vuelo y sus precios, todo de su sitio; no inventa altitudes, kilómetros ni rutas (el dibujo no tiene escala). No repite nada anterior: no es un selector de personas, ni un reloj de horarios, ni un mapa; es el perfil de un vuelo.

## Estructura
1. Encabezado (noche): logo blanco, navegación (Vuelos, En grupo, El Peñón, Antes de volar, Contacto) y "Reserva tu vuelo".
2. Portada: foto a todo lo ancho (vuelo tándem con El Peñón al fondo), "Vuelos en parapente tándem en El Peñón, Temascaltepec, a 15 km de Valle de Bravo", H1 "La gran experiencia de tu vida", "Vuela como un superhéroe.", botones y cuatro datos (desde $2,699, fotos y video en los tres vuelos, pilotos APPI, transporte local).
3. **Elige tu experiencia**: el recorrido del vuelo.
4. En grupo: "Las mejores experiencias son las que se comparten", Volar en grupo (dos paquetes para 4) y Precio amigos (grupos de 4 o 6), con sus condiciones.
5. El Peñón: su texto y la foto del Peñón sobre las nubes.
6. Quiénes somos: su texto, los cuatro pilotos con sus credenciales y el enlace a los cursos.
7. Así se ve desde arriba: cinco capturas de sus vuelos y tres testimonios de su sitio.
8. Antes de volar: sus respuestas (qué necesito, cómo ir vestido, comer, puntualidad, acompañantes) y cómo se reserva y se cancela (pago previo, formas de pago, cancelaciones, clima), con enlaces a su FAQ, su política y su carta responsiva.
9. Contacto (noche): punto de encuentro con Maps, WhatsApp y su horario, correo y redes.
10. Pie y barra fija en el celular: Reservar, WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el carrusel de 8 capturas, los títulos gigantes en mayúsculas, las cuatro tarjetas iguales de vuelo (pasan al recorrido), "Si buscas calidad, es con nosotros" (carrusel de fotos sin texto), el boletín (su formulario no dice qué envía), "Bikepacking Essentials" (texto de ejemplo del tema) y los logos de "Trabajando con".
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios; las fichas de grupo son dos bloques distintos (paquetes y Precio amigos), no una fila de tarjetas iguales.
- Una sola cosa se mueve: el trazo del recorrido; quieto con `prefers-reduced-motion`.
- Sin inventar: sin altura ni kilómetros, sin límites de peso ni de edad (la carta responsiva habla de "requisitos físicos y de peso establecidos" que el sitio no publica: pendiente), sin "100% seguro" ni promesas de seguridad; solo lo que su sitio dice ("pilotos certificados APPI", con su enlace para verificar la licencia).
- Precios: los de la página de cada vuelo (su portada pone precios "desde" más bajos: pendiente).
- Sin mapa incrustado ni scripts de terceros: botones que abren Google Maps y su reserva.
