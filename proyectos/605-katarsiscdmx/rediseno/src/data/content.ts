// Contenido de Katarsis, tomado del sitio original (clon en ../sitio, investigacion/crudo.json y su JSON-LD en vivo).
// Regla: nada inventado. Los perfiles, cédulas, precios, sedes y respuestas son los que publica su sitio.
// Las fotos son los retratos propios de su equipo (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';

type NombreFoto = keyof typeof fotos;
export const foto = (nombre: NombreFoto) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});
export const logo = { src: `${import.meta.env.BASE_URL}logo.webp`, width: fotos.logo[0], height: fotos.logo[1] };

export const negocio = {
  nombre: 'Katarsis',
  nombreCompleto: 'Katarsis - Centro de Atención Psicológica Integral',
  telefono: '5551073098',
  telefonoVisible: '55 5107 3098',
  whatsapp: '525551073098',
  correo: 'contacto@katarsis.mx',
  facebook: 'https://www.facebook.com/katarsismx/',
  instagram: 'https://www.instagram.com/katarsis.psicoterapia_',
  tiktok: 'https://www.tiktok.com/@katarsis.psicoterapia',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const waGeneral = wa('Hola, me gustaría información para tomar psicoterapia con Katarsis.');

export type Modalidad = 'linea' | 'presencial';

export const precios = {
  linea: [
    { sesiones: 1, total: 750, porSesion: 750 },
    { sesiones: 4, total: 2900, porSesion: 725 },
    { sesiones: 8, total: 5600, porSesion: 700 },
  ],
  presencial: [
    { sesiones: 1, total: 800, porSesion: 800 },
    { sesiones: 4, total: 3100, porSesion: 775 },
    { sesiones: 8, total: 6000, porSesion: 750 },
  ],
  pareja: 900,
};

export type Psicoterapeuta = {
  id: NombreFoto;
  nombre: string;
  cedula: string;
  grado?: string;
  enfoques?: string;
  perfil: string;
  atiende: ('niños' | 'adolescentes' | 'adultos' | 'parejas y familias')[];
  modalidades?: Modalidad[];
};

// "atiende" y "modalidades" solo se llenan cuando el perfil lo dice; si no lo dice, se deja vacío.
export const equipo: Psicoterapeuta[] = [
  {
    id: 'cecilia-gomez', nombre: 'Cecilia Gómez', cedula: '4079910',
    grado: 'Doctorante en terapia de pareja y familia',
    enfoques: 'Psicoterapia psicoanalítica, psicoterapia cognitivo-conductual, terapias contextuales',
    perfil: 'Licenciada en psicología, maestría en psicoterapia. Doctorante en terapia de pareja y familia. Formada en psicoanálisis, terapia cognitivo conductual, terapias de tercera generación (DBT, ACT, BST) y atención a niños y adolescentes víctimas de violencia y abuso.',
    atiende: ['niños', 'adolescentes', 'adultos'], modalidades: ['presencial', 'linea'],
  },
  {
    id: 'carla-molina', nombre: 'Carla Molina', cedula: '09085484',
    grado: 'Doctora en Psicoanálisis', enfoques: 'Psicoterapia psicoanalítica',
    perfil: 'Doctora en Psicoanálisis. Se especializa en trabajo con adolescentes y adultos, tratando ansiedad, depresión y sexualidad.',
    atiende: ['adolescentes', 'adultos'], modalidades: ['presencial', 'linea'],
  },
  {
    id: 'perla-perez', nombre: 'Perla Pérez', cedula: 'Lic. 1352088, Maest. 13525102',
    grado: 'Doctorado en terapia de pareja y familia', enfoques: 'Psicoterapia psicoanalítica',
    perfil: 'Psicóloga con maestría en psicoterapia psicoanalítica, doctorado en terapia de pareja y familia. Diplomado en Modelos de Intervención de Trastornos Alimentarios. Experiencia con niños, adolescentes, adultos, terapia de pareja y familias.',
    atiende: ['niños', 'adolescentes', 'adultos', 'parejas y familias'], modalidades: ['presencial', 'linea'],
  },
  {
    id: 'irma-correa', nombre: 'Irma Correa', cedula: '3164574',
    grado: 'Maestría en Psicoterapia Psicoanalítica', enfoques: 'Psicoterapia Gestalt y psicoterapia humanista',
    perfil: 'Experiencia en orientación a padres de familia, trabajo con niños y adolescentes, trastornos emocionales y de alimentación en niños, adolescentes y adultos (anorexia, bulimia y obesidad), y educación sexual a niños y adolescentes.',
    atiende: ['niños', 'adolescentes', 'adultos'], modalidades: ['presencial', 'linea'],
  },
  {
    id: 'isabella-bueno', nombre: 'Isabella Bueno', cedula: '10818836',
    grado: 'Maestría en Psicoterapia Psicoanalítica', enfoques: 'Psicoterapia psicoanalítica',
    perfil: 'Psicóloga con maestría en Psicoterapia Psicoanalítica de la Universidad Complutense de Madrid, con experiencia clínica en Madrid y en México. Atiende a adolescentes, jóvenes y adultos con depresión, ansiedad, estrés, adicciones y temas de sexualidad.',
    atiende: ['adolescentes', 'adultos'],
  },
  {
    id: 'ricardo-guemes', nombre: 'Ricardo Güemes', cedula: '11909994',
    grado: 'Doctorado en Psicoanálisis', enfoques: 'Psicoterapia psicoanalítica',
    perfil: 'Psicólogo general con maestría y doctorado en psicoanálisis. Diplomado en pruebas y evaluación psicodiagnóstica. Diagnóstico y psicoterapia para niños, adolescentes y adultos.',
    atiende: ['niños', 'adolescentes', 'adultos'],
  },
  {
    id: 'myriam-mata', nombre: 'Myriam Mata', cedula: '4443784',
    enfoques: 'Gestalt y tanatología',
    perfil: 'Licenciada en Medicina con especialidad en Desarrollo Humano, psicoterapeuta con enfoque Gestalt y tanatología. Atiende a adultos que viven pérdidas, duelos o trauma, y acompaña emocionalmente a pacientes cuyo diagnóstico médico cambia su condición de salud.',
    atiende: ['adultos'],
  },
  {
    id: 'erik-pahua', nombre: 'Erik Alberto Pahua Mendoza', cedula: '13579257',
    grado: 'Maestría en psicoterapia psicoanalítica', enfoques: 'Psicoterapia psicoanalítica',
    perfil: 'Licenciado en psicología con maestría en psicoterapia psicoanalíticamente orientada. Atiende a adolescentes y adultos, con experiencia en afecciones profundas del estado de ánimo y con deportistas de diferentes ramas, incluido el alto rendimiento.',
    atiende: ['adolescentes', 'adultos'], modalidades: ['presencial', 'linea'],
  },
  {
    id: 'mario-cuadros', nombre: 'Mario Cuadros', cedula: '14465729',
    enfoques: 'Terapia cognitivo conductual, terapia sistémica y técnicas afines',
    perfil: 'Diplomado en terapia cognitivo conductual y en terapia sistémica; adiestramiento bajo tutoría en el Instituto Nacional de Neurología y Neurocirugía, en el área de cognición y conducta.',
    atiende: [],
  },
  {
    id: 'yolitzma-sanchez', nombre: 'Yolitzma Sánchez', cedula: '10525109',
    grado: 'Maestría en psicoanálisis (en curso)', enfoques: 'Psicoterapia psicoanalítica',
    perfil: 'Más de 5 años de experiencia en psicoterapia con adolescentes y adultos.',
    atiende: ['adolescentes', 'adultos'], modalidades: ['presencial', 'linea'],
  },
];

// Temas, tal como aparecen en los perfiles del equipo. Cada tema lista a quién lo menciona en su perfil.
export const temas: { tema: string; quienes: NombreFoto[] }[] = [
  { tema: 'Ansiedad', quienes: ['carla-molina', 'isabella-bueno'] },
  { tema: 'Depresión y estado de ánimo', quienes: ['carla-molina', 'isabella-bueno', 'erik-pahua'] },
  { tema: 'Estrés', quienes: ['isabella-bueno'] },
  { tema: 'Pareja y familia', quienes: ['perla-perez', 'cecilia-gomez'] },
  { tema: 'Duelo y pérdidas', quienes: ['myriam-mata'] },
  { tema: 'Trauma', quienes: ['myriam-mata'] },
  { tema: 'Vivir con un diagnóstico médico', quienes: ['myriam-mata'] },
  { tema: 'Sexualidad', quienes: ['carla-molina', 'isabella-bueno', 'irma-correa'] },
  { tema: 'Alimentación', quienes: ['perla-perez', 'irma-correa'] },
  { tema: 'Adicciones', quienes: ['isabella-bueno'] },
  { tema: 'Niños y adolescentes que vivieron violencia o abuso', quienes: ['cecilia-gomez'] },
  { tema: 'Orientación a padres', quienes: ['irma-correa'] },
  { tema: 'Deportistas', quienes: ['erik-pahua'] },
  { tema: 'Evaluación psicodiagnóstica', quienes: ['ricardo-guemes'] },
  { tema: 'Terapia cognitivo conductual', quienes: ['cecilia-gomez', 'mario-cuadros'] },
];

export const sedes = [
  {
    zona: 'Tlalpan',
    direccion: 'Col. Toriello Guerra, zona de hospitales, San Fernando, Tlalpan, CDMX',
    mapa: 'https://www.google.com/maps/place/KATARSIS+-+Centro+de+Atenci%C3%B3n+Psicol%C3%B3gica+Integral/@19.2913919,-99.1620902,19z/data=!3m1!4b1!4m5!3m4!1s0x85ce0058b228f4c5:0x7b5a10f5dab18809!8m2!3d19.2915538!4d-99.16194',
  },
  {
    zona: 'Benito Juárez',
    direccion: 'Calle Félix Parra, San José Insurgentes, Benito Juárez, CDMX',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Calle+F%C3%A9lix+Parra%2C+San+Jos%C3%A9+Insurgentes%2C+Benito+Ju%C3%A1rez%2C+CDMX',
  },
  {
    zona: 'Gustavo A. Madero',
    direccion: 'Calle Lindavista 378 esq. Salaverry, Col. Lindavista, C.P. 07300, Gustavo A. Madero, CDMX',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Lindavista+378%2C+Lindavista%2C+07300+Gustavo+A.+Madero%2C+CDMX',
  },
];

export const pasos = [
  'Llena el formulario con tus datos. Si elegiste a un psicoterapeuta, su nombre va en la solicitud.',
  'Elige el paquete con el número de sesiones que necesitas.',
  'Haz el pago.',
  'Tu psicoterapeuta te contacta para coordinar la sesión.',
];

export const preguntas = [
  {
    p: '¿La terapia en línea funciona igual que en consultorio?',
    r: 'Sí. Te atiende un licenciado con maestría en psicoterapia, la sesión dura 50 minutos y la técnica es la misma que en consultorio. Tú eliges el medio: videollamada, teléfono o chat.',
  },
  {
    p: 'Reservé y pagué sin elegir psicoterapeuta, ¿qué sigue?',
    r: 'El equipo de Katarsis te contacta para preguntarte tu disponibilidad de horario y con base en eso te asigna un psicoterapeuta, que te escribe por correo, WhatsApp o teléfono para acordar el día y la hora.',
  },
  {
    p: '¿Qué necesito para tomar mi sesión en línea?',
    r: 'Un lugar privado y tranquilo, sin interrupciones, donde te sientas seguro para hablar, y tu teléfono, tableta o computadora con batería suficiente. Tú decides si compartes video o no.',
  },
  {
    p: '¿Qué pasa si no me siento cómodo con mi psicoterapeuta?',
    r: 'Puedes cambiar de psicoterapeuta cuando lo decidas. Toma en cuenta que implica empezar de nuevo y volver a contar lo que ya habías compartido.',
  },
  {
    p: '¿Cuánto tiempo voy a necesitar terapia?',
    r: 'No hay un tiempo exacto: la psicoterapia es un trabajo en equipo entre paciente y terapeuta que busca cambios observables a mediano plazo. Puedes dejarla cuando quieras; es recomendable platicarlo antes con tu terapeuta.',
  },
  {
    p: '¿Sus psicoterapeutas pueden recetar medicamento?',
    r: 'No, los medicamentos solo los recetan médicos. Katarsis tiene datos de médicos psiquiatras con quienes te puede canalizar para una valoración y seguimiento.',
  },
];

export const importante =
  'Katarsis no es un servicio de emergencia. Si estás viviendo una crisis o tienes ideas de hacerte daño o de dañar a otros en este momento, comunícate con los servicios de emergencia más cercanos o acude a ellos.';
