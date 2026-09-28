# Kadampa Cuernavaca: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.kadampacuernavaca.org/ (Odoo 19) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/601-kadampacuernavaca/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 601-kadampacuernavaca`) |

## En una línea

Mismo centro, mismas clases, horarios, aportaciones, maestros y textos; cambia que todo lo que estaba repartido en cinco páginas (y en una imagen de calendario) queda en una sola, con un calendario de dos semanas que dice cuál es la próxima práctica y la aparta por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 4 imágenes rotas (logotipo del encabezado, logotipo rectangular y dos retratos de las tarjetas) | Logotipos servidos desde `assets/web/`; los retratos de las tarjetas son de banco y no se usan. 0 rotas |
| 18 recursos con 404 en escritorio y 12 en móvil (scripts y CSS de Odoo), carrusel de clases sin moverse | Sin carruseles ni scripts de terceros; 0 fallidos y 0 errores de consola |
| 7 H1 en la portada | Un solo H1 ("Kadampa Cuernavaca") |
| El clon no trae la fachada ni las fotos de la maestra (están en /contactus, /nosotros y /nuestrasclases) | Se bajaron con curl a `assets/originales/` (ver `FUENTE.txt`) y se usan en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Nosotros, Nuestras clases, Clases (carteles), Calendario y Eventos especiales se juntan en una página con menú de anclas.
- Las clases, que en el original están en carruseles y carteles, van como texto: horario y aportación en una línea y la descripción debajo.
- Los horarios de su calendario (que solo existe como imagen) pasan a datos (`src/data/content.ts`) para que el calendario los use.
- Las fotos del clon y del sitio se convierten a .webp (2.6 MB a 1.0 MB) con `rediseno/fotos-web.mjs`.
- "Puyhas" se escribe "puyas" (grafía habitual en español de los centros Kadampa); ver pendientes.
- Los tres eventos de La Rueda de la Vida se muestran en un solo renglón con sus siguientes fechas.

## Qué se agregó (no existía en el original)

- **Catorce lámparas** (elemento distintivo): catorce días desde hoy con la hora de Cuernavaca; lámpara encendida si hay práctica, azul si hay evento especial u oración de fecha fija; filtro por lugar; lista del día con hora, lugar, maestro y aportación; "La siguiente", "Ya pasó hoy" y "Avisar que voy" (WhatsApp con práctica, día, hora y lugar). Tarjeta "La siguiente práctica" en la portada.
- Botones de WhatsApp con mensaje prellenado en cada clase, puyas, programas y eventos (el original usa `wa.me` sin mensaje).
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar. Enlaces "Cómo llegar" (búsqueda de Google Maps) para Centro Histórico, Tepoztlán y Jojutla.
- JSON-LD `PlaceOfWorship` + `LocalBusiness` con dirección, coordenadas (las de su enlace de Maps), teléfono, redes y sus eventos con fecha; title, description y Open Graph.
- "Antes de un evento": tres puntos resumidos de sus términos y condiciones.
- Textos redactados por nosotros: "Catorce lámparas: tus próximas dos semanas en el centro" y su explicación, "¿Dónde te queda mejor?", la nota "El centro publica cada mes su calendario y a veces suspende actividades… confírmalo por WhatsApp", "La siguiente práctica", "Avisar que voy", "Ya pasó hoy", "Este día no hay prácticas publicadas", "Ver las próximas dos semanas", "Inscribirme por WhatsApp", "Informes por WhatsApp", "Pedir información", "Preguntar", "Lo que Gueshe‑la ha hecho posible", "A diferencia de las clases regulares, requieren inscripción previa" (de la leyenda de su calendario), "Enseña las clases del Programa General…" y "También enseñan en el centro…" (de sus horarios), "Un libro del venerable Gueshe Kelsang Gyatso, gratis en línea", "Charla especial…" y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- Fotos de banco: los dos retratos de estudio de las tarjetas, `vecteezy_cute-attractive-teenage-girl…`, `dul.jpg`, `dsf.jpg`, `234.jpg` y los carteles que llevan modelos de banco.
- Carteles como imagen (el texto se usa como dato), la imagen del calendario, las fotos de templos de otros países y el logotipo "Budismo Kadampa NKT-IKBU".
- Carrito, "Identificarse" y el pie "Con tecnología de Odoo".
- El texto "Libérate de los problemas de: enojo, tristeza, ansiedad, apego" (cartel del Centro Histórico) y la descripción de la charla que menciona la depresión: son afirmaciones de salud.
- La cita "métodos científicos para mejorar nuestra naturaleza humana" del eBook.
- La cita larga de Gueshe-la sobre los templos y los párrafos largos del ITP (se resumió con sus mismas frases).
- Eventos pasados (Rueda de la Vida del 6 de septiembre, charla del 26 de septiembre, festival CDDM 2025).

