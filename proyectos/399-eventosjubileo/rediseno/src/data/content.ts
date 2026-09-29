// Contenido de Eventos Jubileo. Todo sale de su sitio en vivo (eventosjubileo.com, revisado el 2026-09-29) y de
// investigacion/; nada es inventado. Su sitio no publica precios de los paquetes.

export const negocio = {
  nombre: 'Eventos Jubileo',
  direccion: 'Avenida Azcapotzalco 562, 02000 Ciudad de México',
  zona: 'Azcapotzalco, Ciudad de México',
  telefono: '55 1199 5749',
  telefonoLink: 'tel:+525511995749',
  whatsapp: '525511995749',
  whatsapp2: '525522704428',
  correo: 'info@eventosjubileo2019.com',
  horario: 'Atención de 11:00 a 19:30',
  estacionamiento: 'Estacionamiento propio, $60 por auto',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Eventos Jubileo, Avenida Azcapotzalco 562, 02000 Ciudad de México'),
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const tipos = [
  { id: 'xv', nombre: 'XV años' },
  { id: 'boda', nombre: 'Boda' },
  { id: 'aniversario', nombre: 'Aniversario' },
  { id: 'empresa', nombre: 'Empresa o conferencia' },
];

export const salones = [
  { id: 'casa', nombre: 'Casa del Rey', max: 80, texto: 'Salón y balcón con vista.', foto: 'balcon.webp', alt: 'Balcón del salón decorado con listones, junto a un muro verde y la escalera de cristal' },
  { id: 'gran', nombre: 'Gran Salón', max: 260, texto: 'Lobby, salón, terraza para fumar y balcón con zona lounge.', foto: 'salon-evento.webp', alt: 'Gran Salón montado con mesas redondas de mantel amarillo y luz morada durante un evento' },
];

// Horas base de un evento según su sitio.
export const tiempos = [
  { nombre: 'Recepción', minutos: 30 },
  { nombre: 'Fiesta', minutos: 300 },
  { nombre: 'Desaforo', minutos: 30 },
];

export const incluye = [
  { titulo: 'Montaje y servicio', texto: 'Mantel y cubremantel, meseros, vajilla, cristalería, refresco y hielo ilimitado.' },
  { titulo: 'Flores', texto: 'Centros de mesa y una cascada de flores naturales para la mesa principal.' },
  { titulo: 'Menú', texto: 'Menú a 3 tiempos (crema, sopa, pasta, ensalada, carnes); también taquizas, parrilladas y menú infantil.' },
  { titulo: 'Animación', texto: 'DJ con sistema de iluminación, pantallas y sonido.' },
  { titulo: 'Planeación', texto: 'Planeación y coordinación del evento.' },
  { titulo: 'Experiencia Paparazzi', texto: 'Opcional: video, foto, estudio, coreografías y alfombra roja.' },
];

export const galeria = [
  { foto: 'xv-retrato.webp', alt: 'Quinceañera con vestido verde posando frente a un muro de mármol', tipo: 'xv' },
  { foto: 'xv-estudio.webp', alt: 'Quinceañera sentada entre globos dorados con el número 15', tipo: 'xv' },
  { foto: 'boda.webp', alt: 'Novios abrazados con ramo de rosas frente a un muro de mármol', tipo: 'boda' },
  { foto: 'show-robot.webp', alt: 'Show de robot LED entre los invitados en la pista', tipo: 'aniversario' },
  { foto: 'empresa-conferencia.webp', alt: 'Ponente presentando frente a una pantalla en un evento de empresa', tipo: 'empresa' },
  { foto: 'empresa-buffet.webp', alt: 'Meseros sirviendo el buffet a los asistentes de un evento de empresa', tipo: 'empresa' },
  { foto: 'empresa-grupo.webp', alt: 'Foto de grupo de un equipo de empresa en el salón', tipo: 'empresa' },
];

export const espacios = [
  { foto: 'lobby.webp', alt: 'Lobby con candil, escalera de madera y muro de mármol', nombre: 'Lobby' },
  { foto: 'terraza-lounge.webp', alt: 'Terraza lounge con muro verde y barandal de madera', nombre: 'Terraza' },
  { foto: 'salon-vacio.webp', alt: 'Gran Salón con techo de molduras, ventanales y mesas montadas para una conferencia', nombre: 'Gran Salón de día' },
  { foto: 'fachada.webp', alt: 'Fachada del salón con el letrero Salón de Eventos y una corona navideña', nombre: 'Fachada' },
];
