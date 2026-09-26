// Contenido de Hoteles Fray (Tepic, Nayarit): Hotel Fray Junípero Serra y Hotel Fray Select.
// Textos copiados de investigacion/crudo.json (hotelesfray.com: inicio, frayjunipero, frayselect y habitaciones,
// 2026-09-26). Lo nuevo (títulos, botones, textos del selector de hotel) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

const wa = (numero: string, texto: string) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

export type HotelId = 'junipero' | 'select';

export type Habitacion = { nombre: string; texto: string; foto?: Foto };

export type Hotel = {
  id: HotelId;
  nombre: string;
  corto: string;
  lema: string;
  intro: string;
  direccion: string[];
  telefono: string;
  telefonoVisible: string;
  email: string;
  whatsapp: string;
  cloudbeds: string;
  mapa: string;
  logo: Foto;
  portada: Foto;
  fotos: Foto[];
  habitaciones: { intro: string; lista: Habitacion[] };
  restaurante: { nombre: string; texto: string; foto: Foto };
  extra: { titulo: string; texto: string; nota?: string; foto?: Foto };
  servicios: { nombre: string; texto: string }[];
};

export const hoteles: Record<HotelId, Hotel> = {
  junipero: {
    id: 'junipero',
    nombre: 'Hotel Fray Junípero Serra',
    corto: 'Fray Junípero',
    lema: 'Frente a la Catedral y la Plaza Principal',
    intro: 'Disfruta de la tradición hotelera y culinaria del hotel más icónico de Tepic. Recibe una cálida bienvenida en una ubicación inmejorable en el corazón de la ciudad, frente a Catedral, y disfruta del mejor desayuno buffet incluido.',
    direccion: ['Sebastián Lerdo de Tejada Pte. 23,', 'Centro, C.P. 63000,', 'Tepic, Nayarit.'],
    telefono: 'tel:+523112122525',
    telefonoVisible: '+52 311 212 2525',
    email: 'recepcion@hotelfrayjunipero.com',
    whatsapp: wa('523112122525', 'Hola, me comunico desde su sitio web. Quiero información del Hotel Fray Junípero Serra.'),
    cloudbeds: 'u2yvwq',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Fray+Junipero+Serra+Sebastian+Lerdo+de+Tejada+23+Tepic+Nayarit',
    logo: f('logo-junipero', 600, 180, 'Hotel Fray Junípero, Centro Histórico'),
    portada: f('junipero-catedral-noche', 1600, 1200, 'Terraza del Hotel Fray Junípero de noche, junto a las torres de la Catedral de Tepic'),
    fotos: [
      f('junipero-fachada', 1500, 1000, 'Fachada del Hotel Fray Junípero al anochecer, con los portales del centro'),
      f('junipero-aerea', 1600, 1200, 'Vista aérea del Hotel Fray Junípero y la Plaza Principal de Tepic, con el cerro al fondo'),
    ],
    habitaciones: {
      intro: 'Amplias y cómodas habitaciones o suites, elegantemente decoradas y con acceso a todas las amenidades, con las mejores vistas de la capital gracias a nuestra privilegiada ubicación en el corazón de Tepic. Disfruta de la comodidad de nuestros colchones premium.',
      lista: [
        { nombre: 'Habitación Superior', texto: 'Nuevas habitaciones con una increíble vista panorámica de la ciudad en el piso superior del hotel.', foto: f('hab-superior', 1400, 934, 'Habitación Superior con ventanal y vista a la ciudad') },
        { nombre: 'Master Suite', texto: 'Te enamora con sus instalaciones, vistas y un enorme espacio para llamar tu hogar en Tepic. Dos cuartos, cocina, una enorme sala y comedor, con la mejor vista de la Catedral.', foto: f('hab-master-suite', 1280, 720, 'Sala de la Master Suite') },
        { nombre: 'Jr. Suite', texto: 'El espacio ideal para los viajes de negocios o con esa persona especial. Se extiende con la cama king size, un desayunador, un frigobar, una cómoda sala con sofá cama y un escritorio.' },
        { nombre: 'Habitación estándar', texto: 'La maravillosa experiencia de tu #HotelFray, en habitaciones de 1, 2 o 3 camas, ideal para todo tipo de viaje, familias o grupos.', foto: f('hab-junipero-dos-camas', 1200, 801, 'Habitación estándar con dos camas') },
      ],
    },
    restaurante: {
      nombre: 'Restaurante Capistrano',
      texto: 'En Restaurante Capistrano honramos nuestra cocina casera tradicional. Nuestra carta recorre la cocina mexicana como mole poblano, enchiladas, sopa de tortilla o nuestra tradicional torta de pierna, así como mariscos frescos del Pacífico nayarita preparados con recetas que conoces y que siempre sabrán a casa.',
      foto: f('rest-capistrano', 1400, 934, 'Salón del Restaurante Capistrano con mesas vestidas'),
    },
    extra: {
      titulo: 'Paquetes de hospedaje y recepción en terrazas panorámicas',
      texto: 'Hacemos que tu celebración sea inolvidable con las mejores vistas de Tepic. Espacio al aire libre en terraza exclusiva con vistas panorámicas. Configurado para ceremonia civil, recepción y otros tipos de eventos. ¡Contáctanos para una propuesta a tu medida!',
    },
    servicios: [
      { nombre: 'Estacionamiento subterráneo', texto: 'Un espacio seguro para resguardar tu automóvil.' },
      { nombre: 'Internet inalámbrico', texto: 'Internet en todas las habitaciones y áreas comunes.' },
      { nombre: 'Escritorio de trabajo', texto: 'Un lugar cómodo para mantenerte al día.' },
      { nombre: 'Televisión de alta definición', texto: 'Pantallas de gran tamaño, con una gran calidad de imagen.' },
      { nombre: 'Gimnasio', texto: 'Gimnasio equipado con equipos Life Fitness.' },
    ],
  },
  select: {
    id: 'select',
    nombre: 'Hotel Fray Select',
    corto: 'Fray Select',
    lema: 'El hotel más nuevo y moderno de Tepic',
    intro: 'Un nuevo hotel en Tepic con el mejor y más completo desayuno buffet incluido. En una conveniente y estratégica ubicación para cualquier tipo de viaje. Disfruta de las habitaciones más modernas y cómodas en la ciudad.',
    direccion: ['Av. Prisciliano Sánchez Sur 130,', 'Colonia Centro, C.P. 63000,', 'Tepic, Nayarit.'],
    telefono: 'tel:+523111337060',
    telefonoVisible: '+52 311 133 7060',
    email: 'recepcion@hotelfrayselect.com',
    whatsapp: wa('523111337060', 'Hola, me comunico desde su sitio web. Quiero información del Hotel Fray Select.'),
    cloudbeds: 'd8ajqB',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Fray+Select+Av.+Prisciliano+Sanchez+Sur+130+Tepic+Nayarit',
    logo: f('logo-select', 600, 180, 'Hotel Fray Select'),
    portada: f('select-fachada', 1500, 1125, 'Vista aérea del Hotel Fray Select entre árboles, con la ciudad y los cerros al fondo'),
    fotos: [
      f('select-lobby', 1400, 980, 'Lobby del Hotel Fray Select con sillones azules'),
      f('rest-select', 1400, 934, 'Restaurante del Hotel Fray Select con ventanales'),
    ],
    habitaciones: {
      intro: 'Con habitaciones totalmente nuevas, podrás tener un descanso sin igual en la capital nayarita. Nuestras habitaciones son un espacio nuevo y confortable: con una cama o dos camas, espacios para el trabajo y entretenimiento, e ideales para todo tipo de viaje en familia o en grupo.',
      lista: [
        { nombre: 'Habitación estándar', texto: 'Un espacio totalmente personal, nuevo y confortable. Con una cama King y espacios para el trabajo y entretenimiento.', foto: f('hab-select-king', 1400, 933, 'Habitación del Hotel Fray Select con cama King') },
        { nombre: 'Habitación doble', texto: 'La maravillosa experiencia de tu #HotelFray, en habitaciones de 2 camas, ideal para todo tipo de viaje en familias o en grupo.', foto: f('hab-select-doble', 1400, 934, 'Habitación del Hotel Fray Select') },
        { nombre: 'Habitación panorámica', texto: 'Una habitación con la vista más amplia e increíble de Tepic, con el Volcán Sangangüey, guardián del Valle de Matatipac, al fondo.' },
      ],
    },
    restaurante: {
      nombre: 'Restaurante Piso Uno',
      texto: 'Una nueva opción en la ciudad de Tepic. Conoce nuestro moderno restaurante Piso Uno en el Hotel Fray Select, con amplio espacio para disfrutar de un momento inolvidable en pareja, con amigos o familia. Instalaciones nuevas, cómodas y seguras, para hacer de tu visita algo increíble.',
      foto: f('rest-piso-uno', 1400, 1050, 'Restaurante Piso Uno de noche, con su letrero iluminado'),
    },
    extra: {
      titulo: 'Desayuno buffet incluido, en una nueva área',
      texto: 'Disfruta del mejor y más completo desayuno en Tepic, incluido en tu tarifa. La terraza del desayunador se convierte en el escenario para tu buffet, con platillos a tu gusto como omelettes, sándwiches, chilaquiles, ricos frijoles y mucho más.',
      nota: 'No aplica en reservas de grupo.',
      foto: f('desayunador-select', 1400, 1050, 'Terraza del desayunador del Hotel Fray Select'),
    },
    servicios: [
      { nombre: 'Amplio estacionamiento', texto: 'Un espacio seguro para resguardar tu automóvil.' },
      { nombre: 'Internet inalámbrico', texto: 'Internet en todas las habitaciones y áreas comunes.' },
      { nombre: 'Escritorio de trabajo', texto: 'Un lugar cómodo para mantenerte al día.' },
      { nombre: 'Televisión de alta definición', texto: 'Pantallas de gran tamaño, con una gran calidad de imagen.' },
      { nombre: 'Conveniente ubicación', texto: 'El más rápido acceso y cerca del Centro Histórico de Tepic.' },
    ],
  },
};

