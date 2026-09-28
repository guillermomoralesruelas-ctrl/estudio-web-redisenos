# Dr. Tooth Saltillo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://drtooth.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/337-drtoothsaltillo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 337-drtoothsaltillo`) |

## En una línea

Misma clínica, mismos casos de antes y después, servicios, doctores y contacto; cambia la forma: la página pasa de 15,000 px a menos de 5,000 y sus nueve casos se comparan a la vez con un solo deslizador.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 1 imagen rota, 41 errores de consola, desborde de 634 px en el celular | 0, 0 y 0 |
| 15,399 px de alto en escritorio | 4,948 px |

## Qué se cambió (mismo contenido, otra forma)

- Los 9 pares de "Casos extraordinarios" (18 fotos sueltas) quedan en un muro de 3 × 3 con nombre de pila.
- Los 12 servicios: 6 principales con una frase de su propia página y 6 generales como enlaces.
- Los currículos de los dos doctores se resumen en 5 y 3 líneas.
- Títulos en tipo oración en vez de mayúsculas.

## Qué se agregó (no existía en el original)

- El elemento **"Nueve sonrisas, un solo gesto"** (`Sonrisas` en `App.tsx`): deslizador que recorta el "después" sobre el "antes" en las nueve fotos a la vez, con línea dorada y botones "Todo antes" y "Todo después".
- WhatsApp con `wa.me/528441854520` (funciona en celular; su botón de portada usa web.whatsapp.com), prellenado por servicio; barra fija en el celular; enlace a Google Maps.
- JSON-LD `Dentist` con horario, especialistas y redes; Open Graph; favicon.
- Textos nuestros: "Implantes, diseño de sonrisa y ortodoncia en Saltillo", "Nueve sonrisas, un solo gesto" y su explicación, "Todo antes", "Todo después", "… % antes, … % después", "Fotos de sus pacientes publicadas en su sitio…", "Quién te atiende", "Visítanos", "Agenda tu valoración", "Preguntar por WhatsApp", "Más información", "También", "Ver 9 resultados" y los pies de foto.

## Qué se quitó o no se usó

- Superlativos: "la clínica N° 1 en Saltillo", "una de las mejores clínicas odontológicas en el país", "la mejor calidad y tecnología".
- Apellidos de los pacientes (el sitio los tiene en los nombres de archivo).
- El formulario de contacto con las reglas de una promoción que no se describe; el carrusel de videos y los fondos decorativos.
- X (Twitter).

## Qué se conserva al pie de la letra

- Las 18 fotos de antes y después, los retratos y la fachada.
- Dirección, Edificio San Ángel 2.º piso, horario, teléfonos 844 485 2811 y 844 180 2073, WhatsApp 844 185 4520, correo y redes.
- Formación de los dos especialistas y "Más de 3,000 cirugías guiadas".

## Pendiente de confirmar con el cliente

- Permiso vigente de los 9 pacientes para mostrar sus fotos (y si prefieren solo el nombre de pila, como aquí).
- Qué promoción describen las reglas del formulario de contacto.
- Si el correo de Gmail es el oficial o tienen uno del dominio.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el elemento: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
