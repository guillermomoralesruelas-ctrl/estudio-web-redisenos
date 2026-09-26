# Casa Orígenes: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://casaorigenes.com.mx/ (hecho en Astro) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/175-casaorigenes/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 175-casaorigenes`) |

## En una línea

Es el mismo restaurante con los mismos textos y precios. Ahora el sitio funciona sin depender de los scripts de Astro que faltan en el clon, el menú completo con precios está en el inicio y reservar por WhatsApp está a un toque.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Faltan 2 hojas de estilo (`MainLayout`, `SignatureSection`) y 12 scripts de Astro (404). La página abre sin estilos: enlaces azules y letra del navegador | Sitio nuevo en Vite + React, sin depender de nada del clon salvo las imágenes |
| Desborde horizontal de 776 px en escritorio y 1,666 px en móvil | 0 px de desborde en ambas vistas |
| El carrusel del inicio no funciona (necesita los scripts que faltan) | Carrusel propio: 3 fotos (alberca, jardín, terraza) con transición lenta y sin movimiento si el usuario tiene "reducir movimiento" |
| 8 imágenes rotas en escritorio y 14 en móvil: el clon bajó una sola medida de cada foto, y el HTML pide otras (`srcset` con otros hashes) | Cada foto se usa en la medida que sí existe en `sitio/assets/_astro/` |
| El menú está en otra página y no se clonó | Los 85 productos con precio están en `rediseno/src/data/menu.json`, extraídos de `investigacion/crudo.json` |
| Las fotos del chef y del equipo (`chef-*.webp`) no se descargaron | El equipo aparece solo con texto; no se inventaron fotos |
| Los videos (`Casa Orígenes - web.mp4`, burritos, kebabs) no se descargaron | No se usan. Se quitaron del menú las referencias del tipo "[Video 2](…)" |

## Qué se cambió (mismo contenido, otra forma)

- **Estructura:** el original tiene 5 páginas (inicio, quiénes somos, menú, galería, contacto). El rediseño es **una sola página** con todo.
- **Menú:** en 4 pestañas por momento del día (Desayuno, Media tarde, Café y bebidas, Panadería), en vez de 15 categorías sueltas. Los precios van con línea punteada, como en una carta impresa.
- **"¿Qué nos hace diferentes?":** los 4 puntos van como lista con una foto grande, en lugar de 4 tarjetas iguales.
- **Colores:** salen de la loza y la madera de las fotos (crema, salvia, cobalto) y del ámbar `#cc7323` del CSS original. El logo conserva su color `#231f20`.
- **Tipografía:** se conservan Cormorant Garamond (títulos) e Inter (texto), las de la marca, y van dentro del proyecto (@fontsource).
- **Pan de bono y arepas:** el original pone el precio dentro de la descripción ("1 pza: $20 3 pzas: $75"). Ahora el precio de una pieza va en la columna de precio y el de tres en la descripción.

## Qué se agregó (no existía en el original)

- **"¿Qué se antoja ahora?"** es una tarjeta que lee la hora de Xalapa (`America/Mexico_City`) y recomienda algo según el momento: desayuno de 9 a 12, media tarde de 12 a 18, o "estamos cerrados" fuera de horario. Su botón abre la pestaña del menú que corresponde. **Es el elemento distintivo.** Sus textos son nuestros; los platillos que menciona sí están en el menú.
- **Aviso de horario** en el inicio: "Abierto ahora, hasta las 6 pm" o "Cerrado ahora, abrimos a las 9 am".
- **Barra fija en el celular** con Reservar (WhatsApp), Llamar y Cómo llegar.
- **Datos estructurados** JSON-LD `Restaurant` (horario, dirección, rango de precios $25 a $250 y reservaciones) y etiquetas Open Graph.
- **Títulos de sección nuevos:** "Los que siempre se piden" y "Nuestro menú", más la frase bajo el menú. El resto de los textos es del original.

## Qué se quitó o no se usó

- Los videos y la sección de menú en PDF (no se clonaron).
- El mapa incrustado de Google: en su lugar hay una foto de la terraza que abre el enlace de Maps del original. Así no carga nada de terceros.
- La navegación a subpáginas.

## Qué se conserva al pie de la letra

- **Textos:** "Cocina con raíces", "Aquí no solo comes, vuelves a lo esencial", "Todo gran sabor tiene una gran historia", los 4 puntos de "¿Qué nos hace diferentes?", la biografía y la cita de la chef Lesly Benitez, los nombres y puestos del equipo, "Hay lugares que no se explican, se viven…" y el texto del pie.
- **Todos los precios del menú.**
- **Contacto:** dirección (Blvd. Europa esq. Tokio, Monte Magno), horario (lunes a domingo de 9 am a 6 pm, cerrado en días festivos), teléfono (228) 163 5761, WhatsApp 5212281635761, enlace de Maps, Instagram, TikTok y Pinterest.

## Pendiente de confirmar con el cliente

- **Fotos del chef y del equipo:** pedirlas, porque no se descargaron.
- **Horario de cocina:** confirmar si "media tarde" empieza a las 12. La tarjeta "¿Qué se antoja ahora?" asume ese corte.
- **Pinterest:** el enlace se armó con el mismo usuario (origenes.xlp); confirmar que la cuenta exista.

## Dónde está cada cosa

- Textos, horario, contacto, fotos y favoritos: `rediseno/src/data/content.ts`
- Menú completo con precios: `rediseno/src/data/menu.json`
- Diseño y secciones: `rediseno/src/App.tsx` (el componente `Antojo` es el elemento distintivo)
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/_astro/` (`publicDir: '../sitio/assets'` en `rediseno/vite.config.ts`)
