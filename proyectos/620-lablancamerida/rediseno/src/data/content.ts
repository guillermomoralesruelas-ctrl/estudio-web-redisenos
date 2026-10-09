// Contenido de La Blanca Mérida, tomado de investigacion/crudo.json (inicio y contacto) y del sitio en vivo (2026-10-09).
// Nada inventado. Su sitio arrastra textos de una plantilla en inglés (Londres, París, estrella Michelin, chefs
// "William Joe" y "Lily Scope", "150+ Daily Orders"): no se usan. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'La Blanca Mérida',
  direccion: 'Plaza del Peñón 104, Parque Manzanares',
  cp: '37510 León de los Aldama, Gto.',
  telefono: '477 121 4234',
  telefonoHref: 'tel:+524771214234',
  email: 'admin@lablancamerida.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=La+Blanca+M%C3%A9rida+Plaza+del+Pe%C3%B1%C3%B3n+104+Le%C3%B3n+Guanajuato',
  facebook: 'https://www.facebook.com/LaBlancaMeridaLeon',
  instagram: 'https://www.instagram.com/lablancamerida',
  historia: 'La Blanca Mérida nace del deseo de ofrecer comida yucateca auténtica, preparada con recetas tradicionales e ingredientes de calidad, para compartir el sabor, la historia y la hospitalidad de Mérida con cada uno de ustedes.',
};

// Abre de martes a domingo, de 2:00 pm a 10:00 pm (0 = domingo … 6 = sábado). Lunes cerrado.
export const horario = { dias: [0, 2, 3, 4, 5, 6], abre: 14, cierra: 22, texto: 'Martes a domingo, 2:00 pm a 10:00 pm' };

export const top3 = [
  { nombre: 'Panuchos', foto: 'panucho', alt: 'Panucho con cochinita, lechuga y cebolla morada' },
  { nombre: 'Sopa de Lima', foto: '', alt: '' },
  { nombre: 'Longaniza de Valladolid', foto: 'longaniza', alt: 'Longaniza de Valladolid asada con salsas al fondo' },
];

export const cochinita = 'La Cochinita Pibil es una deliciosa carne de cerdo seleccionada, marinada pacientemente en un recado rojo de achiote y el toque vibrante de la naranja agria de nuestra tierra. Envuelta en hojas de plátano y cocinada a fuego lento hasta que se deshace al primer contacto, nuestra cochinita honra la tradición milenaria del Pib. Servida con sus inseparables cebollitas moradas curtidas y el picante justo del chile habanero. Es más que una receta, es un legado.';

