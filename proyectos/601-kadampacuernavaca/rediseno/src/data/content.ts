// Contenido de Kadampa Cuernavaca, tomado del sitio original (clon en ../sitio, investigacion/crudo.json
// y, con curl el 2026-09-27, sus páginas /calendario, /contactus y /event/...).
// Regla: nada inventado. Lo que no publica queda fuera o como pendiente (ver CAMBIOS.md).
// Las rutas de imagen son relativas a publicDir (../assets/web, generado por fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Centro de Meditación Kadampa Cuernavaca',
  corto: 'Kadampa Cuernavaca',
  lema: 'Budismo moderno y meditación',
  telefono: '777 565 6011',
  telefonoTel: '+527775656011',
  whatsapp: '527775656011',
  correo: 'educacion@meditarencuernavaca.org',
  correoInfo: 'info@meditarencuernavaca.org',
  direccion: 'Río Conchos 321, Col. Vista Hermosa, 62290, Cuernavaca, Mor.',
  mapa: 'https://maps.app.goo.gl/X4mF9jEb6DFMkUbdA',
  instagram: 'https://www.instagram.com/meditarencuerna/',
  facebook: 'https://www.facebook.com/meditarencuerna',
  sitio: 'https://www.kadampacuernavaca.org/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, me gustaría información sobre las clases de meditación en Kadampa Cuernavaca.');

// ---------- Lugares donde hay clases ----------
export type LugarId = 'cuernavaca' | 'centro' | 'tepoztlan' | 'jojutla' | 'jiutepec' | 'yautepec';
const buscar = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const lugares: Record<LugarId, { corto: string; donde: string; mapa?: string }> = {
  cuernavaca: { corto: 'Cuernavaca', donde: 'En el centro: Río Conchos 321, Col. Vista Hermosa', mapa: negocio.mapa },
  centro: { corto: 'Centro Histórico', donde: 'Escuela Activa de Fotografía, Comonfort 2, Cuernavaca Centro', mapa: buscar('Comonfort 2, Centro, Cuernavaca, Morelos') },
  tepoztlan: { corto: 'Tepoztlán', donde: 'Finca Buda, La Presa 7C, Barrio San José, Tepoztlán', mapa: buscar('La Presa 7C, Barrio San José, Tepoztlán, Morelos') },
  jojutla: { corto: 'Jojutla', donde: 'ANANDA Estudio de Yoga, Benito Juárez #5, fracc. Reforma, Jojutla', mapa: buscar('Benito Juárez 5, Reforma, Jojutla, Morelos') },
  jiutepec: { corto: 'Jiutepec', donde: 'Jiutepec (pide la dirección por WhatsApp)' },
  yautepec: { corto: 'Yautepec', donde: 'Yautepec (pide la dirección por WhatsApp)' },
};

// ---------- Prácticas ----------
// dia: 0 = domingo … 6 = sábado. Horarios del sitio (/ y /nuestrasclases); los de Centro Histórico,
// Jiutepec y Yautepec salen de su calendario de septiembre de 2026 (/calendario) y de su cartel.
export type Tipo = 'clase' | 'oracion' | 'ninos' | 'especial';
export type Practica = {
  nombre: string;
  tipo: Tipo;
  hora?: string; // 'HH:MM' (24 h); sin hora = no la publica
  fin?: string;
  lugar: LugarId;
  con?: string;
  aportacion?: string;
  nota?: string;
  enlace?: string;
};
export type Semanal = Practica & { dia: number };

