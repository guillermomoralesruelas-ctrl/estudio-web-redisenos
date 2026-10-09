// Contenido de Alcázar Inmobiliaria, tomado de investigacion/crudo.json y del sitio en vivo (inicio, ventas, rentas,
// ¿Quiénes somos? y contacto, 2026-10-09). Las 137 propiedades de propiedades.json salen de su listado de EasyBroker
// (título, tipo, zona, precio, recámaras, baños, m² y coordenadas que publica). Nada inventado; textos del estudio en CAMBIOS.md.
import lista from './propiedades.json';

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Alcázar Inmobiliaria',
  ciudad: 'Oaxaca de Juárez, Oaxaca',
  telefono: '951 236 8601',
  telefonoHref: 'tel:+529512368601',
  celular: '951 379 8170',
  celularHref: 'tel:+529513798170',
  whatsapp: '5219513798170',
  email: 'inmueblesalcazar@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61551608237840',
  // Su sitio no publica dirección de oficina: el enlace busca el nombre en Google Maps.
  maps: 'https://www.google.com/maps/search/?api=1&query=Alc%C3%A1zar+Inmobiliaria+Oaxaca+de+Ju%C3%A1rez',
  sitio: 'https://www.alcazarinmobiliaria.com',
};
export const wa = (texto?: string) => `https://wa.me/${negocio.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const lema = 'Somos una agencia inmobiliaria en Oaxaca, México. Te acompañamos y guiamos para tener el inmueble que quieres a través de un proceso transparente y confiable.';
export const quienes = [
  'En Alcázar Inmobiliaria nos dedicamos a ofrecer soluciones inmobiliarias en Oaxaca de Juárez, combinando experiencia, profesionalismo y un profundo conocimiento del mercado local.',
  'Nuestra misión es ayudarte a encontrar la propiedad ideal, ya sea para vivir, invertir o emprender, brindando un servicio personalizado y transparente en cada etapa del proceso.',
];
export const servicio = ['Personalizado', 'Transparente', 'Eficiente'];

export type Op = 'venta' | 'renta' | 'preventa';
export type Propiedad = {
  id: string; titulo: string; tipo: string; zona: string; municipio: string; op: Op; precio: number;
  rec: number | null; banos: number | null; m2: string | null; lat: number; lng: number; url: string;
};
export const propiedades = lista as Propiedad[];
export const fechaListado = '9 de octubre de 2026';

// Grupos de tipo para el buscador (los tipos tal como los nombra EasyBroker).
export const grupos = [
  { id: 'casa', nombre: 'Casas', tipos: ['Casa'] },
  { id: 'depa', nombre: 'Departamentos', tipos: ['Departamento'] },
  { id: 'terreno', nombre: 'Terrenos', tipos: ['Terreno', 'Terreno comercial'] },
  { id: 'comercial', nombre: 'Locales, oficinas y bodegas', tipos: ['Local comercial', 'Oficina', 'Edificio', 'Bodega comercial'] },
] as const;

// Topes de presupuesto para el buscador (MXN). null = sin tope.
export const topes = {
  compra: [1_000_000, 2_000_000, 3_000_000, 5_000_000, 8_000_000, 12_000_000, 20_000_000, null],
  renta: [10_000, 15_000, 20_000, 30_000, 50_000, null],
};

// Rótulos del mapa: el centro de las propiedades que publican en cada zona (aproximado a partir de sus coordenadas).
export const rotulos = [
  { t: 'Centro', lat: 17.064, lng: -96.726 },
  { t: 'San Felipe del Agua', lat: 17.112, lng: -96.713 },
  { t: 'Huayápam', lat: 17.093, lng: -96.68 },
  { t: 'Etla', lat: 17.184, lng: -96.774 },
  { t: 'Atzompa', lat: 17.104, lng: -96.773 },
  { t: 'Xoxocotlán', lat: 17.025, lng: -96.734 },
  { t: 'Tlalixtac', lat: 17.063, lng: -96.646 },
  { t: 'San Raymundo Jalpan', lat: 16.984, lng: -96.751 },
  { t: 'Coyotepec', lat: 16.954, lng: -96.704 },
];

export const destacadas = [
  { id: 'casa-con-alberca-en-huayapam', foto: 'casa-con-alberca-en-huayapam', alt: 'Terraza con alberca y vista al valle de Oaxaca en Huayápam' },
  { id: 'hermosa-casa-oaxaca', foto: 'hermosa-casa-oaxaca', alt: 'Balcón de madera sobre el jardín y la alberca de una casa en La Cascada' },
  { id: 'casa-con-alberca-en-san-felipe-san-felipe-del-agua', foto: 'casa-con-alberca-en-san-felipe-san-felipe-del-agua', alt: 'Casa de dos pisos con alberca en San Felipe del Agua' },
  { id: 'casa-cumbre-guadalupe-victoria', foto: 'casa-cumbre-guadalupe-victoria', alt: 'Estancia de doble altura con ventanal a los cerros' },
  { id: 'oportunidad-en-el-centro-historico-oaxaca-centro', foto: 'oportunidad-en-el-centro-historico-oaxaca-centro', alt: 'Corredor con techo de teja y piso de mosaico en una casona del centro' },
  { id: 'hermosa-casa-en-palmas-de-santiago-ii', foto: 'hermosa-casa-en-palmas-de-santiago-ii', alt: 'Fraccionamiento de casas blancas con palmeras y cerros al fondo' },
];
