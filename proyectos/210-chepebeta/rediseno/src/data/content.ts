// Contenido de Che Pebeta (Monterrey, Nuevo León). https://chepebeta.mx/ (sitio de una página hecho con Lovable, en React).
// Textos copiados de investigacion/crudo.json (el inicio: Nuestra Alma, Nuestras Noches, Nuestra Carta, Reservar Mesa,
// horario y ubicación). Se recortaron y se quitaron las mayúsculas de adorno ("TRADICIÓN Y PASIÓN", "PROMOS").
// Textos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-26 (ver CAMBIOS.md):
//   - la carta completa de /menu (archivo /assets/menu-B19Cg0DX.js): está en carta.json;
//   - de /assets/index-LVYPD67w.js: las frases de cada pestaña de "Nuestra Carta" y el horario;
//   - de /assets/WhatsAppButton-CKCIaMIX.js: el formulario de reserva, que arma un WhatsApp al 52 81 1762 6442.
// Lo nuevo (títulos, botones, notas que explican la carta, textos de "El despiece" y mensajes de WhatsApp) está en
// CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** WhatsApp de su formulario de reserva y de su "Teléfono" (wa.me/528117626442). Su botón flotante usa un número de ejemplo. */
export const WA = '528117626442';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, les escribo desde su sitio web.';

export const negocio = {
  nombre: 'Che Pebeta',
  lema: 'Restaurante argentino de alta gama',
  direccion: { lugar: 'Pueblo Serena', calle: 'Carretera Nacional 500', colonia: 'Valle Alto', cp: '64983', ciudad: 'Monterrey, N. L.' },
  // "Lun–Sáb 12:30–23:00 · Dom 12:30–22:00". dia: 0 = domingo.
  horario: [
    { dias: 'Lunes a sábado', horas: '12:30 a 11:00 pm', abre: '12:30', cierra: '23:00', aplica: [1, 2, 3, 4, 5, 6] },
    { dias: 'Domingo', horas: '12:30 a 10:00 pm', abre: '12:30', cierra: '22:00', aplica: [0] },
  ],
  whatsappVisible: '81 1762 6442',
  whatsapp: wa(`${saludo} Quiero hacer una reservación en Che Pebeta.`),
  telefono: '81 1099 5176',
  tel: 'tel:+528110995176',
  // El enlace "Ver en Google Maps" de su sitio.
  mapa: 'https://www.google.com/maps/place/CHE+PEBETA/@25.5749816,-100.2489997,17z/data=!3m1!4b1!4m6!3m5!1s0x8662c7146abd28c1:0x1aa200d0b80551fc!8m2!3d25.5749816!4d-100.2489997!16s%2Fg%2F11f0088m0j?entry=ttu',
  mapaEmbed: 'https://www.google.com/maps?q=CHE+PEBETA,+Carr+Nacional+500,+Valle+Alto,+Monterrey&hl=es&z=17&output=embed',
  instagram: 'https://instagram.com/chepebeta.oficial',
  facebook: 'https://facebook.com/chepebetarestaurante',
  logo: f('logo', 600, 299, 'Che Pebeta, con las medallas CANIRAC 2019 y 2023'),
};

export const portada = {
  antetitulo: 'Restaurante argentino de alta gama',
  titulo: ['De Buenos Aires a Monterrey:', 'el sabor de nuestra herencia'],
  // Su meta description (twitter:description), recortada.
  texto: 'Cortes Angus, pastas artesanales, el único Postre Balcarce de la ciudad y shows de tango en vivo.',
  foto: f('postre-flameado', 1350, 1080, 'Un postre en forma de cúpula con merengue, bañado en caramelo, envuelto en llamas en una mesa de Che Pebeta'),
};

export const alma = {
  antetitulo: 'Tradición y pasión',
  titulo: 'Nuestra alma',
  parrafos: [
    'En Che Pebeta, cada plato cuenta la historia de tres generaciones de recetas familiares que cruzaron el océano desde Buenos Aires. Nuestras manos amasan la misma pasta que aprendimos en la cocina de la abuela, con la misma dedicación y el mismo amor por los ingredientes auténticos.',
    'Cada corte es seleccionado con la exigencia de quien entiende que la carne no es solo alimento: es cultura, es reunión, es celebración. Traemos el espíritu de la parrilla argentina a Monterrey, sin atajos y sin concesiones.',
  ],
  premios: ['2019', '2023'],
  foto: f('alma-polaroid', 1300, 731, 'Foto instantánea de manos amasando pasta sobre una mesa enharinada, rodeada de timbres postales de Argentina'),
};

