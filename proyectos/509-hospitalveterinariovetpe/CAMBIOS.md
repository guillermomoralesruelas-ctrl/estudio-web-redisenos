# Hospital Veterinario VetPets: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hospitalesvetpets.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/509-hospitalveterinariovetpe/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 509-hospitalveterinariovetpe`) |

## En una línea

El mismo hospital, sus textos, sus cuatro sucursales, sus teléfonos y sus fotos, en una sola página que en una urgencia dice a dónde ir y a quién llamar, con la hora de Guadalajara, y con cada teléfono listo para marcar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| WordPress con Divi, contadores animados, dos videos y los muros de Facebook e Instagram incrustados (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos |
| Las fotos de sucursales pesan hasta 2.4 MB (PNG) | Copias .webp de hasta 900 px: 5.4 MB → 1.3 MB (`rediseno/fotos-web.mjs`) |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, servicios, sucursales y contacto (que repetían el mismo bloque de sucursales) en una sola página.
- Los cuatro servicios en tarjetas con sus viñetas; las sucursales con foto, dirección, teléfonos que se tocan para llamar y mapa.

## Qué se agregó (no existía en el original)

- **"¿Es una emergencia?"** (elemento memorable): tres botones ("Es una emergencia", "Cirugía o endoscopia", "Consulta, vacuna o desparasitación") y la hora de Guadalajara en vivo; en urgencia y cirugía manda a Naciones Unidas (urgencias 24/7, servicio de hospital) con sus dos teléfonos en grande y el mapa; en consulta muestra las cuatro sucursales, cada una con su estado (abierta 24 horas, Acueducto abierta o cerrada según su horario de 9 a 21 h, o "horario no publicado").
- Textos nuestros: la entrada del selector, las descripciones de cada botón, "Ve a Naciones Unidas", "llama mientras vas en camino", los estados de horario, "Nuestras sucursales en Zapopan", "Tres están dentro de PETCO" y los textos de los botones.
- Botón rojo "Urgencias 24/7" en el encabezado y en la barra fija del celular (llama a Naciones Unidas); enlaces a Google Maps de cada sucursal.
- JSON-LD con las cuatro sucursales como `VeterinaryCare` (dirección, teléfono y horario donde se publica); Open Graph y meta description; `alt` en todas las fotos.

## Qué se quitó o no se usó

- Los muros de Facebook e Instagram, los dos videos y los contadores animados.
- "Somos la mejor opción para ti" y "Miles de casos de éxito".
- La foto de la sucursal "Cañadas" y la de "Real Center" como fotos de sucursal: su sitio no da dirección de Cañadas ni dice si Real Center es Bosque Real; van en "Instalaciones de primera" sin nombre.

## Qué se conserva al pie de la letra

- "Medicina veterinaria con calidad humana", su texto de presentación, +15 años y los cuatro servicios con sus viñetas.
- Direcciones y teléfonos de Naciones Unidas (33 3682 2817 y 33 3110 6394, urgencias 24/7), Acueducto (33 3611 2596, lunes a domingo de 9 a 21 h), Bosque Real (33 3658 7307) y Ávila Camacho (33 1578 6909).
- WhatsApp 33 1863 5121, Facebook e Instagram.

## Pendiente de confirmar con el cliente

- **Quinta sucursal:** su contador dice 5 sucursales en Zapopan y tiene fotos de "Cañadas" y "Real Center", pero solo publica 4 direcciones.
- **Horarios** de Bosque Real y Ávila Camacho (no se publican).
- Si las cirugías y endoscopias se hacen solo en Naciones Unidas (el sitio solo dice "servicio de hospital" en esa sucursal).
- Si el WhatsApp 33 1863 5121 atiende urgencias.
- Fotos de Bosque Real.

## Dónde está cada cosa

- Sucursales, servicios y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el selector de emergencias: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
