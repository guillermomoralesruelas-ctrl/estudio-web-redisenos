# Holbox Tours: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://holboxtours.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/500-holboxtours/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 500-holboxtours`) |

## En una línea

De una página donde el precio de cada tour queda encima del nombre del siguiente y todo se reserva en otro dominio, a una página que pone a tu grupo junto a un tiburón ballena de 15 m, compara compartido y privado, y reserva por WhatsApp.

## Qué estaba roto o incompleto en el clon

- Sin su CSS y JS (35 recursos fallidos, 21 imágenes rotas). Los textos se tomaron de `crudo.json` y del sitio en vivo (`entregables/textos-sitio-en-vivo-2026-09-29.txt`).

## Qué se cambió (mismo contenido, otra forma)

- Cada tour con su nombre, subtítulo, precio e "Incluye" juntos en la misma tarjeta (en el original el precio y lo que incluye aparecen antes del nombre del tour, en la tarjeta anterior al leerla de arriba abajo).
- Los dos tours de tiburón ballena se comparan lado a lado.
- Las excursiones de un día separadas de los tours en la isla, con los días de salida destacados.

## Qué se agregó (no existía en el original)

- **"Tu grupo junto al gigante"**: tiburón de 15 m a escala, tu grupo en fila (1.70 m por persona), total del compartido y del privado, y WhatsApp prellenado.
- WhatsApp (su sitio no tiene) en cada tour y barra fija en el celular.
- JSON-LD de tipo `TravelAgency` con sus dos ofertas de tiburón ballena; título y descripción en español; `alt` descriptivos (en el original, las fotos de tours dicen "Team Member").

## Qué se quitó o no se usó

- Fotos que parecen de banco: bioluminiscencia, Chichén Itzá, Ek Balam, Tulum y dos de tiburón ballena de estudio. La bioluminiscencia se ilustra con puntos de luz dibujados.
- Las etiquetas "SALE", "PRIVATE" y "SHARED" pegadas en las fotos.
- El video de YouTube, los logos de la red (Holbox Adventure, iHolbox, HolboxGuide) y los enlaces de reserva de cada tarjeta (se mantiene un enlace general a su sistema de reservas en el pie).

## Qué se conserva al pie de la letra

- Temporada del tiburón ballena (1 de junio al 15 de septiembre de 2026) y precios en pesos de su página en español.
- Lo que incluye cada tour, días de salida y mínimo de 3 personas de las excursiones.
- Sus textos sobre Isla Holbox y el tiburón ballena (15 m, 13 toneladas), teléfono, correo, redes, transporte y guía gratis.

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio no publica WhatsApp; se usó el teléfono +52 984 108 7514. Confirmar que tiene WhatsApp.
- **A qué tour corresponde cada precio:** se leyó cada tarjeta como precio → incluye → nombre (así lo arma su HTML). Confirmar, en especial bioluminiscencia $550, Cabo Catoche $1,850, Descubre Holbox $650 y Tour clásico $950.
- El botón del Tour clásico lleva a la misma página de reserva que Descubre Holbox.
- Si el privado VIP para más de 5 personas se cotiza aparte.
- Origen de las fotos de tiburón ballena y del muelle (se asumieron propias).
- Dirección u oficina y horario (no los publica).

## Dónde está cada cosa

- Textos, precios, tours y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el tiburón a escala: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/img/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
