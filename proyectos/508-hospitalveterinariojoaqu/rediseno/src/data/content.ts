// Contenido del Hospital Veterinario Joaquín Buxadé, tomado de su sitio (una sola página) y del clon, revisado con curl
// el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const negocio = {
  nombre: 'Hospital Veterinario Joaquín Buxadé',
  experiencia: 'más de 25 años',
  whatsapp: { texto: '221 361 1332', numero: '522213611332' },
  especialidades: ['Dermatología', 'Neurología', 'Nutrición', 'Neonatología', 'Reproducción', 'Geriatría', 'Medicina Preventiva'],
};

export const unidades = [
  {
    id: 'cholula',
    nombre: 'Unidad Lateral Recta a Cholula',
    etiqueta: 'Abierta las 24 horas',
    direccion: 'Lateral Recta a Cholula 3608, Puebla, Pue.',
    telefono: { texto: '(222) 296 7091', tel: '+522222967091' },
    nota: 'Su nueva casa.',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Hospital+Veterinario+Lateral+Recta+a+Cholula+3608+Puebla',
  },
  {
    id: 'lomas',
    nombre: 'Unidad Lomas de Angelópolis',
    etiqueta: 'Horario por confirmar',
    direccion: 'Centro Lomas 6, Lomas de Angelópolis',
    telefono: { texto: '(222) 290 8808', tel: '+522222908808' },
    nota: '',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Hospital+Veterinario+Centro+Lomas+Lomas+de+Angel%C3%B3polis+Puebla',
  },
];

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(texto)}`;

export type Sala = {
  id: string;
  nombre: string;
  corto: string; // la línea que se lee en el plano (nuestro, con sus palabras)
  foto: string;
  alt: string;
  texto: string[]; // sus textos
  equipo: string[];
  pregunta: string; // mensaje de WhatsApp (nuestro)
};

// Las salas del plano. Los textos son los de sus secciones Servicios, Atención y Experiencia y el carrusel.
export const salas: Sala[] = [
  {
    id: 'hospitalizacion',
    nombre: 'Hospitalización',
    corto: 'Áreas separadas para perros, gatos y exóticos',
    foto: 'f-hospitalizacion',
    alt: 'Área de hospitalización con jaulas y mesas; médicas del hospital cargan a un perro y a un gato',
    texto: [
      'Atención especial en pacientes hospitalizados con un monitoreo continuo y métodos adecuados para la recuperación de tu mascota.',
      'Las áreas de hospitalización son independientes para gatos, perros y animales exóticos.',
    ],
    equipo: ['Equipos Shor-line', 'Jaulas con oxígeno', 'Monitoreo de temperatura y humedad'],
    pregunta: 'Hola, quiero información sobre hospitalización.',
  },
  {
    id: 'quirofano',
    nombre: 'Quirófano',
    corto: 'Tejidos blandos, traumatología y ortopedia',
    foto: 'f-quirofano',
    alt: 'Dos cirujanos con gorro, cubrebocas y bata operan en el quirófano',
    texto: [
      'Tenemos el mejor equipo humano e instrumental quirúrgico específico en cirugía de tejidos blandos, traumatología y ortopedia.',
      'Sea una emergencia o cirugía programada estaremos listos para ayudar a tu mascota.',
    ],
    equipo: ['Quirófanos especializados', 'Anestesia inhalada', 'Equipo de monitoreo'],
    pregunta: 'Hola, quiero información sobre una cirugía.',
  },
  {
    id: 'diagnostico',
    nombre: 'Diagnóstico y laboratorio',
    corto: 'Rayos X, ultrasonido, electrocardiograma y análisis',
    foto: 'f-laboratorio',
    alt: 'Una química del laboratorio trabaja frente al microscopio y la computadora',
    texto: [
      'Cuando la salud de tu mascota depende de un diagnóstico adecuado puedes estar tranquilo: equipo de radiología, ultrasonografía y electrocardiografía.',
      'Diagnosticamos y tratamos desde las enfermedades más comunes hasta las más extrañas.',
    ],
    equipo: ['Radiología', 'Ultrasonografía', 'Electrocardiografía', 'Equipo IDEXX Laboratories: biometrías y químicas sanguíneas'],
    pregunta: 'Hola, quiero información sobre estudios de diagnóstico o laboratorio.',
  },
  {
    id: 'rehabilitacion',
    nombre: 'Rehabilitación y fisioterapia',
    corto: 'Para volver a su vida habitual',
    foto: 'f-rehabilitacion',
    alt: 'Dos terapeutas trabajan con un perro dorado sobre tapetes de colores, junto a pelotas de ejercicio',
    texto: [
      'Aplicamos diversas técnicas fisioterapéuticas para el tratamiento y recuperación integral de tu mascota.',
      'Y cuando tu mascota está lista para retomar su vida habitual, contamos con servicios de rehabilitación y fisioterapia.',
    ],
    equipo: ['Técnicas fisioterapéuticas', 'Recuperación integral'],
    pregunta: 'Hola, quiero información sobre rehabilitación y fisioterapia.',
  },
  {
    id: 'estetica',
    nombre: 'Estética',
    corto: 'Si no puedes traerla, pasan por ella',
    foto: 'f-estetica',
    alt: 'Un poodle blanco y un yorkshire con moño en la mesa de estética, mientras los peinan',
    texto: ['Tu mascota amará venir a nuestra estética. ¿No puedes traerla? Nosotros pasamos por ella.'],
    equipo: ['Estética canina', 'Recolección a domicilio'],
    pregunta: 'Hola, quiero agendar estética para mi mascota.',
  },
  {
    id: 'consulta',
    nombre: 'Recepción y consulta',
    corto: 'Consulta general y de especialidad',
    foto: 'f-consulta',
    alt: 'Un médico del hospital ausculta a un yorkshire en el consultorio',
    texto: [
      'Médicos veterinarios especialistas encabezados por el Dr. Joaquín Buxadé, desde consulta general hasta servicios de especialidad.',
      'Desde una consulta, diagnóstico, pensión, hospitalización y cirugía. Con atención las 24 horas del día, los 7 días de la semana.',
    ],
    equipo: ['Consulta general', 'Especialidades', 'Pensión'],
    pregunta: 'Hola, quiero agendar una consulta para mi mascota.',
  },
  {
    id: 'tienda',
    nombre: 'Tienda',
    corto: 'Alimento a domicilio sin cargo extra',
    foto: 'f-tienda',
    alt: 'Tienda del hospital con costales de alimento Royal Canin en anaqueles',
    texto: [
      'Tenemos las mejores marcas para la alimentación, diversión y cuidado de tu mascota.',
      'Alimento para mascota con promoción y entrega a domicilio sin cargo extra.',
    ],
    equipo: ['Alimento', 'Accesorios', 'Entrega a domicilio'],
    pregunta: 'Hola, quiero pedir alimento a domicilio.',
  },
];

// Testimonios de su sitio, con el nombre de cada mascota (sus fotos no se usan).
export const historias = [
  { mascota: 'Tori', quien: 'Miriam Pineda', texto: 'El es Tori, mi gran danés; le salvaron la vida en Hospital Veterinario, pues sufrió una torsión gástrica, un padecimiento propio de la raza que de no atenderse a tiempo puede derivar en la muerte. Tengo toda la confianza en el equipo médico y ya son más de 10 años los que tengo de conocerlos.' },
  { mascota: 'Blacky', quien: 'Vero Castelán', texto: 'La primera vez que llegué a Hospital Veterinario fue un domingo a las 3:00 am con mi Blacky intoxicado por comer veneno de ratones. Me sorprendió que una clínica veterinaria estuviera abierta las 24 horas. Atendieron de inmediato a mi perrito y le salvaron la vida.' },
  { mascota: 'Parqui', quien: 'Cristina Amezcua', texto: 'Parqui, mi gato, ha sido mi compañía durante muchos años. En el Hospital Veterinario de Joaquín Buxadé no solo encontré gente con una inmensa ética profesional, sino un trato paciente y ameno.' },
  { mascota: 'Tango', quien: 'Marce Covarrubias', texto: 'No hay mejor lugar en la ciudad donde podamos dejar a nuestra mascota Tango: en la estética siempre lo dejan muy guapo y en la tienda puedo encontrar el alimento adecuado para su raza y tamaño, siempre con la recomendación acertada de los veterinarios.' },
];

export const equipo = [
  { nombre: 'Joaquín Buxadé', cargo: 'MVZ Especialista', foto: 'e-buxade' },
  { nombre: 'Alan Escoto', cargo: 'MVZ Especialista', foto: 'e-alan' },
  { nombre: 'Claudia Urcid', cargo: 'MVZ Especialista', foto: 'e-claudia' },
  { nombre: 'Daniela Gómez', cargo: 'MVZ Especialista', foto: 'e-daniela' },
  { nombre: 'Erik del Barrio', cargo: 'MVZ Especialista', foto: 'e-erik' },
  { nombre: 'Natziely Sánchez', cargo: 'MVZ', foto: 'e-natziely' },
  { nombre: 'Ellian Sequeda', cargo: 'MVZ', foto: 'e-ellian' },
  { nombre: 'Montserrat Contreras', cargo: 'MVZ', foto: 'e-montserrat' },
  { nombre: 'Marco Flores', cargo: 'MVZ', foto: 'e-marco' },
  { nombre: 'Miriam Herrera', cargo: 'MVZ', foto: 'e-miriam' },
  { nombre: 'Olivia Rocha', cargo: 'MVZ', foto: 'e-olivia' },
  { nombre: 'Mayra Sánchez', cargo: 'MVZ', foto: 'e-mayra' },
  { nombre: 'Cristina Bragado', cargo: 'MVZ', foto: 'e-cristina' },
];
