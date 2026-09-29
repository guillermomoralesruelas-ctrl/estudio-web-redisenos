# Gimnasio Befit: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://befit.mx/ |
| Método | **1.2 en la nube**: el clon (Next.js) solo traía el logotipo; las fotos reales se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/449-gimnasiobefit/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 449-gimnasiobefit`) |

## En una línea

El mismo gimnasio de dos sucursales en Mazatlán, con sus precios, clases y planes, en una página donde eliges lo que quieres entrenar y ves qué sucursal te conviene.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las imágenes pasan por el optimizador de Next.js (`/_next/image`), que no existe fuera de su servidor: 13 rotas y 21 recursos fallidos | Copias .webp locales: 0 rotas, 0 fallidos |
| Sin WhatsApp | Botón de WhatsApp en toda la página (ver pendiente abajo) |

## Qué se cambió (mismo contenido, otra forma)

- "Nuestras instalaciones" y "Elige tu plan" se juntaron en "¿Qué quieres entrenar?": cada sucursal con su foto, su mensualidad, lo que incluye, su dirección y su mapa.
- Los planes semanal, quincenal, 30 visitas, anual y visita quedaron en "Si no quieres pagar el mes".
- Las seis clases quedaron en una lista junto a la foto real de funcional.

## Qué se agregó (no existía en el original)

- **"¿Qué quieres entrenar?"** (elemento memorable): fichas con los servicios; cada sucursal dice si tiene lo elegido o qué le falta, y se marca la que conviene con su ahorro. El WhatsApp lleva la sucursal y las clases.
- Textos nuestros: el H1, las entradas de cada sección y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Sucursales), enlaces a Google Maps de cada sucursal, JSON-LD (`Organization` con dos `ExerciseGym`) y Open Graph.

## Qué se quitó o no se usó

- Las fotos de banco (modelo en la portada, box, crossfit, zumba, zumba step y spinning).
- "Tenemos tres sucursales" en la sección de planes (su sitio lista dos).
- La página "Promociones" (solo tiene un cartel) y el crédito de la agencia.

## Pendiente de confirmar con el cliente

- **Teléfonos y WhatsApp:** su sitio no publica WhatsApp y los dos teléfonos tienen 9 dígitos (669-52-10-10 y 669-83-28-35): les falta uno. Por regla se usó el de Real del Valle como WhatsApp, pero ese enlace no va a funcionar hasta tener el número correcto.
- Horarios de las clases y en qué sucursal se da Zumba Step.
- Si el plan anual y los de 30 visitas aplican en las dos sucursales, y si Real del Valle cobra inscripción.
- En qué sucursal está la zona de pesas de la portada (morado y amarillo).
