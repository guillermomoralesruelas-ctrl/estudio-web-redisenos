# DRECA Studio: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://drecastudio.com/ (WordPress + Elementor) |
| Método | **1.2 en la nube** (lote 9): el clon no trae las galerías, que están en subpáginas; se bajaron sus 37 fotos y el logotipo a `assets/originales/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/344-drecastudio/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El fotógrafo Frank (DRECA Studio) en una sola página carbón y verde: sus servicios, una galería por mundo (familia, empresas, gastronomía), sus reseñas de Google y una invitación digital que el cliente arma y ve en vivo dentro de un celular antes de pedirla.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El inicio solo tiene tres botones (bodas, XV años, sesiones) y reseñas; las fotos están en subpáginas que el clon no trae | Las galerías Familiar (12 fotos), Empresarial (11) y Gastronomía (14) se bajaron de `drecastudio.com/wp-content/uploads/`; `rediseno/fotos-web.mjs` hace las copias .webp |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, acerca de, galerías e invitaciones se juntan en una página.
- Sus reseñas de Google se recortan a cuatro frases (se quitan emojis).
- "Acerca de" pasa a "Quién está detrás de la cámara", con su texto en primera persona.

## Qué se agregó (no existía en el original)

- **"Tu invitación, en vivo en el celular"** (elemento memorable): el cliente elige uno de sus cuatro formatos de invitación digital (Básica $250, PDF $299, Scroll mediano $399, Scrolldown largo $499), escribe nombre, evento, fecha y lugar, y los ve dentro de un celular que crece y se desplaza según el largo del formato y muestra su número de botones. El botón manda todo por WhatsApp. Los datos que aparecen al abrir son un ejemplo y la página lo dice.
- Galería con botones Familia, Empresas y Gastronomía.
- Textos del estudio: el titular "Bodas, XV años, sesiones y eventos bien contados", "¿Qué vamos a fotografiar?", "Su trabajo, por mundo", los textos de Empresas y Gastronomía, la explicación de la invitación y los textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, mapa), JSON-LD `ProfessionalService` con su calificación de Google, title, description e imagen para compartir.

## Qué se quitó o no se usó

- La galería "Sociales": en su sitio no tiene fotos, así que bodas y XV años no tienen galería propia.
- Los ejemplos de invitación de su sitio (son enlaces externos).

## Qué se conserva al pie de la letra

- Nombre, WhatsApp 56 1680 9392 (de sus enlaces wa.link), Instagram, Facebook, su bio, sus reseñas y su calificación en Google (4.9 de 5, 9 reseñas) y los precios y condiciones de las invitaciones.

## Pendiente de confirmar con el cliente

- **Dirección del estudio**: no la publica (las reseñas hablan de "el lugar" para sesiones de mascotas). El botón "Mapa" busca su nombre en la Ciudad de México.
- Fotos de bodas y XV años: no hay en su sitio; conviene pedírselas.
- Precios de fotografía y video: no los publica.
- Permiso para usar las fotos del evento en la Bolsa Mexicana de Valores como portafolio.

## Dónde está cada cosa

- Textos, servicios, galerías, invitaciones y reseñas: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
