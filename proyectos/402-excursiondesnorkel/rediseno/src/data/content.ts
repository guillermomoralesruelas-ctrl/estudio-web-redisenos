// Contenido de Eco Adventures Puerto Escondido, tomado del sitio original.
// Regla: nada inventado. Si falta un dato, se marca [PENDIENTE].
// Rutas de imagen relativas a publicDir (../assets/web).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Eco Adventures Puerto Escondido',
  ciudad: 'Puerto Escondido, Oaxaca',
  telefono: '+52 954 134 7889',
  telefonoTel: '+529541347889',
  whatsapp: '529541347889',
  email: 'info@ecoadventurespuertoescondido.com',
  // Booking platform: peek.com
  bookingBase: 'https://book.peek.com/s/5ecebc33-2848-4fba-ae1e-87d5e94ae515',
  // WhatsApp link for private tours
  waPrivate: 'https://wa.me/message/W2ALEP33BIV3N1',
  mapa: 'https://www.google.com/maps/search/Eco+Adventures+Puerto+Escondido/@15.8598,-97.0706,15z',
  tripadvisor: 'https://www.tripadvisor.com.mx/Attraction_Review-g153373-d3208861-Reviews-Eco_Adventures_Puerto_Escondido-Puerto_Escondido_Southern_Mexico.html',
  instagram: 'https://www.instagram.com/ecoadventurespuertoescondido/',
  facebook: 'https://www.facebook.com/ecoadventurespuerto',
  horario: 'Mon – Fri: 9:00 – 18:30',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const foto = img;

// Tours list with photos, prices, and booking IDs
export interface Tour {
  id: string;
  nombre: string;
  foto: string;
  precio: number; // MXN per person
  precioAntes?: number; // original price if discounted
  duracion: string;
  descripcion: string;
  bookId: string; // peek.com ID
  tags: string[]; // for filtering/seasonality
}

