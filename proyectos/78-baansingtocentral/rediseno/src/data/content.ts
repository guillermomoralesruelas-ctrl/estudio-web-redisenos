// Contenido de Baan Singto Central, tomado del sitio original (investigacion/crudo.json: Inicio, Biolink y Tienda;
// y el inicio en vivo, con su sección de preguntas) y de dos imágenes suyas que están en el clon:
// horario-clases-baansingto-central-la-perla-abril-2026.webp y rangos-de-precios-mensualidades-anualidades-BSC.webp.
// Nada inventado; lo redactado por nosotros está declarado en CAMBIOS.md. Rutas relativas a publicDir (../assets/web).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Baan Singto Central',
  whatsapp: '523338089373',
  telefono: '33 3808 9373',
  telLink: '+523338089373',
  direccion: 'Plaza La Perla, Av. Mariano Otero #3000, local E117B (segundo piso), La Perla, Zapopan, Jalisco',
  // Su propio enlace "Ver en Google Maps".
  mapa: 'https://maps.app.goo.gl/2piWtyPbsvTHKP8g8',
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.64298903347!2d-103.41276529999999!3d20.6434039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad61b5e5c22d%3A0x4c2415fea7c24edd!2sBaan%20Singto%20Central!5e0!3m2!1ses-419!2smx!4v1764807261314!5m2!1ses-419!2smx',
  instagram: 'https://www.instagram.com/baansingto_central/',
  facebook: 'https://www.facebook.com/baansingtogdl',
  tiktok: 'https://www.tiktok.com/@baansingtoacademia',
  youtube: 'https://www.youtube.com/@baansingto5403',
  blog: 'https://blog.baansingtocentral.com/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, requiero informes de las clases de Baan Singto Central.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  local: f('local-la-perla', 1400, 900, 'Entrada de vidrio de Baan Singto Central en Plaza La Perla, con el letrero iluminado'),
  letrero: f('academia-letrero', 800, 1200, 'Interior de la academia con el letrero Baan Singto sobre la pared negra y piso de madera'),
  tatami: f('clase-tatami', 1200, 800, 'Alumnos en el tatami de la academia durante una clase'),
  grupo: f('clase-grupo', 800, 1200, 'Clase de grupo en la academia con alumnos practicando'),
  patada: f('pelea-patada', 1200, 800, 'Dos peleadores de Muay Thai intercambian patadas en el ring'),
  guardia: f('pelea-guardia', 800, 1200, 'Peleador de Muay Thai con short rojo en guardia durante un combate'),
  ring: f('pelea-ring', 1200, 800, 'Combate de Muay Thai en ring con cuerdas azules'),
  kru: f('kru-carlos', 800, 1200, 'Kru Carlos con los brazos cruzados y un cinturón de campeonato, frente al letrero de Baan Singto'),
};

// Horario de clases de grupo, tal cual su imagen "Horarios Baan Singto Central" (abril de 2026).
export type Disciplina = 'muaythai' | 'box' | 'grappling' | 'jiujitsu' | 'combat' | 'fight' | 'kids' | 'defensa';
export const disciplinas: { id: Disciplina; nombre: string; clase: string; nota?: string }[] = [
  { id: 'muaythai', nombre: 'Muay Thai', clase: 'bg-rojo text-white' },
  { id: 'box', nombre: 'Box', clase: 'bg-white text-tinta ring-1 ring-inset ring-tinta/30' },
  { id: 'jiujitsu', nombre: 'Jiu Jitsu', clase: 'bg-petroleo text-white' },
  { id: 'grappling', nombre: 'Grappling', clase: 'bg-azul text-white' },
  { id: 'combat', nombre: 'Combat Conditioning', clase: 'bg-verde text-white' },
  { id: 'fight', nombre: 'Fight Team', clase: 'bg-tinta text-white ring-1 ring-inset ring-white/25', nota: 'Baansingto Fight Team' },
  { id: 'defensa', nombre: 'Defensa personal', clase: 'bg-morado text-white' },
  { id: 'kids', nombre: 'Muay Thai Kids', clase: 'bg-rojo-claro text-white', nota: 'Niños y niñas de 6 a 9 y de 10 a 12' },
];

export const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const;
export type Clase = { dia: number; hora: string; d: Disciplina; area?: 1 | 2 };
const L = 0, M = 1, X = 2, J = 3, V = 4, S = 5, D = 6;
const cada = (ds: number[], hora: string, d: Disciplina, area?: 1 | 2): Clase[] => ds.map((dia) => ({ dia, hora, d, area }));
const LV = [L, M, X, J, V];

export const horas = ['6:00 am', '7:00 am', '8:00 am', '11:00 am', '12:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];
export const clases: Clase[] = [
  ...cada([L, X, V], '6:00 am', 'box'), ...cada([M, J], '6:00 am', 'muaythai'),
  ...cada(LV, '7:00 am', 'muaythai'),
  ...cada(LV, '8:00 am', 'muaythai', 1), ...cada([L, X, V], '8:00 am', 'grappling', 2),
  ...cada([S, D], '11:00 am', 'muaythai'),
  ...cada([S], '12:00 pm', 'defensa'),
  ...cada([L, X, V], '5:00 pm', 'kids', 1), ...cada([L, M, X, J], '5:00 pm', 'combat', 2), ...cada([S], '5:00 pm', 'muaythai'),
  ...cada(LV, '6:00 pm', 'fight'),
  ...cada(LV, '7:00 pm', 'muaythai'),
  ...cada([L, X, V], '8:00 pm', 'muaythai', 1), ...cada([M, J], '8:00 pm', 'box', 1), ...cada(LV, '8:00 pm', 'jiujitsu', 2),
];

// Precios, tal cual su imagen "Precios / Mensualidad".
export const precios = {
  inscripcion: 1000,
  una: 1500,
  todas: 1800,
  ninos: 1100,
  visita: 300,
  anualPromo: 15990,
  anual: 18000,
};

export const artes = [
  { nombre: 'Muay Thai', sub: 'Boxeo tailandés, el arte de las 8 extremidades' },
  { nombre: 'Jiu-jitsu', sub: 'Brasileño' },
  { nombre: 'Judo', sub: 'Deportivo y combativo' },
  { nombre: 'Box', sub: 'Boxeo profesional' },
  { nombre: 'Defensa personal', sub: 'Familiar y personal' },
  { nombre: 'Seminarios', sub: 'Y clases particulares' },
];
