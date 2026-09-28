# Escuela de Buceo Proyecto Azul: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.buceoproyectoazul.com.mx/ |
| Prioridad | ALTA: escuela activa desde 1998 con 20 cursos y 14 viajes al año, pero su botón de WhatsApp manda a un número sin lada de país y el correo publicado en Tienda está mal escrito |
| Contacto publicado | WhatsApp 55 5478 4150, tels. 55 4167 4956 y 55 6306 1563, info@buceoproyectoazul.com.mx, FB /buceoproyectoazul, IG @buceoproyectoazuloficial, Av. Revolución 172-B, Col. Escandón |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El botón flotante de WhatsApp abre `wa.me/5554784150`, sin el 52 de México: WhatsApp lo interpreta como un número de Brasil. | Es el canal principal para pedir informes de un curso o un viaje; quien toca el botón no llega a su chat. | `curl` del inicio |
| 2 | En la página Tienda el correo aparece como "info@www.buceoproyectoazul.com.mx". | Quien lo copia manda correos que no llegan. | `curl` de /tienda-2/ |
| 3 | El número de albercas no coincide: la descripción para Google dice "4 Albercas", Nosotros dice "3 albercas" y la página Albercas muestra 2. También dice "18 cursos" y el menú tiene 20. | Datos distintos en cada página restan confianza a una escuela que enseña seguridad. | `curl` del inicio, /nosotros/ y /albercas/ |
| 4 | Los contadores de la portada y de Nosotros dicen "0+ Alumnos, 0+ Certificaciones, 0+ Viajes" en la versión que leen Google y otros lectores. | Si la animación no carga, una escuela con 28 años parece no tener alumnos. | `crudo.json` del inicio y Nosotros |
| 5 | La reserva de cada viaje está en inglés ("Proceed Booking", "Already A Member?", "Continue As Guest") y en el pie aparece el texto "imunify-bot-check". | Quien quiere apartar lugar en un viaje encuentra una pantalla en otro idioma. | `curl` de /tour/…; páginas del sitio |
| 6 | Para saber qué curso le toca, hay que abrir las 20 fichas una por una: ninguna página junta requisitos de nivel y edad. | Un papá con un hijo de 11 años o un buzo Open Water no sabe qué puede tomar sin preguntar. | Menú de Cursos |

## Qué le ofrecemos

- Un mapa tipo metro de sus 20 cursos donde cada persona elige su nivel y edad y ve qué puede tomar ya y qué le falta, con WhatsApp prellenado.
- WhatsApp que sí funciona, datos coherentes (albercas, cursos) y el calendario de viajes en una sola vista.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Revisando escuelas de buceo en la CDMX vi su sitio y noté que el botón de WhatsApp abre un número sin el 52 de México, así que los mensajes no les llegan. Armé una propuesta con sus 20 cursos en un mapa tipo metro: cada quien elige su nivel y edad y ve qué curso puede tomar, y lo pide por WhatsApp. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Cuántas albercas tienen hoy y en qué deportivos?
- ¿De qué año es el calendario de viajes? ¿Publican costos?
- ¿Tienen curso de instructor? Su texto lo menciona.
- ¿Cuántos alumnos y certificaciones llevan, para mostrar cifras reales?
