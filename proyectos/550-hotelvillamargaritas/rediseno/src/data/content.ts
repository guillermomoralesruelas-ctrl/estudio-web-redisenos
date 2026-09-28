// Contenido del Hotel Villa Margaritas (Villahermosa, Tabasco).
// Textos copiados de investigacion/crudo.json (villamargaritashotel.com: inicio, /habitaciones, /pago, /reservar y
// /habitaciones/suite-familiar, 2026-09-26) y, para lo que crudo.json no trae, del sitio real descargado con curl el
// 2026-09-26: /habitaciones/doble-matrimonial y /habitaciones/king-size (texto completo, "máx. por habitación" y
// servicios incluidos). Erratas corregidas. Lo nuevo (títulos, botones y textos de "¿Cuántos vienen?") está en
// CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

export const WA = '529932054701';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, me comunico desde su sitio web.';

/** Motor de reservas propio del hotel (pago con Stripe). No acepta fechas desde fuera: se eligen ahí. */
export const SITIO = 'https://villamargaritashotel.com';
export const reservar = `${SITIO}/reservar`;
export const pagar = `${SITIO}/pago`;

export const hotel = {
  nombre: 'Hotel Villa Margaritas',
  lema: 'En busca de la Excelencia',
  ubicacion: 'Estratégicamente ubicado en el centro de Villahermosa, a tan solo cuadra y media de la terminal del ADO y a la vuelta del hospital de Pemex.',
  esencia: 'Servicio personalizado. La mejor ubicación en el centro de Villahermosa.',
  cerca: [
    { cuanto: 'A 1½ cuadras', de: 'Terminal ADO' },
    { cuanto: 'A la vuelta', de: 'Hospital Pemex' },
    { cuanto: 'En el centro', de: 'de Villahermosa' },
  ],
  pie: 'Una estancia cómoda en un ambiente tranquilo y seguro en el corazón de Villahermosa.',
  totalHabitaciones: 69,
  habitacionesTexto: 'Desde habitaciones con 1 cama King Size hasta habitaciones con 2 camas matrimoniales, y suites familiares: cada espacio diseñado para tu descanso.',
  checkin: '3:00 pm',
  checkout: '12:00 pm',
  direccion: 'Andrés Sánchez Magallanes #910, Centro, Villahermosa, Tabasco',
  telefono: { visible: '+52 993 205 4701', href: 'tel:+529932054701' },
  whatsappVisible: '993 205 4701',
  whatsapp: wa(`${saludo} Quisiera información sobre habitaciones en el Hotel Villa Margaritas.`),
  email: 'hotelvillamargaritasventas@gmail.com',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Villa+Margaritas+Andr%C3%A9s+S%C3%A1nchez+Magallanes+910+Centro+Villahermosa+Tabasco',
  logo: f('logo-villa-margaritas', 320, 278, 'Hotel Villa Margaritas'),
  entrada: f('entrada', 1000, 1500, 'Entrada del Hotel Villa Margaritas: escalones de mármol, puertas de cristal y plantas a los lados'),
  lobby: f('lobby', 1600, 1066, 'Lobby del hotel con sillas y sillones grises, mesas de cristal, muro de madera y cuadros en tonos dorados'),
  elevador: f('elevador', 800, 1200, 'Elevador con el logotipo de Villa Margaritas en las puertas, junto a una vitrina y un muro de madera'),
};

export const porQue = [
  { titulo: 'Mejor precio', texto: 'Al reservar directamente obtienes la mejor tarifa disponible, sin comisiones de intermediarios.' },
  { titulo: 'Pago 100 % seguro', texto: 'Procesamos tu pago con Stripe. Tus datos bancarios están siempre protegidos.' },
  { titulo: 'Confirmación inmediata', texto: 'Recibes tu comprobante en PDF por correo al instante una vez confirmado el pago.' },
  { titulo: 'Atención personalizada', texto: 'Nuestro equipo está disponible por WhatsApp para resolver cualquier duda.' },
];

export const pago = {
  titulo: 'Garantiza tu estancia',
  texto: 'Consulta tu reservación con el código que recibiste por WhatsApp y realiza tu pago de forma segura.',
};

export type Habitacion = {
  id: string;
  nombre: string;
  lista: number; // precio tachado en el sitio (MXN por noche)
  oferta: number; // "tarifa de oferta" del sitio (MXN por noche)
  personas: number; // "máx. por habitación" de su página
  cuantas: number; // habitaciones de este tipo (/habitaciones)
  texto: string;
  extra?: string[];
  href: string;
  fotos: Foto[]; // de su página de habitación (bajadas del sitio real, ver fotos-web.mjs)
};

