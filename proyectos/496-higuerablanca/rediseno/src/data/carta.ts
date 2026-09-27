// La carta de Higuera Blanca, transcrita de su PDF https://higuerablanca.com.mx/assets/menu/MENU.pdf (8 páginas,
// título interno "Menu Boca 2025"), leído con curl el 2026-09-26. El texto del PDF está en curvas, así que se leyó
// de la imagen de cada página. Se pasó de MAYÚSCULAS a tipo oración y se corrigieron erratas: "Dobunnet" (Dubonnet),
// "Late" (latte), "Chartreusse" (Chartreuse), "Kalhúa" (Kahlúa), "Express" (exprés), "grs." y "gr." (g), "pzas." (piezas).
// Las medidas y los precios son los del PDF. Los asteriscos (*) de la rebanada de robalo, los robalitos y el lomo de
// negrillo no tienen nota en la carta: se quitaron (ver CAMBIOS.md → pendientes).
// Renglones deducidos (marcados con `deducido`): en el PDF, las líneas "Al mojo de ajo, enchipotlada y ajillo" y
// "Empapelada al horno, enchilpayada y habanera" van debajo de "Mojarra frita"; "Empanizado" debajo de "Filete de
// pescado"; "(A la mexicana, enchipotlada…)" debajo de "Hueva de lisa frita". Se escribieron como mojarra, filete y hueva.
// `prep`: preparaciones de "¿Cómo lo quieres?" en las que viene cada platillo, según el texto de la carta.

export type Prep = 'chipotle' | 'mojo' | 'ajillo' | 'chilpaya' | 'habanera' | 'chilelimon' | 'empapelado' | 'acuyo' | 'veracruzana' | 'sal';

export type Platillo = {
  n: string;
  /** Opciones o qué lleva, como lo escribe la carta. */
  d?: string;
  /** Medida: gramos, mililitros o piezas. */
  m?: string;
  /** Precio en pesos; 'temporada' = "Por temporada". */
  p: number | 'temporada';
  /** El precio es por cada 100 g. */
  por100?: boolean;
  prep?: Prep[];
  deducido?: boolean;
  /** Nota nuestra que explica algo del renglón (declarada en CAMBIOS.md). */
  nota?: string;
};
export type Seccion = { titulo: string; platillos: Platillo[]; nota?: string };
export type Categoria = { id: string; pestana: string; secciones: Seccion[] };