export const semanales: Semanal[] = [
  { dia: 0, hora: '10:00', nombre: 'Gema que colma todos los deseos', tipo: 'oracion', lugar: 'cuernavaca', nota: 'Oraciones cantadas, con ofrendas de tsog' },
  { dia: 0, hora: '12:00', nombre: 'Clase con meditación y oraciones por la paz en el mundo', tipo: 'clase', lugar: 'cuernavaca', con: 'Marco Sánchez', aportacion: 'Donativo voluntario' },
  { dia: 1, hora: '15:00', nombre: 'Clase del Programa General', tipo: 'clase', lugar: 'yautepec' },
  { dia: 2, hora: '10:00', nombre: 'Clase con meditación del Programa General', tipo: 'clase', lugar: 'cuernavaca', con: 'guen Nampur', aportacion: '$70' },
  { dia: 2, hora: '17:00', fin: '18:00', nombre: 'Clases para niños', tipo: 'ninos', lugar: 'cuernavaca', con: 'María Fernanda Cano', aportacion: '$70 por niño acompañado por un adulto (incluye material)', nota: 'De 4 a 12 años' },
  { dia: 2, hora: '18:00', nombre: 'Aprende a meditar en el Centro Histórico', tipo: 'clase', lugar: 'centro', aportacion: '$60' },
  { dia: 3, hora: '12:00', nombre: 'Gema del corazón', tipo: 'oracion', lugar: 'cuernavaca', nota: 'Oraciones cantadas' },
  { dia: 3, hora: '16:30', nombre: 'Clase de meditación para niños', tipo: 'ninos', lugar: 'tepoztlan', aportacion: '$60 clase individual' },
  { dia: 3, hora: '18:00', nombre: 'Clase de meditación para adultos', tipo: 'clase', lugar: 'tepoztlan', aportacion: '$60 clase individual' },
  { dia: 3, hora: '19:00', nombre: 'Clase con meditación del Programa General', tipo: 'clase', lugar: 'cuernavaca', con: 'guen Nampur', aportacion: '$70' },
  { dia: 3, hora: '19:00', nombre: 'Clase de meditación', tipo: 'clase', lugar: 'jojutla', aportacion: '$50' },
  { dia: 4, hora: '10:30', nombre: 'Clase del Programa General', tipo: 'clase', lugar: 'jiutepec' },
  { dia: 4, hora: '19:00', nombre: 'Aprende a meditar', tipo: 'clase', lugar: 'cuernavaca', con: 'Luis Peña', aportacion: '$70' },
];

// Oraciones de días fijos del mes (sitio: /nuestrasclases). No publica la hora.
export const mensuales: (Practica & { dias: number[] })[] = [
  { dias: [10, 25], nombre: 'Ofrenda al Guía Espiritual', tipo: 'oracion', lugar: 'cuernavaca', nota: 'Oraciones cantadas; escríbenos para conocer la hora' },
  { dias: [29], nombre: 'Melodioso Tambor que vence en todas las direcciones', tipo: 'oracion', lugar: 'cuernavaca', nota: 'Oraciones cantadas; escríbenos para conocer la hora' },
];

// Eventos con fecha (páginas /eventosespeciales y /event/... del sitio).
export const especiales: (Practica & { fecha: string; hasta?: string; resumen: string })[] = [
  {
    fecha: '2026-10-04', hora: '16:00', fin: '19:00', nombre: 'Clase mensual: La Rueda de la Vida', tipo: 'especial', lugar: 'cuernavaca', aportacion: '$200',
    resumen: 'Un domingo al mes. El diagrama de la rueda de la vida representa todos los lugares de existencia en el samsara junto con sus habitantes.',
  },
  {
    fecha: '2026-10-24', hora: '17:00', fin: '20:30', nombre: 'Charla: Aprende a soltar', tipo: 'especial', lugar: 'cuernavaca', con: 'guen Nampur',
    enlace: 'https://www.kadampacuernavaca.org/event/charla-aprende-a-soltar-238/register',
    resumen: 'Charla especial, "y dejar el pasado atrás". Inscripciones en línea desde el 27 de septiembre.',
  },
  { fecha: '2026-11-08', hora: '16:00', fin: '19:00', nombre: 'Clase mensual: La Rueda de la Vida', tipo: 'especial', lugar: 'cuernavaca', aportacion: '$200', resumen: 'Un domingo al mes, de 4 a 7 pm.' },
  { fecha: '2026-12-06', hora: '16:00', fin: '19:00', nombre: 'Clase mensual: La Rueda de la Vida', tipo: 'especial', lugar: 'cuernavaca', aportacion: '$200', resumen: 'Un domingo al mes, de 4 a 7 pm.' },
  {
    fecha: '2027-01-03', hasta: '2027-01-31', nombre: 'Retiro de aproximación de Vajrayoguini', tipo: 'especial', lugar: 'tepoztlan',
    resumen: 'Retiro en Tepoztlán, del 3 al 31 de enero de 2027.',
  },
];

// ---------- Textos del sitio ----------
export const pasos = [
  { t: 'Elige', d: 'Simplemente elige la clase regular o evento especial que más te guste.' },
  { t: 'No se requiere inscripción previa', d: 'Preséntate directamente en Kadampa Cuernavaca o inscríbete vía mensaje de WhatsApp.' },
  { t: '¡Ven!', d: 'Preséntate a la clase regular o evento especial al que te inscribiste.' },
  { t: 'Repite', d: '¡Te esperamos de vuelta! Se recomienda asistir a clases una vez a la semana.' },
];

