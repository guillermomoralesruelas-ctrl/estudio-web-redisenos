// La carta de HOUSE Restaurante, copiada de sus PDF (tomados con curl el 2026-09-27 de lascasasbb.com/wp-content/uploads/
// y leídos con pdftotext; las descargas se guardaron fuera del estudio). No están en investigacion/crudo.json.
//   - Desayuno: Menu-Desayuno-Espanol-v14-09-2026.pdf ("V_14/09/26"), el que enlaza la página /menu-de-desayuno/.
//   - Brunch dominical: Brunch-Dominical-Espanol-v10-04-26.pdf ("V_10/04/26").
//   - Comida y cena: Menu-Comida-Cena-Espanol-HOUSE-v26-06-06.pdf (por dentro dice "v22/08/26").
//   - Postres y sobremesa: Menu-postres-Espanol-2026.pdf ("v-15-01-26").
// Cambios de forma: tipo oración en lugar de MAYÚSCULAS, sin la numeración "01.-", "·" y "—" convertidos en comas,
// erratas corregidas ("MEDITERRRÁNEOS", "Capuccino", "pan rustico"). Las notas del original se explican en `nota`.
// Deducido (pendiente en CAMBIOS.md): los precios de tres ensaladas (en el PDF salen apilados junto a la segunda).

export type Renglon = {
  nombre: string;
  precio?: number;
  /** Cuando el precio no es un solo número (varias opciones o un extra). */
  precioTexto?: string;
  desc?: string;
  etiqueta?: string;
};
export type Seccion = { titulo: string; nota?: string; renglones: Renglon[] };
export type Menu = {
  id: 'desayuno' | 'brunch' | 'comida' | 'postres';
  nombre: string;
  horario: string;
  version: string;
  pdf: string;
  intro?: string;
  secciones: Seccion[];
  notas: string[];
};

const PDF = 'https://lascasasbb.com/wp-content/uploads/';

