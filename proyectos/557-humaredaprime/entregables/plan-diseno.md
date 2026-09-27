# Humareda Prime: plan de rediseño (método 1.1)

**Sitio original:** https://www.humaredaprime.com/ (WordPress con Elementor y el tema Hello Elementor; una sola página: logo, portada "Steak House Premium en Boca del Río", "El estándar del corte…", "Nuestros Cortes", galería "Una Experiencia Única", "Visítanos" con un mapa de Google incrustado, "¿Listo para vivir la experiencia?" y tres botones flotantes: llamar, WhatsApp y Maps). Reserva por WhatsApp con mensaje prellenado; no tiene reservas en línea ni carta.

**Materia prima:** clon en `../sitio/` (9 fotos, el logo y 3 íconos en `sitio/assets/wp-content/uploads/2026/06/`), textos en `investigacion/crudo.json` (una sola página, que es todo el sitio), contacto en `investigacion/resumen.json`.

**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- `https://www.humaredaprime.com/` responde 200 y es **igual** a `investigacion/original.html` (sin cambios desde la captura).
- Su mapa del sitio (Yoast, `sitemap_index.xml`) solo tiene el inicio, la entrada de ejemplo de WordPress "Hello world!" (`/2026/06/06/hello-world/`, publicada), la categoría "Uncategorized" y la página del autor "admin". No hay página de menú, carta ni contacto.
- Su enlace de Google Maps (`maps.app.goo.gl/Mg2mpV4ciJ19QY2JA`) lleva a la ficha "Humareda Prime" en 19.1078126, -96.101324. De ahí salen las coordenadas del JSON-LD y del cálculo de la luz del día.
- Colores y letras de su propio CSS de Elementor (`--Negro:#071108`, `--Rojo:#ed3237`, `--Blanco:#FEFEFE`, `--Principal: Playfair Display`, `--Secundario: Lato`).
- No se bajó ninguna imagen nueva.

**Rubro:** restaurante de cortes (steak house) con coctelería de autor y vista al mar, en Blvd. Vicente Fox Quesada 106, Costa Sol, 94290 Boca del Río, Veracruz. Domingo a jueves de 13:00 a 22:00; viernes y sábado de 13:00 a 24:00. Un solo local con fotos propias (su letrero, su terraza frente a la playa, sus mesas, sus cortes). No es cadena ni directorio. En la fachada, junto a su letrero, hay otro que dice "Carnes Finas San Juan" (¿su proveedor o una carnicería vecina? pendiente; no se menciona). Tipo para Google: `Restaurant` (servesCuisine "Steak house").

**Sobre las fotos:** 9 fotos, todas propias y del mismo lugar. Ninguna trae XMP ni marcas de IA; Exterior e Interior dicen "Google" como programa en su EXIF (probablemente exportadas de Google Fotos o de su perfil de Google), tres traen "Photoshop 3.0". **Se usan las 9**, el logo y su ícono. Faltan fotos de los cortes uno por uno, de la parrilla o las brasas, del equipo y de la barra (pendiente).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 4,495 px, desborde 0, 3 imágenes (0 rotas), 1 H1, **1 error de consola y 1 recurso fallido** (un mosaico del mapa de Google incrustado da 500). Móvil: 6,112 px, desborde 0, 0 errores.
- A ojo: el clon se ve casi igual que el sitio; la galería son 6 recuadros con la foto de fondo (sin texto alternativo) y el mapa incrustado.
- Fotos: se hacen 9 copias `.webp` más el logo (1.93 MB → 0.65 MB) y el favicon con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar por WhatsApp**, con día, hora y personas ya escritos (hoy el mensaje solo pregunta "disponibilidad").
2. Que se entienda de un vistazo **qué es**: cortes finos a las brasas, coctelería de autor y vista al mar, y **cuándo abre** (hoy dice "D-J: 13:00 p.m. a 22:00 / V-S 13:00 p.m. a 24:00 a.m.", difícil de leer).
3. Ver **los nueve cortes** con las notas explicadas ('Rib Eye 2"').
4. **Cómo llegar** (Google Maps) y llamar.

Público: parejas, familias y grupos de Veracruz y Boca del Río que buscan una comida o cena especial, y visitantes que se quedan en la costera.

## Dirección visual (primera pasada)
Su marca ya es clara: negro verdoso, rojo de la flama del logo y blanco, con Playfair Display y Lato. Se conserva y se le suma el ámbar de la luz de sus lámparas y un crema claro para dar respiro.