export const grupo = {
  nombre: 'Hoteles Fray',
  logoBlanco: f('logo-fray-blanco', 600, 224, 'Hoteles Fray'),
  titulo: 'Hoteles Fray: hoteles en Tepic, Nayarit',
  intro: 'Hoteles en Tepic con habitaciones modernas, wifi gratuito y desayuno buffet incluido. Conoce nuestras dos opciones de hospedaje: el clásico Hotel Fray Junípero Serra, frente a la Catedral y la Plaza Principal, y el moderno Hotel Fray Select, el hotel más nuevo de la ciudad.',
  mas: 'En Hoteles Fray ofrecemos mucho más que una habitación; te brindamos una experiencia completa con el mejor desayuno buffet incluido, atención personalizada, restaurantes localmente reconocidos, habitaciones y espacios que hacen que cada estancia en Tepic te sientas como en casa.',
  facebook: 'https://www.facebook.com/hotelfrayjunipero/',
  instagram: 'https://www.instagram.com/hotelesfray',
  guestbook: 'https://theguestbook.com/reward_sign_up/hotelesfray1',
  privacidad: 'https://hotelesfray.com/wp-content/uploads/2020/03/AVISO-DE-PRIVACIDAD.pdf',
};

export const todasIncluyen = [
  'Acceso a internet', 'Control de climatización individual', 'Cortinas opacas', 'Escritorio de trabajo',
  'Pantalla de TV de 50″ o mayor', 'Caja fuerte en la habitación', 'Plancha y tabla de planchado',
  'Secadora y amenidades de baño', 'Colchones premium',
];

