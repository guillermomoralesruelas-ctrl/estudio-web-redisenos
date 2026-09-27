# Juan Camaney: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://juancamaney.com/ (WordPress, tema Shaver, WooCommerce). Bar & barbería tradicional en Plaza Urban Center, Mérida |
| Prioridad | **MEDIA**: nada está caído, pero su contacto confunde: el WhatsApp de la barbería se abre con "Quiero saber el precio de los producto", el teléfono no se puede marcar desde el celular, una página anuncia sucursales en La Isla Mérida y en CDMX que el inicio no menciona, y el menú de servicios es una imagen |
| Contacto publicado | WhatsApp 999 902 9264, tel. 999 131 7745, barberia@juancamaney.mx, IG @juan_camaney_barberia, FB /juancamaneybarberia, Booksy |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` (el "antes" del clon sale en blanco: enseñar mejor el sitio real) y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio, Servicios, Barbería, Reservar, Tienda y Franquicias) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El WhatsApp de la barbería pregunta por productos.** En Contacto ("Barbería – Speakeasy") el WhatsApp 999 902 9264 abre con "Quiero saber el precio de los producto" (con la falta), y el de franquicias del inicio (722 367 1354) también. | Quien quiere una cita empieza la conversación con un mensaje equivocado y mal escrito; el personal tiene que aclarar qué quiere cada cliente. | Inicio en vivo (`wa.me/529999029264?text=Quiero%20saber%20el%20precio%20de%20los%20producto`) |
| 2 | **El teléfono no se puede marcar.** "Teléfono: 999 131 77 45" está en todas las páginas, pero sin enlace `tel:`: en el celular hay que copiarlo a mano. | Menos llamadas de quien busca "barbería cerca" desde el teléfono. | Inicio, Servicios, Barbería y Tienda en vivo (ningún `href="tel:`) |
| 3 | **¿Una sucursal o tres?** El inicio dice "Plaza Urban Center"; la página Servicios lista además La Isla Mérida (999 518 3511) y Paseo Interlomas, CDMX (55 5162 8589), y "Próximamente: Guadalajara, Mérida, Tulum" para la barbería rodante, que la página Barbería anuncia como "¡Muy pronto!". Hay dos cuentas de Booksy (43316 y 39883). | Si esas sucursales ya no existen, alguien puede llamar o ir a la equivocada; si existen, el inicio no las muestra. | `/servicios/` y `/barberia-merida-corte-de-cabello-para-hombre/` en vivo |
| 4 | **El menú de servicios es una imagen.** Solo tres servicios tienen precio en texto; el resto está en una imagen JPG en /servicios/. "Temporalmente sólo con cita" junto a "Abierto de Lunes a Domingo". | Google no puede leer servicios ni precios, y en el celular hay que hacer zoom a una imagen. | `/servicios/` en vivo |
| 5 | **Google no sabe que es una barbería.** Su JSON-LD dice `Organization` y `Article` (sin dirección, horario ni teléfono), el autor apunta a `http://localhost/wordpress3` y la página Barbería tiene 8 H1. La página Reservar repite "reserva con los mejores barberos en Mérida" 11 veces y muestra un cuadro "próximamente". | Menos visibilidad en búsquedas locales y en Google Maps; el texto repetido puede verse como relleno. | Inicio, Barbería y Reservar en vivo |

Nota: **el concepto es muy bueno y distinto** (bar, billar, pantalla, boleo, productos propios con una marca muy cuidada) y su sitio tiene reservas en línea con Booksy. El argumento es ordenar el contacto y la información, no arreglar algo roto.

## Qué le ofrecemos

- Una sola página donde se agenda en un toque (Booksy o WhatsApp con el servicio ya escrito) y se marca el teléfono.
- Servicios y precios en texto, legibles en el celular y para Google, con datos de barbería (dirección, horario y precios) para aparecer en búsquedas locales.
- "La rockola de la casa": sus cinco listas de Spotify en una rockola; los clientes proponen canciones por WhatsApp, como su sitio ya lo pide.
- La tienda con cada producto pedible por WhatsApp, además de la tienda en línea y Mercado Libre.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por Instagram @juan_camaney_barberia o al correo barberia@juancamaney.mx). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Me encantó el concepto de Juan Camaney y sus productos. Revisando su página noté que el botón de WhatsApp de la barbería abre con el mensaje "Quiero saber el precio de los producto", aunque la persona quiera una cita, y que el teléfono no se puede marcar desde el celular. Les preparé una propuesta de cómo podría verse su sitio, con la reserva y el WhatsApp a un toque y sus listas de Spotify en una rockola. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Siguen atendiendo solo con cita? ¿Siguen abiertas las sucursales de La Isla y Paseo Interlomas? ¿Cuál es su cuenta de Booksy?
- ¿El 999 131 7745 recibe llamadas? ¿Qué número atiende franquicias?
- ¿Nos pasan el menú completo de servicios y precios en texto, y fotos de su local?
- ¿Siguen vigentes los precios de la tienda?
- ¿Quieren recibir por WhatsApp las propuestas de canciones para sus listas?
