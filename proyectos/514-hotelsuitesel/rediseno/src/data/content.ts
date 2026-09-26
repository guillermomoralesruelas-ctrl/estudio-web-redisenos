// Contenido de Hotel & Suites El Moro (La Paz, Baja California Sur).
// Textos copiados de investigacion/crudo.json (hotelelmoro.com: inicio, /habitaciones, /reservaciones y /galeria, 2026-09-26)
// y, para lo que crudo.json no trae, del sitio real descargado con curl el 2026-09-26: /cuarto-doble, /suite-familiar,
// /suite-con-desvan, /suite-deluxe, /master-suite (capacidad y detalles), /larga-estancia, /kayak, /pesca-deportiva,
// /buceo-scuba, /snorkeling, /contacto (recepción 24 horas) y /terminos-y-condiciones (check-in y check-out).
// Erratas corregidas. Lo nuevo (títulos, botones y textos del selector de noches) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

export const WA = '526121591758';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, me comunico desde su sitio web.';

/** Motor de reservas: el mismo Cloudbeds del sitio actual (widget Ed16fN), en español. */
export const cloudbeds = (llegada?: string, salida?: string) =>
  `https://hotels.cloudbeds.com/es/reservation/Ed16fN${llegada && salida ? `#checkin=${llegada}&checkout=${salida}` : ''}`;

export const hotel = {
  nombre: 'Hotel & Suites El Moro',
  titulo: 'Tu casa frente al Mar de Cortés',
  lema: 'Suites con cocineta, alberca entre jardines y el malecón a unos minutos. Reserva directo con el hotel y obtén siempre el mejor precio.',
  rincon: {
    titulo: 'Un rincón colonial a la orilla de La Paz',
    texto: 'Arcos blancos, jardines, alberca y atardeceres sobre la bahía. Suites amplias con cocineta y balcón, a cinco minutos del malecón: un hotel para quedarse una noche, una semana o toda la temporada.',
    habitaciones: 'Cuartos y suites de estilo colonial, rodeados de jardines y a unos minutos del malecón de La Paz. La mayoría con cocineta equipada, sala y balcón: perfectas para una escapada de fin de semana o para quedarte toda una temporada.',
  },
  mejorPrecio: {
    titulo: 'Siempre el mejor precio, directo con nosotros',
    texto: 'Sin comisiones de intermediarios ni sobreprecios: reservar por esta página te garantiza la mejor tarifa del hotel.',
    como: 'Sólo sigue los pasos que el sistema de reservas te indica y realiza tu pre-pago. Si no puedes concretar tu reservación, contáctanos por correo o por teléfono y te damos todo el apoyo que necesites.',
    platicar: 'Cuéntanos tus fechas y te ayudamos a encontrar la habitación ideal, sin compromiso.',
  },
  pagoSeguro: 'Hotel El Moro utiliza estándares de seguridad con certificación PCI. Toda la información transmitida se encripta con un certificado SSL de 128 bits.',
  checkin: '3:00 pm',
  checkout: '12:00 pm',
  recepcion: 'Abierto las 24 horas, de lunes a domingo',
  direccion: ['Blvd. Alberto Alvarado Aramburo No. 7', 'Colina del Sol, La Paz, BCS, C.P. 23010'],
  telefonos: [
    { visible: '612 122 4084', href: 'tel:+526121224084' },
    { visible: '612 125 2828', href: 'tel:+526121252828' },
  ],
  whatsappVisible: '612 159 1758',
  whatsapp: wa(`${saludo} Quiero información para hospedarme en el Hotel & Suites El Moro.`),
  email: 'reservaciones@hotelelmoro.com',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+%26+Suites+El+Moro+Blvd.+Alberto+Alvarado+Aramburo+7+Colina+del+Sol+La+Paz+BCS',
  redes: [
    { nombre: 'Facebook', href: 'https://www.facebook.com/pages/Hotel-Suites-Club-El-Moro/216040871754415' },
    { nombre: 'Instagram', href: 'https://instagram.com/hotelsuiteselmoro' },
  ],
  enlaces: [
    { nombre: 'Términos y condiciones', href: 'https://hotelelmoro.com/terminos-y-condiciones' },
    { nombre: 'Blog de viajes en La Paz', href: 'https://hotelelmoro.com/blog' },
    { nombre: 'English', href: 'https://hotelelmoro.com/en' },
  ],
  logo: f('logo-el-moro', 400, 100, 'Hotel & Suites El Moro'),
  portada: f('alberca-atardecer', 1920, 857, 'Alberca del Hotel & Suites El Moro al atardecer, con rocas, palmeras y la cúpula blanca de estilo moro iluminada'),
  cupula: f('cupula-palmeras', 1600, 900, 'Cúpula y arcos blancos del hotel entre palmeras, junto a la alberca, al anochecer'),
  fuente: f('fuente-edificio', 1600, 714, 'Fuente de cantera entre palmeras frente al edificio de suites con balcones iluminados'),
  aerea: f('vista-aerea', 1400, 788, 'Vista aérea del Hotel & Suites El Moro: alberca, fuentes, palmeras y techos blancos'),
};

