// Menú completo de Gran Familia, copiado de investigacion/crudo.json:
//   - "Mañana": https://www.lagranfamilia.mx/menu-desayuno.html ("Menú de Desayunos y Almuerzos Potosinos")
//   - "Tarde":  https://www.lagranfamilia.mx/menu-tarde.html ("Menú de Comida Corrida y Antojitos Potosinos")
// Nombres, descripciones y precios son los suyos. Cambios de forma: tipo oración, "c/" → "con", "pzas" → "piezas",
// "g" junto al número, y las notas crípticas explicadas (campo `nota`; las deducidas están en CAMBIOS.md como pendientes).
// "Ligero y saludable" del omelette de claras queda como "Ligero" (sin afirmaciones de salud).

export type Renglon = { n: string; d?: string; p?: string; nota?: string };
export type Seccion = { id: string; titulo: string; intro?: string; renglones: Renglon[]; opciones?: { titulo: string; lista: string[] }[]; nota?: string };
export type Menu = { id: 'manana' | 'tarde'; nombre: string; titulo: string; lema: string; secciones: Seccion[]; pie: string[] };

const p = (n: number) => `$${n.toLocaleString('es-MX', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2 })}`;

const especiales: Seccion = {
  id: 'fin-de-semana',
  titulo: 'Especiales de fin de semana',
  intro: 'Sábados y domingos, hasta agotar existencia.',
  renglones: [
    { n: 'Barbacoa de borrego', d: '1 kg', p: p(780) },
    { n: 'Taco de barbacoa', p: p(33) },
    { n: 'Menudo chico', p: p(116) },
    { n: 'Quesabirria', p: p(55) },
  ],
};

