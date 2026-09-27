# La Mezquita: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://lamezquita.mx/ (WordPress con Elementor) y su motor de reservas https://rbe.zaviaerp.com/hotel/hotelspalamezquita (Zavia ERP). Hotel boutique y spa de inspiración árabe en Rincón del Pilar, Aguascalientes, abierto en abril de 2026 |
| Prioridad | **ALTA**: su motor de reservas deja reservar con niños, pero su política (en la letra chica del motor) dice "solo adultos" y que quien llegue con menores pierde la reservación sin reembolso; el sitio no lo avisa en ninguna parte. Además, dos enlaces de su pie dan error 404 en todas las páginas y el pie enlaza al acceso del correo de su servidor |
| Contacto publicado | Tel. y WhatsApp (449) 576 8099, info@lamezquita.mx (el motor usa lamezquitahotel@gmail.com), IG @la.mezquita.hotelspa, FB /La-Mezquita-Mezquita, TikTok @la.mezquita.hotel |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados con curl el 2026-09-27: `https://lamezquita.mx/` (200, igual a `original.html`), sus páginas interiores y la API pública de su motor (`https://booking.zaviaerp.com/api/settings` y `/api/room-types?hotel_id=hotelspalamezquita`).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **"Solo adultos" escondido y contradicho.** La "Política General" del motor dice: "No se aceptan menores de 18 años… No se procesarán reservas que incluyan a menores… el hotel se reserva el derecho de admisión sin lugar a reembolso". Pero el mismo motor acepta niños (`acceptChildren: true`, hasta 3 menores en Agdal, Oasis y Patio Real) y el sitio, sus 10 preguntas frecuentes y su página de contacto no mencionan que sea solo para adultos. | Una familia puede pagar el 65 % en línea, llegar con sus hijos y quedarse sin cuarto y sin dinero: queja segura y reseña negativa. Y quien busca justo un hotel para adultos no se entera de que lo es. | API `settings` (`acceptChildren`), `room-types` (`max_children`, `policy_text`); `crudo.json` y curl del sitio: 0 menciones de "adultos" o "menores" |
| 2 | **Enlaces rotos en el pie de todas las páginas.** "Cámara Hiperbárica" lleva a `/camara-hiperbarica-en-aguascalientes/` y "Clínica de Aparotología" a `/clinica-de-aparotologia`: los dos dan error 404 (la página buena es `/camara-hiperbarica-aguascalientes/`). "Aparotología" está mal escrito en el menú, el pie y el spa. | Son dos de sus servicios más distintivos; quien toca el enlace ve una página de error y duda del hotel. | curl: 404 en ambas; `original.html` (pie) |
| 3 | **"Iniciar Sesión" en el pie abre el acceso al correo del servidor** (`https://lamezquita.mx:2096/`, "Webmail Login"). | No sirve a ningún huésped y deja a la vista la puerta de entrada al correo del hotel: invita a intentos de acceso. | `crudo.json`; curl de `lamezquita.mx:2096` (200, título "Webmail Login") |
| 4 | **El WhatsApp llega con un mensaje al revés.** "Reserve Spa", "Reservar Restaurante", el botón flotante y "Contáctanos" abren WhatsApp con el texto "La Mezquita Hola, ¿Cómo puedo ayudarte?", como si el huésped le preguntara al hotel en qué le ayuda; ninguno dice qué se quiere reservar. | El equipo recibe mensajes iguales y tiene que preguntar todo desde cero; algunos clientes borran el texto y no escriben. | `crudo.json` y `original.html` (`api.whatsapp.com/send?phone=5214495768099&text=La%20MezquitaHola%2C…`, `wa.link/exnn2j`) |
| 5 | **No dice qué suites tiene ni cuánto cuestan.** "Habitaciones" lleva directo al motor, que solo enseña las suites después de elegir fechas. Sus seis suites tienen nombre propio (Agua de Luna, Agdal, Imperial, Sahara, Oasis, Patio Real) y dos planes (Europeo y Marroquí), pero en el sitio no aparecen; tampoco hay una sola foto por suite. En el motor, Patio Real cuesta igual con y sin masaje y desayuno. | Quien compara hoteles en Aguascalientes se va sin saber si le alcanza o cuál suite tiene jacuzzi. Enseñarlas vende. | `crudo.json` (ninguna suite nombrada); API `room-types` |
| 6 | **Sus fuentes no cargan.** Las letras del sitio (Poppins, Montserrat, Lato) se piden a otro dominio, `clinicasantuario.com`, que no permite usarlas desde lamezquita.mx; los títulos salen en letra de sistema. | El sitio no se ve como fue diseñado; y depende de la web de otro negocio. | CSS en línea `/wp-content/uploads/elementor/google-fonts/css/*.css` (146 URL a clinicasantuario.com); respuesta sin `Access-Control-Allow-Origin` |
| 7 | **Fotos que no son del hotel.** La fachada de la portada lleva la estrellita de Gemini (editada o generada con IA); la pareja brindando, la pareja con la tableta, las toallas sobre fondo rosa y la mujer en una alberca frente a un palacio parecen de banco o generadas. Tienen una buena sesión propia (suite, cabina de masaje, bar, arcos del salón) que casi no aparece. | Un hotel que vende "diseño inspirado en Medio Oriente" pierde confianza si la gente nota imágenes de IA o de banco. | Imágenes de `original.html` (`hotel-y-spa-la-mezquita.webp`, `hotelyspalamezquita121_1-1.webp`, `537136.jpg`, `1629.jpg`, `hotel-para-parejas-en-aguascalientes.webp`) |
| 8 | Detalles menores: su JSON-LD pone el teléfono en el campo del país y un horario "9:00 a 17:00" sin explicar; hay dos `meta description` distintas; "Atención Personalizada" repite el texto de "Privacidad y Exclusividad"; "UN CENCEPTO DIFERENTE" en "Nuestra esencia", donde además "Ver Ubicación" abre el motor de reservas y "Reservar" el inicio; cuatro entradas del blog tienen el mismo resumen; el sitio da info@lamezquita.mx y el motor lamezquitahotel@gmail.com; la clínica dice "Próximamente" y la pregunta 6 dice que ya se reserva con cita; el carrusel repite los tres testimonios, que solo tienen nombre de pila. | Descuidos que restan en un sitio nuevo que por lo demás se ve cuidado. | `original.html`, curl de `/nuestra-esencia-hotel-spa-en-aguascalientes/` y `/blog/`, API `settings` |

