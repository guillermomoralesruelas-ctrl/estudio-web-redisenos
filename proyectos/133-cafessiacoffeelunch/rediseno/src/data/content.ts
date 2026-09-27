// Contenido de Cafessia - Coffee & Lunch (Hermosillo, Sonora). https://cafessia.com/ (una sola página).
// Textos del sitio copiados de investigacion/crudo.json (se corrigieron "Tizana" por "Tisana" y "Capuccino" se deja como lo escriben).
// Datos que NO están en crudo.json, tomados con curl el 2026-09-26 (ver CAMBIOS.md):
//   - su menú de pedidos en línea ("Ordena aquí"), en JSON: https://coffeeshop-api.maikodev.com/menus/public/cafessia
//     (descripciones, precios por tamaño, leches, jarabes, endulzantes, extras, combos y horario de pedidos).
//     Se corrigieron erratas: "aromaticas", "azucar", "expresso", "acompanado", "envielto", "chedar", "jamon", "Svetia" (Stevia).
//   - las coordenadas de su enlace de Google Maps (ficha "Cafessia - Coffee to go").
// Los precios son los del pedido en línea, que es donde se cobra; seis no coinciden con los del sitio (campo `sitio`,
// pendiente de confirmar). Lo que solo aparece en el sitio lleva `soloSitio: true`.
// Lo nuevo (títulos, botones, textos de "Arma tu vaso" y mensajes de WhatsApp) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** WhatsApp del sitio (wa.me/526622915226); es el mismo número que recibe los pedidos en línea (+52 1 662 291 5226). */
export const WA = '526622915226';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, les escribo desde su sitio web.';

export const negocio = {
  nombre: 'Cafessia',
  lema: 'Coffee & Lunch',
  frase: 'Good coffee, for happy souls',
  cita: 'Good vibes start with good coffee',
  // "Ordena aquí" del sitio: su menú de pedidos en línea (redirige a coffeeshop.maikodev.com/cafessia).
  ordenar: 'https://coffeeshop-api.maikodev.com/menus/public/cafessia/og',
  direccion: { calle: 'Calz. de los Ángeles 13B', colonia: 'Llano Verde', cp: '83247', ciudad: 'Hermosillo, Son.' },
  horario: 'Lunes a viernes, de 7:30 am a 1:30 pm',
  mapa: 'https://maps.app.goo.gl/vPdW7JZEA6pBkCgs8',
  telefonoVisible: '662 291 5226',
  // Llamar al número del WhatsApp: el sitio no publica otro teléfono (pendiente de confirmar que recibe llamadas).
  tel: 'tel:+526622915226',
  whatsapp: wa(`${saludo} Quiero hacer un pedido.`),
  instagram: 'https://www.instagram.com/cafessia.hmo',
  instagramVisible: '@cafessia.hmo',
  logo: f('logo', 768, 321, 'Cafessia, Coffee & Lunch'),
  ventanita: f('ventanita', 660, 1000, 'La ventanita de Cafessia: una barista sonríe junto a la ventana de madera, al lado del menú colgado en la pared'),
  terraza: f('terraza', 684, 1000, 'La terraza de Cafessia: una mesa redonda blanca con sillas amarilla y verde frente a la pared de listones de madera'),
};

/** Horario de apertura (lunes = 1 … viernes = 5), en minutos del día, hora de Hermosillo. */
export const apertura = { dias: [1, 2, 3, 4, 5], abre: 7 * 60 + 30, cierra: 13 * 60 + 30 };

