// Contenido de Hacienda La Magdalena (Zapopan, Jalisco), tomado del sitio original: clon en ../sitio, investigacion/crudo.json
// y las páginas leídas en vivo el 2026-09-28 (entregables/textos-sitio-en-vivo-2026-09-28.txt): inicio, historia,
// habitaciones, servicios, paquetes, promociones, cenas románticas, extras, eventos, empresas, spa y contacto.
// Regla: nada inventado. Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Hacienda La Magdalena',
  // Su sitio no publica WhatsApp: se usa el primer teléfono de su página de contacto (pendiente de confirmar, ver CAMBIOS.md).
  whatsapp: '523338970648',
  telefonos: [
    { texto: '33 3897 0648', href: 'tel:+523338970648' },
    { texto: '33 3897 0392', href: 'tel:+523338970392' },
  ],
  direccion: 'Carretera Colotlán No. 1701 Km 1.7, Col. La Magdalena, Zapopan, Jalisco, C.P. 45200',
  // El mapa incrustado de su página de contacto (Google Maps, ficha "Hacienda La Magdalena").
  mapaIframe:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3729.831127794741!2d-103.46074408863833!3d20.798118743121325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13782af7cb9d0177!2sHacienda%20La%20Magdalena!5e0!3m2!1ses-419!2smx!4v1587161965202!5m2!1ses-419!2smx',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hacienda La Magdalena, Carretera Colotlán 1701, Zapopan, Jalisco'),
  lat: 20.798118743121325,
  lng: -103.46074408863833,
  facebook: 'https://www.facebook.com/HaciendaLaMagdalenaHotel/',
  instagram: 'https://www.instagram.com/haciendalamagdalena/',
  youtube: 'https://www.youtube.com/watch?v=R4TRuw0DACo',
  tripadvisor: 'https://www.tripadvisor.com.mx/Hotel_Review-g150798-d629913-Reviews-Hacienda_La_Magdalena_Boutique_Hotel-Guadalajara_Guadalajara_Metropolitan_Area.html',
  sitio: 'https://www.haciendalamagdalena.com/',
};

// Los correos de su página de contacto, por área.
export const correos = [
  { area: 'Información general', correos: ['coordinacion@haciendalamagdalena.com', 'concierge@haciendalamagdalena.com'] },
  { area: 'Eventos sociales', correos: ['ventas@haciendalamagdalena.com', 'info@haciendalamagdalena.com', 'eventos@haciendalamagdalena.com'] },
  { area: 'Eventos empresariales', correos: ['empresariales@haciendalamagdalena.com'] },
  { area: 'Spa', correos: ['spatierraslejanas@gmail.com'] },
];

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waHola = wa('Hola, me comunico desde su sitio web. Quisiera información para hospedarme en Hacienda La Magdalena.');

export type Habitacion = {
  id: string;
  nombre: string;
  cuantas: number;
  corto: string;
  texto: string;
  detalles: string[];
  foto?: string;
  alt?: string;
};

// Su página de habitaciones: 10 alcobas, 1 alcoba adaptada, 10 suites con jacuzzi, 2 master suites y 1 suite presidencial.
// (Su página de servicios dice "7 alcobas" y "1 master suite"; ver CAMBIOS.md.)
export const habitaciones: Habitacion[] = [
  {
    id: 'alcoba', nombre: 'Alcoba', cuantas: 10, corto: 'Con tina y balcón',
    texto: 'Espaciosas, con vista hacia la alberca o los jardines y decoración rústica mexicana.',
    detalles: ['Tina y balcón', 'Cama queen o king size', 'TV y cable, teléfono', 'Ventilador de techo', 'Internet inalámbrico'],
    foto: 'alcoba-doble', alt: 'Habitación con dos camas de herrería con dosel blanco y muro color terracota',
  },
  {
    id: 'adaptada', nombre: 'Alcoba adaptada', cuantas: 1, corto: 'En planta baja',
    texto: 'Adaptada para personas con capacidades diferentes y de la tercera edad, en planta baja.',
    detalles: ['Planta baja', 'Una cama queen size y una individual'],
  },
  {
    id: 'suite', nombre: 'Suite con jacuzzi', cuantas: 10, corto: 'En planta baja',
    texto: 'Cada una con una decoración única que le lleva de vuelta al pasado.',
    detalles: ['Jacuzzi', 'Planta baja', 'TV y cable, escritorio', 'Ventilador de techo'],
  },
  {
    id: 'master', nombre: 'Master suite', cuantas: 2, corto: 'Cama king size',
    texto: 'Muy amplias. Una tiene jacuzzi y sofá cama matrimonial, inspirada en la India; la otra, terraza y bella vista.',
    detalles: ['Cama king size', 'Sala de estar', 'Aire acondicionado y ventilador', 'TV y cable'],
    foto: 'habitacion-tapiz', alt: 'Habitación amplia con cabecera de madera tallada, tapiz bordado en el muro y sala',
  },
  {
    id: 'presidencial', nombre: 'Suite presidencial', cuantas: 1, corto: 'La de noche de bodas',
    texto: 'En el segundo piso, decorada con estilo oriental. La más solicitada para noche de bodas.',
    detalles: ['Cama king size', 'Baño amplio con gran jacuzzi', 'Terraza privada', 'Aire acondicionado, TV y cable'],
  },
];

