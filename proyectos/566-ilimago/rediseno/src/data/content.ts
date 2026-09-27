// Contenido real extraído de crudo.json e investigacion/resumen.json
// No inventar datos — todo viene del sitio original de ilimago.com.mx

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'ilimago',
  razonSocial: 'Ilimago Company S.A. de C.V.',
  taglineBadge: 'Actualiza tu empresa con IA',
  taglineH1: 'Agencia creativa de comunicación',
  subtitulo:
    'Sumamos esfuerzos con tu empresa para comunicar de forma clara y estratégica lo que tus clientes necesitan saber de ella para encontrar oportunidades de negocio.',
  anos: '+10',
  labelAnos: 'Años de trayectoria comercial',
  ciudad: 'Ciudad de México, CDMX',
  direccion: 'Av. Miguel Ángel de Quevedo 785, Coyoacán 04330 CDMX',
};

export const contacto = {
  waBase:
    'https://wa.me/5215652421069?text=Hola+ilimago%2C+vi+su+sitio+web+y+me+interesa+conocer+sus+planes.',
  email: 'hola@ilimago.com.mx',
  telefono: '56 5242 1069',
  telLink: 'tel:5652421069',
  facebook: 'https://www.facebook.com/ilimago.com.mx/',
  instagram: 'https://www.instagram.com/ilimago/',
  linkedin: 'https://www.linkedin.com/company/ilimago/',
  maps: 'https://www.google.com/maps/search/ilimago+Ciudad+de+Mexico',
};

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

export const servicios: Servicio[] = [
  {
    id: 'estrategia',
    nombre: 'Estrategia de MKT Digital',
    descripcion:
      'Definimos el rumbo de tu marca. Análisis de mercado, segmentación y planeación táctica para resultados reales.',
    imagen: foto('general/marketing.webp'),
    alt: 'Estrategia de Marketing Digital',
  },
  {
    id: 'branding',
    nombre: 'Branding & Diseño de Identidad',
    descripcion:
      'Diseñamos la identidad de tu empresa. Creación de marca, logotipos y manuales de identidad con alto impacto visual.',
    imagen: foto('identidad/identity3.webp'),
    alt: 'Branding y Diseño de Identidad',
  },
  {
    id: 'web',
    nombre: 'Diseño & Desarrollo Web',
    descripcion:
      'Ingeniería de software a la medida. Sitios corporativos veloces, landing pages y e-commerce de alta conversión.',
    imagen: foto('web/web2x.webp'),
    alt: 'Diseño y Desarrollo Web',
  },
  {
    id: 'copywriting',
    nombre: 'Copywriting & Contenido',
    descripcion:
      'Textos que conectan y venden. Integración de IA para redacción persuasiva, guiones y artículos de valor.',
    imagen: foto('copy/copy2.webp'),
    alt: 'Copywriting y Contenido',
  },
  {
    id: 'foto-video',
    nombre: 'Foto, Video & Animación',
    descripcion:
      'Producción audiovisual profesional. Storytelling visual, animación 2D/3D y comerciales para retener a tu audiencia.',
    imagen: foto('general/fotoyvideo2.webp'),
    alt: 'Foto, Video y Animación',
  },
  {
    id: 'ads',
    nombre: 'Campañas de Ads',
    descripcion:
      'Visibilidad masiva en Meta, Google Ads, TikTok y LinkedIn. Optimización de pauta para maximizar tu ROAS.',
    imagen: foto('general/anuncioss.webp'),
    alt: 'Campañas de Ads — Meta, Google, TikTok',
  },
];

export interface Plan {
  id: string;
  nombre: string;
  subtitulo: string;
  precio: number;
  contenidos: number;
  meses: number;
  recomendado: boolean;
  plataformas: string[];
  waUrl: string;
  caracteristicas: string[];
}

export const planes: Plan[] = [
  {
    id: 'impulsa',
    nombre: 'Plan Impulsa',
    subtitulo:
      'Tu primer departamento de marketing digital. Ideal para emprendedores y pequeñas empresas.',
    precio: 6790,
    contenidos: 10,
    meses: 3,
    recomendado: false,
    plataformas: ['Facebook', 'Instagram', 'WhatsApp'],
    waUrl:
      'https://wa.me/5215652421069?text=Hola+ilimago%2C+me+interesa+el+Plan+Impulsa.+%C2%BFMe+dan+m%C3%A1s+info%3F',
    caracteristicas: [
      'Auditoría digital y análisis FODA',
      'Análisis de competencia',
      'Calendario estratégico de contenidos',
      'Administración de FB, IG y WhatsApp',
      '10 contenidos (Imágenes, Carruseles, Reels)',
      'Copys persuasivos y hashtags',
      '2 campañas Ads (Prospectos / Marca)',
      'ChatBot y respuestas automáticas',
      'Reporte y reunión mensual',
    ],
  },
  {
    id: 'acelera',
    nombre: 'Plan Acelera',
    subtitulo:
      'El plan más contratado. Para empresas que desean aumentar ventas y atraer prospectos.',
    precio: 9990,
    contenidos: 20,
    meses: 6,
    recomendado: true,
    plataformas: ['Meta', 'LinkedIn', 'Google'],
    waUrl:
      'https://wa.me/5215652421069?text=Hola+ilimago%2C+me+interesa+el+Plan+Acelera.+%C2%BFMe+dan+m%C3%A1s+info%3F',
    caracteristicas: [
      'Todo lo del Plan Impulsa',
      '20 contenidos (Imágenes, Reels, Videos)',
      'SEO Local y ficha empresarial',
      'Hasta 4 campañas activas de Meta Ads',
      'Ads de Conversión y Remarketing',
      'ChatBot inteligente de captación',
      'Optimización IA en anuncios',
      'Dashboard mensual de KPIs',
      'Reunión estratégica mensual',
    ],
  },
  {
    id: 'domina',
    nombre: 'Domina el Mercado',
    subtitulo:
      'Marketing, publicidad y automatización para empresas que buscan escalar ventas.',
    precio: 19990,
    contenidos: 40,
    meses: 12,
    recomendado: false,
    plataformas: ['Multicanal', 'TikTok', 'YouTube'],
    waUrl:
      'https://wa.me/5215652421069?text=Hola+ilimago%2C+me+interesa+el+Plan+Domina+el+Mercado.+%C2%BFMe+dan+m%C3%A1s+info%3F',
    caracteristicas: [
      'Todo lo del Plan Acelera',
      '40 contenidos (Animaciones, Infografías)',
      'Consultoría comercial quincenal',
      'Ads en Meta, Google, TikTok, LinkedIn, YouTube',
      'Landing Page de alta conversión',
      'Lead Magnets y Embudos',
      'Implementación de CRM Comercial',
      'Email Marketing y WA Automatizado',
      'Dashboard IA en tiempo real',
    ],
  },
];

