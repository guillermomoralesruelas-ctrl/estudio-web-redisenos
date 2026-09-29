// Contenido de Erick Oseguera Fotografía, tomado del sitio original: clon en ../sitio, investigacion/crudo.json y las
// páginas de inicio, contacto, sobre mí y portafolio leídas en vivo el 2026-09-28
// (entregables/textos-sitio-en-vivo-2026-09-28.txt).
// Regla: nada inventado. Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Erick Oseguera',
  marca: 'Erick Oseguera Storyteller',
  base: 'San Miguel de Allende',
  // El botón de chat de su sitio (Joinchat) abre WhatsApp con el 521 415 138 0544; el mismo número está en su enlace "tel:".
  whatsapp: '524151380544',
  telefono: '415 138 0544',
  telefonoHref: 'tel:+524151380544',
  correo: 'hola@erickoseguera.com',
  instagram: 'https://www.instagram.com/erickoseguera_storyteller/',
  instagramUsuario: '@erickoseguera_storyteller',
  facebook: 'https://www.facebook.com/ErickOsegueraWP',
  sitio: 'https://erickoseguera.com/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waHola = wa('¡Hola Erick! Queremos saber si tienes disponible la fecha de nuestra boda.');

// Ciudades que nombra su sitio ("San Miguel de Allende, Guadalajara, Querétaro, León" y "CDMX"); "disponibles en todo el país".
export const ciudades = ['San Miguel de Allende', 'Guadalajara', 'Querétaro', 'León', 'Ciudad de México'];

export type Servicio = { id: string; nombre: string; desde: number; texto: string; puntos: string[]; foto: string; alt: string };

export const servicios: Servicio[] = [
  {
    id: 'boda', nombre: 'Bodas', desde: 26000, foto: 'baile-salon', alt: 'Pareja bailando en un salón con candiles y muros dorados',
    texto: 'Tres paquetes de fotografía y video, de 5 a 10 horas de cobertura, pensados para cada tipo de boda y de pareja.',
    puntos: ['Dos fotógrafos en todos los paquetes', 'De 5 a 10 horas de cobertura', 'Fotografía y video', 'Sesión Save the Date incluida'],
  },
  {
    id: 'love', nombre: 'Love Session', desde: 5000, foto: 'cielo-rosa', alt: 'Pareja de pie frente a montañas bajo un cielo rosa al atardecer',
    texto: 'No necesitan esperar a casarse para tener una sesión en pareja: una tarde increíble y fotos con una visión nostálgica y poética. ¿Tienen algún lugar favorito?',
    puntos: ['Sesión en pareja', 'En el lugar que ustedes elijan'],
  },
  {
    id: 'save', nombre: 'Save the Date', desde: 5000, foto: 'campo-atardecer', alt: 'Figura en un campo de pastos altos al anochecer',
    texto: 'Una sesión previa a la boda para conectar como humanos y conocerse. Sirve para la invitación digital y para imprimir fotos en el álbum de firmas.',
    puntos: ['Sesión previa a la boda', 'Para su invitación digital y el álbum de firmas', 'Incluida en cada boda'],
  },
];

// Galería: fotos de su sitio, sin rotular pareja ni lugar (su portafolio no lo dice por foto).
export const galeria = [
  { f: 'callejon', alt: 'Novios besándose en un callejón empedrado con casas de colores', ancho: true },
  { f: 'novia-corona', alt: 'Novia con corona de flores y ramo blanco en un bosque' },
  { f: 'retrato-sombrero', alt: 'Hombre con sombrero en la mano de pie en un pastizal dorado' },
  { f: 'fiesta', alt: 'Amigos del novio cargando a la novia en plena fiesta', ancho: true },
  { f: 'carrito', alt: 'Novia sentada en un carrito de supermercado empujado por el novio en un estacionamiento' },
  { f: 'beso-jardin', alt: 'Novios abrazados junto a un muro de ladrillo con el sol detrás' },
  { f: 'mesa-velas', alt: 'Mesa larga de banquete con velas y flores rojas', ancho: true },
  { f: 'ramo', alt: 'Novia sosteniendo un ramo de flores de colores' },
  { f: 'silueta-mar', alt: 'Silueta de una pareja frente al sol poniéndose en el mar' },
];

// Las historias de su portafolio, en su orden.
export const historias = [
  'Intimate', 'Cait & Imran', 'Bohemia en Callejones: Guanajuato', 'Memorias en Susurros del Alma', 'Mágica Boda en San Miguel',
  'Ecos de Halloween', 'McLove para llevar', 'Love Beyond Borders', 'Cris y Dani Save the Date', 'Blanca y José Save the Date',
  'Rock n Love', 'Hi! Do you speak English?', 'The Sunset', 'Down in the Forest',
];

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
