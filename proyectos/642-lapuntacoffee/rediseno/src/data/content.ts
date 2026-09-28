// Contenido de La Punta Coffee, tomado del sitio original (https://lapuntacoffee.com/, clon en ../sitio):
// - Inglés: investigacion/crudo.json (el sitio está en inglés, lang="en").
// - Español: el propio sitio lo trae en su script (investigacion/original.html, objeto data.es, botón "ES").
// - "Dentro de La Punta Rooms": biografía pública de su Instagram @lapuntacoffee ("Cafecito y bar de jugos adentro de
//   @lapuntarooms.pxm (abierto todos los dias de 8:00am-4:00pm)"), consultada con curl el 2026-09-27.
// Regla: nada inventado. Lo que falta está marcado PENDIENTE y anotado en CAMBIOS.md.
// Textos nuevos (títulos, botones, notas y el elemento memorable) están declarados en CAMBIOS.md → "Qué se agregó".
// Las imágenes son copias .webp de las fotos del clon, en ../assets/web (publicDir), creadas con fotos-web.mjs.

export type Idioma = 'en' | 'es';
export type T = { en: string; es: string };

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export type Foto = { src: string; alt: T; w: number; h: number };

export const fotos = {
  logo: { src: img('logo.webp'), alt: { en: 'La Punta Coffee logo', es: 'Logo de La Punta Coffee' }, w: 520, h: 459 },
  portada: { src: img('cafe-hojas.webp'), alt: { en: 'A latte in a glass cup on the pool edge, between banana leaves and plumeria flowers', es: 'Un latte en taza de vidrio en la orilla de la alberca, entre hojas de plátano y flores de plumeria' }, w: 1050, h: 1400 },
  alberca: { src: img('alberca.webp'), alt: { en: 'The turquoise pool seen from above, with palms and someone swimming', es: 'La alberca turquesa vista desde arriba, con palmas y alguien nadando' }, w: 788, h: 1400 },
  latteOrilla: { src: img('latte-orilla.webp'), alt: { en: 'Latte art on the pool edge, next to someone sitting with their feet in the water', es: 'Un latte con arte en la orilla de la alberca, junto a alguien sentado con los pies en el agua' }, w: 1400, h: 1050 },
  latteSentada: { src: img('latte-sentada.webp'), alt: { en: 'A cup of latte with a plumeria flower on the stone edge of the pool', es: 'Una taza de latte con una flor de plumeria en la orilla de piedra de la alberca' }, w: 825, h: 1100 },
  lattePiernas: { src: img('latte-piernas.webp'), alt: { en: 'Coffee on the pool edge seen from above, legs stretched out in the sun', es: 'Café en la orilla de la alberca visto desde arriba, piernas estiradas al sol' }, w: 822, h: 1100 },
  acai: { src: img('acai.webp'), alt: { en: 'Brazilian açaí bowl with banana, berries and almond butter, held over the pool', es: 'Açaí bowl Brazilian con plátano, moras y crema de almendra, sobre la alberca' }, w: 825, h: 1100 },
  moonrise: { src: img('moonrise.webp'), alt: { en: 'Moonrise smoothie in a jar with a metal straw, in the garden', es: 'Smoothie Moonrise en frasco con popote de metal, en el jardín' }, w: 825, h: 1100 },
  sunshine: { src: img('sunshine.webp'), alt: { en: 'Two Sunshine smoothies raised in a toast by the pool', es: 'Dos smoothies Sunshine brindando junto a la alberca' }, w: 765, h: 1020 },
} satisfies Record<string, Foto>;

export const negocio = {
  nombre: 'La Punta Coffee',
  lema: { en: 'Beach, coffee & vibes', es: 'Playa, café y buena vibra' },
  direccion: 'Nayarit S/N, Brisas de Zicatela, 70934 Puerto Escondido, Oax.',
  dentroDe: 'La Punta Rooms',
  dentroDeUrl: 'https://www.instagram.com/lapuntarooms.pxm/',
  mapa: 'https://maps.google.com/?q=Nayarit+Sn,+Brisas+de+Zicatela,+70934+Puerto+Escondido,+Oaxaca',
  mapaEmbed: 'https://www.google.com/maps?q=Nayarit+Sn,+Brisas+de+Zicatela,+70934+Puerto+Escondido,+Oaxaca&output=embed',
  correo: 'lapuntacoffee@gmail.com',
  instagram: 'https://www.instagram.com/lapuntacoffee/',
  instagramVisible: '@lapuntacoffee',
  // PENDIENTE: el sitio publica +52 954 123 4567 y wa.me/529541234567, que son de plantilla. Cuando den su número real,
  // escríbelo aquí (solo dígitos, con 52) y aparecen los botones de WhatsApp con mensaje prellenado.
  whatsapp: '',
  // PENDIENTE: el botón "Order on UberEats" del sitio va a https://ubereats.com (la portada general), no a su tienda.
  ubereats: '',
};

