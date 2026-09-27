# Emilia UW Photo (Emilia Black Box): plan de rediseño (método 1.1)

**Sitio original:** https://emilia-uwphoto.com/ (WordPress con el tema Astra y Elementor; páginas Home, Services, Underwater Photoshoot, Cenote Photoshoot, Beach Photoshoot, Scuba Diving, Portfolio, About, Blog y Contact). Reseñas de Google con el widget de Trustindex, WhatsApp con el widget flotante de GetButton y formulario de contacto en `/contact/`. Sin reserva en línea: todos los botones "Check availability" y "Book your photoshoot" llevan al formulario.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json` (inicio, Services, Underwater Photoshoot, Cenote Photoshoot y Beach Photoshoot), contacto en `investigacion/resumen.json` (WhatsApp 529985383661; los demás "teléfonos" son números de versión de imágenes).

**Datos que no están en `crudo.json`** (leídos del sitio real el 2026-09-27 con curl, que sí responde desde la nube; las descargas quedaron en una carpeta temporal, fuera del estudio): la biografía de `/about/` (estudió Comunicación Audiovisual en la Universidad Nacional de La Plata, llegó a México en 2017, ocho años como fotógrafa submarina, de Baja California a la Riviera Maya) y que `/contact/` es un formulario. No se bajó ninguna imagen nueva.

**Rubro:** fotografía submarina y de retrato en cenotes (en la BD figura como EVENTOS). Zona: "a cenote between Playa del Carmen and Tulum, 20 minutes each way"; la ubicación exacta la manda al reservar. Tipo para Google: `ProfessionalService` (subtipo de `LocalBusiness`), con `areaServed`.

**Idioma:** el sitio está en inglés (aunque su HTML dice `lang="es"`), su público son turistas y ella dice "I speak English fluently". El rediseño va en inglés, como `328-donsanchez`. Los documentos del estudio siguen en español.

**Sobre las fotos (revisadas antes de construir):** el clon trae **18 fotos propias de sus sesiones**, de 682 a 1877 px, casi todas bajo el agua en cenotes (vestidos que flotan, parejas, rayos de luz, nenúfares, una escalera de madera), más retratos en la orilla y en la selva, un buzo y una foto en la orilla con rocas. Ninguna trae EXIF de Picasa o Google Maps ni marcas de IA; sus nombres dicen "Emilia-BlackBox". `UNDERWATER-PORTRAITS-IN.CENOTE-4DRADO` es un recorte cuadrado de otra (no se usa). **Hay de sobra.** No hay fotos de la playa de Playa del Carmen (la de "beach photoshoot" es en rocas con agua): la sección de playa va sin foto propia.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 5,360 px y móvil 8,565 px, desborde 0, **2 H1** ("Underwater Cenote Photoshoot in the Riviera Maya" y "No experience needed"), 94 imágenes con **72 rotas en escritorio y 76 en móvil** (las estrellas y avatares de Trustindex y las fotos con carga diferida), 34 y 38 errores de consola y un recurso con 404 (el script de Cloudflare).
- A ojo: el carrusel de la portada queda en blanco, tres de las cuatro tarjetas de "Choose your experience" salen sin foto, el bloque "First time underwater?" deja su foto en blanco y las reseñas salen sin estrellas.
- Fotos: copias `.webp` de 17 fotos y el logo (14.16 MB → 1.44 MB) y su favicon, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Pedir fecha por WhatsApp** con la sesión ya escrita (hoy su WhatsApp solo está en un widget de terceros y todos los botones van a un formulario).
2. **Elegir la sesión**: lo que de verdad distingue sus sesiones es **qué tanto te metes al agua**: selva, superficie, completamente bajo el agua o buceo. Y si vienes sola(o) o en pareja, porque cambian paquete y precio.
3. Quitar el miedo del primer intento: "No experience needed", cómo te guía, cuánto aguantas la respiración ("just a few seconds"), horario temprano.
4. Confianza: sus fotos, 102 reseñas "Excellent" en Google y quién es ella.
5. Reglas claras: depósito del 30 %, cancelación con 48 h, lluvia, cuándo llegan las fotos.

Público: turistas en Tulum y Playa del Carmen (sobre todo extranjeros), parejas, cumpleaños y despedidas, gente que nunca ha hecho algo así bajo el agua.

## Dirección visual (primera pasada)
El azul oscuro de sus fotos de cenote con el amarillo y el verde musgo de su propio tema.

