// Contenido de Flow Barber, tomado de investigacion/crudo.json (inicio, servicios, nosotros, equipo y galería) y de la versión
// en español de su sitio en vivo (2026-10-09). Nada inventado; textos del estudio en CAMBIOS.md.
// Su sitio publica el teléfono +52 984 123 4567, que es de plantilla, y no tiene WhatsApp real: por eso las acciones son
// reservar en Fresha (su enlace de reservas), Instagram y Google Maps. Cuando den su número, ponlo en `whatsapp` y `telefono`.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Flow Barber',
  direccion: 'Calle 1 Sur entre 15 Avenida y 20 Avenida, Centro',
  ciudad: 'Playa del Carmen, Quintana Roo',
  reservar: 'https://www.fresha.com/es/a/flow-barber-playa-del-carmen-playa-del-carmen-calle-1-sur-jlj8tica/booking?allOffer=true&pId=2768083',
  instagram: 'https://www.instagram.com/flowbarberpdc/',
  instagramTxt: '@flowbarberpdc',
  resenaGoogle: 'https://share.google/xRqJNS1pDixmh7nTg',
  maps: 'https://www.google.com/maps/search/?api=1&query=Flow+Barber%2C+Calle+1+Sur%2C+Playa+del+Carmen',
  whatsapp: null as string | null, // [PENDIENTE] su número real
  telefono: null as string | null, // [PENDIENTE] su número real
};

export const lema = 'Flow Barber es una barbería moderna pensada para quienes valoran el diseño, la precisión y la experiencia. Un espacio tranquilo donde cada corte se trabaja con atención al detalle.';
export const historia = 'Flow Barber nace de nuestra pasión por la barbería. Por el sentimiento que nos genera ver a nuestros clientes sentirse al cien y las relaciones que hemos creado a lo largo de nuestra historia. Con todo lo que esto envuelve, hemos creado un nuevo espacio arquitectónico en Playa del Carmen donde cada visita es una experiencia única.';
export const filosofia = 'Creemos que el cuidado personal es una forma de respeto propio. Por eso, combinamos técnicas tradicionales de barbería con un ambiente moderno y relajante en el corazón de la Riviera Maya.';
export const pilares = ['Cortes a la medida', 'Cuidado facial', 'Talento profesional'];

// Precios y duraciones de su página de servicios.
export const servicios = [
  { id: 'corte', nombre: 'Corte de cabello', desc: 'Corte de cabello personalizado con acabado profesional, adaptado a tu estilo.', precio: 300, usd: 18, min: 45 },
  { id: 'barba', nombre: 'Corte de barba', desc: 'Definición y cuidado experto para una barba impecable.', precio: 300, usd: 18, min: 45 },
  { id: 'combo', nombre: 'Corte y barba', desc: 'El servicio completo: corte de cabello y perfilado de barba.', precio: 600, usd: 35, min: 90 },
  { id: 'nino', nombre: 'Corte infantil', desc: 'Cortes para niños en un ambiente relajado y profesional.', precio: 200, usd: 12, min: 30 },
] as const;

export const equipo = [
  { nombre: 'Topo', rol: 'Barbero principal', estilo: 'Cortes clásicos y fades', anos: 8, foto: 'team-topo' },
  { nombre: 'Samir Garduño', rol: 'Barbero profesional', estilo: 'Estilos modernos y tendencias', anos: 6, foto: 'team-samir' },
];

// Horario: [abre, cierra] en minutos desde medianoche; null = cerrado. Índice 0 = domingo.
export const horario: ([number, number] | null)[] = [null, [600, 1200], [600, 1200], [600, 1200], [600, 1200], [600, 1200], [600, 1080]];
export const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
