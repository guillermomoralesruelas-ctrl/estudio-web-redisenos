// Contenido de GreenSpa (Zapopan, Jalisco), tomado del sitio original: clon en ../sitio, investigacion/crudo.json y las
// páginas de inicio, servicios, promociones, testimonios y contacto leídas en vivo el 2026-09-28
// (entregables/textos-sitio-en-vivo-2026-09-28.txt).
// Regla: nada inventado. Sin beneficios de salud: solo nombre, duración y precio de cada servicio.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'GreenSpa',
  desde: 2012,
  whatsapp: '523334045420',
  whatsappTexto: '33 3404 5420',
  telefono: '33 2410 2887',
  telefonoHref: 'tel:+523324102887',
  correo: 'info@greenspa.com.mx',
  direccion: 'Sebastian Bach 4759, Col. Prados Guadalupe, Zapopan, Jalisco',
  // El mapa incrustado de su página de contacto (Google Maps con la búsqueda de su dirección).
  mapaIframe: 'https://www.google.com/maps?q=Av.%20Sebastian%20Bach%204759%2C%20Prados%20Vallarta%2C%2045029%20Zapopan%2C%20Jal.&t=m&z=17&output=embed&iwloc=near',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. Sebastian Bach 4759, Zapopan, Jalisco'),
  escuela: 'https://escuelademasajesgreenspa.mx/',
  sitio: 'https://greenspa.mx/',
};

export const horario = [
  ['Lunes', '11:00 a 19:00'],
  ['Martes a viernes', '9:00 a 21:00'],
  ['Sábado y domingo', '9:00 a 18:00'],
] as const;

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCita = wa('Hola, quiero agendar una cita en GreenSpa.');

export type Servicio = { nombre: string; duracion?: string; precio?: string; nota?: string };
export type Categoria = { id: string; nombre: string; ingles?: string; intro?: string; servicios: Servicio[] };

