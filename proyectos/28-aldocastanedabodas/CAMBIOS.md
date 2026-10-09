# Aldo Castañeda Bodas: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://aldocastanedabodas.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron de `assets.zyrosite.com` a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/28-aldocastanedabodas/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo portafolio en una sola página, con "Capítulo a capítulo": los 16 momentos de la boda, qué cubre cada paquete, cuánto falta para la fecha y el anticipo, y WhatsApp con todo escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto (todas en `assets.zyrosite.com`) y 9 recursos fallidos | 22 fotos de su portafolio y su logotipo en `assets/originales/`, en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Sus 21 páginas (inicio, sesiones, 16 capítulos, precios, acerca de Aldo y contacto) se juntan en una sola. El texto largo de cada capítulo se resume en una o dos frases con sus palabras.
- Los paquetes, que solo estaban en la página de precios, se conectan con los capítulos que cubre cada uno.
- Los testimonios se acortaron con "…" sin cambiar sus palabras.
- Títulos en mayúsculas ("TU HISTORIA de amor") en tipo normal; ortografía: "enamore" → "enamoré", "compre" → "compré", "capitulo" → "capítulo", "republica" → "República".
- El formulario (nombre, fecha, WhatsApp) se sustituye por la tarjeta "Tu fecha", que manda esos datos por WhatsApp.

## Qué se agregó (no existía en el original)

- **"Capítulo a capítulo"** (elemento memorable): capítulos agrupados por momento, cobertura de cada paquete según su página de precios, foto y texto de cada capítulo, meses que faltan para la boda contra los 10 a 12 recomendados, anticipo del 50% y mensaje de WhatsApp con fecha y paquete.
- Textos del estudio: "Capítulo a capítulo", "Arma el día de tu boda", la explicación del armador, "Antes de apartar tu fecha", los nombres de los momentos (antes de la boda, el arreglo, la ceremonia, la recepción), la nota de precios "desde", los avisos de fecha y los textos alternativos.
- Barra fija en el celular (WhatsApp, llamar, cómo llegar), JSON-LD `ProfessionalService`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El precio "Cobertura completa de bodas $75,000 mn" que aparece al pie de las páginas de capítulos: contradice su página de precios (desde $95,000); se usan los de la página de precios (ver pendientes).
- Los años de experiencia que no coinciden ("10 años" en sesiones, "15 años" de su primera cámara): se usa "12 años en el mundo nupcial", que repite en inicio y acerca de Aldo. Las "+117" reseñas de contacto: se usa "+146 en Google Maps" del inicio.
- Los íconos decorativos (televisión, anillos, tranquilidad) y la sección de Instagram como imagen.

## Qué se conserva al pie de la letra

- Nombre, logotipo, "Tu historia de amor para toda la vida", los 16 capítulos y sus fotos, los tres paquetes con precio, cobertura y descripción, galería personalizada, la lista "Lo hacemos de corazón", la entrega (película 4K, hasta 600 fotos, tráiler), las 5 preguntas frecuentes, los testimonios, la biografía, la dirección, el teléfono, el correo, las redes, su ficha de Google Maps y su video de YouTube.

## Pendiente de confirmar con el cliente

- Cuál es el precio vigente ($75,000 o desde $95,000) y si el Save the date entra en algún paquete.
- Que el orden de capítulos de su sitio es el de la cobertura (por ejemplo, si la sesión familiar entra en Plata).
- Que la foto de "Acerca de Aldo" es de Aldo (el texto alternativo dice "fotógrafo").

## Dónde está cada cosa

- Textos, capítulos y paquetes: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
