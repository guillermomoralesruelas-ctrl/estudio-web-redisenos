# Lukin Music: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.lukinmusic.com/ |
| Método | **1.2**: rediseño con fotos reales del sitio live descargadas a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/387-escuelademusica/rediseno/dist/index.html |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (0 problemas automáticos) |

## En una línea

Los datos del negocio son idénticos (nombre, teléfonos, correo, horarios, planes y profesores); lo que cambió es que el sitio ahora presenta la escuela como foco principal, con fotos reales de alumnos y maestros, sin el ruido del estudio de grabación y la tienda.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Imágenes WordPress rotas (1 rota, 1 recurso con 404) | Fotos descargadas de `lukinmusic.com` y convertidas a .webp local |
| Sitio mezcla escuela, estudio de grabación, distribución musical y tienda en el mismo home | Rediseño enfoca solo la escuela; el estudio y distribución no se mencionan (no son parte del encargo) |
| Navegación con login de WordPress visible | Eliminada; solo secciones de servicio al alumno |
| Alts de imágenes genéricos ("Image 3", "Image 7") | Alts descriptivos en todos los `<img>` |

## Qué se cambió (mismo contenido, otra forma)

- Planes descritos con sus nombres oficiales: Iniciación (4–7 años), Inducción (8–12 años), Instrumento (+12 años)
- Instrumentos listados como píldoras visuales más tres fotos de clase
- Maestros: Fernando Rodríguez y Gustavo Maldonado con sus roles reales
- Horarios completos: Lun–Vie 10:00–13:00 y 15:00–20:00 · Sáb 10:00–17:00
- Google Maps embed con dirección real (Sierra de Tepoztlán 601 Local 6)

## Qué se agregó (no existía en el original)

- Barra fija de WhatsApp en móvil para reservar clase muestra (449-412-1268)
- JSON-LD de tipo `MusicSchool` con nombre, dirección, teléfono y horarios
- Open Graph con imagen hero para compartir en redes
- Favicon inline vacío para evitar 404 en consola
- Paleta azul/dorado coherente (antes el sitio usaba colores mezclados sin sistema)

## Qué se quitó o no se usó

- Sección de estudio de grabación (es un servicio distinto; no parte de la propuesta de escuela)
- Sección de distribución musical
- Tienda y sistema de login de WordPress
- "Últimas Producciones" (músicos, campañas políticas) — no relevante para captar alumnos
- Campañas políticas y jingles — servicio diferente

## Qué se conserva al pie de la letra

- Nombre: Lukin Music
- Teléfonos: 449-379-3452 (fijo), 449-412-1268 (móvil / WhatsApp)
- Correo: fernando.r@lukinmusic.com
- Dirección: Sierra de Tepoztlán 601 Local 6, Bosques del Prado Sur, Aguascalientes
- Nombres de los planes de la escuela
- Edades por plan (4–7, 8–12, +12)
- Evaluaciones semestrales grabadas en estudio
- Nombres de los maestros y sus roles
- Horarios exactos

## Pendiente de confirmar con el cliente

- Si quieren que el sitio nuevo incluya alguna mención al estudio de grabación
- Precio de las clases (no aparece públicamente en el sitio original)
- Si hay más maestros además de Fernando y Gustavo
- Confirmar número de WhatsApp activo (el enlace original usaba wa.me/message/… sin número visible)

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos originales: `assets/originales/` (13 imágenes del sitio live)
- Fotos optimizadas (.webp): `assets/web/` (generadas por `rediseno/fotos-web.mjs`)
- Vite publicDir apunta a `../assets/web` (método 1.2)
