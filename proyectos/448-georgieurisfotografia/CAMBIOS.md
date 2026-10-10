# Georgie Uris: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://georgieuris.com/ |
| Método | **1.2 en la nube** (lote 9): el clon trae pocas fotos (su WordPress las carga con lazy-load); se bajaron de `georgieuris.com/wp-content/uploads/` a `assets/originales/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/448-georgieurisfotografia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo fotógrafo en una página oscura de estudio: su portafolio de retrato, moda, publicidad y empresas, y un "Elige tu luz" para pedir el retrato por WhatsApp con la luz y el uso ya escritos.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Pocas fotos (su sitio las carga con JavaScript) y la página se desborda a lo ancho | 32 fotos de su portafolio en `assets/originales/`, convertidas a .webp por `rediseno/fotos-web.mjs`. Sus metadatos dicen "@georgie.uris" (autor y copyright) |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, info, retrato, moda, publicidad y retrato para empresas se juntan en una sola página.
- Los textos de servicios se resumieron a partir de los suyos; la bio es su página "Info" en primera persona, recortada.
- La lista de clientes se recortó a 16 nombres de los que publica.
- Se corrigen erratas al citar sus textos ("inmotaliza" → "inmortaliza").

## Qué se agregó (no existía en el original)

- **"Elige tu luz"** (elemento memorable): cinco luces de retrato, cada una con una foto de su portafolio (luz natural, luz de proyector y primerísimo primer plano son los nombres de sus propios archivos; "Color y sombra" y "Blanco y negro" describen las otras dos). Se elige además para qué es (marca personal, pareja o familia, personalidad, corporativo, sus cuatro tipos de retrato) y el mensaje de WhatsApp sale escrito: "Hola Georgie, quiero un retrato de marca personal con luz natural. ¿Qué precio y fechas tienes?".
- Textos del estudio: "Elige tu luz" y su explicación, la descripción de cada luz, "Además del retrato: publicidad, moda y empresas", "Todo el equipo con la misma luz", "Hablemos de tu sesión", los pies de foto y los textos alternativos.
- Barra fija en el celular (WhatsApp, llamar, ver en Maps), JSON-LD `ProfessionalService`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Fotos con marcas o celebridades (HP, Colgate, Fox Sports, Neymar), las páginas de revista y los collages: son trabajos para clientes y no conviene usarlos para promocionar.
- Dos fotos de lencería de la galería de moda.
- La página de video (`/director/`) se enlaza, no se trae.

## Qué se conserva al pie de la letra

- Nombre, teléfonos de México (+52 55 4047 5427, también su WhatsApp) y de España (+34 610 810 566), correo, Instagram, Facebook, blog, sus tipos de retrato y de servicios, su bio y sus clientes.

## Pendiente de confirmar con el cliente

- **Dirección del estudio**: no la publica; el botón "Ver en Maps" busca su nombre en la ciudad.
- Precios: no los publica (todos los botones dicen "Consulta precios").

## Dónde está cada cosa

- Textos, luces, usos, servicios, galerías y bio: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
