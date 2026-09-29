// Contenido del Dr. Julio C. Jiménez López, psiquiatra (San Pedro Garza García, N. L.). Todo sale de
// investigacion/crudo.json e investigacion/original.html (captura del 2026-09-26). No se inventan datos.

export const negocio = {
  nombre: 'Dr. Julio César Jiménez López',
  whatsapp: '5218140726994',
  whatsappVisible: '81 4072 6994',
  tel: '+528141703651',
  telVisible: '81 4170 3651',
  edificio: 'Edificio Valle Real, piso 1, puerta 14',
  direccion: 'Cjon. de los Ayala 101, Zona Los Callejones, C.P. 66220, San Pedro Garza García, N. L.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Edificio Valle Real, Callejón de los Ayala 101, San Pedro Garza García, N.L.'),
  // El mismo lugar que muestra el mapa de su sitio (Edificio Valle Real), con el embed de Google Maps que no requiere clave.
  mapaEmbed: 'https://www.google.com/maps?q=' + encodeURIComponent('Edificio Valle Real, Callejón de los Ayala 101, San Pedro Garza García, N.L.') + '&z=16&output=embed',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const credenciales = [
  { titulo: 'Médico Cirujano', lugar: 'Universidad Autónoma de Nuevo León', dato: 'Céd. Prof. 11779182' },
  { titulo: 'Especialidad en Psiquiatría', lugar: 'Tecnológico de Monterrey', dato: 'Céd. Esp. 14039782' },
  { titulo: 'Certificado', lugar: 'Consejo Mexicano de Psiquiatría', dato: '' },
  { titulo: 'Miembro activo', lugar: 'Asociación Psiquiátrica Mexicana', dato: '' },
  { titulo: '1er lugar en Investigación', lugar: 'Congreso Nacional de Psiquiatría APM 2023', dato: '' },
];

export const cuando = ['Cambios en el estado de ánimo', 'Ansiedad excesiva o ataques de pánico', 'Desesperanza', 'Pérdida de interés', 'Aislamiento social', 'Cambios drásticos en el comportamiento', 'Estrés constante', 'Dificultades para dormir'];

export const atiende = ['Depresión', 'Ansiedad', 'TDAH', 'Trastorno bipolar', 'Esquizofrenia', 'Ataques de pánico', 'Trastornos de la personalidad', 'Estrés postraumático', 'Consumo de sustancias', 'Trastorno obsesivo compulsivo'];

export const proceso = [
  { nombre: 'Evaluación inicial', texto: 'Se revisa tu historial clínico y tus antecedentes en salud mental.' },
  { nombre: 'Comprensión del motivo de tu visita', texto: 'Experiencias clave, patrones, estado emocional y forma de pensar.' },
  { nombre: 'Plan de tratamiento personalizado', texto: 'Se integra el diagnóstico y el tratamiento se adecua a tus necesidades.' },
  { nombre: 'Seguimiento', texto: 'Acompañamiento durante el tratamiento y revisión del progreso.' },
];

export const terapias = [
  { nombre: 'Terapia Cognitivo Conductual (TCC)', texto: 'Trabaja con los pensamientos y cómo reaccionamos ante ciertas situaciones.' },
  { nombre: 'Terapia de Aceptación y Compromiso (ACT)', texto: 'No busca eliminar emociones, sino aprender a aceptarlas y enfocarte en lo que importa.' },
  { nombre: 'Terapia Interpersonal (TIP)', texto: 'Se enfoca en tus relaciones y en cómo afectan tu bienestar emocional.' },
  { nombre: 'Tratamiento farmacológico', texto: 'Cuando es necesario, para estabilizar síntomas y avanzar en el proceso.' },
];

// Opiniones sobre el trato (sin resultados clínicos), tal como aparecen en su sitio.
export const opiniones = [
  { texto: 'Te hace sentir muy segura y escuchada durante la consulta. Se nota el interés que tiene por entenderte.', autor: 'Paciente anónimo' },
  { texto: 'Desde que programas la primera cita, el Dr. Jiménez te contacta personalmente y te brinda confianza.', autor: 'Daniel G.' },
  { texto: 'Tiene la capacidad de sintetizar tus ideas y emociones en frases claras y precisas que ayudan a enfocar el tema. Es muy puntual.', autor: 'Diana' },
  { texto: 'He tenido la oportunidad de tomar sesiones presenciales y en línea y ambas han resultado muy satisfactorias.', autor: 'Celia Aguirre' },
];

// Textos del mensaje en los tres idiomas en que atiende.
export type Idioma = 'es' | 'en' | 'fr';
export const idiomas: Record<Idioma, { nombre: string; saludo: string; cita: string; presencial: string; enLinea: string;
  manana: string; tarde: string; cualquiera: string; paraMi: string; familiar: string; motivo: string; cierre: string }> = {
  es: { nombre: 'Español', saludo: 'Hola, Dr. Julio.', cita: 'Me gustaría agendar una cita de valoración', presencial: 'en su consultorio de San Pedro', enLinea: 'en línea',
    manana: 'De preferencia por la mañana.', tarde: 'De preferencia por la tarde.', cualquiera: 'Me acomodo al horario que tenga disponible.',
    paraMi: 'La cita es para mí.', familiar: 'La cita es para un familiar adulto.', motivo: 'Prefiero platicar el motivo en la consulta.', cierre: '¿Qué disponibilidad tiene?' },
  en: { nombre: 'English', saludo: 'Hello, Dr. Julio.', cita: 'I would like to book an initial consultation', presencial: 'at your office in San Pedro', enLinea: 'online',
    manana: 'Mornings work best for me.', tarde: 'Afternoons work best for me.', cualquiera: 'I can adapt to whatever time you have available.',
    paraMi: 'The appointment is for me.', familiar: 'The appointment is for an adult family member.', motivo: 'I would rather explain the reason during the consultation.', cierre: 'What availability do you have?' },
  fr: { nombre: 'Français', saludo: 'Bonjour, Docteur Julio.', cita: 'Je voudrais prendre un premier rendez-vous', presencial: 'à votre cabinet de San Pedro', enLinea: 'en ligne',
    manana: 'De préférence le matin.', tarde: "De préférence l'après-midi.", cualquiera: "Je m'adapte à vos disponibilités.",
    paraMi: 'Le rendez-vous est pour moi.', familiar: 'Le rendez-vous est pour un membre adulte de ma famille.', motivo: 'Je préfère expliquer le motif lors de la consultation.', cierre: 'Quelles sont vos disponibilités ?' },
};
