# Animalitos México: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://animalitosmexico.com/ . Red de seis hospitales veterinarios (cinco 24 horas) en CDMX, Estado de México y Puebla |
| Prioridad | **MEDIA**: el sitio funciona, pero su teléfono único no se puede tocar para llamar, Google no tiene datos de ninguna de sus seis sucursales y la página de Puebla dice "en CDMX" |
| Contacto publicado | Tel. 55 9025 2000 (todos los hospitales); WhatsApp 55 4552 7129 (botón "Contáctanos"); Instagram @animalitos.mexico, Facebook AnimalitosHospitalMexico, TikTok @animalitosmexico |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio, Puebla y Agenda una cita) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El teléfono no se puede tocar.** El 55 9025 2000 aparece en cada sucursal como texto; no hay un solo enlace `tel:`. | Para un hospital de urgencias, la llamada desde el celular es el contacto más importante; hoy hay que copiar el número. | Inicio y Puebla en vivo (0 enlaces `tel:`) |
| 2 | **Google no tiene datos de negocio.** No hay JSON-LD: ni tipo de negocio, ni direcciones, ni horario 24 horas de sus seis hospitales. | Pierde búsquedas como "veterinario 24 horas Interlomas" o "hospital veterinario Puebla Angelópolis". | Inicio y Puebla en vivo |
| 3 | **Títulos y encabezados confusos.** Todas las páginas se titulan "Hospital Veterinario 24 Horas en CDMX", incluso la de Puebla. La portada tiene dos H1 ("De grandes a pequeñas necesidades" y "Tecnología e") y la de Puebla ninguno. | Google no sabe de qué ciudad es cada página, y la de Puebla compite por "CDMX". | Inicio y Puebla en vivo |
| 4 | **Encontrar la sucursal cuesta.** Seis páginas casi iguales, un solo teléfono y un solo WhatsApp, sin decir cuál queda más cerca. Prado Norte no abre 24 horas, pero su enlace de Google Maps se llama "Hospital Veterinario 24 horas Prado Norte". | En una urgencia nocturna, alguien puede ir a Prado Norte cerrado. | `crudo.json` (Inicio) |
| 5 | **Detalles descuidados.** El menú dice "Resonacia"; el formulario de cita permite fechas desde 2023. | Resta confianza a un hospital que vende tecnología. | Inicio y /agenda-una-cita en vivo |

Nota: **es una red grande y seria**: seis hospitales, cinco 24 horas, tomógrafo y fotos propias de quirófanos. El argumento principal: **llevar a cada cliente al hospital correcto y abierto, con una llamada o un WhatsApp en un toque.**

## Qué le ofrecemos

- "Un Animalitos® cerca de ti": plano a escala de sus hospitales, "usar mi ubicación" para saber cuál queda más cerca y agendar por WhatsApp con hospital y motivo escritos.
- Llamada en un toque en cada pantalla (barra fija en el celular) y botón de urgencias.
- Datos de negocio para Google por hospital, con el horario 24 horas donde aplica.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por Instagram @animalitos.mexico o por WhatsApp al 55 4552 7129). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisé la página de Animalitos y noté que el 55 9025 2000 no se puede tocar para llamar desde el celular, algo clave para un hospital 24 horas, y que Google no tiene los datos de sus seis sucursales (la de Puebla aparece como "en CDMX"). Les preparé una propuesta donde el cliente ve en un plano cuál Animalitos le queda más cerca y agenda por WhatsApp con el motivo ya escrito. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El WhatsApp atiende a todas las sucursales? ¿Tienen uno por hospital?
- ¿Qué días abre Prado Norte? ¿Qué hospitales tienen tomógrafo y resonancia?
- ¿Tienen fotos del hospital de Puebla y fotos con pacientes?
