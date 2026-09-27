// Grand Isla Navidad Resort — datos del sitio.
// Fuentes: investigacion/crudo.json y investigacion/resumen.json.
// Nada está inventado; lo pendiente se marca [PENDIENTE] y se documenta en CAMBIOS.md.

export const meta = {
  title: 'Grand Isla Navidad Resort | Hotel Todo Incluido frente a Barra de Navidad',
  description:
    'Resort de lujo en la Costa Alegre: todo incluido con gastronomía, albercas, marina de 207 yates, campo de golf y spa. Frente a Barra de Navidad. Reserva directo y obtén la mejor tarifa.',
  ogImage: 'aerea-resort.webp',
};

export const contacto = {
  telefono: '314 331 0500',
  telUrl: 'tel:+523143310500',
  callcenter: '612 175 0860',
  callcenterUrl: 'tel:+526121750860',
  whatsapp: '612 218 6591',
  whatsappNum: '526122186591',
  whatsappUrl: 'https://wa.me/526122186591',
  whatsapp2Num: '526121050164',
  whatsapp2Url: 'https://wa.me/526121050164',
  maps: 'https://maps.app.goo.gl/n5JjYR8dFZAkWsX97',
  direccion: 'Circuito de los Marinos s/n, Fracc. Isla Navidad, 28838 Manzanillo, Colima, México',
  instagram: 'https://www.instagram.com/islanavidadresort/',
  facebook: 'https://www.facebook.com/GrandIslaNavidad',
  youtube: 'https://www.youtube.com/@grandislanavidadresort',
  tripadvisor:
    'https://www.tripadvisor.com.mx/Hotel_Review-g3160463-d154856-Reviews-Grand_Isla_Navidad_Resort-Isla_Navidad_Pacific_Coast.html',
};

export const motorReservas =
  'https://secure.ecommerce-365.com/portals/IslaNavidad/hotel/hoteldescription.aspx?PropertyNumber=441&Provider=0&Rooms=1&AccessCode=&NegociateRate=&Currency=MXN&Adults=2&Children=0&CheckIn=&CheckOut=&Tab=Rates';

export const wa = (mensaje: string) =>
  `${contacto.whatsappUrl}?text=${encodeURIComponent(mensaje)}`;

export const wa2 = (mensaje: string) =>
  `${contacto.whatsapp2Url}?text=${encodeURIComponent(mensaje)}`;

// Gastronomía (textos del crudo.json)
export const gastronomia = [
  {
    slug: 'grand-cafe',
    nombre: 'Grand Café',
    descripcion:
      'Desayunos y cenas tipo Buffet o a la Carta en un ambiente familiar y relajante, incluidos en su paquete Todo Incluido.',
    foto: 'restaurante.webp',
    alt: 'Salón del restaurante Grand Café con mesas y ventanales',
  },
  {
    slug: 'plazuela',
    nombre: 'Restaurante La Plazuela',
    descripcion:
      'Con opciones desde pastas hasta mariscos frescos. A un costado de la alberca principal.',
    foto: 'plazuela.webp',
    alt: 'Restaurante La Plazuela con mesas bajo arcos coloniales',
  },
  {
    slug: 'oasis',
    nombre: 'Oasis Pool Bar',
    descripcion:
      'Coctelería para todas las edades junto a la piscina principal. Se disfruta desde dentro o fuera del agua.',
    foto: 'bar-alberca.webp',
    alt: 'Bar de la alberca con coctelería y la piscina al fondo',
  },
  {
    slug: 'faro',
    nombre: 'El Faro Lobby Bar',
    descripcion:
      'Espacio sofisticado junto al Lobby. Bebidas con y sin alcohol incluidas en su paquete Todo Incluido.',
    foto: 'lobby-bar.webp',
    alt: 'Lobby bar con iluminación cálida y vista al jardín',
  },
];

// Habitaciones (textos del crudo.json)
// vista: 'laguna' | 'pacifico' | 'marina'
export const habitaciones = [
  {
    slug: 'presidencial',
    nombre: 'Suite Presidencial',
    descripcion: 'Sala · Comedor · Piano · Bar con Barra · Terraza · Jacuzzi · Vista a la marina',
    foto: 'suite-presidencial.webp',
    alt: 'Suite Presidencial con sala, piano y jacuzzi con vista a la marina',
    vista: 'marina' as const,
  },
  {
    slug: 'master',
    nombre: 'Master Suite',
    descripcion: 'Sala · Comedor · Cocina',
    foto: 'suite-master.webp',
    alt: 'Master Suite con sala, comedor y cocina completa',
    vista: 'pacifico' as const,
  },
  {
    slug: 'ejecutiva',
    nombre: 'Suite Ejecutiva',
    descripcion: 'Sala · Comedor · Terraza · Vapor en el baño · Barra de bar',
    foto: 'suite-ejecutiva.webp',
    alt: 'Suite Ejecutiva con terraza privada y baño con vapor',
    vista: 'pacifico' as const,
  },
  {
    slug: 'gobernador',
    nombre: 'Suite Gobernador',
    descripcion: 'Sala · Comedor · Balcón · Tocador',
    foto: 'suite-gobernador.webp',
    alt: 'Suite Gobernador con balcón y tocador',
    vista: 'laguna' as const,
  },
  {
    slug: 'lujo',
    nombre: 'Habitación Grand de Lujo',
    descripcion: 'Pantalla plana · Aire acondicionado · Tina · Balcón',
    foto: 'habitacion-lujo.webp',
    alt: 'Habitación Grand de Lujo con tina y balcón',
    vista: 'laguna' as const,
  },
];

