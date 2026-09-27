# Escuela de Vuelo FLUMEN: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.parapentevalledebravo.com/ (Joomla con el tema YOOtheme; reservas y pagos en línea con Planyo en `/reservaciones`). Vuelos tándem en El Peñón, Temascaltepec, cerca de Valle de Bravo |
| Prioridad | **ALTA**: el botón "Comprar" del vuelo Explorador en la portada no lleva a ningún lado, y los precios de la portada no coinciden con los de cada vuelo ($2,499 contra $2,699, $2,899 contra $3,199, $3,499 contra $3,799); además, su WhatsApp no aparece en la portada ni en las páginas de los vuelos |
| Contacto publicado | WhatsApp +52 722 521 0695 (solo en `/reservaciones` y en su FAQ, de 8:30 a 19:30); info@parapentevalledebravo.com; Instagram @flumenparagliding; Facebook aprendeavolar.com.mx; YouTube |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados el 2026-09-27 leyendo el sitio real con Jina Reader (`r.jina.ai`; a curl directo el sitio responde 406 de Mod_Security): el inicio (coincide con `original.html`), `/reservaciones`, `/experiencias/faq`, `/experiencias/promo`, `/experiencias/precio-amigo`, `/experiencias/faq/el-penon`, `/experiencias/faq/carta-responsiva`, la política de cancelaciones y el aviso de privacidad.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El botón "Comprar" del Explorador no hace nada.** En la portada, la tarjeta del Explorador ("Una experiencia total") enlaza a `#`: quien lo toca se queda en la misma página. Las otras tarjetas sí llevan a la reserva. | Es uno de sus tres vuelos principales y la tarjeta está en la portada: se pierden compras justo en el momento de decidir. | `original.html` y el inicio en vivo (`[Comprar](https://www.parapentevalledebravo.com/#)`) |
| 2 | **Los precios no coinciden.** La portada dice "Desde MX$2,499" (Aventurero), "Desde MX$2,899" (Explorador) y "Desde MX$3,499" (VIP), pero la página de cada vuelo dice $2,699, $3,199 y $3,799. La duración del VIP es "40-60 min" en la portada, "45+ min" en su página y "35-50 min" en Promo. En Promo, "Grupo Aventurero 4 personas MX$9,796.00 por persona" (es el precio del grupo) y "Vuelos a partir de dos personas tienen descuento de MX$2500.00 por persona" (más que un vuelo). | Quien ve $2,499 y luego paga $2,699 puede sentir que le cambiaron el precio, y pregunta antes de reservar (o no reserva). | `crudo.json` (inicio y páginas de vuelo) y Promo en vivo |
| 3 | **Su WhatsApp está escondido.** Ni la portada ni las páginas de los vuelos tienen teléfono ni WhatsApp; el número (722 521 0695) solo aparece en el texto de ayuda de `/reservaciones` y al final de la FAQ, sin enlace. El "Contacto" del pie es un correo con un parámetro roto (`?cc=info`). | En turismo de aventura casi todos preguntan antes de pagar (clima, peso, niños, horario): si no encuentran cómo escribir, reservan con otra escuela del lago. | `original.html`, `resumen.json` (sin teléfonos ni WhatsApp) y `/reservaciones` y FAQ en vivo |
| 4 | **Dos puntos de encuentro distintos.** Las páginas de Aventurero, Explorador y VIP dicen "El punto de encuentro es el café-contenedor SkyCafé"; la FAQ dice que es "la Oficina de FLUMEN, en la calle Del Salitre" (con su enlace de Maps). El enlace a la zona de aterrizaje de la FAQ está escrito como correo (`mailto:https://www.google.com/maps/…`) y no abre. | Un pasajero que llega al lugar equivocado pierde su vuelo: su propia política dice que la tolerancia es de 15 minutos. | `crudo.json` y FAQ en vivo |
| 5 | **Falta información que su carta responsiva exige.** La carta dice "cumplo con los requisitos físicos y de peso establecidos", y la reserva pide avisar "si hay alguien con el peso bajo o alto" o si hay niños, pero ninguna página dice cuáles son esos requisitos, desde qué edad se vuela ni el peso máximo. | Son las dudas más comunes antes de un vuelo tándem; publicarlas ahorra mensajes y evita cancelaciones el mismo día. | FAQ, carta responsiva y `/reservaciones` en vivo |
| 6 | **Restos de plantilla y enlaces rotos.** Texto vertical "Bikepacking Essentials" en la portada y "Bikepacking Gear" en la FAQ (del tema de ejemplo), el enlace a APPI del pie va a `https://https//flyappi.org/`, la pestaña de `/reservaciones` se llama "Politica de cancelaciones" y la de Promo "Routes", "Exlporer VIP 360" y "Duración 25-25" en Promo. | Pequeñas pérdidas de confianza en una actividad en la que la confianza lo es todo. | `original.html`, inicio, FAQ y Promo en vivo |
| 7 | **Google lo lee mal.** El HTML dice que la página está en inglés británico (`lang="en-gb"`), tiene 4 H1, 32 de sus 41 imágenes no tienen `alt`, y sus datos estructurados son de un "Article" llamado "Home" de la categoría "Uncategorised": no hay datos de negocio (dirección, teléfono, horario, precios). | Menos visibilidad para "parapente Valle de Bravo", la búsqueda de la que vive, y nada de su WhatsApp ni de su ubicación en los resultados. | `original.html` |

