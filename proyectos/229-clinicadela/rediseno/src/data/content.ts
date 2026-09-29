const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Clínica del Acné',
  doctora: 'Dra. Reyna Beatriz Aguirre Trejo',
  ciudad: 'Mérida, Yucatán',
  telefono: '+529993287515',
  whatsapp: '5219993287515',
  facebook: 'https://www.facebook.com/clinicadeacne/',
  doctoralia: 'https://www.doctoralia.com.mx/reyna-beatriz-aguirre/dermatologo/yucatan?address-id=67337',
  direccion: 'Calle 31E #275 por 24 y 26, Col. Miguel Alemán, Mérida, Yucatán',
  horario: 'Lunes a Viernes, 10:00 am – 8:00 pm',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const credenciales = [
  'Médico Cirujano — Universidad Autónoma de Yucatán',
  'Especialidad en Dermatología — UNAM',
  'Especialización en Leprología y Micología — Centro Dermatológico Pascua / UNAM',
  'Certificada por el Consejo Mexicano de Dermatología A.C.',
  'Cédula Profesional 775270 · Cédula Especialista 4111225',
  'Más de 30 años de experiencia en consulta privada',
  "Hospital General Agustín O'Horán · Hospital Benito Juárez, Mérida",
];

export const condiciones = [
  { nombre: 'Acné', desc: 'Brotes, manchas post-acné y cicatrices. Tratamiento con peelings y microdermoabrasión.' },
  { nombre: 'Manchas / Melasma', desc: 'Paño, manchas de sol y melasma. Tratamiento despigmentante y peeling.' },
  { nombre: 'Caída del Cabello', desc: 'Diagnóstico y tratamiento de alopecia, caspa y cabello grasoso.' },
  { nombre: 'Verrugas y Lunares', desc: 'Diagnóstico y extirpación con criterio médico especializado.' },
  { nombre: 'Vitíligo', desc: 'Evaluación y manejo del vitíligo, mal del pinto y pérdida de pigmento.' },
  { nombre: 'Otros', desc: 'Psoriasis, hongos en uñas, alergias cutáneas y otras enfermedades de la piel.' },
];

export const tratamientos = [
  { nombre: 'Mesoterapia', img: img('mesoterapia-facial.jpg'), desc: 'Micro inyecciones de lipolíticos para reducir grasa localizada en zonas específicas.' },
  { nombre: 'Antienvejecimiento', img: img('anti-arrugas.jpg'), desc: 'Prevención y reducción de arrugas. Tratamientos reafirmantes para la piel.' },
  { nombre: 'Microdermoabrasión', img: img('microdermoabrasion.jpg'), desc: 'Mejora la textura, remueve cicatrices y aclara manchas con tecnología especializada.' },
  { nombre: 'Peeling', img: img('peeling.jpg'), desc: 'Acné, manchas, rosacea, arrugas y cicatrices. Estimula la formación de colágeno.' },
];

export const resenas = [
  { nombre: 'Dannet Gt', texto: 'Muy Buena Doctora, es muy paciente y siempre trata de resolver todas las dudas que tengo, recomiendo mucho ir a consultar con ella.' },
  { nombre: 'Beatriz Flores', texto: 'Excelente como persona y como profesionista. Su trato es amable y su diagnóstico es acertado. La recomiendo ampliamente.' },
  { nombre: 'Daniel Barrera', texto: 'Las instalaciones son muy buenas y el trato es amable, la doctora es una profesional.' },
  { nombre: 'Dulce Rosales Quintero', texto: 'Excelente dermatologa, a la primera me quitó unas manchas.' },
  { nombre: 'Adriana Ayala', texto: 'Agradezco a la doctora Reyna por ser un profesional de la salud comprometido, actualizado que actúa en pro del paciente. Me ayudó totalmente con mi problema de acné.' },
  { nombre: 'Serge Af', texto: 'Excelente trato. A parte de tener una actitud muy accesible ha sabido realizar diagnósticos con mucha certeza. Muy recomendada.' },
];
