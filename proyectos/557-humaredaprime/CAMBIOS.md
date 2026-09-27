# Humareda Prime: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.humaredaprime.com/ (WordPress con Elementor, una sola página) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/557-humaredaprime/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 557-humaredaprime`) |

**Negocio:** Humareda Prime, restaurante de cortes (steak house) con coctelería de autor y vista al mar, en Blvd. Vicente Fox Quesada 106, Costa Sol, 94290 Boca del Río, Veracruz. Domingo a jueves de 13:00 a 22:00; viernes y sábado de 13:00 a 24:00. Reservas por WhatsApp y teléfono (229 550 7070). Un solo local con fotos propias; no es cadena ni directorio. Tipo para Google: `Restaurant`.

## En una línea

Mismo negocio, mismos textos, fotos, cortes, horario y contacto; cambia la forma: su marca (negro, rojo de la flama, Playfair Display y Lato) con más aire, el horario legible, los nueve cortes como pizarra con la nota explicada, "El mar desde tu mesa" (eliges día y hora, ves si te toca el mar con luz o de noche y reservas por WhatsApp con día, hora y personas ya escritos), barra fija en el celular y datos de restaurante para Google.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| En el primer diagnóstico (escritorio), 1 error de consola y 1 recurso fallido: un mosaico del mapa de Google incrustado respondió 500. En el QA final el clon dio 0 (el mapa depende de Google) | 0 errores y 0 recursos fallidos; sin mapa incrustado: la foto de la fachada y los botones enlazan a Google Maps |
| El clon se ve igual que el sitio: desborde 0 y 0 imágenes rotas en escritorio y móvil. La galería son seis recuadros con la foto de fondo, sin texto alternativo | Galería de cuatro fotos de tamaños distintos, todas con `alt` |
| Fotos pesadas para el celular (1.93 MB entre las 9 y el logo) | 9 copias `.webp` más el logo (0.65 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se tocó |

## Qué se cambió (mismo contenido, otra forma)

- **Horario** "D-J: 13:00 p.m. a 22:00 / V-S 13:00 p.m. a 24:00 a.m." pasa a "Domingo a jueves: 13:00 a 22:00" y "Viernes y sábado: 13:00 a 24:00" (se explican las abreviaturas y se quitan "p.m." y "a.m.", que sobran en horas de 24).
- **Nuestros cortes:** la lista con puntos rojos pasa a una pizarra con los nueve nombres grandes y líneas finas. **Nota explicada:** 'Rib Eye 2"' lleva al lado "de dos pulgadas de grosor" (deducido de las comillas, ver pendientes). El título "Nuestros Cortes" se escribe "Nuestros cortes".
- **"El estándar del corte en Boca del Río, Veracrúz."**: se corrige la errata ("Veracruz") y se quita el espacio sobrante; en su texto, las rayas "— Cowboy, Porterhouse, Rib Eye —" pasan a paréntesis.
- **"Una Experiencia Única"** se escribe "Una experiencia única"; de seis recuadros iguales pasa a cuatro fotos de tamaños distintos (salón, vista al mar, coctelería y brindis); la fachada pasa a Visítanos y el flameado a la portada.
- **Portada:** en lugar de la foto del corte de fondo con el texto encima, el texto a la izquierda (con "en Boca del Río" en cursiva roja) y la foto del corte flameado frente a su letrero a la derecha.
- **"¿Listo para vivir la experiencia?"**: el fondo pasa de la foto del brindis a la del corte con vino (su imagen para compartir); el brindis va en la galería.
- **Los tres íconos flotantes** (llamar, WhatsApp, Maps, sin nombre) pasan a una barra fija en el celular con texto: Reservar, Llamar y Cómo llegar.
- **Teléfono:** "229-550-7070" se escribe "229 550 7070"; los enlaces `tel:` llevan la lada de país (`tel:+522295507070`) y ya no abren una pestaña nueva.
- Colores: su negro `#071108`, su rojo `#ed3237` y su blanco `#FEFEFE` (de su CSS de Elementor); se agregaron un rojo más oscuro para los botones con texto blanco (`#c41f27`, AA), el ámbar de la luz de sus lámparas, un negro verdoso para paneles y un crema para Visítanos.
- Tipografía: las de su marca, Playfair Display (títulos) y Lato (texto), con @fontsource y solo el subconjunto latino (el sitio carga cinco familias de Google Fonts).
- Textos alternativos reescritos, más cortos y descriptivos, en todas las fotos.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "El mar desde tu mesa"** (componentes `MarDesdeTuMesa`, `Vista` y `Luna` en `App.tsx`; cálculos en `src/cielo.ts`). Eliges el día (hoy y los seis siguientes, cada uno con su hora de cierre real) y la hora de llegada (de las 13:00, o de la siguiente hora en punto o cuarto si es hoy, hasta media hora antes del cierre, de 15 en 15 minutos; arranca media hora antes de la puesta de sol). Un dibujo de la vista (cielo, mar, palmeras, el barandal de la terraza y tu mesa con un corte que humea y una copa) cambia según la luz de ese momento, **calculada para Boca del Río** con las coordenadas de su ficha de Google Maps (fórmulas de la NOAA): de día, última luz (la hora antes de la puesta de sol), anochecer (hasta 15 minutos después del fin del crepúsculo civil) o de noche, con estrellas y la **fase real de la luna** de esa noche. Se eligen personas (de 1 a 20) y "Pedir mesa con vista al mar", y el botón abre WhatsApp con su propio mensaje completado. El dibujo no pinta el sol sobre el mar porque en Boca del Río la costa mira al oriente.
  - Textos nuevos: título "El mar desde tu mesa"; "Estamos frente al mar, en la costera de Boca del Río. Elige el día y la hora de tu reservación y te decimos cómo vas a encontrar el mar: de día, con la última luz o ya de noche."; "¿Qué día vienes?", "Hoy", "Mañana", "hasta 22:00" / "hasta 24:00", "ya cerramos"; "¿A qué hora llegas?"; "¿Cuántos son?", "persona" / "personas", `aria-label` "Una persona menos" / "Una persona más"; "Pedir mesa con vista al mar"; "Reservar el [día] a las [hora]"; "Se abre WhatsApp con tu mensaje ya escrito; nos confirmas la mesa por ahí."; etiquetas "De día.", "Última luz.", "Anochecer.", "De noche."; frases "Llegas de día, con el mar a plena luz.", "Llegas con la última luz del día: el sol se oculta a las [hora].", "El sol ya se ocultó: llegas cuando el cielo sobre el mar se va apagando.", "Llegas de noche. Esa noche hay [fase] ([n] % iluminada).", "Llegas de noche, en luna nueva: el mar se oye más de lo que se ve."; nombres de las fases (luna nueva, luna creciente, cuarto creciente, luna creciente gibosa, luna llena, luna menguante gibosa, cuarto menguante, luna menguante); "El [día y fecha] abrimos de [hora] a [hora]. El sol se oculta a las [hora] y oscurece a las [hora]."; "Sol y luna calculados para Boca del Río. Dibujo ilustrativo: la vista depende de tu mesa."; `aria-label` del dibujo "Dibujo de la vista al mar desde una mesa: [fase]".
  - Mensaje de WhatsApp: el suyo, completado: "Hola, me gustaría hacer una reservación en Humareda Prime para el [día] [fecha] a las [hora], para [n] personas. De ser posible, en una mesa con vista al mar. ¿Podrían apoyarme con disponibilidad?" (la frase de la vista al mar solo si se marca la casilla).
- **Horario de hoy en la portada:** "Hoy [día], de 13:00 a 22:00" y, si están abiertos en ese momento (hora de Veracruz), ": abierto ahora".
- **Pregunta por los cortes:** "A las brasas, del Rib Eye al Costillar de Rib Eye."; "¿Quieres saber qué cortes hay hoy, sus pesos y sus precios? Pregúntanos por WhatsApp."; botón "Preguntar por los cortes" con el mensaje "Hola, ¿me pueden compartir los cortes que tienen disponibles, con sus pesos y precios?".
- Galería: "El salón, la terraza frente a la playa y la coctelería de autor."
- Visítanos: etiquetas "Horario", "Teléfono y WhatsApp" (el WhatsApp del sitio es el mismo número), "Dirección"; botón "Cómo llegar en Google Maps"; pie de foto "Nuestra fachada sobre el Blvd. Vicente Fox. Toca la foto para ver cómo llegar."
- Navegación: "Cortes", "El mar desde tu mesa", "Galería", "Visítanos", botón "Reservar"; barra del celular "Reservar", "Llamar", "Cómo llegar"; salto de teclado "Ir a El mar desde tu mesa"; `aria-label` "Humareda Prime, volver al inicio", "Abrir Humareda Prime en Google Maps", "Secciones", "Acciones rápidas".
- Pie: logo, dirección y "© [año] Humareda Prime".
- Title "Humareda Prime | Steak House en Boca del Río, Veracruz" (el suyo sin el nombre repetido), description nueva ("Steak house premium en Boca del Río: cortes finos a las brasas, mixología de autor y vista al mar. Blvd. Vicente Fox Quesada 106, Costa Sol. Reserva por WhatsApp al 229 550 7070."; el sitio no tiene), Open Graph en español con la foto del corte con vino (su misma imagen para compartir) y favicon con su ícono (`icono.png`).
- JSON-LD `Restaurant` con datos reales: nombre, descripción (de su texto), sitio, imagen y logo (sus URLs), teléfono, cocina, reservas por WhatsApp, dirección, coordenadas (de su ficha de Google Maps), mapa y horario (viernes y sábado cierra a las 23:59, la forma de escribir "24:00" para Google). El sitio solo tiene `WebPage` y `Organization` (Yoast).
- Página en español (`lang="es-MX"`); el sitio está declarado en inglés.
- Accesibilidad: un solo H1, contraste AA (humo `#bfc3bb` sobre negro 10.7:1, blanco sobre el rojo de botón 5.9:1, ámbar sobre negro 8.9:1, texto `#5a4a3c` sobre crema 7.4:1; el rojo de su marca solo en títulos grandes y detalles, 4.7:1), botones de día con `aria-pressed`, resultado con `aria-live`, barra de hora con `aria-valuetext`, foco visible y `prefers-reduced-motion` (sin humo animado, sin transiciones ni desplazamiento suave).

## Qué se quitó o no se usó

- El mapa de Google incrustado (sin mapas ni scripts de terceros), el Google Tag Manager y los scripts de Elementor.
- Los tres íconos flotantes sin nombre (pasan a la barra del celular) y los puntos rojos de la lista de cortes.
- La entrada de ejemplo de WordPress "Hello world!", la página de autor y la categoría "Uncategorized" (no son parte del restaurante; se anotan en `OPORTUNIDADES.md`).
- No se usa ninguna foto nueva: las 9 del clon se usan todas.

## Qué se conserva al pie de la letra

- "Steak House Premium en Boca del Río"; "Cortes finos a las brasas, mixología de autor y vista al mar."; "Reserva por WhatsApp"; "Llámanos"; el texto de "El estándar del corte…" (con la errata corregida y paréntesis); "Visítanos"; "¿Listo para vivir la experiencia?"; "Reserva tu mesa hoy y disfruta el mejor corte en Boca del Río."
- Los nueve cortes, en su orden: Rib Eye, Arrachera, T-Bone, Top Sirloin, New York, Rib Eye 2", Cowboy, Porterhouse, Costillar de Rib Eye.
- Su mensaje de WhatsApp: "Hola, me gustaría hacer una reservación en Humareda Prime. ¿Podrían apoyarme con disponibilidad?" (tal cual en los botones generales; completado en "El mar desde tu mesa").
- Contacto: 229 550 7070 (teléfono y WhatsApp), Blvd. Vicente Fox Quesada 106, Costa Sol, 94290 Boca del Río, Ver., y su enlace de Google Maps (`maps.app.goo.gl/Mg2mpV4ciJ19QY2JA`).
- Su logo, su ícono y sus 9 fotos.

## Pendiente de confirmar con el cliente

- **Carta con precios:** el sitio solo nombra nueve cortes; no hay precios, pesos, descripciones, entradas, guarniciones, postres, vinos ni coctelería. El rediseño invita a preguntar por WhatsApp.
- **'Rib Eye 2"':** el rediseño dice "de dos pulgadas de grosor" (deducido de las comillas).
- **Última hora para llegar:** la barra de "El mar desde tu mesa" llega hasta media hora antes del cierre (21:30 o 23:30); es una elección nuestra, no una política del restaurante.
- **Vista al mar:** ¿qué mesas la tienen? El rediseño solo la pide ("De ser posible…"), no la promete.
- **WhatsApp:** se usa el número de sus botones (522295507070), el mismo que su teléfono; confirmar que ese número recibe las reservaciones.
- **Redes sociales y correo:** el sitio no enlaza ninguno.
- **"Carnes Finas San Juan":** letrero junto al suyo en la foto de la fachada; no se menciona.
- **Fotos que faltan:** los cortes uno por uno, la parrilla o las brasas, la barra y el equipo. Dos fotos (Exterior e Interior) dicen "Google" como programa en su EXIF (probablemente exportadas de Google Fotos o de su perfil de Google); ninguna tiene marcas de IA.
- El título "El mar desde tu mesa" y todos sus textos son nuestros.

## Dónde está cada cosa

- Textos, contacto, cortes, horario y fotos: `rediseno/src/data/content.ts`
- Diseño y secciones, "El mar desde tu mesa" (`MarDesdeTuMesa`, `Vista`, `Luna`): `rediseno/src/App.tsx`
- Puesta de sol, anochecer, fase de la luna y hora de Veracruz (UTC-6): `rediseno/src/cielo.ts`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/2026/06/` (sin tocar); copias `.webp`, el logo y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (se generan con `node herramientas/guardar-capturas.mjs 557-humaredaprime` después del QA).
- Datos tomados con curl el 2026-09-27 (no están en `crudo.json`): las coordenadas (de su enlace de Google Maps), los colores y letras (de su CSS de Elementor, que está en el clon) y las páginas de su mapa del sitio (solo para `OPORTUNIDADES.md`). No se tomaron textos del negocio fuera de `crudo.json`.
