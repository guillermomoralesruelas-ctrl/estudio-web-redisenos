// Contenido del Hotel Plaza Colonial, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Lo que falta va en CAMBIOS.md como pendiente.
// Las fotos son copias .webp de las propias del hotel (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';

type NombreFoto = keyof typeof fotos;
export const foto = (nombre: NombreFoto) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});

export const negocio = {
  nombre: 'Hotel Plaza Colonial',
  direccion: 'Calle 10 No. 15, Centro Histórico, Campeche, Campeche',
  telefono: '9818119900',
  telefonoVisible: '(981) 811 9900',
  extension: '305',
  telefono2: '9818119930',
  telefono2Visible: '(981) 811 9930',
  // El sitio no publica WhatsApp: se usa el teléfono de reservaciones (pendiente de confirmar en CAMBIOS.md).
  whatsapp: '529818119900',
  correo: 'reservaciones@hotelplazacolonial.com',
  facebook: 'https://www.facebook.com/hotelplazacolonialcampeche/',
  mapa: 'https://www.google.com/maps/search/?api=1&query=19.846676%2C-90.534738',
  motor: 'https://hotelplazacolonial.hpaq.me/rooms.php',
};

const saludo = 'Hola, les escribo desde su sitio web.';
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(`${saludo} ${texto}`)}`;
export const waGeneral = wa('Quisiera información sobre habitaciones en el Hotel Plaza Colonial.');

// Su motor de reservas (GetABed) recibe las fechas como día-mes-año, igual que el formulario de su portada.
const dma = (iso: string) => iso.split('-').reverse().join('-');
export const reservarUrl = (entrada?: string, salida?: string) => {
  const q = new URLSearchParams({ lang: 'es_MX' });
  if (entrada) q.set('check_in', dma(entrada));
  if (salida) q.set('check_out', dma(salida));
  return `${negocio.motor}?${q.toString()}`;
};

export const bienvenida = {
  titulo: 'El alma de la Ciudad Amurallada',
  texto:
    'Ubicado en el epicentro del Centro Histórico de Campeche, el Hotel Plaza Colonial es una joya de arquitectura clásica que rinde homenaje a la herencia colonial de nuestra ciudad Patrimonio de la Humanidad. Con su inconfundible fachada amarilla y balcones con ventanas azules, el hotel invita a los viajeros a sumergirse en una atmósfera de tranquilidad, confort y autenticidad.',
};

export type Ventana = {
  id: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  datos?: string[];
  foto?: NombreFoto;
  alt?: string;
  pie?: string;
  mensaje: string;
};

// Cada puerta o ventana del dibujo abre una parte real del hotel. El dibujo es ilustrativo:
// el sitio no dice qué ventana es de qué habitación.
export const ventanas: Ventana[] = [
  {
    id: 'jr-suite',
    etiqueta: 'Balcón',
    titulo: 'Jr. Suite',
    texto:
      'Amplias habitaciones, estratégicamente ubicadas, para un mejor descanso y confort del huésped. Dos camas dobles o una King size.',
    datos: [
      'Balcón con vista',
      'Aire acondicionado y ventilador de techo',
      'Televisión de pantalla plana y teléfono multifunciones',
      'Baño con tina y regadera, secadora de cabello',
      'Plancha, tabla para planchar y caja de seguridad',
      'Cerradura electrónica de alta seguridad',
      'Ocupación estándar: 2 personas',
    ],
    foto: 'balcon',
    alt: 'Dos sillones naranjas y una mesa con dos tazas de café junto a una puerta de balcón azul, en una habitación del hotel',
    pie: 'Foto de una de las habitaciones del hotel.',
    mensaje: 'Me interesa una Jr. Suite (con balcón). ¿Me pueden dar disponibilidad y tarifa?',
  },
  {
    id: 'estandar',
    etiqueta: 'Ventana',
    titulo: 'Habitación estándar',
    texto: 'Una o dos camas matrimoniales, con todo lo necesario para una estancia agradable.',
    datos: [
      'Aire acondicionado y ventilador de techo',
      'Televisión de pantalla plana y teléfono multifunciones',
      'Baño con tina y regadera, secadora de pelo',
      'Caja de seguridad, WiFi y cerradura electrónica',
      'Ocupación estándar: 2 personas',
    ],
    foto: 'habitacion',
    alt: 'Habitación con cama matrimonial, cojín bordado con flores, paredes a rayas lila y amarillo y un sillón junto a la ventana',
    pie: 'Foto de una de las habitaciones del hotel.',
    mensaje: 'Me interesa una Habitación estándar. ¿Me pueden dar disponibilidad y tarifa?',
  },
  {
    id: 'recepcion',
    etiqueta: 'Puerta principal',
    titulo: 'Recepción',
    texto:
      'Le garantizamos una estancia cómoda y placentera, ya que se han cuidado los detalles para ofrecer a nuestros huéspedes una sensación de “llegar a casa”. Los sistemas informáticos, telefónicos y de seguridad son de última generación, lo que permitirá proporcionarle eficiencia, rapidez y eficacia en las entradas y salidas.',
    foto: 'recepcion',
    alt: 'Recepción del hotel con mostrador de madera, reloj de pared, candil y una recepcionista',
    mensaje: 'Quisiera información sobre habitaciones en el Hotel Plaza Colonial.',
  },
  {
    id: 'sala',
    etiqueta: 'Ventana de la planta baja',
    titulo: 'Sala',
    texto: 'Nuestras instalaciones están hechas para que usted se relaje y se sienta como en casa.',
    datos: ['Centro de negocios', 'Room service', 'Servicio de lavandería', 'Wi-Fi'],
    foto: 'sala',
    alt: 'Sala del hotel con paredes lilas, libreros de madera iluminados, sillones de tapiz floral y cojines magenta',
    mensaje: 'Quisiera información sobre los servicios del hotel.',
  },
  {
    id: 'patio',
    etiqueta: 'Portón',
    titulo: 'Piscina y estacionamiento',
    texto: 'Del portón hacia adentro: la piscina al aire libre y el estacionamiento del hotel.',
    datos: [
      'Piscina al aire libre, abierta de 09:00 a 20:00 horas',
      'Servicio de toallas sin costo en recepción',
      'Estacionamiento gratuito, disponible las 24 horas, sujeto a disponibilidad',
    ],
    mensaje: 'Quisiera saber si hay lugar en el estacionamiento para mis fechas.',
  },
];

export const servicios = ['Estacionamiento (sujeto a disponibilidad)', 'Piscina', 'Centro de negocios', 'Room service', 'Servicio de lavandería', 'Wi-Fi'];

export const actividades = [
  {
    titulo: 'Caminata por el Malecón',
    texto: 'A solo unos minutos, perfecto para disfrutar de un atardecer espectacular frente al Golfo de México, ya sea caminando o en bicicleta. Te recomendamos llevar tu cámara lista para las espectaculares puestas de sol.',
  },
  {
    titulo: 'Exploración de baluartes',
    texto: 'Visita el Baluarte de San Carlos o el de La Soledad. Es un viaje en el tiempo para entender las defensas de la ciudad contra los piratas.',
  },
  {
    titulo: 'Cena en la Calle 59',
    texto: 'La calle más emblemática y fotogénica de la ciudad, llena de restaurantes y galerías de arte que cobran vida al caer la noche.',
  },
  {
    titulo: 'Luz y sonido “El Lugar de la Serpiente”',
    texto: 'Se realiza en el Baluarte de San Francisco y es una forma mágica de conocer la historia maya y colonial de la región.',
  },
  {
    titulo: 'Museo de Arquitectura Maya',
    texto: 'Ubicado dentro del Baluarte de la Soledad, ideal para admirar la icónica máscara de jade de Calakmul.',
  },
];

// Testimonios publicados en la portada del sitio original (sin nombre de autor en el sitio).
export const testimonios = [
  'Muy buen hotel, limpio, bien ubicado y el servicio es excelente.',
  'Muy buena ubicación y los sistemas de aire acondicionado son buenos, ya que sí refrescan el cuarto y muy bien; además muy limpio y en buenas condiciones. La ubicación está muy cerca de la catedral y los empleados son muy amables.',
  'Súper recomendable: buena ubicación, instalaciones muy acogedoras y limpias, excelente atención del personal. La srita. Anahí de recepción, excelente anfitriona. ¡Mejor elección no pudimos haber hecho!',
];
