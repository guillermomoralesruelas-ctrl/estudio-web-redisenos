// Contenido de Entrevalle Hotel Boutique, tomado del sitio en vivo https://www.hotelentrevalle.com/ (español) y /en,
// páginas /habitaciones, /restaurante, /eva-restaurante, /masaje, /eventos, /contacto y /politicas, leídas el 2026-10-12.
// Regla: nada inventado. Los titulares cortos y los textos alternativos son del estudio; los datos son del hotel.

export const negocio = {
  nombre: 'Entrevalle Hotel Boutique',
  lema: 'En el corazón de la Ruta del Vino',
  zona: 'Valle de Guadalupe, Baja California',
  direccion: 'Km 88.9, Carretera Federal 3, C.P. 22766, Valle de Guadalupe, B.C.',
  // El WhatsApp y el teléfono de la versión en español y de sus políticas ("whatsapp al 646 288 05 26").
  whatsapp: '526462880526',
  telefono: '+52 646 288 0526',
  telefonoVer: '646 288 0526',
  // La versión en inglés del sitio anuncia otro número para llamar.
  telefono2: '+52 646 289 8801',
  telefono2Ver: '646 289 8801',
  correo: 'entrevallemx@gmail.com',
  reservar: 'https://www.reservaonline.support/hotelentrevalle/reservas.html',
  mapa: 'https://www.google.com/maps/place/Entre+Valle+Hotel+Boutique/@32.0098576,-116.6446344,17z/data=!3m1!4b1!4m8!3m7!1s0x80d8e54666d95307:0x2ba03d62fe044296!5m2!4m1!1i2!8m2!3d32.0099074!4d-116.64249',
  lat: 32.0099074,
  lng: -116.64249,
  instagram: 'https://instagram.com/entrevallemx/',
  facebook: 'https://facebook.com/Entrevalle-Hotel-Boutique-104818977791424',
  menuEs: 'https://irp.cdn-website.com/d29c506a/files/uploaded/Menu-+actualizado2.pdf',
  menuEn: 'https://irp.cdn-website.com/d29c506a/files/uploaded/Menu-+actualizado+ingle-s.pdf',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const intro =
  'Venga y explore nuestro Valle de Guadalupe mientras disfruta del sabor de su Ruta del Vino. Entrevalle Hotel Boutique cuenta con una ubicación privilegiada, lo que le permite llegar a las principales casas vinícolas y restaurantes en cuestión de minutos.';

export const cifras = [
  { valor: '17', texto: 'cabañas con terraza, cama y baño completo' },
  { valor: '7 km', texto: 'del centro del Valle de Guadalupe' },
  { valor: '15:00', texto: 'llegada · salida a las 11:00' },
];

// Sellos que el hotel publica en su portada (imágenes de Booking.com Traveller Review Awards).
export const premios = [
  { foto: 'premio-booking-2025', alt: 'Sello Booking.com Traveller Review Awards 2025 a Entrevalle Hotel Boutique, 9.2 de 10' },
  { foto: 'premio-booking-2026', alt: 'Sello Booking.com Traveller Review Awards 2026 a Entrevalle Hotel Boutique, 9.1 de 10' },
];

export const estancia = [
  'Si visita la Ruta del Vino durante un fin de semana o se quedará en el Valle de Guadalupe toda una semana, Entrevalle Hotel Boutique es el sitio perfecto para sentirse como en casa.',
  'Disfrute de asombrosas vistas desde cada una de nuestras 17 cabañas, con una terraza espaciosa, cama y baño completo. Visite el viñedo, el área de jacuzzis, alberca y el restaurante del hotel.',
  'Descansa en el corazón del Valle de Guadalupe, disfruta de hermosas vistas a las montañas y por las noches de un espectacular cielo estrellado, desde el confort de tu balcón privado o nuestra terraza.',
];

export type Habitacion = {
  id: string;
  nombre: string;
  personas: number;
  camas: string;
  m2: number;
  texto: string;
  fotos: { n: string; alt: string }[];
};

const comun =
  'aire acondicionado disponible, área de lectura con 2 sofás en un espacio muy acogedor y limpio, cafetera disponible. El baño es moderno y espacioso, con espejo de vanidad, jabón, shampoo, acondicionador y toallas.';

export const habitaciones: Habitacion[] = [
  {
    id: 'deluxe',
    nombre: 'Habitación Deluxe',
    personas: 2,
    camas: 'Una cama Queen',
    m2: 40,
    texto: `Habitación de lujo de 40 m² completamente nueva, pensada para tener un descanso placentero y vivir el ambiente del Valle de Guadalupe. Apta para dos personas en cama Queen, ${comun}`,
    fotos: [
      { n: 'deluxe-cama-vista', alt: 'Habitación Deluxe: cama Queen, techo de madera y ventanal hacia la terraza' },
      { n: 'deluxe-sala', alt: 'Área de lectura con dos sofás y una copa de vino sobre la silla de la terraza' },
      { n: 'deluxe-terraza', alt: 'Habitación Deluxe con mesa y sillas junto al ventanal y vista a los cerros' },
      { n: 'deluxe-balcon', alt: 'Dos sillas de madera en la terraza privada frente a la puerta corrediza' },
    ],
  },
  {
    id: 'cuadruple',
    nombre: 'Habitación Cuádruple Deluxe',
    personas: 4,
    camas: 'Dos camas dobles',
    m2: 40,
    texto: `Habitación de lujo de 40 m² completamente nueva, pensada para tener un descanso placentero y vivir el ambiente del Valle de Guadalupe. Apta para cuatro personas en dos camas dobles, ${comun}`,
    fotos: [
      { n: 'cuadruple-camas', alt: 'Habitación Cuádruple Deluxe con dos camas dobles y sillón naranja' },
      { n: 'cuadruple-terraza', alt: 'Habitación Cuádruple con puerta corrediza hacia la terraza' },
    ],
  },
];

export const enCadaHabitacion = ['Aire acondicionado', '2 sofás', 'Cafetera', 'Espejo de vanidad', 'Artículos de higiene personal', 'Toallas'];

export const amenidades = [
  'Wifi gratis', 'Alberca al aire libre', 'Terraza', 'Restaurante', 'Estacionamiento gratuito',
  'Aire acondicionado', 'Jacuzzi', 'Vista a las montañas', 'Masajes', 'Bicicletas',
];

export const restaurante = {
  nombre: 'EVA Restaurante',
  texto: [
    'Ofrecemos una experiencia gastronómica única, con una amplia variedad de opciones para satisfacer todos los gustos: desde exquisitos desayunos hasta cenas memorables, nuestro restaurante es el lugar perfecto para disfrutar con familia, pareja o entre amigos durante todo el año.',
    'Sumérjase en la atmósfera relajada y acogedora de nuestro restaurante, donde puede optar por disfrutar de su comida al aire libre o en nuestro confortable interior.',
  ],
  horario: [
    { dias: 'Lunes a jueves', horas: '9:00 a 20:00' },
    { dias: 'Viernes a domingo', horas: '9:00 a 21:00' },
  ],
  detalles: ['Vino y cocteles', 'Piano', 'Fogatero', 'Menú para todo el día', 'Ambiente familiar', 'Vista a las montañas'],
  fotos: [
    { n: 'eva-arrachera-vino', alt: 'Arrachera con verduras asadas y una copa de vino tinto en EVA Restaurante' },
    { n: 'eva-desayuno', alt: 'Huevos con aguacate, café de olla y jugo de naranja' },
    { n: 'eva-coctel-lavanda', alt: 'Coctel morado en copa con el logotipo de Entrevalle, entre lavandas' },
    { n: 'eva-terraza', alt: 'Comensales bajo las pérgolas de la terraza del restaurante' },
    { n: 'eva-margarita', alt: 'Margarita de mango con chamoy y limón' },
    { n: 'eva-interior', alt: 'Comedor interior de madera con lámpara de hierro y cuadro del valle' },
  ],
};

export const spa = {
  titulo: 'La mejor experiencia de spa entre viñedos en el Valle de Guadalupe',
  texto: 'Reserva tu estadía en Entrevalle Hotel Boutique y eleva tu experiencia con una exclusiva sesión de spa.',
  fotos: [
    { n: 'spa-pergola', alt: 'Camas de masaje bajo una pérgola de madera rodeada de pastos' },
    { n: 'spa-masaje', alt: 'Terapeutas dando masaje a una pareja al aire libre' },
    { n: 'spa-jacuzzi', alt: 'Pareja brindando con vino en el jacuzzi exterior' },
    { n: 'spa-batas', alt: 'Pareja en batas blancas caminando junto a la alberca' },
  ],
};

export const boda = {
  titulo: 'El encanto del Valle de Guadalupe',
  texto: 'Imagina tu ceremonia con una increíble vista al viñedo en compañía de tus seres más queridos y por la noche seguir festejando bajo un cielo estrellado y con la luna de testigo.',
  epoca:
    'Los mejores meses para celebrar tu boda en el Valle de Guadalupe son entre marzo y octubre, excepto julio y agosto, ya que durante estos dos meses es la temporada alta del valle por la celebración de los festivales de la Vendimia, por lo que los costos suelen subir y algunos viñedos abren su agenda durante estas fechas.',
};

// Calendario del elemento memorable. La clasificación sale de la respuesta del hotel a
// "¿Cuál es la mejor época para casarse en el Valle de Guadalupe?" (/eventos).
export type Temporada = 'recomendado' | 'vendimia' | 'consultar';
export const meses: { nombre: string; corto: string; t: Temporada }[] = [
  { nombre: 'enero', corto: 'Ene', t: 'consultar' },
  { nombre: 'febrero', corto: 'Feb', t: 'consultar' },
  { nombre: 'marzo', corto: 'Mar', t: 'recomendado' },
  { nombre: 'abril', corto: 'Abr', t: 'recomendado' },
  { nombre: 'mayo', corto: 'May', t: 'recomendado' },
  { nombre: 'junio', corto: 'Jun', t: 'recomendado' },
  { nombre: 'julio', corto: 'Jul', t: 'vendimia' },
  { nombre: 'agosto', corto: 'Ago', t: 'vendimia' },
  { nombre: 'septiembre', corto: 'Sep', t: 'recomendado' },
  { nombre: 'octubre', corto: 'Oct', t: 'recomendado' },
  { nombre: 'noviembre', corto: 'Nov', t: 'consultar' },
  { nombre: 'diciembre', corto: 'Dic', t: 'consultar' },
];

// Consideraciones para grupos, de /politicas.
export const grupos = [
  'Se considera grupo a las reservaciones confirmadas para 8 o más habitaciones.',
  'Reembolsable el 50% del depósito en cancelaciones hasta 30 días antes del registro.',
  'No reembolsable el 100% del depósito durante los 30 días antes del registro.',
  'Sin penalidad: modificaciones sujetas a disponibilidad hasta 60 días antes; la fecha se puede mover una sola vez.',
];

export const politicas = [
  { t: 'Llegada y salida', d: 'Check-in desde las 15:00 y check-out a las 11:00, con una hora de tolerancia si se avisa a recepción y se autoriza.' },
  { t: 'Cancelación', d: 'No reembolsable: se paga el total si se cancela en cualquier momento. Flexible 14 días: cancelación gratuita hasta 14 días antes de la llegada.' },
  { t: 'Formas de pago', d: 'Efectivo, PayPal, Zelle, depósito o transferencia bancaria y tarjeta de crédito o débito (Visa, MasterCard). Si pagas por depósito, envía tu comprobante a entrevallemx@gmail.com o por WhatsApp al 646 288 05 26.' },
  { t: 'Estacionamiento', d: 'Gratuito y privado en el hotel, sujeto a disponibilidad (sin cajones asignados).' },
  { t: 'Sin humo, sin mascotas', d: 'Prohibido fumar en habitaciones, restaurante, lobby y pasillos; la terraza es el área para fumar. No se permite el acceso con mascotas.' },
  { t: 'Bebidas propias', d: 'Para introducir bebidas alcohólicas se necesita autorización de la administración y cubrir la cuota de descorche.' },
];

export const preguntas = [
  { p: '¿Qué tan lejos está del centro del Valle de Guadalupe?', r: 'A sólo 7 km del centro del Valle de Guadalupe, sobre el km 88.9 de la Carretera Federal 3.' },
  { p: '¿Cómo llego desde el aeropuerto más cercano?', r: 'Del aeropuerto más cercano puedes llegar en autobús, en un lapso de 2 horas 30 minutos.' },
  { p: '¿Tienen alberca y jacuzzi?', r: 'Sí. El hotel tiene alberca al aire libre y área de jacuzzis.' },
  { p: '¿Hay limpieza diaria?', r: 'Sí, servicio diario de limpieza, de 9:00 a 17:00.' },
  { p: '¿Puedo facturar?', r: 'Sí. Envía tu constancia fiscal (no mayor a 3 meses), monto, método de pago y tipo de gasto a entrevallemx@gmail.com; la factura se procesa al momento de la salida.' },
];
