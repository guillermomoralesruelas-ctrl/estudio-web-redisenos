# Centro Odontológico Especializado de la Costa (COEC): plan de rediseño (método 1.1)

**Sitio original:** https://coec.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/assets/images/`), textos en `investigacion/crudo.json` y `investigacion/original.html`, contacto en `investigacion/resumen.json`. La red de la nube no llega a coec.com.mx (el proxy responde 403), así que no se pudo leer en vivo.
**Rubro:** clínica dental con varias especialidades y tomografía Cone Beam. **Ciudad:** Puerto Escondido, Oaxaca. Su mapa de Google marca "COEC Centro Odontológico Especializado de la Costa"; el sitio no escribe la dirección.

## Qué le falta al clon (los "detallitos")
- El clon guardó todo en `sitio/assets/assets/` pero su HTML pide `assets/…`: sale sin estilos y con las 21 imágenes rotas (44 recursos con 404). Es un defecto del clon, no del cliente.
- El carrusel de portada repite tres veces los mismos tres mensajes y las reseñas se repiten dos veces.
- Solo 3 fotos propias: la sala de espera (dos tomas) y el Dr. Mario Cruz Pérez junto a su tomógrafo. Las portadas, las nueve fotos de servicios y los avatares de las reseñas son de banco o ilustraciones; no se usan.

## Qué tiene que lograr el sitio
1. Que el paciente entienda en qué especialidad cae su problema y escriba por WhatsApp (o agende en su sistema de citas) con el tratamiento ya nombrado.
2. Que se vean el especialista, sus cédulas, la tomografía 3D en la misma clínica y los 14 años de experiencia.
3. Horario, WhatsApp, teléfono y mapa a un toque.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| marino | `#2a437a` | El azul de su CSS (161 usos): títulos, fondos oscuros |
| noche | `#0f2147` | Fondo del bloque del diente y pie |
| sillon | `#3d6db4` | El azul de los sillones de su sala: acentos y enlaces |
| menta | `#14e49a` | El verde de su CSS: botón principal sobre fondo oscuro |
| espuma | `#eef5fb` | Fondo claro (de su `#eef9ff`) |
| grafito | `#4a5160` | Texto secundario (del gris de su logo) |

**Tipografía:** Poppins, la de su sitio (títulos en 600, texto en 400), local con @fontsource y solo latino.

## Elemento memorable
**"Un diente, de la corona al hueso":** un molar dibujado en corte (esmalte, dentina, pulpa con sus conductos, encía y hueso con un implante a un lado). Tocas una capa y aparece qué especialidad de COEC la trata, con su propio texto (mínima invasión y prótesis en la corona, endodoncia en la pulpa, periodoncia en la encía, implantes y cirugía maxilofacial en el hueso) y un WhatsApp con esa especialidad escrita. Dos botones aparte cubren lo que no es una capa: "Es para un niño" (odontopediatría) y "Los dientes no cierran bien" (ortodoncia e Invisalign). Un tercero, "Verlo en 3D", enciende el diente completo y lleva a la tomografía Cone Beam, que es lo que distingue a la clínica (el doctor posa junto a su tomógrafo). Todo sale de sus nueve servicios; no se agrega ninguno.

## Estructura
1. Encabezado con el logo, secciones, "Agenda tu cita" (su sistema en línea) y WhatsApp.
2. Portada: H1, su texto de "Sobre nuestra clínica", dos cifras (14 años y 8,405+ servicios), horario y la foto de la sala de espera.
3. El diente por capas (elemento memorable).
4. Especialista: el C. D. E. E. Mario Cruz Pérez con sus dos cédulas, la foto con el tomógrafo y el texto de la tomografía Cone Beam.
5. Todos sus servicios en una lista corta (incluye Invisalign®, servicios radiológicos y paquetes de ortodoncia) y sus cinco características.
6. Pacientes: sus cuatro reseñas en inglés, tal cual.
7. Contacto: su mapa de Google (iframe), horario, WhatsApp, teléfono, citas en línea, Facebook y sus dos videos de YouTube (enlazados, no incrustados).
8. Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Fotos de banco de modelos sonriendo: solo sus tres fotos propias y el dibujo del diente.
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador.
- Tres tarjetas iguales de "Dentistas certificados / Alta tecnología / Cuidamos tu salud": se funden en la sección del especialista.
- La frase de COVID-19 y el carrusel con los mismos mensajes repetidos.
- Promesas de salud: nada de "sin dolor" ni "garantizado"; solo lo que dicen sus textos de servicio.
- Inventar reseñas, fotos, precios o la dirección escrita.
