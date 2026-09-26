// Contenido de El Café 57 (Hermosillo, Sonora). https://elcafe57.mx/ (WordPress con Elementor).
// Textos copiados de investigacion/crudo.json: inicio, /menu/ (desayunos), /menu/comida-y-cena/, /parallevar/ y
// /menu/paquetes/. Se recortaron, se quitaron las mayúsculas de adorno ("DESAYUNOS", "RESERVAR") y los "·" de las
// opciones pasan a comas.
// Textos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-26 (ver CAMBIOS.md):
//   - /menu/postres/, /menu/cafe/ y /menu/vino-cerveza-cocteles/: platillos, bebidas, medidas y precios;
//   - /contacto/: el correo c57pitic@icr.mx;
//   - de investigacion/original.html: el número de restaurante de su widget de OpenTable (rid=1327186) y las
//     coordenadas de su mapa incrustado (29.1022291, -110.9494894).
// Lo nuevo (títulos, botones, notas que explican el menú, textos de "La cuenta de tu reunión" y mensajes de WhatsApp)
// está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** WhatsApp del inicio (wa.me/526623615382). Paquetes y Para llevar usan el mismo número con el prefijo antiguo 521. */
export const WA = '526623615382';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, les escribo desde su sitio web.';

/** Enlace armado con el número de restaurante (rid) de su widget de OpenTable: pendiente de confirmar (CAMBIOS.md). */
export const OPENTABLE = 'https://www.opentable.com.mx/restref/client/?rid=1327186&lang=es-MX';

export const negocio = {
  nombre: 'El Café 57',
  lema: 'Cocina Contempo',
  desde: 2005,
  direccion: { calle: 'Blvd. Valentín Gómez Farías', colonia: 'Col. Pitic', cp: '83150', ciudad: 'Hermosillo, Sonora' },
  // Horario del inicio y de /contacto/. dia: 0 = domingo.
  horario: [
    { dias: 'Lunes a sábado', horas: '8:00 am a 10:00 pm', abre: 8, cierra: 22, aplica: [1, 2, 3, 4, 5, 6] },
    { dias: 'Domingo', horas: '8:00 am a 5:00 pm', abre: 8, cierra: 17, aplica: [0] },
  ],
  telefono: '(662) 214 46 74',
  tel: 'tel:+526622144674',
  whatsappVisible: '(662) 361 53 82',
  whatsapp: wa(`${saludo} Quiero información de El Café 57.`),
  correo: 'c57pitic@icr.mx',
  // Búsqueda por nombre y dirección (el sitio no enlaza Google Maps; su mapa incrustado apunta a "El Café 57" en estas coordenadas).
  mapa: 'https://www.google.com/maps/search/?api=1&query=El+Caf%C3%A9+57%2C+Blvd.+Valent%C3%ADn+G%C3%B3mez+Far%C3%ADas%2C+Pitic%2C+Hermosillo',
  facebook: 'https://www.facebook.com/elcafe57',
  instagram: 'https://www.instagram.com/elcafe57',
  logo: f('logo-blanco', 185, 223, 'El Café 57, Cocina Contempo'),
};

export const portada = {
  antetitulo: 'Para cualquier momento del día',
  titulo: 'Desayuno, comida, cena y algo más',
  foto: f('patio-comida', 1100, 734, 'Dos mujeres conversan en una mesa del patio de El Café 57, con ensaladas, paninis y bebidas'),
};

/** Foto del lugar para el bloque Visítanos (enlaza a Google Maps). */
export const lugar = f('patio-arbol', 1600, 678, 'El patio de El Café 57: mesas con sillas tejidas alrededor de un árbol, bajo una cubierta de lona y con plantas');

export const nosotros = {
  titulo: 'Donde cada visita se vuelve especial',
  texto: 'Desde 2005, El Café 57 es un espacio acogedor en Hermosillo donde la tradición se encuentra con el buen gusto y el ritmo pausado de una buena conversación.',
  fotos: [
    f('cocina-panini', 900, 601, 'Una cocinera de El Café 57 con cubrebocas y gorro ofrece un plato con panini desde la cocina'),
    f('mesera', 900, 601, 'Una mesera de El Café 57 sonríe junto a una palmera en el patio'),
  ],
};

