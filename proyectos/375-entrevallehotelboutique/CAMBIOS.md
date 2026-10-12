# Entrevalle Hotel Boutique: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hotelentrevalle.com/ (y /en). Hecho con Duda, plantilla de Mila |
| Método | **1.2 en la nube** (lote 11): el clon trae solo `investigacion/original.html` y un `sitio/` con 36 imágenes rotas; se leyeron en vivo inicio (español e inglés), habitaciones, restaurante, EVA Restaurante, masaje, bodas, contacto y políticas, y se bajaron 45 fotos propias a 1920 px, el logotipo y los dos sellos de Booking.com a `assets/originales/` |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/375-entrevallehotelboutique/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El hotel de 17 cabañas en la Ruta del Vino en una sola página: habitaciones, EVA Restaurante, masajes y bodas, con un calendario "El año del valle, mes por mes" que dice qué recomienda el hotel para cada mes de boda y cuándo aplican sus condiciones de grupo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 36 imágenes rotas en escritorio, 378 px de desborde horizontal en el celular y 4 H1 | Fotos del sitio en vivo en `.webp` (`rediseno/fotos-web.mjs`), 0 rotas, sin desborde y un solo H1 |

## Qué se cambió (mismo contenido, otra forma)

- Ocho páginas (inicio, habitaciones, dos de restaurante, masaje, bodas, contacto y políticas) se juntan en una página con secciones. "Restaurante" y "EVA Restaurante" eran dos páginas del mismo restaurante con el mismo menú: quedan en una sección.
- Las tarjetas de habitaciones repetidas cuatro veces (y una de 4 personas que decía "dos personas en cama Queen") se vuelven un selector "Para 2 / Para 4" con la descripción correcta de cada una.
- Los textos del inicio que aparecían tres veces seguidos se muestran una vez.
- El reglamento largo de `/politicas` se resume en seis puntos (llegada y salida, cancelación, pagos, estacionamiento, humo y mascotas, descorche) y las preguntas frecuentes se reducen a las útiles para el huésped.
- La portada usa la vista de las cabañas con los cerros del valle.

## Qué se agregó (no existía en el original)

- **"El año del valle, mes por mes"** (elemento memorable): doce meses como racimos o sarmientos; al elegir uno se lee lo que dice el hotel de esa época (recomendado de marzo a octubre, julio y agosto temporada alta de Vendimia). Un control de 1 a 17 habitaciones muestra cuándo la reserva es de grupo (8 o más) y sus condiciones de cancelación, y arma el WhatsApp con mes, año y habitaciones. Todo sale de su página de bodas y de sus políticas.
- Horario del restaurante y menú en PDF junto a sus fotos; sellos de Booking.com 2025 (9.2) y 2026 (9.1) que el hotel ya publica.
- WhatsApp prellenado en cada sección, barra fija en el celular (llamar, WhatsApp, reservar), JSON-LD `Hotel`, title, description e imagen para compartir.
- Titulares cortos y textos alternativos del estudio.

## Qué se quitó o no se usó

- Textos de plantilla visibles ("City skyline / Photo By: John Doe", "Título de diapositiva / Escriba el subtítulo aquí / Botón"), botones vacíos ("Button") y el formulario de contacto.
- El precio "desde $500 / noche": es igual en las dos habitaciones y no dice moneda; el rediseño manda a su motor de reservas para ver precio.
- Fotos de boda que parecen de banco o de otro lugar (`BODA-VALLE.png`, la pareja en la cueva y la portada de bodas) y las capturas de 2021 de baja resolución (salvo la ceremonia en la terraza).
- Iconos, banderas y el sello de "Hecho por mila".

## Qué se conserva al pie de la letra

- Dirección Km 88.9, Carretera Federal 3, C.P. 22766, Valle de Guadalupe; correo entrevallemx@gmail.com; Instagram y Facebook; motor de reservas `reservaonline.support/hotelentrevalle`; enlace de Google Maps.
- Lema "En el corazón de la ruta del vino", textos de presentación, habitaciones, restaurante, masaje y bodas.
- Llegada 15:00, salida 11:00, 17 cabañas, 7 km del centro del valle, políticas de cancelación, grupo y pago.

## Pendiente de confirmar con el cliente

- **Qué número es el WhatsApp.** El texto del sitio y sus políticas dicen WhatsApp 646 288 0526 (el rediseño usa ese), pero todos sus botones de WhatsApp abren el 646 289 8801, que la versión en inglés presenta como número para llamar. Se muestran los dos.
- Precio por noche real y moneda.
- Servicios y precios del spa; paquetes de boda y capacidad del espacio.
- Fotos de bodas propias en mejor resolución.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; medidas de fotos: `rediseno/src/data/fotos.json`.
- Fotos: `assets/originales/` y `assets/web/` (`rediseno/fotos-web.mjs`).
- Capturas: `referencias/capturas-2026-10-12/`.
