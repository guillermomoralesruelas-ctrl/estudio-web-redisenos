// Contenido de Emilia UW Photo (Emilia Black Box), tomado del sitio original: investigacion/crudo.json (inicio,
// Services, Underwater Photoshoot, Cenote Photoshoot y Beach Photoshoot) y, para la biografía, su página /about/
// en vivo (2026-09-27). El sitio está en inglés: el rediseño también. Nada inventado; lo redactado por nosotros
// (títulos del selector, microcopy de botones) está declarado en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, copias .webp hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Emilia Black Box',
  marca: 'Emilia UW Photo',
  zona: 'Between Tulum and Playa del Carmen, Riviera Maya',
  whatsapp: '529985383661',
  telefonoVisible: '+52 998 538 3661',
  // No publican la dirección del cenote ("I'll send you the exact location"): se enlaza la ruta entre las dos ciudades.
  mapa: 'https://www.google.com/maps/dir/Playa+del+Carmen,+Quintana+Roo/Tulum,+Quintana+Roo',
  sitio: 'https://emilia-uwphoto.com/',
  contacto: 'https://emilia-uwphoto.com/contact/',
  portafolio: 'https://emilia-uwphoto.com/underwater-photoshoot-portfolio/',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/emilia.blackbox/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/emiliablackbox' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/channel/UCIH_NOUOvGW1f7_hibn4uWA' },
    { nombre: 'Pinterest', url: 'https://www.pinterest.com.mx/emiliablackbox/' },
  ],
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa("Hi Emilia! I found your website and I'd like to check availability for a cenote photoshoot.");

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  parejaRayos: f('pareja-rayos', 1500, 1126, 'A couple in white clothes underwater in a cenote, with beams of light coming through the water'),
  selvaRetrato: f('selva-retrato', 901, 1200, 'Portrait of a woman with wet hair at the edge of a cenote, jungle behind her'),
  selvaPareja: f('selva-pareja', 901, 1200, 'Two men embracing on the rocks by a cenote, sunlight through the trees'),
  orilla: f('orilla', 682, 1024, 'A woman lying in shallow water on the rocks, looking at the camera'),
  superficieMirada: f('superficie-mirada', 800, 1200, 'Close portrait of a woman floating at the surface of a cenote'),
  superficieDorado: f('superficie-dorado', 683, 1024, 'A woman in a golden dress sitting half in the water of a cenote'),
  reflejo: f('reflejo', 703, 1024, 'A face just under the surface, its reflection rippling above'),
  vestidoAzul: f('vestido-azul', 1120, 1400, 'A woman in a light blue dress floating underwater next to an old wooden ladder'),
  vestidoRojoPeces: f('vestido-rojo-peces', 933, 1400, 'A woman in a red dress underwater surrounded by small fish'),
  vestidoRojo: f('vestido-rojo', 800, 1200, 'A red dress spreading underwater in a blue cenote'),
  nenufares: f('nenufares', 800, 1200, 'A woman in a white dress underwater among water lily stems'),
  parejaBeso: f('pareja-beso', 901, 1200, 'A couple kissing underwater in a cenote, white fabric flowing above them'),
  tulBlanco: f('tul-blanco', 800, 1200, 'A woman underwater wrapped in white tulle'),
  azulRoca: f('azul-roca', 800, 1200, 'A woman in a blue skirt swimming along the mossy rock wall of a cenote'),
  retratoRoca: f('retrato-roca', 800, 1200, 'Underwater portrait of a woman resting on a rock'),
  tulCaverna: f('tul-caverna', 732, 1024, 'A dancer with white tulle underwater under the rock ceiling of a cavern'),
  buceo: f('buceo', 683, 1024, 'A scuba diver exploring a cenote wall'),
};

// "How far into the water?": los niveles salen de cómo ella describe sus sesiones.
export type Paquete = { nombre: string; precio: string; puntos: string[] };
export type Nivel = {
  id: 'jungle' | 'surface' | 'underwater' | 'diving';
  nombre: string;
  profundidad: string; // lo que se ve en el dibujo
  sesion: string;
  resumen: string;
  aliento: string;
  fotos: [Foto, Foto];
  solo: Paquete[];
  pareja: Paquete[];
  pagina: string;
};

