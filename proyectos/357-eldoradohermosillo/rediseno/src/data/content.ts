// Contenido del Hotel El Dorado Hermosillo. Fuente: eldoradohermosillo.com.mx (Google Sites: inicio, habitación estándar,
// habitación ejecutiva, restaurante, servicios y galería), leído el 2026-10-10. Las tarifas de Larga Estadía se transcribieron
// de sus 5 tablas (imágenes). No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'Hotel El Dorado Hermosillo',
  direccion: 'Blvd. Jesús García Morales 123 B, El Llano, 83210 Hermosillo, Son.',
  telefono: '662 216 5159',
  telefonoLink: '+526622165159',
  whatsapp: '526621030042', // de su botón "Reserva Whatsapp"
  whatsappTexto: '662 103 0042',
  facebook: 'https://www.facebook.com/eldoradohermosillo',
  // Coordenadas y nombre del mapa que inserta su sitio.
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hotel El Dorado Hermosillo, Blvd. Jesús García Morales 123 B, Hermosillo'),
  correo: '[PENDIENTE]', // su sitio no publica correo
};

export const ventajas = [
  { titulo: 'Desayuno continental caliente de cortesía', texto: 'Para todos los huéspedes, durante toda la estancia y en cualquier tipo de habitación.' },
  { titulo: 'Transporte gratis al aeropuerto', texto: 'Transportación redonda hotel–aeropuerto y aeropuerto–hotel durante tu estadía.' },
  { titulo: 'Transporte gratis a Consulado / CAS', texto: 'Para quienes vienen a su trámite de visa.' },
  { titulo: 'A 5 minutos del aeropuerto', texto: 'Del Aeropuerto Internacional de Hermosillo, con acceso a todo tipo de comercios y servicios.' },
];

export const concepto =
  'Hotel El Dorado Hermosillo ofrece a sus huéspedes un concepto exclusivo creado para su descanso: tecnología para trabajar y una atmósfera familiar. Nuestros colchones y ropa de cama son de calidad de hotel de 5 estrellas.';

export type Tramo = 4 | 7 | 14 | 28;
export type Habitacion = {
  id: string;
  familia: 'Estándar' | 'Ejecutiva';
  m2: number;
  camas: string;
  capacidad: string;
  tarifa: number; // por noche, impuestos incluidos
  larga: Record<Tramo, number>; // plan Larga Estadía, tarifa por noche
  ocupacionLarga: number;
  incluye: string[];
  fotos: { n: string; alt: string }[];
};

// Listas "Incluye" tal como aparecen en cada habitación de su sitio.
const incluyeEstandar = ['Escritorio', 'Caja de seguridad', 'TV LCD 32″ con canales HD', 'Sistema de aire acondicionado independiente', 'Abanico de techo', 'Plancha y tabla de planchar', 'Secadora de cabello', 'Teléfono', 'Desayuno continental caliente en cortesía'];
const incluyeEjecutiva = ['Mesa de trabajo', '25% más espacio que la habitación estándar', 'TV 42″ con canales HD', 'Aire acondicionado independiente', 'Ubicadas en zona exclusiva', 'Vista exterior', 'Abanico de techo', 'Plancha y tabla de planchar', 'Secadora de cabello', 'Teléfono', 'Frigobar', 'Desayuno continental caliente en cortesía'];

