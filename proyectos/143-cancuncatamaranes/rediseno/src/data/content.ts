// Content for Cancun Catamarans (Cancún, Q. Roo). Everything comes from investigacion/crudo.json (home, tours, fleet,
// deals and transportation, captured 2026-09-26). Nothing is invented; missing data goes as [PENDIENTE].

export const negocio = {
  nombre: 'Cancun Catamarans',
  whatsapp: '529988928694',
  tel: '+529982415069',
  telVisible: '+52 998 241 5069',
  gratuito: '+18669321881',
  gratuitoVisible: '+1 866 932 1881',
  correo: 'info@cancuncatamarans.mx',
  direccion: 'Marina Playa Tortugas, Blvd. Kukulcán km 6.5, Hotel Zone, Cancún, Q. Roo',
  mapa: 'https://maps.google.com/?q=Marina+Playa+Tortugas+Cancun',
  instagram: 'https://www.instagram.com/cancuncatamarans/',
  facebook: 'https://www.facebook.com/CancunCatamarans.MX',
  docking: 20,
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Tour = {
  nombre: string; tipo: 'Shared' | 'Private'; horas: number; max: number; precio: number; porPersona: boolean;
  texto: string; incluye: string[]; foto: string; alt: string;
};

export const tours: Tour[] = [
  { nombre: 'Catamaran tour to Isla Mujeres', tipo: 'Shared', horas: 7, max: 50, precio: 75, porPersona: true,
    texto: 'Their most popular tour: seven hours of snorkeling and Caribbean sun, with a stop in Isla Mujeres.',
    incluye: ['Open bar', 'Snorkeling with equipment', 'Buffet lunch at the Beach Club', 'Visit to Isla Mujeres', 'Bilingual crew'],
    foto: 'red', alt: 'Six friends sitting on the front net of a catamaran over turquoise water' },
  { nombre: 'Sunset Private Experience', tipo: 'Private', horas: 4, max: 15, precio: 1030, porPersona: false,
    texto: 'A private sunset sail aboard an exclusive catamaran, with wine, gourmet charcuterie and music.',
    incluye: ['Private catamaran', 'Wine and gourmet charcuterie', 'Music', 'Sunset on the Caribbean'],
    foto: 'atardecer', alt: 'Friends toasting at the table of a catamaran at sunset' },
  { nombre: 'Party Tour', tipo: 'Private', horas: 5, max: 25, precio: 1675, porPersona: false,
    texto: 'A private celebration at sea with themed decoration and premium catering.',
    incluye: ['Private catamaran', 'Themed decoration', 'Premium catering', 'Open bar and snorkeling'],
    foto: 'fiesta', alt: 'A group of friends with arms up on the deck of a catamaran' },
  { nombre: 'Birthday Tour', tipo: 'Private', horas: 5, max: 30, precio: 2275, porPersona: false,
    texto: 'Premium catering, themed decoration, a sparkling wine toast and a surprise birthday cake.',
    incluye: ['Private catamaran', 'Themed decoration', 'Sparkling wine toast', 'Surprise birthday cake'],
    foto: 'cumple', alt: 'Birthday table inside a catamaran with number 34 balloons and drinks' },
  { nombre: 'Isla Mujeres Private Tour', tipo: 'Private', horas: 7, max: 30, precio: 1690, porPersona: false,
    texto: 'Exclusive private charter to Isla Mujeres with a fully customizable itinerary.',
    incluye: ['Private catamaran', 'Snorkeling', 'Buffet lunch at the beach club', 'Open bar'],
    foto: 'catamaran', alt: 'A white catamaran full of guests anchored in the shallow turquoise water of Isla Mujeres' },
];

// Fleet, in the order of their page. Length in feet and maximum guests.
export const flota = [
  { nombre: 'MAR', pies: 36, max: 20 }, { nombre: 'OH LALA', pies: 37, max: 25 }, { nombre: 'LADY ESTHER', pies: 37, max: 25 },
  { nombre: 'ALETA', pies: 37, max: 25 }, { nombre: 'ATA', pies: 40, max: 30 }, { nombre: 'KENDO', pies: 40, max: 30 },
  { nombre: 'MANGO', pies: 40, max: 30 }, { nombre: 'MALUBE', pies: 40, max: 30 }, { nombre: 'PACHANGA', pies: 40, max: 30 },
  { nombre: 'KHAYA', pies: 40, max: 30 }, { nombre: 'SUPERCAT', pies: 40, max: 30 }, { nombre: 'ISLA MORADA', pies: 42, max: 30 },
  { nombre: 'MYDAS', pies: 42, max: 35 }, { nombre: 'SAMBA 1 - 2', pies: 45, max: 45 }, { nombre: 'SAMBA 4', pies: 50, max: 50 },
  { nombre: 'LADY LAURA', pies: 55, max: 55 }, { nombre: 'PALOMA', pies: 60, max: 55 }, { nombre: 'AMAZING', pies: 82, max: 65 },
  { nombre: 'INDUNA', pies: 75, max: 75 }, { nombre: 'SAMBA 3', pies: 78, max: 100 },
];

// Hotel transportation, USD per vehicle. Brackets: 1–4, 5–10, 11–14, 15–20, 21–30, 31–50 passengers.
export const tramos = [4, 10, 14, 20, 30, 50];
export const zonas: { nombre: string; nota?: string; ida: number[]; redondo: number[] }[] = [
  { nombre: 'Cancun Hotel Zone', ida: [46, 50, 88, 100, 170, 250], redondo: [92, 100, 176, 200, 340, 500] },
  { nombre: 'Cancun Downtown', ida: [46, 49, 88, 98, 170, 250], redondo: [92, 98, 176, 196, 340, 500] },
  { nombre: 'Puerto Juarez', ida: [50, 69, 124, 138, 207, 276], redondo: [100, 138, 248, 276, 414, 552] },
  { nombre: 'Costa Mujeres', ida: [68, 69, 124, 138, 207, 276], redondo: [136, 138, 248, 276, 414, 552] },
  { nombre: 'Puerto Morelos', ida: [55, 58, 107, 116, 174, 232], redondo: [110, 116, 214, 232, 348, 464] },
  { nombre: 'Playa del Carmen', ida: [81, 91, 173, 182, 273, 364], redondo: [162, 182, 346, 364, 546, 728] },
  { nombre: 'Puerto Aventuras', ida: [125, 107, 197, 214, 385, 428], redondo: [250, 214, 394, 428, 770, 856] },
  { nombre: 'Akumal / Xcaret', nota: 'Akumal, Xcaret, Xel-Há', ida: [124, 140, 140, 280, 420, 560], redondo: [248, 280, 280, 560, 840, 1120] },
  { nombre: 'Tulum', ida: [140, 168, 260, 336, 504, 650], redondo: [280, 336, 520, 672, 1008, 1300] },
];
export const reglasTransporte = [
  'Prices are per vehicle, not per person.',
  'Delays of more than 15 minutes at pickup or return may count as a no-show, with no refund.',
  'Additional stops can be arranged for an extra fee.',
  'Groups larger than 50 passengers: contact them.',
];

export const ocasiones = [
  { nombre: 'Bachelor / Bachelorette', texto: 'Birthdays, 30s and 40s parties.', foto: 'despedida', alt: 'Four friends in white dresses pointing at the camera on a catamaran',
    wa: "Hi! I'd like a quote for a bachelor/bachelorette catamaran tour. What's the pricing?" },
  { nombre: 'Family tours', texto: 'Kid-friendly, easy snorkel.', foto: 'flotante', alt: 'A group floating on a yellow mat in turquoise water',
    wa: "Hi! Looking for a family-friendly catamaran tour. What's included for kids?" },
  { nombre: 'Honeymoon / Romance', texto: 'Sunset, privacy, champagne.', foto: 'propuesta', alt: 'A couple kissing on a catamaran while she shows an engagement ring',
    wa: "Hi! I'd like a private romantic sunset tour. Could you send options?" },
  { nombre: 'Corporate / Events', texto: 'Team building and incentives, 30 to 90 guests.', foto: 'grupo', alt: 'A large group in life vests posing on the deck of a catamaran',
    wa: "Hi! Quote needed for a corporate catamaran event. What's capacity and pricing?" },
];

export const promos = [
  { nombre: 'Daily Shared Tour', etiqueta: '20% off with code WEB26CC', precio: 'From $75 USD / person', antes: '', ventana: 'Book January to November, sail any future date.',
    texto: 'Seven hours to Isla Mujeres with open bar, snorkeling and buffet lunch at their Beach Club.' },
  { nombre: 'Private Charter — 42ft', etiqueta: '-25%', precio: '$1,690 USD', antes: '$2,250', ventana: 'Special pricing January 1 to December 20.',
    texto: 'Up to 30 guests, 7 hours, custom itinerary, private crew, open bar, snorkeling, lunch at the Beach Club and Isla Mujeres.' },
  { nombre: 'Private Charter — 60ft (Special + Sunset)', etiqueta: '-29%', precio: '$3,000 USD', antes: '$4,200', ventana: 'Special pricing May 1 to December 15. Departure 11:30 AM.',
    texto: 'Their flagship 60ft catamaran for the full day, with a sunset return to Cancún.' },
];
export const cupones = [
  { codigo: 'HD26CC', texto: '30% off the HD catamaran tour', vence: 'Dec 15, 2026' },
  { codigo: 'WEB26CC', texto: '20% off the daily shared tour', vence: 'Dec 31, 2026' },
  { codigo: 'FBSM20', texto: '20% off the Isla Mujeres tour (Facebook)', vence: 'Dec 31, 2026' },
  { codigo: 'FBSM10', texto: '10% off a private tour (Facebook)', vence: 'Dec 31, 2026' },
];

export const resenas = [
  { texto: 'Booked the private sunset charter for our 10th anniversary. The team went above and beyond — charcuterie, wine, beautiful lighting on the boat.', autor: 'David C., Australia' },
  { texto: 'Came here for my bachelorette trip and the team could not have been more accommodating. They decorated the boat with a banner and made us feel special all day.', autor: 'Ashley T., United States' },
  { texto: 'The catamaran was spacious, the crew were brilliant, and the snorkeling spot was incredible. Isla Mujeres itself is stunning.', autor: 'Emily R., United Kingdom' },
];
