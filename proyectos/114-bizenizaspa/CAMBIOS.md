# Bizé Nizá Spa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.bizenizaspa.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/114-bizenizaspa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 114-bizenizaspa`) |

## En una línea

Es el mismo spa, con sus 43 servicios, precios, duraciones, dirección, horario, teléfono, WhatsApp y fotos. Cambia la forma: las cinco páginas se juntan en una, cada precio se ve sin abrir ventanas, y con "¿Qué quieres consentir hoy?" se encuentra el servicio por la parte del cuerpo y se pide por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 19 de 19 imágenes rotas, 21 recursos fallidos y 27 a 28 errores de consola (rutas `/images/…` absolutas) | 0 rotas, 0 errores, 0 fallidos |
| Sin título ni H1 | Title y description reales, un H1 |
| Página de 1,488 px (escritorio) y 2,595 px (celular) sin imágenes ni estilos | 7,093 px y 11,014 px con todo el contenido de sus cinco páginas |
| 4 fotos originales de 195 KB | 4 copias .webp y el logo, 82 KB en total, con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Corporal, Facial, Rituales, Otros, Promoción y Domicilio se juntan en una página. Los servicios, que en su sitio están en ventanas "Detalles" una por una, se ven en listas por pestaña con precio y duración a la vista.
- El H1 es "Masajes, faciales y rituales en Puebla"; su sitio no tiene H1 ni título.
- Precios: se muestra el de su texto cuando da un rango. Masaje Personalizado "De $670 a $1,950" (su ficha dice además "Costo: 1,045.00"); Yamania "$620 (40 min) o $1,300 (80 min)" (ficha: 1,370.00); Tuchkiin "De $1,115 a $1,650"; Kiimak "Desde $2,950 por 2 personas" (ficha: 4,800.00). Maderoterapia, Depilación y Cepanca, que su sitio muestra en "0.00 MXN", dicen "Pregunta el precio".
- Los nombres de los rituales llevan su tipo junto ("Kiimak, ritual de parejas"), como en su sitio entre paréntesis.
- Se corrigen erratas (escencias, exfoleación, dajará, luosa, disuye, consientes) y se acortan algunas descripciones largas sin cambiar lo que ofrecen.
- Se quitan o suavizan afirmaciones de salud de sus textos: "Beneficios generales del masaje" (circulación, toxinas, dormir mejor), "disminuir o prevenir la aparición de varices" (Xhinte-xitse queda como "Tratamiento para piernas"), "acomodar órganos desplazados" y "eliminar toxinas" (Arihua), "reducir la grasa localizada, combatir la celulitis" (Maderoterapia), "rosácea, telangiectasias" (Chichilihui queda "para pieles sensibles"), "regenera células" y "combatiendo gérmenes" (Presoterapia) y "reducir notablemente los niveles de estrés" (Yamania).
- WhatsApp con `wa.me/522227284970` y mensaje prellenado (su sitio usa `web.whatsapp.com/send?phone=5212227284970?&text=…`). El teléfono lleva `tel:+522222250935` (su sitio no tiene enlaces `tel:`).
- Sin el formulario "Queremos escucharte" ni los formularios de PayPal y de datos para domicilio de cada servicio: todo se pide por WhatsApp.

## Qué se agregó (no existía en el original)

- **"¿Qué quieres consentir hoy?"**: figura en SVG con diez zonas; al elegir una se encienden los servicios que la trabajan y la ficha "Tu elección" arma el WhatsApp con servicio, duración, precio y lugar (spa o casa). **La asignación de cada servicio a una zona es nuestra**, deducida de sus descripciones (por ejemplo Nelpilollia "solo en espalda" → cuello y espalda; Tankugni "neurocraneal" → cabeza; Momotlalo y Presoterapia también en piernas): **[PENDIENTE confirmar con el spa]**. "En mi casa" solo aparece en Sueco, Xanthe y Nanyotl, los tres de su página /domicilio.
- Textos nuestros: "Masajes, faciales y rituales en Puebla", "¿Qué quieres consentir hoy?" y su bajada, "N servicios para…", "Tu elección", "¿Dónde lo quieres? En el spa / En mi casa", "Este servicio se toma en el spa, en Vía Volkswagen 4501.", "Pedirlo por WhatsApp", "Precios en pesos mexicanos, tal como los publica el spa.", "¿Es para celebrar, en pareja o con tu mamá? Mira los rituales. ¿Para tu bebé? Bari…", "Todos los servicios", "Pregunta por las promociones para ti y por los paquetes de varios servicios.", la bajada de cada pestaña (junto a su lema), "10 años de experiencia" como título, "Estos servicios se pueden pedir a domicilio", "Elige un masaje, un facial o un ritual y regálalo.", "¿Una novia, un cumpleaños, tu mamá? Los rituales Yeto Lut, Hopi y Paxia están pensados para eso.", "Visítanos en La Paz, Puebla" y los mensajes de WhatsApp (el de cada servicio sigue el suyo: "Hola, buen día. Estoy interesado en su servicio: '…'").
- JSON-LD `DaySpa` con dirección, teléfono, horario, rango de precios y redes; Open Graph; favicon con la flor de su logo.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar) y enlace a Google Maps (búsqueda por su dirección; su sitio no tiene mapa).

## Qué se quitó o no se usó

- Formularios de contacto, de PayPal y de datos para domicilio; la ventana de fecha y hora.
- La promoción "Cumples años en Junio" de /promocion (vencida, con precio 0.00).
- `home_footer.jpg` (parece de banco), las miniaturas de 174 px y el aviso gráfico de servicio a domicilio (su texto sí se usa).
- Los enlaces a Aviso de privacidad y Términos de uso (se pueden enlazar después).
- Los scripts de Materialize y Google Fonts.

## Qué se conserva al pie de la letra

- "Un espacio ideal para escaparse un momento del estrés diario", "Recuperar la calma, vitalidad y salud…", "Contamos con 10 años de experiencia…", "Cuidamos tu cuerpo y tu alma", "Contamos con servicio a domicilio", "Certificado de regalo para quien tú quieras", Especiales (novias, deportistas, parejas y niños), Promociones ("para sorprenderte todo el año, en las mejores fechas y cada semana"), los lemas de cada página y "Recibe a Bizé Nizá Spa en tu casa".
- Nombres, duraciones y precios de los 43 servicios; dirección, teléfono, WhatsApp, horario y redes.

## Pendiente de confirmar con el cliente

- La zona del cuerpo de cada servicio (arriba).
- Los precios con dos cifras (Masaje Personalizado, Yamania, Tuchkiin, Kiimak) y los que su sitio muestra en 0.00 (Maderoterapia, Depilación, Cepanca).
- Qué servicios se pueden pedir a domicilio además de Sueco, Xanthe y Nanyotl (todas sus fichas piden dirección).
- Si "10 años de experiencia" sigue vigente (el pie dice 2021) y las promociones actuales.
- Que las fotos de la pareja, el masaje de espalda y las piedras calientes sean suyas (lo parecen: batas con su logo y el mismo cuarto), y fotos de sus cabinas y de cada servicio.
- Cómo se compra el certificado de regalo.
- El Facebook correcto (su pie muestra "Bizé Nizá Spa" con enlace a facebook.com/bizenizaspa) y si siguen usando Twitter.

## Dónde está cada cosa

- Textos, servicios, zonas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la figura: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