export const carta: Categoria[] = [
  {
    id: 'entradas', pestana: 'Entradas',
    secciones: [
      {
        titulo: 'Entradas frías',
        platillos: [
          { n: 'Peto al apio', m: '180 g', p: 220 },
          { n: 'Aguachile de camarón', m: '200 g', p: 290 },
          { n: 'Rollo de salmón o atún', m: '220 g', p: 340 },
          { n: 'Ceviche de pescado', d: 'Tradicional o rasurado', m: '160 g', p: 220 },
          { n: 'Ceviche de salmón', m: '160 g', p: 340 },
          { n: 'Ceviche mixto negro', m: '230 g', p: 380 },
          { n: 'Tostada de atún', m: '1 pieza', p: 95 },
          { n: 'Carpaccio', d: 'Salmón, pulpo o atún', m: '130 g', p: 298 },
          { n: 'Ensalada Michelle', d: 'Mariscos y pico de gallo con mayonesa', m: '300 g', p: 460 },
          { n: 'Ensalada de mariscos', d: 'Para compartir, con pico de gallo', m: '300 g', p: 460 },
          { n: 'Ensalada rasurada', d: 'Camarón, pulpo o caracol', m: '300 g', p: 460 },
          { n: 'Ensalada de abulón', m: '180 g', p: 460 },
          { n: 'Camarón para pelar', d: 'Cola', m: '280 g', p: 320 },
          { n: 'Manos de cangrejo', p: 'temporada' },
          { n: 'Sashimi de atún', m: '130 g', p: 340 },
          { n: 'Sashimi de salmón', m: '130 g', p: 340 },
        ],
      },
      {
        titulo: 'Entradas calientes',
        platillos: [
          { n: 'Tacos', d: 'Jaiba, camarón, pulpo o pescado a la talla', m: '4 piezas', p: 270 },
          { n: 'Jaibas suaves', d: 'Empanizadas o en chilpaya', m: '3 piezas', p: 285, prep: ['chilpaya'] },
          { n: 'Minilla de pescado', m: '250 g', p: 220 },
          { n: 'Empanadas', d: 'De minilla o de hueva', m: '4 piezas', p: 220 },
          { n: 'Picadas', d: 'De hueva o de camarón', m: '4 piezas', p: 220 },
          { n: 'Crema de langostino', m: '300 ml', p: 170 },
          { n: 'Dobladas de jaiba a la Malpica', d: 'En salsa chilpaya', m: '4 piezas', p: 320, prep: ['chilpaya'] },
          { n: 'Paella de mariscos', m: '350 g', p: 490 },
          { n: 'Taco de jaiba crujiente', m: '1 pieza', p: 160 },
          { n: 'Carnitas de atún', m: '130 g', p: 340 },
        ],
      },
    ],
  },
  {
    id: 'cocteles', pestana: 'Cocteles',
    secciones: [
      {
        titulo: 'Cocteles',
        platillos: [
          { n: 'Coctel chico', m: '65 g', p: 130 },
          { n: 'Coctel mediano', d: 'Camarón, pulpo, ostión, jaiba o caracol', m: '120 g', p: 220 },
          { n: 'Campechana', d: 'Dos mariscos', m: '120 g', p: 220 },
          { n: 'Marinera', d: 'Dos mariscos', m: '140 g', p: 250 },
          { n: 'Vuelve a la vida', d: 'Varios mariscos', m: '180 g', p: 280 },
          { n: 'Vuelve a la vida marinera', d: 'Varios mariscos', m: '180 g', p: 280 },
        ],
      },
    ],
  },
  {
    id: 'caldos', pestana: 'Chilpachole y caldos',
    secciones: [
      {
        titulo: 'Chilpachole',
        nota: 'Chico, mediano o grande: la carta da la medida de cada uno en mililitros.',
        platillos: [
          { n: 'Chilpachole chico de camarón', d: 'Cola', m: '95 ml', p: 165 },
          { n: 'Chilpachole mediano de camarón', d: 'Cola', m: '220 ml', p: 235 },
          { n: 'Chilpachole grande de camarón', d: 'Cola', m: '350 ml', p: 340 },
          { n: 'Chilpachole mediano de camarón', d: 'Entero', m: '220 ml', p: 235 },
          { n: 'Chilpachole grande de camarón', d: 'Entero', m: '350 ml', p: 340 },
          { n: 'Chilpachole chico de jaiba', d: 'Pulpa', m: '95 ml', p: 165 },
          { n: 'Chilpachole mediano de jaiba', d: 'Pulpa', m: '220 ml', p: 265 },
          { n: 'Chilpachole grande de jaiba', d: 'Pulpa', m: '350 ml', p: 345 },
        ],
      },
      {
        titulo: 'Caldos',
        platillos: [
          { n: 'Mediano de robalo', m: '175 ml', p: 230 },
          { n: 'Grande de robalo', d: 'Cabeza, ventrecha o cola', m: '350 ml', p: 320 },
          { n: 'Grande de robalo', d: 'Rebanada', m: '350 ml', p: 520 },
          { n: 'Chico de camarón', d: 'Cola', m: '95 ml', p: 165 },
          { n: 'Mediano de camarón', d: 'Cola', m: '220 ml', p: 235 },
          { n: 'Grande de camarón', d: 'Cola', m: '350 ml', p: 340 },
          { n: 'Mediano de camarón', d: 'Entero', m: '220 ml', p: 235 },
          { n: 'Grande de camarón', d: 'Entero', m: '350 ml', p: 340 },
          { n: 'De acamayas', p: 'temporada' },
          { n: 'Caldo de robalo con camarón', p: 580 },
          { n: 'Sopa mediana de mariscos', m: '220 ml', p: 320 },
          { n: 'Sopa grande de mariscos', m: '350 ml', p: 420 },
        ],
      },
    ],
  },
  {
    id: 'mariscos', pestana: 'Mariscos',
    secciones: [
      {
        titulo: 'Mariscos',
        platillos: [
          { n: 'Tentáculos de pulpo', d: 'A la parrilla o al chimichurri', m: '300 g', p: 520 },
          { n: 'Tentáculos de pulpo', d: 'A la parrilla, enchipotlados', m: '300 g', p: 520, prep: ['chipotle'] },
          { n: 'Pulpos', d: 'Encebollados, enchipotlados, en chilpaya o a la gallega', m: '180 g', p: 380, prep: ['chipotle', 'chilpaya'] },
          { n: 'Caracol', d: 'Enchipotlado o al ajillo', m: '180 g', p: 360, prep: ['chipotle', 'ajillo'] },
          { n: 'Caracol y pulpo', d: 'Enchipotlado', m: '180 g', p: 420, prep: ['chipotle'] },
          { n: 'Mariscos mixtos', d: 'Enchipotlados, en salsa habanera o enchilpayados', m: '200 g', p: 430, prep: ['chipotle', 'habanera', 'chilpaya'] },
          { n: 'Ostiones', d: 'A la pimienta o enchilpayados', m: '180 g', p: 320, prep: ['chilpaya'] },
          { n: 'Torta de mariscos', m: '200 g', p: 380 },
          { n: 'Pasta con mariscos', d: 'Pomodoro, enchilpayada o al pesto', m: '300 g', p: 460, prep: ['chilpaya'] },
          { n: 'Pasta con mejillones', m: '200 g', p: 380 },
          { n: 'Plátano relleno de mariscos', m: '180 g', p: 395 },
          { n: 'Arroz a la tumbada', m: '320 g', p: 480 },
        ],
      },
    ],
  },
  {
    id: 'pescados', pestana: 'Especialidades y pescados',
    secciones: [
      {
        titulo: 'Especialidades',
        platillos: [
          { n: 'Acamayas al gusto', m: '½ kg', p: 'temporada' },
          { n: 'Acamayas', d: 'Enchipotladas, al mojo de ajo, al chile-limón, en salsa habanera, al chipotle o al ajillo', m: '1 kg', p: 'temporada', prep: ['chipotle', 'mojo', 'chilelimon', 'habanera', 'ajillo'] },
          { n: 'Langostinos al gusto', m: '½ kg', p: 'temporada' },
          { n: 'Langostinos al gusto', m: '1 kg', p: 'temporada' },
          { n: 'Salmón a la parrilla', m: '280 g', p: 395 },
          { n: 'Salmón', d: 'En salsa chutney o en costra de almendra', m: '280 g', p: 430 },
          { n: 'Atún', d: 'En salsa teriyaki o en costra de sésamo', m: '280 g', p: 380 },
          { n: 'Cola de langosta a la mantequilla', p: 310, por100: true },
        ],
      },
      {
        titulo: 'Pescados',
        platillos: [
          { n: 'Pámpano', d: 'A la sal, empapelado al horno o al acuyo al horno. De 600, 700, 800, 900 o 1,000 g', p: 95, por100: true, prep: ['sal', 'empapelado', 'acuyo'], nota: 'Un pámpano de 600 g sale en $570.' },
          { n: 'Mojarra frita', m: '500 g', p: 260 },
          { n: 'Mojarra al mojo de ajo, enchipotlada o al ajillo', m: '500 g', p: 295, prep: ['mojo', 'chipotle', 'ajillo'], deducido: true },
          { n: 'Mojarra empapelada al horno, enchilpayada o en salsa habanera', m: '500 g', p: 340, prep: ['empapelado', 'chilpaya', 'habanera'], deducido: true },
          { n: 'Filete de pescado relleno de mariscos al horno', m: '180 g', p: 380 },
          { n: 'Filete de pescado empanizado', m: '180 g', p: 260, deducido: true },
          { n: 'Rebanada de robalo', d: 'De 350, 400 o 500 g', p: 160, por100: true, nota: 'Una rebanada de 350 g sale en $560.' },
          { n: 'Mignonett de robalo al acuyo', p: 85, por100: true, prep: ['acuyo'] },
          { n: 'Robalito entero', d: 'De 600, 800 o 1,000 g', p: 85, por100: true },
          { n: 'Robalito en lomos culichi', d: 'De 600, 800 o 1,000 g', p: 95, por100: true },
          { n: 'Lomo de negrillo a la plancha', m: '350 g', p: 560 },
          { n: 'Lomo de negrillo', d: 'Al mojo de ajo, en salsa habanera, al ajillo, a la veracruzana, enchilpayado o enchipotlado; o al horno: empapelado, al chile-limón o al acuyo', m: '350 g', p: 580, prep: ['mojo', 'habanera', 'ajillo', 'veracruzana', 'chilpaya', 'chipotle', 'empapelado', 'chilelimon', 'acuyo'] },
        ],
      },
    ],
  },
  {
    id: 'camarones', pestana: 'Camarones, huevas y carnes',
    secciones: [
      {
        titulo: 'Camarones',
        platillos: [
          { n: 'Camarones pelados o enteros', d: 'Enchipotlados, al mojo de ajo, en salsa de chipotle, empanizados, al ajillo, al tamarindo, a la mantequilla, al chile-limón, al coco, en salsa habanera, mignon o arrecife', m: '200 g', p: 360, prep: ['chipotle', 'mojo', 'ajillo', 'chilelimon', 'habanera'] },
          { n: 'Camarones Don Tony', m: '220 g', p: 380 },
          { n: 'Frijoles con camarón al ajillo', m: '180 g', p: 250, prep: ['ajillo'] },
          { n: 'Camarones jumbo al gusto', m: '½ kg', p: 850 },
          { n: 'Camarones jumbo al gusto', m: '1 kg', p: 1500 },
        ],
      },
      {
        titulo: 'Huevas',
        platillos: [
          { n: 'Hueva de lisa frita', m: '200 g', p: 260 },
          { n: 'Hueva de lisa a la mexicana, enchipotlada, al mojo de ajo o al ajillo', m: '200 g', p: 295, prep: ['chipotle', 'mojo', 'ajillo'], deducido: true },
          { n: 'Hueva de naca frita', p: 280 },
          { n: 'Hueva de naca', d: 'Enchipotlada, al mojo de ajo, en salsa verde, en salsa habanera o enchilpayada', m: '180 g', p: 295, prep: ['chipotle', 'mojo', 'habanera', 'chilpaya'] },
        ],
      },
      {
        titulo: 'Carnes',
        platillos: [
          { n: 'Arrachera', m: '350 g', p: 380 },
          { n: 'Tacos de arrachera gratinados', m: '4 piezas', p: 260 },
        ],
      },
    ],
  },
  {
    id: 'extras', pestana: 'Extras',
    secciones: [
      {
        titulo: 'Extras',
        platillos: [
          { n: 'Longaniza frita de la casa', p: 110 },
          { n: 'Frijoles con longaniza', p: 170 },
          { n: 'Frijoles refritos', p: 65 },
          { n: 'Frijoles con plátano', p: 85 },
          { n: 'Arroz blanco', p: 60 },
          { n: 'Arroz con plátanos', p: 75 },
          { n: 'Arroz con camarón', p: 220 },
          { n: 'Plátanos fritos', p: 60 },
          { n: 'Salseo extra', p: 65, nota: 'Porción extra de salsa.' },
          { n: 'Moros con cristianos', p: 120 },
          { n: 'Guacamole', p: 80 },
          { n: 'Orden de aguacate', p: 60 },
          { n: 'Puré de papa', p: 65 },
        ],
      },
    ],
  },
  {
    id: 'postres', pestana: 'Postres',
    secciones: [
      {
        titulo: 'Postres',
        platillos: [
          { n: 'Crème brûlée', m: '120 g', p: 120 },
          { n: 'Gelatina de café con helado', m: '100 g', p: 120 },
          { n: 'Flan napolitano de la casa', m: '120 g', p: 98 },
          { n: 'Plátanos flameados de la casa', m: '280 g', p: 140 },
          { n: 'Plátanos horneados de la casa', m: '280 g', p: 160 },
          { n: 'Plátanos fritos', d: 'Con crema y queso', m: '280 g', p: 120 },
          { n: 'Helado Holanda', d: 'Chocolate o vainilla', p: 98 },
          { n: 'Fresas al oporto', m: '200 g', p: 110 },
          { n: 'Duraznos', d: 'Con crema o con rompope', p: 110 },
          { n: 'Volcán de chocolate', d: 'Con helado', m: '200 g', p: 130 },
          { n: 'Volcán de dulce de leche', d: 'Con helado', m: '200 g', p: 130 },
          { n: 'Torta de elote', d: 'Con helado', m: '150 g', p: 120 },
          { n: 'Empanada de arroz con leche', d: 'Con helado de vainilla', m: '1 pieza', p: 95 },
          { n: 'Buñuelos veracruzanos', d: 'Con helado de vainilla', m: '1 pieza', p: 120 },
          { n: 'Strudel de manzana', d: 'Con helado de vainilla', m: '280 g', p: 130 },
          { n: 'Pastel de la casa', d: 'Rebanada', p: 95 },
        ],
      },
    ],
  },
  {
    id: 'bebidas', pestana: 'Bebidas',
    secciones: [
      {
        titulo: 'Cervezas',
        platillos: [
          { n: 'Victoria', m: '355 ml', p: 70 },
          { n: 'Pacífico', m: '355 ml', p: 70 },
          { n: 'Corona', m: '355 ml', p: 70 },
          { n: 'Montejo', m: '355 ml', p: 70 },
          { n: 'XX Lager clara', m: '355 ml', p: 70 },
          { n: 'Heineken 0.0', m: '250 ml', p: 70 },
          { n: 'Negra Modelo', m: '355 ml', p: 75 },
          { n: 'Modelo Especial', m: '355 ml', p: 75 },
          { n: 'Michelob Ultra', m: '355 ml', p: 75 },
          { n: 'Heineken', m: '355 ml', p: 75 },
          { n: 'XX Ultra', m: '355 ml', p: 75 },
          { n: 'Stella Artois', m: '355 ml', p: 85 },
          { n: 'Marea Alta (artesanal)', m: '355 ml', p: 85 },
          { n: 'Corteza de Bronce (artesanal)', m: '355 ml', p: 85 },
          { n: 'Chelada', d: 'Cerveza con limón y sal', p: 110 },
          { n: 'Michelada', d: 'Cerveza con limón, sal y salsas', p: 115 },
          { n: 'Clamato', d: 'Michelada con Clamato', p: 130 },
          { n: 'Con marisco', p: 215, nota: 'Así viene en la carta, junto a las cervezas preparadas; pregunta qué lleva al reservar.' },
        ],
      },
      {
        titulo: 'Sin alcohol',
        platillos: [
          { n: 'Refrescos', d: 'Coca-Cola, Coca-Cola light, Delaware Punch, Fanta, Fresca, Sidral Mundet o agua mineral', m: '355 ml', p: 50 },
          { n: 'Refresco chico', d: 'Coca-Cola o agua mineral', p: 30 },
          { n: 'Agua preparada', d: 'Jamaica, maracuyá, horchata, naranjada o limonada', m: '325 ml', p: 60 },
          { n: 'Media jarra preparada', d: 'Los mismos sabores', p: 110 },
          { n: 'Jarra preparada', d: 'Los mismos sabores', m: '1.2 l', p: 195 },
          { n: 'Jugo de naranja', m: '250 ml', p: 70 },
          { n: 'Agua natural', m: '355 ml', p: 55 },
          { n: 'Perrier', m: '330 ml', p: 75 },
          { n: 'Topo Chico', m: '355 ml', p: 65 },
        ],
      },
      {
        titulo: 'Café',
        platillos: [
          { n: 'Café americano', p: 55 },
          { n: 'Café exprés', p: 55 },
          { n: 'Exprés cortado', p: 65 },
          { n: 'Exprés doble', p: 100 },
          { n: 'Café latte', p: 70 },
          { n: 'Lechero', p: 80 },
          { n: 'Capuchino', p: 85 },
          { n: 'Café irlandés', p: 185 },
          { n: 'Té', d: 'Sabores a elegir', p: 45 },
        ],
      },
      {
        titulo: 'Aperitivos y digestivos',
        platillos: [
          { n: 'Dubonnet', p: 90 },
          { n: 'Martini', p: 120 },
          { n: 'Tío Pepe', p: 140 },
          { n: 'Torito de cacahuate o de maracuyá', p: 90 },
          { n: 'Kahlúa', p: 100 },
          { n: 'Cinzano', p: 120 },
          { n: 'Licor 43', p: 125 },
          { n: 'Baileys', p: 125 },
          { n: 'Amaretto', p: 125 },
          { n: 'Frangelico', p: 125 },
          { n: 'Orujo', p: 125 },
          { n: 'Sambuca negro', p: 130 },
          { n: 'Sambuca blanco', p: 130 },
          { n: 'Anís Cadenas', p: 130 },
          { n: 'Anís Asturiana', p: 130 },
          { n: 'Strega', p: 160 },
          { n: 'Chartreuse verde', p: 165 },
          { n: 'Chartreuse amarillo', p: 165 },
          { n: 'Carajillo', p: 170 },
        ],
      },
    ],
  },
];
