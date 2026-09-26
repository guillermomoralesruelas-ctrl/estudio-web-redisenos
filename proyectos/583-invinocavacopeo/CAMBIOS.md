# Invino Cava & Copeo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://invino.com.mx/ (tienda Shopify "Invinomx": inicio, tienda por tipo, país, precio, "mood" y regalos, /pages/winebar, /pages/cata-winebar, /pages/cata-online, /pages/vino-historias, blog y políticas) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/583-invinocavacopeo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 583-invinocavacopeo`) |

**Negocio:** Invino Cava & Copeo, wine & coffee bar, vinoteca e importadora en Río Tamazunchale #305-A, Del Valle, 66220 San Pedro Garza García, Nuevo León (Centrito Valle). Vende vino en línea con envío a todo México, organiza catas presenciales y en línea, personaliza botellas, arma paquetes de regalo y da consultoría de vino (Vinohistorias, con su fundador David Zárate). Aparece en la guía Star Wine List. Reserva por OpenTable.

## En una línea

Mismo negocio, mismos textos, precios, fotos y datos de contacto; cambia la forma: una sola página que abre con el winebar (lo que los distingue), reúne lo que hoy está en cinco páginas (winebar, catas presencial y en línea, regalos, Vinohistorias), dice con honestidad qué vinos están agotados en línea y agrega "¿Qué vas a servir?", que encuentra el vino de su tienda por el platillo y sirve una copa con su color.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 27 de 31 imágenes rotas en escritorio y en móvil (el logo, el banner, el bartender, las botellas y las portadas del blog piden `&width=…`, que no existe en local) | 0 imágenes rotas; 21 copias `.webp` de fotos del clon en `assets/web/` |
| 51 errores de consola en escritorio y 52 en móvil (CORS de `theme.js` y de las fuentes del tema) | 0 errores |
| 23 y 24 recursos fallidos (píxeles de Shopify, `graphql.json`, `monorail`, Shop Pay, un CSS en base64) | 0 recursos fallidos; sin scripts de terceros |
| El clon sale casi en blanco: textos del tema sin estilo, sin fotos ni logo, carruseles quietos y el botón de WhatsApp sin cargar | Diseño completo con sus fotos, sus fuentes (Instrument Sans y Nunito) y WhatsApp directo |
| Faltan en el clon las fotos de la página del winebar (`Invino_winebar2.jpg`, `Invino_Winebar_exterior.jpg`), de la cata presencial, de la cata en línea, del certificado, de David Zárate y de los seis paquetes de regalo | Se usan las fotos que sí están (el bar con el bartender y con el distintivo de Star Wine List, las copas, el cartel de la Cata a ciegas, la botella personalizada, una caja de regalo); los paquetes van en lista sin foto propia (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- El inicio, /pages/winebar, /pages/cata-winebar, /pages/cata-online, /pages/vino-historias y las fichas de la tienda se juntaron en **una sola página** con este orden: portada del bar, winebar, catas, "¿Qué vas a servir?", regalos, Vinohistorias y Visítanos.
- **La portada** deja de ser "Lo mejor del vino en un solo lugar" con un banner de productos y abre con el bar: la foto del bartender bajo el neón y el título de su página del winebar.
- **El catálogo:** los carruseles "Vinos por país", "antojo de un Tempranillo" y "Best sellers" se sustituyen por "¿Qué vas a servir?" (ver "Qué se agregó"), con los 13 vinos que tienen ficha de cata, su precio y su disponibilidad en línea.
- **Las citas de prensa** (Star Wine List, Jancis Robinson, Buena Mesa Reforma) dejan de estar en un carrusel: la de Buena Mesa Reforma va grande y las otras dos debajo, con traducción al español.
- **Las catas:** la Cata a ciegas (cartel, fecha, lugar, qué incluye, precio, cupo), la Cata en Línea (cómo funciona en tres pasos, qué incluye, precio y notas) y las preguntas frecuentes de las dos páginas se juntan en un bloque; las preguntas van plegadas.
- **La etiqueta personalizada:** las opciones crípticas de la tienda se explican: "Celebración" pasa a la lista de ocasiones con cuántos diseños tiene cada una ("Aniversario, 4 diseños"; el "Diseño 1, 2, 3, 4" de la tienda es el número de diseño), y "Foil Dorado / Plateado" pasa a "Las letras van en acabado metálico (foil) dorado o plateado". "$450" se aclara como "por etiqueta, sin el vino" (su ficha dice "No olvides agregar a tu carrito el vino").
- **Los paquetes de regalo** (MADRID, AMSTERDAM, MONTERREY, LONDRES, PARIS, CAPRI) pasan de mayúsculas a "Madrid, Ámsterdam, Monterrey, Londres, París, Capri", en lista con precio y lo que incluye, ordenados de menor a mayor precio. "Vino Tinto - Glorioso / Crianza Tempranillo" pasa a "Vino tinto Glorioso Crianza Tempranillo"; "1 pz" a "1 pieza"; "120 gr" a "120 g". En Londres, "Caja de cartón 'Brindemos'" y "Envoltura en Caja de Cartón Unboxing 'Brindemos'" se juntan en "Caja de cartón 'Brindemos' para unboxing".
- **Nombres y fichas de los vinos:** se quitan los "750ml" del nombre (van como tamaño) y se corrigen erratas: "Edomond Thery" por "Edmond Thery"; "Gewurztraminer" por "Gewürztraminer"; "Drappier Carte D'Or" por "Carte d'Or"; "Cuatro Ciéngeas" por "Cuatro Ciénegas"; "Pays D'OC" por "Pays d'Oc"; "Cotes de Provence" por "Côtes de Provence, Francia"; "nota espaciada" por "nota especiada" (así la escribe su etiqueta); "pasta ragu, Pasta bolognesa" por "pasta ragú, pasta boloñesa"; "semi curados" por "semicurados"; "lychee" por "lichi"; "Matices Intensos" y "Barrica de Roble Americano" en minúsculas. La bodega del 804 va como "Casa Momentos" (su nombre y su etiqueta "vinícola casa momentos"; la tienda la registra con la marca Rompehielo) y la del Edmond Thery como "Edmond Thery" (la tienda pone "Invinomx"). Se recortaron "que invita al siguiente trago" (Valduero) y "con una original e interesante paso por boca" (Laya), y "En nariz despunta…" del 804 empieza en "Despunta…".
- Correcciones de redacción: "pretenciones" por "pretensiones"; "se encuéntra" por "se encuentra"; "via whatsapp" por "vía WhatsApp"; "Regalale" por "Regálale"; "¿Ni idea cuál" por "¿Ni idea de cuál"; "compralo" por "Cómprala"; "Envío incluído" por "Envío express incluido"; "InVino" por "Invino"; mayúsculas de adorno ("SOMOS INVINO", "BEST SELLERS", "ENVÍO EXPRESS GRATIS") a tipo oración.
- Fotos: 21 copias `.webp` de las del clon (de 11.71 MB a 0.56 MB) con `rediseno/fotos-web.mjs`; las botellas se recortan a su contenido y conservan el fondo transparente. El clon no se tocó.
- Colores: el negro `#1c1c1c`, el vino `#4b1816` y el amarillo `#d1a000` de su tema y de su isotipo; se agregaron un papel claro `#f0eeea`, un amarillo oscuro y un texto café oscuro para cumplir contraste AA.
- Tipografía: las de su tema, Instrument Sans (títulos, condensada) y Nunito (texto), servidas con @fontsource, solo latino.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Qué vas a servir?"** (componentes `QueVasAServir`, `Copa` y `Dato` en `App.tsx`; datos en `src/data/vinos.json` y `platillos` de `content.ts`). Eliges qué hay en la mesa entre diez opciones y aparecen, como una fila de botellas con su foto, los vinos de su tienda cuyo maridaje lo menciona (primero los disponibles en línea). Al elegir una botella se dibuja una copa que se llena con el color de su nota de vista (con burbujas en los dos espumosos) y se muestra su ficha: tipo, bodega, maridaje, uva, región, crianza, nariz y boca, precio y tamaño. Si está disponible, "Comprar en la tienda" abre esa botella en su Shopify; si no, dice "Agotado en la tienda en línea". El botón de WhatsApp manda el platillo y el vino.
  - Las opciones agrupan lo que dice el "Maridaje" de cada ficha (la agrupación es nuestra, ver `platillos` en `vinos.json`): "Pescados, mariscos y ceviche", "Ensaladas", "Quesos y carnes frías", "Carnes rojas y cortes", "Cerdo, cordero, pato y aves", "Pastas", "Guisos, moles y cazuelas", "Comida asiática", "Postres y fruta" y "Nada, solo la copa" (del Tierra Maria Tempranillo: "Tomarse solo es una gran idea"). Si la ficha no menciona un platillo, el vino no aparece; el Tierra Maria 4C no trae maridaje y no aparece.
  - El color de cada copa (`color` en `vinos.json`) es una interpretación nuestra de su nota "Vista" y se dice en la página.
  - Textos nuevos: "¿Qué vas a servir?"; "Dinos qué hay en la mesa y te enseñamos los vinos de nuestra tienda que lo acompañan, según su ficha de cata."; "X vinos de la tienda lo acompañan:" / "Un vino de la tienda lo acompaña:"; "Disponible en línea", "Agotado en línea", "Agotado en la tienda en línea"; "A la vista: (nota)"; "Maridaje:"; "Uva", "Región", "Crianza", "Nariz", "Boca"; "Comprar en la tienda"; "Pedir por WhatsApp" y "Preguntar por WhatsApp"; "Envío gratis.", "Atención personalizada.", "Pagos seguros." (títulos de sus tres textos de la tienda); "El color de la copa es una interpretación de la nota de vista de cada ficha. Precios y existencias de la tienda en línea al 26 de septiembre de 2026; en el winebar hay más de 100 etiquetas. Pregúntanos."; `aria-label` de la copa ("Copa servida con (vino): (vista)", "Copa vacía") y de la fila ("Vinos para (platillo)").
  - Mensajes de WhatsApp: disponible "Hola, les escribo desde su sitio web. Voy a servir (platillo). Me interesa el (vino) (750 ml, $precio). ¿Me ayudan con mi compra?"; agotado "… Voy a servir (platillo). Me interesa el (vino). ¿Lo tienen o me recomiendan uno parecido?"; con "Nada, solo la copa" la frase es "Busco un vino para tomar solo.".
- **Textos del sitio que no están en `crudo.json`, tomados con curl el 2026-09-26** (descargas en una carpeta temporal del sistema, fuera del estudio): /pages/winebar, /pages/cata-winebar, /products/cata-a-ciegas1, /pages/cata-online, /pages/vino-historias, el catálogo público `/products.json` (fichas, precios, disponibilidad, etiqueta personalizada, paquetes de regalo y Gift Card) y la configuración pública de su botón flotante de WhatsApp (`/apps/sc/setting.php`). No se descargó ninguna imagen.
- **Reservar:** "Reservar mesa" (encabezado, portada, barra del celular) y "Reservar en OpenTable" van al enlace de su botón "Reserva tu mesa" de /pages/winebar (`https://www.opentable.com.mx/restref/client/?rid=1432354`).
- **Compras en su tienda:** "Comprar mi lugar" (Cata a ciegas), "Comprar la cata en línea", "Personalizar en la tienda", el nombre de cada paquete y "Comprar una Gift Card" abren su producto en invino.com.mx.
- **WhatsApp al 52 81 1018 3565** (el que su página de catas llama "nuestro whatsapp"; ver pendientes), con mensajes prellenados: general "Hola, les escribo desde su sitio web. Quiero información de Invino Cava & Copeo."; renta "… Quiero información para rentar el winebar para un evento."; cata a ciegas "… Quiero preguntar por la Cata a ciegas del 30 de septiembre de 2026, 8:00 pm."; próxima cata "… Quiero saber cuándo es su próxima cata."; cata privada "… Quiero organizar una cata privada para un grupo."; Gift Card "… Quiero una Gift Card por otra cantidad."; consultoría "… Quiero información de la consultoría de vino para mi negocio."; los de "¿Qué vas a servir?" (arriba).
- **La Cata a ciegas se esconde sola cuando pasa:** después del 30 de septiembre de 2026 a las 8:00 pm (hora de Monterrey) la tarjeta dice "La última cata", "Esta cata ya pasó. Cada cata tiene un tema diferente: pregúntanos por la próxima." y "Preguntar por la próxima", en vez de "Próxima cata en el winebar", "Comprar mi lugar" y "Preguntar".
- Enlace a Google Maps (búsqueda por nombre y dirección); el sitio no tiene mapa ni enlace. La foto del bloque Visítanos también abre Maps. Enlace a su ficha de Star Wine List (`starwinelist.com/wine-place/invino`, que su página del winebar ya enlaza).
- Otros textos nuevos: la continuación de la portada "Más de 100 etiquetas por copa y por botella, catas y vino con envío a todo México." (armada con sus datos) y "Centrito Valle. Vino y café durante todo el día."; "Escríbenos"; "Cava & Copeo / San Pedro Garza García" junto al logo; "Ver a Invino en Star Wine List"; "En español: (traducción)" de las dos citas en inglés; "Preguntar por WhatsApp"; "Próxima cata en el winebar", "Fecha", "Lugar", "Incluye", "Precio", "3 copas y acompañamientos" (del sitio: "3 copas + Acompañamientos"), "Comprar mi lugar", "Preguntar"; "Comprar la cata en línea", "Antes de comprar"; "Organizar una cata privada"; la frase del certificado que junta las dos páginas ("impreso en la cata presencial y digital en la cata en línea"); "Regala vino", "Una botella con su nombre", "Elige la celebración y el diseño de la etiqueta:", "(n) diseños", "Las letras van en acabado metálico (foil) dorado o plateado.", "por etiqueta, sin el vino", "Personalizar en la tienda"; "Gift Card", "Comprar una Gift Card", "WhatsApp"; "Para restaurantes, hoteles y marcas"; "David Zárate, nuestro fundador, es…" (de "conoce a nuestro fundador" + su texto); "Ha sido juez del Concurso Mundial de Bruselas y fue nominado entre los 50 mejores influencers de vino del mundo." (recorte de su texto); "Síguelo en Instagram:"; "(el canal HORECA)" explica HORECA como "restaurantes, hoteles y cafeterías"; "Pedir información para mi negocio"; "Visítanos en Centrito Valle", "Dirección", "Horario", "Vino y café durante todo el día. Consulta el horario por WhatsApp.", "WhatsApp y teléfono", "Cómo llegar", "Ver en Google Maps", "Síguenos en Instagram y Facebook."; pie "© (año) Invino Cava & Copeo. San Pedro Garza García, Nuevo León."; navegación "Winebar", "Catas", "¿Qué vas a servir?", "Regalos", "Visítanos"; "Ir a los vinos"; `aria-label` "Invino Cava & Copeo, volver al inicio", "Abrir el menú", "Escribir a Invino por WhatsApp", "Llamar a Invino", "Cómo llegar a Invino en Google Maps", "Abrir Invino Cava & Copeo en Google Maps", "Ver a Invino en Star Wine List", "Valores de la Gift Card".
- **Leyenda de consumo responsable en el pie:** "Venta de bebidas alcohólicas solo a mayores de 18 años. Evita el exceso." El sitio no tiene ningún aviso de edad ni de consumo responsable (ver pendientes). Además, el rediseño no agrega nada que invite a beber de más y quita "que invita al siguiente trago" de una ficha.
- Barra fija en el celular: Reservar (OpenTable), WhatsApp, Llamar y Cómo llegar.
- JSON-LD `BarOrPub` y `LiquorStore` con datos reales: nombre, descripción (sus textos), dirección, teléfono, reservas (OpenTable), fundador, logo, foto y redes (Facebook, Instagram y Star Wine List). El sitio solo tiene `Organization` y `WebSite`, sin dirección.
- Title nuevo ("Invino Cava & Copeo | Wine bar y vinoteca en San Pedro Garza García"; el del inicio es "Invinomx"), description (la suya, recortada), Open Graph con la foto del bar (el suyo usa el logo), `lang="es-MX"` y favicon con su isotipo amarillo sobre negro (`icono.png`, generado por `fotos-web.mjs`).
- Textos alternativos descriptivos en todas las fotos (en el sitio son "WineBar Bartender", "Invino Productos 2", "Copas de vino"…).
- Accesibilidad: un solo H1, contraste AA (amarillo sobre negro 7.1:1 y sobre vino 6.1:1; amarillo oscuro sobre blanco 6.2:1 y sobre papel 5.3:1; texto sobre papel 10.3:1), botones con `aria-pressed`, ficha con `aria-live`, preguntas con `details` y `prefers-reduced-motion` (sin desplazamiento suave; la copa se llena y las burbujas suben solo si el sistema permite movimiento).

## Qué se quitó o no se usó

- La cinta de suscripción "SUSCRÍBETE PARA 10% OFF", los dos formularios de newsletter, el inicio de sesión, la búsqueda y la cesta: la compra sigue en su tienda Shopify, que se enlaza.
- El botón flotante de WhatsApp de terceros (shopiapps "Tanino"), el widget de OpenTable incrustado, los píxeles de Shopify y los carruseles.
- "Vinos por país" (México, Italia, España, Francia, Argentina): Argentina está vacía y el sitio muestra ahí ocho tarjetas de ejemplo "Producto $49.99"; los vinos van en "¿Qué vas a servir?" con su región. Tampoco se enlazan las colecciones vacías (Chile, Estados Unidos, Destilados y Licores, Jamón Ibérico y Serrano) ni las de "Mood" y "Precio".
- Los tres artículos del blog: se enlaza el blog en el pie; del artículo "¡Bienvenido a Invino!" se usa su primera frase (sale en el inicio).
- "Algunos de nuestros clientes" de Vinohistorias (logos que no están en el clon) y "más de 124K seguidores en Instagram" (es una cifra que cambia).
- Los textos "Ubicación céntrica", "Reserva fácil" y "Espacio seguro" de la página de catas.
- Fotos del clon sin usar: `Personalizaci_n_de_vino.png` (banner con texto pegado), `Invino_mix.png` (recorte panorámico de otra foto que sí se usa), `513569108_…_n.jpg` (cartel del Tierra Maria 4C), dos portadas del blog y el logo a color (el sitio nuevo va sobre fondo oscuro).
- Las políticas, los términos y el blog se enlazan a su tienda en el pie.

## Qué se conserva al pie de la letra

- "Una experiencia única con vino sin pretensiones", "Somos un wine & coffee bar", "Donde el vino se disfruta sin reglas", los dos párrafos del winebar (vino y café todo el día, catas, maridajes y eventos; más de 100 etiquetas por copa y por botella), "Aquí no hay protocolos, solo el placer de brindar y sentirse en casa" (como título, recortado).
- Star Wine List: "La 'guía Michelin' del vino nos tiene en su mapa" y su párrafo. Las tres citas con sus autores: Manuel Negrete (Star Wine List), Jancis Robinson y Teresa Rodríguez (Buena Mesa Reforma).
- "¿Tienes un evento especial en mente?", "Renta nuestro winebar" y su párrafo.
- Catas: "Hay experiencias que se viven mejor en persona", "Sin pretensiones, con mucho sabor.", su párrafo; la Cata a ciegas ("Prueba tres vinos, sin prejuicios y sin usar la vista.", "Tres vinos para que te sorprendas; esta es nuestra cata a ciegas.", Invino Cava y Copeo, 30 de septiembre de 2026, 8:00 pm, 3 copas y acompañamientos, cupo limitado, $990); la Cata en Línea ($6,000, su descripción, los tres pasos, qué incluye y sus tres preguntas frecuentes); la cata privada y las tres preguntas de la cata presencial; el certificado.
- Tienda: los 13 vinos con ficha de cata, con sus precios y su disponibilidad del 2026-09-26; "Envíos express gratis a todo México en compras mayores a $1,299 MXN", la asesoría por WhatsApp y los pagos seguros.
- Regalos: el texto y el precio de la etiqueta personalizada, sus seis celebraciones y el tiempo de entrega; los seis paquetes con precio y contenido y su nota ("Se puede seleccionar otro vino y otro tipo de empaque bajo pedido…"); la Gift Card con sus seis valores y su texto.
- Vinohistorias: "Detrás de cada recomendación hay una historia", el texto de David Zárate (WSET Nivel 3, juez del Concurso Mundial de Bruselas), los tres servicios, "Con más de 15 años de trayectoria…", "@vinohistorias"; "Somos Invino" ("Transformamos cada copa en una experiencia… catas y maridajes en casa o en línea"); "El 18 de febrero de 2008 comenzamos a soñar…".
- Contacto: Río Tamazunchale #305-A, Del Valle, 66220, San Pedro Garza García; 81 1018 3565; Facebook /invinomx e Instagram @invinomx; OpenTable.

## Pendiente de confirmar con el cliente

- **WhatsApp:** el sitio tiene dos números. Su página de catas dice "Escríbenos a nuestro whatsapp… 81-1018-3565" (también es el "RSVP" del cartel y el "Contáctanos" de la renta del winebar); su botón flotante ("Tanino, Atención al Cliente") usa el 52 1 81 2602 0119. El rediseño usa el 81 1018 3565 para WhatsApp y llamadas. ¿Cuál prefieren? ¿El 81 1018 3565 recibe llamadas?
- **Horario del winebar:** no está publicado en ninguna página ("vino y café durante todo el día"). El rediseño dice "Consulta el horario por WhatsApp" y el JSON-LD no lleva horario.
- **Existencias:** 10 de los 14 vinos de la tienda estaban agotados en línea el 2026-09-26; el rediseño lo muestra así. Al enseñar la propuesta hay que actualizar `vinos.json` (o conectarlo a su tienda).
- **Leyenda de consumo responsable:** se agregó "Venta de bebidas alcohólicas solo a mayores de 18 años. Evita el exceso."; confirmar el texto que quieran usar.
- **Colores de las copas:** son una interpretación de su nota de vista; si quieren, su sommelier los puede ajustar en `vinos.json`.
- **Agrupación del maridaje:** las diez opciones de "¿Qué vas a servir?" las armamos leyendo sus fichas; revisar que estén de acuerdo (por ejemplo, el Tierra Maria Tempranillo sale en mariscos por "un tiradito de atún").
- **Fotos:** faltan en el clon las del winebar (interior y fachada), de las catas, del certificado, de David Zárate y de los paquetes de regalo; si nos las comparten, se agregan. La foto de la tabla con la copa es la portada de un artículo de su blog: confirmar que es del winebar.
- **Tierra Maria 4C:** su ficha no trae maridaje, vista, nariz ni boca, así que no aparece en "¿Qué vas a servir?".
- **Precio de la Cata a ciegas:** $990; confirmar si es por persona.
- ¿Quieren conservar la newsletter con 10% de descuento?

## Dónde está cada cosa

- Textos, contacto, fotos, catas, regalos y Vinohistorias: `rediseno/src/data/content.ts`
- Vinos con su ficha, precio, disponibilidad, color de la copa y platillos: `rediseno/src/data/vinos.json`
- Diseño, catas, "¿Qué vas a servir?" (`QueVasAServir`, `Copa`, `Dato`) y regalos: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/cdn/shop/` (sin tocar); copias `.webp` y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 583-invinocavacopeo` después del QA).
