# Clínica Veterinaria del Dr. Memo: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://www.drmemoveterinario.com.mx/ |
| Prioridad | **MEDIA**: el sitio funciona, pero da dos horarios distintos y presenta sus servicios en galerías sin información |
| Contacto publicado | Tel. 442 224 3800 · Citas y WhatsApp 442 172 1841 · veterinariamemo@yahoo.com.mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Dos horarios distintos: el inicio dice "Martes a Sábado de 10 am a 3 pm y de 5 pm – 8 pm", y el pie de todas las páginas dice "Mar - Sáb 10:00 - 20:00". | Alguien que llega a las 4 pm confiando en el pie encuentra cerrado; eso cuesta clientes y reseñas. | `crudo.json`, inicio y pie |
| 2 | La página de servicios se titula "Dermatología en caninos y felinos en Querétaro", pero la dermatología no aparece en su lista de servicios. | Google y el visitante esperan dermatología y no la encuentran; además oculta lo que sí hacen (cirugía, estética, viajes). | `crudo.json`, /servicios-veterinarios |
| 3 | Sus fotos se muestran en galerías con pies genéricos ("CLÍNICA VETERINARIA DEL DR. MEMO - Atención veterinaria", "- Correas") y un botón "Button" sin texto. | Tiene fotos reales muy buenas de su clínica y su tienda que no cuentan nada. | `crudo.json` |
| 4 | El botón de WhatsApp manda el mensaje "Vi su sitio ADN, ¿Me podrían brindar más información…?", el texto de plantilla de Sección Amarilla. | El cliente no sabe qué quiere el paciente y tiene que preguntar todo; el mensaje no habla de su mascota. | `resumen.json`, enlaces `wa.me` |
| 5 | Sin datos estructurados de veterinaria (horario, dirección, teléfono) para Google. | Google puede mostrar un horario equivocado o ninguno. | `original.html` |

## Qué le ofrecemos

- Un solo horario claro y una agenda que dice si está abierto ahora, con el corte de 3 a 5.
- Citas por WhatsApp que ya traen día, hora, perro o gato y motivo.
- Sus fotos reales con información: estética, tienda, consultorios.
- Datos para Google con su horario correcto.

## Mensaje sugerido para el primer contacto

> Hola, ¿hablo con la Clínica Veterinaria del Dr. Memo? Soy Guillermo, hago sitios web para negocios locales.
>
> Vi su sitio y noté que da dos horarios distintos: en el inicio cierran de 3 a 5, pero abajo dice de 10 a 8 corrido. Alguien puede llegar a las 4 y encontrar cerrado.
>
> Les preparé una propuesta con su horario claro y una agenda para apartar cita por WhatsApp. ¿Se la enseño en 5 minutos?

## Preguntas para la conversación

- ¿Cuál es el horario correcto entre semana?
- ¿Atienden dermatología? ¿La agregamos a servicios?
- ¿Qué requisitos piden para el trámite de viaje?
- ¿Tienen fotos en mayor resolución de la clínica y del área de estética?
