// Contenido de Integra 360, tomado del sitio original (clon en ../sitio, investigacion/crudo.json e investigacion/original.html)
// y de la API pública de su WordPress (/wp-json/wp/v2/properties, curl 2026-09-27) para el inventario (propiedades.json).
// Regla: nada inventado. Lo que falta está en CAMBIOS.md → "Pendiente de confirmar con el cliente".
// Las rutas de imagen son relativas a publicDir (../assets/web, lo llena fotos-web.mjs).
import propiedadesJson from './propiedades.json';
import medidas from './fotos.json';

export type Tipo = 'casa' | 'depa' | 'terreno' | 'otro';
export type Op = 'venta' | 'renta';
export type Propiedad = {
  id: number; titulo: string; tipo: Tipo; op: Op; precio: number; sufijo: '' | 'preventa' | 'm2' | 'mes';
  desde?: boolean; mant?: boolean; cons?: number; terreno?: number; rec?: number; banos?: number;
  lat: number; lng: number; lugar: string; url: string; fecha: string; fotos?: string[];
};
export type Foto = { src: string; w: number; h: number; alt: string };

export const foto = (f: string) => `${import.meta.env.BASE_URL}${f}`;
const tam = medidas as Record<string, number[]>;
export const img = (f: string, alt: string): Foto => ({ src: foto(f), w: tam[f]?.[0] ?? 592, h: tam[f]?.[1] ?? 444, alt });

export const propiedades = propiedadesJson as Propiedad[];
export const porId = (id: number) => propiedades.find((p) => p.id === id)!;

export const negocio = {
  nombre: 'Integra 360',
  lema: 'Expertos en bienes raíces',
  telefono: '771 214 9491',
  telLink: '+527712149491',
  whatsapp: '527712149491', // su sitio usa 5217712149491 en api.whatsapp.com; wa.me con 52 es el formato actual
  correo: 'contacto@integra360.com.mx',
  direccion: ['Boulevard Nuevo Hidalgo 326 Int. 4', 'Puerta de Hierro, Pachuca de Soto, Hidalgo'],
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Boulevard Nuevo Hidalgo 326, Puerta de Hierro, Pachuca de Soto, Hidalgo'),
  sitio: 'https://integra360.com.mx/',
  facebook: 'https://www.facebook.com/IntegraBienesRaices360/',
  instagram: 'https://instagram.com/integra360bienesraices',
  tiktok: 'https://www.tiktok.com/@integra360br',
  youtube: 'https://youtube.com/@integra360bienesraicescasa9',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, vi su sitio y busco una propiedad en Pachuca. ¿Me pueden ayudar?');
// Mismo mensaje que usa su sitio en cada ficha: "Hola, estoy interesado(a) en [título] enlace".
export const waPropiedad = (p: Propiedad) => wa(`Hola, estoy interesado(a) en [${p.titulo}] ${p.url}`);

// Centro de la rosa: la colonia Puerta de Hierro (punto de OpenStreetMap), donde está su oficina. No es la ubicación exacta.
export const centro = { lat: 20.0884, lng: -98.7651, nombre: 'Puerta de Hierro' };
// Referencias en la orilla: las salidas que mencionan sus fichas ("a 45 min de CDMX", "salida a Sahagún", "pueblos mágicos").
// Rumbo en grados desde el centro, calculado con las coordenadas de cada ciudad.
export const salidas: { rumbo: number; texto: string }[] = [
  { rumbo: 208, texto: 'CDMX' },
  { rumbo: 151, texto: 'Sahagún' },
  { rumbo: 91, texto: 'Tulancingo' },
  { rumbo: 60, texto: 'Huasca' },
  { rumbo: 317, texto: 'Actopan' },
];
export const reloj = { lat: 20.12757, lng: -98.7318, nombre: 'Reloj Monumental' };

// "Descubre nuestras propiedades destacadas" de su inicio (26296 repite la ficha 26310 y se muestra una vez, con sus dos fotos).
export const destacadasConFoto = [26309, 26310];
export const destacadasLista = [26284, 26266, 26245];

// "Por qué Integra 360 es tu mejor opción?" (su subtítulo es "Lorem ipsum…" y no se usa).
export const servicios: [string, string][] = [
  ['Inversiones Inmobiliarias', 'El sector inmobiliario es uno de los polos donde los expertos resguardan su patrimonio para generar más riqueza, te ayudaremos a buscar las mejores oportunidades de inversión inmobiliaria siempre de manera segura y confiable.'],
  ['Venta de Inmuebles', 'Nosotros nos ocupamos del engorroso trabajo de vender tu inmueble acompañándote de principio a fin para que no te preocupes por nada, perfilamos de manera correcta cada cliente hasta lograr la venta de tu propiedad, te asesoraremos en temas fiscales y haremos toda la gestión notarial para que la experiencia de vender tu propiedad con INTEGRA360 sea la mejor.'],
  ['Asesoría en compra de Inmuebles', 'El comprar una propiedad ya sea para formar tu nuevo hogar o para invertir es una decisión de suma importancia, es por eso que nosotros nos tomamos en serio el apoyarte en el proceso. Contamos con la cartera de las mejores propiedades de la zona y si no está en nuestro inventario te ayudamos a conseguirla, siempre asegurando que los inmuebles propuestos estén en regla. Te acompañamos desde la búsqueda de tu inmueble ideal hasta la firma ante notario público y recibir la posesión, un servicio 360°.'],
  ['Gestión de Créditos Hipotecarios', 'Gestionamos tu crédito de manera segura y en una sola vuelta, mediante alianza con los mejores brókers y ejecutivos de bancos, te asesoramos para que adquieras con las mejores condiciones crediticias y hagas una compra inteligente.'],
  ['Renta de Inmuebles', 'Rentar tu inmueble es poner tu propiedad en manos de un tercero, pero nosotros encontraremos al inquilino ideal para tu inmueble, podemos ayudarte con la administración de tu inmueble si lo deseas.'],
];

export const publicar = {
  titulo: 'Contáctanos para publicar tu casa o terreno',
  texto: 'Creamos una publicación personalizada para tu inmueble, destacamos tu publicación y te asesoramos a cerrar la venta o renta.',
};

// Logos de su sección "Explora" (IMG_4760 a IMG_4783), con el nombre que se lee en cada uno.
export const desarrollos: [string, string][] = [
  ['4760', 'Rincón Esmeralda Residencial'], ['4761', 'Olivos Residencial'], ['4763', 'Vista Mineral Reforma'],
  ['4765', 'Punta Poniente Residencial'], ['4767', 'Rincón de la Plata Residencial'], ['4769', 'Residencial Rincón del Sur'],
  ['4772', 'GEMA'], ['4775', 'ERVE'], ['4778', 'Rosso Residencial'], ['4781', 'Alvento Habitat'], ['4783', 'Residencial E-Sur'],
];
