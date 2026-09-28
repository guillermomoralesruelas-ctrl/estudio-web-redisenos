# Dr. Tooth Saltillo: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://drtooth.com.mx/ |
| Prioridad | MEDIA: clínica activa con excelentes fotos de resultados y blog, pero una página muy larga, un botón de WhatsApp que en el celular abre la versión web y una promoción con reglas pero sin descripción |
| Contacto publicado | WhatsApp 844 185 4520, tels. 844 485 2811 y 844 180 2073, dr.tooth.saucedo@gmail.com, FB, IG, YouTube y TikTok |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El botón "Citas Vía Whatsapp" de la portada abre `web.whatsapp.com/send?l=en…` (la versión de computadora, en inglés). | En el celular, que es desde donde se agenda, puede abrir el navegador en vez de la app. | `curl` del inicio |
| 2 | La página de Contacto lista las reglas de una promoción ("Solo nuevos pacientes", "Un miembro por familia", "Tiempo limitado") sin decir cuál es la promoción. | El paciente ve condiciones de algo que no puede conocer. | `curl` de /dr-tooth-saltillo/contacto/ |
| 3 | Los 9 casos de antes y después, su mejor argumento, están repartidos en 18 fotos sueltas dentro de una página de más de 15,000 px. | Hay que bajar mucho para verlos y no se comparan de un vistazo. | Clon y `crudo.json` |
| 4 | La página de Cirugía maxilofacial abre con el mismo texto que Regeneración ósea, y la dirección de Ortodoncia invisible dice "ortodoncia-invencible". | Detalles de descuido en las páginas que Google indexa. | `curl` de las páginas de servicios |
| 5 | El correo publicado es de Gmail. | Un correo del dominio da más confianza en una clínica de especialidad. | `curl` del inicio |

## Qué le ofrecemos

- Una página corta donde sus nueve resultados se comparan a la vez con un solo gesto, y WhatsApp que abre directo en el celular.
- Textos por servicio sin repetir, y datos para Google.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Vi el sitio de Dr. Tooth: sus fotos de antes y después son muy buenas, pero están repartidas en una página muy larga, y el botón de citas por WhatsApp abre la versión web. Armé una propuesta donde sus nueve casos se comparan a la vez con un solo deslizador y el WhatsApp abre directo. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Los pacientes de las fotos siguen de acuerdo en aparecer? ¿Con nombre?
- ¿Cuál es la promoción para nuevos pacientes?
- ¿Tienen correo con su dominio?
