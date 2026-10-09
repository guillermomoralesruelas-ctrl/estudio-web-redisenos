# Flamboyan Hotel & Residences: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://www.flamboyan.com.mx/ |
| Prioridad | **MEDIA**: el sitio funciona y reserva, pero muestra texto de relleno, mezcla idiomas y esconde sus 14 apartamentos en una lista repetitiva |
| Contacto publicado | Hotel +52 624 142 3305 · Central México +52 55 4741 1285 · USA +1 442 249 0547 · reservations@flamboyan.com.mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Su página de ubicación muestra texto de relleno y etiquetas sin traducir en el buscador de reservas: "Letraset Ipsum. industry's", "1960s centuries, essentially", "core.label.place_type_count.room". | Justo donde el huésped va a reservar ve texto roto; da desconfianza al pagar. | `crudo.json`, /location/ |
| 2 | Las 14 fichas de apartamentos repiten el mismo párrafo largo en inglés, incluso en la versión en español. | Es difícil ver la diferencia entre un Balcony Studio y una Balcony Residence; el huésped mexicano lee todo en inglés. | `crudo.json`, /apartments/ |
| 3 | El calendario del inicio muestra precios en USD ("98$"), y la página de apartamentos en MXN ("From 1734 Mex $"). | Dos monedas confunden; el cliente no sabe cuánto va a pagar. | `crudo.json`, inicio y /apartments/ |
| 4 | Las reseñas de Tripadvisor se repiten tres veces seguidas en el inicio. | Se ve como error y resta credibilidad a reseñas muy buenas. | `crudo.json`, inicio |
| 5 | Usan fotos de banco para actividades y destino (yoga, golf, pesca, buggy, Arco, ballena) junto a fotos profesionales propias. | Sus fotos propias del rooftop y los apartamentos son excelentes; las de banco bajan el nivel. | `resumen.json`, imágenes |
| 6 | No publican WhatsApp; el contacto es por correo, teléfono o el chat de IA. | El viajero mexicano espera escribir por WhatsApp para preguntar antes de reservar. | `resumen.json`, contacto |

## Qué le ofrecemos

- Sus 14 apartamentos comparables de un vistazo: tamaño a escala, personas, exterior, cocina y precio en pesos.
- Todo en español, sin texto de relleno ni reseñas repetidas.
- El próximo Art Walk a la vista, su gran argumento de ubicación.
- Reservación por correo ya armada, teléfonos de la central y enlace a su motor de reservas.

## Mensaje sugerido para el primer contacto

> Hola, ¿hablo con Flamboyan Hotel & Residences? Soy Guillermo, hago sitios web para hoteles.
>
> Revisé su sitio y en la página de ubicación, junto al buscador de reservas, aparece texto de relleno ("Letraset Ipsum…") y etiquetas sin traducir. También cuesta comparar sus 14 apartamentos porque todos repiten el mismo texto en inglés.
>
> Les preparé una propuesta en español donde se comparan a escala y se reservan en dos clics. ¿Se la enseño en 5 minutos?

## Preguntas para la conversación

- ¿Tienen WhatsApp para reservas?
- ¿El botón principal debe ir a su motor de reservas de Mirai?
- ¿Salón Noción es el restaurante del hotel?
- ¿Tienen fotos propias de actividades y del destino?
