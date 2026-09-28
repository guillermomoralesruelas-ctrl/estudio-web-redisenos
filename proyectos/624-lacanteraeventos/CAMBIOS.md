# La Cantera Eventos: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lacanteraeventos.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/624-lacanteraeventos/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 624-lacanteraeventos`) |

## En una línea

Es el mismo salón, con sus mismos textos, fotos, teléfonos, WhatsApp, dirección y opiniones; cambia que todo cabe en una página sin carruseles duplicados, que cotizar y agendar visita abren WhatsApp directo (sin pasar por bit.ly y wa.link), que el contador del próximo evento apunta a la hora de su cartel y que se agrega "Escribe tu invitación antes que nadie", que arma la invitación del evento y la manda a cotizar.

## Qué estaba roto o incompleto en el clon

Datos de `qa/reporte-rediseno.json` → `antes` y revisión a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin H1 (0 en escritorio y en móvil) | Un solo H1: "Salón de eventos excepcionales en Monterrey" |
| La página no termina de cargar (tiempo de espera de 45 s agotado en escritorio y móvil) | Sitio estático de un solo archivo JS y CSS, sin scripts de terceros |
| Desborde horizontal de 5 px en móvil | 0 px |
| Alto de 10,783 px en escritorio y más de 16,000 px en móvil: eventos y testimonios salen dos y tres veces (carruseles sin su JavaScript) | 6,340 px en escritorio y 9,927 px en móvil; cada evento y cada opinión una vez |
| El carrusel de fondo de la portada (fotos "HERO" y el cartel del Wedding Event) no se descargó | Portada con la foto de su salón con techo de flores (`Nosotros-1`) |
| La cuenta regresiva queda congelada | Cuenta regresiva viva en la franja del próximo evento |

## Qué se cambió (mismo contenido, otra forma)

- De una página de Elementor con carruseles a una página con siete secciones: portada, próximo evento, el salón, la invitación, galería, opiniones y visítanos.
- Los seis tipos de evento dejan de ser un carrusel duplicado y se vuelven las opciones del selector de la invitación, cada uno con su foto y su texto.
- Mobiliario, Decoración y Gastronomía: una foto grande y dos en fila. Para Mobiliario se usa la foto de las copas (`Salon-3`) en lugar de la de su bloque, que es la misma de la portada.
- Las opiniones: la de Mariel Medrano grande y las otras dos al lado, sin carrusel.
- Botones "Cotizar evento", "Agendar visita", "Confirma tu asistencia" y "WhatsApp": el mismo número y los mismos mensajes que sus enlaces bit.ly → wa.link → api.whatsapp.com, pero directo con `wa.me/528127495777`.
- La cuenta regresiva del Wedding Event apunta a las 3 p.m. del 4 de octubre de 2026 (la hora del cartel), no a las 9 a.m. como la de su sitio (`data-interval="1791126000"`). Cuando pasa, la franja cambia sola al Open House XV Años.
- Teléfonos tocables (`tel:`); en su sitio son texto.
- Fotos: copias .webp ligeras en `assets/web/` (23 fotos, de 11.6 MB a 2.5 MB) con `rediseno/fotos-web.mjs`; el clon no se toca.
- Alt descriptivos en todas las fotos (en su sitio el alt es el nombre del archivo, como "La Cantera Eventos-Salon-4").
- Tipografía de la marca (Libre Baskerville y Quattrocento Sans) servida localmente con @fontsource, solo latin.

## Qué se agregó (no existía en el original)

