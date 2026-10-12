// Contenido de Grupo Fractal® by Arturo Bienes Raíces. Fuente: grupofractal.mx (inicio, ¿Quiénes somos?, Contáctanos y
// catálogo), leído el 2026-10-12. No se inventan datos: el sitio no publica calle ni número, solo la colonia.

export const negocio = {
  nombre: 'Grupo Fractal',
  marca: 'Grupo Fractal® by Arturo Bienes Raíces',
  telefono: '81 2888 8404',
  telefonoLink: '+528128888404',
  whatsapp: '528128888404',
  correo: 'contacto@grupofractal.mx',
  direccion: 'Col. Del Valle, San Pedro Garza García, N.L.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Col. Del Valle, San Pedro Garza García, Nuevo León'),
  sitio: 'https://www.grupofractal.mx',
  catalogo: 'https://www.grupofractal.mx/properties',
  arturo: 'https://www.arturobienesraices.com/',
  redes: [
    ['Instagram', 'https://www.instagram.com/grupofractal.mx'],
    ['TikTok', 'https://www.tiktok.com/@fractal.bienes.raices'],
    ['YouTube', 'https://www.youtube.com/@arturo.bienes.raices'],
  ] as [string, string][],
};

export const lema = 'En Grupo Fractal® nuestra prioridad es tu propiedad.';
export const intro = 'Somos asesores inmobiliarios especializados y certificados para la intermediación de compraventa de propiedades de lujo en San Pedro Garza García y Monterrey.';
export const equipo = 'Nuestro equipo de asesores está especializado en desarrollar procesos comerciales robustos e integrales para brindarte una experiencia de compraventa efectiva. Nos enfocamos en mostrar lo mejor de tu propiedad de una forma profesional.';

// "¿Qué le ofrecemos en Grupo Fractal?" (página ¿Quiénes somos?), en su orden.
export const ofrecemos: { t: string; d: string }[] = [
  { t: 'Asesoría integral', d: 'Asesoramiento en la compra, venta o renta de propiedades. Conocemos a fondo el mercado de San Pedro Garza García y Monterrey, actualizados con las últimas tendencias y valores.' },
  { t: 'Valoración de propiedades', d: 'Un análisis detallado para determinar el precio adecuado de tu inmueble, para que se posicione de forma competitiva en el mercado.' },
  { t: 'Marketing efectivo', d: 'Estrategias adaptadas que incluyen fotografías profesionales, video-recorridos y promoción en plataformas digitales para atraer a potenciales compradores.' },
  { t: 'Negociación experta', d: 'Manejamos las negociaciones buscando siempre el mejor acuerdo para nuestros clientes, ya sea al comprar o vender una propiedad.' },
  { t: 'Asistencia legal', d: 'Asesoría legal prioritaria para que los trámites notariales y documentos estén en orden, con tranquilidad en cada transacción.' },
  { t: 'Atención personalizada', d: 'Cada cliente es único: entendemos tus necesidades y te damos un servicio a la medida, acompañándote de inicio a fin.' },
];

export const mision = 'Facilitar el proceso inmobiliario en el segmento de lujo, transformando la experiencia de compraventa al hacerla más efectiva para las partes.';
export const record = 'Contamos con múltiples casos de éxito, vendiendo propiedades en tiempo récord, incluso cuando éstas llevan publicadas meses en el mercado con otras inmobiliarias y asesores. Con una estrategia digital bien planificada, una excepcional atención a los clientes y nuestra experiencia en negociaciones de alto nivel.';
export const especialidad = 'Nos especializamos en propiedades de 20 millones de pesos en adelante en San Pedro Garza García y Monterrey.';
