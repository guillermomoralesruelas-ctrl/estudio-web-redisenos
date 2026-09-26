// Contenido de El Farallón de Tepic (Zapopan, Jalisco).
// Textos copiados de investigacion/crudo.json (elfarallondetepic.mx: inicio, /historia, /menus, /gallery y /contact,
// 2026-09-26). No se tomó ningún texto de otras páginas: todo está en crudo.json. El menú completo está en menu.json.
// Erratas corregidas: "80´s" y "80's" por "80"; "desee hace" por "desde hace"; "camarónes" por "camarones";
// nombres en mayúsculas raras ("gERARDO sANTOYO V.", "eL FARALLÓN") escritos normal.
// Lo nuevo (títulos, botones, mensajes de WhatsApp y textos de la báscula) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;
export const foto = f;

/** El sitio no publica WhatsApp: se usa el primer teléfono (33 3121 2616). Pendiente de confirmar (CAMBIOS.md). */
export const WA = '523331212616';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, me comunico desde su sitio web.';

export const negocio = {
  nombre: 'El Farallón de Tepic',
  lema: 'Excelencia y tradición en mariscos',
  frase: 'Sirviendo los mejores mariscos desde hace 50 años',
  pie: 'Sirviendo lo mejor desde hace 50 años',
  desde: 1975,
  direccion: {
    calle: 'Av. Niño Obrero 560',
    colonia: 'Fraccionamiento Camino Real',
    cp: '45040',
    ciudad: 'Zapopan, Jalisco',
    zona: 'la tradicional zona de Chapalita',
  },
  horario: 'Abierto todos los días de 12:00 a 18:00',
  horarioCorto: 'Todos los días, 12:00 a 18:00',
  domicilio: 'Contamos con servicio a domicilio',
  telefonos: [
    { visible: '33 3121 2616', href: 'tel:+523331212616' },
    { visible: '33 3121 9616', href: 'tel:+523331219616' },
  ],
  email: 'elfarallondetepic@gmail.com',
  facebook: 'https://www.facebook.com/farallondetepic/',
  instagram: 'https://www.instagram.com/el_farallon/',
  // Destino del enlace "RESERVACIONES" del sitio (goo.gl/maps/bWWKbeZubP1Mpc9J7), resuelto con curl el 2026-09-26.
  mapa: 'https://www.google.com/maps/place/El+Farall%C3%B3n+de+Tepic/@20.6707542,-103.4096487,17z',
  menuPdf: 'https://elfarallondetepic.mx/wp-content/uploads/2025/03/Menu-Alimentos-2025.pdf',
  whatsapp: wa(`${saludo} Quisiera reservar una mesa en El Farallón de Tepic.`),
  logo: f('logo-50-aniversario', 320, 320, 'Escudo del 50 aniversario de El Farallón de Tepic, Sea Food, since 1975'),
  hero: f('pescado-zarandeado', 1125, 1500, 'Pescado zarandeado abierto sobre charola de metal, con ensalada de lechuga y jitomate y latas de cerveza San Blas'),
};

export const historia = {
  titulo: 'Nuestra historia',
  parrafos: [
    'Por el año de 1975, en la bella ciudad de Tepic, Nayarit, nace un lugar que, a la fecha, se ha preocupado por ofrecer a clientes de todas las edades un lugar agradable y acogedor, donde puedan degustar platillos tradicionales nayaritas, así como creaciones de nuestra inspiración.',
    'Tanto fue el éxito y la preferencia de la gente, que decidimos emprender el vuelo a principios de los 80 para poder deleitar a los paladares de la hermosa Guadalajara.',
    'Ahora, continuamos esa gran aventura de ya 50 años en el actual domicilio de Niño Obrero 560, en la tradicional zona de Chapalita. Nos honra atender a tantas generaciones que década tras década nos han elegido como su segunda casa, con Empanadas de camarón, Piña Cantamar y nuestro delicioso Pescado Zarandeado como estandartes.',
  ],
  valores: [
    { t: 'Calidad', d: 'Nuestros platillos están cuidadosamente elaborados con lo más fresco del mar.' },
    { t: 'Tradición', d: 'Nuestra trayectoria de 50 años nos avala como una tradición gastronómica de la ciudad.' },
    { t: 'Sabor', d: 'Tradición, innovación y sazón que se mezclan para ofrecerte siempre los más sabrosos platillos.' },
  ],
  foto: f('pescado-y-pulpo-zarandeados', 960, 960, 'Pescado y pulpo zarandeados, dorados a las brasas, con ensalada'),
  promesa: '¡El mejor Pescado Zarandeado del mundo! 50 años sirviendo la más fresca comida del mar. Además tenemos servicio a domicilio.',
  estandartes: [
    { nombre: 'Empanadas de camarón', precio: '$62', foto: f('empanadas-de-camaron', 1200, 900, 'Dos empanadas de camarón doradas con salsa verde, junto a latas de cerveza San Blas') },
    { nombre: 'Piña Cantamar', nota: 'La original', precio: '$441', foto: f('pina-cantamar', 1200, 900, 'Piña Cantamar: media piña rellena de mariscos gratinados, en una mesa de la terraza') },
  ],
};

