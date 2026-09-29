# Justsmiles Dental Clinic: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a justsmiles.mx, así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.justsmiles.mx/ (inglés) y /es. Clínica Dental Dr. Guillén, especialistas dentales en Puerto Vallarta desde 1987 |
| Prioridad | **MEDIA**: su página de periodoncia tiene reseñas y texto de plantilla sobre carillas y blanqueamiento, y sus contadores dicen 20 años cuando el texto dice desde 1987 |
| Contacto publicado | WhatsApp +52 322 136 3030; tel. 322 223 05 05, 223 29 90 y 688 55 57; atencionaclientes@justsmiles.com.mx; Basilio Badillo 311, Col. Emiliano Zapata; FB /clinica.just.smiles; IG @justsmiles_dental |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La página de periodoncia usa texto y reseñas de odontología estética de la plantilla ("Enhancing Your Smile with Art and Precision", "digital smile design", reseñas de Elena R., Aisha B. y Darren K. sobre carillas, blanqueamiento y "quick, painless") | Un paciente con un problema de encías lee testimonios que no tienen nada que ver y que parecen inventados | `crudo.json`, /services/periodontia |
| 2 | Sus contadores dicen "20+ Years of Exeperience" (con errata) mientras el texto dice "Since 1987" y "Over 35 years" | Se contradice en su dato más fuerte; y el visitante ve la errata en grande | `original.html` (`data-to="20"`) y `crudo.json` |
| 3 | Casi todas las fotos (slider, servicios y galería) son de banco; las únicas propias son los retratos del equipo | Para un paciente extranjero que decide viajar a atenderse, ver el consultorio real pesa mucho | `original.html` y `sitio/assets/images/` |
| 4 | Sin datos estructurados (JSON-LD) ni Open Graph | Google no la reconoce como dentista en Puerto Vallarta y al compartir el enlace no sale foto | `original.html` (0 `ld+json`, 0 `og:`) |
| 5 | El WhatsApp abre sin mensaje; los botones "Book Appointment" llevan a una página de contacto | Hay que explicar desde cero qué se quiere y cuándo | `original.html` |
| 6 | Detalles: "designed our office with your in mind", "ensuring receives prompt treatment", "Copyright 2026 - Inteligia" en el pie | Descuidos de redacción en inglés en un sitio para pacientes de EE. UU. y Canadá | `crudo.json` |

Lo que sí funciona: tiene versión en inglés y español, horario y dirección claros, tres teléfonos, calificación de Google 4.7 visible y reseñas reales en su inicio.

## Qué le ofrecemos

- Un planificador que acomoda la cita dentro de los días de viaje del paciente y la manda por WhatsApp con sus fechas: menos idas y vueltas por mensaje.
- Una página sin textos ni reseñas de plantilla, con su equipo real y un dato de experiencia coherente.
- Datos para Google y para compartir, y barra fija en el celular.

## Mensaje sugerido para el primer contacto

> Hi / Hola, buen día. Estuve revisando el sitio de Justsmiles y me gustó ver al equipo y las reseñas reales de sus pacientes. Noté que la página de periodoncia muestra testimonios de plantilla sobre carillas y blanqueamiento, y que el contador dice 20 años cuando el texto dice desde 1987. Me dedico a rediseñar sitios y preparé una propuesta donde el paciente que viene de vacaciones elige sus días en Vallarta y les manda por WhatsApp el día que le conviene. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Años de experiencia correctos y cuántos especialistas son hoy.
- Especialidad de cada dentista.
- Logo en buena calidad y fotos del consultorio.
- Si atienden citas el día de llegada o de salida de un turista, y si hay urgencias el mismo día.
- Si prefieren WhatsApp o teléfono para agendar.
