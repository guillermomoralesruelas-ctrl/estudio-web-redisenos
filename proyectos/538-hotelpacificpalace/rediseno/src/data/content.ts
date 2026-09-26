// Contenido del Hotel Pacific Palace (Mazatlán, Sinaloa).
// Textos copiados de investigacion/crudo.json (pacificpalace.mx: inicio, /hotel, /habitaciones y /amenidades, 2026-09-26),
// con erratas corregidas. El WhatsApp oficial (669 216 1096) sale de /politica_cancelacion del sitio real, y el motor de
// reservas (hotelespalace.mx, hotel 16) de public/js/custom.js del sitio real.
// Lo nuevo (títulos, botones y textos del reloj) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

const wa = (texto: string) => `https://wa.me/526692161096?text=${encodeURIComponent(texto)}`;

export const hotel = {
  nombre: 'Hotel Pacific Palace',
  subtitulo: 'Pacific Palace Beach Tower Hotel',
  lema: 'Encuentra la serenidad y el relax que necesitas',
  bienvenida: 'Tus vacaciones ideales en un hotel todo incluido',
  intro: [
    'Hotel Pacific Palace es la elección perfecta para tus vacaciones en Mazatlán. Nuestro hotel ofrece una cómoda estadía, estamos situados a pie de playa por lo que disfrutarás de unas espectaculares vistas al mar.',
    'Con un diseño vanguardista y acogedor, el hotel te ofrece un ambiente perfecto para disfrutar de tus vacaciones al máximo, donde la relajación y la privacidad son primordiales.',
  ],
  zonaDorada: 'Ubicados en la Zona Dorada de Mazatlán, conocida por sus playas de arena dorada. A pocos pasos de nuestro hotel encontrarás una gran variedad de bares, restaurantes, discotecas, centros comerciales y tiendas, así como el malecón de Mazatlán.',
  instalaciones: [
    'Sumérgete en la diversión de nuestra piscina al aire libre y obtén un toque adicional de relajación en nuestro jacuzzi.',
    'Explora la exquisita gastronomía de nuestro restaurante, donde encontrarás una gran variedad de platillos estilo buffet y a la carta con especialidades exquisitas.',
    'También te invitamos a descubrir nuestro bar, donde podrás degustar bebidas y cócteles deliciosos.',
  ],
  compromiso: 'Nuestro compromiso es brindarte el mejor servicio posible para que puedas relajarte y disfrutar de momentos especiales durante tu estancia con nosotros. Ya sea que busques momentos de relajación o diversión, estamos aquí para asegurarnos de que tengas todo lo que necesitas.',
  estrellas: 'Descubre la elegancia frente al mar en nuestro hotel 4 estrellas.',
  checkin: ['Check-in desde las 3:00 pm', 'Check-in anticipado sujeto a disponibilidad'],
  checkout: ['Check-out hasta las 12:00 pm', 'Express check-out disponible'],
  video: 'https://www.youtube.com/watch?v=1sjmvUzEua8',
  direccion: ['Av. Camarón Sábalo, Fracc. Sábalo Country Club', 'Mazatlán, Sinaloa, C.P. 82100'],
  telefono: 'tel:+526699893200',
  telefonoVisible: '669 989 3200',
  email: 'ventas@hotelespalace.mx',
  whatsappVisible: '669 216 1096',
  whatsapp: wa('Hola, me comunico desde su sitio web. Quiero información del Hotel Pacific Palace.'),
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Pacific+Palace+Av.+Camar%C3%B3n+S%C3%A1balo+Mazatl%C3%A1n+Sinaloa',
  logo: f('logo-pacific', 639, 322, 'Pacific Palace Tower Beach Hotel'),
  portada: f('fachada-aerea', 1800, 1200, 'Vista aérea del Hotel Pacific Palace a pie de playa en la Zona Dorada de Mazatlán, con la alberca, las palapas y el mar'),
  redes: [
    { nombre: 'Instagram', href: 'https://www.instagram.com/hotelespalacemazatlan/' },
    { nombre: 'Facebook', href: 'https://www.facebook.com/OceanoPalaceMazatlan' },
    { nombre: 'YouTube', href: 'https://www.youtube.com/user/HotelesPalace' },
    { nombre: 'X (Twitter)', href: 'https://twitter.com/HotelesPalace' },
    { nombre: 'Pinterest', href: 'https://www.pinterest.com.mx/redespalace/_created/' },
  ],
  politicas: [
    { nombre: 'Términos y condiciones', href: 'https://www.pacificpalace.mx/terminos_condiciones' },
    { nombre: 'Política de cancelación', href: 'https://www.pacificpalace.mx/politica_cancelacion' },
    { nombre: 'Política ambiental', href: 'https://www.pacificpalace.mx/politica_ambiental' },
  ],
};

/** Motor de reservas de Hoteles Palace, el mismo que usa el formulario del sitio actual (Reservacion-hotel:16). */
export const motor = { url: 'https://www.hotelespalace.mx/reservaciones-busqueda/', hotel: 16 };