// Vistas para el elemento memorable "¿A qué despiertas?"
export type VistaId = 'laguna' | 'pacifico' | 'marina';
export const vistas: Array<{
  id: VistaId;
  nombre: string;
  descripcion: string;
  suites: string[];
  colorFondo: string;
}> = [
  {
    id: 'laguna',
    nombre: 'La laguna al amanecer',
    descripcion:
      'Frente a la Laguna de la Navidad, sitio Ramsar con cuatro tipos de manglar. Amanece con el canto de las aves y el reflejo del cielo en el agua tranquila.',
    suites: ['gobernador', 'lujo'],
    colorFondo: '#162d34',
  },
  {
    id: 'pacifico',
    nombre: 'El Pacífico desde tu terraza',
    descripcion:
      'Horizonte abierto sobre el Océano Pacífico. Desde la terraza o el balcón, la Costa Alegre entera y los atardeceres que no se olvidan.',
    suites: ['master', 'ejecutiva'],
    colorFondo: '#0e1f36',
  },
  {
    id: 'marina',
    nombre: 'La marina de los 207 yates',
    descripcion:
      'La marina más grande de la Costa Pacífico mexicana. Al caer la noche, las luces de los veleros se reflejan en la laguna frente a tu ventana.',
    suites: ['presidencial'],
    colorFondo: '#0c2219',
  },
];

// Actividades
export const actividades = [
  { nombre: 'Albercas', descripcion: 'Chapuzón revitalizante con bar a la orilla.', foto: 'alberca.webp', alt: 'Alberca con vista al jardín y el lobby al fondo' },
  { nombre: 'Marina', descripcion: 'Caminata junto a los 207 yates o la vista desde tu balcón.', foto: 'marina.webp', alt: 'Marina con veleros y embarcaciones de recreo' },
  { nombre: 'Kayak y Paddle-board', descripcion: 'Contacto con la naturaleza en la laguna.', foto: null, alt: '' },
  { nombre: 'Safari de aves', descripcion: 'Sitio Ramsar: cuatro tipos de manglar y fauna local.', foto: null, alt: '' },
  { nombre: 'Canchas de tenis', descripcion: 'Para los amantes del deporte blanco.', foto: null, alt: '' },
  { nombre: 'Jet Skis', descripcion: 'Adrenalina paseando por los alrededores del resort.', foto: null, alt: '' },
];

// ¿Por qué reservar directo? (del sitio original)
export const razonesReservar = [
  'Mejor tarifa garantizada en línea',
  '2 menores de 12 años gratis',
  'Estacionamiento gratis',
  '10 % de descuento en Spa al reservar Todo Incluido',
  'Página oficial del hotel',
];

export const todoIncluido = {
  descripcion:
    'Vive unas vacaciones de ensueño con el Todo Incluido de Grand Isla Navidad Resort. Deléitate con exquisita gastronomía, relájate en refrescantes piscinas y brinda por momentos inolvidables en nuestros bares.',
  bebidas:
    'Bebidas nacionales e internacionales incluidas. Por un fee adicional se puede ampliar a Bebidas Premium (solicítelo previo a su llegada).',
};

export const bodas = {
  descripcion:
    'Experimenta el encanto incomparable de nuestras 5 locaciones para un día tan especial. Con vistas a la Laguna de la Navidad o al Océano Pacífico, tenemos el escenario perfecto para hacer tu evento inolvidable.',
  capacidad:
    'Auditorio para 100 personas · 8 salones, desde 15 hasta 700 personas',
};

export const costaAlegre = {
  descripcion:
    'Situado en la majestuosa Costa Alegre, a la orilla de la Laguna de la Navidad y con acceso privilegiado al Pacífico, Grand Isla Navidad Resort es el punto de partida perfecto para explorar playas vírgenes, un campo de golf de campeonato y atardeceres legendarios.',
  alrededores: [
    {
      nombre: 'Laguna de la Navidad',
      descripcion: 'Sitio Ramsar: cuatro tipos de manglar. Paseos en lancha, kayak, safari de aves y fauna local.',
      tiempo: 'junto al resort',
    },
    {
      nombre: 'Barra de Navidad',
      descripcion: 'Playas y restaurantes de mariscos y pescado fresco a la orilla de la laguna.',
      tiempo: '5 min',
    },
    {
      nombre: 'Playa Navidad',
      descripcion: 'Playa extensa en la orilla del Pacífico.',
      tiempo: '33 min',
    },
    {
      nombre: 'La Manzanilla',
      descripcion: 'Pueblo pesquero con cocodrilario y vida tranquila.',
      tiempo: '50 min',
    },
  ],
};
