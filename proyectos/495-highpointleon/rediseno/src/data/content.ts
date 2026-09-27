// Contenido de High Point León — datos reales del sitio original y brief.
// Regla: nada inventado. Fuente: investigacion/crudo.json y brief del proyecto.

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'High Point León',
  ciudad: 'León, Guanajuato',
  telefono: '5525386374',
  whatsapp: '5525386374',
  email: 'xael@inside.com',
  direccion: 'Blvd. Aeropuerto esq. Blvd Delta, Villas Santa Julia, León, Gto.',
  mapa: 'https://maps.app.goo.gl/habQpTFy41v8kGNv5',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const foto = img;

// WhatsApp prellenados por tipo de departamento
export const waLinks = {
  general: wa('Hola, vi el sitio de High Point León y me interesa conocer más sobre los departamentos.'),
  rec1: wa('Hola, me interesa un departamento de 1 recámara en High Point León. ¿Pueden darme más información?'),
  rec2: wa('Hola, me interesa un departamento de 2 recámaras en High Point León. ¿Pueden darme más información?'),
  rec3: wa('Hola, me interesa un departamento de 3 recámaras en High Point León. ¿Pueden darme más información?'),
};

// Tipologías de departamentos con precio y metros
export const tipologias = [
  {
    id: 'rec1',
    label: '1 Recámara',
    precioBase: 2800000,
    metros: ['38.35 m²', '76.67 m²'],
    waLink: waLinks.rec1,
  },
  {
    id: 'rec2',
    label: '2 Recámaras',
    precioBase: 4200000,
    metros: ['90.45 m²', '90.9 m²'],
    waLink: waLinks.rec2,
  },
  {
    id: 'rec3',
    label: '3 Recámaras',
    precioBase: 6000000,
    metros: ['100.61 m²', '100.17 m²', '100.15 m²'],
    waLink: waLinks.rec3,
  },
];

export const plusvalia = 0.111; // 11.10% anualizado León 2024

// Amenidades
export const amenidades = [
  { nombre: 'Lobby',              foto: foto('leon/amenidad32.jpg') },
  { nombre: 'Ludoteca',           foto: foto('leon/amenidad36.jpg') },
  { nombre: 'Gimnasio',           foto: foto('leon/amenidad40.jpg') },
  { nombre: 'Salón de adultos',   foto: foto('leon/amenidad44.jpg') },
  { nombre: 'Business center',    foto: foto('leon/amenidad48.jpg') },
  { nombre: 'Game room',          foto: foto('leon/amenidad52.jpg') },
  { nombre: 'Pet park',           foto: foto('leon/amenidad56.jpg') },
  { nombre: 'Asador',             foto: foto('leon/amenidad60.jpg') },
  { nombre: 'Alberca',            foto: foto('leon/amenidad64.jpg') },
  { nombre: 'Play ground',        foto: foto('leon/amenidad68.jpg') },
  { nombre: 'Sala privada',       foto: foto('leon/amenidad72.jpg') },
];

// Acabados
export const acabados = [
  { nombre: 'Acabados Generales', foto: foto('leon/acabado1.png') },
  { nombre: 'Acabados Pisos',     foto: foto('leon/acabado2.png') },
  { nombre: 'Acabados Baño',      foto: foto('leon/acabado3.png') },
  { nombre: 'Accesorios Baño',    foto: foto('leon/acabado4.png') },
  { nombre: 'Acabados Cocina',    foto: foto('leon/acabado5.png') },
  { nombre: 'Accesorios Cocina',  foto: foto('leon/acabado6.png') },
];

// Razones para invertir (textos reales del sitio)
export const razones = [
  {
    titulo: 'Alta plusvalía',
    texto: 'En 2024, León registró una plusvalía anualizada del 11.10%, una de las más altas a nivel nacional. Los precios de preventa maximizan tu retorno.',
  },
  {
    titulo: 'Precio de preventa',
    texto: 'Al invertir en preventa eres de los primeros en elegir tu departamento. Ya está construida toda la estructura.',
  },
  {
    titulo: 'Formas de pago flexibles',
    texto: 'Aceptamos múltiples formas de pago: cofinanciamientos, Infonavit, instituciones bancarias y más.',
  },
  {
    titulo: 'Seguridad 24/7',
    texto: 'Vigilancia permanente para que vivas con la tranquilidad que mereces y la certeza de inversión que respalda tu patrimonio.',
  },
  {
    titulo: 'Respaldo de Grupo OR-B',
    texto: 'Más de 15 años en el mercado. Han construido Mítikah, The St. Regis Mexico City y The St. Regis Punta Mita.',
  },
  {
    titulo: 'Rendimiento en renta',
    texto: 'Rentalo en Airbnb o por períodos largos a estudiantes, médicos, empleados de la zona industrial y familiares de pacientes del Hospital MAC.',
  },
];

// Puntos cercanos — datos reales del sitio
export const puntosUbicacion = [
  { nombre: 'Plaza Mayor',                    km: '4.5 km' },
  { nombre: 'Parque Metropolitano de León',   km: '3.8 km' },
  { nombre: 'Instituto Tecnológico de León',  km: '4 km' },
  { nombre: 'Universidad Iberoamericana',     km: '5.5 km' },
  { nombre: 'Hospital MAC',                   km: 'En la zona' },
  { nombre: 'Aeropuerto Internacional Bajío', km: '23 km' },
  { nombre: 'Universidad de Guanajuato',      km: '6.8 km' },
  { nombre: 'Plaza del Zapato',               km: '6.5 km' },
  { nombre: 'Centro Comercial Altacia',       km: '5.8 km' },
  { nombre: 'Estadio León',                   km: '6.2 km' },
];
