# Florería Flordivan: plan de rediseño (método 1.1)

**Sitio original:** https://www.flordivan.com/ (WordPress con WooCommerce)
**Materia prima:** clon en `../sitio/`, `investigacion/crudo.json` (inicio, una ficha, eventos, tienda y ramos) y `original.html`. El catálogo completo (45 productos con SKU, precio, categoría, disponibilidad y ficha) se tomó con `curl` de su API pública de tienda (`/wp-json/wc/store/v1/products`, 2026-09-28) y quedó en `rediseno/src/data/catalogo.json`.
**Rubro:** florería boutique y diseño floral para eventos. **Ciudad:** Guadalajara, con envío a domicilio en la zona metropolitana (no publica dirección).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 9,268 px en escritorio y 29,773 px en el celular, 16 imágenes rotas y 70 errores de consola (el slider y la carga diferida no corren en el clon).

## Qué tiene que lograr el sitio
1. Pedir una caja o arreglo con la cantidad, el color y el mensaje de la tarjeta ya decididos, por WhatsApp o en su tienda.
2. Cotizar el diseño floral de una boda o evento.
3. Saber cuándo y dónde entregan.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| malva | #847878 | El color de su logo (muestreado). Solo decorativo: bordes y la leyenda de la caja (4.25:1 sobre blanco) |
| ciruela | #5c4a4d | El malva oscurecido: botones y "Entregas". Blanco encima 8.26:1; sobre palo 7.14:1 |
| frambuesa | #8d3a55 | Precios y acentos, del tono de sus rosas fucsia. 6.32:1 sobre palo |
| palo | #f7ecea | Rosa palo de sus cajas. Tinta encima 13.37:1; gris 5.31:1 |

**Tipografía:** su logo es una romana alta y fina; títulos en Playfair Display, texto en Inter.

## Elemento memorable
**"Llena tu caja"**: su producto estrella, la caja redonda de rosas, dibujada desde arriba con su leyenda "FLORDIVAN BOUTIQUE DE FLORES" en el borde. Eliges cuántas rosas (sus seis tamaños: 24, 50, 75, 100, 150 y 200, de $850 a $5,400) y de qué color (sus seis: rojas, rosas, blancas, amarillas, fucsia y lilas): la caja se llena con **esa cantidad exacta** de rosas, acomodadas en espiral como en una caja real. Escribes el mensaje y aparece en la tarjeta junto a la caja (cada pedido incluye moño y tarjeta). "Pedir por WhatsApp" manda tamaño, color, precio y el texto de la tarjeta; "Comprar en su tienda" abre la ficha de esa caja.
**Por qué no repite otros:** "¿Llega hoy?" (otra florería) resuelve la hora de entrega y "¿Para quién es?" el destinatario; aquí se **ve el tamaño** de lo que compras (24 contra 200 rosas) y la tarjeta que acompaña, con sus precios.
**Límite honesto:** el tono de cada color es nuestro para el dibujo; las fotos de las cajas por color no vinieron en el clon.

## Estructura
1. Encabezado con su logo, enlaces y WhatsApp.
2. Portada: H1 "Arreglos de flores a domicilio en la Zona Metropolitana de Guadalajara" (su frase), una caja real y una mesa de novios que decoraron.
3. Llena tu caja (el elemento).
4. Arreglos: 16 diseños con foto y precio, del más sencillo al más grande, y la línea de ramos de 24 a 300 rosas.
5. Diseño floral para eventos sociales: su texto, tres de sus puntos y cuatro fotos de sus bodas; "Cotizar mi evento".
6. Entregas y "Hechos a mano" (sus condiciones).
7. Pie y barra fija en el celular (WhatsApp, Cajas, Tienda).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios.
- Animar cada sección al hacer scroll.
- El texto "Lorem ipsum" de su página de eventos y las estrellas "0 de 5" de cada producto.
- Inventar dirección, horario de tienda o reseñas.