// ---------- Fotos de sus productos ----------
export const fotos = {
  americano: f('americano', 720, 720, 'Americano caliente en el vaso blanco de Cafessia, sobre una barra de madera'),
  capuccino: f('capuccino', 525, 720, 'Capuccino con canela espolvoreada en el vaso blanco de Cafessia'),
  latte: f('latte', 720, 720, 'Latte con arte en forma de corazón en el vaso blanco de Cafessia'),
  chai: f('chai-latte', 525, 720, 'Chai latte con canela en el vaso blanco de Cafessia'),
  dirty: f('dirty-chai', 525, 720, 'Dirty chai con un shot de espresso encima, en el vaso blanco de Cafessia'),
  tisana: f('tisana', 525, 720, 'Tisana fría con fruta deshidratada y hielo en vaso transparente con la etiqueta de Cafessia'),
  limonada: f('limonada', 525, 720, 'Limonada con hielo en vaso transparente con la etiqueta de Cafessia'),
  croissant: f('croissant', 900, 470, 'Croissant de jamón y queso cheddar con papitas chips en plato blanco'),
  burrito: f('morning-burrito', 525, 720, 'Morning burrito partido a la mitad con papitas chips'),
  muffin: f('muffin', 538, 720, 'Muffin de huevito con queso cheddar y tocino, con papitas chips'),
  banana: f('banana-crumble', 405, 720, 'Pan de banana con cobertura crumble en una base de cristal, con su pizarrita "Banana Crumble $35"'),
};

// ---------- Elemento memorable: "Arma tu vaso" ----------
// Opciones y precios del pedido en línea (modificadores "Tipo de leche", "Leche para americano", "Jarabe",
// "Endulzante" y "Extras"). Cada bebida solo muestra los grupos que su pedido en línea permite.
export type Opcion = { id: string; nombre: string; precio: number; color?: string };

export const leches: Opcion[] = [
  { id: 'entera', nombre: 'Entera', precio: 0, color: '#f3e9d6' },
  { id: 'deslactosada', nombre: 'Deslactosada light', precio: 0, color: '#f7f0e4' },
  { id: 'soya', nombre: 'Soya', precio: 10, color: '#e8d6b4' },
  { id: 'almendra', nombre: 'Almendras', precio: 10, color: '#ead3b2' },
  { id: 'coco', nombre: 'Coco', precio: 10, color: '#fbf9f4' },
];
/** En el americano la leche es opcional y la vegetal cuesta $5 ("Leche para americano"). */
export const lechesAmericano: Opcion[] = leches.map((l) => ({ ...l, precio: l.precio ? 5 : 0 }));

export const jarabes: Opcion[] = [
  { id: 'caramelo', nombre: 'Caramelo', precio: 10, color: '#c77a2a' },
  { id: 'vainilla', nombre: 'Vainilla', precio: 10, color: '#e9cf8f' },
  { id: 'chocolate-blanco', nombre: 'Chocolate blanco', precio: 10, color: '#efe2c8' },
  { id: 'english-toffee', nombre: 'English Toffee', precio: 10, color: '#a8672b' },
  { id: 'caramelo-salado', nombre: 'Caramelo salado', precio: 10, color: '#b9722f' },
  { id: 'avellana', nombre: 'Avellana', precio: 10, color: '#9b6a3c' },
  { id: 'english-toffee-sa', nombre: 'English Toffee sin azúcar', precio: 10, color: '#a8672b' },
  { id: 'vainilla-sa', nombre: 'Vainilla sin azúcar', precio: 10, color: '#e9cf8f' },
  { id: 'avellana-sa', nombre: 'Avellana sin azúcar', precio: 10, color: '#9b6a3c' },
  { id: 'caramelo-salado-sa', nombre: 'Caramelo salado sin azúcar', precio: 10, color: '#b9722f' },
  { id: 'pumpkin', nombre: 'Pumpkin pie sin azúcar', precio: 10, color: '#d0802f' },
  { id: 'brown-sugar', nombre: 'Brown sugar cinnamon sin azúcar', precio: 10, color: '#8f5a2e' },
  { id: 'irish', nombre: 'Irish cream', precio: 10, color: '#d9c29a' },
];
export const MAX_JARABES = 5;

export const endulzantes: Opcion[] = [
  { id: 'azucar', nombre: 'Azúcar refinada', precio: 0 },
  { id: 'stevia', nombre: 'Stevia', precio: 0 },
  { id: 'splenda', nombre: 'Splenda', precio: 0 },
];

export const extras: Opcion[] = [
  { id: 'shot', nombre: 'Un shot de café', precio: 10 },
  { id: 'foam', nombre: 'Cold foam', precio: 5 },
];
export const notaFoam = 'Espuma fría del sabor del jarabe que elijas.';

