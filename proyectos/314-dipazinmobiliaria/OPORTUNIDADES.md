# DIPAZ Inmobiliaria: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.dipaz.com.mx/ |
| Prioridad | **ALTA**: el sitio tiene errores funcionales que impiden el contacto (WhatsApp roto) y confunden al cliente (horarios contradictorios) |
| Contacto publicado | Tel. (612) 130 0103 · (612) 166 3750 · recepcionlapaz@dipaz.com.mx · contacto@dipaz.com.mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El botón de WhatsApp lleva a `wa.me/16121300103` — prefijo `1` (EE.UU./Canadá) en lugar de `52` (México) | Los mensajes enviados desde ese botón no llegan a ningún teléfono mexicano; cualquier cliente que hace clic en WhatsApp pierde el contacto | `investigacion/crudo.json`: enlace `https://wa.me/16121300103` en página Home |
| 2 | Los horarios de atención son diferentes en el footer y en la página Contacto | El footer dice Lun–Sáb 9 AM–7 PM y Dom 10 AM–6 PM; la página Contacto dice L–V 9 am–7 pm y Sáb 9 am–2 pm. Un cliente que llega al sábado basándose en el footer puede no encontrar atención después de las 2 PM | `investigacion/crudo.json`: sección `contacto` vs. footer de todas las páginas |
| 3 | El menú de WordPress muestra "Iniciar sesión" y "Crear una cuenta" a todos los visitantes | Un prospecto que ve esos enlaces puede confundirse y pensar que necesita registrarse para ver los desarrollos — fricción innecesaria | `investigacion/original.html`: barra de admin y menú de usuario visibles sin sesión |
| 4 | Sin JSON-LD / Schema.org | Google no puede identificar el negocio como inmobiliaria local ni mostrar dirección, teléfono u horario directamente en resultados de búsqueda | HTML del scrape: sin `<script type="application/ld+json">` |

## Qué le ofrecemos

- WhatsApp corregido con prefijo `52` para que los prospectos puedan escribir desde el primer toque.
- Horario unificado y visible en todo momento para que nadie llegue fuera de hora.
- Página limpia, sin elementos de administración WordPress visibles al visitante.
- JSON-LD `RealEstateAgent`: Google puede mostrar la dirección, teléfono y horario en resultados de búsqueda para "inmobiliaria La Paz BCS" o "casas Altavela La Paz".
- Diseño que comunica confianza y trayectoria desde el primer vistazo (13+ años, 1,500+ familias).

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, revisé el sitio de DIPAZ Inmobiliaria y noté que el botón de WhatsApp lleva a un número con prefijo de EE.UU. (1) en lugar del código de México (52), lo que significa que los mensajes no llegan. También vi que los horarios del footer y de la página de Contacto son diferentes. Preparé una propuesta que corrige esto y actualiza la presentación de Altavela y Altavista. ¿Les gustaría echarle un vistazo?

## Preguntas para la conversación

- ¿El número de WhatsApp correcto es el (612) 130 0103? ¿Con prefijo +52?
- ¿El horario real de sábado es hasta las 7 PM (footer) o hasta las 2 PM (página Contacto)?
- ¿Ambos desarrollos (Altavela y Altavista) siguen en venta o hay nuevas etapas?
- ¿Tienen fotos propias adicionales de los desarrollos que quieran incluir en la propuesta?
