// Contenido de Kiumo Hospital Veterinario, tomado del sitio original: investigacion/crudo.json (Inicio, Servicios,
// Hospital Veterinario, Spa y Kiumo Check) y el pie de página de kiumo.com.mx. Nada inventado; lo redactado por
// nosotros (títulos, microcopy, textos del checklist) está declarado en CAMBIOS.md. Las rutas de imagen son relativas
// a publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

const mapa = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export type Sucursal = {
  id: 'guadalupe' | 'quintas' | 'primavera' | 'check';
  nombre: string;
  corto: string;
  direccion: string;
  tel: string; // visible
  telLink: string;
  whatsapp: string; // 52 + 10 dígitos
  whatsappVisible: string;
  mapa: string;
  nota?: string;
};

// Tal cual su pie de página. Kiumo Check publica el WhatsApp 667 211 6122 (su icono en el pie abre el de Primavera: se
// usa el número publicado en su propia página /kiumo-check/).
export const sucursales: Sucursal[] = [
  {
    id: 'guadalupe', nombre: 'Sucursal Guadalupe', corto: 'Guadalupe', direccion: 'Blvd. Ciudades Hermanas #130, Col. Guadalupe',
    tel: '667 135 8509', telLink: '+526671358509', whatsapp: '526673170918', whatsappVisible: '667 317 0918',
    mapa: mapa('Kiumo Blvd. Ciudades Hermanas 130, Guadalupe, Culiacán, Sinaloa'), nota: 'Hospital veterinario abierto 24 horas',
  },
  {
    id: 'quintas', nombre: 'Sucursal Las Quintas', corto: 'Las Quintas', direccion: 'Calle Presa Tacotán #804, Col. Las Quintas',
    tel: '667 766 2858', telLink: '+526677662858', whatsapp: '526675031818', whatsappVisible: '667 503 1818',
    mapa: mapa('Kiumo Calle Presa Tacotán 804, Las Quintas, Culiacán, Sinaloa'),
  },
  {
    id: 'primavera', nombre: 'Sucursal La Primavera', corto: 'La Primavera', direccion: 'Blvd. Manuel J. Clouthier #5920-B, Col. Villa Bonita',
    tel: '667 455 2891', telLink: '+526674552891', whatsapp: '526674897387', whatsappVisible: '667 489 7387',
    mapa: mapa('Kiumo Blvd. Manuel J. Clouthier 5920-B, Villa Bonita, Culiacán, Sinaloa'),
  },
  {
    id: 'check', nombre: 'Kiumo Check (La Conquista)', corto: 'Kiumo Check', direccion: 'Blvd. Mario López Valdez 1535, local 13, La Conquista',
    tel: '667 690 2704', telLink: '+526676902704', whatsapp: '526672116122', whatsappVisible: '667 211 6122',
    mapa: mapa('Kiumo Check Blvd. Mario López Valdez 1535, La Conquista, Culiacán, Sinaloa'), nota: 'Lo básico para tu mascota, cerca de ti',
  },
];

export const guadalupe = sucursales[0];
export const negocio = {
  nombre: 'Kiumo Hospital Veterinario',
  correo: 'atencionalcliente@kiumo.com.mx',
  facebook: 'https://www.facebook.com/kiumopetcenter',
  instagram: 'https://www.instagram.com/kiumopetcenter/',
  tiktok: 'https://www.tiktok.com/@kiumopetcenter',
  youtube: 'https://www.youtube.com/@KiumoHospitalVeterinario-y2c',
  instagramCheck: 'https://www.instagram.com/kiumocheck/',
};

