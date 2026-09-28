// Contenido de DIPAZ Inmobiliaria — datos del sitio original (investigacion/crudo.json + resumen.json).
// Regla: nada inventado. Si falta un dato, escribe [PENDIENTE] y anótalo en CAMBIOS.md.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'DIPAZ Inmobiliaria',
  subtitulo: 'Desarrolladora inmobiliaria en La Paz, BCS',
  ciudad: 'La Paz, Baja California Sur',
  telefono1: '(612) 130 0103',
  telefono1Href: 'tel:+526121300103',
  telefono2: '(612) 166 3750',
  telefono2Href: 'tel:+526121663750',
  // WhatsApp correcto: 52 (México) + 6121300103
  // El sitio original publica wa.me/16121300103 (prefijo 1 incorrecto para México)
  whatsappNumero: '526121300103',
  email1: 'recepcionlapaz@dipaz.com.mx',
  email2: 'contacto@dipaz.com.mx',
  direccion: 'Av. Altamira #632, Fracc. Altamira Residencial, C.P. 23085, La Paz, BCS',
  // Horario: tomado del footer (aparece en todas las páginas del sitio original)
  horario: 'Lun–Sáb 9 AM–7 PM · Dom 10 AM–6 PM',
  mapaEmbed:
    'https://maps.google.com/maps?q=DIPAZ+Inmobiliaria+La+Paz+BCS&output=embed',
  mapaLink: 'https://maps.app.goo.gl/gdf62UcVKTrV8TLz5',
  facebook1: 'https://www.facebook.com/profile.php?id=61569969742634',
  facebook2: 'https://www.facebook.com/AltavistaResidencialOficial',
  youtube: 'https://www.youtube.com/@dipazconstructora741',
  anos: '13+',
  desarrollos: '7+',
  familias: '1,500+',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;

export const fotos = {
  hero: img('uploads/2025/07/IMG_8967-scaled.jpg'),
  altavelaExterior: img('uploads/2025/07/IMG_8812-scaled.jpg'),
  altavelaCasaClub: img('uploads/2025/04/01-CASA-CLUB-scaled.jpg'),
  altavistaInterior: img('uploads/2025/08/D75-03-SALA-COMEDOR-scaled.jpg'),
  altavistaExterior: img('uploads/2025/08/DSC04980-scaled.jpg'),
  logo: img('uploads/2025/03/dipazlogo-300x153.png'),
  favicon: img('uploads/2026/08/cropped-DIPAZ-FAV-ICON-192x192.png'),
};

export type Desarrollo = {
  id: string;
  nombre: string;
  tipo: string;
  subtipo: string;
  descripcion: string;
  destacado: string[];
  creditos: string[];
  foto1: string;
  foto2: string;
  cta: string;
};

export const desarrollos: Desarrollo[] = [
  {
    id: 'altavela',
    nombre: 'Altavela Residencial',
    tipo: 'Residencial Plus',
    subtipo: 'Para inversión y nivel de vida',
    descripcion:
      'Desarrollo residencial Plus ubicado en una de las zonas de mayor plusvalía de La Paz. Casas de 3 recámaras con diseño contemporáneo, área de Casa Club con alberca y barda perimetral para tu tranquilidad.',
    destacado: [
      '3 recámaras',
      'Casa Club con alberca',
      'Barda perimetral',
      'Zona de alta plusvalía',
      'Ideal para inversión',
    ],
    creditos: ['HSBC', 'Banorte', 'Santander', 'Scotiabank', 'BBVA', 'Banjercito'],
    foto1: fotos.altavelaExterior,
    foto2: fotos.altavelaCasaClub,
    cta: wa('Hola, me interesa Altavela Residencial. ¿Pueden darme más información?'),
  },
  {
    id: 'altavista',
    nombre: 'Altavista Residencial',
    tipo: 'Primer Hogar',
    subtipo: 'Para familias jóvenes',
    descripcion:
      'Desarrollo pensado para familias jóvenes que dan el paso a su primer hogar en La Paz. Acepta todos los tipos de crédito disponibles, incluidos Infonavit y Fovissste. Cisterna de agua propia para mayor autonomía.',
    destacado: [
      'Primer hogar accesible',
      'Acepta Infonavit y Fovissste',
      'Cisterna de agua propia',
      'Todos los tipos de crédito',
      'Para familias jóvenes',
    ],
    creditos: ['Infonavit', 'Fovissste', 'HSBC', 'Banorte', 'Santander', 'Scotiabank', 'BBVA'],
    foto1: fotos.altavistaExterior,
    foto2: fotos.altavistaInterior,
    cta: wa('Hola, me interesa Altavista Residencial. ¿Pueden darme más información?'),
  },
];

export type Pilar = { icono: string; titulo: string; texto: string };
export const pilares: Pilar[] = [
  {
    icono: '🏗️',
    titulo: '13+ años de experiencia',
    texto:
      'Más de una década desarrollando proyectos residenciales en La Paz, BCS, con solidez y cumplimiento.',
  },
  {
    icono: '🏘️',
    titulo: '7+ desarrollos entregados',
    texto:
      'Cada proyecto es un compromiso cumplido: calidad de construcción, amenidades y entrega a tiempo.',
  },
  {
    icono: '👨‍👩‍👧',
    titulo: '1,500+ familias',
    texto:
      'Más de mil quinientas familias han encontrado su hogar con nosotros en Baja California Sur.',
  },
  {
    icono: '💳',
    titulo: 'Todos los créditos',
    texto:
      'Trabajamos con Infonavit, Fovissste, HSBC, Banorte, Santander, Scotiabank, BBVA y Banjercito.',
  },
];

export type Testimonio = { texto: string; nombre: string; desarrollo: string };
export const testimonios: Testimonio[] = [
  {
    texto:
      'Nos ayudaron a encontrar el modelo ideal para nuestra familia. El proceso fue sencillo y siempre nos mantuvieron informados.',
    nombre: 'Jesús R. y Paola C.',
    desarrollo: 'Altavista Residencial',
  },
  {
    texto:
      'El proceso fue muy transparente desde el principio. Cumplieron con los tiempos y la calidad de construcción superó nuestras expectativas.',
    nombre: 'Mariana R.',
    desarrollo: 'Altavela Residencial',
  },
];
