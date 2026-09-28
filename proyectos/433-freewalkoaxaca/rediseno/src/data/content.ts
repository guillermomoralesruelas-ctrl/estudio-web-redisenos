// Contenido de Free Walk Oaxaca, tomado de investigacion/crudo.json e investigacion/resumen.json.
// Nada inventado. Textos en inglés (el sitio original está en inglés).

// publicDir = ../assets/web → los archivos se sirven en la raíz
const B = import.meta.env.BASE_URL;
export const web  = (f: string) => `${B}${f}`;

export const negocio = {
  nombre:    'Free Walk Oaxaca',
  subtitulo: "Oaxaca's Original Free Walking Tour",
  anio:      '2014',
  ciudad:    'Oaxaca de Juárez, Oaxaca, México',
  telefono:  '+52 951 525 7240',
  whatsapp:  '529515257240',
  email:     'info@freewalkoaxaca.com',
  maps:      'https://www.google.com/maps/dir//Av.+de+la+Independencia+900+Centro+68000+Oaxaca+de+Ju%C3%A1rez,+Oax./@17.0615736,-96.7235381,18z',
  facebook:  'https://www.facebook.com/WalkingTourOaxaca',
  instagram: 'https://www.instagram.com/oaxacafreewalkingtour/',
  tripadvisor:'https://www.tripadvisor.com.mx/Attraction_Review-g150801-d15309335-Reviews-Oaxaca_Free_Walking_Tour-Oaxaca_Southern_Mexico.html',
  coords:    { lat: 17.0615736, lng: -96.7235381 },
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

// Horario del Free Walking Tour (publicado en el sitio original)
export const horarioFWT = {
  enIngle: {
    'Mon–Sat': ['10:00', '11:00', '13:00', '16:00'],
    'Sunday':  ['10:00', '13:00', '16:00'],
  },
  enEspanol: {
    'Mon–Fri': ['10:00', '16:00'],
  },
  duracion: '2.5 hrs',
  consejo:  'Tip-based · Suggested $200 MXN per person',
  aforo:    'Up to 20 guests per departure',
  punto:    'Teatro Macedonio Alcalá, Av. de la Independencia 900, Centro',
  senal:    'Look for the yellow umbrella',
};

export const tours = [
  {
    id:       'private',
    nombre:   'Private City Tour',
    desc:     'Your tour, your way. Personalized experiences for your group.',
    duracion: '2.5–3 hrs',
    precio:   '2–4 people: $300 MXN p/p · 5–7: $250 · 8+: $200',
    idiomas:  'English & Spanish',
    img:      web('t-privado.webp'),
    w:        456, h: 347,
    waMensaje: "Hi, I'd like to book a Private City Tour.",
  },
  {
    id:       'food',
    nombre:   'Classic Food Tour',
    desc:     '15+ tastings in 7+ locations. A delicious journey through Oaxaca.',
    duracion: '4 hrs · Mon–Sat at 1:00 PM',
    precio:   '$1,400 MXN / $85 USD per person',
    idiomas:  'English & Spanish',
    img:      web('t-food.webp'),
    w:        456, h: 347,
    waMensaje: "Hi, I'd like to book the Classic Food Tour in Oaxaca.",
  },
  {
    id:       'mezcal',
    nombre:   'Mezcal & Alebrijes Tour',
    desc:     'Mezcal, artisans & alebrijes. Culture, tradition and unforgettable stories.',
    duracion: '5 hrs · Mon–Sat 1:00–6:00 PM',
    precio:   '$1,200 MXN / $70 USD per person',
    idiomas:  'English & Spanish',
    img:      web('t-mezcal.webp'),
    w:        456, h: 347,
    waMensaje: "Hi, I'd like to book the Mezcal & Alebrijes Tour.",
  },
  {
    id:       'market',
    nombre:   'Market Tour',
    desc:     'Explore local markets, taste seasonal flavors and meet the locals.',
    duracion: '3 hrs · Mon–Sat',
    precio:   '$1,100 MXN / $60 USD per person',
    idiomas:  'English & Spanish',
    img:      web('t-market.webp'),
    w:        456, h: 347,
    waMensaje: "Hi, I'd like to book the Market Tour in Oaxaca.",
  },
];

// Reseñas textuales del crudo.json (sin widget de terceros)
export const resenas = [
  {
    nombre: 'Kate Murphy',
    texto:  "This tour was incredible. Don't let the free fool you — our guide had so much knowledge, and really helped us feel connected to Oaxaca. We made a few pit stops to taste chocolate and grab a smoothie. This is a great tour to take your first day because you'll have a list of recommendations for the rest of your trip!",
    fuente: 'Google',
  },
  {
    nombre: 'SOPHIE MCDONALD',
    texto:  'This was an amazing tour! Our guide Raul was so informational and told us so much about the history of Oaxaca, the culture, traditions and most importantly the food! We had lots of food, and he even got us some free samples! I would highly recommend, and it\'s at a fraction of the cost of other tours we found in the city!',
    fuente: 'Google',
  },
  {
    nombre: 'Margarita Quiceno',
    texto:  'The tour with Raúl was amazing. Super beautiful person and guide. He was super patient with us who stopped everywhere to ask, and look, and take pictures. Totally recommended.',
    fuente: 'Google',
  },
];

export const valores = [
  { titulo: '100% Local Guides',      desc: 'We walk these streets, eat in these markets, know the neighborhoods.' },
  { titulo: 'Real Over Perfect',      desc: "We'd rather show you a real neighborhood than a picture-perfect tourist moment." },
  { titulo: 'Curiosity Over Scripts', desc: 'Questions make tours better. Every group is different, and every walk should feel that way.' },
  { titulo: 'Respect the City',       desc: 'Oaxaca is home before it is a destination. We encourage respectful travel.' },
];

// Texts for JSON-LD
export const descripcionSeo =
  'Free Walking Tour Oaxaca — tip-based tours with local guides since 2014. Historic Center, food, mezcal, alebrijes and market experiences. Meet at Teatro Macedonio Alcalá with the yellow umbrella.';