// Su carta de servicios, con los precios tal cual. Donde su sitio no da precio, no se pone.
export const carta: Categoria[] = [
  {
    id: 'masajes', nombre: 'Masajes', ingles: 'Massages',
    intro: 'Todos los masajes: 1 h $1,200 · 1.5 h $1,700 · 2 h $2,250.',
    servicios: [
      { nombre: 'Masaje relajante', duracion: '1 h', precio: '$1,200', nota: 'Relaxing massage. Movimientos suaves y rítmicos.' },
      { nombre: 'Masaje descontracturante', duracion: '1 h', precio: '$1,200', nota: 'Deep tissue massage. Masaje profundo.' },
      { nombre: 'Masaje de descarga muscular', duracion: '1 h', precio: '$1,200', nota: 'Masaje profundo.' },
      { nombre: 'Masaje de piedras calientes', duracion: '1 h', precio: '$1,200' },
      { nombre: 'Masaje con ventosas', duracion: '1 h', precio: '$1,200' },
      { nombre: 'Masaje + mascarilla hidratante', duracion: '1 h · 1.5 h', precio: '$1,600 · $2,100', nota: 'Relajante o descontracturante, más una mascarilla hidratante.' },
      { nombre: 'Reflexología', duracion: '1 h', precio: '$800' },
      { nombre: 'Biomagnetismo', duracion: '1 h', precio: '$800' },
      { nombre: 'Drenaje linfático' },
    ],
  },
  {
    id: 'faciales', nombre: 'Faciales',
    servicios: [
      { nombre: 'Limpieza profunda', duracion: '1 h 45 min', precio: '$1,050', nota: 'Con extracción.' },
      { nombre: 'HydraFacial (hidrodermoabrasión)', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Hidratación', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Microdermoabrasión', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Fotorejuvenecimiento (luz pulsada IPL)', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Levantamiento facial 3D', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Aclaramiento y manchas', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Secuela de acné', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Anti arrugas (labios y ojos)', duracion: '1 h 15 min', precio: '$1,050' },
      { nombre: 'Colágeno total con Dermapen', duracion: '1 h 15 min', precio: '$1,850' },
      { nombre: 'HIFU tensión total', duracion: '1 h 15 min', precio: '$2,250' },
      { nombre: 'HIFU reducción de papada', duracion: '1 h 45 min', precio: '$2,250' },
      { nombre: 'Facial premium Germaine de Capuccini', duracion: '1 h 15 min', precio: '$2,250', nota: 'Con HIFU $2,850; con HIFU y papada (1 h 45 min) $3,450.' },
    ],
  },
  {
    id: 'dias', nombre: 'Días de spa',
    servicios: [
      { nombre: 'Día de Relajación', duracion: '2.5 h', precio: '$2,250', nota: 'Masaje 1 h + facial Hidracure.' },
      { nombre: 'Día de Armonía', duracion: '3 h', precio: '$4,150', nota: 'Masaje 1.5 h + facial Timexpert Radiance + aperitivo y vino.' },
      { nombre: 'Día de Renovación', duracion: '4 h', precio: '$4,600', nota: 'Masaje 1 h + facial Hidracure + experiencia Aqua Marine + aperitivo y vino.' },
      { nombre: 'Día de Bienestar total', duracion: '5 h', precio: '$6,300', nota: 'Masaje 1.5 h + facial Timexpert Radiance + experiencia Aqua Marine + aperitivo y vino.' },
    ],
  },
  {
    id: 'corporales', nombre: 'Corporales',
    servicios: [
      { nombre: 'Experiencia Velo de novia', duracion: '3 h', precio: '$4,600', nota: 'Ritual Rose + facial Lift In + aperitivo y vino.' },
      { nombre: 'Experiencia Ritual Rose', duracion: '1.5 h', precio: '$2,150' },
      { nombre: 'Experiencia Aqua Marine', duracion: '1 h', precio: '$2,150' },
      { nombre: 'Aclaramiento: axilas, ingles, rodillas, codos', duracion: '1 h', precio: '$800' },
    ],
  },
  {
    id: 'reductivos', nombre: 'Reductivos',
    intro: 'Paquetes desde $6,000. Valoración corporal de 30 min, gratuita.',
    servicios: [
      { nombre: 'HIFU reafirmante', duracion: 'Abdomen, brazos o glúteos 45 min · piernas 1 h 15 min', precio: '$1,150 · $2,250' },
      { nombre: 'Carboxiterapia', duracion: 'Abdomen, brazos o glúteos 45 min · piernas 1 h 15 min', precio: '$1,150 · $2,250' },
      { nombre: 'Enzimas reductivas' },
      { nombre: 'Cavitación' },
      { nombre: 'Lipoescultura con mesoterapia' },
      { nombre: 'Radiofrecuencia' },
      { nombre: 'Presoterapia' },
      { nombre: 'Consulta nutricional', precio: '$650' },
    ],
  },
];

// Opciones del certificado de regalo: servicios con precio fijo de su carta.
export const opcionesCertificado = [
  { nombre: 'Masaje de 1 hora', precio: '$1,200' },
  { nombre: 'Masaje de 1.5 horas', precio: '$1,700' },
  { nombre: 'Masaje de 2 horas', precio: '$2,250' },
  { nombre: 'Masaje + mascarilla hidratante (1 h)', precio: '$1,600' },
  { nombre: 'Facial de hidratación', precio: '$1,050' },
  { nombre: 'HydraFacial', precio: '$1,050' },
  { nombre: 'Experiencia Ritual Rose', precio: '$2,150' },
  { nombre: 'Día de Relajación', precio: '$2,250' },
  { nombre: 'Día de Armonía', precio: '$4,150' },
  { nombre: 'Día de Renovación', precio: '$4,600' },
  { nombre: 'Día de Bienestar total', precio: '$6,300' },
];

export const valores = [
  'Personal altamente capacitado',
  'Actualización y evaluación permanentes',
  'Gran variedad de técnicas de masajes',
  'Servicio personalizado y estandarizado',
];

export const loyalty = {
  precio: '$300',
  beneficios: ['Bono de bienvenida: 20% menos en servicios y 10% menos en productos', 'Acumula 5% en todas tus compras', 'Acceso al cupón del mes: 30% menos'],
};

export const eventos = {
  tipos: ['Cumpleaños', 'Despedidas de soltera', 'Posadas', 'Eventos para empresas', 'Aniversarios', 'Baby showers', 'Graduaciones', 'Gender reveals'],
  paquete: 'Masaje 1 h + facial Hidracure + aperitivo y bebidas',
  detalle: '5 personas · 4 horas · $12,250',
};

export const testimonios = [
  { texto: 'Son super amables y atentos, todo está muy limpio, lo que para mi es muy importante y ponen mucha atención a los detalles.', autor: 'Andrea' },
  { texto: 'El servicio es impecable. El masaje de los mejores que he probado. Muy recomendable y a precio accesible. Las chicas súper profesionales.', autor: 'Carolina' },
  { texto: "Honestly the best massage experience I've ever had. Very professional, relaxing and I felt amazing.", autor: 'Hanna' },
];

export const escuela = {
  texto: 'Diplomado en Masaje Profesional con masaje relajante, descontracturante, deportivo, drenaje linfático, reflexología y holístico energético. Grupos reducidos y cursos individuales por técnica.',
  opciones: [['Diplomado de 6 meses', '$19,000'], ['Diplomado de 3 meses', '$11,000'], ['Curso de 1 mes', '$4,000']] as const,
};
