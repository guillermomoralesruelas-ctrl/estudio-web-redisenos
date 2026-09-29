# Fátima Buenfil, Nutrición Clínica: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a fatimabuenfil.com (403 del proxy), así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.fatimabuenfil.com/ . Nutrióloga clínica (maestra en nutrición clínica y educadora en diabetes) en el Hospital Star Médica de Mérida, Yucatán |
| Prioridad | **ALTA**: su página de blog muestra el texto de demostración de la plantilla ("Salient is an excellent design… Download") y sus páginas de servicios y especialidades están vacías |
| Contacto publicado | WhatsApp 999 260 2804; Hospital Star Médica de Mérida, consultorio 705; FB /FatimaNutricion; IG @fatimanutricion |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La página del blog abre con el contenido de demostración de la plantilla: "Creativity", "Innovation", "Originality", "Imagination" y "Salient is an excellent design with a fresh approach… Download" (con enlace a la tienda de plantillas) | Un paciente que busca a una especialista de hospital ve texto en inglés de una plantilla; resta seriedad | `crudo.json`, página /blog |
| 2 | Las páginas de servicios y especialidades no tienen texto: solo títulos y "más información". La de Consulta General se corta en "puede involucrar algunos de estos procedimientos y tratamientos:" sin la lista, y el "más información" de Nutrición Vegetariana lleva a un formulario de contacto | Quien quiere saber si ella atiende su caso no encuentra respuesta y se va | `crudo.json`, /servicios y /nuestras-especialidades |
| 3 | No publica horario, días, precios ni duración de la consulta; su dirección es solo "Hospital Star Médica de Mérida, consultorio 705", con un enlace a la lista general de hospitales de Star Médica y sin mapa | Cada paciente tiene que escribir para preguntar lo básico | `original.html` |
| 4 | Su WhatsApp abre sin mensaje y no hay teléfono para llamar | Llega un chat en blanco y ella tiene que preguntar para qué es | `original.html` (`wa.me/529992602804`) |
| 5 | Sin datos estructurados (JSON-LD) ni Open Graph | Google no la reconoce como nutrióloga en Mérida y al compartir su enlace no sale foto | `original.html` (0 `ld+json`, 0 `og:`) |
| 6 | Las fotos de servicios y especialidades son de banco, aunque tiene una sesión de fotos profesional propia | Su foto real en consulta y con el calorímetro es mucho más convincente | `original.html` y `sitio/assets/` |
| 7 | Detalles: "Read more …" en inglés en el blog, una entrada "Soy Positivo a SARS-COV-19" y títulos repetidos en el currículum ("Experiencia Ponente", "Investigación Clínica", "Catedrático" y "Certificaciones" aparecen dos veces) | Pequeños descuidos en un sitio de salud | `crudo.json` |

Lo que sí funciona: un currículum muy sólido (maestría, cédulas, investigación con Texas Biomed, docencia y certificaciones ESPEN) y un WhatsApp directo.

## Qué le ofrecemos

- Una página seria, a la altura de su currículum, con sus propias fotos y sin restos de plantilla.
- Una hoja de primera consulta que el paciente llena en pantalla (motivo, modalidad y nombre) y le llega por WhatsApp ya ordenada.
- Su consultorio en Google Maps y datos para que Google la muestre como nutrióloga clínica en Mérida.
- Su currículum y cédulas visibles, con enlace para verificarlas.

## Mensaje sugerido para el primer contacto

> Hola, Fátima, buen día. Estuve revisando su página y su currículum es impresionante. Noté que la sección del blog muestra un texto de ejemplo de la plantilla en inglés ("Salient is an excellent design…") y que las páginas de servicios y especialidades no tienen descripción. Me dedico a rediseñar sitios y preparé una propuesta con sus fotos, donde el paciente llena una hoja de primera consulta y se la envía por WhatsApp. Si le interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Horario, días, precios y duración de la consulta.
- Qué incluye la consulta general y si hace calorimetría o InBody.
- Si sigue en el Centro Médico de las Américas.
- Un texto corto por especialidad.
- Fotos del consultorio 705 y de su equipo.
- Si quiere recibir las solicitudes de empresas y escuelas por WhatsApp o por correo.
