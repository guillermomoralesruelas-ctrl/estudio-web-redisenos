# Hotel Villa Margaritas: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://villamargaritashotel.com/ (sitio propio con Bootstrap 5, desarrollado por JCSE; motor de reservas propio en `/reservar` con pago por Stripe) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/550-hotelvillamargaritas/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 550-hotelvillamargaritas`) |

## En una línea

Mismo hotel, mismos textos, fotos, precios, teléfono, WhatsApp, correo y motor de reservas; cambia la forma: una sola página con las tres habitaciones como tarifario y un "¿Cuántos vienen?" que dice cuántas habitaciones necesita tu grupo y cuánto pagas por noche.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las habitaciones no aparecen: "No se pudieron cargar las habitaciones." (el clon las pide a `villamargaritashotel.com/api/room-types` y el navegador lo bloquea por CORS) | Las tres habitaciones escritas en la página, con precio, capacidad y texto |
| 1 imagen rota en escritorio y en móvil (la imagen vacía del visor de la galería) | 0 imágenes rotas; 11 copias `.webp` en `assets/web/` |
| 5 errores de consola en escritorio y 4 en móvil; 2 recursos fallidos (fuentes de Bootstrap Icons) | 0 errores y 0 recursos fallidos |
| Todos los íconos salen como cuadros vacíos | Íconos en SVG propios solo en botones (WhatsApp, teléfono, mapa, calendario) |
| El buscador de disponibilidad (Flatpickr y sessionStorage) no funciona fuera del sitio | Enlaces directos a `/reservar` y a la página de cada habitación del sitio real |
| Sin desbordes y con un H1 (esto ya estaba bien) | Igual: 0 desbordes y un solo H1 |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, /habitaciones, las tres páginas de habitación y la invitación de /pago se juntaron en **una sola página**.
- Las habitaciones dejan las tarjetas con foto y quedan en filas tipo tarifario; cada una junta lo que en el original está en su página: texto completo (el listado del sitio lo corta a 100 caracteres), "máx. por habitación" (4, 2 y 4) y el número de habitaciones de /habitaciones (32, 28 y 9). Los servicios que tienen todas se dicen una vez ("Todas las habitaciones incluyen").
- La galería de nueve fotos se repartió por secciones (entrada en la portada, platillos en restaurante, salones en eventos, elevador en instalaciones y lobby en contacto) en vez de un mosaico.
- La franja de estadísticas ("3 Tipos de habitaciones", "24/7 Servicio", "Precios promocionales desde $700 por / noche") pasa a los datos de la portada.
- Correcciones de redacción: "Pago 100% seguro" por "Pago 100 % seguro"; "Seguridad 24h" por "Seguridad 24 horas"; "— cada espacio diseñado para tu descanso" por ": cada espacio…"; "Centro de Villahermosa" por "En el centro de Villahermosa"; "3:00 PM · 12:00 PM" por "Entrada desde las 3:00 pm, salida hasta las 12:00 pm".
- "Estacionamiento: Área segura y vigilada" se juntó con "Dos estacionamientos" (de "Servicios del hotel" en las páginas de habitación): "Dos estacionamientos, en área segura y vigilada".
- "Reservar" abre el motor del hotel en otra pestaña (`/reservar`), y "Reservar" de cada habitación abre su página (`/habitaciones/<tipo>`), donde el sitio ya tiene "Reservar esta habitación". Su motor no acepta fechas desde fuera (las pasa por sessionStorage), así que las fechas se eligen allí.
- Fotos: 11 copias `.webp` de las del clon (de 4.12 MB a 0.81 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Fotos de las habitaciones (2026-09-28, con permiso del estudio): el clon no las traía. Se bajaron del sitio real las 15 de sus páginas de habitación (5 por tipo, 768 × 512) a `assets/habitaciones/`; cada fila del tarifario muestra tres (una grande y dos chicas). La quinta de la Suite Familiar es la misma foto que la segunda y no se usa. En la Suite Familiar se ve su cafetera y su microondas, que su texto ya menciona.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Cuántos vienen?"** (componentes `Cuantos`, `Contador` y `Cuartos` en `App.tsx`). Contadores de adultos (1 a 9), menores (0 a 6), noches (1 a 30) y fecha de llegada; para cada tipo de habitación calcula cuántas hacen falta (personas entre el máximo por habitación), el precio por noche y el total con la tarifa de oferta, marca la más económica, desactiva la opción si hacen falta más habitaciones de las que tiene el hotel y dibuja cada habitación con un punto por lugar. Textos nuevos: "¿Cuántos vienen?", "Dinos cuántos adultos y menores viajan y te decimos cuántas habitaciones necesitan de cada tipo y cuánto pagan por noche con la tarifa de oferta.", "Adultos", "Menores", "Noches", "Llegada", "N personas, N noches: del … al …", "N habitaciones, hasta N personas en cada una", ". La opción más económica", "Hacen falta N y el hotel tiene N de este tipo", "por noche", ", $X en total", "Calculamos con el máximo de personas por habitación que publica el hotel, contando adultos y menores, y con la tarifa de oferta por noche de su sitio. La disponibilidad y el total se confirman al reservar.", "Preguntar disponibilidad por WhatsApp", "Reservar en línea", "Menos adultos / Más adultos" (y menores, noches; lectores de pantalla). Los totales son multiplicaciones de los precios publicados.
- WhatsApp **993 205 4701** (el del sitio) con mensajes prellenados: "Hola, me comunico desde su sitio web. Quisiera información sobre habitaciones en el Hotel Villa Margaritas." (general; parte del mensaje del botón flotante del original), "…Me interesa la habitación (nombre) en el Hotel Villa Margaritas. ¿Me pueden dar información?" (cada habitación), "…Somos N adultos y N menores. Nos interesa(n) (una habitación / N habitaciones) (tipo) del … al … (N noches). ¿Tienen disponibilidad?" (cálculo) y "…Me interesa uno de sus salones de eventos para una reunión o celebración. ¿Me pueden dar información?" (salones).
- Títulos, botones y textos nuevos: navegación "Habitaciones", "¿Cuántos vienen?", "Restaurante", "Salones", "Contacto"; "Bienvenidos a Villahermosa, Tabasco" (de "Bienvenidos"); "Reservar ahora", "Escríbenos por WhatsApp"; datos de la portada "Por noche, desde $700 MXN", "Check-in 3:00 pm", "Check-out 12:00 pm", "Servicio 24/7"; "Hasta N personas por habitación, N habitaciones de este tipo"; "Todas las habitaciones incluyen:"; "Además: Caja de seguridad." (Suite Familiar, de su lista de servicios); "Precio por noche"; "Tarifa de oferta, reservando directo"; "Reservar" y "Preguntar"; "Pagar mi reserva"; "El hotel tiene restaurante con desayuno y servicio a cuarto: no tienes que salir para empezar el día."; "Tres salones para tus reuniones y celebraciones" (título) y "…además de un centro de negocios con sala de reuniones equipada." (de "Centro de negocios: Sala de reuniones equipada"); "Preguntar por un salón"; "Teléfono", "WhatsApp", "Correo", "Check-in y check-out"; "Chatear por WhatsApp" (del original); "Cómo llegar en Google Maps"; "© (año) Hotel Villa Margaritas, Villahermosa, Tabasco"; "Saltar a calcular habitaciones".
- Barra fija en el celular: reservar, WhatsApp, llamar y cómo llegar.
- Enlace a Google Maps (búsqueda por nombre y dirección) desde la foto del lobby y un botón. El original no tiene mapa ni enlace a Maps.
- JSON-LD `Hotel` con datos reales (nombre, lema, dirección, teléfono, correo, 69 habitaciones, precios de $700 a $900 MXN por noche, check-in 15:00, check-out 12:00 y servicios). El original no tiene ninguno.
- Title y description nuevos con datos reales; Open Graph con la foto de la entrada; favicon hecho del logotipo (el original no tiene favicon: `/favicon.ico` da 404).
- Accesibilidad: un solo H1, `alt` descriptivo en todas las fotos (el original usa "Hotel Villa Margaritas — foto 1…9"), contraste AA (el oro solo sobre negro o como fondo con texto negro; `#7a5f0f` para texto sobre crema), enlace para saltar al cálculo, botones con `aria-pressed` y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones).

