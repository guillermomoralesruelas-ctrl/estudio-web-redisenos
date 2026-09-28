# Dr. Daniel Robles Pereyra — diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://drdanielrobles.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/330-drdanielrobles/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismos datos del consultorio, mismas credenciales y los mismos procedimientos del Dr. Daniel Robles; en vez de un sitio multi-página con CSS roto en el clon, una página moderna con silueta interactiva para descubrir procedimientos y WhatsApp prellenado.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| CSS principal (`main.css`) con 404 — el sitio aparecía sin estilos | Rediseño construido desde cero con Tailwind |
| Scripts (`main.js`, `forms.js`, `custom_scripts.js`) con 404 | Sin dependencias externas; todo es React/TypeScript |
| 11 imágenes rotas (rutas a `/img/` en vez de `/assets/img/`) | Imágenes copiadas a `assets/web/` como .webp y referenciadas correctamente |
| Desborde horizontal de 29 px en móvil | Desborde 0 en el rediseño |
| 18 errores de consola | 0 errores en el rediseño |

## Qué se cambió (mismo contenido, otra forma)

- El sitio original es multi-página (inicio, nosotros, procedimientos individuales). El rediseño es una sola página navegable por anclas.
- Los procedimientos se presentaban como listas de texto plano. Ahora hay una silueta SVG interactiva que conecta la zona del cuerpo con la lista de procedimientos de esa área.
- Los testimonios eran un carrusel que no funcionaba en el clon; ahora son tarjetas estáticas.
- La sección de categorías de procedimientos usaba las imágenes de menú de 390×200 px; el rediseño usa las versiones de 600×720 px (mayor calidad).
- Los logos de hospitales y credenciales, que estaban rotos en el clon, aparecen correctamente.

## Qué se agregó (no existía en el original)

- **Elemento memorable:** "¿Qué área quieres trabajar?" — silueta SVG del cuerpo con cuatro zonas tocables (cara, pecho, cuerpo, sin bisturí). Al tocar una zona se abre la lista de procedimientos de esa área y cada procedimiento lanza WhatsApp con el nombre del procedimiento ya escrito. El usuario que no sabe exactamente qué procedimiento necesita puede encontrarlo visualmente.
- Barra móvil fija con accesos directos a WhatsApp, llamar y Google Maps.
- WhatsApp prellenado en todos los CTAs con mensaje contextual (`wa.me/523336400933?text=...`).
- JSON-LD correcto con tipos `["Physician", "MedicalBusiness"]`, `medicalSpecialty: "PlasticSurgery"`, dirección, teléfonos y redes.
- Meta description real (antes era genérica y no describía el negocio).
- Open Graph completo.
- Favicon (copiado del original).
- Tipografía Montserrat del propio sitio, cargada desde `@fontsource` (sin Google Fonts).
- Paleta de colores fiel al original: azul `#0277BD`, fondos `#FCFCFC`, tinta `#202124`.

## Qué se quitó o no se usó

- El formulario de contacto (no había backend y el formulario del original no enviaba nada en el clon).
- Las páginas internas de cada procedimiento (en el rediseño el contacto se hace por WhatsApp desde el elemento interactivo).
- La imagen `nuestra-filosofia-dr-robles.webp` y `instalaciones.webp` no estaban en el clon (solo en el sitio en vivo); se omitieron del rediseño.
- La imagen `down-button.webp` (flecha decorativa del hero) — sin función en un rediseño de página completa.
- `minerva.webp` (figura decorativa) — no hay texto de contexto para usarla.
- `follow-us-insta.webp` — imagen decorativa de Instagram sin función; se reemplaza con enlace de texto.
- `ssl.webp` — icono de seguridad que se presume en todos los sitios modernos.

## Qué se conserva al pie de la letra

- Nombre completo del doctor: Dr. Daniel Robles Pereyra.
- Credenciales exactas: DGP UAG 2276610, Cédula Especialista UDG 3872854, CMCPER Núm. 1185.
- Teléfonos: (33) 3640 0933 y (33) 3640 0998.
- Dirección: Av. Providencia #2915, Col. Providencia, Guadalajara, Jalisco.
- Los 30 procedimientos con sus nombres exactos del sitio original.
- Los 5 testimonios de Sara, Helen, Roxana, Maru y Ma. Eugenia (texto original con corrección ortográfica mínima).
- Los 7 logos de hospitales colaboradores.
- Las 4 asociaciones de credenciales (ASPS, CMCPER, AMCPER, ISAPS).
- Los enlaces a Facebook y a Instagram.
- El enlace al Aviso de Privacidad.

## Pendiente de confirmar con el cliente

- El sitio no publica WhatsApp; se usó el número de teléfono (33) 3640 0933 como número de WhatsApp (convertido a formato internacional `52 33 3640 0933`). Confirmar si tiene WhatsApp en ese número o en otro.
- Las imágenes `nuestra-filosofia-dr-robles.webp` e `instalaciones.webp` existen en el sitio en vivo pero no estaban en el clon. Solicitar al cliente para enriquecer la sección de nosotros.
- El sitio no publica horario de atención. Agregar cuando el cliente lo confirme.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/App.tsx` (constantes al inicio del archivo)
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copiadas a `assets/web/` por `rediseno/fotos-web.mjs` (`publicDir` en `rediseno/vite.config.ts`)
