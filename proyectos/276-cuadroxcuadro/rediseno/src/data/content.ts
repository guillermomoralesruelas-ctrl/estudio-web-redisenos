// Contenido de Cuadro x Cuadro, tomado del sitio original (investigacion/crudo.json: inicio, preguntas frecuentes,
// paquetes de boda y de XV años, videos) y del sitio en vivo leído con curl el 2026-09-28.
// Regla: nada inventado. Lo que falta o no cuadra está anotado en CAMBIOS.md.
// Las fotos son copias .webp de las del clon, hechas con fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Cuadro x Cuadro',
  lema: 'Wedding photo & video',
  ciudad: 'Ciudad de México',
  zona: 'Ciudad de México y toda la República; fuera del área metropolitana se cotizan viáticos.',
  // Su sitio marca "(01) 55 21237334"; el 01 ya no se usa. Es el mismo número de su botón de WhatsApp.
  whatsapp: '525521237334',
  telefono: '55 2123 7334',
  telefonoHref: 'tel:+525521237334',
  correo: 'saulrosas@cuadroxcuadro.mx',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Cuadro+x+Cuadro+fotograf%C3%ADa+y+video+Ciudad+de+M%C3%A9xico',
  facebook: 'https://facebook.com/CUADROXCUADROPRO',
  youtube: 'https://youtube.com/channel/UCUQ-dkBJtgkYPDhiZkxEaeA',
  opiniones: 'https://www.bodas.com.mx/fotografos-de-bodas/cuadro-x-cuadro--e111462/opiniones',
  anios: 22,
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola Cuadro x Cuadro, vi su página y quiero cotizar foto y video para mi evento. Mi fecha es: ');

export type Foto = { src: string; alt: string; ancho: number; alto: number };
const f = (nombre: string, alt: string, ancho = 900, alto = 600): Foto => ({ src: img(`${nombre}.webp`), alt, ancho, alto });

export const fotos = {
  portada: f('velo-montana', 'Novios de pie entre montañas áridas con el velo largo volando al viento', 1500, 1000),
  zapato: f('zapato-novia', 'Novia sentada poniéndose la liga, con el vestido recogido, en una sala en penumbra'),
  peinado: f('peinado', 'Novia con los ojos cerrados mientras le aplican spray en el peinado'),
  espejo: f('espejo', 'Novia reflejada en un espejo redondo durante el arreglo'),
  puerta: f('puerta-iglesia', 'Novio cargando a la novia en la puerta de una capilla antigua de piedra'),
  besoVelo: f('beso-velo', 'Novio besando la mano de la novia bajo el velo de encaje'),
  petalos: f('petalos', 'Damas de vestido rojo lanzan pétalos a los novios a la salida de la ceremonia'),
  vals: f('vals-luces', 'Novios abrazados en la pista con luces azules detrás'),
  confeti: f('confeti', 'Novios bailando bajo una lluvia de confeti plateado en el salón'),
  pastel: f('pastel', 'Pastel de boda de tres pisos decorado con rosas y nube'),
  flores: f('flores-amarillas', 'Pareja en una sesión casual entre flores amarillas'),
  papelPicado: f('papel-picado', 'Pareja sonriendo bajo banderas de papel picado en un bosque'),
  piramide: f('piramide', 'Pareja frente a una pirámide en un campo de pasto seco'),
  espalda: f('espalda-con-espalda', 'Pareja sentada espalda con espalda en un paisaje en blanco y negro'),
  volcan: f('volcan', 'Novios en un pastizal con un volcán y nubes al fondo'),
  love: f('letras-love', 'Letras de madera que forman LOVE sobre un tronco'),
  veloBosque: f('velo-bosque', 'Novios en un bosque con el velo extendido en el aire'),
  xvBosque: f('xv-bosque', 'Quinceañera con vestido rosa sentada en un tronco del bosque', 900, 1350),
  xvCascada: f('xv-cascada', 'Quinceañera con vestido rosa y tiara, sonriendo junto a una cascada', 800, 793),
  xvViolin: f('xv-violin', 'Quinceañera de vestido rojo tocando el violín en una sala oscura'),
  xvRisco: f('xv-risco', 'Quinceañera con tiara junto a una pared de roca al atardecer'),
  auto: f('auto-clasico', 'Auto clásico adornado para boda frente a la parroquia', 800, 1200),
};

// ---- Paquetes (páginas "Paquetes de fotografía y video para Bodas" y "para XV Años") ----
export type Momento = 'maquillaje' | 'ceremonia' | 'salon';
export type Extra = 'casual' | 'trash' | 'posterior' | 'drone';
export type Paquete = {
  id: string;
  nombre: string;
  horas: number;
  momentos: Momento[];
  extras: Extra[];
  precio?: number;
  nota?: string;
  foto: string[];
  impresos: string[];
  video: string[];
};

