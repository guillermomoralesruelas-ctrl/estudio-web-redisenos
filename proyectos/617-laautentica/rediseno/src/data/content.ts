// Contenido de La Auténtica, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, va como pendiente y se anota en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, ver fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'La Auténtica',
  lema: 'Barbería, SPA & Club Social',
  // Meta description del sitio: "Cd. Satélite 📍 Zona Azul". La calle y el número no se publican (pendiente).
  zona: 'Ciudad Satélite, Zona Azul',
  telefono: '56 2020 3272',
  telefonoTel: '+525620203272',
  // wa.link/j5niit y wa.link/87masa redirigen a este número (5215620203272).
  whatsapp: '525620203272',
  email: 'contacto@autenticabarberia.com',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('La Auténtica Barbería Ciudad Satélite Zona Azul'),
  tienda: 'https://autenticabarberia.com/tienda/',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/autenticabarberia' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/autenticabarberia' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@autenticabarberia_' },
  ],
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const intro = 'Somos una Barbería Auténtica, ofrecemos la mejor experiencia para caballeros de todas las edades.';
export const barberiaIntro = 'Descubre una Auténtica Barbería. Arte del Corte y Cultura Mexicana se Fusionan en una Experiencia Exclusiva.';

export type Servicio = { nombre: string; precio: string; detalle: string; cortesia?: boolean };
export type Grupo = { id: string; titulo: string; servicios: Servicio[] };

export const barberia: Grupo[] = [
  {
    id: 'paquetes',
    titulo: 'Paquetes',
    servicios: [
      { nombre: 'Paquete SPA', precio: '$990', detalle: 'Corte caballero + afeitado clásico + exfoliación de cuero cabelludo + exfoliación facial con vaporizador + mascarilla relajante + reflexología o masaje relajante (30 min).', cortesia: true },
      { nombre: 'Premium', precio: '$620', detalle: 'Corte caballero + afeitado clásico + exfoliación de cuero cabelludo + exfoliación facial con vaporizador + mascarilla y masaje relajante.', cortesia: true },
      { nombre: 'Auténtico', precio: '$530', detalle: 'Corte caballero + afeitado auténtico.' },
      { nombre: 'Clásico', precio: '$490', detalle: 'Corte caballero + afeitado clásico.' },
    ],
  },
  {
    id: 'corte',
    titulo: 'Corte de cabello',
    servicios: [
      { nombre: 'Corte SPA', precio: '$890', detalle: 'Corte caballero + exfoliación de cuero cabelludo + exfoliación facial con vaporizador + mascarilla relajante + reflexología o masaje relajante (30 min).', cortesia: true },
      { nombre: 'Premium', precio: '$490', detalle: 'Corte caballero + exfoliación de cuero cabelludo + exfoliación facial con vaporizador + mascarilla y masaje relajante.', cortesia: true },
      { nombre: 'Caballero', precio: '$350', detalle: 'Corte de cabello para caballero.' },
      { nombre: 'Junior', precio: '$250', detalle: 'Corte de cabello para niño.' },
    ],
  },
  {
    id: 'afeitado',
    titulo: 'Afeitado',
    servicios: [
      { nombre: 'Premium', precio: '$450', detalle: 'Afeitado clásico o auténtico + exfoliación con vaporizador de ozono + mascarilla y masaje relajante.', cortesia: true },
      { nombre: 'Auténtico', precio: '$320', detalle: 'Doble toalla caliente, aceite pre-shave, espuma caliente, dos pasadas con navaja libre para una afeitada más cerrada, bálsamo after-shave y toalla fría con aroma.' },
      { nombre: 'Cabeza', precio: '$320', detalle: 'Doble toalla caliente, aceite pre-shave, espuma caliente, afeitado de cabeza, bálsamo after-shave y, para refrescarte, una toalla fría con aroma.' },
      { nombre: 'Clásico', precio: '$290', detalle: 'Toalla caliente, aceite pre-shave, espuma caliente, afeitado de barba, bálsamo after-shave y, para refrescarte, una toalla fría con aroma.' },
    ],
  },
  {
    id: 'recorte',
    titulo: 'Recorte y alineado',
    servicios: [
      { nombre: 'Barba y bigote', precio: '$190', detalle: 'Recorte, arreglo y alineado de barba.' },
      { nombre: 'Bigote', precio: '$90', detalle: 'Recorte, arreglo y alineado de bigote.' },
    ],
  },
];

