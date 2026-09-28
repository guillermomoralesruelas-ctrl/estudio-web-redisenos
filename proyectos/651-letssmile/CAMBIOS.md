# Let's Smile Dentistry: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://letssmiledentistry.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/651-letssmile/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 651-letssmile`) |

## En una línea

Misma clínica, mismos dentistas, precios, pasos, fotos y contacto, en inglés como su sitio; cambia la forma: lo que hoy está en seis páginas se junta en una, y el paciente ve quién lo atiende y cuánto cuesta según el tratamiento que elige.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 38 a 39 errores de consola y 5 imágenes rotas en el celular | 0 y 0 |
| 10,378 px de alto en el celular | 10,163 px con más información (precios, pasos, seguro, dentistas) |

## Qué se cambió (mismo contenido, otra forma)

- Los perfiles de About us ("Good to know" y "Fun to know") se resumen en tarjetas que se voltean; los títulos se escriben como en cada perfil ("Dr. Martín Salinas" sin DDS, como en su página).
- La tabla de precios de Dental tourism se reparte por tratamiento; los pasos "How it works" y el seguro dental se conservan con sus palabras, resumidos.
- La sección de tecnología de Clinic facilities queda en seis líneas (CBCT, escáner intraoral, escáner facial, CAD/CAM, esterilización y aire).

## Qué se agregó (no existía en el original)

- El elemento **"Meet your dentist before you cross"** (`MeetYourDentist` y `Card` en `App.tsx`): selector de tratamiento, precios, dentistas por enfoque con tarjetas que se voltean y WhatsApp prellenado por tratamiento.
- Barra fija en el celular (WhatsApp, Call or text, Directions) y enlace "Get directions" a Google Maps.
- JSON-LD `Dentist` con horario, fundador, idiomas y redes; Open Graph; `hreflang` a su versión en español.
- Textos nuestros (en inglés): "Meet your dentist before you cross" y su explicación, los nombres de los 7 tratamientos, las notas de niños y urgencias, "… dentists who focus on this", "Who does what comes from each dentist’s profile…", "Illustrative figures from their pricing table…", "From your couch to their chair", "See where your care will happen", "Plan your visit", "Talk to a patient coordinator", "Full profile" y los mensajes prellenados de WhatsApp.

## Qué se quitó o no se usó

- Fotos de banco y renders: el hombre con dolor de muelas, la sonrisa de shutterstock, el implante en 3D y Dental-Office-2.
- Superlativos: "best dentist in Mexicali", "premier hub", "elite", "Top-rated".
- El formulario emergente "Let's Plan Your Visit" (se sustituye por WhatsApp prellenado), el carrusel de logos de marcas y el widget de Google Reviews (quedan 4 reseñas y la calificación).
- Perfiles del personal no dentista (Andrea Moreno, gerente general, Fer Acosta, Danly): siguen en su About us.

## Qué se conserva al pie de la letra

- Dirección, horario, teléfono y WhatsApp +1 (760) 620-3040, correo y redes.
- Precios de su tabla (Mexicali y EE. UU./Canadá, % de ahorro) y la aclaración de que son ilustrativos.
- Formación, años y casos de cada dentista, y sus "Fun to know".
- Reseñas de Google recortadas con "…", con el nombre de quien las escribió.

## Pendiente de confirmar con el cliente

- Qué dentista atiende a niños (su sitio no lo dice).
- El Dr. Martín Salinas: su perfil dice que estudia la especialidad y la página de turismo lo llama especialista. El rediseño usa lo de su perfil.
- Foto del Dr. José Preciado (no está en el clon: se muestran sus iniciales).
- Si la tabla de precios sigue vigente.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el elemento: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
