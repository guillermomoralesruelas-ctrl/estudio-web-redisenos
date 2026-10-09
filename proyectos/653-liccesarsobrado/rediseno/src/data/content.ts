// Contenido del Lic. César Sobrado, tomado de investigacion/crudo.json (inicio, servicios, contacto)
// e investigacion/original.html (contadores reales: +300 pacientes, +10 años). Nada inventado.
// Textos nuevos del estudio (títulos de sección, microcopy, mensajes de WhatsApp) declarados en CAMBIOS.md.

// publicDir = ../assets/web → los archivos se sirven en la raíz
const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Lic. César Sobrado',
  especialidad: 'Nutrición clínica y deportiva',
  ciudad: 'Cancún, Quintana Roo',
  telefono: '998 480 9900',
  telefonoHref: 'tel:+529984809900',
  // Su botón "Agenda tu consulta" (bit.ly/Quierounacitadenutriicion) abre WhatsApp con phone=9984809900, sin el 52.
  whatsapp: '529984809900',
  direccion: 'Porto Napoli 21, Viocenter, primer piso, local 7, consultorio 3',
  cp: '77533 Cancún, Q. R.',
  maps: 'https://goo.gl/maps/FhuvLt9A8tF5QusNA',
  pacientes: '+300',
  anios: '+10',
};

