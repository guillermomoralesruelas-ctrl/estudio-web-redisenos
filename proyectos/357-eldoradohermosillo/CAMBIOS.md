# Hotel El Dorado Hermosillo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.eldoradohermosillo.com.mx/ (Google Sites) |
| Método | **1.2 en la nube** (lote 9): el clon solo trae la portada; se bajaron las fotos de todas sus páginas, las 8 páginas de la carta, las 5 tablas de Larga Estadía y el logotipo a `assets/originales/` |
| Fecha | 2026-10-10 / 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/357-eldoradohermosillo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Un hotel a 5 minutos del aeropuerto de Hermosillo en una sola página: sus cinco habitaciones con precio, una calculadora de estancia con sus tarifas de Larga Estadía, su restaurante con la carta, la alberca y cómo llegar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Solo trae la portada; habitaciones, restaurante, servicios y galería están en subpáginas | Se leyeron las seis páginas y se bajaron sus fotos de `lh7-us.googleusercontent.com` a su tamaño máximo; `rediseno/fotos-web.mjs` hace las copias .webp |
| Las fotos de habitaciones solo existen a 440×550 px en su sitio | Se usan a ese tamaño, en tarjetas; no se agrandan |

## Qué se cambió (mismo contenido, otra forma)

- Las seis páginas se juntan en una.
- Las tarifas de Larga Estadía, que en su sitio son cinco imágenes de tablas, se transcribieron a texto (`content.ts`) y alimentan la calculadora.
- Los banners de su inicio (transporte gratis, ubicación a 5 minutos, colchones de calidad de 5 estrellas) pasan a texto.
- La carta se muestra página por página con botones, en lugar de una tira larga de imágenes.

## Qué se agregó (no existía en el original)

- **"¿Cuántas noches te quedas?"** (elemento memorable): eliges una de las cinco habitaciones y de 1 a 30 noches. La página muestra la tarifa por noche del escalón alcanzado (1–3 normal, 4, 7, 14 noches y 4 semanas), el total, cuánto se ahorra frente a la tarifa normal, cuántas noches faltan para el siguiente escalón y una tira de 30 noches pintada por escalón. El botón manda habitación y noches por WhatsApp. La página aclara que es un cálculo orientativo y la ocupación máxima de la tarifa especial. Aplicar la tarifa del escalón alcanzado (por ejemplo, 10 noches a tarifa de 7) es una interpretación de sus tablas: confirmarla con el hotel.
- Textos del estudio: titulares, introducciones de sección, textos alternativos y la nota de la calculadora.
- Barra fija en el celular (llamar, WhatsApp, mapa), JSON-LD `Hotel` con coordenadas, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las imágenes de íconos de camas y los banners como imagen (su texto pasó a la página).
- Fotos repetidas entre la galería y las páginas de habitaciones.

## Qué se conserva al pie de la letra

- Nombre, dirección, teléfono 662 216 5159, WhatsApp 662 103 0042, Facebook, tarifas normales y de Larga Estadía (impuestos incluidos), m², camas, capacidad y listas "Incluye" de cada habitación, horarios del restaurante, del servicio a la habitación y de la alberca, y la nota de las toallas.
- La habitación ejecutiva doble repite en su sitio la lista "Incluye" de la estándar (TV 32″, caja de seguridad); se dejó igual y se anota en OPORTUNIDADES.

## Pendiente de confirmar con el cliente

- Cómo se aplican las tarifas entre escalones (por ejemplo, 10 noches).
- Si la habitación ejecutiva doble incluye TV 42″ y frigobar como las otras ejecutivas.
- Correo electrónico: no lo publica.
- Qué foto corresponde a cada habitación en el inicio (se usaron las de cada página de habitación).

## Dónde está cada cosa

- Textos, habitaciones, tarifas, restaurante y alberca: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
