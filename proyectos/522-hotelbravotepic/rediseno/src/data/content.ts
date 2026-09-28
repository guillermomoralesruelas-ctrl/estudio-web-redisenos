// Contenido del Hotel Bravo Tepic (Tepic, Nayarit).
// Textos copiados de investigacion/crudo.json (hotelbravotepic.com.mx: inicio, /acerca-de, /habitaciones y /contacto,
// 2026-09-26). Lo único que crudo.json no trae son los cuatro números de "Acerca de Tepic, Nayarit" (ahí salen como 0
// porque son contadores animados): se tomaron del atributo data-end-value de /acerca-de, descargada con curl el
// 2026-09-26. Erratas corregidas ("estuvierán", "sálon", "Nyarit", "programadolo", "Sígenos").
// Lo nuevo (títulos, botones, mensajes de WhatsApp y textos de "¿Cómo quieres dormir?") está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** El sitio no publica WhatsApp: se usa el teléfono principal. Pendiente de confirmar con el hotel (CAMBIOS.md). */
export const WA = '523112129565';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, me comunico desde su sitio web.';

export const hotel = {
  nombre: 'Hotel Bravo Tepic',
  lema: 'Hospédate y combina negocios, descanso y diversión',
  sublema: 'Combina negocios, descanso y diversión',
  texto: 'Ofrecemos atención precisa para hacer sentir a nuestros clientes como si estuvieran en casa, proporcionando un servicio de alto rendimiento y hospedaje de calidad; seguro e ideal para combinar negocios, descanso y diversión.',
  ubicados: 'Estamos ubicados en Calle Bravo #186 pte. en el Centro de Tepic, Nayarit.',
  cierre: 'Hotel Bravo es su mejor opción de hospedaje en Tepic, la capital de Nayarit.',
  cerca: ['A 15 minutos de la central camionera', 'A 30 minutos de la playa, en el nuevo San Blas, Nayarit'],
  humo: {
    titulo: 'Hotel Bravo, un espacio libre de humo de tabaco',
    texto: 'A partir del 15 de enero de 2023, por disposición oficial, queda prohibido el ingreso y el consumo de productos con tabaco y/o nicotina (cigarros, puros, vapeadores, etc.) dentro de las instalaciones del hotel (habitaciones y áreas comunes). Lo anterior, cumpliendo con las disposiciones del reglamento de la Ley General para el Control del Tabaco.',
  },
  direccion: 'Bravo #186 Pte., Col. Centro, Tepic, Nayarit, México',
  telefonos: [
    { visible: '(311) 212-9565', href: 'tel:+523112129565' },
    { visible: '(311) 212-0327', href: 'tel:+523112120327' },
  ],
  email: 'reservaciones@hotelbravotepic.com.mx',
  facebook: 'https://www.facebook.com/hotelbravotepic',
  contactoTexto: 'Reservación de habitaciones, tarifas, salones, promociones e información en general.',
  whatsapp: wa(`${saludo} Quisiera información sobre habitaciones en el Hotel Bravo Tepic.`),
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Bravo+Tepic+Bravo+186+Pte+Centro+Tepic+Nayarit',
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.8124622074365!2d-104.89581928541313!3d21.51506447637515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736555a039803%3A0x218f31852c9890c!2sHotel%20Bravo%20Tepic!5e0!3m2!1ses!2smx!4v1587811479033!5m2!1ses!2smx',
  logo: f('logo-hotel-bravo', 300, 135, 'Hotel Bravo'),
  lobby: f('lobby', 1600, 1000, 'Lobby del Hotel Bravo: sillones de piel color vino, piso claro, plantas, recepción al fondo y un pasillo con barandal en el piso de arriba'),
};

export type Cama = 'individual' | 'matrimonial' | 'king';
export type Habitacion = {
  id: string;
  nombre: string;
  desde: number; // "Desde $… MXN por noche" del sitio
  camas: { tipo: Cama; n: number };
  camasTexto: string; // de la lista de /habitaciones ("1 MATRIMONIAL"), en minúsculas
  clima: 'ventilador' | 'aire';
  foto?: Foto;
};

/** Lo que /habitaciones lista en las cuatro, además de camas y clima. */
export const incluyenTodas = 'Agua caliente, T.V. por cable y pago con tarjetas bancarias';

