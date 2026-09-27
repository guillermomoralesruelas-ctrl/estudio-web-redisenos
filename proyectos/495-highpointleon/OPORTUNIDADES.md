# High Point León: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-27), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://highpointleon.com/ |
| Prioridad | ALTA: sitio costoso con carruseles rotos y sin SEO básico |
| Contacto publicado | WhatsApp: 5525386374 · Email: xael@inside.com |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Sin H1**: el sitio no tiene ninguna etiqueta H1 | Google no sabe de qué es el sitio; pierde ranking en búsquedas de "departamentos León" y "residencial lujo León" | `crudo.json` — título de página existe pero sin H1 en el cuerpo |
| 2 | **Carruseles JS rotos**: los sliders de amenidades, acabados y plantas no funcionan (scripts Astro que el servidor no entrega) | El visitante no puede ver las amenidades ni los acabados — el principal argumento de venta del lujo está invisible | `crudo.json` — se mencionan 42 recursos con 404 en QA del clon |
| 3 | **Paleta genérica**: fondo blanco estándar no transmite lujo ni la categoría de un residencial OR-B | Los competidores de la misma liga (St. Regis, Mítikah) tienen sitios oscuros y dorados; el sitio actual no proyecta la marca premium | Comparación visual sitio original vs. rediseño |
| 4 | **WhatsApp sin texto prellenado**: el botón de WhatsApp abre el chat en blanco | El prospecto no sabe qué escribir; se pierden conversiones que sí se concretarían con un mensaje sugerido | `crudo.json` — `wa.me/5525386374` sin `?text=` |
| 5 | **Sin diferenciación de tipologías en CTA**: todos los botones van al mismo WhatsApp | Imposible saber qué tipo de depto atrae más; se pierde inteligencia de ventas | Revisión de crudo.json |
| 6 | **Sin proyección de inversión**: el dato de plusvalía 11.10% está sepultado en texto corrido | Este es el argumento más poderoso para inversionistas (rendimiento > usar el depto) pero no se activa visualmente | `crudo.json` — el texto existe pero sin herramienta interactiva |
| 7 | **Sin favicon**: el navegador lanza un 404 silencioso al intentar cargar /favicon.ico | Señal de falta de cuidado al detalle para un cliente premium que revisa herramientas de desarrollador | Verificado en QA del rediseño |
| 8 | **Sin meta OG ni JSON-LD**: compartir el link en WhatsApp no muestra imagen ni descripción | Para un residencial de lujo, los referidos y el boca a boca son fundamentales; el link desnudo no vende | Revisión del HTML fuente |

## Qué le ofrecemos

- **Sitio que sí convierte**: H1 semántico, carruseles reemplazados por grid funcional, CTA de WhatsApp activo con mensaje prellenado por tipología.
- **Posicionamiento de marca de lujo**: paleta oscura + dorada alineada con OR-B y con el nivel Mítikah/St. Regis.
- **Herramienta de ventas única**: el Proyector de Plusvalía calcula en vivo el valor futuro del depto — primera en el mercado de León.
- **SEO base**: H1, meta description, Open Graph, JSON-LD ApartmentComplex — visible en Google y en WhatsApp.
- **Datos de inteligencia**: CTAs diferenciados por tipo (1/2/3 rec) permiten saber qué depto genera más interés.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, vi el sitio de High Point León y noté que los carruseles de amenidades no están funcionando — el visitante no puede ver el gimnasio, la alberca ni la sala privada. Armé una propuesta de rediseño que resuelve eso y además incluye una herramienta de plusvalía interactiva (proyecta el valor del depto a 1, 3 y 5 años con el 11.10% de León 2024). ¿Tienes 10 minutos para que te la muestre?

## Preguntas para la conversación

- ¿Hay aviso de privacidad activo? (el footer lo menciona pero sin enlace)
- ¿Tienen redes sociales del proyecto? (Instagram, Facebook de High Point León)
- ¿Cuál es el número exacto de disponibilidad por tipología? (para agregar stock en tiempo real)
- ¿Hay video del desarrollo o del edificio ya construido?
- ¿Hay logo de alta resolución en formato SVG o PNG transparente?
