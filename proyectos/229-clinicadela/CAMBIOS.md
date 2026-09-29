# Clínica del Acné: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://clinicadelacne.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/229-clinicadela/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Misma doctora, mismos datos de contacto y credenciales; diseño médico limpio blanco/teal con condiciones expandibles y carrusel de reseñas reales.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 12 imágenes rotas (fotos de antes/después de acné y manchas no descargadas) | Solo se usan imágenes presentes localmente |
| 18 recursos fallidos (scripts, estilos externos) | Sin dependencias externas |
| Sin estructura semántica clara (solo H1 implícito) | H1 único: "Dermatóloga en Mérida" |
| Carrusel de reseñas solo en JavaScript antiguo | Reseñas en carrusel CSS scroll-snap nativo |

## Qué se cambió (mismo contenido, otra forma)

- Secciones reorganizadas: hero → currículum → especialidades → tratamientos → consulta online → reseñas → contacto
- Paleta reducida a blanco/slate/teal — legibilidad médica y confianza profesional
- Logo reemplazado por nombre de texto en footer (logo original era solo wordmark pequeño)

## Qué se agregó (no existía en el original)

- **Elemento memorable**: grid de condiciones expandibles — clic en cada padecimiento (Acné, Manchas, Alopecia, etc.) despliega descripción del enfoque de tratamiento
- Carrusel de reseñas navegable con flechas y scroll-snap
- Sección "Consulta en Línea" estructurada en 3 pasos visuales (era solo texto corrido)
- JSON-LD `Physician` con cédulas, especialidad y horario
- Botón de WhatsApp directo desde el hero

## Qué se quitó o no se usó

- Fotos de antes/después de pacientes (acne2-antes1.jpg, manchas-antes2.jpg, etc.) — no están en el clon local; quedarían rotas
- FAQ en HTML/JS antiguo — el contenido informativo se integró en las cards de condiciones
- Link a Twitter (presencia inactiva en el original)

## Qué se conserva al pie de la letra

- Nombre doctora: Dra. Reyna Beatriz Aguirre Trejo
- Cédulas: Profesional 775270 · Especialista 4111225
- Teléfono/WhatsApp: +52 999 328 7515
- Dirección: Calle 31E #275 por 24 y 26, Col. Miguel Alemán, Mérida, Yucatán
- Horario: Lunes a Viernes, 10:00 am – 8:00 pm
- Todas las credenciales académicas y hospitalarias
- Todos los textos de las 6 reseñas de pacientes (nombres reales)
- Link a Doctoralia para reserva online
- Facebook: facebook.com/clinicadeacne

## Pendiente de confirmar con el cliente

- Precio de la consulta presencial (no publicado en el sitio original)
- Precio de la consulta en línea (no publicado)
- Si los procedimientos cosméticos siguen activos (el sitio lleva desde 2015)

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Imágenes: se leen del clon en `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`)
