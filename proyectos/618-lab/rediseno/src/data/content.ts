// Contenido de LAB (Lab Baja / Coffee Lab), San José del Cabo, B.C.S. Fuente: lab-baja.mx (inicio, /rcoffee, /shopbeans,
// /lab-baja-roasters, /cold-brew, /merch, /experiences, /event, /events, /menus, /lab-centro, /lab-playita, /location,
// /cowork-2-1, /coworkspace, /office-space, /colive, /contact), leído el 2026-10-12. Su sitio está en inglés: aquí se traduce
// sin agregar datos. No se inventa nada; lo que el sitio no dice no se muestra.

export const negocio = {
  nombre: 'LAB',
  nombreLargo: 'LAB · Lab Baja Roasters',
  lema: 'Coffee. Culture. Community.',
  intro:
    'Tostador de café de especialidad y espacio comunitario con raíces en Baja California Sur: reunimos a la gente con buen café, coworking y comunidad.',
  // No publica WhatsApp: se usa el teléfono de LAB Centro (pendiente de confirmar en CAMBIOS.md).
  whatsapp: '526241052835',
  correo: 'gerencia@lab-baja.mx',
  instagram: 'https://www.instagram.com/lab_baja/',
  instagramUsuario: '@lab_baja',
  facebook: 'https://www.facebook.com/coffeelabcabo',
  sitio: 'https://lab-baja.mx',
  tienda: 'https://lab-baja.mx/shopbeans',
  menus: 'https://lab-baja.mx/menus',
  merch: 'https://lab-baja.mx/merch',
  experiencias: 'https://lab-baja.mx/experiences',
  coldBrew: 'https://lab-baja.mx/cold-brew',
  contacto: 'https://lab-baja.mx/contact',
  pasesCowork: 'https://lab-baja.mx/cowork-passes',
};

export type SucursalId = 'centro' | 'playita';

export const sucursales: {
  id: SucursalId;
  nombre: string;
  desde: string;
  direccion: string;
  telefono: string;
  telefonoLink: string;
  mapa: string;
  horario: string;
  nota?: string;
  texto: string;
  fotos: { n: string; alt: string }[];
}[] = [
  {
    id: 'centro',
    nombre: 'LAB Centro',
    desde: 'Desde 2015',
    direccion: 'Benito Juárez 1717, Plaza Adriana, Centro, 23400 San José del Cabo, B.C.S.',
    telefono: '624 105 2835',
    telefonoLink: '+526241052835',
    mapa: 'https://goo.gl/maps/wdFRDn5DTkBgbXxF9',
    horario: 'Lunes a sábado, 7:30 a 15:00 · Domingo: gone surfing',
    nota: 'Horario del pie de su sitio; la página de la sucursal dice 8:00 a 15:30.',
    texto:
      'Nuestro local en el centro de San José del Cabo. Café, vino y un menú saludable estilo café, con exposiciones de galería que van rotando, eventos y catas de café. Aquí tostamos en casa: el café está en nuestro ADN.',
    fotos: [
      { n: 'centro-barista', alt: 'Barista de LAB Centro preparando un espresso en la máquina' },
      { n: 'centro-latte-art', alt: 'Latte con arte en espuma sobre una mesa de mármol en LAB Centro' },
      { n: 'centro-sandwich', alt: 'Sándwich con ensalada de hojas verdes servido en LAB Centro' },
      { n: 'centro-comunidad', alt: 'Grupo de amigos reunidos dentro de LAB Centro durante un evento' },
    ],
  },
  {
    id: 'playita',
    nombre: 'LAB Playita',
    desde: 'Desde 2022',
    direccion: 'Calle Delfín, La Playa, 23403 San José del Cabo, B.C.S. (junto a El Marinero Borracho)',
    telefono: '624 180 6340',
    telefonoLink: '+526241806340',
    mapa: 'https://goo.gl/maps/K1AwimhDsC6Tyc7m7',
    horario: 'Todos los días, 8:00 a 15:30 · Miércoles a domingo, bebidas hasta las 19:00',
    texto:
      'Nuestra segunda casa, en La Playita, el pueblito pesquero frente a Puerto Los Cabos. Café de especialidad, comida y, arriba, el bar Noroom. Tómate una foto con los murales de artistas locales, ven al brunch del domingo y disfruta la vista.',
    fotos: [
      { n: 'playita-palapa', alt: 'Fachada de LAB Playita con su techo de palapa y mesas de picnic al frente' },
      { n: 'playita-brunch', alt: 'Brunch de LAB Playita: tostada, fruta, café y jugo vistos desde arriba' },
      { n: 'playita-coctel', alt: 'Coctel con flor amarilla y rodaja de naranja seca en la barra de LAB Playita' },
      { n: 'playita-atardecer', alt: 'Terraza techada de LAB Playita al atardecer con vista a los cerros' },
    ],
  },
];

