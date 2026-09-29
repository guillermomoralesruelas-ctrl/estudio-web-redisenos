// Contenido de Hollywood Meeting Planners & Event Management, tomado del sitio original: clon en ../sitio,
// investigacion/crudo.json (inicio, fiestas tema, bodas, actividades grupales, entretenimiento) y las páginas
// "Otros servicios", "Diseño floral", "Nosotros" y "Contacto" leídas en vivo el 2026-09-28
// (entregables/textos-sitio-en-vivo-2026-09-28.txt).
// Regla: nada inventado. Su sitio no publica dirección, precios ni horario de atención.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);

export const negocio = {
  nombre: 'Hollywood Meeting Planners & Event Management',
  corto: 'Hollywood Cancún',
  cobertura: ['Cancún', 'Riviera Maya', 'Mérida'],
  whatsapp: '529988458951',
  telefonos: [
    { etiqueta: 'México', numero: '(52) 998 845 8951', tel: '+529988458951' },
    { etiqueta: 'México', numero: '(52) 998 386 8210', tel: '+529983868210' },
    { etiqueta: 'Estados Unidos', numero: '+1 657 293 4945', tel: '+16572934945' },
  ],
  correo: 'hudsons@hudsons.mx',
  facebook: 'https://www.facebook.com/profile.php?id=61577573713884',
  x: 'https://x.com/HollywoodCancun',
  sitio: 'https://hollywoodencancun.com/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCotizar = wa('Hola Hollywood, quiero cotizar un evento.');

// "Más de 40 años" y "22 años en la Península" son de su portada y de "Nosotros"; 4,700+ eventos, de su portada.
export const cifras = [
  { valor: '40+', texto: 'años produciendo eventos en México y Estados Unidos' },
  { valor: '22', texto: 'años en Cancún, Mérida y la Riviera Maya' },
  { valor: '4,700+', texto: 'eventos organizados' },
];

export type Servicio = { id: string; titulo: string; foto: string; alt: string; texto: string; puntos?: string[] };

export const servicios: Servicio[] = [
  {
    id: 'fiestas-tema',
    titulo: 'Fiestas tema',
    foto: 'steampunk-avion',
    alt: 'Salón montado con escenografía de un avión antiguo saliendo de un muro de ladrillo',
    texto: 'La solución completa para tu evento especial. Por nuestra experiencia en la producción de cine y teatro, cada elemento le da a tu fiesta el toque que solo la brillantez de Hollywood te puede dar.',
    puntos: ['Manteles, cubresillas y lazos para sillas', 'Centros de mesa con o sin flores', 'Decoración de buffet y de escenarios', 'Iluminación decorativa'],
  },
  {
    id: 'bodas',
    titulo: 'Bodas',
    foto: 'boda-jardin',
    alt: 'Pasillo de jardín iluminado de noche con enredaderas, camino a una ceremonia',
    texto: 'Organizamos y gestionamos todos los aspectos de tu boda, desde la planificación inicial hasta el día del evento: presupuestos, selección del lugar, coordinación de proveedores y diseño del evento, sin el estrés que esto implica.',
    puntos: ['Scouting de locación y gestión de permisos', 'Decoración, mobiliario e iluminación', 'Coordinación de día completo', 'Entretenimiento'],
  },
  {
    id: 'actividades-grupales',
    titulo: 'Actividades grupales',
    foto: 'carrera',
    alt: 'Grupo de corredores en la meta de una carrera organizada en un hotel',
    texto: 'Dinámicas a la medida para grupos corporativos, familias y convenciones, al aire libre, en playa y jardines, dirigidas por capacitadores especializados.',
    puntos: ['Team building: rompehielo, liderazgo y comunicación', 'Club de Niños Corporativo, siempre supervisado', 'Eventos deportivos: medio maratón, carreras, fútbol y vóleibol de playa, yoga y caminatas'],
  },
  {
    id: 'entretenimiento',
    titulo: 'Entretenimiento',
    foto: 'bailarina-alas',
    alt: 'Bailarina con alas doradas sobre una tarima iluminada en un evento',
    texto: 'Espectáculos y experiencias para dar vida a tus eventos, desde presentaciones corporativas hasta shows artísticos y actividades interactivas.',
    puntos: ['Espectáculos corporativos para convenciones, lanzamientos y galas', 'Yoga, caminatas al amanecer, aeróbics acuáticos y talleres', 'Shows mexicanos, mayas o caribeños, belly dancers, circo, zanqueros, malabaristas y artistas aéreos', 'Mariachis, ballet mexicano, maya o tropical y guitarristas de flamenco'],
  },
  {
    id: 'otros-servicios',
    titulo: 'Otros servicios',
    foto: 'carpa-jardin',
    alt: 'Carpa blanca montada en el jardín de un hotel frente al mar, con arco decorado a la entrada',
    texto: 'Infraestructura, personal y estilo en un mismo lugar, para complementar la producción de tu evento.',
    puntos: ['Regalos corporativos', 'Carpas para exterior', 'Tarimas y diseño de escenario', 'Pistas de baile iluminadas', 'Staff para grupos y animadores', 'Activaciones, modelos y edecanes'],
  },
  {
    id: 'diseno-floral',
    titulo: 'Diseño floral',
    foto: 'boda-mesa',
    alt: 'Mesa larga con centro de flores blancas, copas azules y servilletas azules en un jardín',
    texto: 'Arreglos para bodas, cenas privadas, convenciones y lanzamientos: flores frescas, tropicales o de temporada, y opciones preservadas o artificiales de alta gama, desde centros de mesa hasta arcos monumentales.',
  },
];

// Las 13 temáticas de su página "Fiestas tema", en su orden.
export const tematicas = [
  'Atlantis', 'Bajo las estrellas', 'Blanco y negro', 'Carnaval veneciano', 'Fantasía de luz y cristal', 'Hollywood',
  'Mexicano', 'Maya', 'Namasté (noche hindú)', 'Noche retro', 'Paraíso caribeño', 'Steam punk', 'Villa pirata',
];

// Tipos de evento que nombra su portada ("Bodas espectaculares | Grupos de incentivo | Convenciones | Noches temáticas")
// y sus servicios.
export const tiposEvento = ['Noche temática', 'Boda', 'Grupo de incentivo', 'Convención', 'Team building', 'Lanzamiento'];

export const galeria = [
  { f: 'pista-gala', alt: 'Salón de gala con pista iluminada al centro y mesas redondas alrededor', ancho: true },
  { f: 'noche-hindu', alt: 'Bailarinas con trajes de la India sobre un escenario con fondo de luces rojas' },
  { f: 'personaje', alt: 'Actor caracterizado con sombrero de copa y abrigo largo en la entrada de un salón' },
  { f: 'salon-estrellas', alt: 'Salón iluminado en azul con estrellas colgantes y cubresillas blancas', ancho: true },
  { f: 'mural-planeta', alt: 'Escenografía de un planeta rojo en un muro, con mesas de banquete al frente' },
  { f: 'safari', alt: 'Staff caracterizado de cebra, león y otros animales de la selva' },
  { f: 'salon-dorado', alt: 'Banquete con manteles dorados y negros y estrellas amarillas colgando del techo', ancho: true },
  { f: 'mesas-desde-arriba', alt: 'Mesas redondas con centros de luz vistas desde arriba' },
  { f: 'staff-disfraces', alt: 'Equipo con sombreros de copa y chalecos posando en un evento' },
  { f: 'salon-morado', alt: 'Salón con iluminación morada y montaje de banquete', ancho: true },
  { f: 'lounge', alt: 'Sala lounge con sillones azules y mesas blancas en el lobby de un hotel' },
  { f: 'fiesta-pantallas', alt: 'Pista llena de invitados frente a pantallas de video' },
];

export const porQue = [
  { titulo: 'Servicios integrales', texto: 'Nos encargamos de todo: planeación, logística, decoración, animación, proveedores y ejecución. Tú solo disfrutas del resultado final.' },
  { titulo: 'Atención personalizada', texto: 'Nos involucramos contigo desde el primer contacto para entender tu visión, necesidades y estilo.' },
  { titulo: 'Producción escénica profesional', texto: 'Creamos ambientes impactantes con elementos visuales, iluminación y escenografía que marcan la diferencia.' },
  { titulo: 'Cobertura en Cancún, Mérida y Riviera Maya', texto: 'Playas, jardines, salones y locaciones privadas. Si aún no tienes locación, te ayudamos a encontrar la ideal.' },
];

export const preguntas = [
  { p: '¿Con cuánta anticipación debo reservar mi evento?', r: 'Lo ideal es reservar con al menos 3 a 6 meses de anticipación, especialmente si deseas una fecha en temporada alta o una boda destino. También trabajamos eventos exprés según disponibilidad.' },
  { p: '¿Pueden organizar eventos en cualquier locación?', r: 'Sí, trabajamos en playas, jardines, salones y locaciones privadas tanto en Cancún como en Mérida y la Riviera Maya. Si no tienes una locación aún, te ayudamos a encontrar la ideal.' },
  { p: '¿Pueden encargarse de todo el evento?', r: 'Sí, ofrecemos un servicio integral: desde la planificación, coordinación, decoración, ambientación temática y animación hasta la ejecución total del evento.' },
  { p: '¿Puedo personalizar el tema o decoración de mi evento?', r: '¡Por supuesto! Cada evento es único. Diseñamos escenografías, iluminación y ambientaciones totalmente personalizadas, adaptándonos a tus gustos, ideología o temática especial.' },
  { p: '¿Qué incluye una boda destino?', r: 'Planificación completa, scouting de locación, gestión de permisos, decoración, mobiliario, iluminación, coordinación de día completo, entretenimiento y más. Todo adaptado al presupuesto y visión de cada pareja.' },
  { p: '¿El presupuesto se adapta a mis necesidades?', r: 'Sí. Trabajamos eventos a la medida, ajustándonos al tipo de evento, número de personas, locación y estilo que deseas; siempre cuidamos la calidad sin perder el control del presupuesto.' },
];
