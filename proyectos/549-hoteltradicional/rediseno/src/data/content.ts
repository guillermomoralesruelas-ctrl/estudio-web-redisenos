// Contenido del Hotel Tradicional San Cristóbal (San Cristóbal de Las Casas, Chiapas).
// Textos copiados de investigacion/crudo.json (hoteltradicional.com: inicio, /tradicional.php, /servicios.php y
// /paquetes.php, 2026-09-26). Se recortaron y se corrigieron erratas ("Recorrdio", "cursiosos", "espiritú", "fé",
// "Romanticas", "atmosferas", "sevicio", "Fundacion Miguel Angel Muñoz", "De la bienvenida"…).
// Lo único que no está en crudo.json es el horario de check-in y check-out ("Después de las 15:00 hrs." y "Antes de las
// 12:00 hrs."), tomado con curl el 2026-09-27 de /terminos-condiciones.php, y el enlace de su motor de reservas
// (nobeds.app), tomado del iframe de /reserva.php el mismo día, y el título "¡Hospédate con Nosotros!" de /contacto.php
// (en App.tsx). Ver CAMBIOS.md.
// Lo nuevo (títulos, botones, mensajes de WhatsApp y textos de "Teje tu viaje") está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** El WhatsApp de su botón "Necesito información" (529676316216). */
export const WA = '529676316216';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
/** Su propio mensaje ("Estoy interesado en reservar una habitación!..."), con saludo y sin los puntos suspensivos. */
export const mensajeBase = 'Hola, estoy interesado en reservar una habitación en el Hotel Tradicional.';

export const hotel = {
  nombre: 'Hotel Tradicional San Cristóbal',
  corto: 'Hotel Tradicional',
  reservar: 'https://nobeds.app/DirectForm/Step/1508168107',
  whatsapp: wa(mensajeBase),
  telefono: { visible: '967 631 6851', href: 'tel:+529676316851' },
  whatsappVisible: '967 631 6216',
  email: 'reserva@hoteltradicional.com',
  direccion: 'Calle 1ro. de Marzo 58, Barrio de La Merced, San Cristóbal de Las Casas, Chiapas, México',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Tradicional+San+Crist%C3%B3bal%2C+Calle+1ro.+de+Marzo+58%2C+Barrio+de+La+Merced%2C+San+Crist%C3%B3bal+de+las+Casas%2C+Chiapas',
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/HotelTradicionalSC' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/HotelTradicionalSC' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/channel/UCMwYee0EBFBSVZp06vuZ44w' },
  ],
  legales: [
    { nombre: 'Términos y condiciones', url: 'https://www.hoteltradicional.com/terminos-condiciones.php' },
    { nombre: 'Aviso de privacidad', url: 'https://www.hoteltradicional.com/aviso-privacidad.php' },
  ],
  // /terminos-condiciones.php (curl, 2026-09-27)
  checkIn: '15:00',
  checkOut: '12:00',
  logo: f('logo-hotel-tradicional', 261, 74, 'Hotel Tradicional San Cristóbal'),
  frase: 'Permítanos atenderle y hacer de su estancia en San Cristóbal de Las Casas un recuerdo inolvidable.',
};

export const fotos = {
  pasillo: f('pasillo-vitrinas', 1200, 600, 'Pasillo del hotel de noche, con vitrinas de trajes tradicionales chiapanecos a los dos lados, macetas con plantas y faroles colgando del techo'),
  habitacion: f('habitacion', 1200, 600, 'Habitación con dos camas matrimoniales de cabecera de madera, colchas blancas con cojines azules y una lámpara encendida en el buró'),
  telar: f('telar-de-cintura', 1200, 600, 'Figura con traje tradicional de mujer de Zinacantán tejiendo en un telar de cintura, frente a una pared de madera; una cédula dice "Telar de cintura"'),
  ciudad: f('san-cristobal-andador', 1600, 969, 'Foto de la ciudad, no del hotel: andador de San Cristóbal de Las Casas al amanecer, con casas de colores, faroles encendidos y un templo entre la niebla al fondo'),
};

