// Contenido de AquaCore Adventures, tomado del sitio original (investigacion/crudo.json y, para Progreso,
// de sus páginas en vivo con curl el 2026-09-28). Regla: nada inventado. Lo que falta está en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, generado por fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'AquaCore Adventures',
  lema: 'Beyond the Shore, Unleash Adventure',
  telefono: '+52 999 178 6704',
  tel: '+529991786704',
  whatsapp: '529991786704',
  email: 'aquacoreadventures@gmail.com',
  direccion: 'Blvd. Kukulcan km 8, Punta Cancun, Zona Hotelera, 77500',
  horario: 'Monday – Sunday, 09:00 am – 09:00 pm',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Blvd. Kukulcan km 8, Punta Cancun, Zona Hotelera, 77500 Cancun, Quintana Roo'),
  marina: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Marina Yucalpetén, Progreso, Yucatán'),
  web: 'https://aquacoreadventures.com',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const msgGeneral = "Hi! I'm interested in booking with AquaCore Adventures";

export const confianza = [
  { valor: '4.9/5', texto: '350+ reviews' },
  { valor: 'Free cancellation', texto: 'Up to 48 h before' },
  { valor: 'Instant response', texto: 'Within 1 hour' },
  { valor: 'No deposit', texto: 'Pay on the day' },
];

export type Costa = { nombre: string; mar: string; frase: string; actividades: string[]; url: string };
export const costas: Costa[] = [
  {
    nombre: 'Cancun', mar: 'Caribbean',
    frase: 'Turquoise Caribbean waters, coral reefs, cenotes and luxury marinas.',
    actividades: ['Yachts', 'Kitesurf', 'Diving', 'Snorkel', 'Jet Ski', 'Paddleboard', 'Windsurf', 'Surf'],
    url: '/cancun/',
  },
  {
    nombre: 'Progreso', mar: 'Gulf of Mexico',
    frase: 'Wide flat beaches, steady trade winds and shallow turquoise water.',
    actividades: ['Paddleboard', 'Yachts', 'Kitesurf', 'Kayak', 'Jet Ski', 'Cenote Diving', 'Cenote Snorkeling'],
    url: '/progreso/',
  },
  {
    nombre: 'Riviera Maya', mar: 'Caribbean',
    frase: 'From Playa del Carmen to Tulum — cenotes, reef diving and laid-back Mayan coastline.',
    actividades: ['Cenote Diving', 'Reef Diving', 'Turtle Snorkel', 'Yachts', 'Reef Snorkel', 'Cenote Snorkel', 'Kitesurf', 'Paddleboard', 'Kayak'],
    url: '/riviera-maya/',
  },
  {
    nombre: 'Los Cabos', mar: 'Pacific · Sea of Cortez',
    frase: 'Where the desert meets the sea — deep-water fishing, whales and Pacific sunsets.',
    actividades: ['Yachts', 'Sport Fishing', 'Kitesurf', 'Diving', 'Snorkel', 'Paddleboard', 'Jet Ski', 'Camel Sunset Ride'],
    url: '/los-cabos/',
  },
];

// ---------- Progreso, mes por mes ----------
// Calendarios: clases av2-calendar-month--peak/good/low de cada página del sitio (ene → dic).
export type Nivel = 'peak' | 'good' | 'low';
const cal = (s: string): Nivel[] => s.split(' ').map((c) => (c === 'P' ? 'peak' : c === 'G' ? 'good' : 'low'));

