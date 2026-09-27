# RE/MAX Espacios Hábitat (Espacios Hábitat Bienes Raíces): diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://espacioshabitat.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/390-espacioshabitatbienes/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 390-espacioshabitatbienes`) |

## En una línea

Mismo negocio, mismos inmuebles, precios, asesores y contacto; en lugar de un WordPress con la plantilla Houzez (carrusel que repite los destacados, buscador, login y comparador de demostración), una sola página con "Metro a metro": sus nueve inmuebles destacados dibujados a la misma escala, con ficha, precio por m² y WhatsApp sobre ese inmueble.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 18 imágenes rotas y 18 recursos fallidos en escritorio (22 y 22 en celular): pide copias `.webp` que no se descargaron | 0 rotas y 0 fallidos: se usan copias `.webp` hechas con `fotos-web.mjs` de las fotos que sí están en el clon |
| 0 H1 | Un H1: "Bienes raíces en Hermosillo" |
| 16,179 px de alto en escritorio y 14,266 px en celular; el carrusel repite los nueve destacados tres veces | 3,923 px en escritorio y 6,831 px en celular; cada inmueble aparece una vez |
| Buscador, "Compare listings" y login de Houzez sin función en el clon | Se quitaron; cada ficha enlaza a su página en el sitio real |

## Qué se cambió (mismo contenido, otra forma)

- Los "Inmuebles destacados" pasan de carrusel a la sección "Metro a metro": lista agrupada en "Para vivir" y "Para construir o invertir", plano a escala y una ficha.
- Los datos de cada inmueble salen de **su ficha** (no de la tarjeta de la portada), porque la ficha es más completa: terreno y construcción, asesor, detalles.
- "¿Por qué confiar en nosotros?" (01/02/03) y los textos de Nosotros se reparten en dos secciones en prosa: "¿Quieres vender o rentar tu propiedad?" y "Un equipo de asesores en Hermosillo".
- Los asesores pasan de carrusel con fotos a una lista con nombre y celular tocable (primera hoja de /asesores/).
- La dirección y el horario (antes solo en /contacto/) están en la misma página, con Google Maps.
- El texto de Únete se resumió y se corrigió "Sí tienes" por "Si tienes".

## Qué se agregó (no existía en el original)

- **"Metro a metro"**: plano SVG con los nueve inmuebles como cuadros de su misma superficie, a la misma escala y apoyados en una esquina; cuadrícula de 10 m, barra de 20 m, metros construidos en azul y una cancha de fútbol reglamentaria (105 × 68 m, 7,140 m², medida general de la FIFA, no del negocio) que se puede ocultar. Textos nuestros: "Metro a metro", la frase de introducción, "un cuadro de X m por lado", "En una cancha de fútbol cabe N veces", "Equivale a N canchas", "Es el N % de una cancha", "En azul, sus X m² construidos", la nota de cómo se dibuja, "Para vivir", "Para construir o invertir", "Sin foto publicada. Pide fotos … a su asesor".
- **Precio por m²** en cada ficha: precio publicado entre m² construidos (casas y edificio), de terreno (terrenos) o del departamento (renta mensual). Es una división nuestra; el único que ya lo publicaba es Camino del Seri ($3,396.67, coincide).
- WhatsApp prellenado al 662 115 0662 (el de su botón flotante): general, por inmueble ("me interesa el inmueble … ($…) … Asesor: …") y para vender o rentar; Únete va al 662 115 0232, como en su sitio.
- Títulos nuestros: "¿Quieres vender o rentar tu propiedad?", "Un equipo de asesores en Hermosillo", "¿Quieres ser asesor?", "La oficina, en Valle Grande"; botones "Ver inmuebles metro a metro", "Hablar con un asesor", "Me interesa", "Ver ficha completa", "Quiero vender o rentar", "Pedir una entrevista por WhatsApp", "Escríbenos".
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `RealEstateAgent` con dirección y horario, title, description y Open Graph, `prefers-reduced-motion`.

## Qué se quitó o no se usó

- Buscador, comparador, login ("User registration is disabled for demo purpose"), aviso de cookies, chat con "asistente IA", reCAPTCHA y demás scripts de terceros.
- Logos de clientes (Cargill, Ford, Cinépolis…): no se usan marcas de terceros en la propuesta.
- Portada de Camino del Seri: su archivo se llama `ChatGPT-Image-15-jun-2026…` (imagen generada con IA). Portada de la casa en Obregón: muestra una casa terminada y la ficha dice "en construcción". Ambos quedan "Sin foto publicada".
- `049.jpg` (2016, parece de banco), los renders de desarrollos (Torre Vista, Ámbar, Costessa, nave de Puerta Norte) y la foto del Cerro de la Campana del blog (origen desconocido).
- Los retratos de asesores (solo hay 4 de 9 en el clon) y el blog.
- Viber (su enlace no lleva a Viber) y X.

## Qué se conserva al pie de la letra

- Precios, metros, recámaras, baños, zonas, asesores y teléfonos de las nueve fichas (tomadas con curl el 2026-09-27).
- Textos de la portada, "Asesoría personalizada…", Nosotros ("En RE/MAX Espacios Hábitat somos un equipo…", "Creemos en relaciones de largo plazo…", "Trabajamos con procesos… seguimiento puntual") y los seis servicios.
- Dirección (Blvd. Navarrete 134, Local 1, Col. Valle Grande, C. P. 83205), horario (L a V 9:00 a 16:00, sábados 9:00 a 13:00), tel. 662 311 3776, contacto@espacioshabitat.com, Facebook, Instagram y LinkedIn.
- Los nombres de los asesores se escriben como en su sitio (sin acentos donde el sitio no los pone).

## Pendiente de confirmar con el cliente

- **Casa en Montecarlo:** la ficha dice $2'300,000 en el precio y "$2,400,000 MXN" en la descripción. Se usa $2,300,000.
- **Edificio en Casa Grande:** el título dice "en Venta", el estatus dice "En Renta" y no muestra precio; la descripción dice venta en $14,000,000. Se usa venta en $14,000,000.
- **Departamento en Lomas Altas:** la tarjeta de la portada dice 57 m² y la ficha 65.82 m². Se usa 65.82 m².
- Fotos propias del terreno de Camino del Seri y de la obra en Obregón.
- WhatsApp: se usa el 662 115 0662 de su botón y del perfil de Rossy Moreno; confirmar que es el de la oficina. El JSON-LD de su sitio enlaza Instagram @remax_eh y el sitio @espacioshabitat: se usa @espacioshabitat.
- Si los nueve destacados siguen vigentes y si quieren más inmuebles en el plano (su otro sitio, espacioshabitat.com.mx, tiene su propio listado).
- Si quieren retratos de todos los asesores (hoy solo hay 4 en el clon).
- Uso de la marca RE/MAX en el sitio según las reglas de la franquicia.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts` (los nueve inmuebles, servicios y asesores)
- Diseño y secciones: `rediseno/src/App.tsx` (el plano está en `Plano` y `MetroAMetro`)
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias `.webp` de las fotos del clon en `assets/web/` (`publicDir`), creadas con `node fotos-web.mjs` desde `rediseno/`; `assets/web/` no va a git
