# JoyaDent Center: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://joyadent.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/592-joyadentcenter/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 592-joyadentcenter`) |

## En una línea

De un WordPress bilingüe con enlaces rotos y textos mezclados, a una sola página en español que parte de lo que la persona nota en su sonrisa y la lleva al tratamiento, a la doctora y a agendar por WhatsApp.

## Qué estaba roto o incompleto en el clon

- En el celular se desborda 484 px; los contadores quedan en "+0" sin su JS. El scrape trajo las páginas en inglés; los textos en español se leyeron en vivo (`entregables/textos-sitio-en-vivo-2026-09-29.txt`).

## Qué se cambió (mismo contenido, otra forma)

- Inicio, nosotros, tratamientos y contacto en una sola página.
- Los seis tratamientos en tarjetas con sus textos; All on 4 y la cámara intraoral en recuadros propios.
- Las reseñas de Google de su widget (Trustindex) como cuatro citas textuales, con autor y fecha.

## Qué se agregó (no existía en el original)

- **"¿Qué le quieres cambiar a tu sonrisa?"**: siete inquietudes con un dibujo de la arcada que cambia, el tratamiento, sus opciones, la doctora por especialidad y WhatsApp prellenado.
- WhatsApp (su sitio no tiene) y barra fija en el celular (Agendar, Llamar, Llegar).
- JSON-LD de tipo `Dentist` con dirección, horario y fundadora; description y Open Graph; `alt` en todas las fotos; ícono con el diente de su logo.

## Qué se quitó o no se usó

- Los enlaces a `/servicio/` (dan 404) y el "Leer más" que lleva ahí.
- Los contadores de años y sonrisas atendidas (en inglés dicen +4 y +2,229; en otra versión +10 y +5,000).
- Frases de promesa: "los implantes más seguros del mercado", "resultados naturales y seguros", "garantizan durabilidad", "previenen la pérdida dental".
- El formulario de contacto (se sustituye por WhatsApp y teléfono), los logos de marcas (se nombran en texto) y la versión en inglés.

## Qué se conserva al pie de la letra

- Tratamientos y sus opciones (marcas de implantes, tipos de brackets, Invisalign, coronas, carillas, blanqueamientos), All on 4 / All on 6 y la cámara intraoral.
- Credenciales de la Dra. Karla Joya Medina (Consejo Mexicano de Periodoncia, ILAPEO 2021, diplomado CECOPI, cédulas 7859836 y 12402415) y los cargos de las otras doctoras.
- Horario de su página de contacto, dirección, teléfonos, correo, redes y su mapa de Google (el mismo iframe).

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio no publica WhatsApp; se usó el teléfono principal 322 377 7658. Confirmar que tiene WhatsApp o dar el número correcto.
- **Doctora por tratamiento:** se deduce de su especialidad (ortodoncia → Dra. Pelayo; implantes, All on 4 y encías → Dra. Joya; blanqueamiento, carillas, coronas y resinas → Dra. Martínez).
- **Horario:** contacto y pie dicen L a V 10–14 y 15–19, sábado 10–14; su página de tratamientos dice L a V 10–14 y 16–20, sábado 9–14. Se usó el de contacto.
- **Local:** "local 1" en contacto y "Local 2" en el pie.
- Años de experiencia: 10+ en inicio y 12+ en nosotros (se usó "más de 10" en la portada y "más de 12" en la ficha de la doctora, como dice su sitio).
- Nombres de las integrantes del equipo que aparecen en las fotos de 2024 y fotos de las doctoras Pelayo y Martínez.
- Si atienden en inglés (su sitio es bilingüe y sus reseñas mezclan idiomas).

## Dónde está cada cosa

- Textos, tratamientos, inquietudes, equipo, reseñas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el dibujo de la arcada: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
