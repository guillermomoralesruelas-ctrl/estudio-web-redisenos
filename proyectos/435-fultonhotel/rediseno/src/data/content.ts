// Content for Fulton Hotel — taken from live site fultonhotel.mx and crudo.json
// Photos in assets/web/ (method 1.2 — downloaded from live site)
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Fulton Hotel',
  tagline: 'Business Luxury Hotel',
  ciudad: 'Guadalajara, Jalisco',
  telefono: '+52 1 33 3260 9376',
  whatsapp: '5213340728342',
  email: 'reservas@fultonhotel.mx',
  direccion: 'Av. de las Américas 1450, Country Club, C.P. 44610 Guadalajara, Jalisco',
  reservas: 'https://hotels.cloudbeds.com/reservation/HCvcDe',
  facebook: 'https://www.facebook.com/profile.php?id=100065692441247',
  instagram: 'https://www.instagram.com/fulton_hotel/',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export type Habitacion = {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  detalles: string[];
  img: string;
  imgAlt: string;
  msgWA: string;
};

export const habitaciones: Habitacion[] = [
  {
    id: 'comfort',
    titulo: 'Habitación Comfort',
    subtitulo: 'Confort esencial para el viajero de negocios',
    descripcion:
      'Habitación equipada con todo lo necesario para una estancia productiva: cama matrimonial, escritorio de trabajo, WiFi de alta velocidad y baño privado con amenidades de calidad.',
    detalles: ['Cama matrimonial', 'Escritorio ejecutivo', 'WiFi gratuito', 'Baño privado'],
    img: img('habitacion-comfort.webp'),
    imgAlt: 'Habitación Comfort — Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información de la Habitación Comfort. ¿Cuál es la disponibilidad y precio?',
  },
  {
    id: 'doble-deluxe',
    titulo: 'Habitación Doble Deluxe',
    subtitulo: 'Ideal para 2 a 4 personas',
    descripcion:
      'Amplia habitación con dos camas matrimoniales, perfecta para grupos de viaje de negocios o familia. Cuenta con todo el confort y equipamiento para una estancia de lujo.',
    detalles: ['2 camas matrimoniales', '2 a 4 personas', 'WiFi gratuito', 'Baño privado'],
    img: img('habitacion-doble-portada.webp'),
    imgAlt: 'Habitación Doble Deluxe — Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información de la Habitación Doble Deluxe. ¿Cuál es la disponibilidad y precio?',
  },
  {
    id: 'doble-balcon',
    titulo: 'Doble Deluxe con Balcón',
    subtitulo: 'Vista panorámica de Guadalajara',
    descripcion:
      'Todo el confort de la Doble Deluxe más un balcón privado con vista a la ciudad de Guadalajara. La opción perfecta para quien busca una experiencia más especial.',
    detalles: ['2 camas matrimoniales', 'Balcón privado', 'Vista a la ciudad', 'WiFi gratuito'],
    img: img('habitacion-balcon.webp'),
    imgAlt: 'Habitación Doble Deluxe con Balcón — Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información de la Habitación Doble Deluxe con Balcón. ¿Cuál es la disponibilidad?',
  },
  {
    id: 'premium',
    titulo: 'Habitación Premium',
    subtitulo: 'La experiencia más completa del hotel',
    descripcion:
      'Nuestra habitación más exclusiva. Diseño contemporáneo, acabados de primera calidad y todos los servicios del hotel a tu disposición para una estancia de lujo en Guadalajara.',
    detalles: ['Cama king size', 'Acabados premium', 'Vista privilegiada', 'WiFi gratuito'],
    img: img('habitacion-premium.webp'),
    imgAlt: 'Habitación Premium — Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información de la Habitación Premium. ¿Cuál es la disponibilidad y precio?',
  },
];

export const servicios = [
  {
    id: 'sala-juntas',
    titulo: 'Sala de Juntas',
    subtitulo: 'Hasta 60 personas',
    descripcion:
      'Espacio profesional equipado con lo necesario para tus reuniones de negocios. Pantallas de 60", impresoras, WiFi empresarial, catering disponible y terraza interna para los descansos.',
    detalles: ['Capacidad: 60 personas', 'Pantallas 60"', 'WiFi empresarial', 'Servicio de catering'],
    img: img('negocios.webp'),
    imgAlt: 'Sala de Juntas — Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información sobre la Sala de Juntas. ¿Cuál es la disponibilidad y cómo cotizo el evento?',
  },
  {
    id: 'starbucks',
    titulo: 'Starbucks',
    subtitulo: 'Lunes a domingo · 6:00 AM – 10:00 PM',
    descripcion:
      'Disfruta de tu café favorito sin salir del hotel. Contamos con una sucursal de Starbucks abierta todos los días, perfecta para reuniones informales o para comenzar el día con energía.',
    detalles: ['Abierto todos los días', '6:00 AM – 10:00 PM', 'En el lobby del hotel', 'Bebidas y alimentos'],
    img: img('bares-restaurantes.webp'),
    imgAlt: 'Starbucks en Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información del hotel. ¿Tienen disponibilidad para las fechas que necesito?',
  },
  {
    id: 'rooftop',
    titulo: 'Rooftop',
    subtitulo: 'Restaurante en el último piso',
    descripcion:
      'Nuestro restaurante en la terraza del hotel te ofrece una experiencia gastronómica con vista panorámica de Guadalajara. El lugar ideal para cerrar un buen trato o celebrar una ocasión especial.',
    detalles: ['Último piso del hotel', 'Vista panorámica', 'Menú de restaurante', 'Ambiente ejecutivo'],
    img: img('terraza-1.webp'),
    imgAlt: 'Rooftop Restaurante — Fulton Hotel Guadalajara',
    msgWA: 'Hola, me interesa información del Rooftop. ¿Hacen reservaciones para el restaurante?',
  },
];

export const ubicacion = [
  {
    icono: '🏦',
    titulo: 'Zona Financiera Sao Paulo',
    texto: 'Rodeado de bancos, oficinas corporativas y centros de negocios. La ubicación más estratégica de Guadalajara para el viajero ejecutivo.',
  },
  {
    icono: '✈️',
    titulo: 'Aeropuerto a 27 km',
    texto: 'A solo 27 km del Aeropuerto Internacional de Guadalajara, aproximadamente 40 minutos en vehículo.',
  },
  {
    icono: '🏥',
    titulo: 'Hospitales cerca',
    texto: 'Zona con acceso inmediato a los principales hospitales y clínicas de especialidad de la ciudad.',
  },
  {
    icono: '🍽️',
    titulo: 'Restaurantes y servicios',
    texto: 'A pasos de restaurantes, centros comerciales y todos los servicios que necesitas durante tu estancia.',
  },
];
