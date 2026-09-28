// Contenido de Gran Familia, tomado del sitio original (clon en ../sitio e investigacion/crudo.json: inicio,
// menu-desayuno.html y menu-tarde.html). Regla: nada inventado. Lo que se dedujo está marcado como pendiente en CAMBIOS.md.
// No hay textos tomados con curl: las tres páginas del sitio están completas en crudo.json (el curl del 2026-09-27 solo
// sirvió para comprobar que el sitio sigue igual y para leer sus colores en /assets/js/tailwind-config.js).
// Las rutas de imagen son relativas a publicDir (../assets/web, copias .webp de fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export type Foto = { src: string; alt: string; w: number; h: number };

export const negocio = {
  nombre: 'Gran Familia',
  lema: 'Donde la tradición se sienta a la mesa.',
  intro: 'No somos solo un restaurante, somos el guardián del sazón casero que has buscado. Desayunos y comidas con herencia, servidos con la calidez de familia.',
  pie: 'Raíces profundas, cocina viva. Un homenaje a la tradición potosina en cada plato.',
  telefono: '+52 444 411 5560',
  tel: '+524444115560',
  whatsapp: '524444115560',
  calle: 'Av. Vasco de Quiroga 209',
  colonia: 'Industrial Aviación 1ra Secc., 78140',
  ciudad: 'San Luis Potosí, S.L.P.',
  horario: 'Lunes a domingo, 8:00 a.m. a 6:00 p.m.',
  abre: 8,
  cierra: 18,
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Gran Familia, Av. Vasco de Quiroga 209, Industrial Aviación 1ra Secc, 78140 San Luis Potosí, S.L.P.'),
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2008.3!2d-101.0!3d22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98b2c212265b%3A0x8e4266f81a705193!2sAv.%20Vasco%20de%20Quiroga%20209%2C%20Industrial%20Aviaci%C3%B3n%201ra%20Secc%2C%2078140%20San%20Luis%20Potos%C3%AD%2C%20S.L.P.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx',
  logo: { src: img('logo.webp'), alt: 'Gran Familia, Cocina Rancho', w: 520, h: 404 } as Foto,
  logoBlanco: { src: img('logo-blanco.webp'), alt: 'Gran Familia, Cocina Rancho', w: 520, h: 404 } as Foto,
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const reservarGeneral = wa('Hola, Gran Familia. Quiero reservar mesa. Somos __ personas, para el día __ a las __.');

export const fotos = {
  mesa: { src: img('mesa.webp'), alt: 'Chilaquiles con cecina, frijoles y cebolla morada, un plato de fruta y un jugo de naranja sobre el mantel a cuadros de Gran Familia', w: 1000, h: 1013 },
  chilaquiles: { src: img('chilaquiles.webp'), alt: 'Chilaquiles rojos con crema y queso, frijoles y un jugo de zanahoria', w: 900, h: 900 },
  cecina: { src: img('cecina.webp'), alt: 'Cecina a la plancha con cebolla asada, chile toreado, arroz, ensalada y frijoles', w: 900, h: 600 },
  omelette: { src: img('omelette.webp'), alt: 'Omelette con cebolla morada, frijoles refritos y totopos', w: 1100, h: 396 },
  hotcakes: { src: img('hotcakes.webp'), alt: 'Hotcakes con Nutella, plátano y fresas', w: 900, h: 900 },
  ensaladas: { src: img('ensaladas.webp'), alt: 'Barra de ensaladas con pepino con chile, jitomate rebanado, betabel y lechugas', w: 900, h: 900 },
  corrida: { src: img('comida-corrida.webp'), alt: 'Un guisado rojo servido con cucharón desde el chafing', w: 900, h: 900 },
} satisfies Record<string, Foto>;

// "Favoritos de la Casa" del inicio: "Lo que hace que vuelvas cada semana."
export type Favorito = { nombre: string; texto: string; precio: number };
export const favoritos: { manana: Favorito[]; tarde: Favorito[] } = {
  manana: [
    { nombre: 'Omelette al gusto', texto: 'Con los ingredientes de su elección, esponjosito y delicioso.', precio: 139 },
    { nombre: 'Chilaquiles con cecina', texto: 'Tradicionales, bañados en salsa y acompañados de cecina.', precio: 174 },
    { nombre: 'Cecina a la plancha', texto: 'Con cebollita asada, chiles toreados y frijoles refritos.', precio: 189 },
    { nombre: 'Hotcakes con Nutella', texto: 'Esponjosos, cubiertos de Nutella y fruta fresca.', precio: 169 },
  ],
  tarde: [
    { nombre: 'Chilaquiles', texto: 'Rojos, verdes o mole. Los favoritos para comer delicioso.', precio: 110 },
    { nombre: 'Cecina a la plancha', texto: 'Servida con arroz, ensalada y frijoles de la olla.', precio: 189 },
    { nombre: 'Comida corrida', texto: 'Sopa, plato fuerte, agua y postre. Sabor casero diario.', precio: 150 },
    { nombre: 'Ensalada primavera', texto: 'Mezcla fresca de lechugas, frutas y aderezo especial.', precio: 120 },
  ],
};

export const esencia = {
  titulo: 'Cocina honesta, ingredientes locales.',
  parrafos: [
    'En un mundo de comida rápida, en Gran Familia elegimos el camino de la paciencia. Creemos que un buen asado necesita tiempo, que las tortillas saben mejor hechas a mano y que el café debe oler a canela y piloncillo.',
    'Somos orgullosamente potosinos. Cada platillo que servimos es un homenaje a las recetas que han pasado de generación en generación en las cocinas de San Luis. Aquí no eres un cliente, eres parte de la familia.',
  ],
  firma: 'Est. 2025, San Luis Potosí',
};

// ---------- "¿Qué día vienes?" ----------
// De su sitio: horario "Lunes a Domingo: 8:00 AM - 6:00 PM" (pie y JSON-LD); comida corrida "Disponible Lunes a Viernes
// (1:00 PM - 5:00 PM)", $150, agua fresca, sopa del día, plato fuerte y postre (menu-tarde.html); barbacoa de borrego
// "Sábados y Domingos. Auténtica tradición, disponible hasta agotar existencia. ¡Llega temprano!" (inicio) y los
// "Especiales de Fin de Semana" (en los dos menús). No se sabe a qué hora cambia el menú de la mañana al de la tarde.
export const comidaCorrida = {
  precio: 150,
  desde: 13,
  hasta: 17,
  tiempos: ['Agua fresca', 'Sopa del día', 'Plato fuerte', 'Postre'],
};

export const especialesFinde = [
  { nombre: 'Barbacoa de borrego', medida: '1 kg', precio: 780 },
  { nombre: 'Taco de barbacoa', medida: '', precio: 33 },
  { nombre: 'Menudo chico', medida: '', precio: 116 },
  { nombre: 'Quesabirria', medida: '', precio: 55 },
];

export const barbacoa = {
  titulo: '¡Barbacoa de borrego!',
  texto: 'Sábados y domingos. Auténtica tradición, disponible hasta agotar existencia. ¡Llega temprano!',
};

// Lunes = 0 … domingo = 6
export const dias = [
  { id: 'lunes', corto: 'Lun', nombre: 'lunes', finde: false },
  { id: 'martes', corto: 'Mar', nombre: 'martes', finde: false },
  { id: 'miercoles', corto: 'Mié', nombre: 'miércoles', finde: false },
  { id: 'jueves', corto: 'Jue', nombre: 'jueves', finde: false },
  { id: 'viernes', corto: 'Vie', nombre: 'viernes', finde: false },
  { id: 'sabado', corto: 'Sáb', nombre: 'sábado', finde: true },
  { id: 'domingo', corto: 'Dom', nombre: 'domingo', finde: true },
] as const;
