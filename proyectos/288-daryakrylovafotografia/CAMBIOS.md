# Darya Krylova Fotografía de Producto: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://daryakrylova.com/ (hecho en Vigbo, © 2024) |
| Método | **1.2 en la nube** (lote 11): el clon de Vigbo carga las fotos con JavaScript y no trae ninguna utilizable; se leyeron inicio, /catalogo, /redes-sociales, /ecommerce, /portafolio, /nosotros, /contacto y /faq, y se bajaron a `assets/originales/` las 78 fotos de su portafolio (a 2000 px), su retrato y su logotipo |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/288-daryakrylovafotografia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El estudio de fotografía de producto de Darya Krylova en Guadalajara en una sola página: sus tres servicios, sus 8 paquetes, su portafolio en cuatro galerías y la pregunta "¿Cuántas fotos necesita tu producto?", contestada con la silla para bebé que ella fotografió en 7 tomas.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Desborde horizontal de 728 px en escritorio y 1,618 px en el celular, 2 imágenes rotas, llamadas a la API de Vigbo con 404 y 12 errores de consola | Sin desborde, 0 fotos rotas, 0 errores (`qa/reporte-rediseno.json`) |
| Las fotos del portafolio no se ven: Vigbo las carga con JavaScript desde su CDN | 58 fotos suyas en `.webp` (`rediseno/fotos-web.mjs`) |

## Qué se cambió (mismo contenido, otra forma)

- Las siete páginas del sitio (inicio, tres servicios, portafolio, nosotros, FAQ) se juntan en una sola página con menú de anclas.
- Los paquetes, que en el original están repartidos en tres páginas, se ven juntos: Catálogo (Fenómeno, Ídolo, Legendario), eCommerce (eCom Basics, eCom PRO) y Redes sociales (Social, Creativo, Influencer), con sus cantidades y su "Ideal para" tal como los publica.
- El proceso de 5 pasos, que se repite igual en las tres páginas de servicio, aparece una vez, junto al texto de "De concepto creativo a creación final" y los beneficios.
- De las 22 preguntas frecuentes se dejan 9, resumidas con sus mismos datos (precio, mínimo, envíos, dónde se fotografía, Brief y Shot List, pago 50/50, factura, RAW, cancelación).
- Las cuatro galerías del portafolio (eCommerce y catálogo, Infografías para marketplaces, Fotografía creativa, Fotografía en sitio) van en pestañas.
- El botón de WhatsApp, que en el original es una imagen sin texto alternativo y abre el chat vacío, ahora es texto y lleva un mensaje escrito.

## Qué se agregó (no existía en el original)

- **"¿Cuántas fotos necesita tu producto?"** (elemento memorable): las 7 tomas de la silla para bebé de su portafolio (frente, tres cuartos, perfil, arnés, versión baja, versión baja en tres cuartos y piezas por separado). Eliges 1, 2, 4 o 7 imágenes por producto y cuántos productos; la tira de tomas se enciende hasta ese número, se muestra la toma y el paquete de referencia (1 = Fenómeno, 2 = Ídolo, 4 = Legendario o eCom Basics, 7 = eCom PRO), el total de imágenes y un WhatsApp con la selección escrita. El orden de las tomas es propuesta del estudio y se aclara como ilustrativo.
- Textos del estudio: titulares de sección, introducciones, resúmenes de las preguntas y textos alternativos de todas las fotos.
- Barra fija en el celular (Llamar y WhatsApp), JSON-LD `ProfessionalService`, title, description, Open Graph con `compartir.jpg` y favicon SVG "dK".
- Enlace a Google Maps de Guadalajara (no publica dirección del estudio, solo la ciudad).

## Qué se quitó o no se usó

- Los formularios de contacto (se cambian por WhatsApp y correo) y el aviso de cookies.
- **Fotos con IA:** 13 fotos de su portafolio traen credenciales C2PA de Adobe Firefly (generadas o retocadas con IA: creativa-01, 03, 06, 09, 24, 25, 26, 35, 36, 37, 40 y ecom-01, 02) y no se usan; tampoco info-03 (misma escena del café que creativa-26).
- Fotos de marcas globales (Montblanc, Polo, Neutrogena, OGX, Sally Hansen, La Roche-Posay, Grisi): son trabajo suyo, pero se dejaron fuera por prudencia hasta confirmar que puede mostrarlas.
- Las cifras "65 millones de compradores digitales" y "40% compra semanalmente" de su página de eCommerce (sin fuente).
- La mención a su galería de viajes por Asia (no está en el sitio actual).

## Qué se conserva al pie de la letra

- Teléfono y WhatsApp (+52) 33 3059 9948, correo hello@daryakrylova.com, Instagram @dk.productphotography y Facebook daryakrylovaphotography.
- Nombre de cada paquete, cantidades de productos e imágenes y sus listas "Ideal para".
- Su presentación de "Nosotros" (profesional desde 2023, más de siete años como hobby, experiencia en China) y los cinco testimonios con nombre y producto (Natalia, Estefanía, Gloria, Alonso, Omar).

## Pendiente de confirmar con el cliente

- Tiempo de entrega: la portada dice "1-2 semanas después de recibir tus productos y el pago" y la página de preguntas "entre 5 y 7 días". El rediseño no publica ninguno.
- Precios o "desde" de cada paquete (no los publica).
- Si puede mostrar las fotos de marcas globales y si quiere mostrar las retocadas con IA.
- Límite de tamaño de producto (su FAQ dice "no superen los (LxAxA)" sin la medida).

## Dónde está cada cosa

- Textos, paquetes, tomas de la silla y galerías: `rediseno/src/data/content.ts`; medidas de fotos: `rediseno/src/data/fotos.json`.
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`; Playfair Display y Montserrat, las de su sitio)
- Imágenes: `assets/originales/` → `rediseno/fotos-web.mjs` → `assets/web/` (`publicDir` en `rediseno/vite.config.ts`)
