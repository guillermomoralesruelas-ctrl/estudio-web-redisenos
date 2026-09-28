# IAAC: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://iaacmexico.com/ . Instituto Argentino de Artes Culinarias, escuela de gastronomía con seis sedes (Guadalajara, León, Querétaro Centro y Campanario, Mérida y Toluca) |
| Prioridad | **MEDIA**: el sitio está vivo y actualizado (cifras de 2026, sede Toluca), pero no publica precios ni horarios, repite textos entre programas y es pesado. Es un cliente con presupuesto de marketing (seis sedes, 4,000+ egresados) |
| Contacto publicado | Admisiones (33) 1592 9493; WhatsApp 33 1223 3268; Facebook, Instagram y YouTube @iaacmexico |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-28/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-28 con curl al sitio real.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Las páginas de programa solo ofrecen cuatro sedes** ("Descubre tu sede IAAC más cercana": Guadalajara, León, Querétaro y Mérida); faltan Toluca y Querétaro Campanario. | Quien vive en Toluca o en el Campanario lee el programa y no ve su sede. | `/chef-profesional/`, `/repostero-profesional/`, `/sommelier-2/` en vivo |
| 2 | **La página de Mixología repite un párrafo de Sommelier**: "Nuestro programa de Sommelier, de solo 6 meses…". | Parece copiado y confunde a quien pregunta por coctelería. | `/mixologia/` en vivo |
| 3 | **Ningún programa dice precio, horario ni fecha de inicio**; todo manda a "Regístrate y conoce los horarios". Panadería aparece como "Panadería Moderna, 4 meses" en workshops y como "Diplomado Panadería Profesional" sin duración en su página. | El interesado compara con escuelas que sí lo dicen; cada duda es un formulario que puede no llenar. | `/workshop/` y `/panaderia-moderna/` en vivo |
| 4 | **Los contadores de la portada dicen 0 en el HTML** (16 años, 6 sedes, 4,000 egresados solo aparecen con JavaScript). | Google y las vistas previas al compartir ven "0+ egresados". | HTML de la portada en vivo (`data-to-value`) |
| 5 | **Página pesada**: la portada carga 61 scripts y 80 hojas de estilo (Elementor y plugins), popup y píxel de seguimiento. | Lenta en el celular, donde llega la mayoría de los interesados. | HTML de la portada en vivo |
| 6 | **"Copyright © 2023"** en el pie. | Detalle de mantenimiento. | Portada en vivo |

Nota: sus planes de estudio son muy completos (Chef Profesional tiene 45 clases detalladas). El argumento principal: **mostrar ese plan en la portada, con todas las sedes, y dejar que el interesado pida informes por WhatsApp con su programa y su sede.**

## Qué le ofrecemos

- "Tu programa, comanda por comanda": los ocho planes de estudio en una sola vista, como comandas de cocina, con WhatsApp que ya dice programa y sede.
- Las seis sedes con su cocina, cómo llegar y WhatsApp.
- Una página sin plugins ni scripts de terceros.

## Qué hay que pedirle

- Precios o "desde", horarios y fechas de inicio por programa y sede.
- Fotos grandes de sus cocinas y de clases (el sitio solo tiene miniaturas de 370 px), y de la sede Campanario.
