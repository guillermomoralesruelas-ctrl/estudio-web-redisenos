// Contenido de la Clínica Veterinaria del Dr. Memo, tomado de investigacion/crudo.json (inicio, servicios veterinarios,
// visítanos) e investigacion/resumen.json. Nada inventado. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Clínica Veterinaria del Dr. Memo',
  corto: 'Dr. Memo',
  lema: '¡Cuidar a tu mascota es un compromiso, pero hacerlo feliz es un placer!',
  experiencia: '15 años de experiencia nos avalan.',
  telefono: '442 224 3800',
  telefonoHref: 'tel:+524422243800',
  citas: '442 172 1841',
  citasHref: 'tel:+524421721841',
  whatsapp: '5214421721841',
  email: 'veterinariamemo@yahoo.com.mx',
  direccion: 'Calle Ignacio M. Altamirano 54 Nte., Col. Centro',
  ciudad: 'Querétaro, Qro. 76029',
  // Coordenadas del mapa de su sitio (20.597410, -100.388890)
  maps: 'https://www.google.com/maps/search/?api=1&query=20.597410%2C-100.388890',
  lat: 20.59741,
  lng: -100.38889,
};

export const wa = (msg: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;
export const waGeneral = wa('¡Hola! Me podría dar información sobre los servicios de veterinaria que ofrecen?');

// Horario del texto de su inicio: "Martes a Sábado de 10 am a 3 pm y de 5 pm – 8 pm. Domingos de 10 am a 3 pm. Los lunes está cerrado."
// (Su pie dice "Mar - Sáb 10:00 - 20:00" sin el corte de 3 a 5: pendiente de confirmar.)
// Índice de día como Date.getDay(): 0 domingo … 6 sábado. Turnos en horas decimales.
export const horario: Record<number, [number, number][]> = {
  0: [[10, 15]],
  1: [],
  2: [[10, 15], [17, 20]],
  3: [[10, 15], [17, 20]],
  4: [[10, 15], [17, 20]],
  5: [[10, 15], [17, 20]],
  6: [[10, 15], [17, 20]],
};
export const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Motivos de la cita: sus servicios (página /servicios-veterinarios y texto del inicio).
export const motivos = [
  { id: 'consulta', nombre: 'Consulta general', detalle: 'Consulta en medicina general' },
  { id: 'vacuna', nombre: 'Vacuna o desparasitación', detalle: 'Programas preventivos de salud' },
  { id: 'estetica', nombre: 'Estética', detalle: 'Estética canina y felina' },
  { id: 'dental', nombre: 'Limpieza dental', detalle: 'Profilaxis dental con instrumental dental' },
  { id: 'viaje', nombre: 'Trámite para viajar', detalle: 'Trámites para viajar con tu mascota' },
  { id: 'microchip', nombre: 'Microchip o placa', detalle: 'Aplicación de microchips y plaquitas de identificación' },
  { id: 'cirugia', nombre: 'Valoración de cirugía', detalle: 'Cirugía de tejidos blandos y ortopedia' },
  { id: 'estudios', nombre: 'Estudios', detalle: 'Radiología, ultrasonografía y patología diagnóstica' },
];

export const intro = [
  'Cuidar a tu compañero de cuatro patas es nuestro compromiso, por eso tenemos constantes mejoras en nuestras instalaciones, en donde realizamos desde medicina preventiva como vacunación y desparasitación, así como consulta médica general, hospitalización y estética canina y felina, además de la venta de productos y accesorios para mascotas.',
  'Somos médicos veterinarios aprobados y nuestra atención está enfocada a perros y gatos.',
];

export const servicios = [
  { nombre: 'Consulta en medicina general', texto: 'Atención por veterinarios certificados y médicos zootecnistas, enfocada a perros y gatos.' },
  { nombre: 'Medicina preventiva', texto: 'Vacunación, desparasitación y profilaxis dental.' },
  { nombre: 'Cirugía', texto: 'Cirugía de tejidos blandos y ortopedia. También hospitalización.' },
  { nombre: 'Estudios', texto: 'Expertos colaboradores en radiología y ultrasonografía; estudios hematológicos y de patología.' },
  { nombre: 'Viajes e identificación', texto: 'Trámites para viajar o exportar a tu mascota, plaquitas de identificación y colocación de microchips.' },
  { nombre: 'Cremación', texto: 'Si tu mascota ha partido de este mundo, también brindamos el servicio de cremación.' },
];

export const estetica = [
  'Cortes de pelo al estilo de cada raza',
  'Baños con agua calientita y productos adecuados para cada mascota',
  'Corte y pulido de uñas',
  'Limpieza de oídos y de sus glándulas anales',
  'Cepillado dental',
];

export const medicos = [
  { nombre: 'Guillermo Espíndola Martínez', cedula: '5291765' },
  { nombre: 'Alma del Carmen Luna Reséndiz', cedula: '5291769' },
];

export const pagos = ['Efectivo', 'Tarjeta de crédito y débito', 'Visa', 'Mastercard', 'AMEX', 'Transferencia', 'SPEI', 'CoDi', 'Depósito', 'PayPal', 'Mercado Pago', 'Apple Pay', 'Samsung Pay', 'Oxxo', 'Vales', 'Cheque'];
