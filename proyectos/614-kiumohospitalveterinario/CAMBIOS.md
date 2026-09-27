# Kiumo Hospital Veterinario: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://kiumo.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/614-kiumohospitalveterinario/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 614-kiumohospitalveterinario`) |

## En una línea

Es el mismo hospital con sus textos, fotos, servicios, sucursales y testimonios. Cambia la forma:
- una sola página donde palomeas lo que necesita tu mascota y lo mandas por WhatsApp a la sucursal que elijas;
- el hospital 24 horas se puede llamar en un toque desde cualquier pantalla.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Desborde horizontal de 430 px en el celular | 0 desborde |
| 2 o 3 imágenes rotas | 0 rotas, 0 errores, 0 recursos fallidos |
| Fotos PNG pesadas (recortes del equipo de 470 a 790 KB) | 15 copias .webp (3.75 MB → 0.68 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Servicios, Hospital Veterinario, Spa y Kiumo Check se juntan en una página. Los textos repetidos (los bloques de "¿Qué ofrece Kiumo?" y "Acerca de nosotros" aparecen en varias páginas) salen una sola vez.
- Los botones "Contáctanos", "Agendar visita" y "Realizar pedido", que abrían una ventana con teléfonos, se sustituyen por:
  - el checklist;
  - un WhatsApp por sucursal;
  - "Pedir croquetas a domicilio".
- **Kiumo Check usa el WhatsApp 667 211 6122**, el que publica su propia página. En su pie, el icono de Kiumo Check abre el de La Primavera.
- Todos los teléfonos son enlaces `tel:`. En el sitio original no lo es ninguno.
- Direcciones con formato uniforme ("Calle. Presa Tacotán" → "Calle Presa Tacotán").
- En "Servicio completo" del spa se resume "lo mismo más corte de pelo completo y limpieza de oídos".
- Dos testimonios se muestran recortados, con puntos suspensivos donde se cortan:
  - Ángel M.: se omite "instalaciones muy óptimas para tanto veterinaria como guardería y spa…".
  - Sol M.: los dos puntos "..atentas" quedaron como "…".

## Qué se agregó (no existía en el original)

- **"El checklist de tu mascota"**: perro o gato, nombre opcional, 16 servicios en cuatro grupos, contador, sucursal y WhatsApp con la lista escrita. Textos nuestros:
  - el título y "Palomea lo que necesita tu perro o tu gato…";
  - los nombres cortos de cada casilla y sus detalles, resumidos de sus páginas;
  - "Tu lista", "Aún no palomeas nada";
  - el mensaje "Esto es lo que necesita mi perro…: … ¿Me ayudan a agendar?", que empieza con su propio "Hola, quiero comunicarme con Kiumo Sucursal…";
  - "¿Es una urgencia? No esperes respuesta por WhatsApp: llama a la Sucursal Guadalupe…".
- Títulos y microcopy:
  - "Hospital veterinario y spa para perros y gatos en Culiacán";
  - "Listo para las emergencias que pasan día a día", tomado de su texto;
  - "Piel y pelaje cuidados, sin estrés";
  - "Todo para tu mascota, en un solo lugar";
  - "Visítanos en la que te quede más cerca";
  - "Pedir croquetas a domicilio" (su mensaje "Hola, quiero hacer un pedido de croquetas a domicilio." es nuestro);
  - "Lo básico para tu mascota, cerca de ti".
- Barra fija en el celular. El WhatsApp de la barra y el general van a la Sucursal Guadalupe (667 317 0918); "Llamar 24 h" va al 667 135 8509; "Cómo llegar" abre Google Maps de Guadalupe.
- Google Maps de las cuatro sucursales (búsqueda por dirección), JSON-LD `Organization` con sus sucursales, Open Graph y favicon (el perrito de su logo).

## Qué se quitó o no se usó

- La ventana emergente de contacto, el enlace corto `wa.me/message/…`, los videos de YouTube incrustados, el blog (tres artículos), el carrusel de logos de marcas (quedan como texto), "Próximamente" (Kiumo Check ya abrió) y el crédito "Sitio desarrollado por Ker3".
- El mapa de Google con clave de API y los scripts de Elementor, Facebook Pixel y Google Tag Manager.
- Fotos no usadas: las de los artículos del blog (de banco), las de marcas de alimento, las pequeñas en círculo y la del bulldog recortado con Photoroom.

## Qué se conserva al pie de la letra

- "Más de 25 años de experiencia", "Creamos lazos de lealtad®" y la presentación del hospital.
- Los servicios del hospital (cuidado preventivo, diagnóstico, urgencias, cirugía, dental, farmacia, eutanasia), el spa (perros, gatos, adicionales, martes de gatos), croquetas, farmacia y cuidados de día.
- Tres testimonios (Erick S., Ángel M., Sol M.).
- Las cuatro direcciones, teléfonos y WhatsApp, el correo atencionalcliente@kiumo.com.mx, horarios (lunes a viernes de 8:00 am a 7:00 pm, sábado de 8:00 am a 6:00 pm; Guadalupe 24 horas) y sus redes.

## Pendiente de confirmar con el cliente

- Horario del domingo en Las Quintas, La Primavera y Kiumo Check (no lo publican), y si Kiumo Check tiene el mismo horario que las sucursales.
- Qué servicios tiene cada sucursal: spa, guardería, cirugía y rayos X. El checklist deja pedir cualquiera a cualquier sucursal.
- Qué WhatsApp prefiere como general (se usa el de Guadalupe) y si el 667 211 6122 de Kiumo Check es el correcto.
- Si el "Martes de gatos" sigue vigente y en qué sucursales.
- Nombres y cargos del equipo de las fotos, si quieren mostrarlos.
- Número de la dirección de La Primavera y ubicación exacta de cada sucursal en Google Maps (hoy se busca por dirección).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
