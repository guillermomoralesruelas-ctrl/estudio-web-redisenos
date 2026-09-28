# Discover Vallarta: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.discoverpvr.com/ |
| Prioridad | **ALTA**: agencia de turismo activa en Puerto Vallarta, mercado anglohablante, sitio IONOS desactualizado sin WhatsApp visible |
| Contacto publicado | Tel/WhatsApp: +52 (322) 373 5793 · reserve@discover-mx.com |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | No hay un botón de WhatsApp visible en la portada ni en ninguna página de tour | Los turistas que quieren reservar inmediato tienen que usar el formulario con CAPTCHA — muchos abandonan antes de completarlo | `investigacion/crudo.json` → home page content |
| 2 | Cada tour es una página separada con formulario de reserva independiente — el usuario tiene que navegar y llenar datos repetidamente | Más pasos = menos reservas; en la portada los tours solo muestran título y foto sin descripción ni precio | `investigacion/crudo.json` → private-tours page |
| 3 | Formularios CAPTCHA de IONOS builder para cada reserva (imágenes CAPTCHA que caducan) | Si la imagen CAPTCHA no carga o el código no se acepta, la reserva se pierde | `investigacion/crudo.json` → airport transfer form |
| 4 | El footer del sitio muestra los enlaces "Login" y "Edit page" de IONOS visibles para cualquier visitante | Proyecta una imagen de sitio en construcción/desactualizado; riesgo de seguridad | `investigacion/crudo.json` → footer HTML |
| 5 | Sin datos estructurados (JSON-LD) ni Open Graph completo | Google no puede leer las reseñas de TripAdvisor ni mostrar datos del negocio; al compartir por WhatsApp no aparece vista previa correcta | `investigacion/crudo.json` → head section |
| 6 | Los precios de los tours no aparecen en ninguna parte del sitio | Los turistas tienen que enviar un formulario solo para saber cuánto cuesta; se van a la competencia que sí publica precios | Revisión de todas las páginas en `investigacion/crudo.json` |

## Qué le ofrecemos

- Landing page en inglés que funciona perfectamente en celular, sin formularios ni CAPTCHA.
- Todos los CTAs van a WhatsApp directo — el canal que ellos ya usan para operar.
- Seis tours con descripciones completas visibles en un click, sin navegar entre páginas.
- Sección de traslados con los add-ons y precios publicados ($39-$60 USD) — claridad que genera más ventas.
- Barra fija en móvil con botón verde de WhatsApp siempre visible.
- JSON-LD para que Google muestre la agencia correctamente en búsquedas.

## Mensaje sugerido para el primer contacto

> Hi, I was looking at your website and noticed that none of your pages have a WhatsApp button — travelers who want to book right away have to fill out a form with a CAPTCHA, which many people abandon.
>
> I put together a redesign that lets visitors tap directly into WhatsApp from any tour. Would you like to see it? I can send the link now. No commitment.
>
> Saludos, Guillermo

## Preguntas para la conversación

- ¿El WhatsApp +52 (322) 373 5793 sigue activo y es el principal canal de reservas?
- ¿Cuáles son los precios de cada tour? (el sitio actual no los publica)
- ¿Quieren incluir los Adventure Tours (Marietas, ATV, Zip Lines, Yelapa) en la landing?
- ¿Tienen fotos propias de alta resolución de los tours que podríamos usar?
- ¿El correo reserve@discover-mx.com sigue activo (también había info@discoverPVR.com)?
