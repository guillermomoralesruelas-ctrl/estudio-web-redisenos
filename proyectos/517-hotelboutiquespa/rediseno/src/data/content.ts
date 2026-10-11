// Contenido de Hotel Boutique & Spa Valle de Guadalupe. Fuente: hoteldelvalledeguadalupe.com (inicio, habitaciones y las 17 fichas,
// spa Luna de Sol, Fuego Cocina del Valle, Valle Omakase, Equitarius, Valle Tours, bodas, paquetes de decoración, reserva directa,
// ubicación, nosotros y contacto), leído el 2026-10-11. El sitio está en inglés: aquí se tradujo al español.
// No se inventan datos: lo que falta queda como [PENDIENTE]. Sin promesas de salud.

export const negocio = {
  nombre: 'Hotel Boutique & Spa Valle de Guadalupe',
  corto: 'Hotel Boutique Valle de Guadalupe',
  direccion: 'Privada de los Ranchos #1, Parcela 7, Poblado Francisco Zarco, Ensenada, B.C., C.P. 22750',
  telefonos: [
    { t: '+52 646 145 2967', link: '+526461452967', nota: 'Reservaciones' },
    { t: '+52 646 155 2164', link: '+526461552164', nota: 'Reservaciones y Equitarius' },
  ],
  concierge: { t: '+52 646 116 6351', link: '+526461166351' },
  whatsapp: '526461452967',
  correo: 'ventas@hoteldelvalledeguadalupe.com',
  correoContacto: 'contacto@hoteldelvalledeguadalupe.com',
  horario: 'Agentes disponibles los 365 días del año, de 8:00 a 22:00',
  reservar: 'https://reservations.easy-rez.com/v2/hotel-boutique-valle-de-guadalupe/en/home',
  mapa: 'https://goo.gl/maps/p8FeBk511PhdebvA9',
  facebook: 'https://facebook.com/HotelBoutiqueValledeGuadalupe',
  instagram: 'https://www.instagram.com/hotelboutiquevalledegpe',
  tripadvisor: 'https://tripadvisor.com/Hotel_Review-g499403-d2647343-Reviews-Hotel_Boutique_Valle_de_Guadalupe-Valle_de_Guadalupe_Ensenada_Municipality_Baja_Califo.html',
};

export const intro = [
  'Un hotel boutique rodeado de viñedos, naturaleza y la gastronomía de la Ruta del Vino. Comodidad, privacidad y diseño para una estancia tranquila y auténtica.',
  'Está cerca de vinícolas y restaurantes premiados, y suma spa, yoga, paseos a caballo, dos restaurantes propios y espacios para bodas en una de las regiones vinícolas más importantes de México.',
];

export type Habitacion = {
  id: string;
  nombre: string;
  camas: string;
  adultos: number | null; // máximo de adultos que indica la ficha
  ninos: number | null;   // máximo de niños (hasta 12 años); null = la ficha no lo indica
  total: number | null;   // fichas que solo dicen "hasta N huéspedes"
  m2?: number;
  rasgos: string[];
  extras: Extra[];
  fotos: [string, string];
  alt: [string, string];
  porConfirmar?: string;
};

export type Extra = 'terraza' | 'fogata' | 'jacuzzi' | 'cocina' | 'tina' | 'dos-recamaras' | 'tv';

export const extrasNombre: Record<Extra, string> = {
  terraza: 'Terraza privada',
  fogata: 'Fogata',
  jacuzzi: 'Jacuzzi',
  cocina: 'Cocina',
  tina: 'Tina de baño',
  'dos-recamaras': 'Dos recámaras',
  tv: 'TV',
};

// Servicios que repiten casi todas las fichas.
export const enTodas = ['Aire acondicionado', 'Wi-Fi gratis', 'Baño completo con amenidades', 'Secadora de pelo', 'Estacionamiento gratis', 'Concierge para peticiones especiales'];

