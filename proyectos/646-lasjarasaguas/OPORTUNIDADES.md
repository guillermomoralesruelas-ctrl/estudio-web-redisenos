# Las Jaras Aguas Termales - Spa El Sendero & Jardín: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-29), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://lasjaras.mx/ |
| Prioridad | ALTA: sitio actual usa 14 fotos generadas con IA visibles y con marca C2PA |
| Contacto publicado | Tel +52 358 416 5144 · WhatsApp +52 33 2929 7046 · hotel@lasjaras.mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | 14 fotos de la portada (sección hero y espacios) son IA generada con credenciales C2PA de OpenAI (2026/09) | Los visitantes pueden verificarlo con herramientas como Content Credentials; erosiona la autenticidad del lugar | `sitio/assets/wp-content/uploads/2026/09/` — xxd muestra "c2pa" en binario |
| 2 | Sitio WordPress/Elementor pesado, múltiples páginas, no optimizado para móvil | Carga lenta → menor conversión de reservas | Navegador + crudo.json |
| 3 | WhatsApp no prellenado: el botón solo abre WA sin mensaje | El cliente pierde contexto al recibir mensajes en blanco | Revisado en crudo.json, el link es `wa.me/{número}` sin `?text=` |

## Qué le ofrecemos

- Un sitio rápido y moderno que destaca sus fotos reales (las piletas, el spa, el jardín) sin mezclarlas con imágenes de IA
- Precios y accesos claros en una sola pantalla sin que el visitante tenga que navegar
- WhatsApp prellenado con mensaje de contexto para recibir consultas directas y filtrables

## Mensaje sugerido para el primer contacto

> Hola, revisé el sitio de Las Jaras y vi que algunas fotos de la portada (las de la sección de hotel y espacios) tienen credenciales C2PA de generación con IA. ¿Sabían? Les preparé una versión con sus fotos reales del spa y las piletas que muestra muy bien la experiencia del lugar. Si quieren lo vemos. Saludos.

## Preguntas para la conversación

- ¿Tienen más fotos reales de las instalaciones (gruta, temazcal, restaurante) para enriquecer el sitio?
- ¿El precio del Acceso Termal Signature incluye el masaje antes de entrar o al salir?
