# RE/MAX Espacios Hábitat: plan de rediseño (método 1.1)

**Sitio original:** https://espacioshabitat.com/
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json` (Inicio, /inmuebles/, Asesores, Nosotros, Únete) y las fichas de sus nueve inmuebles destacados y su página de Contacto, tomadas con curl el 2026-09-27 (precios, metros, asesor, horario y dirección).
**Rubro:** inmobiliaria (franquicia RE/MAX): venta, renta y gestión de inmuebles residenciales, comerciales e industriales. **Ciudad:** Hermosillo, Sonora (oficina en Blvd. Navarrete 134, Valle Grande).

## Qué le falta al clon (los "detallitos")
- 18 imágenes rotas y 18 recursos fallidos en escritorio (22 y 22 en celular): el clon pide copias `.webp` que no se descargaron.
- 0 H1; 16,179 px de alto en escritorio y 14,266 px en celular.
- El carrusel de destacados repite los mismos nueve inmuebles tres veces; buscador, "Compare listings" y login de la plantilla Houzez sin función.

## Qué tiene que lograr el sitio
1. Que la persona entienda rápido qué inmueble le sirve (precio, metros, zona) y escriba por WhatsApp sobre ese inmueble.
2. Captar a dueños que quieren vender o rentar su propiedad.
3. Llegar a la oficina (Google Maps, horario, teléfono).

## Dirección visual
| Token | Color | Uso | Contraste |
|---|---|---|---|
| marino | #0b1f5c | Títulos, fondo oscuro (azul de su logo) | blanco encima 15.39:1; sobre arena 13.55:1 |
| rojo | #c8102e | Botones (rojo del globo RE/MAX) | blanco encima 5.88:1 |
| rojo-hondo | #9c0c23 | Hover, enlaces | 8.43:1 con blanco; 7.42:1 sobre arena |
| arena | #f5f0e6 | Fondo claro | texto #3b4152 encima 8.96:1 |
| tierra / tierra-honda | #e8dcc4 / #7a5a2e | Lotes en el plano (tonos de sus fotos aéreas de terrenos) | tierra-honda sobre tierra 4.65:1 |
| texto | #3b4152 | Texto corrido | 10.17:1 sobre blanco |

**Tipografía:** Archivo 700/800 (títulos; sans pesada como el "REMAX" del logo) e Inter (texto). @fontsource, solo latino.

## Elemento memorable
**"Metro a metro"**: sus nueve inmuebles destacados (del departamento de 65.82 m² en Lomas Altas al terreno de 12,675 m² en Luz Valencia) dibujados **a la misma escala**, cada uno como un cuadro de su misma superficie apoyado en la misma esquina de un plano con cuadrícula de 10 m. Eliges uno y se enciende; en azul, sus metros construidos. Una cancha de fútbol reglamentaria (105 × 68 m) punteada sirve de referencia ("En una cancha de fútbol cabe 18 veces", "Equivale a 1.8 canchas"). Al lado, la ficha: foto propia, precio, metros, recámaras y baños, precio por m² (cálculo con su precio publicado), asesor con su teléfono, WhatsApp con el inmueble escrito y enlace a la ficha completa. Sale del negocio: los metros y los precios de sus propias fichas. No repite ninguno de la lista (no filtra ni proyecta plusvalía: compara tamaños).

## Estructura
1. Encabezado blanco con su logo, menú y WhatsApp.
2. Portada: H1 "Bienes raíces en Hermosillo", su texto y tres fotos propias (Los Santos, Lomas Altas, Luz Valencia).
3. Metro a metro (lista, plano y ficha).
4. ¿Quieres vender o rentar tu propiedad? (textos de Nosotros y sus seis servicios).
5. Asesores (textos de Nosotros, nueve asesores con su celular, Únete al equipo).
6. La oficina (dirección, Maps, teléfono, horario, correo, redes).
7. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre las secciones (solo una línea en la portada), sin 01/02/03 (el original los usa en "¿Por qué confiar en nosotros?"; se quitaron), sin puntos medios como separador.
- Sin filas de tarjetas idénticas: los inmuebles son una lista con filetes y una sola ficha; los asesores, una lista; los servicios, una frase.
- Movimiento solo en el lote elegido del plano (se asienta al cambiar), quieto con `prefers-reduced-motion`.
- Sin degradados. Sin inventar reseñas, precios ni fotos: dos inmuebles sin foto propia dicen "Sin foto publicada".