// ---------- Menú ----------
export type Platillo = { nombre: string; precio?: string; detalle?: string };
export type Seccion = { titulo: string; platillos: Platillo[]; nota?: string };
export type Categoria = { id: string; pestana: string; titulo: string; frase: string; foto?: Foto; secciones: Seccion[]; notaFinal?: string };

const acompanados = 'Acompañados de pan tostado, tortillas de maíz o de harina. Pídelos de claras por +$19; guarnición extra, +$19.';

export const menu: Categoria[] = [
  {
    id: 'desayunos', pestana: 'Desayunos', titulo: 'Desayunos', frase: 'Se sirven hasta el mediodía.',
    foto: f('desayunos', 1100, 734, 'Pan francés con fresas, croissant con huevo y fruta, un platillo bañado en salsa, una taza de café y dos copas de jugo en una mesa de granito'),
    secciones: [
      {
        titulo: 'Para empezar',
        platillos: [
          { nombre: 'Jugo de naranja, 300 ml', precio: '$59' },
          { nombre: 'Jugo de toronja, 300 ml', precio: '$59' },
          { nombre: 'Jugo de frutas, 300 ml', precio: '$59', detalle: 'Jugos de piña y naranja, papaya, plátano y fresa.' },
          { nombre: 'Jugo verde', precio: '$59', detalle: 'Jugos de toronja y naranja, piña, nopales, espinaca, apio y perejil.' },
          { nombre: 'Parfait de yogurt con fruta y granola', precio: '$97' },
          { nombre: 'Plato de frutas', precio: '$92', detalle: 'Fruta de temporada. Agrega queso cottage +$29, yogurt +$29 o granola +$18.' },
          { nombre: 'Biscuit a la plancha', precio: '$59', detalle: 'Con mantequilla y mermelada.' },
        ],
      },
      {
        titulo: 'Huevos',
        nota: acompanados,
        platillos: [
          { nombre: 'A la mexicana', precio: '$128', detalle: 'Dos huevos revueltos con tomate, cebolla y un toque de chile serrano, acompañados de frijoles refritos.' },
          { nombre: 'Machaca', precio: '$182', detalle: 'Dos huevos revueltos con machaca, salsa bandera, acompañados de frijoles refritos.' },
          { nombre: 'Rancheros', precio: '$128', detalle: 'Dos huevos estrellados sobre tortilla de maíz, frijoles refritos, bañados con salsa roja, verde o divorciados (mitad roja y mitad verde), crema y queso cotija.' },
          { nombre: 'Americanos', precio: '$128', detalle: 'Dos huevos estrellados, dos rebanadas de jamón de pavo o tocino, acompañados de papas sazonadas.' },
        ],
      },
      {
        titulo: 'Omelettes',
        nota: acompanados,
        platillos: [
          { nombre: 'Campestre', precio: '$166', detalle: 'Champiñones, pimientos, cebolla y queso manchego, bañado con crema de chile verde, acompañado de frijoles refritos.' },
          { nombre: 'De la granja', precio: '$166', detalle: 'Jamón de pavo, tocino, queso manchego bañado con salsa roja gourmet, acompañado de papas sazonadas.' },
          { nombre: 'Vegetariano', precio: '$166', detalle: 'De claras, relleno de champiñones, espinacas y queso panela, bañado con salsa roja gourmet, acompañado de rebanadas de tomate con vinagreta.' },
          { nombre: 'Clásico', precio: '$166', detalle: 'Jamón de pavo, champiñones y queso manchego, bañado de salsa roja gourmet, acompañado de papas sazonadas.' },
        ],
      },
      {
        titulo: 'Nuestras especialidades',
        platillos: [
          { nombre: 'Chilaquiles', precio: '$150', detalle: 'Rojos, verdes o divorciados (mitad y mitad), queso gratinado, acompañados de frijoles refritos. Con pollo o huevo, $169.' },
          { nombre: 'Pastel de elote', precio: '$166', detalle: 'Bañado con crema de chile verde, acompañado de frijoles refritos.' },
          { nombre: 'Pan francés', precio: '$155', detalle: 'Relleno de queso crema preparado y fresas naturales, acompañado de miel de maple.' },
          { nombre: 'Croissant con huevo', precio: '$166', detalle: 'Huevo, queso manchego, espinaca, crema de chipotle, mayonesa y tu elección de jamón de pavo o tocino, acompañado con fruta.' },
        ],
      },
    ],
  },
  {
    id: 'comida', pestana: 'Comida y cena', titulo: 'Comida y cena', frase: 'Tus favoritos de siempre, hechos al momento.',
    foto: f('comida-cena', 1100, 734, 'Pastas, linguini con camarones, una sopa, limonada y una copa de vino blanco en una mesa del patio de El Café 57'),
    secciones: [
      {
        titulo: 'Entradas',
        platillos: [
          { nombre: 'Bruschettas mixtas, 6 piezas', precio: '$150', detalle: 'Aguacate y feta, quesos y tomate, chorizo español y champiñones.' },
          { nombre: 'Champiñones al ajillo', precio: '$150', detalle: 'Champiñones, ajo, chile guajillo y un toque de limón.' },
          { nombre: 'Hummus de cilantro y jalapeño', precio: '$107', detalle: 'Dip de garbanzo con cilantro y chile jalapeño, acompañado de pitas tostadas. Extra pan pita +$18.' },
          { nombre: 'Mousse de cangrejo y quesos', precio: '$107' },
          { nombre: 'Panela horneada con champiñones', precio: '$161', detalle: 'Acompañado de pitas tostadas. Extra pan pita +$18.' },
          { nombre: 'Guacamole', precio: '$118', detalle: 'Acompañado de totopos.' },
        ],
      },
      {
        titulo: 'Ensaladas',
        nota: 'Extras: pechuga de pollo a la parrilla 120 g +$59, salmón a la parrilla 130 g +$107, aderezo +$19.',
        platillos: [
          { nombre: 'Ensalada china', precio: '$155', detalle: 'Lechuga italiana, juliana de pimiento y zanahoria, mandarina, noodle frito y almendra tostada con aderezo oriental de jengibre y ajonjolí.' },
          { nombre: 'Ensalada de pera y blue cheese', precio: '$155', detalle: 'Lechuga italiana, blue cheese, pera y nuez caramelizada con vinagreta de tamarindo.' },
          { nombre: 'Ensalada romana', precio: '$150', detalle: 'Lechuga romana, aguacate, tomate rostizado y queso parmesano con aderezo cremoso y un toque de chipotle, acompañada de crostini.' },
          { nombre: 'Ensalada de espinaca y fresa', precio: '$166', detalle: 'Espinacas, lechuga italiana, queso feta, fresas y nuez caramelizada con vinagreta de balsámico y maple.' },
          { nombre: 'Ensalada griega', precio: '$145', detalle: 'Lechuga italiana, pepino, tomate, aceituna kalamata y queso feta con vinagreta de limón.' },
          { nombre: 'Ensalada Santa Fe con fajitas de pollo', precio: '$193', detalle: 'Lechuga italiana, fajitas de pollo con chile poblano y cebolla, tomate, elotitos, queso mozzarella, tiritas de tortilla y aderezo cactus ranch.' },
        ],
      },
      {
        titulo: 'Sopas',
        platillos: [
          { nombre: 'Crema de tomate', precio: '$86 / $112', detalle: 'Chica $86, grande $112.' },
          { nombre: 'Sopa de tortilla', precio: '$86 / $112', detalle: 'Chica $86, grande $112.' },
        ],
      },
      {
        titulo: 'Pastas',
        platillos: [
          { nombre: 'Farfalle a la vinagreta', precio: '$171', detalle: 'Jamón de pavo, pimientos rostizados, espinacas, pepino y queso feta, envuelta en vinagreta.' },
          { nombre: 'Lasagna tradicional', precio: '$225', detalle: 'Acompañada de ensalada verde.' },
          { nombre: 'Linguini a la crema con camarones', precio: '$242', detalle: 'Salsa cremosa con un toque de ajo, cebollín y chile de árbol.' },
        ],
      },
      {
        titulo: 'Paninis',
        platillos: [
          { nombre: 'Panini Cordon Bleu', precio: '$171', detalle: 'Jamón de pavo, queso manchego, tomate, mayonesa y crema chipotle.' },
          { nombre: 'Panini Italia', precio: '$171', detalle: 'Jamón de pavo, queso panela, tomate, mayonesa y pesto rojo.' },
          { nombre: 'Panini del Café', precio: '$182', detalle: 'Jamón de pavo, tocino, lechuga, tomate, aguacate, mayonesa y crema de chipotle.' },
          { nombre: 'Panini Capri', precio: '$182', detalle: 'Tocino, panela asada, tomate, aguacate, mayonesa y vinagreta de pesto verde en pan de centeno.' },
          { nombre: 'Panini Florencia', precio: '$182', detalle: 'Pollo a la parrilla, queso manchego, espinacas, mayonesa y pesto rojo.' },
          { nombre: 'Panini vegetariano', precio: '$171', detalle: 'Pimientos, calabaza y cebolla rostizados, queso panela, mayonesa y mostaza dijon.' },
          { nombre: 'Panini alemán', precio: '$225', detalle: 'Roast beef, cebolla caramelizada, queso manchego, mayonesa y mostaza dijon.' },
          { nombre: 'Panini Sinaloa', precio: '$193', detalle: 'Chilorio, queso panela, aguacate y jalapeños.' },
          { nombre: 'Panini Roma', precio: '$225', detalle: 'Filete de res, champiñones y mayonesa, acompañado de ensalada verde.' },
          { nombre: 'Panini Mediterráneo', precio: '$225', detalle: 'Salmón a la parrilla, queso manchego, aguacate, mayonesa y un toque de limón.' },
          { nombre: 'Sándwich del Café', precio: '$161', detalle: 'Jamón de pavo, tocino, lechuga, tomate, aguacate, mayonesa y crema de chipotle en pan integral.' },
        ],
      },
    ],
  },
  {
    id: 'postres', pestana: 'Postres', titulo: 'Postres', frase: 'El toque dulce para cerrar tu visita.',
    secciones: [
      {
        titulo: 'Postres',
        nota: 'Agrégale nieve a tus postres por +$33.',
        platillos: [
          { nombre: 'Pastel de chocolate', precio: '$112' },
          { nombre: 'Flan', precio: '$81' },
          { nombre: 'Pastel de zanahoria', precio: '$97' },
          { nombre: 'Brownie', precio: '$102' },
          { nombre: 'Panini Parisienne', precio: '$128' },
          { nombre: 'Postre de manzana', precio: '$97' },
        ],
      },
    ],
  },
  {
    id: 'cafe', pestana: 'Cafés y tés', titulo: 'Cafés, tés y más', frase: 'Tus bebidas favoritas.',
    foto: f('cafes-frios', 1100, 734, 'Tres bebidas frías en vaso alto: dos cafés latte y un matcha latte'),
    secciones: [
      {
        titulo: 'Calientes',
        nota: 'Cambia tu tipo de leche (soya, almendra o coco, 100 ml) por +$15. Agrégale sabor a tu café: almendra, caramelo, crema irlandesa, vainilla francesa, caramelo sugar free o vainilla sugar free.',
        platillos: [
          { nombre: 'Espresso, 30 ml', precio: '$48' },
          { nombre: 'Capuccino, 240 ml', precio: '$59 / $72', detalle: 'Natural $59, con sabor $72.' },
          { nombre: 'Café latte, 400 ml', precio: '$75 / $91', detalle: 'Natural $75, con sabor $91.' },
          { nombre: 'Mocha, 400 ml', precio: '$91' },
          { nombre: 'De la casa, 400 ml', precio: '$91' },
          { nombre: 'Matcha latte, 400 ml', precio: '$75' },
          { nombre: 'Americano, 240 ml', precio: '$59' },
          { nombre: 'Chocolate, 400 ml', precio: '$75' },
          { nombre: 'Chai, 400 ml', precio: '$97', detalle: 'Especias, manzana o vainilla sugar free.' },
          { nombre: 'Té de diversos sabores, 400 ml', precio: '$53', detalle: 'Limón, manzana canela, manzanilla, menta, hierbabuena, frutos rojos o verde.' },
        ],
      },
      {
        titulo: 'Frías',
        platillos: [
          { nombre: 'Americano en las rocas, 425 ml', precio: '$59' },
          { nombre: 'Café latte en las rocas, 425 ml', precio: '$81' },
          { nombre: 'Matcha latte en las rocas, 425 ml', precio: '$91' },
          { nombre: 'Café frappé, 425 ml', precio: '$102', detalle: 'Capuccino, coffee toffee, cookies and cream, mocha, vainilla o mocha sugar free.' },
          { nombre: 'Mocha en las rocas', precio: '$91' },
          { nombre: 'Chai en las rocas, 425 ml', precio: '$102', detalle: 'Especias, manzana o vainilla sugar free.' },
          { nombre: 'Chai frappé, 425 ml', precio: '$106', detalle: 'Especias, manzana o vainilla sugar free.' },
          { nombre: 'Smoothies, 425 ml', precio: '$91', detalle: 'Fresa, mango, tropical, o tamarindo y mango.' },
          { nombre: 'Limonada, 425 ml', precio: '$48 / $59', detalle: 'Natural o mineral $48, de fresa o de pepino $59.' },
          { nombre: 'Té helado, 425 ml', precio: '$59' },
          { nombre: 'Refresco, 355 ml', precio: '$48' },
          { nombre: 'Agua, 500 ml', precio: '$33' },
          { nombre: 'Agua mineral, 600 ml', precio: '$43' },
        ],
      },
    ],
  },
  {
    id: 'vino', pestana: 'Vino y cerveza', titulo: 'Vino, cerveza y cócteles', frase: 'Para acompañar cualquier momento.',
    foto: f('brindis', 900, 601, 'Dos amigas brindan con copas de vino rosado y tinto junto a una ensalada'),
    notaFinal: 'En los cócteles, las onzas (oz) son la cantidad de licor o de vino que lleva cada uno.',
    secciones: [
      {
        titulo: 'Vinos por copa (botella de 187 ml)',
        platillos: [
          { nombre: 'Cetto Blanc de Blancs', precio: '$140', detalle: 'Blanco.' },
          { nombre: 'Cetto Zinfandel', precio: '$140', detalle: 'Rosado.' },
          { nombre: 'Cetto Petite Sirah', precio: '$140', detalle: 'Tinto.' },
          { nombre: 'Cetto Cabernet Sauvignon', precio: '$150', detalle: 'Tinto.' },
        ],
      },
      {
        titulo: 'Vinos tintos por botella (750 ml)',
        platillos: [
          { nombre: 'XA Domecq Cabernet Sauvignon', precio: '$492' },
          { nombre: 'Pequeña Vasija Syrah-Malbec', precio: '$510' },
          { nombre: 'Casillero del Diablo Cabernet Sauvignon', precio: '$589' },
          { nombre: 'Casa Magoni Sangiovese Cabernet', precio: '$589' },
          { nombre: 'Gran Sangre de Toro', precio: '$664' },
        ],
      },
      {
        titulo: 'Cervezas',
        nota: 'Prepárala: chelada (limón y sal) +$13, michelada (limón, sal y salsas negras) +$13, michelada con clamato +$25.',
        platillos: [
          { nombre: 'Tecate Light, 325 ml', precio: '$54' },
          { nombre: 'Coors Light, 355 ml', precio: '$54' },
          { nombre: 'Bohemia Oscura, 355 ml', precio: '$64' },
          { nombre: 'Indio, 355 ml', precio: '$64' },
          { nombre: 'Michelob Ultra, 355 ml', precio: '$64' },
        ],
      },
      {
        titulo: 'Cócteles',
        platillos: [
          { nombre: 'Sangría', precio: '$97', detalle: 'Limonada con vino tinto (2 oz).' },
          { nombre: 'Clericot', precio: '$118', detalle: 'Limonada con vino tinto (2 oz) y manzana.' },
          { nombre: 'Frágola, 1 oz', precio: '$97', detalle: 'Limonada frappé, fresa y vodka.' },
          { nombre: 'Mojito, 1 oz', precio: '$97', detalle: 'Hierbabuena, limón, azúcar y ron.' },
          { nombre: 'Carajillo, 1 oz', precio: '$128', detalle: 'Espresso y Licor 43.' },
          { nombre: 'Mimosa, 3 oz', precio: '$128', detalle: 'Jugo de naranja y prosecco.' },
        ],
      },
    ],
  },
];