export const tours: Tour[] = [
  {
    id: 'baby-turtles',
    nombre: 'Baby Sea Turtle Release',
    foto: img('tortugas-playa.webp'),
    precio: 1000,
    precioAntes: 1200,
    duracion: '3 hrs',
    descripcion: 'Watch olive ridley hatchlings take their first steps toward the Pacific at Playa Escobilla — official SEMARNAT sanctuary.',
    bookId: '1zj8P',
    tags: ['wildlife', 'conservation', 'sunset', 'turtles'],
  },
  {
    id: 'bioluminescence',
    nombre: 'Bioluminescence Night Tour',
    foto: img('bio-laguna.webp'),
    precio: 850,
    duracion: '3 hrs',
    descripcion: 'Swim in a glowing lagoon where millions of dinoflagellates light up every movement. Best on new moon nights.',
    bookId: 'ZdPpW',
    tags: ['night', 'swimming', 'glow', 'lagoon'],
  },
  {
    id: 'dolphins',
    nombre: 'Dolphin Watching Tour',
    foto: img('delfines.webp'),
    precio: 850,
    duracion: '3 hrs',
    descripcion: 'Spinner and bottlenose dolphins year-round. Humpback whales November–March. Hotel pickup included.',
    bookId: 'xpv6M',
    tags: ['ocean', 'wildlife', 'dolphins', 'whales'],
  },
  {
    id: 'chacahua',
    nombre: 'Chacahua National Park',
    foto: img('chacahua-manglar.webp'),
    precio: 3000,
    precioAntes: 4000,
    duracion: 'Full day',
    descripcion: 'Lagoons, mangroves, a protected beach, and the most biodiverse estuary on the Oaxacan coast.',
    bookId: 'oxqB0',
    tags: ['nature', 'kayak', 'mangrove', 'full-day'],
  },
  {
    id: 'cascades',
    nombre: 'Magical Waterfalls of Copalitilla',
    foto: img('cascadas-copalitilla.webp'),
    precio: 3500,
    duracion: 'Full day',
    descripcion: 'Tiered waterfalls deep in the Oaxacan mountains, surrounded by cloud forest and the sound of birds.',
    bookId: 'dyO9V',
    tags: ['waterfall', 'hiking', 'full-day'],
  },
  {
    id: 'kayak',
    nombre: 'Mangrove Kayaking Tour',
    foto: img('kayak-manglar.webp'),
    precio: 2000,
    duracion: 'Half day',
    descripcion: 'Paddle through the mangrove channels of Manialtepec Lagoon with a certified guide and abundant birdlife.',
    bookId: '7B8b3',
    tags: ['kayak', 'mangrove', 'birds', 'lagoon'],
  },
  {
    id: 'snorkel',
    nombre: 'Pacific Snorkeling Adventure',
    foto: img('snorkel-pacifico.webp'),
    precio: 3000,
    duracion: 'Half day',
    descripcion: 'Hidden reefs of the Oaxacan Pacific coast, with sea turtles, tropical fish, and clear open water.',
    bookId: '2l2eP',
    tags: ['ocean', 'snorkel', 'reef', 'turtles'],
  },
  {
    id: 'horseback-sunset',
    nombre: 'Sunset Horseback Riding',
    foto: img('caballos-atardecer.webp'),
    precio: 2000,
    precioAntes: 3000,
    duracion: '2 hrs',
    descripcion: 'River, ocean and jungle trail on horseback as the sun drops into the Pacific. One of the most requested tours.',
    bookId: '2lz6M',
    tags: ['horses', 'sunset', 'beach'],
  },
  {
    id: 'mezcal',
    nombre: 'Ancestral Mezcal Experience',
    foto: img('mezcal-ancestral.webp'),
    precio: 2500,
    precioAntes: 3500,
    duracion: 'Half day',
    descripcion: 'Visit a traditional mezcalero family in the mountains, witness the palenque process, and taste wild agave spirits.',
    bookId: 'Bqo3a',
    tags: ['culture', 'mezcal', 'oaxaca'],
  },
  {
    id: 'coast',
    nombre: 'Ultimate Oaxacan Coast Experience',
    foto: img('costa-oaxaca.webp'),
    precio: 2500,
    duracion: 'Full day',
    descripcion: 'The best-of-all tour: mangroves, ocean, local food and Oaxacan coast highlights in a single day.',
    bookId: 'vy4re',
    tags: ['full-day', 'coastal', 'highlights'],
  },
  {
    id: 'hotsprings',
    nombre: 'Hot Springs & Horseback Riding',
    foto: img('termales.webp'),
    precio: 2000,
    duracion: 'Full day',
    descripcion: 'Ride through jungle trails to natural hot springs fed by volcanic springs deep in the Oaxacan mountains.',
    bookId: 'Wjeav',
    tags: ['horses', 'nature', 'hot-springs', 'full-day'],
  },
  {
    id: 'birdwatching',
    nombre: 'Birdwatching Lagoon Tour',
    foto: img('aves-laguna.webp'),
    precio: 2500,
    duracion: 'Half day',
    descripcion: 'Manialtepec Lagoon hosts over 200 bird species. Roseate spoonbills, kingfishers, herons and migratory flocks.',
    bookId: '9o7lq',
    tags: ['birds', 'lagoon', 'nature'],
  },
];

export const resenas = [
  {
    autor: 'Mr. G.',
    fecha: 'May 2025',
    texto: 'One of the best tour companies I have seen. We booked 3 tours (Dolphins, Mezcal and Chacahua) and they were fantastic. Thank you Efrain, Ernesto! Your attention to us during the whole tours made us feel even more special.',
    plataforma: 'Google',
    estrellas: 5,
  },
  {
    autor: 'Gabriela García Barrón',
    fecha: 'August 2024',
    texto: 'Excelente servicio y atención a sus clientes. Además de que todas las actividades que ofrecen son espectaculares, realmente lo recomiendo si quieres vivir experiencias únicas.',
    plataforma: 'Google',
    estrellas: 5,
  },
  {
    autor: 'Annika Lie',
    fecha: 'March 2024',
    texto: 'We had a bioluminescence tour with our guide Juan and it was awesome. Really recommend this!',
    plataforma: 'Google',
    estrellas: 5,
  },
  {
    autor: 'Phil Ressel',
    fecha: 'December 2023',
    texto: 'It was a perfect experience with a perfect ride and a wonderful guide! To speed it up with the horses on the beach into the sunset… amazing! We wish we can do it again!',
    plataforma: 'Google',
    estrellas: 5,
  },
  {
    autor: 'Michelle Ascencio',
    fecha: 'July 2025',
    texto: 'Everything was seamless from hotel pickup to drop-off. Josue gave us a truly magical tour! Once we found the dolphins, he made sure we had a great view. His playlist also added a fun, upbeat vibe to the whole outing.',
    plataforma: 'Google',
    estrellas: 5,
  },
];
