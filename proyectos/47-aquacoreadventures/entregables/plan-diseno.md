# AquaCore Adventures: plan de rediseño (método 1.1, fotos recuperadas con 1.2)

**Sitio original:** https://aquacoreadventures.com/ (en inglés, con versión /es/)
**Materia prima:** clon en `../sitio/` (solo íconos y fotos de destino de banco), textos en `investigacion/crudo.json` (inicio, /es/, /cancun/, /progreso/progreso-yacht-charters/ y /kitesurf/), contacto en `investigacion/resumen.json`. Las fotos propias y los textos de las seis actividades de Progreso se tomaron con curl del sitio en vivo el 2026-09-28 (`assets/originales/`).
**Rubro:** TURISMO (deportes acuáticos y renta de yates con tripulación). **Ciudad:** oficina en Blvd. Kukulcán km 8, Punta Cancún (Q. Roo); opera en cuatro costas: Cancún, Riviera Maya, Progreso (Yucatán, su base "Local", teléfono con lada 999) y Los Cabos. En la BD figura en Cabo San Lucas, que es solo uno de sus cuatro destinos.

## Qué le falta al clon (los "detallitos")
- No se descargó ningún CSS ni JS (`style.min.css`, `aquacore-v2.min.css`, Bootstrap, `main.js`, sus fuentes): el clon sale sin estilos, con los menús desplegados como listas enormes. 14 recursos con 404 y 14 errores de consola.
- Desborde horizontal de 1,226 px en el celular y 27,213 px de alto.
- Falta el video de la portada (`hero-bg.mp4`) y la foto de portada `destination-cancun.webp`.
- Las 8 "fotos" de servicios son íconos de línea (600 × 600) y las cuatro de destinos parecen de Wikimedia (una se llama `…panoramio.jpg` en la página de Los Cabos). Las fotos reales (flota de Progreso, escuela de kite en Isla Blanca, paddleboard en Progreso) están en páginas interiores que el clon no bajó.

## Qué tiene que lograr el sitio
1. Que el turista escriba por WhatsApp con la actividad, el destino y la fecha ya dichos (el sitio promete respuesta en una hora y pago el día de la actividad).
2. Que entienda en un vistazo que es **un operador en cuatro costas** y qué hay en cada una.
3. Que el que va a Progreso vea la flota con precios y sepa si su mes es bueno para lo que quiere hacer.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| `marino` | `#0a2540` | Fondo del encabezado, del elemento memorable y del pie; texto principal (del CSS de su sitio) |
| `profundo` | `#0a3553` | Segundo azul de su CSS: tarjetas sobre fondo oscuro |
| `laguna` | `#1273b0` | Acento y botones secundarios (azul del logo); AA sobre blanco |
| `bruma` | `#b8e2f2` | Azul claro de su CSS: texto y líneas sobre `marino` |
| `arena` | `#f7f4ef` | Fondo claro (de su CSS) |
| `sol` | `#f2b233` | Solo para "Peak" en el calendario y el sol del dibujo |

**Tipografía:** las de su sitio: Playfair Display (títulos, con itálica para las palabras de destino) y Outfit (texto y controles), ambas de @fontsource, solo latín.

## Elemento memorable
**"Wind or glass? Progreso, month by month."** El negocio vende dos cosas opuestas en la misma costa: las que quieren **agua lisa** (yates, jet ski, paddleboard) y las que quieren **viento** (kitesurf con los *nortes*). Su propio sitio publica, página por página, un calendario de temporada (Peak / Good / Low) para cada una de sus siete actividades en Progreso. Eso se junta en un solo lugar:

- Eliges el mes (arranca en el mes actual con la hora de Mérida).
- Un dibujo en SVG de la costa de Progreso (el muelle largo, el faro y la línea del Golfo) cambia con el mes: en temporada de nortes (nov.–mar.) hay rachas de viento, borreguitos y cometas en el cielo; en los meses de calma el mar queda liso con un yate anclado; en temporada de lluvias y tormentas (ago.–sep.) nubes.
- Las siete actividades se ordenan para ese mes: primero las **Peak**, luego **Good**, al final **Low**, con su precio publicado (yates desde $7,999 MXN, paddleboard $650, jet ski desde $2,999 la hora, cenotes $3,640 y $5,070) y la nota real de su página (flamingos nov.–abr., pez vela feb.–jun., veda comercial de mero feb.–mar., nortes, lluvias).
- Tocas una y el botón arma el WhatsApp: "Hi! We're planning Progreso in March. We're interested in: Kitesurf".

Todos los datos son del sitio (calendarios leídos de las clases `av2-calendar-month--peak/good/low` de cada página). Es distinto de todos los de `METODOS.md`: no es fase lunar (402), ni luz del día (557), ni día de la semana (463), ni báscula ni total.

## Estructura
1. Encabezado fijo: logo, Destinations, Progreso month by month, Fleet, Kitesurf, Contact y WhatsApp.
2. Portada (H1 único): foto aérea de yate en Cancún, "Yacht charters, kitesurf & water sports on four Mexican coasts", su texto, WhatsApp y "Plan your month", con sus cifras (4.9/5, 350+ reviews, free cancellation 48 h, reply within 1 hour).
3. Cuatro costas: Cancún (8 actividades), Progreso (7), Riviera Maya (9), Los Cabos (8); lista tipográfica con su frase y actividades, enlaces a su página.
4. Elemento memorable: Progreso, mes por mes.
5. La flota de Progreso: 15 barcos de Marina Yucalpetén con eslora, huéspedes, horas y precio "from"; filtro por tamaño de grupo; WhatsApp por barco.
6. Kitesurf en Isla Blanca: fotos de la escuela, tres programas (Beginner 9 h / 3 días, Intermediate, Advanced & Foil) y temporada.
7. Paddleboard en Progreso: sus fotos, dos rutas a $650 MXN y tres salidas (5:10, 6:00, 16:30).
8. Cancún: las 8 experiencias con sus textos.
9. Por qué reservar directo: sus cuatro razones y los reconocimientos (Tripadvisor Travelers' Choice 2023–2025).
10. Contacto: WhatsApp, teléfono, correo, dirección con Google Maps, horario, y Marina Yucalpetén con Maps.
11. Barra fija en el celular: WhatsApp, Call, Maps.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador: los títulos van solos, en Playfair.
- Emojis como íconos (el original usa 🏖️🌅🌿⚓ en el menú): fuera.
- Animar cada sección al hacer scroll: solo se mueve el dibujo del mes, y no se mueve con `prefers-reduced-motion`.
- Tarjetas idénticas repetidas: las cuatro costas van como lista tipográfica; la flota es una tabla-lista con foto pequeña, no una rejilla de tarjetas; Cancún es una lista a dos columnas.
- Degradados de moda y el video de 5.4 MB de la portada: una sola foto real.
- Inventar reseñas, fotos, precios o datos del negocio: los precios y calendarios son los de sus páginas; Cancún no publica precios y así se queda.