export const bienvenida = {
  titulo: 'Bienvenidos al Hotel Tradicional San Cristóbal',
  textos: [
    'Hotel Tradicional San Cristóbal se erige sobre una porción de tierra mágica en el antiguo barrio de La Merced, uno de los barrios más representativos de la ciudad, y a tan solo 4 cuadras de la emblemática Catedral de San Cristóbal, el punto de encuentro más referente para los sancristobalenses y sus visitantes.',
    'La casona que alberga nuestras instalaciones posee un hermoso jardín en el interior, y todas nuestras habitaciones cuentan con los servicios necesarios para recibirlo como se merece.',
  ],
};

export const servicios = {
  titulo: 'Confort y descanso',
  texto: 'Hotel Tradicional San Cristóbal le ofrece una selecta variedad de servicios para una estancia inolvidable en San Cristóbal de Las Casas.',
  lista: [
    'Instalaciones inclusivas',
    'Internet inalámbrico',
    'Estacionamiento',
    'Servicio de lavandería',
    'Servicio médico',
    'Room service',
    'Recorridos turísticos',
    'Traslados al aeropuerto',
    'Souvenirs',
    'Organización de eventos',
  ],
  habitaciones: 34,
};

export const coleccion = {
  titulo: 'Hotel temático, un concepto diferente',
  // En su sitio este texto dice "Hotel Misión Colonial San Cristóbal" (ver CAMBIOS.md → pendientes); aquí se escribe "el hotel".
  textos: [
    'Todos nuestros espacios están diseñados para representar una parte de la historia y raíces chiapanecas que fundamentan sus expresiones en el arte textil de los grupos étnicos del estado.',
    'Originalmente, la propiedad fungía como la única vecindad que existía en San Cristóbal de Las Casas en el siglo XIX. Dentro de nuestros espacios disfrutará del ambiente colonial de Chiapas, matizado con su arte, gastronomía y el espíritu histórico que evoca constantemente la creación humana en las diversas disciplinas del arte textil antiguo.',
  ],
  rescate: 'En colaboración con la Fundación Miguel Ángel Muñoz, el hotel ha logrado rescatar más de 1300 piezas pertenecientes a los distintos grupos étnicos de Chiapas. Inaugurada en 2011, su curaduría estuvo a cargo de Jan de Vos, Miguel Ángel Muñoz, Walter Morris y Dilery Penagos.',
  piezas: '1300',
  salas: [
    { nombre: 'Indumentaria textil', texto: 'Nuestra colección alberga trajes completos de hombre y mujer desde 1930 hasta 1990.' },
    { nombre: 'Máscaras ceremoniales', texto: 'Nuestra colección de máscaras chiapanecas concentra el legado de la cultura zoque y tsotsil.' },
    { nombre: 'Arte utilitario', texto: 'Herramientas de trabajo de campo, de cacería, juguetes, entre otros curiosos detalles indígenas.' },
  ],
};

// ---------- Tours diarios (circuitos) y paquetes: /servicios.php y /paquetes.php ----------

export type CircuitoId = 'c1' | 'c2' | 'c3' | 'c4' | 'c5';
export const circuitos: { id: CircuitoId; nombre: string; texto: string; corto: string }[] = [
  { id: 'c1', nombre: 'Circuito 1', corto: 'Cañón del Sumidero', texto: 'Recorrido por el Cañón del Sumidero y Chiapa de Corzo.' },
  { id: 'c2', nombre: 'Circuito 2', corto: 'Montebello y El Chiflón', texto: 'Recorrido por las Lagunas de Montebello y la Cascada de El Chiflón.' },
  { id: 'c3', nombre: 'Circuito 3', corto: 'Palenque y Agua Azul', texto: 'Recorrido por las Ruinas de Palenque y las cascadas de Agua Azul y Misol-Ha.' },
  { id: 'c4', nombre: 'Circuito 4', corto: 'Chamula y Zinacantán', texto: 'Recorrido por los pueblos indígenas de Chamula y Zinacantán.' },
  { id: 'c5', nombre: 'Circuito 5', corto: 'Bonampak y Yaxchilán', texto: 'Recorrido por los sitios arqueológicos de Bonampak y Yaxchilán.' },
];

/** Cada renglón del paquete, tal como lo escribe su sitio, con el tipo de franja que le toca en el dibujo. */
export type Renglon =
  | { tipo: 'noches'; n: number; enPalenque?: number; texto: string }
  | { tipo: 'desayunos'; texto: string }
  | { tipo: 'tour'; circuito: CircuitoId; texto: string }
  | { tipo: 'comida'; texto: string }
  | { tipo: 'detalle'; texto: string }
  | { tipo: 'souvenirs'; texto: string };

