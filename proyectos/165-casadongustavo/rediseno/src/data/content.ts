const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Casa Don Gustavo Boutique Hotel',
  ciudad: 'Campeche',
  telefono: '+52 981 816 8090',
  telefonoLada: '800 839 0959',
  whatsapp: '529818186207',
  email: 'hotel@casadongustavo.com',
  direccion: 'Calle 59 No. 4, Centro, Campeche, Camp.',
  mapa: 'https://maps.app.goo.gl/CampecheCalle59',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const suites = [
  {
    id: 'estandar',
    nombre: 'Suites Estándar',
    tagline: 'Amplias y luminosas, alrededor del Patio Central',
    descripcion:
      'Ubicadas en el primer y segundo piso de la casona, estas suites rodean nuestro Patio Central. Lámparas de cristal austriaco y bronce de época, ambiente cálido y descanso garantizado.',
    amenidades: ['Cama King Size', 'A/C', 'Wi-Fi gratis', 'Amenidades L\'Occitane', 'Caja fuerte', 'Baño europeo'],
    foto: img('patio-principal.webp'),
    alt: 'Suite Estándar con vista al patio colonial de Casa Don Gustavo',
    waMsg: 'Hola, me interesa reservar una Suite Estándar en Casa Don Gustavo.',
  },
  {
    id: 'junior',
    nombre: 'Junior Suites',
    tagline: 'Personalidad única: "Carlota" y "Caballero"',
    descripcion:
      'Dos suites con carácter propio. "Carlota" recibe con mesa victoriana en cedro y candil de cristal. "Caballero" sorprende con un candil francés de 1950 y un imponente ropero victoriano. Ambas con antesala y balcón.',
    amenidades: ['44 m²', 'Antesala y balcón', 'Cama King o Queen', 'A/C', 'Wi-Fi gratis', 'Amenidades L\'Occitane'],
    foto: img('galeria-1.webp'),
    alt: 'Junior Suite con decoración victoriana y balcón a la Calle 59',
    waMsg: 'Hola, me interesa reservar una Junior Suite en Casa Don Gustavo.',
  },
  {
    id: 'master',
    nombre: 'Master Suites',
    tagline: '"Don Gustavo" y "Don Ermilo": la historia hecha cama',
    descripcion:
      'La Master "Don Gustavo" luce un juego de recámara estilo Luis XVI que perteneció al Gral. Salvador Alvarado. La Master "Don Ermilo" deslumbra con una cama de latón y bronce dorado iluminada por candiles de cristal. Ambas con balcón a la Calle 59.',
    amenidades: ['Salón de estar', 'Balcón a Calle 59', 'Cama King Size', 'A/C', 'Wi-Fi gratis', 'Amenidades L\'Occitane'],
    foto: img('master-suite.webp'),
    alt: 'Master Suite Don Gustavo con muebles históricos del siglo XIX',
    waMsg: 'Hola, me interesa reservar una Master Suite en Casa Don Gustavo.',
  },
];

export const restaurante = {
  descripcion:
    'Desayunos con opciones campechanas e internacionales, en el patio central rodeado de arcos del siglo XVII o sobre la Calle 59. Abierto al público en general.',
  foto: img('comedor-principal.webp'),
  alt: 'Restaurante Casa Don Gustavo en el patio colonial',
  platillos: [
    'Chilaquiles Maya — $149',
    'Chilaquiles con cochinita pibil — $159',
    'Poc-Chuc Chilaquiles — $159',
    'Café y repostería casera — $99',
  ],
};

export const incluye = [
  { icono: '🌅', titulo: 'Desayuno completo', detalle: 'Incluido para dos personas (reservas directas)' },
  { icono: '🚶', titulo: 'Tour por la ciudad', detalle: 'Recorrido guiado por el recinto amurallado' },
  { icono: '📍', titulo: 'Ubicación privilegiada', detalle: 'Calle 59, a pasos de la Puerta de Tierra y la Puerta de Mar' },
  { icono: '🍽️', titulo: 'Restaurante en la casona', detalle: 'Abierto al público, cocina campechana e internacional' },
];

export const galeria = [
  { src: img('jardin.webp'),          alt: 'Jardín interior de Casa Don Gustavo' },
  { src: img('comedor-colonial.webp'), alt: 'Comedor colonial con arcos del siglo XVII' },
  { src: img('galeria-2.webp'),        alt: 'Detalle de una suite de Casa Don Gustavo' },
  { src: img('galeria-3.webp'),        alt: 'Espacio interior del hotel boutique' },
];
