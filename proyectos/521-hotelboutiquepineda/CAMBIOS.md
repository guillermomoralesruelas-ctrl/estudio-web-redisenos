# Hotel Boutique Pineda: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotelboutiquepineda.com/ (WordPress, tema CozyStay) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/521-hotelboutiquepineda/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 521-hotelboutiquepineda`) |

## En una línea

Mismo hotel, mismas suites, precios, textos y fotos propias; cambia la forma: una sola página en español, con la reserva por WhatsApp siempre a mano y un selector "¿Cuántos viajan?" que le dice a cada familia qué suite le toca y cuánto cuesta.

## Qué estaba roto o incompleto en el clon

El QA automático del clon dio 0 en todo (`qa/reporte-rediseno.json` → `antes`); lo demás salió al revisarlo a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Los recuadros "Alberca climatizada", "Restaurante Pineda" y "Vistas panorámicas" salen vacíos (sus fotos son fondos que carga un script) | Cada uno con su foto y su texto |
| El buscador de reservas (fechas, suites, adultos, niños) no funciona fuera de su servidor | Reserva por WhatsApp con mensaje prellenado y enlace a su motor de reservas en línea |
| El carrusel de fotos del inicio queda cortado a la derecha | Tres fotos fijas en la bienvenida |
| Fotos de hasta 6,960 px y 3 MB | 17 fotos en `.webp` (de 15.2 MB a 1.5 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Suites, la página de cada suite y Contacto se juntaron en **una sola página** con anclas.
- Las tres suites pasaron de tarjetas iguales a filas alternadas con foto grande, precio y botón de reservar.
- Los datos sueltos de la portada del original (check-in 3 pm, check-out 11 am, grupos de hasta 40, playa a 4 minutos) se juntaron en una fila bajo el título.
- La acción principal pasó del buscador de fechas a **WhatsApp**, con un mensaje distinto por suite.
- Los textos se copiaron corrigiendo erratas: "Una suite equipara" pasó a "Una suite equipada", y "PNoche" o "P/Noche" pasaron a "por noche". "SN" se escribe "s/n".
- Todo en español: se quitaron las etiquetas en inglés del buscador ("Rooms quantity", "Adults quantity", "Book Your Stay").

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Cuántos viajan?"** (componente `CuantosViajan` en `App.tsx`). Es un contador de 1 a 40 personas que muestra la suite que corresponde, su precio real y el **precio por persona**, que es un cálculo nuestro (precio entre el número de personas). Trae un botón de WhatsApp con el mensaje prellenado. De 7 personas en adelante muestra "Viaje en grupo". Textos nuevos: "¿Cuántos viajan?", "Dinos cuántos son y te decimos cuál les queda.", "Entre N personas: $X por persona", "Reservar esta suite", "Viaje en grupo", "Recibimos grupos de hasta 40 personas. Escríbenos con tus fechas y te preparamos la cotización para los N.", "Cotizar grupo".
- Mensajes de WhatsApp prellenados nuevos: "Hola, quiero reservar la Suite X", "Hola, somos N personas y quiero reservar la Suite X", "Hola, somos N personas y queremos cotizar hospedaje para un grupo". El general ("Hola quiero reservar una suite") es el del original.
- Títulos y botones nuevos: "Nuestras suites" (del original), "En todas las suites", "Encuentra tu suite", "Reservar por WhatsApp", "Consulta la disponibilidad en línea", "4 min caminando a la playa", "Esperamos recibirte en Rincón de Guayabitos" (adaptado de "Esperamos recibirlo…"), "Ver en Google Maps" y "Cómo llegar".
- Barra fija en el celular: Reservar, llamar y cómo llegar.
- Enlace a Google Maps con las coordenadas del mapa que ya tenía su sitio (21.0213917, -105.2799549).
- SEO: meta description real (el original no tiene y su vista previa al compartir muestra las etiquetas del buscador), Open Graph y JSON-LD `Hotel` con dirección, coordenadas, 9 suites, check-in, check-out, rango de precios y servicios.
- Accesibilidad: un solo H1, `alt` en todas las fotos (en el inicio del original las 15 imágenes tienen `alt` vacío), contraste AA, enlace para saltar al contenido y `prefers-reduced-motion`.

## Qué se quitó o no se usó

- **La foto de la fachada** (`ChatGPT-Image-Feb-5-2026-08_48_21-PM.png`): por el nombre del archivo parece generada con IA; no se usa hasta confirmar con el cliente.
- Fotos de banco: `apostolos-vamvouras-…-unsplash` (mujer con toalla, Unsplash), `familia-1` y `Hotel-en-Guayabitos-1` (pareja al atardecer), que no se sabe si son del hotel.
- El texto de plantilla en inglés de la página de la suite ("TV-UHD screen for watching mountaineering films", "Room safe for your top mountain photos", "Kids Swimming Pool", "Washing Machine"…): es texto de ejemplo del tema CozyStay, no del hotel.
- El calendario de disponibilidad y el buscador (dependen de su WordPress).
- El selector de idioma EN/FR, el chat de WhatsApp flotante de WordPress y el buscador del sitio.
- Casa Sueños y Casa Amanecer: aparecen en su menú, pero sus páginas no están en `crudo.json`.

## Qué se conserva al pie de la letra

- Suites y precios: Suite 2 Personas $1,650, Suite 4 Personas $3,080 y Suite 6 Personas $4,340 MXN por noche, con sus camas, baños y descripciones.
- 9 suites, grupos de hasta 40 personas, check-in 3 pm y check-out 11 am.
- Amenidades en suite (las que están en español), textos de alberca climatizada, Restaurante Pineda, vistas panorámicas, ubicación ("a menos de 4 minutos caminando") y servicios.
- La opinión de Claudia Altamirano en TripAdvisor y la frase "Hotel Boutique Pineda no es solo donde te hospedas…", tal como las publica el hotel.
- Contacto: Carr. a Los Ayala km 1 s/n, C.P. 63724, Rincón de Guayabitos, Nay.; +52 322 180 4587 (teléfono y WhatsApp); reservaciones@hotelboutiquepineda.com; Facebook e Instagram.
- Logotipo, ícono "P" y las fotos de su sesión (suites, alberca, recepción, huéspedes, restaurante, bahía y playa).

## Pendiente de confirmar con el cliente

- Si la foto de la fachada es real o generada con IA, y si nos pueden mandar una foto real del edificio.
- Si las fotos de la familia en la playa y de la pareja al atardecer son del hotel.
- Cuántas suites hay de cada tipo (para sugerir combinaciones a los grupos) y si los niños pagan.
- Qué amenidades familiares tienen de verdad (alberca de niños, cunas, lavadora), porque en el sitio aparecen en inglés como texto de plantilla.
- Si los precios son fijos todo el año o cambian por temporada.
- Qué son Casa Sueños y Casa Amanecer, y si se incluyen.
- Horario del Restaurante Pineda.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx` (el selector está en `CuantosViajan`)
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y ejecuta `node fotos-web.mjs` dentro de `rediseno/`.