export type Paquete = { id: string; nombre: string; desde: number; por: 'persona' | 'pareja'; renglones: Renglon[] };

const souvenirs: Renglon = { tipo: 'souvenirs', texto: 'Souvenirs de obsequio' };
const desayunos: Renglon = { tipo: 'desayunos', texto: 'Desayunos americanos incluidos' };
const t = (circuito: CircuitoId, texto: string): Renglon => ({ tipo: 'tour', circuito, texto });
const sumidero = t('c1', 'Tour a Cañón del Sumidero y Chiapa de Corzo');
const palenque = t('c3', 'Tour a Cascadas de Agua Azul y Z.A. de Palenque');
const montebello = t('c2', 'Tour a Lagos de Montebello y Cascada de El Chiflón');
const comunidades = t('c4', 'Tour a comunidades indígenas');

export const paquetes: Paquete[] = [
  {
    id: 'magico', nombre: 'Chiapas Mágico', desde: 3000, por: 'persona',
    renglones: [
      { tipo: 'noches', n: 4, texto: '4 noches de hospedaje' },
      { tipo: 'desayunos', texto: 'Desayunos incluidos' },
      palenque, sumidero, comunidades, souvenirs,
    ],
  },
  {
    id: 'tres-dias', nombre: 'Chiapas en 3 Días', desde: 2350, por: 'persona',
    renglones: [{ tipo: 'noches', n: 3, texto: '3 noches de hospedaje' }, desayunos, sumidero, palenque, souvenirs],
  },
  {
    id: 'bellezas', nombre: 'Bellezas Naturales de Chiapas', desde: 2100, por: 'persona',
    renglones: [{ tipo: 'noches', n: 3, texto: '3 noches de hospedaje' }, desayunos, sumidero, montebello, souvenirs],
  },
  {
    id: 'luna-de-miel', nombre: 'Paquete Luna de Miel', desde: 4700, por: 'pareja',
    renglones: [
      { tipo: 'noches', n: 3, texto: '3 noches de hospedaje' },
      { tipo: 'desayunos', texto: 'Desayunos incluidos' },
      { tipo: 'detalle', texto: 'Decoración en habitación y botella de vino' },
      sumidero, montebello, souvenirs,
    ],
  },
  {
    id: 'selva', nombre: 'Selva Misteriosa', desde: 3850, por: 'persona',
    renglones: [{ tipo: 'noches', n: 5, texto: '5 noches de hospedaje' }, desayunos, palenque, montebello, sumidero, comunidades, souvenirs],
  },
  {
    id: 'todo', nombre: 'Todo Chiapas', desde: 6050, por: 'persona',
    renglones: [
      { tipo: 'noches', n: 7, enPalenque: 2, texto: '7 noches de hospedaje (2 en Palenque)' },
      desayunos,
      { tipo: 'comida', texto: '1 comida en la Selva' },
      palenque, montebello, sumidero,
      t('c5', 'Tour a los sitios de Yaxchilán y Bonampak'),
      comunidades, souvenirs,
    ],
  },
];

export const experiencias = {
  titulo: 'Experiencias exclusivas',
  texto: 'Hotel Tradicional San Cristóbal te invita a disfrutar de experiencias extraordinarias y exclusivas, que harán de tu estancia en San Cristóbal de Las Casas un recuerdo inolvidable.',
  lista: [
    { nombre: 'De Conventos y Mistelas', texto: 'Recorra vestido de monje la ciudad conociendo todos sus secretos.' },
    { nombre: 'Cenas románticas', texto: 'Disfrute de una elegante cena en nuestra hermosa pérgola.' },
    { nombre: 'Cata de Pox y Mistelas', texto: 'Aprenda a degustar las bebidas tradicionales y ancestrales de Chiapas.' },
    { nombre: 'Museo de Historia y Curiosidades de San Cristóbal', texto: 'Recorrido guiado por el museo.' },
    { nombre: 'Chiapas Étnico. Museo de Textiles Chiapanecos', texto: 'Recorrido iconográfico de las piezas.' },
    { nombre: 'Limpias tradicionales', texto: 'Dé la bienvenida de una manera original a su grupo en el hotel.' },
    { nombre: 'Show cooking', texto: 'Disfrute de una demostración culinaria de comida sancristobalense.' },
    { nombre: 'Panzudos Mercedarios', texto: 'Sea parte del Anuncio Mercedario, el más grande de la ciudad.' },
  ],
};

