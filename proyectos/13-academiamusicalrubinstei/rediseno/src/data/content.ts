// Contenido de la Academia Musical Rubinstein (Polanco, CDMX). Todo sale de investigacion/crudo.json (inicio, contacto
// y galería). No se inventan datos: lo que falta va como [PENDIENTE].

export const negocio = {
  nombre: 'Academia Musical Rubinstein',
  anios: 35,
  whatsapp: '525548324630',
  whatsappVisible: '55 4832 4630',
  tel: '+525552800507',
  telVisible: '55 5280 0507',
  correo: 'info@academiamusicalrubinstein.com',
  direccion: 'Moliere 340 B, interior 103, Col. Polanco, Ciudad de México',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Moliere 340, Polanco, Ciudad de México'),
  horario: 'Lunes a viernes, de 11:00 a 21:00',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Maestro = { nombre: string; clases: string[]; foto?: string };
export const maestros: Maestro[] = [
  { nombre: 'Mtra. Araceli Juárez', clases: ['Canto', 'Piano'], foto: 'araceli' },
  { nombre: 'Mtro. Neftalí Montaño', clases: ['Guitarra', 'Bajo', 'Batería', 'Piano', 'Teclado'] },
  { nombre: 'Mtro. Humberto Mata', clases: ['Batería'] },
  { nombre: 'Mtro. Moisés Roque', clases: ['Canto', 'Piano', 'Batería', 'Bajo'], foto: 'moises' },
  { nombre: 'Mtra. Karla Santiago', clases: ['Canto', 'Violín', 'Piano', 'Iniciación musical'], foto: 'karla' },
  { nombre: 'Mtro. Víctor Amaro', clases: ['Guitarra', 'Composición'] },
];

// Teclas del teclado: instrumentos y materias de su lista de clases.
export const teclas = ['Piano', 'Teclado', 'Guitarra', 'Bajo', 'Batería', 'Canto', 'Violín', 'Composición', 'Iniciación musical', 'Ukulele'];

export type Modalidad = { id: string; nombre: string; cuota: number; inscripcion: number | null; nota: string };
export const modalidades: Modalidad[] = [
  { id: 'hora', nombre: 'Una hora a la semana', cuota: 1800, inscripcion: 1600, nota: 'En el estudio de Polanco.' },
  { id: 'media', nombre: 'Media hora a la semana', cuota: 950, inscripcion: 750, nota: 'En el estudio de Polanco.' },
  { id: 'domicilio', nombre: 'A domicilio en Polanco', cuota: 2500, inscripcion: null, nota: 'Una clase de una hora a la semana. Su sitio no dice si hay inscripción: se confirma por WhatsApp.' },
  { id: 'linea', nombre: 'En línea', cuota: 1800, inscripcion: 0, nota: 'Una clase de una hora a la semana, sin costo de inscripción.' },
];

export const generos = ['Clásica', 'Rock', 'Pop', 'Jazz', 'Balada', 'Latín', 'Funk', 'Blues'];
export const servicios = ['Recitales', 'Cursos especiales', 'Cursos de verano', 'Ingreso a conservatorio', 'Audiciones musicales'];