// ---------- Lunch 57 ----------
export const lunch = {
  titulo: 'Lunch 57',
  precio: '$230',
  frase: 'Un combo diferente cada día de la semana.',
  horario: 'Lunes a viernes, de 1:00 pm a 5:00 pm.',
  restricciones: 'Aplican restricciones.',
  foto: f('lunch-57', 1100, 734, 'Un panini con ensalada verde, una crema de tomate y una limonada, como en el Lunch 57'),
  dias: [
    { dia: 'Lunes', combo: 'Panini Florencia, ensalada de la casa, crema de tomate y limonada.' },
    { dia: 'Martes', combo: 'Panini del Café, ensalada de espinaca y fresa, sopa de tortilla y limonada.' },
    { dia: 'Miércoles', combo: 'Ensalada romana, crema de tomate y limonada.' },
    { dia: 'Jueves', combo: 'Ensalada de espinaca y fresa, sopa de tortilla y limonada.' },
    { dia: 'Viernes', combo: 'Panini Sinaloa, ensalada de la casa, sopa de tortilla y limonada.' },
  ],
};

// ---------- Para llevar ----------
export const paraLlevar = {
  titulo: '¡Haz que tus reuniones y eventos sean aún más deliciosos!',
  texto: 'Desde reuniones íntimas hasta celebraciones especiales, contamos con platillos pensados para compartir en grupo. Lleva el sabor de El Café 57 a donde estés y déjanos acompañarte con la calidad y el sabor que nos caracteriza.',
  foto: f('charola-paninis', 1100, 734, 'Charola de paninis cortados en triángulos, con dos salsas'),
  platillos: [
    { nombre: 'Lasagna', rinde: 'Para 8 personas', precio: '$945', detalle: 'Incluye ensalada de la casa (lechuga, tomate, pepino y vinagreta de limón).' },
    { nombre: 'Pastel de elote', rinde: 'Para 12 personas', precio: '$1,040', detalle: 'Incluye crema de chile verde y frijoles.' },
    { nombre: 'Charola de paninis', rinde: 'Para 8 a 10 personas', precio: '$887', detalle: '6 paninis cortados en cuartos: Florencia, Cordon Bleu y Del Café.' },
    { nombre: 'Pastel de chocolate', rinde: 'Para 10 a 12 personas', precio: '$509', detalle: 'Relleno cremoso, betún de chocolate y topping de nuez.' },
    { nombre: 'Pastel de zanahoria', rinde: 'Para 10 a 12 personas', precio: '$520', detalle: 'Acompañado de betún de queso crema.' },
  ],
};