export const servicios = [
  { nombre: 'Alberca', texto: 'Disfruta de nuestra alberca, entre jardines y palmeras.' },
  { nombre: 'Wifi gratis', texto: 'Tenemos servicio de wifi en todas nuestras habitaciones.' },
  { nombre: 'Transportación', texto: 'Puedes solicitarnos el servicio de transportación.' },
  { nombre: 'Restaurante', texto: '' },
];

export type Habitacion = {
  id: string;
  nombre: string;
  foto: Foto;
  lista: number; // precio tachado en el sitio (MXN por noche)
  directo: number; // precio con descuento del sitio (MXN por noche, impuestos incluidos)
  personas: number;
  cocineta: boolean;
  texto: string;
  detalles: string[];
  href: string;
};

const tv = 'TV digital con cable, 80 canales';
const suite = ['Cocineta con cafetera, refrigerador y licuadora', 'Comedor y sala', tv, 'Wi-Fi', 'Aire acondicionado'];

export const habitaciones: Habitacion[] = [
  {
    id: 'estandar', nombre: 'Estándar Doble', lista: 2650, directo: 2385, personas: 4, cocineta: false,
    foto: f('estandar-doble', 640, 640, 'Estándar Doble: dos camas con cabeceras blancas en forma de concha, ventilador de techo y piso de barro'),
    texto: 'Un espacio cómodo y funcional con dos camas y lo necesario para una estancia agradable. Ideal para familias pequeñas de hasta 4 personas o viajeros que buscan comodidad en estancias cortas o largas.',
    detalles: [tv, 'Wi-Fi', 'Aire acondicionado'],
    href: 'https://hotelelmoro.com/cuarto-doble',
  },
  {
    id: 'familiar', nombre: 'Suite Familiar', lista: 3050, directo: 2745, personas: 4, cocineta: true,
    foto: f('suite-familiar', 640, 640, 'Suite Familiar: sala con dos sillones, mesa de centro de madera y cocineta al fondo'),
    texto: 'Diseñada para brindar comodidad y practicidad: un entorno espacioso pensado para compartir y descansar, perfecta para familias de hasta 4 personas o viajeros de larga estancia que necesitan un lugar cómodo para relajarse y para trabajar.',
    detalles: suite,
    href: 'https://hotelelmoro.com/suite-familiar',
  },
  {
    id: 'desvan', nombre: 'Suite con Desván', lista: 3710, directo: 3339, personas: 5, cocineta: true,
    foto: f('suite-con-desvan', 640, 640, 'Suite con Desván: doble altura con escalera de madera al desván, sala, comedor y refrigerador'),
    texto: 'Con un diseño de doble altura que aporta amplitud y privacidad, la Suite con Desván ofrece una experiencia única. Sus áreas de descanso y cocineta equipada la hacen ideal para familias de hasta 5 personas o trabajadores remotos que valoran un espacio acogedor y bien distribuido.',
    detalles: suite,
    href: 'https://hotelelmoro.com/suite-con-desvan',
  },
  {
    id: 'deluxe', nombre: 'Suite Deluxe', lista: 3810, directo: 3429, personas: 4, cocineta: true,
    foto: f('suite-deluxe', 640, 640, 'Suite Deluxe: cama matrimonial y cama individual, adornos de madera en la pared y ventana al jardín'),
    texto: 'Combina confort y amplitud en un ambiente acogedor con sala, comedor y cocineta equipada, además de una agradable vista parcial a la bahía. Una excelente opción para estancias cortas o prolongadas, para familias de hasta 4 personas o nómadas digitales.',
    detalles: ['Cocineta con cafetera, refrigerador y licuadora', tv, 'Wi-Fi', 'Aire acondicionado'],
    href: 'https://hotelelmoro.com/suite-deluxe',
  },
  {
    id: 'master', nombre: 'Master Suite', lista: 4480, directo: 4032, personas: 5, cocineta: true,
    foto: f('master-suite', 640, 640, 'Master Suite: recámara con cama grande, cuadro del mar y puerta de cristal al balcón'),
    texto: 'Pensada para quienes buscan más espacio y privacidad: cuenta con dos recámaras independientes, cada una con baño propio, además de sala, comedor y cocina completamente equipada. Ideal para familias grandes de hasta 5 personas, grupos o estancias prolongadas.',
    detalles: suite,
    href: 'https://hotelelmoro.com/master-suite',
  },
];

