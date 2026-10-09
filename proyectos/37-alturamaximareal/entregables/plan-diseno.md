# Altura Máxima Real Estate: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.alturamaxima.mx/ (plantilla de EasyBroker; inicio, ventas, rentas, contacto, vender mi casa y ¿quiénes somos?). Inmobiliaria en Av. Beethoven #5612, Col. La Estancia, Zapopan. Teléfonos 33 3327 8984 y 33 1811 4983 (WhatsApp), alturamaximarealestate@gmail.com, Facebook, Instagram y YouTube.

**Materia prima:** el clon no trae fotos (todas en `assets.easybroker.com`). El 2026-10-09 se leyó su listado completo: 433 propiedades (220 en venta, 175 en preventa, 38 en renta; 252 en Puerto Vallarta, 127 en Zapopan, 21 en Bahía de Banderas, 18 en Guadalajara) a `rediseno/src/data/propiedades.json`, y se bajaron 28 fotos a 1200 px (sus 9 destacadas y una propiedad representativa de cada zona con 3 o más en venta), su logotipo y el sello de AMPI.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): ninguna foto, 4 a 6 recursos fallidos.

## Qué tiene que lograr el sitio

1. Que quien busca en Zapopan o en Vallarta sepa en segundos qué le alcanza y dónde.
2. Escribir por WhatsApp con su presupuesto, sus m² y la zona.
3. Captar a quien quiere vender (evaluación gratuita).

## Concepto

El azul de su logotipo y un azul noche, la arena de Vallarta y un acento de sol. Cormorant Garamond para los titulares (lujo sereno) y Outfit, geométrica como su logotipo.

## Elemento memorable: "El metro cuadrado, por zona"

Con sus propios precios y m² se calcula la mediana del precio por m² de cada zona. El usuario mueve su presupuesto y los m² que busca: aparece su límite por m² y una línea sobre las barras de cada zona ("Te alcanza" o no) y cuántas propiedades caben. Al tocar una zona, su foto y sus propiedades del m² más barato al más caro, con enlace a la ficha. Distinto del mapa de 27 Alcázar: aquí la pregunta es "¿dónde me rinde más el dinero?".

## Secciones

1. Hero: H1, presentación, cifras del listado y dos paneles con foto: Zapopan y Puerto Vallarta.
2. El metro cuadrado, por zona.
3. Destacadas (6 con foto propia).
4. Rentas (38, de la más barata a la más cara).
5. Vender mi casa (3 puntos y evaluación gratuita).
6. Contacto con dirección, Maps, redes y AMPI.