## Qué se quitó o no se usó

- Scripts de terceros: jQuery, Bootstrap JS, Flatpickr, Stripe.js (se cargaba en todas las páginas), Bootstrap Icons y Google Fonts.
- El buscador de disponibilidad de la portada (se sustituye por el cálculo y los enlaces al motor), el carrusel de la portada, la franja de estadísticas, el visor de galería y el botón flotante de WhatsApp (queda la barra fija en el celular).
- El texto "Precios Promocionales" y "Reserva directa · Sin cargos extra" como sellos; su contenido ya está en "¿Por qué reservar con nosotros?".
- Las etiquetas "Bienvenidos", "Nuestra esencia", "Nuestras habitaciones", "Instalaciones", "Galería", "Reserva directa" y "Encuéntranos" encima de cada título, y "Desarrollado por JCSE".
- El formulario de huésped de /reservar y el de código de /pago: quedan en el sitio del hotel, enlazados.
- Fotos del clon sin usar: ninguna de la galería; el logotipo se usa como logo y favicon.

## Qué se conserva al pie de la letra

- H1 "Hotel Villa *Margaritas*" (con "Margaritas" en itálica) y su frase ("Estratégicamente ubicado en el centro de Villahermosa, a tan solo cuadra y media de la terminal del ADO y a la vuelta del hospital de Pemex."); "En busca de la Excelencia" y "Servicio personalizado. La mejor ubicación en el centro de Villahermosa."; "A 1½ cuadras / Terminal ADO" y "A la vuelta / Hospital Pemex"; "Confort para cada viajero" y su texto; "69 habitaciones diseñadas para brindarte el máximo confort y descanso."; "Todo lo que necesitas" y "Disfruta de todas las comodidades de un hotel boutique en el centro de Villahermosa."; "¿Por qué reservar con nosotros?" y sus cuatro razones; "Garantiza tu estancia" y su texto; "En el corazón de Villahermosa"; "Una estancia cómoda en un ambiente tranquilo y seguro en el corazón de Villahermosa."
- Las tres habitaciones con sus precios tal como los publica el sitio el 2026-09-26: Doble Matrimonial $800 → $700, King Size $800 → $700, Suite Familiar $1,000 → $900 (MXN por noche, "tarifa de oferta"); su texto completo, su máximo por habitación (4, 2 y 4) y su número (32, 28 y 9).
- Servicios en la habitación (Internet Wi-Fi de alta velocidad, aire acondicionado, TV por cable, agua caliente y fría, secadora de cabello, teléfono, servicio a cuarto) e instalaciones con su frase (Internet Wi-Fi, aire acondicionado, TV por cable, restaurante "Desayuno y servicio a cuarto", estacionamiento, seguridad con circuito cerrado, elevador, centro de negocios, 3 salones de eventos, lavandería y tintorería).
- Contacto: Andrés Sánchez Magallanes #910, Centro, Villahermosa, Tabasco; +52 993 205 4701 (teléfono y WhatsApp); hotelvillamargaritasventas@gmail.com; check-in 3:00 pm y check-out 12:00 pm.
- El motor de reservas propio del hotel (`/reservar`), las páginas de cada habitación y la página de pago (`/pago`).

