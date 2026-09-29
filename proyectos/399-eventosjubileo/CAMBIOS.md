# Eventos Jubileo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://eventosjubileo.com/ |
| Método | **1.2 en la nube**: el clon (GoDaddy) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/399-eventosjubileo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 399-eventosjubileo`) |

## En una línea

El mismo salón de Azcapotzalco, con sus dos salones, su paquete, sus horas base y sus espacios, en una página donde eliges qué celebras y cuántos invitados y ves qué salón te toca.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Fotos y JavaScript en el CDN de GoDaddy: recursos fallidos en el clon | Copias .webp locales: 0 rotas, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- "Nuestros salones" y "Horarios" se volvieron "Arma tu evento".
- Los bloques "Nuestros paquetes" (incluye, menú, horarios) quedaron en "Qué incluye el paquete".
- Las galerías de 62, 28 y 32 fotos se redujeron a las del tipo de evento elegido y cuatro espacios.

## Qué se agregó (no existía en el original)

- **"Arma tu evento"** (elemento memorable): tipo de evento e invitados; dice el salón, muestra las horas base y cambia las fotos. El WhatsApp lleva los datos.
- Enlace a Google Maps y los dos WhatsApp que publican.
- Textos nuestros: el H1, la entrada de la portada y de las secciones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `EventVenue` y Open Graph.

## Qué se quitó o no se usó

- Imágenes de banco (Vecteezy: DJ y muro de textura) e íconos.
- Los videos de XV años y empresa (están en su sitio y Vimeo).
- "Único en Azcapotzalco con lobby, balcón y terraza" (no se pudo comprobar).

## Pendiente de confirmar con el cliente

- Su sitio pone "Casa del Rey / hasta 80 invitados" en tres tarjetas y describe dos espacios distintos. Se interpretó: Gran Salón (hasta 260) con lobby, terraza y balcón lounge; Casa del Rey (hasta 80) con salón y balcón con vista. Confirmar.
- Horario de atención por día (su sitio solo muestra "Abre hoy 11:00 a 19:30").
- Precios o rangos de los paquetes.
