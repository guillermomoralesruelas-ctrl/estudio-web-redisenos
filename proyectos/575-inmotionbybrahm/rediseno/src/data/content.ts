// Contenido de InMotion by Brahmā. Textos copiados del sitio original (investigacion/crudo.json
// y las páginas /coaches, /contacto, /corporativo y /paquete/* leídas con curl el 2026-09-27).
// Lo redactado por nosotros está declarado en CAMBIOS.md → "Qué se agregó".

const SITIO = 'https://inmotionbybrahma.com';

export const negocio = {
  nombre: 'InMotion by Brahmā',
  estudio: 'brahmā studio',
  lema: 'Intention through movement.',
  telefono: '+52 618 273 92 38',
  telefonoHref: 'tel:+526182739238',
  // No publica WhatsApp: se usa su teléfono (pendiente de confirmar con el cliente).
  whatsapp: '526182739238',
  correo: 'brahmastudio11@gmail.com',
  direccion: 'Maestros Ilustres 460, Las Lomas 1ra Secc, 78210 San Luis Potosí, S.L.P.',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Maestros Ilustres 460, Las Lomas 1ra Secc, 78210 San Luis Potosí, S.L.P.'),
  reservar: `${SITIO}/reservar`,
  registro: `${SITIO}/register`,
  entrar: `${SITIO}/login`,
  blog: `${SITIO}/blog`,
  redes: [
    { nombre: '@brahmastudio_', url: 'https://www.instagram.com/brahmastudio_/', red: 'Instagram' },
    { nombre: '@inmotionby_paula', url: 'https://www.instagram.com/inmotionby_paula', red: 'Instagram' },
    { nombre: '@fisio.itzelcorral', url: 'https://www.instagram.com/fisio.itzelcorral', red: 'Instagram' },
    { nombre: 'brahmā studio', url: 'https://www.facebook.com/profile.php?id=61554982004757', red: 'Facebook' },
    { nombre: '@brahma.studio', url: 'https://www.tiktok.com/@brahma.studio', red: 'TikTok' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Modalidad = 'studio' | 'linea';

export type Clase = {
  id: string;
  nombre: string;
  /** Posición en el tapete: 0 = lo más suave, 100 = lo más intenso. Deducida de sus textos (pendiente). */
  energia: number;
  descripcion: string;
  frase: string;
  modalidades: Modalidad[];
  foto?: { src: string; w: number; h: number; alt: string };
  url?: string;
};

// Las diez clases de /clases (en studio) y /clases-en-linea. Sin la lista de "Beneficios" (afirmaciones de salud).
export const clases: Clase[] = [
  {
    id: 'mindfulness', nombre: 'Mindfulness', energia: 4,
    descripcion: 'En este espacio encontrarás ejercicios de respiración y/o meditación para conectar contigo de 5 a 10 min. Llénate de energía por la mañana, toma un espacio para liberar estrés por la tarde y relaja tu cuerpo y libera tu mente por la noche.',
    frase: 'Prepárate para iniciar y terminar tu día con intención',
    modalidades: ['linea'],
  },
  {
    id: 'vinyasa-suave', nombre: 'Vinyasa Suave', energia: 16,
    descripcion: 'Es una práctica suave que conecta el movimiento y la respiración consciente con posturas más sostenidas para habitar tu cuerpo y darle lo que necesita. Un espacio para conectar contigo, estar en presencia, bienestar y equilibrio.',
    frase: 'Prepárate para conectar contigo a través del movimiento y tu respiración consciente',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/14`,
    foto: { src: 'vinyasa-suave.webp', w: 733, h: 1100, alt: 'Detalle de una alumna sentada en torsión sobre el tapete' },
  },
  {
    id: 'yoga-integral', nombre: 'Yoga Integral', energia: 28,
    descripcion: 'Clase diseñada para complementar tu actividad física con ejercicios de respiración, movilidad, fuerza, entre otros.',
    frase: 'Prepárate para profundizar en tu práctica de forma más consciente',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/5`,
    foto: { src: 'yoga-integral.webp', w: 1078, h: 1100, alt: 'Alumna sentada en torsión, de espaldas, frente a la barra y las mancuernas del studio' },
  },
  {
    id: 'vinyasa-flow', nombre: 'Vinyasa Flow', energia: 40,
    descripcion: 'Es meditación en movimiento, la combinación perfecta entre movimiento y respiración. En esta clase podrás fluir y fortalecer tu cuerpo al sostener las posturas conectando tu respiración de manera consciente.',
    frase: 'Prepárate para fluir e intencionar el movimiento',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/1`,
    foto: { src: 'vinyasa-flow.webp', w: 800, h: 1100, alt: 'Alumna en postura de ángulo lateral con las manos juntas y la mirada hacia arriba' },
  },
  {
    id: 'barre', nombre: 'Barre', energia: 52,
    descripcion: 'Esta clase te ayudará a crear resistencia, coordinación y a tonificar músculos a la par de una combinación de movimientos de pilates, funcional y barra.',
    frase: 'Prepárate para tonificar y moverte al ritmo de la música',
    modalidades: ['linea'],
  },
  {
    id: 'power-pilates', nombre: 'Power Pilates', energia: 60,
    descripcion: 'En Power Pilates se trabaja la movilidad y el control del cuerpo generando fuerza y elongación a través de movimientos de alta intensidad pero de bajo impacto.',
    frase: 'Prepárate para fortalecer tu cuerpo a través de movimientos fluidos y dinámicos',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/11`,
    foto: { src: 'power-pilates.webp', w: 733, h: 1100, alt: 'Alumna de espaldas con los brazos arriba estirando una liga' },
  },
  {
    id: 'sculpt', nombre: 'Sculpt', energia: 68,
    descripcion: 'Eleva tu energía y fortalece tu cuerpo completo a través de ejercicios de fuerza y resistencia con movimientos controlados y repeticiones que elevan tu ritmo cardiaco con bajo impacto.',
    frase: 'Lleva tu práctica al siguiente nivel',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/2`,
    foto: { src: 'sculpt.webp', w: 859, h: 1100, alt: 'Alumna inclinada en una pierna con una mancuerna, frente al rack de mancuernas del studio' },
  },
  {
    id: 'power-vinyasa', nombre: 'Power Vinyasa', energia: 78,
    descripcion: 'Práctica de yoga dinámica que sincroniza movimiento y respiración continua para construir fuerza, flexibilidad y resistencia, pasando rápidamente de una postura a otra, generando calor y una sensación de fluidez energética.',
    frase: 'Prepárate para fortalecer tu cuerpo y tu mente',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/13`,
    foto: { src: 'power-vinyasa.webp', w: 733, h: 1100, alt: 'Alumna en triángulo girado con un brazo hacia el techo, sobre el tapete' },
  },
  {
    id: 'rocket-yoga', nombre: 'Rocket Yoga', energia: 88,
    descripcion: 'Estilo de yoga dinámico con secuencias creativas, incluyendo una mayor cantidad de balance de brazos e inversiones. Enfatiza la libertad de movimiento y la originalidad en cada práctica.',
    frase: 'Prepárate para intencionar el movimiento a través de una práctica fluida y dinámica',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/12`,
    foto: { src: 'rocket-yoga.webp', w: 733, h: 1100, alt: 'Alumna en parada de cabeza con una pierna flexionada, sobre el tapete' },
  },
  {
    id: 'cross-training', nombre: 'Cross Training', energia: 97,
    descripcion: 'Entrenamiento funcional de alta intensidad para trabajar los diferentes grupos musculares de manera enfocada (upper/lower body) y consciente (inhalación/exhalación).',
    frase: 'Prepárate para fortalecer tu cuerpo',
    modalidades: ['studio', 'linea'], url: `${SITIO}/clase/8`,
    foto: { src: 'cross-training.webp', w: 893, h: 1100, alt: 'Dos alumnas en zancada con mancuernas arriba de la cabeza' },
  },
];

export const atajos = [
  { texto: 'Necesito calma', energia: 10 },
  { texto: 'Quiero fluir', energia: 40 },
  { texto: 'Quiero fuerza', energia: 66 },
  { texto: 'Quiero sudar', energia: 95 },
];

export type Paquete = { nombre: string; detalle: string; precio: number; clases?: number; url: string; nota?: string };

// De /paquetes y de la página de cada paquete (curl, 2026-09-27). Todos duran 30 días.
export const paquetesStudio: Paquete[] = [
  { nombre: '1 clase', detalle: '1 clase en studio.', precio: 150, clases: 1, url: `${SITIO}/paquete/28` },
  { nombre: '4 clases', detalle: 'Paquete de 4 clases en studio.', precio: 550, clases: 4, url: `${SITIO}/paquete/27` },
  { nombre: '8 clases', detalle: 'Paquete de 8 clases en studio.', precio: 850, clases: 8, url: `${SITIO}/paquete/26` },
  { nombre: '15 clases', detalle: 'Paquete de 15 clases en studio.', precio: 999, clases: 15, url: `${SITIO}/paquete/25` },
  { nombre: 'Híbrido', detalle: '15 clases en studio + paquete ilimitado online.', precio: 1050, clases: 15, url: `${SITIO}/paquete/23` },
  { nombre: 'Ilimitado', detalle: 'Paquete de clases ilimitadas en studio.', precio: 1111, url: `${SITIO}/paquete/24` },
  { nombre: 'Early bird', detalle: 'Precio especial en horario de 6:00 AM (clases ilimitadas entre el horario de 6:00 y 7:00 AM).', precio: 555, url: `${SITIO}/paquete/35`, nota: 'No aplica con otras promociones.' },
];

export const paqueteLinea = {
  nombre: 'Clases Ilimitadas Online', precio: 299, url: `${SITIO}/paquete/6`,
  detalle: 'Este paquete funciona como una suscripción mensual. Al adquirirlo, se renovará automáticamente cada mes a partir de la fecha de compra, hasta que sea cancelado.',
  prueba: '¡14 días de prueba gratis al registrarse!',
  pruebaNota: 'Aplica solo para clases en línea. Puedes cancelar tu suscripción en cualquier momento y evitar la renovación automática.',
};

export const nosotras = {
  que: 'brahmā studio es un espacio para TODOS en el que puedes VIVIR tus PROCESOS, CONECTAR contigo y COMPARTIR con los demás desde tu verdad. En este espacio puedes encontrar conexión y balance para lograr tener un crecimiento integral.',
  intencion: 'Crear un espacio para que las personas aprendan a vivir y disfrutar el proceso de conectar y compartir. En brahma studio podrás intencionar tu práctica a través del movimiento.',
  valores: [
    { nombre: 'Nurture Life', texto: 'Nutrir el cuerpo a través de opciones saludables.' },
    { nombre: 'Awareness', texto: 'Descubrir, aceptar y conectar con tu mejor versión.' },
    { nombre: 'Simplicity', texto: 'Encontrar y disfrutar la grandeza en la simplicidad.' },
    { nombre: 'Balance', texto: 'Encontrar el equilibrio en el movimiento consciente.' },
  ],
  eleccion: 'Dependiendo de la energía con la que te encuentres, la hora del día y el movimiento que tu cuerpo necesita, podrás escoger la clase que te brinde mayor beneficio.',
  historia: [
    'Coincidimos en un lugar que nos inspiró demasiado, era una ciudad que a pesar de ser pequeña, vivía gente de todo el mundo, y el común denominador es que todos podían vivir desde su autenticidad, eran conscientes del impacto que tenían sus acciones en los demás, cuidaban de lo más esencial, ejercicio, alimentación, bienestar, crecimiento profesional.',
    'Por eso decidimos crear brahmā studio, un lugar donde todos pueden vivir y compartir desde su autenticidad, en conexión y balance a través del movimiento intencionado.',
  ],
};

// De /coaches (curl, 2026-09-27). Gaby Ove aparece sin estudios ni texto: no se incluye (pendiente).
export const coaches = [
  { nombre: 'Itzel Corral', estudios: 'Lic. Terapia Física CREE DIF Durango, con especialidad en ortopedia y salud de la mujer. Universidad de la Rioja, Madrid, España.', intencion: 'Unir y complementar el movimiento consciente con ciencia para reducir riesgo de lesiones y que cada persona viva en libertad de movimiento.' },
  { nombre: 'Ana Paula Aboytes', estudios: 'Certificación en barralates Mari Mar, Tijuana, MX. Certificación internacional en pilates Mat, avalada por NASM y AFAA.', intencion: 'Lograr una clase divertida y efectiva donde el objetivo sea el bienestar logrando hacerlos sentir cómodos con el ejercicio.' },
  { nombre: 'Ana Soto Aldama', estudios: '200 hr yoga teacher training House of OM, Bali, Indonesia. 60 hr entrenamiento y nutrición en mujeres, CDEFIS.', intencion: 'Compartir un espacio de conexión mente-cuerpo-alma a través del movimiento consciente e intencionado para vivir una vida en balance.' },
  { nombre: 'Adriana Ruiz', estudios: '200 hr yoga teacher training, Core Power Yoga, Washington DC. 50 hr Yoga Kids, Rainbow Kids Yoga, CDMX.', intencion: 'Compartir herramientas de conexión personal, para así, buscar ser nuestra versión más auténtica y verdadera, creando un mejor lugar para todos.' },
  { nombre: 'Denisse Durán', estudios: '200 hr Ashtanga 1ra serie, San Luis Potosí. 200 hr yoga teacher training House of OM, Bali, Indonesia.', intencion: 'Crear un espacio en el que se pueda enfocar la energía a través de la respiración y las asanas para tener conexión física-mental-espiritual.' },
  { nombre: 'Mavis Gea', estudios: 'Ashtanga Vinyasa 200 hrs, Vinyasa krama 200 hrs y Creación de vinyasa 30 hrs, San Luis Potosí.', intencion: 'Crear un espacio seguro donde las personas puedan conectar consigo mismas, compartirse y llevarse herramientas que las acompañen más allá del tapete.' },
  { nombre: 'María José Estrada', estudios: 'Ashtanga vinyasa yoga 200 hrs, Vinyasa krama 200 hrs, Creación de vinyasa 100 hrs y Vinyasa dinámica rocket 75 hrs, San Luis Potosí.', intencion: 'Compartir la práctica haciendo siempre la conciencia corporal y agradecimiento de todo lo que nos ofrece nuestro cuerpo cuando lo tratamos bien.' },
  { nombre: 'Mauricio Hernández', estudios: 'Vinyasa Yoga 100 hrs, Rocket Yoga 100 hrs e Intensivo de Dharma Yoga con Gerson Frau, San Luis Potosí.', intencion: 'Ayudarte a conectar con tu momento presente, escuchando tu respiración y celebrando todo lo que puede hacer tu cuerpo.' },
  { nombre: 'Sarahí Herrera', estudios: 'Vinyasa Holística 200 hrs (Apurva Yoga), Vinyasa Krama 200 hrs (San Luis Potosí), Vinyasa Dinámica 75 hrs, Movimiento y Yoga Somático (Eastwest Somatics).', intencion: 'Acompañar a través del movimiento, de la respiración y de la re-vinculación con el templo y gran aliado que es el cuerpo para regresar a uno mismo.' },
];

export const testimonios = [
  { nombre: 'Gaby Ove', texto: 'Es un estudio super intencionado, se nota desde el primer momento que su objetivo es el bienestar integral y una práctica sana, en donde escuchar tu cuerpo es lo más importante. Gracias Adri y Ana por co-crear un espacio tan bonito. 100% recomendado.' },
  { nombre: 'Mayra Torres', texto: 'Las clases me han gustado muchísimo, me han hecho darme cuenta que mi cuerpo es capaz de muchísimas cosas y cada clase me he permitido mejorar y ser más paciente conmigo misma de la mano de las dos grandes coaches. Las clases de brahma son un regalo para mí misma y se ha convertido en uno de mis espacios favoritos.' },
  { nombre: 'Aída Gloria Picazzo', texto: 'Un espacio ideal para reconectar contigo mismo. El ambiente es cálido y relajante. ¡Un lugar que inspira paz y equilibrio en cada práctica!' },
];

// De /corporativo (curl, 2026-09-27), resumido. Sin las cifras de estrés y rotación (no citan fuente).
export const corporativo = {
  titulo: 'Un servicio corporativo diseñado para tu empresa',
  texto: 'Bienestar integral para cada colaborador. Diseñamos programas a la medida de cada organización, combinando movimiento, bienestar emocional y conexión de equipos. Nuestro enfoque está alineado con la NOM-035-STPS-2018.',
  servicios: [
    { nombre: 'Clases online y en estudio', texto: 'Cada persona elige la práctica según su energía, el momento del día y el movimiento que su cuerpo necesite.' },
    { nombre: 'Espacios de bienestar', texto: 'Pausas conscientes con yoga, meditación, sound healing, cerámica y dinámicas creativas.' },
    { nombre: 'Retos de hábitos saludables', texto: 'En conjunto con una nutrióloga clínica, con movimiento a través de nuestros formatos de clases online.' },
    { nombre: 'Team building', texto: 'Talleres de manejo de estrés, yoga, mindfulness, pausas activas y dinámicas de integración.' },
  ],
};
