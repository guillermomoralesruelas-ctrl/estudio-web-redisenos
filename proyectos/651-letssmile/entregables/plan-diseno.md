# Let's Smile Dentistry: plan de rediseño (método 1.1)

**Sitio original:** https://letssmiledentistry.com/ (WordPress con Elementor; versión en español en /mx/)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html` y `crudo.json` (inicio, About us, Clinic facilities, Dr. Tomás García y Dental services). Con `curl`, el 2026-09-28, Dental services y Dental tourism (tabla de precios, pasos, seguro dental).
**Rubro:** clínica dental para turismo dental (pacientes de EE. UU. y Canadá). **Ciudad:** Mexicali, B. C., a 3 minutos de la garita Este.
**Idioma:** el sitio está en inglés para su público, así que el rediseño va en inglés (como 499, 486 y otros de `METODOS.md`); conserva el enlace a su versión en español.

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 7,464 px en escritorio y 10,378 px en el celular, 0 desborde, 38 y 39 errores de consola y 5 imágenes rotas en el celular.
- Su sitio ya es moderno; lo que le falta es ordenar: la información de cada dentista, los precios y el viaje están repartidos en seis páginas.

## Qué tiene que lograr el sitio
1. Que un paciente de EE. UU. sepa **quién lo va a atender** y **cuánto cuesta** su tratamiento, y pida su cotización por WhatsApp.
2. Confianza para cruzar: pasos del viaje, seguro dental, instalaciones reales, reseñas y dirección.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| carbon | #1b1d1c | El negro de los uniformes de su equipo: encabezado, portada, clínica. Blanco encima 16.95:1; sonrisa 6.31:1 |
| sonrisa | #50b078 | El verde de su logo (muestreado): botones con texto carbon (6.31:1), precios sobre carbon |
| pino | #256b46 | Verde oscuro para enlaces y botones con texto blanco (6.42:1) |
| arena | #f6f3ee | La madera clara de su recepción: fondos. Gris #555a58 encima 6.35:1 |
| madera | #e9c79a | Cifras y títulos pequeños sobre carbon (10.57:1) |

**Tipografía:** Plus Jakarta Sans para títulos (geométrica y redonda como su logo) e Inter para texto.

## Elemento memorable
**"Meet your dentist before you cross"**: eliges lo que necesitas (implantes; coronas, carillas y rediseño de sonrisa; endodoncia; encías; limpieza y consulta general; niños; urgencias) y aparece, junto a su tabla de precios de Mexicali contra EE. UU. y Canadá, quién del equipo se enfoca en eso según su perfil. Cada tarjeta de dentista se voltea entre "Good to know" (formación, años, casos) y "Fun to know" (sus datos curiosos: el Dr. Alvarado y sus playlists, el Dr. Aguilar que ha perdido más vuelos de los que admite). WhatsApp prellenado por tratamiento.
Sale del negocio: su página About us ya trae "Good to know" y "Fun to know" de cada dentista, y su página de turismo dental trae los precios; hoy están en páginas distintas.
**Por qué no repite otros:** 605 elige tema de terapia, 383 ubica en una ruta de cursos, 574 compara precio por m². Aquí se juntan tratamiento, precio y **la persona** que lo atiende, con su lado humano.
**Límite honesto:** quién hace qué sale del perfil de cada dentista y la página aclara que el equipo decide; los precios son los de su tabla, que ellos mismos llaman ilustrativos.

## Estructura
1. Encabezado con su logo, enlaces, "Español" y WhatsApp.
2. Portada: H1 "Your dentists in Mexicali, 3 minutes from the U.S. border", foto del equipo frente a la clínica, 5.0 en Google, 3 min, 13+ años.
3. Meet your dentist before you cross (el elemento).
4. From your couch to their chair: sus 5 pasos, el auto del traslado y el seguro dental de EE. UU.
5. See where your care will happen: 4 fotos reales y su tecnología.
6. Reseñas de Google (4).
7. Plan your visit: dirección, horario, contacto y redes.
8. Pie y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios (su sitio usa "01 · TG").
- Fotos de banco (el hombre con dolor de muelas, la sonrisa de shutterstock, el render del implante).
- "Best dentist in Mexicali", "premier hub", "elite": superlativos.
- Animar cada sección al hacer scroll.