export const wa = (numero: string, mensaje: string) => `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
// Su mensaje: "Hola, quiero comunicarme con Kiumo Sucursal Guadalupe."
export const waGeneral = wa(guadalupe.whatsapp, 'Hola, quiero comunicarme con Kiumo Sucursal Guadalupe.');

export const horarios = [
  { dias: 'Lunes a viernes', horas: '8:00 am a 7:00 pm' },
  { dias: 'Sábado', horas: '8:00 am a 6:00 pm' },
];

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  fachada: f('fachada-guadalupe', 1600, 1173, 'Fachada amarilla y blanca de Kiumo Pet Center, Sucursal Guadalupe, con el letrero de hospital 24 horas, guardería, grooming y accesorios'),
  bulldog: f('bulldog-juegos', 825, 1100, 'Bulldog inglés parado en unos juegos infantiles al aire libre'),
  consulta: f('consulta-cachorro', 900, 800, 'Veterinarias de Kiumo revisan a un cachorro sobre la mesa de consulta'),
  ultrasonido: f('ultrasonido', 900, 800, 'Veterinaria de Kiumo hace un ultrasonido a una perrita recostada'),
  quirofano: f('quirofano', 900, 800, 'Quirófano de Kiumo con mesa de acero, equipo de anestesia y carro de instrumental rojo'),
  spa: f('spa-limpieza', 1200, 800, 'Groomer de Kiumo limpia las orejas de un perrito durante su baño'),
  pomerania: f('spa-pomerania', 474, 677, 'Groomer de Kiumo peina a un pomerania negro y fuego sobre la mesa de estética'),
  farmacia: f('farmacia', 339, 471, 'Anaquel de la farmacia veterinaria de Kiumo con antipulgas y suplementos'),
  gato: f('gato-panuelo', 417, 599, 'Gato atigrado con pañuelo rojo mirando a la cámara'),
  cachorro: f('perrito-cachorro', 159, 222, 'Cachorro de bulldog recargado en una mano'),
};

export const equipo: Foto[] = [
  f('equipo-chihuahua', 596, 700, 'Integrante del equipo de Kiumo con uniforme azul marino cargando a un chihuahua'),
  f('equipo-sonrisa', 596, 700, 'Veterinaria de Kiumo con uniforme azul marino, sonriendo'),
  f('equipo-brazos', 596, 700, 'Veterinaria de Kiumo con uniforme azul marino y brazos cruzados'),
  f('equipo-pomerania', 596, 700, 'Integrante del equipo de Kiumo con playera polo del hospital cargando a un pomerania'),
];

// Checklist: los servicios tal como los publica (Hospital Veterinario, Spa, Servicios y Kiumo Check).
export type Especie = 'perro' | 'gato';
export type Item = { id: string; texto: string; detalle: string; solo?: Especie };
export type Grupo = { id: string; titulo: string; color: string; items: Item[] };

export const checklist: Grupo[] = [
  {
    id: 'salud', titulo: 'Salud', color: 'azul', items: [
      { id: 'consulta', texto: 'Consulta veterinaria', detalle: 'Revisión general, diagnóstico y seguimiento.' },
      { id: 'vacunas', texto: 'Vacunas', detalle: 'Según la etapa de vida de tu mascota.' },
      { id: 'parasitos', texto: 'Control de parásitos', detalle: 'Internos y externos: pulgas, lombrices y garrapatas.' },
      { id: 'dental', texto: 'Cuidado dental', detalle: 'Tratamientos para su salud bucal.' },
      { id: 'laboratorio', texto: 'Laboratorio, rayos X o ultrasonido', detalle: 'Hemograma, química sanguínea, SDMA, T4, electrocardiograma y más.' },
      { id: 'cirugia', texto: 'Cirugía o esterilización', detalle: 'Esterilizaciones, tejidos blandos y traumatología.' },
    ],
  },
  {
    id: 'spa', titulo: 'Spa', color: 'naranja', items: [
      { id: 'bano', texto: 'Baño', detalle: 'Shampoo hipoalergénico, drenado de glándulas, secado, cepillado, uñas, oídos y perfume.' },
      { id: 'completo', texto: 'Servicio completo con corte de pelo', detalle: 'Todo lo del baño más corte de pelo completo.', solo: 'perro' },
      { id: 'bucal', texto: 'Lavado bucal', detalle: 'Servicio adicional del spa.' },
      { id: 'hidratante', texto: 'Pomada para nariz y cojinetes', detalle: 'Servicio adicional del spa.' },
    ],
  },
  {
    id: 'tienda', titulo: 'Tienda y farmacia', color: 'amarillo', items: [
      { id: 'croquetas', texto: 'Croquetas', detalle: 'Premium, super premium, holísticas y de prescripción.' },
      { id: 'domicilio', texto: 'Entrega de alimento a domicilio', detalle: 'También de otros productos.' },
      { id: 'farmacia', texto: 'Medicamentos de farmacia', detalle: 'Más de 1000 productos disponibles.' },
      { id: 'accesorios', texto: 'Accesorios y juguetes', detalle: 'Collares, correas, camas, transportadoras y premios.' },
    ],
  },
  {
    id: 'dia', titulo: 'Cuidados de día', color: 'marino', items: [
      { id: 'guarderia', texto: 'Guardería', detalle: 'Para cuando sales de viaje.' },
      { id: 'recoleccion', texto: 'Recolección de mi mascota', detalle: 'La recogen para spa, consulta y tratamientos.' },
    ],
  },
];

export const hospital = [
  { titulo: 'Cuidado preventivo', texto: 'Examen físico general para detectar enfermedades a tiempo, vacunas contra enfermedades virales y control de parásitos internos y externos.' },
  { titulo: 'Diagnóstico', texto: 'Consulta veterinaria, laboratorio y radiología: hemograma, química sanguínea, SDMA, T4, rayos X, ultrasonido, electrocardiograma y microscopio, con entrega de resultados inmediatos.' },
  { titulo: 'Urgencias y emergencias', texto: 'Respuesta rápida en situaciones de emergencia. La Sucursal Guadalupe es hospital veterinario 24 horas.' },
  { titulo: 'Cirugía', texto: 'Esterilizaciones, obstrucciones intestinales, cirugías traumatológicas y de tejidos blandos. El quirófano tiene incubadora y anestesia inhalada.' },
  { titulo: 'Cuidado dental y farmacia', texto: 'Tratamientos dentales y acceso directo a más de 1000 medicamentos y productos, sin ir a otro lugar.' },
  { titulo: 'Eutanasia', texto: 'Un servicio humanitario y respetuoso, en un ambiente de paz y dignidad para los momentos difíciles.' },
];

export const spaAdicionales = ['Lavado bucal', 'Baño exprés', 'Acondicionador', 'Shampoo para pelo negro', 'Shampoo whitening', 'Neutralizador quita olor', 'Limpieza de oídos con extracción de pelo', 'Pomada hidratante para nariz y cojinetes', 'Extra cepillado'];

export const marcas = ['Nupec', 'Royal Canin', 'Pro Plan', "Hill's", 'Taste of the Wild', 'Diamond', 'Excellent'];

export const testimonios = [
  { texto: 'Excelente servicio y atención para clientes y mascotas, regularmente uso el servicio de guardería cuando viajamos, el spa, y las vacunas, también nos han apoyado con emergencias!!', autor: 'Erick S.' },
  { texto: 'Dejamos a nuestra perrita la semana pasada en guardería el fin de semana. La verdad estuvieron atentos a mis mensajes, de hecho me mandaban videos de mi perrita, una buena organización, buena atención…', autor: 'Ángel M.' },
  { texto: 'Excelente atención, muy atentas desde que entras a la tienda… los recomiendo ampliamente.', autor: 'Sol M.' },
];