export const correo = (asunto: T, cuerpo: T, l: Idioma) =>
  `mailto:${negocio.correo}?subject=${encodeURIComponent(asunto[l])}&body=${encodeURIComponent(cuerpo[l])}`;
export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// Textos de la página. Los marcados "del sitio" son copia del original (inglés de crudo.json, español de data.es);
// los demás son nuevos y están en CAMBIOS.md.
export const textos = {
  // del sitio
  h1: { en: 'Coffee & Vibes by the Pool', es: 'Café y Buenas Vibras en la Alberca' },
  sub: { en: 'Espresso, smoothies & sunshine in Puerto Escondido.', es: 'Espresso, smoothies y sol en Puerto Escondido.' },
  verMenu: { en: 'See Menu', es: 'Ver Menú' },
  aboutTitulo: { en: 'About', es: 'Acerca de' },
  about: { en: 'Small, sunny coffee spot inspired by the ocean, serving specialty espresso, vibrant juices and wholesome snacks.', es: 'Pequeña cafetería soleada inspirada por el mar: servimos espresso de especialidad, jugos vibrantes y snacks saludables.' },
  menuTitulo: { en: 'Menu', es: 'Menú' },
  menuSub: { en: 'Fresh & sunny', es: 'Fresco y soleado' },
  galTitulo: { en: 'Gallery', es: 'Galería' },
  galSub: { en: 'Shots from the pool & garden.', es: 'Tomas de la alberca y el jardín.' },
  visitTitulo: { en: 'Visit Us', es: 'Visítanos' },
  visitSub: { en: 'Coffee with ocean vibes in Puerto Escondido.', es: 'Café con vibra playera en Puerto Escondido.' },
  horario: { en: 'Mon–Sun: 8:00am – 4:00pm', es: 'Lun–Dom: 8:00am – 4:00pm' },
  abrirMaps: { en: 'Open in Maps', es: 'Abrir en Maps' },
  // nuevos
  rasgos: { en: 'Specialty beans, vegan options and cold-pressed juice.', es: 'Café de especialidad, opciones veganas y jugo prensado en frío.' },
  dentro: { en: 'Inside La Punta Rooms, Brisas de Zicatela.', es: 'Dentro de La Punta Rooms, Brisas de Zicatela.' },
  abiertoDiario: { en: 'Open every day, 8 am to 4 pm.', es: 'Abierto todos los días, de 8 am a 4 pm.' },
  navBolsillo: { en: "What's in your pocket?", es: '¿Cuánto traes?' },
  navGaleria: { en: 'Gallery', es: 'Galería' },
  navVisita: { en: 'Visit', es: 'Visita' },
  idiomaBoton: { en: 'ES', es: 'EN' },
  idiomaAria: { en: 'Ver en español', es: 'View in English' },
  inicioAria: { en: 'La Punta Coffee, back to top', es: 'La Punta Coffee, volver al inicio' },
  saltar: { en: "Skip to What's in your pocket?", es: 'Ir a ¿Cuánto traes?' },
  direccionT: { en: 'Address', es: 'Dirección' },
  horarioT: { en: 'Hours', es: 'Horario' },
  correoT: { en: 'Email', es: 'Correo' },
  escribenos: { en: 'Email us', es: 'Escríbenos' },
  fotoMapa: { en: 'The pool at La Punta Rooms. Tap the photo for directions.', es: 'La alberca de La Punta Rooms. Toca la foto para ver cómo llegar.' },
  mapaAria: { en: 'Open La Punta Coffee in Google Maps', es: 'Abrir La Punta Coffee en Google Maps' },
  comoLlegar: { en: 'Directions', es: 'Cómo llegar' },
  igAria: { en: 'La Punta Coffee on Instagram', es: 'La Punta Coffee en Instagram' },
  correoAria: { en: 'Email La Punta Coffee', es: 'Escribir un correo a La Punta Coffee' },
  asunto: { en: 'Hi from your website', es: 'Hola desde su sitio web' },
  cuerpo: { en: 'Hi! I found you on your website and I have a question: ', es: '¡Hola! Los encontré en su sitio web y tengo una pregunta: ' },
};

// ---------- Menú ----------
// Precios en pesos mexicanos, tal como en el sitio. `tamanos` explica los dos precios.

export type Renglon = { nombre: T; texto?: T; precios: number[]; mas?: boolean };
export type Seccion = { id: string; titulo: T; nota?: T; tamanos?: [T, T]; renglones: Renglon[]; foto?: Foto };

const t = (en: string, es: string): T => ({ en, es });

