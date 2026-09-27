// Contenido de La Mezquita, Concept Hotel & Spa (Aguascalientes). https://lamezquita.mx/
// Textos copiados de investigacion/crudo.json (inicio, Spa & Experiencias, Instalaciones y Blog): portada, "Un refugio
// inspirado en el Medio Oriente", suites, spa, restaurante y bar, cenas románticas, salón de eventos, "Lo que hace única
// tu experiencia", testimonios, preguntas frecuentes y contacto. Se recortaron y se corrigieron erratas
// ("Aparotología" → aparatología).
// Datos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-27 (ver CAMBIOS.md):
//   - las páginas de temazcal, sauna y vapor, masajes y cámara hiperbárica (frases de cada servicio);
//   - de su motor de reservas (Zavia ERP): las seis suites, sus dos planes, precios y la política (en suites.ts), el
//     nombre "Hotel y Spa La Mezquita" y la dirección "Puente Del Pilar, Fraccionamiento Rincón del Pilar";
//   - de su JSON-LD: "Av. del Valle" y el municipio (Jesús María).
// Lo nuevo (títulos, botones, textos de "Seis suites, seis puertas" y los mensajes de WhatsApp) está en CAMBIOS.md →
// "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const negocio = {
  nombre: 'La Mezquita',
  lema: 'Concept Hotel & Spa',
  telefono: '(449) 576 8099',
  tel: 'tel:+524495768099',
  whatsapp: '524495768099',
  correo: 'info@lamezquita.mx',
  direccion: 'Fraccionamiento Rincón del Pilar, C.P. 20926',
  ciudad: 'Aguascalientes',
  reservar: 'https://rbe.zaviaerp.com/hotel/hotelspalamezquita',
  mapa: 'https://maps.app.goo.gl/h1cdNaABP7enKsEn8',
  facebook: 'https://www.facebook.com/people/La-Mezquita-Mezquita/61573256854939/',
  instagram: 'https://www.instagram.com/la.mezquita.hotelspa/',
  tiktok: 'https://www.tiktok.com/@la.mezquita.hotel',
  blog: 'https://lamezquita.mx/blog/',
  logo: f('logo', 560, 113, 'La Mezquita Hotel & Spa'),
  saludo: 'Hola, quiero información para hospedarme en La Mezquita.',
};

export const portada = {
  // Su lista "Todo en un solo lugar" (la frase que rota en su portada).
  todo: ['hotel boutique', 'suites de lujo', 'spa', 'masajes', 'temazcal', 'cámara hiperbárica', 'bar & lounge', 'restaurante', 'cocina de autor', 'cenas románticas', 'salón de eventos'],
  texto: 'Vive una experiencia de hospedaje única en Aguascalientes, con suites de lujo, spa y un ambiente inspirado en la elegancia del Medio Oriente.',
  foto: f('suite', 590, 885, 'Suite de La Mezquita: cama con cabecera en forma de arco iluminado, lámparas turcas de colores, puertas de madera con arco y un tapete persa azul'),
};

export const refugio = {
  titulo: 'Un refugio inspirado en el Medio Oriente',
  parrafos: [
    'Vive un concepto único y diferente en Aguascalientes con inspiración de Medio Oriente que transforma cada estancia en una experiencia sin igual, donde el diseño, la atmósfera y el confort se combinan para crear un ambiente envolvente ideal para desconectarte y disfrutar.',
    'Cada espacio ha sido cuidadosamente diseñado para brindarte lujo, comodidad y exclusividad con una atención personalizada que eleva tu experiencia desde el primer momento.',
  ],
};

// ---------- Spa & Experiencias ----------

export const spa = {
  titulo: 'Spa, masajes y experiencias de bienestar',
  intro: 'Un espacio creado para renovar cuerpo y mente mediante masajes, tratamientos personalizados y experiencias de bienestar. Nuestro spa combina técnicas relajantes, terapéuticas y holísticas para liberar tensión, recuperar energía y favorecer el equilibrio.',
  masajes: ['Sueco', 'Tejido profundo', 'Piedras calientes', 'Drenaje linfático', 'Descontracturante', 'Relajante'],
  foto: f('spa-cabina', 720, 480, 'Cabina de masaje de La Mezquita: camilla con velas, un cuenco tibetano y flores secas, entre muros de carrizo'),
};

