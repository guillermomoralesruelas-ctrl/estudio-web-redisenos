# Casa Orígenes: plan de rediseño (método 1.1)

**Sitio original:** https://casaorigenes.com.mx/
**Materia prima:** clon del fabricador en `../sitio/` (imágenes en `sitio/assets/_astro/`, textos y menú en `investigacion/crudo.json`).
**Rubro:** restaurante de desayunos y media tarde, café de especialidad y panadería. Xalapa, Veracruz. Abierto de lunes a domingo de 9 am a 6 pm.

## Qué le falta al clon (los "detallitos")

- Al clon le faltan 2 hojas de estilo (`MainLayout`, `SignatureSection`) y 12 scripts de Astro, así que abre sin estilos: enlaces azules subrayados y texto con la fuente del navegador. Además hay 8 imágenes rotas en escritorio y 14 en móvil (el HTML pide medidas que no se descargaron).
- Hay desborde horizontal de 776 px en escritorio y 1,666 px en móvil: la página se mueve de lado.
- El carrusel del inicio no se muestra: el hero queda como un bloque gris, sin foto ni mensaje.
- El menú completo vive en otra página y en el clon no se ve; el inicio solo enseña cuatro platillos.
- Las fotos del chef y del equipo no se descargaron. El rediseño presenta al equipo solo con texto y no inventa fotos.
- Los videos de burritos y kebabs no están en el clon; se quitan sus referencias.

## Qué tiene que lograr el sitio

1. Que quien busca "desayuno en Xalapa" vea en 3 segundos el lugar (terraza, alberca, pérgola) y un platillo.
2. Que revise el menú completo con precios sin salir de la página.
3. Que reserve por WhatsApp con un mensaje ya escrito, y que en móvil el botón esté siempre a la mano.
4. Que sepa el horario y cómo llegar.

## Dirección visual

La casa se ve en sus fotos: madera clara, sillas de rejilla, loza verde salvia y azul cobalto, sol y pérgola. El sitio toma esos materiales en lugar de un esquema genérico de restaurante oscuro y dorado.

| Token | Color | Uso |
|---|---|---|
| crema | `#f7f1e7` | fondo general |
| papel | `#efe5d4` | bloques alternos |
| tinta | `#231f20` | texto y logo (color original del logo) |
| ambar | `#cc7323` | acento de la marca (del CSS original): botones y precios |
| salvia | `#7d8f6e` | detalles y etiquetas (loza verde) |
| cobalto | `#1d3f6e` | bloque de horario y pie (loza azul) |

**Tipografía:** Cormorant Garamond (títulos, ya es la de la marca) con Inter (texto). Se sirven desde el propio sitio con @fontsource.

## Elemento memorable: "¿Qué se antoja ahora?"

Una tarjeta que lee la hora de Xalapa y recomienda según el momento del día:
- **9 a 12:** desayuno, con chilaquiles o benedictos.
- **12 a 18:** media tarde, con la Smash Chicken Burger o un rol de canela con café.
- **Cerrado:** "Abrimos mañana a las 9" y el botón para reservar.

La tarjeta abre la pestaña correspondiente del menú. Sale del negocio mismo, porque es un lugar de desayuno y media tarde con horario corto.

## Estructura

1. **Encabezado** con logo, navegación y botón "Reservar".
2. **Hero** (el arreglo principal): foto de la alberca y terraza, título "Cocina con raíces", frase "Aquí no solo comes, vuelves a lo esencial", horario de hoy, y los botones Reservar y Ver menú.
3. **Historia:** "Todo gran sabor tiene una gran historia", con dos fotos de la terraza.
4. **Los favoritos:** 4 platillos con foto y precio (Benedictos, Toast Durazno y Prosciutto, Chilaquiles, Smash Chicken Burger).
5. **Menú completo** en 4 pestañas (Desayuno, Media tarde, Café y bebidas, Panadería), con los 85 productos y sus precios, más la tarjeta "¿Qué se antoja ahora?".
6. **Qué nos hace diferentes:** los cuatro puntos del original, en texto corrido con una foto grande, no en cuatro tarjetas iguales.
7. **Equipo:** la chef Lesly Benitez con su cita y el equipo de cocina, solo con texto.
8. **Galería** de la terraza y la mesa.
9. **Visítanos:** dirección, mapa, horario, teléfono y redes.
10. **Barra fija en móvil** con Reservar, Llamar y Cómo llegar.

## Qué se evita (revisión contra lo genérico)

- Títulos pequeños en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador.
- Animar cada sección al hacer scroll. Solo hay una transición suave en las fotos del hero.
- Cuatro tarjetas idénticas para "qué nos hace diferentes".
- Inventar reseñas, fotos del equipo o datos del negocio.
