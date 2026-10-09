// Contenido de Altura Maxima Real Estate, tomado de investigacion/crudo.json y del sitio en vivo (inicio, ventas, rentas,
// vender mi casa, ¿quiénes somos? y contacto, 2026-10-09). Las 433 propiedades de propiedades.json salen de su listado de
// EasyBroker (título, tipo, zona, municipio, operación, precio, recámaras, baños y m² tal como los publica).
// Nada inventado; los textos del estudio y los cálculos (precio por m²) se explican en CAMBIOS.md.
import lista from './propiedades.json';

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Altura Máxima Real Estate',
  direccion: 'Av. Beethoven #5612, Col. La Estancia',
  ciudad: 'Zapopan, Jalisco',
  telefono: '33 3327 8984',
  telefonoHref: 'tel:+523333278984',
  celular: '33 1811 4983',
  celularHref: 'tel:+523318114983',
  whatsapp: '523318114983',
  email: 'alturamaximarealestate@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Av.+Beethoven+5612%2C+La+Estancia%2C+Zapopan%2C+Jalisco',
  facebook: 'https://www.facebook.com/alturamaximabienesraices/',
  instagram: 'https://www.instagram.com/alturamaximarealestate',
  youtube: 'https://www.youtube.com/channel/UCWUtsx1X3C-yHu6Jn20ytOw',
  sitio: 'https://www.alturamaxima.mx',
};
// El mensaje de WhatsApp que usa su sitio actual.
export const mensajeBase = 'Hola buen dia me gustaria contactar con un vendedor de la inmobiliaria';
export const wa = (texto: string = mensajeBase) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const ficha = (id: string) => `${negocio.sitio}/property/${id}`;

// Sus textos de ¿Quiénes somos?, Vender mi casa e inicio, resumidos sin cambiar lo que ofrecen.
export const quienes = 'Te ayudamos a comprar, vender o rentar en Zapopan y Guadalajara, y a invertir en Puerto Vallarta y la Riviera Nayarit. Servicio personalizado, trato directo y transparente en cada paso.';
export const vender = {
  intro: 'Si quieres vender tu casa en Zapopan de manera rápida y al mejor precio, te damos un servicio integral y personalizado para que tu propiedad tenga la máxima exposición en el mercado.',
  pasos: [
    { t: 'Asesoría personalizada', d: 'Analizamos el mercado y creamos un plan de venta para tu propiedad.' },
    { t: 'Marketing de alto impacto', d: 'Plataformas digitales, redes sociales y nuestra red de contactos.' },
    { t: 'Casas de lujo y exclusivas', d: 'Experiencia y contactos para llegar a compradores de alta gama.' },
  ],
  cierre: 'Contáctanos para una evaluación gratuita de tu propiedad.',
};

export type Op = 'V' | 'P' | 'R';
export type Propiedad = {
  id: string; t: string; tipo: string; z?: string; mun: string; op: Op; p: number; mon: 'MXN' | 'USD';
  rec?: number; ban?: number; m2?: number; ft?: boolean; f?: string;
};
export const propiedades = (lista as Propiedad[]).map((p) => ({ ...p, t: p.t.replace(/[\s,]+$/, '').replace(/\s{2,}/g, ' ') }));
export const fechaListado = '9 de octubre de 2026';
export const opNombre: Record<Op, string> = { V: 'En venta', P: 'En preventa', R: 'En renta' };

// Las 9 propiedades destacadas de su página de inicio, en el mismo orden.
export const destacadas = [
  '296-espana-806-macaria-806-ja-puerto-vallarta',
  'ofrenda-107',
  'casa-en-venta-condominio-nuevo-vallarta-nayarit',
  'departamento-en-venta-vitia-la-toscana-valle-real-zapopan-valle-real',
  '113-berlin-b206-aymara-b206-ja-puerto-vallarta',
  'loma-del-pacifico-0-lote-32-manzana-5-ja-puerto-vallarta',
  '296-espana-704-macaria-704-ja-puerto-vallarta',
  '113-berlin-a408-aymara-a408-ja-puerto-vallarta',
  '296-espana-407-macaria-407-ja-puerto-vallarta',
];

// Regiones para la calculadora: así agrupa su listado (Guadalajara metropolitana y la bahía de Banderas).
export const regiones = [
  { id: 'gdl', nombre: 'Zapopan y Guadalajara', municipios: ['Zapopan', 'Guadalajara', 'Tlajomulco de Zúñiga'] },
  { id: 'costa', nombre: 'Puerto Vallarta y Riviera Nayarit', municipios: ['Puerto Vallarta', 'Bahía de Banderas'] },
] as const;

// Una renta de 38 millones o un precio por m² fuera de escala casi siempre es un error de captura: se marca "por confirmar".
export const porConfirmar = (p: Propiedad) =>
  (p.op === 'R' && p.mon === 'MXN' && p.p > 1_000_000);
