# La Mezquita: plan de rediseño (método 1.1)

**Sitio original:** https://lamezquita.mx/ (WordPress con Elementor: inicio, Spa & Experiencias, Instalaciones, Nuestra esencia, Contacto, Blog y una página por servicio: masajes, temazcal, sauna y vapor, cámara hiperbárica). "Habitaciones" y todos los "Reservar" abren su motor de reservas de Zavia ERP (`https://rbe.zaviaerp.com/hotel/hotelspalamezquita`); el spa, el restaurante y las cenas se piden por WhatsApp.
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/2026/`), textos del inicio, Spa & Experiencias, Instalaciones y Blog en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- Las páginas `/masajes-en-aguascalientes/`, `/temazcal-en-aguascalientes/`, `/sauna-y-vapor-en-aguascalientes/`, `/camara-hiperbarica-aguascalientes/`, `/nuestra-esencia-hotel-spa-en-aguascalientes/` y `/contactanos-reserva-hoy/` (frases de cada servicio y hallazgos).
- **Su motor de reservas**, por su API pública (`https://booking.zaviaerp.com/api/settings` y `/api/room-types` con `hotel_id=hotelspalamezquita`): nombre "Hotel y Spa La Mezquita", dirección "Puente Del Pilar, 20926 Fraccionamiento Rincón del Pilar", las **seis suites** (Agua de Luna, Agdal, Imperial, Sahara, Oasis y Patio Real) con su tipo, cupo y amenidades, sus **dos tarifas** (Plan Europeo y Plan Marroquí, este con masaje relajante y desayuno americano para 2), el total por noche con impuestos (se consultaron noches de octubre de 2026 a febrero de 2027: domingo a jueves tienen un precio y viernes y sábado otro) y su "Política General" (solo adultos, 65 % al reservar, cancelación, fechas sin reembolso y salida tardía).
- Su JSON-LD (Rank Math): "Av. del Valle", municipio Jesús María y fecha de apertura (15 de abril de 2026).
- `https://lamezquita.mx/` responde igual que `investigacion/original.html`.
No se descargó ninguna imagen nueva.

**Rubro:** hotel boutique y spa para adultos, de inspiración árabe y marroquí ("inspirado en el Medio Oriente"), abierto en abril de 2026 en el Fraccionamiento Rincón del Pilar (Jesús María, zona conurbada de Aguascalientes). Seis tipos de suite, spa (masajes, temazcal, sauna y vapor, cámara hiperbárica; clínica de aparatología "próximamente"), restaurante de autor y bar, cenas románticas y salón de eventos. En la base del estudio está como GASTRONOMIA, pero es un hotel. No es una cadena ni un directorio: un solo hotel con sesión de fotos propia.

**Sobre las fotos:** el clon trae 9 fotos. Solo 4 son claramente del hotel, de una sesión con cámara (archivos `153A####`): la suite con la cabecera en arco, la cabina de masaje, el bar y los arcos de azulejo del salón de eventos. Son pequeñas (520 a 720 px), así que no se usan a todo lo ancho. **No se usan:** la fachada de noche (`hotel-y-spa-la-mezquita.webp`), que lleva en la esquina la estrellita de Gemini (generada o editada con IA de Google; no trae metadatos), y cuatro que parecen de banco o generadas (la pareja con la rosa, las toallas sobre fondo rosa, la pareja con la tableta y la mujer en una alberca frente a un palacio). El logo (estrella de cinco puntas en cobre) sí está.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 6,726 px de alto, desborde 0, 0 imágenes rotas (4 en pantalla), 1 H1, **10 errores de consola** y 0 recursos fallidos. Móvil: 9,819 px, 0 rotas y 8 errores.
- Los errores son las fuentes Poppins, Montserrat y Lato: la hoja de Elementor las pide a **otro dominio, `clinicasantuario.com`**, que no permite cargarlas desde otro sitio (CORS). Pasa igual en el sitio en línea (ver `OPORTUNIDADES.md`), así que los títulos salen en Arial.
- El clon no trae los scripts de Elementor (carruseles y acordeones funcionan a medias), el video de YouTube, ni las fotos de las páginas interiores (temazcal, sauna, cámara hiperbárica, "Nuestra esencia"). Faltan fotos de las otras suites, del restaurante y de la alberca que menciona "Instalaciones".
- Fotos: se hacen 4 copias `.webp` (0.46 MB → 0.16 MB) y el logo con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Elegir suite y reservar**: hoy "Habitaciones" manda directo al motor de reservas, sin decir qué suites hay, en qué se distinguen ni cuánto cuestan.
2. **Reservar el spa, el restaurante, una cena o el salón por WhatsApp**, con un mensaje que diga qué se quiere (hoy el mensaje prellenado es "La Mezquita Hola, ¿Cómo puedo ayudarte?", escrito como si hablara el hotel).
3. Saber antes de reservar lo que hoy solo está en la letra chica del motor: **solo adultos**, 65 % al reservar, cancelación y check-in/check-out.
4. Dónde están y cómo llegar.

Público (según su propio sitio y su blog: "escapadas románticas", "hoteles para parejas"): parejas de Aguascalientes o de visita que buscan una escapada romántica o un día de spa; en segundo lugar, reuniones y eventos privados.

