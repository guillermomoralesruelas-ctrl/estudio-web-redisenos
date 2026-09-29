# Floatsano: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://floatsano.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/417-floatsano/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 417-floatsano`) |

## En una línea

El mismo spa familiar, sus textos, precios, horario, WhatsApp y su mapa de Google, en una sola página en español: sin el aviso de "sitio en remodelación", sin promesas de salud y con una cabina de flotación dibujada que se arma con tapa, luz, música y duración y se reserva por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ver `qa/reporte-rediseno.json` → `antes`. La portada dice "🚧 Sitio en remodelación 🚧" y las páginas mezclan español e inglés | Página nueva en español sin scripts de terceros (sin el widget de reseñas): 0 desbordes, 0 imágenes rotas y 0 recursos fallidos |
| La mitad de las fotos son de banco (masaje, sauna, pareja, brindis) | Solo sus fotos propias, copiadas a .webp con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, contacto, flotación, sauna infrarrojo y masaje en una sola página; sauna, masajes, facial y exfoliación en una lista con duración y precio.
- "La historia" y su filosofía junto a las fotos de la fachada, la sala y los visitantes.
- Las reseñas de Google, sin el widget.

## Qué se agregó (no existía en el original)

- **"Tú decides cómo flotar"** (elemento memorable): una cabina dibujada en corte (30 cm de agua con 500 kg de sales de Epsom) que cambia con tres interruptores (tapa abierta o cerrada, luz encendida o apagada, música sí o no) y con la duración (45 min, $1,000; 75 min, precio a preguntar); el WhatsApp sale con esas preferencias.
- Textos nuestros: la entrada del elemento, las etiquetas de los interruptores, "Pregunta el precio", "Sauna infrarrojo, masajes y más", "Un negocio familiar", "Lo que dicen en Google", "Visítanos" y los textos de los botones; el resumen de sus textos de sauna y masaje.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar); JSON-LD `DaySpa` con dirección, coordenadas, horario y precios; Open Graph.

## Qué se quitó o no se usó

- El aviso "🚧 Sitio en remodelación 🚧".
- Las promesas de salud de sus páginas: alivio de fibromialgia, artritis y embarazo, impacto en el sistema inmunológico, tratar ansiedad, estrés postraumático y depresión, "combatir infecciones", "bajar la presión", "eliminar toxinas" y "previene el envejecimiento".
- La reseña de Janet Sparling (habla de una clase de yoga) y el resumen "GOOD, based on 51 reviews".
- Las fotos de banco y el enlace a Clinical Floatation.
- El formulario de contacto (con "Day(s) of Class" y horarios de 8 am): el contacto es por WhatsApp y teléfono.

## Qué se conserva al pie de la letra

- Precios: flotación $1,000 (45 min), sauna infrarrojo $700 (45 min), masaje esencial $1,200 (60 min), piedras volcánicas $1,500 (75 min).
- Cómo funciona la flotación, qué saber para la cita, cómo prepararse, las dos cámaras y las opciones de tapa, luz y música.
- La historia del negocio familiar y su filosofía (resumidas en redacción).
- Hernández Macías 12, horario de lunes a sábado de 10:00 a 18:00 y domingo solo con cita, citas 415-121-1314, WhatsApp 415-188-8488, info@floatsano.com y su mapa de Google (el mismo `iframe`).
- Tres reseñas de Google (Fernando Vázquez, Pablo Escobedo y David Soto), recortadas.

## Pendiente de confirmar con el cliente

- Precio de la flotación de 75 minutos, del masaje de 90, del facial, de la exfoliación, de parejas, fiestas y membresías.
- Si siguen dando clases de yoga (una reseña lo menciona).
- Redes sociales (el sitio no enlaza ninguna).
- Más fotos propias del sauna y de la sala de masaje.

## Dónde está cada cosa

- Textos, precios, flotación, reseñas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la cabina: `rediseno/src/App.tsx`
- Colores, fuentes y animaciones de la cabina: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/2023/04/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