export type ActividadProgreso = {
  id: string; nombre: string; precio: string; dato: string; nota: string; meses: Nivel[]; url: string;
};
export const progreso: ActividadProgreso[] = [
  {
    id: 'yachts', nombre: 'Yacht charters', precio: 'From $7,999 MXN per boat',
    dato: '15 crewed boats · Marina Yucalpetén',
    nota: 'Gulf waters are calmest Apr–Aug. Nortes (Oct–Mar) bring strong winds: coastal half-day charters are fine, but Alacranes expeditions and offshore fishing are weather-dependent.',
    meses: cal('G G P P P P P P G L G G'), url: '/progreso/progreso-yacht-charters/',
  },
  {
    id: 'kitesurf', nombre: 'Kitesurf', precio: 'Beginner course: 9 hours / 3 days',
    dato: 'IKO lessons · Chicxulub, Chelem, Telchac',
    nota: 'An inverse season: peak is Nov–Mar, when cold fronts (nortes) deliver 15–25 knots for days. May–Sep is thermal wind only (lighter, less reliable).',
    meses: cal('P P P G L L L L L G P P'), url: '/progreso/progreso-kitesurf/',
  },
  {
    id: 'paddleboard', nombre: 'Paddleboard', precio: '$650 MXN per person',
    dato: 'Sea or mangrove route · 2:00–2:30 h',
    nota: 'Calmest water is sunrise to 10 am. Nortes (Oct–Mar) can bring strong afternoon wind, so schedules shift to early mornings. Rainy season (Jul–Sep) has occasional storms.',
    meses: cal('G P P P P G G L L G P P'), url: '/progreso/progreso-paddleboard/',
  },
  {
    id: 'kayak', nombre: 'Kayak', precio: '2 h guided eco-tour',
    dato: 'Chelem–Chuburná mangroves',
    nota: 'Great year-round: the channels are sheltered from wind. Flamingo sightings peak Nov–Apr. Nortes bring some blustery afternoons, but mornings stay calm.',
    meses: cal('P P P P G G G L L G P P'), url: '/progreso/progreso-kayak/',
  },
  {
    id: 'jetski', nombre: 'Jet Ski', precio: 'From $2,999 MXN / hour (2 riders)',
    dato: 'Sea-Doo · Marina Yucalpetén',
    nota: 'Smoothest water is Apr–Aug. Nortes (Oct–Mar) can bring short-burst winds in the afternoon: morning slots are recommended, and rides are rescheduled if the harbor master closes the port.',
    meses: cal('G G G P P P P P L L G G'), url: '/progreso/progreso-waverunner/',
  },
  {
    id: 'cenote-snorkel', nombre: 'Cenote snorkeling', precio: '$3,640 MXN per person',
    dato: 'Nomozón & Nayah · lunch in a Maya community',
    nota: 'Cenotes are limestone-filtered freshwater with stable 24–25 °C water. Rainy season (Aug–Sep) may reduce visibility after heavy storms.',
    meses: cal('P P P P P G G G L G P P'), url: '/progreso/progreso-cenote-snorkeling/',
  },
  {
    id: 'cenote-dive', nombre: 'Cenote diving', precio: '$5,070 MXN per person',
    dato: 'Certified or Discover Scuba · 2 cenotes',
    nota: 'Two dives in Nomozón (open) and Nayah (semi-closed). Pickup from Progreso, Chelem, Chicxulub, the cruise dock or Mérida.',
    meses: cal('P P P P P G G G L G P P'), url: '/progreso/progreso-cenote-diving/',
  },
];

// Avisos del mes (de las mismas páginas). Índices 0 = enero.
export const avisos: { meses: number[]; texto: string }[] = [
  { meses: [9, 10, 11, 0, 1, 2], texto: 'Nortes season: cold fronts with strong winds, best for kites; boats and boards go out early.' },
  { meses: [10, 11, 0, 1, 2, 3], texto: 'Flamingos feed in the Chuburná lagoon at sunrise (Nov–Apr).' },
  { meses: [1, 2, 3, 4, 5], texto: 'Sailfish peak offshore (Feb–Jun).' },
  { meses: [1, 2], texto: 'Commercial grouper season is closed (Feb–Mar); sport catch-and-release is allowed.' },
  { meses: [3, 4, 5, 6, 7], texto: 'Gulf waters are at their calmest (Apr–Aug).' },
  { meses: [7, 8], texto: 'Tropical-storm months: weather cancellations are always refunded or rescheduled free.' },
];