export const menu: Seccion[] = [
  {
    id: 'coffee', titulo: t('Coffee Bar', 'Coffee Bar'),
    renglones: [
      { nombre: t('Espresso', 'Espresso'), precios: [35] },
      { nombre: t('Double Espresso', 'Espresso doble'), precios: [40] },
      { nombre: t('Americano', 'Americano'), precios: [40] },
      { nombre: t('Cappuccino', 'Cappuccino'), precios: [60] },
      { nombre: t('Latte', 'Latte'), precios: [60] },
      { nombre: t('Flat white', 'Flat white'), precios: [55] },
      { nombre: t('Iced Latte', 'Latte frío'), precios: [65] },
      { nombre: t('Matcha Latte', 'Matcha Latte'), precios: [65] },
      { nombre: t('Iced Matcha', 'Matcha frío'), precios: [70] },
      { nombre: t('Tea', 'Té'), precios: [30] },
    ],
  },
  {
    id: 'juice', titulo: t('Juice Bar', 'Juice Bar'),
    nota: t('Two sizes: 12 oz and 16 oz.', 'Dos tamaños: 12 oz y 16 oz.'),
    tamanos: [t('12 oz', '12 oz'), t('16 oz', '16 oz')],
    renglones: [
      { nombre: t('Orange', 'Naranja'), precios: [60, 90] },
      { nombre: t('Grapefruit', 'Toronja'), precios: [80, 130] },
      { nombre: t('Green', 'Verde'), precios: [75, 120] },
      { nombre: t('Celery', 'Apio'), precios: [60, 80] },
    ],
  },
  {
    id: 'smoothies', titulo: t('Smoothies', 'Smoothies'),
    nota: t('Two sizes, small and large.', 'Dos tamaños, chico y grande.'),
    tamanos: [t('Small', 'Chico'), t('Large', 'Grande')],
    renglones: [
      { nombre: t('Powerfull', 'Powerfull'), texto: t('Dates, maca, oat milk, banana, peanut butter, nutmeg, cacao nibs. Add an espresso shot for +$30.', 'Dátiles, maca, leche de avena, plátano, crema de cacahuate, nuez moscada, cacao nibs (trocitos de cacao). Agrégale un shot de espresso por +$30.'), precios: [80, 120] },
      { nombre: t('Moonrise', 'Moonrise'), texto: t('Açai, mixed berries, banana, oat milk, almond butter, dates.', 'Açai, mix de moras, plátano, leche de avena, crema de almendra, dátiles.'), precios: [90, 130] },
      { nombre: t('Sunshine', 'Sunshine'), texto: t('Mango, pineapple, orange.', 'Mango, piña, naranja.'), precios: [80, 120] },
    ],
  },
  {
    id: 'acai', titulo: t('Acai Bowl', 'Acai Bowl'),
    renglones: [
      { nombre: t('Brazilian', 'Brazilian'), texto: t('Açai, banana, strawberry, granola, seasonal fruit, hemp hearts, almond butter.', 'Açai, plátano, fresa, granola, fruta de temporada, corazones de hemp (semillas de cáñamo peladas), crema de almendra.'), precios: [150] },
    ],
  },
  {
    id: 'snack', titulo: t('Snack Bar', 'Snack Bar'),
    renglones: [
      { nombre: t('Vegan banana bread', 'Panqué vegano de plátano'), texto: t('Oats, banana, almond butter, figs.', 'Avena, plátano, crema de almendra, higos.'), precios: [45] },
      { nombre: t('Blue Crush', 'Blue Crush'), texto: t('Brioche, cream cheese, avocado, pear, blue cheese, caramelized pecan, honey.', 'Brioche, queso crema, aguacate, pera, queso azul, nuez caramelizada, miel.'), precios: [120] },
      { nombre: t('Endless Summer', 'Endless Summer'), texto: t('Sourdough, feta cheese, avocado, cherry tomato, greens, cucumber.', 'Pan de masa madre, queso feta, aguacate, jitomate cherry, lechuga, pepino.'), precios: [120] },
      { nombre: t('Sea Side', 'Sea Side'), texto: t('Sourdough, cream cheese, olive tapenade, artichoke hearts, sundried tomatoes.', 'Pan de masa madre, queso crema, tapenade de aceituna, alcachofa, jitomate deshidratado.'), precios: [120] },
    ],
  },
  {
    id: 'extras', titulo: t('Extras', 'Extras'),
    nota: t('To add to your order.', 'Para agregar a tu pedido.'),
    renglones: [
      { nombre: t('Maca, spirulina or hemp hearts', 'Maca, espirulina o corazones de hemp'), precios: [15] },
      { nombre: t('Espresso shot', 'Shot de espresso'), precios: [30], mas: true },
    ],
  },
];