export const habitaciones: Habitacion[] = [
  {
    id: 'classic', nombre: 'Classic', camas: '1 cama matrimonial', adultos: 2, ninos: null, total: null,
    rasgos: ['Ventilador de techo', 'Plancha y burro', 'Servicio de café y té', 'Regadera tipo lluvia'], extras: [],
    fotos: ['classic', 'classic-2'], alt: ['Habitación Classic con cama, ventilador de techo y ventana al jardín', 'Habitación Classic con muro de piedra y vigas de madera'],
  },
  {
    id: 'superior-suite', nombre: 'Superior Suite con terraza', camas: '1 cama king y 1 sofá', adultos: 2, ninos: null, total: null,
    rasgos: ['Terraza con fogata', 'TV', 'Regadera tipo lluvia', 'Servicio de café y té'], extras: ['terraza', 'fogata', 'tv'],
    fotos: ['superior-suite', 'superior-suite-terraza'], alt: ['Superior Suite con cama king, techo de carrizo y luz cálida', 'Terraza de la Superior Suite con sillones de mimbre y fogata entre los árboles'],
  },
  {
    id: 'jr-deluxe', nombre: 'Junior Suite Deluxe', camas: '1 cama king y 1 futón', adultos: 2, ninos: 2, total: null,
    rasgos: ['Ventilador de techo', 'Regadera tipo lluvia', 'Servicio de café y té'], extras: [],
    fotos: ['jr-deluxe', 'jr-deluxe-2'], alt: ['Junior Suite Deluxe con chimenea eléctrica y pantalla', 'Sala de la Junior Suite Deluxe con sillones y un cuadro de caballo'],
  },
  {
    id: 'deluxe-studio', nombre: 'Deluxe Studio con terraza', camas: '1 cama queen y 1 futón', adultos: 3, ninos: 2, total: null,
    rasgos: ['Terraza', 'Amenidades tipo spa', 'Regadera tipo lluvia'], extras: ['terraza'],
    fotos: ['deluxe-studio', 'deluxe-studio-terraza'], alt: ['Deluxe Studio con cama queen y muro de piedra', 'Terraza de madera del Deluxe Studio con sillones entre los árboles'],
  },
  {
    id: 'jr-terraza', nombre: 'Junior Suite con terraza', camas: '1 cama king y 1 sofá', adultos: 2, ninos: null, total: null,
    rasgos: ['Terraza con fogata', 'TV', 'Amenidades tipo spa'], extras: ['terraza', 'fogata', 'tv'],
    fotos: ['jr-terraza', 'jr-terraza-2'], alt: ['Junior Suite con chimenea eléctrica empotrada en piedra', 'Edificio de las Junior Suites con terrazas y pérgolas de madera'],
  },
  {
    id: 'superior-villa', nombre: 'Superior Villa con tina', camas: '1 cama king y sofá cama', adultos: null, ninos: null, total: 3, m2: 70,
    rasgos: ['Tina de baño', 'Terraza privada con vista al jardín', 'Aire y calefacción', 'Recámara privada'], extras: ['terraza', 'tina'],
    fotos: ['superior-villa', 'superior-villa-tina'], alt: ['Superior Villa con cama king y sala', 'Tina de patas junto al ventanal de la Superior Villa'],
  },
  {
    id: 'doble-king', nombre: 'Double King Executive Suite', camas: '2 camas king y 1 futón', adultos: null, ninos: null, total: 5, m2: 30,
    rasgos: ['Terraza privada con vista al jardín', 'Recámara privada'], extras: ['terraza'],
    fotos: ['doble-king', 'doble-king-2'], alt: ['Sala de la Double King Executive Suite con sofá y cuadro de caballo', 'Terraza de la Double King Executive Suite con plantas'],
  },
  {
    id: 'governor-one', nombre: 'Governor de una recámara', camas: '1 cama king y sofá cama', adultos: null, ninos: null, total: 3, m2: 70,
    rasgos: ['Terraza privada con vista al jardín', 'Aire y calefacción', 'Recámara privada'], extras: ['terraza'],
    fotos: ['governor-one', 'governor-one-2'], alt: ['Recámara de la Governor con cortinas y ventanal a la terraza', 'Comedor de la Governor con barra y ventana'],
  },
  {
    id: 'governor-two', nombre: 'Governor de dos recámaras', camas: '1 cama king en una recámara y 2 camas king en la otra, 2 futones', adultos: null, ninos: null, total: 8, m2: 100,
    rasgos: ['Jacuzzi', 'Cocina equipada con comedor', 'Jardín amplio con fogata', 'TV, minibar y escritorio', 'Aire y calefacción'], extras: ['terraza', 'fogata', 'jacuzzi', 'cocina', 'dos-recamaras', 'tv'],
    fotos: ['governor-two', 'governor-two-cocina'], alt: ['Jacuzzi junto a la cama en la Governor de dos recámaras', 'Cocina equipada de la Governor de dos recámaras'],
  },
  {
    id: 'grand-deluxe', nombre: 'Grand Deluxe Villa', camas: '1 cama king y sofá cama en la sala', adultos: 2, ninos: 2, total: null,
    rasgos: ['Sala', 'Amenidades de spa', 'Regadera tipo lluvia', 'Servicio de café y té'], extras: [],
    fotos: ['grand-deluxe', 'grand-deluxe-2'], alt: ['Grand Deluxe Villa con cama king y ventanales al viñedo', 'Villas Grand Deluxe iluminadas al anochecer entre los viñedos'],
  },
  {
    id: 'master-grand', nombre: 'Master Grand Deluxe', camas: '1 cama king y sofá cama', adultos: 4, ninos: null, total: null,
    rasgos: ['Ventilador de techo', 'Regadera tipo lluvia', 'Servicio de café y té'], extras: [],
    fotos: ['master-grand', 'master-grand-2'], alt: ['Master Grand Deluxe con cama king y escritorio', 'Vista aérea de las villas, la alberca y los viñedos'],
  },
  {
    id: 'penthouse-1', nombre: 'Penthouse con una cama', camas: '1 cama king', adultos: 2, ninos: null, total: null,
    rasgos: ['Área de descanso en el baño', 'Amenidades tipo spa'], extras: [],
    fotos: ['penthouse-1', 'penthouse-1-2'], alt: ['Penthouse con cama king y ventanal', 'Sala del Penthouse con sillón de piel y cuadro de caballo'],
  },
  {
    id: 'penthouse-2-camas', nombre: 'Penthouse con dos camas', camas: '2 camas king y 1 futón', adultos: 4, ninos: 2, total: null,
    rasgos: ['Amenidades tipo spa'], extras: [],
    fotos: ['penthouse-2-camas', 'penthouse-2-camas-2'], alt: ['Penthouse con dos camas king y piso de madera', 'Penthouse con ventanal abierto a la terraza y al cerro'],
  },
  {
    id: 'penthouse-2-recamaras', nombre: 'Penthouse con dos recámaras', camas: '[PENDIENTE]', adultos: null, ninos: null, total: null,
    rasgos: [], extras: ['dos-recamaras'],
    fotos: ['penthouse-2-recamaras', 'penthouse-2-recamaras-2'], alt: ['Penthouse con dos recámaras y ventanal', 'Sala amplia del Penthouse con dos recámaras'],
    porConfirmar: 'La ficha actual repite los datos del Deluxe Studio; camas y capacidad por confirmar con el hotel.',
  },
  {
    id: 'garden-master', nombre: 'Garden Master Villa', camas: '2 camas king', adultos: 4, ninos: 2, total: null,
    rasgos: ['Terraza con jardín', 'Amenidades tipo spa'], extras: ['terraza'],
    fotos: ['garden-master', 'master-grand-2'], alt: ['Garden Master Villa con dos camas king', 'Vista aérea de las villas, la alberca y los viñedos'],
  },
  {
    id: 'presidencial-1', nombre: 'Suite Presidencial de una recámara', camas: '1 cama king y 1 futón', adultos: 2, ninos: 2, total: null,
    rasgos: ['Jacuzzi', 'Cocina y comedor', 'Terraza grande con jardín y fogata', 'Área de descanso'], extras: ['terraza', 'fogata', 'jacuzzi', 'cocina'],
    fotos: ['presidencial-1', 'presidencial-1-jacuzzi'], alt: ['Sala y comedor de la Suite Presidencial', 'Jacuzzi de la Suite Presidencial con ventanal'],
  },
  {
    id: 'presidencial-2', nombre: 'Suite Presidencial de dos recámaras', camas: '1 cama king y futón en una recámara, 2 camas king en la otra', adultos: 6, ninos: 2, total: null,
    rasgos: ['Dos baños completos', 'Jacuzzi', 'Cocina y comedor', 'Terraza grande con jardín y fogata'], extras: ['terraza', 'fogata', 'jacuzzi', 'cocina', 'dos-recamaras'],
    fotos: ['presidencial-2', 'presidencial-2-sala'], alt: ['Jardín privado de la Suite Presidencial con sillones rojos y cactus', 'Sala de la Suite Presidencial con muro de leña'],
  },
];

