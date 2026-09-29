// Contenido de Kitesurf Mexico — escuela en Isla Blanca, Cancún. Fuente: sitio/index.html.
// Método 1.2: imágenes de assets/web/ (fotos del sitio live, sin C2PA).
// Regla: nada inventado.

const img = (f: string) => `${import.meta.env.BASE_URL}${f}.webp`;

export const negocio = {
  nombre:    'Kitesurf Mexico',
  subtitulo: 'Kiteboarding & Wing Foil en Isla Blanca, Cancún',
  ciudad:    'Isla Blanca, Cancún, Q. Roo',
  telefono:  '+52 984 807 2567',
  whatsapp:  '5219848072567',
  email:     '',
  instagram: '@kitesurf_mexico',
  direccion: 'Isla Blanca, Cancún, Quintana Roo, México',
  mapaEmbed: 'https://maps.google.com/maps?q=Isla+Blanca+Cancun+Quintana+Roo+Mexico&t=m&z=13&output=embed&iwloc=near',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const ventajas = [
  {
    icono: '🌊',
    titulo: 'Laguna ideal para principiantes',
    texto: 'Isla Blanca: laguna plana y poco profunda — la más rápida progresión posible.',
  },
  {
    icono: '⛵',
    titulo: 'Apoyo con moto acuática',
    texto: 'Jet ski y lancha disponibles en todo momento para mayor seguridad y aprovechamiento.',
  },
  {
    icono: '🏄',
    titulo: '15+ años de experiencia',
    texto: 'Instructores certificados, equipo nuevo y ambiente relajado. "Experience Premium".',
  },
  {
    icono: '📍',
    titulo: 'Acceso exclusivo a la laguna',
    texto: 'Regaderas, sanitarios y cómodo punto de encuentro en la orilla.',
  },
];

export const servicios = [
  {
    foto:    'kitesurf-lesson',
    titulo:  'Clases de Kiteboarding',
    texto:   'Para principiantes e intermedios. Aprende con instructores certificados en la laguna plana de Isla Blanca. Apoyo con jet ski incluido.',
    cta:     'Reservar clase',
  },
  {
    foto:    'wing-foil',
    titulo:  'Clases de Wing Foil',
    texto:   'Descubre el wing foiling en uno de los mejores spots del mundo. Clases con apoyo de lancha para maximizar tu tiempo en el agua.',
    cta:     'Reservar clase',
  },
  {
    foto:    'escuela',
    titulo:  'Escuela en Isla Blanca',
    texto:   'Conocida por su ambiente cómodo, de alta calidad y relajado. Principiantes y avanzados se sienten bienvenidos en cada sesión.',
    cta:     'Conocer la escuela',
  },
];

export const testimonios = [
  {
    nombre: 'Alana M.',
    fecha:  'Abril 2024',
    texto:  'Gianpaolo y Adriano hicieron mi año. El lugar en Isla Blanca es único: aguas tranquilas y hermosa playa de agua azul justo al otro lado de la laguna. ¡No lo pienses dos veces!',
  },
  {
    nombre: 'Grahama L.',
    fecha:  'Abril 2024',
    texto:  'Sin duda la mejor escuela de kitesurf en la que he estado. Equipo de primera, instructores increíbles y la laguna es perfecta para aprender a cualquier nivel.',
  },
  {
    nombre: 'Jee-Hoon Y.',
    fecha:  'Marzo 2024',
    texto:  'Gianpaolo y su equipo son los mejores. La escuela se siente como un equipo bien aceitado — instrucción excepcional en todo momento.',
  },
];
