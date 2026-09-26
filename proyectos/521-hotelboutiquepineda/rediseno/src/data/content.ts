// Contenido de Hotel Boutique Pineda (Rincón de Guayabitos, Nayarit).
// Textos copiados de investigacion/crudo.json (hotelboutiquepineda.com, 2026-09-26). Lo nuevo
// (títulos de sección, botones y textos del elemento "¿Cuántos viajan?") está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

const WA = '523221804587';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;

export const negocio = {
  nombre: 'Hotel Boutique Pineda',
  whatsapp: wa('Hola, quiero reservar una suite'),
  reservarEnLinea: 'https://hotelboutiquepineda.com/stay/',
  telefono: 'tel:+523221804587',
  telefonoVisible: '+52 322 180 4587',
  email: 'reservaciones@hotelboutiquepineda.com',
  direccion: ['Carr. a Los Ayala km 1 s/n,', 'C.P. 63724,', 'Rincón de Guayabitos, Nay.'],
  mapa: 'https://www.google.com/maps/search/?api=1&query=21.0213917,-105.2799549',
  facebook: 'https://www.facebook.com/hotelboutiquepineda/',
  instagram: 'https://www.instagram.com/hotelboutiquepineda/',
  checkIn: '3 pm',
  checkOut: '11 am',
  totalSuites: 9,
  grupoMaximo: 40,
};