const cenoteSolo: Paquete = {
  nombre: 'Solo Photoshoot',
  precio: 'from 6,000 MXN',
  puntos: ['2 hours', '2 outfits', '20 final high-end edited photos', 'Surface and half-water portraits', 'Jungle and cenote surroundings', 'Cenote entrance included', 'Private online gallery'],
};
const cenotePareja: Paquete = {
  nombre: 'Couple Photoshoot',
  precio: 'from 8,650 MXN',
  puntos: ['2 people', '2 hours', '2 outfits', '20 final high-end edited photos', 'Surface and half-water portraits', 'Jungle and cenote surroundings', 'Cenote entrance included', 'Private online gallery'],
};

export const niveles: Nivel[] = [
  {
    id: 'jungle',
    nombre: 'In the jungle',
    profundidad: 'Above the water',
    sesion: 'Cenote Jungle Photoshoot',
    resumen: 'For those who love the cenote atmosphere but prefer to stay above the water. Portraits surrounded by jungle, on the rocks and at the edge of the cenote.',
    aliento: 'You stay dry if you want to.',
    fotos: [fotos.selvaRetrato, fotos.selvaPareja],
    solo: [cenoteSolo],
    pareja: [cenotePareja],
    pagina: 'https://emilia-uwphoto.com/cenote-photoshoot/',
  },
  {
    id: 'surface',
    nombre: 'At the surface',
    profundidad: 'Half in, half out',
    sesion: 'Cenote Jungle Photoshoot',
    resumen: 'Natural movement in shallow areas and half-water portraits. Because you are never fully submerged, the experience feels more relaxed, accessible and easier to enjoy from the beginning.',
    aliento: 'Your head stays out of the water.',
    fotos: [fotos.superficieMirada, fotos.superficieDorado],
    solo: [cenoteSolo],
    pareja: [cenotePareja],
    pagina: 'https://emilia-uwphoto.com/cenote-photoshoot/',
  },
  {
    id: 'underwater',
    nombre: 'Fully underwater',
    profundidad: 'Under the surface',
    sesion: 'Underwater Photoshoot',
    resumen: 'Private underwater portraits inside a cenote, fully submerged, using natural light filtering through the water. This is the signature experience — the one most people come to me for.',
    aliento: 'Just a few seconds of breath-hold is enough to get a great photo.',
    fotos: [fotos.vestidoAzul, fotos.parejaBeso],
    solo: [
      { nombre: 'Short session', precio: 'from 6,000 MXN', puntos: ['1 hour', '1 outfit', '10 high-end edited photos', 'Cenote entrance included', 'Guidance before and during the session'] },
      { nombre: 'Full session', precio: 'from 8,000 MXN', puntos: ['2 – 2.5 hours', '2 outfits', '20 high-end edited photos', 'Fabrics, skirts and dresses available', 'Cenote entrance included'] },
    ],
    pareja: [
      { nombre: 'Underwater', precio: 'from 9,800 MXN', puntos: ['2 people', '2 hours', '2 outfits', '20 high-end edited photos', 'Fabrics, skirts and dresses available', 'Cenote entrance included'] },
      { nombre: 'Full Experience: Underwater + Jungle', precio: 'from 12,000 MXN', puntos: ['2 people', '3 hours', '2 – 3 outfits', '30 high-end edited photos', '1 video in reel format', 'Additional portraits above water / jungle', 'Cenote entrance included'] },
    ],
    pagina: 'https://emilia-uwphoto.com/underwater-photoshoot-in-cenotes/',
  },
  {
    id: 'diving',
    nombre: 'Diving',
    profundidad: 'With scuba',
    sesion: 'Diving Photography',
    resumen: 'Professional photography during your dive, in the open sea or in a cenote, for certified divers and beginners. I document the moments you can’t see from above — your movement, the marine life, the light.',
    aliento: 'You breathe from your tank; I follow your dive.',
    fotos: [fotos.buceo, fotos.azulRoca],
    solo: [],
    pareja: [],
    pagina: 'https://emilia-uwphoto.com/scuba-diving/',
  },
];

