// Content for Discover Vallarta — taken from live site discoverpvr.com
// Photos in assets/web/ (method 1.2 — downloaded from live site)
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Discover Vallarta',
  ciudad: 'Puerto Vallarta, Jalisco',
  telefono: '+52 (322) 373 5793',
  whatsapp: '5213223735793',
  email: 'reserve@discover-mx.com',
  direccion: 'Vicente Guerrero 278, Puerto Vallarta, Jalisco 48317',
  horario: 'Mon–Fri 9:00am–6:00pm · Sat–Sun 9:00am–2:00pm',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export type Tour = {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  detalles: string[];
  img: string;
  imgAlt: string;
  msgWA: string;
};

export const tours: Tour[] = [
  {
    id: 'city-tour',
    titulo: 'PV City Tour',
    subtitulo: 'Malecón, Main Square & Tequila Tasting',
    descripcion:
      'Discover the hidden gems of Puerto Vallarta. We will explore the main square, the Malecón, and El Cuale art and souvenir corridor. You will take amazing pictures of the popular areas as well as our local favorite spots — and finish with a Tequila Tasting.',
    detalles: ['Half or full day', 'Bilingual guide', 'Tequila tasting included', 'Private vehicle'],
    img: img('home-private-tours.webp'),
    imgAlt: 'Puerto Vallarta city tour — Discover Vallarta',
    msgWA: 'Hi! I\'d like to book the PV City Tour. Can you help me with availability and pricing?',
  },
  {
    id: 'snorkeling',
    titulo: 'Mismaloya Snorkeling Tour',
    subtitulo: 'Los Arcos, Colomitos Beach & Las Animas',
    descripcion:
      'Discover the bay in a small panga boat! This tour departs from Mismaloya, an old fishing village, bound for different magical places such as Los Arcos ecological marine reserve, which houses a variety of marine species and stands out for snorkeling and diving.',
    detalles: ['Full day', 'Snorkel equipment included', 'Bilingual guide', 'Private boat'],
    img: img('tour-snorkeling.webp'),
    imgAlt: 'Snorkeling at Los Arcos, Puerto Vallarta — Discover Vallarta',
    msgWA: 'Hi! I\'m interested in the Mismaloya Snorkeling Tour. When is it available?',
  },
  {
    id: 'sayulita',
    titulo: 'Sayulita Tour',
    subtitulo: 'Quaint Surf Town on the Pacific',
    descripcion:
      'Sayulita is an eccentric beach community and popular surf destination, known for its colorfulness, relaxed lifestyle and good vibes. We\'ll take the scenic route, tour the main square, local shops and art galleries, and finish with a Tequila Tasting to learn about agave liquors.',
    detalles: ['Full day', 'Bilingual guide', 'Tequila tasting', 'Private vehicle'],
    img: img('tour-sayulita.webp'),
    imgAlt: 'Sayulita colorful town — Discover Vallarta',
    msgWA: 'Hi! I\'d like information about the Sayulita Tour. Can you tell me more?',
  },
  {
    id: 'hiking',
    titulo: 'Cerro del Mono Hiking Tour',
    subtitulo: 'Great workout with spectacular views',
    descripcion:
      'Our experienced guides will take you hiking up Cerro del Mono, between Sayulita and Punta Mita. At a decent pace, from bottom to top, the hike takes about 1 hour. We will take short breaks to catch your breath and teach you about endemic species. Bring your camera for amazing pictures at the top!',
    detalles: ['~1-hour hike', 'Bilingual guide', 'Endemic flora & fauna', 'Private transportation'],
    img: img('tour-hiking.webp'),
    imgAlt: 'Cerro del Mono hiking trail — Discover Vallarta',
    msgWA: 'Hi! I\'d like to book the Cerro del Mono Hiking Tour. What should I bring?',
  },
  {
    id: 'colomitos',
    titulo: 'Colomitos Seaside Hiking Trail',
    subtitulo: '20% online booking discount',
    descripcion:
      'An excellent tour for nature lovers and hikers! We\'ll drive to Boca de Tomatlán where the road ends and the seaside trail begins. We\'ll walk for 2 hours under the shade of lush tropical vegetation, visiting virgin beaches and small villages, with stops to learn about endemic species.',
    detalles: ['~2-hour trail', 'Virgin beaches', 'Bilingual guide', '20% online discount'],
    img: img('tour-colomitos.webp'),
    imgAlt: 'Colomitos seaside trail, Puerto Vallarta — Discover Vallarta',
    msgWA: 'Hi! I\'m interested in the Colomitos Seaside Hiking Tour. Can I get the 20% online discount?',
  },
  {
    id: 'rainforest',
    titulo: 'Rainforest Tour',
    subtitulo: '25% online booking discount',
    descripcion:
      'Head south to experience the natural side of Puerto Vallarta. Flora or fauna — the choice is yours. You\'ll decide between the Vallarta Zoo or Botanical Gardens. From coffee roasting to tequila distilling, you\'ll learn about the process of local products in the heart of the jungle.',
    detalles: ['Full day', 'Zoo or Botanical Gardens', 'Bilingual guide', '25% online discount'],
    img: img('tour-rainforest.webp'),
    imgAlt: 'Rainforest and jungle tour south of Puerto Vallarta — Discover Vallarta',
    msgWA: 'Hi! I\'d like to book the Rainforest Tour. Can you tell me more about the itinerary?',
  },
];

export const transferAddons = [
  { nombre: '1-hour Shopping Stop (Costco, Walmart, Mega)', precio: '$39 USD' },
  { nombre: 'Sparkling Wine Bottle (Brut)', precio: '$45 USD' },
  { nombre: 'Flower Bouquet (12 Roses)', precio: '$55 USD' },
  { nombre: 'Tequila Bottle (Patrón) + 2 shot glasses', precio: '$60 USD' },
];

export const porQueNosotros = [
  {
    icono: '🗣️',
    titulo: 'Bilingual Guides',
    texto: 'All our guides speak English and Spanish fluently. We communicate clearly, explain the history and culture, and make sure you never feel lost.',
  },
  {
    icono: '🚐',
    titulo: 'Private & Flexible',
    texto: 'All tours are private — just your group. We pick you up at your hotel, set the pace that works for you, and adapt the itinerary to your interests.',
  },
  {
    icono: '📍',
    titulo: 'True Locals',
    texto: 'We are from Puerto Vallarta and Riviera Nayarit. Our guides know the hidden spots, the best restaurants, and the stories that don\'t appear in guidebooks.',
  },
  {
    icono: '💬',
    titulo: 'Always Reachable',
    texto: 'Questions before you arrive? Need to adjust on the day? We respond quickly on WhatsApp and email, from booking to the moment you say goodbye.',
  },
];