/** Platillos de la báscula: precios y pesos de /menus. */
export type Pesable = {
  id: string;
  nombre: string;
  /** 'kilo': se cobra por kilo; 'porcion': peso fijo publicado. */
  modo: 'kilo' | 'porcion';
  precio: number; // por kilo o por porción
  gramos?: number; // solo porción
  foto?: Foto;
};

export const bascula: Pesable[] = [
  { id: 'pescado', nombre: 'Pescado zarandeado', modo: 'kilo', precio: 629, foto: f('zarandeado-pescado', 900, 900, 'Pescado zarandeado sobre charola, con ensalada y cerveza San Blas') },
  { id: 'frito', nombre: 'Pescado frito', modo: 'kilo', precio: 546 },
  { id: 'pulpo', nombre: 'Pulpo zarandeado', modo: 'porcion', precio: 546, gramos: 250, foto: f('zarandeado-pulpo', 900, 900, 'Pulpo zarandeado sobre tabla de madera, con ensalada y cerveza San Blas') },
  { id: 'camarones', nombre: 'Camarones zarandeados', modo: 'porcion', precio: 436, gramos: 400, foto: f('zarandeado-camarones', 900, 900, 'Camarones zarandeados sobre tabla de madera, con ensalada y cerveza San Blas') },
];

export const opiniones = [
  { texto: 'El mejor restaurante de mariscos de la ciudad y la especialidad de la casa, el Pescado Zarandeado, el mejor del mundo, y las empanadas. Por más de 10 años los he visitado y lo seguiré haciendo. ¡Felicidades!', autor: 'Gerardo Santoyo V.' },
  { texto: 'El pescado zarandeado es lo máximo, el pulpo a las brasas, el aguachile, bueno, lo que pruebes está excelente. Muy buen servicio y bonito lugar. Nosotros lo visitamos desde hace ya unos 25 años. Ampliamente recomendable.', autor: 'Chely Espinoza' },
  { texto: 'La comida y el lugar son excelentes, la atención es de primera y la música es selecta para que tu estancia sea agradable, alegre y divertida.', autor: 'Galadriel Desseä' },
];

export const galeria: Foto[] = [
  f('galeria-aguachile', 1100, 825, 'Aguachile de camarón con pepino y cebolla morada en plato hondo'),
  f('galeria-pulpo-zarandeado', 1100, 825, 'Pulpo zarandeado sobre tabla de madera'),
  f('galeria-ostiones', 1100, 825, 'Ostiones abiertos sobre tabla de madera'),
  f('galeria-camarones-diabla', 1100, 825, 'Camarones a la diabla con arroz'),
  f('galeria-tostada-santa-maria', 1100, 825, 'Tostada de mariscos con aguacate y chiles en vinagre'),
  f('galeria-callo-de-hacha', 1100, 825, 'Callo de hacha con pepino y cebolla morada'),
  f('galeria-tostada-ceviche', 1100, 825, 'Tostada de ceviche de pescado con aguacate'),
  f('galeria-tiradito-pulpo', 960, 960, 'Tiradito de pulpo en rebanadas finas con aceite y hierbas'),
];

export const mesa = f('mesa-farallon', 1339, 413, 'Mesa de El Farallón con Piña Cantamar, empanadas, ostiones y tacos');
