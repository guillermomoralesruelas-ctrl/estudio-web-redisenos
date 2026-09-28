# International X Dental: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28). Los defectos del clon **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://internationalx.dental/ |
| Prioridad | **MEDIA**: el sitio funciona, pero su propuesta de valor (ahorro fronterizo) no se comunica de forma clara ni inmediata; además hay datos inconsistentes |
| Contacto publicado | WhatsApp: 526561380872 · Tel MX: (656) 634-0040 · email: office@internationalx.dental |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El sitio tarda en cargar por scripts de seguridad externos (mfesecure de AWS) que bloquean y generan timeout | Un paciente de El Paso que busca dentista en Juárez abandona si la página no carga en 3 segundos; la clínica pierde ese paciente ante competidores más rápidos | `investigacion/crudo.json`, `qa/reporte-rediseno.json` → errores 403 y timeout de 45s en el clon |
| 2 | El email del pie (correo `sonrie@43q.23f.myftpupload.com`) es diferente al email publicado (`office@internationalx.dental`); el enlace "Escríbenos" apunta al dominio de staging `43q.23f.myftpupload.com`, no al dominio real | Los pacientes que intentan escribir al correo del pie de página reciben un error o el mensaje llega a un buzón de prueba, perdiéndose la consulta | `investigacion/crudo.json`, sección pie de página |
| 3 | El teléfono de Las Torres aparece como `+52 (656) 411-0154` en el encabezado y como `+52 (654) 411-0154` en otro lugar; son ladas distintas (656 = Ciudad Juárez, 654 = Sonora) | Un paciente que marca el número equivocado pierde la cita; genera desconfianza | `investigacion/resumen.json`, campos de teléfonos |
| 4 | La sección "Por qué elegirnos" incluye un ícono generado con ChatGPT (`chatgpt-image-7-ago-2026.png` según el nombre del archivo) para el servicio "Ride" | Reduce la credibilidad profesional de una clínica dental de lujo; los pacientes de EE.UU. son sofisticados y noten imágenes generadas por IA | `investigacion/resumen.json`, imagen 39 |
| 5 | Los múltiples enlaces del sitio que llevan a `43q.23f.myftpupload.com` (el dominio de staging de Bluehost) en lugar del dominio real; incluyendo "Conoce Nuestros Servicios" en el hero | Google puede penalizarlo por contenido duplicado o enlaces internos rotos; los usuarios se pierden fuera del sitio | `investigacion/crudo.json`, sección "Explora nuestra amplia gama" |
| 6 | No hay una comparación de precios ni un mensaje claro de ahorro en la portada; el argumento "10 minutos desde El Paso + ahorra X%" es el motor del negocio, pero el visitante tiene que buscarlo | Un paciente de EE.UU. que llega por primera vez no entiende inmediatamente cuánto puede ahorrar, y cierra la pestaña | `investigacion/crudo.json`, portada principal |

## Qué le ofrecemos

- Un sitio de una página que dice de entrada "ahorras hasta X%" según el tratamiento que necesita el paciente (comparador interactivo)
- Carga instantánea: sin scripts externos de terceros que timeout
- Email y teléfonos consistentes, revisados
- Fotos del equipo médico real presentadas de forma profesional (sin IA)
- Barra fija móvil (WhatsApp + llamada + Maps): los pacientes de El Paso que buscan dentistas en Juárez lo hacen desde el celular
- JSON-LD tipo Dentist: Google puede mostrar sus horarios, teléfono y dirección directamente en los resultados de búsqueda

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, revisé el sitio de International X Dental y quería comentarles algo que encontré: varios de los enlaces del pie de página llevan a un dominio de prueba (43q.23f.myftpupload.com) en lugar del sitio real, y el correo de contacto del pie apunta a ese mismo dominio de staging. Los pacientes que intentan escribirles por ahí probablemente no reciben el mensaje.
>
> Diseñé una propuesta de sitio nuevo para ustedes, usando sus propias fotos y textos, con un comparador de precios México vs. EE.UU. que comunica de un vistazo el ahorro de cruzar la frontera. Me gustaría enseñarles cómo quedaría, sin compromiso. ¿Tienen unos minutos?

## Preguntas para la conversación

- ¿Cuáles son los precios actuales en USD de sus principales tratamientos? (para actualizar el comparador)
- ¿El servicio de traslado que menciona su sitio ("Ride") está activo? ¿Cómo funciona?
- ¿La sucursal en Cancún y la de Las Torres (Nuevo Juárez) están operando con el mismo horario?
- ¿El teléfono correcto de Las Torres es lada 656 o 654?
- ¿Tienen WhatsApp específico para Cancún y Las Torres, o todo va al (656) 138-0872?
