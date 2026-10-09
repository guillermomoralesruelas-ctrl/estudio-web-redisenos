# Hearts on Film: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://heartsonfilm.com/ (una sola página). Estudio boutique de videografía cinematográfica de bodas en Monterrey, Nuevo León, con bodas de destino; 8 años de experiencia. Contacto solo por WhatsApp (wa.link/jn1uep, que abre el +52 1 81 8077 2534) e Instagram @hearts.on.film.

**Materia prima:** el clon no traía fotos (las carga de i.imgur.com). En la nube se bajaron del sitio en vivo a `assets/originales/` sus 11 imágenes: cuadros 4K de sus films (Valeria & Pablo en Cancún, Silvia & Héctor y Nidia & Fili en Santiago, NL, y sus highlights) y el ramo del hero. Textos de `investigacion/crudo.json`.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 10,304 px y móvil 12,725 px, sin desborde, pero con las 11 imágenes rotas, 13 errores de consola y 12 recursos fallidos.

## Qué tiene que lograr el sitio

1. Emocionar con sus imágenes y su tono, sin perder claridad.
2. Que la pareja escriba por WhatsApp con su fecha y destino.
3. Resolver de antemano lo que preguntan (precio, qué incluye, tiempos, viajes, reserva).

## Concepto

Sala de cine y vestido de novia: negro cálido, marfil, lino, verde salvia de sus jardines y el rojo del punto de grabación. Playfair Display con itálicas (como su sitio) y Jost.

## Elemento memorable: "Su boda, en la línea de tiempo"

Una línea de tiempo de edición (como la de DaVinci Resolve, donde hacen su color): la pareja pone su fecha y destino; aparecen los días que faltan, el fin de semana a apartar (trabajan máximo una boda por fin de semana), el clip de edición, color y música, y la ventana real de entrega (6 a 10 semanas después). El botón manda por WhatsApp la fecha y el destino.

## Secciones

1. Hero con su film de Valeria & Pablo y H1.
2. Cifras (8 años, MTY y destino, 5.0).
3. Filosofía con el ramo de tulipanes.
4. Bodas recientes (sus tres films).
5. Highlights.
6. Su boda en la línea de tiempo.
7. Proceso y equipo.
8. Reseñas, preguntas frecuentes y cierre "Si llegaste hasta aquí, algo hizo clic".
9. Barra fija en el celular: WhatsApp, su fecha, Instagram.
