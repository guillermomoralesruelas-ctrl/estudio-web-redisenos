// Contenido de Don Sanchez (San José del Cabo, Baja California Sur).
// IDIOMA: el sitio del cliente está en inglés (todos sus textos; solo el logo dice "Pasión culinaria por la Baja"),
// así que el rediseño va en inglés. La documentación del estudio sigue en español.
// Textos copiados de investigacion/crudo.json (donsanchezrestaurant.com: inicio, /an_jose_del_cabo_restaurant (Cuisine),
// /los_cabos_events_venues (Events), /wine_cava_san_jose_del_cabo (Cava) y /don_sanchez_san_jose_del_cabo_menu (Menu)).
// Textos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-26: /7338-2/ (Reservation Policies:
// menú infantil, descorche, formas de pago, tolerancia, mascotas, tiempos de mesa, no show). Ver CAMBIOS.md.
// Erratas corregidas: "Don Shancez" por "Don Sanchez", "Destintions Commited" por "Destinations Committed",
// "togarachi" por "togarashi", "quenele" por "quenelle", "axiote" por "achiote", "I charred" por "| charred".
// Lo nuevo (títulos, botones, mensajes de WhatsApp y textos del mapa) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;
export const foto = f;

/** Número que el sitio MUESTRA junto a "Whatsapp:" (+52 624 157 4267). Su enlace apunta a otro (52 624 142 2444):
 *  se usa el visible y queda pendiente de confirmar (CAMBIOS.md). */
export const WA = '526241574267';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = "Hello! I'm writing from your website.";

export const negocio = {
  nombre: 'Don Sanchez',
  lema: 'Signature cuisine by chef Edgar Román',
  frase: 'Live a culinary experience in one of the best restaurants in San José del Cabo',
  intro:
    'Don Sanchez is a contemporary Mexican restaurant in Los Cabos, and one of the best restaurants in downtown San José del Cabo, part of Grupo Ediths. We offer gastronomy focusing on regionally sourced seafood, locally raised animals and organic-produced vegetables paired with a fine wine selection, as well as the amazing agave spirits like mezcal and tequila.',
  horario: 'Open daily, 5 to 10 pm',
  musica: 'Live music daily',
  direccion: {
    calle: 'Blvd. Antonio Mijares 27',
    zona: 'Centro, Art District',
    cp: '23400',
    ciudad: 'San José del Cabo, B.C.S.',
  },
  whatsappVisible: '+52 624 157 4267',
  whatsapp: wa(`${saludo} I'd like to book a table at Don Sanchez.`),
  // Widget de OpenTable que el sitio incrusta en el inicio y en /reservations/ (rid=335539).
  opentable: 'https://www.opentable.com.mx/restref/client/?rid=335539&lang=en-US',
  // Ficha de Google del restaurante (enlace "Don Sanchez Restaurant" del bloque de reseñas del sitio).
  mapa: 'https://maps.google.com/?cid=16682735836891619597',
  mapaEmbed: 'https://maps.google.com/maps?q=Don%20Sanchez%20Restaurant%2C%20Boulevard%20Antonio%20Mijares%2C%20Centro%2C%20San%20Jos%C3%A9%20del%20Cabo%2C%20B.C.S.%2C%20M%C3%A9xico&t=m&z=10&output=embed&iwloc=near&hl=es_CO',
  resenaGoogle: { calificacion: '4.6', total: '468', url: 'https://maps.google.com/?cid=16682735836891619597' },
  facebook: 'https://www.facebook.com/donsanchez.loscabos',
  instagram: 'https://www.instagram.com/donsanchez.loscabos/',
  youtube: 'https://www.youtube.com/@donsanchezrestaurant',
  grupo: { nombre: 'Grupo Ediths', url: 'https://edithscabo.com/' },
  logo: f('logo', 806, 224, 'Don Sanchez, pasión culinaria por la Baja'),
  logoClaro: f('logo-claro', 518, 83, 'Don Sanchez'),
  hero: f('muro-neon', 1600, 1067, 'Brick wall with the Don Sanchez neon sign, cacti in clay pots and woven baskets'),
};