Nota: el sitio **tiene mucho a su favor**: reserva y pago en línea que funcionan, fotos y videos 360 propios espectaculares, precios publicados, pilotos con su número APPI y un enlace para verificar la licencia, una FAQ completa y políticas de cancelación y clima claras. El argumento no es "su sitio está mal", sino **que los precios, el botón de compra y el WhatsApp estén a la altura de sus fotos**.

## Qué le ofrecemos

- "El recorrido de tu vuelo": el pasajero elige Aventurero, Explorador o VIP y ve dibujado su vuelo desde El Peñón hasta el aterrizaje, con los minutos en el aire, lo que incluye, el precio y los botones de reservar o preguntar por WhatsApp con el vuelo ya escrito.
- Un solo precio por vuelo en todo el sitio, el WhatsApp a un toque en cada pantalla (barra fija en el celular) y un solo punto de encuentro con su mapa.
- Todo en una página: vuelos, grupos, El Peñón, el equipo, lo que hay que saber antes de volar y cómo cancelar; con datos de negocio para Google.
- Cuando nos den la información: requisitos de peso y edad, y las fotos de las páginas de cada vuelo y de su galería GoPro.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta (por WhatsApp al 722 521 0695 o por Instagram @flumenparagliding). Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi la página de FLUMEN y sus fotos 360 de los vuelos en El Peñón están increíbles. Les escribo porque noté que en la portada el botón "Comprar" del vuelo Explorador no lleva a la reserva, y que los precios de la portada ($2,499, $2,899 y $3,499) no coinciden con los de la página de cada vuelo. Les preparé una propuesta de cómo podría verse su sitio, donde el pasajero ve dibujado el recorrido de cada vuelo y reserva o les escribe por WhatsApp desde ahí. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuáles son los precios vigentes de cada vuelo: los de la portada o los de cada página? ¿Y la duración del VIP (40-60, 45+ o 35-50 minutos)?
- ¿El punto de encuentro es la Oficina FLUMEN de la calle Del Salitre, el SkyCafé, o son el mismo lugar?
- ¿Qué requisitos de peso, edad y condición física piden? ¿Vuelan niños?
- ¿El 722 521 0695 también recibe llamadas o solo WhatsApp?
- ¿El Precio amigos se vuela también en El Peñón? ¿Siguen los vuelos en La Torre con ICAROS?
- ¿Nos comparten las fotos de las páginas de cada vuelo y de su galería GoPro, y fotos de la oficina, el despegue y el aterrizaje?
- ¿Quieren que el sitio nuevo también tenga la versión en inglés y una sección de cursos (hoy en aprendeavolar.com.mx)?
