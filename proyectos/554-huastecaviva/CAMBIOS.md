# Huasteca Viva: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | http://huastecaviva.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/554-huastecaviva/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 554-huastecaviva`) |

## En una línea

De 12 páginas que repiten el mismo bloque de precio y condiciones, a una sola página donde eliges la ruta según qué tanto te quieres mojar y la reservas por WhatsApp con el total calculado.

## Qué estaba roto o incompleto en el clon

- Sin estilos: sus CSS y JS no se descargaron (37 recursos fallidos) y hay 2 imágenes rotas. El scrape solo trajo 5 páginas; las demás (Tamul, El Meco, Tamtoc, otras rutas, aventura, grupos y cotizaciones) se leyeron en vivo con Jina Reader el 2026-09-29 (`entregables/textos-sitio-en-vivo-2026-09-29.txt`).

## Qué se cambió (mismo contenido, otra forma)

- Las seis rutas en tarjetas con su foto, sus cifras y el itinerario desplegable, en vez de una página por ruta.
- El precio, lo que incluye, las recomendaciones y las condiciones se dicen una sola vez, no en cada página.
- Textos en segunda persona ("te recogemos en tu hotel") y el menú reducido a una página con anclas.

## Qué se agregó (no existía en el original)

- **"¿Hasta dónde te quieres mojar?"**: medidor de agua con 6 niveles que lleva a la ruta que corresponde, con contadores de adultos, niños de 6 a 10 y menores de 5, el total con sus precios y WhatsApp con el mensaje escrito.
- Botones de WhatsApp con mensaje prellenado (su sitio solo muestra el número como texto) y barra fija en el celular (WhatsApp, Llamar, Llegar).
- Enlace a Google Maps de su oficina (su sitio no tiene mapa).
- JSON-LD de tipo `TravelAgency` con dirección, horario y redes; Open Graph; favicon con el ave de su logo; `alt` en todas las fotos.

## Qué se quitó o no se usó

- La insignia de Kayak (enlaza a una lista de hoteles de Cd. Valles).
- Los enlaces rotos: "Conoce la Ruta" de Puente de Dios y "Departamento HV" (ambos dan 404).
- La frase "Los lugares de la Huasteca Potosina son seguros": se dejan las condiciones concretas (seguro, deducible, carta responsiva, chaleco).
- Los textos repetidos de cada página de ruta y el formulario de cotización (se sustituye por WhatsApp).

## Qué se conserva al pie de la letra

- Precios: rutas $1,150 adulto y $950 niño de 6 a 10 años (menores de 5 no pagan); rafting $1,500 (mínimo 4); rappel $600 (mínimo 4); tirolesas, puente colgante y skybike $1,150.
- Itinerarios, cifras (escalones, alturas, distancias) y avisos de cada ruta.
- Lo que incluye, recomendaciones y condiciones de viaje (horario de recogida, clima, seguro con deducible de $500, sin alcohol ni mascotas).
- Sus cifras de portada (6+ años, 16+ sitios, 14,000+ viajeros), dirección, horario, WhatsApp, teléfono, correo y redes.

## Pendiente de confirmar con el cliente

- **Vigencia de los precios** ($1,150 / $950 y los de aventura) y si el rafting tiene precio de niño o edad mínima.
- Precio del buceo y de las "otras rutas" (Taninul, Golondrinas, Castillo de la Salud, Huichihuayán); su sitio no los publica.
- Si las cifras "6+ años" y "14,000+ turistas" siguen vigentes.
- Alturas que no coinciden entre páginas: en inicio El Meco es "cascada de 50 metros"; en su página, el mirador de El Meco tiene "una caída de 30 metros" y El Salto, 70 metros. Se usaron los de la página de la ruta.
- Que el 481 123 0715 sea el WhatsApp (su sitio lo dice) y el 481 375 7339 el teléfono para llamar.
- Precio especial para grupos desde 12 personas: no lo publica.
- La ubicación exacta en Google Maps (se usó la dirección de su pie de página).

## Dónde está cada cosa

- Textos, rutas, niveles del medidor, precios y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el medidor: `rediseno/src/App.tsx`
- Colores, fuentes y animación del agua: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
