# Clínica Dental Justsmiles: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.justsmiles.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/232-clinicadentaljustsmiles/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 232-clinicadentaljustsmiles`) |

## En una línea

La misma clínica, sus textos en inglés, su equipo, su horario, sus teléfonos y su WhatsApp, en una sola página sin fotos de banco ni reseñas de plantilla, con un planificador que acomoda la cita dentro de los días del viaje a Vallarta y la manda por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Plantilla de Bootstrap con slider, contadores animados y fuentes de íconos; el logo (`logoJM.png`) no se descargó (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos; el nombre va como texto con el verde de su uniforme |
| Casi todas las fotos (slider, servicios, "misc") son de banco | Solo los cuatro retratos propios del equipo, copiados a .webp en `assets/web/` con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Cinco páginas (inicio, who we are, services, implantes y periodoncia) en una sola; los seis servicios en secciones que se abren, con el detalle de implantes y periodoncia.
- El equipo: Dr. Martín Guillén en la portada y los cuatro en su sección.
- Las reseñas de su inicio en columnas, una sola vez (su carrusel las repite).

## Qué se agregó (no existía en el original)

- **"Book around your Vallarta trip"** (elemento memorable): el paciente elige el día que llega, las noches y el servicio; sus días aparecen con el horario real de la clínica (lunes a viernes 9:00 a 20:00, sábado 9:00 a 13:00, domingo cerrado), toca el que le conviene y el WhatsApp sale con sus fechas y el día elegido. Además calcula la siguiente revisión a 6 meses, según su propia FAQ.
- Textos nuestros (en inglés): el H1 "Dental specialists in Puerto Vallarta", el título y la entrada del planificador, "7 of your 8 days the clinic is open", "Next check-up: about…", "Complete care for every smile" (su título de servicios), "What patients say", "Check-up and cleaning" como opción de servicio (de su FAQ) y los textos de los botones.
- WhatsApp con mensaje prellenado en cada servicio; barra fija en el celular (WhatsApp, Call, Directions); enlace a Google Maps.
- JSON-LD de tipo `Dentist` con dirección, horario y año de fundación; Open Graph; `hreflang` a su versión en español; `alt` en todas las fotos.

## Qué se quitó o no se usó

- Los contadores "20+ years, 10,000+ happy patients, 8 specialists, 800 implants": los 20 años contradicen "since 1987" y las cifras no se pueden confirmar.
- Las cinco reseñas de la página de periodoncia (Elena R., Carlos F., Aisha B., Jessica M., Darren K.), que hablan de carillas y blanqueamiento y parecen de plantilla, y el texto de odontología estética de esa página.
- "Long-lasting results" en la FAQ del blanqueamiento y "painless"; las secciones "Why choose us" repetidas.
- Las reseñas de Jorge de la Torre y Leonardo Luviano (se dejaron seis de ocho).
- La calificación de Google en el JSON-LD (Google no acepta que el negocio marque sus propias reseñas); sí se muestra en la página.

## Qué se conserva al pie de la letra

- Since 1987; sus textos de "Why choose", misión y los tres puntos; los seis servicios y el detalle de implantes y periodoncia.
- Dr. Martín Guillén, Dra. Fernanda Lara, Dr. Manuel Martínez y Dra. Guillermina Estrada, "Dental Specialist".
- Google Rating 4.7, based on 42 reviews (como lo muestra su sitio).
- Basilio Badillo 311, Col. Emiliano Zapata; horario; teléfonos +52 322 223 05 05, 223 29 90 y 688 55 57; WhatsApp 322 136 3030; atencionaclientes@justsmiles.com.mx; Facebook e Instagram.
- Sus cuatro preguntas frecuentes (la del blanqueamiento sin "long-lasting results").

## Pendiente de confirmar con el cliente

- **Años de experiencia:** sus contadores dicen 20+, su texto dice "since 1987" y "over 35 years".
- Si el planificador puede ofrecer citas el mismo día de llegada o de salida.
- El logo en buena calidad (no está en el clon).
- Especialidad de cada dentista y si Dra. Monica Moreno y Dr. Jorge (mencionados en reseñas) siguen en el equipo.
- Fotos del consultorio y de la sala (solo hay retratos).
- Si "same-day emergency care" sigue vigente.

## Dónde está cada cosa

- Textos, horario, servicios, equipo, reseñas y FAQ: `rediseno/src/data/content.ts`
- Diseño, secciones y el planificador del viaje: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/images/team/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