// Horarios por día (0 = domingo). Horas en decimal para la línea del día. Solo lo que publica el sitio.
export type Franja = { de: number; a: number; etiqueta: string; tipo: 'cafe' | 'bar' | 'cowork' };
export type Lugar = { id: string; nombre: string; detalle: string; franjas: (dia: number) => Franja[]; cerrado: string };

export const lugares: Lugar[] = [
  {
    id: 'centro',
    nombre: 'LAB Centro',
    detalle: 'Café, vino, menú saludable y galería',
    franjas: (d) => (d === 0 ? [] : [{ de: 7.5, a: 15, etiqueta: '7:30 a 15:00', tipo: 'cafe' }]),
    cerrado: 'Gone surfing: el domingo LAB Centro descansa.',
  },
  {
    id: 'playita',
    nombre: 'LAB Playita',
    detalle: 'Café, comida, murales y bar Noroom arriba',
    franjas: (d) => {
      const f: Franja[] = [{ de: 8, a: 15.5, etiqueta: '8:00 a 15:30', tipo: 'cafe' }];
      if (d === 0 || d >= 3) f.push({ de: 15.5, a: 19, etiqueta: 'bebidas hasta las 19:00', tipo: 'bar' });
      return f;
    },
    cerrado: '',
  },
  {
    id: 'cowork',
    nombre: 'Outsite Cowork Lounge',
    detalle: 'Wifi de 400 Mbps y 10% en comida y bebida de Coffee Lab',
    franjas: (d) => (d >= 1 && d <= 5 ? [{ de: 8, a: 15, etiqueta: '8:00 a 15:00', tipo: 'cowork' }] : []),
    cerrado: 'El cowork abre de lunes a viernes.',
  },
];

export const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export const diasCortos = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Lo especial de cada día, según su sitio.
export const extras: Record<number, string> = {
  0: 'Domingo de brunch en LAB Playita.',
  3: 'Desde el miércoles, LAB Playita sirve bebidas hasta las 19:00.',
};

