// Contenido de Higuera Blanca (Boca del Río y Zempoala, Veracruz). https://higuerablanca.com.mx/ (una página).
// Textos copiados de investigacion/crudo.json (inicio): historia, esencia, sugerencias del chef, especialidades,
// sucursales, horarios y contacto. Se recortaron y se quitaron las mayúsculas de adorno.
// Datos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-26 (ver CAMBIOS.md):
//   - la carta completa con precios, de su PDF /assets/menu/MENU.pdf (en carta.ts);
//   - el WhatsApp de Zempoala (wa.me/522961096287), de su script.js;
//   - las coordenadas de sus dos enlaces de Google Maps.
// Lo nuevo (títulos, botones, notas que explican la carta, el glosario, los textos de "¿Cómo lo quieres?" y los
// mensajes de WhatsApp) está en CAMBIOS.md → "Qué se agregó".
import type { Prep } from './carta';

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

export const wa = (numero: string, texto: string) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

export type Sucursal = {
  id: 'boca' | 'zempoala';
  nombre: string;
  tipo: string;
  calle: string;
  colonia: string;
  cp: string;
  ciudad: string;
  telefono: string;
  tel: string;
  wa: string;
  /** El mensaje de su sitio para esa sucursal. */
  saludo: string;
  correo: string;
  dias: string;
  horas: string;
  cierra: string;
  mapa: string;
  geo: [number, number];
};

export const sucursales: Sucursal[] = [
  {
    id: 'boca', nombre: 'Boca del Río', tipo: 'Principal',
    calle: 'De Los Reyes Católicos 65', colonia: 'Fracc. Las Américas', cp: '94298', ciudad: 'Boca del Río, Veracruz',
    telefono: '229 476 4100', tel: 'tel:+522294764100', wa: '522294764100',
    saludo: 'Hola, me gustaría hacer una reservación en Boca del Río.',
    correo: 'higuerablanca.boca@hotmail.com',
    dias: 'Miércoles a lunes', horas: '12:00 pm a 7:30 pm', cierra: '19:30',
    mapa: 'https://maps.app.goo.gl/FHcWxxP2UteymVEK8', geo: [19.1466865, -96.105484],
  },
  {
    id: 'zempoala', nombre: 'Zempoala', tipo: 'Matriz',
    calle: 'Carretera Cardel-Nautla km 8', colonia: 'Ejido Higuera Blanca', cp: '91660', ciudad: 'Zempoala, Veracruz',
    telefono: '296 109 6287', tel: 'tel:+522961096287', wa: '522961096287',
    saludo: 'Hola, me gustaría hacer una reservación en Zempoala.',
    correo: 'higuera.blanca@hotmail.com',
    dias: 'Miércoles a lunes', horas: '12:00 pm a 7:00 pm', cierra: '19:00',
    mapa: 'https://maps.app.goo.gl/gNBVM2LZa3KQbSXf8', geo: [19.4390945, -96.3789978],
  },
];
export const [boca, zempoala] = sucursales;

export const negocio = {
  nombre: 'Higuera Blanca',
  lema: 'Tradición y sabor del mar desde 1981',
  frase: 'Tradición que sabe',
  facebook: 'https://www.facebook.com/higuerablancadeboca/',
  instagram: 'https://www.instagram.com/higuerablanca.boca',
  menuPdf: 'https://higuerablanca.com.mx/assets/menu/MENU.pdf',
  logo: f('logo', 420, 346, 'Higuera Blanca Restaurante: un cangrejo que levanta una copa'),
  proximamente: { nombre: 'Plaza Portamar', lugar: 'Riviera Veracruzana' },
};

export const portada = {
  fotos: [
    f('vuelve-a-la-vida', 734, 1100, 'Vuelve a la vida marinera servido en copa alta, con aguacate encima, junto a un agua de naranja con chile en el borde'),
    f('acamayas', 734, 1100, 'Acamayas enchipotladas en un platón blanco, con una bebida de naranja y salsas al fondo'),
  ],
};

