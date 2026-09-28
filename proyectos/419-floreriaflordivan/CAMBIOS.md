# Florería Flordivan: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.flordivan.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/419-floreriaflordivan/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 419-floreriaflordivan`) |

## En una línea

Misma florería, mismos productos, precios, fotos, WhatsApp y condiciones de entrega; cambia la forma: una página donde llenas tu caja de rosas (cantidad, color y tarjeta) y la pides por WhatsApp o en su tienda.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 16 imágenes rotas y 70 errores de consola | 0 y 0 |
| 29,773 px de alto en el celular | 7,161 px |

## Qué se cambió (mismo contenido, otra forma)

- Las cajas redondas de 24 a 200 rosas y las "Caja de Rosas {color}" se unen en el elemento: cantidad y color se eligen en el mismo lugar.
- Los arreglos con foto en el clon (16 de 45) se muestran en una cuadrícula ordenada por precio, con enlace a su ficha.
- "¿Quieres un diseño personalizado? Envíanos un WhatsApp" queda como botón con mensaje prellenado; los WhatsApp de eventos piden fecha, tipo de evento e invitados.
- "Sorpesa rosa" se muestra como en su tienda (errata; ver pendientes).

## Qué se agregó (no existía en el original)

- El elemento **"Llena tu caja"** (`CajaRedonda` y `LlenaTuCaja` en `App.tsx`).
- Barra fija en el celular, JSON-LD `Florist` con ofertas y zona de servicio, favicon con el rostro de su logo.
- Textos nuestros: "Llena tu caja", "Su caja redonda, vista desde arriba…", "¿Cuántas rosas?", "Color", "Mensaje para la tarjeta (opcional)", "Tu mensaje aquí", "Caja redonda con N rosas …", "Pedir por WhatsApp", "Comprar en su tienda", "Llena tu caja de rosas", "Pedir un diseño personalizado", "Diseños únicos, hechos uno a uno de manera artesanal…", "Los diseños de Flordivan, del más sencillo al más grande…", "Ver toda la tienda", "Diseño personalizado", "Cotizar mi evento", "Entregas", "Hechos a mano" y los mensajes prellenados.

## Qué se quitó o no se usó

- El "Lorem ipsum" bajo las parejas de su página de eventos ("Mariana y Omar", "Dulce y Armando", "Joel y Emiliano") y el error del feed de Instagram.
- Las estrellas "0 de 5" y "No hay reseñas aún" de cada producto.
- Los 29 productos sin foto en el clon (siguen en su tienda: "Ver toda la tienda").

## Qué se conserva al pie de la letra

- Nombres y precios de cajas y arreglos, el rango de ramos ($750 a $8,100, de 24 a 300 rosas), qué incluye cada caja, condiciones de entrega y la nota de "hechos a mano".
- WhatsApp 33 1410 7828 y 33 1410 7894, Instagram y Facebook.

## Pendiente de confirmar con el cliente

- Horario de entrega: el sitio dice "de 9:00 a 13:00" y también "elige mañana o tarde".
- Si tienen tienda física o punto de recolección (hoy el mapa es una búsqueda).
- Cuál de sus Instagram usar: @flordivan_boutique (enlace) o @flordivan (texto en eventos).
- Errores del catálogo: "Sorpesa rosa"; "Caja de Rosas Fucsia" con SKU CAJROSBCO-1; las fotos de "Amanecer" y "Blanco puro" parecen intercambiadas (FDBCO01/FDBCO02).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts` y el catálogo en `rediseno/src/data/catalogo.json`
- Diseño, secciones y la caja: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web`; no se descargó ninguna imagen.
