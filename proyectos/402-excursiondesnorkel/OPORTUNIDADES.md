# Eco Adventures Puerto Escondido: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://ecoadventurespuertoescondido.com/ |
| Prioridad | **MEDIA**: el sitio funciona bien y es popular, pero le faltan herramientas que convierten visitantes indecisos en reservas |
| Contacto publicado | +52 954 134 7889 · info@ecoadventurespuertoescondido.com · Instagram, Facebook |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Sin JSON-LD** en ninguna página | Google no puede leer directamente quiénes son, dónde están ni su calificación de 4.9 sin el marcado de datos estructurados; reduce visibilidad en búsquedas con rich snippets | `investigacion/original.html`: ningún `<script type="application/ld+json">` |
| 2 | **Sin Open Graph** ni meta etiquetas de redes sociales | Cuando alguien comparte el enlace en WhatsApp, Facebook o iMessage no se genera la vista previa con foto — un obstáculo para su modelo de word-of-mouth | `investigacion/crudo.json` página 0: sin `og:title`, `og:image` ni `og:description` |
| 3 | **Precios "Rated 0 out of 5"** visibles en las tarjetas de tours | El rating en cero que aparece en las tarjetas (de WooCommerce sin datos) puede hacer pensar al visitante que el tour no está valorado todavía, contradiciendo las 1,745 reseñas del bloque de Trustindex | `investigacion/crudo.json` página 0: "Rated **0** out of 5" en cada tarjeta de tour |
| 4 | **Sin guía para elegir el momento** de cada tour | El tour de bioluminiscencia no menciona en la portada que la experiencia es mucho mejor cerca de la luna nueva; el de tortugas no indica si está en temporada de anidación. Un visitante que llega en luna llena puede comprar el tour sin saber que podría esperar 2 semanas para una experiencia notablemente mejor | `investigacion/crudo.json` página 3 (bioluminiscencia): la nota "Best on new moon nights" solo está en la ficha del tour, no en la portada |
| 5 | **Páginas de tour con muchas llamadas a la acción de Trustindex** que ralentizan la carga | Cada página de tour carga el widget de Trustindex con ~300 reseñas embebidas; en conexiones lentas esto puede tardar más de 3 segundos en renderizar | `investigacion/crudo.json` páginas 2, 3 y 4: múltiples bloques de `cdn.trustindex.io` |

## Qué le ofrecemos

- Un sitio de una sola página, sin plugins externos (carga instantánea).
- JSON-LD correcto con tipo `TouristAttraction` + `LocalBusiness` para mejorar los ricos resultados en Google.
- Open Graph completo para vistas previas al compartir en redes sociales y mensajería.
- Elemento "Does the sea glow tonight?" que informa al visitante sobre la fase lunar en tiempo real y lo lleva a reservar el tour correcto en el momento correcto.
- Todas las reservas siguen en peek.com (no se cambia la infraestructura).
- Barra fija en móvil con WhatsApp, llamar y Maps — para los turistas que ya están en Puerto Escondido y deciden en el último momento.

## Mensaje sugerido para el primer contacto

> Hola, soy Guillermo. Vi tu sitio de Eco Adventures y me parece que hacen algo increíble en Puerto Escondido. Noté que cuando alguien comparte el enlace por WhatsApp o Facebook no aparece la foto del Pacífico — el teléfono solo muestra el link sin imagen. Es algo pequeño pero hace una diferencia cuando los turistas recomiendan el tour a sus amigos.
>
> Preparé una versión nueva de la página, una sola pantalla que carga rápido y tiene tu rating de 4.9 visible desde el primer momento. ¿Te puedo mostrar cómo se ve?

## Preguntas para la conversación

- ¿El número 954 134 7889 es el mismo WhatsApp Business o se usa solo el enlace de grupo?
- ¿La foto del snorkel (`pexels-daniel-torobekov-5015532.jpg`) es propia o es de banco? Si es de banco, ¿tienen fotos del snorkel propias?
- ¿Quieren que el rediseño incluya las secciones de "Marriage Proposals", "Transfers" y "Group Tours"?
- ¿Cuáles son las coordenadas exactas de su punto de encuentro para el Google Maps?