export const historia = {
  titulo: 'Nuestra historia',
  parrafos: [
    'Hablar de Higuera Blanca, más que una historia, es una lección de vida, fundamentada en el trabajo y esfuerzo de la Sra. Columba Márquez Rivera.',
    'Restaurante Higuera Blanca abre sus puertas en 1981, cuyo nombre es en honor al ejido fundado.',
    'Desde entonces, hemos mantenido el compromiso de ofrecer a nuestros comensales los mariscos más frescos y auténticos de Veracruz, preparados con recetas tradicionales que han pasado de generación en generación.',
  ],
  esenciaTitulo: 'Nuestra esencia',
  esencia: 'Desde 1981, nuestra pasión es celebrar la riqueza del mar de Veracruz. Preservamos las tradiciones culinarias de la región con un servicio de excelencia, consolidándonos como un referente de calidad y sabor auténtico, manteniendo siempre la esencia familiar que nos distingue.',
  distingue: 'Calidad y sazón nos distinguen',
  foto: f('entrada', 1000, 917, 'Foto en sepia de la entrada de Higuera Blanca Restaurante: el letrero con el cangrejo y la copa, techo de teja, palmeras y el letrero "Bienvenidos, desde 1981"'),
};

/** Sugerencias del chef y especialidades del sitio, con el renglón de la carta que les corresponde. */
export const sugerencias: { foto: Foto; nombre: string; precio?: string }[] = [
  { foto: f('camarones-mojo', 641, 960, 'Camarones al mojo de ajo con arroz blanco, totopos y una limonada con hierbabuena'), nombre: 'Camarones al mojo de ajo', precio: '200 g, $360' },
  { foto: f('caldo-robalo', 641, 960, 'Caldo de rebanada de robalo en plato hondo, con epazote encima, bolillos y limones'), nombre: 'Caldo de rebanada de robalo', precio: '350 ml, $520' },
  { foto: f('negrillo-chile-limon', 641, 960, 'Lomo de negrillo al chile-limón bañado en salsa verde, con tortillas y una jamaica'), nombre: 'Lomo de negrillo al chile-limón', precio: '350 g, $580' },
  { foto: f('ensalada-michelle', 641, 960, 'Ensalada Michelle de mariscos con aguacate y pico de gallo, con totopos y bolillos'), nombre: 'Ensalada Michelle', precio: '300 g, $460' },
  { foto: f('dobladas-malpica', 641, 960, 'Dobladas de jaiba a la Malpica en salsa blanca, con rebanadas de aguacate encima'), nombre: 'Dobladas de jaiba a la Malpica', precio: '4 piezas, $320' },
  { foto: f('picadas-hueva', 641, 960, 'Picadas de hueva: cuatro picadas con hueva, aguacate y cebolla morada'), nombre: 'Picadas de hueva', precio: '4 piezas, $220' },
  { foto: f('platano-relleno', 641, 960, 'Plátano relleno de mariscos gratinado con queso, adornado con zanahoria y pimiento'), nombre: 'Plátano relleno de mariscos', precio: '180 g, $395' },
  { foto: f('salmon-chutney', 641, 960, 'Salmón en salsa chutney con cubos de fruta, espárragos y jitomate cherry'), nombre: 'Salmón en salsa chutney', precio: '280 g, $430' },
  { foto: f('cola-langosta', 641, 960, 'Cola de langosta a la mantequilla gratinada, con ensalada, una copa de vino y acamayas al fondo'), nombre: 'Cola de langosta a la mantequilla', precio: '$310 cada 100 g' },
  { foto: f('tentaculos', 641, 960, 'Tentáculos de pulpo con salsa oscura y ajonjolí, calabacitas asadas y arroz a un lado'), nombre: 'Tentáculos teriyaki' },
];

// ---------- "¿Cómo lo quieres?" ----------
// Las frases "que" son explicaciones generales de la cocina veracruzana (nuestras), no recetas de la casa:
// pendientes de confirmar con su cocina (CAMBIOS.md).
export type Preparacion = { id: Prep; nombre: string; que: string; salsa: string; brillo: string; foto?: Foto; fotoDe?: string };