export type Servicio = { nombre: string; que: string; detalle?: string; pagina?: string; proximamente?: boolean };

export const servicios: Servicio[] = [
  {
    nombre: 'Masajes holísticos',
    que: 'Terapia integral que equilibra cuerpo, mente y emociones mediante técnicas relajantes.',
    detalle: 'Cada sesión está pensada para adaptarse a tus necesidades, creando un momento único de descanso y renovación en un ambiente exclusivo.',
    pagina: 'https://lamezquita.mx/masajes-en-aguascalientes/',
  },
  {
    nombre: 'Temazcal',
    que: 'Ritual ancestral que purifica el cuerpo y renueva la energía en un ambiente tradicional.',
    detalle: 'Se realiza en un espacio cerrado donde el calor y el vapor generan una atmósfera intensa y transformadora, en un entorno seguro y guiado.',
    pagina: 'https://lamezquita.mx/temazcal-en-aguascalientes/',
  },
  {
    nombre: 'Sauna & vapor',
    que: 'Espacios diseñados para relajar profundamente a través del calor.',
    detalle: 'El calor del sauna y el vapor crean un ambiente ideal para abrir los poros, liberar tensiones y generar una sensación profunda de relajación.',
    pagina: 'https://lamezquita.mx/sauna-y-vapor-en-aguascalientes/',
  },
  {
    nombre: 'Cámara hiperbárica',
    que: 'Oxigenación avanzada que revitaliza el organismo y favorece la recuperación natural.',
    detalle: 'A través de la oxigenoterapia hiperbárica, el organismo recibe oxígeno puro en condiciones de presión controlada.',
    pagina: 'https://lamezquita.mx/camara-hiperbarica-aguascalientes/',
  },
  {
    nombre: 'Clínica de aparatología',
    que: 'Un espacio especializado en estética y aparatología avanzada, con cita previa.',
    proximamente: true,
  },
];

// ---------- Restaurante, cenas y eventos ----------

export type Espacio = { id: string; nombre: string; que: string; mensaje: string; foto?: Foto };

export const espacios: Espacio[] = [
  {
    id: 'restaurante', nombre: 'Restaurante & Bar',
    que: 'Un espacio donde la gastronomía y la mixología se fusionan en una experiencia sensorial. Contamos con un restaurante de autor con platillos preparados cuidadosamente.',
    mensaje: 'Hola, quiero reservar en el restaurante de La Mezquita para __ personas el día __ a las __.',
    foto: f('bar', 520, 780, 'Bartender de La Mezquita sirviendo un coctel naranja con hielo en una barra de mármol, con nichos en arco y botellas al fondo'),
  },
  {
    id: 'cenas', nombre: 'Cenas románticas',
    que: 'Experiencias íntimas diseñadas para compartir momentos especiales en un ambiente único y encantador.',
    mensaje: 'Hola, quiero información de las cenas románticas de La Mezquita para el día __.',
  },
  {
    id: 'eventos', nombre: 'Salón de eventos',
    que: 'Un espacio elegante y versátil para eventos sociales y corporativos: reuniones, celebraciones, conferencias y eventos privados.',
    mensaje: 'Hola, quiero información del salón de eventos de La Mezquita para un evento de __ personas el día __.',
    foto: f('salon-arcos', 520, 347, 'Salón de eventos de La Mezquita: una fila de arcos de azulejo verde y ladrillo frente a un jardín de pasto'),
  },
];

// ---------- Lo que la hace única y testimonios ----------

