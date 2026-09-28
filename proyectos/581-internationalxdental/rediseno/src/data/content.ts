// Contenido de International X Dental — tomado de investigacion/crudo.json y resumen.json.
// Regla: nada inventado. [PENDIENTE] = confirmar con el cliente.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'International X Dental',
  ciudad: 'Ciudad Juárez, Chihuahua, México',
  // Teléfonos verificados del sitio
  telUSA: '+18064161012',
  telMXJuarez: '+526566340040',
  telMXCancun: '+529983430987',
  // WhatsApp del botón flotante del sitio
  whatsapp: '526561380872',
  // Direcciones verificadas del crudo.json
  direccionJuarez: 'Av. Campos Eliseos #9388 L-6 Fracc. Campos Eliseos, Ciudad Juárez, Chih.',
  direccionCancun: 'Hospital Galenia, Av. Tulum y Av. Nizuc, 3er piso, Cancún, Q.R.',
  // Google Maps del sitio (goo.gl en el footer original)
  maps: 'https://goo.gl/maps/GUELAH4Mk5mMVDC1A',
  horarioSemana: 'Lunes a Viernes: 9:00 a.m. – 6:00 p.m.',
  horarioSabado: 'Sábados: 9:00 a.m. – 2:00 p.m.',
  horarioDomingo: 'Domingos: Cerrado',
  email: 'office@internationalx.dental',
  instagram: 'https://www.instagram.com/internationalxdentalclinic/',
  facebook: 'https://www.facebook.com/internationalxdentalclinic/',
  tiktok: 'https://www.tiktok.com/@internationalxteam',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const foto = img;

// Especialistas — del sitio original (crudo.json y páginas de especialistas)
export const especialistas = [
  {
    foto: 'dr-oswaldo.webp',
    nombre: 'Dr. Oswaldo José Hernández Tabata',
    especialidad: 'Director Médico',
  },
  {
    foto: 'dr-roger.webp',
    nombre: 'Dr. Roger Enrique Estrada Portuguez',
    especialidad: 'Ortodoncista',
  },
  {
    foto: 'dra-jacqueline.webp',
    nombre: 'Dra. Jacqueline Paola Lira Manríquez',
    especialidad: 'Odontología General',
  },
  {
    foto: 'dr-david.webp',
    nombre: 'Dr. Davis Alejandro Trevizo Luna',
    especialidad: 'Odontología General',
  },
  {
    foto: 'lic-maribel.webp',
    nombre: 'Lic. Maribel Jaramillo',
    especialidad: 'Coordinadora de Pacientes',
  },
  {
    foto: 'lic-miguel.webp',
    nombre: 'Lic. Miguel Ángel Contreras',
    especialidad: 'Coordinador de Pacientes',
  },
  {
    foto: 'dra-itzel.webp',
    nombre: 'Dra. Itzel García Cabral',
    especialidad: 'Odontología General',
  },
  {
    foto: 'dr-erick.webp',
    nombre: 'Dr. Erick Leyva Baca',
    especialidad: 'Periodoncista e Implantólogo',
  },
  {
    foto: 'dr-samir.webp',
    nombre: 'Dr. Samir Navarrete Esquivel',
    especialidad: 'Odontopediatra',
  },
];

// Testimonios reales del sitio
export const testimonios = [
  {
    nombre: 'daniel corchado',
    texto: 'I had a great experience came here for a extraction. Highly recommend it.',
  },
  {
    nombre: 'Choko Nava',
    texto: 'Excelente atención, fui por un tratamiento y quedé muy satisfecho. El lugar es moderno y muy limpio, desde que llegué me atendieron con amabilidad y rapidez.',
  },
  {
    nombre: 'Sr Guacamole',
    texto: 'El ambiente es muy agradable y el dentista sabe lo que hace. Sin duda lo recomiendo.',
  },
  {
    nombre: 'luis gibran enriquez frayre',
    texto: 'Muy buen servicio, me atendieron en tiempo y forma. La doctora se tomó el tiempo de informarme de otros problemas y me dio varias recomendaciones. Volvería sin problema.',
  },
];

// Servicios — del sitio original
export const servicios = [
  {
    foto: 'cosmetica.webp',
    nombre: 'Cosmética Dental',
    descripcion: '¿Quieres mejorar tu sonrisa? Diseño de sonrisa, carillas, coronas de zirconio y blanqueamiento para que te sientas más seguro.',
    items: ['Diseño de Sonrisa', 'Carillas de Porcelana', 'Carillas de Resina', 'Corona de Zirconio', 'Blanqueamiento'],
  },
  {
    foto: 'restaurativa.webp',
    nombre: 'Restauración Dental',
    descripcion: 'Recupera la funcionalidad de tu sonrisa con implantes, All-on-4, prótesis y ortodoncia usando técnicas avanzadas y materiales de alta calidad.',
    items: ['Implantes Dentales', 'All on 4 (6)', 'Snap In Denture', 'Puente de Zirconio', 'Ortodoncia'],
  },
  {
    foto: 'preventiva.webp',
    nombre: 'Prevención Dental',
    descripcion: 'Análisis exhaustivos y tratamientos personalizados para prevenir problemas futuros en tu salud bucal. Agenda una consulta con nuestros especialistas.',
    items: ['Limpiezas Dentales', 'Exámenes Dentales', 'Periodoncia', 'Extracciones Dentales'],
  },
];

// Comparador de ahorro (precios de referencia en USD)
// Precios en Juárez: de la página /en/pricesinternational/ (sitio real, no verificado en clon)
// Precios en EE.UU.: promedios nacionales publicados por CostHelper Dental 2024
// Se declaran como "referencia" para no hacer afirmaciones de precio exactas
export const tratamientosCosto = [
  { id: 'implante',    nombre: 'Implante dental',       precioMX: 900,   precioUSA: 3000 },
  { id: 'corona',      nombre: 'Corona de zirconio',    precioMX: 350,   precioUSA: 1200 },
  { id: 'allon4',      nombre: 'All-on-4',              precioMX: 6500,  precioUSA: 24000 },
  { id: 'carillas',    nombre: 'Carillas de porcelana', precioMX: 280,   precioUSA: 900 },
  { id: 'ortodoncia',  nombre: 'Ortodoncia completa',   precioMX: 1800,  precioUSA: 5000 },
  { id: 'blanqueo',    nombre: 'Blanqueamiento',        precioMX: 150,   precioUSA: 500 },
  { id: 'limpieza',    nombre: 'Limpieza dental',       precioMX: 45,    precioUSA: 200 },
];