export const experiencia = {
  nombre: 'Experiencia Auténtica, all inclusive',
  precio: '$1,290',
  texto: '¿Buscas el regalo perfecto para consentir a esa persona especial? Regalarle una “Experiencia Auténtica” con todo incluido es la opción ideal. Ofrecemos tarjetas de regalo personalizadas que incluyen una combinación de servicios de lujo.',
  combinaciones: [
    'Corte Clásico + Facial o Masaje (60 min)',
    'Paquete Clásico + Facial o Masaje (60 min)',
    'Corte Premium + Masaje (60 min)',
    'Paquete Premium + Masaje (60 min)',
  ],
};

export const barberos = [
  { nombre: 'Miguel Leon', foto: 'miguel-leon.webp' },
  { nombre: 'Santiago Pajaro', foto: 'santiago-pajaro.webp' },
];

export const spaIntro = 'Un espacio de relajación, donde la elegancia se combina con tratamientos de primera calidad. Sumérgete en un oasis de bienestar y rejuvenecimiento.';

export const spa: Grupo[] = [
  {
    id: 'spa-paquetes',
    titulo: 'Paquetes',
    servicios: [
      { nombre: 'Masaje 60 + facial', precio: '$1,990', detalle: 'Una hora de relajación profunda con masaje terapéutico seguido de un facial rejuvenecedor para una piel radiante.' },
      { nombre: 'Masaje 90 + facial', precio: '$2,290', detalle: '90 minutos de masaje que alivian el estrés, complementados con un facial personalizado que deja tu piel fresca y revitalizada.' },
      { nombre: 'Masaje en pareja (90 min)', precio: '$2,490', detalle: 'Una experiencia de relajación con tu ser querido: masaje de 90 minutos en una suite privada para dos.' },
      { nombre: 'Paquete en pareja (masaje + facial, 120 min)', precio: '$2,490', detalle: 'Masaje lado a lado y faciales simultáneos en una sesión de dos horas.' },
      { nombre: '4 masajes + 1 gratis', precio: '$3,590', detalle: 'Paquete de cinco masajes: el quinto es un regalo de la casa.' },
      { nombre: '4 faciales + 1 gratis', precio: '$5,190', detalle: 'Paquete de cinco faciales, con un tratamiento gratuito después de los primeros cuatro.' },
    ],
  },
  {
    id: 'masajes',
    titulo: 'Masajes',
    servicios: [
      { nombre: 'Anti estrés', precio: '$490', detalle: 'Manipulación suave y dígito presión para aliviar la tensión de hombros, cuello y cráneo.' },
      { nombre: 'Relajante', precio: '$890 a $1,590', detalle: 'Masaje corporal con movimientos restauradores que ayuda a disminuir el estrés, aliviar tensiones y relajar los músculos.' },
      { nombre: 'Descontracturante', precio: '$990 a $1,690', detalle: 'Manipulaciones de tejido profundo para aliviar lesiones y contracturas; ideal si tienes dolores musculares o haces actividad física.' },
      { nombre: 'Deportivo', precio: '$990 a $1,690', detalle: 'Manipulaciones profundas y estiramientos para recuperar la elasticidad del músculo; ideal si haces deporte y sufres calambres o lesiones.' },
    ],
  },
  {
    id: 'faciales',
    titulo: 'Faciales',
    servicios: [
      { nombre: 'Hidratante', precio: '$890', detalle: 'Suave exfoliación y tratamiento hidratante que deja la piel nutrida y luminosa.' },
      { nombre: 'Limpieza profunda', precio: '$1,290', detalle: 'Elimina toxinas y contaminantes con exfoliación y la mascarilla hidratante de la casa.' },
      { nombre: 'Antiacné', precio: '$1,290', detalle: 'Limpieza, masaje y exfoliación suaves para pieles adolescentes: depura, desintoxica e hidrata.' },
      { nombre: 'Rejuvenecimiento', precio: '$1,290', detalle: 'Protege las células, combate los signos de envejecimiento y favorece la producción natural de colágeno.' },
      { nombre: 'Grooming por sesiones', precio: '$1,290', detalle: 'Con Noxidil de Shaving Co y productos de Therapy: ayuda al crecimiento del vello facial y deja la piel con máxima hidratación.' },
    ],
  },
  {
    id: 'terapias',
    titulo: 'Terapias complementarias',
    servicios: [
      { nombre: 'Ventosas', precio: '$350', detalle: 'Activa la circulación y acelera la recuperación muscular.' },
      { nombre: 'Ajuste general', precio: '$290', detalle: 'Alinea la columna para mejorar la postura, recuperar el equilibrio y evitar lesiones.' },
      { nombre: 'Reductivo por sesiones', precio: '$1,290', detalle: 'Movimientos que mejoran la digestión y aceleran la eliminación de toxinas y líquidos retenidos.' },
    ],
  },
];

