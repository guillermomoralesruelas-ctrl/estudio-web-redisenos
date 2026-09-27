# Kiumo Hospital Veterinario: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://kiumo.com.mx/ (WordPress con Elementor, hecho por Ker3). Hospital veterinario con spa, farmacia y tienda en Culiacán: sucursales Guadalupe (24 horas), Las Quintas, La Primavera y Kiumo Check |
| Prioridad | **MEDIA**: el sitio se ve bien y tiene contenido, pero el WhatsApp de Kiumo Check en el pie abre el de otra sucursal, ningún teléfono se puede tocar para llamar (ni el del hospital 24 horas) y casi todos los botones terminan en la misma ventana con números |
| Contacto publicado | Guadalupe tel. 667 135 8509, WhatsApp 667 317 0918; Las Quintas 667 766 2858 / 667 503 1818; La Primavera 667 455 2891 / 667 489 7387; Kiumo Check 667 690 2704 / 667 211 6122; atencionalcliente@kiumo.com.mx; Facebook e Instagram @kiumopetcenter |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio) y en `crudo.json` (Inicio, Servicios, Hospital Veterinario, Spa y Kiumo Check).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El WhatsApp de Kiumo Check lleva a otra sucursal.** En el pie de todas las páginas, junto a "Whatsapp: 6672116122", el icono abre `phone=526674897387` con el mensaje "Hola, quiero comunicarme con Kiumo Sucursal La Primavera." | Quien quiere ir a Kiumo Check (La Conquista) termina escribiendo a La Primavera, que tiene que redirigirlo o pierde la venta. | Inicio en vivo y `crudo.json` (pie de Servicios, Hospital y Spa) |
| 2 | **Ningún teléfono se puede tocar para llamar.** No hay un solo enlace `tel:`; el 667 135 8509 del hospital 24 horas aparece como texto. | En una urgencia, desde el celular, el dueño tiene que copiar el número a mano. Es la llamada más importante del negocio. | Inicio en vivo (0 enlaces `tel:`) |
| 3 | **Casi todos los botones van al mismo lugar.** "Contáctanos", "Agendar visita" (spa y hospital), "Realizar pedido" y "Hacer pedido" abren la misma ventana con seis números, y esa ventana no incluye Kiumo Check. | El cliente que ya decidió (agendar un baño, pedir croquetas) tiene que elegir sucursal y escribir desde cero; muchos se quedan ahí. | Inicio en vivo (ventana emergente 380) y `crudo.json` |
| 4 | **Google tiene datos pobres y con errores.** Su único dato de negocio es un `PetStore` con la dirección "Blvd. Maniel J. Cloutier", sin número, teléfono ni horario, y ninguna de las otras sucursales. No dice que es hospital veterinario ni que Guadalupe abre 24 horas. | Pierde búsquedas como "veterinaria 24 horas Culiacán", justo las de urgencia. | Inicio en vivo (JSON-LD) |
| 5 | **Kiumo Check sigue como "Próximamente" en el inicio**, aunque ya tiene página, dirección y teléfono. | Da la impresión de que la tienda de La Conquista aún no abre. | `crudo.json` (Inicio) |

Nota: **es un negocio sólido y con buenas fotos propias** (fachada, quirófano, spa, equipo con uniforme), más de 25 años y cuatro puntos en Culiacán. El argumento principal: **que cada botón lleve al WhatsApp o a la llamada correcta**, sobre todo en urgencias.

## Qué le ofrecemos

- "El checklist de tu mascota": el cliente palomea lo que necesita su perro o gato y lo manda por WhatsApp, ya escrito, a la sucursal que elija. Es la idea de Kiumo Check llevada a todo el sitio.
- Llamada al hospital 24 horas en un toque, en cada pantalla (barra fija en el celular).
- Las cuatro sucursales con su WhatsApp correcto, teléfono tocable y Google Maps.
- Datos de negocio para Google por sucursal (hospital veterinario, horario 24 horas en Guadalupe).

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, por el correo atencionalcliente@kiumo.com.mx o por Instagram @kiumopetcenter. Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisé la página de Kiumo y me gustaron mucho sus fotos y la idea de Kiumo Check. Les escribo porque noté dos detalles: el icono de WhatsApp de Kiumo Check en el pie de la página abre el WhatsApp de la Sucursal La Primavera, y desde el celular ningún teléfono se puede tocar para llamar, ni el del hospital 24 horas. Les preparé una propuesta donde el cliente arma el "checklist" de su mascota y lo manda por WhatsApp a la sucursal que elija. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué servicios tiene cada sucursal (spa, guardería, cirugía, rayos X)?
- ¿Qué horario tienen el domingo Las Quintas, La Primavera y Kiumo Check?
- ¿Cuál WhatsApp prefieren como general? ¿El 667 211 6122 es el correcto de Kiumo Check?
- ¿Sigue el "Martes de gatos"? ¿En qué sucursales?
- ¿Quieren mostrar nombres y cargos del equipo de las fotos?
