# Florería Riviera - Cancun: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.floreriariviera.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/423-floreriarivieracancun/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 423-floreriarivieracancun`) |

## En una línea

La misma florería, sus arreglos con código y precio, sus reglas de entrega y pago y su WhatsApp, en una sola página: sin el carrusel repetido y con una tarjeta de dedicatoria que se escribe en pantalla, colgada del arreglo elegido, y se manda con la fecha y la zona.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ver `qa/reporte-rediseno.json` → `antes`. El carrusel repite los mismos siete arreglos tres veces; el logo no está en el clon | Página nueva sin scripts de terceros (sin el chat de wati.io): 0 desbordes, 0 imágenes rotas y 0 recursos fallidos; el nombre va como texto |
| Solo 7 fotos de 300 x 360 px | Se usan tal cual, en .webp, en tamaños pequeños (`rediseno/fotos-web.mjs`) |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, políticas de servicio, estatus y nuevos modelos en una sola página.
- Los siete arreglos con foto en una cuadrícula con precio, precio anterior y código; ofertas, frutales y orquídeas sin foto en una lista de precios.
- Sus políticas en dos columnas: entregas y pagos.

## Qué se agregó (no existía en el original)

- **"¿Qué dice la tarjeta?"** (elemento memorable): eliges uno de los siete arreglos, escribes para quién, el mensaje y de quién, y la tarjeta se escribe en pantalla colgada de la foto; eliges fecha y zona (sus seis zonas) y avisa con sus propias reglas: domingo con restricciones, 14 de febrero y 10 de mayo con 24 horas, y si hoy ya pasaron las 3 PM en Playa del Carmen. El WhatsApp sale con código, precio, fecha, zona y texto de la tarjeta.
- Textos nuestros: la entrada de la tarjeta, las etiquetas del formulario, los avisos de fecha (armados con sus reglas), "Nuevos modelos y más vendidos" (de sus títulos), "Todo el catálogo", "Entregas", "Pagos" y los textos de los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar); enlace a Google Maps con la Ave. Constituyentes; un solo JSON-LD de tipo `Florist` con el teléfono visible; Open Graph; `hreflang` a /eng/.

## Qué se quitó o no se usó

- El carrusel repetido, el chat de wati.io y el sello de Comodo SSL.
- Sus tres bloques de JSON-LD (se contradicen en teléfono y en si hay tienda) y el "Ramos desde $695".
- "La mejor florería" y los textos de relleno para buscadores.
- Las páginas de tulipanes, caballero, bebé y 365 rosas (enlazadas desde "Todo el catálogo").

## Qué se conserva al pie de la letra

- Nombres, códigos y precios de los arreglos, incluidas las ofertas con precio anterior.
- Entrega el mismo día antes de las 3:00 PM, horario de 10 a 19 h de lunes a sábado, domingo con restricciones, fechas especiales con 24 h, zonas de entrega y la nota de variación de colores.
- Pagos (PayPal, Oxxo, transferencia), cómo reportar el pago y cancelaciones.
- Tel. +52 984 204 0410, WhatsApp 984 242 0053, info@floreriariviera.com y redes.

## Pendiente de confirmar con el cliente

- **Teléfono:** su sitio muestra +52 984 204 0410, pero sus datos para Google dicen +52 984 803 4735. Se usó el visible.
- **Tienda física:** su JSON-LD da "Ave. Constituyentes, C.P. 77710" y sus políticas mencionan "pasar a la tienda", pero otro de sus bloques dice "Servicio 100% en línea". Se usó la avenida para el mapa, sin número.
- Costo de envío por zona (no lo publica).
- Si la foto de cada arreglo corresponde bien a su código (se tomó del orden de su HTML).
- Fotos en mayor tamaño (el clon solo tiene 300 x 360).

## Dónde está cada cosa

- Arreglos, precios, reglas, pagos y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la tarjeta: `rediseno/src/App.tsx`
- Colores, fuentes y el estilo de la tarjeta: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/img/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
