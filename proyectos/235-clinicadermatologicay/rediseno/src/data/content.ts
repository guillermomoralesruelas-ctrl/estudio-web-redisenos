// Contenido del Dr. Arístides Arellano — Clínica Dermatológica y Cirugía Estética de Puebla
// Fuente: investigacion/crudo.json (inicio + 4 procedimientos), investigacion/resumen.json
// Regla: nada inventado. Si falta un dato, se anota en CAMBIOS.md como [PENDIENTE].

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Clínica Dermatológica y Cirugía Estética de Puebla',
  doctor: 'Dr. Arístides Arellano Huacuja',
  especialidad: 'Cirujano Plástico, Estético y Reconstructivo · F.I.C.S.',
  ciudad: 'Puebla, Puebla, México',
  direccion: 'Calle 20 Sur 2539, Col. Bellavista, 72500 Puebla, Puebla, México',
  barrio: 'Col. Bellavista, Puebla',
  telefono: '+52 222 237 7494',
  telefonoTel: '+522222377494',
  whatsapp: '522211552228',
  mapa: 'https://maps.google.com/?cid=9525756684129878507',
  comollegar: 'https://www.google.com/maps/dir/?api=1&destination=Cl%C3%ADnica%20Dermatol%C3%B3gica%20y%20Cirug%C3%ADa%20Est%C3%A9tica%20de%20Puebla%2C%20Calle%2020%20Sur%202539%2C%20Bellavista%2C%2072500%20Puebla%2C%20Pue.',
  horario: 'Lunes a viernes: 8:00 – 20:00 h · Sábado: 8:00 – 14:00 h · Domingo: cerrado',
  horarioCorto: 'L–V 8:00–20:00 · S 8:00–14:00',
  youtube: 'https://www.youtube.com/@CirugiaLaserPuebla',
  cedula1: '1125959',
  cedula2: '0002008',
  cofepris: '213300201A2451',
  fics: 'A11248',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const foto = img;

// Doctor
export const doctor = {
  titulo: 'Dr. Arístides Arellano',
  subtitulo: 'Cirujano Plástico y Reconstructivo · F.I.C.S.',
  bio: 'Cirujano Plástico, Estético y Reconstructivo. Segunda generación de una tradición fundada en 1971 por el Dr. Francisco Arellano Ocampo — más de cuatro décadas dedicadas a la cirugía de la forma humana, con formación en México y el extranjero.',
  credenciales: [
    { etiqueta: 'Médico Cirujano · D.G.P.', valor: '1125959' },
    { etiqueta: 'Cédula de Especialidad · Cirugía Plástica', valor: '0002008' },
    { etiqueta: 'F.I.C.S. Fellow', valor: 'N.º A11248' },
    { etiqueta: 'Legado · desde', valor: '1971' },
  ],
  nota: 'Cédulas verificables públicamente en el Registro Nacional de Profesionistas (D.G.P.).',
  foto: img('aristides-craft.webp'),
  retrato: img('aristides.webp'),
};

// Recepción
export const clinica = {
  titulo: 'Una clínica propia en Puebla, no un quirófano prestado.',
  descripcion: 'Cirugía plástica, dermatología y medicina estética bajo un mismo techo — con quirófano propio y más de veinte plataformas médicas. En Bellavista, Puebla, con una tradición que comenzó en 1971.',
  foto: img('recepcion.webp'),
};

// El arsenal — equipos por preocupación (elemento memorable)
// Fuente: site original crudo.json, sección "El arsenal" del inicio
export type Preocupacion = {
  id: string;
  etiqueta: string;
  descripcion: string;
  equipos: {
    nombre: string;
    descripcion: string;
    tratamiento: string;
    foto: string | null;
    w: number;
    h: number;
  }[];
};

