# El Patrón Barbería: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.elpatron.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/363-elpatronbarberia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 363-elpatronbarberia`) |

## En una línea

La misma barbería de la Juárez, sus servicios y precios, su equipo, su membresía y su WhatsApp, en una sola página en español, sin widgets ni el contador en cero, con un año de visitas que muestra en qué se va el crédito de la membresía.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Next.js con widgets de reseñas de Google y de Instagram (ver `qa/reporte-rediseno.json` → `antes`); la lectura de Jina salió en inglés | Página nueva en español con los textos de `original.html`, sin scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos |
| El retrato de Yosef trae credenciales C2PA con SynthID (hecho o retocado con IA) | No se usa: Yosef y Uriel van con su inicial |

## Qué se cambió (mismo contenido, otra forma)

- Servicios con foto propia, precio, duración y lo que incluye; la membresía y la lealtad juntas en "Tu año de Patrón".
- Equipo con WhatsApp a cada barbero (su mismo mensaje "Quiero agendar una cita con…").
- Ubicación, horario, preguntas frecuentes y sedes de Querétaro en una sección.

## Qué se agregó (no existía en el original)

- **"Tu año de Patrón"** (elemento memorable): doce meses con un servicio cada uno; se toca un mes para cambiarlo (corte, barba, facial, Experiencia o sin visita) y una cartera muestra cuánto de los $3,480 de crédito se usa y cuánto queda; con "Niños" cambia a $2,000 con $2,640 (doce Patroncitos). El WhatsApp pide la membresía con el plan del año.
- Textos nuestros: la entrada del H1 ("Barbería en Insurgentes Sur 26…"), la de "Tu año de Patrón", "Tu cartera", los mensajes de crédito, "También en Querétaro", la respuesta sobre Visagismo IA (resumida de su sección) y los textos de los botones.
- Barra fija en el celular (Reservar, WhatsApp, Cómo llegar); JSON-LD `BarberShop` con dirección, horario y rango de precios; Open Graph.

## Qué se quitó o no se usó

- El contador "+0 Estilos Transformados", los widgets de reseñas e Instagram y el retrato de Yosef.
- "Somos el referente definitivo…" y "servicio de lujo garantizado" de su FAQ.
- "¡Únete al equipo!" (vacantes).

## Qué se conserva al pie de la letra

- Precios y lo que incluye cada servicio: corte $290, ritual de barba $290, facial premium $290, Experiencia Patrón $800, Patroncitos $220.
- Membresía anual $2,650 ($3,480 de crédito) y de niños $2,000 ($2,640); Lealtad Patrón 7 + 1.
- Equipo (Marcelo, Yosef, Melisa y Uriel con sus especialidades), 4.9 en Google, "reservar con 24 h de anticipación".
- Dirección, horario, su enlace de Google Maps, su sistema de reservas, WhatsApp 55 2860 0906, sedes de Arcos y Zibatá con sus teléfonos, Instagram y Facebook; su mapa (el mismo `iframe`).

## Pendiente de confirmar con el cliente

- **Mapa:** el identificador del lugar y la fecha de su `iframe` ("…0x6b8f3b6c2d1b7b7a…4v1616612345678") parecen de ejemplo; se usó tal cual y el enlace "Ver en Google Maps" usa su enlace corto.
- Si el crédito de la membresía se puede usar en la Experiencia Patrón y en cualquier sede.
- Fotos reales de Yosef y Uriel.
- Número de estilos transformados (su contador está en 0).

## Dónde está cada cosa

- Servicios, membresía, equipo y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "Tu año de Patrón": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
