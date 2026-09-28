# Let's Smile Dentistry: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://letssmiledentistry.com/ |
| Prioridad | MEDIA-BAJA: su sitio es moderno, con fotos propias, precios y reseñas; los hallazgos son de coherencia y de textos, no de fondo |
| Contacto publicado | Call/Text y WhatsApp +1 (760) 620-3040, info@letssmiledentistry.com, IG @letssmiledentistry, FB, TikTok y YouTube; Calzada Cetys 4216, Local 21, Col. Calles, Mexicali |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` (en inglés, como su sitio) |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | En Dental services, la sección de urgencias dice "Our emergency dentist in California & Arizona", pero la clínica está en Mexicali. | Un texto así en una clínica de otro país puede leerse como engañoso, justo lo que un paciente de EE. UU. teme. | `curl` de /dental-services/ |
| 2 | El Dr. Martín Salinas aparece como "Currently a Student of The Specialty" en About us y como "Specialist in Oral Rehabilitation and Implantology" en Dental tourism. | En salud, anunciar una especialidad sin tenerla es delicado; mejor que diga lo mismo en todas partes. | `curl` de /about-us/ y /dental-tourism-mexicali/ |
| 3 | El menú "Who we are" lista seis dentistas y no incluye al Dr. José Preciado, que sí tiene perfil en About us. | Un dentista del equipo queda escondido. | `crudo.json` y `curl` de /about-us/ |
| 4 | Faltas y restos de plantilla: "Pre & Post Appoinment Support", "Translation and Interpretetion", "Diego State University." repetido, y en Kids "His goal is to create…" hablando de la clínica. | Detalles que restan en un sitio que se vende por su cuidado. | `curl` de /dental-services/ y /about-us/ |
| 5 | Los precios y quién hace cada tratamiento están en páginas distintas (Dental tourism y About us). | El paciente que compara clínicas quiere ver precio y dentista juntos. | Navegación del sitio |

## Qué le ofrecemos

- Una página donde el paciente elige su tratamiento y ve el precio en Mexicali, quién se enfoca en eso y un poco de cada dentista (sus propios "Good to know" y "Fun to know"), con WhatsApp prellenado.
- Textos coherentes entre páginas y sin restos de plantilla.

## Mensaje sugerido para el primer contacto

> Hi! I was reviewing dental clinics in Mexicali and your site is great: real photos and clear prices. I noticed a couple of details, like the emergency section mentioning "California & Arizona". I put together a proposal where patients pick their treatment and see the Mexicali price and the dentist who focuses on it, with your own "Fun to know" facts. May I share the link?

(En español, si contestan por /mx/: "Hola, revisé su sitio y armé una propuesta donde el paciente elige su tratamiento y ve el precio y el dentista que lo atiende. ¿Les comparto el enlace?")

## Preguntas para la conversación

- ¿Qué dentista atiende a niños?
- ¿La tabla de precios está vigente?
- ¿Tienen foto del Dr. José Preciado?
- ¿Cómo quieren presentar la formación del Dr. Salinas?
