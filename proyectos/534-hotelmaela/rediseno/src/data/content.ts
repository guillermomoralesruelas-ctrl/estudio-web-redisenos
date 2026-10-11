// Contenido de Hotel Maela. Fuente: hotelmaela.com (inicio, habitaciones, experiencias, historia, galería y contacto), leído el 2026-10-11.
// No se inventan datos: lo que falta queda como [PENDIENTE].

const rbe = (cuarto: string) => `https://rbe.zaviaerp.com/hotel/hotelmaela/room/${cuarto}?lng=es&currency=MXN`;

export const negocio = {
  nombre: 'Hotel Maela',
  direccion: 'Constitución #206, Colonia Centro, Oaxaca de Juárez, Oaxaca',
  telefono: '+52 951 516 60 22',
  telefonoLink: '+529515166022',
  whatsapp: '529515651663',
  whatsappTexto: '+52 951 565 1663',
  correo: 'hotelmaela@gmail.com',
  reservar: 'https://rbe.zaviaerp.com/hotel/hotelmaela?lang=es&currency=MXN',
  mapa: 'https://maps.app.goo.gl/7iXKKmEbtPUEy2dW6',
  instagram: 'https://www.instagram.com/hotelmaela/',
};

export const bienvenida = 'En el corazón del centro histórico de Oaxaca, junto al Centro Cultural Santo Domingo, el Museo de la Ciudad, el Jardín Etnobotánico y el andador turístico. Una ubicación para recorrer la ciudad caminando entre galerías, museos y sitios culturales, y volver a descansar.';
export const cita = 'Ideal para viajeros que buscan comodidad, ubicación céntrica y la mejor relación calidad-precio.';

export const servicios = [
  { t: 'Recepción 24 horas', d: 'Atención personalizada' },
  { t: 'Wifi gratis', d: 'En todo el hotel' },
  { t: 'Estacionamiento gratis', d: 'Para huéspedes' },
  { t: 'Restaurante Lulaa', d: 'Dentro del hotel' },
  { t: 'Limpieza diaria', d: 'Y agua caliente las 24 horas' },
  { t: 'Traslado al aeropuerto', d: 'Bajo solicitud' },
];

export type Habitacion = { id: string; nombre: string; camas: string; max: number; foto: string; alt: string; reservar: string; suite?: boolean; extra?: string };

export const enTodas = 'TV, ventilador de techo, botellas de agua, baño privado, estacionamiento y agua caliente las 24 horas.';

export const habitaciones: Habitacion[] = [
  { id: 'matrimonial', nombre: 'Matrimonial', camas: '1 cama matrimonial', max: 2, foto: 'matrimonial', alt: 'Cama matrimonial con cabecera de herrería y toalla doblada en abanico', reservar: rbe('matrimonial') },
  { id: 'queen', nombre: 'Queen', camas: '1 cama queen', max: 2, foto: 'queen', alt: 'Habitación con cama queen, cabecera de herrería y cisnes de toalla', reservar: rbe('queen') },
  { id: '2matrimoniales', nombre: 'Dos matrimoniales', camas: '2 camas matrimoniales', max: 4, foto: 'dos-matrimoniales', alt: 'Habitación con dos camas de colcha naranja y muros cálidos', reservar: rbe('2matrimoniales') },
  { id: 'matyqueen', nombre: 'Queen y matrimonial', camas: '1 cama queen y 1 matrimonial', max: 4, foto: 'matrimonial-queen', alt: 'Habitación con dos camas, colchas verdes y cuadros oaxaqueños', reservar: rbe('matyqueen') },
  { id: '2queen', nombre: 'Dos queen', camas: '2 camas queen', max: 4, foto: 'dos-queen', alt: 'Habitación con dos camas queen, televisión y cortinas rojas', reservar: rbe('2queen') },
  { id: '3camas', nombre: 'Tres camas', camas: '2 camas matrimoniales y 1 individual', max: 5, foto: 'tres-camas', alt: 'Habitación con tres camas de colchas tejidas y ventana de madera', reservar: rbe('3camas') },
  { id: '4camas', nombre: 'Dos queen e individual', camas: '2 camas queen y 1 individual', max: 5, foto: 'dos-queen-individual', alt: 'Habitación amplia con camas de colcha verde, mecedora y balcón', reservar: rbe('4camas') },
  { id: 'yagul', nombre: 'Suite Yagul', camas: '1 cama king size', max: 2, foto: 'suite-yagul', alt: 'Suite Yagul con cama king de camino rojo, cocineta y frigobar', reservar: rbe('king'), suite: true, extra: 'Frigobar, parrilla de gas y aire acondicionado. Vista hacia el templo de Santo Domingo.' },
  { id: 'mitla', nombre: 'Suite Mitla', camas: '1 cama king size y 1 queen', max: 4, foto: 'suite-mitla-b', alt: 'Suite Mitla con dos camas de colcha clara y cisnes de toalla', reservar: rbe('kingyqueen'), suite: true, extra: 'Frigobar, parrilla de gas y aire acondicionado. Vista hacia el templo de Santo Domingo.' },
];

