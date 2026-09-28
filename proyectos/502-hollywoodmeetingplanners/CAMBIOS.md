# Hollywood Meeting Planners: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hollywoodencancun.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/502-hollywoodmeetingplanners/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 502-hollywoodmeetingplanners`) |

## En una línea

Es la misma productora, con sus servicios, sus 13 temáticas, sus fotos de eventos, sus preguntas frecuentes y sus teléfonos. Cambia la forma: todo en una página y, con "Tu evento en la marquesina", cada cliente arma su evento en una marquesina de cine y lo manda a cotizar por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 1 imagen rota en celular; fotos en carruseles, servicios como imágenes con marco de boleto | 0 imágenes rotas, 0 errores, 0 recursos fallidos, 0 desbordes, 1 H1; 7,426 px en escritorio y 11,413 px en celular |
| 38 de 43 imágenes de la portada sin texto alternativo | Las 23 imágenes con `alt` descriptivo |
| Elementor con 41 hojas de estilo y 31 scripts, chat Tawk y widget de llamada en inglés | Sin scripts de terceros; 24 fotos .webp (2.0 MB, antes 4.3 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Los seis servicios (fiestas tema, bodas, actividades grupales, entretenimiento, otros servicios y diseño floral) con sus textos resumidos y sus listas, cada uno con una foto propia en lugar de la tarjeta-boleto.
- La lista de "Otros servicios" junta "Staff para grupos" y "Animadores" en una línea.
- La lista de bodas sale de su respuesta "¿Qué incluye una boda destino?".
- "Mariachis, ballet mexicano, maya o tropical y guitarristas de flamenco" sale de la portada; los "animales domesticados para fotografías" no se incluyeron.
- Se corrigieron "Dseño temático" y "Rviera Maya" (no se usan esos textos), y mayúsculas de sus preguntas frecuentes.
- La galería usa 12 de sus 21 fotos de eventos (7 en celular).

## Qué se agregó (no existía en el original)

- **"Tu evento en la marquesina"**: tipo de evento (noche temática, boda, grupo de incentivo, convención, team building, lanzamiento: los que nombra su sitio), sus 13 temáticas o "a tu medida", destino (Cancún, Riviera Maya, Mérida o por definir), invitados y mes. Aparece en letras sueltas en una marquesina con focos, y el WhatsApp lleva los cinco datos. El valor inicial de 150 invitados es solo un ejemplo editable.
- Textos nuestros: la bajada de la portada, "Tu evento en la marquesina" y su explicación, "Escenografía, luz y show, montados por su equipo", "De Los Ángeles a la Península de Yucatán", el texto de contacto, los botones y los mensajes de WhatsApp; los textos alternativos de las fotos describen lo que se ve.
- Barra fija en el celular: WhatsApp, Llamar y Cotizar (a la marquesina).
- JSON-LD `Organization` con sus tres teléfonos, correo, cobertura y redes (su JSON-LD actual tiene el nombre y el logo vacíos). Open Graph con la foto de una gala.
- **Sin mapa:** su sitio no publica dirección ni tiene mapa, así que no hay iframe ni enlace a Google Maps (sería inventar la ubicación).

## Qué se quitó o no se usó

- Las tarjetas-boleto de servicios (foto con código de barras), el logo en marquesina (se usa el favicon y el nombre con letra), los fondos de palmeras, cortina roja y brillos, y las imágenes "5" y "Espectáculos corporativos".
- "Excelencia en servicio 4.9 / Clientes felices / Empresas recomendadas": su sitio no dice de dónde sale el 4.9.
- El formulario, el chat, el widget "we call you back", la versión en inglés y los enlaces a términos y aviso de privacidad.

## Qué se conserva al pie de la letra

- WhatsApp (52) 998 845 8951; teléfonos (52) 998 845 8951, (52) 998 386 8210 y +1 657 293 4945; correo hudsons@hudsons.mx; Facebook y X.
- Más de 40 años, originaria de Los Ángeles, 22 años en Cancún, Mérida y la Riviera Maya, y 4,700+ eventos organizados.
- Sus 13 temáticas en su orden, sus seis preguntas frecuentes y sus cuatro razones para elegirlos.

## Pendiente de confirmar con el cliente

- Si publican una dirección u oficina para mostrar en un mapa, y su horario de atención.
- El correo: hudsons@hudsons.mx es de otro dominio; si tienen uno con hollywoodencancun.com.
- Qué temáticas corresponden a las fotos de la galería (no se rotularon para no adivinar) y si pueden nombrar clientes o recintos.
- Si tienen Instagram (su sitio solo enlaza Facebook y X).
- De dónde sale el 4.9 de su portada.

## Dónde está cada cosa

- Textos, servicios, temáticas, galería y preguntas: `rediseno/src/data/content.ts`
- Diseño, secciones y "Tu evento en la marquesina": `rediseno/src/App.tsx`
- Colores, fuentes, la marquesina con focos y las letras: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
