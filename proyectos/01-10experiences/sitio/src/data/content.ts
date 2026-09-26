// Todo el contenido editable del sitio vive aquí.
// Precios, horarios, textos y rutas de imágenes: cambia este archivo, no los componentes.

const img = {
  hero: '/secciones/mexico-told-through-the-senses-10experiences-june-2026.jpg',
  intro: '/secciones/how-it-works-10experiences-june-2026.jpg',
  original: '/secciones/exp1-june-2026.jpg',
  taco: '/secciones/exp2-june-2026.jpg',
  chef: '/secciones/the-chef-alejandro-torres-10experiences-june-2026.jpg',
  lorena: '/secciones/lorena-sanroman-10experiences-june-2026.jpg',
  fundadores: '/secciones/the-founders-10experiences-june-2026.jpg',
  mapa: '/viaje/the-journey-10experiences-july-2026.webp',
  hojas1: '/viaje/the-journey-leaves-1-10experiences-july-2026.png',
  hojas2: '/viaje/the-journey-leaves-2-10experiences-july-2026.png',
  calendario: '/viaje/the-journey-mayan-calendar-10experiences-july-2026.png',
  logo: '/marca/logo-header-10experiences-june-2026.png',
  logoFooter: '/marca/logo-10experiences-june-2026.png',
};

export const negocio = {
  nombre: '10 Experiences',
  whatsapp: '529871189999',
  telefonoVisible: '+52 987 118 9999',
  email: 'hello@10experiences.com.mx',
  ciudad: 'Cozumel, Quintana Roo, México',
  resenas: '+1600',
  plataformas: 'TripAdvisor, Google, OpenTable, Yelp y Airbnb',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/10experiencestour/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/10ExperiencesTour/' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@10experiencestour' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/@10experiencestour/' },
    { nombre: 'Pinterest', url: 'https://mx.pinterest.com/10experiencestour/' },
    { nombre: 'X', url: 'https://x.com/10experiencesgm/' },
  ],
  logo: img.logo,
  logoFooter: img.logoFooter,
};

