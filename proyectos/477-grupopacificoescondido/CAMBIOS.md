# Grupo Pacífico Escondido: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://grupopacificoescondido.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/477-grupopacificoescondido/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 477-grupopacificoescondido`) |

## En una línea

Mismos datos, textos e imágenes del sitio real. Rediseño visual con paleta marina/dorada y tipografía Playfair + Inter. El elemento nuevo es el filtro interactivo de desarrollos: "¿Qué tipo de lote buscas?".

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 24–26 imágenes rotas (scripts y assets de WordPress no cargados) | No aplica: el rediseño usa solo los archivos realmente descargados |
| 8 errores de consola (JS de plugins WordPress) | Cero errores: sin dependencias de WordPress |
| Contenido repetido 3 veces (carruseles infinitos con datos duplicados) | Una sola instancia de cada sección |
| Mapa OpenStreetMap embebido (script de tercero, 6+ peticiones extra) | Reemplazado por enlace de texto a Google Maps |
| Buscador avanzado de propiedades (requería jQuery + plugins) | Reemplazado por filtro interactivo CSS/React sin dependencias extra |

## Qué se cambió (mismo contenido, otra forma)

- **Carruseles → grids/listas:** las secciones "Razones", "Testimonios" y "Equipo" pasaron de ser carruseles infinitos (con el contenido repetido 3 veces en el HTML) a grids estáticos. El contenido es exactamente el mismo.
- **Buscador avanzado → filtro de categorías:** el buscador con rango de precios y tipo de propiedad se reemplazó por cuatro botones de categoría (Todos / A pie de playa / Vista al mar / Cercano a la playa), más fácil de usar en móvil.
- **Formulario de contacto → CTA directo:** el formulario (no funcional en el clon, requería backend) fue reemplazado por botones directos a WhatsApp y llamada.
- **Información de contacto dispersa → sección única:** el original tenía datos de contacto en tres lugares distintos. El rediseño los unifica en la sección Contacto.

## Qué se agregó (no existía en el original)

- **Filtro interactivo de desarrollos** con React `useState`: las 15 tarjetas se filtran al instante por categoría; cada tarjeta tiene WhatsApp prellenado con el nombre del desarrollo específico.
- **Barra móvil fija (bottom bar):** tres botones: WhatsApp, Llamar y Maps. El original solo tenía el botón flotante de WhatsApp.
- **JSON-LD `RealEstateAgent`** con todos los datos del negocio.
- **Open Graph** completo (title, description, imagen).
- **Favicon** tomado del clon (`cropped-favicon-gpe-e1727991193226-32x32.png`).
- **Un solo H1** (el original tenía múltiples elementos H1).
- **Controles de carrusel accesibles** en el hero (botones con `aria-label`, indicadores con roles `tab`/`tablist`).
- **`prefers-reduced-motion`** en todas las animaciones (filtro, hover, transiciones).

## Qué se quitó o no se usó

- **Logos de marcas/aliados** (brand-1 a brand-18): el crudo.json no aclara qué son; se omitieron.
- **Video de YouTube** (`youtube.com/watch?v=5YF4VxmUp1k`): regla de no scripts de terceros.
- **Mapa OpenStreetMap embed**: reemplazado por enlace a Google Maps.
- **Sección "BOLSA DE TRABAJO" y "SOCIO"**: sin datos de contacto específicos para esas solicitudes.
- **Formulario de contacto**: requería backend PHP.
- **Carrusel de preventa** en el hero (3 propiedades repetidas): absorbido por la sección de desarrollos con filtro.

## Qué se conserva al pie de la letra

- Todos los textos de la misión de la empresa.
- Los 6 servicios de la empresa.
- Los 4 testimonios con sus textos exactos, fotos y roles.
- Los 4 asesores con sus nombres y fotos.
- Las 4 razones para invertir con sus textos e imágenes.
- Los 15 desarrollos: nombre, ubicación, m², categoría, precio desde y estado.
- Todos los datos de contacto: teléfono, WhatsApp, email, dirección, horario y redes.
- Las estadísticas: 15+ proyectos, 700+ clientes, 1,000+ pagos.

## Pendiente de confirmar con el cliente

- Los roles de los asesores (solo se conocen sus nombres; se usa "Asesor inmobiliario").
- El video de YouTube: si el cliente quiere incluirlo, se puede agregar como `<iframe>` sin afectar el resto.
- Los logos brand-1 a brand-18: qué son exactamente (¿aliados, notarías, permisos?).
- La categoría de La Escondida: el crudo.json no la lista en el original (se usa "Vista al mar" por la instrucción del rediseño).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/wp-content/` (`publicDir` en `rediseno/vite.config.ts`)
