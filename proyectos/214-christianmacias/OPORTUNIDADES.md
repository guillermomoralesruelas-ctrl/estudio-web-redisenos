# Christian Macías: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.christianmacias.com/ |
| Prioridad | **BAJA**: el sitio está bien hecho; el argumento es convertir más, no arreglar algo roto |
| Contacto publicado | +52 33 3142 5580 · hola@christianmacias.com · wa.me/523331425580 |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | No hay JSON-LD en la página de inicio | Google no ve el tipo de negocio (`Photographer`), la dirección ni el teléfono de forma estructurada; afecta cómo aparece en resultados de búsqueda | `investigacion/original.html`, ausencia de `<script type="application/ld+json">` en la página raíz |
| 2 | No hay Open Graph en la página de inicio | Cuando alguien comparte el enlace en WhatsApp, Instagram o Facebook, no aparece la foto ni el título de la manera que él controla; el fotógrafo de bodas más importante vende por referencias y redes | `investigacion/original.html`, ausencia de `og:image`, `og:title` en la raíz |
| 3 | Las páginas de Paquetes, Libro y Presets sí tienen meta description, pero la página de inicio la tiene con el mismo texto genérico del clon de Raíz web ("Sitio por Raíz" en el footer) | Si alguien busca en Google el nombre del fotógrafo, la descripción que aparece no refleja lo que él hace ni lo que lo diferencia | `investigacion/crudo.json` → página raíz → `descripcion` del clon |
| 4 | El sitio actualmente es multi-página (inicio / paquetes / libro / presets / blog); las parejas que llegan a la página de inicio no ven los precios sin navegar a /paquetes/ | En el sector de fotografía documental de bodas, la decisión se toma rápido: las parejas que no encuentran el precio en la primera pantalla probablemente van al siguiente fotógrafo | `investigacion/crudo.json` → página de inicio (no tiene precios) vs. `/paquetes/` (los tiene) |
| 5 | El botón "WhatsApp" en la página raíz abre `wa.me/523331425580` sin mensaje prellenado (en la raíz); en `/paquetes/` sí tiene mensajes prellenados por colección | Pequeña pérdida de contexto: Christian recibe mensajes "Hola" sin saber qué colección interesa | `investigacion/resumen.json` → campo `whatsapp` (los de raíz versus los de paquetes) |

**Nota:** el sitio de Christian Macías está bien construido — buena estructura, textos propios, precios publicados, testimonios reales, destinos con guías, tres idiomas. El argumento para la propuesta no es "tu sitio está roto" sino "tengo una versión que concentra todo en un solo scroll, con tus precios desde la primera pantalla y el WhatsApp prellenado por colección".

## Qué le ofrecemos

- Una sola página que presenta su servicio completo sin que la pareja tenga que navegar a /paquetes/.
- Los tres precios ($32,000 / $48,000 / $69,000 MX) visibles al llegar a la sección de paquetes, sin clic extra.
- WhatsApp prellenado por colección, para que cada consulta llegue con el contexto ya escrito.
- JSON-LD de tipo `Photographer` y `LocalBusiness` que Google puede leer directamente.
- Open Graph completo para que compartir el enlace en WhatsApp o redes muestre la foto y el título correctos.
- Cronógrafo "¿A qué hora de tu boda está el fotógrafo?" — un elemento interactivo que explica su filosofía documental a la pareja que todavía no lo conoce.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil.

> Hola Christian, vi tu trabajo en christianmacias.com — me parece de los más sólidos en fotografía documental de bodas en Guadalajara. Armé una propuesta de página única que concentra tu portafolio, los tres paquetes con precios y el WhatsApp directo desde la misma pantalla. ¿Te interesa que te la muestre? No tiene costo ni compromiso.

## Preguntas para la conversación

- ¿El número +52 33 3142 5580 funciona también como WhatsApp? (el sitio lo usa en `wa.me/` pero vale confirmarlo).
- ¿La dirección "Av. de las Américas 870" es el estudio o un domicilio fiscal? ¿Prefiere omitirla?
- ¿Quiere que el rediseño incluya sus páginas de Libro, Presets y Blog como secciones o como sub-páginas?
- ¿Hay fotos del día de trabajo (getting ready, sesión, fiesta) que no estén publicadas y quiera usar en la sección del cronógrafo?
