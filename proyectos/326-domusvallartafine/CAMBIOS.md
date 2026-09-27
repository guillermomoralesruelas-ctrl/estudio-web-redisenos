# DOMUS Vallarta Fine Real Estate: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://domusvallarta.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima. Empezado en la nube y terminado en la PC. |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/326-domusvallartafine/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 326-domusvallartafine`) |

## En una línea

Mismo inventario (114 propiedades con su precio, moneda, m², recámaras, baños y ficha), mismas preventas, mismo texto para vender y mismas tres oficinas; en vez de una portada con video, cuatro buscadores de colonias y ningún WhatsApp, una página que responde "¿dónde de la bahía me alcanza?" y termina en WhatsApp con la propiedad y su precio ya escritos.

## Qué estaba roto o incompleto en el clon

Sacado de `qa/reporte-rediseno.json` → `antes` y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 8 recursos fallidos (las tarjetas del menú `assets/img/menu-cards/*.webp`, 404) y 10 errores de consola, en escritorio y en el celular | 0 recursos fallidos y 0 errores de consola |
| El video de portada (`domus-home-new.mp4`) no se descargó: la portada sale gris | Portada con la foto de la alberca de Maralma, de su inventario |
| El mapa de Google (con clave de API) no carga: hueco blanco | Sin mapa incrustado; cada oficina tiene su botón "Cómo llegar" a Google Maps |
| Las fotos de los "Desarrollos destacados" (`media/portrait-*`) no están en el clon | Preventas como lista con su precio "desde" y el render de MCS Fluvial (`assets/img/fachada-mcs.jpg`, sí está en el clon) |
| 5,434 px en escritorio y 8,010 px en el celular, con cuatro buscadores de colonias (795 opciones) | 6,009 px en escritorio y 10,704 px en el celular (más alto porque ahora está el inventario completo en el elemento, la tabla de preventas y el texto de Vender, que en el original están en otras páginas) |

## Qué se cambió (mismo contenido, otra forma)

- **Buscadores de colonias y "Búsqueda por mapa" → "¿Dónde de la bahía te alcanza?"** (elemento memorable): las 114 propiedades de su `arrayListings`, puestas en una regla de precios por pueblo con el tope del visitante.
- **"Encuentra el mejor lugar para ti" (carrusel) → "Selección Domus"**: las mismas cinco propiedades de su portada, una grande y cuatro en lista, con su etiqueta "Ajuste de precio" donde la tienen.
- **"Desarrollo Destacado" (carrusel de siete) → tabla "Desarrollos en preventa"** con el mismo nombre, lugar y precio "desde" de cada uno, y enlace a su ficha.
- **La página Vender** (otra página) → sección "¿Quieres vender?" con su título, su texto y sus siete fortalezas.
- **Contacto** (otra página) → sección "Encuéntranos" con las tres oficinas, sus teléfonos como enlace y "Cómo llegar".
- Paleta: su azul `#34455F` y su verde `#246157` (oscurecido a `#1f5a50`), con arena, oro y cobre nuestros. Tipografía: Montserrat, la de su sitio.
- Correcciones mínimas de ortografía y puntuación en textos suyos: "asi preparanos" → "así prepararnos" (Vender); "Harbor171 - Torre Norte" → "Harbor171, Torre Norte"; comas y minúsculas en las fortalezas ("(Marketing Digital)" → "(marketing digital)").
- Title y Open Graph nuevos; se conserva su meta description.

## Qué se agregó (no existía en el original)

- **El elemento "¿Dónde de la bahía te alcanza?"**: pesos o dólares (no se convierte), tope de $1 a $45 millones de pesos o de 200 mil a 4 millones de dólares, tipo (todo, casas y villas, departamentos, lotes). Una regla por pueblo de norte a sur (La Cruz de Huanacaxtle, Bucerías, Nuevo Vallarta, Bahía de Banderas, Puerto Vallarta y San Sebastián del Oeste), un punto por propiedad, una línea dorada en el tope y una ficha con foto, datos, precio, "Ver la ficha completa" (su ficha en domusvallarta.com) y WhatsApp. Datos en `rediseno/src/data/propiedades.json`: tipo, recámaras, baños, precio, moneda y ficha de `arrayListings` en `investigacion/original.html`; ubicación, m² y foto de la tarjeta de cada una en `investigacion/crudo.json`. El pueblo (`zona`) se sacó de la ubicación de cada tarjeta.
- Textos redactados por nosotros: el título "¿Dónde de la bahía te alcanza?" y su párrafo; "Moneda de la ficha", "Tu tope", "Qué buscas" y los botones de tipo; la frase "Con hasta … te alcanzan … y donde más opciones tienes es …" y sus variantes cuando no alcanza; "N de M a tu alcance, desde …" en cada pueblo; "Queda arriba de tu tope por …"; la nota de escala y de fecha de precios; "¿Qué hay para mi presupuesto?" y "Escribir por WhatsApp" en la portada; el pie de foto de Maralma; "Selección Domus"; "Desarrollos en preventa" y "Departamentos desde el precio que publica cada desarrollo"; "¿Quieres vender?"; "Publicamos en … y en las revistas …" (armado con los portales y revistas de su página Vender); "DOMUS Vallarta Inmobiliaria. Oficinas en Puerto Vallarta, Bucerías y Guadalajara."; "Precios y disponibilidad sujetos a cambio; confirma con tu asesor."; los botones "Preguntar por esta", "Ver la ficha completa", "Pedir información", "Todas las preventas", "Quiero vender", "Ver también el inventario MLS en su sitio", "Cómo llegar", "Llamar" y "WhatsApp"; los textos alternativos de las fotos.
- **WhatsApp con mensaje prellenado** (general, por propiedad con nombre y precio, preventas y vender). El sitio no publica un WhatsApp general (solo el del asesor en cada ficha): se usa el teléfono de la oficina de Bucerías para todo (ver pendientes).
- Enlaces a Google Maps de las tres oficinas.
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar (oficina de Bucerías).
- JSON-LD `RealEstateAgent` con la oficina de Bucerías y, como `department`, las de Puerto Vallarta y Guadalajara; Open Graph con imagen; favicon (el suyo, reducido).
- `prefers-reduced-motion`: el fundido de la ficha y el deslizamiento de la línea del tope se apagan.