const videoCompleto = 'Video Full HD de 60 a 90 minutos: clip del salón, clip de la iglesia y video semblanza para redes';
const entrevistas = 'Entrevistas a 10 amigos y familiares';
const videomemoria = 'Videomemoria de hasta 40 fotos';
const ronin = 'Camarógrafo con estabilizador Ronin-S y cámara DSLR';

export const paquetesBoda: Paquete[] = [
  {
    id: 'basico', nombre: 'Básico', horas: 6, momentos: ['ceremonia', 'salon'], extras: [],
    foto: ['Fotógrafo profesional', 'Edición básica de todas las fotos', 'USB con todas las fotos (mínimo 300)'],
    impresos: ['100 fotos impresas', 'Estuche para fotos'],
    video: [ronin, videoCompleto, entrevistas, videomemoria],
  },
  {
    id: 'basico-book', nombre: 'Básico Book', horas: 8, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: [],
    foto: ['Fotógrafo profesional', 'Edición básica de todas las fotos', 'USB con todas las fotos (mínimo 300)'],
    impresos: ['Fotobook 10×12" con 100 fotos, 30 páginas', 'Ampliaciones 16×20" y 11×14"'],
    video: [ronin, videoCompleto, entrevistas, videomemoria],
  },
  {
    id: 'premium', nombre: 'Premium', horas: 10, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: ['casual'], precio: 20000,
    nota: 'Su página de inicio anuncia el Premium en $20,000 "con tomas con drone"; la lista del paquete no menciona el drone. Confírmalo al cotizar.',
    foto: ['Sesión previa casual gratis (3 horas, fotos ilimitadas)', 'Edición básica de todas las fotos', 'USB con todas las fotos (mínimo 300)'],
    impresos: ['Fotobook 10×12" con 200 fotos, 40 páginas', 'Ampliaciones 16×20" y 11×14"'],
    video: [ronin, videoCompleto, entrevistas, videomemoria, 'Entrega en USB con estuche premium'],
  },
  {
    id: 'top', nombre: 'Top', horas: 11, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: ['casual', 'trash'],
    foto: ['Sesión previa casual (3 horas, fotos ilimitadas)', 'Edición básica de todas las fotos', 'USB con todas las fotos (mínimo 300)'],
    impresos: ['Fotobook 16×20" con 200 fotos, 40 páginas', 'Ampliaciones 16×20" y 11×14"', 'Libro de firmas o foto de firmas'],
    video: [ronin, 'Videoclip de la sesión casual', 'Videoclip de la sesión trash the dress', videoCompleto, entrevistas, videomemoria],
  },
  {
    id: 'vip', nombre: 'VIP', horas: 11, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: ['casual', 'posterior', 'drone'],
    foto: ['Sesión previa casual y sesión posterior (3 horas, fotos ilimitadas)', 'Edición básica de todas las fotos', 'USB con todas las fotos (mínimo 300)'],
    impresos: ['Fotobook 16×20" con 200 fotos, 40 páginas', 'Ampliaciones 16×20" y 11×14"', 'Libro de firmas o foto de firmas'],
    video: [ronin, 'Tomas con drone', 'Videoclips de la sesión casual y de la sesión posterior', videoCompleto, entrevistas, videomemoria],
  },
];

const xvFoto = ['Sesión previa casual (3 horas, fotos ilimitadas)', 'Dos outfits casuales y el vestido de XV años', 'Edición básica de todas las fotos', 'USB con todas las fotos (mínimo 300)'];
const xvVideo = [ronin, videoCompleto, 'Entrevistas a 10 amigos y familiares felicitando a la quinceañera', videomemoria];

export const paquetesXV: Paquete[] = [
  {
    id: 'premium', nombre: 'Premium', horas: 10, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: ['casual'],
    foto: xvFoto,
    impresos: ['Fotobook 10×12" con 200 fotos, 40 páginas', 'Ampliaciones 16×20" y 11×14"', 'Banner impreso de 180×80 cm'],
    video: xvVideo,
  },
  {
    id: 'top', nombre: 'Top', horas: 11, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: ['casual', 'posterior'],
    foto: ['Sesión previa casual y sesión pos-XV (3 horas, fotos ilimitadas)', ...xvFoto.slice(1)],
    impresos: ['Fotobook 16×20" con 200 fotos, 40 páginas', 'Ampliaciones 16×20" y 11×14"', 'Banner impreso de 180×80 cm', 'Libro de firmas o foto de firmas'],
    video: [ronin, 'Videoclips de la sesión casual y de la pos-XV', ...xvVideo.slice(1)],
  },
  {
    id: 'vip', nombre: 'VIP', horas: 11, momentos: ['maquillaje', 'ceremonia', 'salon'], extras: ['casual', 'posterior', 'drone'],
    foto: ['Sesión previa casual y sesión pos-XV (3 horas, fotos ilimitadas)', ...xvFoto.slice(1)],
    impresos: ['Fotobook 16×20" con 200 fotos, 40 páginas', 'Ampliaciones 16×20" y 11×14"', 'Banner impreso de 180×80 cm', 'Libro de firmas o foto de firmas'],
    video: [ronin, 'Tomas con drone', 'Videoclips de la sesión casual y de la pos-XV', ...xvVideo.slice(1)],
  },
];

