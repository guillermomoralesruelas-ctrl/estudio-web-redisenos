// Contenido de La Cantera Eventos, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, escribe [PENDIENTE] y anótalo en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, copias .webp de fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}.webp`;
export const foto = img;

export const negocio = {
  nombre: 'La Cantera Eventos',
  lema: 'Salón de eventos excepcionales',
  ciudad: 'Monterrey, Nuevo León',
  // WhatsApp: todos sus botones (bit.ly → wa.link) abren api.whatsapp.com con 5218127495777.
  whatsapp: '528127495777',
  telefonos: [
    { texto: '81 1291 2007', tel: '+528112912007' },
    { texto: '81 2749 5777', tel: '+528127495777' },
  ],
  email: 'ventas@lacanteraeventos.com',
  direccion: 'Carretera Nacional 2700, Valle de Cristal',
  cp: '64990',
  horario: 'Lunes a domingo de 11 a.m. a 7 p.m.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('La Cantera Eventos, Carretera Nacional 2700, Valle de Cristal, 64990 Monterrey, N.L.'),
  mapaEmbed: 'https://maps.google.com/maps?q=Carr%20Nacional%202700%2C%20Valle%20de%20Cristal%2C%2064986%20Monterrey%2C%20N.L.&t=m&z=15&output=embed&iwloc=near',
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/lacanteraeventos' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/lacanteraeventos/' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@lacanteraeventos.mty' },
  ],
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// Mensajes que ya usan sus propios botones (se conservan tal cual).
export const mensajes = {
  info: 'Me interesa más información sobre La Cantera Eventos',
  cotizar: 'Me interesa cotizar un evento en La Cantera Eventos.',
  visita: 'Me interesa agendar una visita a La Cantera Eventos.',
  asistencia: 'Quiero confirmar mi asistencia para su próximo evento en La Cantera Eventos.',
};

export const bienvenida = {
  titulo: '¡Bienvenido a La Cantera Eventos!',
  sub: 'Te invitamos a conocer nuestro espectacular salón de eventos. Siempre estamos preparados para ti.',
  texto:
    'En La Cantera Eventos transformamos celebraciones en experiencias inolvidables. Con más de 10 años de trayectoria y más de 2,500 eventos realizados en Monterrey, nos hemos consolidado como un recinto distinguido por su lujo, diseño minucioso y atención personalizada. Cada detalle, junto con nuestra gastronomía gourmet y montajes elegantes, refleja un firme compromiso con la excelencia y la satisfacción total de quienes confían en nosotros para sus momentos más importantes.',
  cifras: [
    { valor: '10+', texto: 'años de trayectoria' },
    { valor: '2,500+', texto: 'eventos realizados en Monterrey' },
  ],
};

// Próximo evento: su contador apunta a data-interval="1791126000" (4 oct 2026, 9:00 a.m. de Monterrey)
// pero su cartel dice "Domingo 4 de octubre, 3 PM". Aquí se usa la hora del cartel.
export const proximo = {
  nombre: 'Wedding Event',
  fechaISO: '2026-10-04T15:00:00-06:00',
  fechaTexto: 'Domingo 4 de octubre, 3 p.m.,',
  detalle: 'con Live DJ: Just 4 Wedding',
  texto:
    'Inspírate en nuestro Wedding Event y enamórate de cada detalle. Una experiencia pensada para imaginar, planear y dar forma a una boda verdaderamente inolvidable.',
  despues: {
    nombre: 'Open House XV Años',
    texto:
      'Descubre cómo puede lucir tu gran día en nuestro Open House. Vive la experiencia, conoce cada detalle y visualiza una celebración diseñada para brillar en cada momento.',
  },
};

export const salon = [
  {
    titulo: 'Mobiliario',
    texto:
      'En La Cantera Eventos el mobiliario define el carácter de cada celebración. Piezas cuidadosamente seleccionadas, mantelería fina y configuraciones armoniosas aportan equilibrio visual y realzan la ambientación del evento, creando espacios con presencia y distinción.',
    foto: 'mobiliario-copas', w: 1400, h: 934,
    alt: 'Copas de cristal verde y platos con filo dorado sobre una mesa montada del salón',
  },
  {
    titulo: 'Decoración',
    texto:
      'Cada evento cobra vida a través de una ambientación pensada para impactar. Iluminación LED, pista de baile con pantalla, candelabros y arreglos florales se integran estratégicamente para transformar el salón en un escenario sofisticado y visualmente memorable.',
    foto: 'decoracion', w: 1400, h: 663,
    alt: 'Salón con luz azul, esferas plateadas colgadas del techo y mesas montadas alrededor de la pista',
  },
  {
    titulo: 'Gastronomía',
    texto:
      'La propuesta culinaria de La Cantera Eventos está a cargo de un chef exclusivo y un equipo profesional que crea menús cuidadosamente elaborados para cada celebración. Nuestra cocina ofrece variedad de platillos diseñados para complacer distintos gustos, manteniendo presentación impecable y calidad en cada servicio.',
    foto: 'gastronomia', w: 1400, h: 663,
    alt: 'Platillo emplatado con salsa roja en plato blanco',
  },
];

export type Evento = {
  id: string;
  nombre: string;
  // cómo se lee en la invitación: "te invita(n) a ..."
  invita: string;
  quien: string; // pista para el campo de nombre
  texto: string;
  foto: string;
  alt: string;
};

