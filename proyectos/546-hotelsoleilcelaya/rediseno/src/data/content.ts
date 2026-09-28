// Contenido del Hotel Soleil Celaya, tomado de su sitio (inicio, habitaciones, servicios, salones Premium, Monaco y
// Scala, restaurante y bar, contacto) y de su página de reservaciones (tarifas, horarios y opiniones), revisados con curl
// el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const hotel = {
  nombre: 'Hotel Soleil Celaya',
  lema: 'Business Class',
  direccion: 'Av. Constituyentes No. 125 Ote., Col. Tresguerras, C.P. 38080, Celaya, Gto.',
  calle: 'Av. Constituyentes 125 Ote., Col. Tresguerras',
  ubicacion: 'En una de las entradas principales de Celaya, a 5 minutos del centro y de la zona industrial.',
  telefono: { texto: '(461) 287 6015', tel: '+524612876015' },
  whatsapp: '524612876015',
  correo: 'ventas@soleilcelaya.com.mx',
  reservaciones: 'Reservaciones directas de lunes a domingo, de 7:00 a 22:00',
  checkin: '14:00',
  checkout: '12:00',
  cancelacion: 'Cancelación gratuita hasta 48 horas antes de la llegada',
  habitaciones: 70,
  estrellas: 4,
  calificaciones: [
    ['8.4', 'Booking.com'],
    ['4.0 de 5', 'TripAdvisor'],
  ] as const,
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Soleil+Celaya+Av.+Constituyentes+125+Ote+Celaya',
  reservar: 'https://www.soleilcelaya.com.mx/reservaciones-soleil.html',
  redes: [
    ['Facebook', 'https://www.facebook.com/SoleilCelaya'],
    ['Instagram', 'https://www.instagram.com/hotelsoleilcelaya/'],
  ] as const,
  servicios: ['Estacionamiento techado sin costo', 'WiFi gratis', 'Restaurante y bar', 'Gimnasio', 'Centro de negocios', 'Sala de juntas', '3 salones para eventos'],
};

export const wa = (texto: string) => `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(texto)}`;

// Tarifas por habitación y noche, IVA y desayuno americano para 2 incluidos (su página de reservaciones).
export const cuartos = [
  {
    id: 'ejecutiva', nombre: 'Habitación Ejecutiva', foto: 'f-ejecutiva',
    alt: 'Habitación Ejecutiva con dos camas matrimoniales, cabecera de madera y lámparas de pared',
    detalle: ['2 camas matrimoniales', 'Pantalla de 32" con TV por cable', 'WiFi gratis', 'Baño completo con amenidades'],
    tarifas: [['Con ventilador', '$880'], ['Con aire acondicionado', '$980']] as [string, string][],
    capacidad: 'Hasta 4 personas; la 3.ª y 4.ª pagan $250 cada una.',
  },
  {
    id: 'junior', nombre: 'Junior Suite', foto: 'f-junior',
    alt: 'Junior Suite con cama King Size, tina de hidromasaje junto a la ventana y sillones',
    detalle: ['1 cama King Size', 'Tina de hidromasaje privada', 'Sala de estar', 'Ventilador de techo', 'Pantalla de 32" y WiFi'],
    tarifas: [['Por noche', '$1,950']] as [string, string][],
    capacidad: '1 o 2 personas.',
  },
  {
    id: 'master', nombre: 'Master Suite', foto: 'f-master',
    alt: 'Master Suite con sala de estar, sillón de piel negro y un arreglo de plantas',
    detalle: ['1 cama King Size y sofá cama', 'Sala de estar', 'Tina de hidromasaje', 'Aire acondicionado', 'Amplio guardarropa'],
    tarifas: [] as [string, string][],
    capacidad: 'Tarifa por teléfono o WhatsApp: no está en su reservación en línea.',
  },
];

export type Montaje = 'escuela' | 'auditorio' | 'herradura' | 'banquete';

export const montajes: { id: Montaje; nombre: string; texto: string }[] = [
  { id: 'auditorio', nombre: 'Auditorio', texto: 'Filas de sillas hacia el frente' },
  { id: 'escuela', nombre: 'Escuela', texto: 'Mesas con sillas hacia el frente' },
  { id: 'herradura', nombre: 'Herradura', texto: 'Mesas en U, todos se ven' },
  { id: 'banquete', nombre: 'Banquete', texto: 'Mesas redondas' },
];

// Medidas y capacidad por montaje de cada salón, como las publica su sitio.
export const salones = [
  { id: 'premium', nombre: 'Salón Premium', ancho: 15, fondo: 12, terraza: false, cap: { escuela: 60, auditorio: 130, herradura: 50, banquete: 80 } },
  { id: 'monaco', nombre: 'Salón Monaco', ancho: 8, fondo: 12, terraza: false, cap: { escuela: 40, auditorio: 70, herradura: 35, banquete: 60 } },
  { id: 'scala', nombre: 'Salón Scala', ancho: 8, fondo: 12, terraza: true, cap: { escuela: 25, auditorio: 30, herradura: 18, banquete: 40 } },
] as const;

export const opiniones = [
  { texto: 'El servicio fue impecable desde el momento en que llegamos; el personal siempre fue amable, atento y dispuesto a ayudar en todo momento. El desayuno superó mis expectativas.', fuente: 'Booking.com, viaje de negocios' },
  { texto: 'La atención del personal y la limpieza del lugar es muy buena, cuenta con estacionamiento seguro y muy buen servicio en el restaurante. Excelente ubicación para quienes viajan por negocios.', fuente: 'Booking.com, viaje de negocios' },
  { texto: 'Buen lugar para hospedarse, limpio y seguro. Cuenta con restaurante, área de cómputo, estacionamiento gratis y vigilancia.', fuente: 'TripAdvisor, viaje de negocios' },
];

export const restaurante = {
  restaurante: 'Abierto de lunes a domingo, servicio de buffet y a la carta. Cocina internacional.',
  bar: 'Bebidas y botanas, de lunes a sábado.',
};
