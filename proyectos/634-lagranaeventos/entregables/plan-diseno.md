# La Grana Eventos: plan de rediseño (método 1.1)

**Sitio original:** https://lagranaeventos.com/ (WordPress con el tema Avada; páginas Inicio, Paquetes, Galería, Ubicación y Contacto). Sin reserva en línea, sin WhatsApp y sin formulario: el contacto son tres celulares escritos como texto.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json` (las cinco páginas), contacto en `investigacion/resumen.json` (los tres celulares, redes y las coordenadas de su mapa; el resto de "teléfonos" son fechas y números de archivos).

**Datos comprobados en vivo** (curl al sitio real el 2026-09-27, descargas en una carpeta temporal fuera del estudio): la portada y Contacto no tienen enlaces `tel:` ni `wa.me`, Contacto no tiene formulario (solo el buscador), la portada tiene 5 H1 y ningún JSON-LD, y Paquetes dice "Tifanny" y "bricolines". No se bajó ninguna imagen nueva.

**Rubro:** terraza jardín para eventos (bodas, XV años, bautizos, comuniones, fiestas) a la orilla del Bosque de La Primavera, en Zapopan, Jal. Tipo para Google: `EventVenue`.

**Sobre las fotos (revisadas antes de construir):** el clon trae **8 fotos propias del lugar**: cinco de 1280×960 mandadas por WhatsApp en 2018 (el lago con su puente, el puente al atardecer, la pista de madera con cristal, los toldos tipo pérgola en el pasto y una boda de noche con letras LOVE) y tres de 2015 (el arco "Bienvenidos", la glorieta de ingreso y una pareja de novios). Ninguna trae EXIF de Picasa o Google Maps ni marcas de IA. Calidad de WhatsApp pero usable. Las ~50 fotos de su galería (XV años, bautizos, mesas, candy bar) no están en el clon: pendientes.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 2,367 px y móvil 3,411 px, desborde 0, **5 H1** (los textos del carrusel), 5 imágenes con 2 rotas (versiones reducidas del logo y de una foto), 21 y 20 errores de consola (certificados de recursos externos).
- A ojo: el carrusel de la portada se queda en el círculo de carga (una franja blanca de 400 px), el logo y la foto del toldo árabe salen rotos.
- Fotos: copias `.webp` de las 8 fotos y los dos logos (2.06 MB → 1.62 MB; ya venían comprimidas) y su favicon, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Pedir informes o fecha por WhatsApp o llamar** con un toque (hoy los números no se pueden tocar).
2. **Saber si su fiesta cabe y cuánto cuesta**: la gente piensa en número de invitados y día; el sitio lo tiene en cinco paquetes con reglas distintas (hasta 80 entre semana, mínimo 100, precio por persona).
3. Ver el lugar: el bosque, el lago con su puente, la pista.
4. Llegar: dirección y Google Maps.

Público: familias de Guadalajara y Zapopan que organizan bodas, XV años, bautizos y fiestas infantiles.

## Dirección visual (primera pasada)
El guinda de la grana cochinilla de su logo con el verde del bosque y del pasto.

| Token | Color | Uso |
|---|---|---|
| `grana` | `#930f3e` | Su color primario (Avada `primary_color`, y el logo `#941f41`): encabezado, botones con texto blanco (8.8:1), enlaces sobre crema (8.2:1) |
| `grana-honda` | `#5e0a28` | Contacto y pie, texto blanco (13.5:1) |
| `bosque` | `#1f3a2b` | Títulos (11.5:1 sobre crema), portada y banda de fotos, texto blanco (12.4:1) |
| `pasto` | `#7fae4c` | El jardín del plano |
| `crema` | `#faf6ef` | Fondo |
| `texto` | `#3b3033` | Texto corrido (11.8:1 sobre crema) |

**Tipografía:** las de su tema, **Montserrat** (600 y 700) en títulos y **Open Sans** (400 y 600) en texto, de @fontsource y solo latino. Logo blanco en el encabezado.

## Elemento memorable: "¿Cuánto jardín ocupa tu fiesta?"
Su sitio dice "1,500 m² de área verde", "hasta 400 invitados" con toldos, "mesas redondas para 10 personas" y pistas de 5×5 o 6×6 m según el paquete. El elemento: un **plano a escala del área** (1,500 m² dibujados como un cuadrado de 38.7 m con una regla de 10 m) donde un control de invitados (20 a 400) va poniendo **una mesa de 10 por cada diez invitados** y el paquete elegido pone **su pista a escala**. Al lado: día (lunes a jueves o viernes a domingo), los cinco paquetes, lo que incluye cada uno y **el total para ese número de invitados** con sus reglas (Básico solo lunes a jueves y hasta 80; los demás mínimo 100; "desde" donde su sitio dice "desde"), y el botón "Preguntar por esta fecha" a WhatsApp con paquete, invitados y día escritos.

Sale del negocio: el área, la capacidad, las mesas de 10, las pistas y los precios son suyos. Se declara como simbólico: la forma del jardín (no la publican) y la separación de 3.5 m entre mesas del dibujo. No repite nada anterior: no es un selector de personas por habitación (Villa Margaritas) ni una cuenta de reunión (Café 57); es un plano a escala del terreno.

## Estructura
1. Encabezado guinda: logo blanco, navegación y "¡Llámanos! 33 1227 2774".
2. Portada: el lago con su puente, H1 "Terraza jardín para eventos, bodas y XV años en contacto con la naturaleza", 1,500 m², 400 invitados, 150 vehículos, botones.
3. El jardín: su texto y los dos tipos de eventos, con tres fotos.
4. **¿Cuánto jardín ocupa tu fiesta?**
5. Bodas en el bosque: novios, boda de noche y la pista de madera con cristal.
6. Preguntas frecuentes: sus tres preguntas.
7. Contacto (grana honda): WhatsApp, los tres celulares, redes, dirección con Google Maps.
8. Pie y barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el carrusel de 5 H1, el buscador, las columnas de viñetas de paquetes (pasan al plano), el mapa incrustado de Google con su clave, el "Powered & Designed by" y el "Copyright 2015".
- Sin etiquetas en mayúsculas, sin numeración, sin puntos medios; las listas de eventos van como texto corrido.
- Solo se mueve algo en el plano (las mesas aparecen); quieto con `prefers-reduced-motion`.
- Sin inventar: no se dibuja el tamaño del toldo según invitados (no lo publican), no se calcula el Básico con personas extra (se avisa que existe el extra), no se dice qué celular tiene WhatsApp (se usa el de "¡Llámanos!" y queda pendiente).
- Sin mapa incrustado ni scripts de terceros.
