# Explora Valle: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://exploravalle.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima. Hecho en la PC |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/405-exploravalle/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 405-exploravalle`) |

## En una línea

Mismo negocio, mismas diez experiencias principales con sus precios, horarios de reserva, reglas y contacto; en vez de una portada de WordPress (tema Adventure Tours) con carrusel, carrito en inglés a medias y diez páginas de ficha, una sola página donde tomas una postal, eliges día, hora y personas, y la mandas por WhatsApp con todo escrito.

## Qué estaba roto o incompleto en el clon

Sacado de `qa/reporte-rediseno.json` → `antes` y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 119 errores de consola y 4 recursos fallidos (escritorio y celular): `email-decode.min.js` de Cloudflare (2), el fondo `uploads/2019/08/7-1.jpg` y `ticketing.umd.min.js` de GetYourGuide | 0 errores y 0 recursos fallidos; sin scripts de terceros |
| El carrusel de portada (Revolution Slider) sale sin sus fotos grandes: solo textos en mayúsculas sobre un hueco | Portada con H1, su frase, datos clave y la panorámica del lago |
| Las cifras "Clientes Felices / Visitas Por Año / Tours Realizados" se quedan en 0 | Se quitaron (ver abajo) |
| Carrito, buscador "Find Tours", widget de reseñas de Google y chat de Joinchat no funcionan en local | Reserva por WhatsApp con mensaje completo; 4.9 y dos reseñas como texto |
| Sin H1 en la portada | Un solo H1: "Tours y experiencias en Valle de Bravo" |
| 4,513 px en escritorio y 6,875 px en el celular | 4,909 px en escritorio y 9,296 px en el celular (más alto porque ahora están las diez fichas, sus reglas y el contacto completo) |

## Qué se cambió (mismo contenido, otra forma)