- **Elemento distintivo "Escribe tu invitación antes que nadie"**: eliges tipo de evento, escribes los nombres, la fecha y los invitados, y se arma la invitación (papel hueso con doble filete, logo, "Acompáñanos a celebrar…", fecha con día de la semana y dirección del salón). "Mandar a La Cantera y cotizar" abre WhatsApp con su mensaje de cotizar más tipo, nombres, fecha, invitados y "¿Tienen disponible esa fecha?". No deja elegir fechas pasadas.
- Textos redactados por nosotros: títulos "Salón de eventos excepcionales en Monterrey" (a partir de su lema), "Más de 2,500 celebraciones en el mismo salón", "Escribe tu invitación antes que nadie" con su párrafo, "¿Qué vas a celebrar?", "Nombres en la invitación", "Fecha que te gustaría", "Invitados aproximados", "Acompáñanos a celebrar", las frases de cada evento en la invitación ("nuestra boda", "mis XV años", "nuestra graduación", "nuestra posada", "nuestro evento", "mi celebración"), los nombres de ejemplo de los campos (Ana y Luis, Valeria, Generación 2027, Familia Garza…; solo son marcadores de ejemplo), "Fecha por elegir", "Mandar a La Cantera y cotizar", "Mejor agendo una visita", "Así se ve el salón con sus invitados", "Lo que cuentan quienes ya celebraron aquí", "Pregunta la fecha" y el mensaje de WhatsApp del Open House.
- Barra fija en el celular: WhatsApp, Llamar (81 1291 2007) y Cómo llegar.
- Foto que abre Google Maps con su dirección, y botón "Cómo llegar".
- Title y meta description reales, Open Graph y JSON-LD `EventVenue` + `LocalBusiness` con dirección, teléfonos, correo, horario y redes (su sitio no tiene ninguno de los tres).
- Icono de pestaña (una "C" en itálica sobre negro), generado por `fotos-web.mjs`.
- `prefers-reduced-motion`: sin desplazamiento suave ni animación de la invitación.

## Qué se quitó o no se usó

- Los dos carteles con modelo (Open House XV Años y Wedding Event): parecen fotos de banco. Del cartel del Wedding Event solo se tomaron los datos (domingo 4 de octubre, 3 p.m., Live DJ Just 4 Wedding).
- Las fotos "HERO" del carrusel de portada (no están en el clon).
- El formulario "Contact Us" (nombre, apellido, correo, tipo de evento, descripción): lo sustituye la invitación, que manda lo mismo por WhatsApp.
- Los duplicados de eventos y testimonios de los carruseles.
- El enlace largo de opiniones de Google (una búsqueda con parámetros de sesión): se enlaza a su ficha por Google Maps.
- Las páginas de términos y aviso de privacidad no se rehicieron; de los términos solo se toma la frase de disponibilidad de fechas.

## Qué se conserva al pie de la letra

- Bienvenida, "Te invitamos a conocer…", el párrafo de trayectoria (10 años, 2,500 eventos), Mobiliario, Decoración, Gastronomía, Wedding Event, Open House XV Años y los seis textos de eventos.
- Las tres opiniones (Mariel Medrano, Dr. José Luis G.H., Sabdiel Espinosa), tal como están (solo se corrigió "tí" por "ti" en la bienvenida).
- Contacto: Carretera Nacional 2700, Valle de Cristal, Monterrey, 64990; lunes a domingo de 11 a.m. a 7 p.m.; (+52) 81 1291 2007 y 81 2749 5777; ventas@lacanteraeventos.com; Facebook, Instagram y TikTok; WhatsApp 81 2749 5777 con sus mensajes.
- La advertencia de sus términos: "La disponibilidad de fechas, servicios o paquetes está sujeta a confirmación directa con el equipo del salón".

## Pendiente de confirmar con el cliente

- La hora del Wedding Event: su cartel dice 3 p.m. y su contador llega a cero a las 9 a.m.; el rediseño usa la del cartel.
- La fecha del próximo Open House XV Años (el sitio no la publica).
- Si el enlace de Maps lleva al punto correcto (se armó con la dirección; no publica un enlace de Maps).
- Capacidad del salón, paquetes y precios: no los publica, así que la invitación no calcula costos.
- Si quieren que se usen los carteles de sus eventos, y si tienen versión sin modelo de banco.
- Si prefieren conservar un formulario por correo además de WhatsApp.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (no van a git), generadas desde el clon con `node rediseno/fotos-web.mjs`; `publicDir` en `rediseno/vite.config.ts`. Hay que correr `fotos-web.mjs` antes de `npm run build` en una copia nueva.