Nota: el sitio **está bien armado** en lo básico: reservas en línea que funcionan, preguntas frecuentes útiles, teléfono, WhatsApp y enlace a Google Maps en todas las páginas, y fotos propias muy buenas de su suite, su spa, su bar y su salón. El argumento no es "su sitio está mal", sino **que un huésped con niños puede perder su dinero sin saberlo** y que sus suites, que es lo que venden, no se ven.

## Qué le ofrecemos

- La política a la vista antes de pagar (solo adultos, 65 % al reservar, cancelación, fechas sin reembolso), para que ninguna reservación termine en queja.
- "Seis suites, seis puertas": el cliente dice qué no puede faltar (jacuzzi, tina, para cuatro) y se encienden las suites que lo tienen, con su precio por noche y por plan, y reserva en línea o pregunta por WhatsApp con la suite escrita.
- WhatsApp con mensaje para cada cosa (suite, spa, temazcal, restaurante, cenas, eventos), sin enlaces rotos ni el acceso al correo en el pie, sus fuentes cargando y datos de hotel correctos para Google.
- Sus fotos reales en lugar de las de banco y la de IA; barra fija en el celular con Reservar, WhatsApp, Llamar y Cómo llegar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Estuve viendo su sitio y su motor de reservas, y noté algo que quizá les genere problemas: la política dice que el hotel es solo para adultos y que no hay reembolso si alguien llega con menores, pero el motor deja reservar con niños y la página no lo menciona en ninguna parte. También hay dos enlaces del pie (Cámara Hiperbárica y la clínica) que dan error. Les preparé una propuesta de cómo podría verse su sitio, con sus seis suites, sus precios y sus políticas a la vista antes de reservar. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El hotel es solo para adultos? ¿Quieren que el motor deje de aceptar niños?
- ¿Las tarifas cambian por temporada o puentes? ¿El Plan Marroquí es para 2 aunque la suite sea para 4? ¿Patio Real cuesta igual con y sin plan a propósito?
- ¿Qué cama y amenidades tiene cada suite? ¿Tienen fotos de cada una, del restaurante, de la alberca, del temazcal y del sauna?
- La foto de la fachada con la estrellita de Gemini, ¿es real retocada? ¿Tienen una sin editar?
- ¿Cuál es la dirección completa (Av. del Valle, Puente del Pilar)? ¿Qué correo contestan, info@lamezquita.mx o lamezquitahotel@gmail.com?
- ¿Horarios y precios del spa, el temazcal, el restaurante y las cenas románticas? ¿Ya abrió la clínica de aparatología?
- ¿Los testimonios son de huéspedes reales? ¿Les interesa mostrar sus reseñas de Google?