// Planes: horarios tal como los publica el sitio (inicio y /habitaciones#planes). Las horas van de 0 a 24;
// si el fin es menor que el inicio, el servicio termina después de medianoche.
export type Tramo = { nombre: string; corto: string; servicio: string; desde: number; hasta: number; color: 'agua' | 'atardecer' };
export type PlanId = 'todo' | 'desayuno';
export type Plan = {
  id: PlanId;
  nombre: string;
  corto: string;
  enFrase: string;
  tramos: Tramo[];
  incluye: string[];
  foto: Foto;
  whatsapp: string;
};

export const planes: Record<PlanId, Plan> = {
  todo: {
    id: 'todo',
    nombre: 'Plan Hospedaje Todo Incluido',
    corto: 'Todo Incluido',
    enFrase: 'el Todo Incluido',
    tramos: [
      { nombre: 'Alimentos y bebidas', corto: 'alimentos y bebidas', servicio: 'el servicio de alimentos y bebidas', desde: 7, hasta: 1, color: 'agua' },
      { nombre: 'Barra libre en bares', corto: 'barra libre en bares', servicio: 'la barra libre en bares', desde: 10, hasta: 1, color: 'atardecer' },
    ],
    incluye: [
      'Alimentos y bebidas de 7:00 am a 1:00 am',
      'Barra libre en bares de 10:00 am a 1:00 am',
      'Show en vivo',
      'Espectáculos nocturnos',
      'Actividades deportivas y recreativas',
      'Restaurantes de especialidad con previa reservación',
      'Acceso a todas las instalaciones del hotel (alberca, gimnasio, área de playa, estacionamiento, etc.)',
    ],
    foto: f('plan-todo-incluido', 1200, 675, 'Especialidad internacional del restaurante: filete de salmón con verduras'),
    whatsapp: wa('Hola, me comunico desde su sitio web. Quiero cotizar el Plan Hospedaje Todo Incluido en el Hotel Pacific Palace.'),
  },
  desayuno: {
    id: 'desayuno',
    nombre: 'Plan Hospedaje con Desayuno Buffet',
    corto: 'Desayuno buffet',
    enFrase: 'el plan con desayuno buffet',
    tramos: [
      { nombre: 'Desayuno buffet', corto: 'desayuno buffet', servicio: 'el desayuno buffet', desde: 7, hasta: 12, color: 'atardecer' },
    ],
    incluye: [
      'Desayuno buffet de 7:00 am a 12:00 pm',
      'Acceso a áreas comunes (alberca, gimnasios, área de playa, estacionamiento, etc.)',
      'Restaurantes con costo adicional',
      'Bares con costo adicional',
    ],
    foto: f('plan-desayuno-buffet', 1200, 675, 'Barra del desayuno buffet con guisos y fruta'),
    whatsapp: wa('Hola, me comunico desde su sitio web. Quiero cotizar el Plan Hospedaje con Desayuno Buffet en el Hotel Pacific Palace.'),
  },
};

export const planesIntro = {
  texto: 'Disfruta de una estancia inolvidable con nosotros, donde cada detalle está pensado para hacer que tu experiencia sea única y placentera.',
  destacado: 'Sumérgete en la belleza de Mazatlán con nuestro exclusivo plan todo incluido.',
  detalle: 'Disfruta de una estancia sin preocupaciones que incluye hospedaje, comidas, bebidas y entretenimiento. ¡Todo lo que necesitas para unas vacaciones perfectas en Mazatlán!',
};

export type Habitacion = { nombre: string; texto: string; datos: string[]; foto: Foto };

export const habitaciones: Habitacion[] = [
  {
    nombre: 'Junior Suite vista al Mar',
    texto: 'Cómodas habitaciones con balcón vista al mar.',
    datos: ['1 a 4 personas', '51 a 54 m²', '2 camas matrimoniales', 'Cocineta', 'Wifi gratuito'],
    foto: f('junior-suite-mar', 1400, 933, 'Junior Suite vista al mar con dos camas matrimoniales, televisión, mesa con dos sillas y balcón'),
  },
  {
    nombre: 'Junior Suite vista a la Ciudad',
    texto: 'Cómodas habitaciones con balcón vista a la ciudad.',
    datos: ['1 a 4 personas', '34 a 38 m²', '2 camas matrimoniales', 'Cocineta', 'Wifi gratuito'],
    foto: f('junior-suite-ciudad', 1400, 933, 'Junior Suite vista a la ciudad con dos camas matrimoniales, balcón, televisión y espejo de vanidad'),
  },
];

export const amenidadesHabitacion = {
  intro: 'Todas nuestras habitaciones están equipadas con todo lo necesario para la comodidad que mereces. En cada una de ellas encontrarás:',
  lista: [
    'Cocineta', 'Refrigerador', 'Horno de microondas', 'Platos y cubiertos', 'Balcón o terraza', 'Caja de seguridad',
    'Internet inalámbrico', 'Kit de planchado', 'Aire acondicionado', 'Teléfono', 'Cable o satélite', 'Secadora de cabello',
    'Amenidades de baño', 'Regadera', 'Espejo de vanidad', 'Escritorio y silla', 'Detector de humo',
  ],
};