// Larga Estancia (hotelelmoro.com/larga-estancia). El sitio no publica la tarifa: se cotiza por WhatsApp.
export type Modo = { id: 'noche' | 'semana' | 'mes' | 'temporada'; desde: number; nombre: string; umbral: string; texto: string };
export const modos: Modo[] = [
  { id: 'noche', desde: 1, nombre: 'Por noche', umbral: '1 noche', texto: 'Reserva directo con el hotel y obtén siempre el mejor precio.' },
  { id: 'semana', desde: 7, nombre: 'Por semana', umbral: 'Desde 7 noches', texto: 'Ideal si vienes por trabajo o un proyecto corto. Tarifa preferente desde la primera semana, con limpieza incluida.' },
  { id: 'mes', desde: 28, nombre: 'Por mes', umbral: 'Desde 28 noches', texto: 'Nuestra opción más solicitada. Suite con cocineta completa, servicios y limpieza incluidos. La alternativa real a rentar, sin contrato. A partir de 28 noches la tarifa mejora de forma importante.' },
  { id: 'temporada', desde: 90, nombre: 'Por temporada', umbral: 'Desde 3 meses', texto: 'Para quienes pasan el invierno en Baja: de octubre a abril, cambia el frío por el Mar de Cortés. Tarifa negociada a la medida y tu suite lista cada año.' },
];

