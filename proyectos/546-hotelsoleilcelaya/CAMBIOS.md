# Hotel Soleil Celaya: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.soleilcelaya.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/546-hotelsoleilcelaya/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 546-hotelsoleilcelaya`) |

## En una línea

Mismo hotel, mismas habitaciones, tarifas, salones, servicios y contacto; cambia la forma: las tarifas pasan a la portada y los tres salones se comparan en un dibujo a escala donde acomodas a tus invitados.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 10 de 10 imágenes rotas, 36 errores de consola y 33 recursos fallidos | 0, 0 y 0 |
| Galerías de salones y restaurante sin fotos en el clon | Los salones se dibujan a escala; restaurante y bar van en texto |

## Qué se cambió (mismo contenido, otra forma)

- Las tarifas de su página de reservaciones (IVA y desayuno incluidos) se muestran en cada habitación.
- Las tablas de los salones (medidas y capacidad en escuela, auditorio, herradura y banquete) se juntan en el elemento.
- Textos corregidos: "inalámbrico", "comodidad", "Política", "Síguenos"; "Tresguerras" en un solo estilo.

## Qué se agregó (no existía en el original)

- El elemento **"Acomoda a tus invitados"** (`src/Salones.tsx`: `Distribucion`, `Plano`, `rejilla`): plano a escala de los 3 salones, montaje, número de personas, sillas acomodadas, salones donde cabe y WhatsApp con los datos.
- WhatsApp (`wa.me/524612876015`, el que usa su página de reservaciones) en portada, habitaciones y barra del celular; enlace a Google Maps.
- JSON-LD `Hotel` con estrellas, habitaciones, horarios, rango de precios y servicios; title y description reales; Open Graph; favicon con su logo.
- Textos nuestros: "Hotel de negocios en Celaya, con desayuno incluido y salones para tus eventos", "Reservar desde $880 la noche", "Acomoda a tus invitados" y su explicación, descripciones de montaje ("Filas de sillas hacia el frente"…), "Frente", "Terraza", "caben en…", "máx.", "no caben en un solo salón…", "Cotizar por WhatsApp", "Para quien viaja a trabajar", "Pedir tarifa por WhatsApp", "Tarifa por teléfono o WhatsApp: no está en su reservación en línea." y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- La foto de fachada con el letrero "Euro Inn" (parallax.jpg) y los fondos lavados en espejo.
- El buscador de fechas de la portada (el botón "Reservar" lleva a su página de reservaciones, que sí funciona).
- Twitter, los enlaces a despegar.com y Booking, el botón "ENGLISH" (no hace nada) y "Mejor tarifa garantizada".

## Qué se conserva al pie de la letra

- Tarifas ($880, $980, $1,950, $250 por persona extra), capacidades, check-in 14:00 y check-out 12:00, cancelación gratuita hasta 48 horas.
- Medidas y capacidades de los salones Premium, Monaco y Scala.
- Dirección, teléfono (461) 287 6015, ventas@soleilcelaya.com.mx, horario de reservaciones, Facebook e Instagram; opiniones verificadas y calificaciones.

## Pendiente de confirmar con el cliente

- **Tarifa de la Master Suite** (se muestra en su sitio pero no se puede reservar en línea).
- Medida de la terraza del Salón Scala.
- Fotos de salones, restaurante y fachada (el clon no las trae y la fachada dice "Euro Inn").
- Si el WhatsApp del (461) 287 6015 es el número correcto para eventos.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`; el elemento en `rediseno/src/Salones.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/imagenes/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
