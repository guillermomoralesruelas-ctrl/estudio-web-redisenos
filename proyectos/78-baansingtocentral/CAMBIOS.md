# Baan Singto Central: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://baansingtocentral.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/78-baansingtocentral/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 78-baansingtocentral`) |

## En una línea

Es la misma academia, con sus disciplinas, horario, precios, dirección, teléfono y fotos. Cambia la forma: el horario y los precios, que hoy son imágenes, pasan a ser texto, y con "Arma tu semana" cada quien ve sus clases y su mensualidad antes de escribir por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 56 imágenes rotas y 34 a 35 recursos fallidos | 0 rotas, 0 errores, 0 fallidos |
| 17,817 px de alto en escritorio, 10,627 px en celular | 4,432 px y 7,220 px |
| 9 fotos originales de 9.47 MB | 9 copias .webp de 1.05 MB con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio y Biolink se juntan en una página.
- El H1 es "Muay Thai y artes marciales en Zapopan"; su portada no tenía H1.
- El horario (imagen "Horarios Baan Singto Central", abril de 2026) se transcribe tal cual en `content.ts`, con sus áreas 1 y 2. Los colores por disciplina siguen los de esa imagen.
- Los precios (imagen "rangos de precios") pasan a texto: inscripción $1,000; una disciplina $1,500; todas $1,800; niños $1,100; visita $300; anualidad $15,990 en promoción (normal $18,000).
- El teléfono lleva `tel:+523338089373` (su enlace no tenía el +) y WhatsApp usa `wa.me/523338089373` con mensaje prellenado.
- Se quitan todos los textos de plantilla (inglés, "Rayo - Digital Agency", el correo con errata). El correo no se usa porque el único publicado está mal escrito.
- Sin el chat de OpenWidget (script de terceros).

## Qué se agregó (no existía en el original)

- **"Arma tu semana"**: botones por disciplina, horario resaltado (tabla en escritorio, lista por día en celular), número de clases a la semana y cálculo de mensualidad + inscripción = primer mes. Regla deducida por nosotros: una disciplina de adultos → $1,500; dos o más → "todas" $1,800; Muay Thai Kids → $1,100. **[PENDIENTE confirmar con la academia]**.
- Textos nuestros: la bajada de "Arma tu semana", "Primer mes", "¿Solo quieres probar? Clase por visita, $300.", "Mensualidades en pesos mexicanos, tal como las publica la academia. Pregunta por sus promociones." y la línea "Además: …".
- JSON-LD `SportsActivityLocation` con dirección, teléfono, mapa y redes.
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se quitó o no se usó

- Todo el texto de plantilla: "We create visually compelling designs…", "Secciones: Redes Sociales, Presencia en Google, Landing Pages", la página about-us de "Rayo - Digital Agency" y "Design. Development. Digital Art. Branding." del Biolink.
- El correo hola@baansingtcentral.com (tiene errata), el chat de OpenWidget y los enlaces a Google Drive con horarios y precios (quedan como texto).
- La tienda en línea (la liga a Tienda no se reproduce; se puede enlazar después).

## Qué se conserva al pie de la letra

- "Escuela forjadora de campeones", "Una escuela internacional de Muay Thai con más de 20 años de trayectoria en México", su lista de artes ("Boxeo tailandés, el arte de las 8 extremidades", "Deportivo y combativo", "Familiar y personal"…), "Muay Thai Kids" con sus edades y la nota del horario ("Puede cambiar según la demanda, con previo aviso").
- Dirección, teléfono, enlace de Google Maps, redes, blog, horario y precios.

## Pendiente de confirmar con el cliente

- La regla de mensualidad por número de disciplinas (arriba).
- Judo aparece en su lista de artes, pero no en el horario de grupo: ¿es clase privada?
- Si el horario de abril de 2026 sigue vigente.
- El correo real (el publicado dice "baansingtcentral", sin la "o").
- Si "más de 20 años" sigue siendo la cifra que usan.

## Dónde está cada cosa

- Textos, horario y precios: `rediseno/src/data/content.ts`
- Diseño, secciones y "Arma tu semana": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