## Qué se quitó o no se usó

- El video de portada (16 MB) y el mapa de Google con su API.
- Los cuatro buscadores de ubicación con cientos de colonias, los filtros "Más filtros", "Desde" y "Hasta", y el formulario de contacto con reCAPTCHA (se enlaza a su sitio y a WhatsApp).
- Las categorías Fraccional y Comercial del menú, el blog, la versión en inglés y el equipo de agentes de la página Vender (se puede agregar si lo piden).
- El pop-up de MCS Fluvial (`pop-up-mcs.jpg`) y las tarjetas del menú desplegable.
- El precio por m² que calculaba la versión de la nube (lo dejamos fuera: no lo publica el negocio).

## Qué se conserva al pie de la letra

- H1 "Invierte en Puerto Vallarta & Riviera Nayarit" y su meta description ("Domus Vallarta Inmobiliaria es su elección número uno para comprar y vender bienes raíces…").
- "La mejor asesoría del mercado a tu alcance": 29 desarrollos vendidos, 39 asesores en inversiones inmobiliarias y 1442 propiedades vendidas.
- Las 114 propiedades: nombre, ubicación, m², recámaras, baños, precio y moneda como los publica cada ficha (verificados uno por uno contra `arrayListings` el 2026-09-27; solo difieren en espacios dobles de tres nombres de Zantamar).
- Las cinco de "Encuentra el mejor lugar para ti" y sus "Ajuste de precio".
- Los siete desarrollos destacados y su precio "desde": MCS Fluvial $4,650,000 MXN, Quinta San Miguel Ocean & Canal $10,460,000 MXN, Harbor171 Torre Norte $556,713 USD, The One Residences $6,600,000 MXN, Espacio Marina & Golf $4,245,989 MXN, Tridenta Towers $5,469,376 MXN y Mar de Plata $6,900,000 MXN.
- Página Vender: "Deja tu propiedad en nuestras manos y nosotros nos encargamos de lo demás", su párrafo y las siete fortalezas; portales ampi.org, flexmls.com, nar.realtor y worldproperties.com; revistas Property Journal y Vallarta Real Estate Guide.
- Contacto: Bucerías, Lázaro Cárdenas #84 L-2, Colonia Dorada, C.P. 63732, +52 (329) 688 7509; Puerto Vallarta, Blvd. Fco. Medina Ascencio #2485, Int. C-07, Plaza Peninsula, Zona Hotelera Norte, CP 48333, +52 (322) 115 5040; Guadalajara, Mar Egeo Interior 1428-2, Colonia Country Club, CP 44610, +52 (333) 817 5022 y 817 5025. "Contáctanos para que te podamos atender personalmente."
- Afiliados AMPI, NAR, MLS Vallarta y Flexmls; Instagram, Facebook y TikTok.

## Pendiente de confirmar con el cliente

- **WhatsApp.** La portada y Contacto no publican ninguno (su formulario sí ofrece "WhatsApp" como forma de respuesta); 100 de sus 114 fichas tienen el WhatsApp del asesor de esa propiedad. El rediseño usa para todo el teléfono de la oficina de Bucerías, 329 688 7509. ¿Cuál es su WhatsApp general, o prefieren que cada propiedad vaya al de su asesor, como en sus fichas?
- Qué oficina es la principal (el JSON-LD y la barra del celular usan Bucerías, por la base de datos).
- Si los precios y la disponibilidad siguen vigentes (son los del 27 de septiembre de 2026; el elemento lee `propiedades.json`, que habría que actualizar o conectar a su inventario).
- "Más de 30 agentes" (página Vender) y "39 asesores" (portada): ¿cuál se usa?
- Si quieren que el elemento incluya el inventario MLS, Fraccional y Comercial, que hoy no entran.
- En qué pueblo va cada propiedad: se tomó de la ubicación de su tarjeta ("Bahía de Banderas" queda como fila aparte porque así la publican).
- Permiso para usar las fotos de las propiedades y el render de MCS Fluvial (ya están publicadas en su sitio).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; inventario: `rediseno/src/data/propiedades.json`; medidas de fotos: `rediseno/src/data/fotos.json` (lo escribe `fotos-web.mjs`)
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (`p/<id>.webp` por propiedad, logo, afiliados, render de MCS Fluvial y favicon), generadas desde el clon (`sitio/assets/`) con `node fotos-web.mjs` en `rediseno/`. `assets/web/` es el `publicDir`; no se sube al commit del rediseño y se regenera con ese script antes de `npm run build`.

## QA final

| Vista | Alto | H1 | Imágenes | Rotas | Errores | Fallidos | Desborde |
|---|---|---|---|---|---|---|---|
| Escritorio (1280 px) | 6,009 px | 1 | 14 | 0 | 0 | 0 | 0 |
| Móvil (390 px) | 10,704 px | 1 | 14 | 0 | 0 | 0 | 0 |