- **"Experiencias más vendidas" (cinco tarjetas), el menú de tours y las diez páginas de ficha → "Manda tu postal de Valle"** (elemento memorable): un exhibidor con las diez experiencias agrupadas en Por tierra (bicicleta, cuatrimoto, cabalgata), En el lago (kayak, lancha) y Recorridos por Valle (cascadas, La Peña, la Stupa, Todo Valle, guía turístico).
- **"Additional information" de cada ficha** (qué necesito, qué incluye, puntos destacados, personas incluidas en el precio, punto de encuentro, duración, días, horario, edad mínima) → la ficha bajo la postal, con los mismos datos y en español.
- **"Book the tour" con sus horas** → botones de hora con los horarios de su sistema de reservas. En tres se quitaron las horas que caen fuera del "Horario disponible" publicado en la misma ficha: cabalgata (16:30 y 17:00, su horario es 9:30 a 4:00 pm), lancha (09:00, su horario es 10 am a 6:30 pm) y guía turístico (09:00, su horario es 9:30 a 5:00).
- **"Información adicional" y "Política de devoluciones y cancelaciones"** (repetidas en cada ficha) → sección "Antes de venir" con seis puntos, redactados más corto con sus mismas reglas.
- **Texto "Paraíso entre montañas…"** → sección "Valle de Bravo" con cuatro datos tomados de sus fichas (35 m del Velo de Novia; 60 km desde el Nevado de Toluca; 150 millones de años de La Peña; fundación en 1532, raíces matlatzincas).
- **El resto de su menú** (senderismo, rapel, RZR, cañonismo, velero, stand up paddle, parapente, mariposa monarca, lunada, team building) → lista "También organizamos" con enlace a su página y WhatsApp, sin precios.
- **Widget de reseñas de Google** → la calificación 4.9 y dos reseñas completas.
- **Contacto** (cabecera, pie y mapa incrustado de Google) → sección "Visítanos o escríbenos" con dirección, enlace a Google Maps, teléfono como enlace, WhatsApp, los dos correos y redes. El mapa incrustado se cambió por un enlace.
- **WhatsApp**: su botón (Joinchat) usa el 5217228519081 con el mensaje "¡Hola! 👋 vengo de tú página web, busco descuentos de actividades en Valle de Bravo. ¡Me puedes brindar más información!"; el rediseño usa `wa.me/527228519081` (mismo número) con un mensaje parecido sin limitarlo a descuentos, y en la postal un mensaje con experiencia, fecha, hora, personas y total.
- Paleta: el naranja de su símbolo (#e96b00), su verde (#007b37) llevado a un verde bosque, el azul del lago de su panorámica, papel y tinta de postal. Tipografía: Nunito (la de su tema) con Zilla Slab para títulos y Caveat para lo "escrito a mano".
- Correcciones mínimas en sus textos: "tú familia" → "tu familia", "Rincon" → "Rincón", "esqui" → "esquí", "Trasporte" → "Transporte", "Platicas" → "Pláticas", "1:oo hrs" → "1:00 h", mayúsculas y puntos. Las descripciones se recortaron (por ejemplo, se quitó "Palabras Clave: paseos, remar…" del kayak y las frases sobre calorías de la bicicleta).
- Title, meta description, Open Graph y JSON-LD nuevos.

## Qué se agregó (no existía en el original)

- **El elemento "Manda tu postal de Valle"**:
  - Exhibidor de diez postales (en el celular, al tomar una, la pantalla baja a la postal).
  - Frente: su foto en bicicleta, cuatrimoto, cabalgata, kayak y lancha; en cascadas, La Peña, la Stupa, Todo Valle y guía turístico, una ilustración en SVG hecha por nosotros (el clon no trae fotos de esos tours). Pie "Saludos desde Valle de Bravo".
  - Reverso: matasellos con el día y la hora elegidos ("VALLE DE BRAVO · EDO. MÉX."), timbre con el precio actual y el anterior tachado, texto "escrito a mano" armado con sus datos (puntos que visitas y duración) y la dirección de la oficina como destinatario.
  - Controles: fecha (por omisión, el próximo sábado con la hora de Ciudad de México), hora (sus horarios) y personas (1 a 30). Calcula las unidades con la regla de su precio: por persona; kayak doble para 2; lancha hasta 5; cuatrimoto para quien maneja y 1 acompañante ("Invitados permitidos: 1 persona"); guía de 1 a 30 personas. Muestra total y "ahorras" (diferencia con su precio anterior).
  - Avisos con sus reglas: bicicleta de viernes a domingo (si eliges de lunes a jueves), mínimo 3 personas en la Stupa, cuatrimoto con mayor de 18 que maneje, ruta mixta, no recomendada con problemas de espalda o cadera ni en el embarazo, sin toallas en kayak, sin entradas en la Stupa, guía en tu vehículo, 3 pausas en La Peña, grupos de 1 a 40 en bicicleta.
  - Datos en `rediseno/src/data/content.ts`, tomados de `crudo.json` (Guía, Todo Valle, Cascadas) y, para las otras siete, de sus fichas leídas con curl el 2026-09-27 (solo texto).
- Textos redactados por nosotros: "Explora Valle, con guías Vallesanos"; los cuatro datos de la portada y sus leyendas; el pie de la panorámica; "Elige tu postal", "Escribir por WhatsApp", "Reservar por WhatsApp"; "Manda tu postal de Valle" y su párrafo; "Por tierra", "En el lago", "Recorridos por Valle"; "Saludos desde Valle de Bravo"; "¡Hola, Explora Valle!", "Somos N para … el … a las …", "Voy yo", "Vamos a … Son …", "Para: Explora Valle"; los nombres cortos de cada experiencia y su "acción" (por ejemplo "remar en kayak"); "¿Qué día vienes?", "¿A qué hora?", "¿Cuántas personas?"; el total, "ahorras … contra el precio anterior", las etiquetas de la ficha; los textos de los avisos (con sus reglas); "Enviar postal por WhatsApp", "Ver su ficha" y la nota bajo el botón; los mensajes de WhatsApp; "También organizamos" y su párrafo; los cuatro datos de "Valle de Bravo" (con sus cifras); los títulos y el texto resumido de "Antes de venir" (incluida "Los tours que lo incluyen lo dicen en su postal"); "de calificación en Google"; "Visítanos o escríbenos" y "Nuestra oficina está en el centro de Valle de Bravo. Ahí se firman las responsivas y salen la mayoría de los recorridos" (siete de las diez fichas dan la oficina como punto de encuentro); la nota de precios del pie; los textos alternativos y las etiquetas de accesibilidad.
- WhatsApp con mensaje prellenado (general, "otras experiencias" y la postal).
- Enlace a Google Maps (búsqueda de "Explora Valle Mx" con su dirección).
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.
- JSON-LD `TravelAgency` con dirección, coordenadas (las de su mapa incrustado), teléfono, correo, redes y diez `Offer` de `TouristTrip` con su precio; Open Graph con la panorámica; favicon con su símbolo naranja.
- `prefers-reduced-motion`: la caída de la postal, el matasellos y el desplazamiento suave se apagan.

## Qué se quitó o no se usó

- Las fotos de perfil de las reseñas de Google (`uploads/2023/*/ChIJ…jpg`) y el avatar genérico.
- Los logos del carrusel (Visit México, Pueblo Mágico, Viajemos Todos, Edomex, Ecoaventura, AMTAVE, Coparmex, AFN, Best Day, PlayStation, Bimbo, Danone, Thona Seguros, Motul, Bonafont, Ford Sánchez): su sitio no dice si son clientes, afiliaciones o patrocinadores (pendiente).
- Las cifras 3,925 clientes felices, 3,115 visitas por año y 1,089 tours realizados (valores del contador en `original.html`): no sabemos de cuándo son.
- Las reseñas de sus fichas (una por ficha, casi todas del 1 y 19 de julio de 2024) y las de TripAdvisor sin texto completo; las de Google cortadas con "leer más".
- Los textos en mayúsculas del carrusel ("EXPERIMENTA EL SUEÑO DEL HOMBRE VOLANDO…") y "Find Tours", "Book the tour", "You May Also Like", carrito, buscador y formulario de reseñas.
- La página Hoteles del menú (no se revisó).
- El video y el globo de Joinchat.

## Qué se conserva al pie de la letra

- Nombre, lema "Tours en Valle de Bravo" (en el JSON-LD), logotipo blanco y símbolo.
- Teléfono y WhatsApp 722 851 90 81; contacto@exploravalle.com y atencionaclientes@exploravalle.com; horario de oficina 9:00 - 19:00 hrs; Rincón San Vicente #13, Col. Centro, Valle de Bravo; Facebook exploravalle1, Instagram exploravalle, Twitter ExploraValle1.
- Precios actuales y anteriores: bicicleta $650 ($850), cuatrimoto $1,000 ($1,200), cabalgata $650 ($750), kayak doble $549 ($649), lancha $1,700 ($1,800), cascadas $349 ($449), La Peña $350 ($500), la Stupa $400 ($489), Todo Valle $600 ($750), guía turístico $1,600 ($1,900).
- Duraciones, días, edades mínimas, qué incluye, qué llevar, puntos destacados y puntos de encuentro de cada ficha.
- "Ven y encuéntrate a ti mismo conociendo la gran diversidad de tours en Valle de Bravo así como actividades recreativas y extremas." y "Paraíso entre montañas…".
- Google 4.9 y las reseñas "Excelente servicio y atención" (El Yuliusss) y "Muy buen instructor.. una experiencia que no puedes dejar pasar" (karla solis).

## Pendiente de confirmar con el cliente

- Si el acompañante de la cuatrimoto paga (su título dice "Promoción 2x1"; la ficha dice 1 persona incluida y 1 invitado permitido). El rediseño cuenta una cuatrimoto por cada 2 personas y pide confirmarlo.
- Los precios de los títulos que ve Google: lancha "desde $1000" (la ficha cobra $1,700) y la Stupa "en $350" (la ficha cobra $400). El rediseño usa el precio de la ficha.
- El punto de encuentro de la Stupa: su ficha dice Rincón San Vicente **#7**; las demás, #13. El rediseño pone #13.
- Los horarios de reserva que no coinciden con el horario publicado (cabalgata, lancha, guía turístico, ver arriba) y el "9:30am y 5:30 pm" de la cuatrimoto.
- Qué días abre la oficina (solo publica 9:00 - 19:00 hrs; no se puso `openingHours` en el JSON-LD).
- La panorámica: si es foto suya (no tiene marca de agua; viene editada en Photoshop y ya oscurecida) y si tienen el original sin oscurecer y en mayor tamaño.
- Fotos propias de cascadas, La Peña, la Stupa y los recorridos por el pueblo, y versiones grandes de las cinco que hay (360 × 240 px).
- Qué representan los logos del carrusel.
- Precios de las demás experiencias ("También organizamos").

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; medidas de imágenes: `rediseno/src/data/fotos.json` (lo escribe `fotos-web.mjs`).
- Diseño y secciones: `rediseno/src/App.tsx` (la postal es `Postal`, con `Timbre`, `Matasellos` y `Dibujo` para las ilustraciones).
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`).
- Imágenes: copias .webp en `assets/web/` (cinco fotos de experiencias, la panorámica, el logotipo y el favicon), generadas desde el clon con `node fotos-web.mjs` en `rediseno/`. `assets/web/` es el `publicDir`; no va en el commit del rediseño y se regenera con ese script antes de `npm run build`. No se descargó ninguna imagen nueva.

## QA final

| Vista | Alto | H1 | Imágenes | Rotas | Errores | Fallidos | Desborde |
|---|---|---|---|---|---|---|---|
| Escritorio (1280 px) | 4,909 px | 1 | 8 | 0 | 0 | 0 | 0 |
| Móvil (390 px) | 9,296 px | 1 | 8 | 0 | 0 | 0 | 0 |

Verificado en XAMPP con `herramientas/verificar-xampp.mjs` (ok).
