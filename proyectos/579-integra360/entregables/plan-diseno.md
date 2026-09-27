# Integra 360: plan de rediseño (método 1.1)

**Sitio original:** https://integra360.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json` y HTML en `investigacion/original.html`. El inventario completo (101 fichas con tipo, operación, precio, m², recámaras, baños, dirección y coordenadas) se tomó con curl de la API pública de su WordPress (`/wp-json/wp/v2/properties`, 2026-09-27).
**Rubro:** inmobiliaria ("Expertos en bienes raíces"): venta y renta de casas, departamentos, terrenos, lotes, edificios y bodegas; asesoría de compra, gestión de créditos hipotecarios e inversión. **Ciudad:** Pachuca de Soto, Hidalgo (oficina en Boulevard Nuevo Hidalgo 326 Int. 4, Puerta de Hierro).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-27): 4,978 px en escritorio y 8,853 px en el celular, 0 desborde, 0 imágenes rotas, 1 error de consola y 1 recurso fallido (`houzez/css/img/lazyloader-1.gif`, 404) en las dos vistas.
- A ojo: las seis tarjetas de "Descubre nuestras propiedades destacadas" salen en blanco (la carga diferida de Houzez no corre en el clon), el fondo de la sección "Contáctanos para publicar tu casa o terreno" no está y queda un hueco blanco grande; "Carga más", el corazón de favoritos, comparar e "Iniciar sesión" no hacen nada.
- El logo de la cabecera viene de un `blob:` (Jina) y en el clon se ve el de respaldo.

## Qué tiene que lograr el sitio
1. Que quien busca casa o terreno en Pachuca y alrededores encuentre **una propiedad concreta** de su inventario y escriba por WhatsApp con esa ficha ya en el mensaje.
2. Que quien quiere **vender o rentar** su inmueble pida que se lo publiquen (su sección "Contáctanos para publicar tu casa o terreno").
3. Llamar o llegar a la oficina de Puerta de Hierro.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | #0b2a3c | Cabecera, portada y pie. Sale del azul de su tema (`#004274` en `styling-options.css`), más hondo. Blanco encima 14.89:1 |
| azul | #0a6a88 | El azul petróleo del símbolo de su logo (#087898 en `Logo.jpeg`), un poco más oscuro. Botones, enlaces y casas en el elemento. Blanco encima 6.12:1; sobre cantera 5.38:1 |
| ámbar | #e3a93b | Detalles sobre noche (7.09:1) y el sector elegido del elemento. Nuestro |
| ocre | #9a6410 | Terrenos y lotes en el elemento (4.39:1 sobre cantera, arriba del 3:1 de gráficos). Nuestro |
| cantera | #f2f0eb | Fondo claro de secciones (nuestro, el gris de la cantera rosa de Pachuca, sin rosa). Tinta #1c2a33 encima 12.91:1; gris #56606a encima 5.63:1 |
| gris | #56606a | Texto secundario; sale del gris del logo (#666). 6.41:1 sobre blanco |

**Tipografía:** Roboto, la de su sitio (`styling-options.css` y Elementor), para el texto; Outfit para títulos y cifras, porque sus letras geométricas se parecen a las mayúsculas de "INTEGRA 360" del logo. Las dos con @fontsource, solo latino.

## Elemento memorable
**"Pachuca a 360°"**: una rosa de los vientos con centro en Puerta de Hierro, donde está su oficina. Cada punto es una de sus propiedades (96 de las 101 fichas, con sus coordenadas reales) puesta en su rumbo y su distancia; los anillos marcan 2, 5, 10, 20 y 40 km, y en la orilla van las salidas que sus propias fichas mencionan: a CDMX, a Cd. Sahagún, a Real del Monte y Huasca ("pueblos mágicos"), a Tulancingo y a Actopan, más el Reloj Monumental como referencia. Tocas uno de los ocho rumbos (o "Los 360°") y el sector se ilumina; eliges qué buscas (casas, departamentos, terrenos y lotes, edificios y otros) y si quieres comprar o rentar. Una frase dice cuántas hay hacia ese lado, a qué distancia y desde qué precio, y la lista las ordena de la más cercana a la más lejana. Al elegir una sale su ficha: foto (si la hay en el clon), lugar, m², recámaras, baños, precio como lo publica (con "preventa", "por m²" o "al mes"), a cuántos km y en qué rumbo queda, enlace a su ficha e **WhatsApp con el título y el enlace de la ficha**, como hace su sitio.
Sale del negocio: es su inventario con las coordenadas que ellos mismos pusieron en cada ficha, el nombre de la marca (360) y la pregunta de quien busca en Pachuca, que crece hacia todos lados: ¿qué hay hacia la salida a México, hacia la Zona Plateada, hacia Sahagún o hacia los pueblos mágicos?
**Por qué no repite otros:** 477 filtra lotes por categoría, 495 proyecta plusvalía, 390 dibuja superficies a escala, 326 pone precios contra el tope por pueblo en una línea, y 43 marca distancias al hospital más cercano desde tu ubicación. Aquí lo que se elige es la **dirección** alrededor de una ciudad, con el inventario completo de la inmobiliaria.
**Límite honesto:** el centro es el punto de la colonia Puerta de Hierro en OpenStreetMap (20.0884, -98.7651), no la ubicación exacta de su oficina (pendiente). Las distancias son en línea recta.

## Estructura
1. Encabezado con su logotipo en blanco, navegación corta y WhatsApp.
2. Portada: H1 "Encuentra tu próximo patrimonio en Pachuca e Hidalgo" (su frase "Encuentra tu próximo patrimonio" de "Explora"), "Expertos en bienes raíces", dos acciones y su inventario por tipo (de su API) con la foto real de Gema Residencial.
3. Pachuca a 360° (el elemento).
4. Recién publicadas: las dos propiedades con foto real (Gema Residencial y Alvento Habitat, con sus dos fotos) en grande y las otras destacadas de su inicio en lista.
5. ¿Por qué Integra 360 es tu mejor opción?: sus cinco servicios con sus textos, en lista con filetes (sin el "Lorem ipsum").
6. Publica tu casa o terreno: su texto y los mismos datos que pide su formulario (dirección, ciudad y código postal, nombre), que arman un WhatsApp en vez de enviarse a un servidor.
7. Desarrollos: los once logos de su sección "Explora".
8. Contacto: dirección, teléfono, correo, Google Maps y redes.
9. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador (m², recámaras y baños van con palabras, separados por comas).
- Animar cada sección al hacer scroll: solo el sector de la rosa gira con una transición corta y la ficha aparece con un fundido (quietos con prefers-reduced-motion).
- Tarjetas idénticas: los servicios van en lista con filetes, las destacadas son dos grandes y una lista, los desarrollos una tira de logos.
- Degradados de moda y el "radar" de película: la rosa es un plano claro con líneas finas, como un croquis de ubicación.
- Inventar reseñas, fotos, precios, años de experiencia o datos del negocio. Sin los iconos de ejemplo del tema (gráficas y apretón de manos).
