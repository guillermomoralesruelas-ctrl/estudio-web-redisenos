# Justsmiles Dental Clinic: plan de rediseño (método 1.1)

**Sitio original:** https://www.justsmiles.mx/ (en inglés, con versión en español)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/images/`), textos de inicio, quiénes somos, servicios, implantes y periodoncia en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. La red de la nube no llega al sitio: no se pudo leer en vivo.
**Rubro:** clínica dental con especialistas (implantes, periodoncia, ortodoncia, endodoncia, prótesis y cirugía maxilofacial) desde 1987. **Ciudad:** Puerto Vallarta, Jalisco; Basilio Badillo 311, Col. Emiliano Zapata. Muchos pacientes de Estados Unidos y Canadá (lo dice su texto y sus reseñas).

## Qué le falta al clon (los "detallitos")
- Plantilla de Bootstrap con slider y contadores animados; el logo no se descargó. Ver `qa/reporte-rediseno.json`.
- Solo 4 fotos propias: los retratos del equipo con su uniforme. El slider, servicios y "misc" son de banco.

## Qué tiene que lograr el sitio
1. Que el paciente de fuera agende su cita dentro de los días que va a estar en Vallarta, por WhatsApp.
2. Que se vean el equipo, los seis servicios, el horario, la dirección y la calificación de Google.
3. Teléfonos, WhatsApp y mapa a un toque.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| marino | `#10244b` | El azul de sus títulos y de los uniformes |
| lima | `#7ac142` | El verde de "smiles" en su uniforme: botones sobre marino |
| hoja | `#2f6d22` | Verde oscuro para texto y enlaces sobre claro |
| niebla | `#f3f6f9` | Fondo claro |
| pizarra | `#4b5563` | Texto secundario |

**Tipografía:** Urbanist (títulos) e Inter (texto), las de su sitio, locales con @fontsource.

**Idioma:** inglés, como su sitio principal (sus pacientes son en buena parte de EE. UU. y Canadá), con enlace a su versión en español.

## Elemento memorable
**"Book around your Vallarta trip":** eliges el día que llegas y cuántas noches te quedas, y aparece tu estancia como una tira de días con el horario real de la clínica en cada uno (lunes a viernes 9:00 a 20:00, sábado 9:00 a 13:00, domingo cerrado). Tocas el día que te conviene, eliges el servicio y el WhatsApp sale con tus fechas y el día elegido. Abajo, su propia recomendación: la siguiente limpieza a los 6 meses, con la fecha aproximada. Sale del negocio: una clínica en la Zona Romántica que atiende a quien viene de vacaciones.

## Estructura
1. Encabezado con nombre (texto), secciones, "Español" y WhatsApp.
2. Portada: H1, "Since 1987", texto de "Why choose", calificación de Google 4.7 (42 reseñas), horario y los cuatro retratos.
3. Book around your trip (elemento memorable).
4. Servicios: los seis, con el detalle de implantes y periodoncia.
5. Equipo: cuatro dentistas.
6. Reseñas de pacientes (las de su inicio; no las de la página de periodoncia, que son de plantilla).
7. FAQ (sus cuatro preguntas).
8. Contacto: dirección, horario, tres teléfonos, WhatsApp, correo, redes y Google Maps.
9. Barra fija en el celular: WhatsApp, Call, Directions.

## Qué se evita (revisión contra lo genérico)
- Fotos de banco de modelos sonriendo y los íconos de diente de la plantilla.
- Los contadores "20+ years / 10000+ / 8 / 800" (contradicen "since 1987" y no se pueden confirmar).
- Las reseñas de la página de periodoncia (Elena R., Aisha B., etc.), que hablan de carillas y blanqueamiento y parecen de plantilla.
- Etiquetas pequeñas en mayúsculas sobre cada sección y numeración.
- Promesas: nada de "painless" ni "guaranteed".
