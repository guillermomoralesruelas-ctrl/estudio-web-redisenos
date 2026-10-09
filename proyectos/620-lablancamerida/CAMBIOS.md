# La Blanca Mérida: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lablancamerida.com/ |
| Método | **1.2 en la nube**: el clon enlaza las fotos al CDN de HighLevel; se bajaron a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/620-lablancamerida/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma Blanca Mérida, con sus fotos, su menú con precios y sus promociones, sin los textos de plantilla en inglés, y con "Tu antojo de hoy", que arma el pedido y aplica solas las promociones de martes a jueves.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 4 imágenes rotas, 3 recursos fallidos y las fotos en el CDN de HighLevel | 11 fotos y el logotipo en `assets/originales/`, en .webp desde el sitio |

## Qué se cambió (mismo contenido, otra forma)

- El menú, que va en una columna larga con líneas "═══", queda en tres pestañas (platillos, bebidas, postres) con foto chica donde hay foto de ese platillo.
- Las promociones (tacos, tortas, salbutes) pasan a tarjetas dentro de "Tu antojo de hoy".
- Las fotos traían letreros pegados ("Marquesita de Nutella", "El verdadero sabor de Mérida", "¿Listo para refrescarte?", "Panuchos yucatecos"): se recortaron.
- Ortografía y estilo: "Pidelo" → "Pídelo", "maiz" → "maíz", "Higienica" → "Higiénica", "Haznola saber" no se usa; en la reseña de Lorena Robles se quitó el "Porque" inicial; "¡Muy buen sabor y atención!!" queda con signos normales.
- La Sopa de Lima del top 3 se muestra con un dibujo de lima: la única foto de sopa de lima parece generada.

## Qué se agregó (no existía en el original)

- **"Tu antojo de hoy"** (elemento memorable): pedido con su menú y precios, día de la semana (empieza en hoy, hora de León), promociones de martes a jueves aplicadas solas con el ahorro, y aviso de que los lunes cierran. Se ordena por teléfono.
- Estado "Abierto ahora / Abrimos de 2:00 pm a 10:00 pm / Hoy lunes descansamos" según la hora de León.
- Textos del estudio: el H1 "La Blanca Mérida, comida yucateca en León", la lista de platillos del subtítulo del hero, "Tu antojo de hoy" y su explicación, "Un pedacito de Mérida en el Parque Manzanares" (tomado de la reseña de Lorena Robles), las etiquetas del pedido y los textos alternativos.
- Enlace "Cómo llegar" a una búsqueda de Google Maps con su nombre y dirección (su sitio no tiene mapa).
- Barra fija en el celular (ordenar, menú, cómo llegar), JSON-LD `Restaurant` con horario, title, description e imagen para compartir.
- No hay WhatsApp: su enlace "Whatsapp" lleva a la portada. Se ordena por teléfono, como sus botones "Ordena ahora".

## Qué se quitó o no se usó

- Todo el texto de plantilla en inglés: "Safe Food Take Out", la historia "Delicious traditions since 1996", "A new restaurant has been established in London", "We got a Michelin star", "A new restaurant was opened in Paris", "Oscar Numan", los chefs "William Joe", "Jos Buttler" y "Lily Scope", "150+ Daily Orders", "182+ Special Dishes", "50+ Expert Chef", "15+ Awards Won", "Chef Chioce", "Upcoming Events" y los blogs "Food Flavour", "Healthy Food", "Recipie". Con sus fotos de banco.
- Cuatro fotos de platillos que parecen generadas (tortas y tacos en tabla de madera, sopa de lima, panuchos en plato verde).
- El formulario de contacto (Nombre, Apellido, Teléfono, Email).
- El video "Conócenos" (`69c8caac….mp4`): no se revisó su contenido; queda como pendiente.

## Qué se conserva al pie de la letra

- Nombre, logotipo, "Conoce con tu familia los mejores sabores de Mérida", el top 3 y su texto, la historia, el texto de la cochinita pibil, todo el menú con precios (bebidas, postres, marquesitas), las tres promociones con precio y días, "¿Por qué elegirnos?" (platos frescos, ambiente, servicio, reservas para grupos), cinco reseñas con su nombre, dirección, horario, teléfono, correo, Facebook e Instagram.

## Pendiente de confirmar con el cliente

- Si tienen WhatsApp (su botón no lleva a ningún número).
- Si las fotos de platillos en madera son generadas o suyas.
- Precios y vigencia de las promociones; menú de marquesitas; precio de la Longaniza de Valladolid (está en el top 3 pero no en el menú).
- El video "Conócenos" para usarlo en el sitio.

## Dónde está cada cosa

- Textos, menú, promociones y reseñas: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