export const restaurantes = [
  {
    nombre: 'Sunset Restaurant',
    tipo: 'Especialidad y buffet',
    texto: [
      'Restaurante en el cual encontrarás una amplia variedad de platillos y guisos estilo buffet. Cada bocado es un viaje a través de los sabores auténticos de la región, con opciones para todos los paladares y momentos del día.',
      'Es un destino gastronómico que te sumergirá en la riqueza de la cultura culinaria local, internacional, italiana o francesa, mientras te regala la oportunidad de disfrutar de una vista incomparable al mar.',
    ],
    foto: f('restaurante-sunset', 1400, 933, 'Sunset Restaurant del Hotel Pacific Palace, con mesas, lámparas colgantes y piso de mosaico'),
  },
  {
    nombre: 'Bar Polinesio',
    tipo: 'Coctelería y bar',
    texto: [
      'Nuestro Bar Polinesio es una escapada a un mundo de relajación y disfrute. Sumérgete en la cultura polinesia mientras pruebas cócteles exóticos y refrescantes, o simplemente déjate llevar por el ambiente tranquilo y la belleza natural que rodea este rincón de paraíso.',
      'Este oasis frente al mar te invita a deleitarte con las vistas panorámicas de nuestras impresionantes playas, mientras disfrutas de una exquisita selección de bebidas que te transportará a un paraíso tropical en cada sorbo.',
    ],
    foto: f('bar-polinesio', 1400, 933, 'Bar Polinesio con sillones de colores y ventanal hacia el mar'),
  },
];

export const amenidades = [
  { nombre: 'Albercas', texto: 'Piscinas para que los huéspedes puedan relajarse y refrescarse durante su estadía, con una hermosa vista al mar.' },
  { nombre: 'Área de playa', texto: 'Acceso directo a la playa y palapas para disfrutar del sol y el mar.' },
  { nombre: 'Jacuzzi', texto: 'Un jacuzzi o bañera de hidromasaje para ofrecer un lugar de relajación adicional.' },
  { nombre: 'Restaurante', texto: 'Variedad de opciones gastronómicas, como restaurantes de cocina local e internacional.' },
  { nombre: 'Bar o lounge', texto: 'Lugar para relajarse y disfrutar de bebidas, cócteles y aperitivos.' },
  { nombre: 'Actividades', texto: 'Variedad de actividades para mantener a los huéspedes entretenidos, como clases de yoga, fiestas de espuma, concursos, juegos de mesa, voleibol playero y más.' },
  { nombre: 'Wifi gratuito', texto: 'Conexión a internet de alta velocidad disponible en todo el hotel para que los huéspedes puedan mantenerse conectados.' },
  { nombre: 'Salones de eventos', texto: 'Espacios designados para conferencias, reuniones y celebraciones, equipados con tecnología audiovisual y mobiliario adecuado.' },
  { nombre: 'Amplios estacionamientos', texto: 'Estacionamientos seguros y convenientes para los huéspedes y autobuses, con cajones para discapacitados.' },
];

// Las tres opiniones que publica el sitio (el carrusel del original las repite); sin nombre, como en el original.
export const opiniones = [
  'Excelente servicio. Pasé las tardes disfrutando en la alberca admirando el atardecer. Las actividades son muy divertidas y mi familia disfrutó mucho. El personal fue amable y atento en todo momento. ¡Definitivamente lo recomiendo!',
  'Mi escapada de fin de semana en este hotel superó todas mis expectativas. El jacuzzi, las vistas hermosas y las ricas bebidas fueron de lo mejor. ¡No puedo esperar para regresar y repetir esta experiencia!',
  'Mi estancia en este hotel fue muy buena. Despertar cada mañana con el sonido de las olas y la vista al océano desde mi habitación fue increíble. ¡El jacuzzi mientras observaba la puesta de sol fue de lo más espectacular! Definitivamente volveré para más relajación junto al mar.',
];

export const grupo = {
  texto: 'Somos parte de un complejo reconocido de hoteles en Mazatlán, y nuestra dedicación a la hospitalidad y la calidez es lo que nos distingue.',
  hoteles: [
    { nombre: 'Hoteles Palace', href: 'https://www.hotelespalace.mx/', logo: f('logo-hoteles-palace', 330, 108, 'Hoteles Palace Mazatlán') },
    { nombre: 'Luna Palace', href: 'https://www.lunapalace.com/', logo: f('logo-luna-palace', 330, 108, 'Luna Palace Hotel & Suites') },
    { nombre: 'Océano Palace', href: 'https://www.oceanopalace.com/', logo: f('logo-oceano-palace', 330, 108, 'Océano Palace Beach Hotel') },
  ],
  gracias: 'Gracias por considerar al hotel Pacific Palace para tus vacaciones en Mazatlán. Estamos emocionados de tener la oportunidad de recibirte y ofrecerte una experiencia inolvidable que supere tus expectativas.',
};