export type Platillo = { id: string; nombre: string; precio: number; texto?: string; foto?: string; alt?: string; grupo: 'platillos' | 'bebidas' | 'postres' };
export const carta: Platillo[] = [
  { id: 'sopa', grupo: 'platillos', nombre: 'Sopa de Lima', precio: 95, texto: 'Uno de los platillos más representativos de Yucatán, deliciosa fusión de consomé de pollo con jugo de lima agria, servida con pollo deshebrado y tiras de maíz.' },
  { id: 'empanadas', grupo: 'platillos', nombre: 'Empanadas Clásicas', precio: 110, texto: 'Empanadas (3) rellenas de carne molida o chaya con queso de bola (Edam holandés).', foto: 'empanadas', alt: 'Empanadas doradas en plato de barro con salsas' },
  { id: 'taco', grupo: 'platillos', nombre: 'Taco de Cochinita Pibil', precio: 40, texto: 'Carne de cerdo marinada en achiote horneada en hojas de plátano.', foto: 'tacos-cochinita', alt: 'Tacos de cochinita con cebolla morada y agua de jamaica sobre mesa de madera' },
  { id: 'vaporcitos', grupo: 'platillos', nombre: 'Vaporcitos de Pollo', precio: 45, texto: 'Masa delgada, rellenos de pollo y envueltos en hojas de plátano, cocidos al vapor y bañados con una salsa de jitomate.' },
  { id: 'panucho', grupo: 'platillos', nombre: 'Panucho', precio: 35, texto: 'De cochinita pibil, pollo o huevo. Tortilla de maíz hecha a mano rellena de frijol, con cochinita, pollo o huevo y cebolla morada.', foto: 'panucho', alt: 'Panucho con cochinita, lechuga y cebolla morada' },
  { id: 'salbute', grupo: 'platillos', nombre: 'Salbutes', precio: 35, texto: 'De cochinita pibil, pollo o huevo, con cebolla morada y salsa picante hecha a base de chile habanero.', foto: 'salbutes', alt: 'Dos salbutes con lechuga y cebolla morada en plato de barro' },
  { id: 'torta', grupo: 'platillos', nombre: 'Torta de Cochinita', precio: 50, texto: 'Deliciosa torta de cochinita pibil con bolillo del día.' },
  { id: 'orden', grupo: 'platillos', nombre: 'Orden de 3 Tacos', precio: 120, texto: 'Tres tacos de cochinita pibil, carne de cerdo marinada en achiote horneada en hojas de plátano.' },
  { id: 'vaso', grupo: 'bebidas', nombre: 'Agua artesanal, vaso', precio: 40, texto: 'Chaya, horchata o jamaica.', foto: 'agua-chaya', alt: 'Vaso de agua de chaya junto a una jarra de barro' },
  { id: 'litro', grupo: 'bebidas', nombre: 'Agua artesanal, 1 litro', precio: 90, texto: 'Chaya, horchata o jamaica.' },
  { id: 'dos', grupo: 'bebidas', nombre: 'Agua artesanal, 2 litros', precio: 130, texto: 'Chaya, horchata o jamaica.' },
  { id: 'cafe', grupo: 'bebidas', nombre: 'Café', precio: 40 },
  { id: 'capuchino', grupo: 'bebidas', nombre: 'Capuchino', precio: 75 },
  { id: 'botella', grupo: 'bebidas', nombre: 'Agua embotellada', precio: 30 },
  { id: 'malteada', grupo: 'bebidas', nombre: 'Malteada', precio: 95, foto: 'malteada', alt: 'Malteada de chocolate con crema y cereza' },
  { id: 'chocolate', grupo: 'bebidas', nombre: 'Chocolate Artesanal', precio: 60, texto: 'Originario de Yucatán, hecho en batidor tradicional y servido en jícara.' },
  { id: 'refresco', grupo: 'bebidas', nombre: 'Refresco', precio: 40 },
  { id: 'helado', grupo: 'postres', nombre: 'Helado de queso de bola', precio: 80, texto: 'Clásico helado de queso de bola.' },
  { id: 'bolita', grupo: 'postres', nombre: 'Bolita de queso', precio: 35, texto: 'Bolita hojaldrada rellena de queso crema.' },
];
export const marquesitas = 'Marquesitas: pregunta por nuestro menú.';

// Promociones solo de martes a jueves.
export const diasPromo = [2, 3, 4];
export const promos = [
  { id: 'tacos', nombre: '3 x 2 en tacos de cochinita', precio: 80, detalle: '3 tacos por $80' },
  { id: 'tortas', nombre: '2 tortas de cochinita', precio: 80, detalle: '2 tortas por $80' },
  { id: 'salbutes', nombre: '2 salbutes + vaso de agua o refresco', precio: 85, detalle: '2 salbutes y una bebida por $85' },
];

export const resenas = [
  { nombre: 'Lorena Robles', texto: 'Toda su comida es auténtica. La atención es excelente y además sus dueños son super amables. Sus instalaciones son limpias y muy bonitas. Y lo principal: te hacen sentir que estás en un pedacito de Mérida.' },
  { nombre: 'Aurora', texto: 'La comida es rica, las porciones son adecuadas, el servicio es rápido y son muy cordiales.' },
  { nombre: 'Veronica Martinez', texto: 'Es delicioso, pienso probar cada uno de sus platillos, el precio accesible y la atención muy buena.' },
  { nombre: 'Angel Ortiz', texto: 'Probamos la cochinita, muy rica y buen servicio. Gracias.' },
  { nombre: 'Estephany Araiza', texto: '¡Muy buen sabor y atención! Muy recomendados.' },
];

export const porQue = [
  'Platos frescos, elaborados por el chef cada día.',
  'Ambiente acogedor y ameno, como en Mérida.',
  'Servicio amable y rápido.',
  'Reservas flexibles para grupos de todos los tamaños.',
];
