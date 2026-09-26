# Don Sanchez: plan de rediseño (método 1.1)

**Sitio original:** https://donsanchezrestaurant.com/ (WordPress con el tema Divi; inicio, /an_jose_del_cabo_restaurant (Cuisine), /los_cabos_events_venues (Events), /wine_cava_san_jose_del_cabo (Cava), /don_sanchez_san_jose_del_cabo_menu (Menu), /reservations, /7338-2 (Reservation Policies), /contact-us y /blog).
**Materia prima:** clon en `../sitio/` (50 imágenes en `sitio/assets/wp-content/uploads/`), textos de cinco páginas en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. **Textos que no están en `crudo.json`:** las políticas de reservación (`/7338-2/`: menú infantil, descorche, pago, tolerancia, mascotas, tiempos de mesa, no show) se tomaron del sitio real con curl el 2026-09-26; esa descarga y la de /reservations, /contact-us y /blog (solo para OPORTUNIDADES) se guardaron en una carpeta temporal del sistema, fuera del estudio. No se descargó ninguna imagen nueva.
**Rubro:** restaurante de cocina mexicana contemporánea ("Baja Med cuisine with a twist") del chef Edgar Román, con cava de vinos y salón para eventos. **Ciudad:** San José del Cabo, Baja California Sur (Blvd. Antonio Mijares 27, Centro, distrito del arte). Es parte de Grupo Ediths, un grupo local de Los Cabos; no es una cadena grande ni un directorio: sitio propio con fotos propias de platillos, salón y chef.
**Idioma:** el sitio está en inglés (todos sus textos; solo el logo dice "Pasión culinaria por la Baja"), y su público son sobre todo visitantes extranjeros. **El rediseño va en inglés** (`lang="en"`). La documentación del estudio sigue en español.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): **ningún H1** (el sitio real tampoco tiene), 7 imágenes rotas en escritorio y en móvil (6 sin `src` de los carruseles de Divi y la bandera de GTranslate con 404), 23 errores de consola (fuentes de Divi bloqueadas por CORS y conexiones al dominio real), 1 recurso fallido. En la primera corrida la versión de escritorio no terminó de cargar en 45 s y la captura salió con el video del inicio en gris.
- Los carruseles de platillos, premios y eventos salen desarmados (números "4" y "5" sueltos en lugar de fotos) y el video del inicio depende del sitio real.
- Hay fotos que parecen de banco: `pexels-helena-lopes-696218-1-1-300x200.jpg` (nombre de Pexels) y, por su estilo, `Cava-don-sanchez-1.jpg`, `Cava-don-sanchez-2.jpg` y `Carrusel-bodas.jpg`. **No se usan.**
- Fotos: 23 copias `.webp` (de 1.83 MB a 1.21 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar mesa.** El sitio usa OpenTable (widget con `rid=335539` en el inicio y en /reservations): el botón principal abre OpenTable; WhatsApp va como segunda vía.
2. **Enseñar el menú completo con precios** en la misma página (hoy está en otra página y en el inicio hay precios distintos).
3. Contar lo que lo hace distinto: cocina del chef Edgar Román con ingredientes de la península, cava con vinos mexicanos, premios (Five Star Diamond, 250 Best de Culinaria Mexicana, Queer Destinations) y música en vivo diaria.
4. Eventos (bodas, cenas de ensayo, grupos) y las políticas de reservación que hoy están enterradas (y revueltas) en `/7338-2/`.

Público: turistas de Estados Unidos y Canadá que buscan dónde cenar en San José del Cabo, parejas que organizan bodas o cenas de ensayo, grupos corporativos y aficionados al vino.

## Dirección visual
El arena, el grafito y el cobre de su tema Divi y de su logo, con la madera, el barro y el ladrillo de sus fotos. El bloque oscuro (grafito) se reserva para el mapa de origen y el contacto.

| Token | Color | Uso |
|---|---|---|
| `arena` | `#f3f0eb` | Fondo general (versión clara del arena de su CSS) |
| `arena-2` | `#e0dcd5` | Arena de su CSS (`#e0dcd5`, el color de fondo que más se repite): menú, premios, políticas |
| `tinta` | `#2b2b30` | Títulos y fondo del mapa y del contacto (el grafito `#404047` de su CSS, más oscuro para contraste) |
| `texto` | `#4c4c52` | Texto normal (7.5:1 sobre arena, 6.2:1 sobre arena-2) |
| `cobre` | `#c3701e` | El cobre de su CSS y del logo: líneas y detalles |
| `cobre-oscuro` | `#96520f` | Botones con texto blanco (6.3:1) y enlaces sobre claro (5.5:1 sobre arena, 4.6:1 sobre arena-2) |
| `cobre-claro` | `#e39a52` | Detalles y precios sobre el fondo oscuro (6.3:1) |

**Tipografía:** las del sitio original, que `original.html` pide a Google Fonts: **Playfair Display** 500 (títulos, normal e itálica) y **Montserrat** 400 y 600 (texto), de @fontsource y solo el subconjunto latino. Poppins y Open Sans, que el sitio también carga, no se usan.

## Elemento memorable: "From the farm, the sea and the ranch" (mapa de origen)
El sitio dice que Don Sanchez "is inspired by the fresh ingredients found in the Baja California peninsula" y que celebra "the local products from the farm, the sea and the ranch"; su logo dice "Pasión culinaria por la Baja". Y su menú lo demuestra con nombres de lugares: queso fresco y cebolla orgánica **de Miraflores**, chips de fresa **de Pescadero**, cabra confitada **de la Sierra de San Francisco**, el mole ancestral de doña Sirenia Concepción Mora **de Huajuapan de León (Oaxaca)** y vinos **de Valle de Guadalupe, Ensenada, Hidalgo, Coahuila, Napa Valley y Columbia Valley** para la cava.

El elemento es un **mapa de la península de Baja California dibujado en SVG** (contorno simplificado a partir de coordenadas públicas), con un recuadro ampliado de Los Cabos, donde están San José del Cabo, Miraflores y Pescadero. Cada lugar es un punto de color según su origen (granja, mar, rancho, cava, cocina tradicional); los que están fuera de la península (Oaxaca, Hidalgo y Coahuila, Napa y Columbia Valley) van en una segunda fila de botones. Al elegir un lugar, una ficha muestra la frase del menú que lo menciona y los platillos que llevan ese ingrediente con su precio, y un botón de WhatsApp lleva el mensaje escrito ("I'd like to book a table… I want to try the Pork gorditas and the Golden onion tinga sopes (from Miraflores)") o, en los lugares de vino, la consulta de una cata en la cava. Sale del negocio, no es un adorno: es la promesa de su cocina ("regionally sourced") convertida en algo que el cliente puede explorar. Solo usa lugares, platillos y precios publicados.

## Estructura
1. Encabezado arena: logo, navegación (Origins, Menu, Cava, Events, Visit us) y "Book a table" (OpenTable).
2. Portada oscura sobre la foto del muro con el neón de Don Sanchez: "Signature cuisine by chef Edgar Román", H1 "Don Sanchez", "Live a culinary experience…", botones OpenTable y WhatsApp, y datos reales (horario, dirección, música en vivo diaria, 4.6 en Google con 468 reseñas).
3. La cocina: "Baja Med cuisine with a twist", el texto del inicio y de /Cuisine, fotos del salón y de un coctel; ficha del chef Edgar Román con su foto.
4. El mapa de origen (elemento memorable).
5. Menú completo en 6 pestañas: Raw, Garnachas & tacos, Warm starters & soups, Main dishes, Dessert y Kids, con miniatura en los platillos que tienen foto.
6. La cava: textos de /Cava y preguntas frecuentes en acordeón (cupo, servicios, cómo reservar, conocer al chef y descorche).
7. Galería corta de cuatro platillos.
8. Reconocimientos (tres, con su insignia) y opiniones de Google (tres, con nombre y sin foto).
9. Eventos: texto de /Events, dos fotos y WhatsApp con mensaje para cotizar.
10. "Good to know before you come": seis políticas de `/7338-2/` ordenadas (al aire libre, mascotas, pago, tiempo de mesa, tolerancia, no show) y enlace a la página completa.
11. Visítanos en grafito: dirección, "Get directions on Google Maps", WhatsApp, Instagram, Facebook y YouTube.
12. Pie con el logo claro y Grupo Ediths; barra fija en el celular (Book, WhatsApp y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin la plantilla de restaurante de lujo oscuro con carrusel a pantalla completa: fondo arena como su marca; solo el mapa y el contacto son oscuros.
- Sin etiquetas pequeñas en mayúsculas sobre cada sección (el sitio pone "SIGNATURE CUISINE BY CHEF EDGAR ROMÁN", "EVENT VENUE IN LOS CABOS", "CELEBRATE WITH US"…): los títulos van en tipografía normal. Sin numeración 01/02 ni puntos medios.
- Los platillos no van en filas de tarjetas iguales como los carruseles del inicio: van como carta, en lista con línea punteada y miniatura.
- Los cuatro tipos de evento no son cuatro tarjetas con foto (dos de las fotos del sitio parecen de banco): son una frase.
- Las políticas no van en un bloque de texto legal: seis datos cortos en rejilla.
- Sin animaciones al hacer scroll; lo único que se mueve es el pulso del punto elegido en el mapa, y se detiene con `prefers-reduced-motion`.
- No se inventan precios, platillos, horarios, reseñas ni premios; el mapa no dice distancias ni kilómetros porque el sitio no los publica. Las reseñas negativa y mixta del widget no se muestran, pero tampoco se inventa ninguna.
- Sin mapa incrustado de Google, sin el widget de OpenTable, sin GTranslate, sin Divi ni scripts de terceros.
