# Dulce Vega Make up Artist Studio: plan de rediseño (método 1.1)

**Sitio original:** https://dulcevega.mx/ (WordPress con WooCommerce: estudio, academia y tienda de cosméticos)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` (inicio, biografía, cursos de peinado y maquillaje, servicios con lista de precios). Revisión del sitio en línea con `curl` el 2026-09-28 (precios y mensajes de WhatsApp).
**Rubro:** maquillaje y peinado para novias, quinceañeras y eventos, academia y marca de cosméticos. **Ciudad:** Guadalajara, Jal. (Av. de las Rosas 2925, Chapalita).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 12,005 px en escritorio y 12,135 px en el celular, desborde de 640 y 1,610 px, 41 de 41 imágenes rotas y 167 errores de consola.

## Qué tiene que lograr el sitio
1. Que la novia o la quinceañera sepa cuánto cuesta arreglarse con las mujeres que la acompañan y cotice su fecha por WhatsApp.
2. Mostrar paquetes, cursos, su línea de cosméticos y el contacto.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| vino | #2b1a22 | Un tono de labial muy profundo: el boleto, el contacto. Blanco encima 16.49:1; rubor 10.80:1 |
| labial | #9c2f55 | Botones y precios. Blanco encima 7.12:1; sobre polvo 6.50:1 |
| rubor | #f2c6cf | Detalles sobre vino y la silueta de la festejada |
| polvo | #fbf3f1 | Fondos, como polvo compacto. Gris #6b5a60 encima 5.89:1 |

**Tipografía:** Bodoni Moda (didona de revista de moda, en cursiva para el nombre) para títulos e Inter para texto. El clon no trae logo: el nombre va en texto.

## Elemento memorable
**"Tu corte de honor"**: eliges si la festejada es novia o quinceañera y sumas, con + y −, a mamá, suegra o madrina, damas o hermanas y amigas. Aparecen como siluetas junto a la festejada (con velo o tiara) en un boleto vino que suma su paquete más un Paquete Social por cada una, "4 mujeres listas: $15,400", y lo manda por WhatsApp para cotizar la fecha.
Sale del negocio: su página de servicios dice que tienen "capacidad para maquillar y peinar a las mujeres importantes de tu gran día. Sin importar la cantidad que sea", y publica los tres paquetes con precio.
**Por qué no repite otros:** 546 acomoda invitados en un salón, 612 arma un viaje, 503 compara paquete contra suelto. Aquí se suma **gente que se arregla** alrededor de una festejada.
**Límite honesto:** se usan los precios publicados junto a cada paquete; sus botones de WhatsApp dicen otros ($8,300, $6,000 y $1,800 "con el staff"), así que el boleto aclara que el estudio confirma el precio final.

## Estructura
1. Encabezado con el nombre, enlaces y WhatsApp.
2. Portada: su lema, H1 "Maquillaje y peinado para novias, quinceañeras y eventos en Guadalajara" y la foto de una novia.
3. Tu corte de honor (el elemento).
4. Sus paquetes con fotos de maquillaje y producciones.
5. Aprende con ellas: 6 cursos y su línea de cosméticos.
6. Visita el estudio: dirección, horario, contacto.
7. Pie y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas ("NUESTROS SERVICIOS", "LISTA DE PRECIOS"), numeración y puntos medios.
- "La mejor academia de Jalisco", "somos tu mejor opción": superlativos.
- Recortes de revista y carteles con texto encima.