export const totalHabitaciones = habitaciones.reduce((s, h) => s + h.cuantas, 0);

export type Paquete = { nombre: string; incluye: string; finDeSemana: number; entreSemana: number };

// Paquetes de hospedaje, precios por pareja por noche con IVA.
export const paquetes: Paquete[] = [
  { nombre: 'Paquete 1', incluye: 'Suite presidencial con cama king size, amplia terraza y baño con jacuzzi adornado con flores y velas, arreglo floral, arreglo frutal, una botella de vino, cena formal a 4 tiempos, 2 masajes relajantes y desayuno del día siguiente.', finDeSemana: 10590, entreSemana: 9400 },
  { nombre: 'Paquete 2', incluye: 'Suite con terraza y jacuzzi adornado con flores y velas, arreglo floral, arreglo frutal, una botella de vino, cena formal a 4 tiempos, 2 masajes relajantes y desayuno del día siguiente.', finDeSemana: 7020, entreSemana: 6100 },
  { nombre: 'Paquete 3', incluye: 'Suite con terraza y jacuzzi, cena formal a 4 tiempos, 2 masajes relajantes y desayuno del día siguiente.', finDeSemana: 6380, entreSemana: 5620 },
  { nombre: 'Paquete Relajante', incluye: 'Suite con terraza y jacuzzi, 2 masajes relajantes o limpieza facial, comida, cena a 3 tiempos y desayuno del día siguiente.', finDeSemana: 7450, entreSemana: 6430 },
  { nombre: 'Noche de bodas', incluye: 'Suite con terraza y jacuzzi adornada con flores y velas, arreglo floral, arreglo frutal, una botella de vino y desayuno del día siguiente.', finDeSemana: 5840, entreSemana: 5080 },
];

export const promociones = [
  { titulo: 'Larga estancia', dato: '20% de descuento', texto: 'Con reservación a partir de 4 noches. No aplica con otras promociones.' },
  { titulo: 'Promoción 4x3', dato: 'Una noche gratis', texto: 'Reserva 4 noches y paga solo 3. No acumulable con otras promociones. Sujeto a disponibilidad.' },
  { titulo: 'Grupos', dato: 'Tarifa especial', texto: 'Para grupos a partir de 10 habitaciones.' },
];

// Cenas románticas, por pareja con IVA.
export const cenas = [
  { nombre: 'Paquete amor', precio: 3000, puntos: ['Cena a 3 tiempos (pollo o pescado)', '1 bebida alcohólica', 'Camino de velas, pétalos y arreglo floral', 'Mesero exclusivo y música ambiental'] },
  { nombre: 'Corazón apasionado', precio: 3500, puntos: ['Cena a 4 tiempos (pollo o pescado)', '1 botella de vino', 'Camino de velas, pétalos y arreglo floral', 'Mesero exclusivo y música ambiental'] },
  { nombre: 'Pedida de mano', precio: 5500, puntos: ['Cena especial a 4 tiempos', 'Botella de vino', 'Camino de velas y antorchas, arreglo de rosas rojas', 'Música en vivo: trovador 1 hora'] },
];

