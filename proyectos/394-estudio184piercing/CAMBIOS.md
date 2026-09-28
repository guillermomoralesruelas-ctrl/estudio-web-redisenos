# Estudio 184: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://estudio184.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/394-estudio184piercing/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 394-estudio184piercing`) |

## En una línea

Mismo estudio, mismos artistas, fotos, dirección, teléfonos y prensa; cambia la forma: una sola página oscura donde armas tu cotización tal como el estudio la pide y la ves dibujada a escala en papel de stencil antes de mandarla.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La página mide 366 px: el tema Avada no muestra nada sin su JS | Página completa en React, sin depender del tema |
| 18 errores y 3 recursos fallidos | 0 y 0 |
| `investigacion/crudo.json` trae otra página (su Slot en inglés), no el WordPress | Todo el texto sale de `original.html`; de Slot solo el horario y los enlaces de reserva |

## Qué se cambió (mismo contenido, otra forma)

- Su párrafo de cómo cotizar y su formulario (tamaño en cm, zona del cuerpo, sucursal, comentarios, imagen) se vuelven el elemento "Tu idea, en papel de stencil", que manda los mismos datos por WhatsApp.
- El menú de artistas por sucursal (Roma, Del Valle, invitados) y la cuadrícula de portafolio quedan en una sola galería con una pieza por artista y el botón "Cotizar con…".
- El bloque "Opiniones" (logos de medios con sus citas) queda como citas de texto con enlace al artículo; la de El Universal se recortó.
- "Citas y Cotizaciones Roma: 55 47 55 51 23 | WhatsApp (Roma): 55 37 15 24 25" y el WhatsApp de Del Valle, que en su sitio son texto, quedan como enlaces que marcan o abren WhatsApp.

## Qué se agregó (no existía en el original)

- El elemento (`Stencil` y `HojaStencil` en `App.tsx`): hoja SVG con cuadrícula de 1 cm, rectángulo a escala con cotas, zona, sucursal y artista escritos a mano y sello "184"; para perforación, una mira sobre la zona.
- WhatsApp prellenado según la sucursal; enlace a sus reservas en línea de tatuaje y de perforación (Slot).
- Horario (tomado de su página de reservas) y enlace a Google Maps.
- JSON-LD `TattooParlor` con dirección, horario y redes; title, description y Open Graph con la fachada; favicon con el círculo "184".
- Textos alternativos descriptivos en todas las fotos.
- Textos nuestros: "Tu idea, en papel de stencil", "Así cotiza el estudio: …Llena los datos y míralos en la hoja antes de enviarlos.", "¿Qué quieres?", "Sucursal", "Zona del cuerpo" y su lista de zonas, "Ancho", "Alto", "Tatuador (opcional)", "Quien esté disponible", "Tu idea en pocas palabras (opcional)", "Cotización de tatuaje", "Cita de perforación", "tu diseño", "cada cuadro = 1 cm", "Enviar a … por WhatsApp", "Adjunta tu imagen de referencia en el chat. O agenda en línea en su página de reservas.", "Su sitio lista a sus perforadores en la sucursal Roma.", "Cotizar con…", "Agendar con…", "Cada uno con su estilo…", "También perfora Reeky, socio del estudio, en la sucursal Roma.", "El estudio tiene su propia vitrina de joyería para perforación…", "Lo que han dicho de nosotros", "Visítanos", "Dirección por confirmar: escríbenos".

## Qué se quitó o no se usó

- Los enlaces del menú que dan 404 en su sitio (Promociones, Estudio 184, Eventos, Contacto) y "Eventos anteriores".
- El encabezado con labios perforados (`estudio184-encabezado.jpg`) y el collage (`inCollage…`): se prefirieron las piezas de cada artista.
- La parte de la cita de El Universal sobre "estrictas normas de higiene para realizar implantes… y hasta reconstrucción del lóbulo": es una afirmación de salud que el estudio no hace en su propio sitio.
- "Copyright © 2020", "Powered by Tejón Digital" y el buscador.

## Qué se conserva al pie de la letra

- Su texto de presentación, su regla de no copiar diseños y sus instrucciones para cotizar.
- Dirección, teléfono, los dos WhatsApp, correo, Facebook e Instagram.
- Nombres y sucursales de los artistas, y las citas de prensa (recortadas, sin cambiar lo que dicen).

## Pendiente de confirmar con el cliente

- Dirección de la sucursal Del Valle.
- Si el horario de su página de reservas vale para las dos sucursales.
- Quién sigue en el equipo (el portafolio es de 2020 a 2022) y si hay perforadores en Del Valle.
- Si prefieren que la cotización llegue por WhatsApp o por su sistema de reservas.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y la hoja de stencil: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó nada nuevo.