export const amenidades = [
  'Alberca en la sección Hacienda & Herradura',
  'Alberca en la sección Entre Viñedos',
  'Alberca infinita privada del spa Luna de Sol',
  'Vapor, sauna y jacuzzi privados del spa',
  'Shala de yoga',
  'Cena de cuatro tiempos en Fuego',
  'Cena en Valle Omakase',
  'Cabalgata a los viñedos y clases de equitación',
  'Cata de vinos',
  'Paseos en bicicleta',
  'Habitaciones con fogata',
];

export const spa = {
  texto: [
    'Un espacio de bienestar pensado para el descanso, con vista a los viñedos, la alberca infinita y el paisaje del valle. Té de su huerto orgánico, masajes, faciales y amenidades para desconectarse por completo.',
    'También recibe grupos, eventos y bodas: sesiones de yoga, transporte, hospedaje y huerto orgánico.',
  ],
  servicios: [
    { t: 'Bienestar', d: 'Pase de día, spa, yoga y baño de sonido' },
    { t: 'Masajes y faciales', d: 'En las cabinas del spa' },
    { t: 'Experiencias', d: 'Paquetes, ceremonia del cacao, bendición de bebé y de cumpleaños, certificados de regalo' },
    { t: 'Botánica', d: 'Botica y herbolaria' },
    { t: 'Huerto', d: 'Experiencia en el huerto y canasta orgánica' },
  ],
};

