# Colegio Banting: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.colegiobanting.edu.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/250-colegiobanting/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 250-colegiobanting`) |

## En una línea

El mismo colegio de Coyoacán (modelo, inglés, seguridad, colegiatura, historia y testimonios) en una sola página, donde la familia elige el nivel de su hijo y la hora a la que pasa por él y ve su día completo hasta el horario extendido.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Agendador en iframe, asesor de voz, chat "Bantito" y videos de YouTube (ver `qa/reporte-rediseno.json` → `antes`) | Página sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos; la visita se agenda por WhatsApp |
| Dos retratos de testimonios son hechos con IA (`madre-valores-ai.jpg`, `padre-horarios-ai.jpg`) y llevan "verified" | No se usan; solo fotos reales de familias en eventos |
| La foto `padre-integral.jpg` (un papá con su hijo) dice "Madre de familia" | No se usa |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, nosotros, equipo, comunidad y modelo educativo en una sola página en vez de cinco.
- "Un día en Banting" (tres pestañas de horario) se volvió "¿A qué hora pasas por él?".
- Los cinco pilares del MEB en cinco tarjetas; la ruta de inglés como barras que crecen por etapa.
- Seis testimonios quedaron en tres; la historia en cinco fechas.

## Qué se agregó (no existía en el original)

- **"¿A qué hora pasas por él?"** (elemento memorable): se elige nivel (preescolar, primaria o secundaria) y hora de recogida, de la salida a las 19:00. Una franja de 6:30 a 19:00 pinta la jornada y, en amarillo, el tiempo en horario extendido; debajo va su día con los bloques reales y, al final, lo que incluye el extendido (supervisión, Club de Tareas, talleres y clubes). El WhatsApp pide informes con el nivel y la hora.
- Textos nuestros: el H1 y su entrada, la explicación del horario, las frases de cada servicio y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), enlace a Google Maps por dirección, JSON-LD `School` y Open Graph.

## Qué se quitó o no se usó

- Los retratos hechos con IA, la calificación "4.9/5" (es de su propia encuesta) y "verified".
- "Asesor 24/7", "Bantito" y el agendador en línea (no se pueden reproducir sin sus servicios).
- "GOOGLE REFERENCE SCHOOL 2026" como título (su historia dice que el reconocimiento fue en 2013–2015; se dejó así).
- "Servicios diseñados para la agenda de familias ejecutivas modernas", el calendario de eventos y las noticias (cambian cada semana).
- La sección de equipo docente (es texto general, sin nombres) y la invitación a trabajar quedó como el correo de empleos.
- Los carteles de seguridad y la tarjeta Kigo (son anuncios, no fotos).

## Qué se conserva al pie de la letra

- Horarios de "Un día en Banting": preescolar 9:00 a 13:30, primaria 7:45 a 14:30, secundaria 6:45 a 15:30, con sus bloques; horario extendido hasta las 19:00.
- Colegiatura desde $3,316 al mes y lo que incluye; servicios (comedor con nutriólogos para 2026-2027, Club de Tareas, transporte con rutas monitoreadas, talleres sin costo extra, clubes de robótica, arte y taekwondo).
- Modelo: cinco pilares, CLIL, docentes C1, certificación Oxford / Cambridge en 6º y 3º; lo que logra cada etapa.
- Seguridad: Kigo biométrico, QR para visitantes, CCTV, Psicopedagogía Preventiva, seguro y red de clínicas.
- Historia: 1994, Patricia Macías y Álvaro Salinas, seis alumnos, Frederick Banting, 2012, 2013–2015, 2015, 2017–2018.
- Contacto: Chichimecas MZ70 LT20, Ajusco, CP 04300, Coyoacán; 55 7583 9898 (WhatsApp y teléfono); admisiones@ y empleos@colegiobanting.edu.mx; oficina lunes a viernes 7:00 a 18:00; Instagram, Facebook y LinkedIn.

## Pendiente de confirmar con el cliente

- Costos por nivel y de inscripción (solo publican "desde $3,316").
- Horario del extendido: la oficina dice 7:00 a 18:00 y el extendido llega a las 19:00; secundaria entra a las 6:45.
- Si el horario extendido y el transporte tienen costo.
- Fotos reales de más familias, de las instalaciones y del laboratorio STEAM.

## Dónde está cada cosa

- Niveles, horarios, modelo, servicios y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "¿A qué hora pasas por él?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
