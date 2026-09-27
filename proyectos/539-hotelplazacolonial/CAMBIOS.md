# Hotel Plaza Colonial: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hotelplazacolonial.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/539-hotelplazacolonial/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 539-hotelplazacolonial`) |

## En una línea

Mismo hotel, mismos textos, habitaciones, servicios, teléfonos, correo, actividades y motor de reservas; cambia la forma: una sola página donde su fachada amarilla se abre ventana por ventana y las fechas van directo a su sistema de reservas.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 0 H1 | Un H1: "Hotel Plaza Colonial, el alma de la Ciudad Amurallada" |
| Slider de portada (Revolution Slider 5.2.5.4) vacío: su JS no carga (`jQuery is not defined`, `wp is not defined`) | Foto fija de la fachada en la portada; sin jQuery ni plugins |
| Formulario "¡Reserve ahora!" sin calendario (flatpickr desde unpkg) | Campos de fecha nativos del navegador que abren su motor con las fechas en su formato (día-mes-año) |
| 4 recursos con 404 y 37 errores de consola | 0 y 0 |

## Qué se cambió (mismo contenido, otra forma)

- Sus dos páginas de habitaciones (/habitaciones en inglés: "Standard room", "Std. occupation"; /habitaciones-2/ en español con etiquetas en inglés) quedan en una sola ficha por habitación, en español, dentro del elemento.
- /instalaciones-2/ (piscina y estacionamiento), la lista de servicios y "Sobre el hotel" se reparten en los huecos de la fachada (portón, ventana baja, puerta).
- Los 3 comentarios de su portada (uno venía repetido) se muestran una vez cada uno, con la ortografía corregida (acentos, "sí refrescan") y sin cambiar lo que dicen.
- "Llámenos al 52 (981) 8119930" y "(981) 8119900 ext. 305" quedan como enlaces para marcar desde el celular; la extensión se marca sola (`tel:+529818119900,305`).
- "Cómo llegar" abre Google Maps en las coordenadas de su propio mapa incrustado (19.846676, -90.534738, "Plaza Colonial").

## Qué se agregó (no existía en el original)

- El elemento **"Abre una ventana"** (componentes `Fachada`, `Postigos`, `PanelVentana` y `AbreUnaVentana` en `App.tsx`): la fachada dibujada en SVG con los colores muestreados de su foto; cada hueco abre sus postigos y muestra una parte del hotel. Botones debajo del dibujo para usarlo con teclado y lector de pantalla. En el celular, al elegir, la página baja a la ficha.
- WhatsApp con mensaje prellenado según la habitación abierta y las fechas elegidas; barra fija en el celular (WhatsApp, Llamar, Cómo llegar).
- JSON-LD tipo `Hotel` con dirección, coordenadas, amenidades y las dos habitaciones; title y description reales; Open Graph con la fachada; favicon (una ventana con postigos, dibujada por nosotros).
- Textos alternativos descriptivos en todas las fotos (en el original eran el nombre del archivo o vacíos).
- Textos nuestros: "Abre una ventana", "Su fachada amarilla con balcones y ventanas azules es la seña del hotel. Toca un balcón, una ventana, la puerta o el portón y mira lo que hay del otro lado.", las etiquetas de los huecos ("Balcón", "Ventana", "Puerta principal", "Ventana de la planta baja", "Portón"), "Del portón hacia adentro: la piscina al aire libre y el estacionamiento del hotel.", "Dibujo ilustrativo de su fachada: el sitio del hotel no dice qué ventana corresponde a cada habitación.", "Foto de una de las habitaciones del hotel.", "Elige tus fechas y consulta disponibilidad y precios en el sistema de reservas del hotel, o pregúntales directo por WhatsApp o por teléfono.", "Ver disponibilidad y precios", "Lo que escriben sus huéspedes", "Comentarios publicados en el sitio del hotel.", "Calle 10, Centro Histórico de Campeche".

## Qué se quitó o no se usó

- La imagen de la promoción "3a Noche gratis" (`2026/08/ChatGPT-Image-4-ago-2026-02_59_03-p.m.png`): trae credenciales C2PA de "OpenAI Media Service" (hecha con IA) y la promoción vence el 30 de septiembre de 2026.
- El número 01-800-000-PLAZA: usa el prefijo 01, que dejó de marcarse en México en 2019; y no se pudo confirmar a qué número corresponde.
- Twitter (@hplaza_colonial), el bloque "Meta" del pie (Acceder, feeds, WordPress.org) y "© 2008-2017".
- Las páginas /campeche/ y /galeria-2/ no se investigaron (no están en `crudo.json`); su contenido no se usa.

## Qué se conserva al pie de la letra

- Textos de bienvenida, "Sobre el hotel", las dos habitaciones con sus amenidades, piscina (09:00 a 20:00, toallas sin costo), estacionamiento (gratuito, 24 h, sujeto a disponibilidad), los 6 servicios y las 5 actividades a pasos del hotel.
- Dirección, teléfonos, extensión 305, correo y Facebook.

## Pendiente de confirmar con el cliente

- **WhatsApp.** El sitio no publica ninguno: el rediseño manda los mensajes al (981) 811 9900, que parece fijo. Confirmar si tiene WhatsApp o qué número usar.
- Qué foto es de qué habitación (hoy dicen "Foto de una de las habitaciones del hotel") y si tienen foto de la piscina (no hay ninguna propia en el sitio).
- Si el motor de reservas `hotelplazacolonial.hpaq.me` es el que siguen usando (responde, 2026-09-27).
- Si el 01-800-000-PLAZA sigue activo y cómo se marca hoy.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el dibujo de la fachada: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó nada nuevo.