export const nosotros = {
  titulo: '+10 años haciendo lo que nos apasiona.',
  descripcion:
    'Cada proyecto lo volvemos nuestro y aplicamos las mejores prácticas profesionales para ayudar a nuestros clientes. Somos un equipo de profesionales comprometidos con la rentabilidad de tu inversión en internet.',
  vision:
    'Conectar con empresas que buscan crecer en Internet, para ayudarles a crear su infraestructura digital y ser un aliado confiable en su área comercial.',
  mision:
    'Impulsar los proyectos de nuestros clientes a través de innovación, tendencias y buenas prácticas de publicidad. Generamos rentabilidad y resultados en cada acción aplicada.',
  valores:
    'Empatía y compromiso con empresas de México y el mundo siendo parte de su crecimiento digital a través de estrategias que les ayuden a encontrar rentabilidad en Internet.',
  sectores: [
    'Negocios Locales',
    'Profesionistas',
    'Emprendedores',
    'Tiendas Virtuales',
    'Proyectos Educativos',
    'Sector Industrial',
    'Sector Salud',
    'Corporativos',
  ],
  equipo: [
    { rol: 'Mercadólogos', desc: 'Especialistas en estrategias de publicidad online y offline.' },
    { rol: 'Diseñadores', desc: 'Creadores de conceptos que maximizan el beneficio de tu marca.' },
    { rol: 'Desarrolladores', desc: 'Ingeniería para cualquier aplicación web o plataforma móvil.' },
    { rol: 'Copywriters', desc: 'Expertos en redacción persuasiva y creación de contenido de valor.' },
    { rol: 'Analistas de Datos', desc: 'Traducción de métricas en acciones de crecimiento real.' },
    { rol: 'Accounts', desc: 'Atención dedicada para resolver dudas y guiar tu proyecto.' },
  ],
};

export const clientes = [
  { nombre: 'Microsoft', archivo: foto('clientes/microsoft.webp') },
  { nombre: 'Sears', archivo: foto('clientes/sears.webp') },
  { nombre: 'Banorte', archivo: foto('clientes/banorte.webp') },
  { nombre: 'HSBC', archivo: foto('clientes/hsbc.webp') },
  { nombre: 'Unilever', archivo: foto('clientes/unilever.webp') },
  { nombre: 'Cruz Roja Mexicana', archivo: foto('clientes/cruz-roja-mexicana.webp') },
  { nombre: 'Ibero', archivo: foto('clientes/ibero.webp') },
  { nombre: 'BNI Mexico', archivo: foto('clientes/bni-mexico.webp') },
  { nombre: 'Universidad de Morelos', archivo: foto('clientes/universiad-de-morelos.webp') },
  { nombre: 'MYM', archivo: foto('clientes/mym.webp') },
  { nombre: 'Diafora', archivo: foto('clientes/diafora.webp') },
  { nombre: 'Chemdry Metro', archivo: foto('clientes/chemdry-metro.webp') },
  { nombre: 'Gayoso', archivo: foto('clientes/gayoso.webp') },
  { nombre: 'Devlin', archivo: foto('clientes/devlin.webp') },
  { nombre: 'Colegio Quetzalli', archivo: foto('clientes/colegio-quetzalli.webp') },
  { nombre: 'Babys Club', archivo: foto('clientes/babys-club.webp') },
  { nombre: 'Buenatierra', archivo: foto('clientes/buenatierra.webp') },
  { nombre: 'Buntmedia', archivo: foto('clientes/buntmedia.webp') },
  { nombre: 'Ix Agency', archivo: foto('clientes/ix-agency.webp') },
  { nombre: 'Aeroelectronica', archivo: foto('clientes/aeroelectronica.webp') },
  { nombre: 'Abriendo Camino', archivo: foto('clientes/abriendo-camino.webp') },
  { nombre: 'Beeon', archivo: foto('clientes/beeon.webp') },
  { nombre: 'Dentelis', archivo: foto('clientes/dentelis.webp') },
  { nombre: 'Farmacos', archivo: foto('clientes/farmacos.webp') },
  { nombre: 'Granut Mix', archivo: foto('clientes/granut-mix.webp') },
  { nombre: 'GH Abogados', archivo: foto('clientes/gh-abogados.webp') },
  { nombre: 'Propacan', archivo: foto('clientes/propacan.webp') },
  { nombre: 'Abrazos con el Alma', archivo: foto('clientes/abrazos-con-el-alma.webp') },
];
