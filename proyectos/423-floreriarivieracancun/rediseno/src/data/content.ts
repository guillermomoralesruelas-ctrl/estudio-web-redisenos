// Contenido de Florería Riviera (Playa del Carmen, Quintana Roo), tomado del sitio original: investigacion/crudo.json
// (inicio, estatus, políticas de servicio y nuevos modelos) e investigacion/original.html. La nube no llega al sitio.
// Regla: nada inventado. Precios tal cual su catálogo ("+ envío"; el costo del envío no se publica).
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);

export const negocio = {
  nombre: 'Florería Riviera',
  telefono: '+52 984 204 0410',
  telefonoHref: 'tel:+529842040410',
  whatsapp: '5219842420053',
  whatsappTexto: '984 242 0053',
  correo: 'info@floreriariviera.com',
  direccion: 'Ave. Constituyentes, Playa del Carmen, Q. Roo, C.P. 77710',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Florería Riviera, Avenida Constituyentes, Playa del Carmen, Quintana Roo 77710'),
  ingles: 'https://www.floreriariviera.com/eng/',
  estatus: 'https://www.floreriariviera.com/order_status.php',
  catalogo: 'https://www.floreriariviera.com/catalogo.php',
  pedido: (id: string) => `https://www.floreriariviera.com/getOrder.php?recordID=${id}`,
  redes: [
    ['Facebook', 'https://www.facebook.com/Floreriarivieramexico/'],
    ['Instagram @floreriaplayadelcarmen', 'https://www.instagram.com/floreriaplayadelcarmen/'],
    ['Instagram @floresrivieramaya', 'https://www.instagram.com/floresrivieramaya/'],
  ] as const,
};

export const wa = (mensaje: string) => `https://api.whatsapp.com/send?phone=${negocio.whatsapp}&text=${encodeURIComponent(mensaje)}`;
export const waInfo = wa('Hola, me interesa un envío de flores en Playa del Carmen. Favor de contactarme.');

export type Arreglo = { id: string; codigo: string; nombre: string; precio: number; antes?: number; alt: string };
export const arreglos: Arreglo[] = [
  { id: 'r74', codigo: 'R74', nombre: 'Rosas Mix', precio: 1450, antes: 1700, alt: 'Ramo de rosas rosas y salmón con follaje y flores pequeñas amarillas, envuelto en papel' },
  { id: 'r96', codigo: 'R96', nombre: 'Lilis Alegría', precio: 1200, alt: 'Ramo de lilis amarillas con moño naranja, envuelto en papel blanco' },
  { id: 'r8', codigo: 'R8', nombre: 'Aurora Rose', precio: 1350, alt: 'Arreglo en caja redonda rosa con rosas, gerberas fucsias y flores lilas' },
  { id: 'r103', codigo: 'R103', nombre: 'Roza Corazón', precio: 1350, alt: 'Caja roja en forma de corazón con rosas rojas y chocolates dorados' },
  { id: 'r1', codigo: 'R1', nombre: 'Rosas Privilege', precio: 2700, alt: 'Domo de rosas rojas en una caja redonda blanca' },
  { id: 'r3', codigo: 'R3', nombre: 'Rosas mixtas', precio: 2700, alt: 'Ramo redondo de rosas y gerberas en tonos rosa, con papel rosa' },
  { id: 'r13', codigo: 'R13', nombre: 'Rosas Rafaela', precio: 3500, alt: 'Gran ramo de rosas blancas y rosas con lilis rosadas, envuelto en papel rosa' },
];

// Otras ofertas y frutales de su portada (sin foto en el clon).
export const otros = [
  ['R108', 'Orquídea Equinox', '800', '1,200'], ['R35', 'Maceta Orquídea', '1,099', '1,200'], ['R17', 'Fresas & Flores', '1,550', '1,700'],
  ['R59', 'Rosas y Frutas', '2,100', ''], ['R49', 'Canasta de frutas', '1,450', ''], ['R20', 'Delicia Frutal', '1,700', ''], ['R22', 'Frutas & Flores', '1,250', ''],
  ['R6', 'Margarissimo', '1,099', ''], ['R56', 'Rosas & Orquídeas', '2,400', ''], ['R29', 'Orquídeas Amalfi', '4,800', ''],
] as const;

export const zonas = ['Playa del Carmen centro y colonias', 'Playacar', 'Riviera Maya', 'Puerto Aventuras', 'Akumal', 'Tulum'];

export const reglas = {
  mismoDia: 'Entrega el mismo día para pedidos realizados antes de las 3:00 PM, hora local.',
  horario: 'El horario de entrega es de 10 am a 7 pm, de lunes a sábado. Para entregas en domingo aplican restricciones.',
  especiales: 'Para 14 de febrero y 10 de mayo, los pedidos deben hacerse y pagarse con mínimo 24 horas de anticipación. En días de alta demanda no se garantiza la entrega a hora fija, sino en horario abierto de 8 am a 9 pm.',
  variacion: 'Los arreglos pueden variar en color y distribución de los que aparecen en las imágenes, pero siempre se respeta el número de flores y el tamaño del diseño.',
};

export const pagos = [
  ['Prepago completo', 'Todos los pedidos requieren prepago completo: costo base, agregados y costo de entrega.'],
  ['PayPal', 'Con tarjeta de crédito o débito en la página de PayPal, sin necesidad de tener cuenta. Nunca piden los datos de tu tarjeta por correo o teléfono.'],
  ['Oxxo, depósito o transferencia', 'Los datos aparecen al enviar el formato de compra. Reporta tu pago a info@floreriariviera.com con el recibo, tu nombre, el del destinatario y la fecha de entrega.'],
  ['Cancelaciones', 'Los pedidos pagados no se pueden cancelar a menos de 48 horas de la entrega. Con más de 2 días de anticipación, el reembolso es por PayPal.'],
] as const;

export const nosotros =
  'En Florería Riviera nos especializamos en la entrega de flores frescas a domicilio en la ciudad de Playa del Carmen, ofreciendo arreglos florales elegantes, modernos y cuidadosamente diseñados para cada ocasión.';
export const condolencias =
  'Arreglos de condolencias, coronas fúnebres y flores para funeral con entrega puntual en funerarias, iglesias y domicilios en Playa del Carmen, con diseños sobrios que transmiten respeto y acompañamiento.';
export const bodas =
  'Flores para boda, ramos de novia y butonieres, corsages, ramos para damas, arreglos de bodas en la playa, decoración de iglesia y centros de mesa.';
