// Contenido de Grupo Pacífico Escondido, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, escribe [PENDIENTE] y anótalo en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../sitio/assets/wp-content).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Grupo Pacífico Escondido',
  ciudad: 'Puerto Escondido, Oaxaca',
  telefono: '9541279774',
  whatsapp: '5219541279774',
  email: 'contacto@grupopacificoescondido.com',
  direccion: 'Segunda Norte S/N (Planta alta) Casi esquina con Av. Oaxaca, Centro, Puerto Escondido',
  mapa: 'https://www.google.com/maps/search/Grupo+Pacifico+Escondido+Puerto+Escondido+Oaxaca',
  mapaEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1esKTcHQ4iXst_r7DQJSP4qVq3L3tzxg&ehbc=2E312F&noprof=1&zoom=5',
  horario: 'Lunes a Viernes 09:00–14:00 / 16:00–19:00',
  facebook: 'https://www.facebook.com/gpacificoescondido',
  instagram: 'https://www.instagram.com/grupopacificoescondido/',
  tiktok: 'https://www.tiktok.com/@grupopacificoescodido',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const foto = img;

// Imágenes hero
export const heroImagenes = [
  { src: img('uploads/2024/10/portada-gpe1.webp'), alt: 'Desarrollo inmobiliario en la costa oaxaqueña – Grupo Pacífico Escondido' },
  { src: img('uploads/2024/10/portada-gpe4.webp'), alt: 'Terrenos con vista al mar en Puerto Escondido' },
  { src: img('uploads/2024/10/portada-gpe3.webp'), alt: 'Inversión en terrenos residenciales en Puerto Escondido' },
  { src: img('uploads/2024/10/portada-gpe.webp'), alt: 'Paisaje de la costa oaxaqueña – terrenos disponibles' },
];

// Estadísticas reales
export const stats = [
  { valor: '15+', etiqueta: 'Proyectos' },
  { valor: '700+', etiqueta: 'Clientes felices' },
  { valor: '1,000+', etiqueta: 'Pagos seguros' },
];

// Texto misión / empresa (tomado del crudo.json)
export const empresa = {
  mision: 'Para Grupo Pacífico Escondido nuestro objetivo es brindar los mejores servicios profesionales de bienes raíces residenciales y comerciales, enfocándonos en propiedades a lo largo de la costa oaxaqueña, para ayudar a satisfacer las necesidades tanto de nuestros clientes nacionales como extranjeros, pero sobre todo para distintos presupuestos y estilos de vida.',
  subtexto: 'En Grupo Pacífico te ayudamos a encontrar la propiedad de tus sueños para comenzar tu proyecto en una de las regiones con más crecimiento y proyección de la república mexicana.',
  servicios: [
    'Asesoría sobre proceso de adquisición de terrenos en la costa oaxaqueña',
    'Gestión de títulos y documentación para garantizar la legitimidad de la transacción',
    'Asesoramiento sobre los gastos y trámites legales para la compra',
    'Aprobación de financiamiento directo con la empresa',
    'Búsqueda de terrenos en función de las necesidades del comprador',
    'Diseño y planeación de proyectos arquitectónicos',
  ],
};

// Por qué elegirnos (4 razones)
export type Razon = {
  img: string;
  alt: string;
  titulo: string;
  descripcion: string;
};

export const razones: Razon[] = [
  {
    img: img('uploads/2024/10/logos-web-pe-z-1024x576.webp'),
    alt: 'Planes de financiamiento Grupo Pacífico Escondido',
    titulo: 'Planes de financiamiento a tu medida',
    descripcion:
      'Ofrecemos la posibilidad de adquirir tu patrimonio a cómodas mensualidades, tenemos planes de hasta 96 meses. Tú decides la mensualidad y el pago inicial que quieres realizar.',
  },
  {
    img: img('uploads/2024/10/logos-web-pe-03-1024x576.webp'),
    alt: 'Inversiones para todos los presupuestos',
    titulo: 'Inversiones para todos los gustos',
    descripcion:
      'Tenemos una amplia variedad de lotes residenciales y comerciales para todo tipo de presupuesto y estilos de vida. Enfocándonos siempre en proveer las mejores opciones de rentabilidad.',
  },
  {
    img: img('uploads/2024/10/logos-web-pe-z-copia-1024x576.webp'),
    alt: 'Adquiere de forma segura con permisos municipales',
    titulo: 'Adquiere de forma segura',
    descripcion:
      'En la totalidad de nuestros desarrollos contamos con los permisos pertinentes por parte de las autoridades municipales así como de las comunidades de la costa Oaxaqueña.',
  },
  {
    img: img('uploads/2024/10/logos-web-pe-05-1024x576.webp'),
    alt: 'Equipo de expertos en bienes raíces',
    titulo: 'Equipo de expertos',
    descripcion:
      'Tenemos expertos en cada ramo (ingeniería, arquitectura, legal, comercial) para brindarte la mejor experiencia a lo largo de todo tu proceso de compra y post-venta.',
  },
];