export const preparaciones: Preparacion[] = [
  { id: 'chipotle', nombre: 'Enchipotlado', que: 'Bañado en salsa de chile chipotle, el jalapeño seco y ahumado.', salsa: '#8e2f1a', brillo: '#b8492a', foto: portada.fotos[1], fotoDe: 'Acamayas enchipotladas' },
  { id: 'chilpaya', nombre: 'Enchilpayado', que: 'En salsa de chile chilpaya, un chile silvestre pequeño y muy picoso de Veracruz.', salsa: '#a3271c', brillo: '#cf3d2a', foto: f('dobladas-malpica', 641, 960, 'Dobladas de jaiba a la Malpica en salsa chilpaya'), fotoDe: 'Dobladas de jaiba a la Malpica, en salsa chilpaya' },
  { id: 'mojo', nombre: 'Al mojo de ajo', que: 'Con mucho ajo dorado.', salsa: '#c9913a', brillo: '#e6b865', foto: sugerencias[0].foto, fotoDe: 'Camarones al mojo de ajo' },
  { id: 'ajillo', nombre: 'Al ajillo', que: 'Salteado con ajo y chile guajillo en rodajas.', salsa: '#a8451b', brillo: '#d0692e' },
  { id: 'habanera', nombre: 'En salsa habanera', que: 'En salsa de chile habanero.', salsa: '#d9661c', brillo: '#f08a36' },
  { id: 'chilelimon', nombre: 'Al chile-limón', que: 'Con chile y limón.', salsa: '#7d8f2e', brillo: '#a4b548', foto: sugerencias[2].foto, fotoDe: 'Lomo de negrillo al chile-limón' },
  { id: 'empapelado', nombre: 'Empapelado', que: 'Envuelto en papel y cocido al horno en su propio jugo.', salsa: '#e8dcc0', brillo: '#f6efdc' },
  { id: 'acuyo', nombre: 'Al acuyo', que: 'Al horno con acuyo, la hoja santa de sabor anisado de la cocina veracruzana.', salsa: '#3f6a34', brillo: '#5d8c4b' },
  { id: 'veracruzana', nombre: 'A la veracruzana', que: 'En la salsa del puerto: jitomate, cebolla, aceitunas, alcaparras y chiles güeros.', salsa: '#bf3b27', brillo: '#e0603f' },
  { id: 'sal', nombre: 'A la sal', que: 'Horneado entero dentro de una costra de sal.', salsa: '#eeeae0', brillo: '#ffffff' },
];

/** Palabras de la carta explicadas (nuestras, generales; pendientes de confirmar con su cocina). */
export const glosario: { palabra: string; que: string }[] = [
  { palabra: 'Chilpachole', que: 'caldo picoso de jaiba o de camarón con chile y epazote, típico de Veracruz.' },
  { palabra: 'Acamayas', que: 'langostinos de río.' },
  { palabra: 'Negrillo', que: 'un mero del Golfo.' },
  { palabra: 'Peto', que: 'pez del Golfo de carne firme.' },
  { palabra: 'Minilla', que: 'pescado desmenuzado y guisado.' },
  { palabra: 'Rasurado', que: 'picado muy fino.' },
  { palabra: 'Picadas', que: 'tortillas gruesas de maíz con el borde pellizcado.' },
  { palabra: 'Campechana y marinera', que: 'cocteles de dos mariscos.' },
  { palabra: 'A la tumbada', que: 'arroz caldoso con mariscos, al estilo de Alvarado.' },
  { palabra: 'Culichi', que: 'salsa cremosa de chile poblano, al estilo de Culiacán.' },
  { palabra: 'Lechero', que: 'café con leche caliente, como se toma en el puerto.' },
  { palabra: 'Moros con cristianos', que: 'arroz con frijoles negros.' },
  { palabra: 'Al gusto', que: 'en la preparación que elijas.' },
  { palabra: 'Por temporada', que: 'el precio cambia con la temporada: pregúntalo al reservar.' },
  { palabra: 'Cada 100 g', que: 'se cobra por peso; eliges el tamaño del pescado.' },
];

export const notasCarta = {
  alMomento: 'Todo se prepara al momento que usted lo ordena.',
  cambios: 'Todos los precios están sujetos a cambios.',
};
