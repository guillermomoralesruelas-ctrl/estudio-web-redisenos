# Inmobiliaria Feyte: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.inmobiliariafeyte.com/ (plantilla "Ensenada" de EasyBroker) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas de 450 px; se leyeron inicio, contacto y todo el catálogo (1,877 propiedades en 93 páginas de venta y 14 de renta), y se bajaron las fotos de portada de 17 propiedades y el logotipo a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/573-inmobiliariafeyte/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria de Colima en una página: una gráfica "precio contra metros" con sus 414 casas en venta en Colima, Villa de Álvarez y Comala para ver cuáles alcanzan y dónde hay más metros por el dinero, una muestra de casas y rentas, sus diez asesores con WhatsApp directo y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas, imagen de portada genérica de la plantilla y un buscador que no funciona sin el servidor de EasyBroker | Fotos de su catálogo a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- El listado de 1,877 propiedades (que mezcla Colima con Puerto Vallarta, Monterrey y Guadalajara, compartidas en la red de EasyBroker) se centra en Colima, Villa de Álvarez y Comala.
- El título de cada tarjeta se arma con el tipo y la colonia que publica EasyBroker ("Casa en Punta Norte") en lugar de sus títulos en mayúsculas; el título original va en el mensaje de WhatsApp.
- La lista de asesores del pie se convierte en tarjetas con WhatsApp directo a cada uno (con el 52 de México).

## Qué se agregó (no existía en el original)

- **"Precio contra metros"** (elemento memorable): cada punto es una de las 414 casas en venta en Colima, Villa de Álvarez y Comala con precio en pesos y m² publicados. Con el tope de presupuesto se encienden las que caben ("254 de 414" con $3 M), se filtra por municipio y recámaras, "Más metros por tu dinero" lista las más grandes que caben, y al tocar un punto aparece la casa con su precio por m² (cálculo del estudio) y enlace a su ficha.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), mapa con la dirección, JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Formularios de contacto y el buscador con 14 monedas.
- La imagen genérica de la plantilla y la foto sin nombre del pie.
- Fotos con marca de agua de otras inmobiliarias (CEC Casas en Colima, Marfil, Verduzco Vende, entre otras): no se usan en la muestra.
- "© 2015" del pie: no se presenta como año de fundación porque el sitio no lo dice.

## Qué se conserva al pie de la letra

- Dirección (Av. Constitución #2171-12, Los Olivos, C.P. 28017), teléfonos 312 149 8284 y 312 228 6667, correo, redes y licencia inmobiliaria SDE/COL/REAI/010.
- El texto de presentación y los nombres y teléfonos de sus diez asesores.
- Precio, operación, tipo, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Si quieren mostrar también las propiedades de la red fuera de Colima.
- Fotos del equipo y de la oficina.
- Los precios cambian: los datos son del 2026-10-11.

## Dónde está cada cosa

- Propiedades, puntos de la gráfica y cifras: `rediseno/src/data/propiedades.ts`; textos y asesores: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
