# International X Dental: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://internationalx.dental/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/581-internationalxdental/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 581-internationalxdental`) |

## En una línea

Mismos datos del negocio (teléfonos, dirección, especialistas, servicios, testimonios), presentados en un sitio de una página sin desborde, sin scripts de terceros rotos, y con un comparador de precios México vs. EE.UU. que expresa el argumento central del negocio: ahorrar hasta 70% cruzando la frontera.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Desborde horizontal: 118px escritorio, 109px móvil (menú de WordPress) | 0 px de desborde en ambas vistas |
| 2 recursos externos con 403 (AWS mfesecure) | No se usan scripts de terceros |
| Timeout de 45 segundos al cargar (scripts externos bloqueados) | Carga instantánea, sin dependencias externas |
| Carrusel de YouTube sin funcionar localmente | Eliminado; se menciona la galería de videos con enlace externo |
| Widget de reseñas Trustindex sin funcionar localmente | Reemplazado por 4 testimonios textuales reales + número de reseñas |
| Tres menús de navegación duplicados en el HTML | Un solo menú de navegación |
| Íconos decorativos sin alt descriptivo | Todos los iconos con aria-hidden o alt descriptivo |
| Un ícono de "Por qué elegirnos" generado con ChatGPT-image | No se usa |

## Qué se cambió (mismo contenido, otra forma)

- Los tres bloques de servicio (Cosmética, Restauración, Prevención) se mantienen como tarjetas pero con las fotos reales del clon
- Los nueve especialistas conservan sus nombres y cargos del sitio original
- Los cuatro testimonios son citas textuales del sitio (dos en inglés, dos en español, como en el original)
- Los teléfonos, direcciones, horarios y email son los del sitio original
- El WhatsApp usa el número real del botón flotante del sitio (526561380872)
- La tipografía cambia a Cormorant Garamond (títulos) + Inter (cuerpo), más elegante y alineada con el estilo "dental de lujo" que el propio sitio proclama
- La paleta se mantiene en el azul corporativo (#1B4D9B) del logo original

## Qué se agregó (no existía en el original)

- **"¿Cuánto ahorras cruzando la frontera?"**: comparador de precios México vs. EE.UU. con 7 tratamientos seleccionables, ahorro en % y dólares, y botón de WhatsApp prellenado con el tratamiento elegido. Los precios de EE.UU. son promedios de referencia públicos (CostHelper Dental 2024), declarados como tales; los de Ciudad Juárez son aproximados de la página de precios del negocio (pendiente verificar si hay cambios de precios con el cliente)
- Barra fija móvil con WhatsApp, llamada y Google Maps (no existía)
- JSON-LD tipo `Dentist` con dirección, horarios y teléfonos reales
- Open Graph y title/description correctos
- Favicon con el ícono de la marca

## Qué se quitó o no se usó

- Galería de videos de YouTube (no funciona localmente; el sitio tiene enlace externo)
- Widget de reseñas de Trustindex (no funciona localmente; se usan testimonios en texto)
- Formulario de contacto (se prefiere WhatsApp según el comportamiento del sitio original)
- Boletín por correo electrónico (no relevante para una propuesta de rediseño)
- El ícono generado con ChatGPT-image en la sección "Por qué elegirnos" (`chatgpt-image-7-ago-2026.png`)
- El video .mov del hero (peso alto; no corre en XAMPP sin servidor HTTP)

## Qué se conserva al pie de la letra

- Todos los nombres y especialidades del equipo médico
- Todos los teléfonos, emails y redes sociales
- Todas las direcciones (Juárez y Cancún) y horarios
- Los textos descriptivos de los tres tipos de tratamiento
- Los cuatro testimonios en su idioma original

## Pendiente de confirmar con el cliente

- Precios exactos en USD de cada tratamiento (la página /en/pricesinternational/ puede haber cambiado)
- Confirmación del servicio de traslado (mencionado en "Por qué elegirnos")
- Si la información de dos sucursales en Las Torres (Nuevo Juárez) y Cancún está actualizada
- El teléfono (656) 411-0154 y (654) 411-0154 aparecen en distintas partes del sitio: confirmar cuál es correcto

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: `assets/web/*.webp` (copias .webp de `sitio/assets/wp-content/uploads/`, generadas por `rediseno/fotos-web.mjs`)
- Fotos convertidas: `fotos-web.mjs` — ejecutar con `node fotos-web.mjs` desde la carpeta `rediseno/`
