# CDG Buildings: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.inmobiliariacdg.com/ (plantilla "Milan" de EasyBroker, pie "© 2019") |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas de 450 px; se leyeron inicio, acerca de, vende o alquila tu casa, contacto y todo el catálogo (2,498 propiedades en 81 páginas de venta y 64 de renta), y se bajaron las fotos de portada de 35 propiedades y el logotipo a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/572-inmobiliariaconstructora/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria de Ciudad del Carmen en una página: un histograma de sus 500 casas y departamentos en renta en la isla para ver cuánto cuesta rentar y cuántas te alcanzan, locales y oficinas para negocios, casas y terrenos en venta en Carmen y en Mérida, propietarios y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas, imagen de portada genérica de la plantilla y un buscador que no funciona sin el servidor de EasyBroker | Fotos de su catálogo a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- El listado se reorganiza por lo que más publican: rentas de vivienda en Ciudad del Carmen (888 rentas en el municipio), espacios para negocio, y venta en Carmen y en Mérida y Yucatán.
- El título de cada tarjeta se arma con el tipo y la colonia que publica EasyBroker ("Casa en Limonar") en lugar de sus títulos en mayúsculas; el título original va en el mensaje de WhatsApp.
- Isla Aguada aparece como parte del municipio de Carmen, como lo agrupa EasyBroker.

## Qué se agregó (no existía en el original)

- **"¿Cuánto cuesta rentar en Carmen?"** (elemento memorable): las 500 casas y departamentos en renta en Ciudad del Carmen con precio mensual y recámaras, en barras de $2,500. Al mover el presupuesto se pintan las que caben, con filtro de tipo y recámaras, el conteo ("278 de 500" con $15,000) y la renta de en medio (mediana, cálculo del estudio). Debajo, ejemplos con foto que caben y un botón que manda la búsqueda por WhatsApp.
- Conteo de locales, oficinas, bodegas y naves en renta.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), mapa con la dirección, JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Formularios de contacto y de propietarios (se enlaza al de propietarios en su sitio).
- La imagen de portada de la plantilla (foto genérica de EasyBroker).
- Fotos con marca de agua de otras inmobiliarias (LUMA, La Mar, Engel & Völkers): su catálogo incluye propiedades compartidas en la red de EasyBroker; esas fotos no se usan en la selección.
- Propiedades con precios que parecen errores de captura (ver `OPORTUNIDADES.md`); tampoco cuentan en el histograma las que no publican recámaras.

## Qué se conserva al pie de la letra

- Dirección (Calle 20 #62, entre 21 y 19, Col. Guanal, C.P. 24139), celulares 938 156 3956 y 938 151 7923, WhatsApp, correo y redes.
- Textos de "Acerca de" y de "Vende o alquila tu casa".
- Precio, operación, tipo, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Qué ofrece como constructora: el sitio solo lo dice en el nombre; la tarjeta queda como [PENDIENTE].
- Cuáles propiedades son propias y cuáles de la red de EasyBroker (Mérida, Puebla, Monterrey).
- Los precios cambian: los datos son del 2026-10-11.

## Dónde está cada cosa

- Propiedades, cifras y datos del histograma: `rediseno/src/data/propiedades.ts`; textos: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
