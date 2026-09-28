// Contenido de Harmony Spa Huatulco, tomado del sitio original (clon en ../sitio/index.html).
// Regla: nada inventado. Lo que falta va como [PENDIENTE] y está anotado en CAMBIOS.md.
// Las fotos son copias .webp de las propias del negocio (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: keyof typeof fotos) => ({
  src: img(nombre),
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});

export const negocio = {
  nombre: 'Harmony Spa Huatulco',
  ciudad: 'Crucecita, Bahías de Huatulco, Oaxaca',
  telefono: '9581229345',
  whatsapp: '529581229345',
  direccion: 'Vialidad 7 #8, manzana lote 6, sector M, Arrecife, 70980 Crucecita, Oax.',
  mapa: 'https://www.google.com.mx/maps/place/Harmony+spa+Huatulco/@15.7656043,-96.1293606,15z/data=!4m2!3m1!1s0x0:0x673cbb032d36db0f',
  facebook: 'https://www.facebook.com/Harmony-spa-Huatulco-1921961574706637/',
  instagram: 'https://www.instagram.com/spa_huatulco_by_c_harmony/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const paquetes = [
  {
    id: 'temazcal',
    nombre: 'Temazcal',
    duracion: '60 minutos',
    duracionMin: 60,
    precio: 500,
    descripcion: 'Llevamos el temazcal a otro nivel de atención, cuidando tu salud al máximo.',
    foto: 'temazcal.webp',
  },
  {
    id: 'temazcal-plus',
    nombre: 'Temazcal Plus',
    duracion: '2 horas',
    duracionMin: 120,
    precio: 650,
    descripcion: 'Paquete tradicional: baño de temazcal, exfoliación de arcilla virgen corporal herbal, té hidratante, aromaterapia y musicoterapia, de forma privada. De 9 a 4 pm.',
    foto: 'temazcal.webp',
  },
  {
    id: 'masaje',
    nombre: 'Masaje',
    duracion: '60 minutos',
    duracionMin: 60,
    precio: 900,
    descripcion: 'Incluye una mascarilla de chocolate de regalo.',
    foto: 'tratamiento-1.webp',
  },
  {
    id: 'golden',
    nombre: 'Golden',
    duracion: '120 minutos',
    duracionMin: 120,
    precio: 900,
    descripcion: 'Baño de temazcal, exfoliación de arcilla virgen corporal herbal, té hidratante, aromaterapia, musicoterapia y masaje relajante de cuerpo completo (40 min).',
    foto: 'temazcal.webp',
  },
  {
    id: 'anti-edad',
    nombre: 'Anti Edad',
    duracion: '1 hora',
    duracionMin: 60,
    precio: 950,
    descripcion: 'Consulta nuestras opciones disponibles para lograr un cutis espectacular.',
    foto: 'tratamiento-2.webp',
  },
  {
    id: 'hidratante',
    nombre: 'Hidratante',
    duracion: '1 hora',
    duracionMin: 60,
    precio: 950,
    descripcion: 'Una atención preferencial para evitar que el paso de los años marque tu cara.',
    foto: 'tratamiento-3.webp',
  },
  {
    id: 'premium',
    nombre: 'Premium',
    duracion: '2 horas',
    duracionMin: 120,
    precio: 1200,
    descripcion: 'Déjate consentir por nuestro más amplio repertorio de atenciones.',
    foto: 'sala.webp',
  },
  {
    id: 'parejas',
    nombre: 'Parejas',
    duracion: '2 horas',
    duracionMin: 120,
    precio: 2500,
    descripcion: 'Disfruta en pareja de todo el beneficio del spa, con la máxima privacidad.',
    foto: 'sala.webp',
  },
] as const satisfies readonly { id: string; nombre: string; duracion: string; duracionMin: number; precio: number; descripcion: string; foto: keyof typeof fotos }[];

export type Paquete = (typeof paquetes)[number];

export const servicios = [
  {
    nombre: 'Spa & Relax',
    descripcion: 'Las caricias de nuestro spa te esperan para consentir a tu cuerpo y alma, con manos profesionales dedicadas al tratamiento.',
  },
  {
    nombre: 'Temazcal',
    descripcion: 'Disfruta de todas las bondades de un baño de vapor ancestral, usado en diversas culturas de Mesoamérica y Norteamérica.',
  },
  {
    nombre: 'Tratamientos faciales',
    descripcion: 'Mejoran la salud y el aspecto de tu piel, cuidando su estado día a día.',
  },
  {
    nombre: 'Nutrición y cuidados alimenticios',
    descripcion: 'Nuestros expertos diseñan una dieta y orientan sobre qué alimentos incluir, cómo cocinarlos y cómo leer una etiqueta nutricional.',
  },
];

export const confianza = [
  { titulo: 'Tratamientos cosméticos', texto: 'Una amplia gama de tratamientos corporales y faciales.' },
  { titulo: 'Cabinas privadas', texto: 'Toda la privacidad que necesitas para llegar a ese momento de relax total.' },
  { titulo: 'Hermoso temazcal', texto: 'Una tradición prehispánica que purifica cuerpo y alma.' },
];

export const antiguedad = 'Más de 25 años de experiencia ofreciendo tratamientos que conectan el cuerpo y el alma.';
export const traslado = 'Cortesía a nuestros clientes VIP: traslado incluido, ida y vuelta, a su hotel en Huatulco.';