export type Grupo = 'leche' | 'lecheAmericano' | 'jarabe' | 'endulzante' | 'extras';
export type Receta = 'americano' | 'capuccino' | 'latte' | 'chai' | 'dirty';
export type Version = { precio: number; grande?: number; grupos: Grupo[] } | { soloSitio: number };
export type Bebida = { id: Receta; nombre: string; texto: string; caliente: Version; frio: Version; foto: Foto };

// "precio" = Mediano (12 oz) y "grande" = Grande (16 oz) en caliente; en frío hay un solo tamaño.
export const bebidas: Bebida[] = [
  {
    id: 'americano', nombre: 'Americano', texto: 'Espresso con agua caliente, sabor fuerte y limpio.',
    caliente: { precio: 50, grande: 60, grupos: ['lecheAmericano', 'endulzante', 'extras'] },
    frio: { precio: 60, grupos: ['lecheAmericano', 'extras'] },
    foto: fotos.americano,
  },
  {
    id: 'capuccino', nombre: 'Capuccino', texto: 'Espresso con leche espumosa, textura cremosa y equilibrada.',
    caliente: { precio: 55, grande: 65, grupos: ['leche', 'jarabe', 'endulzante', 'extras'] },
    frio: { soloSitio: 70 },
    foto: fotos.capuccino,
  },
  {
    id: 'latte', nombre: 'Latte', texto: 'Espresso con mucha leche y un toque de espuma, suave y ligero.',
    caliente: { precio: 60, grande: 70, grupos: ['leche', 'jarabe', 'endulzante', 'extras'] },
    frio: { precio: 70, grupos: ['leche', 'jarabe', 'endulzante', 'extras'] },
    foto: fotos.latte,
  },
  {
    id: 'chai', nombre: 'Chai latte', texto: 'Té chai especiado con leche, dulce y aromático. La mezcla de chai ya viene endulzada.',
    caliente: { precio: 60, grande: 70, grupos: ['leche', 'extras'] },
    frio: { precio: 70, grupos: ['leche', 'extras'] },
    foto: fotos.chai,
  },
  {
    id: 'dirty', nombre: 'Dirty chai', texto: 'Chai latte con un shot de espresso, especiado y cafeinado. La mezcla de chai ya viene endulzada.',
    caliente: { precio: 65, grande: 75, grupos: ['leche', 'extras'] },
    frio: { precio: 75, grupos: ['leche', 'extras'] },
    foto: fotos.dirty,
  },
];

// ---------- Menú completo ----------
export type Renglon = {
  nombre: string;
  texto?: string;
  precio: string;
  /** Precio distinto en el sitio (pendiente de confirmar). */
  sitio?: string;
  /** Solo aparece en el menú del sitio, no en el pedido en línea. */
  soloSitio?: boolean;
};
export type Seccion = { id: string; titulo: string; nota?: string; renglones: Renglon[]; fotos: Foto[] };

