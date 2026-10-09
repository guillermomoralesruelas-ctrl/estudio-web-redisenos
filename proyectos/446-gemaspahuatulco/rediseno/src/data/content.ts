// Contenido de Gema Spa Huatulco, tomado de investigacion/crudo.json y de su sitio en vivo (inicio, masajes terapéuticos y
// relajantes, masajes especiales, promociones, sobre nosotros y tienda; 2026-10-09). Nada inventado; textos del estudio en
// CAMBIOS.md. Las descripciones de los masajes se resumieron sin promesas de salud (ver CAMBIOS.md).

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}.webp`;

export const negocio = {
  nombre: 'Gema Spa',
  lema: 'Cuerpo, mente y espíritu',
  direccion: 'Blvd. Benito Juárez, Sector A, Manzana 9A, Lote 2-2',
  ciudad: 'Bahías de Huatulco, Oax.',
  cp: '70987',
  // Su sitio publica dos horarios: "Lunes a Domingo: 9:00 AM - 22:00 PM" (pie) y "8:00 AM - 9:00 PM" (sobre nosotros).
  horario: 'Lunes a domingo',
  whatsapp: '529581013543',
  telTxt: '958 101 3543',
  telHref: 'tel:+529581013543',
  correo: 'contacto@gemaspahuatulco.com',
  reservar: 'https://gemaspahuatulco.com/citas',
  tienda: 'https://gemaspahuatulco.com/tienda',
  faciales: 'https://gemaspahuatulco.com/faciales-y-tratamientos-corporales-en-gemaspa',
  instagram: 'https://www.instagram.com/gemaspahuatulco',
  facebook: 'https://www.facebook.com/gemaspahuatulco/',
  tiktok: 'https://www.tiktok.com/@gemaspahuatulco',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Gema+Spa+Huatulco%2C+Blvd.+Benito+Ju%C3%A1rez%2C+Bah%C3%ADas+de+Huatulco',
  google: { calificacion: '5.0', opiniones: 19 },
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const intro = 'Encuentra el equilibrio perfecto entre cuerpo y mente con nuestros masajes y tratamientos exclusivos en Santa Cruz Huatulco, Oaxaca.';
export const oasis = 'En Gema Spa, cuidamos cada detalle para que tu experiencia sea inigualable. Desde la limpieza impecable hasta el toque experto de nuestras terapeutas, cada sesión es una invitación al descanso. Además, usamos aceites esenciales premium como doTERRA y JUST.';

export type Lugar = 'cabina' | 'playa' | 'domicilio';
export const lugares: { id: Lugar; t: string; d: string; foto: string; alt: string }[] = [
  { id: 'cabina', t: 'En cabina', d: 'En su spa de Bahías de Huatulco.', foto: 'cabina', alt: 'Cabina de Gema Spa con dos camillas y un muro de plantas' },
  { id: 'playa', t: 'En la playa', d: 'Bajo su carpa, frente al mar.', foto: 'playa-dos', alt: 'Dos camillas bajo una carpa en la playa de Huatulco al atardecer' },
  { id: 'domicilio', t: 'A domicilio', d: 'Servicio a domicilio en Huatulco.', foto: 'terraza-mar', alt: 'Camilla preparada en una terraza con vista al mar de Huatulco' },
];

export type Masaje = { id: string; t: string; d: string; min?: string; precios: Partial<Record<Lugar, number>>; nota?: string; tipo: 'clasico' | 'especial' };
export const masajes: Masaje[] = [
  { id: 'relajante', t: 'Masaje relajante', d: 'Terapia manual diseñada para relajar la mente y el cuerpo.', precios: { cabina: 850, playa: 1200, domicilio: 1200 }, tipo: 'clasico' },
  { id: 'descontracturante', t: 'Masaje descontracturante', d: 'Para liberar la tensión muscular por estrés o mala postura.', precios: { cabina: 900, playa: 1200, domicilio: 1300 }, tipo: 'clasico' },
  { id: 'tejido', t: 'Masaje de tejido profundo', d: 'Trabaja las capas más profundas del músculo; para sobrecargas musculares.', precios: { cabina: 1000, playa: 1200, domicilio: 1300 }, tipo: 'clasico' },
  { id: 'deportivo', t: 'Masaje deportivo', d: 'Para personas con actividad física intensa.', precios: { cabina: 900, playa: 1200, domicilio: 1300 }, tipo: 'clasico' },
  { id: 'drenaje', t: 'Drenaje linfático', d: 'Movimientos suaves sobre la circulación de la linfa.', min: '90 min', precios: { cabina: 1200, playa: 1200, domicilio: 1500 }, tipo: 'clasico' },
  { id: 'piedras', t: 'Masaje con piedras calientes', d: 'Piedras volcánicas calientes combinadas con masaje.', min: '90 min', precios: { cabina: 1500, domicilio: 1800 }, tipo: 'clasico' },
  { id: 'geriatrico', t: 'Masaje geriátrico', d: 'Para adultos mayores, con movimientos suaves.', precios: { cabina: 800, playa: 1000, domicilio: 1200 }, tipo: 'clasico' },
  { id: 'reflexologia', t: 'Reflexología podal', d: 'Presión en puntos reflejos de los pies.', min: '45 min en cabina · 40 min a domicilio', precios: { cabina: 600, domicilio: 600 }, nota: 'En cabina incluye shampoo, exfoliación y mascarilla; a domicilio es solo masaje.', tipo: 'clasico' },
  { id: 'vip', t: 'Masaje VIP', d: 'Piedras calientes en la espalda y masaje relajante en el resto del cuerpo.', min: '70 min', precios: { cabina: 1000, domicilio: 1200 }, tipo: 'especial' },
  { id: 'pareja', t: 'Masaje en pareja · Relájate x2', d: 'Dos masajes al mismo tiempo, para tu pareja o un amigo.', precios: { cabina: 1600, playa: 1700, domicilio: 2200 }, nota: 'Precio por las 2 personas. A domicilio, con costo extra según la distancia.', tipo: 'especial' },
  { id: 'rebozo', t: 'Masaje con rebozo', d: 'Técnica tradicional con movimientos rítmicos con rebozos.', min: '90 min', precios: { cabina: 1000, domicilio: 1500 }, tipo: 'especial' },
];

export const promociones = [
  { t: 'Especial de Relajación', p: '$999', antes: null, d: '2 masajes de 40 minutos, mascarilla hidratante con aromaterapia, crioterapia facial y bebida de cortesía.' },
  { t: 'Experiencia Gema Spa', p: '$1,500', antes: '$1,650', d: 'Masaje relajante más limpieza facial o de espalda, en cabina.' },
  { t: 'Paquete romántico', p: '$2,000', antes: '$2,700', d: 'Para 2 personas, 70 min: masaje relajante o descontracturante, limpieza facial spa, exfoliación, mascarilla, crioterapia y bebida. En cabina; a domicilio $3,000 (antes $3,400).' },
  { t: 'Tu cumpleaños', p: 'Limpieza facial de regalo', antes: null, d: 'Si reservas cualquier tratamiento para celebrar tu cumpleaños con ellos.' },
];

export const vales = [800, 1700, 2700];

export const galeria = [
  { f: 'playa-terapeutas', alt: 'Dos terapeutas de Gema Spa dando masaje bajo la carpa en la playa' },
  { f: 'recepcion', alt: 'Recepción del spa con sillones rosas y un árbol de flores' },
  { f: 'alberca-noche', alt: 'Camillas junto a una alberca iluminada de noche' },
  { f: 'yate', alt: 'Terapeuta dando masaje en la cubierta de un yate' },
  { f: 'playa-lumax', alt: 'Terapeuta dando masaje bajo la carpa, con la bahía al fondo' },
  { f: 'terraza-dos', alt: 'Dos camillas en una terraza con vista a la bahía' },
  { f: 'playa-terapeuta', alt: 'Terapeuta trabajando la espalda de una clienta en la playa' },
  { f: 'cabina-azul', alt: 'Sala de espera con luz azul y el loto de Gema Spa en el muro' },
];
