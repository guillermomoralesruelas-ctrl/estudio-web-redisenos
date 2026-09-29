# Dolcebella Spa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | http://web.dolcebellaspa.com.mx/ |
| Método | **1.1 en la nube**: fotos y logotipo del clon, convertidos a .webp con `rediseno/fotos-web.mjs` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/324-dolcebellaspa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 324-dolcebellaspa`) |

## En una línea

El mismo spa de la Zona Río, con sus paquetes, faciales, masajes, fotos y opiniones, en una página sin restos de plantilla donde cada paquete muestra cuánto dura, qué incluye y cuánto cuesta si vas solo o en pareja.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Restos de la plantilla en inglés: "Amazing Theme! You can customize it very easy", "Book Now", "select plan", blog "From The Blog" con tres entradas de 2018, menú "Gallery Grid / Gallery Masonry" | Todo en español y solo con contenido del spa |
| Carrito de WooCommerce vacío ("No products in the cart") y fichas con "0 out of 5" | Sin carrito: se agenda por WhatsApp, como pide su sitio (cita previa y anticipo) |
| El botón de WhatsApp apunta a `wa.me/52166434610`, un número incompleto | WhatsApp al teléfono que publican, 664 634 2377 (**por confirmar** que ese número tiene WhatsApp) |
| Imágenes de plantilla (piedras con orquídea, velas verdes, fondo de barbería) | Solo sus cuatro fotos reales |

## Qué se cambió (mismo contenido, otra forma)

- Los cuatro paquetes ("Mejores tratos, mejores precios") se volvieron "¿Vienes solo o en pareja?".
- Los faciales de la tienda quedaron en una lista con duración y precio; los masajes, con su duración (la tomamos del nombre de cada ficha).
- "Cabinas", "Nuestras instalaciones", "Sala de meditación" y "Sauna y regadera" quedaron en la portada y en "Así es el spa por dentro".
- Las cuatro opiniones se conservan con el nombre con que aparecen.

## Qué se agregó (no existía en el original)

- **"¿Vienes solo o en pareja?"** (elemento memorable): selector de una o dos personas; cada paquete tiene una barra con su duración total y los minutos de cada paso que publica el spa; en pareja se ve cuánto se ahorra frente a dos individuales ($450 en Total Relax, $400 en Masauna, $440 en Day Spa). El WhatsApp lleva el paquete y las personas.
- Textos nuestros: el H1, la entrada de la portada, las explicaciones de la barra y de las fotos, y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), enlace a Google Maps, JSON-LD `DaySpa` y Open Graph.

## Qué se quitó o no se usó

- El blog de plantilla, el newsletter, el buscador, el carrito y el enlace a LinkedIn.
- El contador "5350 clientes / Terapeutas / 30 procedimientos / 25 tratamientos" (el de terapeutas no tiene número).
- La imagen "Sala de desintoxicación" (es la misma foto de la sala de meditación con texto encima) y el cartel "Belleza y bienestar en un solo lugar" (una modelo, no el spa).
- Frases de resultados de las fichas ("resultados garantizados", "combate las bacterias"): no se hacen afirmaciones de salud.

## Pendiente de confirmar con el cliente

- Si el 664 634 2377 recibe WhatsApp, o cuál es el número correcto.
- Precios de masajes, diatermia, radiofrecuencia y Dermapen.
- Si Time Relax existe para una persona.
- Precios vigentes (el sitio dice © 2024).
