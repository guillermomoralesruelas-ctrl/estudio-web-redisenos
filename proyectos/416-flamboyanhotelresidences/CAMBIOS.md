# Flamboyan Hotel & Residences: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.flamboyan.com.mx/ |
| Método | **1.2 en la nube**: el clon no traía fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/416-flamboyanhotelresidences/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo hotel, con sus fotos, sus 14 apartamentos, precios, servicios y contacto, en una sola página en español con "Sus 14 apartamentos, a escala" (cuadros del tamaño de cada apartamento que se encienden según cuántos son y qué buscan).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin fotos (las carga el CDN de Mirai) | 26 fotos reales bajadas del sitio a `assets/originales/`, servidas como .webp; 0 rotas |
| 5,920 px de desborde en escritorio y 6,810 px en el celular | 0 desborde |
| 44 errores de consola (motor de reservas, Elementor, chat de IA) | 0 errores, sin scripts de terceros |

## Qué se cambió (mismo contenido, otra forma)

- Cinco páginas (inicio, ubicación, galería, apartamentos, servicios) quedan en una, en español. Los nombres de los apartamentos se dejan como los escribe el hotel; sus descripciones, que repiten el mismo párrafo largo en inglés, se resumen en español: camas, exterior y tipo de cocina.
- El calendario de Mirai con precios en USD se sustituye por el precio "desde" en MXN de cada apartamento y un correo a reservaciones ya armado; el enlace "Ver fechas" lleva a la ficha del apartamento en su sitio, donde está su motor de reservas.
- Sus "Places of interest" quedan como una lista de distancias con barras.
- Las reseñas de Tripadvisor, que su sitio repite tres veces, aparecen una vez.

## Qué se agregó (no existía en el original)

- **"Sus 14 apartamentos, a escala"** (elemento memorable): cuadros proporcionales a los m² de cada apartamento; personas, exterior y cocina completa encienden los que sirven; ficha con foto, camas, precio y correo prellenado.
- **Próximo Art Walk**: calcula el siguiente jueves de noviembre a junio con la hora de Los Cabos (America/Mazatlan).
- Textos del estudio: el H1 "Flamboyan, hotel y residencias en el Distrito del Arte de San José del Cabo", el subtítulo del hero, "Sus 14 apartamentos, a escala", "Amaneceres y atardeceres sobre San José", "Para que la estancia sea aún más tuya", "Todo a pie, la playa a unos minutos", las etiquetas de los servicios, los resúmenes de los apartamentos, los textos alternativos y el correo prellenado.
- Barra fija en el celular (reservar por correo, llamar a la central, cómo llegar), JSON-LD `Hotel` con coordenadas, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Fotos de actividades y del destino que parecen de banco (yoga, golf, pesca, buggy, cine, Arco, ballena, pelícanos).
- El chat de IA "Sarai", el inicio de sesión y el calendario de Mirai.
- Restos de plantilla en su página de ubicación ("Letraset Ipsum. industry's", "1960s centuries, essentially", "core.label.place_type_count.room").
- Las ofertas (su sitio solo enlaza a una página aparte).

## Qué se conserva al pie de la letra

- Nombre, logotipo, lema "Una puerta al arte, el lujo y la relajación", dirección, teléfonos del hotel y de la central (México y USA), correo, redes.
- Los 14 apartamentos con su máximo de personas, m² y precio "desde" (MXN, 26 de septiembre de 2026); lo que incluyen; los servicios; el descuento del 10% por reservar en su web.
- El texto del Art Walk, el de la colección de Mónica Andrade y las dos reseñas.

## Pendiente de confirmar con el cliente

- Si prefieren que el botón principal lleve a su motor de reservas en lugar del correo.
- Si tienen WhatsApp para reservas.
- Los precios: cambian según la fecha; el rediseño muestra los "desde" del día de la captura.
- El restaurante del enlace "Reservar una mesa" (Salón Noción en OpenTable): si es del hotel.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Fotos: originales en `assets/originales/`, copias .webp en `assets/web/` (`rediseno/fotos-web.mjs`)
