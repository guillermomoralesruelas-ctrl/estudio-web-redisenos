# Cancun Catamarans: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://cancuncatamarans.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/143-cancuncatamaranes/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 143-cancuncatamaranes`) |

## En una línea

Los mismos tours a Isla Mujeres, su flota de 20 catamaranes, promociones y transportación en una sola página en inglés, donde el grupo dice cuántos son y ve qué barcos y tours le quedan y cuánto cuesta recogerlos en su hotel.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Carrusel con seis H1 y cinco videos de YouTube incrustados (ver `qa/reporte-rediseno.json` → `antes`) | Un solo H1 y fotos propias en .webp, sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| Las fotos de cada barco de la flota no se bajaron | La flota se dibuja a escala por su eslora, sin fotos |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, tours, flota, promociones y transportación en una sola página en vez de cinco.
- La flota (20 fichas con foto) y las nueve tablas de transporte se volvieron parte de "How many are coming aboard?".
- Seis testimonios quedaron en tres, recortados.
- Idioma: inglés, como el sitio (tiene versión ES; su público son turistas de EUA y Canadá).

## Qué se agregó (no existía en el original)

- **"How many are coming aboard?"** (elemento memorable): un control de 2 a 100 personas. Los 20 catamaranes aparecen como barras a escala de su eslora; los que no alcanzan se apagan y el más chico que sí alcanza se marca en coral. Al lado: el tour compartido multiplicado por persona con el docking fee aparte, los tours privados donde cabe el grupo con su costo aproximado por persona, y el transporte redondo desde la zona del hotel para ese número de pasajeros. El WhatsApp manda "We're 40 people, staying in Playa del Carmen…".
- El docking fee de $20 USD por persona y las propinas se dicen junto al precio (su sitio solo lo dice en la letra chica de promociones).
- Textos nuestros: la entrada del H1, las explicaciones del control de grupo, los mensajes de "what N guests can book", las frases de cada tour y los botones.
- Barra fija en el celular (WhatsApp, Call, Directions), JSON-LD `TravelAgency` y Open Graph.

## Qué se quitó o no se usó

- "500+ 5-star reviews" y "4.9★ average rating" (sin fuente; no se pone calificación en JSON-LD).
- "Punctual pickup guaranteed", "one of the largest and most modern fleets" y "unbeatable deals" (promesas).
- Los videos de YouTube, la galería, el blog, las políticas y el selector de idioma.
- La foto repetida del tapete flotante (sale dos veces en su sitio).

## Qué se conserva al pie de la letra

- Tours: compartido a Isla Mujeres (7 h, hasta 50, desde $75 USD por persona), Sunset Private (4 h, hasta 15, $1,030), Party (5 h, hasta 25, $1,675), Birthday (5 h, hasta 30, $2,275) e Isla Mujeres Private (7 h, hasta 30, $1,690), con lo que incluye cada uno.
- La flota con eslora y capacidad, en el orden de su página.
- Tarifas de transporte por zona y número de pasajeros (tal cual, incluidas las que parecen errores; ver pendientes) y sus reglas.
- Promociones, ventanas de compra, cupones y vigencias; "docking fee $20 USD per person and gratuities are NOT included in any deal".
- Contacto: WhatsApp +52 998 892 8694 con sus mensajes por ocasión y tour, tel. +52 998 241 5069, línea gratuita +1 866 932 1881, info@cancuncatamarans.mx, Marina Playa Tortugas (su enlace de Google Maps), Instagram y Facebook.

## Pendiente de confirmar con el cliente

- **Docking fee:** si los $20 USD por persona aplican también al tour compartido sin promoción.
- **Transporte:** Puerto Aventuras cobra $125 de ida a 1–4 personas y $107 a 5–10; Akumal cobra igual a 5–10 que a 11–14. Se usaron tal cual.
- Qué barcos usa cada tour privado y el precio de charter de los barcos grandes (más de 30 personas).
- Qué es el "HD Catamaran Tour" del cupón HD26CC (no aparece en los tours).
- Fotos de cada barco de la flota.

## Dónde está cada cosa

- Tours, flota, transporte, promociones y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "How many are coming aboard?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
