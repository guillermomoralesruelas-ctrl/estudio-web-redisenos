// Contenido de Hotel Izkina (Cozumel, Quintana Roo).
// Textos copiados de investigacion/crudo.json (izkina.com: inicio, /reservaciones, /habitaciones e /historia,
// 2026-09-26). Se recortaron y se corrigieron erratas ("Pajaro Azul" → "Pájaro Azul", "descansás" → "descansas",
// espacios dobles).
// No están en crudo.json y se tomaron con curl el 2026-09-27 (ver CAMBIOS.md):
//   - el texto de cada habitación, de /habitaciones/pajaro-azul, /paloma, /tukan y /jilguero;
//   - check-in, check-out, identificación y confirmación por escrito, de /terminos-y-condiciones;
//   - el horario de atención, "En el corazón de la isla, donde todo sucede" y su texto, y las coordenadas del mapa,
//     de /contacto.
// Lo nuevo (títulos, botones, mensajes de WhatsApp y textos de "¿Con qué quieres despertar?") está en CAMBIOS.md →
// "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** El WhatsApp de su sitio (wa.me/+524451033378, en el encabezado y el pie). */
export const WA = '524451033378';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const mensajeBase = 'Hola, me gustaría reservar una habitación en Hotel Izkina. ¿Tienen disponibilidad?';

const sitio = 'https://izkina.com';

export const hotel = {
  nombre: 'Hotel Izkina',
  lema: 'Casa hotel Cozumel',
  reservar: `${sitio}/reservaciones`,
  whatsapp: wa(mensajeBase),
  whatsappVisible: '445 103 3378',
  telefono: { visible: '+52 445 103 33 78', href: 'tel:+524451033378' },
  email: 'contacto@izkina.com',
  direccion: 'Calle Dr. Adolfo Rosado Salas 200, Centro, 77668 Cozumel, Q.R.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Izkina%2C+Calle+Dr.+Adolfo+Rosado+Salas+200%2C+Centro%2C+77668+Cozumel%2C+Q.R.',
  instagram: { nombre: '@izkina.cozumel', url: 'https://www.instagram.com/izkina.cozumel/' },
  terminos: `${sitio}/terminos-y-condiciones`,
  // /terminos-y-condiciones (curl, 2026-09-27)
  checkIn: '15:00',
  checkOut: '12:00',
  // /contacto (curl, 2026-09-27)
  horario: [
    ['Lunes a viernes', '9:00 am – 6:00 pm'],
    ['Sábado y domingo', '11:00 am – 4:00 pm'],
  ] as const,
  logo: f('logo-izkina', 424, 426, 'Izkina, Casa Hotel Cozumel'),
  frase: 'Tu refugio elegante y acogedor en el Caribe Mexicano.',
  bienvenida: 'En Hotel Izkina, cada detalle está pensado para hacer de tu estancia un recuerdo inolvidable.',
};

export const izkina = {
  titulo: 'Izkina significa «esquina»',
  textos: [
    '«Izkina» significa «esquina» en maya yucateco, la lengua ancestral de esta tierra mágica: la península de Yucatán. Este nombre representa justo lo que somos: un punto de encuentro, un rincón donde las historias se cruzan, donde el alma se detiene y se deja abrazar por el lugar.',
    'Nuestro logo, el Giglio, evoca las cuatro esquinas del mundo, y simboliza ese cruce de caminos, de culturas, de momentos compartidos.',
  ],
};

export type HabitacionId = 'pajaro-azul' | 'paloma' | 'tukan' | 'jilguero';

export type Habitacion = {
  id: HabitacionId;
  nombre: string;
  /** Qué eliges en "¿Con qué quieres despertar?" (texto nuestro, sale de su descripción). */
  despertar: string;
  /** La frase con que empieza su página. */
  frase: string;
  texto: string;
  precio: number;
  cama: string;
  extra?: string;
  foto: Foto;
  pagina: string;
};