export const nav = [
  { href: '#suites', label: 'Suites' },
  { href: '#alberca', label: 'Alberca y restaurante' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
];

export const fotos = {
  logo: f('logo-pineda', 255, 116, 'Pineda Hotel Boutique'),
  icono: f('icono-p', 255, 255, ''),
  portada: f('portada-bahia', 2000, 1334, 'Vista de la bahía de Rincón de Guayabitos entre palmeras'),
  portadaVertical: f('portada-bahia-vertical', 1025, 1280, 'Vista de la bahía de Rincón de Guayabitos entre palmeras'),
  recepcion: f('recepcion', 1600, 1067, 'Recepción del hotel con el logotipo de Pineda en el muro'),
  playa: f('playa-guayabitos', 1800, 1011, 'Vista aérea de la playa de Rincón de Guayabitos'),
  estancia: [
    f('estancia-balcon', 880, 1100, 'Huésped en una suite con luz natural'),
    f('estancia-suite', 880, 1100, 'Huésped descansando en la recámara de una suite'),
    f('estancia-agua', 881, 1100, 'Botella de agua con el logotipo de Pineda junto a la alberca'),
  ],
};

export const hero = {
  titulo: 'Hotel Boutique Pineda',
  bajada: 'Un nuevo concepto de hotel en Rincón de Guayabitos.',
  detalle: 'Suites con capacidades para 2, 4 y 6 personas.',
};

export const bienvenida = {
  titulo: 'Bienvenido a Hotel Boutique Pineda',
  texto: 'Descubre un espacio donde la comodidad se une con el estilo, ideal para quienes buscan descansar sin renunciar a la funcionalidad. Nuestras suites, diseñadas para hospedar a 2, 4 y 6 personas, cuentan con cocina totalmente equipada, área de sala y comedor, recámaras con TV y aire acondicionado, creando un ambiente perfecto para estancias cortas o largas.',
  remate: 'Aquí encontrarás el equilibrio ideal entre tranquilidad, confort y una ubicación privilegiada para vivir Guayabitos a tu ritmo.',
};

export type Suite = {
  id: string; nombre: string; personas: number; precio: number; camas: string; banos: string;
  texto: string; foto: Foto;
};

export const suites: Suite[] = [
  {
    id: 's2', nombre: 'Suite 2 Personas', personas: 2, precio: 1650, camas: '1 King Size', banos: '1 baño',
    texto: 'Una suite equipada, lista para ofrecerte la mejor experiencia de hospedaje en Rincón de Guayabitos, ideal para parejas o familias pequeñas con hasta 2 niños pequeños.',
    foto: f('suite-king', 1600, 1067, 'Suite con cama King Size y ventanal al jardín'),
  },
  {
    id: 's4', nombre: 'Suite 4 Personas', personas: 4, precio: 3080, camas: '2 matrimoniales', banos: '1 baño',
    texto: 'Disfruta de nuestra Suite para 4 personas con 2 camas matrimoniales y todas las comodidades necesarias para vivir unas vacaciones inolvidables en Rincón de Guayabitos.',
    foto: f('suite-dos-camas', 1600, 1067, 'Suite con dos camas matrimoniales'),
  },
  {
    id: 's6', nombre: 'Suite 6 Personas', personas: 6, precio: 4340, camas: '3 camas: 1 King y 2 matrimoniales', banos: '2 baños',
    texto: 'Suite para 6 personas ideal para toda la familia o grupos de amigos, con 2 baños y 2 recámaras. Disfruta tu estancia como nunca en Rincón de Guayabitos.',
    foto: f('suite-ventanal', 1600, 1067, 'Recámara de la suite con ventanal y luz natural'),
  },
];

export const amenidades = ['Cocina equipada', 'A/C', 'TV por cable', 'Wifi gratis', 'Toallas y blancos', 'Secadora de cabello', 'Shampoo', 'Cafetera', 'Caja fuerte'];

export const destacados = [
  {
    id: 'alberca', titulo: 'Alberca climatizada',
    texto: 'Nuestra alberca climatizada te espera para disfrutarse a cualquier hora, con una temperatura ideal que abraza el cuerpo, invita a relajarte sin prisas, flotar con calma y dejar atrás el ruido diario.',
    fotos: [
      f('alberca', 1800, 1003, 'Alberca climatizada del hotel con camastros'),
      f('alberca-huesped', 881, 1100, 'Huésped sentada a la orilla de la alberca'),
      f('alberca-vino', 881, 1100, 'Copas de vino junto a la alberca'),
    ],
  },
  {
    id: 'restaurante', titulo: 'Restaurante Pineda',
    texto: 'Desde Restaurante Pineda se disfrutan sabores que cuentan historias: mariscos frescos, recetas tradicionales nayaritas y el clásico pescado zarandeado que honra nuestro legado y cocina, a solo unos pasos de Hotel Boutique Pineda.',
    fotos: [f('restaurante-plato', 881, 1100, 'Pescado zarandeado con arroz y ensalada')],
  },
  {
    id: 'vistas', titulo: 'Vistas panorámicas',
    texto: 'Desde los balcones de Hotel Boutique Pineda se abren vistas panorámicas que enamoran: el azul del mar extendiéndose hasta el horizonte, la silueta de Isla del Coral decorando el paisaje y atardeceres que pintan el cielo.',
    fotos: [f('portada-bahia-vertical', 1025, 1280, 'Vista del mar y de la bahía desde el hotel, entre palmeras')],
  },
];

export const ubicacion = {
  titulo: 'Ubicación privilegiada a pocos pasos de la playa',
  texto: 'Hospedarte en Hotel Boutique Pineda Guayabitos es tener la playa prácticamente frente a ti. A menos de 4 minutos caminando, la arena y el mar de Rincón de Guayabitos te esperan.',
};

export const opinion = {
  texto: 'Superó nuestras expectativas. Las suites están súper bien equipadas, tener sala, comedor y cocina hace toda la diferencia, sobre todo si viajas en familia. La alberca climatizada es un plus enorme. Y lo mejor: ¡la playa está a solo unos minutos caminando!',
  autor: 'Claudia Altamirano',
  fuente: 'TripAdvisor',
  lema: 'Hotel Boutique Pineda no es solo donde te hospedas… es donde tus vacaciones empiezan a sentirse inolvidables.',
};

export const servicios = [
  { nombre: 'Estacionamiento', texto: 'Llega, estaciona y empieza a disfrutar, sin costos extra.' },
  { nombre: 'Ama de llaves', texto: 'Espacios siempre frescos, limpios y listos para ti.' },
  { nombre: 'Internet wifi', texto: 'Conéctate fácil, rápido y sin costo.' },
  { nombre: 'Lavandería', texto: 'Más comodidad durante estancias cortas o largas.' },
  { nombre: 'Café en suite', texto: 'El placer de un café recién hecho, cuando tú quieras.' },
  { nombre: 'Alberca climatizada', texto: 'Agua cálida, ambiente tranquilo, vacaciones perfectas.' },
];
