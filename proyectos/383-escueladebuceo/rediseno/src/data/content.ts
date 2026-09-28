// Contenido de Escuela de Buceo Proyecto Azul, tomado de su sitio (inicio, Nosotros, Tienda, Albercas, Cursos, las 20
// fichas de curso y Viajes), revisado con curl el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const negocio = {
  nombre: 'Escuela de Buceo Proyecto Azul',
  razonSocial: 'Escuela de BUCEO PROYECTO AZUL S.A. de C.V.',
  lema: 'Vivimos en la Tierra… Soñamos en el Mar…',
  desde: 1998,
  mision:
    'Una empresa mexicana profesional con la misión de acercar la experiencia del buceo a niños y adultos, a través del conocimiento del cuidado y conservación del ambiente, realizando una práctica deportiva segura.',
  agencias: 'PADI y SSI',
  direccion: 'Av. Revolución #172-B, Col. Escandón, Del. Miguel Hidalgo, Ciudad de México',
  calle: 'Av. Revolución 172-B, Col. Escandón',
  cp: '',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Escuela+de+Buceo+Proyecto+Azul+Avenida+Revoluci%C3%B3n+172-B+Escand%C3%B3n+CDMX',
  horario: [
    ['Lunes a viernes', '11:00 a 19:00'],
    ['Sábados y domingos', '11:00 a 17:00'],
  ] as const,
  telefonos: [
    { texto: '55 4167 4956', tel: '+525541674956' },
    { texto: '55 6306 1563', tel: '+525563061563' },
  ],
  whatsapp: { texto: '55 5478 4150', numero: '525554784150' },
  correo: 'info@buceoproyectoazul.com.mx',
  facebook: 'https://www.facebook.com/buceoproyectoazul/',
  instagram: 'https://www.instagram.com/buceoproyectoazuloficial/',
  sitio: 'https://www.buceoproyectoazul.com.mx/',
  tienda: 'https://www.buceoproyectoazul.com.mx/tienda-2/',
  dan: 'https://world.dan.org/partner/w17816',
  faq: 'https://www.buceoproyectoazul.com.mx/faqs/',
  causas: ['Raíz Verde', 'Sea Shepherd'],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(texto)}`;

export const albercas = [
  {
    nombre: 'Leandro Valle',
    zona: 'Zona Oriente',
    texto: 'La comunidad más grande de actividades acuáticas de la delegación Iztacalco.',
    snorkelDesde: 10,
    mapa: 'https://www.google.com/maps/search/?api=1&query=Deportivo+Leandro+Valle+Iztacalco+CDMX',
  },
  {
    nombre: 'Parque Lira',
    zona: 'Zona Poniente',
    texto: 'A media distancia entre Polanco y la Roma-Condesa.',
    snorkelDesde: 6,
    mapa: 'https://www.google.com/maps/search/?api=1&query=Deportivo+Parque+Lira+Miguel+Hidalgo+CDMX',
  },
];

// Niveles de quien visita (nuestro). Equivalencias como las escriben sus fichas: PADI, SSI, NAUI o CMAS.
export const niveles = [
  { id: 0, texto: 'Todavía no sé nadar' },
  { id: 1, texto: 'Sé nadar, aún no tengo certificación' },
  { id: 2, texto: 'Open Water (o 1 Estrella CMAS)' },
  { id: 3, texto: 'Advanced' },
  { id: 4, texto: 'Rescue (o 2 Estrellas CMAS)' },
  { id: 5, texto: 'Dive Master' },
] as const;

export type Ramal = 'principal' | 'prueba' | 'sinbuzo' | 'owd' | 'avanzado';

export type Curso = {
  id: string;
  nombre: string;
  ramal: Ramal;
  aventura: string; // su frase "La aventura…" de cada ficha
  objetivo: string;
  consiste: string[];
  requisitos: string[];
  edad: number;
  nivel: number; // nivel mínimo (niveles de arriba)
  otorga?: number; // en la línea principal: el nivel que te deja
  hasta?: number; // para quien aún no es buzo: nivel máximo en el que tiene sentido
  bitacora?: number; // buceos bitacoreados que piden
  nota?: string;
  url: string;
};

const u = (ruta: string) => `https://www.buceoproyectoazul.com.mx/cursos/${ruta}/`;

