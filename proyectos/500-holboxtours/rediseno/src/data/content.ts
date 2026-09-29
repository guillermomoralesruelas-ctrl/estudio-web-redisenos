// Contenido de Holbox Tours, tomado de su sitio (holboxtours.com): el clon, investigacion/crudo.json y la página en vivo
// revisada con curl el 2026-09-29 (precios en pesos de la versión en español, temporada 2026).
// No se inventó ningún dato. No publica WhatsApp ni dirección: se usa su teléfono como WhatsApp (pendiente).

export const negocio = {
  nombre: 'Holbox Tours',
  lugar: 'Isla Holbox, Quintana Roo',
  telefono: { texto: '984 108 7514', tel: '+529841087514' },
  whatsapp: '529841087514',
  correo: 'info@holboxtours.com',
  reservas: 'https://tours.holboxguide.com/es/',
  transporte: 'https://shuttle.holboxguide.com/',
  guia: 'https://mi.guiaholbox.com/',
  facebook: 'https://www.facebook.com/HolboxGuide/',
  instagram: 'https://www.instagram.com/holboxguide/',
  youtube: 'https://www.youtube.com/c/HolboxGuide',
  temporada: { texto: 'del 1 de junio al 15 de septiembre de 2026', inicio: '2026-06-01', fin: '2026-09-15' },
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

// Los dos tours de nado con el tiburón ballena.
export const nado = {
  compartido: {
    nombre: 'Tour compartido',
    precio: 2999, // desde, por persona
    incluye: ['Pick up en tu hotel en Holbox al punto de embarque', 'Sándwiches', 'Refrescos', 'Agua', 'Ceviche de pescado'],
    reservar: 'https://tours.holboxguide.com/es/tour/holbox-whale-shark-tour',
  },
  privado: {
    nombre: 'Tour privado VIP',
    precio: 24000, // desde, de 1 a 5 personas
    maximo: 5,
    incluye: ['Pick up en tu hotel en Holbox al punto de embarque', 'Sándwiches', 'Refrescos', 'Agua', 'Ceviche de pescado', 'Nado ilimitado con el tiburón ballena', 'Una hora de pesca de fondo'],
    reservar: 'https://tours.holboxguide.com/es/tour/holbox-whale-shark-private-tour',
  },
};

// Datos de su texto sobre el tiburón ballena.
export const tiburon = { largo: 15, peso: 13 };

export type Tour = { id: string; nombre: string; sub: string; precio: string; nota?: string; incluye: string; foto?: string; alt?: string; reservar: string };

export const tours: Tour[] = [
  { id: 'bio', nombre: 'Bioluminiscencia', sub: 'Isla Holbox', precio: 'Desde $550', nota: 'por persona', incluye: 'Pick up en tu hotel y guía bilingüe.', reservar: 'https://tours.holboxguide.com/es/tour/holbox-bioluminescence/' },
  { id: 'catoche', nombre: 'Cabo Catoche', sub: 'Pesca y snorkel', precio: 'Desde $1,850', nota: 'por persona', incluye: 'Traslado del hotel al embarque, agua, refrescos, ceviche con la pesca del día, líneas de pesca y carnada.', foto: 'faro', alt: 'El faro de Cabo Catoche y una lancha en el agua frente a la costa', reservar: 'https://tours.holboxguide.com/tour/cabo-catoche' },
  { id: 'descubre', nombre: 'Descubre Isla Holbox', sub: 'Los rincones de la isla', precio: '$650', incluye: 'Pick up en tu hotel y guía bilingüe.', foto: 'letrero', alt: 'El letrero de colores de Holbox en la playa, con palapas y mar turquesa', reservar: 'https://tours.holboxguide.com/es/tour/discover-holbox-island-tour/' },
  { id: 'clasico', nombre: 'Tour clásico, 3 islas', sub: 'Yalahau, Isla Pájaros e Isla Pasión', precio: '$950', nota: 'por persona', incluye: 'Agua fresca, guía bilingüe, paseo en bote y traslado del hotel al embarque.', foto: 'muelle', alt: 'Un viajero camina por un muelle de madera hacia una palapa sobre el agua', reservar: 'https://tours.holboxguide.com/es/tour/discover-holbox-island-tour/' },
];

export const excursiones = [
  { nombre: 'Chichén Itzá', salidas: 'Lunes y sábados', precio: '$3,400', incluye: 'Transportación VIP ida y vuelta desde Holbox, acceso a la zona arqueológica, guía certificado, cenote Ik Kil con baños y vestidores, y comida tipo bufete.', reservar: 'https://tours.holboxguide.com/es/tour/chichen-itza-tour/' },
  { nombre: 'Río Lagartos y Ek Balam', salidas: 'Miércoles', precio: '$3,400', incluye: 'Transportación VIP ida y vuelta desde Holbox, entradas a Ek Balam, guía certificado, paseo en lancha por Río Lagartos y comida de mariscos.', reservar: 'https://tours.holboxguide.com/es/tour/ria-lagartos-ek-balam-tour/' },
  { nombre: 'Tulum y Cobá', salidas: 'Martes y jueves', precio: '$3,000', incluye: 'Transportación VIP ida y vuelta desde Holbox, guía certificado, visita a un cenote, comida bufete tradicional y entradas a Tulum y Cobá.', reservar: 'https://tours.holboxguide.com/es/tour/tulum-coba-tour/' },
];
