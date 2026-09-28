# Homme Barbers: plan de rediseño (método 1.1)

**Sitio original:** https://barberiaencancun.com/ (WordPress con Elementor)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` (inicio y páginas de corte, barba, facial y depilación). Revisión del sitio en línea con `curl` el 2026-09-28 (precios de nariz y greca, enlaces).
**Rubro:** barbería sin cita (corte, barba, cejas, faciales, depilación). **Ciudad:** Cancún, Q. R. (Av. Huayacán, dentro de una plaza según una reseña).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 9,706 px en escritorio y 13,283 px en el celular, 14 imágenes rotas de 28 y 45 errores de consola.

## Qué tiene que lograr el sitio
1. Saber cuánto cuesta lo que quieres hacerte y si te conviene un paquete.
2. Llegar (sin cita), saber si está abierto y llamar.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| negro | #17161a | El negro de su local y sus capas. Blanco encima 18.01:1; latón #d9a441 8.01:1; humo #b9b0a6 8.42:1 |
| rojo | #b3261e | El rojo del poste de barbería: botones. Blanco encima 6.54:1; sobre crema 5.72:1 |
| crema | #f5efe6 | La madera clara de su mostrador: fondos. Gris #5e5750 encima 6.22:1 |

**Tipografía:** Bebas Neue (letras condensadas de rótulo de barbería) para títulos e Inter para texto.

## Elemento memorable
**"¿Paquete o suelto?"**: marcas lo que te vas a hacer (corte, barba, ceja, facial, greca, oídos, nariz) y un boleto negro compara el precio suelto contra el mejor de sus cuatro paquetes (Premium, Gold, Platino, VIP), sumando lo que el paquete no cubre. Dice "Te conviene el Paquete Premium: ahorras $100 y además incluye facial" o "Pídelo suelto. Por $50 más, el Premium suma…", y manda el pedido por WhatsApp. Arriba, en la portada, un aviso de "Abierto ahora" con la hora de Cancún.
Sale del negocio: su sitio publica precios sueltos y cuatro paquetes con listas largas; el cliente no sabe cuál le conviene. Es "sin cita", así que saber si está abierto importa.
**Por qué no repite otros:** 612 suma un viaje, 419 llena una caja de flores; aquí se **compara** suelto contra paquete para decidir.
**Límite honesto:** los extras de Gold y VIP (mascarillas, hidratación, masaje) no tienen precio suelto, así que no se suman al ahorro; se mencionan como regalo.

## Estructura
1. Encabezado con el nombre, enlaces y teléfono.
2. Portada: "Abierto ahora", H1 "Barbería en Cancún, sin cita", foto del local.
3. ¿Paquete o suelto? (el elemento).
4. Sus paquetes, los cortes que dominan y fotos del equipo y el mostrador.
5. Reseñas.
6. Pasa sin cita: dirección, horario y contacto.
7. Pie y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios.
- Estrellas "⭐" en los nombres de los paquetes y "Las 4 mejores barberías en Cancún".
- Fotos de banco y las que parecen hechas con IA.
