// Contenido de Animalitos México, tomado del sitio original: investigacion/crudo.json (Inicio y las páginas de Miguel
// Ángel, Puebla, Interlomas y Polanco) y la página /agenda-una-cita (servicios del formulario), comprobada en vivo.
// Nada inventado; lo redactado por nosotros (títulos, microcopy, textos del buscador) está declarado en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Animalitos Hospital Veterinario',
  telefono: '55 9025 2000',
  telLink: '+525590252000',
  // Su botón "Contáctanos" usa api.whatsapp.com/send?phone=5215545527129 (con el 1 antiguo de celulares); se usa el
  // formato actual 52 + 10 dígitos, que abre el mismo WhatsApp.
  whatsapp: '525545527129',
  whatsappVisible: '55 4552 7129',
  instagram: 'https://www.instagram.com/animalitos.mexico/',
  facebook: 'https://www.facebook.com/AnimalitosHospitalMexico',
  tiktok: 'https://www.tiktok.com/@animalitosmexico',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, quiero información de Animalitos Hospital Veterinario.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export type Sucursal = {
  id: string;
  nombre: string;
  horario: string;
  veinticuatro: boolean;
  direccion: string;
  lat: number;
  lng: number;
  mapa: string; // su propio enlace de Google Maps
  foto?: Foto;
};

// Tal cual su bloque "Un Animalitos® cerca de ti"; coordenadas y enlaces de Google Maps de su propio sitio.
export const sucursales: Sucursal[] = [
  {
    id: 'miguel-angel', nombre: 'Miguel Ángel de Quevedo', horario: '24 horas', veinticuatro: true,
    direccion: 'Miguel Ángel de Quevedo #448, Col. Barrio de Sta. Catarina, Coyoacán, CDMX, C.P. 04010',
    lat: 19.3457863, lng: -99.17161,
    mapa: 'https://www.google.com/maps/place/Animalitos+Hospital+Veterinario+24+horas+Miguel+Angel+de+Quevedo/@19.3457863,-99.17161,17z',
    foto: f('miguel-angel', 675, 900, 'Quirófano del hospital Animalitos Miguel Ángel de Quevedo, con lámparas quirúrgicas y mesa de acero'),
  },
  {
    id: 'polanco', nombre: 'Polanco', horario: '24 horas', veinticuatro: true,
    direccion: 'Homero #1205, Local 1, Col. Polanco, Miguel Hidalgo, CDMX, C.P. 11560',
    lat: 19.436297, lng: -99.2010109,
    mapa: 'https://www.google.com/maps/place/Animalitos+Hospital+Veterinario+24+horas+Polanco/@19.436297,-99.2010109,17z',
    foto: f('polanco', 675, 900, 'Sala del hospital Animalitos Polanco con mesa de acero y un mural azul con la palabra experts'),
  },
  {
    id: 'prado-norte', nombre: 'Prado Norte', horario: '9:00 am a 7:00 pm', veinticuatro: false,
    direccion: 'Prado Norte #460, local 1, Col. Lomas de Chapultepec, Miguel Hidalgo, CDMX, C.P. 11000',
    lat: 19.4270431, lng: -99.2118014,
    mapa: 'https://www.google.com/maps/place/Animalitos+Hospital+Veterinario+24+horas+Prado+Norte/@19.4270431,-99.2118014,18z',
    foto: f('prado-norte', 900, 1200, 'Una veterinaria de Animalitos acomoda a un perro dorado en la camilla del tomógrafo'),
  },
  {
    id: 'interlomas', nombre: 'Interlomas', horario: '24 horas', veinticuatro: true,
    direccion: 'Vía Magna #7 Mzn III, Lte #17, Col. Centro Urbano San Fernando la Herradura, Huixquilucan, Edomex, C.P. 52760',
    lat: 19.4023023, lng: -99.2745767,
    mapa: 'https://www.google.com/maps/place/Animalitos+Hospital+Veterinario+24+horas+Interlomas/@19.4023023,-99.2745767,17z',
    foto: f('interlomas', 450, 800, 'Quirófano del hospital Animalitos Interlomas con mesa de acero y equipo de anestesia'),
  },
  {
    id: 'zona-esmeralda', nombre: 'Zona Esmeralda', horario: '24 horas', veinticuatro: true,
    direccion: 'Av. Jorge Jiménez Cantú S/N, Plaza Antigua 2, Cd. López Mateos, Edomex, C.P. 52938',
    lat: 19.5712693, lng: -99.3006229,
    mapa: 'https://www.google.com/maps/place/Animalitos+Hospital+Veterinario+24+horas+Zona+Esmeralda/@19.5712693,-99.3006229,17z',
    foto: f('zona-esmeralda', 1600, 822, 'Consultorio de Animalitos Zona Esmeralda con pared de rayas verdes y mesa de exploración'),
  },
  {
    id: 'puebla', nombre: 'Puebla Angelópolis', horario: '24 horas', veinticuatro: true,
    direccion: 'Blvd. América 304, Lomas de Angelópolis, San Antonio Cacalotepec, San Bernardino Tlaxcalancingo, Pue., C.P. 72830',
    lat: 18.9975205, lng: -98.277879,
    mapa: 'https://www.google.com/maps/place/Animalitos+Hospital+Veterinario+24+hrs+Puebla/@18.9975205,-98.2804539,17z',
  },
];

export const consultorio = f('consultorio-ultra-love', 900, 869, 'Consultorio de Animalitos con mesa de acero y el letrero Ultra cute, ultra love');

// "Nuestros servicios médicos", tal cual su sitio.
export const servicios = ['Urgencias', 'Hospitalización', 'Consulta médica', 'Medicina preventiva', 'Tomografía', 'Resonancia', 'Cirugía', 'Endoscopia', 'Rayos X', 'Ultrasonido', 'Laboratorio', 'Cuidado dental', 'Especialidades', 'Grooming', 'Tienda'];

// Tipos de servicio de su formulario "Agenda una cita".
export const motivos = ['Consulta', 'Vacuna', 'Análisis', 'Cirugía', 'Estética', 'Baño', 'Estética y baño'];
