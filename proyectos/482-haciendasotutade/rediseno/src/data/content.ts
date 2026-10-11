// Contenido de Hacienda Sotuta de Peón. Fuente: haciendaviva.com (inicio, Cenotes Resort, museo vivo, tours y actividades,
// tour henequenero, restaurantes, wellness, bodas y eventos, contacto), leído el 2026-10-11.
// No se inventan datos: lo que falta queda como [PENDIENTE]. Sin promesas de salud.

export const negocio = {
  nombre: 'Hacienda Sotuta de Peón',
  lema: 'Hacienda viva · Est. 1858',
  direccion: 'Domicilio conocido, Sotuta de Peón, municipio de Tecoh, 97822, Yucatán',
  telefonos: ['(999) 941 6431', '(999) 941 6441'],
  telefonoLink: '+529999416431',
  whatsapp: '5219991759923',
  whatsappTexto: '999 175 9923',
  correo: 'ventas@haciendaviva.com',
  reservarHotel: 'https://reservations.easy-rez.com/v2/hacienda-sotuta-de-peon/es/availability',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hacienda Sotuta de Peón, Tecoh, Yucatán'),
  facebook: 'https://facebook.com/sotutadepeon',
  instagram: 'https://www.instagram.com/haciendasotutadepeon/',
  tripadvisor: 'https://tripadvisor.com/Attraction_Review-g150811-d611911-Reviews-Hacienda_Sotuta_de_Peon-Merida_Yucatan_Peninsula.html',
  aviso: 'Por los cupos limitados de los tours y del restaurante, y la alta demanda de temporada, sugerimos consultar disponibilidad antes de su visita.',
};

export const cifras = [
  { n: '15', t: 'cenotes en la propiedad' },
  { n: '8', t: 'cenotes en las actividades' },
  { n: '30', t: 'habitaciones' },
  { n: '1858', t: 'año de fundación' },
];

export const anillo = {
  texto: [
    'Hace 66 millones de años, un asteroide de más de 10 km de diámetro cayó en lo que hoy es la península de Yucatán. El cráter de Chicxulub quedó enterrado bajo la roca caliza, pero su borde sigue trazado en la superficie: a lo largo de esa línea el agua esculpió una cadena semicircular de cenotes, el Anillo de los Cenotes, hoy Reserva Estatal Geohidrológica.',
    'Tecoh, el municipio de la hacienda, es uno de los que forman el anillo. De los 15 cenotes de la propiedad, 8 forman parte de las experiencias (se puede nadar en ellos y explorar sus formaciones) y 7 siguen ocultos e intactos en la selva.',
  ],
  datos: [
    { n: '66 m', t: 'años desde el impacto' },
    { n: '+160 km', t: 'diámetro del anillo' },
    { n: '27', t: 'municipios que atraviesa' },
    { n: '45 min', t: 'de Mérida' },
  ],
};

export const habitaciones = [
  {
    nombre: 'Deluxe',
    texto: 'Espacio de una sola planta con terraza y piscina privadas, hamacas y mecedoras. Vistas a los henequenales o a los jardines de la hacienda.',
    camas: 'Cama king size o dos camas matrimoniales',
    rasgos: ['Piscina privada', 'Terraza con hamacas y mecedoras', 'Vista a henequenales o jardines'],
    fotos: [
      { n: 'deluxe-piscina-2', alt: 'Terraza de una habitación Deluxe con piscina privada y palmeras' },
      { n: 'hab-deluxe-2', alt: 'Habitación Deluxe con cabecera de mosaico y vigas de madera' },
      { n: 'hamaca', alt: 'Hamaca en la terraza de una habitación con vista al jardín' },
    ],
  },
  {
    nombre: 'Superior',
    texto: 'Espaciosa y cómoda, en planta baja o alta, con terraza o balcón privado con vistas a los jardines de la hacienda.',
    camas: 'Cama king size o dos camas matrimoniales',
    rasgos: ['Terraza o balcón privado', 'Vista a los jardines', 'Planta baja o alta'],
    fotos: [
      { n: 'hab-superior', alt: 'Habitación Superior con dos camas, muros amarillos y piso de pasta' },
      { n: 'hab-petalos', alt: 'Cama con pétalos de rosa y cabecera de mosaico iluminada' },
      { n: 'hab-superior-2', alt: 'Habitación Superior con cama matrimonial y ventanas de madera' },
    ],
  },
];

export const incluido = ['Cenote Dzul-Há', 'Piscina del resort', 'Senderos y jardines', 'Huerto orgánico', 'WiFi en todo el resort', 'Estacionamiento'];