// Página "Agendar cita para: SPA/Masaje" del sitio original.
export const spaCita = 'Para confirmar tu cita con tu terapeuta se aparta el horario con $200 en la tienda en línea; o escríbenos por WhatsApp al 56 2020 3272 y con gusto te ayudamos a confirmarla.';

export const club = {
  texto: 'Conoce nuestro Club Privado con terraza. Disfruta de cocteles exclusivos y un servicio de primera en un ambiente clásico.',
  socio: 'Como miembro, tendrás acceso exclusivo a nuestra Terraza, donde podrás disfrutar de una amplia carta de coctelería, destilados y cervezas artesanales. Además, en tu cumpleaños te obsequiamos un paquete premium para que vengas y te consientas como mereces.',
  librero: 'No todo está a la vista. Detrás de ese librero empieza otra experiencia. Terraza Auténtica: ambiente, juego y buen trago. El tipo de diversión que se descubre, no se presume.',
  // Lomos del librero: lo que hay del otro lado, según los textos del sitio y sus publicaciones.
  lomos: ['Coctelería', 'Destilados', 'Cervezas artesanales', 'Billar', 'Fútbol en pantalla', 'Paquete de cumpleaños', 'Un evento por año'],
  futbol: 'Disfruta la emoción de tu deporte favorito. Reserva un evento por año.',
};

export const productos = [
  { nombre: 'The Good Guys Brand, Dry Pomade 120 g', precio: '$350', foto: 'gg-dry-pomade.webp', url: 'https://autenticabarberia.com/producto/the-good-guys-brand-dry-pomade-120g-4oz/' },
  { nombre: 'Reuzel Concrete Hold Matte Pomade 113 g', precio: '$592', foto: 'reuzel-concrete.webp', url: 'https://autenticabarberia.com/producto/reuzel-concrete-hold-matt-pomade-113-gr/' },
  { nombre: 'King Brown Original Pomade 75 g', precio: '$398', foto: 'kingbrown-pomade.webp', url: 'https://autenticabarberia.com/producto/kingbrown-original-pomade-75-g/' },
  { nombre: 'King Brown Beard Grooming Oil 30 ml', precio: '$425', foto: 'kingbrown-oil.webp', url: 'https://autenticabarberia.com/producto/kingbrown-beard-grooming-oill-30m/' },
];

export const resenas = [
  { autor: 'Rodrigo Martínez', texto: 'Excelente atención en la barbería, me lo han cortado distintos barberos y cada quien tiene su estilo, todos son proactivos de mencionarte cuáles son las recomendaciones acordes al corte que quieres. Los productos son buenos. Recomiendo el corte premium y te relajes con una buena mascarilla.' },
  { autor: 'Fernando Salas Rivera', texto: 'Sin duda, la mejor barbería en toda la ciudad. Una experiencia excepcional en un lugar magnífico con las mejores bebidas. Siempre buena música y tragos increíbles. Mención especial para Alfredo, espectacular en su trabajo. 1,000% recomendado.' },
  { autor: 'Nestor Leal', texto: 'Excelente lugar, limpio y con servicio profesional. La amabilidad y atención al detalle son destacables. Ofrecen una variedad de productos para el cuidado personal. Las bebidas son refrescantes y originales.' },
];
