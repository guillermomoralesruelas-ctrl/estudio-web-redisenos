const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'La Purificadora',
  ciudad: 'Puebla, Puebla',
  telefono: '+52 (222) 309 1920',
  whatsapp: '522221317724',
  direccion: 'Callejón de la 10 Norte 802, Barrio El Alto, Centro Histórico, Puebla',
  instagram: 'https://www.instagram.com/lapurificadora/',
  facebook: 'https://www.facebook.com/GrupoHabita',
  reservar: 'https://be.synxis.com/?adult=1&chain=5154&child=0&config=La%20Purificadora_SBE&currency=USD&hotel=17748&level=hotel&locale=en-US&rooms=1&theme=La%20Purificadora_SBE',
};

export const wa = (m: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;

export type Habitacion = {
  id: string;
  nombre: string;
  descripcion: string;
  detalles: string[];
  img: string;
  alt: string;
};

export const habitaciones: Habitacion[] = [
  {
    id: 'corner-suite',
    nombre: 'Corner Suite',
    descripcion: 'Cama king size y pared de piedra original del siglo XIX con escritorio.',
    detalles: ['King size', 'Pared de piedra s. XIX', 'Escritorio'],
    img: img('habitacion-corner.webp'),
    alt: 'Corner Suite — pared de piedra original del siglo XIX',
  },
  {
    id: 'corner-balcony',
    nombre: 'Corner Suite Balcony',
    descripcion: 'Pared de piedra original del siglo XIX, balcón y vista al patio.',
    detalles: ['King size', 'Balcón', 'Vista al patio'],
    img: img('habitacion-corner-balcony.webp'),
    alt: 'Corner Suite Balcony — balcón con vista al patio',
  },
  {
    id: 'top-suite',
    nombre: 'Top Suite',
    descripcion: 'La más espectacular del hotel, con amplia terraza y vistas al Centro de Convenciones y los Jardines de San Francisco.',
    detalles: ['King size', 'Terraza privada', 'Vista panorámica'],
    img: img('habitacion-top.webp'),
    alt: 'Top Suite — terraza con vistas al Centro Histórico de Puebla',
  },
  {
    id: 'superior',
    nombre: 'Superior',
    descripcion: 'Cama king con vista al patio o a los Jardines de San Francisco.',
    detalles: ['King size', 'Vista al patio o jardines'],
    img: img('habitacion-superior.webp'),
    alt: 'Habitación Superior con vista a los Jardines de San Francisco',
  },
  {
    id: 'superior-twin',
    nombre: 'Superior Twin',
    descripcion: 'Dos camas queen y ventanales con vista al patio o a los Jardines de San Francisco.',
    detalles: ['2 camas queen', 'Vista al patio o jardines'],
    img: img('habitacion-superior-twin.webp'),
    alt: 'Habitación Superior Twin',
  },
  {
    id: 'balcony',
    nombre: 'Balcony',
    descripcion: 'Cama king, segundo piso con balcón y vista al patio o Jardines de San Francisco.',
    detalles: ['King size', 'Segundo piso', 'Balcón'],
    img: img('habitacion-balcony.webp'),
    alt: 'Habitación Balcony — segundo piso con balcón',
  },
  {
    id: 'balcony-twin',
    nombre: 'Balcony Twin',
    descripcion: 'Dos camas queen con balcón y vistas al Jardín de San Francisco.',
    detalles: ['2 camas queen', 'Balcón', 'Vista al jardín'],
    img: img('habitacion-balcony-twin.webp'),
    alt: 'Habitación Balcony Twin con vistas al Jardín de San Francisco',
  },
];

export const fotosBanner = img('banner.webp');
export const fotosRestaurante = [
  { src: img('restaurante-exterior.webp'), alt: 'Exterior del restaurante de La Purificadora' },
  { src: img('restaurante-1.webp'), alt: 'Interior del restaurante, mesas de madera diseñadas por Legorreta' },
  { src: img('restaurante-2.webp'), alt: 'Detalle del restaurante de La Purificadora' },
];
export const fotosTerraza = [
  { src: img('terraza-1.webp'), alt: 'Terraza de La Purificadora, tercer piso con vistas al Centro Histórico' },
  { src: img('terraza-2.webp'), alt: 'Área al aire libre de la terraza' },
  { src: img('terraza-3.webp'), alt: 'Atardecer desde la terraza de La Purificadora' },
];
export const fotoBarrio = img('barrio.webp');
export const fotosEventos = [
  { src: img('eventos-1.webp'), alt: 'Salón de eventos de La Purificadora' },
  { src: img('eventos-2.webp'), alt: 'Configuración de evento en La Purificadora' },
];
