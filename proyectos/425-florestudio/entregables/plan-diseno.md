# Plan de diseño — Florestudio

**Sitio original:** https://florestudio.shop/  
**Negocio:** Florestudio — ramos florales artesanales con entrega a domicilio en Guadalajara y ZMG  
**Método:** 1.1 — Fecha: 2026-09-27

---

## Qué le falta al clon (los "detallitos")

Del QA del clon (qa-rediseno.mjs, paso 2):
- Escritorio: alto 20,089 px, 429 desbordes, 15 imágenes rotas, 69 errores de consola, 1 recurso fallido (WC ajax)
- Móvil: alto 15,685 px, 1,319 desbordes, 7 imágenes rotas, 61 errores de consola
- Los errores provienen del carrito de WooCommerce que no funciona localmente (`?wc-ajax=get_refreshed_fragments`)
- Los estilos de Elementor no cargan → desplazamiento horizontal masivo
- 15 fotos de producto de 2026/02 y 2026/05 no se descargaron en el clon (solo hay 1 de feb y 7 de mayo)

## Qué tiene que lograr el sitio

La acción principal es que el visitante **contacte por WhatsApp** para pedir o cotizar su ramo. El visitante necesita saber:
1. ¿Tienen flores bonitas? (ver fotos del producto)
2. ¿Me alcanza el presupuesto? (ver precios)
3. ¿Llegan hoy? (entrega el mismo día)

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| `--color-fondo` | `#fdf8f4` | Crema muy cálido — fondo general |
| `--color-tinta` | `#1c1410` | Café muy oscuro — texto principal |
| `--color-acento` | `#c0392b` | Rojo de las rosas — CTAs, precios |
| `--color-suave` | `#f9ebe4` | Rosa muy pálido — fondos alternativos |
| `--color-verde` | `#2d5a27` | Verde follaje — encabezado, footer |

**Tipografía:**
- Títulos: `Playfair Display` (serif elegante, @fontsource/playfair-display latin-400 y latin-700) — evoca florería artesanal sin ser cursi
- Cuerpo: `Inter Variable` (@fontsource/inter/variable.css) — para precios, FAQ y UI

## Elemento memorable — "¿Cuánto quieres gastar?"

Un control deslizante (range input) de $199 a $2,799 pesos con paradas en los precios reales del catálogo. Al mover el slider, aparecen resaltados los arreglos que están en ese rango (hasta ese precio). El visitante puede elegir uno y el botón de WhatsApp tiene prellenado el nombre del ramo, el precio y el mensaje "Me interesa este arreglo". Esto responde directamente a la pregunta más real del comprador de flores: "¿con cuánto tengo para algo bonito?".

**Por qué es distinto:**
- 420-floreriaguadalajara: selector por ocasión (6 botones estáticos)
- 422-floreriamrsflowers: reloj con cuenta regresiva a las 6pm
- Este: slider de presupuesto dinámico que filtra el catálogo real

## Estructura

1. **Encabezado fijo** — logo (texto) + botón WhatsApp
2. **Hero** — H1 + propuesta de valor + CTA principal WhatsApp
3. **"¿Cuánto quieres gastar?"** — slider de presupuesto + catálogo filtrado (elemento memorable)
4. **Catálogo completo** — 8 ramos con foto real, nombre y precio
5. **Por qué Florestudio** — 4 ventajas (textos reales del sitio)
6. **Cómo pedir** — 3 pasos simples
7. **FAQ** — 5 preguntas reales
8. **Pie** — WhatsApp + zona de entrega + créditos
9. **Barra móvil fija** — WhatsApp + llamada + Maps

## Qué se evita (revisión contra lo genérico)

- Sin etiquetas "01 / 02 / 03" numeradas en cada sección
- Sin tarjetas idénticas icono + título + párrafo para todas las ventajas
- Sin degradados rosados innecesarios como fondo
- Sin reseñas de Google inventadas
- Sin stock ni imágenes generadas con IA
- El slider usa precios reales del catálogo — no es decorativo
