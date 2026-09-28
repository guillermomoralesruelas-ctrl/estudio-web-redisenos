# El Palmar: plan de rediseño (método 1.1)

**Sitio original:** https://elpalmarmzt.com/
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/assets/`), textos y menú en español de `investigacion/original.html` y el sitio en vivo leído con curl el 2026-09-28.
**Rubro:** restaurante de mariscos y sushi. **Ciudad:** Mazatlán, Sinaloa (Av. Sábalo Cerritos 3205).

## Qué le falta al clon (los "detallitos")
- Carga 29 MB de imágenes; nueve PNG pesan más de 1 MB (el de la mezcalina, 2.4 MB).
- Las fotos llevan impresos el nombre del platillo y el logo, y las dos charolas del menú traen credenciales C2PA de imagen generada.
- El menú mezcla nombres en inglés en la versión en español ("Chocolate Cake", "House Red", "Flavoured Margarita").

## Qué tiene que lograr el sitio
1. Reservar mesa o pedir a domicilio por WhatsApp.
2. Ver el menú completo con precios, rápido, en el celular.
3. Saber dónde está y a qué hora abre.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| océano / océano-medio | #071828 / #0d2a42 | encabezado, portada, mapa, pie |
| cian | #3dc8e8 | acentos sobre oscuro (de su logo) |
| naranja / naranja-hondo | #f7941d / #a4520a | botones y precios (del sol de su logo) |
| mar | #0f5e75 | enlaces y botones de línea sobre claro |
| arena | #f6efe4 | fondo (sus mesas de madera y petates) |

**Tipografía:** DM Serif Display en títulos y Outfit en texto (su sitio usa Poppins y Montserrat).

## Elemento memorable
**"La costa en un ceviche"**: siete de sus ceviches y aguachiles llevan nombre de un lugar del Pacífico (San Carlos, Loreto, Maviri, Altata, Mazatlán, Teacapán y San Blas). Un mapa del Golfo de California con esos siete puntos; al tocar uno aparece el platillo con sus ingredientes, sus precios (grande y tostada), su foto cuando la hay y un WhatsApp para pedirlo. Un círculo marca dónde está El Palmar.

## Estructura
1. Portada: lema, H1 "Mariscos y sushi en Mazatlán", horario, reservar y pedir, sus tres cifras y tres fotos.
2. La costa en un ceviche.
3. El menú completo en pestañas (sus 9 categorías y 168 platillos).
4. Tres reseñas de Google Maps de las que publican.
5. Visítanos: su mapa de Google, dirección, horario, teléfonos, domicilio (WhatsApp, Rappi, DiDi Food) y redes.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador (los del menú pasan a comas).
- Animar cada sección al hacer scroll (su sitio usa GSAP y un cursor propio; aquí no hay animaciones).
- Tarjetas idénticas repetidas: el menú es una lista, no una rejilla de 168 tarjetas.
- Inventar reseñas, fotos, precios o datos del negocio.
