# Inmobiliaria Titán: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://inmobiliariatitan.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/574-inmobiliariatitan/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 574-inmobiliariatitan`) |

## En una línea

Misma inmobiliaria, mismo inventario (117 de sus 132 fichas, las que tienen precio y m²), mismos agentes, teléfono, correo y horario; cambia la forma: en vez de listados paginados, una gráfica donde cada propiedad se compara por precio por m² con las de su mismo tipo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 69 errores de consola y 1 CSS con 404 | 0 y 0 |
| Listado paginado (8 páginas de venta y 6 de renta) sin precio por m² | Inventario completo en una sola gráfica por tipo |

## Qué se cambió (mismo contenido, otra forma)

- Las 14 páginas de listado y la API se unieron en `propiedades.json` (título, enlace, operación, tipo, zona, ciudad, precio, m², recámaras, baños, exclusiva y características).
- Títulos de las fichas pasados de MAYÚSCULAS a tipo título ("Casa en Venta en la Calle Tierra Blanca…"), con acentos en León, Misión y Cañada.
- "León", "León de los Aldama", "León de los Aldamas" y "León de los Aladama" se muestran como "León"; "Bodegas Industriales" y "Naves Industriales", como "Bodega o nave".
- "Nuestro equipo" y "Programa tu visita / ¡Llámanos para agendar una visita privada!" quedan en una sola sección con los 4 agentes.

## Qué se agregó (no existía en el original)

- El elemento **"El termómetro del metro cuadrado"** (`Termometro`, `Ficha` y `colocar` en `App.tsx`): gráfica de puntos por precio por m², mediana por grupo, ficha de la propiedad elegida y lista ordenada.
- WhatsApp prellenado por propiedad (con título y enlace) y barra fija en el celular.
- JSON-LD `RealEstateAgent` con horario y redes; title y description reales (el original: "Homepage - Inmobiliaria Titán" y sin description); favicon con el techo de su logo.
- Textos nuestros: "El termómetro del metro cuadrado", su explicación, los nombres de los grupos ("Casas en venta"…), "Mediana", "En o debajo de la mediana", "Arriba de la mediana", "Precio publicado", "Superficie", "Precio por m²", "Frente a la mediana", "…% abajo/arriba", "Mediana de … de su inventario", "Cerca o incluye:", "Agendar visita", "Ver la ficha completa", "Ver la lista de más barato a más caro por m²", "Precios y superficies tal como los publica su sitio; la superficie puede ser de terreno o de construcción según la ficha.", "En venta, con precio y m²", "En renta, con precio y m²", "El equipo de Inmobiliaria Titán te acompaña a encontrar tu propiedad y a agendar una visita privada.", "Agente inmobiliario".

## Qué se quitó o no se usó

- "La inmobiliaria #1 en León, Guanajuato" y "A SOLO $" (superlativo y reclamo sin sustento).
- El buscador con más de 100 zonas (con "COLONIA PRUEBA"), el registro/login y los textos en inglés del tema ("Your search results", "Need an account? Register here!", "How To Find Us", "Opening Hours").
- La foto del terreno de Las Torres (vista satelital) y la promoción del desarrollo "El C… Residencial" (Mesa-de-trabajo-40).
- Las 15 fichas sin precio o sin m² no están en la gráfica (siguen enlazadas desde "Todo su inventario").

## Qué se conserva al pie de la letra

- Precios, m², recámaras, baños, zonas y características de cada ficha, y sus enlaces.
- Teléfono (477) 391 4080, ventas@inmobiliariatitan.com, horario, Facebook, YouTube y LinkedIn; nombres de sus agentes.

## Pendiente de confirmar con el cliente

- **WhatsApp.** El sitio no publica ninguno: el rediseño usa el (477) 391 4080. Confirmar número.
- Dirección de la oficina (el sitio solo dice "León, Guanajuato").
- Si los precios de renta son mensuales y si la superficie de cada ficha es de terreno o de construcción.
- Qué 15 fichas no tienen precio o m² y si siguen disponibles.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts` y el inventario en `rediseno/src/data/propiedades.json`
- Diseño, secciones y la gráfica: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