## Pendiente de confirmar con el cliente

- **Capacidad real de cada habitación.** El listado del sitio dice "2 personas" (y "2 huéspedes" en el inicio) en las tres; su texto y su página dicen máximo 4 en la Doble Matrimonial y la Suite Familiar y 2 en la King Size. El rediseño usa 4, 2 y 4. Confirmar también si los menores cuentan dentro de ese máximo y qué significa "Sin cargo adicional por huéspedes extra" en la Suite Familiar.
- Que los precios de oferta ($700, $700 y $900) apliquen todo el año y para cualquier número de personas; el cálculo multiplica esos precios.
- Si el motor de reservas puede aceptar fechas y personas en la dirección (por ejemplo `/reservar?check_in=…`) para abrirlo ya lleno desde el rediseño.
- Horario y menú del restaurante (el sitio solo dice "Desayuno y servicio a cuarto"); capacidad y precios de los 3 salones.
- Código postal, redes sociales (el sitio no tiene ninguna) y reseñas de Google o TripAdvisor para enlazar.
- Si el WhatsApp 993 205 4701 es el mismo número del teléfono fijo (el sitio usa el mismo en los dos).

## Dónde está cada cosa

- Textos, precios y datos: `rediseno/src/data/content.ts`
- Diseño, "¿Cuántos vienen?" y reservas: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`; Playfair Display e Inter de @fontsource, solo latino)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/public/img/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y vuelve a ejecutarlo.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 550-hotelvillamargaritas` después del QA).
