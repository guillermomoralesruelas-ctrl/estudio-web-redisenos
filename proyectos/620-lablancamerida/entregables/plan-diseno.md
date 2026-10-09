# La Blanca Mérida: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://lablancamerida.com/ (HighLevel / LeadConnector, hecho por edubusiness.io). Comida yucateca en Plaza del Peñón 104, Parque Manzanares, León. Martes a domingo de 2 a 10 pm. Teléfono 477 121 4234, correo, Facebook e Instagram. Su botón "Whatsapp" lleva a la portada: no hay número.

**Materia prima:** el clon enlaza las imágenes al CDN de HighLevel. En la nube se bajaron sus 45 imágenes y se eligieron 11 fotos de platillos que parecen propias (las de celular, 3024x4032, y las de su mesa: empanadas, salbutes, tacos y plato de cochinita, panucho, longaniza, frijol con puerco, agua de chaya, café de jarro, malteada, marquesita) y su logotipo (casita maya). Se recortaron los letreros pegados. No se usan las de la plantilla (chefs, restaurantes de Londres y París, app de pedidos, íconos) ni cuatro de platillos que parecen generadas (1408x768 y 5504x3072). Tiene menú con precios y tres promociones de martes a jueves.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): 4 imágenes rotas y 3 recursos fallidos; la mayoría de las fotos dependen del CDN de HighLevel.

## Qué tiene que lograr el sitio

1. Antojar: cochinita, top 3 y menú con precios, fácil en el celular.
2. Que se entiendan las promociones de martes a jueves y el horario (lunes cerrado).
3. Ordenar por teléfono y llegar.

## Concepto

La "ciudad blanca" con el morado de las letras de su logotipo, el achiote de la cochinita, la chaya y el huano de su casita; una cenefa de punto de cruz como de hipil. Fraunces y Outfit.

## Elemento memorable: "Tu antojo de hoy"

Se arma el pedido con su menú y se elige el día (empieza en hoy, hora de León). De martes a jueves las promociones se aplican solas (3 x 2 en tacos, 2 tortas por $80, 2 salbutes con bebida por $85) y dice cuánto ahorras; otro día dice cuánto saldría el mismo pedido de martes a jueves. El lunes avisa que cierran. Se ordena por teléfono.

## Secciones

1. Hero con H1, estado abierto/cerrado, foto de cochinita y acciones.
2. Top 3.
3. Cochinita pibil, su platillo estrella.
4. Menú en tres pestañas (platillos, bebidas, postres).
5. "Tu antojo de hoy" con sus promociones.
6. Historia, por qué elegirnos y reseñas.
7. Visítanos con dirección, horario, teléfono, correo, redes y cómo llegar.
8. Barra fija en el celular: ordenar, menú, cómo llegar.