export const museo = {
  texto: [
    'Construida a mediados del siglo XIX, la hacienda comenzó a funcionar en 1858. Tras 100 años de prosperidad henequenera estuvo abandonada tres décadas, hasta que un largo proyecto de restauración la devolvió a la vida.',
    'Los visitantes recorren la hacienda en "truks", plataformas de madera tiradas por mulas sobre rieles Decauville, como las usaban los trabajadores. Se ve cada paso del henequén, el "oro verde": de la planta a la fibra y de la fibra al producto, con la maquinaria antigua reconstruida y funcionando. El paseo termina con un chapuzón en el cenote o en la piscina.',
  ],
  modalidades: ['Tour compartido', 'Tour privado', 'Tour hacendado', 'Tour atardecer', 'Tour + alimentos + transporte'],
  visita: 'Incluye la casa principal y el museo de la fuerza motriz.',
};

export const actividades = [
  { nombre: 'Tour henequenero', foto: 'truk-tour', alt: 'Visitantes en un truk tirado por mula sobre los rieles de la hacienda' },
  { nombre: 'Paseo a caballo', foto: 'caballo', alt: 'Jinetes en un sendero de la selva' },
  { nombre: 'Recorrido en cuatrimoto', foto: 'cuatrimoto', alt: 'Visitante en cuatrimoto por un camino de tierra' },
  { nombre: 'Travesía en bicicleta', foto: 'bicicleta', alt: 'Ciclista en un sendero entre la vegetación' },
  { nombre: 'Wellness y temazcal', foto: 'masaje-2', alt: 'Terapeuta dando masaje en una cabina con cabecera de mosaico' },
  { nombre: 'Cena en Sotuta de Peón', foto: 'cena-pareja', alt: 'Pareja cenando en la terraza del restaurante del hotel' },
];

export const restaurantes = [
  {
    nombre: 'Kih', logo: 'logo-kih', tipo: 'Cocina tradicional yucateca',
    texto: 'En el casco viejo, frente a la casa principal. Dirigido por el chef Florencio Chuc Narváez, con más de 30 años de experiencia: productos locales y técnicas de la cocina yucateca, de la cochinita pibil cocinada bajo tierra con leña a los panuchos y papadzules.',
    horario: [{ t: 'Desayunos', h: '8:00 a 12:00' }, { t: 'Comida', h: '12:00 a 17:00' }],
  },
  {
    nombre: 'Muum', logo: 'logo-muum', tipo: 'Fusión mexicana',
    texto: 'Dentro del hotel, junto a la piscina. Usa productos locales y de la granja y el huerto orgánico de la hacienda. El almuerzo se sirve en Kih.',
    horario: [{ t: 'Cena', h: '19:00 a 21:00' }],
  },
];

export const cocinaExtra = 'Además de la cocina regional hay entradas y platillos vegetarianos y veganos, jugos prensados, fruta de temporada y café de altura preparado al momento. Si te hospedas, pueden diseñar tu menú.';

export const wellness = {
  texto: 'Masajes con técnicas tradicionales mayas y aceites orgánicos preparados en la hacienda con plantas de la región.',
  masajes: [
    { nombre: "Masaje Jet's A Wóol", detalle: 'Masaje breve sentado en cabeza, brazos y pies, con reflexología podal y masaje facial.', opciones: [{ min: 25, precio: 550 }, { min: 50, precio: 1000 }] },
  ],
  temazcal: { texto: 'Guiado por un equipo de mujeres mayas, guardianas de los jardines, con hierbas del huerto de la hacienda. Experiencia colectiva.', min: 50, minimo: 'Mínimo 6 personas', precio: '[PENDIENTE]' },
};

export const bodas = {
  texto: 'Jardines para bodas y eventos sociales de gran capacidad, la capilla Kakalná para ceremonias religiosas, salón para reuniones y conferencias, hospedaje, alimentos, estacionamiento y paseo en calesín.',
  tipos: [
    { nombre: 'Boda católica', foto: 'boda-catolica', puntos: ['Capilla consagrada', 'Capacidad para 60 invitados', 'Balcón para coro'] },
    { nombre: 'Boda maya', foto: 'boda-maya', puntos: ['Ceremonia dirigida por sacerdote maya', 'Música con tuncul y caracoles', 'Limpia para invitados', 'Balché para los novios', 'En jardines o cenote'] },
    { nombre: 'Boda civil', foto: 'boda-civil', puntos: ['Jardines', 'Casa principal', 'Cenote', 'Piscina del hotel'] },
    { nombre: 'Tornaboda', foto: 'tornaboda', puntos: ['Selección de buffet', 'Barra libre de bebidas', 'Montaje en restaurante o jardines', 'Tour henequenero (opcional)'] },
  ],
};

// Para "Arma tu visita": solo nombres de lo que ofrecen; la hacienda confirma horarios y precios.
export const opcionesVisita = ['Tour henequenero', 'Nadar en cenote', 'Paseo a caballo', 'Cuatrimoto', 'Bicicleta', 'Masaje', 'Temazcal', 'Comida en Kih', 'Cena en Muum'];