export const cocina = {
  titulo: 'Baja Med cuisine with a twist',
  sub: 'Redefining contemporary Mexican gastronomy',
  parrafos: [
    'Don Sanchez features impeccable service and exquisite cuisine created by Chef Edgar Román. What’s more, a remodel has preserved one of the most historic buildings of San José del Cabo and, in turn, created a unique dining environment combining modern luxury with old world Mexican heritage.',
    'We are an open-air restaurant. To book an experience inside the air-conditioned cava, of up to 8 people, please contact us.',
  ],
  chefTitulo: 'Meet the chef, Edgar Román',
  chef:
    'The menu created by Chef Edgar Román showcases local ingredients, the freshest seafood, and organic vegetables. With more than 20 years of experience in kitchens, the strength of Chef Edgar lies in his passion for exalting the flavor of each ingredient he uses, and to provide a round fine dining experience paired with Mexican and US wines (mostly), and the exquisite agave spirits.',
  salon: f('salon', 733, 1100, 'Dining room of Don Sanchez with wooden tables, woven pendant lamps and a brick wall'),
  chefFoto: f('chef-edgar-roman', 733, 1100, 'Chef Edgar Román holding an award certificate in front of the Don Sanchez neon sign'),
  coctel: f('coctel', 600, 900, 'Pink cocktail in a stemmed glass'),
};

// ---------- Elemento memorable: "From the farm, the sea and the ranch" ----------
// Cada lugar sale del texto del menú o de la cava. Las coordenadas son de geografía pública (no del negocio) y solo
// sirven para poner el punto en el dibujo de la península.
export type Lugar = {
  id: string;
  nombre: string;
  region: string;
  tipo: 'farm' | 'sea' | 'ranch' | 'wine' | 'kitchen';
  lat?: number;
  lon?: number;
  /** Frase del menú o de la cava que menciona el lugar. */
  cita: string;
  /** Nombres de platillos de menu.json. */
  platillos?: string[];
  vino?: boolean;
};

export const origen = {
  titulo: 'From the farm, the sea and the ranch',
  intro:
    'Don Sanchez restaurant in Los Cabos is inspired by the fresh ingredients found in the Baja California peninsula. We celebrate Mexican cuisine and the local products from the farm, the sea and the ranch.',
  lugares: [
    {
      id: 'sjc', nombre: 'San José del Cabo', region: 'Baja California Sur', tipo: 'sea', lat: 23.06, lon: -109.69,
      cita: 'Regionally sourced seafood. The catch of the day, at our table on Blvd. Mijares.',
      platillos: ['Catch of the day tartar', 'Catch of the day tiradito', 'Tikin-xic fish', 'Desert catch'],
    },
    {
      id: 'miraflores', nombre: 'Miraflores', region: 'Baja California Sur', tipo: 'farm', lat: 23.37, lon: -109.78,
      cita: 'Crumbled fresh cheese from Miraflores. Organic golden onion from Miraflores.',
      platillos: ['Pork gorditas', 'Golden onion tinga sopes'],
    },
    {
      id: 'pescadero', nombre: 'Pescadero', region: 'Baja California Sur', tipo: 'farm', lat: 23.36, lon: -110.17,
      cita: 'Roasted coconut rice with Pescadero strawberry chips.',
      platillos: ['Blackened shrimp'],
    },
    {
      id: 'sierra', nombre: 'Sierra de San Francisco', region: 'Baja California Sur', tipo: 'ranch', lat: 27.6, lon: -113.0,
      cita: 'Confited pulled goat from Sierra de San Francisco.',
      platillos: ['Confited goat sope'],
    },
    {
      id: 'guadalupe', nombre: 'Valle de Guadalupe and Ensenada', region: 'Baja California', tipo: 'wine', lat: 32.0, lon: -116.6,
      cita: 'The best of Mexican wines from Valle de Guadalupe and Ensenada, for a five-course dinner in the cava.',
      vino: true,
    },
    {
      id: 'oaxaca', nombre: 'Huajuapan de León', region: 'Mixteca Baja, Oaxaca', tipo: 'kitchen',
      cita: 'Ancestral mole by traditional cook Sirenia Concepción Mora from Rancho del Rincón.',
      platillos: ['Ancestral mole'],
    },
    {
      id: 'mexico', nombre: 'Hidalgo and Coahuila', region: 'Mexico', tipo: 'wine',
      cita: 'Mexican wines from Hidalgo and Coahuila on our wine list and in the cava tastings.',
      vino: true,
    },
    {
      id: 'eeuu', nombre: 'Napa Valley and Columbia Valley', region: 'United States', tipo: 'wine',
      cita: 'Wines from Napa Valley, California, and Columbia Valley, among other important wine regions.',
      vino: true,
    },
  ] satisfies Lugar[] as Lugar[],
};