/** Opiniones publicadas en su inicio, con sus nombres. Se recortaron ([…]) las frases con precios de una estancia pasada y se deja fuera la que habla de las medidas por COVID. */
export const opiniones = [
  { nombre: 'Rosa María Amezcua', texto: 'Es un hotel hermoso, con museo de trajes típicos, muy cómodo, perfecto para descansar, ampliamente recomendado. […] A 3 cuadras del jardín principal. Con estacionamiento.' },
  { nombre: 'Julio César De la Paz', texto: 'Independientemente del servicio de alojamiento, este hotel es peculiar porque también te narra parte de la historia y la diversidad cultural de Chiapas. Por sus pasillos, cuenta con una amplia galería entre imágenes y vestimenta de los grupos étnicos del Estado, hicieron que mi estancia fuera agradable. […] La atención súper amable y el personal siempre servicial. La ubicación es excelente, a pocos metros del centro histórico.' },
  { nombre: 'Ángel Valenzuela Yzquierdo', texto: 'Aparte que está en el corazón de San Cristóbal de las Casas, en el hermoso estado de Chiapas, tiene a bien tener como una puerta de bienvenida una exhibición permanente de los trajes regionales que se usan en Chiapas. Gracias por tan cálido recibimiento que enamora los sentidos.' },
  { nombre: 'Arturo Borja Jaramillo', texto: 'Me encantó, su temática colonial es perfecta. Aparte su buffet es exquisito.' },
];

export const ciudad = {
  titulo: 'Descubra San Cristóbal',
  textos: [
    'Capital cultural del estado de Chiapas, San Cristóbal de Las Casas es una de las ciudades coloniales que aún conserva sus plazuelas, calles empedradas, techos de teja roja, así como los tradicionales mercados en donde coinciden indígenas de la región para ofrecer al público desde cultivos hasta cerámicas, o bien sus tradicionales textiles llenos de colorido.',
    'Su nombre hace honor al obispo fray Bartolomé de las Casas, defensor de los indígenas del lugar durante el siglo XVI.',
  ],
};

export const ambiental = {
  titulo: 'Compromiso ambiental',
  texto: 'Nuestro compromiso con el planeta y el entorno nos inspira a realizar acciones con responsabilidad para disminuir el impacto de nuestras operaciones en el medio ambiente.',
  grupos: [
    { nombre: 'Reducción de emisiones de CO2', puntos: ['Integrantes con movilidad verde', 'Planificación de metas con un Plan Ambiental Anual', 'Capacitación constante a nuestro personal'] },
    { nombre: 'Reducción del consumo de energía', puntos: ['Rótulos exteriores con tecnología LED', 'Pantallas LED de bajo consumo', 'Focos ahorradores en todas nuestras instalaciones', 'Producción de agua caliente de acuerdo a ocupación', 'Segmentación de iluminación de acuerdo a ocupación'] },
    { nombre: 'Energías renovables', puntos: ['Control de iluminación por sensores', 'Instalaciones adaptadas automáticamente a luz natural y ocupación'] },
    { nombre: 'Reducción en consumo de agua', puntos: ['Sistema de captación de agua pluvial', 'Grifos, regaderas e inodoros más eficientes', 'Reutilización de agua para riego'] },
    { nombre: 'Protección a la biodiversidad', puntos: ['Evaluación medioambiental de proveedores', 'Café procedente de comercio justo', 'Preparación de alimentos con ingredientes ecológicos', 'Buenas prácticas ecológicas en nuestras oficinas', 'Lavandería con sistema inteligente de uso de agua y detergentes', 'Salas de reuniones con opción Ecomeeting'] },
    { nombre: 'Reducción de residuos sólidos', puntos: ['Separación y reciclado de nuestros residuos sólidos', 'Dispensadores de shampoo y jabón en habitaciones', 'Bolsas ecológicas y rollos de papel biodegradables'] },
  ],
  /** Los logos que su sitio publica (inicio y /tradicional.php). Vigencia pendiente de confirmar. */
  distintivos: ['Distintivo H', 'Distintivo M', 'Punto Limpio', 'Safe Travels (World Travel & Tourism Council)', 'Cambio Ambiental Empresarial', 'Pacto Mundial de la ONU', 'Marca Chiapas'],
};
