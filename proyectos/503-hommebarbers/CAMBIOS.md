# Homme Barbers: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://barberiaencancun.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/503-hommebarbers/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 503-hommebarbers`) |

## En una línea

Misma barbería, mismos precios, paquetes, horario y dirección; cambia la forma: la página baja de 13,000 px a 5,700 en el celular y el cliente compara lo suelto contra los paquetes antes de llegar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 14 imágenes rotas de 28 y 45 errores de consola | 0 y 0 |

## Qué se cambió (mismo contenido, otra forma)

- Servicios y paquetes quedan en la herramienta y en una lista; las páginas de cada servicio se resumen en una frase.
- Horario escrito sin ambigüedad: "Lunes a Domingo 10 a.m.–8:30 p.m. Domingos 6:30 p.m." pasa a "Lunes a sábado 10:00 a 20:30, domingo 10:00 a 18:30".
- Se usa solo el nombre "Homme Barbers" (su sitio también dice "El Taller Barbershop").
- Reseñas con ortografía corregida ("Excelente", "consentirse").

## Qué se agregó (no existía en el original)

- El elemento **"¿Paquete o suelto?"** (`Paquete` en `App.tsx`): selección de servicios, suma suelta, mejor paquete con lo que no cubre, ahorro o sugerencia, y WhatsApp con el pedido.
- Aviso "Abierto ahora / Cerrado ahora" con la hora de Cancún (`abiertoAhora`).
- Enlace de teléfono (`tel:`) y WhatsApp; su sitio pone el teléfono y la ubicación en enlaces que no llevan a ningún lado (`#`).
- JSON-LD `BarberShop` con horario y rango de precios; Open Graph; favicon con el "HB" de su mostrador.
- Textos nuestros: "Barbería en Cancún, sin cita", "¿Paquete o suelto?" y su explicación, "Suelto", "más …", "Te conviene el…", "Pídelo suelto. Por … más…", "Sus paquetes", "Cortes que dominan", "Pasa sin cita", "Escríbenos o llámanos", "Ver precios" y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- Fotos que parecen hechas o editadas con IA (el barbero con mandil, el hombre con copa de 2025), la foto de Cristiano Ronaldo y las de banco (afeitado, corte con peine, barbero junto a un muro de ladrillo).
- El blog ("Las 4 mejores barberías en Cancún", "Cortes de CR7").
- Las estrellas en los nombres de los paquetes.

## Qué se conserva al pie de la letra

- Precios: corte $300, barba $270, ceja o bigote $150, facial $180, greca $130, oídos $130, nariz $130; paquetes Premium $350, Gold $400, Platino $630 y VIP $700 con lo que incluye cada uno.
- "Todos los servicios incluyen bebida, exfoliante y masaje", "sin cita", teléfono, Av. Huayacán, enlace de Google Maps, Facebook e Instagram, estilos de corte y reseñas.

## Pendiente de confirmar con el cliente

- **Nombre**: "Homme Barbers" o "El Taller Barbershop" (las capas de las fotos dicen "El Taller").
- Si el 998 103 3712 recibe WhatsApp, y el nombre de la plaza donde está el local.
- Horario del domingo (se interpretó que cierra a las 6:30 p. m.).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el elemento: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