// ---------- Elemento memorable: "La cuenta de tu reunión" (datos de /menu/paquetes/) ----------
export const eventos = {
  titulo: 'El espacio perfecto para compartir y celebrar',
  texto: 'Desde reuniones íntimas hasta celebraciones especiales, contamos con paquetes diseñados para cada momento del día. Organiza tu evento dentro de nuestro espacio y déjanos acompañarte con el sabor, el ambiente y el servicio que nos caracteriza.',
  espaciosTexto: 'Contamos con el espacio ideal para tus eventos, ya sea en nuestra acogedora área interior o en la terraza al aire libre.',
  letraChica: 'Precios por persona con IVA incluido, no incluye propina. Cualquier bebida o platillo diferente a lo incluido se cobra individualmente.',
  foto: f('comedor', 1000, 668, 'Mesas de madera puestas con copas, platos y una botella de vino en un comedor de El Café 57'),
};

export type Espacio = {
  id: string; nombre: string; min: number; max: number; horas: number;
  minimo: { semana: number; finde: number }; reglas: string[];
};
export const espacios: Espacio[] = [
  { id: 'comedor1', nombre: 'Comedor 1', min: 8, max: 10, horas: 3, minimo: { semana: 1500, finde: 2500 },
    reglas: ['Reservación por 3 horas a partir de la hora acordada', 'Margen de 15 minutos de tolerancia'] },
  { id: 'comedor2', nombre: 'Comedor 2', min: 12, max: 16, horas: 3, minimo: { semana: 3200, finde: 4000 },
    reglas: ['Reservación por 3 horas a partir de la hora acordada', 'Anticipo del 50% para reservar el área'] },
  { id: 'terraza', nombre: 'Terraza', min: 45, max: 50, horas: 4, minimo: { semana: 8000, finde: 12000 },
    reglas: ['Reservación por 4 horas a partir de la hora acordada', 'Anticipo del 50% para reservar el área'] },
];

