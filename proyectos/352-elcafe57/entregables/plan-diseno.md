# El Café 57: plan de rediseño (método 1.1)

**Sitio original:** https://elcafe57.mx/ (WordPress con Elementor y el tema Astra; inicio, /menu/ desayunos, /menu/comida-y-cena/, /menu/postres/, /menu/cafe/, /menu/vino-cerveza-cocteles/, /parallevar/, /menu/paquetes/, /contacto/ y aviso de privacidad).
**Materia prima:** clon en `../sitio/` (17 imágenes en `sitio/assets/wp-content/uploads/`), textos de cinco páginas en `investigacion/crudo.json` (inicio, paquetes, para llevar, desayunos, comida y cena), contacto y redes en `investigacion/resumen.json`.
**Textos que no están en `crudo.json`** (tomados del sitio real con curl el 2026-09-26; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- /menu/postres/: seis postres con precio y "Agrégale nieve a tus postres +$33".
- /menu/cafe/: bebidas calientes y frías con medidas y precios, tipos de leche y sabores.
- /menu/vino-cerveza-cocteles/: vinos por copa (187 ml) y por botella, cervezas, cheladas y cócteles.
- /contacto/: el correo `c57pitic@icr.mx` (el resto de sus datos coincide con el inicio).
- Del HTML del inicio (`investigacion/original.html`): el número de restaurante de OpenTable de su widget (`rid=1327186`) y las coordenadas de su mapa incrustado (29.1022291, -110.9494894).
No se descargó ninguna imagen nueva.

**Rubro:** café-restaurante de desayunos, comidas y cenas en la colonia Pitic de Hermosillo, Sonora, abierto desde 2005 ("Cocina Contempo" en su logo). Además vende platillos para llevar para grupos y renta tres espacios para eventos (dos comedores y una terraza) con paquetes por persona. No es una cadena ni un directorio: sitio propio con fotos propias (equipo, clientes, platillos y el patio).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 40,882 px de alto, desborde 0, **16 de 16 imágenes rotas**, **48 errores de consola** y 2 recursos fallidos (`/.cloud/rum/otel-rum-exporter.js` y el script de Cloudflare `cdn-cgi/challenge-platform`). Móvil: 18,252 px, **desborde de 36 px**, 16 rotas, 47 errores.
- A ojo: la página se estira a más de 40 mil px porque los bloques del carrusel y las versiones de escritorio y celular se muestran todas a la vez; las fotos del menú y del carrusel no cargan (el HTML pide medidas como `-1024x640` que no se descargaron y las de Elementor se cargan por JavaScript); el widget de OpenTable y el formulario de registro no funcionan sin sus scripts.
- Fotos: 13 copias `.webp` (14.54 MB → 0.77 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca. Faltan en el clon las fotos de cada platillo del menú (las de 2026/09), las de los paquetes, las de los tres espacios para eventos y las de la galería "Nuestros platillos": no se descargan (regla del método) y se anota como pendiente.

## Qué tiene que lograr el sitio
1. **Reservar mesa** (OpenTable, que ya usan) y **ver el menú completo con precios** sin brincar entre cinco páginas.
2. **Vender sus eventos:** que quien organiza una reunión entienda en un minuto qué espacio le toca, cuánto es el consumo mínimo ese día y cuánto le sale con un paquete, y que lo pida por WhatsApp con todo escrito.
3. El Lunch 57 ($230, lunes a viernes de 1 a 5 pm) y los platillos para llevar para grupos, que hoy están enterrados en subpáginas.
4. Dónde están, a qué hora abren, WhatsApp, teléfono y cómo llegar.

Público: gente de Hermosillo que desayuna o come en la Pitic (oficinas, familias, amigas que se reúnen), y quien organiza un desayuno de trabajo, un cumpleaños o una reunión de 8 a 50 personas.

## Dirección visual
El café oscuro `#3E1E16` y el amarillo `#FCB101` de su sitio (los dos colores que más usa el CSS del inicio), el blanco de su logo, la piedra clara de sus mesas de granito y el verde de las plantas del patio. Fondo crema cálido; bloques en café oscuro para la portada, los eventos y el contacto.

| Token | Color | Uso |
|---|---|---|
| `crema` | `#f8f3ea` | Fondo general |
| `piedra` | `#ece2d2` | Bloques alternos (menú), como sus mesas de granito |
| `cafe` | `#3e1e16` | Títulos, texto fuerte y fondos oscuros (su `--e-global-color` y el color de su sitio) |
| `texto` | `#4d3b33` | Texto normal (9.6:1 sobre crema) |
| `oro` | `#fcb101` | Su amarillo: botones con texto café (8.2:1) y detalles sobre café |
| `oro-oscuro` | `#8a5700` | Precios y enlaces sobre crema (5.5:1) y sobre piedra (4.7:1) |
| `hoja` | `#4f6b45` | El verde de las plantas del patio: marcas de "cubre el mínimo" (5.4:1 sobre crema; texto blanco encima 6.0:1) |

**Tipografía:** la de su sitio, **Open Sans** (todo el sitio la usa), de `@fontsource-variable/open-sans` con los ejes de peso y ancho, solo el subconjunto latino. Los títulos van en Open Sans condensada (ancho 75 %) y gruesa, el texto en Open Sans normal. Roboto y Roboto Slab solo son los valores por defecto de Elementor: no se usan.

## Elemento memorable: "La cuenta de tu reunión"
Su página de paquetes tiene todo lo necesario para organizar un evento, pero repartido y sin hacer cuentas: tres espacios con capacidad (Comedor 1 de 8 a 10 personas, Comedor 2 de 12 a 16, Terraza de 45 a 50), un **consumo mínimo que cambia según el día** (lunes a jueves o viernes a domingo), horas de reservación, anticipo o tolerancia, y seis paquetes con precio por persona (desayunos y comida o cena). Quien organiza tiene que hacer la multiplicación y adivinar si le alcanza.

El elemento hace esa cuenta, **con la forma de la cuenta de un restaurante**, la nota que llega a la mesa:
1. **¿Dónde?** Los tres espacios dibujados desde arriba como una mesa con sus sillas (10, 16 y 50 lugares). Al elegir cuántos son, **las sillas se van ocupando** en el dibujo.
2. **¿Qué día?** Lunes a jueves o viernes a domingo: cambia el consumo mínimo.
3. **¿Cuántos son?** Un contador dentro de la capacidad de ese espacio.
4. **¿Qué paquete?** Los seis paquetes (Chilaquiles sencillos o con pollo, Pastel de elote, Panini Italia, Panini Florencia, Lasagna, Pecho al horno) con lo que incluye cada uno, o "A la carta".
5. **La cuenta:** una nota impresa con espacio, día, horas, personas × paquete = total, el consumo mínimo de ese día y si lo cubre ("Cubre el consumo mínimo" o "Faltan $X para el consumo mínimo"), las condiciones de ese espacio tal cual las publican, y "Precios por persona con IVA incluido, no incluye propina". El botón "Cotizar por WhatsApp" manda esa misma cuenta escrita.

Sale del negocio, no es un adorno: son sus tres espacios, sus capacidades, sus mínimos por día y sus precios reales. No se inventa nada: el anticipo del 50 % se cita como lo escriben, sin calcularlo, porque no dicen sobre qué monto se aplica (pendiente).

## Estructura
1. Encabezado café oscuro con el logo blanco, navegación (Menú, Lunch 57, Para llevar, Eventos, Visítanos) y "Reservar".
2. Portada: foto del patio con el árbol, H1 "Desayuno, comida, cena y algo más", "Para cualquier momento del día", el horario de hoy y botones "Reservar mesa" (OpenTable) y "Ver el menú".
3. Desde 2005: "Donde cada visita se vuelve especial", su párrafo y cuatro fotos (el equipo en cocina, la mesera, la comida en el patio, el brindis).
4. Menú completo en seis pestañas (Desayunos, Comida y cena, Lunch 57, Postres, Cafés y tés, Vino y cerveza), con precios en lista y línea punteada, una foto por pestaña y las notas del original explicadas.
5. Lunch 57: el combo de cada día de la semana, $230, lunes a viernes de 1 a 5 pm.
6. Para llevar: los cinco platillos para grupos con cuántas personas rinden y precio, y "Haz tu pedido" por WhatsApp.
7. **La cuenta de tu reunión** (bloque café oscuro): el elemento memorable, con el texto de su página de eventos.
8. Visítanos: dirección, horario, teléfono, WhatsApp, correo, Google Maps, OpenTable, Instagram y Facebook.
9. Pie con el logo; barra fija en el celular (Reservar, WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin carrusel de categorías ni tarjetas iguales con foto por cada platillo (y el clon no trae esas fotos): el menú es una lista con precios alineados, como una carta impresa, con una foto por pestaña.
- Sin etiquetas pequeñas en mayúsculas sobre cada título (su sitio pone "Quiénes somos", "Nuestro menú", "Galería"…): los títulos van solos. Sin numeración 01/02 ni puntos medios de adorno (los "·" que separan opciones en su menú se cambian por comas).
- Sin "RESERVAR" en mayúsculas de botón ni el título de la sección en mayúsculas ("DESAYUNOS", "COMIDA | CENA").
- Una sola cosa se mueve: las sillas que se ocupan en el dibujo de la cuenta, y se quedan quietas con `prefers-reduced-motion`.
- No se inventan precios, capacidades, reseñas ni fotos: si un paquete no tiene foto en el clon, va sin foto.
- Sin widget de OpenTable, sin mapa incrustado, sin formulario de registro y sin scripts de terceros: OpenTable, Maps y WhatsApp se enlazan.
