# Juan Camaney: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://juancamaney.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/599-juancamaney/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 599-juancamaney`) |

## En una línea

Es la misma barbería con sus textos, precios, productos y datos de contacto; cambia la forma: una sola página donde se agenda con Booksy o WhatsApp (con el servicio escrito), se entiende que también es bar y club, y su "Selección musical" se vuelve una rockola donde puedes proponerles una canción.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La captura sale en blanco en escritorio (el tema oculta la página hasta que termina su JavaScript) y con alto 0 en móvil | Sitio completo, 1 H1, 9 imágenes cargadas |
| 60 errores de consola y 2 CSS con 404 | 0 errores, 0 fallidos |
| Solo trae el inicio: las fotos de su local, el menú de servicios en imagen y la tienda están en otras páginas | Se usan sus 5 fotos de producto y los textos de `crudo.json`; pendientes las fotos del local |
| Imágenes PNG de 200 a 560 KB | 7 copias .webp (1.95 MB → 0.25 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Reservar, Barbería, Servicios y Tienda se juntan en una página.
- H1: "Bar & barbería" (su sitio usa "LOS MEJORES CORTES DE CABELLO, LA MEJOR BARBERÍA Y CON MÁS ESTILO EN MÉRIDA YUCATÁN." y tiene 8 H1 en la página Barbería).
- Los servicios pasan de tarjetas con el precio como enlace al inicio a renglones de menú con WhatsApp por servicio.
- El WhatsApp general ya no dice "Quiero saber el precio de los producto": cada botón lleva su propio mensaje (servicio, producto, canción o franquicias).
- El teléfono 999 131 7745 ahora se puede marcar (`tel:`); en su sitio no tiene enlace.
- "Reservar" va directo a su página de Booksy (43316, la del pie de todas sus páginas).
- La cita de "¿Por qué Juan Camaney?" se recortó ("que sale con muchas mujeres" se quitó).
- Productos: "Poción Limpia Barba – Spray Sanitizante de Barba" se muestra como "spray para la barba" y "Revolucionaria – Anticaída" como "fijación fuerte" (de su URL), para no hacer afirmaciones de salud.
- JSON-LD `HairSalon` con dirección, horario y los tres precios (su sitio declara `Organization` y `Article`).

## Qué se agregó (no existía en el original)

- **"La rockola de la casa"**: rockola en SVG con sus cinco listas de Spotify; el disco gira con la lista elegida, enlace a Spotify, "¿Le falta una canción?" con WhatsApp y "Y ya que suena, ¿a qué vienes?" con servicio, precio, mensaje visible, WhatsApp y Booksy. Textos nuestros: el título, "En la barbería suenan sus cinco listas de Spotify. Elige un disco…", "¿Qué disco pones?", "Suena …", "Escribe la canción y el artista; te abrimos WhatsApp…", "Proponerla", "Y ya que suena, ¿a qué vienes?", "Solo a pasar el rato", "Detener el disco / Poner el disco" y los mensajes de WhatsApp.
- Títulos y microcopy: "Barbería tradicional en Mérida", "Bar & barbería", "Reservar cita en línea", "Por ahora, con cita", "Los precios están sujetos a cambios. Su menú completo de servicios está en su sitio", "Agendar …", "La barra", las frases de cada amenidad del club (armadas con frases de su página Barbería), "Pomadas para cabello", "Para la barba", "Y también", "Pedir por WhatsApp", "Comprar en línea", "Se compran en la barbería, en su tienda en línea, en Mercado Libre o por WhatsApp", "Pomada «Imperial», hecha a mano por la casa", "Te espero" (de su "Te espero."), "Visítanos".
- Barra fija en el celular, enlace a Google Maps, Open Graph, favicon (su calavera) y tapiz de damasco dibujado en SVG por nosotros.

## Qué se quitó o no se usó

- Sucursales La Isla Mérida (999 518 3511) y Paseo Interlomas CDMX (55 5162 8589) de la página Servicios: el inicio solo habla de Plaza Urban Center (pendiente).
- La barbería rodante ("¡Muy pronto!", "Próximamente: Guadalajara, Mérida, Tulum") y el WhatsApp 999 549 9993; el precio de la franquicia ($950,000).
- Carrusel "Amigos" de logos de medios, videos de YouTube, feed de Instagram, newsletter, buscador, el texto SEO repetido de la página Reservar y "The Juan Camaney News".
- Fotos no usadas: sillón Chesterfield y sillón de barbero (posible banco), sillón recortado, grabados, texturas de tapiz de banco y logos de Mercado Libre y WhatsApp.

## Qué se conserva al pie de la letra

- Concepto (barberías londinenses, "bar, billar, boutique, anticuario, galería y hasta un workpoint"), "Más que un trabajo, para nosotros es arte", los textos de Corte de cabello, Afeitado tradicional y Arreglo de barba y sus precios ($325, $295, $325), "No necesitas un corte para visitarme", "una sociedad de hombres unidos por intereses y gustos en común", "Un concepto único de barbería, con un secreto muy bien guardado", la frase sobre la música y "¿Por qué Juan Camaney?".
- Los 8 productos y sus precios de /tienda/, Mercado Libre, horario "Lunes a Domingo 11:00 am - 9:00 pm" y "Temporalmente sólo con cita", dirección, teléfono, WhatsApp, correo y redes.

## Pendiente de confirmar con el cliente

- Si siguen "temporalmente sólo con cita" o ya reciben sin cita.
- Si las sucursales de La Isla Mérida y Paseo Interlomas siguen abiertas (el rediseño solo muestra Plaza Urban Center) y cuál es la cuenta de Booksy correcta (43316 en el pie; 39883 en la página Barbería).
- Si el 999 131 7745 sigue siendo su teléfono (lo usa el botón "Llamar") y qué número atiende franquicias (722 367 1354 o 999 549 9993).
- Precios vigentes de los tres servicios y el menú completo en texto (hoy es una imagen).
- Fotos de su local (barra, billar, sillones) y confirmar si el sillón Chesterfield de su inicio es de su barbería.
- Si siguen vigentes los precios de la tienda y la tienda en línea.
- Si quieren que las propuestas de canciones lleguen al WhatsApp de la barbería.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y la rockola: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
