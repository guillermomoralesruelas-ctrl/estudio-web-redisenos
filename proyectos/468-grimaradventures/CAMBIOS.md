# Grimar Adventures: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://playamarietas.mx/ |
| Método | **1.2 en la nube**: el clon no trae las fotos de los tours; se bajaron de `playamarietas.mx/uploads/` a `assets/originales/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/468-grimaradventures/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Los mismos cuatro tours en una página, con sus fotos reales de Playa Escondida, las ballenas y sus lanchas, y una calculadora "¿Colectivo o privado?" que le dice a cada grupo qué le sale mejor y lo manda por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 27 recursos fallidos y sin las fotos de los tours (su sitio las carga desde `/uploads/`) | 12 fotos propias y el logotipo en `assets/originales/`, convertidas a .webp por `rediseno/fotos-web.mjs` |

Las fotos se eligieron por sus datos EXIF: tomadas con iPhone 11 Pro y 15 Pro Max, lentes Ray-Ban Meta y una Fujifilm X-T4. Tres sin EXIF (el grupo, la pareja y la lancha en el Puente de Piedra) muestran su lancha y su gente.

## Qué se cambió (mismo contenido, otra forma)

- Inicio, el listado de tours, las 4 fichas de tour y contacto se juntan en una sola página.
- Cada tour es una tarjeta con duración, grupo, dificultad, edad, qué incluye y precio promocional junto al regular tachado, como en su sitio.
- La reserva sigue en su sistema en línea (botón "Detalles" de cada tour y "reserva en línea en su sitio"); el rediseño agrega el camino por WhatsApp.
- La duración del tour de ballenas se toma de su ficha ("1 hrs 30 min"); el texto de la misma ficha dice "1 hora con 40 minutos" (ver `OPORTUNIDADES.md`).

## Qué se agregó (no existía en el original)

- **"¿Colectivo o privado?"** (elemento memorable): eliges el tour y cuántos van (y niños de 0 a 3 años, con su 80% de descuento en colectivo, en los tours que lo permiten). Compara el total en colectivo contra la lancha privada más chica que les queda, marca "Te conviene" en la opción más barata, dibuja la lancha de 8 lugares con los asientos ocupados y arma el mensaje de WhatsApp ("Hola Grimar, quiero reservar Tour Playa Escondida: 4 adultos, en Colectivo…"). Usa solo sus precios publicados al 2026-10-10 y avisa que el precio final depende de fecha y horario.
- Textos del estudio: "Cuatro formas de salir al mar" y su entrada, "¿Colectivo o privado?" y su explicación, "Así va tu lancha", "Capitanes y guías con nombre", "Tres pasos", "Antes de subir a la lancha", "Salimos de Punta de Mita", los pies de foto y los textos alternativos.
- Enlace "Cómo llegar" (búsqueda en Google Maps: su sitio no publica la dirección exacta), barra fija en el celular (reservar, llamar, cómo llegar), JSON-LD `TravelAgency`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- La foto aérea de Punta Mita: sus datos EXIF son del fotógrafo Petr Myska; no se usa sin confirmar la licencia.
- Las siluetas en PNG de 1536×1024 que parecen hechas con IA.
- La sección "TOURS SUGERIDOS" del inicio, que muestra "No se encontraron tours".
- El formulario "Envíanos un mensaje" de contacto: se reemplaza por WhatsApp y correo (la reserva sigue en su sistema).

## Qué se conserva al pie de la letra

- Nombre, logotipo, teléfono y WhatsApp, correo, horario (lunes a domingo, 7:00 a 20:00), redes y TripAdvisor; los 4 tours con sus descripciones (resumidas), qué incluye, notas, duraciones, edades y todos los precios regulares y promocionales por modalidad; los tres pasos para reservar; las reglas (bloqueador, sin calzado, drones, cancelación con 24 h) y la advertencia para embarazadas y personas con problemas cardiovasculares; y 4 reseñas de clientes con su nombre.

## Pendiente de confirmar con el cliente

- **Duración del tour de ballenas**: 1 h 30 min o 1 h 40 min.
- **Dirección de la oficina** en Punta de Mita, para poner un mapa exacto.
- Si el tour de ballenas es privado o también colectivo (su título dice "Privado" y ofrece colectivo).

## Dónde está cada cosa

- Textos, tours, modalidades y precios: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp, el logotipo, el ícono y la imagen para compartir)
