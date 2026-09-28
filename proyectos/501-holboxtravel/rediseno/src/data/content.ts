// Content for Holbox Travel — taken from the live site holboxtravel.com.mx
// Photos in assets/web/ (method 1.2 — downloaded from live site, no Google Maps embed found in clone)
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Holbox Travel',
  ciudad: 'Holbox, Quintana Roo',
  telefono: '+52 984 184 0323',
  whatsapp: '5219841840323',
  email: 'ventas@holboxtravel.com',
  direccion: 'Isla Holbox, Quintana Roo, México',
  facebook: 'https://www.facebook.com/holboxtravelagencia',
  instagram: 'https://www.instagram.com/holboxtravelsocial/',
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
    id: 'whale-sharks',
    titulo: 'Swim & Snorkel with Whale Sharks',
    subtitulo: 'The ultimate Holbox bucket-list experience',
    descripcion:
      'Come face-to-fin with the largest fish in the ocean. Holbox Island is one of the very few places on Earth where you can swim alongside whale sharks in their natural habitat. Our expert guides ensure an unforgettable, safe and responsible encounter.',
    detalles: ['Season: June – September', 'Full day tour', 'Snorkel equipment included', 'Bilingual guide'],
    img: img('whale-sharks.webp'),
    imgAlt: 'Snorkeling with whale sharks in Holbox — Holbox Travel',
    msgWA: 'Hi! I\'d like to book the Swim & Snorkel with Whale Sharks tour. Can you help me?',
  },
  {
    id: 'three-islands',
    titulo: 'Three Island Tour',
    subtitulo: 'Yalahau, Isla Pájaros & Punta Mosquito',
    descripcion:
      'Explore three unique spots aboard a comfortable catamaran: the freshwater spring of Yalahau, the flamingo-filled Isla de los Pájaros, and the famous sandbar at Punta Mosquito where flamingos wade at sunrise. A perfect full-day adventure.',
    detalles: ['Full day tour', 'Catamaran ride', 'Flamingo watching', 'Snorkeling included'],
    img: img('three-islands.webp'),
    imgAlt: 'Three Island Tour catamaran in Holbox — Holbox Travel',
    msgWA: 'Hi! I\'d like to book the Three Island Tour. Can you help me with availability?',
  },
  {
    id: 'bioluminescence',
    titulo: 'Holbox Bioluminescence Tour',
    subtitulo: 'Swim in glowing waters after dark',
    descripcion:
      'As night falls, the waters around Holbox light up with millions of bioluminescent plankton. Dive in and watch yourself glow with every movement — one of nature\'s most magical phenomena, available year-round in Holbox.',
    detalles: ['Night tour', 'Year-round', 'Small groups', 'Bilingual guide'],
    img: img('bioluminescence.webp'),
    imgAlt: 'Bioluminescence tour at night in Holbox — Holbox Travel',
    msgWA: 'Hi! I\'m interested in the Bioluminescence Tour in Holbox. When is it available?',
  },
  {
    id: 'transportation',
    titulo: 'Transportation to Holbox',
    subtitulo: 'Cancún, Playa del Carmen & more',
    descripcion:
      'Getting to Holbox is easy with Holbox Travel. We offer comfortable, private and shared transfers from Cancún Airport, Cancún Hotel Zone, Playa del Carmen and other destinations directly to Chiquilá ferry terminal — or door to door.',
    detalles: ['Private & shared options', 'Cancún Airport pickup', 'Air-conditioned vehicles', 'On-time guarantee'],
    img: img('transportation.webp'),
    imgAlt: 'Private transportation to Holbox Island — Holbox Travel',
    msgWA: 'Hi! I need transportation to Holbox. Can you tell me the options and rates?',
  },
];

export const porQueNosotros = [
  {
    icono: '🐋',
    titulo: 'Whale Shark Specialists',
    texto: 'We have been leading whale shark tours in Holbox since 2010. Our guides know these waters, follow responsible wildlife guidelines, and keep groups small.',
  },
  {
    icono: '🌊',
    titulo: 'Local & Independent',
    texto: 'We are a small local agency — not a franchise. Every tour is run by islanders who love Holbox and want you to experience it authentically.',
  },
  {
    icono: '⭐',
    titulo: 'Trusted by Travelers',
    texto: 'With hundreds of 5-star reviews across TripAdvisor, Google and Facebook, our guests come back and bring their friends. See for yourself.',
  },
  {
    icono: '💬',
    titulo: 'Bilingual Support',
    texto: 'Our team speaks English and Spanish. Reach us via WhatsApp before, during and after your visit — we respond fast.',
  },
];

export const reseñas = [
  {
    autor: 'Maxime Carette',
    texto: 'Amazing experience! The whale shark tour was absolutely breathtaking. Our guide was professional, safety-conscious and incredibly knowledgeable. Highly recommend Holbox Travel for anyone visiting Holbox.',
    estrellas: 5,
  },
  {
    autor: 'Pilar Chicatti',
    texto: 'The Three Island Tour was the highlight of our trip. Seeing hundreds of flamingos up close at sunrise is something I will never forget. The team was friendly and the catamaran was comfortable.',
    estrellas: 5,
  },
  {
    autor: 'Aditya Parikh',
    texto: 'Booked the bioluminescence tour last-minute and they made it happen. The glowing water was magical and our guide explained everything perfectly. Worth every peso!',
    estrellas: 5,
  },
];
