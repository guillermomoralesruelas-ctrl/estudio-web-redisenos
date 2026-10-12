// Contenido de CARSA Inmobiliaria. Fuente: carsainmobiliaria.com (inicio, "¿Quiénes somos?", contacto y fichas), leído el 2026-10-12.
// No se inventan datos: el sitio no publica redes sociales, horarios, nombres de asesores ni año de fundación, así que no se muestran.

export const negocio = {
  nombre: 'CARSA Inmobiliaria',
  telefono: '686 255 1157',
  telLink: '+526862551157',
  whatsapp: '526862551157', // el que usa el botón de WhatsApp de sus fichas
  correo: 'carsamexicali@gmail.com',
  direccion: 'De los Pioneros 1140, Centro Cívico, C.P. 21000, Mexicali, B.C.',
  calle: 'De los Pioneros 1140',
  mapa: 'https://www.google.com/maps/search/?api=1&query=De+los+Pioneros+1140+Centro+C%C3%ADvico+21000+Mexicali',
  sitio: 'https://www.carsainmobiliaria.com',
  ventas: 'https://www.carsainmobiliaria.com/properties',
  rentas: 'https://www.carsainmobiliaria.com/rentals',
};

// Textos del sitio ("¿Quiénes somos?" y pie), tal cual.
export const quienes = 'Somos especialistas en el negocio inmobiliario. Tenemos experiencia en la compra, venta, alquiler y tasaciones de casas, departamentos y más. Contamos con un equipo de profesionales dispuestos a ayudarte en lo que necesites.';
export const servicio = 'Ofrecemos un servicio personalizado y de calidad para atenderte en todas tus necesidades sobre el mundo inmobiliario. Si necesitas asistencia o tienes preguntas, siéntete libre de contactarnos. Estaremos dispuestos a ayudarte.';

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