export const menus: Menu[] = [
  {
    id: 'desayuno',
    nombre: 'Desayuno',
    horario: 'Lunes a viernes, 8:00 a.m. a 12:00 p.m. Sábado, 8:00 a.m. a 1:00 p.m.',
    version: 'Carta del 14 de septiembre de 2026',
    pdf: `${PDF}Menu-Desayuno-Espanol-v14-09-2026.pdf`,
    intro: 'La mesa está puesta desde las ocho.',
    secciones: [
      {
        titulo: 'El especial',
        renglones: [
          { nombre: 'El especial', precio: 280, desc: 'Café refill o té natural, chouquettes, jugo de naranja o fruta de temporada. A elegir: huevos shakshuka con longaniza, huevos franceses o migas con longaniza y labneh.' },
        ],
      },
      {
        titulo: 'Para la mesa',
        renglones: [
          { nombre: 'Chouquettes', precio: 65, desc: 'Seis piezas de pasta choux con azúcar perlado.' },
          { nombre: 'Baguette a la parrilla con mantequilla y mermelada de la casa', precio: 110 },
          { nombre: 'Baguette a la parrilla con mantequilla avellanada y miel en panal de Tepoztlán', precio: 120 },
        ],
      },
      {
        titulo: 'Mexicanos',
        renglones: [
          { nombre: 'Chilaquiles HOUSE', precio: 255, desc: 'Totopos de maíz en salsa de jitomate, morita, cascabel y guajillo, con crema, queso fresco, guacamole, cilantro criollo, frijoles negros, arroz con cúrcuma y plátano macho frito.' },
          { nombre: 'Huevos a la mexicana', precio: 175, desc: 'Tres huevos revueltos con jitomate, cebolla y jalapeño, frijoles negros, salsa de jitomate martajado, crema de rancho, queso fresco, aguacate y tortillas tatemadas de maíz azul.' },
          { nombre: 'Migas con longaniza y labneh', precio: 185, desc: 'Tres huevos revueltos con longaniza y tortilla frita, salsa de molcajete de guajillo, frijoles negros con hoja de aguacate, labneh y cilantro criollo.' },
          { nombre: 'Enchiladas horneadas de pollo', precio: 295, desc: 'Tinga de pollo (185 g) y salsa verde de tomatillo en tortilla de maíz, gouda gratinado, crema, cebolla y cilantro. Cuatro piezas.' },
          { nombre: 'Enmoladas de pollo', precio: 285, desc: 'Mole negro de la casa (chiles chilhuacle, mulato y pasilla, chocolate), pollo (120 g) en tortilla de maíz, queso fresco, crema ácida, cebolla morada y cilantro criollo. Cuatro piezas.' },
          { nombre: 'Breakfast tacos', precio: 180, desc: 'Tres huevos revueltos con quesillo de Oaxaca en tortilla de maíz, pesto de cilantro, pico de gallo, aguacate y frijoles negros. Salsa de chile de árbol, pasilla, ajonjolí y cacahuate.' },
          { nombre: 'Tlayuda de cecina', precio: 275, desc: 'Cecina de Morelos (105 g) y longaniza (50 g) sobre tortilla de maíz azul, frijoles negros con hoja de aguacate, quesillo, chales, col morada, cebolla morada y salsa de chile de árbol.' },
        ],
      },
      {
        titulo: 'Mediterráneos',
        renglones: [
          { nombre: 'Mezze mediterráneo de desayuno', precio: 395, etiqueta: 'Para compartir entre dos', desc: 'Muhammara, labneh con dukkah, feta, pecorino, jamón serrano, huevos duros, jitomates cherry al horno, jitomate fresco, pepino persa, melón, durazno, higos, miel en panal de Tepoztlán, mermelada de la casa, mantequilla de chipotle y menta fresca, con hogaza tatemada con aceite de oliva.' },
          { nombre: 'Huevos shakshuka con longaniza', precio: 245, desc: 'Dos huevos, longaniza y salsa martajada de jitomate, feta, tzatziki, perejil, menta, eneldo y hogaza tatemada en aceite de ajo y mantequilla.' },
          { nombre: 'Huevos turcos', precio: 185, desc: 'Tres huevos pochados sobre yogurt griego con dukkah de almendra y pistache, mantequilla de pimentón dulce, kale y hogaza tatemada.' },
          { nombre: 'Huevos franceses', precio: 195, etiqueta: 'Daniela recomienda', desc: 'Tres huevos revueltos a fuego lento, cremosos, sobre hogaza tatemada, hongos en mantequilla avellanada, cebollín, ralladura de limón amarillo y sal de mar.' },
        ],
      },
      {
        titulo: 'Huevos',
        renglones: [
          { nombre: 'Huevos "any style"', precio: 205, desc: 'Dos huevos fritos, revueltos o pochados, como los pidas, con tocino, papas country y hogaza.' },
          { nombre: 'Omelette de jamón y queso', precio: 225, desc: 'Omelette de gouda y jamón, gratin de papas, lechugas mixtas y vinagreta de mostaza.' },
          { nombre: 'Omelette de pesto y mozzarella', precio: 225, desc: 'Hongos de temporada (shiitake, crimini y champiñón), mozzarella fresca, espinaca y jalapeño. Pestos de albahaca y de jitomate deshidratado, hogaza tatemada.' },
          { nombre: 'Huevos benedictinos con pavo y tocino', precio: 245, desc: 'Huevos pochados sobre english muffin a la parrilla, arúgula, holandesa de chipotle, jitomate, brotes de cilantro, papas gajo con páprika y limón amarillo.' },
        ],
      },
      {
        titulo: 'De la hogaza',
        renglones: [
          { nombre: 'Avocado toast', precio: 225, desc: 'Aguacate con limón y huevo mollet sobre hogaza tatemada en aceite de oliva, quelites, rábano sandía, queso fresco, cebolla roja, peperoncino y semillas de chile de árbol.' },
          { nombre: 'Egg sandwich', precio: 245, etiqueta: 'Nuevo', desc: 'Dos huevos estrellados, tocino, papas country, gouda fundido, chile serrano, cebolla morada encurtida y cilantro criollo en brioche de la casa tostado, con mayonesas de chipotle y sriracha.' },
          { nombre: 'Croque madame con jamón y tocino', precio: 250, desc: 'Gouda, jamón cocido, tocino y champiñones sobre hogaza gratinada, bechamel de espinaca, mozzarella fresca, huevo estrellado y semillas de chile de árbol.' },
        ],
      },
      {
        titulo: 'Dulce',
        renglones: [
          { nombre: 'Pan francés de brioche', precio: 275, desc: 'Brioche de la casa embebido en brandy y flor de naranjo, dorado en mantequilla, con crème fraîche de limón amarillo, higos, frutos rojos salteados y miel de maple.' },
          { nombre: 'Hot cakes de cottage', precio: 230, desc: 'Queso cottage y harina de arroz, miel de flor de naranjo, plátano y zarzamoras. Cuatro piezas.' },
          { nombre: 'Avena tibia', precio: 125, desc: 'Avena, pasas rubias, manzana, canela, plátano, fresas y miel de agave. Con leche deslactosada, +$15.' },
          { nombre: 'Fruta de temporada', precio: 75, desc: 'Para acompañar: yogurt griego +$30, granola artesanal +$35, queso cottage +$40, miel de Tepoztlán +$40.' },
          { nombre: 'El perfecto parfait', precio: 195, desc: 'Yogurt griego, granola artesanal, fresas, frambuesas y blueberries, con miel de agave. Con miel de Tepoztlán, +$40.' },
        ],
      },
      {
        titulo: 'Proteínas, extras y acompañamientos',
        nota: 'Se suman a tu platillo.',
        renglones: [
          { nombre: 'Queso cottage', precio: 45 },
          { nombre: 'Claras en omelettes y huevos revueltos', precio: 40, desc: 'Para pedirlos solo con claras.' },
          { nombre: 'Huevo extra', precio: 35 },
          { nombre: 'Tocino frito', precio: 55 },
          { nombre: 'Pollo deshebrado (40 g)', precio: 75 },
          { nombre: 'Aguacate fresco', precio: 65 },
          { nombre: 'Papas country', precio: 65 },
          { nombre: 'Frijoles negros con hoja de aguacate', precio: 35 },
          { nombre: 'Tortillas de maíz', precio: 25 },
          { nombre: 'Hogaza tatemada', precio: 65 },
        ],
      },
      {
        titulo: 'Para los niños (hasta 10 años)',
        renglones: [
          { nombre: 'Hot cakes, dos piezas, con plátano y miel', precio: 125 },
          { nombre: 'Huevos revueltos con papas fritas', precio: 125 },
        ],
      },
      {
        titulo: 'Para brindar y smoothies',
        renglones: [
          { nombre: 'Grand mimosa', precio: 195, desc: 'Vino espumoso, jugo fresco de naranja y un toque de Grand Marnier.' },
          { nombre: 'Smoothie very berry', precio: 155, desc: 'Fresa, frambuesa, mora azul y zarzamora con jugo de manzana.' },
          { nombre: 'Smoothie Afrodita', precio: 165, desc: 'Yogurt griego, frutos rojos, jugo de manzana y miel de agave.' },
          { nombre: 'Smoothie de plátano y almendra', precio: 175, desc: 'Plátano, yogurt griego, crema de almendra y miel de agave.' },
          { nombre: 'Green smoothie', precio: 185, desc: 'Aguacate cremoso, agua de coco, leche de almendra HOUSE, miel de agave, kale y espinaca.' },
        ],
      },
      {
        titulo: 'Jugos, tés y tisanas',
        renglones: [
          { nombre: 'Jugo de naranja', precio: 75 },
          { nombre: 'Jugo verde', precio: 115, desc: 'Kale, piña, apio, nopal y naranja.' },
          { nombre: 'Naranja y zanahoria', precio: 85, desc: 'Con jengibre y cayena.' },
          { nombre: 'Mandarina', precio: 75, desc: 'En temporada de invierno.' },
          { nombre: 'Tisana de guayaba', precio: 85 },
          { nombre: 'Yerbabuena, lemongrass o manzanilla', precio: 65 },
        ],
      },
      {
        titulo: 'Café illy (Trieste, Italia)',
        renglones: [
          { nombre: 'Espresso', precio: 70 },
          { nombre: 'Espresso doble', precio: 90 },
          { nombre: 'Americano', precio: 70 },
          { nombre: 'Americano descafeinado', precio: 90 },
          { nombre: 'Café refill', precio: 55, desc: 'Tazas ilimitadas.' },
          { nombre: 'Latte', precio: 105 },
          { nombre: 'Capuchino', precio: 110 },
          { nombre: 'Café con leche', precio: 95, desc: 'Espresso y leche, endulzado con Lechera.' },
          { nombre: 'Latte descafeinado', precio: 125 },
          { nombre: 'Capuchino descafeinado', precio: 130 },
          { nombre: 'Café con leche descafeinado', precio: 115 },
          { nombre: 'Iced coffee', precio: 95, desc: 'Doble espresso illy, agua fría y hielo.' },
          { nombre: 'Spanish latte frío', precio: 120, desc: 'Doble espresso illy, leche fría, Lechera y vainilla sobre hielo.' },
          { nombre: 'Chocolate artesanal mexicano', precio: 70 },
          { nombre: 'Vaso de leche (8 oz)', precio: 50 },
        ],
        nota: 'Con leche deslactosada, +$15.',
      },
    ],
    notas: [],
  },
  {
    id: 'brunch',
    nombre: 'Brunch dominical',
    horario: 'Domingos, 9:00 a.m. a 1:00 p.m. A la carta, no es buffet.',
    version: 'Carta del 10 de abril de 2026',
    pdf: `${PDF}Brunch-Dominical-Espanol-v10-04-26.pdf`,
    intro: 'Platos que nos dan alegría y nos hacen quedarnos un rato más.',
    secciones: [
      {
        titulo: 'Nuestros estelares',
        renglones: [
          { nombre: 'Grand mimosa', precio: 160, desc: 'Vino espumoso con jugo fresco de naranja y un toque de Grand Marnier. La favorita del brunch.' },
          { nombre: 'Chilaquiles HOUSE', precio: 235, desc: 'Salsa de la casa emulsionada con jitomate, chiles morita, cascabel y guajillo; totopos de maíz bañados hasta quedar crujientes por fuera y húmedos por dentro, con queso fresco, crema, guacamole, frijoles negros, plátano macho frito, arroz con cúrcuma y cilantro criollo.' },
          { nombre: 'Chilaquiles afromexicanos', precio: 225, desc: 'Totopos de maíz en salsa de la casa, con huevos estrellados, aguacate, cebolla, crema y queso fresco. Con moros y cristianos (arroz con frijoles negros) y plátano macho frito.' },
        ],
      },
      {
        titulo: 'Platos fuertes de brunch',
        renglones: [
          { nombre: 'Huevos shakshuka', precio: 245, desc: 'Tzatziki de yogurt griego con pepino, eneldo y menta fresca, dos huevos con la yema líquida, feta desmoronado, longaniza artesanal y salsa martajada, sobre hogaza a la parrilla en aceite de ajo y mantequilla, con cilantro y perejil fresco.' },
          { nombre: 'Tlayuda de cecina', precio: 270, desc: 'Tortilla de maíz azul, frijoles negros, hoja de aguacate, chales, quesillo, longaniza y cecina, col morada, cebolla morada y salsa de chile de árbol.' },
          { nombre: 'Enchiladas horneadas', precio: 280, desc: 'Cuatro tortillas de maíz rellenas de tinga de pollo en salsa de tomatillo, gratinadas con queso gouda.' },
          { nombre: 'Enmoladas de pollo', precio: 275, desc: 'Cuatro tortillas de maíz rellenas de pollo (185 g), bañadas en el mole negro hecho en casa, con queso fresco, crema ácida, cebolla morada y cilantro criollo.' },
          { nombre: 'Huevos a la mexicana', precio: 170, desc: 'Tres huevos revueltos con jitomate, cebolla y chile jalapeño, frijoles con hoja de aguacate, queso fresco, salsa de jitomate martajado, crema de rancho, aguacate fresco y tortillas tatemadas de maíz azul.' },
          { nombre: 'Migas con longaniza', precio: 145, desc: 'Tres huevos revueltos con tortilla frita, longaniza y salsa de molcajete de chile guajillo, frijoles negros, hoja de aguacate, cebolla cambray y cilantro fresco.' },
          { nombre: 'Breakfast tacos', precio: 160, desc: 'Tres huevos revueltos, frijoles negros con hoja de aguacate y quesillo de Oaxaca, pesto de cilantro, pico de gallo, cilantro y aguacate, en tortilla de maíz con salsa de chile de árbol, pasilla, ajonjolí y cacahuate.' },
        ],
      },
      {
        titulo: 'Mediterráneos',
        renglones: [
          { nombre: 'Omelette de pesto y mozzarella', precio: 225, desc: 'Hongos de temporada (shiitake, crimini y champiñón), mozzarella fresca, espinaca y jalapeño fresco, sobre pesto de albahaca y mantequilla; con pesto de jitomate deshidratado y pan a la parrilla en aceite de ajo y mantequilla.' },
          { nombre: 'Huevos turcos', precio: 175, desc: 'Tres huevos pochados sobre yogurt griego con dukkah de almendras y pistaches, mantequilla de pimentón dulce, kale y pan rústico tostado.' },
          { nombre: 'Croque madame', precio: 195, desc: 'Pan rústico gratinado con queso gouda, jamón cocido, tocino y champiñones, con bechamel de espinaca y mozzarella fresca, huevo estrellado y semillas de chile de árbol.' },
          { nombre: 'Huevos franceses', precio: 150, desc: 'Huevos revueltos a fuego lento con mantequilla, hongos salteados en mantequilla avellanada y perejil, con pan rústico tostado.' },
          { nombre: 'Huevos benedictinos', precio: 235, desc: 'Holandesa de chipotle, arúgula, tocino y pechuga de pavo asada; huevos pochados con la yema líquida sobre english muffin a la parrilla, jitomate fresco, pimienta negra y brotes de cilantro. Con papas gajo con páprika y jugo de limón amarillo.' },
          { nombre: 'Omelette de jamón y queso con gratin de papas', precio: 215, desc: 'Con queso gouda y jamón, papas gratinadas y ensalada de lechugas mixtas con vinagreta de mostaza.' },
          { nombre: 'El perfecto parfait', precio: 250, desc: 'Yogurt griego FAGE con granola artesanal, fresas, frambuesas y blueberries, con miel de agave. Con miel local, +$40.' },
        ],
      },
      {
        titulo: 'Dulces y toasts',
        renglones: [
          { nombre: 'Avocado toast', precio: 290, desc: 'Rábano sandía, quelites, huevo mollet y peperoncino; aguacate fresco con limón sobre hogaza tostada en aceite de oliva, queso fresco, semillas de chile de árbol y cebolla roja.' },
          { nombre: 'Pan francés de brioche', precio: 265, desc: 'Brioche de la casa embebido en brandy y flor de naranjo, dorado en mantequilla, con crème fraîche de limón amarillo, higos frescos, frutos rojos salteados, miel de maple y ralladura de limón amarillo.' },
          { nombre: 'Hot cakes', precio: 225, desc: 'Cuatro piezas de harina de arroz, yogurt natural y queso cottage, con miel de flor de naranjo, plátano y zarzamoras frescas. Fruta extra +$35, miel de flor de naranjo +$25.' },
        ],
      },
      {
        titulo: 'Panes, fruta y avena',
        renglones: [
          { nombre: 'Chouquettes', precio: 65, desc: 'Seis piezas de pasta choux horneada, crujientes, con azúcar perlado.' },
          { nombre: 'Pan rústico con mermelada', precio: 110, desc: 'Tostado, con mantequilla artesanal y mermelada de fruta de temporada hecha en casa.' },
          { nombre: 'Pan rústico con miel en panal', precio: 120, desc: 'Tostado, con mantequilla avellanada y miel en panal de Tepoztlán.' },
          { nombre: 'Avena tibia', precio: 125, desc: 'Cocida lentamente con pasas rubias, manzana, canela, plátano, fresas frescas y miel de agave. Con leche deslactosada, +$15.' },
          { nombre: 'Bowl de fruta', precio: 155, desc: 'Fruta fresca de temporada con dos complementos a elegir: yogurt, granola, queso cottage o miel local. Para compartir al centro.' },
        ],
      },
      {
        titulo: 'Ligeros',
        nota: 'En la carta, "Wellness".',
        renglones: [
          { nombre: 'Scramble de proteína', precio: 295, desc: 'Cinco claras de huevo con pechuga de pollo, jitomates cherry salteados con espinaca, aguacate fresco y hogaza tostada.' },
          { nombre: 'Huevos "any style"', precio: 195, desc: 'Dos huevos fritos, revueltos o pochados, como los pidas. Con tocino frito, papas country y pan sourdough.' },
        ],
      },
      {
        titulo: 'Smoothies',
        renglones: [
          { nombre: 'Smoothie Afrodita', precio: 210, desc: 'Yogurt griego FAGE con fresas, frambuesas, blueberries y zarzamoras, endulzado con miel de agave.' },
          { nombre: 'Smoothie de plátano y almendras', precio: 195, desc: 'Yogurt griego FAGE con plátano, crema de almendra y miel de agave.' },
          { nombre: 'Smoothie verde "Hulk"', precio: 185, desc: 'Manzana verde, espinaca, kale, aguacate, agua de coco y leche de almendra.' },
          { nombre: 'Smoothie very berry', precio: 175, desc: 'Zarzamoras, fresas y blueberries endulzados con miel de abeja.' },
        ],
      },
      {
        titulo: 'Acompañamientos',
        nota: 'Se suman a tu platillo.',
        renglones: [
          { nombre: 'Papas country', precio: 65 },
          { nombre: 'Aguacate fresco', precio: 65 },
          { nombre: 'Tocino frito', precio: 55 },
          { nombre: 'Tortillas de maíz', precio: 25 },
          { nombre: 'Frijoles negros con hoja de aguacate', precio: 35 },
          { nombre: 'Hogaza tostada', precio: 65 },
          { nombre: 'Pan rústico asado', precio: 105 },
          { nombre: 'Pollo deshebrado (40 g)', precio: 75 },
          { nombre: 'Cambiar a solo claras de huevo', precio: 25 },
          { nombre: 'Huevo extra', precio: 35 },
        ],
      },
      {
        titulo: 'Bebidas',
        renglones: [
          { nombre: 'Jugo de naranja y zanahoria', precio: 85, desc: 'Con jengibre y pimienta de cayena.' },
          { nombre: 'Jugo verde', precio: 95, desc: 'Kale, piña, apio, nopal y jugo de naranja.' },
          { nombre: 'Jugo de naranja', precio: 75 },
          { nombre: 'Toronja y guayaba', precio: 85 },
          { nombre: 'Jugo de mandarina', precio: 75 },
          { nombre: 'Americano', precio: 60 },
          { nombre: 'Americano descafeinado', precio: 55 },
          { nombre: 'Café refill', precio: 55, desc: 'Tazas ilimitadas.' },
          { nombre: 'Espresso', precio: 60 },
          { nombre: 'Espresso doble', precio: 95 },
          { nombre: 'Café con leche', precio: 95 },
          { nombre: 'Capuchino', precio: 85 },
          { nombre: 'Capuchino descafeinado', precio: 85 },
          { nombre: 'Latte', precio: 80 },
          { nombre: 'Latte descafeinado', precio: 80 },
          { nombre: 'Leche deslactosada extra', precio: 10 },
          { nombre: 'Chocolate artesanal mexicano', precio: 65 },
          { nombre: 'Vaso de leche (8 oz)', precio: 45 },
          { nombre: 'Tisana de guayaba', precio: 65, desc: 'Infusión de guayaba con notas frutales.' },
          { nombre: 'Yerbabuena, lemongrass o manzanilla', precio: 65 },
        ],
      },
      {
        titulo: 'Para brindar',
        renglones: [
          { nombre: 'Aperol spritz', precio: 225 },
          { nombre: 'Segura Viudas (botella de 750 ml)', precio: 895 },
          { nombre: 'Prosecco Pinelli (botella de 750 ml)', precio: 985 },
          { nombre: 'Moët & Chandon (botella de 750 ml)', precio: 2495 },
          { nombre: 'Veuve Clicquot (botella de 750 ml)', precio: 2695 },
        ],
      },
      {
        titulo: 'Para tu perro',
        nota: 'En la carta, "Fido’s treat".',
        renglones: [
          { nombre: 'Pechuga de pollo asada (360 g)', precio: 250, desc: 'Un platillo pensado especialmente para nuestros perritos.' },
        ],
      },
    ],
    notas: [],
  },
  {
    id: 'comida',
    nombre: 'Comida y cena',
    horario: 'Comida: todos los días desde las 12:00 p.m. Cena: todos los días desde las 6:00 p.m.',
    version: 'Carta del 22 de agosto de 2026',
    pdf: `${PDF}Menu-Comida-Cena-Espanol-HOUSE-v26-06-06.pdf`,
    intro: 'Mediterráneo y México en una misma mesa.',
    secciones: [
      {
        titulo: 'Entradas',
        renglones: [
          { nombre: 'Gorditas de plátano macho', precio: 105, etiqueta: 'Favorito HOUSE', desc: 'Plátano macho, queso de cabra, salsa de chile cascabel con piloncillo.' },
          { nombre: 'House guacamole', precio: 185, desc: 'Guacamole fresco, mango, cilantro, chile serrano y limón.' },
          { nombre: 'Hummus', precio: 175, desc: 'Garbanzo, feta, tomates cherry rostizados, limón amarillo tatemado, semillas de chile, pan a la parrilla con ajo. Pan extra (2 rebanadas), +$50.' },
          { nombre: 'Esquites', precio: 125, desc: 'Epazote, mayonesa de chile manzano, queso fresco, limón y chile piquín.' },
        ],
      },
      {
        titulo: 'Para compartir',
        renglones: [
          { nombre: 'Pa amb tomàquet', precio: 225, desc: 'Pan rústico a la parrilla, jitomate maduro, aceite de oliva extra virgen, pecorino y jamón serrano.' },
          { nombre: 'Mezze mediterráneo', precio: 375, etiqueta: 'Selección de la chef', desc: 'Shish kebab de rib eye (120 g) marinado en harissa, pan rústico a la parrilla, hummus, tzatziki, pepino persa, feta en aceite de oliva, aceitunas kalamata, jitomates cherry rojo y amarillo, chile cascabel y menta.' },
          { nombre: 'Trilogía de tostadas', precio: 475, desc: 'Verde: róbalo, recado verde, aguacate, cebolla encurtida y pápalo. Tatemada: camarón, Oaxaca tatemado, alioli de habanero y aguacate. Recado negro: setas, recado negro, mango, piña y rábano sandía. Dos de las tres tostadas tienen un picante medio-alto.' },
        ],
      },
      {
        titulo: 'Tacos',
        renglones: [
          { nombre: 'Tacos de champiñones', precio: 235, etiqueta: 'Vegetariano', desc: 'Champiñones rostizados en salsa de chile de árbol y guajillo, queso fresco, cebolla y frijoles con hoja de aguacate.' },
          { nombre: 'Tacos de camarón', precio: 235, desc: 'Camarón en beer batter (capeado con cerveza), relish de col morada, aguacate, sriracha y chiles toreados.' },
          { nombre: 'Tacos de pollo', precio: 195, desc: 'Pollo a la plancha (150 g), gouda, berros, cilantro criollo, chile serrano y salsa verde de aguacate.' },
        ],
      },
      {
        titulo: 'Principales: pollo',
        renglones: [
          { nombre: 'Rosemary chicken', precio: 315, etiqueta: 'Favorito HOUSE', desc: 'Pollo rostizado (190 g), mostaza antigua, miel, puré de camote, papa, zanahoria, champiñón y echalote.' },
          { nombre: 'Mole negro con pollo', precio: 395, etiqueta: 'Selección de la chef', desc: 'Pollo (180 g) en mole negro de la casa, chiles chilhuacle, mulato y pasilla, chocolate, ajonjolí y epazote. Plátano macho caramelizado, tortillas de maíz azul. También con portobello, en versión vegana.' },
          { nombre: 'Arroz afgani', precio: 285, desc: 'Pollo marinado en yogurt (120 g), arroz basmati, comino, cardamomo, pasas rubias, almendras, pistaches, aceitunas, jitomate, limón amarillo tatemado y cilantro criollo.' },
        ],
      },
      {
        titulo: 'Principales: mar',
        renglones: [
          { nombre: 'Róbalo y risotto al Parmigiano Reggiano', precio: 525, etiqueta: 'Selección de la chef', desc: 'Róbalo asado (120 g), ralladura de limón amarillo. Risotto al Parmigiano Reggiano, alcachofas rostizadas, tomate seco, aceitunas kalamata, jugo de limón amarillo y eneldo.' },
          { nombre: 'Trilogía de ceviches', precio: 550, desc: '170 g. Aguachile verde: róbalo, pepino y aguacate. Mango y piña: camarón, róbalo, mango y chipotle. Acapulco: pulpo, camarón, mahi mahi, pepino, cebolla morada, cilantro, soda de naranja mexicana y cátsup.' },
          { nombre: 'Camarones a la parrilla con sandía y feta', precio: 335, desc: 'Camarones a la parrilla (90 g) terminados en salsa de chile de árbol y guajillo, sandía, feta y menta fresca.' },
          { nombre: 'Mahi mahi con piña, mango, papaya y chile', precio: 325, desc: 'Mahi mahi al horno (150 g), arroz basmati, mango, papaya, cebolla encurtida y habanero. Caldillo de piña, tomatillo, chile manzano, jalapeño y cilantro.' },
        ],
      },
      {
        titulo: 'Principales: carne',
        renglones: [
          { nombre: 'Rib eye prime Angus', precio: 655, desc: 'Rib eye Angus a la parrilla (300 g), puré de papa, jus de shiitake (salsa de su jugo con hongos) y cebolla tatemada.' },
          { nombre: 'Costillitas BBQ', precio: 455, etiqueta: 'Favorito HOUSE', desc: 'Costillitas glaseadas (270 g) con ciruela, granada y arándano. Puré de apio, mantequilla avellanada, vainilla mexicana. Arúgula y berros.' },
          { nombre: 'Pork belly en miel de lavanda', precio: 345, desc: 'Panceta de cerdo (200 g), miel de lavanda con un toque de peperoncino, puré de coliflor, apio y vainilla, verdolaga fresca, manzana verde, cebolla, chile serrano y limón Meyer preservado.' },
          { nombre: 'Mini hamburguesas Les Palm Springs', precio: 315, desc: 'Carne de res a la plancha (120 g), queso azul, gouda, tocino, cebollas caramelizadas, espinaca salteada y papas fritas.' },
          { nombre: 'Mini hamburguesas House', precio: 275, desc: 'Carne de res a la plancha (120 g), gouda, lechuga, jitomate, cebolla roja, pepinillos y papas fritas.' },
        ],
      },
      {
        titulo: 'Pastas',
        renglones: [
          { nombre: 'Pasta al pomodoro', precio: 265, desc: 'Salsa pomodoro, albahaca, Parmigiano Reggiano y limón amarillo tatemado.' },
          { nombre: 'Pasta bolognese', precio: 295, desc: 'Ragú de res, vino tinto, romero y Parmigiano Reggiano.' },
          { nombre: 'Ravioles de ricotta, mozzarella y espinaca', precio: 365, desc: 'Hechos en casa, con salsa de jitomate con pimiento ahumado.' },
          { nombre: 'Pasta 3 quesos con camarones', precio: 415, etiqueta: 'Favorito HOUSE', desc: 'Rigatoni. Camarones a la parrilla (80 g), jitomate guajillo, mozzarella fresca, queso de cabra, Parmigiano Reggiano y semillas de chile de árbol.' },
          { nombre: 'Linguini de verano', precio: 425, etiqueta: 'Nuevo', desc: 'Limón amarillo preservado, camarones asados, alcaparras, chile serrano, cilantro criollo y menta fresca, con pangrattato (pan tostado molido) de nuez, pistache y almendra.' },
        ],
      },
      {
        titulo: 'Ensaladas',
        renglones: [
          { nombre: 'Ensalada de pera, queso de cabra y avellanas', precio: 375, desc: 'Pera Bosch, duraznos asados, queso de cabra tibio, pecorino romano y avellanas tostadas.' },
          { nombre: 'Ensalada de arúgula, jamón serrano y pecorino', precio: 315, desc: 'Arúgula, jamón serrano, pecorino, limón amarillo tatemado y pan rústico a la parrilla.' },
          { nombre: 'Ensalada César con pollo', precio: 295, desc: 'Pollo marinado en yogurt, limón y albahaca (220 g), lechuga orejona, aderezo César, crotones al ajo y Parmigiano Reggiano.' },
          { nombre: 'Ensalada caprese', precio: 255, desc: 'Jitomate, mozzarella, melón, balsámico y aceite de albahaca.' },
        ],
      },
      {
        titulo: 'Pizzas y pan artesanal',
        renglones: [
          { nombre: 'Pizza margherita', precio: 205, desc: 'Salsa pomodoro, mozzarella fresca, albahaca y aceite de oliva extra virgen.' },
          { nombre: 'Pizza de jamón serrano y arúgula', precio: 255, desc: 'Salsa pomodoro, jamón serrano, arúgula fresca, Parmigiano Reggiano y aceite de oliva extra virgen.' },
          { nombre: 'Focaccia de verano', precio: 235, desc: 'Focaccia recién horneada, mozzarella fresca, aguacate, pesto de albahaca, pesto de tomate, arúgula, jitomate saladet, pepino, albahaca fresca, mayonesa de la casa, chiles serranos toreados, aceite de oliva extra virgen y vinagre balsámico.' },
          { nombre: 'Medio baguette rústico', precio: 95, desc: 'Pan rústico recién horneado, con mantequilla.' },
        ],
      },
      {
        titulo: 'Sopas',
        renglones: [
          { nombre: 'Crema de jitomate', precio: 175, desc: 'Jitomate tatemado, asado y hervido. Romero. Crostone con pesto al momento.' },
          { nombre: 'Sopa de lenteja', precio: 120, desc: 'Lentejas, jitomate, zanahoria, jalapeño, orégano fresco y crostino gratinado con gouda.' },
          { nombre: 'Caldo de camarón', precio: 235, desc: 'Caldo de camarón (60 g) y chile guajillo, brandy, epazote, verduras de temporada y cilantro criollo.' },
        ],
      },
      {
        titulo: 'Agua embotellada',
        renglones: [
          { nombre: 'Topo Chico (355 ml)', precio: 65 },
          { nombre: 'Perrier (330 ml)', precio: 85 },
          { nombre: 'San Pellegrino (255 ml)', precio: 100 },
          { nombre: 'Agua de Piedra natural (650 ml)', precio: 185 },
          { nombre: 'Agua de Piedra mineral (650 ml)', precio: 195 },
        ],
      },
    ],
    notas: [
      'Los gramos son el peso promedio de la proteína antes de la cocción.',
      'El consumo de carnes, aves, mariscos o huevos crudos o poco cocidos puede aumentar el riesgo de enfermedades de origen alimentario.',
      'Vinos mexicanos por copa y coctelería de la casa: la copa de la casa (tinto o blanco, cambia cada día) cuesta $125; pregunta por los demás en tu mesa.',
    ],
  },
  {
    id: 'postres',
    nombre: 'Postres y sobremesa',
    horario: 'Con la comida y la cena.',
    version: 'Carta del 15 de enero de 2026',
    pdf: `${PDF}Menu-postres-Espanol-2026.pdf`,
    intro: 'Pide otra cuchara. Alguien va a querer probar.',
    secciones: [
      {
        titulo: 'Dolce',
        nota: 'Cada postre trae un maridaje sugerido de la sobremesa.',
        renglones: [
          { nombre: 'Pain perdu', precio: 215, desc: 'Pan brioche embebido en espresso, dorado con mantequilla, con salsa de maple y cardamomo, crumble de pistaches, pera horneada, higos y helado de vainilla. Maridaje: carajillo.' },
          { nombre: 'Molten chocolate cake', precio: 225, desc: 'Bizcocho tibio de chocolate con centro suave, helado de vainilla y frutos rojos en vinagreta de frambuesa y romero. Maridaje: Grand Marnier.' },
          { nombre: 'Berry-banana cake', precio: 195, desc: 'Bizcocho de plátano y blueberries con queso crema, zarzamora e higos frescos. Maridaje: Sambuca Nero.' },
          { nombre: 'Lemon-ricotta cheesecake', precio: 175, desc: 'Cheesecake de limón amarillo y requesón, con lemon curd (crema de limón), salsa de queso de cabra y flores amarillas. Maridaje: americano.' },
          { nombre: 'Buñuelo de guayaba', precio: 165, desc: 'Buñuelos crujientes con azúcar avainillado y canela, queso crema, blueberries y salsa de guayaba rosa. Maridaje: mezcal Amarás.' },
          { nombre: 'Texturas de piña colada', precio: 155, desc: 'Bizcocho de yogurt griego con nieve de piña, leche de coco y vinagreta de piña con hierbabuena. Maridaje: americano.' },
          { nombre: 'Flan mexicano', precio: 135, desc: 'Flan de queso, leche condensada "Lechera" y vainilla, con caramelo y frutos rojos. Maridaje: mezcal Xcaayú’si.' },
        ],
      },
      {
        titulo: 'Sobremesa',
        renglones: [
          { nombre: 'Carajillo', precio: 195, desc: 'Espresso y Licor 43.' },
          { nombre: 'Mezcal espadín Xcaayú’si', precio: 190 },
          { nombre: 'Mezcal espadín Amarás', precio: 220 },
          { nombre: 'Mezcal espadín Montelobos joven', precio: 240 },
          { nombre: 'Tequila Patrón reposado', precio: 265 },
          { nombre: 'Tequila Don Julio 70', precio: 295 },
          { nombre: 'Crema irlandesa Baileys', precio: 120 },
          { nombre: 'Frangelico (avellana)', precio: 130 },
          { nombre: 'Kahlúa', precio: 120 },
          { nombre: 'Chinchón, dulce o seco', precio: 110 },
          { nombre: 'Sambuca Nero', precio: 130 },
          { nombre: 'Licor 43', precio: 145 },
          { nombre: 'Grand Marnier', precio: 195 },
        ],
      },
      {
        titulo: 'Café y bebidas calientes',
        renglones: [
          { nombre: 'Espresso', precio: 60 },
          { nombre: 'Espresso doble', precio: 95 },
          { nombre: 'Americano', precio: 60 },
          { nombre: 'Americano descafeinado', precio: 55 },
          { nombre: 'Capuchino', precio: 85 },
          { nombre: 'Capuchino descafeinado', precio: 85 },
          { nombre: 'Café con leche', precio: 95 },
          { nombre: 'Chocolate artesanal mexicano', precio: 65 },
          { nombre: 'Infusiones: yerbabuena, lemongrass o manzanilla', precio: 65 },
        ],
      },
    ],
    notas: [],
  },
];

