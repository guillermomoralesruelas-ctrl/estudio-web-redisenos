# Desértika Spa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.desertikaspa.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima (más las fotos de su sesión, bajadas con curl de su sitio en vivo porque el clon no las trae) |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/308-desertikaspa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 308-desertikaspa`) |
| Capturas | `referencias/capturas-2026-09-27/` |

## En una línea

Es el mismo spa, con sus 12 masajes, 5 faciales y el bar de oxígeno con sus duraciones y precios, sus sucursales con dirección, teléfono y agenda, su WhatsApp central y sus fotos. Cambia la forma: la portada de carruseles y cinco páginas se juntan en una, y con "¿Cuánto tiempo tienes?" eliges tus minutos libres, un reloj de arena se llena y aparece lo que cabe, con precio, para agendarlo en tu sucursal.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La portada se queda en el primer carrusel: 800 px de alto (escritorio) y 844 px (celular) | 10,776 px y 15,417 px con el contenido de Inicio, /masajes, /faciales, /bar-de-oxigeno y /sucursales |
| 1 imagen rota (el logo), 15 y 13 recursos fallidos y los mismos errores de consola (fuentes Butler con ruta `RUTA_REAL/`, iconos de Odoo, FontAwesome, JS de Odoo) | 0 rotas, 0 errores, 0 fallidos |
| 4 H1 (el título del carrusel y las cifras +60, +80, +200 y +50,000 son H1) | Un H1 |
| Ninguna foto de su sesión: el clon solo trae miniaturas de 330 px de banco y fondos de Adobe Stock | 13 fotos de su sesión, la del bar de oxígeno, su logotipo y el collage de sucursales, en 19 copias .webp (321 KB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Masajes, Faciales, Bar de Oxígeno y Sucursales se juntan en una página; las demás experiencias (temazcal, hidroterapia, envolventes, reductivos, spa parties, paquetes, domicilio, wellness corporativo, depilación láser) quedan como resumen con enlace a su página.
- H1: "Masajes y faciales a tu medida en la Ciudad de México". Title y description nuevos, más cortos (su description sigue en la línea de la suya).
- Los precios de cada masaje y facial se ven como botones por duración ("50 min $1,300") que abren su propio enlace de reserva (`/book/…`, que lleva a su agenda de Odoo). Donde su botón iba a WhatsApp (Silla Antiestrés, Desintoxicante para Caballero, Bar de Oxígeno) se va a WhatsApp con el servicio escrito. El Lomi Lomi de 80 min va a `/reservar` porque su botón abre la reserva de 60 min.
- Teléfonos con `tel:+52…` (su sitio usa `tel:+55…`, el código de Brasil). WhatsApp con `wa.me/525566728900` y mensaje prellenado que empieza con el suyo ("Hola, quisiera agendar una cita").
- Sucursales: en escritorio, la lista completa; en el celular, eliges el nombre y aparece su ficha. La sucursal elegida (aquí o en el reloj) es la que usan los botones Llamar y Cómo llegar de la barra.
- El "sello Desértika" (sus seis elementos numerados del 1 al 6) queda como lista sin números.
- Descripciones recortadas y afirmaciones de salud quitadas: la lista "Beneficios de la Oxigenoterapia" (estrés y ansiedad, migrañas, desintoxica, resacas, metabolismo, actividad inmunológica), "eliminar toxinas… sistema inmunológico" (Desintoxicante), "reduce dolores musculares" (Piedras Calientes), "mejorar la circulación" (Prenatal), "habilidades auto curativas" (Shiatsu), "liberación emocional" (Lomi Lomi), "mejorar las funciones de los órganos internos" (Reflexología), "mala circulación" (Piernas Cansadas), "deshacer contracturas" (Espalda), "rejuvenece", "combatir líneas de expresión, flacidez" (faciales), "aliviar dolores" (Hidroterapia), "estimular el sistema linfático y la circulación" (Temazcal), "reducir tallas… eliminar la celulitis… transformación real" (Reductivos) y "Brindamos resultados visibles".
- Erratas corregidas en lo que se usa: "Fraklin" (Benjamín Franklin 229) y "Anzurez" (Anzures).
- Direcciones escritas igual pero en una línea ("Masaryk 317, planta alta, Col. Polanco").

## Qué se agregó (no existía en el original)

- **"¿Cuánto tiempo tienes?"**: reloj de arena en SVG cuya arena de arriba sube con los minutos elegidos (15, 20, 25, 30, 50, 80 o 110, las duraciones que publica); filtros "Quiero" (Todo, Masajes, Faciales, Bar de oxígeno); lista de lo que cabe, en la duración más larga que entra, con su precio; y "Tu pausa" con sucursal, WhatsApp escrito ("Hola, quisiera agendar una cita: Masaje de Piedras Calientes, 80 min ($1,700 M.N.), en la sucursal Condesa."), su enlace de reserva en línea y la agenda de la sucursal. Los granos caen en una línea punteada (quieta con `prefers-reduced-motion`).
- La alcaldía entre paréntesis en el selector de sucursal (Benito Juárez, Coyoacán, Miguel Hidalgo…) es nuestra, deducida de la colonia.
- Textos nuestros: el H1, "Elige por tu tiempo", "Tengo libres", "Quiero", "N opciones caben en N minutos. Toca una para armar tu cita.", "En N minutos no cabe ningún servicio de este tipo. Prueba con más tiempo.", "Tu pausa", "Elige un servicio de la lista.", "¿En qué sucursal?", "Pedir por WhatsApp", "Agendar en línea", "Agenda de …", "Precios en pesos mexicanos. Toca una duración para reservarla.", "En zona específica", "Duración de cada facial: 50 minutos." (de su "Duración 50 minutos"), "Más formas de consentirte" y su bajada, "También:", "Regala una experiencia Desértika.", "Comprar una giftcard", "Un Desértika cerca de ti" (título suyo de la portada), "Elige tu sucursal", "Es mi sucursal" / "Tu sucursal", "Agendar por WhatsApp", "Cómo llegar", "Se agenda por WhatsApp." (Aeropuerto y Satélite, cuyo botón va a su WhatsApp), los subtítulos del sello ("La que prefieras", "Para el masaje", "Para cerrar tu experiencia") y el mensaje de eventos del bar de oxígeno ("Hola, me gustaría información del Bar de Oxígeno para un evento.").
- JSON-LD `DaySpa` con sus 15 sedes como `department` (dirección y teléfono), punto de contacto de reservas (WhatsApp 55 6672 8900), rango de precios y redes; Open Graph; favicon con el emblema de su logotipo.
- Barra fija en el celular (WhatsApp, Llamar y Cómo llegar a la sucursal elegida) y enlaces a Google Maps por dirección (su sitio no tiene mapas).
- El emblema de su logo redibujado en SVG junto a la foto de portada (adorno).

## Qué se quitó o no se usó

- Los cuatro carruseles de la portada, el buscador, "Identificarse", el carrito, el newsletter y el foro.
- Los testimonios (Carlos Méndez, Kary Loredo, Itzel Ochoa, con "Hace 10 horas" y contadores fijos): no se pueden verificar.
- La cifra "+200 productos de venta en línea" (se enlaza la tienda).
- Fotos de banco o dudosas: miniaturas de 330 px de cada servicio, `Desertika_Header_1.jpg` y `Desertika_TestimonioFondo.jpg` (XMP con AdobeStock, Getty, Shutterstock), `reflexologie-plantaire-cellulite.jpg`, `que-es-el-shiatsu.webp`, la del masaje prenatal, la captura de pantalla de "Alivio muscular", `Desertika_Home_PersonalizaTuServicio.jpg`, el banner de promoción de marzo y el avatar "Diseño sin título (5)". Los iconos del sello tampoco se usan.
- Los scripts de Odoo, FontAwesome e icomoon y la fuente Butler.

## Qué se conserva al pie de la letra

- "¡Hoy mereces consentirte!", el texto de bienvenida ("En medio del ritmo de la Ciudad de México…"), "Puedes elegir de acuerdo con el tiempo disponible…", el sello Desértika, "Elige el masaje que necesitas hoy" y su texto, los lemas de cada masaje y facial, Face Mapping y Touch Therapy, "Un Desértika cerca de ti", las políticas de Reagenda, Tipos de pago y Calidad y seguridad, y las cifras +60, +80 y +50,000.
- Nombres, duraciones y precios de los 12 masajes, los 5 faciales y el bar de oxígeno; direcciones y teléfonos de las sucursales; enlaces de agenda (appt.link) y de reserva (`/book/…`); WhatsApp, giftcard, tienda, membresías, factura, bolsa de trabajo, redes, aviso de privacidad y términos.

## Pendiente de confirmar con el cliente

- Cuántas sucursales tiene: su sitio dice "13 Sucursales" y "14 sucursales", y lista 15 distintas (el Aeropuerto no está en el menú; Samara Satélite solo en el menú y en un carrusel). El rediseño muestra las 15.
- Horarios: no los publica en ninguna página (el JSON-LD no los lleva).
- Qué servicios hay en cada sucursal ("disponibilidad por sucursal") y si el Aeropuerto y el Hyatt dan todos.
- Las duraciones: la página dice 50, 80 y 110 min, pero sus reservas se llaman "60 Min", "90 Min" y "120 Min" (por ejemplo "Masaje De Piedras Calientes 120 Min"). El rediseño usa las de la página.
- Si el WhatsApp 55 6672 8900 también recibe llamadas (la barra llama a la sucursal elegida, no a ese número).
- Precios de paquetes, spa parties, temazcal, hidroterapia, envolventes y reductivos (no están en las páginas del clon; se enlazan).
- Que las fotos de la sesión (FT_*, _BWE*, FOTOS DESERTIKA 22) y la del bar de oxígeno sean suyas y de qué sucursal son (lo parecen: toallas bordadas con su logo).
- Qué texto quieren para los faciales y reductivos sin afirmaciones de resultados.

## Dónde está cada cosa

- Textos, servicios, sucursales y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el reloj de arena: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: originales bajadas con curl en `assets/originales/`; copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde el clon (`sitio/assets/web/image/`) y `assets/originales/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