export const habitaciones: Habitacion[] = [
  {
    id: 'estandar-king', familia: 'Estándar', m2: 18, camas: '1 cama king size', capacidad: '1 a 2 personas',
    tarifa: 1185, larga: { 4: 1095, 7: 1060, 14: 1040, 28: 990 }, ocupacionLarga: 2, incluye: incluyeEstandar,
    fotos: [{ n: 'estandar-king-1', alt: 'Habitación estándar con cama king size y pared verde' }, { n: 'estandar-king-2', alt: 'Lavabo de cerámica y secadora de cabello de la habitación estándar' }],
  },
  {
    id: 'estandar-doble', familia: 'Estándar', m2: 18, camas: '2 camas matrimoniales', capacidad: '1 a 4 personas',
    tarifa: 1395, larga: { 4: 1270, 7: 1230, 14: 1190, 28: 1140 }, ocupacionLarga: 2, incluye: incluyeEstandar,
    fotos: [{ n: 'estandar-doble-1', alt: 'Habitación estándar con dos camas matrimoniales y pared terracota' }, { n: 'estandar-doble-3', alt: 'Lavabo y secadora de cabello de la habitación estándar doble' }],
  },
  {
    id: 'ejecutiva-king', familia: 'Ejecutiva', m2: 23, camas: '1 cama king size', capacidad: '1 a 2 personas',
    tarifa: 1595, larga: { 4: 1395, 7: 1340, 14: 1290, 28: 1190 }, ocupacionLarga: 2, incluye: incluyeEjecutiva,
    fotos: [{ n: 'ejecutiva-king-1', alt: 'Habitación ejecutiva con cama king size, buró y lámpara' }, { n: 'ejecutiva-king-2', alt: 'Mesa de trabajo de la habitación ejecutiva' }, { n: 'ejecutiva-king-3', alt: 'Tocador con lavabo y espejo de la habitación ejecutiva' }],
  },
  {
    id: 'ejecutiva-doble', familia: 'Ejecutiva', m2: 23, camas: '2 camas matrimoniales', capacidad: '1 a 4 personas',
    tarifa: 1695, larga: { 4: 1445, 7: 1390, 14: 1340, 28: 1240 }, ocupacionLarga: 2,
    // Su sitio repite aquí la lista de la habitación estándar (escritorio, caja de seguridad, TV 32″).
    incluye: incluyeEstandar,
    fotos: [{ n: 'ejecutiva-doble-1', alt: 'Habitación ejecutiva doble con tocador largo y televisión' }],
  },
  {
    id: 'ejecutiva-triple', familia: 'Ejecutiva', m2: 23, camas: '2 camas matrimoniales y 1 individual', capacidad: '1 a 5 personas',
    tarifa: 1850, larga: { 4: 1495, 7: 1440, 14: 1390, 28: 1290 }, ocupacionLarga: 3, incluye: incluyeEjecutiva,
    fotos: [{ n: 'ejecutiva-triple-1', alt: 'Habitación ejecutiva triple con camas de cojines azules' }, { n: 'ejecutiva-triple-2', alt: 'Vista amplia de la habitación ejecutiva triple con tocador' }, { n: 'ejecutiva-triple-3', alt: 'Doble lavabo de la habitación ejecutiva triple' }],
  },
];

export const nombreHab = (h: Habitacion) => `${h.familia} · ${h.camas}`;

export const restaurante = {
  horarios: [
    { nombre: 'Restaurante', horario: '6:30 a.m. a 10:00 p.m.' },
    { nombre: 'Servicio a la habitación', horario: '7:00 a.m. a 10:00 p.m.' },
  ],
  fotos: [
    { n: 'restaurante-barra', alt: 'Restaurante del hotel con barra, pizarrones y mesas de colores' },
    { n: 'restaurante-desayuno-buffet', alt: 'Barra del desayuno con cereales, pan y jugo de naranja' },
    { n: 'platillo-chilaquiles', alt: 'Platillo con crema, cebolla morada y cilantro' },
    { n: 'desayuno-plato', alt: 'Desayuno servido con jugo, café, fruta y huevo' },
  ],
  // Páginas de la carta tal como las publica (imágenes).
  carta: [
    { n: 'carta-1', titulo: 'Desayunos' },
    { n: 'carta-2', titulo: 'Desayunos (2)' },
    { n: 'carta-3', titulo: 'Licuados y jugos' },
    { n: 'carta-4', titulo: 'Entradas' },
    { n: 'carta-5', titulo: 'Sándwiches y hamburguesas' },
    { n: 'carta-6', titulo: 'Cortes de res' },
    { n: 'carta-7', titulo: 'Pescados y mariscos' },
    { n: 'carta-8', titulo: 'Bebidas y postres' },
  ],
};

export const alberca = {
  horario: '10:00 a.m. a 10:00 p.m., todos los días',
  toallas: 'Si necesitas toallas para la alberca, pídelas en Recepción, sin costo adicional.',
  fotos: [
    { n: 'alberca-noche', alt: 'Alberca iluminada de noche con terraza y vigas rojas' },
    { n: 'alberca-comedor', alt: 'Mesas con sillas rojas junto a la alberca' },
    { n: 'alberca-dia', alt: 'Alberca de día con escalerilla' },
  ],
  otros: [
    { n: 'gimnasio-1', alt: 'Área de ejercicio con aparato multiestación y bicicleta' },
    { n: 'terraza', alt: 'Terraza techada con sillas rojas' },
    { n: 'vestibulo', alt: 'Rincón del vestíbulo con cuadro, sillas y piso de mosaico' },
    { n: 'gimnasio-2', alt: 'Aparato de ejercicio junto a la pared verde' },
  ],
};