export const preocupaciones: Preocupacion[] = [
  {
    id: 'arrugas',
    etiqueta: 'Arrugas',
    descripcion: 'Líneas de expresión y envejecimiento de la piel',
    equipos: [
      { nombre: 'Fotona SP Dynamis Max', descripcion: 'Er:YAG + Nd:YAG · el más versátil', tratamiento: 'Fotona 4D, tensado láser de piel', foto: img('machines/fotona.webp'), w: 560, h: 558 },
      { nombre: 'EndyMed PRO (3DEEP)', descripcion: 'Radiofrecuencia · especial para piel morena', tratamiento: 'Radiofrecuencia profunda', foto: img('machines/endymed.webp'), w: 439, h: 680 },
      { nombre: 'Lumenis ResurFX', descripcion: 'Fraccionado no ablativo 1565 nm', tratamiento: 'Resurfacing láser', foto: img('machines/resurfx.webp'), w: 551, h: 680 },
    ],
  },
  {
    id: 'flacidez',
    etiqueta: 'Flacidez',
    descripcion: 'Pérdida de firmeza y contorno facial o corporal',
    equipos: [
      { nombre: 'Alma Hybrid', descripcion: 'CO₂ + 1570 nm simultáneos', tratamiento: 'Resurfacing y tensado profundo', foto: img('machines/alma-hybrid.webp'), w: 374, h: 680 },
      { nombre: 'EndyMed PRO (3DEEP)', descripcion: 'Radiofrecuencia · especial para piel morena', tratamiento: 'Reafirmación con radiofrecuencia', foto: img('machines/endymed.webp'), w: 439, h: 680 },
      { nombre: 'Lumenis AcuPulse DUO', descripcion: 'CO₂ fraccionado quirúrgico', tratamiento: 'Láser CO₂ fraccionado', foto: img('machines/acupulse.webp'), w: 366, h: 680 },
    ],
  },
  {
    id: 'manchas',
    etiqueta: 'Manchas',
    descripcion: 'Manchas, melasma, pigmentación irregular',
    equipos: [
      { nombre: 'Lumenis ResurFX', descripcion: 'Fraccionado no ablativo 1565 nm', tratamiento: 'Manchas, melasma y resurfacing', foto: img('machines/resurfx.webp'), w: 551, h: 680 },
      { nombre: 'Fotona SP Dynamis Max', descripcion: 'Er:YAG + Nd:YAG · el más versátil', tratamiento: 'Luz pulsada (IPL) y lesiones pigmentadas', foto: img('machines/fotona.webp'), w: 560, h: 558 },
      { nombre: 'Lumenis AcuPulse DUO', descripcion: 'CO₂ fraccionado quirúrgico', tratamiento: 'Queratosis actínica y lesiones de piel', foto: img('machines/acupulse.webp'), w: 366, h: 680 },
    ],
  },
  {
    id: 'acne',
    etiqueta: 'Acné o cicatrices',
    descripcion: 'Cicatrices de acné, cicatrices y queloides',
    equipos: [
      { nombre: 'Lumenis AcuPulse DUO', descripcion: 'CO₂ fraccionado quirúrgico', tratamiento: 'Cicatrices de acné, queloides y cicatrices', foto: img('machines/acupulse.webp'), w: 366, h: 680 },
      { nombre: 'Fotona SP Dynamis Max', descripcion: 'Er:YAG + Nd:YAG · el más versátil', tratamiento: 'Cicatrices de acné, dermoabrasión láser', foto: img('machines/fotona.webp'), w: 560, h: 558 },
      { nombre: 'Lumenis ResurFX', descripcion: 'Fraccionado no ablativo 1565 nm', tratamiento: 'Resurfacing no ablativo de cicatrices', foto: img('machines/resurfx.webp'), w: 551, h: 680 },
    ],
  },
  {
    id: 'calvicie',
    etiqueta: 'Calvicie o alopecia',
    descripcion: 'Pérdida de cabello y alopecia',
    equipos: [
      { nombre: 'ARTAS iX', descripcion: 'Robot de trasplante capilar con IA', tratamiento: 'Trasplante ARTAS iX · FUE manual · Long Hair FUE', foto: img('machines/artas.webp'), w: 760, h: 506 },
    ],
  },
  {
    id: 'piel-opaca',
    etiqueta: 'Piel opaca',
    descripcion: 'Piel cansada, falta de luminosidad e hidratación',
    equipos: [
      { nombre: 'HydraFacial Syndeo', descripcion: 'Limpieza + hidratación médica', tratamiento: 'HydraFacial · OxyGeneo', foto: img('machines/hydrafacial.webp'), w: 379, h: 680 },
      { nombre: 'EndyMed PRO (3DEEP)', descripcion: 'Radiofrecuencia · estimulación de colágeno', tratamiento: 'Radiofrecuencia y bienestar de piel', foto: img('machines/endymed.webp'), w: 439, h: 680 },
      { nombre: 'Lumenis ResurFX', descripcion: 'Fraccionado no ablativo 1565 nm', tratamiento: 'Resurfacing suave, luminosidad', foto: img('machines/resurfx.webp'), w: 551, h: 680 },
    ],
  },
  {
    id: 'contorno',
    etiqueta: 'Contorno corporal',
    descripcion: 'Grasa localizada, celulitis y moldeo corporal',
    equipos: [
      { nombre: 'Alma PrimeX', descripcion: 'Contorno · ultrasonido + RF', tratamiento: 'Alma PrimeX · TightSculpting', foto: img('machines/alma-primex.webp'), w: 453, h: 680 },
      { nombre: 'VASER', descripcion: 'Lipoescultura ultrasónica de alta definición', tratamiento: 'Liposucción · Lipoescultura HD', foto: img('machines/vaser.webp'), w: 640, h: 640 },
      { nombre: 'LPG Cellu M6', descripcion: 'Endermología · celulitis y fibrosis', tratamiento: 'LPG Endermologie', foto: img('machines/lpg.webp'), w: 456, h: 640 },
    ],
  },
  {
    id: 'parpados',
    etiqueta: 'Cirugía de párpados',
    descripcion: 'Párpados caídos, bolsas y mirada cansada',
    equipos: [
      { nombre: 'Lumenis AcuPulse DUO', descripcion: 'CO₂ fraccionado quirúrgico de alta precisión', tratamiento: 'Blefaroplastia con láser CO₂ (AcuPulse)', foto: img('machines/acupulse.webp'), w: 366, h: 680 },
    ],
  },
  {
    id: 'nariz',
    etiqueta: 'Nariz y perfil',
    descripcion: 'Rinoplastia, perfil y armonía facial',
    equipos: [
      { nombre: 'Quirófano propio', descripcion: 'Cirugía plástica de la nariz y el perfil', tratamiento: 'Rinoplastia ultrasónica · Rinoplastia secundaria · Mentoplastia', foto: img('aristides-craft.webp'), w: 928, h: 1160 },
    ],
  },
  {
    id: 'lifting',
    etiqueta: 'Lifting facial',
    descripcion: 'Rejuvenecimiento facial profundo, reposición de tejidos',
    equipos: [
      { nombre: 'Quirófano propio', descripcion: 'Cirugía plástica del rostro y el cuello', tratamiento: 'Lifting facial SMAS · Deep Plane · Lifting de cara y cuello', foto: img('aristides-craft.webp'), w: 928, h: 1160 },
    ],
  },
];