export const menus: Menu[] = [
  {
    id: 'manana',
    nombre: 'Mañana',
    titulo: 'Menú de desayunos y almuerzos potosinos',
    lema: 'Para empezar el día en San Luis Potosí',
    secciones: [
      {
        id: 'huevos', titulo: 'Huevos',
        renglones: [
          { n: 'Huevos Gran Familia', d: 'Dos huevos estrellados sobre nopal asado, con guiso de pimientos, calabacita y champiñones asados, acompañados de aguacate.', p: p(169) },
          { n: 'Rancheros', d: 'Huevos clásicos al estilo ranchero, acompañados de salsa de la casa.', p: p(115) },
          { n: 'Divorciados', d: 'Sobre cama de tortillas de la casa, bañados con tus salsas favoritas.', p: p(115) },
          { n: 'A la mexicana', d: 'Con picadito de jitomate, chile serrano y cebolla, recién salteados.', p: p(115) },
          { n: 'Estrellados o revueltos', d: 'Servidos con frijoles fritos y queso.', p: p(110) },
          { n: 'Huevos estilo Beto', d: 'Huevitos montados en tortilla frita con delicioso tocino.', p: p(149) },
          { n: 'Miguitas', d: 'Tradicionales del campo, con tortilla de maíz dorada y huevo revuelto.', p: p(115) },
        ],
      },
      {
        id: 'omelettes', titulo: 'Omelettes',
        renglones: [
          { n: 'Omelette', d: 'Esponjoso y al gusto, con 1 ingrediente.', p: p(139) },
          { n: 'Omelette de claras', d: 'Ligero, con 1 ingrediente.', p: p(149) },
        ],
        opciones: [{ titulo: 'Ingredientes a elegir', lista: ['Queso', 'Jamón', 'Espinaca', 'Acelga'] }],
        nota: 'Ingrediente extra: +$25.',
      },
      {
        id: 'chilaquiles', titulo: 'Chilaquiles',
        intro: 'Se arman en tres pasos. Paso 1, la base. Paso 2, agrega proteína: se suma al precio de la base. Paso 3, elige tu salsa.',
        renglones: [
          { n: 'Chilaquiles naturales', d: 'Totopos crujientes bañados en tu salsa favorita, con queso, crema y cebolla.', p: p(125) },
          { n: 'Cecina', d: '80 g', p: '+' + p(49) },
          { n: 'Pollo', d: '60 g', p: '+' + p(39) },
          { n: 'Jamón', d: '60 g', p: '+' + p(19) },
          { n: 'Huevos', d: '2 piezas', p: '+' + p(26) },
          { n: 'Tocino', d: '3 piezas', p: '+' + p(45) },
          { n: 'Chorizo', d: '60 g', p: '+' + p(26) },
        ],
        opciones: [{ titulo: 'Paso 3, elige tu salsa', lista: ['Verde (tomatillo)', 'Roja (jitomate)', 'Mole (dulce)', 'Cacahuate (cremosa)', 'Chipotle (picosita)', 'Suiza (cremosa)'] }],
      },
      {
        id: 'fruta', titulo: 'Fruta, jugos y licuados',
        renglones: [
          { n: 'Plato de fruta', d: 'Con yogurt, granola y miel de abeja. De papaya, piña, melón o mixto.', p: p(48) },
          { n: 'Jugo de naranja fresca', p: p(59) },
          { n: 'Jugos combinados', d: 'Betabel, verde o zanahoria.', p: p(49) },
          { n: 'Tropical, Paraíso o Mézclalo', d: 'Combinaciones de la casa: pregunta qué llevan.', p: p(59) },
          { n: 'Licuado de frutas', d: 'De 1 o 2 ingredientes.', p: p(45) },
          { n: 'Chocoplátano', p: p(45) },
        ],
        nota: 'Extra de granola o amaranto: +$7.',
      },
      {
        id: 'calientes', titulo: 'Bebidas calientes',
        renglones: [
          { n: 'Café de olla', d: 'Con refill.', p: p(39) },
          { n: 'Café americano', d: 'Con refill.', p: p(35) },
          { n: 'Café con leche', p: p(45) },
          { n: 'Capuchino o cortado', p: p(65) },
          { n: 'Chocolate caliente', p: p(52) },
          { n: 'Té', p: p(45) },
        ],
        nota: 'Con refill: te vuelven a llenar la taza sin costo.',
      },
      {
        id: 'dulces', titulo: 'Antojitos dulces',
        renglones: [
          { n: 'Desayuno americano', d: 'Waffle con tocino, papas y huevo estrellado.', p: p(199) },
          { n: 'Nutella & Fruit', d: 'Hotcakes o waffle con plátano y fresas, cubiertos con Nutella.', p: p(169) },
          { n: 'Oreo Lovers', d: 'Con nieve de Oreo, galleta triturada, chocolate y chocolate blanco.', p: p(159) },
          { n: 'Frutos rojos', p: p(159) },
          { n: 'Tradicionales', p: p(120) },
        ],
      },
      {
        id: 'antojitos-manana', titulo: 'Antojitos de la familia',
        renglones: [
          { n: 'Cecina a la plancha', d: 'Con ensalada, arroz y frijoles.', p: p(189) },
          { n: 'Entomatadas con cecina', d: 'Salsa de tomate, sin picante.', p: p(179) },
          { n: 'Enchiladas suizas', d: 'Salsa de tomatillo, crema y queso.', p: p(155) },
          { n: 'Molletes especiales', d: 'Con 80 g de deliciosa cecina.', p: p(129) },
          { n: 'Sincronizada', d: 'Natural o divorciada.', p: p(89) },
        ],
      },
      {
        id: 'infantil', titulo: 'Menú infantil',
        renglones: [
          { n: 'Cecina infantil', p: p(110) },
          { n: 'Club sándwich', p: p(160) },
          { n: 'Enfrijoladas', p: p(130) },
          { n: 'Quesadillas', p: p(90) },
          { n: 'Sándwich campestre', p: p(75) },
        ],
      },
      especiales,
    ],
    pie: ['Precios en MXN. Menú sujeto a cambios.', 'Bolillo extra: $9.50.'],
  },
  {
    id: 'tarde',
    nombre: 'Tarde',
    titulo: 'Menú de comida corrida y antojitos potosinos',
    lema: 'Sabor casero y tradición',
    secciones: [
      {
        id: 'corrida', titulo: 'Comida corrida del día',
        intro: 'Lunes a viernes, de 1:00 a 5:00 p.m.',
        renglones: [{ n: 'Comida corrida', d: 'Agua fresca, sopa del día, plato fuerte y postre.', p: p(150) }],
      },
      {
        id: 'entradas', titulo: 'Entradas',
        renglones: [
          { n: 'Carpaccio de betabel', d: 'Rodajas frescas de betabel con jitomate, cebolla y aguacate, con toque de ajonjolí tostado y vinagreta artesanal.', p: p(95) },
          { n: 'Ensalada primavera', d: 'Fresca mezcla de lechugas, frutas de temporada, arándanos, nuez y aderezo especial de la casa.', p: p(120) },
        ],
      },
      {
        id: 'mar', titulo: 'Del mar a tu mesa',
        renglones: [
          { n: 'Salmón al gusto', d: 'Acompañado de arroz y ensalada. A la mantequilla, al mojo de ajo o a las finas hierbas.', p: p(205) },
          { n: 'Camarones', d: '10 piezas, con arroz y ensalada. A la mantequilla, al mojo de ajo, a las finas hierbas, al chile de árbol o al chipotle.', p: p(155) },
          { n: 'Salmón en salsa chipotle', d: 'Sobre espejo de salsa, con 4 camarones, arroz y ensalada.', p: p(251) },
          { n: 'Filete de pescado relleno', d: 'Relleno de jamón y queso, bañado en salsa chipotle.', p: p(180) },
          { n: 'Filete de pescado', d: 'Empanizado, a la plancha, a la mantequilla, al mojo de ajo, a las finas hierbas, al chipotle o al chile de árbol.', p: p(160) },
        ],
      },
      {
        id: 'fuertes', titulo: 'Platos fuertes',
        renglones: [
          { n: 'Milanesa de pollo empanizada', d: 'Con ensalada, arroz y frijoles.', p: p(160) },
          { n: 'Pechuga de pollo a la plancha', d: 'Con ensalada, arroz y frijoles.', p: p(160) },
          { n: 'Cecina a la plancha', d: 'Con cebolla asada, serranos, ensalada, arroz y frijoles.', p: p(189) },
          { n: 'Pechuga de pollo rellena', d: 'De jamón y queso. Con ensalada, arroz y frijoles.', p: p(180) },
        ],
      },
      {
        id: 'antojitos-tarde', titulo: 'Antojitos de la familia',
        renglones: [
          { n: 'Chilaquiles sencillos', d: 'Arma los tuyos: en salsa verde, roja, mole, cacahuate, chipotle o suiza.', p: p(110) },
          { n: 'Extra de cecina', p: '+' + p(59) },
          { n: 'Extra de pollo', p: '+' + p(49) },
          { n: 'Extra de jamón', p: '+' + p(29) },
          { n: 'Extra de huevos', p: '+' + p(36) },
          { n: 'Enchiladas suizas o rellenas', p: p(155) },
          { n: 'Flautas', d: '4 piezas, de pollo o de papa.', p: p(120) },
          { n: 'Pozole rojo', d: 'De pollo o de cerdo.', p: p(120) },
          { n: 'Tacos rojos de queso', p: p(120) },
          { n: 'Tacos rojos de pollo', p: p(155) },
          { n: 'Chalupas de pollo', d: '4 piezas.', p: p(120) },
          { n: 'Club sándwich', p: p(160) },
        ],
        nota: 'Los tacos rojos cambian de precio según el relleno: de queso o de pollo.',
      },
      especiales,
      {
        id: 'postres', titulo: 'Postres de la casa',
        renglones: [
          { n: 'Pan de la casa', d: 'Rebanada.', p: p(39) },
          { n: 'Panqué completo', p: p(180) },
          { n: 'Pay de limón o de zarzamora', p: p(65) },
          { n: 'Gelatina', p: p(30) },
          { n: 'Flan', p: p(35) },
        ],
      },
      {
        id: 'bebidas', titulo: 'Bebidas y micheladas',
        renglones: [
          { n: 'Cerveza Corona o Victoria', p: p(45) },
          { n: 'Cerveza Modelo o Negra', p: p(53) },
          { n: 'Michelada: preparado', d: 'Se suma al precio de la cerveza.', p: '+' + p(25) },
          { n: 'Michelada: con Clamato', d: 'Se suma al precio de la cerveza.', p: '+' + p(30) },
          { n: 'Agua de sabor', p: p(35) },
          { n: 'Limonada o naranjada', p: p(49) },
          { n: 'Jarra de agua', p: p(140) },
          { n: 'Jarra de limonada', p: p(155) },
        ],
      },
    ],
    pie: ['Empaque para llevar: +$15.', 'Precios en MXN. Menú sujeto a cambios.'],
  },
];