export const fotosMenu: Record<string, Foto[]> = {
  coffee: [fotos.latteOrilla],
  smoothies: [fotos.moonrise, fotos.sunshine],
  acai: [fotos.acai],
};

// ---------- Elemento memorable: "What's in your pocket?" / "¿Cuánto traes?" ----------
// Productos y precios del menú de arriba (sin extras: no se sabe a qué bebidas se agregan).
// `color` es solo para el dibujo (ilustrativo).

export type Tipo = 'coffee' | 'juice' | 'smoothie' | 'acai' | 'snack';
export type Producto = { id: string; nombre: T; tipo: Tipo; precio: number; tamano?: T; color: string };

const tam = (s: Seccion, i: number) => s.tamanos?.[i];
const colores: Record<string, string> = {
  Espresso: '#3b2014', 'Double Espresso': '#3b2014', Americano: '#4a2a17', Cappuccino: '#c9a27a', Latte: '#d9b894', 'Flat white': '#c79f76',
  'Iced Latte': '#d2b08a', 'Matcha Latte': '#9dbb6a', 'Iced Matcha': '#8fb35c', Tea: '#c98a3a',
  Orange: '#f59e0b', Grapefruit: '#f07b6b', Green: '#6fae4f', Celery: '#b9d77f',
  Powerfull: '#9a6b4a', Moonrise: '#8e4a7e', Sunshine: '#f5b73b',
  Brazilian: '#5b2a5e', 'Vegan banana bread': '#b07a43', 'Blue Crush': '#e6c27a', 'Endless Summer': '#d9a55a', 'Sea Side': '#c98f4d',
};
const tipoDe: Record<string, Tipo> = { coffee: 'coffee', juice: 'juice', smoothies: 'smoothie', acai: 'acai', snack: 'snack' };

export const productos: Producto[] = menu
  .filter((s) => s.id in tipoDe)
  .flatMap((s) => s.renglones.flatMap((r) => r.precios.map((p, i) => ({
    id: `${r.nombre.en}-${i}`,
    nombre: r.nombre,
    tipo: tipoDe[s.id],
    precio: p,
    tamano: r.precios.length > 1 ? tam(s, i) : undefined,
    color: colores[r.nombre.en] ?? '#c98a3a',
  }))));

// Billetes y monedas mexicanos (colores aproximados de cada denominación, solo para el dibujo).
export const dinero = [
  { valor: 10, moneda: true, color: '#c9b27a' },
  { valor: 20, moneda: false, color: '#3f9fa3' },
  { valor: 50, moneda: false, color: '#c2508f' },
  { valor: 100, moneda: false, color: '#c0443b' },
  { valor: 200, moneda: false, color: '#4f8a3c' },
  { valor: 500, moneda: false, color: '#5a6fa8' },
];

export const antojos: { id: 'todo' | Tipo; nombre: T }[] = [
  { id: 'todo', nombre: t('Anything', 'Lo que sea') },
  { id: 'coffee', nombre: t('Coffee', 'Café') },
  { id: 'juice', nombre: t('Juice', 'Jugo') },
  { id: 'smoothie', nombre: t('Smoothie', 'Smoothie') },
  { id: 'acai', nombre: t('Açaí bowl', 'Açaí bowl') },
  { id: 'snack', nombre: t('Snack', 'Snack') },
];

export const bolsillo = {
  titulo: t("What's in your pocket?", '¿Cuánto traes?'),
  intro: t('Came up from the beach with some pesos? Tap the bills and coins you have and we lay out, on the pool edge, what you can get from our menu.', '¿Subiste de la playa con unos pesos? Toca los billetes y monedas que traes y te ponemos en la orilla de la alberca lo que te alcanza de nuestro menú.'),
  traes: t('You have', 'Traes'),
  vaciar: t('Empty pocket', 'Vaciar'),
  agregar: t('Add', 'Agregar'),
  antojo: t('What are you craving?', '¿Qué se te antoja?'),
  opciones: t('What you can get', 'Lo que te alcanza'),
  total: t('Total', 'Total'),
  sobran: t('You keep', 'Te sobran'),
  justo: t('Exact change', 'Justo lo que traes'),
  nada: t('Not enough yet: the cheapest thing on the menu is a tea for $30.', 'Todavía no alcanza: lo más barato del menú es un té de $30.'),
  nadaTipo: t('Not enough for that yet. Add a bill or pick something else.', 'Para eso todavía no alcanza. Agrega un billete o elige otra cosa.'),
  pide: t('Order it at the bar.', 'Pídelo en la barra.'),
  nota: t('Prices in Mexican pesos, from our menu. Extras not included. Illustration.', 'Precios en pesos mexicanos, de nuestro menú. Sin extras. Dibujo ilustrativo.'),
  orilla: t('The pool edge with your money and', 'La orilla de la alberca con tu dinero y'),
};