// Orden del sitio en /habitaciones: Doble, Doble Matrimonial, Familiar y King Size (aquí, de menor a mayor precio).
export const habitaciones: Habitacion[] = [
  {
    id: 'doble', nombre: 'Habitación Doble', desde: 650, camas: { tipo: 'matrimonial', n: 1 }, camasTexto: '1 cama matrimonial', clima: 'ventilador',
    foto: f('habitacion-doble', 1200, 750, 'Habitación Doble: camas con colcha a cuadros azul y arena, cortinas azules, tocador con espejo, ventilador de torre y pantalla en la pared'),
  },
  {
    id: 'king', nombre: 'Habitación King Size', desde: 700, camas: { tipo: 'king', n: 1 }, camasTexto: '1 cama king size', clima: 'aire',
    foto: f('habitacion-king-size', 1200, 750, 'Habitación King Size: cama grande con cabecera de madera y colcha a cuadros azul y arena, cortinas azules, clóset y pantalla'),
  },
  {
    id: 'doble-matrimonial', nombre: 'Habitación Doble Matrimonial', desde: 1350, camas: { tipo: 'matrimonial', n: 2 }, camasTexto: '2 camas matrimoniales', clima: 'aire',
    foto: f('habitacion-doble-matrimonial', 1200, 750, 'Habitación Doble Matrimonial: dos ventanales con cortinas azules, puerta de madera, tocador y cama con colcha a cuadros azul y arena'),
  },
  {
    id: 'familiar', nombre: 'Habitación Familiar', desde: 2100, camas: { tipo: 'individual', n: 6 }, camasTexto: '6 camas individuales', clima: 'ventilador',
  },
];

export const promociones = {
  noche: {
    titulo: '¡Noche gratis!',
    grande: '1 noche',
    subtitulo: 'En estancias familiares o de negocios extendidas',
    texto: 'Recibe una noche gratis al reservar 6 noches consecutivas.',
  },
  salon: {
    titulo: '¡Precio especial!',
    precio: 150,
    subtitulo: 'Precio por hora en renta de salón para negocios',
    texto: 'Incluye mobiliario con hasta 5 mesas y sus sillas, mantelería y botellas individuales de agua.',
  },
};

export const servicios = {
  titulo: 'Servicios',
  subtitulo: 'Amenidades que se incluyen y/o con costo adicional',
  lista: [
    { nombre: 'Agua caliente', texto: 'Agua caliente las 24 horas y toallas en todas las habitaciones' },
    { nombre: 'T.V. por cable', texto: 'Televisión por cable con una gran variedad de canales' },
    { nombre: 'Internet', texto: 'Internet de alta velocidad con puntos de conexión Wi-Fi en todo el hotel' },
    { nombre: 'Clima', texto: 'Ventilador y/o aire acondicionado en todas las habitaciones' },
    { nombre: 'Pago con tarjeta', texto: 'Pago mediante tarjetas bancarias de crédito/débito sin costo extra' },
    { nombre: 'Estacionamiento', texto: 'Estacionamiento privado con sistema de circuito cerrado de seguridad' },
    { nombre: 'Despertador', texto: 'Servicio de despertador y recordatorios programados en recepción' },
    { nombre: 'Personas extra', texto: 'Personas extra por habitación según capacidad de habitaciones' },
    { nombre: 'Seguridad', texto: 'Vigilancia y circuito cerrado de seguridad las 24 horas en todas las instalaciones' },
  ],
};

export const tepic = {
  titulo: 'Acerca de Tepic, Nayarit',
  subtitulo: 'Lugar de piedras macizas',
  texto: 'Tepic de Nervo (en honor al poeta nayarita Amado Nervo) es la capital de Nayarit y cabecera del municipio de Tepic. Es la ciudad más grande y poblada del estado de Nayarit.',
  // data-end-value de los contadores de /acerca-de (2026-09-26)
  numeros: [
    { valor: '1531', texto: 'Es el año de la fundación de la ciudad' },
    { valor: '2,274', texto: 'Son los kilómetros de territorio' },
    { valor: '471 mil', texto: 'Son los habitantes de la ciudad' },
    { valor: '30', texto: 'Minutos de distancia de la playa' },
  ],
  fotos: [
    f('tepic-atardecer', 1600, 1023, 'Foto de la ciudad, no del hotel: atardecer sobre Tepic con un volcán y nubes bajas al fondo'),
    f('bellavista', 1181, 787, 'Foto de la zona, no del hotel: antigua fábrica de Bellavista, con arcos de piedra y una locomotora de vapor sobre el pasto'),
  ],
};