export const cafes: {
  origen: string;
  proceso: string;
  variedades: string;
  altitud: [number, number];
  acidez: string;
  notas: string[];
  texto: string;
  precio250: number;
  precio1kg: number;
  agotado: boolean;
  enlace: string;
}[] = [
  {
    origen: 'Oaxaca',
    proceso: 'Lavado',
    variedades: 'Typica, Bourbon',
    altitud: [1300, 1400],
    acidez: 'Media, málica',
    notas: ['ciruela jugosa', 'textura cremosa', 'toque de canela'],
    texto: 'Taza limpia y expresiva: notas frutales brillantes y una acidez que recuerda a la manzana.',
    precio250: 360,
    precio1kg: 720,
    agotado: false,
    enlace: 'https://lab-baja.mx/shopbeans/p/the-ember-vessel-jbxyz',
  },
  {
    origen: 'Chiapas',
    proceso: 'Lavado',
    variedades: 'Typica, Bourbon, Mundo Novo',
    altitud: [1200, 1400],
    acidez: 'Media',
    notas: ['canela cálida', 'nuez', 'final dulce'],
    texto: 'Café reconfortante y equilibrado, de cuerpo suave, para todos los días.',
    precio250: 375,
    precio1kg: 750,
    agotado: true,
    enlace: 'https://lab-baja.mx/shopbeans/p/the-echo-vase-jrxzy',
  },
  {
    origen: 'Veracruz',
    proceso: 'Honey rojo',
    variedades: 'Oro Azteca',
    altitud: [1100, 1400],
    acidez: 'Málica',
    notas: ['chocolate', 'frambuesa', 'caramelo'],
    texto: 'El proceso honey conserva parte del mucílago al secar: más dulzor y complejidad en una taza limpia.',
    precio250: 390,
    precio1kg: 780,
    agotado: true,
    enlace: 'https://lab-baja.mx/shopbeans/p/the-horizon-vase-4w532',
  },
  {
    origen: 'Guerrero',
    proceso: 'Natural',
    variedades: 'Typica, Bourbon',
    altitud: [1800, 1800],
    acidez: 'Tartárica',
    notas: ['frutos rojos', 'zarzamora', 'cacao'],
    texto: 'Vivo y complejo: la acidez tartárica le da un carácter brillante, casi de vino.',
    precio250: 390,
    precio1kg: 780,
    agotado: false,
    enlace: 'https://lab-baja.mx/shopbeans/p/the-solace-vessel-jglhg',
  },
];

export const pases = [
  { t: 'Day Pass', precio: 200, d: 'Para llegar un día' },
  { t: 'Week Pass', precio: 850, d: 'Para estancias cortas' },
  { t: 'Monthly Pass', precio: 3000, d: 'El mejor valor si trabajas aquí todo el mes' },
];

export const colive = [
  {
    t: 'Casa Playita',
    d: 'Arquitectura tradicional de Baja, diseño mexicano contemporáneo y arte local, a una caminata de la playa, de Puerto Los Cabos y de los mejores tacos. Para viajeros solos y parejas.',
    enlace: 'https://www.airbnb.com/rooms/23499873',
    cta: 'Ver en Airbnb',
  },
  {
    t: 'Outsite Cabo',
    d: 'Coliving recién remodelado en el corazón del centro de San José: acogedor, funcional y perfecto para estancias de trabajo, cerca del Distrito del Arte y dentro de un fraccionamiento pequeño y tranquilo.',
    enlace: 'https://www.outsite.co/locations/los-cabos',
    cta: 'Ver en Outsite',
  },
];

export const eventos = [
  { t: 'Pop ups con Noroom', d: 'YAO, Bao Bap, Poroto, Tiger Club y más cocinas invitadas en el bar de arriba de LAB Playita.' },
  { t: 'Vino y vinilos', d: 'Noche de vinos Barrigones, Sabaku & Barbarico Wines y San Vinyltimes Day con DJ.' },
  { t: 'Bienestar', d: 'Power Flow en LAB Baja y Breathwork Awareness con baño de hielo.' },
  { t: 'Talleres', d: 'Introducción a la fotografía y sesiones de tostado en vivo, del grano verde a la taza.' },
  { t: 'Cine y arte', d: 'Noches de cine en LAB Centro y PICNIC, la feria de arte y diseño que promueve Coffee LAB.' },
];

export const dondeEncontrarnos = [
  'Casena, Costa Palmas',
  'Pan Springs, San José del Cabo',
  'Drift Hotel, San José del Cabo',
  'Manta at The Cape, Cabo San Lucas',
];

export const merch = [
  { t: 'Playera', precio: 350 },
  { t: 'Gorra', precio: 500 },
  { t: 'Libreta', precio: 250 },
  { t: 'Overol', precio: 3500 },
];
