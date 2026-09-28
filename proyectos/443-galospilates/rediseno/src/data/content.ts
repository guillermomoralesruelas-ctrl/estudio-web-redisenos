// Contenido de Galo's Pilates Studio — datos del sitio original (investigacion/crudo.json).
// IMPORTANTE: el sitio no publica teléfono, email, WhatsApp ni dirección.
// El único CTA es la plataforma de reservas: galostudios.com/register y /login.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: "Galo's Pilates Studio",
  ciudad: 'Oaxaca de Juárez, Oaxaca',
  // Sin teléfono, WhatsApp ni email publicados en el sitio original
  reservaUrl: 'https://galostudios.com/register',
  loginUrl: 'https://galostudios.com/login',
  agendaUrl: 'https://galostudios.com/#agenda',
};

export const mision = {
  titulo: 'Acompañar el bienestar de Oaxaca desde una práctica precisa, cálida y profesional.',
  texto: 'Somos un estudio que inspira salud en la comunidad de Oaxaca a través de una práctica de Pilates profesional, personalizada y empática. Nos dedicamos a guiar a cada persona en la mejora de su postura, fuerza y flexibilidad, fusionando el método clásico con enfoques contemporáneos en un entorno de acompañamiento cálido que promueve una vida plena.',
};

export const vision = {
  titulo: 'Ser el estudio que conecta Pilates auténtico, comunidad y una experiencia contemporánea.',
  texto: 'Ser el referente en Oaxaca que redefine el bienestar mediante la evolución del Pilates auténtico y contemporáneo. Aspiramos a ser un espacio esencial de salud, reconocido por nuestra empatía en el acompañamiento y por brindar una experiencia transformadora que potencie el equilibrio físico-mental de manera sostenible en cada etapa de la vida.',
};

// Las imágenes con %20 en el nombre necesitan %2520 (doble encoding):
// el navegador decodifica %2520 → %20 antes de la petición, que coincide con el nombre real del archivo.
export const fotos = {
  heroEquipo: img('coachs-hero-BZ7kW-nK.jpg'),
  // Portraits 1200×1600
  josellIneFull: img('coach-joselline-lopez-D9--gA93.jpg'),
  gabrielFull: img('coach-gabriel-villegas-7j1ceYH1.jpg'),
  karlaFull: img('coach-karla-santiago-D8uUeuqi.jpg'),
  monicaFull: img('coach-monica-crespo-QHmHVKMN.jpg'),
  // Avatars 176×176
  josellIneAvatar: img('coach-joselline-lopez-avatar-DvV8GQlq.jpg'),
  gabrielAvatar: img('coach-gabriel-villegas-avatar-DWV43SHp.jpg'),
  karlaAvatar: img('coach-karla-santiago-avatar-CXnb4Pgq.jpg'),
  monicaAvatar: img('coach-monica-crespo-avatar-CR8gIqxP.jpg'),
  // Info cards 1080×1350 (literal %20 in filename → %2520)
  josellIneInfo: img('Informacion%2520coach%2520Joselline%2520Lopez-BIfmyb5g.jpg'),
  gabrielInfo: img('Informacion%2520coach%2520Gabriel%2520Villegas-DJI0YTIB.jpg'),
  karlaInfo: img('Informacion%2520coach%2520Karla%2520Santiago-BgJphnQC.jpg'),
  monicaInfo: img('Informacion%2520coach%2520Monica%2520Crespo-ByxaV_V4.jpg'),
};

export type Coach = {
  nombre: string;
  especialidad: string;
  clases: string;
  avatar: string;
  foto: string;
  info: string;
};

export const coaches: Coach[] = [
  {
    nombre: 'Joselline López',
    especialidad: 'Coach de estudio',
    clases: 'Pilates Mat · Reformer · Wunda Chair · Sculpt · HIIT + SCULPT · Stretching',
    avatar: fotos.josellIneAvatar,
    foto: fotos.josellIneFull,
    info: fotos.josellIneInfo,
  },
  {
    nombre: 'Gabriel Villegas',
    especialidad: 'Coach de estudio',
    clases: 'Pilates Mat · Reformer · Wunda Chair · Sculpt · HIIT + SCULPT · Stretching',
    avatar: fotos.gabrielAvatar,
    foto: fotos.gabrielFull,
    info: fotos.gabrielInfo,
  },
  {
    nombre: 'Karla Santiago',
    especialidad: 'Coach de estudio',
    clases: 'Entrenamiento funcional · Barré · GAP',
    avatar: fotos.karlaAvatar,
    foto: fotos.karlaFull,
    info: fotos.karlaInfo,
  },
  {
    nombre: 'Mónica Crespo',
    especialidad: 'Coach de estudio',
    clases: 'Barré',
    avatar: fotos.monicaAvatar,
    foto: fotos.monicaFull,
    info: fotos.monicaInfo,
  },
];

export type Espacio = { nombre: string; icono: string; clases: string };
export const espacios: Espacio[] = [
  {
    nombre: 'Tapete 1',
    icono: '🧘',
    clases: 'Pilates Mat · Sculpt · HIIT + SCULPT · Stretching',
  },
  {
    nombre: 'Tapete 2',
    icono: '🤸',
    clases: 'Entrenamiento funcional · Barré',
  },
  {
    nombre: 'Máquinas',
    icono: '⚙️',
    clases: 'Reformer · Wunda Chair (sesiones enfocadas y personalizadas)',
  },
];

export type Clase = { nombre: string; descripcion: string };
export const clases: Clase[] = [
  { nombre: 'Pilates Mat', descripcion: 'Método clásico en tapete. Fuerza de core, postura y control.' },
  { nombre: 'Reformer', descripcion: 'Trabajo con máquina. Sesiones de cupo reducido (4 personas) para atención personalizada.' },
  { nombre: 'Reformer Terapéutico', descripcion: 'Reformer con enfoque correctivo y rehabilitador.' },
  { nombre: 'Barré', descripcion: 'Combinación de ballet, Pilates y yoga. Tono, flexibilidad y postura.' },
  { nombre: 'Sculpt', descripcion: 'Modelado corporal con énfasis en fuerza y definición muscular.' },
  { nombre: 'HIIT + SCULPT', descripcion: 'Circuito de alta intensidad con trabajo de fuerza. Cardio y tonificación.' },
  { nombre: 'Stretching', descripcion: 'Flexibilidad, movilidad y recuperación activa.' },
  { nombre: 'GAP', descripcion: 'Glúteos, abdomen y piernas. Trabajo específico de tren inferior y core.' },
  { nombre: 'Entrenamiento funcional', descripcion: 'Movimientos funcionales para mejorar el rendimiento en la vida cotidiana.' },
  { nombre: 'Mat Clásico', descripcion: 'Repertorio clásico de Pilates en tapete, con secuencias tradicionales del método.' },
];