export type Paquete = { id: string; nombre: string; tiempo: 'Desayuno' | 'Comida o cena'; precio: number; incluye: string[] };
const desayunoBase = ['Café americano (con refill)', 'Jugo de naranja (1 por persona)', 'Agua natural', 'Platones de fruta mixta al centro de la mesa, para compartir'];
const comidaBebida = 'Limonada, Coca Cola o agua (con refill)';
export const paquetes: Paquete[] = [
  { id: 'chilaquiles', nombre: 'Chilaquiles sencillos', tiempo: 'Desayuno', precio: 272, incluye: [...desayunoBase, 'Chilaquiles verdes o rojos', 'Frijoles refritos'] },
  { id: 'chilaquiles-pollo', nombre: 'Chilaquiles con pollo', tiempo: 'Desayuno', precio: 292, incluye: [...desayunoBase, 'Chilaquiles verdes o rojos con pollo', 'Frijoles refritos'] },
  { id: 'elote', nombre: 'Pastel de elote', tiempo: 'Desayuno', precio: 284, incluye: [...desayunoBase, 'Pastel de elote bañado en crema de chile verde', 'Frijoles refritos'] },
  { id: 'italia', nombre: 'Panini Italia con ensalada', tiempo: 'Comida o cena', precio: 305, incluye: [comidaBebida, 'Mousse de cangrejo con crostinis al centro de la mesa', '½ Panini Italia (jamón de pavo, queso panela, tomate y pesto rojo)', '½ Ensalada griega', 'Mini brownies'] },
  { id: 'florencia', nombre: 'Panini Florencia con ensalada', tiempo: 'Comida o cena', precio: 315, incluye: [comidaBebida, 'Mousse de cangrejo con crostinis al centro de la mesa', '½ Panini Florencia (pollo a la plancha, queso manchego, espinacas, pesto rojo)', '½ Ensalada griega', 'Mini brownies'] },
  { id: 'lasagna', nombre: 'Lasagna con ensalada', tiempo: 'Comida o cena', precio: 378, incluye: [comidaBebida, 'Panela horneada con champiñones al centro de la mesa', 'Lasagna individual', '½ Ensalada verde', 'Mini brownies'] },
  { id: 'pecho', nombre: 'Pecho al horno en salsas negras', tiempo: 'Comida o cena', precio: 430, incluye: [comidaBebida, 'Mousse de cangrejo con crostinis al centro de la mesa', '½ Ensalada griega', 'Pecho al horno en salsas negras con linguini al oglio', 'Mini brownies'] },
];
