# Hearts on Film: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://heartsonfilm.com/ |
| Método | **1.2 en la nube**: el clon no traía fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/491-heartsonfilm/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo estudio, con sus films, textos, proceso y preguntas, y "Su boda, en la línea de tiempo" (fecha y destino dan los días que faltan, el fin de semana a apartar y cuándo llega su película).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 11 imágenes rotas (las carga de i.imgur.com) | 11 imágenes reales bajadas a `assets/originales/`, servidas como .webp; 0 rotas |
| 13 errores de consola y 12 recursos fallidos | 0 errores, sin scripts de terceros |

## Qué se cambió (mismo contenido, otra forma)

- El hero usa el cuadro de Valeria & Pablo; el ramo de tulipanes pasa a la sección de filosofía.
- La cinta animada de palabras ("Videografía Cinematográfica ✦ Bodas en Monterrey ✦ …") se quita: sus ideas ya están en el H1 y el subtítulo.
- Las preguntas frecuentes se abren una a la vez, con su mismo texto.

## Qué se agregó (no existía en el original)

- **"Su boda, en la línea de tiempo"** (elemento memorable): fecha y destino; días que faltan, fin de semana a apartar, clips de edición y entrega (6 a 10 semanas), llamada de 20 minutos y anticipo del 30%; WhatsApp con fecha y destino.
- Textos del estudio: el H1 "Hearts on Film: su boda en Monterrey, contada como película", "¿Cuándo se casan? Les mostramos cuándo llega su película", las etiquetas de la línea de tiempo, los mensajes de WhatsApp y los textos alternativos de las fotos.
- Barra fija en el celular (WhatsApp, su fecha, Instagram), JSON-LD `ProfessionalService`, description e imagen para compartir.
- No hay botón de llamar ni de cómo llegar: el estudio no publica teléfono para llamadas ni dirección.

## Qué se quitó o no se usó

- La etiqueta de revista "Vol. 07 / Issue 04" del hero.
- El texto "Llenen el formulario con calma": su página no tiene formulario.
- La reseña de "Isabella Rodríguez, García, Nuevo León": no corresponde a ninguno de los films que muestra el sitio; queda pendiente de confirmar.
- El pie "Silvia & Héctor · Santiago, NL" de su segunda imagen: muestra a otra pareja que la de su film de Silvia & Héctor; la foto se usa sin nombres.

## Qué se conserva al pie de la letra

- Nombre, WhatsApp, Instagram, 8 años, MTY y destino, 5.0.
- Filosofía, cita "Siente de nuevo lo que sentiste ese día", sus tres films con lugar, el equipo, los cuatro pasos del proceso, dos reseñas y las seis preguntas con sus respuestas, el cierre "Si llegaste hasta aquí, algo hizo clic".

## Pendiente de confirmar con el cliente

- La reseña de Isabella Rodríguez y el pie de la foto de la sierra.
- Si quieren un formulario además de WhatsApp.
- Si tienen un video corto (trailer) para el hero.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Fotos: originales en `assets/originales/` (lista en `rediseno/IMAGENES.txt`), copias .webp en `assets/web/` (`rediseno/fotos-web.mjs`)
