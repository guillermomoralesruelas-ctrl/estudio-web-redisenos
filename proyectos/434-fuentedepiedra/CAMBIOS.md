# Fuente de Piedra: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://fuentedepiedra.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/434-fuentedepiedra/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 434-fuentedepiedra`) |

## En una línea

De una página con galerías en carrusel, testimonios vacíos y un botón de WhatsApp que no lleva a ningún chat, a una página que muestra cada espacio y arma la solicitud de cotización como una frase que se manda por WhatsApp.

## Qué estaba roto o incompleto en el clon

- El clon carga sin el JS de su galería (35 imágenes sin cargar) y sin el mapa. Las fotos sí están completas en `sitio/assets/img/`.

## Qué se cambió (mismo contenido, otra forma)

- Galería en carrusel ("Nuestro lugar", "Instalaciones", "Eventos") → secciones con foto grande y su pie: explanada, jardín, fogata, ingreso, suite, sanitarios y eventos realizados.
- Las 7 tarjetas de "Sobre nosotros" (capacidad, ubicación, servicio, estacionamiento, seguridad, instalaciones, suite) y la lista de "Espacios y comodidades" se juntaron en "Nuestro lugar" y "Servicios".
- Colaboradores: sus logos pasan a botones con el nombre y el mismo enlace de Instagram.

## Qué se agregó (no existía en el original)

- **"Tu evento en una frase"**: frase con selectores (tipo de evento, invitados hasta 300, espacio, plan, fecha y siguiente paso) que cambia la foto y se manda tal cual por WhatsApp.
- WhatsApp con el número completo (+52) y mensaje prellenado en cada botón; barra fija en el celular (WhatsApp, Llamar, Llegar).
- JSON-LD de tipo `EventVenue` con capacidad, dirección, coordenadas y redes; description y Open Graph; ícono visible (su favicon es blanco sobre transparente).

## Qué se quitó o no se usó

- La sección "Testimoniales" (dice "Aún no hay testimonios publicados").
- Misión, visión y valores; el texto sin traducir "messages.gallery.description"; el enlace "Iniciar sesión" del pie; el formulario de contacto (se sustituye por WhatsApp).
- El video del banner (el clon no lo trae) y la versión en inglés.
- Fotos del clon sin usar: dos de los baños de caballeros y la del distribuidor duplicada.

## Qué se conserva al pie de la letra

- Capacidad (300 invitados), metros (explanada 600 m², techo 500 m², jardín 220 m², cocina 75 m²), 150 autos con valet y la lista completa de servicios.
- Los pies de foto de su galería (Boda Madelin y Carlos, agosto 2025; aniversarios y ceremonia civil de abril 2025; suite, tocador, baños, fogata, ingreso).
- Dirección, teléfono, correo, redes, su mapa de Google (el mismo iframe) y sus cinco colaboradores.

## Pendiente de confirmar con el cliente

- **Qué incluye el plan "todo incluido"** y qué el de "solo renta": su sitio solo dice "Planes todo incluido o solo renta" y, aparte, "Catering personalizado, selección de menú preferido". El texto del rediseño relaciona el catering con el todo incluido (deducido).
- Que el 33 2781 5989 tenga WhatsApp con +52 (su sitio lo enlaza como `wa.me/3327815989`, sin código de país).
- Código postal: su texto dice 45645 y su mapa, 45646.
- Si reciben XV años y eventos distintos de bodas y aniversarios en la explanada y el jardín a la vez, y si hay mínimo de invitados.
- Horario para visitas (no lo publica) y precios.
- Testimonios reales para agregarlos cuando existan.

## Dónde está cada cosa

- Textos, espacios, servicios, frase y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la frase: `rediseno/src/App.tsx`
- Colores, fuentes y el estilo de los huecos subrayados: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/img/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
