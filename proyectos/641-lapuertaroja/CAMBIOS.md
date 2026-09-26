# La Puerta Roja Hotel Boutique: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lapuertarojahotel.com.mx/ (hecho en Framer) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/641-lapuertaroja/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 641-lapuertaroja`) |

## En una línea

Es el mismo hotel con sus textos, habitaciones, tarifas publicadas y contacto. Ahora es un sitio limpio, sin el spam ni los restos de la demo que tiene el actual, y las siete habitaciones se eligen como siete puertas.

## Problemas del sitio actual (importante para el cliente)

- **El sitio en línea parece comprometido.** La página `/Nosotros` muestra publicidad de casinos en indonesio ("NAGA188: Slot Gacor 777…"). Eso afecta la reputación y el posicionamiento en Google. **Conviene avisar al cliente.**
- El inicio termina con el texto "This is the free demo result… waybackmachinedownloader.com". El sitio se reconstruyó desde archive.org con la versión de demostración de esa herramienta, que solo recupera 4 páginas. Por eso las habitaciones Índigo, Concha, Escher, Turquesa, Azul y Rosa no tienen página propia.
- El botón "Reservar" lleva a Cloudbeds con fechas imposibles: entrada 2024-06-16 y salida 2021-12-29.
- Cada habitación aparece con dos tarifas distintas (Elefante a $2,700 y a $1,700, por ejemplo).
- Hay dos teléfonos: (647) 428 1552 y (647) 428 0142.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 120 imágenes rotas y 30 a 40 recursos con 404: el HTML pide `sitio/images/…`, pero las imágenes se guardaron en `sitio/assets/images/`, y además pide versiones reducidas (`_scale-down-to-512`) que no se descargaron | Las 20 imágenes se usan desde `sitio/assets/images/`: 0 rotas |
| El carrusel del inicio queda en gris y el logotipo no aparece | Hero con las 3 fotos del carrusel original (alberca, sala y fuente) y el logotipo en SVG |
| 0 de 23 imágenes con texto alternativo | Todas las imágenes tienen descripción |
| El texto aparece 3 o 4 veces (escritorio, tableta y celular de Framer en el mismo HTML) | Cada texto aparece una vez |

## Qué se cambió (mismo contenido, otra forma)

- **Estructura:** una sola página en lugar de inicio, habitaciones y fichas por habitación.
- **Habitaciones:** las 7 están juntas, con capacidad y tarifa, en lugar de 3 en el inicio y el resto en otra página.
- **Reservar:** apunta al motor de Cloudbeds del hotel, sin las fechas rotas (`https://hotels.cloudbeds.com/reservation/9aLNU4`).
- **Colores:** el rojo `#e42320` de la puerta del logo, reservado para la acción principal y la puerta elegida. El tinta `#141414` y el grafito `#424344` vienen del original. Se agregan un cal (muro encalado) y un añil (de la habitación Índigo y la fuente) para los bloques.
- **Tipografía:** las del original, Playfair Display e Inter, servidas desde el proyecto.

## Qué se agregó (no existía en el original)

- **"Elige tu puerta":** las 7 habitaciones como puertas en arco, como la fachada del logo. La elegida se pinta de rojo y muestra sus datos. **Es el elemento distintivo.** La frase "Siete habitaciones. Elige tu puerta." es nuestra.
- **Títulos nuevos:** "Te esperamos en Álamos" (contacto) y "Tarifa publicada" (etiqueta).
- **Botón "Preguntar"** (llamada) junto a cada habitación.
- **Barra fija en el celular** con Reservar, Llamar y Cómo llegar. Cómo llegar es una búsqueda en Google Maps con la dirección, porque el original no tiene enlace de mapa.
- **Datos estructurados** JSON-LD `Hotel` (7 habitaciones, rango $1,500 a $3,100, dirección y alberca) y etiquetas Open Graph.

## Qué se quitó o no se usó

- La página "Nosotros" (spam), las páginas de habitación que no existen y el texto de la demo.
- Las flechas del carrusel de Framer y las versiones duplicadas por tamaño de pantalla.
- **No hay WhatsApp:** el sitio no publica un número de WhatsApp, así que las acciones son reservar en línea y llamar.

## Qué se conserva al pie de la letra

- **Textos:** "Compartiendo doscientos años de historia", "Una casa antigua al estilo Colonial" y su párrafo, "Cada habitación, un mundo y una historia que contar", la introducción de habitaciones, la ficha completa de Elefante (descripción, cama y 7 amenidades), los textos de Teresita's y Le Bleu, el desayuno a la puerta, "Un encantador entorno para conmemorar tus momentos" y su frase, y "Para conocer nuestras promociones…".
- **Habitaciones y tarifas:** se usa la **primera** tarifa publicada de cada una.

| Habitación | Capacidad | Tarifa |
|---|---|---|
| Elefante | 2 adultos | $2,700 |
| Índigo | 2 adultos | $2,700 |
| Concha | 4 adultos | $3,100 |
| Escher | 2 adultos | $2,700 |
| Turquesa | 4 adultos | $2,500 |
| Azul | 2 adultos | $1,500 |
| Rosa | 3 adultos | $1,700 |

- **Contacto:** Calle Galeana No. 46, La Colorada, Álamos; (647) 428 1552; Instagram y Facebook @lapuertarojahotel; enlace a teresitas.com.mx.

## Pendiente de confirmar con el cliente

- **Tarifas vigentes** (el sitio muestra dos por habitación) y si son por noche.
- **Fotos, descripción y amenidades** de Índigo (hay foto), Concha (hay foto), Escher, Turquesa, Azul y Rosa (sin foto). Mientras tanto, el rediseño muestra una puerta con el nombre.
- **Teléfono principal:** 428 1552 o 428 0142. ¿Tienen WhatsApp?
- **Limpieza del sitio actual:** quitar el spam de `/Nosotros`.

## Dónde está cada cosa

- Textos, habitaciones, fotos y contacto: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx` (`Puerta` y `Habitaciones` son el elemento distintivo)
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/images/` (`publicDir: '../sitio/assets/images'` en `rediseno/vite.config.ts`)
- Inventario de imágenes: `rediseno/IMAGENES.txt`