// Distancias tal como las publica el hotel.
export const distancias = [
  { m: 350, t: 'Terminal de autobuses ADO', d: '350 m' },
  { m: 400, t: 'Centro de la ciudad', d: '400 m' },
  { m: 7000, t: 'Aeropuerto Internacional de Oaxaca', d: '7 km' },
  { m: 8500, t: 'Zona arqueológica de Monte Albán', d: '8.5 km' },
  { m: 45000, t: 'Zona arqueológica de Mitla', d: '45 km' },
];
export const aPasos = ['Templo de Santo Domingo', 'Centro Cultural Santo Domingo', 'Museo de la Ciudad de Oaxaca', 'Jardín Etnobotánico', 'Andador turístico', 'Catedral de Oaxaca', 'Mercado Benito Juárez'];

export const lugares = [
  { t: 'Templo y ex convento de Santo Domingo', d: 'Una de las obras virreinales más importantes de América: más de 40,000 m² construidos entre los siglos XVI y XVII, convento dominico de 1608 a 1857 y hoy Patrimonio Cultural de la Humanidad, con yeserías cubiertas de hoja de oro.', foto: 'santo-domingo-interior', alt: 'Bóveda dorada del interior del templo de Santo Domingo' },
  { t: 'Museo de las Culturas y Jardín Etnobotánico', d: 'Dentro del mismo conjunto: salas de arqueología, historia y etnografía de Oaxaca, y más de 2.3 hectáreas de plantas originarias del estado.', foto: 'jardin-etnobotanico', alt: 'Cactus y agaves del Jardín Etnobotánico frente al ex convento' },
  { t: 'Andador turístico', d: 'Calle peatonal de cantera abierta en 1985 que une Santo Domingo con el Zócalo: galerías, cafés, artesanías, mezcal, calendas y bailes tradicionales.', foto: 'andador', alt: 'Andador turístico con papel picado de colores sobre la calle' },
  { t: 'Gastronomía oaxaqueña', d: 'Moles artesanales, tlayudas, quesillo, chapulines y mezcal tradicional.', foto: 'mole', alt: 'Plato de mole con arroz y totopos' },
];
export const museos = 'Rufino Tamayo, MACO, Museo Textil, Museo de Arte Popular, y el Jardín Antonia Labastida y el templo de la Sangre de Cristo a lo largo del andador.';

export const preguntas = [
  { p: '¿El hotel ofrece transporte al aeropuerto?', r: 'Sí, hay servicio de traslado bajo solicitud.' },
  { p: '¿Tiene estacionamiento?', r: 'Sí, estacionamiento gratis para huéspedes.' },
  { p: '¿Qué incluye la estancia?', r: 'Wifi gratis, limpieza diaria y atención personalizada.' },
  { p: '¿Sirve para estancias largas?', r: 'Sí, las habitaciones funcionan para estancias cortas y prolongadas.' },
  { p: '¿Es para parejas o familias?', r: 'Para los dos, y para viajeros solos: hay habitaciones de 2 a 5 personas.' },
  { p: '¿Se puede reservar directo en la web?', r: 'Sí, con reserva directa y mejor tarifa garantizada.' },
];
