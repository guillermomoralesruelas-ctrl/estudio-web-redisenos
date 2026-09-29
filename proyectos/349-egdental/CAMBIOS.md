# EG Dental Clinic: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.egdentalmex.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Idioma | Inglés, como el sitio original (su público son pacientes de EE. UU.) |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/349-egdental/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 349-egdental`) |

## En una línea

De un WordPress con fotos de banco, aviso de cookies y precios repartidos, a una página donde el paciente marca sus dientes en un odontograma y ve el estimado con los precios de la clínica.

## Qué estaba roto o incompleto en el clon

- El clon no trae su logo en imagen y la mayoría de las fotos son de iStock (con metadatos de Getty) o de banco.
- El sitio en vivo pide un captcha (SiteGround) a los lectores automáticos: la página completa de precios, contacto, transporte y hoteles no se pudo leer (2026-09-29). Se usaron `original.html` y `crudo.json`.

## Qué se cambió (mismo contenido, otra forma)

- Los 12 precios de "General treatment services" en una tabla limpia y dentro del estimador.
- Los seis "Why choose EG Dental" en cuatro tarjetas (Zona Río, ayuda para cruzar, oficina moderna, seguro).
- El equipo en lista con sus cargos, sin los apodos ("Implant Magician", "Lovely Luminary").

## Qué se agregó (no existía en el original)

- **Odontograma y estimado**: 32 dientes con numeración universal, tratamientos con precio, limpieza, extras y recibo con total en dólares, que se manda por WhatsApp.
- WhatsApp (pendiente, ver abajo) y barra fija en el celular (Call, WhatsApp, Map).
- JSON-LD de tipo `Dentist` con coordenadas, rango de precios y redes; Open Graph; ícono con sus iniciales.

## Qué se quitó o no se usó

- Todas las fotos de banco e iStock; el aviso de cookies; el formulario (se sustituye por teléfono, WhatsApp y correo).
- Textos genéricos sobre la ciudad de Tijuana y el costo de vida.
- La lista "Quality · Security · Warranty on dentistry · Low costs" (no explica la garantía).

## Qué se conserva al pie de la letra

- Precios en dólares de su inicio: evaluación $40, limpieza regular $40, semi profunda $90, profunda $80 por cuadrante, resina $70, extracción $120, quirúrgica $160, muela del juicio $240 o $280 impactada, injerto óseo $290, healing pin $80 y blanqueamiento Zoom $350.
- Nombres y cargos del equipo, los dos testimonios de su inicio (John y Judy), su teléfono, correo, redes y su mapa de Google (el mismo iframe).
- Que dicen trabajar con seguros ("We are contracted by your insurance").

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio no publica WhatsApp; se usó el teléfono de EE. UU. (619) 373-8375 como WhatsApp. Confirmar el número.
- **Dirección y horario:** su sitio no los escribe (solo el mapa, "Clinica EG DENTAL" en Zona Río).
- Precios vigentes y los de implantes, coronas, endodoncias, dentaduras y postes (la página de precios no se pudo leer).
- Si el injerto óseo y el healing pin se cobran por cada extracción (así lo calcula el estimado).
- Qué seguros aceptan.
- Permiso para mostrar los antes/después (son de su galería) y quién sale en las fotos del equipo.
- Su logo en imagen.

## Dónde está cada cosa

- Textos, precios, tratamientos, equipo y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el odontograma: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