export const restaurantes = [
  {
    nombre: 'Fuego Cocina del Valle', tipo: 'Vino y cocina del valle',
    texto: 'Cocina de ingredientes locales y de temporada, con productos de su huerto orgánico y filosofía de la granja a la mesa. Música en vivo en sus terrazas.',
    terrazas: [
      { t: 'Terraza principal', d: 'Ambiente acogedor, vino, cocina y música en vivo entre viñedos.' },
      { t: 'Terraza del atardecer', d: 'Para ver la puesta de sol sobre el valle.' },
      { t: 'Terraza VIP', d: 'Espacio privado para celebraciones, con vista a los viñedos.' },
    ],
    fotos: ['fuego-terraza', 'fuego-platillo'] as [string, string],
    alt: ['Terraza de Fuego con salas, palmeras y alberca al atardecer', 'Corte de carne con verduras y copa de vino tinto'] as [string, string],
  },
  {
    nombre: 'Valle Omakase', tipo: 'Cocina japonesa con ingredientes del valle',
    texto: '"Omakase" significa "lo que elija el chef". Un menú de degustación de sushi creado por el chef Antonio Quindere con ingredientes de origen sustentable.',
    chef: 'El chef Quindere estudió y trabajó en Tokio, en el Four Seasons de Seychelles, Hawái, San Diego y Miami, y ha sido chef consultor de Cuixmala (Jalisco) y del grupo Oasis en Manzanillo. Trabajó junto a Nobu Matsuhisa en Miami y estudió cocina nikkei y cebiche en Lima.',
    fotos: ['omakase-2', 'chef'] as [string, string],
    alt: ['Nigiris de pescado con wasabi y jengibre', 'El chef preparando sushi en la barra'] as [string, string],
  },
];

