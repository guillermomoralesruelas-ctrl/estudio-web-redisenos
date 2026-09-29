# Hollywood Meeting Planners: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://hollywoodencancun.com/ . Hollywood Meeting Planners & Event Management, producción de eventos especiales en Cancún, Mérida y Riviera Maya |
| Prioridad | **MEDIA**: el sitio es reciente (2025) y tiene buenas fotos, pero tiene erratas en la portada, un widget en inglés mal escrito, sin dirección y con un correo de otro dominio. Es un cliente de convenciones y grupos de incentivo, con presupuesto |
| Contacto publicado | WhatsApp (52) 998 845 8951; teléfonos (52) 998 386 8210 y +1 657 293 4945 (EE. UU.); hudsons@hudsons.mx; Facebook y X @HollywoodCancun |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-28/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-28 con curl al sitio real.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Erratas en la portada**: "Dseño temático personalizado" y "la Rviera Maya", en la sección "Meeting Planners". | Para una productora que vende detalle y estilo, una errata en la portada es lo primero que nota un cliente corporativo. | Portada en vivo |
| 2 | **Widget de llamada en inglés y mal escrito** en un sitio en español: "Please enter your phone number and we call you back soon", "We are call you back soon". | Se ve descuidado y confunde al cliente mexicano. | HTML de la portada en vivo |
| 3 | **Sin dirección, mapa ni horario** en ninguna página, y el único correo es **hudsons@hudsons.mx**, de otro dominio. | Un comprador corporativo busca una empresa verificable; un correo ajeno a la marca genera dudas. | Portada, "Contacto" y "Nosotros" en vivo |
| 4 | **Sus datos estructurados tienen el nombre y el logo vacíos** (`"name":""`, `"logo":""`). | Google no asocia el sitio con la marca Hollywood. | JSON-LD de la portada en vivo |
| 5 | **38 de 43 imágenes de la portada sin texto alternativo**, y la página "Galería" no tiene ni un texto. | Sus mejores fotos no aparecen en Google Imágenes ni se describen a lectores de pantalla. | HTML de la portada y de `/eventos-en-cancun-mexico/` en vivo |
| 6 | **Página pesada**: 41 hojas de estilo, 31 scripts, chat Tawk y widget de llamada. | Lenta en el celular. | HTML de la portada en vivo |
| 7 | **"4.9 Excelencia en servicio"** sin decir de dónde sale, y sin Instagram en un negocio muy visual. | Una calificación sin fuente no convence; Instagram es donde los novios y planners buscan referencias. | Portada en vivo |

Nota: sus fotos de montajes (galas, steam punk, noche hindú, safari) son muy buenas y propias. El argumento principal: **que el cliente arme su evento con sus temáticas y lo mande a cotizar con todos los datos, en lugar de un formulario de ocho campos.**

## Qué le ofrecemos

- "Tu evento en la marquesina": tipo de evento, temática, destino, invitados y mes en una marquesina de cine, con WhatsApp que ya lo dice.
- Sus seis servicios con fotos propias, una galería de sus montajes con descripción y una página sin plugins.
- Datos estructurados con su nombre, teléfonos y cobertura.

## Qué hay que pedirle

- Una dirección u oficina (aunque sea de atención con cita) y horario, para el mapa.
- Un correo con su dominio.
- Qué evento o temática es cada foto, y si pueden nombrar clientes o recintos.
