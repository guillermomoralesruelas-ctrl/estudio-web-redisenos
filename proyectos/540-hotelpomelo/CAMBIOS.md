# Hotel Pomelo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hotelpomelo.com/ (Squarespace) |
| Método | **1.2**: proceso del 1.1, pero con las imágenes descargadas en la PC porque el clon de Squarespace no las trajo |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/540-hotelpomelo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 540-hotelpomelo`) |

## En una línea

Mismo hotel, mismos textos, fotos y datos de contacto; cambia la forma: todo en una sola página que carga sin Squarespace, con la reserva y el WhatsApp siempre a mano, y el lema "Aquí el tiempo fluye diferente" convertido en el atardecer real de Troncones de cada día.

## Qué estaba roto o incompleto en el clon

De `qa/reporte-rediseno.json` → `antes` y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 8 imágenes rotas (escritorio) y 7 (móvil): Squarespace carga las fotos de su CDN | 29 imágenes locales en `.webp`, 0 rotas |
| 15 errores de consola y 7 recursos con 404 (`/api/census/*`, `/api/ui-extensions/*`, `social-accounts.svg`) | 0 errores y 0 recursos fallidos: no hay scripts de terceros |
| El video de portada no carga y el título queda partido en dos extremos con un hueco | Portada con foto de la piscina infinita (vertical en el celular) y el título completo |
| El carrusel "¿Qué te apetece?" y las galerías de habitaciones no funcionan | Lista de experiencias con foto y mosaico de habitaciones, sin JavaScript de carrusel |
| `assets/` del clon vacío | 143 imágenes descargadas en la PC (`assets/pomelo/`, método 1.2) y copias ligeras de las 38 que se usan (`assets/pomelo-web/`) |

## Qué se cambió (mismo contenido, otra forma)

- Las páginas Inicio, Habitaciones, Eventos y parte de Nosotros se juntaron en **una sola página** con anclas.
- El orden: primero la portada, la bienvenida y las habitaciones (lo que se vende); luego El Chiringuito, las experiencias y los eventos.
- "¿Qué te apetece?" pasó de carrusel a lista seleccionable. **Gastronomía** no aparece en la lista porque ya tiene su sección completa (El Chiringuito de Fran).
- Los textos se recortaron y se juntaron párrafos para leer mejor (por ejemplo, la descripción de la habitación y los de eventos), sin cambiar datos.
- Tipografía: Halyard Display (Typekit) se sustituyó por Hanken Grotesk, que es parecida, y se agregó Young Serif para los títulos.
- Imágenes: 38 fotos convertidas a `.webp` con `rediseno/fotos-web.mjs` (de 19.9 MB a 3.8 MB). Los originales de `assets/pomelo/` no se tocaron.
- El año del pie ya no está fijo en 2025: se calcula.
- Se corrigieron erratas del original al copiar: "newsltetter", "Nuestas habitaciones" (este título no se usa) y "s/n" en la dirección.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "Medimos el tiempo en atardeceres"** (`src/sol.ts` y el componente `Atardecer` en `App.tsx`). Un arco con el recorrido del sol de hoy y la hora real del amanecer y del atardecer en Troncones, calculados en el navegador para la fecha de hoy (ecuación del amanecer, ±2 min, con las coordenadas aproximadas de Troncones 17.787 N, 101.739 O y la hora del centro de México). Textos nuevos: "Medimos el tiempo en atardeceres", "Hoy el sol se pone a las …. Faltan …", "Amanece a las … y el sol se pondrá a las …", "Hoy el sol se puso a las …. Mañana amanece a las …".
- Títulos de sección nuevos: "Celebra frente al Pacífico" (eventos), "Somos Ángela y Fran" (sale de su texto), "Tres maneras de disfrutar nuestra cocina" (es del original), "Habitaciones equipadas con" e "Incluido en el precio de la habitación" (del original, como títulos).
- Botones nuevos: "Reservar tu estancia", "Ver disponibilidad", "Cuéntanos tu evento", "Agendar por WhatsApp", "Preguntar por WhatsApp", "Cómo llegar", "Ver en Google Maps".
- WhatsApp de eventos con mensaje prellenado nuevo: "Hola, me gustaría organizar un evento en Pomelo".
- Barra fija en el celular: Reservar, WhatsApp, llamar y cómo llegar.
- Enlace a Google Maps (búsqueda por nombre y dirección) con una foto de la fachada.
- SEO: title y meta description reales (el original tiene la description vacía), Open Graph y JSON-LD `Hotel` con dirección, teléfono, correo, 6 habitaciones y servicios (el original publica un `LocalBusiness` con la dirección vacía).
- Accesibilidad: un solo H1, `alt` en todas las fotos, contraste AA, enlace para saltar al contenido, pestañas accesibles en las experiencias y `prefers-reduced-motion`.

## Qué se quitó o no se usó

- El video de portada (no se pudo descargar; se usa la foto de la piscina).
- El formulario de newsletter: en el sitio original no está configurado (no tiene dónde guardar los correos). Se deja fuera hasta que el cliente diga qué servicio usa.
- El selector de idioma "English": no se capturó la versión en inglés.
- El carrito de Squarespace (aparece un "0" en el menú del original, no se usa).
- Las páginas "Vive Troncones / Actividades" y "Nosotros" completa: no están en `crudo.json`; se enlaza a su página de historia.
- Fotos de galería duplicadas (cada foto de habitaciones venía dos veces) y la mayoría de las 143 imágenes: se eligieron 38.

## Qué se conserva al pie de la letra

- Todos los textos del negocio: lema, bienvenida, habitaciones (61 m², 2 huéspedes, cama King, terraza privada, ducha interior y exterior, equipamiento e incluidos), espacios, El Chiringuito (Fran López, La Barra de Fran, Guía Michelin 2024, 2025 y 2026, Guía Marco Beteta 2026), experiencias, eventos y la historia de Ángela y Fran.
- Contacto: Av. de la Playa s/n, Troncones, Guerrero, 40807; teléfono (+52) 55 3919 0673; WhatsApp del hotel (+52) 55 2069 4573; WhatsApp del Chiringuito 52 55 9193 5494; hola@hotelpomelo.com; Instagram y Facebook.
- Motor de reservas: https://rbe.zaviaerp.com/hotel/hotelpomelo
- Los mensajes prellenados de WhatsApp del original (conocer más, reservar mesa, surf, yoga, masaje y paseo a caballo).
- Logotipos, ilustraciones y fotos del propio hotel.

## Pendiente de confirmar con el cliente

- Qué número es para llamadas: el sitio publica (+52) 55 3919 0673 como "Teléfono" y (+52) 55 2069 4573 en WhatsApp. El botón "Llamar" usa el primero.
- Tarifas y noches mínimas: el sitio no las publica, así que no aparecen.
- Si quieren newsletter y con qué servicio.
- Versión en inglés.
- Si el video de portada se puede entregar en archivo para usarlo.
- Horarios de El Chiringuito para gente que no se hospeda (no aparecen en el sitio).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Cálculo del amanecer y atardecer: `rediseno/src/sol.ts`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: originales en `assets/pomelo/` (sin tocar); copias `.webp` en `assets/pomelo-web/`, que es el `publicDir` de `rediseno/vite.config.ts`. Si se cambia una foto, se edita la lista de `rediseno/fotos-web.mjs` y se ejecuta `node fotos-web.mjs` dentro de `rediseno/`.
