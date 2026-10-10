// Contenido de DM Studios (Destino Musical). Fuente: destinomusical.com (inicio, "Estudio de grabación", "Nosotros" y
// "Contacto"), leído el 2026-10-10. No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'DM Studios',
  empresa: 'Destino Musical',
  telefono: '(55) 5607 2090',
  telefonoE164: '525556072090',
  // [PENDIENTE] El sitio no publica WhatsApp; se usa el teléfono principal hasta que el cliente confirme uno.
  whatsapp: '525556072090',
  correo: 'info@destinomusical.com',
  direccion: 'Ejido San Lorenzo Tezonco 150, San Francisco Culhuacán de Santa Ana',
  ciudad: 'Coyoacán, 04260, Ciudad de México',
  horario: 'Lunes a viernes, 9:00 a 18:00',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ejido San Lorenzo Tezonco 150, Culhuacán, Coyoacán, 04260 CDMX'),
  tienda: 'https://www.destinomusical.com/shop',
};

// Servicios del estudio, en el orden de su página.
export const servicios = [
  { id: 'grabacion', nombre: 'Grabación' },
  { id: 'mezcla', nombre: 'Edición y mezcla' },
  { id: 'master', nombre: 'Masterización' },
  { id: 'produccion', nombre: 'Producción' },
  { id: 'post', nombre: 'Postproducción' },
  { id: 'doblaje', nombre: 'Doblaje' },
  { id: 'podcast', nombre: 'Podcast' },
];

// "Equipo · preamplificadores" (la página escribe "FOCUSRTIE").
export const preamps = ['API 3124', 'Focusrite ISA428', 'Avalon 737SP', 'Universal Audio 4110', 'Line 6 POD Pro XT'];

export const historia = [
  { anio: 1993, texto: 'Nace Destino Musical bajo el nombre Karaoke Box SA de CV.' },
  { anio: 1998, texto: 'Alianza con una compañía norteamericana para desarrollar hardware y software de sincronización de gráficos en los CD.' },
  { anio: 1999, texto: 'Se desarrollan y producen en su totalidad los CD+G en México.' },
  { anio: 2000, texto: 'Con 23 discos entran al mercado del retail en México.' },
  { anio: 2006, texto: 'Se construyen las nuevas oficinas, un almacén para 900,000 unidades y los estudios de grabación.' },
  { anio: 2007, texto: 'Abren oficinas y centro de distribución Destino Musical Inc. en Estados Unidos.' },
  { anio: 2013, texto: 'Desarrollan la app K-box Karaoke.' },
  { anio: 2017, texto: 'Lanzan su primer micrófono karaoke.' },
];

export const nosotros = [
  'Somos una empresa mexicana con más de 30 años de experiencia en la industria del entretenimiento, de la música y del karaoke.',
  'En nuestro estudio de grabación, con base en la Ciudad de México, creamos música, podcast, recuerdos y arte, y abrimos espacios para todo tipo de creativos que desean compartir su obra.',
  'Producimos y distribuimos pistas de karaoke en varios formatos y exportamos a 14 países, principalmente Estados Unidos y España.',
];