// ---------- Nuestras noches ----------
export const noches = {
  antetitulo: 'Experiencias únicas',
  titulo: 'Nuestras noches',
  eventos: [
    {
      id: 'tango', cuando: 'Todos los viernes', hora: '9:00 pm', titulo: 'Show de Tango',
      texto: 'Una noche de pasión y elegancia con los mejores bailarines de tango.',
      foto: f('tango', 1000, 1000, 'Una pareja baila tango en el pasillo de Che Pebeta entre las mesas, con la cava al fondo'),
    },
    {
      id: 'cata', cuando: 'Último jueves de mes', hora: '8:30 pm', titulo: 'Cata Maridaje',
      texto: 'Vinos de autor y cortes Angus seleccionados en una experiencia gastronómica exclusiva.',
      foto: f('copas-tinto', 1000, 800, 'Dos copas de vino tinto en una mesa de Che Pebeta junto a un plato de postre'),
    },
  ],
};

// ---------- La carta: una foto de su galería por pestaña ----------
export const fotosCarta: Record<string, Foto> = {
  entradas: f('empanada-espinaca', 900, 900, 'Manos abren una empanada horneada rellena de espinaca y queso'),
  acompanar: f('entradita', 900, 720, 'Plato con rodajas de matambre relleno de huevo y verduras, jamón serrano, quesos, aceitunas y lechuga'),
  pastas: f('pasta', 900, 720, 'Pasta con salsa de tomate, queso parmesano y perejil, servida en un plato hondo'),
  parrilla: f('comensal-cerveza', 900, 720, 'Un comensal de Che Pebeta sirve de su plato con papas fritas, junto a una cerveza Stella Artois y chimichurri'),
  casa: f('hamburguesas', 900, 720, 'Dos hamburguesas con lechuga, jitomate y cebolla morada sobre una tabla de madera, con aceitunas en el palillo'),
  postres: f('postres-cafe', 900, 720, 'Un postre en forma de cúpula bañado en caramelo, una rebanada, alfajores y un café con leche'),
  vinos: f('cava', 900, 720, 'Botellas de vino en los estantes de madera iluminados de la cava de Che Pebeta, con copas colgadas'),
  bebidas: f('comensal-rosado', 900, 720, 'Una comensal corta su platillo junto a una copa de vino rosado y pan tostado con chimichurri'),
};

// ---------- Nuestra esencia (galería) ----------
export const galeria = {
  antetitulo: 'Momentos únicos',
  titulo: 'Nuestra esencia',
  fotos: [
    f('empanada-mesa', 900, 900, 'Vista desde arriba de una empanada en un plato con el logo de Che Pebeta dibujado en salsa, chimichurri y una copa de rosado'),
    f('pan-chimichurri', 900, 720, 'Pan rústico rebanado con chimichurri y salsa criolla'),
    f('rebanada-merengue', 900, 720, 'Rebanada de postre de capas crocantes con dulce de leche y merengue tostado'),
    f('torta', 900, 720, 'Torta de pan casero con carne, jitomate, lechuga y cebolla morada sobre una tabla'),
    f('picadita', 900, 720, 'Picadita con jamón serrano, cubos de queso, aceitunas, jitomates cherry y lechuga'),
  ],
};

/** Foto del bloque Reservar y visítanos (enlaza a Google Maps). */
export const lugar = f('salon', 1350, 1080, 'El salón de Che Pebeta en Pueblo Serena, lleno de comensales');

// ---------- Elemento memorable: El despiece ----------
export type PlatilloCorte = { nombre: string; precio: string; donde: string };
export type Corte = {
  id: string;
  nombre: string;
  /** De qué parte de la res sale: explicación general de carnicería (nuestra, ver CAMBIOS.md). */
  sale: string;
  platillos: PlatilloCorte[];
  /** Parrilladas de su carta que lo llevan, con los gramos que dicen. */
  parrilladas?: string[];
  /** Lo que se manda por WhatsApp. */
  pedido: string;
};

