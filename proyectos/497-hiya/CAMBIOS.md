# Hiya: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hiya.mx/ |
| Método | **1.2 en la nube**: el clon no tiene fotos locales; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/497-hiya/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo Hiya, con sus fotos, su logotipo y títulos manuscritos, su carta completa y su reserva en OpenTable, con "Tu comanda" (platos y vinos que suman y se dividen entre la mesa).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las fotos se cargan del CDN de Webflow (no hay copia local) | 4 fotos y sus títulos manuscritos en `assets/originales/`, servidos desde el sitio |
| Depende de scripts de Webflow, Weglot y Google Fonts | Sin scripts de terceros |

## Qué se cambió (mismo contenido, otra forma)

- La carta, que en su sitio va en una columna larga con secciones vacías ("Sin especiales por el momento", "Barra: sin productos", "Sin alcohol: sin productos"), queda en dos pestañas (comida y bebida) sin las secciones vacías.
- Los vinos se filtran por tipo (blanco, tinto, naranja, rosado, pet nat, otros), tomado de lo que dice cada vino entre paréntesis; "otros" son los que no dicen tipo.
- Se usa un solo horario, el del pie junto a su ubicación (ver pendientes).

## Qué se agregó (no existía en el original)

- **"Tu comanda"** (elemento memorable): platos, vinos por copa o botella y sake suman en una comanda de papel con número y nombre; personas en la mesa y total por persona; botón a OpenTable.
- Textos del estudio: el H1 "Hiya, robata y wine bar en la Roma Norte", "Arma tu comanda antes de llegar", "Carbón, linternas y vino" y su párrafo (resumen de su carta), los textos alternativos y las etiquetas de la comanda.
- Barra fija en el celular (reservar, comanda, cómo llegar), JSON-LD `Restaurant` con dirección y reservas, title, description e imagen para compartir.
- No hay WhatsApp ni teléfono: el negocio no publica ninguno; la acción principal es OpenTable.

## Qué se quitó o no se usó

- El logotipo "Malcriado" y el horario "Lunes a sábado 8:00 am – 10:30 pm, domingo 9:00 am – 8:00 pm" que va con él: son de otro negocio (restos de la plantilla).
- Dos fotos de platos que vienen de otro proyecto de Webflow.
- Las secciones vacías de la carta.

## Qué se conserva al pie de la letra

- Nombre, logotipo y títulos manuscritos, "Robata & Wine bar", su frase "Así como la vida, los humanos vamos y venimos…", dirección, enlaces de OpenTable, Instagram y Google Maps.
- Toda la carta con sus nombres y precios (como los escriben ellos), el horario de los temakis.

## Pendiente de confirmar con el cliente

- **Horario:** su sitio da tres: el pie dice miércoles a sábado de 6 pm a 2 am y domingos de 6 a 11 pm; la carta dice que hay temakis de domingo a martes desde las 5 pm; y un bloque con el logotipo de Malcriado dice lunes a sábado desde las 8 am.
- Si tienen teléfono o WhatsApp para grupos.
- Más fotos de platos y del lugar.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; carta: `rediseno/src/data/carta.json`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Fotos: originales en `assets/originales/`, copias en `assets/web/` (`rediseno/fotos-web.mjs`)
