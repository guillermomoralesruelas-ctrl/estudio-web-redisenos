// Contenido de Cervus Barbería. Todo sale de su sitio (investigacion/crudo.json: inicio y tendencias); nada es inventado.
// Precios en pesos mexicanos.

// Su sitio no publica WhatsApp. Por regla se usa el teléfono principal (33 3503 5280) como WhatsApp: PENDIENTE confirmar.
export const negocio = {
  nombre: 'Cervus Barbería',
  direccion: 'San Cristóbal 713, Zoquipan, Zapopan, Jalisco',
  telefono: '33 3503 5280',
  telefonoLink: 'tel:+523335035280',
  whatsapp: '523335035280',
  correo: 'contacto@cervusbarberia.com',
  reservas: 'https://cervusbarberia.setmore.com/',
  mapa: 'https://maps.app.goo.gl/RGoGncLq5MuJ7We97',
  instagram: 'https://www.instagram.com/cervusbarberia',
  horario: [
    { dias: 'Lunes a viernes', horas: '10:00 a 20:00' },
    { dias: 'Sábado', horas: '10:00 a 16:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const servicios = [
  { nombre: 'Contornos', minutos: 25, precio: 140, texto: 'Líneas y contornos precisos. Para mantener tu corte fresco entre visitas.' },
  { nombre: 'Barba con máquina', minutos: 25, precio: 180, texto: 'Arreglo de barba con máquina. Forma limpia, líneas definidas.' },
  { nombre: 'Ritual Cervus barba con navaja', minutos: 30, precio: 220, texto: 'Perfilado, toalla caliente, aceites y masaje.' },
  { nombre: 'Corte', minutos: 40, precio: 230, texto: 'Corte personalizado según tu estilo. Tijera, máquina y acabado preciso.' },
  { nombre: 'Corte niño', minutos: 40, precio: 180, texto: 'Corte especial para los más pequeños. Paciencia, técnica y ambiente relajado.' },
  { nombre: 'Corte y barba con máquina', minutos: 60, precio: 340, texto: 'Corte completo más arreglo de barba. Look definido en una sola sesión.' },
  { nombre: 'Ritual Cervus corte y barba', minutos: 80, precio: 380, texto: 'La experiencia completa: corte, barba, toalla caliente y productos premium.' },
];

export const barberos = [
  { nombre: 'Jesse', puesto: 'Senior barber', texto: 'Enfocado en el detalle, la atención personalizada y una experiencia cómoda para cada cliente.', especialidad: 'Barbería clásica, trabajo a tijera y ritual de barba.', foto: 'barbero-jesse.webp' },
  { nombre: 'Diego', puesto: 'Junior barber', texto: 'Disciplina, constancia y ganas de perfeccionar cada detalle en cada servicio.', especialidad: 'Cortes clásicos y trabajo a tijera.', foto: 'barbero-diego.webp' },
];

export const tendencias = ['Textured Crop', 'Low Taper Fade', 'Curtains 90s', 'Modern Mullet', 'French Crop', 'Slick Back Flow', 'Mid Length Flow', 'Soft Side Part', 'Burst Fade Crop', 'Buzz Cut Premium', 'Curly Taper', 'Pompadour Moderno'];
