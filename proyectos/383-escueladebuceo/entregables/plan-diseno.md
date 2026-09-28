# Escuela de Buceo Proyecto Azul: plan de rediseño (método 1.1)

**Sitio original:** https://www.buceoproyectoazul.com.mx/ (WordPress con el tema de tours "Tourmaster" y el botón Joinchat)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html` y `crudo.json` (inicio, Nosotros, Tienda, Albercas y Cursos). Con `curl`, el 2026-09-28, el texto de sus 20 fichas de curso (objetivo, "consiste en" y requisitos) y su página de Viajes (14 fechas y el VIP Trip).
**Rubro:** escuela de buceo PADI y SSI con tienda de equipo. **Ciudad:** Ciudad de México (tienda en Av. Revolución 172-B, Col. Escandón; clases en los deportivos Leandro Valle y Parque Lira).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 7,368 px en escritorio y 7,444 px en el celular, desborde de 284 px y 1,174 px, 15 imágenes rotas de 15 (rutas `www.buceoproyectoazul.com.mxassets/…` sin diagonal) y 55 errores de consola.
- A ojo: los contadores dicen "0+ Alumnos, 0+ Certificaciones, 0+ Viajes" y la reserva de viajes está en inglés ("Proceed Booking").

## Qué tiene que lograr el sitio
1. Que quien llega sepa **qué curso le toca** según lo que ya sabe y su edad, y lo pida por WhatsApp.
2. Encontrar su alberca, ver el calendario de viajes y llegar a la tienda.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| abismo | #0a1f3d | Encabezado, portada, viajes y pie. Blanco encima 16.45:1; celeste #7fc4f0 8.66:1; bruma #a8b8cc 8.14:1 |
| azul | #0b4f9c | El azul del borde de su óvalo: la línea principal, botones y enlaces. Blanco encima 8.04:1; sobre espuma 7.30:1 |
| rojo | #c0181c | El rojo de su óvalo (muestreado #c01818): WhatsApp, meses del calendario, ramal "Para probar". Blanco encima 6.20:1 |
| turquesa / ámbar / morado | #0b7575 / #8a5a00 / #5b2d8c | Los otros ramales del mapa. Blanco encima 5.50:1, 5.93:1 y más de 9:1 |
| espuma | #eef5fa | Fondo del mapa y del contacto. Tinta #10223a 14.54:1; gris #4a5a6e 6.40:1 |

**Tipografía:** Barlow Condensed para títulos (una palo seco condensada como "Proyecto Azul" en su logo) e Inter para texto.

## Elemento memorable
**"La Línea Azul"**: sus 20 cursos dibujados como un mapa del metro. La línea principal va, en el orden de su menú, de Nado y Snorkeling a Open Water, Advanced, Rescue y Dive Master; de cada estación salen ramales de colores: "Para probar" (TRY SCUBA y Buceo sin Certificación), "Sin ser buzo" (Ecología Marina, Coral y Tiburones), las especialidades que se toman con Open Water y las que piden Advanced y 30 buceos. Eliges "¿En qué estación vas?" y tu edad, y cada estación dice "Puedes tomarlo", "Ya la tienes", "Desde 15 años" o "Necesitas Advanced"; arriba, la lista de lo que puedes tomar ya. Al tocar una estación, su ficha: su frase ("La aventura se oscurece"), en qué consiste, requisitos, las estaciones que te faltan y WhatsApp con el curso, tu nivel y tu edad en el mensaje.
Sale del negocio: su propio lema es "¡Paso a paso! Desde aprender a nadar hasta ser Instructor de Buceo Internacional", y cada ficha trae requisitos de nivel y edad que hoy hay que abrir uno por uno.
**Por qué no repite otros:** 26 arma un itinerario, 456 cuenta pasajeros de trajinera, 486 resuelve traslados, 605 elige tema de terapia, 419 llena una caja. Aquí se ubica al visitante en una **ruta de certificaciones con requisitos reales**.
**Límite honesto:** requisitos, edades y equivalencias (PADI, SSI, NAUI, CMAS) son los de sus fichas; los niveles que eliges son nuestros para ubicarte y la página lo dice. No hay precios porque el sitio no los publica en las fichas.

## Estructura
1. Encabezado con su logo, enlaces y WhatsApp.
2. Portada: H1 "Aprende a bucear en la Ciudad de México, desde nadar hasta Dive Master", su foto bajo el agua y 4 cifras de su sitio (1998, 20 cursos, 2 albercas, 14 viajes).
3. La Línea Azul (el elemento).
4. Dos albercas, oriente y poniente (con la foto de snorkel).
5. Calendario de viajes, de enero a diciembre, y el VIP Trip.
6. Nosotros: misión, 100% mexicana, tienda, Raíz Verde y Sea Shepherd, seguro DAN y preguntas frecuentes.
7. Contacto: dirección, horario, WhatsApp, 2 teléfonos, correo y redes.
8. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios.
- Animar cada sección al hacer scroll.
- "La escuela de buceo más completa" y "el curso más completo de todo el país": superlativos sin sustento.
- Contadores en "0+" y cifras inventadas: solo se muestran números que salen de su sitio.