export const horaExtra = 1000;
export const maxHoras = 11;

export const momentos: Record<Momento, { nombre: string; texto: string; foto: Foto }> = {
  maquillaje: { nombre: 'Maquillaje', texto: 'El arreglo, el vestido y los nervios.', foto: fotos.espejo },
  ceremonia: { nombre: 'Ceremonia', texto: 'La entrada, los votos y la salida.', foto: fotos.petalos },
  salon: { nombre: 'Salón', texto: 'El vals, el pastel y la fiesta.', foto: fotos.confeti },
};

export const extras: Record<Extra, { nombre: string; foto: Foto }> = {
  casual: { nombre: 'Sesión casual previa', foto: fotos.flores },
  trash: { nombre: 'Sesión trash the dress', foto: fotos.veloBosque },
  posterior: { nombre: 'Sesión posterior', foto: fotos.espalda },
  drone: { nombre: 'Tomas con drone', foto: fotos.volcan },
};

// ---- Galería ----
export const galeria: { titulo: string; fotos: Foto[] }[] = [
  { titulo: 'Bodas', fotos: [fotos.puerta, fotos.besoVelo, fotos.vals, fotos.zapato, fotos.pastel, fotos.auto] },
  { titulo: 'XV años', fotos: [fotos.xvBosque, fotos.xvViolin, fotos.xvCascada, fotos.xvRisco] },
  { titulo: 'Sesiones', fotos: [fotos.piramide, fotos.papelPicado, fotos.love, fotos.peinado] },
];

// ---- Opiniones (widget de bodas.com.mx en su página de inicio) ----
export const calificacion = { promedio: '4.8', total: 37, fuente: 'bodas.com.mx' };
export const opiniones = [
  { nombre: 'Eleazar L.', fecha: 'Se casó el 14/10/2023', nota: '5.0', titulo: 'Boda increíble', texto: 'Calidad del entregable, seguimiento oportuno del evento, seriedad y responsabilidad.' },
  { nombre: 'María F.', fecha: 'Se casó el 29/04/2023', nota: '4.6', titulo: 'Amor sin fronteras', texto: 'Me encantó el resultado, captó los mejores momentos, todo muy romántico y de película justo como lo habíamos soñado. Además del profesionalismo y flexibilidad de Saúl, muy empático.' },
  { nombre: 'Giovanna P.', fecha: 'Se casó el 26/11/2022', nota: '5.0', titulo: 'Boda Giovanna y Jonathan', texto: 'Desde que pides información con Saúl acerca de sus servicios, su pronta respuesta, disposición y flexibilidad te hace sentir en confianza.' },
];

// ---- Preguntas frecuentes (página FAQS) ----
export const preguntas = [
  { p: '¿Con cuánta anticipación hay que contactarlos?', r: 'Mínimo un mes antes del evento.' },
  { p: '¿Cubren más de un evento al día?', r: 'No. Para darle más calidad a cada cliente cubren un solo evento por día.' },
  { p: '¿En qué estados trabajan?', r: 'En toda la República Mexicana. Si el evento es fuera del área metropolitana de la Ciudad de México, se cotizan viáticos.' },
  { p: '¿Qué estilo de fotografía hacen?', r: 'Tradicional, documental, artística, fotoperiodismo y fotografía de autor.' },
  { p: '¿Con qué equipo trabajan?', r: 'Estabilizador cinematográfico Ronin-S de DJI, cámara DSLR para video, cámaras full frame para fotografía y drone DJI Mavic para tomas aéreas.' },
  { p: '¿Cuánto tardan en entregar?', r: 'Aproximadamente un mes.' },
  { p: '¿Entregan todas las fotos originales?', r: 'Sí. Además cuentan con un equipo de profesionales y con sustituto en caso de imprevisto.' },
  { p: '¿Cobran por hora o por evento?', r: 'Los paquetes tienen un tiempo definido; si hace falta, se contratan horas extra a $1,000 cada una.' },
];

export const formasPago = [
  '50% de anticipo, 25% el día del evento y 25% a la entrega del material.',
  '30% de anticipo, 50% el día del evento y 20% a la entrega del material.',
];

export const servicios = {
  foto: ['Bodas', 'XV años', 'Bautizos', 'Conferencias', 'Sesión casual', 'Trash the dress', 'Fotobook e impresión'],
  video: ['Bodas y XV años con Ronin-S', 'Backstage', 'Bautizos', 'Conferencias', 'Video corporativo', 'Videoclips', 'Video minuto para invitación digital', 'Tomas aéreas con drone', 'Slide show'],
};

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