export const unica = {
  titulo: 'Lo que hace única tu experiencia en La Mezquita',
  parrafos: [
    'En La Mezquita no solo te hospedas: te sumerges en un entorno íntimo diseñado para el descanso profundo y la conexión en pareja.',
    'A diferencia de la hotelería tradicional, aquí encuentras atención de autor, un servicio personalizado que se adapta a ti desde el primer momento, junto con un entorno privado y exclusivo que garantiza tranquilidad, desconexión y privacidad total.',
    'Además, integramos experiencias de bienestar con aparatología clínica especializada, donde el confort, la salud y el placer se combinan en un solo lugar.',
  ],
};

/** Los tres testimonios de su sitio (en su carrusel se repiten). Solo nombre de pila; no se pudieron comprobar. */
export const testimonios = [
  { texto: 'Una experiencia completamente diferente en Aguascalientes, el diseño inspirado en Medio Oriente es impresionante y la atención fue impecable desde nuestra llegada, sin duda volveremos.', nombre: 'Maricela', estancia: 'Suite & Spa' },
  { texto: 'El lugar perfecto para desconectarse y relajarse, todo está cuidado al detalle y el ambiente te hace sentir en otro país, el servicio superó nuestras expectativas.', nombre: 'Rodolfo', estancia: 'Suite & Temazcal' },
  { texto: 'Excelente ubicación, instalaciones hermosas y un trato muy personalizado, es un hotel único que realmente ofrece algo distinto en la ciudad.', nombre: 'Diana', estancia: 'Suite & Spa' },
];

// ---------- Preguntas frecuentes (las 10 de su sitio, al pie de la letra salvo erratas) ----------

export const preguntas: { p: string; r: string }[] = [
  { p: '¿Cuál es el horario de check-in y check-out?', r: 'El check-in está disponible a partir de las 3:00 p.m. y el check-out debe realizarse antes de las 12:00 p.m. Si requieres un horario especial, contáctanos y con gusto revisaremos la disponibilidad.' },
  { p: '¿Dónde se encuentra ubicado el hotel?', r: 'Nos encontramos en una ubicación estratégica de Aguascalientes, con fácil acceso a los principales puntos de interés, zonas comerciales, restaurantes y centros de negocios.' },
  { p: '¿El hotel cuenta con estacionamiento?', r: 'Sí. Ofrecemos estacionamiento privado para nuestros huéspedes, brindando mayor comodidad y seguridad durante toda su estancia.' },
  { p: '¿Qué servicios están incluidos en mi hospedaje?', r: 'Tu reservación incluye Wi-Fi de alta velocidad, recepción, áreas comunes, estacionamiento y acceso a las instalaciones del hotel. Algunos servicios especializados pueden requerir reservación previa.' },
  { p: '¿El hotel tiene restaurante?', r: 'Sí. Contamos con un restaurante de autor donde podrás disfrutar de una experiencia gastronómica con platillos preparados cuidadosamente y un servicio de alta calidad.' },
  { p: '¿Puedo reservar tratamientos en la clínica de aparatología?', r: 'Sí. Nuestra clínica de aparatología ofrece diferentes tratamientos estéticos y de bienestar. Los servicios están disponibles con cita previa para garantizar una atención personalizada.' },
  { p: '¿Cómo puedo realizar una reservación?', r: 'Puedes reservar directamente desde nuestro sitio web, comunicarte por teléfono o enviarnos un mensaje por WhatsApp. Nuestro equipo estará disponible para ayudarte durante todo el proceso.' },
  { p: '¿El hotel ofrece espacios para eventos o reuniones?', r: 'Sí. Contamos con un salón para eventos sociales y corporativos, ideal para reuniones, celebraciones, conferencias y eventos privados.' },
  { p: '¿Se aceptan mascotas?', r: 'Actualmente no somos un hotel pet friendly. Si tienes alguna necesidad especial relacionada con tu estancia, no dudes en comunicarte con nosotros.' },
  { p: '¿Qué hace diferente a su hotel?', r: 'Somos un concepto que integra hospedaje, gastronomía de autor, bienestar y atención personalizada en un mismo lugar. Cada espacio ha sido diseñado para ofrecer una experiencia exclusiva, cómoda y diferente a la hotelería tradicional.' },
];
