# Galo's Pilates Studio: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://galostudios.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/443-galospilates/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 443-galospilates`) |

## En una línea

Sitio bien construido (Vue/Vite con sistema de reservas propio). El rediseño conserva toda la información pública y el CTA a la plataforma, agrega meta description, JSON-LD y sección de clases detallada.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Clon es un sitio dinámico (Vue/Vite): la agenda no funciona localmente | El rediseño no replica la agenda (es dinàmica/SSR); enlaza directamente a galostudios.com/#agenda |
| Sin meta description (campo vacío en todas las páginas) | Agregada en `index.html` |
| Sin JSON-LD | Agregado: tipo `ExerciseGym` con catálogo de servicios |
| Sin dirección publicada en el sitio | Campo `addressLocality` en JSON-LD con Oaxaca de Juárez |

## Qué se cambió (mismo contenido, otra forma)

- Paleta: deep navy `#1a1a2e` + teal-sage `#4a8b7a` (vs. azul del original)
- Tipografía: Raleway (titulares) + Source Sans 3 (cuerpo)
- Las tarjetas de coach tienen toggle "Ver info / Ver foto" que muestra la imagen del carnet del coach

## Qué se agregó (no existía en el original)

- Sección "Clases" con descripción de los 10 tipos
- Sección "Espacios" (Tapete 1, Tapete 2, Máquinas) — datos del sitio real
- JSON-LD `ExerciseGym` con catálogo de servicios
- Meta description (155 caracteres)
- Open Graph completo
- Barra móvil fija (Mi cuenta + Reservar)

## Qué se quitó o no se usó

- Agenda dinámica: imposible de replicar en estático (Vue/Vite + API propia)
- Logo (URL externa: `galostudios.com/brand/logo-galo-blue-20260505.png`, no descargado en el clon)
- Sistema de login/registro (interactivo, no aplica en rediseño estático)

## Datos del negocio

| Campo | Original | Rediseño |
|---|---|---|
| Nombre | Galo's Pilates Studio | Igual |
| Ciudad | Oaxaca de Juárez, Oaxaca | Igual |
| Teléfono | — (no publicado) | — |
| WhatsApp | — (no publicado) | — |
| Email | — (no publicado) | — |
| Dirección | — (no publicada) | [PENDIENTE] |
| CTA principal | galostudios.com/register | Igual |

## Imágenes

| Imagen | Archivo |
|---|---|
| Hero (equipo) | `coachs-hero-BZ7kW-nK.jpg` |
| Joselline (full) | `coach-joselline-lopez-D9--gA93.jpg` |
| Gabriel (full) | `coach-gabriel-villegas-7j1ceYH1.jpg` |
| Karla (full) | `coach-karla-santiago-D8uUeuqi.jpg` |
| Mónica (full) | `coach-monica-crespo-QHmHVKMN.jpg` |
| Info cards (×4) | `Informacion%20coach%20...` (literal %20 en filename → `%2520` en URL) |
| Avatars (×4) | `coach-...-avatar-....jpg` |

El logo (`/brand/logo-galo-blue-20260505.png`) no está en el clon — se usa el nombre de texto.

## Pendiente de confirmar con el cliente

- ¿Cuál es la dirección física del estudio?
- ¿Tienen teléfono, WhatsApp o correo de contacto?
- ¿Monserrath Ortiz forma parte del equipo visible o es coach invitado?
- ¿Quieren compartir el logo para usarlo en el rediseño?

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/build/assets/` (`publicDir` en `rediseno/vite.config.ts`)
