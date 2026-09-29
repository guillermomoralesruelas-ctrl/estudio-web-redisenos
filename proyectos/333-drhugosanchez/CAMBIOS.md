# Clínica del Dr. Hugo Sánchez: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://drhugosanchez.com/ |
| Método | **1.2 en la nube**: el clon (Zyro) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/333-drhugosanchez/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 333-drhugosanchez`) |

## En una línea

La misma clínica dental de Calzada Cuauhtémoc, con su doctor, sus doce servicios, su consultorio y su horario, en una sola página donde el paciente elige qué lo trae y ve los servicios que tienen que ver.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las fotos viven en el CDN de Zyro: imágenes rotas y recursos fallidos | Copias .webp locales: 0 rotas, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- Las cuatro páginas (inicio, equipo, servicios, contacto) quedaron en una.
- Los doce servicios, con textos largos, se resumieron y se agruparon por motivo de consulta.
- "Sobre el Dr. Hugo Sánchez" se resumió: universidad, cédula, actualización y su frase.

## Qué se agregó (no existía en el original)

- **"¿Qué te trae a consulta?"** (elemento memorable): cuatro motivos que muestran tres servicios cada uno; el WhatsApp lleva el motivo.
- Botón de WhatsApp (ver pendiente) y enlace a Google Maps.
- Textos nuestros: el H1, la entrada de la portada y de las secciones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `Dentist` y Open Graph.

## Qué se quitó o no se usó

- Las 12 imágenes de tratamientos: traen credenciales C2PA de imagen generada con IA.
- El banner con texto horneado ("Recupera tu sonrisa, recobra tu esencia").
- Frases de resultado: "resultados garantizados", "técnicas indoloras", "la solución más avanzada", "sonrisa perfecta".
- Los formularios de correo (su sitio no publica un correo de la clínica).

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio no publica WhatsApp. Por regla se usó el teléfono 951 254 4724; confirmar si ese número tiene WhatsApp.
- Precios o rangos de sus servicios más buscados.
- Un correo de contacto.
