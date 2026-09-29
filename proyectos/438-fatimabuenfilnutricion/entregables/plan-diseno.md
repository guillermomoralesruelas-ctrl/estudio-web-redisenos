# Fátima Buenfil, Nutrición Clínica: plan de rediseño (método 1.1)

**Sitio original:** https://www.fatimabuenfil.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos de inicio, servicios, especialidades, currículum y blog en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. La red de la nube no llega a fatimabuenfil.com (403 del proxy): no se pudo leer en vivo.
**Rubro:** nutrióloga clínica (maestra en nutrición clínica y educadora en diabetes). **Ciudad:** Mérida, Yucatán; consultorio 705 del Hospital Star Médica de Mérida y también en el Hospital Centro Médico de las Américas.

## Qué le falta al clon (los "detallitos")
- Joomla con plantilla Salient (Gantry 5): el clon depende de sus scripts y del carrusel; ver `qa/reporte-rediseno.json`.
- Las páginas de servicios y especialidades casi no tienen texto (solo títulos y "más información"); la de Consulta General se corta en "algunos de estos procedimientos y tratamientos:".
- Solo 4 fotos propias de una sesión profesional (consulta con glucómetro, calorimetría, escritorio con alimentos y gimnasio); las de servicios son de banco.

## Qué tiene que lograr el sitio
1. Que el paciente diga en un mensaje para qué quiere la consulta y cómo (consultorio, domicilio o a distancia), y lo mande por WhatsApp.
2. Que se vea su preparación: cédulas, maestría, educadora en diabetes, investigación, docencia y certificaciones ESPEN.
3. Que el consultorio 705 de Star Médica esté a un toque en Google Maps.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| ciruela | `#4a2f3c` | Del pétalo ciruela de su logo: fondos oscuros |
| jade | `#2f6664` | El verde azulado de su nombre, oscurecido: títulos y botones |
| agua | `#86b3b2` | El verde azulado de su logo tal cual: acentos sobre ciruela |
| granada | `#a52535` | El pétalo rojo: detalles y sellos |
| miel | `#f2c46a` | El pétalo amarillo: resaltados sobre ciruela |
| papel | `#fbf7f0` | Fondo cálido |

**Tipografía:** Abril Fatface (títulos grandes) y PT Serif (texto), las dos fuentes de su sitio, locales con @fontsource.

## Elemento memorable
**"Tu hoja de primera consulta":** una hoja clínica con su membrete (logo, nombre, cédulas y "Hospital Star Médica, consultorio 705") que el paciente llena en pantalla: para qué es la consulta (sus nueve especialidades o consulta general), cómo (en consultorio, a domicilio con su texto "el equipo se traslada a tu hogar", o a distancia por Zoom o WhatsApp), su nombre y una nota. La hoja se va escribiendo como formato de hospital y el botón la manda por WhatsApp tal cual. Para empresas y escuelas (empresarial, escolar, talleres y menús) la hoja cambia a "solicitud" con el nombre de la institución. Sale de lo que es: una nutrióloga de hospital.

## Estructura
1. Encabezado con su logo, secciones y WhatsApp.
2. Portada: H1, "Especialista en Nutrición Clínica en Mérida", consultorio 705 de Star Médica, su foto en consulta.
3. Hoja de primera consulta (elemento memorable).
4. Cómo atiende: consulta en consultorio, a domicilio y a distancia, con la foto de la calorimetría.
5. Currículum: nombre, cédulas y grados; investigación, docencia, certificaciones y ponencias en secciones que se abren.
6. Del blog: tres artículos enlazados a su sitio.
7. Contacto: consultorio 705 del Hospital Star Médica de Mérida y Centro Médico de las Américas con enlaces a Maps, WhatsApp, Facebook e Instagram.
8. Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Tarjetas con fotos de banco por especialidad: las especialidades son opciones de la hoja.
- Etiquetas pequeñas en mayúsculas en cada sección, numeración 01/02 y puntos medios.
- Promesas de resultado (bajar de peso, curar): solo sus textos.
- Inventar precios, horario, duración de la consulta o la dirección de la calle.