export const clases = [
  {
    t: 'Programa General',
    cuando: 'Martes 10:00 y miércoles 19:00, con guen Nampur. Aportación: $70',
    d: 'El Programa General ofrece una introducción básica a la visión, meditación, modo de vida y enseñanzas budistas que ayuda a los asistentes a mejorar su vida de manera práctica. Está basado en los comentarios del venerable Gueshe Kelsang Gyatso Rimpoché, se ofrece en todos los centros budistas kadampas y es la mejor manera de comenzar para los que deseen aprender más sobre el budismo y la meditación.',
  },
  {
    t: 'Aprende a meditar',
    cuando: 'Jueves 19:00, con Luis Peña. Aportación: $70',
    d: 'Si deseas comenzar con el hábito de la meditación o simplemente quieres mejorar tu concentración, este taller es para ti. Durante la clase se ofrecen técnicas claras y sencillas para que aprendas a meditar.',
  },
  {
    t: 'Clase con meditación y oraciones por la paz en el mundo',
    cuando: 'Domingos 12:00, con Marco Sánchez. Donativo voluntario',
    d: 'Enseñanzas sobre cómo cultivar paz interior. Esta clase nos ayuda a cultivar un cálido y buen corazón. Incluye meditación guiada, explicación y oraciones muy inspiradoras.',
  },
  {
    t: 'Clases para niños',
    cuando: 'Martes de 17:00 a 18:00, con María Fernanda Cano. De 4 a 12 años. $70 por niño acompañado por un adulto (incluye material)',
    d: 'Un espacio donde los niños pueden aprender a estimar a los demás y disfrutar de paz. El enfoque es ayudarles con dulzura y paciencia a cultivar los valores humanos que son fuente de armonía y paz, a través de juegos, experimentos, historias y meditaciones sencillas.',
  },
];

export const puyas = [
  { t: 'Gema del corazón', cuando: 'Miércoles 12:00' },
  { t: 'Gema que colma todos los deseos', cuando: 'Domingo 10:00, con ofrendas de tsog' },
  { t: 'Ofrenda al Guía Espiritual', cuando: 'Todos los días 10 y 25 del mes' },
  { t: 'Melodioso Tambor que vence en todas las direcciones', cuando: 'Todos los días 29 del mes' },
];

export const cerca = [
  { t: 'Tepoztlán', cuando: 'Miércoles: niños 16:30, adultos 18:00. Aportación $60 clase individual', donde: lugares.tepoztlan.donde },
  { t: 'Jojutla', cuando: 'Miércoles 19:00. Aportación $50', donde: lugares.jojutla.donde },
  { t: 'Centro Histórico de Cuernavaca', cuando: 'Martes 18:00. Aportación $60', donde: lugares.centro.donde },
];

export const linaje = [
  { n: 'Guenla Kelsang Dekyong', r: 'Directora espiritual general', d: 'Ha sido estudiante del venerable Gueshe-la durante más de treinta años. Enseña en festivales kadampa por todo el mundo y es maestra residente del Centro de Meditación Kadampa Manyhushri en Reino Unido.' },
  { n: 'Guenla Kelsang Jampa', r: 'Subdirector espiritual general', d: 'Es muy admirado por su afectuosa personalidad y sus claras e inspiradoras enseñanzas. Es maestro residente del Centro Internacional de Retiros Gran Cañón.' },
  { n: 'Guen Kelsang Sangden', r: 'Maestra residente de Kadampa México', d: 'Es apreciada por muchos por su buen ejemplo y por sus consejos amorosos y claros. Ha practicado y enseñado el budismo kadampa por más de 20 años.' },
];

export const logros = [
  'Se implementan tres programas de estudio y meditación que se enseñan en los centros Kadampa en todo el mundo: el Programa General, el Programa Fundamental y el Programa de Formación de Maestros.',
  'Se han publicado 23 aclamados libros sobre el budismo y la meditación, traducidos a varios idiomas.',
  'Se han entrenado cientos de maestros kadampas modernos.',
  'Se han establecido más de 1.100 centros de meditación alrededor del mundo.',
  'Se ha formado una Sangha mundial de cientos de monjes y monjas ordenados.',
];