## Qué se conserva al pie de la letra

- "Que todos sean felices", su texto de origen, "Sin paz interior, la paz externa es imposible…", "Estamos aquí, para ti", los cuatro pasos de "¿Cómo ir a una clase?", las descripciones de las clases, puyas, Programa Fundamental, la Nueva Tradición Kadampa, Gueshe-la, el linaje y los logros (recortados), el Proyecto Internacional de Templos.
- Horarios y aportaciones: Programa General martes 10:00 y miércoles 19:00 ($70), Aprende a meditar jueves 19:00 ($70), Oraciones por la paz domingos 12:00 (donativo voluntario), Niños martes 17:00 a 18:00 ($70), Gema del corazón miércoles 12:00, Gema que colma todos los deseos domingo 10:00, Ofrenda al Guía Espiritual días 10 y 25, Melodioso Tambor día 29; Tepoztlán miércoles 16:30 y 18:00 ($60); Jojutla miércoles 19:00 ($50); Centro Histórico martes 18:00 ($60, de su cartel); Jiutepec jueves 10:30 y Yautepec lunes 15:00 (de su calendario de septiembre de 2026).
- Eventos: La Rueda de la Vida 4 de octubre, 8 de noviembre y 6 de diciembre de 2026, 16:00 a 19:00, $200; charla Aprende a soltar 24 de octubre de 2026, 17:00 a 20:30; retiro de Vajrayoguini del 3 al 31 de enero de 2027 en Tepoztlán (de su cartel).
- Contacto: 777 565 6011 (teléfono y WhatsApp), educacion@ e info@meditarencuernavaca.org, Río Conchos 321, Col. Vista Hermosa, 62290, su enlace de Maps, Instagram y Facebook (@meditarencuerna, a donde redirigen sus enlaces).

## Pendiente de confirmar con el cliente

- Hora de la Ofrenda al Guía Espiritual (10 y 25) y del Melodioso Tambor (29): el sitio no la publica y su calendario de septiembre las pone en otros días (Ofrenda el 10 y el 24 a las 7:30; Melodioso Tambor el 28 a las 16:00).
- Gema del corazón: el sitio dice solo miércoles 12:00; el calendario también la pone martes 12:00, jueves 9:30 y domingo 17:00.
- Direcciones de Jiutepec y Yautepec, y si esas clases siguen en octubre.
- Aportación de la charla Aprende a soltar (su página copia los datos de la charla anterior: $250, $200 con pronto pago hasta el 24 de septiembre) y del retiro de Vajrayoguini (su enlace de reserva da "Page Not Found").
- Si la clase para niños la da "María Fernanda Cano" (Inicio) o "Fernanda Cano" (Nuestras clases).
- "Puyhas" o "puyas".
- Días de suspensión de actividades en octubre y noviembre.
- Si prefieren inscripción por WhatsApp o por su sistema de eventos de Odoo para las clases regulares.
- Autorización para usar el retrato de Gueshe Kelsang Gyatso y la ilustración de Je Tsongkhapa (los publica el centro, pero son de la NKT).

## Dónde está cada cosa

- Textos y datos (horarios, lugares, eventos): `rediseno/src/data/content.ts`
- Diseño, secciones y calendario de lámparas: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- SEO y JSON-LD: `rediseno/index.html`
- Imágenes: `assets/web/` (publicDir), generadas por `rediseno/fotos-web.mjs` desde el clon (`sitio/assets/web/image/`) y `assets/originales/`
