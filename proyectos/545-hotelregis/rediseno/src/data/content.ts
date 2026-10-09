// Contenido de Hotel Regis, tomado de investigacion/crudo.json (su única página) y del sitio en vivo (2026-10-09).
// Nada inventado. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Hotel Regis',
  ciudad: 'Mexicali, Baja California',
  direccion: 'Blvd. Benito Juárez 2150, Insurgentes',
  cp: '21280 Mexicali, B.C.',
  email: 'inforegis@hotel-regis.com',
  maps: 'https://maps.app.goo.gl/fL9QQyX44dzxgU4d8',
  facebook: 'https://facebook.com/hotelregismexicali',
  facebookVilla: 'https://www.facebook.com/villadonnacho',
};

export const telefonos = [
  { numero: '686 566 3435', href: 'tel:+526865663435' },
  { numero: '686 566 8802', href: 'tel:+526865668802' },
];

// No publica WhatsApp: su botón "Reservar" abre teléfonos y correo. Se suma un correo ya armado.
export const correo = (asunto: string, cuerpo: string) =>
  `mailto:${negocio.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

export const cifras = [
  { valor: '50+', texto: 'Habitaciones' },
  { valor: '30', texto: 'Años de historia' },
  { valor: '★ 4.8', texto: 'Calificación' },
  { valor: '24/7', texto: 'Servicio al huésped' },
];

export type Habitacion = { id: string; nombre: string; precio: number; foto: string; alt: string; texto: string };
export const habitaciones: Habitacion[] = [
  { id: 'sencilla', nombre: 'Habitación Sencilla', precio: 975, foto: 'sencilla', alt: 'Habitación sencilla con cama Queen Size, muro terracota y clóset abierto',
    texto: 'Un refugio de tranquilidad diseñado para el viajero de negocios o estancias individuales. Cuenta con una cama Queen Size, escritorio de trabajo funcional y una atmósfera sofisticada que garantiza un descanso reparador tras un día de actividad en la ciudad.' },
  { id: 'doble', nombre: 'Habitación Doble', precio: 1215, foto: 'doble', alt: 'Habitación doble con dos camas matrimoniales, piso de madera y espejo',
    texto: 'La combinación perfecta de amplitud y confort para viajes compartidos o familiares. Equipada con dos camas matrimoniales y acabados clásicos, ofrece el espacio ideal para disfrutar de la hospitalidad mexicalense en un entorno elegante.' },
  { id: 'triple', nombre: 'Habitación Triple', precio: 1736, foto: 'triple', alt: 'Habitación triple con tres camas en fila y muro terracota',
    texto: 'Nuestra opción más espaciosa, ideal para grupos o familias grandes. Diseñada para que cada huésped mantenga su privacidad y comodidad, esta habitación ofrece una distribución inteligente sin sacrificar el estilo tradicional que distingue al Hotel Regis.' },
];
export const incluye = ['WiFi', 'A/C', 'TV'];

export const amenidades = [
  { nombre: 'WiFi gratis', nota: 'Disponible para todos los huéspedes' },
  { nombre: 'Aire acondicionado', nota: 'Disponible para todos los huéspedes' },
  { nombre: 'Estacionamiento', nota: 'Disponible para todos los huéspedes' },
  { nombre: 'Desayuno', nota: 'Con costo adicional · No incluido en la reservación' },
  { nombre: 'Centro de negocios', nota: 'Disponible para todos los huéspedes' },
  { nombre: 'Smart TV', nota: 'Disponible para todos los huéspedes' },
  { nombre: 'Caja fuerte', nota: 'Disponible para todos los huéspedes' },
];

export const horarios = { checkIn: '3:00 PM', checkOut: '12:00 PM' };

// Horarios del hotel y de Villa Don Nacho, en horas de 24 (12.5 = 12:30). dias: 0 = domingo … 6 = sábado.
const LS = [1, 2, 3, 4, 5, 6];
export type Franja = { id: string; nombre: string; detalle: string; desde: number; hasta: number; dias: number[]; tipo: 'hotel' | 'villa' };
export const franjas: Franja[] = [
  { id: 'recepcion', nombre: 'Recepción', detalle: 'Las 24 horas, todos los días', desde: 0, hasta: 24, dias: [0, ...LS], tipo: 'hotel' },
  { id: 'checkin', nombre: 'Check-in', detalle: 'Desde las 3:00 pm', desde: 15, hasta: 24, dias: [0, ...LS], tipo: 'hotel' },
  { id: 'checkout', nombre: 'Check-out', detalle: 'Hasta las 12:00 pm', desde: 0, hasta: 12, dias: [0, ...LS], tipo: 'hotel' },
  { id: 'desayunos', nombre: 'Desayunos', detalle: '7 am – 12 pm', desde: 7, hasta: 12, dias: LS, tipo: 'villa' },
  { id: 'comida', nombre: 'Comida del día', detalle: '12 pm – 7 pm', desde: 12, hasta: 19, dias: LS, tipo: 'villa' },
  { id: 'filete', nombre: 'Filete Mignon', detalle: '1 pm – 10 pm', desde: 13, hasta: 22, dias: LS, tipo: 'villa' },
  { id: 'buffet', nombre: 'Buffet dominical', detalle: 'Domingo · 8 am – 1 pm', desde: 8, hasta: 13, dias: [0], tipo: 'villa' },
];

export const villa = {
  nombre: 'Villa Don Nacho',
  texto: 'Ubicado en el corazón del hotel, nuestro restaurante te trae los sabores más auténticos de la cocina tradicional mexicana. Disfruta desde un delicioso desayuno por las mañanas hasta nuestra especialidad de la casa: el inigualable filete mignon.',
  remate: 'Una experiencia gastronómica que ha deleitado a Mexicali por décadas.',
  horario: [{ dias: 'Lunes a sábado', horas: '7:00 am – 10:00 pm' }, { dias: 'Domingo', horas: 'Buffet · 8:00 am – 1:00 pm' }],
};

export const galeria = [
  { n: 'fachada-dia', alt: 'Entrada principal del Hotel Regis con su escudo, de día' },
  { n: 'fachada-atardecer', alt: 'Hotel Regis sobre el bulevar al atardecer, con su letrero iluminado' },
  { n: 'entrada-villa', alt: 'Fachada con el letrero del restaurante Villa Don Nacho y el anuncio del hotel' },
  { n: 'habitacion-escritorio', alt: 'Habitación con escritorio, televisión y dos ventanas' },
  { n: 'escritorio', alt: 'Escritorio de madera con silla y televisión en el muro' },
  { n: 'lavabo', alt: 'Lavabo con espejo y clóset' },
  { n: 'bano', alt: 'Baño con regadera y cortina' },
];