/** Precios, camas y capacidad de /habitaciones (crudo.json); textos de cada página de habitación (curl). */
export const habitaciones: Habitacion[] = [
  {
    id: 'pajaro-azul',
    nombre: 'Pájaro Azul',
    despertar: 'Con el agua a un paso',
    frase: 'La habitación más cercana al agua.',
    texto: 'Pájaro Azul vive en planta baja, silenciosa del ruido de la calle, con un ventanal grande que abre directo a la alberca de chukum, el jardín y los camastros. Despiertas y el agua está ahí. Sin intermediarios entre tú y la calma.',
    precio: 2000,
    cama: 'King size',
    foto: f('pajaro-azul', 1400, 934, 'Habitación Pájaro Azul: cama king size con colcha blanca y cojines de rayas, cabecera de puerta antigua, pared de chukum color arena, dos lámparas tejidas colgando y, a un lado, la puerta abierta del baño'),
    pagina: `${sitio}/habitaciones/pajaro-azul`,
  },
  {
    id: 'paloma',
    nombre: 'Paloma',
    despertar: 'Con luz todo el día',
    frase: 'La más espaciosa. La más luminosa. La de la esquina.',
    texto: 'Paloma se encuentra justo en la esquina del hotel con dos ventanales grandes que la bañan de luz natural todo el día. El baño es amplio, todo de chukum, con espejo grande: un santuario dentro del santuario.',
    precio: 2500,
    cama: 'King size',
    extra: 'Más sofá cama individual, para quien necesita espacio de verdad.',
    foto: f('paloma', 1400, 954, 'Habitación Paloma: cama king size con colcha color crema y flecos, cabecera de puertas antiguas, ventana con cortinas blancas, piso de madera en espiga, ventilador de techo y aire acondicionado'),
    pagina: `${sitio}/habitaciones/paloma`,
  },
  {
    id: 'tukan',
    nombre: 'Tukan',
    despertar: 'Temprano, sin despertar a nadie',
    frase: 'El favorito silencioso. El preferido de los buceadores.',
    texto: 'Tucán es amplia, acogedora y está estratégicamente ubicada junto a la cocina compartida: perfecta para quien madruga sin querer despertar a nadie. El baño es súper iluminado, con una pequeña ventana que da al patio interior del hotel.',
    precio: 2500,
    cama: 'King size',
    foto: f('tukan', 1400, 934, 'Habitación Tukan: cama king size con colcha blanca y cojines de rayas, cabecera de puerta antigua pintada, dos lámparas colgantes turquesa y paredes de chukum'),
    pagina: `${sitio}/habitaciones/tukan`,
  },
  {
    id: 'jilguero',
    nombre: 'Jilguero',
    despertar: 'Con el silencio del patio',
    frase: 'Una de las favoritas de la casa. Y de quien la conoce.',
    texto: 'Jilguero tiene un gran ventanal que da al patio interior del hotel: silenciosa, luminosa y profundamente acogedora. El baño es realmente lindo, con ese cuidado artesanal que define a Izkina. Hay habitaciones que simplemente se sienten bien. Esta es una de ellas.',
    precio: 2000,
    cama: 'Queen',
    foto: f('jilguero', 1400, 934, 'Habitación Jilguero: cama queen con colcha crema y flecos, cabecera de puerta antigua, banco de madera como buró y un ventanal alto con cortinas blancas'),
    pagina: `${sitio}/habitaciones/jilguero`,
  },
];

/** Lo que tienen todas (texto repetido en las cuatro páginas de habitación). */
export const detallesComunes =
  'Lavabo y lámpara de cobre artesanal, cabecera de puerta antigua, paredes de chukum, amenidades orgánicas (shampoo, acondicionador y jabón artesanales sin químicos, elaborados con plantas naturales) y frasco artesanal de cristal con agua.';

export const introHabitaciones =
  'Cada una de nuestras habitaciones lleva el nombre de un pájaro, pequeño homenaje a la libertad, la naturaleza y la ligereza del viaje. Así, cada espacio en Izkina te invita a volar, a soltar, a quedarte… aunque sea solo por un instante.';

export const capacidad = 'Máx. 2 adultos';

