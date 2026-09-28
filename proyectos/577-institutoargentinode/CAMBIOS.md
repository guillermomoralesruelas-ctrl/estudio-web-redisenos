# IAAC: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://iaacmexico.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/577-institutoargentinode/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Textos del sitio en vivo | `entregables/textos-sitio-en-vivo-2026-09-28.txt` (páginas de programas leídas con curl; el clon solo trae la portada y las sedes) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 577-institutoargentinode`) |

## En una línea

Es la misma escuela, con sus seis sedes, sus teléfonos, sus programas y sus planes de estudio completos, que en su sitio están repartidos en una página por programa. Cambia la forma: todo en una página y, con "Tu programa, comanda por comanda", cada plan de estudios se ve como comandas de cocina colgadas de un riel.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 1 recurso fallido; la portada no dice qué se aprende en cada programa | 0 imágenes rotas, 0 errores, 0 recursos fallidos, 0 desbordes, 1 H1; 5,330 px en escritorio y 8,629 px en celular |
| Los contadores de la portada están en 0 en el HTML y los llena JavaScript; el clon del 26 de septiembre tenía otras cifras (6 años, 2 sedes, 574 alumnos) | Las cifras del sitio en vivo del 28 de septiembre (16 años, 6 sedes, 1,500+ alumnos, 30+ docentes, 50+ convenios, 4,000+ egresados), escritas en el HTML |
| Elementor, 61 scripts y 80 hojas de estilo, popups y píxel de seguimiento | Sin scripts de terceros; 6 imágenes .webp de 0.15 MB con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Los planes de estudio de ocho programas (Chef Profesional, Cocina desde Cero, Repostero Profesional, Panadería Profesional, Sommelier, Rey de la Parrilla, Rey del Mar y Mixología) se copiaron de sus páginas y se agruparon en comandas según sus propios módulos. Los nombres de dos grupos son nuestros: "Maridaje y más allá del vino" (clases 18 a 26 de Sommelier) y "Clases 1 a 4 / 5 a 8 / 9 a 12" (Rey del Mar).
- Rey de la Parrilla: sus seis módulos van en una comanda; sus preparaciones (su lista, sin asignar a módulo) en dos comandas marcadas "Algunas de sus preparaciones". Los nombres "Res y hamburguesas" y "Leña, cerdo y mar" son nuestros.
- Repostero Profesional: su página pone "Repostería básica", "Repostería clásica", "Repostería avanzada" y "Panificación" en columnas sin orden claro; aquí van como Fundamentos, Clásica, Panificación y Avanzada. "Postes Clásicos" se escribe "Postres clásicos".
- Se corrigieron erratas y mayúsculas de los temarios ("Ribe Eye", "Toma Hawk", "rissotto", "hamburgusas", "pina", "Loire/Bordeaux" a Loira/Burdeos, etc.) y se acortaron algunos títulos largos de Sommelier.
- Querétaro Centro y Querétaro Campanario van en una sola tarjeta porque Campanario no tiene foto en su sitio. La sexta tarjeta es la de Admisiones.
- La foto de la portada es la franja de arriba de su banner "Inicio de clases" (sin el texto "Iniciamos en septiembre").
- Las fotos de las sedes salen de miniaturas de 370 × 370 px (la foto de Mérida es la imagen de WhatsApp que su sitio pone en esa sede, y la de Toluca, `cocina-toluca`). No hay versiones grandes en el clon.

## Qué se agregó (no existía en el original)

- **"Tu programa, comanda por comanda"**: selector de sus ocho programas; el plan aparece como comandas numeradas en un riel de acero que se desliza, con tipo, duración, turno y número de clases (cuando el plan está completo). Una lista de sedes y un WhatsApp con el programa y la sede ya escritos.
- Textos nuestros: el H1, la bajada de la portada (resume la suya), "Tu programa, comanda por comanda" y su explicación, "Seis sedes, cocinas de práctica" y su texto, "También para una tarde o para tu empresa", "Aparta tu lugar" y su texto, los resúmenes de Master Class, Team building, Bon Appétit y Bolsa de trabajo (de sus páginas), los botones y los mensajes de WhatsApp.
- "Su sitio indica que sus programas están avalados por DGCFT, IDEFT, Educación y Gobierno del Estado de Jalisco": sale de su imagen "Avalados por".
- Barra fija en el celular: WhatsApp, Llamar (admisiones) y Sedes. "Cómo llegar" a Google Maps para cada sede (búsqueda por dirección; su sitio no tiene mapa real, solo el mapa de ejemplo de un plugin).
- JSON-LD `EducationalOrganization` con las seis sedes y su teléfono. Open Graph con la foto del chef.

## Qué se quitó o no se usó

- Los nueve íconos de "Por qué estudiar con nosotros" (quedan como etiquetas de texto), los slides con texto y el mapa de ejemplo.
- El logo "16 años" (se usa el nombre con letra), el formulario, el popup, "PAGO EN LÍNEA INNOVAT", "Mural Web" y el aviso de privacidad (enlaces del sitio actual).
- Los videos de los programas (reproductor de terceros).
- "Hamburguesas gourmet" e "Iniciación al mundo de la gastronomía" aparecen como enlaces en su sitio, pero no se leyeron sus páginas; no se incluyeron.

## Qué se conserva al pie de la letra

- Direcciones y códigos postales de las seis sedes; admisiones (33) 1592 9493; WhatsApp 33 1223 3268; horario de lunes a viernes de 9:00 a 18:00.
- Una clase por semana, turnos matutino y vespertino, insumos incluidos, práctica desde el primer día; duraciones y turnos publicados de cada programa; prácticas opcionales en España y Francia (Chef).
- Las clases de cada plan de estudios, en su orden.

## Pendiente de confirmar con el cliente

- Precios, horarios y fecha del próximo inicio de cada programa (su sitio los manda al formulario).
- Duración de Repostero Profesional, Panadería Profesional y Rey del Mar; si Panadería Profesional es el mismo programa que el "Panadería Moderna" de 4 meses de su página de workshops.
- Qué ofrece cada sede (su página de team building menciona solo Guadalajara, León, Querétaro y Mérida).
- Fotos grandes de sus cocinas y de clases (el clon solo tiene miniaturas) y foto de la sede Campanario.
- Los avales que anuncia (DGCFT, IDEFT, Jalisco) y a qué programas aplican.

## Dónde está cada cosa

- Textos, planes de estudio, sedes y cifras: `rediseno/src/data/content.ts`
- Diseño, secciones y "Tu programa, comanda por comanda": `rediseno/src/App.tsx`
- Colores, fuentes y la comanda con borde en zigzag: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