export const tipoTexto: Record<Lugar['tipo'], string> = {
  farm: 'From the farm',
  sea: 'From the sea',
  ranch: 'From the ranch',
  wine: 'For the cava',
  kitchen: 'From a traditional kitchen',
};

export const cava = {
  titulo: "A wine lover's paradise",
  texto:
    'Don Sanchez restaurant in San José del Cabo offers a passionate devotion to the quality of our wine label selection. The restaurant features the breadth of top select wines from around the world, enhancing the presence of Mexican and US labels, outstanding depth in mature vintages and excellent harmony with the menu. That, as well as the Riedel top-notch wine glasses offered, create the perfect wine-lover experience.',
  sommelierTitulo: 'Enhancing the wine experience',
  sommelier:
    'The core purpose of our sommelier service is to ensure that dining patrons are able to find a wine within their budget that fits their tastes and complements their food.',
  cataTitulo: 'The Cava at Don Sanchez',
  cata:
    'The perfect place to have an outstanding wine-lovers experience, guided by our expert. Book the cava to have an intimate tasting experience. We can create a unique tasting for you, as a five-course dinner, paired with the best of Mexican wines from Valle de Guadalupe, Hidalgo, Ensenada, and Coahuila. Or the ones from Napa Valley, California, Columbia Valley, among other important wine regions.',
  preguntas: [
    { p: 'For how many people is the cava?', r: 'Up to 8 guests. Our reservation policies ask for a minimum of 2 and a maximum of 6 people; for groups of 8, comfort may be compromised due to the limited size of the cellar.' },
    { p: 'What are the cava services?', r: 'Air condition, impeccable service, wine tasting and full dinner.' },
    { p: 'What do I need to know to book the cava?', r: 'Please book in advance. Our expert will contact you to tailor make your wine experience. Please note that you may have to pay in advance your cava experience at Don Sánchez to ensure the spot. A minimum wine consumption of $300 USD is required, which can be one premium bottle or two bottles equivalent to $300 USD.' },
    { p: 'Will I meet chef Edgar Román?', r: 'Yes. If you book the cava, you will have the opportunity to meet our chef and to know more about wines. Our chef Edgar Román is a wine connoisseur that will guide you through an epic wine experience.' },
    { p: 'Can I bring my own wine?', r: 'The corkage fee per 750 ml bottle of wine is $630 MXN. We only accept wines with corks that are not available on our wine list. We do not allow corkage of spirits or distilled liquors.' },
  ],
  whatsapp: wa(`${saludo} I'd like to book the cava for a wine tasting dinner. Date: ___, number of guests: ___.`),
};

