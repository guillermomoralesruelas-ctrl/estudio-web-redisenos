# El Café 57: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://elcafe57.mx/ (WordPress con Elementor y el tema Astra: inicio, cinco páginas de menú, para llevar, paquetes, contacto y aviso de privacidad) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/352-elcafe57/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 352-elcafe57`) |

**Negocio:** El Café 57 ("Cocina Contempo"), café y restaurante en Blvd. Valentín Gómez Farías, Col. Pitic, 83150 Hermosillo, Sonora, desde 2005. Desayunos, comida y cena, café, el Lunch 57 de lunes a viernes, platillos para llevar para grupos y tres espacios para eventos. Reserva por OpenTable.

## En una línea

Mismo negocio, mismos textos, precios, fotos y datos de contacto; cambia la forma: una sola página con el menú completo en pestañas (antes eran cinco páginas), el Lunch 57 y los platillos para llevar a la vista, WhatsApp con mensaje en cada pedido, botones de reserva que sí llevan a OpenTable y "La cuenta de tu reunión", que calcula cuánto sale un evento y si cubre el consumo mínimo de ese día.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 16 de 16 imágenes rotas en escritorio y en móvil (el HTML pide medidas como `-1024x640` que no se descargaron y Elementor carga las del carrusel y la galería por JavaScript) | 0 imágenes rotas; 13 copias `.webp` de fotos del clon en `assets/web/` |
| 48 errores de consola en escritorio y 47 en móvil; 2 recursos fallidos (`/.cloud/rum/otel-rum-exporter.js` y el script de Cloudflare `cdn-cgi/challenge-platform`) | 0 errores y 0 recursos fallidos; sin scripts de terceros |
| Página de 40,882 px de alto en escritorio: se ven a la vez las versiones de escritorio y de celular de cada bloque y todas las diapositivas del carrusel | 8,233 px, cada bloque una vez |
| Desborde horizontal de 36 px en el celular | Desborde 0 |
| El widget de OpenTable y el formulario de registro no funcionan sin sus scripts | Enlace directo a OpenTable; el registro de promociones no se incluye (ver "Qué se quitó") |
| Faltan en el clon las fotos de cada platillo (2026/09), de los paquetes, de los tres espacios y de la galería "Nuestros platillos" | El menú va en lista con una foto por pestaña; los espacios se dibujan como plano (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- El inicio, /menu/ (desayunos), /menu/comida-y-cena/, /menu/postres/, /menu/cafe/, /menu/vino-cerveza-cocteles/, /parallevar/, /menu/paquetes/ y /contacto/ se juntaron en **una sola página**.
- **El menú** pasa de cinco páginas con carrusel de categorías y una tarjeta con foto por platillo a seis pestañas (Desayunos, Comida y cena, Postres, Cafés y tés, Vino y cerveza, y un acceso al Lunch 57) con lista de precios y línea punteada, como una carta impresa. Los títulos en mayúsculas ("DESAYUNOS", "COMIDA | CENA") pasan a tipo oración.
- **Notas del menú explicadas** (ninguna queda críptica): "divorciados" se explica como "(mitad roja y mitad verde)"; "**De claras +$19 · Guarnición extra +$19**" pasa a "Pídelos de claras por +$19; guarnición extra, +$19."; "(al centro)" de los paquetes pasa a "al centro de la mesa, para compartir"; "Agrega: queso cottage +$29 · yogurt +$29 · granola +$18" pasa a una frase; las cheladas y micheladas ("Limón y sal +$13") pasan a "Prepárala: chelada (limón y sal) +$13…"; las onzas de los cócteles se explican con una nota; "Chica $86 · Grande $112" se conserva con comas. "Aplican restricciones" del Lunch 57 se conserva porque el sitio no dice cuáles: se agrega "Pregúntanos por WhatsApp cuáles." (ver pendientes).
- Los "·" que separan opciones pasan a comas ("Especias, manzana o vainilla sugar free").
- Los vinos de 187 ml se agrupan como "Vinos por copa (botella de 187 ml)" y el tipo (blanco, rosado, tinto) va en la descripción; los de 750 ml, "Vinos tintos por botella (750 ml)".
- **Los paquetes y espacios de eventos** pasan de dos bloques de tarjetas a "La cuenta de tu reunión" (ver "Qué se agregó"), con los mismos precios, capacidades, consumos mínimos y condiciones.
- **Para llevar**: los cinco platillos pasan de tarjetas con foto a lista con cuántas personas rinde, precio y un botón "Pedir" por platillo.
- Horario, teléfono y WhatsApp, que en el inicio están al fondo, pasan a la portada (horario, con "hoy" marcado según la hora de Hermosillo) y al bloque "Visítanos en la Pitic".
- Correcciones de redacción: "Cafe, Tés & Más" por "Cafés, tés y más"; "Gran Sangre Toro" por "Gran Sangre de Toro" (nombre del vino); "Espresso, licor 43" por "Espresso y Licor 43"; "Té diversos sabores" por "Té de diversos sabores"; "120gr" y "130gr" por "120 g" y "130 g"; "6 pz" por "6 piezas".
- Fotos: 13 copias `.webp` de las del clon (de 14.54 MB a 0.77 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Colores: el café `#3E1E16` y el amarillo `#FCB101` de su sitio; se agregaron crema, piedra, un amarillo oscuro y un verde para que el texto cumpla contraste AA.
- Tipografía: Open Sans, la de su sitio, servida con @fontsource (variable, solo latino); los títulos van en Open Sans condensada y gruesa.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "La cuenta de tu reunión"** (componentes `CuentaReunion`, `Plano` y `plano()` en `App.tsx`; datos en `espacios`, `paquetes` y `eventos` de `content.ts`). Eliges el espacio (Comedor 1, Comedor 2 o Terraza), que se dibuja visto desde arriba con sus sillas (10, 16 y 50 lugares; la terraza como 10 mesas redondas de 5, dibujo ilustrativo, no es el plano real); el día (lunes a jueves o viernes a domingo); cuántos son (dentro de la capacidad de cada espacio; las sillas se van ocupando en el dibujo); y el paquete o "A la carta". Una nota con forma de cuenta impresa da espacio, día, horas, personas × precio del paquete, total, el consumo mínimo de ese día y si lo cubre, con las condiciones del espacio y la letra chica del sitio. "Cotizar por WhatsApp" manda la misma cuenta.
  - Textos nuevos: "La cuenta de tu reunión"; "Elige el espacio, el día, cuántos son y el paquete, y te decimos cuánto sale y si cubres el consumo mínimo de ese día." (después del texto de espacios del inicio); "¿Dónde?", "¿Qué día?", "¿Cuántos son?", "¿Qué paquete?", "Desayunos", "Comida o cena", "A la carta", "El (espacio) es para X a Y personas.", "El paquete (nombre) incluye, por persona:"; en la nota: "Cuenta estimada de tu reunión", "Espacio", "Día", "Tiempo", "X horas", "Personas", "X × (paquete)", "c/u", "Total del paquete", "Consumo mínimo (días)", "Cubre el consumo mínimo.", "Faltan $X para el consumo mínimo de ese día.", "A la carta: se cobra lo que pidan del menú."; "Cotizar por WhatsApp"; "Es una cuenta aproximada con sus precios publicados; la confirmamos por WhatsApp."; `aria-label` del plano ("(espacio): X de Y lugares ocupados"), "Una persona menos", "Una persona más".
  - Los paquetes de chilaquiles se separan en "Chilaquiles sencillos" ($272) y "Chilaquiles con pollo" ($292), como los precia el sitio ("Sencillos $272 | Con pollo $292").
  - Mensaje de WhatsApp: "Hola, les escribo desde su sitio web. Quiero cotizar un evento: (espacio), (días), X personas. Paquete (nombre) ($ por persona): $total aprox. Consumo mínimo de ese día: $X. ¿Qué fechas tienen disponibles?" (o "A la carta.").
- **Textos del sitio que no están en `crudo.json`, tomados con curl el 2026-09-26** (descargas en una carpeta temporal del sistema, fuera del estudio): postres, cafés, tés y bebidas, vinos, cervezas y cócteles (/menu/postres/, /menu/cafe/, /menu/vino-cerveza-cocteles/) y el correo `c57pitic@icr.mx` (/contacto/). De `investigacion/original.html`: el número de restaurante de OpenTable de su widget (`rid=1327186`) y las coordenadas de su mapa incrustado.
- **Reservar:** botones "Reservar mesa" (encabezado, portada, menú, barra del celular) y "Reservar en OpenTable" al enlace `https://www.opentable.com.mx/restref/client/?rid=1327186&lang=es-MX`, armado con el número de su widget (ver pendientes).
- **WhatsApp al 52 662 361 5382** (el del inicio), con mensajes prellenados: general "Hola, les escribo desde su sitio web. Quiero información de El Café 57."; Lunch 57 "… Quiero preguntar por el Lunch 57 de hoy."; para llevar "… Quiero hacer un pedido para llevar: (platillo) ((personas), $precio)." y "… Quiero hacer un pedido para llevar."; eventos (arriba).
- Enlace a Google Maps (búsqueda por nombre y dirección, `https://www.google.com/maps/search/?api=1&query=El Café 57, Blvd. Valentín Gómez Farías, Pitic, Hermosillo`); el sitio solo tiene un mapa incrustado. La foto del patio del bloque Visítanos también abre Maps. No hay mapa incrustado.
- Otros textos nuevos: la frase de la portada "Desayunos que se sirven hasta el mediodía, comida y cena, café, el Lunch 57 entre semana y espacios para tus reuniones, en la colonia Pitic." (armada con datos del sitio); "Hermosillo desde 2005" junto al logo; "hoy" en el horario; "Ver el menú"; el "2005" grande de "Donde cada visita se vuelve especial"; "Para cada momento del día" como título del menú (es el del inicio); "Para llevar y compartir" (del inicio); "Pedir", "Haz tu pedido" (del sitio); "Preguntar por el Lunch 57"; "Pregúntanos por WhatsApp cuáles."; "En los cócteles, las onzas (oz) son la cantidad de licor o de vino que lleva cada uno."; "Visítanos en la Pitic", "Dirección", "Horario", "Teléfono", "WhatsApp", "Correo", "Cómo llegar", "Ver en Google Maps", "Síguenos en Instagram y Facebook."; pie "© (año) El Café 57, Cocina Contempo. Hermosillo, Sonora, desde 2005."; navegación "Menú", "Lunch 57", "Para llevar", "Eventos", "Visítanos"; "Ir al menú"; `aria-label` "El Café 57, volver al inicio", "Abrir el menú", "Pedir (platillo) por WhatsApp", "Escribir a El Café 57 por WhatsApp", "Llamar a El Café 57", "Cómo llegar a El Café 57 en Google Maps", "Abrir El Café 57 en Google Maps", "Partes del menú".
- Barra fija en el celular: Reservar (OpenTable), WhatsApp, Llamar y Cómo llegar.
- JSON-LD `Restaurant` con datos reales: nombre, descripción (su texto "Quiénes somos"), dirección, coordenadas (las de su mapa incrustado), horario, teléfono, correo, menú, reservas (OpenTable), año de fundación (2005) y redes. El sitio no tiene ningún JSON-LD.
- Title y description (el sitio no tiene description ni Open Graph), Open Graph con la foto del patio, `lang="es-MX"`, favicon con su logo sobre el café de la marca (`icono.png`, generado por `fotos-web.mjs`).
- Textos alternativos descriptivos en todas las fotos (en el sitio, el logo tiene `alt=""` y las fotos "El Café 57").
- Accesibilidad: un solo H1, contraste AA (texto `#4d3b33` sobre crema 9.6:1; café sobre amarillo 8.2:1; amarillo oscuro sobre crema 5.5:1 y sobre piedra 4.7:1; blanco sobre verde 6.0:1), pestañas con `role="tab"`, botones con `aria-pressed`, la cuenta con `aria-live` y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones; las sillas cambian sin animación).

## Qué se quitó o no se usó

- WordPress, Elementor, el widget de OpenTable incrustado, el mapa incrustado, el formulario "Regístrate" (promociones y novedades, WPForms) y el formulario de contacto: se enlazan OpenTable, Maps y WhatsApp. Si quieren conservar el registro de promociones, se puede enlazar su página o conectar un servicio.
- El carrusel de categorías del menú y el botón "Scroll al inicio".
- Los bloques repetidos del inicio ("Para llevar" y "Eventos" aparecen dos veces, versión de escritorio y de celular).
- La galería "Nuestros platillos" (sus fotos no están en el clon).
- Fotos del clon sin usar: `2026/06/eventos.png`, `para-llevar.png`, `manana.png` y `lunch-57.png` (recortes panorámicos de fotos que sí se usan completas) y `2026/06/comida-cena.png` (una ensalada que no se puede atribuir con certeza a un platillo). `2026/04/14.png` (el brindis) solo se usa en la pestaña de vinos.
- El aviso de privacidad se enlaza a su página en el pie.

## Qué se conserva al pie de la letra

- "Para cualquier momento del día", "Desayuno, comida, cena y algo más", "Donde cada visita se vuelve especial" y su párrafo ("Desde 2005, El Café 57 es un espacio acogedor en Hermosillo…"), "Para cada momento del día", "Se sirven hasta el mediodía", "Tus favoritos de siempre, hechos al momento", "El toque dulce para cerrar tu visita", "Tus bebidas favoritas", "Para acompañar cualquier momento".
- Lunch 57: "$230", "Un combo diferente cada día de la semana", los cinco combos, "Lunes a viernes, de 1:00 pm a 5:00 pm. Aplican restricciones."
- Para llevar: "¡Haz que tus reuniones y eventos sean aún más deliciosos!", su párrafo, "Platillos para 8 personas o más", los cinco platillos con personas, precio y descripción.
- Eventos: "El espacio perfecto para compartir y celebrar" y su párrafo, el texto de espacios del inicio, los seis paquetes con lo que incluye cada uno, los tres espacios con capacidad, consumo mínimo por día y condiciones, "Precios son por persona con IVA incluido, no incluye propina. Cualquier bebida o platillo diferente incluido se cobra individualmente." (ligeramente corregido: "diferente a lo incluido").
- **Todos los precios** del menú, del Lunch 57, de para llevar y de los paquetes, tal como se publican el 2026-09-26, y todas las descripciones de platillos.
- Contacto: Blvd. Valentín Gómez Farías, Col. Pitic, 83150 Hermosillo, Sonora; lunes a sábado de 8:00 am a 10:00 pm, domingo de 8:00 am a 5:00 pm; teléfono (662) 214 46 74; WhatsApp (662) 361 53 82; c57pitic@icr.mx; Facebook e Instagram /elcafe57.

## Pendiente de confirmar con el cliente

- **OpenTable:** el enlace de reserva se armó con el número de restaurante de su widget (`rid=1327186`); probarlo antes de enseñar la propuesta (desde aquí OpenTable no respondió a curl).
- **Consumo mínimo y anticipo:** ¿el consumo mínimo se cubre con los paquetes? Si no se alcanza, ¿se paga la diferencia o se completa con consumo? ¿El anticipo del 50 % es sobre el consumo mínimo o sobre el total? El Comedor 1 no menciona anticipo: ¿no lo pide? El rediseño cita las condiciones como las escriben y no calcula el anticipo.
- **Terraza:** el sitio dice "terraza al aire libre" y el inicio muestra el patio techado con el árbol; no se sabe si la foto `INICIO.png` es la Terraza o el área interior, así que no se rotula.
- **Lunch 57:** ¿cuáles son las "restricciones" que aplican?
- **Fotos:** faltan en el clon las de cada platillo, las de los paquetes, las de los tres espacios y las de postres; si nos las comparten, se agregan.
- **Coordenadas:** las del JSON-LD son las de su mapa incrustado (29.1022291, -110.9494894); confirmar que el pin es correcto. El número exterior del bulevar no está publicado.
- **WhatsApp:** el inicio usa `wa.me/526623615382` y paquetes y para llevar `api.whatsapp.com/send?phone=5216623615382` (el mismo número con el prefijo antiguo); el rediseño usa el primero.
- ¿Quieren conservar el registro de promociones por correo?

## Dónde está cada cosa

- Textos, contacto, fotos, menú, Lunch 57, para llevar, paquetes y espacios: `rediseno/src/data/content.ts`
- Diseño, pestañas del menú y "La cuenta de tu reunión" (`CuentaReunion`, `Plano`, `plano()`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/` (sin tocar); copias `.webp` y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 352-elcafe57` después del QA).
