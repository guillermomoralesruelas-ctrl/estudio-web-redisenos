// Contenido de Doggie's Hospital Veterinario, tomado de su sitio (una página en Webflow, aviso de privacidad y
// términos), revisado con curl el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const negocio = {
  nombre: 'Doggie’s Hospital Veterinario',
  razon: 'Doggies Salud Animal',
  desde: 1978,
  fundador: 'MVZ. Fernando Rafael Pérez Leal',
  lema: 'Rumbo a los primeros 50 años atendiendo a los más peludos de la familia, con el amor y respeto que se merecen.',
  quienes: 'Hospital veterinario de especialidades con más de 45 años de experiencia, con 3 clínicas al sur de la ciudad de Monterrey.',
  urgencias: { texto: '81 1234 0944', tel: '+528112340944' },
  correo: 'atencion@doggies.mx',
  instagram: 'https://www.instagram.com/doggieshospitalveterinario/',
  facebook: 'https://www.facebook.com/doggieshospital',
  eyeclinic: 'https://www.eyeclinic.mx/',
  cifras: [
    ['10,000+', 'cirugías al año'],
    ['30,000+', 'pacientes'],
    ['98%', 'tasa de supervivencia veterinaria'],
  ] as const,
};

// El sitio no publica WhatsApp: se usa el teléfono de urgencias (confirmar).
export const wa = (texto: string) => `https://wa.me/528112340944?text=${encodeURIComponent(texto)}`;

export const hospitales = [
  {
    id: 'especialidades', nombre: 'Doggie’s Especialidades', direccion: 'Av. Revolución 3419, Rincón de la Primavera, 64834 Monterrey, N.L.',
    telefono: { texto: '81 1234 0944', tel: '+528112340944' }, veinticuatro: true,
    mapa: 'https://www.google.com/maps/search/?api=1&query=Doggie%27s+Hospital+Veterinario+Av.+Revoluci%C3%B3n+3419+Monterrey',
  },
  {
    id: 'serena', nombre: 'Doggie’s Serena', direccion: 'Carr. Nacional 500, 64989 Monterrey, N.L.',
    telefono: { texto: '81 9688 6760', tel: '+528196886760' }, veinticuatro: false,
    mapa: 'https://www.google.com/maps/search/?api=1&query=Doggie%27s+Serena+Carretera+Nacional+500+Monterrey',
  },
  {
    id: 'sur', nombre: 'Doggie’s Sur', direccion: 'Carr. Nacional 41000, 64988 Monterrey, N.L.',
    telefono: null as null | { texto: string; tel: string }, veinticuatro: false,
    mapa: 'https://www.google.com/maps/search/?api=1&query=Doggie%27s+Sur+Carretera+Nacional+Monterrey',
  },
];

export const especialidades = [
  { nombre: 'Cirugía', texto: 'Cirugía de alta especialidad.', foto: 'f-cirugia', alt: 'Dos cirujanas con gorro y cubrebocas operan bajo la lámpara del quirófano' },
  { nombre: 'Oncología', texto: 'Especialistas y patólogos para el diagnóstico y tratamiento médico-quirúrgico de padecimientos oncológicos en perros y gatos.', foto: 'f-laboratorio', alt: 'Mano que coloca una muestra en un equipo de laboratorio' },
  { nombre: 'Dermatología', texto: 'Tratamiento integral de la piel de tu mascota.', foto: 'f-dermatologia', alt: 'Gato blanco revisado con una lámpara de luz azul' },
  { nombre: 'Neurología', texto: 'Diagnóstico y tratamiento médico-quirúrgico de padecimientos centrales, medulares y periféricos.', foto: 'f-radiologia', alt: 'Perro en la mesa de rayos X con dos técnicas con chaleco de protección' },
  { nombre: 'Traumatología y ortopedia', texto: 'Manejo médico-quirúrgico de padecimientos ortopédicos congénitos, adquiridos y fracturas.', foto: 'f-vendaje', alt: 'Manos con guantes vendan la pata de un perro' },
  { nombre: 'Cardiología', texto: 'Diagnóstico y tratamiento de padecimientos cardiovasculares.', foto: 'f-cardiologia', alt: 'Veterinario hace un ultrasonido del corazón a un perro pequeño' },
];

export const servicios = [
  { nombre: 'Hospital 24/7', foto: 'f-hospital', alt: 'Veterinaria revisa a un bulldog en su jaula de hospitalización' },
  { nombre: 'Laboratorio y patología clínica', foto: 'f-laboratorio', alt: '' },
  { nombre: 'Cirugía por laparoscopia de mínima invasión', foto: 'f-laparoscopia', alt: 'Cirujanos con la torre de laparoscopia en el quirófano' },
  { nombre: 'Medicina felina', foto: 'f-felina', alt: 'Gato tricolor recibe oxígeno con una mascarilla en la mesa' },
  { nombre: 'Estética', foto: 'f-estetica', alt: 'Un shih tzu sonriente mientras lo peinan' },
  { nombre: 'Radiología y ultrasonido', foto: 'f-ultrasonido', alt: 'Veterinaria hace un ultrasonido a un perro mientras mira el monitor' },
];

export const certificaciones = ['AMMVEPE', 'CLOVE (Colegio Latinoamericano de Oftalmología Veterinaria)', 'ISVPS', 'AMTOPE', 'COMVEPE Nuevo León'];
