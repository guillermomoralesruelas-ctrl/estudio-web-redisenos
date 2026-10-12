# Grupo Fractal: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.grupofractal.mx/ (plantilla "Mérida" de EasyBroker) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas de 450 px; se leyeron inicio, ¿Quiénes somos?, Contáctanos, Política de privacidad y todo el catálogo (26 propiedades en 2 páginas), y se bajaron a `assets/originales/` una foto por propiedad (1200 px), tres interiores, el logotipo y su retrato de "Arturo Bienes Raíces" |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/473-grupofractal/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria de lujo de San Pedro Garza García en una página que enseña su catálogo como un mosaico: cada propiedad ocupa el espacio de su precio, agrupada por municipio, y al tocarla aparece su ficha con WhatsApp; después, sus seis servicios para quien quiere vender.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 10 imágenes rotas (rutas de EasyBroker mal reescritas) y miniaturas de 450 x 300 | Fotos de su catálogo a 1200 px en `.webp` (`rediseno/fotos-web.mjs`), 0 rotas |
| Carrusel de "Propiedades destacadas" que en el celular ocupa casi toda la página | Mosaico compacto con ficha al lado (escritorio) o debajo (celular) |

## Qué se cambió (mismo contenido, otra forma)

- El catálogo (26 propiedades en venta y preventa, del que se quitó una repetida) deja de ser una lista de tarjetas iguales: se dibuja como un mosaico donde el tamaño de cada pieza es su precio, agrupado por Monterrey, San Pedro Garza García, Santiago, Allende y Saltillo. Así se ve de un golpe lo que el negocio dice ser: lujo de 20 millones en adelante.
- Los títulos en mayúsculas de EasyBroker ("CASA EN VENTA LOS RIOS PONIENTE | SAN PEDRO…") se muestran como "tipo en colonia"; el título original va completo en el mensaje de WhatsApp.
- Los seis puntos de "¿Qué le ofrecemos?" (asesoría integral, valoración, marketing, negociación, asistencia legal, atención personalizada) pasan de una lista numerada en texto corrido a una sección propia para propietarios, con "Ventas en tiempo récord" y su especialidad como cierre.
- El retrato de "Arturo Bienes Raíces", que en el original es un banner con el logotipo al lado, se recorta a la persona y acompaña a "Quiénes somos".

## Qué se agregó (no existía en el original)

- **El mosaico Fractal** (elemento memorable): treemap de su catálogo con la foto de cada propiedad, filtros (todas, 20 millones o más, casas, terrenos y quintas) que reacomodan las piezas, valor en conjunto, ficha con precio por m² (cálculo del estudio), anterior/siguiente, enlace a su ficha y WhatsApp con el título y el precio. El nombre juega con su marca: un fractal es una figura que se divide en piezas.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), enlace a Google Maps por colonia, JSON-LD `RealEstateAgent`, title y description completos, imagen para compartir y favicon.

## Qué se quitó o no se usó

- El formulario de contacto, el buscador de EasyBroker y el selector de países.
- La "Política de privacidad" (es de otro sitio, ver `OPORTUNIDADES.md`).
- Un departamento en renta en Bosques del Valle que solo aparece en su portada (no está en el catálogo): sigue en su sitio.
- La imagen de una casa frente al mar (`GRUPOFRACTAL.CASA.VENTA.jpg`): es una casa frente al mar, no de su catálogo de Monterrey.

## Qué se conserva al pie de la letra

- Teléfono y WhatsApp 81 2888 8404, correo contacto@grupofractal.mx, oficina en Col. Del Valle, San Pedro Garza García; Instagram, TikTok y YouTube.
- "En Grupo Fractal® nuestra prioridad es tu propiedad", su presentación, los seis servicios, la misión, "Ventas en tiempo récord" y "nos especializamos en propiedades de 20 millones de pesos en adelante".
- Precio, operación, recámaras, baños y m² de cada propiedad tal como los publica, y su logotipo.

## Pendiente de confirmar con el cliente

- Calle y número de la oficina (solo publica la colonia).
- Nombre completo del asesor del retrato y si quieren presentar al equipo.
- Cuál de los precios vale en las casas repetidas o casi repetidas (Sierra Alta 9o sector a $43.5 y $41.5 millones).
- Los precios cambian: los datos son del 2026-10-12.

## Dónde está cada cosa

- Propiedades: `rediseno/src/data/propiedades.ts`; textos: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/` (`rediseno/fotos-web.mjs`).
- Capturas: `referencias/capturas-2026-10-12/`.