export const menu: Seccion[] = [
  {
    id: 'combos', titulo: 'Combos',
    renglones: [
      { nombre: 'Latte frío y morning burrito', precio: '$150', texto: 'Latte frío de 16 oz con el morning burrito de huevito, queso cheddar y tocino, envuelto en la auténtica tortilla sobaquera de Hermosillo.' },
      { nombre: 'Latte frío y muffin de huevito', precio: '$120', texto: 'Latte frío (16 oz) con un muffin de huevito con queso cheddar y tocino. Incluye papas fritas.' },
      { nombre: 'Latte frío y croissant', precio: '$130', texto: 'Café latte grande (16 oz) frío con un croissant con side de chips.' },
    ],
    fotos: [fotos.croissant],
  },
  {
    id: 'caliente', titulo: 'Café caliente',
    nota: 'Dos precios: Mediano (12 oz) y Grande (16 oz).',
    renglones: [
      { nombre: 'Americano', precio: '$50 / $60', texto: 'Espresso con agua caliente, sabor fuerte y limpio.' },
      { nombre: 'Capuccino', precio: '$55 / $65', sitio: '$60 - $70', texto: 'Espresso con leche espumosa, textura cremosa y equilibrada.' },
      { nombre: 'Latte', precio: '$60 / $70', texto: 'Espresso con mucha leche y un toque de espuma, suave y ligero.' },
      { nombre: 'Chai latte', precio: '$60 / $70', texto: 'Té chai especiado con leche, dulce y aromático. La mezcla de chai ya viene endulzada.' },
      { nombre: 'Dirty chai', precio: '$65 / $75', sitio: '$70 - $80', texto: 'Chai latte con un shot de espresso, especiado y cafeinado. La mezcla de chai ya viene endulzada.' },
    ],
    fotos: [fotos.capuccino, fotos.latte],
  },
  {
    id: 'frio', titulo: 'Café frío',
    renglones: [
      { nombre: 'Americano frío', precio: '$60', texto: 'Americano espresso con hielo.' },
      { nombre: 'Latte frío', precio: '$70', texto: 'Latte en las rocas.' },
      { nombre: 'Chai latte frío', precio: '$70', texto: 'Chai de mezcla de especias aromáticas y azúcar, preparado con leche. La mezcla ya viene endulzada.' },
      { nombre: 'Dirty chai frío', precio: '$75', sitio: '$80', texto: 'El chai latte frío con un shot de espresso.' },
      { nombre: 'Capuccino frío', precio: '$70', soloSitio: true },
    ],
    fotos: [],
  },
  {
    id: 'bebidas', titulo: 'Bebidas',
    renglones: [
      { nombre: 'Tisana fría (16 oz)', precio: '$70', texto: 'Infusión de frutas deshidratadas con hielo. Sabores: carambola, mango y piña, o frutos rojos.' },
      { nombre: 'Tisana caliente', precio: '$60 - $70', texto: 'Según el tamaño.', soloSitio: true },
      { nombre: 'Limonada (16 oz)', precio: '$45', texto: 'Limón y agua con hielo, endulzada con jarabe.' },
      { nombre: 'Coca-Cola o Coca-Cola light en lata', precio: '$30', sitio: '$40' },
    ],
    fotos: [fotos.tisana, fotos.limonada],
  },
  {
    id: 'alimentos', titulo: 'Alimentos',
    nota: 'Todos vienen con papitas chips. Agrégale huevo extra (+$10), tocino extra (+$20) o queso cheddar extra (+$10).',
    renglones: [
      { nombre: 'Croissant', precio: '$75', texto: 'Croissant con jamón y queso cheddar a la plancha.' },
      { nombre: 'Morning burrito', precio: '$95', texto: 'Burrito de huevito, tocino y queso en tortilla sobaquera (la tortilla de harina grande y delgada de Sonora).' },
      { nombre: 'Muffin de huevito', precio: '$65', sitio: '$55', texto: 'Muffin con huevito, queso y tocino, con salsa macha y catsup.' },
    ],
    fotos: [fotos.burrito, fotos.muffin],
  },
  {
    id: 'postres', titulo: 'Postres',
    renglones: [
      { nombre: 'Banana crumble', precio: '$35', texto: 'Rebanada de pan de banana con cobertura crumble crujiente.' },
      { nombre: 'Galletas de chocolate', precio: '$25', soloSitio: true },
    ],
    fotos: [fotos.banana],
  },
];

/** Cómo personalizar (del pedido en línea), en frases. */
export const personaliza = [
  ['Leche', 'Entera o deslactosada light sin costo; de soya, almendras o coco, +$10 (en el americano, +$5).'],
  ['Jarabes', 'Caramelo, vainilla, chocolate blanco, English Toffee, caramelo salado, avellana e Irish cream; sin azúcar: English Toffee, vainilla, avellana, caramelo salado, pumpkin pie y brown sugar cinnamon. +$10 cada uno, hasta cinco.'],
  ['Endulzante', 'Azúcar refinada, Stevia o Splenda.'],
  ['Extras', 'Un shot de café, +$10. Cold foam (espuma fría del sabor del jarabe que elijas), +$5.'],
];
