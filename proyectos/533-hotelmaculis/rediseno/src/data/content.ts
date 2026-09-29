// Contenido de Hotel Maculís. Todo sale de su sitio (investigacion/crudo.json: inicio y reservaciones); nada es
// inventado. Su sitio no publica tarifas.

export const negocio = {
  nombre: 'Hotel Maculís',
  direccion: 'Calle Bravo 3, Barrio de San Román, 24040 San Francisco de Campeche, Campeche',
  telefono: '981 816 8346',
  telefonoLink: 'tel:+529818168346',
  whatsapp: '529812066760',
  whatsappTexto: '981 206 6760',
  correo: 'hotelmaculis@gmail.com',
  facebook: 'https://www.facebook.com/203648419489655',
  mapa: 'https://www.google.com/maps/search/?api=1&query=19.8410294,-90.5439651',
  // Su página de reservaciones trae un mapa de Google; aquí se usa el embed sin clave con las mismas coordenadas.
  mapaEmbed: 'https://maps.google.com/maps?q=19.8410294,-90.5439651&z=16&output=embed',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const ocasiones = ['Cumpleaños', 'Aniversario', 'Pedida de mano', 'Luna de miel', 'Escapada en pareja', 'Viaje en familia', 'Solo descansar'];
export const cuartos = ['Suite loft de dos niveles', 'Suite deluxe', 'Habitación con dos camas', 'Habitación doble'];

export const instalaciones = [
  { titulo: 'Alberca entre plantas', texto: 'Piscina al aire libre rodeada de vegetación tropical, con fuente sobre el muro de piedra.', foto: 'alberca.webp', alt: 'Alberca con fuente que cae de un muro de piedra, palmeras y camastros' },
  { titulo: 'Pet friendly', texto: 'Habitaciones y zonas comunes que admiten mascotas.', foto: 'mascota-alberca.webp', alt: 'Un perrito peludo descansa en un camastro junto a la alberca' },
  { titulo: 'Casa colonial restaurada', texto: 'Una casa del barrio de San Román convertida en hotel boutique, con jardín y andador.', foto: 'andador.webp', alt: 'Andador de madera entre muros azules y un árbol grande en el jardín' },
];

export const habitaciones = [
  { foto: 'habitacion-1.webp', alt: 'Habitación con cama king, puertas de madera y piso de pasta', ancho: 1300, alto: 975 },
  { foto: 'habitacion-3.webp', alt: 'Habitación con cama, clóset abierto y piso de mosaico colonial', ancho: 1300, alto: 975 },
  { foto: 'habitacion-4.webp', alt: 'Habitación con piso de madera, cama con camino rojo y minisplit', ancho: 1300, alto: 975 },
  { foto: 'habitacion-dos-camas.webp', alt: 'Habitación con dos camas matrimoniales y caminos rojos bordados', ancho: 1300, alto: 975 },
];

export const comodidades = ['Aire acondicionado', 'Wi-Fi de alta velocidad', 'Ropa de cama de felpa', 'Vista a la ciudad o al patio', 'Conserjería para excursiones', 'Paneles solares'];

export const opiniones = [
  { texto: 'Nos ha encantado, ubicado en el barrio más bello de mi hermoso Campeche. Despertar con el sonido de las campanas de la iglesia fue realmente increíble.', autor: 'Mariluz Barrera González' },
  { texto: 'Solo íbamos una noche pero decidimos quedarnos una más. Aceptan mascotas y tienen detalles con ellas.', autor: 'Minerva Pacheco' },
  { texto: 'This is a gem of a hotel in a quiet neighbourhood across the street from the square. Staff is very friendly and helpful.', autor: 'Jennifer Whiten' },
];
