# Hearts on Film: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://heartsonfilm.com/ |
| Prioridad | **MEDIA**: sitio bonito, pero promete un formulario que no existe, sus fotos dependen de imgur y hay pies y reseñas que no cuadran |
| Contacto publicado | WhatsApp +52 1 81 8077 2534 (vía wa.link/jn1uep) · Instagram @hearts.on.film |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La sección "Cuéntennos su historia" dice "Llenen el formulario con calma", pero la página no tiene formulario. | La novia que quiere escribir con calma se queda sin dónde; se pierde el contacto. | `crudo.json` y `original.html` (sin `<form>`) |
| 2 | Todas sus imágenes se cargan desde i.imgur.com. | Si imgur borra o limita las imágenes, el sitio se queda sin portafolio; además pesan 4K sin optimizar. | `crudo.json`, imágenes |
| 3 | La misma etiqueta "Silvia & Héctor" aparece en dos fotos de parejas distintas. | Una novia que conoce a la pareja lo nota; resta credibilidad. | `crudo.json`, hero y films |
| 4 | Una reseña firmada por "Isabella Rodríguez, García, Nuevo León" no corresponde a ningún film mostrado, y la etiqueta "Vol. 07 / Issue 04" parece de plantilla. | Detalles que hacen dudar de que las reseñas sean reales. | `crudo.json` |
| 5 | Sin datos estructurados (JSON-LD) ni meta description. | Google no sabe bien qué servicio da ni dónde. | `original.html` |
| 6 | El único contacto es un enlace acortado wa.link; no se ve el número. | Quien prefiere guardar el número o llamar no puede. | `crudo.json` |

## Qué le ofrecemos

- Portafolio servido desde su propio sitio, optimizado.
- "Su boda, en la línea de tiempo": la pareja pone su fecha y ve cuándo llega su película, y manda la fecha por WhatsApp.
- Pies de foto y reseñas revisados.

## Mensaje sugerido para el primer contacto

> Hola, ¿Hearts on Film? Soy Guillermo, hago sitios web para negocios de bodas.
>
> Vi su sitio y sus films son preciosos. Noté que la sección de contacto pide llenar un formulario que no aparece, y que todas las fotos dependen de imgur.
>
> Les preparé una propuesta donde la novia pone su fecha y ve cuándo recibe su película, y les escribe por WhatsApp con todo. ¿Se la enseño en 5 minutos?

## Preguntas para la conversación

- ¿Quieren formulario además de WhatsApp?
- ¿La reseña de Isabella Rodríguez es de una boda que puedan mostrar?
- ¿Tienen un trailer corto para el inicio?