// Desarrollos (15 en total)
export type Categoria = 'todos' | 'A pie de playa' | 'Vista al mar' | 'Cercano a la playa';

export type Desarrollo = {
  nombre: string;
  ubicacion: string;
  m2: number;
  categoria: Exclude<Categoria, 'todos'>;
  precioDesde: string;
  estado?: 'Preventa' | 'Promoción';
  img: string;
  imgAlt: string;
};

export const desarrollos: Desarrollo[] = [
  {
    nombre: 'Senderos',
    ubicacion: 'La Ciénega, Pochutla',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$160,000',
    estado: 'Preventa',
    img: img('uploads/2024/10/Portadas-Desarrollos-14-488x326.webp'),
    imgAlt: 'Desarrollo Senderos – Vista al mar, La Ciénega, Pochutla',
  },
  {
    nombre: 'Punta Lago',
    ubicacion: 'Barra de Navidad, Puerto Escondido',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$1,200,000',
    estado: 'Preventa',
    img: img('uploads/2024/10/Portadas-Desarrollos-21-488x326.webp'),
    imgAlt: 'Desarrollo Punta Lago – Vista al mar, Barra de Navidad',
  },
  {
    nombre: 'Sonterra',
    ubicacion: 'Santa María Tonameca, Pochutla',
    m2: 200,
    categoria: 'Cercano a la playa',
    precioDesde: '$130,000',
    estado: 'Preventa',
    img: img('uploads/2024/10/Portadas-Desarrollos-19-488x326.webp'),
    imgAlt: 'Desarrollo Sonterra – Cercano a la playa, Pochutla',
  },
  {
    nombre: 'La Reserva',
    ubicacion: 'Tutultepec, Puerto Escondido',
    m2: 230,
    categoria: 'A pie de playa',
    precioDesde: '$1,390,000',
    estado: 'Preventa',
    img: img('uploads/2025/06/dji_fly_20250719_101308_31_1752951276035_photo-488x326.jpg'),
    imgAlt: 'Desarrollo La Reserva – A pie de playa, Puerto Escondido (vista aérea)',
  },
  {
    nombre: 'Zelena',
    ubicacion: 'Palmarito, Puerto Escondido',
    m2: 200,
    categoria: 'A pie de playa',
    precioDesde: '$800,000',
    estado: 'Preventa',
    img: img('uploads/2024/10/Portadas-Desarrollos-20-488x326.webp'),
    imgAlt: 'Desarrollo Zelena – A pie de playa, Palmarito',
  },
  {
    nombre: 'Del Valle Valdeflores',
    ubicacion: 'Valdeflores, Puerto Escondido',
    m2: 200,
    categoria: 'Cercano a la playa',
    precioDesde: '$120,000',
    img: img('uploads/2024/10/Portadas-Desarrollos-06-488x326.webp'),
    imgAlt: 'Desarrollo Del Valle Valdeflores – Cercano a la playa, Valdeflores',
  },
  {
    nombre: 'Zul',
    ubicacion: 'Santa Elena, Puerto Escondido',
    m2: 300,
    categoria: 'A pie de playa',
    precioDesde: '$1,350,000',
    img: img('uploads/2024/10/Portadas-Desarrollos-10-488x326.webp'),
    imgAlt: 'Desarrollo Zul – A pie de playa, Santa Elena',
  },
  {
    nombre: 'Antal',
    ubicacion: 'Santa Elena, Puerto Escondido',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$300,000',
    img: img('uploads/2025/06/Portadas-Desarrollos-12-488x326.webp'),
    imgAlt: 'Desarrollo Antal – Vista al mar, Santa Elena',
  },
  {
    nombre: 'Cielo Ventanilla',
    ubicacion: 'Ventanilla, Puerto Escondido',
    m2: 216,
    categoria: 'Vista al mar',
    precioDesde: '$320,000',
    img: img('uploads/2024/10/Cielo-Ventanilla-488x326.png'),
    imgAlt: 'Desarrollo Cielo Ventanilla – Vista al mar, Ventanilla',
  },
  {
    nombre: 'Punta Escondida',
    ubicacion: 'Palmarito, Puerto Escondido',
    m2: 195,
    categoria: 'Cercano a la playa',
    precioDesde: '$420,000',
    img: img('uploads/2024/10/Portadas-Desarrollos-03-488x326.webp'),
    imgAlt: 'Desarrollo Punta Escondida – Cercano a la playa, Palmarito',
  },
  {
    nombre: 'Binniza',
    ubicacion: 'Zipolite, Pochutla',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$500,000',
    img: img('uploads/2024/10/Portadas-Desarrollos-13-488x326.webp'),
    imgAlt: 'Desarrollo Binniza – Vista al mar, Zipolite',
  },
  {
    nombre: 'Brisas Puertecito',
    ubicacion: 'Puertecito, Puerto Escondido',
    m2: 200,
    categoria: 'Cercano a la playa',
    precioDesde: '$300,000',
    estado: 'Promoción',
    img: img('uploads/2024/10/Portadas-Desarrollos-08-488x326.webp'),
    imgAlt: 'Desarrollo Brisas Puertecito – Cercano a la playa, Puertecito',
  },
  {
    nombre: 'La Escondida',
    ubicacion: 'Lázaro Cárdenas, Puerto Escondido',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$600,000',
    img: img('uploads/2024/10/La-escondida-488x326.png'),
    imgAlt: 'Desarrollo La Escondida – Lázaro Cárdenas, Puerto Escondido',
  },
  {
    nombre: 'Miramar',
    ubicacion: 'Ventanilla, Puerto Escondido',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$600,000',
    estado: 'Promoción',
    img: img('uploads/2024/10/Portadas-Desarrollos-11-488x326.webp'),
    imgAlt: 'Desarrollo Miramar – Vista al mar, Ventanilla',
  },
  {
    nombre: 'Pacífico Residencial',
    ubicacion: 'Rosedal, Puerto Escondido',
    m2: 200,
    categoria: 'Vista al mar',
    precioDesde: '$340,000',
    img: img('uploads/2024/10/Portadas-Desarrollos-07-488x326.webp'),
    imgAlt: 'Desarrollo Pacífico Residencial – Vista al mar, Rosedal',
  },
];

