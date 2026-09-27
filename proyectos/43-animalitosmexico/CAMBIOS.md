# Animalitos México: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://animalitosmexico.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/43-animalitosmexico/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 43-animalitosmexico`) |

## En una línea

Es la misma red de seis hospitales, con sus servicios, direcciones, horarios, teléfono y fotos. Cambia la forma:
- una sola página donde encuentras el Animalitos más cercano en un plano a escala;
- desde ahí agendas por WhatsApp con el hospital y el motivo escritos;
- el teléfono se puede tocar para llamar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 77 imágenes rotas y 56 a 75 recursos fallidos | 0 rotas, 0 errores, 0 fallidos |
| Fotos de sucursal como fondos CSS (una de 9205 px, 1.7 MB) | 6 copias .webp (2.15 MB → 0.27 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Hospital y las seis páginas de sucursal se juntan en una página. El texto repetido de cada sucursal ("¿Ya conoces nuestro hospital…? Visítalo y encuentra todo lo que necesitas…") se resume en la ficha del buscador.
- El H1 pasa a ser "Hospital veterinario 24 horas en CDMX, Edomex y Puebla". Su sitio tenía dos H1 en la portada.
- La lista de servicios es la suya:
  - se agregan "Resonancia" (su menú), "Grooming" y "Tienda" (sus "Conoce nuestros servicios");
  - "Cuidado Dental" y "Especialidades" salen una sola vez (su sitio los repite).
- WhatsApp:
  - su botón usa `phone=5215545527129`; aquí `wa.me/525545527129` (formato actual, mismo número);
  - se agregan mensajes prellenados.
- El teléfono 55 9025 2000 es un enlace `tel:` en todos lados.
- "Resonacia" → "Resonancia"; "desparacitaciones" no se usa.
- Direcciones con formato uniforme ("Méx" → "Edomex", "Cdad." → "Cd.").

## Qué se agregó (no existía en el original)

- **"Un Animalitos® cerca de ti"**: plano a escala con las coordenadas de sus enlaces de Google Maps, círculos de 2, 5 y 10 km, "Usar mi ubicación" (geolocalización del navegador; no se guarda ni se envía), lista ordenada por distancia, ficha por hospital con motivo de cita y WhatsApp. Textos nuestros:
  - "Toca un hospital en el plano…";
  - "Tu ubicación solo se usa en esta página…";
  - la nota "Posiciones a escala…";
  - "¿Para qué es la cita?";
  - el mensaje "Hola, quiero agendar una cita en Animalitos X. Motivo: Y.";
  - "¿Tienes una emergencia? Este hospital está abierto las 24 horas…";
  - la nota de Prado Norte.
- Títulos y microcopy:
  - "Seis hospitales Animalitos®: desde una vacuna…" (armado con su texto de sucursal);
  - "¿Cuál me queda más cerca?";
  - "Para agendar, sus asesores confirman la disponibilidad por teléfono…" (de su página Agenda una cita);
  - "Seis hospitales, cinco abiertos las 24 horas";
  - "Tomógrafo en Animalitos Prado Norte" (deducido del nombre del archivo `pradomo1`, fondo de la página de Prado Norte).
- Barra fija en el celular, JSON-LD `Organization` con seis `VeterinaryCare` (dirección, coordenadas, teléfono y 24 horas donde aplica), Open Graph y favicon.

## Qué se quitó o no se usó

- Las fotos de banco (retratos de estudio de mascotas, veterinarios con guantes, cirujanos, el banner de resonancia), las capturas de Google Maps y los iconos.
- Los carruseles, los GIF de "scroll down", el formulario de cita (queda WhatsApp y teléfono), Google Tag Manager y el enlace a Tomógrafo/Resonancia como páginas aparte.
- La dirección de Polanco en el pie como si fuera la única.

## Qué se conserva al pie de la letra

- "Un Animalitos® cerca de ti", "De grandes a pequeñas necesidades", "Desde consulta médica general hasta especialidades y urgencias", "Tecnología e instalaciones para cuidar a tu mejor amigo" y "Un equipo de auténticos pet-lovers expertos en cada área".
- Las seis direcciones, sus horarios ("24 Horas" y Prado Norte "9:00 am a 7:00 pm"), el teléfono 55 9025 2000, sus enlaces de Google Maps y redes, y los motivos de su formulario.

## Pendiente de confirmar con el cliente

- Si el WhatsApp 55 4552 7129 atiende a todos los hospitales o hay uno por sucursal.
- Días de Prado Norte (solo publica "9:00 am a 7:00 pm"), y si el nombre "24 horas" de su ficha de Google Maps es correcto.
- Qué hospital tiene tomógrafo, resonancia e hidrocaminadora; la foto del tomógrafo se atribuye a Prado Norte por el nombre del archivo.
- Fotos del hospital de Puebla (su página usa las de Vértiz) y más fotos con mascotas.
- Si tienen correo de contacto para publicar.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el plano: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