## Dirección visual (primera pasada)
El cobre de su logo (`#b5663a`), el oro de su CSS (`#d3b574`), la crema de sus bloques (`#ffedde`), el azulejo verde de los arcos del salón y la noche de sus fotos de ambiente (lámparas turcas, cabecera iluminada).

| Token | Color | Uso |
|---|---|---|
| `arena` | `#f7f0e6` | Fondo general: los muros de estuco de la suite |
| `crema` | `#efe3d2` | Bloques alternos (su `#ffedde`, más apagado) |
| `noche` | `#1b1511` | Campo de "Seis suites, seis puertas" y pie (texto arena 16:1) |
| `cobre` | `#b5663a` | El cobre del logo: la estrella, filetes y números grandes (3.8:1, solo tamaños grandes) |
| `cobre-oscuro` | `#8e4a22` | Botones con texto blanco (6.7:1), enlaces y precios sobre arena (5.9:1) |
| `oro` / `oro-claro` | `#d9b56f` / `#e9c98c` | Texto y marcos sobre noche (9.3:1) y sobre azulejo (4.9:1) |
| `azulejo` | `#1f5b58` | El verde de los azulejos del salón: campo del spa (texto arena 6.9:1) |
| `tinta` / `texto` | `#231a15` / `#5a4a3f` | Títulos y texto (15:1 y 7.5:1 sobre arena) |

**Tipografía:** las de su sitio que están en @fontsource, solo latino: **Cormorant** (sus títulos; su letra, de trazo fino y romano, se parece a la del logo "LA MEZQUITA") y **Poppins** (su texto). No se usa Quando (decorativa, casi no la usan).

## Revisión contra lo genérico (segunda pasada)
- Crema, cobre y serif fina es el "hotel boutique" por defecto. Se ancla en lo suyo: **el arco** de su cabecera y de sus puertas (un arco lobulado, no un rectángulo con esquinas redondeadas) enmarca la foto de la portada y es la forma de las seis puertas; el verde de sus azulejos, que no aparece en su sitio, es el campo del spa; y la noche de sus lámparas es el campo del elemento memorable.
- Se quitan: la franja de iconos "Escapadas románticas / Conexión y descanso…", la cuadrícula de seis iconos "Descanso Total, Privacidad y Exclusividad…" (dos con el mismo texto), las seis tarjetas iguales con foto de fondo, los divisores con adorno bajo cada título, el carrusel de testimonios (repetía los tres), las animaciones de entrada y los títulos en mayúsculas.
- El spa no va en tarjetas iguales: es una lista de servicios con su frase y su página.
- Una sola cosa se mueve: las puertas que se encienden; quietas con `prefers-reduced-motion`.

## Elemento memorable: "Seis suites, seis puertas"
Las seis suites tienen nombre propio (Agua de Luna, Agdal, Imperial, Sahara, Oasis, Patio Real), pero su sitio no las nombra: el motor de reservas las enseña solo después de elegir fechas. Y sus puertas en arco son lo más reconocible del hotel.

1. Seis **puertas en arco** dibujadas (la forma de su cabecera), una por suite, con su nombre.
2. Arriba, **"¿Qué no puede faltar?"**: jacuzzi, tina, pantalla, o que sea para 3 o 4 personas. Las puertas de las suites que lo tienen se **encienden** con luz cálida, como sus arcos de noche; las demás se quedan a oscuras.
3. **¿Qué noche?** (domingo a jueves, o viernes o sábado) y **¿qué plan?** (Plan Europeo, solo la suite; o Plan Marroquí, con masaje relajante y desayuno para dos). Debajo de cada puerta, su precio por noche con impuestos.
4. Al tocar una puerta, su ficha: tipo, cupo, amenidades, precio de los dos planes y dos botones: **reservar en línea** (su motor) y **preguntar por WhatsApp** con la suite, el plan y la noche escritos.

Sale del negocio: son sus suites, sus nombres, sus amenidades, sus planes y sus precios del motor de reservas. Las puertas son un dibujo (no hay foto de cada suite: pendiente). Los precios se aclaran como "consultados el 27 de septiembre de 2026; cambian según la fecha".

## Estructura
1. Encabezado: logo, navegación (Suites, Spa, Restaurante y eventos, Preguntas, Contacto) y "Reservar".
2. Portada: H1 "Un refugio inspirado en el Medio Oriente", su frase, "Reservar en línea" y WhatsApp; la foto de la suite dentro de un arco; datos rápidos (check-in 3:00 p.m., check-out 12:00 p.m., solo adultos, estacionamiento privado, desde $5,500 la noche) y su lista "Todo en un solo lugar".
3. **Seis suites, seis puertas** (bloque noche) con la política de reservación.
4. Spa & Experiencias (bloque azulejo): masajes (sus seis técnicas), temazcal, sauna y vapor, cámara hiperbárica y clínica "próximamente", con la foto de la cabina y WhatsApp.
5. Restaurante & Bar, cenas románticas y salón de eventos, con sus fotos y WhatsApp con mensaje.
6. Lo que hace única tu experiencia y sus tres testimonios.
7. Preguntas frecuentes (las 10, plegables).
8. Contacto: dirección, teléfono, WhatsApp, correo, Google Maps y redes.
9. Pie; barra fija en el celular (Reservar, WhatsApp, Llamar, Cómo llegar).