export const casa = {
  titulo: 'Más que un hotel, somos una casa',
  textos: [
    'Más que un hotel, somos una casa pensada para el descanso, la conexión y el disfrute sencillo.',
    'Todas nuestras habitaciones tienen aire acondicionado, ventilador, WiFi, y están terminadas en chukum, un acabado natural que mantiene la frescura y envuelve cada espacio en una sensación serena y acogedora.',
    'Contamos con una alberca en área compartida, ideal para relajarte después de un día bajo el sol de Cozumel. También tenemos una cocina común, equipada con lo esencial, donde puedes prepararte algo rico, como en casa, a tu ritmo.',
  ],
  porque: [
    'Estilo auténtico y local',
    'Ubicación céntrica, cerca del mar y lo mejor de Cozumel',
    'Habitaciones únicas, con nombres de aves',
    'Fruta fresca y ambiente cálido cada mañana',
  ],
  porqueTexto: 'Un espacio sencillo, bonito y con historia, pensado para quienes viajan buscando algo más que solo una habitación. Aquí descansas entre mosaicos antiguos, puertas rescatadas y detalles que te conectan con la isla y contigo.',
  auto: 'Además, si lo necesitas, te ayudamos a rentar auto o moto para que explores la isla a tu manera y sin complicaciones.',
  cierre: 'Aquí, todo está pensado para que descanses bonito y vivas Cozumel con calma y buen gusto.',
  fotos: [
    f('casa-alberca', 210, 210, 'La alberca de chukum en el área compartida, vista desde arriba, con plantas y cojines azules'),
    f('casa-banca-mosaicos', 210, 210, 'Banca de madera con cojines junto a una puerta antigua, sobre piso de mosaicos hechos a mano'),
    f('casa-patio', 210, 210, 'Sala de madera en el patio interior, con cojines azules y una mesa con fruta'),
    f('casa-fruta', 210, 210, 'Sillón de madera con cojín bordado y una charola de fruta fresca sobre una mesa de tronco'),
  ],
};

export const historia = {
  titulo: 'La historia de Izkina',
  textos: [
    'Izkina nace de un sueño y una conexión profunda con Cozumel.',
    'Esta casa, que antes estaba en ruinas, fue restaurada con paciencia y mucho amor para conservar su esencia original. Cada pared, cada detalle, fue cuidado para mantener viva la historia que guarda este espacio.',
    'Las texturas naturales del chukum, los mosaicos hechos a mano, las puertas antiguas que ahora son cabeceras y las lámparas artesanales de Michoacán reflejan no solo la cultura de la isla, sino también nuestras propias raíces y el cariño con el que construimos este refugio.',
    'Aunque no somos nativos de Cozumel, esta isla nos tocó el alma desde el primer momento y nos impulsó a crear un lugar donde otros también pudieran sentir esa magia y esa conexión con la historia, la naturaleza y la gente.',
  ],
  cierre: 'Izkina es más que un hotel; es un espacio vivo que cuenta una historia de esfuerzo, pasión y autenticidad, un hogar lejos de casa para todos quienes buscan vivir Cozumel desde el corazón.',
};

/** De /terminos-y-condiciones y /reservaciones (su aviso del ruido). */
export const antesDeReservar = [
  { titulo: 'Horarios', texto: 'Check-in: 15:00 h. Check-out: 12:00 h.' },
  { titulo: 'Identificación', texto: 'Al realizar el check-in, el huésped debe presentar una identificación oficial (INE o pasaporte) a nombre del titular de la reserva.' },
  { titulo: 'Confirmación', texto: 'La reserva solo es válida con la emisión de una confirmación escrita por parte del hotel.' },
  { titulo: 'El centro, con honestidad', texto: 'Al estar en el centro, algunos fines de semana puede haber ruido en los alrededores. Siempre lo compartimos con honestidad.' },
];

/** De /contacto (curl, 2026-09-27). */
export const ubicacion = {
  titulo: 'En el corazón de la isla, donde todo sucede',
  textos: [
    'Izkina está situada justo en el corazón de Cozumel, a pasos del malecón, los cafés, los mercados y la vida vibrante de la isla.',
    'La cercanía a centros de buceo, tours y experiencias locales hacen de nuestra ubicación el punto perfecto para quienes quieren vivir la isla con autenticidad y a pie.',
  ],
  cierre: 'Explora, regresa, descansa y vuelve a salir… Izkina te espera con calma y estilo.',
};