export const ventajas = [
  { titulo: 'Recompensamos tu lealtad', texto: 'Hoteles Fray se une a The Guestbook Hotel Rewards. Obtén hasta 15% de recompensa en tus reservas a través de nuestro sitio web.', enlace: { texto: 'Únete a The Guestbook', href: 'https://theguestbook.com/reward_sign_up/hotelesfray1' } },
  { titulo: 'Convenio de tarifas', texto: 'Tarifas fijas competitivas, flexibilidad en reservas y servicios personalizados que garantizan comodidad y eficiencia para ti o tu empresa. ¡Descubre cómo nuestro convenio puede beneficiarte y solicítalo sin costo!' },
];

export const eventos = {
  titulo: 'Salones de eventos',
  texto: 'Atención y asesoría personalizada para todo tipo de eventos, desde desayunos, capacitaciones y conferencias hasta convenciones y bodas. La experiencia de nuestro equipo hará de tu evento o reunión todo un éxito. Todos nuestros salones de usos múltiples cuentan con aire acondicionado, internet inalámbrico, sonido, pantalla y proyector.',
  fotos: [
    f('salon-la-mision', 1400, 934, 'Salón La Misión montado para banquete'),
    f('salon-select-banquete', 1400, 934, 'Salón del Hotel Fray Select montado con mesas redondas'),
    f('salon-principal', 1280, 853, 'Salón Principal montado para una recepción'),
  ],
};

export const opiniones = [
  { titulo: 'Lugar para descansar', texto: 'Excelente atención. Buena ubicación a un costado de Catedral y plaza. Lugar ideal para descansar y conocer el centro de Nayarit y alrededores. Consienten al comensal en el desayuno.', origen: 'Durango, México' },
  { titulo: 'Excelente', texto: 'Primeramente quiero felicitarles por el buen servicio y la limpieza de sus instalaciones, me fue muy agradable la comida en su restaurante, así como lo cómodo de sus habitaciones; en el desayuno quedé satisfecho por el menú y el servicio.', origen: 'Guadalajara, México' },
  { titulo: 'Muy buen servicio', texto: 'Tienes todo a la mano, el hotel está céntrico, muy limpio y muy amables en todos los servicios que te proporcionan (cuarto, bufete, información turística). Además hay muy buena comunicación sobre los servicios.', origen: 'Tejupilco, México' },
];

export const premios = [
  f('premio-booking-2026', 400, 400, 'Booking.com Traveller Review Awards 2026: 9.4'),
  f('premio-tripadvisor-2024', 400, 400, 'Tripadvisor Travellers’ Choice Awards 2024'),
  f('premio-myhotel-2025', 400, 400, 'myHotel Awards 2025: nominado a cadena con mejor NPS en Latam'),
  f('premio-kayak-2023', 400, 400, 'KAYAK Travel Awards 2023'),
];