export const wa = (msg: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;
export const waGeneral = wa('¡Hola! Vi tu sitio y quisiera agendar una consulta de nutrición.');

export const frase = 'Transforma tu vida, a través de la nutrición';

export const hola = [
  'Soy el Lic. César Sobrado, nutriólogo en Cancún especializado en la promoción de una alimentación saludable y equilibrada para mejorar la calidad de vida de mis pacientes, compartiendo mi enfoque y filosofía de trabajo en nutrición.',
  'Aquí encontrarás información detallada sobre los servicios que ofrezco, incluyendo consultas personalizadas, asesoramiento en nutrición deportiva y planes de alimentación.',
];

// Sus tres preguntas del inicio, cada una con su texto (recortado, sin emojis).
export type IdMeta = 'dietas' | 'deporte' | 'restricciones';
export const metas: { id: IdMeta; corto: string; pregunta: string; texto: string[] }[] = [
  {
    id: 'dietas',
    corto: 'Comer mejor sin dietas aburridas',
    pregunta: '¿Harto de las dietas aburridas y poco efectivas?',
    texto: [
      'Estoy seguro que una alimentación equilibrada y sostenible es la clave para mejorar tu bienestar a largo plazo.',
      'No se trata de privarse de ciertos alimentos, sino de encontrar un equilibrio que se adapte a tus necesidades y metas.',
    ],
  },
  {
    id: 'deporte',
    corto: 'Rendir más en mi deporte',
    pregunta: '¿Estás listo para darlo todo en tus entrenamientos y competencias?',
    texto: [
      'Si eres deportista o atleta, te ayudo a maximizar tu rendimiento y alcanzar tus objetivos deportivos a través de una nutrición adecuada.',
      'Juntos, creamos un plan de alimentación personalizado que se adapte a tus necesidades específicas como atleta.',
    ],
  },
  {
    id: 'restricciones',
    corto: 'Comer bien con una enfermedad',
    pregunta: '¿Sufres enfermedades que requieren de restricciones alimenticias?',
    texto: [
      'Mi objetivo es ayudar a mis pacientes a llevar una alimentación saludable y variada, a pesar de las limitaciones impuestas por su enfermedad.',
      'También proporciono información sobre alternativas saludables a los alimentos restringidos, así como consejos prácticos para leer etiquetas de alimentos y evitar posibles alérgenos.',
    ],
  },
];

// "¿Qué veremos en mi consulta?": sus cinco pasos, con su texto (recortado).
export const pasos = [
  {
    titulo: 'Recopilación de información y evaluación',
    texto: 'Primero, vamos a tener una breve plática para conocernos mejor. Quiero saber todo sobre ti, desde tu nombre hasta tus metas nutricionales y lo que te hace feliz.',
  },
  {
    titulo: 'Antropometría',
    texto: 'Es hora de entrar en acción con la «supermedición del cuerpo». Sacamos la cinta métrica, calibradores y hasta una balanza mágica para descubrir esos datos sobre tu cuerpo como talla, peso, IMC, circunferencias y pliegues. No juzgamos, solo quiero ayudarte a sentirte mejor contigo mismo.',
  },
  {
    titulo: 'Análisis de dieta actual y establecimiento de objetivos',
    texto: 'Vamos a hablar de tus comidas favoritas, tus comiditas secretas y todo lo que amas en el mundo de la comida. También hablaremos de cómo podemos hacer pequeños cambios para alcanzar tus objetivos sin sacrificar tus placeres culinarios.',
  },
  {
    titulo: 'Planificación dietética',
    texto: 'Aquí viene el plan nutricional personalizado. Tendremos tus comidas favoritas y las ajustaremos para que sean más sanas y balanceadas.',
  },
  {
    titulo: 'Seguimiento y ajustes',
    texto: 'No te voy a dejar solo en esto, seremos un equipo. Programaremos citas para chequear cómo vas, resolver dudas y ajustar lo necesario.',
  },
];

// Servicios (página /servicios), recortados.
export const servicios = [
  {
    nombre: 'Consulta de nutrición',
    texto: 'Evaluación completa: peso, talla, circunferencia de cintura y cadera, estilo de vida, hábitos alimentarios, necesidades y objetivos. Con base en ella diseño un plan de alimentación personalizado, con recomendaciones sobre el tamaño de las porciones, la frecuencia de las comidas y la selección de alimentos.',
  },
  {
    nombre: 'Análisis de composición corporal',
    texto: 'Mide la composición de tu cuerpo en términos de grasa, músculo y hueso con impedancia bioeléctrica, además de tu nivel de hidratación. El resultado me ayuda a hacer tu plan aún más preciso.',
  },
  {
    nombre: 'Coaching en nutrición deportiva',
    texto: 'Evaluamos tu composición corporal, tu nivel de actividad y tu consumo calórico diario. Si buscas ganar músculo y fuerza, una dieta rica en proteínas y calorías; si tu enfoque es la resistencia, cargamos tu plan con carbohidratos.',
  },
  {
    nombre: 'Impedancia bioeléctrica y antropometría',
    texto: 'Con una suave corriente eléctrica evaluamos tu composición corporal, distinguiendo entre masa magra y masa grasa. Medimos cintura, caderas, brazos, piernas y más para rastrear tu progreso.',
  },
];

// Elemento memorable "La supermedición": lo que se mide en la consulta según sus propios textos.
// x, y en el viewBox 0 0 200 420 de la silueta. 'fuente' dice de qué página sale cada medida.
export type Medida = {
  id: string;
  nombre: string;
  que: string;
  servicio: string;
  x: number;
  y: number;
  lado: 'izq' | 'der';
};
export const medidas: Medida[] = [
  { id: 'talla', nombre: 'Talla', que: 'Tu estatura: junto con el peso, es el punto de partida de la evaluación.', servicio: 'Consulta de nutrición', x: 100, y: 14, lado: 'der' },
  { id: 'brazo', nombre: 'Circunferencia de brazo', que: 'Se mide para rastrear tu progreso: si ganas músculo o grasa.', servicio: 'Antropometría', x: 42, y: 128, lado: 'izq' },
  { id: 'pliegues', nombre: 'Pliegues', que: 'Con calibradores, parte de la «supermedición del cuerpo».', servicio: 'Antropometría', x: 156, y: 140, lado: 'der' },
  { id: 'cintura', nombre: 'Cintura', que: 'Circunferencia de cintura: se mide desde la primera consulta.', servicio: 'Consulta de nutrición', x: 100, y: 176, lado: 'izq' },
  { id: 'cadera', nombre: 'Cadera', que: 'Circunferencia de cadera, junto con la de cintura.', servicio: 'Consulta de nutrición', x: 100, y: 214, lado: 'der' },
  { id: 'composicion', nombre: 'Grasa, músculo y hueso', que: 'Impedancia bioeléctrica: distingue masa magra y masa grasa, y mide tu hidratación.', servicio: 'Análisis de composición corporal', x: 100, y: 150, lado: 'der' },
  { id: 'pierna', nombre: 'Circunferencia de pierna', que: 'Brazos, piernas y más: así se ve si tu cuerpo está en equilibrio.', servicio: 'Antropometría', x: 78, y: 290, lado: 'izq' },
  { id: 'peso', nombre: 'Peso e IMC', que: 'En la balanza: peso e índice de masa corporal.', servicio: 'Consulta de nutrición', x: 100, y: 404, lado: 'der' },
];
