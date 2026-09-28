# Doggie's Hospital Veterinario: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://doggies.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/322-doggieshospital/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 322-doggieshospital`) |

## En una línea

Mismo hospital, mismas especialidades, servicios, cifras, hospitales y teléfonos; cambia la forma: un reloj de 24 horas contesta qué hospital te abre a la hora de tu urgencia, y sus fotos de sesión profesional ocupan el lugar de los perros recortados.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 52 de 52 imágenes rotas, 57 errores de consola y 45 recursos fallidos | 0, 0 y 0 |

## Qué se cambió (mismo contenido, otra forma)

- "Especialidades" y "Servicios" quedan como tarjetas con la foto de cada área (en su sitio las fotos están en pestañas o fondos).
- "Casos de éxito" pasa a tres cifras en la portada.
- Ortografía: "diagnóstico", "Entérate", "Quiénes somos", "está compuesto".

## Qué se agregó (no existía en el original)

- El elemento **"¿A qué hora es tu urgencia?"** (`Reloj`, `horaMonterrey`, `textoHora` en `App.tsx`): reloj de 24 horas con la hora actual de Monterrey, control deslizable y estado de cada hospital.
- Enlaces "Cómo llegar" a Google Maps por hospital; botón de urgencias fijo en encabezado y barra del celular.
- WhatsApp con el número de urgencias (su sitio no publica WhatsApp; confirmar).
- JSON-LD `VeterinaryCare` por hospital (Especialidades con horario 24/7); meta description (el original no tiene); Open Graph.
- Textos nuestros: "¿A qué hora es tu urgencia?" y su explicación, "Abierto: 24 horas", "Horario no publicado", "Llamar antes", "Sin teléfono publicado: llama a Especialidades.", "de día / de noche", "Volver a la hora actual", "Especialistas para cada caso", "Todo en el mismo lugar", "Tres hospitales al sur de Monterrey", "Ver los 3 hospitales" y los pies de foto.

## Qué se quitó o no se usó

- Los perros recortados de la portada (foto-portada y perrito-portada), las formas punteadas y el cursor de patita.
- El formulario "Indícanos cuál es tu caso" (se sustituye por WhatsApp y correo).
- "La más alta tecnología" y "los mejores especialistas".

## Qué se conserva al pie de la letra

- Fundación en 1978 por el MVZ. Fernando Rafael Pérez Leal, "Rumbo a los primeros 50 años…", más de 45 años, 3 clínicas.
- Textos de las 6 especialidades, nombres de los 6 servicios, cifras (10,000+ cirugías al año, 30,000+ pacientes, 98%).
- Direcciones y teléfonos de los hospitales, correo, Instagram, Facebook y Eye Clinic.

## Pendiente de confirmar con el cliente

- **Horario de Doggie's Serena y Doggie's Sur**, y teléfono de Sur.
- Número de WhatsApp (el rediseño usa el de urgencias).
- Si la fachada de la foto es la de Doggie's Sur (así la nombra el archivo).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el reloj: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/images/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
