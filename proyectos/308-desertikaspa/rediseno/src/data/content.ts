// Contenido de Desértika Spa. Textos, precios, duraciones y sucursales de su sitio (investigacion/crudo.json y
// curl a /sucursales y a sus enlaces /book/… el 2026-09-27). Las descripciones se recortaron y se quitaron las
// afirmaciones de salud (ver CAMBIOS.md). Los enlaces de reserva son los de sus botones "Reserva".

const SITIO = 'https://www.desertikaspa.com';

export const negocio = {
  nombre: 'Desértika Spa',
  sitio: `${SITIO}/`,
  whatsapp: '525566728900',
  whatsappVisible: '55 6672 8900',
  agendaEnLinea: `${SITIO}/reservar`,
  giftcard: `${SITIO}/giftcard`,
  tienda: `${SITIO}/shop`,
  membresias: 'https://membresia-desertika.replit.app/',
  factura: 'https://factura-desertika.replit.app/',
  domicilio: `${SITIO}/servicios-a-domicilio`,
  wellness: `${SITIO}/wellness-corporativo`,
  privacidad: `${SITIO}/aviso-de-privacidad`,
  terminos: `${SITIO}/terminos-y-condiciones`,
  bolsa: `${SITIO}/bolsa-de-trabajo`,
  redes: [
    { nombre: 'Instagram', url: 'https://instagram.com/desertika.spa' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/desertikaspamx/' },
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/des%C3%A9rtika-spa-boutique/' },
    { nombre: 'X (Twitter)', url: 'https://twitter.com/desertikaspa' },
  ],
};

export function wa(texto: string, numero = negocio.whatsapp) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

export const bienvenida = {
  frase: '¡Hoy mereces consentirte!',
  texto:
    'En medio del ritmo de la Ciudad de México, Desértika Spa es un espacio para detenerte, relajarte y dedicarte un momento de bienestar. Cada experiencia se adapta a tus preferencias para que disfrutes una atención cercana, profesional y verdaderamente personalizada.',
  cifras: [
    { n: '+60', t: 'variedades de servicios' },
    { n: '+80', t: 'terapeutas' },
    { n: '+50,000', t: 'clientes' },
  ],
};

// El sello Desértika: lo que se elige antes de cada masaje (su sitio los numera del 1 al 6).
export const sello = {
  texto:
    'La personalización es parte esencial del sello Desértika. Antes de comenzar, podrás indicar la presión que prefieres y elegir elementos como aroma, música, iluminación de la cabina, aceite o crema y el té para cerrar tu experiencia.',
  elementos: [
    { t: 'Color de la cabina', d: 'Cromoterapia' },
    { t: 'Tipo de música', d: 'Musicoterapia' },
    { t: 'Aroma con aceites esenciales', d: 'Aromaterapia' },
    { t: 'Presión del masaje', d: 'La que prefieras' },
    { t: 'Aceite o crema', d: 'Para el masaje' },
    { t: 'Sabor del té', d: 'Para cerrar tu experiencia' },
  ],
};

export type Opcion = { min: number; precio: number; reserva: string };
export type Tipo = 'masaje' | 'facial' | 'oxigeno';
export type Servicio = {
  id: string;
  tipo: Tipo;
  grupo: string;
  nombre: string;
  lema: string;
  texto: string;
  opciones: Opcion[];
  foto?: { src: string; alt: string };
};

const b = (codigo: string) => `${SITIO}/book/${codigo}`;
const porWhatsApp = 'whatsapp';

export const servicios: Servicio[] = [
  {
    id: 'relajacion', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje Especial Desértika de Relajación', lema: 'Una pausa para cuerpo y mente',
    texto: 'Fusionamos las mejores técnicas de masaje en esta terapia especial para desconectarte del ritmo cotidiano. Movimientos fluidos y una presión adaptada a tus preferencias, en un ambiente sensorial cuidadosamente preparado.',
    opciones: [
      { min: 50, precio: 1200, reserva: `${SITIO}/reservar` },
      { min: 80, precio: 1600, reserva: b('MasajeEspecialRelajaci%C3%B3n90') },
      { min: 110, precio: 2000, reserva: b('MSJREL120') },
    ],
    foto: { src: 'relajacion.webp', alt: 'Terapeuta de Desértika dando un masaje de espalda con aceite' },
  },
  {
    id: 'alivio', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje para Alivio Muscular', lema: 'Atención enfocada en zonas de tensión',
    texto: 'Para quienes prefieren una presión más firme y atención especial en espalda, hombros, cuello o piernas. Combina maniobras profundas y estiramientos dentro de un nivel cómodo para cada persona.',
    opciones: [
      { min: 50, precio: 1300, reserva: b('AlivioMuscular60Min-') },
      { min: 80, precio: 1700, reserva: b('AlivioMuscular90Min') },
      { min: 110, precio: 2100, reserva: b('AM120') },
    ],
  },
  {
    id: 'piedras', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje de Piedras Calientes', lema: 'Renueva tu bienestar',
    texto: 'Una sinergia entre el masaje manual y el calor que irradian las piedras, para una relajación profunda.',
    opciones: [
      { min: 50, precio: 1300, reserva: b('MasajeDePiedrasCalientes60Min') },
      { min: 80, precio: 1700, reserva: b('MasajeDePiedrasCalientes90Min') },
      { min: 110, precio: 2100, reserva: b('PC120') },
    ],
    foto: { src: 'piedras.webp', alt: 'Piedras calientes sobre la espalda, con la toalla bordada de Desértika' },
  },
  {
    id: 'desintoxicante', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje Desintoxicante', lema: 'Restaura tu vitalidad',
    texto: 'Deslizamientos suaves, bombeos y movimientos rítmicos para reducir la fatiga acumulada.',
    opciones: [
      { min: 50, precio: 1300, reserva: b('Desintoxicante60Min') },
      { min: 80, precio: 1700, reserva: b('Desintoxicante90Min') },
      { min: 110, precio: 2100, reserva: b('MAJD120') },
    ],
  },
  {
    id: 'prenatal', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje Prenatal', lema: 'Bienestar para mamás en espera',
    texto: 'Especial para brindar relajación durante el embarazo. También para personas de todas las edades, incluyendo niños o adultos mayores, que buscan un masaje suave y reparador.',
    opciones: [
      { min: 50, precio: 1300, reserva: b('Prenatal60Min') },
      { min: 80, precio: 1700, reserva: b('Prenatal90Min') },
      { min: 110, precio: 2100, reserva: b('MSJPRE120') },
    ],
  },
  {
    id: 'shiatsu', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje Shiatsu', lema: 'Armonía y bienestar',
    texto: 'Terapia japonesa con presiones de manos y pies en armonía con la respiración. Se da sobre la ropa y sin aceites.',
    opciones: [
      { min: 50, precio: 1400, reserva: b('Shiatsu60Min') },
      { min: 80, precio: 1800, reserva: b('Shiatsu90Min') },
      { min: 110, precio: 2200, reserva: b('MSJSHIAT120') },
    ],
  },
  {
    id: 'lomi', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje Lomi Lomi', lema: 'Renueva tu espíritu',
    texto: 'Originario de Hawái, conocido por su profundidad e intensidad. Inicia con una armonización energética y usa manos y antebrazos, al ritmo de la música hawaiana.',
    opciones: [
      { min: 50, precio: 1400, reserva: b('LomiLomi60Min') },
      { min: 80, precio: 1800, reserva: `${SITIO}/reservar` },
      { min: 110, precio: 2200, reserva: b('MSJLOM120') },
    ],
    foto: { src: 'lomi-lomi.webp', alt: 'Masaje Lomi Lomi con antebrazos en una cabina de Desértika' },
  },
  {
    id: 'rebozo', tipo: 'masaje', grupo: 'Cuerpo completo',
    nombre: 'Masaje con Rebozo', lema: 'Restaura cuerpo y espíritu',
    texto: 'Técnica de origen purépecha que combina el masaje manual con estiramientos realizados con la ayuda del rebozo.',
    opciones: [
      { min: 50, precio: 1400, reserva: b('Rebozo60Min') },
      { min: 80, precio: 1800, reserva: b('Rebozo90Min') },
      { min: 110, precio: 2200, reserva: b('MSJREB120') },
    ],
    foto: { src: 'rebozo.webp', alt: 'Terapeuta estirando el cuello de un cliente con un rebozo rojo' },
  },
  {
    id: 'silla', tipo: 'masaje', grupo: 'Zona específica',
    nombre: 'Masaje en Silla Antiestrés', lema: 'Alivio rápido',
    texto: 'Se da en una silla especial, sin necesidad de quitarse la ropa. Se enfoca en espalda, brazos, manos y cabeza.',
    opciones: [
      { min: 15, precio: 450, reserva: porWhatsApp },
      { min: 30, precio: 600, reserva: porWhatsApp },
    ],
    foto: { src: 'silla.webp', alt: 'Masaje en silla antiestrés frente a un muro de piedra iluminado' },
  },
  {
    id: 'reflexologia', tipo: 'masaje', grupo: 'Zona específica',
    nombre: 'Reflexología en Pies', lema: 'Descanso a través de tus pies',
    texto: 'Presión profunda en puntos específicos y manipulaciones en los pies.',
    opciones: [{ min: 30, precio: 750, reserva: b('RFXPS30') }],
  },
  {
    id: 'piernas', tipo: 'masaje', grupo: 'Zona específica',
    nombre: 'Masaje para Piernas Cansadas', lema: 'Alivio a tus extremidades',
    texto: 'Se centra en las piernas, para quienes pasan mucho tiempo de pie o sentados, o después de jornadas exigentes.',
    opciones: [{ min: 30, precio: 750, reserva: b('MasajePiernas30Min') }],
    foto: { src: 'piernas.webp', alt: 'Masaje de piernas con aceite' },
  },
  {
    id: 'espalda', tipo: 'masaje', grupo: 'Zona específica',
    nombre: 'Masaje en Espalda, Hombros y Cuello', lema: 'Alivio a las zonas de estrés',
    texto: 'Una secuencia diseñada para las áreas donde el estrés tiende a acumularse: la espalda, los hombros y el cuello.',
    opciones: [{ min: 30, precio: 750, reserva: b('MasajeEspalda30-') }],
    foto: { src: 'espalda.webp', alt: 'Masaje de hombros y cuello' },
  },
  {
    id: 'limpieza', tipo: 'facial', grupo: 'Faciales',
    nombre: 'Limpieza Profunda', lema: 'Limpia a profundidad y revitaliza tu piel',
    texto: 'Eliminamos cuidadosamente las células muertas y extraemos las impurezas, y aplicamos activos para hidratar la piel.',
    opciones: [{ min: 50, precio: 1200, reserva: b('FACLPROF60') }],
    foto: { src: 'facial-limpieza.webp', alt: 'Especialista dando un masaje facial a una clienta' },
  },
  {
    id: 'caballero', tipo: 'facial', grupo: 'Faciales',
    nombre: 'Desintoxicante para Caballero', lema: 'Especializado en piel masculina',
    texto: 'Diseñado para las necesidades de la piel masculina: limpieza profunda para eliminar impurezas, hidratación intensa y oxigenación.',
    opciones: [{ min: 50, precio: 1200, reserva: porWhatsApp }],
    foto: { src: 'facial-caballero.webp', alt: 'Cliente con mascarilla facial aplicada con brocha' },
  },
  {
    id: 'hidratacion', tipo: 'facial', grupo: 'Faciales',
    nombre: 'Hidratación Profunda', lema: 'Recupera la humedad perdida',
    texto: 'Limpia a fondo la piel y aplica una combinación de activos concentrados para reponer la humedad.',
    opciones: [{ min: 50, precio: 1300, reserva: b('FCLHID60') }],
    foto: { src: 'facial-hidratacion.webp', alt: 'Aplicación de producto en el rostro con un hisopo' },
  },
  {
    id: 'oxigenante', tipo: 'facial', grupo: 'Faciales',
    nombre: 'Oxigenante', lema: 'Para pieles opacas',
    texto: 'Para pieles opacas por la contaminación y el estilo de vida agitado. Usa productos y equipos especiales para oxigenar la piel.',
    opciones: [{ min: 50, precio: 1300, reserva: b('FCLOXI60') }],
    foto: { src: 'facial-oxigenante.webp', alt: 'Masaje facial con las yemas de los dedos' },
  },
  {
    id: 'reafirmante', tipo: 'facial', grupo: 'Faciales',
    nombre: 'Reafirmante', lema: 'Pensado para pieles mayores de 30 años',
    texto: 'Combina tecnología con activos específicos para las necesidades de la piel con el paso del tiempo.',
    opciones: [{ min: 50, precio: 1300, reserva: b('FCLREA60') }],
    foto: { src: 'facial-reafirmante.webp', alt: 'Clienta con protectores de ojos durante un facial con aparato' },
  },
  {
    id: 'oxigeno', tipo: 'oxigeno', grupo: 'Bar de Oxígeno',
    nombre: 'Bar de Oxígeno', lema: 'Aire enriquecido con oxígeno y una taza de té',
    texto: 'Consumo individual de aire enriquecido con oxígeno, en un ambiente de relajación y acompañado de una taza de té de tu preferencia.',
    opciones: [
      { min: 20, precio: 350, reserva: porWhatsApp },
      { min: 25, precio: 450, reserva: porWhatsApp },
      { min: 30, precio: 550, reserva: porWhatsApp },
    ],
    foto: { src: 'oxigeno.webp', alt: 'Cliente en el bar de oxígeno de Desértika con cánula nasal' },
  },
];

export const faciales = {
  texto:
    'En nuestros faciales utilizamos el sistema de doble limpieza, seguido de una exfoliación para preparar la piel y recibir los activos de acuerdo con el tipo y las necesidades de cada persona. Trabajamos con la línea Dermalogica.',
  touch: 'Durante el tiempo de pose de la mascarilla te relajarán con nuestro Touch Therapy: masaje en brazos y manos o en cuello y hombros.',
  faceMapping: 'Puedes solicitar una evaluación de tu piel, "Face Mapping", sin costo, para que nuestras especialistas te sugieran el mejor facial para ti.',
};

// Más experiencias: textos de la portada, recortados. Cada una enlaza a su página.
export const experiencias = [
  { nombre: 'Temazcal', texto: 'Antiguo ritual de baño de vapor en un iglú, con infusiones de hierbas, que representa el vientre de la Madre Tierra y reúne agua, tierra, aire y fuego. Ritual Temazcalli y Circuito Desintoxicante.', url: `${SITIO}/temazcal` },
  { nombre: 'Hidroterapia', texto: 'Una sesión en jacuzzi con chorros a presión, enriquecida con aceites esenciales y sales. Hidroterapia Relajante e Hidroterapia Alivio Muscular.', url: `${SITIO}/hidroterapia` },
  { nombre: 'Envolventes corporales', texto: 'Exfolian y nutren la piel con un envoltorio que deja penetrar los activos. Con lodos, con chocolate o hidronutritivo.', url: `${SITIO}/envolventes` },
  { nombre: 'Tratamientos reductivos', texto: 'Radiofrecuencia, cavitación y gimnasia pasiva, combinados con masajes manuales y vendas frías.', url: `${SITIO}/reductivos` },
  { nombre: 'Spa Parties', texto: 'Para un cumpleaños, un aniversario o una despedida de soltera; todos los paquetes Spa Parties incluyen una selección de vino. Scape, Renovación Total y Temazcal.', url: `${SITIO}/spa-parties` },
  { nombre: 'Paquetes', texto: 'Masajes, faciales, envolventes y otros servicios a un precio especial: una pausa para ti, en pareja o con amigas, o un día completo. Hidro relax, Renuévate, Parejas, Revitalizante, Relajante, Mensual y Day Spa.', url: `${SITIO}/paquetes` },
];

export const otrosEnlaces = [
  { nombre: 'Servicio a domicilio', url: `${SITIO}/servicios-a-domicilio` },
  { nombre: 'Wellness corporativo', url: `${SITIO}/wellness-corporativo` },
  { nombre: 'Depilación láser', url: `${SITIO}/depilacion-laser` },
];

export const politicas = [
  { t: 'Reagenda', d: 'En caso de no poder asistir, favor de cancelar con 24 hrs de anticipación; de lo contrario, se dará por tomado el servicio y no habrá devoluciones ni cambios.' },
  { t: 'Tipos de pago', d: 'Se aceptan todas las tarjetas y pagos en efectivo.' },
  { t: 'Calidad y seguridad', d: 'Contamos con todas las medidas de higiene y seguridad para hacer tu experiencia inigualable.' },
];

export type Sucursal = {
  id: string;
  nombre: string;
  direccion: string;
  zona: string;
  tels: string[];
  agenda: string | null;
  nota?: string;
};

// Teléfonos a 10 dígitos (su sitio los marca con +55, el código de Brasil).
export const sucursales: Sucursal[] = [
  { id: 'napoles', nombre: 'Nápoles', direccion: 'Av. Insurgentes Sur 753, Col. Nápoles, Benito Juárez, 03810', zona: 'Benito Juárez', tels: ['55 1107 7822'], agenda: 'https://appt.link/desertika-spa-napoles' },
  { id: 'quevedo', nombre: 'Miguel Ángel de Quevedo', direccion: 'Miguel Ángel de Quevedo 432, Col. Santa Catarina', zona: 'Coyoacán', tels: ['55 5484 8225'], agenda: 'https://appt.link/desertika-spa-miguel-angel-de-quevedo' },
  { id: 'lomas', nombre: 'Lomas de Chapultepec', direccion: 'Monte Ararat 220, Col. Lomas de Chapultepec', zona: 'Miguel Hidalgo', tels: ['55 9131 7177'], agenda: 'https://appt.link/desertika-spa-lomas' },
  { id: 'barranca', nombre: 'Barranca del Muerto', direccion: 'Barranca del Muerto 309, Col. San José Insurgentes', zona: 'Benito Juárez', tels: ['55 5593 3791'], agenda: 'https://appt.link/desertika-spa-barranca' },
  { id: 'tlacoquemecatl', nombre: 'Tlacoquemécatl', direccion: 'Providencia 1263, Col. Del Valle', zona: 'Benito Juárez', tels: ['55 2121 3756'], agenda: 'https://appt.link/desertika-spa-tlacoquemacatl' },
  { id: 'delvalle', nombre: 'Del Valle', direccion: 'Av. División del Norte 139, Col. Del Valle', zona: 'Benito Juárez', tels: ['55 5543 1476', '55 1107 7919'], agenda: 'https://appt.link/desertika-spa-del-valle' },
  { id: 'anzures', nombre: 'Anzures', direccion: 'Leibnitz 59-A, Col. Anzures', zona: 'Miguel Hidalgo', tels: ['55 5250 9147'], agenda: 'https://appt.link/desertika-spa-anzures' },
  { id: 'amsterdam', nombre: 'Ámsterdam', direccion: 'Ámsterdam 300, Col. Hipódromo Condesa', zona: 'Cuauhtémoc', tels: ['55 9155 3957'], agenda: 'https://appt.link/desertika-spa-amsterdam' },
  { id: 'condesa', nombre: 'Condesa', direccion: 'Benjamín Franklin 229, Col. Hipódromo Condesa', zona: 'Cuauhtémoc', tels: ['55 2614 3438'], agenda: 'https://appt.link/desertika-spa-condesa' },
  { id: 'homero', nombre: 'Homero', direccion: 'Homero 1616, Col. Polanco', zona: 'Miguel Hidalgo', tels: ['55 5202 2169'], agenda: 'https://appt.link/cita-en-desertika-spa-sucursal-homero' },
  { id: 'masaryk', nombre: 'Masaryk', direccion: 'Masaryk 317, planta alta, Col. Polanco', zona: 'Miguel Hidalgo', tels: ['55 5280 4880'], agenda: 'https://appt.link/desertika-spa-masaryk' },
  { id: 'sanangel', nombre: 'San Ángel', direccion: 'Plaza Versalles, locales 105 y 106, Col. San Ángel', zona: 'Álvaro Obregón', tels: ['55 5131 5066'], agenda: 'https://appt.link/desertika-spa-san-angel' },
  { id: 'aeropuerto', nombre: 'Aeropuerto', direccion: 'AICM, Salas Premier, Terminal 2, Blvd. Puerto Aéreo s/n', zona: 'Venustiano Carranza', tels: ['55 9132 6054'], agenda: null, nota: 'Se agenda por WhatsApp.' },
  { id: 'hyatt', nombre: 'Hyatt Insurgentes', direccion: 'Av. Insurgentes Sur 724, 03100', zona: 'Benito Juárez', tels: [], agenda: null, nota: 'Reserva en la recepción del hotel.' },
  { id: 'satelite', nombre: 'Samara Satélite', direccion: 'Centro Comercial 16, Cd. Satélite, 53100 Naucalpan de Juárez, Edo. Méx.', zona: 'Naucalpan', tels: ['55 2839 1772'], agenda: null, nota: 'Se agenda por WhatsApp.' },
];

export const telHref = (t: string) => `tel:+52${t.replace(/\D/g, '')}`;
export const mapsHref = (s: Sucursal) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Desértika Spa ${s.nombre}, ${s.direccion}${s.id === 'satelite' ? '' : ', Ciudad de México'}`)}`;
export const precio = (n: number) => `$${n.toLocaleString('es-MX')}`;
