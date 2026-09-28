// Contenido de Florería Flordivan, tomado de su sitio (investigacion/crudo.json y original.html) y de su tienda
// WooCommerce (API pública /wp-json/wc/store/v1/products, 45 productos, leída con curl el 2026-09-28 → catalogo.json).
// Regla: nada inventado. Las fotos son copias .webp de las propias (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';
import catalogoJson from './catalogo.json';

export type NombreFoto = keyof typeof fotos;
export const foto = (nombre: NombreFoto) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});

export type Producto = { sku: string; nombre: string; categoria: string; precio: number; url: string; disponible: boolean; foto: NombreFoto | null };
export const catalogo = catalogoJson as Producto[];

export const negocio = {
  nombre: 'Florería Flordivan',
  lema: 'Boutique de flores',
  whatsapp: '5213314107828',
  whatsappVisible: '33 1410 7828',
  whatsapp2: '5213314107894',
  whatsapp2Visible: '33 1410 7894',
  instagram: 'https://www.instagram.com/flordivan_boutique/',
  facebook: 'https://www.facebook.com/floreriaflordivan',
  tienda: 'https://www.flordivan.com/boutique/',
  // Solo entrega a domicilio; no publica dirección. Se usa una búsqueda en Google Maps.
  mapa: 'https://www.google.com/maps/search/Florer%C3%ADa+Flordivan+Guadalajara',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const waGeneral = wa('Hola, les escribo desde su sitio web. Quisiera información sobre sus arreglos.');

// Cajas redondas de rosas: cantidad, precio y ficha, tal como su tienda.
export const cajas = [
  { rosas: 24, precio: 850, url: 'https://www.flordivan.com/boutique/caja-redonda-con-24-rosas/' },
  { rosas: 50, precio: 1350, url: 'https://www.flordivan.com/boutique/caja-redonda-con-50-rosas/' },
  { rosas: 75, precio: 2100, url: 'https://www.flordivan.com/boutique/caja-redonda-con-75-rosas/' },
  { rosas: 100, precio: 2700, url: 'https://www.flordivan.com/boutique/caja-redonda-con-100-rosas/' },
  { rosas: 150, precio: 4050, url: 'https://www.flordivan.com/boutique/caja-redonda-con-150-rosas/' },
  { rosas: 200, precio: 5400, url: 'https://www.flordivan.com/boutique/caja-redonda-con-200-rosas/' },
];

// Los seis colores de sus "Caja de Rosas …". El tono de cada rosa es nuestro, para el dibujo.
export const colores = [
  { nombre: 'Rojas', rosa: '#b3122e', centro: '#6e0a1c' },
  { nombre: 'Rosas', rosa: '#f2a7b8', centro: '#d97890' },
  { nombre: 'Blancas', rosa: '#f7f2e8', centro: '#dccfbb' },
  { nombre: 'Amarillas', rosa: '#f5d33d', centro: '#c9a312' },
  { nombre: 'Fucsia', rosa: '#d61f7d', centro: '#8e0f50' },
  { nombre: 'Lilas', rosa: '#b393d6', centro: '#7d5aa6' },
];

export const incluye = ['Caja de cartón de alta durabilidad', 'Rosas frescas', 'Moño y tarjeta con mensaje personalizado'];

export const entregas = [
  'Envío a domicilio en la Zona Metropolitana de Guadalajara.',
  'Entregas de lunes a sábado; su sitio indica de 9:00 a 13:00 y que al pedir eliges mañana o tarde.',
  'En Día de las Madres y San Valentín no hay entregas con horario especial: pide con anticipación.',
];

export const eventos = {
  titulo: 'Diseño floral para eventos sociales',
  texto: 'En Flordivan creemos que las flores tienen el poder de transformar cualquier espacio en un lugar mágico. Somos un equipo de expertos en diseño floral con años de experiencia creando arreglos únicos y personalizados para bodas, XV años y eventos corporativos.',
  puntos: [
    { t: 'Personalización', d: 'Cada diseño es único y adaptado a tus necesidades.' },
    { t: 'Calidad', d: 'Flores frescas y de temporada, de la más alta calidad.' },
    { t: 'Atención al detalle', d: 'Nos preocupamos por cada detalle para que tu evento sea perfecto.' },
  ],
};

export const hechosAMano =
  'Elaboramos los arreglos uno a uno de manera artesanal. Al ser hechos a mano puede haber pequeñas variaciones de tono, tamaño y forma según la temporada; si no podemos cumplir con alguna especificación, te contactamos de inmediato para sugerir un ajuste o hacer el reembolso.';