// ---------- "¿Más México o más Mediterráneo?" ----------
// Ingredientes que la carta de comida y cena nombra. La clasificación (qué es de México y qué del Mediterráneo) es
// nuestra, a partir de su frase "México y el Mediterráneo se encuentran en la mesa de HOUSE": pendiente de revisar con
// la chef. Cada platillo se coloca en la mesa según cuántos nombra de cada lado; se calcula con el texto de arriba.
export type Ingrediente = { nombre: string; re: RegExp };
export const deMexico: Ingrediente[] = [
  { nombre: 'plátano macho', re: /plátano macho/i },
  { nombre: 'chile cascabel', re: /cascabel/i },
  { nombre: 'piloncillo', re: /piloncillo/i },
  { nombre: 'chile guajillo', re: /guajillo/i },
  { nombre: 'chilhuacle, mulato y pasilla', re: /chilhuacle/i },
  { nombre: 'chile de árbol', re: /chile de árbol/i },
  { nombre: 'chile serrano', re: /chiles? serranos?/i },
  { nombre: 'chiles toreados', re: /toreados/i },
  { nombre: 'chile manzano', re: /manzano/i },
  { nombre: 'chile piquín', re: /piquín/i },
  { nombre: 'habanero', re: /habanero/i },
  { nombre: 'chipotle', re: /chipotle/i },
  { nombre: 'jalapeño', re: /jalapeño/i },
  { nombre: 'epazote', re: /epazote/i },
  { nombre: 'cilantro criollo', re: /cilantro criollo/i },
  { nombre: 'hoja de aguacate', re: /hoja de aguacate/i },
  { nombre: 'aguacate', re: /(?<!hoja de )aguacate|guacamole/i },
  { nombre: 'maíz azul', re: /maíz azul/i },
  { nombre: 'mole negro', re: /mole negro/i },
  { nombre: 'recados verde y negro', re: /recado/i },
  { nombre: 'pápalo', re: /pápalo/i },
  { nombre: 'queso Oaxaca', re: /Oaxaca/i },
  { nombre: 'queso fresco', re: /queso fresco/i },
  { nombre: 'verdolaga', re: /verdolaga/i },
  { nombre: 'tomatillo', re: /tomatillo/i },
  { nombre: 'vainilla mexicana', re: /vainilla mexicana/i },
  { nombre: 'soda de naranja mexicana', re: /soda de naranja/i },
  { nombre: 'aguachile', re: /aguachile/i },
  { nombre: 'elote (esquites)', re: /^Esquites$/i },
];
export const delMediterraneo: Ingrediente[] = [
  { nombre: 'queso de cabra', re: /queso de cabra/i },
  { nombre: 'aceite de oliva', re: /aceite de oliva/i },
  { nombre: 'limón amarillo', re: /limón amarillo|limón Meyer/i },
  { nombre: 'garbanzo y hummus', re: /hummus|garbanzo/i },
  { nombre: 'feta', re: /feta/i },
  { nombre: 'tzatziki', re: /tzatziki/i },
  { nombre: 'harissa', re: /harissa/i },
  { nombre: 'aceitunas', re: /aceitunas/i },
  { nombre: 'pecorino', re: /pecorino/i },
  { nombre: 'Parmigiano Reggiano', re: /Parmigiano/i },
  { nombre: 'jamón serrano', re: /jamón serrano/i },
  { nombre: 'mozzarella', re: /mozzarella/i },
  { nombre: 'ricotta', re: /ricotta/i },
  { nombre: 'risotto', re: /risotto/i },
  { nombre: 'pasta', re: /rigatoni|linguini|ravioles|^Pasta/i },
  { nombre: 'pomodoro', re: /pomodoro/i },
  { nombre: 'albahaca y pesto', re: /albahaca|pesto/i },
  { nombre: 'alcachofas', re: /alcachofas/i },
  { nombre: 'alcaparras', re: /alcaparras/i },
  { nombre: 'eneldo', re: /eneldo/i },
  { nombre: 'menta', re: /menta/i },
  { nombre: 'romero', re: /romero/i },
  { nombre: 'pepino persa', re: /pepino persa/i },
  { nombre: 'pan a la parrilla', re: /pan rústico a la parrilla|pan a la parrilla|focaccia|crostone|crostino|pangrattato/i },
  { nombre: 'arúgula', re: /arúgula/i },
  { nombre: 'balsámico', re: /balsámico/i },
  { nombre: 'comino y cardamomo', re: /cardamomo/i },
  { nombre: 'pistache y almendra', re: /pistache/i },
  { nombre: 'lenteja', re: /lenteja/i },
  { nombre: 'orégano', re: /orégano/i },
  { nombre: 'peperoncino', re: /peperoncino/i },
];