export const nav = [
  { href: '#viaje', label: 'El viaje' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#galeria', label: 'Galería' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#preguntas', label: 'Preguntas' },
];

export const hero = {
  titulo: 'México, vivido a través de los sentidos',
  subtitulo: 'Un viaje de 10 tiempos por la herencia culinaria y cultural de México, contado plato a plato en una sede privada de Cozumel.',
  imagen: img.hero,
  alt: 'Invitados sentados a una mesa larga de madera mientras una pantalla proyecta un arrecife de Cozumel',
};

export const intro = {
  titulo: 'Una cena que se cuenta como un viaje',
  parrafos: [
    'Durante dos horas y media recorres México con 10 platillos elaborados y sus maridajes. Cada tiempo llega con su origen, su historia y una producción audiovisual que lo convierte en un destino.',
    'No la vas a encontrar en ningún otro lugar de Cozumel: un lugar privado, de puertas cerradas, donde cada tiempo se narra, se marida y te sumerge en un estado distinto.',
  ],
  secreto: 'Lo que vas a probar: la esencia de México, reinventada, con bebidas 100% mexicanas de la costa a la montaña. Lo demás lo guardamos en secreto. A propósito.',
  datos: [
    { termino: 'Duración', valor: '2 h 30 min' },
    { termino: 'Tiempos', valor: '10 platillos y 10 maridajes' },
    { termino: 'Bebidas', valor: '100% mexicanas' },
    { termino: 'Lugar', valor: 'Sede privada en Cozumel' },
  ],
  imagen: img.intro,
  alt: 'Pareja cenando frente a una pantalla con retratos en blanco y negro',
};

export type ExperienciaId = 'original' | 'taco';

export const experiencias: {
  id: ExperienciaId;
  nombre: string;
  precio: number;
  duracion: string;
  dias: string;
  horarios: string[];
  incluye: string;
  texto: string;
  imagen: string;
  alt: string;
}[] = [
  {
    id: 'original',
    nombre: 'La Experiencia Original',
    precio: 195,
    duracion: '2 h 30 min',
    dias: 'Lunes a sábado',
    horarios: ['1:30 PM', '6:30 PM'],
    incluye: '10 tiempos, 10 maridajes, 10 regiones de México',
    texto: 'México nunca ha cabido en un plato. Diez estados, diez historias y una nueva forma de entender el país. No será solo una cena: será de lo que más recuerdes de tu viaje.',
    imagen: img.original,
    alt: 'Mesa larga de madera iluminada con velas y comensales frente a pantallas',
  },
  {
    id: 'taco',
    nombre: 'La Experiencia del Taco',
    precio: 148,
    duracion: '1 h 45 min',
    dias: 'Lunes a sábado',
    horarios: ['9:00 AM', '11:00 AM'],
    incluye: '7 platillos, 7 maridajes, un recorrido por los tacos de México',
    texto: 'Olvida lo que crees saber de los tacos. Siete regiones, siete estilos, siete historias: en México una misma palabra significa mundos distintos.',
    imagen: img.taco,
    alt: 'Cerveza mexicana junto a dos tacos servidos sobre madera',
  },
];

export const reserva = {
  politica: 'Las reservaciones se pagan por adelantado y no son reembolsables, pero puedes reagendar sin costo y sin fecha límite.',
  maxInvitados: 16,
  diasCerrado: [0], // 0 = domingo
};

const estadoImg = (slug: string, ilustracion = slug, admitido = slug) => ({
  ilustracion: `/viaje/estados/${slug}/the-journey-${ilustracion}-10experiences-july-2026.webp`,
  sello: `/viaje/estados/${slug}/the-journey-${slug}-postage-stamp-10experiences-july-2026.png`,
  admitido: `/viaje/estados/${slug}/the-journey-admitted-stamp-${admitido}-10experiences-july-2026.png`,
});

export const viaje = {
  titulo: 'Completa tu visita a México',
  texto: 'Cada tiempo te lleva a un estado. Estas son algunas de las paradas que sellarás en tu pasaporte durante la cena.',
  mapa: img.mapa,
  hojas: [img.hojas1, img.hojas2],
  calendario: img.calendario,
  estados: [
    { nombre: 'Veracruz', icono: 'Voladores de Papantla', texto: 'Ritual totonaca que simboliza la unión entre el cielo y la tierra.', ...estadoImg('veracruz') },
    { nombre: 'Ciudad de México', icono: 'Ángel de la Independencia', texto: 'Monumento que celebra la Independencia de México.', ...estadoImg('cdmx') },
    { nombre: 'Cozumel', icono: 'El Cielo', texto: 'Aguas cristalinas famosas por sus estrellas de mar.', ...estadoImg('cozumel') },
    { nombre: 'Nuevo León', icono: 'Cerro de la Silla', texto: 'El ícono natural más representativo de Monterrey.', ...estadoImg('nuevo-leon') },
    { nombre: 'San Luis Potosí', icono: 'Huasteca Potosina', texto: 'Cascadas, ríos turquesa y naturaleza extraordinaria.', ...estadoImg('san-luis-potosi') },
    { nombre: 'Oaxaca', icono: 'Alebrijes', texto: 'Arte popular lleno de color y tradición.', ...estadoImg('oaxaca') },
    { nombre: 'Puebla', icono: 'Cholula', texto: 'La pirámide con la base más grande del mundo.', ...estadoImg('puebla') },
    { nombre: 'Yucatán', icono: 'Chichén Itzá', texto: 'Una de las Nuevas Siete Maravillas del Mundo.', ...estadoImg('yucatan') },
    { nombre: 'Estado de México', icono: 'Cosmovitral', texto: 'Jardín botánico rodeado por un impresionante vitral.', ...estadoImg('state-of-mexico') },
    { nombre: 'Sinaloa', icono: 'Carnaval de Mazatlán', texto: 'Uno de los carnavales más importantes de América.', ...estadoImg('sinaloa') },
    { nombre: 'Jalisco', icono: 'Charrería', texto: 'Tradición ecuestre y deporte nacional de México.', ...estadoImg('jalisco', 'jalisco', 'jaslico') },
    { nombre: 'Michoacán', icono: 'Danza de los Viejitos', texto: 'Danza purépecha llena de alegría y tradición.', ...estadoImg('michoacan') },
    { nombre: 'Tlaxcala', icono: 'Tapetes de Huamantla', texto: 'Coloridas obras de arte creadas sobre las calles.', ...estadoImg('tlaxcala', 'talxcala') },
  ],
};

export const opiniones = {
  titulo: 'Lo que cuentan quienes ya viajaron',
  resumen: 'Más de 1600 reseñas con calificación de 5 estrellas en TripAdvisor, Google, OpenTable, Yelp y Airbnb.',
  citas: [
    { texto: 'Una experiencia inolvidable de principio a fin. La pasión del Chef Alejandro y las historias detrás de cada platillo la convirtieron en mucho más que una cena. Sin duda, lo mejor de nuestro viaje a Cozumel.', autor: 'Jessica M.', lugar: 'Nueva York' },
    { texto: 'La experiencia culinaria más íntima y auténtica que hemos vivido. Cada detalle fue perfecto: los sabores, los maridajes, el relato.', autor: 'Michael R.', lugar: 'Toronto' },
    { texto: 'Una mezcla perfecta entre la herencia mexicana y la elegancia moderna. El lugar, la comida, la gente: todo fue excepcional. ¡Volveremos!', autor: 'Sophie L.', lugar: 'Londres' },
    { texto: 'Desde que llegamos nos sentimos parte de la familia. El Chef Alejandro y su equipo hacen magia. Una de las mejores experiencias que hemos tenido.', autor: 'David T.', lugar: 'Los Ángeles' },
  ],
};

export const personas = [
  {
    rol: 'El chef',
    nombre: 'Alejandro Torres',
    texto: 'Tiene un don poco común: tomar la cocina de la abuela y reinventarla en algo completamente nuevo, sin perderle jamás el alma. En sus manos, la cocina mexicana es refinada, intencional e inolvidable; cada sabor está hecho para devolverte a la magia de una comida que sabe a hogar.',
    imagen: img.chef,
    alt: 'El chef Alejandro Torres emplatando con pinzas',
  },
  {
    rol: 'El alma',
    nombre: 'Lorena Sanromán',
    texto: 'Es el alma detrás de cada detalle y le da vida a la experiencia con un sentido de perfección poco común. Para ella, cada sabor del chef cuenta una historia y convierte cada región de México en un viaje por el país que representa con orgullo.',
    imagen: img.lorena,
    alt: 'Lorena Sanromán sonriendo en el salón de la experiencia',
  },
  {
    rol: 'Los fundadores',
    nombre: 'Lorena y Alejandro',
    texto: 'Para ellos, México merece que el mundo lo vea por todo lo que realmente es: su riqueza y su forma infinita de dar a través de la tradición, la música, la comida y la historia. Un país que, por más que creas conocerlo, siempre te sorprende.',
    imagen: img.fundadores,
    alt: 'Lorena y Alejandro dando la bienvenida en la entrada del salón',
  },
];

export const equipo = {
  titulo: 'Quienes te acompañan',
  texto: 'Detrás de cada experiencia hay un equipo entregado a compartir los sabores, las tradiciones y el espíritu de México con calidez.',
  personas: [
    { nombre: 'Adrián', rol: 'Narrador', foto: '/equipo/adrian-guia-color.jpg' },
    { nombre: 'Gerardo', rol: 'Narrador', foto: '/equipo/gerardo-guia-color-julio-2026.jpg' },
    { nombre: 'Sergio', rol: 'Sous-chef', foto: '/equipo/sergio-sous-chef-color-julio-2026.jpg' },
    { nombre: 'Delta', rol: 'Sous-chef', foto: '/equipo/delta-sous-chef-color.jpg' },
    { nombre: 'Cristina', rol: 'Mesera', foto: '/equipo/cristina-mesera-color-julio-2026.jpg' },
    { nombre: 'Moisés', rol: 'Mesero', foto: '/equipo/moises-mesero-color-julio-2026.jpg' },
    { nombre: 'Javier', rol: 'Mesero', foto: '/equipo/javier-mesero-color.jpg' },
    { nombre: 'María', rol: 'Ventas', foto: '/equipo/maria-color.jpg' },
  ],
};

const serie = (carpeta: string, n = 8) =>
  Array.from({ length: n }, (_, i) => `/galeria/${carpeta}/${carpeta}-${i + 1}-10experiences-june-2026.webp`);

export const galeria = {
  titulo: 'Galería',
  categorias: [
    { id: 'momento', nombre: 'El momento', alt: 'Momento de la experiencia', fotos: serie('the-moment') },
    { id: 'lugar', nombre: 'Dónde sucede', alt: 'El lugar de la experiencia', fotos: serie('where-it-happens') },
    { id: 'creadores', nombre: 'Quienes lo hacen', alt: 'El equipo en acción', fotos: serie('the-makers') },
    { id: 'detalles', nombre: 'Los detalles', alt: 'Detalle de la mesa y los platillos', fotos: serie('the-details') },
    { id: 'mexico', nombre: 'México reimaginado', alt: 'Platillo mexicano reinterpretado', fotos: serie('mexico-reimagined') },
  ],
};

export const preguntas = [
  {
    grupo: 'La experiencia',
    items: [
      { p: '¿Qué hay en el menú?', r: 'Es el secreto mejor guardado: el menú nunca se revela de antemano, porque la sorpresa es parte de la experiencia. Lo que sí prometemos es un auténtico viaje culinario por México, creado por nuestro chef. Cada tiempo está pensado para descubrirse en el momento en que llega.' },
      { p: '¿En qué se diferencia de un restaurante de alta cocina?', r: 'Aquí no ordenas de un menú: cada tiempo se revela como parte de una historia que te lleva por 10 regiones, con maridajes, música, narrativa y momentos audiovisuales, en un entorno privado e íntimo.' },
      { p: '¿Los maridajes tienen que incluir alcohol?', r: 'No. Si prefieres maridajes sin alcohol, avísanos al reservar y los preparamos para que disfrutes la experiencia completa.' },
      { p: '¿Sirve para una ocasión especial o un aniversario?', r: 'Es una de las formas más memorables de celebrar. Para ocasiones románticas recomendamos el horario de las 6:30 PM, que tiene un ambiente más íntimo.' },
    ],
  },
  {
    grupo: 'Reservaciones',
    items: [
      { p: '¿Pago por adelantado o en el lugar?', r: 'Las reservaciones se aseguran por adelantado para garantizar tu lugar. Te guiamos en el proceso por WhatsApp; toma un minuto.' },
      { p: '¿Y si necesito cancelar o cambiar mi reservación?', r: 'Las reservaciones no son reembolsables, pero puedes reagendar sin costo adicional. No hay fecha límite ni vencimiento, así que tu experiencia nunca se pierde.' },
      { p: 'Llego en crucero. ¿Me alcanza el tiempo?', r: 'Sí. La experiencia de día fue diseñada pensando en los huéspedes de crucero. Compártenos el horario de tu barco en puerto y te recomendamos la experiencia que mejor se ajusta.' },
    ],
  },
  {
    grupo: 'Accesibilidad y grupos',
    items: [
      { p: '¿Pueden adaptarse a alergias o restricciones alimentarias?', r: 'Sí. Cuéntanos cualquier alergia o restricción al reservar y el chef adaptará el menú a tus necesidades.' },
      { p: '¿El lugar es accesible en silla de ruedas?', r: 'Sí. Avísanos con anticipación tus necesidades de accesibilidad y tendremos todo preparado para una visita cómoda.' },
      { p: '¿Organizan eventos privados o para grupos?', r: 'Sí: celebraciones, aniversarios, cenas corporativas y reuniones especiales. Compártenos la fecha, el número de invitados y la ocasión, y te enviamos una propuesta.' },
    ],
  },
];

export const sedes = [
  { nombre: 'Experiencia Original, 6:30 PM', mapa: 'https://maps.app.goo.gl/6Lbsoi8VSKucavTW9' },
  { nombre: 'Experiencia Original, 1:30 PM', mapa: 'https://maps.app.goo.gl/khsoJvQwMA1VeLD26' },
  { nombre: 'Experiencia del Taco, 9:00 y 11:00 AM', mapa: 'https://maps.app.goo.gl/khsoJvQwMA1VeLD26' },
];