export const serviciosHabitacion = ['Internet Wi-Fi de alta velocidad', 'Aire acondicionado', 'TV por cable', 'Agua caliente y fría', 'Secadora de cabello', 'Teléfono', 'Servicio a cuarto'];

export const habitaciones: Habitacion[] = [
  {
    id: 'doble', nombre: 'Doble Matrimonial', lista: 800, oferta: 700, personas: 4, cuantas: 32,
    texto: 'Habitación con 2 camas matrimoniales, perfecta para máximo 4 personas. Cuenta con todos los servicios básicos del hotel para una estancia placentera y tranquila.',
    href: `${SITIO}/habitaciones/doble-matrimonial`,
    fotos: [f('doble-1', 768, 512, 'Habitación Doble Matrimonial con dos camas de edredón blanco y cenefa café'), f('doble-2', 768, 512, 'Doble Matrimonial vista desde la entrada, con escritorio, espejo y televisión en la pared'), f('doble-3', 768, 512, 'Las dos camas matrimoniales de la Doble Matrimonial, con cabeceras de madera oscura')],
  },
  {
    id: 'king', nombre: 'King Size', lista: 800, oferta: 700, personas: 2, cuantas: 28,
    texto: 'Habitación con una cama King Size, ideal para descanso individual o en pareja. Ambiente tranquilo con todos los servicios para una estancia cómoda.',
    href: `${SITIO}/habitaciones/king-size`,
    fotos: [f('king-1', 768, 512, 'Habitación King Size con cama grande, lámpara de buró y mesa con sillas'), f('king-2', 768, 512, 'King Size con mesa de madera y dos sillas frente a la cama'), f('king-3', 768, 512, 'Cama King Size con cabecera oscura, escritorio y espejo al fondo')],
  },
  {
    id: 'suite', nombre: 'Suite Familiar', lista: 1000, oferta: 900, personas: 4, cuantas: 9,
    texto: 'La opción perfecta para hospedarte con tu familia. Suite espaciosa con mini-refrigerador, microondas y cafetera. Sin cargo adicional por huéspedes extra.',
    extra: ['Caja de seguridad'],
    href: `${SITIO}/habitaciones/suite-familiar`,
    fotos: [f('suite-1', 768, 512, 'Suite Familiar con dos camas, sillón de piel y cortinas color miel'), f('suite-2', 768, 512, 'Suite Familiar con sillón, mesa, clóset y televisión'), f('suite-3', 768, 512, 'Cafetera, horno de microondas, dos botellas de agua y el menú del restaurante en la Suite Familiar')],
  },
];

export const instalaciones = [
  { nombre: 'Internet Wi-Fi', texto: 'Alta velocidad en todas las habitaciones' },
  { nombre: 'Aire acondicionado', texto: 'Clima controlado las 24 horas' },
  { nombre: 'TV por cable', texto: 'Canales nacionales e internacionales' },
  { nombre: 'Restaurante', texto: 'Desayuno y servicio a cuarto' },
  { nombre: 'Estacionamiento', texto: 'Dos estacionamientos, en área segura y vigilada' },
  { nombre: 'Seguridad 24 horas', texto: 'Circuito cerrado de televisión' },
  { nombre: 'Elevador', texto: 'Acceso a todos los pisos' },
  { nombre: 'Centro de negocios', texto: 'Sala de reuniones equipada' },
  { nombre: 'Salones de eventos', texto: '3 salones para tus reuniones y celebraciones' },
  { nombre: 'Lavandería y tintorería', texto: '' },
];

export const restaurante = {
  titulo: 'Desayuno y servicio a cuarto',
  fotos: [
    f('desayuno', 734, 1100, 'Mesa de desayuno: enchiladas con plátano frito, chilaquiles, hot cakes, jugo de naranja, jugo verde y café'),
    f('chilaquiles', 733, 1100, 'Plato de chilaquiles en salsa verde con crema, queso y cebolla morada'),
    f('cafe', 734, 1100, 'Taza de café junto a un plato con salsa roja, chícharos, plátano frito, crema y queso'),
    f('enchiladas', 733, 1100, 'Enchiladas rojas con cebolla morada, queso y frijoles, y una bebida con espuma en copa'),
  ],
};

export const salones = {
  titulo: 'Tres salones para tus reuniones y celebraciones',
  texto: 'Contamos con 3 salones de eventos para tus reuniones y celebraciones, además de un centro de negocios con sala de reuniones equipada.',
  fotos: [
    f('salon-mural', 1920, 700, 'Salón con mesa de manteles blancos y amarillos, pizarrón y un mural de colores que dice "Mereces lo que sueñas"'),
    f('salon-reuniones', 1600, 1066, 'Salón de reuniones con mesas en forma de U, manteles amarillos y pantalla de proyección'),
  ],
};
