const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Casa Tunkul',
  ciudad: 'Mérida, Yucatán',
  barrio: 'Barrio de Santiago',
  email: 'jrivera@tunkul.mx',
  direccion: 'Calle 55 No. 559 B entre calles 72 y 74, Barrio de Santiago, Centro, Mérida, Yucatán',
  reservar: 'https://hotels.cloudbeds.com/reservation/4yhpKG',
  mapaEmbed:
    'https://maps.google.com/maps?q=Calle+55+No.+559+B,+Barrio+de+Santiago,+Merida,+Yucatan,+Mexico&output=embed&z=16',
};

export type Suite = {
  id: string;
  nombre: string;
  descripcion: string;
  detalles: string[];
  img: string;
  alt: string;
};

export const suites: Suite[] = [
  {
    id: 'king-tina',
    nombre: 'Habitación King con Tina',
    descripcion: 'La suite más exclusiva: cama king size, tina independiente, baño amplio, cocineta de diseño y vista doble a la calle y al jardín central.',
    detalles: [
      'Cama king size',
      'Tina independiente',
      'Cocineta completa (Nespresso, estufa de inducción, frigobar)',
      'Pantalla LCD 55"',
      'Vista a calle y jardín',
    ],
    img: img('room-1.jpg'),
    alt: 'Habitación King con Tina — suite más exclusiva de Casa Tunkul',
  },
  {
    id: 'queen-calida',
    nombre: 'Habitación Queen Cálida',
    descripcion: 'Suite íntima y acogedora con cama queen size, baño privado amplio, cocineta completa y vista al jardín central.',
    detalles: [
      'Cama queen size',
      'Baño privado amplio',
      'Cocineta completa (Nespresso, estufa de inducción, frigobar)',
      'Pantalla LCD 50"',
      'Vista al jardín central',
    ],
    img: img('room-2.jpg'),
    alt: 'Habitación Queen Cálida — suite íntima con vista al jardín de Casa Tunkul',
  },
  {
    id: 'suite-armonica',
    nombre: 'Suite Armónica King',
    descripcion: 'La suite más espaciosa: cama king size, baño con luz natural cenital, cocineta completa y vista a la piscina.',
    detalles: [
      'Cama king size',
      'Baño con cubo de iluminación cenital',
      'Cocineta completa (Nespresso, estufa de inducción, frigobar)',
      'Pantalla LCD 55"',
      'Vista a la piscina',
    ],
    img: img('room-3.jpg'),
    alt: 'Suite Armónica King — la más espaciosa de Casa Tunkul, con vista a la piscina',
  },
];

export const reseñas = [
  { texto: 'La atención del anfitrión fue muy cálida y servicial. La casa es muy bonita, con cama súper cómoda y todo lo necesario para una estancia placentera.', autor: 'Karla', fecha: '2024-11', nota: 10 },
  { texto: 'El diseño del lugar es precioso, cada espacio está muy bien resuelto y el anfitrión fue súper atento y amable.', autor: 'Joseph', fecha: '2024-11', nota: 10 },
  { texto: 'Beautiful, freshly renovated boutique-style place. Close to great restaurants but away from downtown noise.', autor: 'Joris', fecha: '2024-12', nota: 10 },
  { texto: 'Amazing architecture, super comfy beds, warm welcome and big showers. Felt better than home.', autor: 'Lisa', fecha: '2025-01', nota: 10 },
  { texto: 'La habitación es muy bella, el baño enorme y la ubicación ideal para caminar a mercados, tiendas y cafeterías.', autor: 'Sol', fecha: '2025-03', nota: 10 },
  { texto: 'La habitación es amplia y luminosa, con tina, cocineta y decoración de gran gusto; todo se siente nuevo y funcional.', autor: 'Adalberto', fecha: '2025-04', nota: 9 },
];

export const fotos = {
  hero: img('hero.jpg'),
  patio: img('patio.jpg'),
  courtyard: img('courtyard.jpg'),
  lounge: img('lounge.jpg'),
  room4: img('room-4.jpg'),
};
