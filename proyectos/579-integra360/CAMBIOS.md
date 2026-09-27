# Integra 360: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://integra360.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima. Hecho en la PC |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/579-integra360/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 579-integra360`) |

## En una línea

Mismo negocio, mismo inventario (96 de sus 101 fichas, con precio, m², recámaras, baños y coordenadas), mismos servicios, mismo contacto y mismo WhatsApp; en vez de una portada de plantilla Houzez con seis tarjetas, "Lorem ipsum" y un menú que muestra 3 de 96 propiedades en venta, una página que pregunta "¿hacia dónde de Pachuca quieres vivir?" y termina en WhatsApp con la ficha ya escrita.

## Qué estaba roto o incompleto en el clon

Sacado de `qa/reporte-rediseno.json` → `antes` y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 1 recurso fallido (`houzez/css/img/lazyloader-1.gif`, 404) y 1 error de consola, en escritorio y en el celular | 0 recursos fallidos y 0 errores de consola |
| Las seis tarjetas de "Descubre nuestras propiedades destacadas" salen en blanco (la carga diferida de Houzez no corre en el clon) | Las destacadas con sus fotos reales (Gema Residencial y Alvento Habitat) y las demás en lista |
| Falta el fondo de "Contáctanos para publicar tu casa o terreno": queda un hueco blanco grande | Sección con su texto y un formulario que arma el WhatsApp |
| "Carga más", favoritos, comparar e "Iniciar sesión" no hacen nada | Se quitaron; el inventario completo está en "Pachuca a 360°" |
| 4,978 px en escritorio y 8,853 px en el celular | 6,074 px en escritorio y 9,944 px en el celular (más alto porque ahora está el inventario completo con su ficha y los servicios completos) |

## Qué se cambió (mismo contenido, otra forma)

