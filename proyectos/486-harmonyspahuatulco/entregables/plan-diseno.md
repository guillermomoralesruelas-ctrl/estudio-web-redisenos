# Harmony Spa Huatulco: plan de rediseño (método 1.1)

**Sitio original:** https://www.spahuatulco.com/
**Materia prima:** clon en `../sitio/` (HTML real en `sitio/index.html`; imágenes en `sitio/assets/images/`). `investigacion/crudo.json` y `resumen.json` quedaron vacíos porque Jina Reader chocó con un reto anti-bot al leer el sitio ("Robot Challenge Screen"); el texto y el contacto reales se sacaron directo de `sitio/index.html` / `investigacion/original.html` y quedaron en `contenido/contenido.md`.
**Rubro:** spa (temazcal, masajes y tratamientos faciales). **Ciudad:** Crucecita, Bahías de Huatulco, Oaxaca.

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-27): 8,228 px en escritorio y 9,153 px en el celular, 688 px y 1,578 px de desborde, 28 imágenes rotas (todas las de `content/spa/images/` y `images/update/02.jpg`, `03.jpg`… no vinieron en el clon), 60 y 59 errores de consola y 53 recursos fallidos en las dos vistas: fallan los 4 CSS del tema, el JS de jQuery/menú/reproductor y `promos/promo.js.php` (el modal de promociones no carga).
- A ojo: sin sus CSS el sitio del clon se ve sin maquetar (todo en una columna, sin colores). El popup de promociones (SweetAlert2) nunca llega a mostrarse porque depende de `promo.js.php`, que no se pudo descargar.

## Qué tiene que lograr el sitio
1. Que alguien hospedado en un hotel de Huatulco decida un paquete (temazcal, masaje o facial) y escriba por WhatsApp con el paquete, la duración y el precio ya puestos.
2. Dejar claro, sin que se pierda en el texto, que el traslado ida y vuelta al hotel está incluido: es la objeción típica de un turista sin coche.
3. Que pueda ubicar el spa en el mapa o llamar directo.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| profundo | #123640 | Cabecera, pie y fondo del elemento memorable. Sale de oscurecer el teal del logo real de la marca (`update01.jpg`, la hoja: rgb(32,103,121) ≈ #206779). Blanco encima 12.90:1 |
| teal | #206779 | Botones primarios, enlaces, iconos. Es el color exacto de la hoja del logo. Blanco encima 5.37:1; sobre crema 4.54:1 |
| terracota | #c78e5a | Precios y acento activo dentro del elemento memorable, siempre sobre "profundo". Sale de aclarar el tono arena del logo (rgb(198,156,108) ≈ #c69c6c) hasta que su texto pasara AA sobre "profundo": 4.57:1 |
| crema | #fbe9da | Fondo claro de secciones. Es el rosa-durazno del fondo del logo, aclarado. Tinta encima 11.45:1; gris encima 4.68:1 |
| tinta | #22303a | Texto principal. 11.45:1 sobre crema |
| gris | #5b6b73 | Texto secundario. 4.68:1 sobre crema; 5.53:1 sobre blanco |

**Tipografía:** Fraunces (serif con carácter, para títulos: evoca lo artesanal/ancestral del temazcal sin caer en spa-cursiva genérica) + Inter para texto y datos (precios, duración), ambas con @fontsource, solo latino. El sitio original no define una tipografía de marca (usa Roboto/Lato/Patua One genéricas de tema), así que se elige una pareja con carácter en vez de repetirla.

## Elemento memorable
**"Ida y vuelta, ya resuelta"**: el camino completo de la visita, en 4 paradas, armado solo con lo que el propio negocio ya publica. Sale de un dato real que en el sitio original está escondido en una sola imagen promocional (`images/transporte.jpg`): "Cortesía a nuestros clientes VIP, traslado incluido ida y vuelta a su hotel en Huatulco". Para alguien hospedado en Huatulco sin coche, esa es la objeción número uno antes de elegir un spa, y el sitio original la trata como un detalle secundario en vez del gancho principal.
1. **Te recogemos** — el dato del traslado, con la foto real de la fachada y las camionetas (`transporte.webp`).
2. **Eliges tu paquete** — los 8 paquetes reales del sitio (Temazcal $500/60 min, Temazcal Plus $650/2h, Masaje $900/60 min, Golden $900/120 min, Anti Edad $950/1h, Hidratante $950/1h, Premium $1,200/2h, Parejas $2,500/2h), como tarjetas que se pueden ordenar por duración o por precio; cada una con su descripción real.
3. **Tu ritual** — al elegir un paquete, aparece la foto que le corresponde (temazcal → domo real recortado de `update01.jpg`; los demás → tratamiento facial o sala de masajes) y el texto real de qué incluye.
4. **Te regresamos** — cierre con el mismo dato del traslado y el botón de WhatsApp, ya con el paquete, la duración y el precio elegidos en el mensaje.
**Por qué no repite otros:** no es una calculadora de inversión, ni un filtro de categoría, ni un reloj de arena por tiempo disponible (eso ya se usó): aquí el eje es la logística del traslado gratis, que es el dato que este negocio en particular esconde y que decide la compra en un destino de playa.
**Límite honesto:** las 8 tarjetas de paquete usan solo la duración y el precio publicados; no hay disponibilidad de horario en vivo (eso se resuelve por WhatsApp).

## Estructura
1. Encabezado: "Harmony Spa Huatulco", enlaces cortos (Paquetes, Temazcal, Ubicación) y botón de WhatsApp.
2. Portada: H1 "El verdadero hogar para tu cuerpo y mente en Huatulco", "Más de 25 años de experiencia ofreciendo tratamientos que conectan el cuerpo y el alma", foto real de tratamiento facial, botones WhatsApp y "Ver paquetes".
3. Ida y vuelta, ya resuelta (el elemento).
4. Servicios: Spa & Relax, Temazcal, Tratamientos faciales, Nutrición y cuidados alimenticios (los 4 reales, con sus textos).
5. ¿Qué encontrarás en Harmony Spa?: Tratamientos cosméticos, cabinas privadas, hermoso temazcal (foto de la sala real).
6. Ubicación: dirección real, Google Maps con el lugar real, teléfono, Facebook e Instagram reales.
7. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador.
- Animar cada sección al hacer scroll: solo la tarjeta elegida del elemento cambia con un fundido corto (quieto con `prefers-reduced-motion`).
- Tarjetas idénticas repetidas: los servicios van en lista con ícono, no en grid de tarjetas iguales a las de paquetes.
- Inventar reseñas, horarios, certificaciones o antes/después. El horario de atención no está publicado: queda fuera del sitio (no se inventa) y se anota como pendiente en CAMBIOS.md.
- El popup de promociones (SweetAlert2/Swiper) del original no se recrea: dependía de un script que no se pudo descargar y su contenido real no se puede confirmar.
