# Hotel Maela: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hotelmaela.com/ (Duda, reservas con ZaviaERP) |
| Método | **1.2 en la nube** (lote 9): el clon solo trae la portada; se leyeron inicio, habitaciones, experiencias, historia, galería (/bodas) y contacto, y se bajaron 25 fotos y 2 logotipos a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/534-hotelmaela/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El hotel del centro de Oaxaca en una sola página: un selector "¿Cuántos son?" para sus 9 habitaciones, una regla de distancias desde el hotel, qué hacer a pie, el restaurante Lulaa, preguntas frecuentes y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Solo la portada; 21 imágenes rotas y desborde de 378 px en el celular | Sin imágenes rotas ni desborde; `rediseno/fotos-web.mjs` hace las copias .webp |

## Qué se cambió (mismo contenido, otra forma)

- Seis páginas se juntan en una.
- Las 9 habitaciones se ordenan de menor a mayor capacidad; cada una conserva su enlace propio de reserva en ZaviaERP.
- La historia de Santo Domingo y del andador se resumió dentro de "Qué hacer".
- Las preguntas frecuentes de inicio y habitaciones se juntaron (sin la repetida).

## Qué se agregó (no existía en el original)

- **"Oaxaca a la medida de tus pasos"** (elemento memorable): una regla en escala logarítmica con las distancias que publica el hotel (ADO 350 m, centro 400 m, aeropuerto 7 km, Monte Albán 8.5 km, Mitla 45 km) y la lista de lo que queda a unos pasos.
- **"¿Cuántos son?"**: eliges de 1 a 5 personas y quedan las habitaciones que caben; el WhatsApp sale con la habitación y el número de personas.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, reservar), JSON-LD `Hotel`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Los textos de relleno "Título de diapositiva / Escriba el subtítulo aquí / Botón" y "Slide title / Write your caption here", y los botones vacíos "Button".
- El formulario de contacto (se usa WhatsApp, teléfono y correo) y el calendario de check-in/check-out (el botón lleva a su sistema de reservas).

## Qué se conserva al pie de la letra

- Nombre, dirección, teléfono +52 951 516 60 22, WhatsApp +52 951 565 1663, correo, enlaces de reserva de ZaviaERP, mapa e Instagram.
- Camas, capacidad y equipamiento de cada habitación; distancias; servicios; datos históricos de Santo Domingo y del andador.

## Pendiente de confirmar con el cliente

- Tarifas (están en ZaviaERP), horario y menú del restaurante Lulaa.
- Fotos de las suites: en su sitio el archivo "SUITE-YAGUL2" está en la tarjeta de la Suite Mitla y "SUITE MITLA" en la de la Yagul; se respetó la tarjeta donde aparecen (Mitla con dos camas, Yagul con una).
- La foto de "Dos matrimoniales" se llama "hab-2-queen" en su sitio; se respetó su tarjeta.
- Las fotos de la ciudad (Santo Domingo, andador, mole, Jardín Etnobotánico) son las que publica el hotel; confirmar que tiene derechos de uso.
- No hay foto del restaurante Lulaa; se usó una del pasillo del hotel.

## Dónde está cada cosa

- Contenido: `rediseno/src/data/content.ts` (fuente y fecha en el encabezado).
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
