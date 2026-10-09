# Hiya: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://hiya.mx/ (Webflow, una página). Robata & wine bar en Sinaloa 156A, Roma Norte, CDMX. Reservas en OpenTable; Instagram @hiya.winebar. No publica teléfono ni WhatsApp.

**Materia prima:** el clon no tiene fotos locales (las enlaza al CDN de Webflow). En la nube se bajaron a `assets/originales/` sus 4 fotos propias (barra con linterna, salón, spicy persian pickles, robata), su logotipo manuscrito y los títulos manuscritos de su carta. Dos fotos de platos que aparecen en su código vienen de otro proyecto de Webflow (otro logotipo en los platos) y no se usan. Pocas fotos, pero su carta (unos 40 platos, 50 vinos y 10 sakes con precio) sostiene el sitio. La carta se pasó a `src/data/carta.json` tal cual.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 7,708 px y móvil 7,996 px, sin desborde ni errores, pero depende del CDN de Webflow y de Weglot.

## Qué tiene que lograr el sitio

1. Que se entienda qué es Hiya y cuándo abre (su sitio da tres horarios distintos).
2. Ver la carta y los vinos con precios, fácil en el celular.
3. Reservar en OpenTable.

## Concepto

Carbón de robata, papel washi y la luz naranja de sus linternas; su verde y sus títulos manuscritos. Shippori Mincho (serifa de inspiración japonesa) y Work Sans.

## Elemento memorable: "Tu comanda"

Su sitio tenía el esqueleto de una comanda ("No. de comanda", "Nombre") que no hacía nada. Aquí funciona: se tocan platos y vinos (por copa o botella), la comanda de papel suma, divide entre los de la mesa y lleva a reservar.

## Secciones

1. Hero con H1, su frase, horario y sus fotos.
2. Carta y comanda (comida con sus títulos manuscritos; bebida con filtros por tipo de vino y sake).
3. El lugar.
4. Visítanos con horario y cómo llegar.
5. Barra fija en el celular: reservar, comanda, cómo llegar.
