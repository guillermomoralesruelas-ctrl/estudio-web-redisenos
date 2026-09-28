# Kiteboard Mexico Ikarus: plan de rediseño (método 1.1)

**Sitio original:** https://kiteboardmexico.com/ (WordPress con Elementor y WooCommerce; en inglés y francés)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` (inicio, Kiteboard Lessons, versión en francés y dos fichas de clase). Con `curl`, el 2026-09-28, Accommodations (cuartos y tarifas), Restaurant (menú) y Kiteboard Lessons (precios de clases y rentas).
**Rubro:** escuela de kitesurf y wingfoil con hotel ecológico, camping y restaurante. **Ciudad:** Isla Blanca, Cancún, Q. Roo (laguna Chacmuchuch).
**Idioma:** el sitio está en inglés para su público internacional, así que el rediseño va en inglés (como los demás sitios en inglés de `METODOS.md`).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 6,084 px en escritorio y 8,386 px en el celular, 62 y 66 imágenes rotas de 84, 60 errores de consola y 1 recurso fallido.

## Qué tiene que lograr el sitio
1. Que quien planea un viaje de kite sepa cuánto le cuesta (clase y hospedaje) y lo pida por WhatsApp.
2. Mostrar por qué la laguna es buena para aprender, el hotel y el contacto.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | #12303a | El agua profunda al atardecer: encabezado, boleto, reseñas. Blanco encima 13.91:1; agua #8fd3d6 8.25:1; durazno #f3a37e 6.86:1 |
| laguna | #0b6b74 | El turquesa de la laguna en sus fotos: selección y enlaces. Blanco encima 6.23:1; sobre arena 5.45:1 |
| kite | #c44a18 | El naranja de sus kites: WhatsApp. Blanco encima 4.84:1 |
| arena | #f6efe2 | La arena de Isla Blanca: fondos. Gris #5a6468 encima 5.31:1 |

**Tipografía:** Sora para títulos (palo seca amplia y aireada) e Inter para texto.

## Elemento memorable
**"Your kite trip, priced before you pack"**: eliges clase (grupal de 2, 3 o 6 horas por persona, o privada de 1, 2, 3 o 6 horas), cuántos van (1 a 3) y dónde duermen (studio king, triple, doble, camping o "tengo dónde"), con las noches. A la derecha, un boleto oscuro suma todo con sus tarifas y muestra un kite por cada hora en el agua (horas × personas); el botón manda el resumen por WhatsApp.
Sale del negocio: son escuela y hotel a la vez, con precios publicados en muchas fichas separadas (clases, rentas, cuartos, camping); quien viene de lejos quiere saber el total del viaje.
**Por qué no repite otros:** 486 cotiza traslados, 546 acomoda invitados, 651 compara precios de tratamientos. Aquí se arma un viaje que combina horas de clase y noches de hotel.
**Límite honesto:** el total es una estimación con las tarifas de sus páginas de Lessons y Accommodations; el boleto dice que la escuela confirma fechas, viento y precio final. Las tarifas de cuartos no coinciden entre páginas de su sitio (ver OPORTUNIDADES).

## Estructura
1. Encabezado con su logo, enlaces y WhatsApp.
2. Portada: H1 "Learn kitesurfing and wingfoiling on a flat, shallow lagoon, and sleep a few steps away", sobre su foto aérea de la laguna.
3. Cuatro razones (agua plana y baja, lancha y moto de apoyo, desde 2002, cualquier edad que nade).
4. Your kite trip, priced before you pack (el elemento).
5. Lessons and rentals: rentas y 3 fotos de clases.
6. Stay on the lagoon: cuartos, servicios y restaurante.
7. Reseñas de Tripadvisor.
8. Contacto y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios (su portada separa servicios con "·").
- "The best place to learn kitesurfing… one of the best places on this planet": superlativo.
- Sellos (bitcoin, Good Travel Scan) y logos de socios como decoración.