export const cortes: Corte[] = [
  {
    id: 'ribeye', nombre: 'Rib eye (bife ancho)',
    sale: 'El ojo de la costilla, en la parte alta del lomo, detrás del cuello. Es el corte con más marmoleo.',
    platillos: [
      { nombre: 'Rib Eye Angus, 500 g', precio: '$1,190', donde: 'Cortes Angus' },
      { nombre: 'Churrasco Rib Eye, ½ kilo', precio: '$690', donde: 'Cortes Angus' },
      { nombre: 'Chicharrón de rib eye, sobre una cama de guacamole', precio: '$399', donde: 'Entradas' },
    ],
    pedido: 'el Rib Eye Angus (500 g, $1,190)',
  },
  {
    id: 'bifeangosto', nombre: 'Bife angosto (New York)',
    sale: 'El lomo bajo, a lo largo del espinazo, entre el rib eye y la cadera.',
    platillos: [
      { nombre: 'Bife angosto de 1 pulgada (unos 2.5 cm), 250 g', precio: '$390', donde: 'Cortes Angus' },
      { nombre: 'Bife angosto de 2 pulgadas (unos 5 cm), 500 g', precio: '$690', donde: 'Cortes Angus' },
    ],
    pedido: 'el bife angosto (New York)',
  },
  {
    id: 'lomo', nombre: 'Lomo (filete)',
    sale: 'El músculo que corre por dentro, debajo del bife angosto. Es el más tierno; la caña es su parte central.',
    platillos: [
      { nombre: 'Lomo, caña de filete: 200 g o 400 g', precio: '$320 o $590', donde: 'Cortes Angus' },
      { nombre: 'Torta de Lomito, con filete de res', precio: '$359', donde: 'Platillos de la casa' },
      { nombre: 'Carpaccio de Res, filete sellado y curado', precio: '$280', donde: 'Entradas' },
    ],
    pedido: 'el lomo (caña de filete)',
  },
  {
    id: 'picana', nombre: 'Picaña',
    sale: 'La tapa de la cadera (en Argentina, tapa de cuadril), con su capa de grasa encima.',
    platillos: [{ nombre: 'Picaña: 200 g o 400 g', precio: '$320 o $590', donde: 'Cortes Angus' }],
    parrilladas: ['Pituca, para 2: 200 g', 'Piba, para 3: 400 g', 'Che Pebeta, para 4: 400 g'],
    pedido: 'la picaña',
  },
  {
    id: 'tira', nombre: 'Tira de asado',
    sale: 'Las costillas cortadas a lo ancho, en tiras con hueso: el asado de tira de toda parrilla argentina.',
    platillos: [
      { nombre: 'Tira de Asado, 400 g, corte nacional extra suave', precio: '$399', donde: 'Cortes Angus' },
      { nombre: 'Costilla de Res', precio: '$399', donde: 'Platillos de la casa' },
    ],
    pedido: 'la tira de asado (400 g, $399)',
  },
  {
    id: 'arrachera', nombre: 'Arrachera (entraña)',
    sale: 'El diafragma, por dentro de las costillas. En Argentina se llama entraña.',
    platillos: [
      { nombre: 'Arrachera: 200 g o 400 g', precio: '$290 o $490', donde: 'Cortes Angus' },
      { nombre: 'Milanesa empanizada de arrachera, con papas', precio: '$299', donde: 'Platillos de la casa' },
      { nombre: 'Milanesa napolitana de arrachera', precio: '$369', donde: 'Platillos de la casa' },
    ],
    parrilladas: ['Pituca, para 2: 200 g', 'Che Pebeta, para 4: 400 g'],
    pedido: 'la arrachera',
  },
  {
    id: 'vacio', nombre: 'Vacío',
    sale: 'La falda, entre las últimas costillas y la pierna. Jugoso y con su capa de grasa: un clásico argentino.',
    platillos: [{ nombre: 'Vacío: 200 g o 400 g', precio: '$350 o $690', donde: 'Cortes Angus' }],
    parrilladas: ['Pituca, para 2: 200 g', 'Piba, para 3: 400 g', 'Che Pebeta, para 4: 400 g'],
    pedido: 'el vacío',
  },
  {
    id: 'matambre', nombre: 'Matambre',
    sale: 'La capa delgada de carne entre el cuero y las costillas. Se enrolla con relleno, se cocina y se sirve frío, en rodajas.',
    platillos: [
      { nombre: 'Matambre de Campo, relleno de verduras y queso parmesano', precio: '$349', donde: 'Entradas' },
      { nombre: 'Entradita: matambre y picadita', precio: '$369', donde: 'Entradas' },
    ],
    pedido: 'el matambre de campo ($349)',
  },
  {
    id: 'chamorro', nombre: 'Chamorro',
    sale: 'La parte baja de la pierna, con hueso. Se cocina lento hasta que se deshace.',
    platillos: [{ nombre: 'Chamorro horneado al vino tinto', precio: '$369', donde: 'Platillos de la casa' }],
    pedido: 'el chamorro al vino tinto ($369)',
  },
];