// "Amplía tu experiencia" (su página de extras), precios con IVA.
export const extras = [
  { nombre: 'Desayuno buffet dominical', cuando: 'Domingos de 9:00 a 12:00', precio: '$295 adulto · $200 menor', texto: 'Buffet asistido con platillos de festivales gastronómicos mexicanos, elegido cada semana por su mayora. Preferentemente con reservación.' },
  { nombre: 'Desayuno de la hacienda', cuando: 'Sábados de 9:00 a 12:00', precio: '$230 adulto · $190 menor', texto: 'Desayuno a la carta. Preferentemente con reservación.' },
  { nombre: 'Picnic en atardeceres', cuando: 'De 9:00 a 16:00', precio: '$2,500 para 2 personas', texto: 'Tres horas en los jardines: montaje y decoración con música grabada, canasta con botana seca, 2 paninis, jarra de agua fresca y postre.' },
  { nombre: 'Sesión fotográfica', cuando: 'Lunes a viernes de 10:00 a 16:00', precio: '$3,200', texto: 'Dos horas en los jardines, 5 personas incluyendo fotógrafos ($350 persona extra; uso de drones $700 extra). Previa reservación.' },
];

// Espacios para eventos (su página de eventos). Capacidades máximas tal cual; los que no dicen capacidad no llevan número.
export const espacios = [
  { nombre: 'Salón virreinal y jardín Chapultepec', capacidad: 480, texto: 'Ambiente del siglo XVII con fachada neoclásica y un enorme cancel antiguo, rodeado por un jardín con árboles frondosos y kiosko. La sede más solicitada para bodas al aire libre.' },
  { nombre: 'Terraza Emperadores', capacidad: 350, texto: 'Recuerda la estancia en México de Maximiliano y Carlota. Con toldo y un estanque con plantas acuáticas.' },
  { nombre: 'Terraza Veranda porfiriana', capacidad: 180, texto: 'Herrería artística del Porfiriato, un jardín con kiosco y un muro antiguo de cantera.' },
  { nombre: 'Capilla de la Virgen del Rosario', texto: 'Capilla católica consagrada de formato abierto: bancas a la orilla del arroyo, el sonido del agua y el canto de los pájaros.' },
  { nombre: 'Jardín de los novios', texto: 'El jardín secreto junto a la capilla, con cipreses y fuentes de cantera. Para ceremonias civiles, cristianas, rituales mayas, uniones LGBT y eventos sociales pequeños.' },
  { nombre: 'Terraza Jazmines', texto: 'En un patio de calles empedradas, con horno de piedra y cocina equipada para asados. Para grupos empresariales y eventos sociales pequeños.' },
];

export const empresas = {
  maximo: 100,
  boveda: 50,
  servicios: ['Coffee break', 'Hospedaje con tarifa especial', 'Servicio de restaurante', 'Internet inalámbrico', 'Aire acondicionado', 'Proyección digital, pantallas y rotafolios', 'Áreas verdes para recesos e integración'],
  adicionales: ['Fogata', 'Karaoke', 'Noche de trovador', 'Servicios de spa', 'Trío de mariachi', 'Coctelería'],
};

// Spa Tierras Lejanas: precios con IVA de su página. Solo nombre, duración y precio (sin repetir beneficios de salud).
export const spaMedioDia = [
  { nombre: 'Medio día de spa · opción 1', incluye: 'Cóctel de bienvenida (café, galletas y fruta), masaje relajante, uso de alberca y snack.', semana: 2100, finde: 2220 },
  { nombre: 'Medio día de spa · opción 2', incluye: 'Cóctel de bienvenida, tratamiento facial, masaje shiatsu (15 min), uso de alberca, plato fuerte y postre.', semana: 2500, finde: 2700 },
];

export const spaServicios = [
  { nombre: 'Masaje relajante', duracion: '45 min', precio: 1280 },
  { nombre: 'Drenaje linfático', duracion: '45 min', precio: 1580 },
  { nombre: 'Masaje piedras calientes', duracion: '70 min', precio: 1750 },
  { nombre: 'Masaje prenatal (desde la semana 16)', duracion: '45 min', precio: 1450 },
  { nombre: 'Velo de novia (chocoterapia)', duracion: '60 min', precio: 1900 },
  { nombre: 'Limpieza facial', duracion: '45 min', precio: 1590 },
  { nombre: 'Facial de hidratación', duracion: '45 min', precio: 1595 },
  { nombre: 'Facial de lujo y reafirmante de cuello', duracion: '45 min', precio: 1600 },
  { nombre: 'Facial antiedad', duracion: '45 min', precio: 1595 },
  { nombre: 'Reflexología podal o en manos', duracion: '30 min', precio: 620 },
];

export const spaCelebraciones = 'Despedida de soltera o cumpleaños en el spa, de 10 a 17 h: $17,900 (mínimo 9 personas) y $1,950 por persona extra, sin bebidas.';

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