export const largaEstancia = {
  titulo: 'Vive en La Paz sin firmar un contrato',
  texto: 'Suites con cocineta, servicios, limpieza y alberca incluidos. Sin depósito, sin aval y sin recibos que pagar. Desde una semana hasta toda la temporada.',
  cuanto: 'Entre más larga sea tu estancia, mejor es la tarifa. Cuéntanos tus fechas y te preparamos una propuesta a tu medida.',
  incluye: [
    { nombre: 'Cocineta equipada', texto: 'Cocina como en casa y olvídate de comer fuera todos los días.' },
    { nombre: 'Servicios incluidos', texto: 'Luz, agua e internet. Nada que contratar, nada que pagar aparte, ningún recibo a tu nombre.' },
    { nombre: 'Wifi para trabajar', texto: 'Internet en toda la propiedad y espacios tranquilos para videollamadas o para pasar el día trabajando.' },
    { nombre: 'Limpieza incluida', texto: 'Cambio de blancos y limpieza periódica de tu suite. Cada semana, 1 carga de ropa de 10 piezas y 1 galón de agua purificada de 6 L gratis.' },
    { nombre: 'Alberca y jardines', texto: 'Alberca, gazebo, restaurante y áreas verdes. Tu casa no tiene esto; tu estancia larga sí.' },
    { nombre: 'Recepción y seguridad', texto: 'Alguien siempre está. Recibe paquetes, resuelve dudas y cuida tu suite cuando sales de viaje.' },
  ],
  comparacion: {
    titulo: 'El Moro o rentar un departamento',
    texto: 'La diferencia no es el precio: es todo lo que no tienes que hacer.',
    filas: [
      ['Depósito y aval', 'Obligatorios', 'No los pedimos'],
      ['Contrato', 'De 6 a 12 meses', 'Sin contrato, te quedas lo que necesites'],
      ['Luz, agua e internet', 'Los contratas y los pagas tú', 'Incluidos en tu tarifa'],
      ['Muebles y menaje', 'Los compras o los rentas', 'Suite lista para entrar a vivir'],
      ['Limpieza', 'Por tu cuenta', 'Incluida'],
      ['Alberca, restaurante y recepción', 'No', 'Sí, todos los días'],
    ],
  },
  preguntas: [
    { p: '¿Cuál es la estancia mínima?', r: 'La tarifa de larga estancia aplica a partir de 7 noches. A partir de 28 noches la tarifa mejora de forma importante, y para temporadas de 3 meses o más preparamos una propuesta a la medida.' },
    { p: '¿Las suites tienen cocina?', r: 'Sí. La Suite Deluxe, la Suite Familiar, la Suite con Desván y la Master Suite cuentan con cocineta equipada con refrigerador, cafetera, licuadora y comedor. La Master Suite además tiene dos recámaras con baño propio cada una.' },
    { p: '¿Piden depósito o contrato?', r: 'No pedimos depósito, aval ni contrato de arrendamiento. Reservas tu estancia y listo; si necesitas extenderla, solo nos avisas.' },
    { p: '¿Puedo pedir factura?', r: 'Sí, emitimos factura para estancias de trabajo o proyectos. Coméntanoslo al cotizar para preparar todo desde el inicio.' },
  ],
  foto: hotel.fuente,
};

export const mar = {
  titulo: '¿Listo para el mar?',
  texto: 'Pesca deportiva, kayak, buceo y snorkel en el Mar de Cortés: sales del hotel y en minutos estás en el agua.',
  recepcion: 'Todas las actividades están disponibles en la recepción, con opción de personalizar el servicio según tus necesidades.',
  actividades: [
    {
      nombre: 'Kayak', href: 'https://hotelelmoro.com/kayak',
      texto: 'La Bahía de La Paz es uno de los mejores lugares para practicar kayak. Frente a la ciudad está la península de El Mogote, a la que llegas en 20 minutos remando; ahí encontrarás una hermosa playa con todo tipo de aves y vida marina.',
    },
    {
      nombre: 'Snorkeling', href: 'https://hotelelmoro.com/snorkeling',
      texto: 'A unos 30 kilómetros de la ciudad está la Isla Espíritu Santo, declarada Patrimonio de la Humanidad por la UNESCO. En la lobera de Isla Partida puedes nadar con lobos marinos: los más jóvenes se acercan a jugar. Las mejores temporadas son la primavera y el verano.',
    },
    {
      nombre: 'Buceo Scuba', href: 'https://hotelelmoro.com/buceo-scuba',
      texto: 'Media milla al norte de Isla Espíritu Santo están Los Islotes, con su colonia de leones marinos, muy amigables con buzos y nadadores. Otros sitios: El Bajo y San Francisquito para buzos avanzados, El Bajito, Isla Ballena, el ferry hundido Salvatierra y La Reina.',
    },
    {
      nombre: 'Pesca Deportiva', href: 'https://hotelelmoro.com/pesca-deportiva',
      texto: 'Ofrecemos excursiones de pesca para que disfrutes al máximo de tu estancia. Para más información, pregunta en recepción o escríbenos por correo o WhatsApp.',
    },
  ],
};
