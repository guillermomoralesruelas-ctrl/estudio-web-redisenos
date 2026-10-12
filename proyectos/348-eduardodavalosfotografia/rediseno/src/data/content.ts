// Contenido de Eduardo Dávalos Fotografía, tomado de eduardodavalosfotografia.com el 2026-10-12 (inicio, Nuestro Trabajo,
// Video de Boda, Colecciones 2026 y 2027, Preguntas Frecuentes, Historias y contacto). Nada inventado.

export const negocio = {
  nombre: 'Eduardo Dávalos',
  oficio: 'Fotógrafo de bodas en Guadalajara',
  whatsapp: '523313544439',
  whatsappVer: '33 1354 4439',
  instagram: 'https://www.instagram.com/eduardodavalosfoto/',
  instagramVer: '@eduardodavalosfoto',
  facebook: 'https://www.facebook.com/eduardodavalosfotografo',
};

export const lema = 'Una mirada honesta sobre uno de los días más importantes de tu vida.';

export const manifiesto = ['Hoy todos tomamos fotos.', 'Pero no todas se convierten en recuerdos.', 'Una boda no se trata de cantidad.', 'Se trata de significado.'];
export const loReal = ['una mirada', 'un abrazo', 'una risa sin aviso'];

export type Coleccion = {
  id: string; nombre: string; horas: number; equipo: string; cubre: string; fotos: string; extras: string[];
  precio: Record<'2026' | '2027', number>;
  soloFoto?: Record<'2026' | '2027', number>;       // Completa: el mismo paquete solo con fotografía
  masVideo?: Record<'2026' | '2027', number>;       // Esencial y Civil: añadir video (reel y highlight)
  nota?: string;
};

export const colecciones: Coleccion[] = [
  {
    id: 'total', nombre: 'Total', horas: 12, equipo: '2 fotógrafos, 2 videógrafos y asistente de iluminación',
    cubre: 'Arreglo de novia y novio, ceremonia(s), recepción y fiesta. Si su civil es otro día, vamos una hora (en la ZMG y sujeto a disponibilidad).',
    fotos: '1,000 a 1,500',
    extras: ['Save the Date en foto y video', 'Video por capítulos, highlight y reel, con drone', 'Foto secuencia de la boda en una canción', 'Álbum de 25 páginas de 8.5 × 12″', 'Estuche grabado y 50 impresiones de 6 × 8″'],
    precio: { '2026': 36900, '2027': 38900 },
  },
  {
    id: 'completa', nombre: 'Completa', horas: 10, equipo: '1 fotógrafo, 1 videógrafo y asistente de iluminación',
    cubre: 'Arreglo de novia y novio, ceremonia(s), recepción y fiesta: los momentos que ustedes prioricen durante la cobertura.',
    fotos: '800 a 1,000',
    extras: ['Save the Date en foto', 'Video por capítulos, highlight y reel, con drone', 'Foto secuencia de la boda en una canción', 'Álbum de 20 páginas de 8.5 × 12″'],
    precio: { '2026': 29900, '2027': 31900 }, soloFoto: { '2026': 20000, '2027': 22900 },
  },
  {
    id: 'esencial', nombre: 'Esencial', horas: 8, equipo: 'Eduardo Dávalos y asistente de iluminación',
    cubre: 'Los momentos prioritarios del día de la boda.',
    fotos: '600 a 900',
    extras: ['Foto secuencia de la boda en una canción'],
    precio: { '2026': 15900, '2027': 16900 }, masVideo: { '2026': 7000, '2027': 7500 },
  },
  {
    id: 'civil', nombre: 'Civil', horas: 4, equipo: 'Eduardo Dávalos',
    cubre: 'Se adapta a los momentos prioritarios: ceremonia civil, brindis, retratos con invitados.',
    fotos: '300 a 600',
    extras: ['Foto secuencia de la boda en una canción'],
    precio: { '2026': 7900, '2027': 9900 }, masVideo: { '2026': 6000, '2027': 6000 },
    nota: 'También funciona para cumpleaños y reuniones familiares.',
  },
];