// Los 20 cursos de su menú, con lo que dice cada ficha.
export const cursos: Curso[] = [
  {
    id: 'snorkel', nombre: 'Nado y Snorkeling', ramal: 'principal', otorga: 1, edad: 6, nivel: 0,
    aventura: '¿Listo para hacer tus primeras burbujas?',
    objetivo: 'Perfeccionar o aprender a nadar, a flotar y a sumergirte con y sin el equipo de snorkeling (visor, aletas, snorkel y lastre), además de hacer ejercicio saludable.',
    consiste: ['2 horas de clase a la semana en una de sus 2 albercas en la CDMX', 'Un manual digital', 'Si quieres la certificación «Snorkel Diver SSI», un viaje de evaluación en el río Las Estacas, Mor.'],
    requisitos: ['6 años cumplidos en el Deportivo Parque Lira', '10 años cumplidos en el Deportivo Leandro Valle', 'No es necesario saber nadar: ellos te enseñan'],
    nota: 'Desde 6 años en Parque Lira y desde 10 en Leandro Valle.',
    url: u('skin-diver'),
  },
  {
    id: 'try', nombre: 'TRY SCUBA', ramal: 'prueba', edad: 10, nivel: 0, hasta: 1,
    aventura: 'La aventura comienza',
    objetivo: 'Si nunca has buceado, un programa para probar por primera vez la experiencia en una alberca y ver lo fácil y divertido que es.',
    consiste: ['Una representación de una inmersión real en alberca, a baja profundidad', 'Practicar habilidades que se estudian en los cursos', 'Fotos de la experiencia si las pides'],
    requisitos: ['Mínimo 10 años cumplidos', 'Reservar al menos dos días antes'],
    url: u('buceo-de-prueba-o-practica-en-alberca'),
  },
  {
    id: 'sincert', nombre: 'Buceo sin Certificación', ramal: 'prueba', edad: 10, nivel: 1, hasta: 1,
    aventura: 'Prueba la experiencia de bucear en el mar',
    objetivo: 'Aprender lo esencial para bucear en aguas abiertas de forma segura y divertida, en uno de sus viajes, con tu familia o amigos. La instrucción es parte del curso Open Water: si luego te certificas con ellos, se toma en cuenta el avance.',
    consiste: ['Una sesión de teoría', 'Una sesión de práctica en la alberca', 'Los buceos que quieras, a máximo 12 metros, en sus viajes al mar, a la laguna de La Media Luna o a Las Estacas'],
    requisitos: ['Al menos 10 años cumplidos', 'Saber nadar y flotar a nivel básico'],
    url: u('buceo-vacacional-sin-certificacion'),
  },
  {
    id: 'owd', nombre: 'Open Water Diver', ramal: 'principal', otorga: 2, edad: 10, nivel: 1,
    aventura: 'La aventura comienza con tu certificación',
    objetivo: 'Aprender las reglas básicas del buceo en aguas abiertas y el uso del equipo, y obtener una credencial que te reconoce como buzo a nivel mundial, válida de por vida.',
    consiste: ['3 clases presenciales con el instructor y examen (incluye manual PADI o SSI)', '4 buceos de práctica en alberca con todo el equipo', 'Evaluación, no incluida: 4 buceos en el mar, en uno de sus viajes'],
    requisitos: ['Al menos 10 años cumplidos', 'Estar cómodo en el agua, saber nadar y flotar al menos a nivel básico'],
    url: u('open-water'),
  },
  {
    id: 'adv', nombre: 'Advanced Diver', ramal: 'principal', otorga: 3, edad: 12, nivel: 2,
    aventura: '¿Listo para nuevas experiencias?',
    objetivo: 'Ahora que ya eres buzo, ampliar tu conocimiento de condiciones, ambientes y áreas de tu interés.',
    consiste: ['5 experiencias avanzadas: Profundo, Navegación y Flotabilidad, más dos a escoger (barco, nocturno, foto y video, búsqueda y recuperación, corrientes o barcos hundidos)', '3 clases teóricas con tu instructor', '2 buceos en alberca', 'Un viaje con ellos para hacer las 5 experiencias en el mar'],
    requisitos: ['Mínimo 12 años cumplidos', 'Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('advanced-open-water-diver-y-especialidades'),
  },
  {
    id: 'rescue', nombre: 'Rescue Diver', ramal: 'principal', otorga: 4, edad: 15, nivel: 3,
    aventura: 'La aventura sigue',
    objetivo: 'Prevenir y evaluar situaciones de riesgo en el buceo y capacitarte en RCP, primeros auxilios y administración de oxígeno.',
    consiste: ['3 sesiones de alberca', '4 sesiones teóricas con el instructor', '4 buceos de evaluación en uno de sus viajes'],
    requisitos: ['Al menos 15 años cumplidos', 'Mínimo Advanced Open Water Diver PADI, SSI, 1 Estrella CMAS o equivalente'],
    url: u('rescue-diver'),
  },
  {
    id: 'dm', nombre: 'Dive Master', ramal: 'principal', otorga: 5, edad: 18, nivel: 4, bitacora: 40,
    aventura: 'Carrera profesional de buceo, con título válido en todo el mundo',
    objetivo: 'Impartir clases y guiar buceos en el mar, en cualquier parte del mundo.',
    consiste: ['Título PADI y/o SSI', 'Sesiones teóricas', 'Inmersiones', 'Viajes de práctica y evaluación en el mar'],
    requisitos: ['Al menos 18 años cumplidos', 'Rescue Diver PADI, SSI, 2 Estrellas CMAS o equivalente', 'Mínimo 40 inmersiones bitacoreadas'],
    nota: 'Se inscribe con una asesoría en su tienda.',
    url: u('dive-master'),
  },
  {
    id: 'wreck', nombre: 'Wreck (Naufragios)', ramal: 'avanzado', edad: 15, nivel: 3, bitacora: 30,
    aventura: 'La aventura aumenta',
    objetivo: 'El uso de líneas de penetración, el equipo especial y su configuración y los procedimientos de seguridad para bucear dentro de un naufragio.',
    consiste: ['3 sesiones de teoría', '2 sesiones de alberca', '4 inmersiones en naufragios'],
    requisitos: ['Al menos 15 años cumplidos', 'Mínimo Advanced Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente', '30 o más buceos bitacoreados'],
    url: u('especialidades/wreck'),
  },
  {
    id: 'profundo', nombre: 'Profundo hasta 40 metros', ramal: 'avanzado', edad: 15, nivel: 3, bitacora: 30,
    aventura: 'La aventura crece',
    objetivo: 'Extender tus límites de buceo hasta 40 metros (130 pies) y conocer todas las implicaciones del buceo a mayor profundidad.',
    consiste: ['2 sesiones teóricas', '4 buceos profundos en aguas abiertas'],
    requisitos: ['Mínimo 15 años cumplidos', 'Mínimo Advanced Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente', '30 o más buceos bitacoreados'],
    url: u('especialidades/buceo-profundo-hasta-40-metros'),
  },
  {
    id: 'nocturno', nombre: 'Buceo Nocturno', ramal: 'owd', edad: 12, nivel: 2,
    aventura: 'La aventura se oscurece',
    objetivo: 'Bucear bajo las condiciones de la noche: equipo de iluminación, señales especiales, comportamiento animal nocturno y navegación.',
    consiste: ['2 sesiones teóricas', '2 buceos nocturnos en aguas abiertas'],
    requisitos: ['Mínimo 12 años cumplidos', 'Al menos Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/buceo-nocturno'),
  },
  {
    id: 'nitrox', nombre: 'NITROX', ramal: 'owd', edad: 12, nivel: 2,
    aventura: 'La aventura dura más',
    objetivo: 'Calcular las proporciones de nitrógeno y oxígeno de la mezcla para lograr mayores tiempos de fondo e intervalos de superficie más cortos.',
    consiste: ['2 sesiones teóricas', 'No requiere inmersiones'],
    requisitos: ['Mínimo 12 años cumplidos', 'Al menos Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/buceo-con-aire-enriquecido-nitrox'),
  },
  {
    id: 'orientacion', nombre: 'Orientación Submarina', ramal: 'owd', edad: 10, nivel: 2,
    aventura: 'La aventura va y regresa',
    objetivo: 'Usar la brújula y referencias naturales o artificiales para ubicarte y seguir rutas, dentro y fuera del agua.',
    consiste: ['2 sesiones de teoría', '1 sesión de alberca', '3 buceos en aguas abiertas'],
    requisitos: ['Al menos 10 años cumplidos', 'Mínimo Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/orientacion-y-navegacion-submarina'),
  },
  {
    id: 'foto', nombre: 'Foto-Video Submarino', ramal: 'owd', edad: 10, nivel: 2,
    aventura: 'La aventura se congela en el tiempo',
    objetivo: 'Adaptar las técnicas de foto y video a las condiciones del agua para tomar imágenes de nivel profesional.',
    consiste: ['3 clases teóricas', '2 sesiones en alberca', '2 buceos en aguas abiertas'],
    requisitos: ['Mínimo 10 años cumplidos', 'Para la certificación de fotógrafo subacuático: al menos Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/fotografia-digital-subacuatica'),
  },
  {
    id: 'flotabilidad', nombre: 'Flotabilidad', ramal: 'owd', edad: 10, nivel: 2,
    aventura: 'La aventura vuela',
    objetivo: 'Un control perfecto y natural de tus movimientos bajo el agua: más confianza, menos consumo de aire y acercarte al coral sin molestarlo.',
    consiste: ['2 clases teóricas', '2 sesiones de alberca', 'Evaluación, no incluida: 2 inmersiones en aguas abiertas'],
    requisitos: ['Al menos 10 años cumplidos', 'Mínimo Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/dominio-de-la-flotabilidad'),
  },
  {
    id: 'busqueda', nombre: 'Búsqueda y Recuperación', ramal: 'owd', edad: 12, nivel: 2,
    aventura: 'La aventura se busca',
    objetivo: 'Patrones de búsqueda para recuperar objetos y sacarlos a la superficie; base para arqueología submarina, criminalística y biología marina.',
    consiste: ['2 sesiones de teoría', '1 sesión de alberca', '2 inmersiones en aguas abiertas'],
    requisitos: ['Al menos 12 años cumplidos', 'Mínimo Open Water Diver SSI, PADI, NAUI, CMAS o equivalente'],
    url: u('especialidades/busqueda-y-recuperacion'),
  },
  {
    id: 'barco', nombre: 'Buceo desde Barco', ramal: 'owd', edad: 10, nivel: 2,
    aventura: 'La aventura navega',
    objetivo: 'Los tipos de embarcación y cómo moverte, equiparte, tirarte al agua y prepararte para bucear desde ellas.',
    consiste: ['2 clases teóricas', '2 inmersiones en mar'],
    requisitos: ['Mínimo 10 años cumplidos', 'Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/buceodesdebarco'),
  },
  {
    id: 'ciencia', nombre: 'Ciencia del Buceo', ramal: 'owd', edad: 15, nivel: 2,
    aventura: 'La aventura está en los detalles',
    objetivo: 'Física, fisiología, teoría de la descompresión, medio acuático y equipo: formación básica si quieres ser profesional del buceo.',
    consiste: ['4 sesiones teóricas', 'No requiere inmersiones'],
    requisitos: ['Mínimo 15 años cumplidos', 'Al menos Open Water Diver SSI, PADI, NAUI, 1 Estrella CMAS o equivalente'],
    url: u('especialidades/ciencia-del-buceo'),
  },
  {
    id: 'ecologia', nombre: 'Ecología Marina', ramal: 'sinbuzo', edad: 10, nivel: 0,
    aventura: 'La aventura con amigos es mejor',
    objetivo: 'Cómo los organismos interactúan entre sí y con el ambiente, el flujo de energía en las comunidades y el vínculo entre ecosistemas oceánicos.',
    consiste: ['2 sesiones de teoría', 'No requiere inmersiones'],
    requisitos: ['Al menos 10 años cumplidos', 'No necesitas ser buzo para certificarte'],
    url: u('especialidades/ecologia-marina'),
  },
  {
    id: 'coral', nombre: 'Identificación de Coral', ramal: 'sinbuzo', edad: 10, nivel: 0,
    aventura: 'Los monumentos vivos',
    objetivo: 'Reconocer familias comunes de coral, la estructura de los arrecifes y sus métodos reproductivos.',
    consiste: ['Sesiones teóricas', 'No requiere inmersiones'],
    requisitos: ['Mínimo 10 años cumplidos', 'No necesitas ser buzo certificado'],
    url: u('especialidades/identificacion-de-coral'),
  },
  {
    id: 'tiburones', nombre: 'Ecología de Tiburones', ramal: 'sinbuzo', edad: 10, nivel: 0,
    aventura: 'La aventura sonríe',
    objetivo: 'Por qué los tiburones son malentendidos, cómo observarlos con seguridad e identificar familias comunes, y su papel en el océano.',
    consiste: ['Sesiones teóricas', 'No requiere inmersiones'],
    requisitos: ['Mínimo 10 años cumplidos', 'No necesitas ser buzo certificado'],
    url: u('especialidades/ecologia-de-tiburones'),
  },
];

// Nombres de los ramales (nuestro) y la estación de la línea principal de la que salen.
export const ramales: Record<Exclude<Ramal, 'principal'>, { nombre: string; desde: string; texto: string }> = {
  prueba: { nombre: 'Para probar', desde: 'snorkel', texto: 'sin certificarte todavía' },
  sinbuzo: { nombre: 'Sin ser buzo', desde: 'snorkel', texto: 'especialidades de teoría' },
  owd: { nombre: 'Especialidades', desde: 'owd', texto: 'con Open Water' },
  avanzado: { nombre: 'Especialidades', desde: 'adv', texto: 'con Advanced y 30 buceos' },
};

const t = (ruta: string) => `https://www.buceoproyectoazul.com.mx/tour/${ruta}/`;

// Su calendario de viajes (página Viajes), en su orden. El sitio no dice el año.
export const viajes = [
  { fechas: '30 ene a 1 feb', mes: 'Ene', lugar: 'Zihuatanejo, Gro.', titulo: 'Buceos y búsqueda de ballenas', url: t('zihuatanejo-ene') },
  { fechas: '18 a 22 feb', mes: 'Feb', lugar: 'Riviera Maya, Q. Roo', titulo: 'Al encuentro de tiburones toro y cenotes', url: t('rivera-maya-feb') },
  { fechas: '20 a 22 mar', mes: 'Mar', lugar: 'La Media Luna, SLP', titulo: 'Sumérgete en las cristalinas aguas de una laguna', url: t('media-luna-mar') },
  { fechas: '15 a 19 abr', mes: 'Abr', lugar: 'Banco Chinchorro, Mahahual, Q. Roo', titulo: 'Corales y amigables tiburones nodriza', url: t('mahahual-abr') },
  { fechas: '15 a 17 may', mes: 'May', lugar: 'Puerto de Veracruz', titulo: 'Arrecifes y barcos hundidos', url: t('puerto-de-veracruz-may') },
  { fechas: '19 a 21 jun', mes: 'Jun', lugar: 'Isla de Lobos, Ver.', titulo: 'Arrecifes de colores y la Plataforma Tiburón', url: t('isla-lobos-jun') },
  { fechas: '17 a 19 jul', mes: 'Jul', lugar: 'Puerto de Veracruz', titulo: 'De vuelta a los arrecifes y barcos hundidos', url: t('puerto-de-veracruz-jul') },
  { fechas: '12 a 16 ago', mes: 'Ago', lugar: 'Riviera Maya y Cozumel, Q. Roo', titulo: 'Cenotes y buceo en corrientes', url: t('rivera-maya-ago') },
  { fechas: '18 a 20 sep', mes: 'Sep', lugar: 'La Media Luna, SLP', titulo: 'Buceo en altitud', url: t('media-luna-sep') },
  { fechas: '7 a 11 oct', mes: 'Oct', lugar: 'Cabo Pulmo, BCS', titulo: 'Tornados de jureles y tiburones toro del «Acuario del Mundo»', url: t('cabo-pulmo-oct') },
  { fechas: '5 a 8 nov', mes: 'Nov', lugar: 'Isla Isabel, Nay.', titulo: 'Arrecifes, aves y un paraíso perdido en el Pacífico', url: t('isla-isabel-nov') },
  { fechas: '20 a 22 nov', mes: 'Nov', lugar: 'Zihuatanejo, Gro.', titulo: 'Tortugas, rayas y caballitos de mar', url: t('zihuatanejo-nov') },
  { fechas: '2 a 6 dic', mes: 'Dic', lugar: 'La Paz, BCS', titulo: 'Lobos marinos y tiburón ballena', url: t('la-paz-dic') },
  { fechas: '18 a 20 dic', mes: 'Dic', lugar: 'Zihuatanejo, Gro.', titulo: 'Buceos de fin de año con la llegada de las ballenas', url: t('zihuatanejo-dic') },
];

export const vip = {
  titulo: 'VIP TRIP: tu viaje personalizado y a tu medida',
  texto: 'Los buceos que quieras, en todo México, todo el año.',
  url: t('vip-trip'),
};
