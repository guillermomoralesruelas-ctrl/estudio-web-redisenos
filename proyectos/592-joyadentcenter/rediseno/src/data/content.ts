// Contenido de JoyaDent Center, tomado de su sitio (joyadent.com, WordPress bilingüe): el clon, investigacion/crudo.json
// y sus páginas en español revisadas con curl el 2026-09-29 (inicio, nosotros, tratamientos y contacto).
// No se inventó ningún dato. No publica precios ni WhatsApp: se usa su teléfono principal como WhatsApp (pendiente).

export const negocio = {
  nombre: 'JoyaDent Center',
  especialidad: 'Periodoncia e implantología',
  lugar: 'Nuevo Vallarta, Nayarit',
  direccion: 'Blvd. Nuevo Vallarta 100, local 1, edificio MITA, 63735 Nuevo Vallarta, Nay.',
  telefono: { texto: '322 377 7658', tel: '+523223777658' },
  telefono2: { texto: '329 111 3573', tel: '+523291113573' },
  whatsapp: '523223777658',
  correo: 'info@joyadent.com',
  facebook: 'https://www.facebook.com/Joyadentcenter/',
  instagram: 'https://www.instagram.com/Joyadentcenter/',
  mapa: 'https://goo.gl/maps/Epj7LHQ7XjhSYJKL9',
  // El mismo mapa de Google de su página de contacto.
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14927.985993431124!2d-105.2867377!3d20.7103668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf62b6a3868afa3e6!2sJoyadent%20center!5e0!3m2!1ses!2smx!4v1666822102184!5m2!1ses!2smx',
};