- **"Descubre nuestras propiedades destacadas" (seis tarjetas + "Carga más") y las páginas Venta y Renta → "Pachuca a 360°"** (elemento memorable) y una sección de destacadas con las mismas propiedades de su inicio. La ficha 26296 repite a la 26310 (mismo título, precio y m²): se muestra una vez.
- **"Explora" (conteo por tipo)** → cifras de la portada, contadas de su inventario actual (58 casas en venta, 27 terrenos y lotes, 7 departamentos, edificios y más, 4 en renta).
- **"¿Por qué Integra 360 es tu mejor opción?"** → lista con filetes de sus cinco servicios, sin los iconos de ejemplo del tema.
- **"Contáctanos para publicar tu casa o terreno"**: los mismos campos que su formulario (dirección del inmueble, ciudad, código postal y nombre), pero en vez de enviarse a su servidor abren WhatsApp con los datos escritos. Se quitaron apellidos y correo.
- **Logos de desarrollos** (los once de "Explora") → tira de logos con título "Desarrollos".
- **Contacto** (en su cabecera y pie) → sección "Contáctanos" con dirección, Google Maps, teléfono como enlace, WhatsApp, correo y redes.
- Paleta: el azul petróleo del símbolo de su logo (#087898 → #0a6a88) y el azul de su tema (#004274 → #0b2a3c), con ámbar, ocre, violeta y cantera nuestros. Tipografía: Roboto (la de su sitio) y Outfit para títulos.
- WhatsApp: su sitio usa `api.whatsapp.com/send?phone=5217712149491`; el rediseño usa `wa.me/527712149491` (mismo número, formato actual) y, en cada propiedad, **el mismo mensaje que su sitio**: "Hola, estoy interesado(a) en [título] enlace".
- Correcciones mínimas en sus textos de servicios: "NUEVO HOGAR", "INVERTIR" y "VENTA DE TU PROPIEDAD" en minúsculas; "enserio" → "en serio"; puntos en el párrafo de Asesoría en compra; "servicio 360*" → "servicio 360°"; "Por qué Integra 360 es tu mejor opción?" → con signo de apertura.
- Title, meta description, Open Graph y JSON-LD nuevos (el original no tiene description y su `og:image` está rota).

## Qué se agregó (no existía en el original)

- **El elemento "Pachuca a 360°"**: una rosa de los vientos en SVG con centro en la colonia Puerta de Hierro, anillos de 2, 5, 10, 20 y 40 km (escala de raíz cuadrada; lo que pasa de 40 km queda en la orilla con su distancia), las salidas a CDMX, Sahagún, Tulancingo, Huasca y Actopan y el Reloj Monumental como referencia. Cada punto es una propiedad (color por tipo). Filtros: Comprar o Rentar; Todo, Casas, Departamentos, Terrenos y lotes, Edificios y otros; y el rumbo (los ocho o "Los 360°"). El sector elegido gira y se ilumina; una frase dice cuántas hay, a qué distancia y desde qué precio; la lista las ordena por distancia y la ficha muestra lugar, precio como se publica, m², recámaras, baños, distancia y rumbo, su título tal cual ("Así se publica: …"), enlace a su ficha y WhatsApp.
  - Datos en `rediseno/src/data/propiedades.json`, tomados con curl de la API pública de su WordPress (`https://integra360.com.mx/wp-json/wp/v2/properties?per_page=100`, páginas 1 y 2, 2026-09-27): tipo, operación, precio y sufijo (preventa, costo por m², mensual), m² de construcción y de terreno, recámaras, baños, latitud y longitud, enlace y fecha. El campo `lugar` (fraccionamiento o colonia y municipio) lo escribimos a mano a partir de la dirección de cada ficha.
  - Tipos corregidos por su título: 21852 ("Lotes en venta en Zona Plateada", publicado como Casas) → terreno; 25845 ("Departamento en Pachuca RENTA", publicado como Casas) → departamento; 25747 (palco del Estadio Hidalgo, publicado como Casas) → edificios y otros.
  - Fuera del elemento (5 de 101): 26296 (repite la 26310), 26185 (terreno en Villa de Tezontepec sin estado de venta o renta), 25151 (terreno en Villa de Tezontepec cuyo precio, $165,300,000, es igual a sus m²), 26133 y 21820 (sin coordenadas).
  - Centro: el punto de la colonia Puerta de Hierro en OpenStreetMap (20.0884, -98.7651), no la ubicación exacta de la oficina. Rumbos de las salidas calculados con las coordenadas de cada ciudad (CDMX 208°, Sahagún 151°, Tulancingo 91°, Real del Monte/Huasca 60°, Actopan 317°); Reloj Monumental en 20.12757, -98.7318 (OpenStreetMap).
- Textos redactados por nosotros: H1 "Encuentra tu próximo patrimonio en Pachuca e Hidalgo" (sobre su frase "Encuentra tu próximo patrimonio"); el párrafo de la portada (armado con su texto de Asesoría en compra); "¿Hacia dónde quieres vivir?" y "Escribir por WhatsApp"; las etiquetas de las cifras; el pie de foto de la portada; "Pachuca a 360°" y su párrafo; "Quiero", "Qué busco", "Hacia dónde", "Comprar", "Rentar", los nombres de los filtros y de los rumbos; la frase "Hacia el … hay … de … a … km, desde …" y la de cuando no hay; "De la más cercana a la más lejana"; la nota de escala y fecha; "… en …" como nombre de cada propiedad; "a … km de Puerta de Hierro hacia el …"; "Así se publica"; "Vender o rentar con nosotros incluye perfilar a cada cliente, asesoría en temas fiscales y la gestión notarial" (resumen de su texto de Venta); "Tu nombre", "Enviar por WhatsApp" y "Se abre WhatsApp con estos datos escritos; tú decides si lo envías"; "Desarrollos" y "Fraccionamientos y residenciales de la zona que aparecen en nuestro sitio"; "Contáctanos", "Síguenos"; el aviso de precios del pie; los botones "Preguntar por esta", "Preguntar", "Ver la ficha completa", "Ver la ficha", "Ficha", "Cómo llegar", "Llamar" y "WhatsApp"; los mensajes de WhatsApp general y de "publicar"; los textos alternativos.
- WhatsApp con mensaje prellenado (general, por propiedad y para publicar un inmueble).
- Enlace a Google Maps (búsqueda de su dirección).
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.
- JSON-LD `RealEstateAgent` (nombre, lema, teléfono, correo, dirección sin código postal, municipios de su inventario como `areaServed` y redes); Open Graph con imagen; favicon hecho con el símbolo de su logo.
- `prefers-reduced-motion`: el giro del sector y el fundido de la ficha se apagan.

## Qué se quitó o no se usó

- Tres de las seis portadas de destacadas: Lagos Residencial (`afb7ef45…`), Atalia en Acayuca (`4ef6eed4…`) y Alvento de $3,800,000 (`WhatsApp-Image-…10.16.27-AM-9`): parecen renders o fotos retocadas con IA (sin credenciales C2PA ni EXIF que lo confirme). Esas propiedades van sin foto.
- `2020/03/206.jpg` (foto de ejemplo del tema Houzez) y los iconos de ejemplo (`balance.png`, `people-1.png`, etc.).
- "Lorem ipsum dolor sit amet, consectetur adipisicing" (subtítulo de "Por qué Integra 360…").
- Crear un listado, Iniciar sesión, Favoritos, Comparar, "Carga más", el buscador avanzado con sus 36 características y el rango de precios.
- Apellidos y correo del formulario de publicar.

## Qué se conserva al pie de la letra

- Nombre, lema "Expertos en bienes raíces", logotipo y logo.
- Dirección: Boulevard Nuevo Hidalgo 326 Int. 4, Puerta de Hierro, Pachuca de Soto, Hidalgo. Teléfono 7712149491, WhatsApp 5217712149491, contacto@integra360.com.mx. Facebook IntegraBienesRaices360, TikTok @integra360br, Instagram integra360bienesraices, YouTube @integra360bienesraicescasa9.
- Los títulos de sus 96 fichas, tal cual (en la ficha y en el WhatsApp), con sus precios, m², recámaras, baños y enlaces.
- "Descubre nuestras propiedades destacadas" y sus propiedades (Gema $5,200,000; Alvento $3,600,000 y $3,800,000; Lagos $14,500,000; Atalia $3,800,000 en preventa).
- Los cinco servicios y sus textos (con las correcciones mínimas de arriba).
- "Contáctanos para publicar tu casa o terreno" y "Creamos una publicación personalizada para tu inmueble, destacamos tu publicación y te asesoramos a cerrar la venta o renta."
- Los once logos de desarrollos.

## Pendiente de confirmar con el cliente

- La ubicación exacta de la oficina (el centro de la rosa es el punto de la colonia Puerta de Hierro) y su código postal.
- Que las 96 fichas sigan vigentes y sus precios (son los del 27 de septiembre de 2026; `propiedades.json` habría que actualizarlo o leerlo de su API).
- Las fichas con datos dudosos: 26296 duplicada; 25151 con precio igual a sus m²; 26185 sin venta o renta; 26177 con ciudad "TULANCINGO" aunque es en Las Torres, Pachuca; 26078 dice "65 habitaciones" (su ficha tiene 5); 21852, 25845 y 25747 con el tipo equivocado.
- Si las fotos de Lagos, Atalia y Alvento $3,800,000 son renders del desarrollo o fotos retocadas, y fotos reales de las demás propiedades.
- Que el WhatsApp general sea el mismo 771 214 9491 de las fichas.
- Horario de atención (no se publica).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; inventario: `rediseno/src/data/propiedades.json`; medidas de imágenes: `rediseno/src/data/fotos.json` (lo escribe `fotos-web.mjs`).
- Diseño y secciones: `rediseno/src/App.tsx` (la rosa es `Rosa`).
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`).
- Imágenes: copias .webp en `assets/web/` (tres fotos de propiedades, once logos de desarrollos, logotipo, símbolo y favicon), generadas desde el clon con `node fotos-web.mjs` en `rediseno/`. `assets/web/` es el `publicDir`; no va en el commit del rediseño y se regenera con ese script antes de `npm run build`.

## QA final

| Vista | Alto | H1 | Imágenes | Rotas | Errores | Fallidos | Desborde |
|---|---|---|---|---|---|---|---|
| Escritorio (1280 px) | 6,074 px | 1 | 17 | 0 | 0 | 0 | 0 |
| Móvil (390 px) | 9,944 px | 1 | 17 | 0 | 0 | 0 | 0 |

Verificado en XAMPP con `herramientas/verificar-xampp.mjs` (ok).
