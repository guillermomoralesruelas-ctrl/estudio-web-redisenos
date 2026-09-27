# Fotoproducto: plan de rediseño (método 1.1)

**Sitio original:** https://www.fotoproducto.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/2023/08/`), textos en `investigacion/crudo.json` (Inicio, Servicios y Nuestro Estudio), contacto en `investigacion/resumen.json`. Revisado también con curl en vivo el 2026-09-27.
**Rubro:** estudio de fotografía de producto y video corporativo, con renta de estudio (en la BD figura como EVENTOS). **Ciudad:** Zapopan, Jalisco (Col. Vista Hermosa; el sitio dice "Guadalajara").

## Qué le falta al clon (los "detallitos")
- El clon sale **en blanco** (alto 0 px en escritorio y en celular): su `index.html` tiene todas las `/` de las rutas cambiadas por `assets/` (`https:assets/assets/www.googletagmanager.com…`, `<assets/script>`), el bug de rutas de `clonar.mjs` anterior al arreglo del 2026-09-26. No se ve nada.
- Sí trae 113 imágenes: más de 100 fotos de producto propias (1080x1350, Canon EOS 5D + Photoshop), el logo y la portada del video institucional.
- No trae las fotos del equipo (13a…13e), los logos de clientes ni las miniaturas de los videos.

## Qué tiene que lograr el sitio
1. Que una marca vea su trabajo por especialidad y **cotice por WhatsApp** (fotografía, video o edición).
2. Que quien quiera **rentar el estudio** sepa qué incluye, cuánto cuesta con luces y cicloramas, y reserve por WhatsApp.
3. Llegar al estudio: Calle Vista Alta 675, Vista Hermosa, Zapopan, con Google Maps.

## Dirección visual
Concepto: el propio estudio. Fondo de papel cálido como el fondo blanco de un set, el azul marino de su sitio, y el naranja del ciclorama de su sesión de moda para las acciones. Las esquinas de visor de su logo "[producto]" enmarcan la foto de portada.

| Token | Color | Uso |
|---|---|---|
| tinta | #011f50 | Títulos, secciones oscuras (su color primario). Sobre papel 14.57:1; blanco encima 15.99:1 |
| petroleo | #005b64 | Enlaces y la sección de contacto (su acento). Sobre papel 7.14:1; blanco encima 7.83:1 |
| naranja | #b8441a | Botones (del fondo naranja de su sesión). Blanco encima 5.41:1 |
| naranja-hondo | #8f3212 | Hover y el total. Sobre blanco 7.98:1 |
| durazno | #f0a07a | Detalles sobre tinta (7.63:1). No se usa sobre petróleo (3.74:1) |
| papel / muro | #f7f4ee / #e9e4da | Fondo claro / muro del dibujo. Texto #3d4552 encima 8.81:1 y 7.63:1 |

**Tipografía:** Outfit (títulos, geométrica y redonda como las letras de su logo) y Heebo (texto; es una de las fuentes que carga su sitio). @fontsource, solo latino.

## Elemento memorable
**"Arma tu día en el estudio"**: un dibujo del set visto de frente (barra con rollos de papel, el ciclorama que baja y se curva sobre el piso, dos luces con softbox en tripié, el producto al centro en su base y las personas). Eliges medio día o día completo (con sus horas y precio reales), las horas dentro de ese rango, cuántas personas vienen (el cupo es de 12 y aparecen en el set), si agregas el equipo de iluminación (las luces se encienden) y cuántos cicloramas de color (se agregan rollos y el papel cambia de color). Una regla de 1 a 10 horas marca lo que cubre la modalidad, el total se suma con sus precios publicados ($3,000 / $2,000, luces $1,000 / $600, ciclorama $300 c/u) y el WhatsApp sale con todo escrito. Sale directo de su página "Nuestro Estudio" y no repite nada de la lista de usados.

## Estructura
1. Portada: H1 "Maestros de la fotografía de producto" (su lema), dos acciones (cotizar, rentar) y la foto de moda sobre naranja con las esquinas de visor.
2. Servicios: sus tres servicios (fotografía y video, estudio en renta, retoque y edición) como lista con filetes y su frase "No tomamos fotografías; las creamos".
3. Trabajo: pestañas por especialidad (moda, muebles, alimentos, vinos y licores, redes sociales) con su texto y 4 fotos de cada una, y "Cotizar" por WhatsApp con la especialidad escrita.
4. Video corporativo: la portada del video institucional y sus 5 videos de YouTube (enlaces, sin incrustar).
5. Arma tu día en el estudio + lo que incluye.
6. Sus cuatro valores en una lista de dos columnas.
7. Contacto: WhatsApp, teléfono, dirección con Maps, correo y redes.
8. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separador.
- Solo se anima el cambio de pestaña y el set (luces, papel, personas); ninguna sección entra con animación al hacer scroll.
- Sin filas de tarjetas idénticas: servicios y valores son listas con filetes; las fotos de cada especialidad van escalonadas.
- Sin degradados decorativos (el único es la sombra de la curva del ciclorama dentro del dibujo).
- Sin inventar reseñas, clientes, fotos, horarios ni precios; los colores del dibujo se declaran como ejemplo.