export const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const mesesCortos = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ---------- Flota de Progreso (15 barcos, /progreso/progreso-yacht-charters/) ----------
export type Barco = { nombre: string; tipo: string; pies: number; huespedes: number; horas: number; precio: number; foto?: string; nota?: string };
export const flota: Barco[] = [
  { nombre: 'Bayliner 25ft', tipo: 'Coastal cruiser', pies: 25, huespedes: 6, horas: 5, precio: 7999, foto: 'flota-bayliner-25' },
  { nombre: 'Boston Whaler 30ft', tipo: 'Sport-fishing boat', pies: 30, huespedes: 8, horas: 6, precio: 13499, foto: 'flota-boston-whaler-30' },
  { nombre: 'Tiara 34ft', tipo: 'Convertible yacht', pies: 34, huespedes: 10, horas: 6, precio: 13499 },
  { nombre: 'Catalina 42ft', tipo: 'Sailing yacht', pies: 42, huespedes: 10, horas: 6, precio: 9999, foto: 'flota-catalina-42', nota: 'Sail' },
  { nombre: 'Meridian 42ft', tipo: 'Flybridge motor yacht', pies: 42, huespedes: 15, horas: 6, precio: 23499, foto: 'flota-meridian-42' },
  { nombre: 'Tiara 44ft', tipo: 'Luxury motor yacht', pies: 44, huespedes: 14, horas: 6, precio: 20999, foto: 'flota-tiara-44' },
  { nombre: 'Silver 45ft', tipo: 'Flybridge motor yacht', pies: 45, huespedes: 15, horas: 6, precio: 21999, foto: 'flota-silver-45' },
  { nombre: 'Gulf Star 45ft', tipo: 'Motor yacht', pies: 45, huespedes: 15, horas: 5, precio: 20000, foto: 'flota-gulf-star-45' },
  { nombre: 'Sea Ray 46ft Luxury', tipo: 'Sea Ray Sundancer', pies: 46, huespedes: 12, horas: 5, precio: 29999, foto: 'flota-sea-ray-46' },
  { nombre: 'Sea Ray 46ft (II)', tipo: 'Sea Ray Sundancer', pies: 46, huespedes: 15, horas: 6, precio: 23000, foto: 'flota-sea-ray-46-ii', nota: 'Best value' },
  { nombre: 'Sea Ray 48ft', tipo: 'Sea Ray Sundancer', pies: 48, huespedes: 15, horas: 6, precio: 22499, foto: 'flota-sea-ray-48' },
  { nombre: 'Sea Ray 50ft', tipo: 'Sea Ray flybridge', pies: 50, huespedes: 15, horas: 6, precio: 24999 },
  { nombre: 'Catamarán 50ft', tipo: 'Party catamaran', pies: 50, huespedes: 40, horas: 5, precio: 33999, foto: 'flota-catamaran-50', nota: 'Groups' },
  { nombre: 'Sea Ray Sundancer 60ft', tipo: 'Luxury motor yacht', pies: 60, huespedes: 20, horas: 6, precio: 31999, foto: 'flota-sundancer-60', nota: 'Luxury' },
  { nombre: 'Cupecoy 77ft', tipo: 'Mega-yacht', pies: 77, huespedes: 20, horas: 6, precio: 49999, foto: 'flota-cupecoy-77', nota: 'Signature' },
];
export const medidasFlota: Record<string, [number, number]> = {
  'flota-bayliner-25': [900, 581], 'flota-boston-whaler-30': [890, 900], 'flota-catalina-42': [876, 900],
  'flota-meridian-42': [900, 671], 'flota-tiara-44': [900, 900], 'flota-silver-45': [900, 675],
  'flota-gulf-star-45': [900, 549], 'flota-sea-ray-46': [900, 677], 'flota-sea-ray-46-ii': [900, 675],
  'flota-sea-ray-48': [900, 897], 'flota-catamaran-50': [900, 509], 'flota-sundancer-60': [900, 900],
  'flota-cupecoy-77': [900, 605],
};
export const incluyeCharter = 'All charters are crewed (captain + mate), include fuel, ice, drinking water and safety equipment, and depart from Marina Yucalpetén, 10 minutes from downtown Progreso and 40 minutes from Mérida.';

export const tiposCharter = [
  { nombre: 'Half-Day Coastal Cruise', duracion: '4 hours', texto: 'Cruise the Progreso–Chicxulub coast, anchor for a swim and ceviche lunch. Perfect intro for families and first-timers.' },
  { nombre: 'Sunset Charter', duracion: '3 hours', texto: 'Depart 2 hours before sunset. Drinks, canapés, live playlist. Golden hour along the malecón and pier.' },
  { nombre: 'Deep-Sea Fishing', duracion: '6–8 hours', texto: 'Sport-fishing charter 20–40 mi offshore. Grouper, snapper, kingfish, mahi, cobia, sailfish seasonal. Rods, tackle and ice included.' },
  { nombre: 'Arrecife Alacranes Expedition', duracion: 'Full day (12h)', texto: 'Dawn departure for the UNESCO reef 130 km north. Snorkel or dive among the largest reef system in the Gulf. Fast boat required.' },
];