export const eventos: Evento[] = [
  {
    id: 'boda', nombre: 'Bodas', invita: 'nuestra boda', quien: 'Ana y Luis',
    texto: 'Hacemos de tu boda un momento inolvidable. Cuidamos cada detalle para crear una celebración elegante y personalizada, adaptada a tu estilo. Nuestro equipo se encarga de todo para que tú solo disfrutes uno de los días más importantes de tu vida.',
    foto: 'evento-boda', alt: 'Novios bajando la escalera del salón entre arreglos de flores blancas',
  },
  {
    id: 'xv', nombre: 'XV Años', invita: 'mis XV años', quien: 'Valeria',
    texto: 'Tus XV años merecen ser únicos. Creamos celebraciones que reflejan tu esencia, con ambientación espectacular y atención personalizada. Diseñamos cada detalle para que vivas una experiencia inolvidable rodeada de quienes más quieres.',
    foto: 'evento-xv', alt: 'Quinceañera con vestido azul bailando el vals en la pista bajo candelabros',
  },
  {
    id: 'graduacion', nombre: 'Graduaciones', invita: 'nuestra graduación', quien: 'Generación 2027',
    texto: 'Tu esfuerzo merece una gran celebración. Hacemos de tu graduación un evento memorable, con espacios ideales y una experiencia llena de emoción. Nos encargamos de cada detalle para que disfrutes este logro al máximo.',
    foto: 'evento-graduacion', alt: 'Graduados celebrando en la pista junto al DJ',
  },
  {
    id: 'posada', nombre: 'Posadas', invita: 'nuestra posada', quien: 'Familia Garza',
    texto: 'Celebra la temporada con calidez y alegría. Creamos el ambiente perfecto para convivir, agradecer y compartir momentos especiales. Nos encargamos de cada detalle para que tú solo disfrutes junto a tus invitados.',
    foto: 'evento-posada', alt: 'Invitados bailando en la pista con luces azules y humo',
  },
  {
    id: 'empresarial', nombre: 'Empresariales', invita: 'nuestro evento', quien: 'Tu empresa',
    texto: 'Ofrecemos espacios ideales para tus eventos empresariales. Desde reuniones hasta celebraciones corporativas, brindamos organización, atención profesional y ambientes que reflejan la calidad y esencia de tu empresa.',
    foto: 'evento-empresarial', alt: 'Salón lleno durante un evento corporativo con mesas redondas y luz roja',
  },
  {
    id: 'social', nombre: 'Eventos sociales', invita: 'mi celebración', quien: 'Tu nombre',
    texto: 'Cada ocasión es perfecta para celebrar. Creamos experiencias a la medida para cumpleaños, aniversarios y reuniones especiales. Nos encargamos de cada detalle para que tú y tus invitados disfruten momentos inolvidables.',
    foto: 'evento-social', alt: 'Invitados con los brazos arriba frente a las pantallas del salón',
  },
];

export const galeria = [
  { f: 'galeria-salon-montaje', w: 1600, h: 1067, alt: 'Montaje completo del salón con techo de flores blancas y pantalla al fondo' },
  { f: 'galeria-boda-pista', w: 1400, h: 934, alt: 'Novios en la pista de baile con pantallas a los lados' },
  { f: 'galeria-xv-vals', w: 1400, h: 934, alt: 'Quinceañera en la pista con letras luminosas de su nombre' },
  { f: 'galeria-salon-pantalla', w: 1400, h: 934, alt: 'Salón con techo vegetal, pista de cristal y pantalla' },
  { f: 'galeria-chef', w: 1400, h: 934, alt: 'Chef preparando platillos en una estación durante un evento' },
  { f: 'galeria-salon-rosa', w: 1400, h: 934, alt: 'Salón iluminado en rosa con mesas imperiales montadas' },
  { f: 'galeria-xv-dj', w: 1400, h: 934, alt: 'Quinceañera en la cabina del DJ con cañón de humo verde' },
  { f: 'galeria-boda-baile', w: 1400, h: 934, alt: 'Novia bailando con un invitado bajo candelabros' },
  { f: 'galeria-xv-espejos', w: 1400, h: 934, alt: 'Cubo de espejos con esferas plateadas y la letra XV' },
  { f: 'galeria-salon-jardin', w: 1400, h: 934, alt: 'Salón con arreglos colgantes de follaje y pista iluminada' },
];

export const testimonios = [
  {
    nombre: 'Mariel Medrano',
    texto: 'Mi boda fue en la Cantera en Febrero 2024 y todo estuvo excelente! La comida deliciosa, las bebidas súper ricas, la atención del personal desde pedir informes, coordinación del evento hasta los meseros está excelente. La decoración fue tal y como yo la pedí y no hubo sorpresas de nada. Mis invitados y nosotros los novios la pasamos increíble.',
  },
  {
    nombre: 'Dr. José Luis G.H.',
    texto: 'Un muy hermoso lugar para realizar tus eventos, me tocó ir a una boda y la verdad está todo muy bien, la atención estuvo increíble, 100 % recomendable. Cuentan también con valet parking, en mi experiencia cero problemas y todo de lujo.',
  },
  {
    nombre: 'Sabdiel Espinosa',
    texto: 'Salón de lujo, atención de primera, muy contentos con nuestro evento, la verdad que fue muy especial. Ampliamente recomendado.',
  },
];
