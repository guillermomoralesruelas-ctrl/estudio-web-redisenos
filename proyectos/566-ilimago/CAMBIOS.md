# ilimago: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.ilimago.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/566-ilimago/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 566-ilimago`) |

## En una línea

Es la misma agencia creativa con los mismos servicios, precios y logos de clientes. Ahora el sitio tiene fondo oscuro premium, carga sin los 65 recursos rotos del clon, y añade la calculadora de inversión (elemento único) que muestra en tiempo real cuánto cuesta cada plan.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 65 imágenes rotas (hoja de estilos y todas las fotos con rutas incorrectas) — desborde de 2,188 px en escritorio y 3,068 px en móvil | 0 imágenes rotas, 0 desborde: las rutas apuntan a `../sitio/assets/assets/img/` vía `publicDir` de Vite |
| 47-49 recursos con 404 (JS de servicios, CSS principal, SVG del logo, todos los logos de clientes) | Sin recursos fallidos: el rediseño no depende de nada del servidor original |
| Faltan animaciones y carrusel de especialidades (JS externo que no se descargó) | Las 6 tarjetas de servicio se muestran en un grid limpio, sin depender de scripts externos |
| Logo no visible (SVG con ruta rota) | Logo del SVG del clon (`ilimago-blanco.svg`) funciona en navbar y footer |
| Sin favicon — 404 en escritorio | Favicon inline SVG (data URI) — sin 404 |

## Qué se cambió (mismo contenido, otra forma)

- **Paleta:** el original usa fondo claro con elementos oscuros. El rediseño usa fondo negro (`#0a0a14`) con acento azul eléctrico (`#3d6bff`), en línea con el estilo de agencia premium.
- **Tipografía:** Plus Jakarta Sans (misma que el CSS original del clon, que usa `"Plus Jakarta Sans", sans-serif`).
- **Estructura:** el original separa las especialidades, los planes de MKT, los planes de diseño gráfico y los clientes en secciones distintas. El rediseño integra todo en una sola página con scroll: Hero → Servicios → Planes → Clientes → Nosotros → Footer.
- **Planes de diseño gráfico:** el original tiene una segunda sección de planes (Emprende / Impulsa / Crece de diseño gráfico). En el rediseño se omite esta sección para no saturar la página; solo se mantienen los 3 planes de MKT digital con la calculadora de inversión. Los planes de diseño pueden sumarse en una versión posterior.
- **Logos de clientes:** el original usa un carrusel animado con duplicados (56 apariciones de 28 logos). El rediseño usa un ticker CSS con los 28 logos originales (sin duplicación visual de nombres).

## Qué se agregó (no existía en el original)

- **Calculadora de inversión** ("¿Cuánto es tu inversión mínima?"): elemento único. El usuario elige un plan y ve en tiempo real el precio mensual, los meses de permanencia y la **inversión mínima total** calculada, con botón de WhatsApp prellenado por plan. Ningún sitio anterior del estudio tiene esto.
- **Barra fija en móvil** con accesos directos a WhatsApp, Llamar (`tel:`) y Maps.
- **Datos estructurados JSON-LD** (`ProfessionalService`) con dirección, teléfono, email y redes.
- **Open Graph** con título, descripción e imagen.
- **Favicon inline SVG** (sin dependencias externas).
- **Contador en Hero:** `+10 años` y `28+ marcas` como prueba social rápida.

## Qué se quitó o no se usó

- Los planes de diseño gráfico (Emprende / Impulsa / Crece), que en el original ocupan una sección completa. No se inventó ningún dato sobre ellos; se pueden reintegrar si el cliente los requiere.
- El formulario de contacto (el original tiene un formulario PHP que no funciona en el clon local). Se reemplaza con WhatsApp directo y datos de contacto en el footer.
- El mapa embed y la sección "Hablemos de negocios" con el formulario complejo.
- La página de aviso de privacidad (se puede agregar como página separada si se necesita).

## Qué se conserva al pie de la letra

- **Todos los textos del sitio:** tagline ("Agencia creativa de comunicación"), subtítulo, descripciones de cada servicio, misión, visión, valores.
- **Todos los precios:** Plan Impulsa $6,790/mes (3 meses), Plan Acelera $9,990/mes (6 meses), Domina el Mercado $19,990/mes (12 meses).
- **Todas las características de cada plan:** las listas de incluidos se copian exactamente del crudo.json.
- **Contacto:** WhatsApp `5215652421069`, email `hola@ilimago.com.mx`, dirección `Av. Miguel Ángel de Quevedo 785, Coyoacán 04330 CDMX`.
- **Los 28 logos de clientes**, con sus nombres y archivos del clon.
- **Los 6 servicios** con foto, nombre y descripción originales.

## Pendiente de confirmar con el cliente

- **Planes de diseño gráfico:** confirmar si quiere incluirlos en el sitio (Emprende $9,000, Impulsa $16,500, Crece $22,400 — precios del crudo.json).
- **Foto de portada para OG:** el rediseño usa `general/marketing.webp` como imagen OG; confirmar si prefieren el logo o una foto diferente.
- **Behance:** en el footer original hay un enlace a Behance (ilimago). No se incluyó en el rediseño por falta de espacio; confirmar si quieren mantenerlo.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/assets/img/` (`publicDir: '../sitio/assets/assets/img'` en `rediseno/vite.config.ts`)