// ---------- Kitesurf en Isla Blanca (/kitesurf/) ----------
export const kite = {
  texto: "Our IKO-certified instructors teach from Isla Blanca, the Caribbean's flat-water mecca just 40 minutes north of Cancun Hotel Zone. We also offer downwind tours, foil progression, wing foil sessions and full gear rentals.",
  datos: [
    { valor: '15–25 kt', texto: 'Avg wind' },
    { valor: '27 °C', texto: 'Sea temp' },
    { valor: '9–17 m', texto: 'Kite sizes' },
  ],
  temporada: 'Wind season runs November through June, with peak conditions March to May. August–October is hurricane/low-wind season.',
  programas: [
    { nombre: 'Beginner', para: 'Never kited before', texto: '9-hour IKO Level 1–3 course. Wind theory, body drag, first water start. 3 days to independence. Gear, insurance and radio helmet included.' },
    { nombre: 'Intermediate', para: 'Rider with basics', texto: 'Ride upwind confidently, first jumps, transitions, strapless tricks. One-on-one video coaching to fix habits and progress fast.' },
    { nombre: 'Advanced & Foil', para: 'Freestyle / kite foil', texto: 'Unhooked tricks, big-air progression, kite foil and wing foil transitions. Coached by riders active on the international circuit.' },
  ],
};

// ---------- Paddleboard en Progreso (/progreso/progreso-paddleboard/) ----------
export const sup = {
  texto: 'Guided stand-up paddleboard tours in Progreso, Yucatán: two separate routes at the same price. No previous experience needed. Certified guide and all gear on us, including hydration, snacks and the photos and video of your tour.',
  rutas: [
    { nombre: 'Sea route', texto: 'Open-water paddle from the shore next to the Progreso pier and Chicxulub beach. Wide horizon, salt air and the iconic pier as a landmark.' },
    { nombre: 'Mangrove route', texto: 'Protected estuary between Chelem and Chuburná threaded with mangrove channels. Calmer water, herons and iguanas, and the best chance of flamingos.' },
  ],
  salidas: [
    { hora: '5:10 am', nombre: 'Sunrise', texto: 'The calmest water of the day and the best chance of flamingos.' },
    { hora: '6:00 am', nombre: 'Morning', texto: 'Mild temperature, soft light, perfect for families and kids.' },
    { hora: '4:30 pm', nombre: 'Afternoon', texto: 'Golden hour light over the estuary, the best slot for photos and video.' },
  ],
};

// ---------- Cancún (/ y /cancun/) ----------
export const cancun = {
  texto: 'From luxury yacht charters along the Hotel Zone to kitesurfing at Isla Blanca, Cancun is the gateway to every kind of water experience in the Mexican Caribbean. All our operations depart from either the Hotel Zone, Marina Nichupté or Isla Blanca, all within a 30-minute drive from the Cancun airport and the main hotels.',
  actividades: [
    { nombre: 'Yacht Charters', texto: '64 luxury yachts from 27 to 105 ft. Birthdays, bachelor parties, sunset cruises, and private events.' },
    { nombre: 'Kitesurfing', texto: 'IKO-certified school at Isla Blanca. Beginner to advanced lessons with world-class instructors.' },
    { nombre: 'Scuba Diving', texto: 'Reef dives, cenote explorations, and discovery programs. PADI-certified guides.' },
    { nombre: 'Snorkeling', texto: 'Swim with sea turtles, explore coral reefs, and visit cenotes. No experience needed!' },
    { nombre: 'Waverunner / Jet Ski', texto: 'High-speed adrenaline across the Caribbean Sea. Single and double riders welcome.' },
    { nombre: 'Paddleboard', texto: 'Glide through crystal-clear lagoons at sunrise or sunset. Perfect for families and couples.' },
    { nombre: 'Windsurf', texto: 'Harness the Caribbean wind. Lessons and rentals for all levels available daily.' },
    { nombre: 'Surf', texto: 'Catch waves at the best spots with expert guidance. Equipment included.' },
  ],
  temporada: 'Yacht charters, snorkeling and diving are best from April to August (calm seas, warm water). Kitesurf and windsurf peak from November to June when trade winds are strongest.',
};

export const razones = [
  { titulo: 'Best Price Guarantee', texto: 'Book directly with us — no commissions to agencies or platforms. You get the best rate, always.' },
  { titulo: 'Certified & Insured', texto: 'IKO-certified kitesurf instructors, PADI-certified dive guides, and licensed yacht captains. Full insurance coverage.' },
  { titulo: 'Free Cancellation', texto: 'Plans change — cancel up to 48 hours before your activity for a full refund. Weather cancellations always free.' },
  { titulo: 'Instant Response', texto: 'Message us on WhatsApp and get a response within 1 hour. We speak English, Spanish, and Polish.' },
];

export const premios = "Tripadvisor Travelers' Choice 2023, 2024 and 2025, and 5-star Google reviews.";
