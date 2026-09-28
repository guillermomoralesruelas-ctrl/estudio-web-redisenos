# Galo's Pilates Studio: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://galostudios.com/ |
| Prioridad | **MEDIA**: el sitio tiene su propio sistema de reservas bien construido; las oportunidades son de captación y visibilidad (nadie llega sin una cuenta, no hay datos de contacto visibles) |
| Contacto publicado | No hay teléfono, WhatsApp, email ni dirección en el sitio (2026-09-28) |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sin teléfono, WhatsApp, email ni dirección publicados en ninguna página | Un prospecto que llega por primera vez no puede contactarlos sin crear una cuenta; alguien que busca "pilates Oaxaca" no puede llamar ni escribir directamente | `investigacion/resumen.json`: `telefonos`, `emails`, `whatsapp` y `redes` vacíos |
| 2 | Sin meta description en ninguna página (campo vacío) | Al buscar "pilates Oaxaca" o "estudio pilates Oaxaca de Juárez" en Google, el resultado muestra texto tomado al azar del HTML en lugar de una descripción atractiva del estudio | `investigacion/crudo.json`: campo `descripcion` vacío en las tres páginas scrapeadas |
| 3 | Sin JSON-LD / Schema.org | Google no puede identificar el negocio como estudio de fitness en Oaxaca ni mostrarlo en el Knowledge Panel con dirección y horario | HTML del scrape: sin `<script type="application/ld+json">` |
| 4 | La única acción posible es crear una cuenta — sin previa información de precios, horarios ni dirección | Un prospecto que no conoce el estudio no tiene argumentos para registrarse; hay fricción de entrada antes de ver cualquier información relevante | Flujo del sitio: portada → "Aparta tu lugar ahora" → requiere cuenta |

## Qué le ofrecemos

- Datos de contacto visibles (teléfono o WhatsApp) para que prospectos nuevos puedan preguntar antes de registrarse.
- Meta description y Open Graph para que el estudio se vea bien en Google y al compartir por WhatsApp o Instagram.
- JSON-LD `ExerciseGym` con dirección y servicios: Google puede incluirlo en resultados locales de "pilates Oaxaca".
- Presentación de las 10 clases con descripción para que el visitante entienda la oferta antes de registrarse.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, revisé el sitio de Galo's Pilates Studio y me parece que está muy bien construido — la agenda en línea y el sistema de reservas son excelentes. Noté que la meta description está vacía (Google muestra texto al azar en lugar de una descripción del estudio) y que no hay número de contacto visible para prospectos nuevos. Preparé una propuesta que resuelve esto y presenta mejor las clases y el equipo. ¿Les gustaría echarle un vistazo?

## Preguntas para la conversación

- ¿Tienen teléfono o WhatsApp para consultas de prospectos?
- ¿Cuál es la dirección física del estudio en Oaxaca?
- ¿Cuál es el precio aproximado de una clase o paquete mensual?
- ¿Monserrath Ortiz ("MO" en el horario) es coach del equipo o coach invitado?
- ¿Quieren que se use el logo en el rediseño? (No estaba disponible en el clon)
