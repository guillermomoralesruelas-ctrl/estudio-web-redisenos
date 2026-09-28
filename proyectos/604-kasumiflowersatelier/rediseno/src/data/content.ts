const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Kasumi Flowers Atelier',
  descripcion:
    'Florería de autor en Oaxaca de Juárez especializada en diseños florales premium para bodas boutique, regalos especiales y proyectos corporativos.',
  email: 'info@kasumiflowers.com',
  tienda: 'https://www.kasumiflowers.com/shop',
  instagram: 'https://www.instagram.com/kasumiflowersatelier/',
  facebook: 'https://www.facebook.com/KasumiFlorerias',
  tiktok: 'https://www.tiktok.com/@kasumifloreria',
  horario: {
    semana: 'Lun – Vie: 8:00 am – 7:00 pm',
    sabado: 'Sáb: 8:00 am – 5:00 pm',
  },
  sucursalOaxaca: {
    ciudad: 'Oaxaca de Juárez',
    direccion: 'Jazmines 618-A, Col. Reforma',
    cp: 'C.P. 68050, Oaxaca, México',
    telefonos: ['+52 (951) 207 7809', '+52 (951) 342 9409'],
    tel: 'tel:+529512077809',
    mapaEmbed:
      'https://maps.google.com/maps?q=Jazmines+618-A,+Col+Reforma,+Oaxaca+de+Juarez,+Oaxaca,+Mexico&output=embed&z=16',
  },
  sucursalChiapas: {
    ciudad: 'Tuxtla Gutiérrez, Chiapas',
    direccion: 'Av. 3ra Norte Poniente 409, Col. Moctezuma',
    cp: 'Tuxtla Gutiérrez, Chiapas, México',
    telefonos: ['+52 (961) 334 0267'],
    tel: 'tel:+529613340267',
    mapaEmbed:
      'https://maps.google.com/maps?q=Av+3ra+Norte+Poniente+409,+Col+Moctezuma,+Tuxtla+Gutierrez,+Chiapas,+Mexico&output=embed&z=16',
  },
};

export type Producto = {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  img: string;
  alt: string;
};

export const productos: Producto[] = [
  {
    id: 'rojo-majestuoso',
    nombre: 'Rojo Majestuoso Signature',
    categoria: 'Signature',
    precio: 2950,
    // Archivo descargado con %20 literal en el nombre → doble codificación necesaria en URL
    img: img('PLANTILLA%2520KASUMI%2520flor%2520verde%2520copia4.jpg'),
    alt: 'Arreglo floral Rojo Majestuoso Signature de Kasumi',
  },
  {
    id: 'esencia-floral',
    nombre: 'Esencia Floral Lujo',
    categoria: 'Lujo',
    precio: 3250,
    img: img('con_logo_1771385920071.png'),
    alt: 'Arreglo floral Esencia Floral Lujo de Kasumi',
  },
  {
    id: 'gran-duquesa',
    nombre: 'Edición Gran Duquesa Collection',
    categoria: 'Collection',
    precio: 4850,
    img: img('dulce_armonia_web.jpg'),
    alt: 'Arreglo floral Edición Gran Duquesa Collection de Kasumi',
  },
];

export const talleres = [
  {
    fecha: 'ABR 12',
    titulo: 'Centros de Mesa Estilo Jardín',
    nivel: 'Principiante',
    precio: 1800,
    lugar: 'Atelier Kasumi, Oaxaca',
  },
  {
    fecha: 'MAY 04',
    titulo: 'Ramos de Mano & Wrapping',
    nivel: 'Intermedio',
    precio: 2800,
    lugar: 'Atelier Kasumi, Oaxaca',
  },
];

export const fotos = {
  hero: img('opt_hero.jpg'),
  bodas: img('creation_2364291019_1770752937587.jpg'),
  talleresBg: img('freepik__candid-i-with-natural-textures-and-highly-realisti__7_1770752486211.png'),
  fondoOscuro: img('FONDO_OSCURO_1770752914362.jpg'),
  isotipo: img('ISOTIPO_1770752914363.png'),
};
