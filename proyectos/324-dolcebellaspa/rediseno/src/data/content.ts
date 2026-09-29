// Contenido de Dolcebella Spa. Todo sale de su sitio (investigacion/original.html y crudo.json); nada es inventado.
// Precios en pesos mexicanos tal como aparecen en su sitio (paquetes en inicio, faciales en su tienda).

export const negocio = {
  nombre: 'Dolcebella Spa',
  ciudad: 'Tijuana, Baja California',
  direccion: 'Blvd. Sánchez Taboada No. 10750-A, Zona Urbana Río, Tijuana',
  telefono: '664 634 2377',
  telefonoLink: 'tel:+526646342377',
  // Su botón de WhatsApp apunta a wa.me/52166434610, un número incompleto. Se usa el teléfono que publican (por confirmar).
  whatsapp: '526646342377',
  correo: 'atencion@dolcebellaspa.com.mx',
  horario: 'Lunes a sábado, de 9:00 a 19:00',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Blvd. Sánchez Taboada 10750-A, Zona Urbana Río, Tijuana, B.C.'),
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/dolcebellaspatj/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/DolceBellaSpa.Tj' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@dolcebella_spa' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Pasos de cada paquete. minutos = null cuando su sitio no dice cuánto dura ese paso.
export type Paso = { nombre: string; minutos: number | null };
export type Paquete = {
  id: string;
  nombre: string;
  duracion: string;
  minutosTotales: number;
  individual: number | null; // null: su sitio solo lo ofrece para 2 personas
  pareja: number;
  pasos: Paso[];
  incluye?: string;
};

export const paquetes: Paquete[] = [
  {
    id: 'time-relax', nombre: 'Time Relax', duracion: '80 min', minutosTotales: 80, individual: null, pareja: 2050,
    pasos: [{ nombre: 'Masaje antiestrés', minutos: 50 }, { nombre: 'Depuración de toxinas', minutos: 30 }],
  },
  {
    id: 'total-relax', nombre: 'Total Relax', duracion: '90 min', minutosTotales: 90, individual: 1700, pareja: 2950,
    pasos: [
      { nombre: 'Exfoliación y mascarilla en espalda', minutos: null },
      { nombre: 'Almohadilla caliente en espalda', minutos: null },
      { nombre: 'Masaje antiestrés', minutos: 50 },
      { nombre: 'Crioterapia facial', minutos: null },
    ],
  },
  {
    id: 'masauna', nombre: 'Masauna', duracion: '2 horas', minutosTotales: 120, individual: 1850, pareja: 3300,
    pasos: [
      { nombre: 'Sauna y aromaterapia', minutos: null },
      { nombre: 'Exfoliación corporal', minutos: null },
      { nombre: 'Masaje antiestrés', minutos: 50 },
      { nombre: 'Ducha en la regadera', minutos: null },
    ],
    incluye: 'Incluye bebida fría.',
  },
  {
    id: 'day-spa', nombre: 'Day Spa', duracion: '2 horas y media', minutosTotales: 150, individual: 2050, pareja: 3660,
    pasos: [
      { nombre: 'Facial de limpieza profunda', minutos: 60 },
      { nombre: 'Masaje antiestrés', minutos: 50 },
      { nombre: 'Depurador de toxinas', minutos: 30 },
    ],
    incluye: 'Incluye té y snacks.',
  },
];

export const notaPaquetes = 'Todos los paquetes incluyen aromaterapia y ambientación relajante. Se requiere cita previa y anticipo para reservar.';

export type Facial = { nombre: string; duracion: string; precio: string | null };
export const faciales: Facial[] = [
  { nombre: 'Limpieza profunda', duracion: '60 min', precio: '$980' },
  { nombre: 'Hidratante', duracion: '75 min', precio: '$1,200' },
  { nombre: 'Anti-acné', duracion: '90 min a 2 h', precio: '$1,300 a $1,500' },
  { nombre: 'Microdermoabrasión', duracion: '75 min', precio: '$1,300' },
  { nombre: 'Foto-facial con IPL', duracion: '45 a 60 min', precio: '$1,500' },
  { nombre: 'Hollywood Peel láser', duracion: '50 min', precio: '$1,500' },
  { nombre: 'Limpieza de espalda', duracion: '90 min a 2 h', precio: '$1,500 a $1,700' },
  { nombre: 'Dolce VIP', duracion: '90 min', precio: '$1,700' },
  { nombre: 'Dermaplaning + hidratante', duracion: '', precio: '$1,700' },
  { nombre: 'Rejuvenecimiento con diatermia', duracion: '60 min', precio: null },
  { nombre: 'Radiofrecuencia facial', duracion: '60 min', precio: null },
  { nombre: 'Tratamiento Dermapen', duracion: '60 min', precio: null },
];

export const masajes = [
  { nombre: 'Relajante antiestrés', duracion: '50 min' },
  { nombre: 'Terapéutico de tejido profundo', duracion: '60 min' },
  { nombre: 'Piedras calientes', duracion: '60 min' },
  { nombre: 'Prenatal (a partir del 4.º mes)', duracion: '50 min' },
  { nombre: 'Descontracturante de espalda', duracion: '30 min' },
  { nombre: 'Craneofacial', duracion: '30 min' },
  { nombre: 'Infantil (menores de 12 años)', duracion: '30 min' },
];

export const otros = ['Foto depilación IPL (por zona y sesión)', 'Electrocauterización de verrugas'];

export const espacios = [
  { foto: 'cabina.webp', nombre: 'Cabinas', texto: 'Luz cálida y camilla preparada para faciales y masajes.', ancho: 1280, alto: 851 },
  { foto: 'sauna.webp', nombre: 'Sauna y regadera', texto: 'La cabina de sauna del paquete Masauna, junto a la camilla.', ancho: 1024, alto: 681 },
  { foto: 'cabina-aparatos.webp', nombre: 'Cabina de aparatología', texto: 'Donde se hacen los faciales con equipo.', ancho: 1024, alto: 681 },
];

export const opiniones = [
  { texto: 'Excelente atención, todo a tiempo. Salí muy relajada.', autor: 'stephlestrange' },
  { texto: 'El trato muy amable, instalaciones muy agradables, ¡el masaje genial!', autor: 'Natalia Gilvaja' },
  { texto: 'Excelente masaje relajante por parte de Scar. Definitivamente lo recomendaría después de un día pesado.', autor: 'Victor Mendivil' },
  { texto: 'Son muy amables, profesionales y el facial fue muy relajante. ¡Súper recomendado!', autor: 'Ivan Cibrian' },
];