export const comoFunciona = [
  { titulo: 'Choose your date', texto: 'We select the best day based on availability and conditions.' },
  { titulo: 'Get prepared', texto: 'I’ll guide you before the session on what to bring, what to wear, and what to expect.' },
  { titulo: 'The photoshoot', texto: 'During the session, I guide you step by step in the water so you can feel comfortable and move naturally.' },
  { titulo: 'Receive your images', texto: 'After the session, you’ll receive a curated selection of professionally edited photos.' },
];

export const resenas = [
  { autor: 'Nicole Topham', texto: 'Emilia was so helpful right from the beginning in helping me decide what colours and outfits would look best in the water. She was so patient during the shoot nothing ever felt rushed and as this was my first time doing something like this I had so much guidance throughout the shoot!' },
  { autor: 'Eugenia Parcero Fernandez', texto: 'She carefully explained how I should dive and move underwater to get the best shots, which made me feel very comfortable during the whole session. The final results completely exceeded my expectations — the photos turned out absolutely beautiful.' },
  { autor: 'Darren Cosgrove', texto: 'A truly incredible experience. Emilia was so patient and calm and gave us all the knowledge we needed for the underwater part of the shoot. HIGHLY recommended.' },
  { autor: 'Luis Aguilar', texto: 'Increíble la experiencia! totalmente recomendado! experiencia única en pareja!' },
];

export const preguntas = [
  { p: 'Do I need to know how to swim?', r: 'You don’t need to be a strong swimmer. We stay in calm, shallow areas of the cenote, and I guide you through the entire session.' },
  { p: 'I’ve never done anything underwater before. Is that OK?', r: 'Yes. Cenotes have calm, still water with no waves or currents, unlike the ocean — which makes them ideal for a first-time underwater experience. With 8 years of experience guiding people through their very first underwater session, I make sure you feel in control the whole time.' },
  { p: 'Where is the cenote located?', r: 'The cenote is located between Playa del Carmen and Tulum, 20 minutes each way. If you have your own car, I’ll send you the exact location to meet at the entrance. If not, local buses from Playa del Carmen and Tulum drop you right at the cenote entrance. If you’re staying in Playa del Carmen, I can also arrange a trusted taxi for an extra fee. Transportation isn’t included.' },
  { p: 'What time does it start, and why so early?', r: 'Sessions start early in the morning, around 8–8:30 am. That’s when the light inside the cenote is at its best, and when there’s practically no one else around.' },
  { p: 'Do I need to bring my own outfit?', r: 'I have a selection of fabrics, skirts and dresses available for the session. You’re also welcome to bring your own outfit — I’ll guide you beforehand to make sure it works well with the cenote environment.' },
  { p: 'Can I do it if I’m pregnant?', r: 'Absolutely. Being in the water won’t affect your baby. We’ll make sure you feel comfortable and safe throughout, and take breaks if you feel cold.' },
  { p: 'What about contact lenses?', r: 'I recommend removing them before the session, since it’s common to lose them underwater. If you’d rather keep them in, that’s fine too — just bring a spare pair in case they fall out.' },
  { p: 'Can we come as a group?', r: 'Solo and couple sessions are both available, from 1 to 2 people depending on the package. If you’re a group of 3 or more (like a bachelorette or birthday celebration), reach out and I’ll let you know what’s possible.' },
  { p: 'When and how do I get my photos?', r: 'Usually within 7 to 10 days, in a private online gallery by email. If you’d rather choose them yourself, I send all the unedited, watermarked photos within 2 days of the session. You can select more photos than the ones included for 300 MXN each.' },
  { p: 'How do I book, and what if I cancel?', r: 'A 30% deposit is required to secure your date. The remaining balance is paid on the day of the session, after the photoshoot. Cancellations must be made at least 48 hours in advance to receive a full refund of the deposit; with less notice, the deposit can be applied to a rescheduled session.' },
  { p: 'What if it rains?', r: 'If there’s heavy rain or unsafe conditions, we’ll reschedule your session — no need to worry about losing your deposit over the weather.' },
  { p: 'How far in advance should I book?', r: 'It depends a lot on the season. Preferably 1 week before. In case of availability, I take reservations 48 hours in advance to make sure I have everything organized.' },
];
