// Contenido de Explora Vallarta (Cruz de Huanacaxtle, Nayarit), tomado del sitio original: investigacion/crudo.json
// (inicio, nosotros, ballenas, Islas Marietas y delfines) e investigacion/original.html. La nube no llega al sitio.
// Regla: nada inventado. Precios solo de las tres páginas leídas; el resto del catálogo va sin precio.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Explora Vallarta',
  whatsapp: '523221322753',
  telefono: '(322) 132 27 53',
  telefonoHref: 'tel:+523221322753',
  correo: 'tours@exploravallarta.com',
  direccion: 'Pampano 9, 63734 Cruz de Huanacaxtle, Nayarit',
  horario: '8:00 am a 7:00 pm',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Pampano 9, 63734 Cruz de Huanacaxtle, Nayarit'),
  ingles: 'https://www.exploravallarta.com/en/',
  politicas: 'https://www.exploravallarta.com/politicas-y-restricciones',
  sitio: 'https://www.exploravallarta.com',
  redes: [
    ['Facebook', 'https://facebook.com/ExploraVallarta'],
    ['Instagram', 'https://www.instagram.com/exploravallarta/'],
    ['TikTok', 'https://tiktok.com/@exploravallarta'],
    ['YouTube', 'https://www.youtube.com/user/ExploraVallarta'],
  ] as const,
  video: 'https://www.youtube.com/watch?v=TNjTDTkLiAI',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waInfo = wa('Hola Explora Vallarta, vengo de su página y quiero información de sus tours.');

// La NOM-131-SEMARNAT-2010, como la explican en la FAQ del tour de ballenas.
export const distancias = [
  { id: 'explora', metros: 60, nombre: 'Tu lancha con Explora Vallarta', texto: 'Una embarcación autorizada de tamaño menor mantiene 60 metros. Por eso la experiencia es más cercana y privada.' },
  { id: 'grande', metros: 80, nombre: 'Un barco grande', texto: 'Los barcos grandes autorizados deben quedarse a 80 metros de la ballena.' },
  { id: 'sin', metros: 240, nombre: 'Sin autorización', texto: 'Las embarcaciones sin autorización deben permanecer a 240 metros y alejarse de las ballenas.' },
] as const;

export const comportamientos = [['Salto', 'Breaching'], ['Coletazo', 'Fluking'], ['Espionaje', 'Spyhop']] as const;

export type Tour = {
  id: string; nombre: string; foto: string; alt: string; texto: string; duracion: string;
  precios?: [string, string][]; notas?: string[]; incluye?: string[];
};

export const tours: Tour[] = [
  {
    id: 'ballenas', nombre: 'Avistamiento de ballenas jorobadas', foto: 'ballena-salto', alt: 'Ballena jorobada saltando fuera del agua en la Bahía de Banderas',
    texto: 'Una expedición científica y educativa en la Bahía de Banderas, con hidrófono a bordo para escuchar sus cantos.',
    duracion: '3 horas', precios: [['Adultos', '$1,900'], ['Niños (4 a 11 años)', '$1,535']],
    notas: ['Temporada oficial: del 8 de diciembre al 23 de marzo.', 'Reserva con 50%.', 'Si por alguna razón extraordinaria no ven ninguna, tienes garantía de repetir el tour.'],
    incluye: ['Biólogos marinos y naturalistas', 'Capitán certificado', 'Hidrófono', 'Box lunch', 'Fotos de cortesía', 'Chalecos y seguro de viajero'],
  },
  {
    id: 'marietas', nombre: 'Islas Marietas y Playa del Amor', foto: 'playa-del-amor', alt: 'Visitantes en la Playa del Amor de Islas Marietas, bajo el hueco del techo de roca',
    texto: 'El santuario de aves y arrecifes del Parque Nacional Islas Marietas, con snorkel y pájaro bobo de patas azules.',
    duracion: '3 horas (tiempo reglamentario del área protegida)',
    precios: [['Clásico (2 islas + snorkel), adultos', '$2,200'], ['Clásico, niños (4 a 11 años)', '$1,750'], ['Con Playa del Amor', '$2,550']],
    notas: ['+ $180 por persona de brazalete CONANP.', '20% de descuento a partir de 4 pasajeros.', 'Lunes cerrado todo el parque (abre solo en puentes).', 'Playa del Amor: de 10 a 65 años y hay que saber nadar bien.'],
    incluye: ['Biólogos marinos', 'Capitán certificado', 'Box lunch', 'Equipo de snorkel', 'Chalecos', 'Fotos submarinas de cortesía'],
  },
  {
    id: 'delfines', nombre: 'Delfines en libertad', foto: 'delfines', alt: 'Tres delfines nariz de botella nadando en la superficie de la bahía',
    texto: 'Observación y nado ético con delfines nariz de botella: si hay crías no se nada, y siempre esperan a que los delfines se acerquen.',
    duracion: 'Matutina 9:00 a 12:00 o vespertina 12:30 a 15:30', precios: [['Adultos', '$1,900'], ['Niños (4 a 11 años)', '$1,535']],
    notas: ['Todo el año.', 'Reserva con 50%.'],
    incluye: ['Biólogos y naturalistas', 'Hidrófono', 'Playa para nadar y snorkel', 'Box lunch y bebidas', 'Chalecos y seguro'],
  },
];

