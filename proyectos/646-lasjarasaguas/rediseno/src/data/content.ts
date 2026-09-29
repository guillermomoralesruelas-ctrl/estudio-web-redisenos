// Contenido de Las Jaras Aguas Termales, tomado del sitio original (investigacion/crudo.json).
// Método 1.2: imágenes de assets/web/ (fotos reales, sin C2PA).
// Regla: nada inventado.

const img = (f: string) => `${import.meta.env.BASE_URL}${f}.webp`;

export const negocio = {
  nombre:      'Las Jaras Aguas Termales',
  ciudad:      'La Garita, Jalisco, México',
  telefono:    '+52 358 416 5144',
  whatsapp:    '523329297046',
  whatsappSpa: '523413177393',
  email:       'hotel@lasjaras.mx',
  direccion:   'Carretera Jiquilpan-Manzanillo km 82, La Garita, Jalisco',
  mapaEmbed:   'https://maps.google.com/maps?q=Carretera+Jiquilpan-Manzanillo+km+82+La+Garita+Jalisco+Mexico&t=m&z=14&output=embed&iwloc=near',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const waSpa = (msg: string) =>
  `https://wa.me/${negocio.whatsappSpa}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const accesos = [
  {
    nombre: 'Acceso Termal',
    precio: '$480 MXN',
    descripcion: 'La esencia de Las Jaras',
    incluye: ['Temazcal principal', 'Gruta termal', 'Cuartos de vapor', 'Jardín termal', 'Áreas de hidratación', 'Temazcal ancestral'],
  },
  {
    nombre: 'Acceso Termal Premium',
    precio: '$750 MXN',
    descripcion: 'El favorito',
    incluye: ['Todo lo del Acceso Termal', '1 Toalla', '1 Locker (según disponibilidad)', '1 Mocktail', 'Acceso al Pabellón de Barro (por cita)'],
  },
  {
    nombre: 'Acceso Termal Signature',
    precio: '$1,150 MXN',
    descripcion: 'Bienestar sin límites',
    incluye: ['Todo lo del Acceso Premium', '1 Bata', '1 Cocktail', 'Mascarilla hidratante', 'Masaje relajante de bienvenida 20 min'],
  },
];

export const serviciosSpa = [
  { foto: 'masajes',      titulo: 'Masajes Terapéuticos', texto: 'Masajes antiestrés, tejido profundo, con piedras calientes y más. Alivia tensiones y recupera tu equilibrio.' },
  { foto: 'tratamientos', titulo: 'Tratamientos Faciales', texto: 'Revitaliza y nutre tu piel con ingredientes naturales y técnicas avanzadas para un cutis radiante e hidratado.' },
  { foto: 'rituales',     titulo: 'Rituales de Bienestar', texto: 'Experiencias holísticas que combinan masajes, aromaterapia y técnicas ancestrales para una profunda renovación.' },
];

export const actividades = [
  { hora: '08:30', nombre: 'Yoga Acuático' },
  { hora: '10:00', nombre: 'Circuito Termal Guiado' },
  { hora: '12:00', nombre: 'Experiencia de Barro' },
  { hora: '16:00', nombre: 'Respiración Consciente' },
];

export const testimonios = [
  { texto: 'Ve preparado para quedarte a dormir, quedas tan relajado que no quieres manejar de regreso.', autor: 'Irek P.', fuente: 'TripAdvisor' },
  { texto: 'Siempre que voy es una delicia, agua caliente bajo las montañas.', autor: 'Angélica Luna', fuente: 'Google' },
  { texto: 'Vengan con el objetivo de disfrutar lo calentito, en diciembre hace frillito y las aguas termales son increíbles.', autor: 'Juan Carlos R.', fuente: 'TripAdvisor' },
];
