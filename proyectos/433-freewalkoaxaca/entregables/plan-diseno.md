# Free Walk Oaxaca: plan de rediseño (método 1.1)

**Sitio original:** https://freewalkoaxaca.com/ (WordPress con Elementor; páginas: inicio, Free Walking Tour, Tours & Experiences, Meeting Point, Reviews, About us, Contact). Tour a pie gratuito (tip-based) desde 2014. Guías locales. Punto de encuentro: Teatro Macedonio Alcalá con una sombrilla amarilla.

**Materia prima:** clon en `../sitio/` (8 fotos propias + logo SVG + logo PNG en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json` (5 páginas), contacto en `investigacion/resumen.json`. 8 fotos convertidas a .webp en `../assets/web/` (`rediseno/fotos-web.mjs`).

**Rubro:** turismo / tours culturales. Tour gratuito tip-based, tours de paga (food tour $1,400 MXN, mezcal & alebrijes $1,200 MXN, market tour $1,100 MXN, tour privado desde $200–$300 MXN p/p según tamaño de grupo). Tipo para Google: `TouristAttraction`.

**Datos reales de contacto:**
- Teléfono/WhatsApp: +52 951 525 7240
- Email: info@freewalkoaxaca.com
- Ubicación: Teatro Macedonio Alcalá, Av. de la Independencia 900, Centro, Oaxaca de Juárez
- Google Maps: https://www.google.com/maps/dir//Av.+de+la+Independencia+900+Centro+68000+Oaxaca+de+Ju%C3%A1rez,+Oax./@17.0615736,-96.7235381,18z

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 4,733 px, 0 desbordes, 108 imágenes (0 rotas), **4 errores de consola y 3 recursos fallidos** (CSS de Elementor Pro no descargados). Móvil: 7,386 px, 0 desbordes.
- A ojo: sitio en inglés, oscuro con amarillo. Carrusel de reseñas de TripAdvisor cargado por JS externo (plugin). Mapa de Google incrustado. Formularios de WordPress en la parte inferior.
- Fotos: 8 fotos propias y el logo SVG convertidas a .webp en `assets/web/` (`rediseno/fotos-web.mjs`). No se usa `ChatGPT-Image-9-sept-2026-07_35_35-p.m.webp` (imagen generada con IA según su nombre de archivo).

## Qué tiene que lograr el sitio

1. Que el turista que llega a Oaxaca entienda en segundos **qué es**, cuándo sale el próximo tour y **dónde encontrar la sombrilla amarilla**.
2. Reservar el tour gratuito o cualquier tour de paga **por WhatsApp**, con fecha, hora, idioma y personas ya escritos.
3. Ver los cuatro tours con sus precios y duraciones.
4. Confiar: 450+ reseñas en TripAdvisor y 52 en Google.

Público: turistas internacionales (inglés como idioma principal) que están en Oaxaca o planean viajar.

## Dirección visual (primera pasada)

La marca tiene su paleta en el CSS del clon: amarillo `#F5B705` (la sombrilla, el color más reconocible), azul noche `#1A1A4D`, casi negro `#16161A`, blanco.

| Token | Color | Uso |
|---|---|---|
| `carbon` | `#16161A` | Fondo general (su oscuro) |
| `noche` | `#1A1A4D` | Secciones alternas, nav |
| `blanco` | `#FFFFFF` | Texto sobre oscuro (> 19:1) |
| `humo` | `#B8BCC4` | Texto secundario sobre oscuro (> 4.5:1) |
| `amarillo` | `#F5B705` | La sombrilla: acento, botones CTA, highlights |
| `ambar` | `#CC8800` | Texto `amarillo` en hover / borde: asegura AA |
| `crema` | `#F6F3EA` | Fondo del punto de encuentro (su propio `#f6f3ea`) |
| `tinta` | `#2A2118` | Texto sobre crema (> 15:1) |

**Tipografía:** el sitio original usa Jost/Montserrat (Google Fonts). Se reemplaza con @fontsource:
- **DM Sans** (títulos, peso 400 y 700) — geométrica, limpia, de viaje; solo latin.
- **Inter** (texto corrido, peso 400) — legible para turistas a cualquier tamaño; solo latin.

## Elemento memorable: "¿A qué hora sale tu tour hoy?"

El problema del turista en Oaxaca: "¿Todavía alcanzo el tour o ya se fue?" La sombrilla amarilla sale del Teatro Macedonio Alcalá a horas fijas, pero el horario está regado en tres páginas del sitio y sepultado en formularios.

**El elemento:** un selector de horario con la hora real de Oaxaca (`Intl.DateTimeFormat` con `timeZone: "America/Mexico_City"`).

1. La sección muestra los **horarios disponibles hoy** (lun-sáb: 10:00, 11:00, 13:00, 16:00; dom: 10:00, 13:00, 16:00) calculados contra la hora actual de Oaxaca. Los que ya pasaron aparecen tachados; el próximo tiene la sombrilla animada.
2. El usuario elige **idioma** (English / Español) — los tours en español solo salen lunes a viernes, 10:00 y 16:00 — y el **número de personas** (1 a 20 con + y −).
3. Al elegir un horario, el botón de WhatsApp se completa solo: "Hi, we'd like to join the free walking tour in English on Monday Sept 28 at 10:00 am, we are 3 people. Meeting at Teatro Macedonio Alcalá."
4. Si ya pasaron todos los tours del día, muestra los del día siguiente: "No more walks today. Next walks tomorrow:"

Sale del negocio: horario real publicado, restricción de español (lun-vie), punto de encuentro y WhatsApp reales.

**No repite ningún elemento ya usado:** no es reloj de gimnasio, no es selector de menú según hora del día, no es luz del mar, no es générateur d'itinéraire, no es trajinera, no es mapa del metro, no es termómetro, ni plano de hospital, ni caja de rosas, ni hoja de stencil, ni calculadora de kite trip, ni acomoda salones, ni reloj de 24h de urgencias, ni nueve sonrisas sincronizadas, ni "¿qué hay en el mar ese mes?", ni selector de paciente.

## Estructura

1. **Nav fijo:** logo SVG (blanco sobre oscuro), Free Walk · Tours · Meeting Point · Reviews · About. Botón "Book Free Walk" (amarillo).
2. **Hero:** H1 "Discover Oaxaca Like a Local", subtítulo, tag "Free to join · Tip-based · Since 2014". Foto hero.webp. Dos botones: "Book a Free Walk" (WhatsApp) y "See all tours".
3. **Free Walking Tour:** horario en tabla limpia por día/idioma, duración 2.5 h, punto de encuentro Teatro Macedonio Alcalá, "look for the yellow umbrella". Propuesta de valor con sus puntos: "Walk With a Local", "Historic Center", "Culture & Traditions", "Local Recommendations".
4. **Elemento memorable "Find Your Walk":** selector en vivo con hora de Oaxaca.
5. **Tours & Experiences:** 4 tarjetas (foto + nombre + duración + precio + WhatsApp).
6. **Loved by travelers:** "450+ reviews on TripAdvisor" + 3 reseñas textuales del crudo.json (sin widget externo).
7. **About Us:** "Walking Oaxaca Since 2014" con su párrafo y valores en lista.
8. **Meeting Point:** dirección, "look for the yellow umbrella". La foto banner.webp enlaza a Google Maps.
9. **Pie:** logo, links de tours, contacto, redes.
10. **Barra fija en móvil:** Book Free Walk (WhatsApp) · Call · Maps.

## Revisión contra lo genérico (segunda pasada)

- El negro y el amarillo es el uniforme de cualquier tour. Se ancla en lo suyo: el amarillo es solo para los CTAs y la sombrilla, no un fondo de sección entera; el azul noche es el fondo de las secciones alternas.
- Se quitan: carrusel de TripAdvisor (plugin JS externo), formularios de WordPress, mapa de Google incrustado, íconos de Font Awesome rotos del clon, numeración de tarjetas con íconos tipo "Mdi-bank-outline".
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios separadores.
- Solo se mueve la sombrilla en el elemento memorable (CSS, sin librería de animación).
- Las reseñas van en texto plano (★★★★★) sin depender de widgets de terceros.