export const catalogo = [
  ['Liberación de tortugas', '3 horas', 'Aprende sobre su ciclo de vida y ayuda a las crías en su camino al mar.'],
  ['Snorkel en Los Arcos de Mismaloya', '3 horas', 'Cuevas y túneles submarinos en el parque marino de la zona sur de Vallarta.'],
  ['Aventura en kayak', '3 horas', 'Cuevas marinas inaccesibles por tierra, con equipo incluido.'],
  ['Buceo en Bahía de Banderas', 'Flexible', 'Los mejores arrecifes de Puerto Vallarta con equipo profesional.'],
  ['Hiking Río Nogalito', '5 horas, nivel medio', 'Caminata por la selva tropical hasta cascadas naturales.'],
  ['Canopy, tirolesas', '4 horas', 'Circuito de tirolesas sobre la selva.'],
  ['San Sebastián del Oeste', '8 horas', 'Tour cultural por el pasado minero de la Sierra Madre Occidental.'],
] as const;

export const conservacion = [
  ['logo-raben', 'Red RABEN', 'Miembros activos de la Red de Asistencia a Ballenas Enmalladas, ayudando a rescatar ballenas jorobadas enmalladas en redes de pesca.'],
  ['logo-nado', 'Nado por las Ballenas A.C.', 'Parte de esta asociación civil que protege la biodiversidad marina y terrestre de Puerto Vallarta y Riviera Nayarit.'],
  ['logo-varamientos', 'Red de Varamientos', 'Colaboran en la Red de Varamientos de Bahía de Banderas para la atención de fauna marina.'],
  ['logo-biologos', 'BiologosMarinos.org', 'Talleres de educación ambiental financiados por Nado por las Ballenas.'],
] as const;

export const guias = [
  ['Biól. Jorge Morales', 'Director y biólogo marino', 'Con años de experiencia en la investigación de cetáceos, te enseña a interpretar cada movimiento de las ballenas.'],
  ['Cap. José Ángel', 'Capitán de embarcación', 'Nadie conoce la Bahía como él: un acercamiento seguro, respetuoso y en los mejores ángulos para la fotografía.'],
  ['Fabiola Flores', 'Guía naturalista', 'Especialista en aves y ecosistemas terrestres, y en conectar a las personas con la naturaleza.'],
] as const;

export const opiniones = [
  ['Increíble experiencia. Lo mejor es que vas con biólogos que realmente saben y aman lo que hacen. Aprendimos muchísimo sobre las ballenas.', 'María G.'],
  ['Tour a Islas Marietas fantástico. Grupos pequeños y atención personalizada. La explicación científica le da un valor extra que otros tours no tienen.', 'Carlos R.'],
  ['Liberar tortugas con Explora Vallarta fue un sueño. Se nota el compromiso con la conservación. No es solo un tour, es una lección de vida.', 'Ana L.'],
] as const;

export const faq = [
  ['¿Se permite nadar con las ballenas?', 'No. Por normativa federal (NOM-131-SEMARNAT-2010) y por seguridad de las ballenas y de los pasajeros, está prohibido entrar al agua con ellas en la Bahía de Banderas.'],
  ['¿Cuál es la mejor temporada?', 'Para ballenas, de diciembre a marzo. Para sol y snorkel en Islas Marietas, de noviembre a mayo, con aguas más cristalinas.'],
  ['¿Qué llevo a Marietas?', 'No uses bloqueador ni cremas (dañan los corales): mejor playera de manga larga con protección UV, gorra, toalla y un rompevientos para el regreso.'],
  ['¿Puedo llevar mascotas?', 'No. El reglamento federal no permite mascotas a bordo, para evitar riesgos sanitarios hacia los mamíferos marinos.'],
] as const;
