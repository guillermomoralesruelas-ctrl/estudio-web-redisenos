// Contenido de VetPets, Hospitales Veterinarios (Zapopan, Jalisco), tomado del sitio original: investigacion/crudo.json
// (inicio, servicios, sucursales, contacto) e investigacion/original.html (contadores: +15 años y 5 sucursales).
// Regla: nada inventado. Solo Acueducto publica horario; Naciones Unidas, urgencias 24/7.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

const mapa = (q: string) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const tel = (t: string) => `tel:+52${t.replace(/\D/g, '')}`;

export const negocio = {
  nombre: 'VetPets',
  whatsapp: '5213318635121',
  whatsappTexto: '33 1863 5121',
  facebook: 'https://www.facebook.com/hospitalvetpets',
  instagram: 'https://www.instagram.com/vetpetsgdl/',
  anios: '+15',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCita = wa('Hola, quiero agendar una cita para mi mascota en VetPets.');

export type Sucursal = {
  id: string; nombre: string; direccion: string; telefonos: string[]; nota: string; foto?: string; alt?: string;
  horario?: [number, number]; veinticuatro?: boolean; mapa: string;
};
export const sucursales: Sucursal[] = [
  {
    id: 'naciones', nombre: 'Naciones Unidas', direccion: 'Av. Naciones Unidas 5260-4, Jardines Universidad, 45110 Zapopan, Jal.',
    telefonos: ['33 3682 2817', '33 3110 6394'], nota: 'Servicio de hospital. Emergencias 24/7, todos los días del año.', veinticuatro: true,
    foto: 'naciones-unidas', alt: 'Quirófano de VetPets Naciones Unidas con mesa de cirugía, lámparas y monitores',
    mapa: mapa('VetPets Hospital Veterinario, Av. Naciones Unidas 5260, Jardines Universidad, 45110 Zapopan, Jalisco'),
  },
  {
    id: 'acueducto', nombre: 'Acueducto', direccion: 'Av. Acueducto 6050, Chedraui, 45140 Zapopan, Jal. (dentro de PETCO)',
    telefonos: ['33 3611 2596'], nota: 'Lunes a domingo de 9:00 am a 9:00 pm.', horario: [9, 21],
    foto: 'acueducto', alt: 'Consultorio de VetPets Acueducto con mesa de exploración de acero y jaulas de hospitalización',
    mapa: mapa('PETCO Acueducto, Av. Acueducto 6050, 45140 Zapopan, Jalisco'),
  },
  {
    id: 'bosque', nombre: 'Bosque Real', direccion: 'Av. Sta. Margarita 3600, Residencial Poniente, 45136 Zapopan, Jal. (dentro de PETCO)',
    telefonos: ['33 3658 7307'], nota: 'Horario no publicado: confírmalo por teléfono.',
    mapa: mapa('PETCO, Av. Santa Margarita 3600, Residencial Poniente, 45136 Zapopan, Jalisco'),
  },
  {
    id: 'avila', nombre: 'Ávila Camacho', direccion: 'Av. Manuel Ávila Camacho 344, Col. El Capullo, Zapopan, Jal. (dentro de PETCO)',
    telefonos: ['33 1578 6909'], nota: 'Horario no publicado: confírmalo por teléfono.',
    foto: 'avila-camacho', alt: 'Recepción de VetPets Ávila Camacho con mostrador de madera, banca y pared verde',
    mapa: mapa('PETCO, Av. Manuel Ávila Camacho 344, El Capullo, Zapopan, Jalisco'),
  },
];

export const servicios = [
  { titulo: 'Medicina preventiva', lema: 'Cuide la salud de su mascota y prevenga enfermedades.', puntos: ['Chequeos periódicos para detectar y prevenir enfermedades.', 'Planes de desparasitación interna y externa.', 'Asesoramiento sobre alimentación, ejercicio y cuidado en casa.', 'Vacunación.'] },
  { titulo: 'Medicina interna', lema: 'Diagnóstico y tratamiento de enfermedades agudas y crónicas.', puntos: ['Atención integral para problemas cardíacos, renales, digestivos, dermatológicos y más.', 'Laboratorio propio para análisis rápidos y precisos.'] },
  { titulo: 'Cirugía general y de especialidad', lema: 'Traumatología y ortopedia, y cirugía laparoscópica.', puntos: ['Cirugías de tejidos blandos y ortopédicas.', 'Anestesia segura y monitoreo constante.', 'Atención postoperatoria personalizada.'] },
  { titulo: 'Endoscopia', lema: 'Diagnóstico preciso y tratamientos efectivos.', puntos: ['Diagnóstico y tratamiento de enfermedades gastrointestinales, respiratorias y urogenitales.', 'Procedimientos mínimamente invasivos.'] },
];

export const intro =
  'En VETPETS, entendemos que las mascotas son parte fundamental de la familia. Nuestro compromiso es proporcionar la más alta calidad en medicina veterinaria con un enfoque profesional y humano.';
export const tel24 = tel(sucursales[0].telefonos[0]);
export const telHref = tel;

// Dos fotos de consultorios que su sitio guarda como "canadas" y "real-center" sin decir a qué sucursal corresponden.
export const galeria = [
  { foto: 'canadas', alt: 'Consultorio de VetPets con mesa de exploración, muro verde y huellas de colores en la pared' },
  { foto: 'real-center', alt: 'Consultorio de VetPets con cancel de cristal, mesa blanca y un cartel de un perro' },
];