export const experiencias = [
  { t: 'Equitarius, club ecuestre', d: 'Clases de equitación, cabalgatas por el valle, entrenamiento de caballos, sesiones de fotos y membresía anual. Para jinetes de todos los niveles.', foto: 'salto', alt: 'Jinete saltando un obstáculo en el picadero' },
  { t: 'Valle Tours', d: 'Recorridos por la Ruta del Vino en grupo o privados, eventos, experiencias y servicio de transporte.', foto: 'tours-cata', alt: 'Grupo brindando con vino en una barra de madera' },
  { t: 'Cata en Viña Crepúsculo', d: 'Cata de vinos del valle.', foto: 'cata', alt: 'Amigos brindando con copas de vino entre los viñedos' },
  { t: 'Paseos en bicicleta', d: 'Rutas entre viñedos y agaves.', foto: 'bicicletas', alt: 'Pareja paseando en bicicleta por un camino de tierra' },
];

export const bodas = {
  texto: 'Jardines rodeados de viñedos para bodas y eventos, desde la ceremonia civil hasta el hospedaje de los invitados, con la cocina y el ambiente del valle en cada celebración.',
  parejas: ['Karen y Edgar', 'Roxanna y Albert', 'Angélica e Issac'],
};

export const decoraciones = {
  texto: 'Para cumpleaños, aniversarios o cualquier celebración: sorprende a tu pareja o a tus amigos con la habitación decorada.',
  paquetes: [
    ['Ramo de 48 rosas', 'Botella de vino', '20 globos con helio'],
    ['Arreglo de 24 rosas', 'Botella de vino', 'Pétalos de rosa', '25 globos sin helio'],
    ['Arreglo de 24 rosas', 'Letrero de globos (feliz cumpleaños o aniversario)', '50 globos con helio', 'Botella de vino'],
    ['Ramo de 48 rosas', 'Letrero de globos', 'Pétalos de rosa', '50 globos con helio', '1 docena de fresas con chocolate'],
    ['Arreglo de 24 rosas', 'Letrero de globos', 'Botella de vino', 'Pétalos de rosa', '50 globos con helio', 'Tabla de quesos y carnes frías'],
  ],
  condiciones: ['Se pagan completos antes de la llegada.', 'Se reservan con al menos una semana de anticipación.', 'No incluyen el florero.', 'Precios: [PENDIENTE] (el sitio no los publica).'],
};

export const comoLlegar = [
  { t: 'Del aeropuerto de Tijuana a Ensenada', pasos: ['Sal del aeropuerto por la Av. Vía de la Juventud y, con la barda fronteriza enfrente, gira a la izquierda.', 'La avenida cambia a Lázaro Cárdenas; sigue unos 2 km hasta la Av. Cuauhtémoc y gira a la izquierda (hacia el sur).', 'La avenida se convierte en la carretera federal 1 (escénica de cuota) hacia Ensenada: aproximadamente 1 h 25 min.'] },
  { t: 'De Ensenada a Valle de Guadalupe', pasos: ['Unos 3 km después de la caseta toma la salida a la carretera federal 3 (salida a Tecate).', 'Sigue unos 26 km, cruza el río Guadalupe y llega a la "Y" en Francisco Zarco.', 'Toma el ramal izquierdo y avanza unos 5 km, pasando Monte Xanic y el Parque Niño Jersey.'] },
  { t: 'De El Porvenir al hotel', pasos: ['Al entrar a El Porvenir gira a la derecha junto a la unidad del IMSS y sigue unos 3 km, pasando Adobe Guadalupe y Emevé.', 'Dos cuadras después de Emevé gira a la derecha en el Camino de los Ranchos (una cuadra antes de Bodega Barón Balché).', 'Sigue aproximadamente 1 km hasta el final del camino: el hotel está a tu izquierda.'] },
];
