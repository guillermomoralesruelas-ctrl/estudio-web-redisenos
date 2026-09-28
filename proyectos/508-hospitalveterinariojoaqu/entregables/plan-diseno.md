# Hospital Veterinario Joaquín Buxadé: plan de rediseño (método 1.1)

**Sitio original:** https://www.hveterinario.com/ (una sola página en PHP con una plantilla Bootstrap; hecho por Netlogics)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` y `resumen.json`. El 2026-09-28 se revisó el sitio en línea con `curl` (con agente de navegador: sin él responde 406 por Mod Security).
**Rubro:** hospital veterinario (consulta, diagnóstico, laboratorio, hospitalización, cirugía, rehabilitación, estética y tienda). **Ciudad:** Puebla, Pue. (unidades Lateral Recta a Cholula, 24 horas, y Lomas de Angelópolis).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 4,870 px en escritorio y 6,169 px en el celular, 41 de 41 imágenes rotas, 59 errores de consola y 57 recursos fallidos: el clon no carga su CSS ni sus scripts y se ve como texto plano.

## Qué tiene que lograr el sitio
1. Que en una urgencia el teléfono de la unidad 24 horas esté a un toque.
2. Mostrar sus instalaciones y su equipo (su mayor argumento: "las mejores instalaciones y el equipo más actual") y llevar a WhatsApp por servicio.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| marino | #283c5a | El azul de las letras y siluetas de su logo (muestreado). Títulos, banda de especialidades. Blanco encima 11.15:1; sobre bruma 10.23:1 |
| agua | #aadcdc | El verde agua de su logo: sala elegida en el plano, texto sobre marino (7.42:1) |
| uniforme | #1d6a70 | El verde azulado de los uniformes de su equipo: botones de WhatsApp, etiquetas. Blanco encima 6.27:1; sobre bruma 5.76:1 |
| alerta | #b3400b | Solo para lo de 24 horas y urgencias. Blanco encima 5.75:1 |
| bruma | #eef7f7 | Fondos. Gris #4d5b70 encima 6.33:1 |

**Tipografía:** Figtree para títulos (palo seca redondeada y firme, como la de su logo) e Inter para texto.

## Elemento memorable
**"Pasa, te enseñamos el hospital"**: un plano arquitectónico ilustrativo, con muros de línea doble, de las salas que describe su sitio: hospitalización (dividida en perros, gatos y exóticos, como dicen que están sus áreas), quirófano, diagnóstico y laboratorio, rehabilitación, estética, recepción y consulta (con la puerta "Entrada, 24 h") y tienda, unidas por un pasillo. Al tocar una sala se abre su ficha con la foto real de esa sala, sus textos, el equipo que mencionan (Shor-line, jaulas con oxígeno, anestesia inhalada, IDEXX…) y WhatsApp con la pregunta de ese servicio.
Sale del negocio: su carrusel ya enseña cada sala con una foto (recepción, hospitalización, quirófano, laboratorio y rehabilitación) y su texto insiste en instalaciones y equipo.
**Por qué no repite otros:** 539 abre ventanas en una fachada de hotel (el exterior y las habitaciones); aquí es una planta interior de servicios médicos, recorrida sala por sala.
**Límite honesto:** el plano no es el de la obra ni de una unidad en particular; la página lo dice dos veces.

## Estructura
1. Encabezado con su logo, enlaces y "Llamar, 24 horas".
2. Portada: H1 "Hospital veterinario en Puebla con atención las 24 horas", foto del equipo frente a la unidad nueva, botones de urgencias y WhatsApp.
3. El plano (el elemento).
4. Especialidades (sus 7).
5. "Tori, Blacky, Parqui y Tango": sus 4 testimonios, con el nombre de la mascota.
6. Equipo: 13 médicos con sus retratos.
7. Dos unidades, y la banda de estética con recolección y alimento a domicilio.
8. Pie y barra fija en el celular (Llamar 24 h, WhatsApp, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios.
- Animar cada sección al hacer scroll; carruseles.
- "Somos líderes en la Ciudad de Puebla", "el mejor equipo": superlativos sin sustento.
- Fotos de banco junto a testimonios con nombre: los testimonios van sin foto.