export const preguntas = [
  { p: '¿Cuál es tu estilo de fotografía de bodas?', r: 'Trabajo con un enfoque documental: capturo la boda tal como se vive, sin forzar momentos. Busco una estética limpia y atemporal que siga teniendo valor con los años.' },
  { p: '¿Cuántas fotos entregas en una boda?', r: 'La cantidad depende de la cobertura, pero priorizo calidad sobre volumen. Entrego una selección cuidada para que realmente vuelvan a ver sus fotos con el tiempo.' },
  { p: '¿Incluyes sesión previa?', r: 'Sí. La sesión previa es parte importante del proceso: nos permite conocernos y lograr mayor naturalidad el día de la boda.' },
  { p: '¿Los paquetes se pueden modificar?', r: 'Sí, podemos ajustarlos. Los paquetes están diseñados como la opción más equilibrada: contratar cada servicio por separado suele resultar más costoso. El valor está en el talento de quienes los acompañan todas las horas de cobertura, no en los consumibles; si prefieren prescindir del álbum o las impresiones, el descuento es mínimo.' },
  { p: '¿Por qué incluir álbum e impresiones?', r: 'Porque lo digital tiende a perderse entre archivos. El material impreso permite que su historia tenga presencia real y se conserve con el tiempo.' },
  { p: '¿Trabajas con contrato?', r: 'Sí, todo se formaliza mediante contrato.' },
  { p: '¿Cubres bodas fuera de Guadalajara?', r: 'Sí, cubro bodas en otras ciudades. Dependiendo del lugar, se consideran viáticos.' },
];

export const testimonios = [
  { t: 'Nos hizo sentir cómodos frente a la cámara… todo fluyó natural.', a: 'Cecilia Mendoza' },
  { t: 'Capturó momentos reales sin invadir.', a: 'FL' },
  { t: 'Las fotos transmiten exactamente cómo vivimos ese día.', a: 'Cecilia Salas' },
  { t: 'Hicieron magia con los recuerdos de nuestra boda.', a: 'Andrea Garza' },
  { t: 'Es súper creativo y tiene un excelente ojo para lograr fotos increíbles.', a: 'Crista MR' },
  { t: 'Nuestra experiencia con Eduardo y su equipo fue increíble. Nuestras fotos nos fascinaron, además que es súper profesional. ¡No me canso de recomendarlo y presumirlo!', a: 'Paulina Flores' },
];

export const galeria: { n: string; alt: string }[] = [
  { n: 'boda-02', alt: 'Novios abrazados de noche bajo una lluvia de chispas' },
  { n: 'boda-04', alt: 'Novia sonriente toca la cara del novio, que ríe' },
  { n: 'boda-16', alt: 'Retrato de la novia de espaldas con vestido strapless' },
  { n: 'boda-06', alt: 'Novia y novio caminan frente a un portón de madera en arco' },
  { n: 'boda-08', alt: 'Los invitados cargan al novio en la fiesta bajo lámparas colgantes' },
  { n: 'boda-05', alt: 'En blanco y negro, los novios se miran tras un vidrio' },
  { n: 'boda-12', alt: 'Los novios se besan frente a dos puertas amarillas' },
  { n: 'boda-11', alt: 'Los novios juntan la frente a contraluz entre árboles' },
  { n: 'boda-14', alt: 'Los novios bajan una escalinata con líneas de luz' },
  { n: 'boda-18', alt: 'Una invitada toma una foto con cámara instantánea' },
  { n: 'boda-13', alt: 'El novio abraza a la novia, que sostiene su ramo' },
  { n: 'boda-09', alt: 'En blanco y negro, el zapato del novio en primer plano y la novia en la puerta' },
];