// Procedimientos por categoría (del sitio original, selección representativa)
export const categorias = [
  {
    id: 'cirugia',
    titulo: 'Cirugía Plástica',
    descripcion: 'Cirujano Plástico y Reconstructivo · 40+ años · desde 1971',
    procedimientos: [
      'Rinoplastia', 'Rinoplastia secundaria', 'Blefaroplastia', 'Lifting facial (ritidectomía)',
      'Lifting de cara y cuello', 'Otoplastia', 'Mentoplastia', 'Bichectomía',
      'Lipopapada', 'Endolift facial', 'Liposucción / Lipoescultura', 'Abdominoplastia',
      'Aumento mamario', 'Mastopexia', 'Reducción mamaria', 'Ginecomastia',
      'Mommy Makeover', 'Aumento de glúteos (BBL)', 'Cirugía post-bariátrica', 'Cierre de heridas complejas',
    ],
  },
  {
    id: 'capilar',
    titulo: 'Restauración Capilar',
    descripcion: 'Sistema robótico ARTAS iX · miembro ISHRS',
    procedimientos: [
      'Injerto capilar (trasplante de cabello)', 'Trasplante ARTAS iX (robótico con IA)',
      'FUE manual', 'FUT / FUSS', 'Long Hair FUE',
      'Trasplante de barba y bigote', 'Trasplante de cejas',
      'Diagnóstico HairMetrix', 'PRP capilar', 'Células madre (AAPE)',
      'Exosomas capilares', 'Láser capilar (TricoSTYM)', 'Micropigmentación capilar',
    ],
  },
  {
    id: 'estetica',
    titulo: 'Medicina Estética',
    descripcion: 'El criterio de un cirujano detrás de cada inyectable',
    procedimientos: [
      'Toxina botulínica', 'Rellenos de ácido hialurónico', 'Armonización facial',
      'Bioestimuladores de colágeno', 'Bioremodeladores', 'PRP facial',
      'Mesoterapia facial', 'Peeling químico', 'Dermoabrasión', 'HydraFacial',
      'OxyGeneo', 'Análisis facial VISIA', 'Cámara hiperbárica', 'Sueroterapia intravenosa',
    ],
  },
  {
    id: 'laser',
    titulo: 'Láser y Tecnología',
    descripcion: 'Más de 20 equipos médicos — el arsenal completo',
    procedimientos: [
      'Resurfacing láser', 'Láser CO₂ fraccionado', 'Fotona 4D', 'Cicatrices de acné',
      'Manchas y melasma', 'Luz pulsada (IPL)', 'Lesiones vasculares', 'Várices',
      'Eliminación de tatuajes', 'Depilación láser', 'Estrías', 'Tensado láser de piel',
      'Alma PrimeX', 'Emsculpt NEO', 'LPG Endermologie', 'Criolipólisis', 'Radiofrecuencia',
    ],
  },
  {
    id: 'dermatologia',
    titulo: 'Dermatología',
    descripcion: 'Herencia del Dr. Francisco Arellano Ocampo · desde 1971',
    procedimientos: [
      'Consulta dermatológica', 'Tratamiento integral de acné', 'Cirugía dermatológica',
      'Detección de cáncer de piel', 'Psoriasis', 'Dermatitis atópica', 'Vitíligo',
      'Alopecia areata', 'Extirpación de lunares y verrugas', 'Extirpación de quiste sebáceo',
      'Carcinoma basocelular', 'Fototerapia PUVA/UVB', 'Rosácea',
      'Laboratorio y farmacia',
    ],
  },
];

// Logos de fabricantes
export const fabricantes = [
  { nombre: 'Lumenis', foto: img('logos/lumenis.webp'), w: 240, h: 61 },
  { nombre: 'Fotona', foto: img('logos/fotona.webp'), w: 240, h: 104 },
  { nombre: 'Alma', foto: img('logos/alma.webp'), w: 240, h: 61 },
  { nombre: 'ARTAS iX', foto: img('logos/artas-ix.webp'), w: 240, h: 97 },
  { nombre: 'HydraFacial', foto: img('logos/hydrafacial.webp'), w: 240, h: 53 },
  { nombre: 'EndyMed', foto: img('logos/endymed.webp'), w: 240, h: 68 },
  { nombre: 'VISIA', foto: img('logos/visia.webp'), w: 240, h: 144 },
];
