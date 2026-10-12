// Datos de Firma Inmobiliaria tomados de su sitio en vivo (https://www.firmainmobiliaria.com/, inicio, /about y /contact) el 2026-10-12.
export const negocio = {
  nombre: 'Firma Inmobiliaria',
  telefono: '33 1961 1173',
  telefonoHref: 'tel:+523319611173',
  whatsapp: '523319611173', // el sitio enlaza https://wa.me/523319611173
  direccion: 'Av. Unión 126, Col. Americana, Lafayette',
  cp: '44160',
  ciudad: 'Guadalajara, Jal.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av Unión 126, Col Americana, Lafayette, 44160 Guadalajara, Jal.'),
  sitio: 'https://www.firmainmobiliaria.com',
};

// Textos del sitio (portada y "Acerca de").
export const titular = 'Encuentra tu próxima casa';
export const intro = 'Nosotros te brindamos un servicio personalizado y de calidad para ayudarte con tu búsqueda inmobiliaria. Si necesitas asistencia o tienes preguntas, siéntete libre de contactarnos.';
export const acerca = [
  'Somos especialistas en el negocio inmobiliario.',
  'Tenemos experiencia en la compra, venta, alquiler y tasaciones de casas, departamentos y más.',
  'Contamos con un equipo de profesionales dispuestos a ayudarte en lo que necesites.',
];
export const servicios = ['Compra', 'Venta', 'Alquiler', 'Tasaciones'];

// Conteo del filtro de su catálogo (página /nueva-página4) el 2026-10-12.
export const catalogo = {
  total: 7852,
  mexico: 7810,
  eeuu: 42,
  tipos: [
    ['Departamentos', 2671],
    ['Terrenos', 2189],
    ['Casas', 1596],
    ['Casas en condominio', 646],
  ] as [string, number][],
};

// Destinos del menú de su sitio (Playa, Bosque, Industria) y las ligas a su catálogo.
export const destinosMenu = {
  playa: ['Puerto Vallarta', 'Cancún', 'Nuevo Vallarta', 'Bucerías', 'Punta Mita', 'Sayulita', 'San Pancho', 'Lo de Marcos', 'Playa del Carmen', 'Tulum'],
  bosque: ['Mazamitla', 'Tapalpa'],
  industria: ['Bodega comercial', 'Bodega industrial', 'Naves industriales'],
};