// Filtros para desarrollos
export const filtros: { valor: Categoria; etiqueta: string }[] = [
  { valor: 'todos', etiqueta: 'Todos' },
  { valor: 'A pie de playa', etiqueta: 'A pie de playa' },
  { valor: 'Vista al mar', etiqueta: 'Vista al mar' },
  { valor: 'Cercano a la playa', etiqueta: 'Cercano a la playa' },
];

// Testimonios reales
export type Testimonio = {
  nombre: string;
  rol: string;
  texto: string;
  img: string;
};

export const testimonios: Testimonio[] = [
  {
    nombre: 'Yair',
    rol: 'Empresario',
    texto: 'Las facilidades de pago han sido de mucha ayuda para aprovechar esta oportunidad',
    img: img('uploads/2024/10/testimonios-03.png'),
  },
  {
    nombre: 'Daniela',
    rol: 'Influencer',
    texto: 'Me encanta la idea de tener un patrimonio en un lugar tan mágico como Puerto Escondido',
    img: img('uploads/2024/10/testimonios-02.png'),
  },
  {
    nombre: 'Fernanda',
    rol: 'Gerente de compras',
    texto: 'La oportunidad de invertir con Grupo Pacifico fue una gran decisión para poder otorgarle un patrimonio a mi hija.',
    img: img('uploads/2024/10/testimonios_Mesa-de-trabajo-1.png'),
  },
  {
    nombre: 'Concepción',
    rol: 'Retirada',
    texto: 'El reencuentro con la naturaleza es nuestra oportunidad en Puerto Escondido, por eso invertí con Grupo Pacífico Escondido',
    img: img('uploads/2024/10/testimonios-04.png'),
  },
];

// Equipo de asesores
export type Asesor = {
  nombre: string;
  img: string;
};

export const equipo: Asesor[] = [
  { nombre: 'Simon Critchley', img: img('uploads/2024/10/gpe5n.jpg') },
  { nombre: 'Thania Suhey', img: img('uploads/2024/10/gpe3n.jpg') },
  { nombre: 'Veronica Martínez', img: img('uploads/2024/10/gpe2n.jpg') },
  { nombre: 'Lorena Díaz', img: img('uploads/2024/10/gpe1n.jpg') },
];
