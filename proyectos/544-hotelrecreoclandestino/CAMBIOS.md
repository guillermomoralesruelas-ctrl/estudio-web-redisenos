# Clandestino Hotel: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://clandestinohotel.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/544-hotelrecreoclandestino/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 544-hotelrecreoclandestino`) |

## En una línea

Las mismas dos casonas (Hotel Recreo y Hotel Pila Seca), sus suites, tarifas, Spa, Florios y experiencias en una sola página, con una semana en la que el huésped toca sus noches y ve el total antes de escribir por WhatsApp a la casa que eligió.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| WordPress con Elementor y feed de Instagram; 17 recursos externos no cargan y la portada mide 25,346 px en el celular (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos, 10,001 px en el celular |
| Los `alt` no corresponden a las fotos (el rooftop dice "Restaurante Florios", una recámara dice "Spa", el patio de Pila Seca dice "Hotel Recreo") | Cada foto tiene un `alt` que describe lo que se ve |
| La carpeta y la base dicen "Hotel Recreo" | El sitio es de las dos casas; se presenta como Clandestino Hotel |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, hoteles, Recreo, Pila Seca y experiencias en una sola página en vez de cinco.
- "¿Cuál elegir?" y "Nuestros hoteles" se juntaron en "Dos casas, un mismo espíritu".
- Las fichas de suite y la tabla de tarifas se volvieron una sola ficha que cambia según la casa y la suite elegidas.
- Las once experiencias quedaron en nueve líneas cortas; "Clandestino solo para Ti" conserva sus ocasiones y lo que incluye.

## Qué se agregó (no existía en el original)

- **"¿Qué noches vienes?"** (elemento memorable): siete arcos de domingo a sábado con el precio de cada noche (entre semana o fin de semana, según su tabla). Se elige casa, suite y, en la Suite Doble, cuántas personas; se tocan las noches y sale el total estimado con lo que incluye. El WhatsApp de esa casa lleva la suite, las noches y el total en el mensaje.
- La barra fija del celular (WhatsApp, Llamar, Cómo llegar) sigue a la casa elegida.
- Textos nuestros: la entrada del H1, "Dos casas, un mismo espíritu", "¿Qué noches vienes?" y su explicación, las frases cortas de cada experiencia y los botones.
- Enlace a Google Maps por dirección para cada casa; JSON-LD con las dos casas como `Hotel` (habitaciones, check-in, mascotas y rango de precios) y Open Graph.

## Qué se quitó o no se usó

- "Desde $3,100 MXN" de la página de Recreo (su propia tabla empieza en $1,996).
- "Mejor tarifa garantizada" y "el precio directo es el mejor" (promesas).
- "Estacionamiento cercano: te orientamos con las opciones" de la portada (contradice "valet parking incluido").
- "Alberca de sol" de las tornabodas (no aparece en ninguna otra parte del sitio).
- La foto de San Miguel (es de su guía de la ciudad, no del hotel), el blog, "Qué hacer" y el selector ES/EN.
- Las reseñas (la lectura se corta antes de ellas).

## Qué se conserva al pie de la letra

- Tarifas por noche con impuestos, desayuno y valet: Chica $1,996 / $2,696; Mediana $2,296 / $2,996; Grande $2,566 / $3,296; Grande con Balcón (en Pila Seca, con Terraza) $2,896 / $3,596; Doble 2, 3 o 4 personas $2,666 / $3,166 / $3,666 entre semana y $3,366 / $3,866 / $4,366 en fin de semana; Clandestino $3,966 / $4,666.
- Qué trae cada suite en cada casa (cama, baño, balcón o terraza, sala, chimenea, sales de baño).
- 8 suites en Recreo #31 y 13 en Pila Seca #2; INAH; rooftop; solo adultos; pet friendly; check-in 15:00 y check-out 12:00; desde 2019.
- Spa (masajes, piedras calientes, faciales, masaje en pareja) y Florios (italo-argentina, vinos del Bajío, abierto al público).
- Teléfonos: Recreo +52 415 688 1272 y Pila Seca +52 415 688 3717; WhatsApp +52 415 124 5141 (Recreo y general) y +52 415 117 7901 (Pila Seca); reservaciones@clandestinohotel.com; Instagram y Facebook.

## Pendiente de confirmar con el cliente

- Si la tarifa de fin de semana de la "Suite Grande con Terraza" de Pila Seca es la misma que la de la Suite Grande con Balcón ($3,596); su tabla solo trae la de Balcón.
- Qué WhatsApp prefieren para eventos privados (se usó el general, +52 415 124 5141).
- Si hay alberca (la mencionan solo en tornabodas).
- Fotos del Spa, de Florios y de cada suite; una foto confirmada de cada casa por dentro.

## Dónde está cada cosa

- Casas, suites, tarifas, experiencias y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "¿Qué noches vienes?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
