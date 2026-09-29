# Hospital Veterinario Carson: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hospitalcarson.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/506-hospitalveterinariocarso/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 506-hospitalveterinariocarso`) |

## En una línea

El mismo hospital 24 horas, sus 23 servicios, sus planes con precio, sus teléfonos y su WhatsApp, en una sola página: sin testimonios de plantilla, con un perro o un gato dibujado que lleva de la parte del cuerpo al servicio, y el botón de urgencias siempre a la vista.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ver `qa/reporte-rediseno.json` → `antes`. Cada uno de sus 24 servicios tiene una página con el mismo texto genérico | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos; los servicios con su texto corto, agrupados |
| La foto de portada (cirujanos con lupas) no se pudo confirmar como propia | Se usan solo sus cinco fotos de galería, copiadas a .webp con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, servicios y planes en una sola página; los servicios en cuatro grupos (atención, especialidades, estudios, cuidado y trámites).
- Los planes de perros y gatos y la Membresía PetCare en tres tarjetas con sus precios "desde".
- Su horario diurno y nocturno se muestra en vivo junto al H1.

## Qué se agregó (no existía en el original)

- **"Del hocico a la cola"** (elemento memorable): un perro o un gato dibujado con seis puntos (ojos, dientes, corazón, riñones, huesos y articulaciones, piel y pelo); cada uno muestra los servicios del hospital para esa parte, con su texto y un WhatsApp con el servicio y la especie escritos, y al lado el aviso de urgencias con su teléfono.
- El indicador "Son las HH:MM: abierto, turno diurno/nocturno" con su propio horario.
- Textos nuestros: la entrada del elemento, los nombres de las zonas y de los grupos, "¿Es una emergencia?" (título), "Instalaciones", "Estamos aquí para ayudarte" (de su sitio) y los textos de los botones.
- Barra fija en el celular (Urgencias, WhatsApp, Cómo llegar); enlace a Google Maps; JSON-LD `VeterinaryCare` sin la calificación autodeclarada; Open Graph.

## Qué se quitó o no se usó

- Los tres testimonios del inicio (María Rodríguez, Juan López y Ana García, con iniciales en círculo): parecen de plantilla.
- La calificación "4.8 con 256 reseñas" de su JSON-LD: no aparece en la página ni se puede comprobar.
- "El mejor servicio de…" repetido en cada página de servicio, y la foto de portada.

## Qué se conserva al pie de la letra

- 24 horas / 365 días, +15 años, su texto de presentación y el de urgencias.
- Los 23 servicios con su descripción corta (se corrigieron "Laboratotrio" y "paceintes").
- Planes: vacunación perros desde $710, gatos desde $890; planes de salud perros desde $3,600, gatos desde $3,720; PetCare $1,900 al año.
- Dirección, teléfonos 55-72-58-45-83 y 55-59-22-61-94, WhatsApp 999 274 0946, correo, horario diurno (9:00 a 19:30) y nocturno (19:31 a 8:59) y el lema "Porque también sienten como Tú."

## Pendiente de confirmar con el cliente

- **WhatsApp 999 274 0946:** es lada de Mérida para un hospital en la CDMX; confirmar que sea el correcto.
- Si el turno nocturno tiene otros precios (su horario los distingue).
- Qué incluye cada plan de vacunación y de salud.
- Nombres de los especialistas y fotos del equipo.
- Si la foto de portada es propia.
- Redes sociales (el sitio no enlaza ninguna).

## Dónde está cada cosa

- Servicios, grupos, zonas, planes y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la silueta con zonas: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/static/images/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