export const reconocimientos = [
  {
    titulo: 'International Five Star Diamond Award',
    texto: 'Don Sánchez restaurant and Chef Edgar Román were honored by The American Academy of Hospitality Sciences with the International Five Star Diamond Award.',
    foto: f('five-star-diamond', 545, 818, 'Five Star Diamond Award plaque on a table with the Don Sanchez menu'),
    cubrir: true,
  },
  {
    titulo: '250 Best Restaurants in Mexico, 2024',
    texto: 'We are part of the 250 Best Restaurants in Mexico by Culinaria Mexicana in 2024, one of the most renowned gastronomic sites in Mexico.',
    foto: f('insignia-guia-2024', 640, 360, 'Guía México Gastronómico 2024 badge by Culinaria Mexicana'),
    enlace: 'https://www.culinariamexicana.com.mx/',
  },
  {
    titulo: 'Queer Destinations Committed Entity',
    texto: 'Through “Hospitality meets Diversity” we are the first restaurant in Los Cabos with the “Queer Destinations Committed” certification. This assures safety to all customers regardless of their sexual orientation and gender identity.',
    foto: f('insignia-queer-destinations', 600, 417, 'Queer Destinations Committed Entity logo'),
  },
];

// Reseñas de Google que el sitio muestra en su inicio (se dejan fuera una negativa y una mixta; ver CAMBIOS.md).
export const opiniones = [
  { autor: 'Tony Pujara', texto: 'Wow! Wow! Wow! What an incredible place for dinner. We had the fish of the day (grilled in a banana leaf) and the tuna tartare with avocado. Probably one of the best meals we’ve had in Cabo. The team running the restaurant are amazing and we had fantastic service.' },
  { autor: 'Christina E', texto: 'From the street this place opens up into a fabulous and large outside fine dining restaurant. Food was fresh and culinary dreams. They make their Caesar salad at your table. Fresh catch of day definitely a must. Desserts were amazing.' },
  { autor: 'Kristen W', texto: 'The service here was amazing, we had the brisket, and it was so full of flavor! The atmosphere was perfect as well.' },
];

export const eventos = {
  titulo: 'Event venue in Los Cabos',
  texto:
    'Gatherings in Los Cabos can be experienced in Don Sanchez restaurant. Our Mexican bohemian-chic design and cuisine proposal will elevate your event to a memorable celebration. From incentive groups, rehearsal dinners, to destination weddings, we are ready to host your event in Cabo, at the quaint San José del Cabo town.',
  texto2:
    'San José del Cabo offers a colorful background, yet tranquil and private place to host your Cabo celebration. Contact our event specialist, who will guide you through the process of developing your event in Los Cabos.',
  tipos: ['Special celebrations', 'Weddings', 'Rehearsal dinners', 'Corporate groups'],
  fotos: [
    f('cena-de-grupo', 1024, 802, 'Large group dinner under the palapa roof of Don Sanchez'),
    f('mesa-foto', 600, 900, 'Guest photographing a dish at a wooden table in the garden'),
  ],
};

export const politicas = [
  { t: 'Open-air restaurant', d: 'The cava is the only air-conditioned room.' },
  { t: 'Pet-friendly', d: 'We accept pets as long as they wear a harness or leash.' },
  { t: 'Payment', d: 'Cash, Visa and Mastercard (American Express is not accepted at the moment). Maximum of 3 cards per bill.' },
  { t: 'Table time', d: '2 hours for tables of 2 to 4 people and for tables of more than 5; 3 hours for groups of more than 12.' },
  { t: 'Tolerance', d: 'Maximum 15 minutes waiting time; if you are late and do not let us know, your table will become available.' },
  { t: 'No show', d: 'Not showing up for the reservation without prior notice has a charge of $500 MXN per person.' },
];

export const galeria = [
  f('grilled-octopus', 1025, 683, 'Grilled octopus with smoked carrot purée and charred lemon'),
  f('abalone-carpaccio', 1025, 683, 'Abalone carpaccio under a glass cloche on a volcanic stone'),
  f('beef-brisket', 1025, 683, 'Chef finishing the Sterling Silver beef brisket with olive oil'),
  f('churros', 1025, 683, 'Churros with two dipping sauces on a slate board'),
];