| Token | Color | Uso |
|---|---|---|
| `carbon` | `#071108` | Su negro: fondo general (el del logo) |
| `tizon` | `#111c12` | Paneles y bandas sobre el negro |
| `blanco` | `#fefefe` | Su blanco: títulos sobre negro (19:1) |
| `humo` | `#bfc3bb` | Texto corrido sobre negro (10.7:1) |
| `rojo` | `#ed3237` | Su rojo: la flama, detalles y títulos en cursiva sobre negro (4.7:1; 4.3:1 sobre `tizon`, solo en texto grande) |
| `brasa` | `#c41f27` | Botones con texto blanco (5.9:1): su rojo, un poco más oscuro para cumplir AA |
| `ambar` | `#e8a257` | La luz cálida de sus lámparas: detalles sobre negro (8.9:1) |
| `hueso` | `#f4efe7` | Fondo claro de "Visítanos" con texto `carbon` (16.8:1) y `tierra` #5a4a3c (7.4:1) |

**Tipografía:** las de su marca: **Playfair Display** (títulos, con su cursiva para acentos) y **Lato** (texto), de @fontsource, solo latino.

## Elemento memorable: "El mar desde tu mesa"
Su frase es "vista al mar" y sus fotos lo cuentan: una mesa de la terraza con la playa al fondo, y la fachada encendida de noche. El elemento responde lo que uno se pregunta al reservar en la costera: **¿me toca el mar con luz o ya de noche?**

1. Eliges el **día** (hoy y los seis siguientes; cada botón dice su horario real: hasta las 22:00 o hasta las 24:00) y la **hora de llegada** con una barra que va de las 13:00 hasta media hora antes del cierre de ese día.
2. Un dibujo de la vista (el mar, el cielo, una palmera y tu mesa con un corte que humea) cambia con la luz **calculada para Boca del Río** (19.108 N, 96.101 O) ese día: de día, atardecer, anochecer o noche, con la **fase real de la luna** de esa noche.
3. Una frase dice a qué hora se oculta el sol ese día ("Ese día el sol se oculta a las 18:17") y cómo llegarías ("Llegas con la última luz del día").
4. Personas (de 1 a 20) y "Pedir mesa con vista al mar", y el botón abre WhatsApp con **su propio mensaje** ("Hola, me gustaría hacer una reservación en Humareda Prime…") completado con el día, la fecha, la hora y las personas.

Sale del negocio: su vista al mar, sus horarios reales por día, su ubicación y su forma de reservar (WhatsApp). No inventa nada del negocio: el sol y la luna se calculan (fórmulas de la NOAA); no promete una mesa con vista (solo la pide); el dibujo es ilustrativo y no pinta el sol metiéndose en el mar (en Boca del Río la costa mira al oriente: el sol se oculta del lado de la ciudad). No repite ningún elemento anterior: no es un reloj de horarios ni un selector de días de menú; va de la luz del mar a la hora de tu reservación.

## Estructura
1. Encabezado negro: su logo, navegación (Cortes, El mar desde tu mesa, Galería, Visítanos) y "Reservar".
2. Portada: H1 "Steak House Premium en Boca del Río", su frase, "Reserva por WhatsApp" y "Llámanos"; la foto del corte flameado frente a su letrero, y el horario de hoy.
3. "El estándar del corte en Boca del Río, Veracruz." con su texto y la foto de la mesa con la lámpara.
4. Nuestros cortes: los nueve nombres grandes, como una pizarra, con la nota del Rib Eye 2" y la foto del rib eye; sin precios (el sitio no los publica): "Pregúntanos por WhatsApp".
5. **El mar desde tu mesa**.
6. Una experiencia única: salón, vista al mar, coctelería y brindis, en una composición de tamaños distintos.
7. Visítanos (fondo hueso): horario por días, teléfono, dirección, Google Maps; la foto de la fachada enlaza a Maps.
8. "¿Listo para vivir la experiencia?" sobre la foto del corte con vino (su imagen para compartir), y pie.
9. Barra fija en el celular: Reservar (WhatsApp), Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Negro, rojo y Playfair es el uniforme de cualquier steak house. Se ancla en lo suyo: el rojo es solo el de su flama (botones y el acento de la cursiva), el ámbar de sus lámparas es el único color cálido y el azul aparece solo en el mar del elemento memorable.
- Se quitan: los puntos rojos de la lista de cortes (quedan como pizarra con líneas finas), los tres íconos flotantes redondos sin nombre (pasan a la barra del celular con texto), la galería de seis recuadros iguales (pasa a una composición de cuatro fotos de tamaños distintos) y el mapa incrustado.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios.
- Una sola cosa se mueve: el humo del corte en el dibujo y el cambio de luz del cielo; quietos con `prefers-reduced-motion`.
- Sin inventar: no hay precios, gramajes ni descripciones de los cortes (el sitio no los tiene), ni reseñas, ni redes sociales (el sitio no enlaza ninguna).
