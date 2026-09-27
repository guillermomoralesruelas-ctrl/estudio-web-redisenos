# La Grana Eventos: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://lagranaeventos.com/ (WordPress con el tema Avada). Terraza jardín para eventos en Zapopan, a la orilla del Bosque de La Primavera |
| Prioridad | **MEDIA**: el sitio funciona, pero no hay forma de contactarlos con un toque: ni WhatsApp, ni formulario, y sus tres celulares están escritos como texto que no se puede tocar para llamar |
| Contacto publicado | Cel. 33 1047 9460, 33 2183 3491 y 33 1227 2774 ("¡Llámanos!"); Prol. Mariano Otero 4281, Fracc. El Fortín, Zapopan; Facebook "La GRANA Terraza Jardín"; Instagram @lagranaeventos |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio, Paquetes, Ubicación y Contacto) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **No hay cómo escribirles ni llamarles con un toque.** Ninguna página tiene WhatsApp; los tres celulares ("¡Llámanos! 331.227.2774" arriba y los tres de Contacto) son texto sin enlace `tel:`, escritos con puntos (33.1047.9460); la página de Contacto no tiene formulario. | Casi todos los que buscan salón en el celular quieren preguntar disponibilidad por WhatsApp; si tienen que copiar el número a mano, muchos se van al siguiente jardín. | Inicio y `/contacto/` en vivo (0 enlaces `tel:` y `wa.me`; solo el buscador como formulario) |
| 2 | **Google no sabe que es un salón de eventos ni dónde está.** No hay datos estructurados (JSON-LD) de negocio: ni dirección, ni teléfono, ni capacidad, ni precios; la portada tiene 5 H1 (uno por foto del carrusel). La dirección solo está en Contacto. | Menos visibilidad en búsquedas como "jardín para eventos Zapopan" o "terraza para bodas Bosque La Primavera", y en Google Maps sin enlace desde el sitio. | Inicio en vivo (0 `ld+json`, 5 `<h1>`) |
| 3 | **Los paquetes cuestan trabajo de comparar.** Son cinco columnas de viñetas con reglas distintas (Básico solo lunes a jueves y hasta 80 personas; los demás mínimo 100 y por persona) y nadie sabe cuánto le saldría su fiesta sin hacer la cuenta. Hay errores de escritura ("Tifanny", "bricolines"). | Quien no entiende el precio pregunta o se va; en eventos de 100 a 400 personas, la diferencia entre $790 y $1,300 por persona es decisiva. | `/paquetes/` en vivo |
| 4 | **El sitio se ve de 2015.** El pie dice "Copyright 2015"; las fotos del inicio son de 2015 y de WhatsApp de 2018, y la portada es un carrusel. La página Ubicación solo tiene un mapa incrustado. | Para una boda o unos XV años, las fotos son lo que vende; se ven más viejas que el lugar. | Inicio y `/ubicacion/` en vivo |

Nota: **tienen mucho a favor**: precios publicados (pocos salones lo hacen), paquetes completos, capacidad clara (1,500 m², 400 invitados, 150 autos) y un lugar muy bonito junto al bosque. El argumento es **que la gente pueda preguntar por su fecha con un toque y sepa cuánto le sale**.

## Qué le ofrecemos

- "¿Cuánto jardín ocupa tu fiesta?": el cliente mueve el número de invitados, ve sus mesas y la pista en un plano del jardín a escala, elige paquete y día, ve el total y pregunta por su fecha por WhatsApp con todo escrito.
- WhatsApp y llamada a un toque en cada pantalla (barra fija en el celular), dirección con Google Maps.
- Todo en una página, con datos de salón de eventos para Google.
- Cuando nos las den: fotos recientes y las de su galería (XV años, bautizos, montajes).

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp o llamada al 33 1227 2774, o por Instagram @lagranaeventos). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi la página de La Grana y me gustó mucho que publiquen sus paquetes con precios. Les escribo porque noté que en el sitio no hay botón de WhatsApp y que sus teléfonos no se pueden tocar desde el celular para llamar, así que quien busca salón tiene que copiar el número a mano. Les preparé una propuesta de cómo podría verse su sitio, donde el cliente pone cuántos invitados tendrá, ve cómo quedaría su fiesta en el jardín y cuánto le sale cada paquete, y les escribe por WhatsApp desde ahí. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál de sus celulares tiene WhatsApp? ¿En qué horario atienden?
- ¿El Paquete Básico acepta más de 80 personas con la persona extra de $250? ¿Hasta cuántas?
- ¿Siguen vigentes los precios de enero de 2026? ¿Cambian en fin de semana?
- ¿De qué tamaño es el toldo según el número de invitados?
- ¿Nos comparten fotos recientes y de eventos (XV años, bautizos, montajes)?
