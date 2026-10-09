# FORTER: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://forter.mx/ |
| Método | **1.2 en la nube**: el clon trae una sola foto propia; las demás se bajaron de `forter.mx/img/` a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/430-forter/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma fábrica en una sola página: block, vigueta y bovedilla con el cemento y el acero en el mismo pedido, y un "Dibuja tu barda y tu losa" que convierte medidas en lista de material con las fórmulas de sus propias calculadoras y la manda por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Una sola foto propia (el letrero); las demás las carga el JavaScript | Sus fotos de patio, vigueta, cemento, varilla y armex, y las 15 fotos de producto, en `assets/originales/`, convertidas a .webp |

## Qué se cambió (mismo contenido, otra forma)

- Sus páginas de inicio, productos, block, vigueta, cemento, acero, calculadoras, entrega, nosotros y contacto se juntan en una sola.
- Sus dos calculadoras (barda y losa) se unen en una sola sección que dibuja la obra a escala y arma un solo pedido.
- Cada familia de productos tiene su botón "Cotizar … " por WhatsApp con el mensaje ya escrito.

## Qué se agregó (no existía en el original)

- **"Dibuja tu barda y tu losa"** (elemento memorable): largo y alto de la barda, largo y ancho de la losa. Dibuja la barda con su patrón de block, castillos en rojo y cadenas, y la losa con las viguetas cada 75 cm. Calcula con sus fórmulas: block = ⌈largo × alto × 12.5 × 1.05⌉, castillos = ⌈largo / 3⌉ + 1, cadena = ⌈largo × 2⌉ m; viguetas = ⌈lado mayor / 0.75⌉ + 1, bovedillas = ⌈área × 1.35⌉, V11 y bovedilla 11 si el claro es de hasta 4.5 m, si no V16 y bovedilla 16. "Enviar mi cálculo" manda la lista por WhatsApp. Las notas de "estimación" son las suyas.
- Textos del estudio: "Dibuja tu barda y tu losa" y su explicación, "Todo para construir, en un solo lugar", "Te lo llevamos junto a tu obra", "Construimos lo que sostiene Sonora", "Visítanos o pide a domicilio", los rótulos de la calculadora, los resúmenes del hero y los textos alternativos.
- Enlace "Cómo llegar" a Google Maps por sucursal, barra fija en el celular (cotizar por WhatsApp, llamar a la matriz, cómo llegar), JSON-LD `HomeAndConstructionBusiness` con sus tres sucursales y horario, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las guías largas (`/guias`, `/bloqueras-en-hermosillo`, `/precio-de-block-hermosillo`): son artículos para buscadores; conviene mantenerlos en su sitio y enlazarlos.
- Los precios de block: no se publican en el rediseño porque su sitio pide cotizar.

## Qué se conserva al pie de la letra

- Nombre, logotipo, las tres sucursales con dirección y teléfono, horario, WhatsApp 662 229 4406, zonas de entrega, entrega gratis desde 3 tarimas, pago anticipado, el catálogo con sus medidas y descripciones, su texto de "Nosotros", sus valores y sus preguntas frecuentes.

## Pendiente de confirmar con el cliente

- Si quieren mostrar precio por tarima en el sitio.
- Coordenadas exactas de cada sucursal para el mapa (se usa búsqueda por dirección).

## Dónde está cada cosa

- Textos, catálogo, fórmulas y sucursales: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