| Token | Color | Uso |
|---|---|---|
| `abismo` | `#06161f` | Encabezado, portada, selector y contacto; títulos en fondo claro (17.2:1 sobre `piedra`) |
| `cenote` | `#0c3446` | Banda "Behind the camera" y fichas de paquete |
| `turquesa` | `#7fd3dc` | Detalles sobre `abismo` (10.7:1) |
| `sol` | `#ffd936` | Su amarillo (`--ast-global-color-0`): botones con texto `abismo` (13.3:1) y enlaces sobre oscuro (13.3:1 sobre `abismo`, 9.5:1 sobre `cenote`) |
| `musgo` | `#536942` | Su verde (`--ast-global-color-2`): enlaces sobre fondo claro (5.7:1 sobre `piedra`, 6.1:1 sobre blanco) y la selva del dibujo |
| `piedra` | `#f6f8f5` | Su fondo claro (`--ast-global-color-4`) |
| `texto` | `#2d3a33` | Texto corrido (11.1:1 sobre `piedra`) |

**Tipografía:** las de su tema: **Forum** (400) en títulos y **DM Sans** (400, 500 y 700) en texto, de @fontsource y solo latino. Logo "Black Box" en blanco, el suyo.

## Elemento memorable: "How far into the water?"
Todas sus sesiones pasan en el mismo lugar, un cenote entre Tulum y Playa del Carmen; lo que cambia es **qué tan adentro del agua estás**. Su propio sitio lo dice así: la Cenote Jungle Photoshoot es "for those who… prefer to stay above the water", "at the surface, half-in half-out, or surrounded by jungle"; la Underwater es "fully submerged"; Diving es "during your dive".

El elemento: un **corte del cenote** (la selva sobre el borde, la roca, la línea del agua punteada y el agua que oscurece con la profundidad, con dos rayos de luz) con **una persona que sube o baja** al nivel elegido. Al lado, cuatro botones en el orden de la profundidad: *In the jungle* (above the water), *At the surface* (half in, half out), *Fully underwater* (under the surface) y *Diving* (with scuba). Al elegir: dos fotos suyas de ese nivel, la sesión, su texto, **qué pasa con tu respiración** (de sus FAQ: "Just a few seconds is enough"), un interruptor **Just me / Couple** y los paquetes de esa combinación con precio y lo que incluyen, cada uno con "Ask about this one" a WhatsApp con la sesión y el paquete ya escritos. Diving no publica precio: "Ask for a quote".

Sale del negocio: los niveles, los paquetes y los precios son los de su sitio; no inventa profundidades ni metros (el dibujo no tiene escala). No repite nada anterior: no es un mapa, ni un reloj, ni una báscula, ni el perfil de un vuelo (que va de lado); es un corte vertical, de arriba hacia abajo.

## Estructura
1. Encabezado (abismo): logo, navegación (Sessions, First time, FAQ, Contact) y "Check availability" a WhatsApp.
2. Portada: la pareja bajo los rayos de luz (su foto de portada), H1 "Underwater Cenote Photoshoot in the Riviera Maya", "No experience needed" y su frase, botones y cuatro datos (privada, desde 6,000 MXN, 8 años, entrada al cenote incluida).
3. A private experience, not just a photoshoot: su texto y dos fotos.
4. **How far into the water?**
5. First time underwater? y How it works: sus textos y sus cuatro pasos, con el horario.
6. Where water, light and movement come together: seis fotos y enlace a su portafolio.
7. Real clients’ reviews: cuatro reseñas de su sitio y el "Excellent, 102 reviews".
8. Behind the camera: su biografía y redes; al lado, la sesión de playa con "Request a quote".
9. Before you book: 12 preguntas frecuentes con sus respuestas.
10. Contacto (abismo): WhatsApp, formulario, dónde (con la ruta en Google Maps) y reglas de reserva.
11. Pie y barra fija en el celular: WhatsApp, Call y Directions.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el carrusel, las cuatro tarjetas iguales de "Choose your experience" (pasan al selector), la franja amarilla "First time underwater ?", los textos en mayúsculas ("NO EXPERIENCE NEEDED / FULLY GUIDED / PRIVATE SESSION") y el widget de reseñas con estrellas y avatares.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios; los cuatro pasos van como una línea con texto, no como tarjetas.
- Solo se mueven la persona del dibujo y el brillo de los rayos; quietos con `prefers-reduced-motion`.
- Sin inventar: sin profundidades en metros, sin certificaciones de buceo (su sitio no dice cuáles tiene), sin dirección del cenote (no la publica), sin precio para buceo ni para playa.
- Sin mapa incrustado ni scripts de terceros (fuera Trustindex, GetButton, Cloudflare): botones que abren WhatsApp y Google Maps.