export type PlatoMesa = Renglon & { seccion: string; mx: string[]; med: string[]; lado: number };

/** Platillos de la carta de comida y cena que no nombran ingredientes de ningún lado (quedan fuera de la mesa). */
export function fueraDeLaMesa(): string[] {
  const dentro = new Set(platosDeLaMesa().map((p) => p.nombre));
  return menus.find((m) => m.id === 'comida')!.secciones
    .filter((s) => s.titulo !== 'Agua embotellada')
    .flatMap((s) => s.renglones.map((r) => r.nombre))
    .filter((n) => !dentro.has(n));
}

/** Platillos de la carta de comida y cena con al menos un ingrediente de un lado o del otro. */
export function platosDeLaMesa(): PlatoMesa[] {
  const comida = menus.find((m) => m.id === 'comida')!;
  const fuera = ['Agua embotellada'];
  const lista: PlatoMesa[] = [];
  for (const s of comida.secciones) {
    if (fuera.includes(s.titulo)) continue;
    for (const r of s.renglones) {
      const texto = r.desc ?? '';
      const prueba = (i: Ingrediente) => i.re.test(texto) || i.re.test(r.nombre);
      const mx = deMexico.filter(prueba).map((i) => i.nombre);
      const med = delMediterraneo.filter(prueba).map((i) => i.nombre);
      if (mx.length + med.length === 0) continue;
      // -1 = todo México, 0 = mitad y mitad, 1 = todo Mediterráneo.
      const lado = (med.length - mx.length) / (med.length + mx.length);
      lista.push({ ...r, seccion: s.titulo.replace('Principales: ', 'Principales, '), mx, med, lado });
    }
  }
  return lista.sort((a, b) => a.lado - b.lado || a.nombre.localeCompare(b.nombre));
}
