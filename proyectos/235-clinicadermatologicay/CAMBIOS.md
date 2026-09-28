# Clínica Dermatológica y Cirugía Estética de Puebla: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.draristidesarellano.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/235-clinicadermatologicay/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismos datos del negocio (doctor, cédulas, dirección, horario, WhatsApp), organización más clara (una página, cinco secciones), y un selector interactivo de equipos que convierte el argumento diferenciador del doctor ("el equipo se elige por el problema") en una herramienta útil para el paciente.

## Qué estaba roto o incompleto en el clon

El clon es limpio (0 desborde, 0 imágenes rotas, 0 recursos 404). Las limitaciones son del JavaScript del sitio original:

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La animación de hojas de otoño (campaña estacional) requería JavaScript del sitio original, no está en el clon | Se omite. No era parte de la identidad permanente del consultorio |
| El carrusel de logos de fabricantes (ticker CSS) no se animaba sin el JS del original | Se reconstruye como fila de logos estáticos en el rediseño |
| Las páginas de procedimientos individuales (rinoplastia, blefaroplastia, etc.) no están en el clon — solo existe el inicio | El rediseño es una sola página con las 5 categorías en pestañas; los procedimientos se listan con → y el botón abre WhatsApp con el nombre ya escrito |
| El sitio tiene múltiples H2 repetidos con el mismo texto ("El Doctor", "El Arsenal") sin jerarquía clara en los estilos del clon | El rediseño tiene 1 H1 y H2 por sección, jerarquía semántica limpia |

## Qué se cambió (mismo contenido, otra forma)

- **Estructura:** el sitio original tiene decenas de subpáginas por procedimiento. El rediseño las condensa en una sola página que presenta al doctor, su arsenal de equipos y las categorías de práctica — sin inventar el contenido de cada procedimiento individual.
- **Jerarquía visual:** el original usa un diseño muy oscuro (#0a0a0a) con texto white y degradados. El rediseño conserva el tono oscuro (noche #0e0e0e) pero con contraste AA verificado y jerarquía tipográfica clara (Cormorant Garamond para títulos, DM Sans para cuerpo).
- **Credenciales:** en el original las cédulas se muestran dispersas en el encabezado y en el pie. En el rediseño se agrupan en la sección "El Doctor" con su descripción.
- **Equipos:** el original los muestra en un carrusel que el clon no anima. El rediseño los organiza por preocupación del paciente (elemento memorable).

## Qué se agregó (no existía en el original)

- **Elemento memorable "¿Qué quieres resolver?":** el visitante elige su preocupación (10 opciones reales del catálogo de la clínica: Arrugas, Flacidez, Manchas, Acné o cicatrices, Calvicie, Piel opaca, Contorno corporal, Cirugía de párpados, Nariz y perfil, Lifting facial) y el sitio muestra qué equipos del arsenal se usan para esa indicación, con foto real del equipo, nombre y tratamiento. El botón de WhatsApp incluye la preocupación elegida ya escrita.
- **Barra fija en el celular:** WhatsApp (principal), Llamar y Cómo llegar — cumple el requisito obligatorio de acciones rápidas en móvil.
- **JSON-LD tipo `Physician`:** el sitio original no publica JSON-LD (confirmado en `investigacion/original.html`). Se agrega con datos verificados del sitio.
- **Open Graph y meta description completos:** el original los tiene en cada subpágina, pero el clon del inicio no los mostraba de forma óptima.
- **Texto "Una clínica propia en Puebla, no un quirófano prestado."** y **"¿Qué quieres resolver?"** son títulos de sección redactados por nosotros. Los demás textos son del sitio original.
- **Fotos .webp optimizadas:** `rediseno/fotos-web.mjs` genera copias en `assets/web/` con la escala correcta; el clon las servía en su tamaño original.

## Qué se quitó o no se usó

- **Animación de hojas de otoño** (`campanas/otono/hoja-*.webp`): es una campaña de otoño estacional, no una pieza de identidad. No se usa en el rediseño.
- **Selector de accesibilidad** del original (lector de pantalla, tamaño de texto, contraste alto, etc.): es un widget propio de su plataforma Astro; el rediseño cumple contraste AA y `prefers-reduced-motion` de forma nativa en el CSS.
- **Subpáginas de procedimientos** individuales: el rediseño es una sola página. El visitante puede escribir por WhatsApp el procedimiento que le interesa; si el cliente aprueba el rediseño, se pueden crear subpáginas en fases posteriores.
- **Reseñas y estrellas:** el original tiene insignia de "Proveedor de Salud Acreditado de México" de Google (YouTube Health Source) y LegitScript, y un JSON-LD con 5 estrellas en subpáginas. No se incluyeron en el rediseño por no estar verificables en el clon.
- **Fotos de antes y después:** el doctor publica decenas de casos reales (rinoplastia, blefaroplastia, lifting) con consentimiento documentado. No están en el clon y no se usan en el rediseño (no se inventan; pendiente si el cliente las quiere incluir en el sitio nuevo).
- **Canal de YouTube:** se enlaza en el pie, no se incrusta ningún video (sin scripts de terceros).
- **Mapa incrustado de Google Maps:** se reemplaza con una foto de la recepción que enlaza a Google Maps (sin iframe ni scripts de terceros, como establece el método 1.1).

## Qué se conserva al pie de la letra

- Nombre completo del doctor: "Dr. Arístides Arellano Huacuja"
- Especialidad: "Cirujano Plástico, Estético y Reconstructivo · F.I.C.S."
- Cédulas: Médico Cirujano D.G.P. 1125959 y Especialidad D.G.P. 0002008
- F.I.C.S.: N.º A11248
- Permiso COFEPRIS: 213300201A2451
- Teléfono: +52 222 237 7494
- WhatsApp: +52 221 155 2228 (wa.me/522211552228)
- Dirección: Calle 20 Sur 2539, Col. Bellavista, 72500 Puebla, Puebla, México
- Horario: Lunes a viernes 8:00–20:00 h · Sábado 8:00–14:00 h · Domingo cerrado
- Google Maps CID: 9525756684129878507
- Aviso legal: "Los resultados de todo procedimiento quirúrgico pueden variar de una persona a otra. La información de este sitio es de carácter divulgativo y no sustituye una consulta médica."
- Todos los nombres de procedimientos y equipos son del sitio original.
- El texto de las secciones "El Doctor" y "El Consultorio" es del sitio original (crudo.json, inicio).

## Pendiente de confirmar con el cliente

- **Fotos de antes y después:** el doctor publica casos con consentimiento en su sitio original; si los quiere incluir en el rediseño, se agregan con sus pies de foto actuales.
- **Horario exacto:** el sitio original publica L–V 8:00–20:00 y S 8:00–14:00. Si ha cambiado, actualizar en `content.ts`.
- **Precio de la consulta:** el sitio original no publica tarifas. Se puede agregar si el doctor lo decide.
- **Subpáginas de procedimientos:** el rediseño es de una sola página. Si el cliente quiere mantener las subpáginas individuales (con su SEO), se pueden construir en una fase 2.
- **Redes sociales adicionales:** el original enlaza YouTube, pero no hay enlace a Instagram ni Facebook en la fuente del clon.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos optimizadas: `assets/web/` (generadas por `rediseno/fotos-web.mjs`; `publicDir` en `rediseno/vite.config.ts`)
