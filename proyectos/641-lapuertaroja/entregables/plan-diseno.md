# La Puerta Roja Hotel Boutique: plan de rediseño (método 1.1)

**Sitio original:** https://lapuertarojahotel.com.mx/ (hecho en Framer)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/images/`), textos en `investigacion/crudo.json`.
**Rubro:** hotel boutique en una casa colonial de unos doscientos años, en la calle Galeana 46 de Álamos, Sonora (Pueblo Mágico). Tiene siete habitaciones temáticas, alberca, la panadería Teresita's, el restaurante Le Bleu y renta el espacio para bodas y eventos.

## Qué le falta al clon y al sitio actual (los "detallitos")

- **El sitio actual está comprometido.** La página "Nosotros" muestra publicidad de casinos en indonesio ("NAGA188: Slot Gacor…"), y el inicio termina con el texto "This is the free demo result…" de una herramienta que recupera sitios de archive.org. Parece que el sitio se reconstruyó con la versión de demostración de esa herramienta. Solo existen 4 páginas: las habitaciones Índigo, Concha, Escher, Turquesa, Azul y Rosa no tienen página.
- **El enlace de "Reservar" tiene fechas rotas:** check-in 2024-06-16 y check-out 2021-12-29.
- **Ninguna imagen tiene texto alternativo** (0 de 23).
- **Precios contradictorios:** cada habitación aparece con dos precios, por ejemplo Elefante a $2,700 y a $1,700.
- **Dos teléfonos distintos** en el encabezado (647 428 1552 y 647 428 0142).
- **Todo aparece triplicado:** la versión de escritorio, tableta y celular de Framer quedó en el HTML, así que el texto se repite 3 o 4 veces.

## Qué tiene que lograr el sitio

1. Que quien busca hotel en Álamos sienta la casa colonial en 3 segundos.
2. Que compare las siete habitaciones (capacidad y tarifa) y reserve en el motor de Cloudbeds.
3. Que sepa que hay desayuno de Teresita's y cena con música en Le Bleu.
4. Que quien organiza una boda o evento llame.

## Dirección visual

La casa es de muros encalados, columnas y arcos, con una puerta roja. El logo dibuja esa fachada: cinco arcos, y el del centro es la puerta roja.

| Token | Color | Uso |
|---|---|---|
| cal | `#f6f2ec` | fondo general (muro encalado) |
| piedra | `#e9e2d6` | bloques alternos |
| tinta | `#141414` | texto y logo (color del sitio original) |
| roja | `#e42320` | la puerta: solo en la acción principal y en la puerta elegida (color del logo) |
| anil | `#1f3561` | bloque de restaurantes (el azul de la habitación Índigo y de la fuente) |
| grafito | `#424344` | texto secundario (del sitio original) |

**Tipografía:** Playfair Display (títulos) e Inter (texto), las del sitio original.

## Elemento memorable: "Elige tu puerta"

Las siete habitaciones son siete puertas en arco, como la fachada del logo. Al elegir una, su puerta se pinta de rojo y se abren sus datos: capacidad, tarifa, foto si existe y el botón para reservar. Sale del nombre del hotel y de su logo.

## Estructura

1. **Encabezado** con el logotipo, navegación y botón "Reservar".
2. **Hero** a todo lo ancho, con las 3 fotos del carrusel original (alberca, sala y fuente). Título "Compartiendo doscientos años de historia" y los botones Reservar y Ver habitaciones.
3. **La casa:** "Una casa antigua al estilo Colonial", con fachada, cocina y detalle.
4. **Habitaciones:** "Elige tu puerta" (el elemento memorable).
5. **Teresita's y Le Bleu**, con sus fotos, en el bloque añil.
6. **Eventos:** "Un encantador entorno para conmemorar tus momentos", con tres fotos y el botón "Solicitar información".
7. **Visítanos:** dirección, teléfono, cómo llegar y redes.
8. **Barra fija en el celular** con Reservar, Llamar y Cómo llegar.

## Qué se evita

- Etiquetas en mayúsculas sobre cada sección, numeración y puntos medios.
- Siete tarjetas de habitación iguales: se reemplazan por las puertas.
- Animaciones al hacer scroll: solo hay la transición del hero y el cambio de puerta.
- Inventar descripciones o amenidades de las habitaciones que no las tienen: solo Elefante tiene descripción y amenidades en el original.