export const horario = [
  { dias: 'Lunes a viernes', horas: '10:00 a 14:00 y 15:00 a 19:00' },
  { dias: 'Sábado', horas: '10:00 a 14:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
];

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Doctora = { id: string; nombre: string; titulo: string; foto?: string; detalle?: string[] };
export const equipo: Doctora[] = [
  {
    id: 'joya', nombre: 'Dra. Karla Joya Medina', titulo: 'Fundadora · Periodoncista', foto: 'dra-karla-joya',
    detalle: [
      'Cirujana dentista y periodoncista certificada ante el Consejo Mexicano de Periodoncia, con más de 12 años de experiencia.',
      'Participante en la Facultad ILAPEO: cirugías avanzadas e injertos óseos con énfasis en elevación de seno (Curitiba, Brasil, octubre de 2021).',
      'Diplomado en Implantología, CECOPI, Tepic, Nayarit.',
      'Cédula profesional 7859836 · Cédula de especialidad 12402415.',
    ],
  },
  { id: 'pelayo', nombre: 'Dra. Alejandra Pelayo', titulo: 'Ortodoncista' },
  { id: 'martinez', nombre: 'Dra. Karla Martínez', titulo: 'Estética dental' },
];

export type Inquietud = {
  id: string;
  pregunta: string;
  tratamiento: string;
  texto: string;
  opciones: string[];
  doctora: string; // id de equipo, según su especialidad
  dibujo: 'manchas' | 'chuecos' | 'hueco' | 'todos' | 'encias' | 'roto' | 'desgaste';
};

// El elemento memorable: lo que ves en tu sonrisa → su tratamiento, con sus textos y opciones.
export const inquietudes: Inquietud[] = [
  {
    id: 'manchas', pregunta: 'Mis dientes tienen manchas', tratamiento: 'Limpieza y blanqueamiento', dibujo: 'manchas', doctora: 'martinez',
    texto: 'La limpieza elimina placa y sarro; el blanqueamiento quita manchas y decoloraciones.',
    opciones: ['Limpieza profunda', 'Blanqueamiento en consultorio', 'Blanqueamiento con guardas en casa'],
  },
  {
    id: 'chuecos', pregunta: 'Mis dientes están chuecos', tratamiento: 'Brackets y ortodoncia', dibujo: 'chuecos', doctora: 'pelayo',
    texto: 'Corrige la alineación y la mordida; los dientes alineados también se limpian mejor.',
    opciones: ['Brackets metálicos', 'Brackets cerámicos', 'Brackets de zafiro', 'Invisalign', 'Aparatos de ortopedia', 'Guardas miofuncionales'],
  },
  {
    id: 'hueco', pregunta: 'Me falta un diente', tratamiento: 'Implantes dentales', dibujo: 'hueco', doctora: 'joya',
    texto: 'Reemplazan dientes perdidos y se integran de manera natural en tu boca.',
    opciones: ['Straumann®', 'Nobel Biocare®', 'Neodent®'],
  },
  {
    id: 'todos', pregunta: 'Me faltan casi todos', tratamiento: 'All on 4 y All on 6', dibujo: 'todos', doctora: 'joya',
    texto: 'Todos los dientes de arriba o de abajo se reemplazan por una arcada fija sobre cuatro (o seis) implantes.',
    opciones: ['All on 4', 'All on 6'],
  },
  {
    id: 'encias', pregunta: 'Me preocupan mis encías', tratamiento: 'Tratamientos periodontales', dibujo: 'encias', doctora: 'joya',
    texto: 'Prevención y tratamiento de problemas de las encías, como la gingivitis y la periodontitis.',
    opciones: ['Prevención', 'Tratamiento de gingivitis', 'Tratamiento de periodontitis'],
  },
  {
    id: 'roto', pregunta: 'Tengo un diente roto o una amalgama', tratamiento: 'Coronas y resinas', dibujo: 'roto', doctora: 'martinez',
    texto: 'Las coronas protegen dientes debilitados; las resinas reparan dientes dañados o con caries y pueden sustituir amalgamas antiguas.',
    opciones: ['Coronas de zirconio', 'Coronas de cerámica', 'Coronas de metal porcelana', 'Resinas'],
  },
  {
    id: 'desgaste', pregunta: 'Mis dientes están desgastados', tratamiento: 'Carillas dentales', dibujo: 'desgaste', doctora: 'martinez',
    texto: 'Se aplican sobre los dientes y ocultan manchas, desgastes o desalineaciones.',
    opciones: ['Carillas de resina', 'Carillas de porcelana'],
  },
];

export const tratamientos = [
  { titulo: 'Implantes dentales', texto: 'Una solución duradera para reemplazar dientes perdidos. Trabajan con Straumann®, Nobel Biocare® y Neodent®.' },
  { titulo: 'Brackets e Invisalign', texto: 'Brackets metálicos, cerámicos o de zafiro, aparatos de ortopedia, guardas miofuncionales y alineadores transparentes Invisalign.' },
  { titulo: 'Tratamientos periodontales', texto: 'Prevención y tratamiento de gingivitis y periodontitis, con miembros del Consejo Mexicano de Periodoncia.' },
  { titulo: 'Coronas y resinas', texto: 'Coronas de zirconio, cerámica y metal porcelana; resinas compuestas para reparar dientes y cambiar amalgamas antiguas.' },
  { titulo: 'Carillas dentales', texto: 'De resina o de porcelana, para ocultar manchas, desgastes o desalineaciones.' },
  { titulo: 'Limpieza y blanqueamiento', texto: 'Limpieza profunda para eliminar placa y sarro, y dos tipos de blanqueamiento: en consultorio o con guardas en casa.' },
];

// Reseñas de Google que muestra su sitio (widget de Trustindex, "basado en 14 reseñas"), citadas tal cual.
export const resenas = [
  { autor: 'Dulce Reyes Marmaceda', fecha: 'septiembre de 2024', texto: 'Me realicé una cirugía y desde un inicio me hicieron un diagnóstico muy detallado y muy bien explicado, te dan muchas opciones en tratamientos para que se adapten a lo que necesitas.' },
  { autor: 'Maria Santa Lucia', fecha: 'octubre de 2023', texto: 'Excellent care and expertise by Dr Karla and her staff. Highly recommend for all dental services. Had teeth cleaning, an extraction, and replaced a bridge.' },
  { autor: 'Edgar Cuevas', fecha: 'septiembre de 2024', texto: 'Excelente dental service y muy profesional con la Dr. Karla Joya. Y sus asistentes desde la recepción y todo su Equipo.' },
  { autor: 'Mazen Bahu', fecha: 'noviembre de 2024', texto: 'The clinic itself is spotless, modern, and inviting, which reflects the high standard of care they provide.' },
];
