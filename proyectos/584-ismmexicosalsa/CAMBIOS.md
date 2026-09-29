# ISM Mexico: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://ismmexico.space/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/584-ismmexicosalsa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 584-ismmexicosalsa`) |

## En una línea

La misma escuela y comunidad de salsa y bachata de Kentaro en la Juárez, en una sola página en inglés, donde el viajero dice cuánto tiempo se queda en la ciudad y ve el plan que le toca con su precio y su WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| WordPress con video, calendario de eventos (vacío) y plugins (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| Los testimonios del bootcamp (Robert Wong, Erick Djemba-jemba, John Stone) se repiten tres veces y parecen de plantilla | No se usan; quedan las cinco reseñas con nombre de alumnos reales |

## Qué se cambió (mismo contenido, otra forma)

- Inicio y bootcamp en una sola página; eventos no se incluyó (no tenía eventos).
- Clase privada, bootcamp, curso de 5 semanas y comunidad se volvieron "How long are you in Mexico City?".
- Idioma: inglés, como el sitio.

## Qué se agregó (no existía en el original)

- **"How long are you in Mexico City?"** (elemento memorable): cuatro boletos con muescas (a weekend, a week, a month, I live here). Cada uno abre su plan: clase privada desde 600 pesos (35 USD) por hora; los tres bootcamps de 5 días para elegir (Lite $3,000, Focus $5,750, Combo con español $11,000); el curso "Zero to Salsa" de 5 semanas lunes y miércoles a las 7:30 pm; o la comunidad. El WhatsApp lleva el plan elegido.
- Textos nuestros: el H1 y su entrada, "Why does a Japanese guy teach salsa in Mexico?" (tomado de su propia pregunta), los textos de cada boleto y los botones.
- Barra fija en el celular (WhatsApp, Instagram, Directions), enlace a Google Maps por dirección, JSON-LD `DanceSchool` y Open Graph.

## Qué se quitó o no se usó

- "Learn salsa in Mexico for 2026", "5 weeks course starting from January" y "02, 03 January" (fechas vencidas o sin año).
- "We have become a top community in CDMX" y "Great teachers" sin más (se dejó lo concreto).
- Los enlaces a Twitter, Google+, Dribbble y YouTube del pie (sin cuenta o de plantilla).
- "Is Mexico City safe?" y "Condesa, Roma area is known as a safe area" (afirmación que no les toca garantizar).
- La foto de Unsplash, la de "BUSAN" y los avatares de las reseñas.

## Qué se conserva al pie de la letra

- Precios: clase privada desde 600 pesos (35 USD); Bootcamp Lite $3,000, Focus $5,750 y Combo $11,000 por 5 días, con lo que incluye cada uno; bootcamps desde cada lunes.
- Curso de 5 semanas lunes y miércoles a las 7:30 pm; grupo de WhatsApp de la comunidad.
- Política de clases privadas (2 meses para usarlas, cancelación el mismo día cuenta, 12 horas para reprogramar, reembolso si no hay maestro).
- Kentaro Yoneda y su historia; el equipo de bailarines.
- Estudio en Cerrada de Hamburgo 4, Juárez; horario lunes a sábado de 10:00 a 22:00; WhatsApp +52 55 6061 1877 (su botón principal); info@ismmexico.space; Instagram, Facebook.

## Pendiente de confirmar con el cliente

- **Dirección:** el estudio está en Cerrada de Hamburgo 4 (Juárez), pero el pie de todas sus páginas dice "Coahuila 105, Roma Norte". Se usó Hamburgo.
- **WhatsApp:** el botón usa +52 55 6061 1877 y el pie +52 1 55 7884 8166. Se usó el del botón.
- Moneda de los bootcamps (se asume pesos, como la clase privada).
- Fecha del próximo curso de 5 semanas y su precio.
- Nombres del equipo de bailarines.

## Dónde está cada cosa

- Planes, bootcamps, reseñas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "How long are you in Mexico City?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
