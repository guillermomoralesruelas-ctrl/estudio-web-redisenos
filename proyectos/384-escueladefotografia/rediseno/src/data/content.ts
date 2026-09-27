// Textos y datos de Escuela de Fotografía (Susunaga Escuela de Fotografía & Arte).
// Fuente: investigacion/crudo.json (inicio, inscripciones, contacto, blog, material de diplomados) y, tomadas con curl el
// 2026-09-27, sus páginas /reglamento/, /aviso-de-privacidad/ y /pagos-en-linea/. No se inventa nada: lo deducido está
// marcado en CAMBIOS.md como pendiente.
import portafolioJson from './portafolio.json';
import medidasJson from './medidas.json';

const base = import.meta.env.BASE_URL;
const medidas = medidasJson as unknown as Record<string, [number, number]>;

export type Foto = { src: string; w: number; h: number; alt: string };
export const foto = (nombre: string, alt: string): Foto => {
  const [w, h] = medidas[nombre] ?? [1000, 667];
  return { src: `${base}${nombre}.webp`, w, h, alt };
};

export const negocio = {
  nombre: 'Escuela de Fotografía',
  marca: 'Susunaga Escuela de Fotografía & Arte',
  desde: 2008,
  web: 'https://www.escueladefotografia.com.mx/',
  tel800: '(800) 849 3278',
  tel800Link: '+528008493278',
  tel2: '(871) 228 7501',
  tel2Link: '+528712287501',
  whatsapp: '871 183 6568',
  waNumero: '528711836568',
  correo: 'info@escueladefotografia.mx',
  messenger: 'https://m.me/diplomadosfotografia',
  // Domicilio que publica en su aviso de privacidad (responsable: Luis Felipe Escamilla Susunaga).
  direccion: 'Calle Manuel Gómez Morín 260, col. Torreón Residencial',
  ciudad: 'Torreón, Coahuila, C.P. 27268',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Manuel+G%C3%B3mez+Mor%C3%ADn+260,+Torre%C3%B3n+Residencial,+27268+Torre%C3%B3n,+Coah.',
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/diplomadosfotografia' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/diplomadosfotografia/' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/@luis_susunaga' },
    { nombre: 'X', url: 'https://twitter.com/susunaga' },
  ],
  inscripciones: 'https://www.escueladefotografia.com.mx/inscripciones/',
  reglamento: 'https://www.escueladefotografia.com.mx/reglamento/',
  pagos: 'https://www.escueladefotografia.com.mx/pagos-en-linea/',
  alumnos: 'https://www.escueladefotografia.com.mx/membership-login/',
  material: 'https://www.escueladefotografia.com.mx/material-diplomados/',
};

export const wa = (texto: string) => `https://wa.me/${negocio.waNumero}?text=${encodeURIComponent(texto)}`;
export const waGeneral = wa('Hola, quiero informes de sus cursos de fotografía.');

export const cifras = [
  { valor: '1,167', texto: 'alumnos egresados y seguimos contando' },
  { valor: '98%', texto: 'de calificaciones positivas de nuestros alumnos' },
];

export type Curso = { nombre: string; modalidad: 'Presencial' | 'Online' };
export const presenciales: Curso[] = [
  { nombre: 'Diplomado en Fotografía para Principiantes', modalidad: 'Presencial' },
  { nombre: 'Curso de Fotografía para Principiantes', modalidad: 'Presencial' },
  { nombre: 'Curso Básico de Fotografía para Principiantes', modalidad: 'Presencial' },
];
export const online: Curso[] = [
  { nombre: 'Curso Conoce tu Cámara Fotográfica', modalidad: 'Online' },
  { nombre: 'Curso Principios Básicos del Enfoque', modalidad: 'Online' },
  { nombre: 'Curso Principios Básicos de Exposición', modalidad: 'Online' },
  { nombre: 'Curso Fotografía de Motivos en Movimiento', modalidad: 'Online' },
  { nombre: 'Curso Fotografía de Naturaleza y Paisaje', modalidad: 'Online' },
  { nombre: 'Curso Principios Básicos del Color', modalidad: 'Online' },
  { nombre: 'Curso Reglas de Composición Fotográfica', modalidad: 'Online' },
  { nombre: 'Curso Aspectos Básicos del Retrato', modalidad: 'Online' },
];
// Talleres que aparecen en su página "Material Diplomados" (material para inscritos).
export const talleres = [
  'Especialización en Fotografía de Bodas', 'Iluminación & Retrato', 'Video & Edición', 'Fotografía Nocturna',
  'Fotografía Boudoir', 'Fotografía de Joyería', 'Anuncios en Facebook',
];
export const cursosExtra = ['Video con Celular', 'Fotografía de Producto con Celular', '¿Cómo Cobrar mi Trabajo Fotográfico?'];

export const profesor = {
  nombre: 'Luis Susunaga',
  foto: foto('luis-susunaga', 'Luis Susunaga, fotógrafo y profesor de la escuela'),
  bio: 'Fotógrafo Profesional + 15 Años de Experiencia, Especialista en Fotografía de Bodas, Catedrático de Fotografía en el Tecnológico de Monterrey, Profesor de Fotografía en el Centro de Artes del Colegio Americano, Instructor Certificado ante la STPS (Secretaría del Trabajo y Previsión Social), Miembro de la PPA (Professional Photographers of America) y la SMFP (Sociedad Mexicana de Fotógrafos Profesionales).',
  web: 'https://www.susunaga.mx/',
};

// Reglamento interior vigente a partir del 1 de enero de 2026 (resumen de sus puntos; redacción nuestra).
export const reglamento = [
  { t: 'Mensualidad por adelantado', d: 'Se paga entre el día 14 y el 15 de cada mes que dure el curso, taller o diplomado. Después del 15 hay recargo de $50 por día de atraso.' },
  { t: 'Diploma', d: 'Se entrega con al menos 88% de asistencia (no más de tres faltas injustificadas) y con todos los trabajos, prácticas y tareas.' },
  { t: '15 minutos de tolerancia', d: 'Después puedes tomar la clase, pero cuenta como inasistencia. Si faltas, puedes ir a la siguiente clase disponible o pedir una clase privada de una hora ($150 para alumnos vigentes).' },
  { t: 'Cámara en préstamo', d: 'Si necesitas cámara durante la clase, trae una tarjeta SD para guardar tus fotos: no se prestan tarjetas de memoria.' },
  { t: 'Bajas', d: 'Se piden con treinta días de anticipación y con el saldo en ceros.' },
];

export const blog = [
  { t: 'El negocio de la fotografía de bodas', f: 'Jun 2023', url: 'https://www.escueladefotografia.com.mx/blog/consejos/el-negocio-de-la-fotografia-de-bodas/' },
  { t: 'Ajustes básicos en la edición digital de fotografía de retratos', f: 'Mar 2023', url: 'https://www.escueladefotografia.com.mx/blog/camaras/ajustes-basicos-en-la-edicion-digital-de-fotografia-de-retratos/' },
  { t: 'Primeros pasos para iniciarte en la fotografía documental', f: 'Mar 2023', url: 'https://www.escueladefotografia.com.mx/blog/guias-rapidas/primeros-pasos-para-iniciarte-en-la-fotografia-documental-guia-rapida/' },
  { t: '¿Cómo encontrar belleza en todas partes y en todo para fotografía?', f: 'Mar 2023', url: 'https://www.escueladefotografia.com.mx/blog/guias-rapidas/como-encontrar-belleza-en-todas-partes-y-en-todo-para-fotografia-guia-rapida/' },
  { t: 'Ideas para fotografías macro de insectos creativas', f: 'Mar 2023', url: 'https://www.escueladefotografia.com.mx/blog/consejos/ideas-para-fotografias-macro-de-insectos-creativas/' },
  { t: '¿Cómo acercarte a un extraño y pedirle tomarle un retrato?', f: 'Feb 2023', url: 'https://www.escueladefotografia.com.mx/blog/guias-rapidas/como-acercarte-a-un-extrano-y-pedirle-tomarle-un-retrato-guia-rapida/' },
];

// Portafolio de alumnos: cámara, lente y ajustes leídos del EXIF de cada archivo del clon (ver fotos-web.mjs).
const alts: Record<number, string> = {
  9: 'Tucán de pico amarillo', 88: 'Fuegos artificiales en la noche', 135: 'Bebé recién nacido dormido', 136: 'Joven acariciando a un caballo', 63: 'Mujer maquillada de catrina con flores rojas', 103: 'Pareja esperando un bebé',
  14: 'Mujer sonriente con sombrero rojo y blanco', 32: 'Mujer meditando en un jardín bajo el cielo azul', 49: 'Mujer recostada entre hojas secas', 144: 'Silueta de un hombre con sombrero en una puerta', 180: 'Mujer con maquillaje de leopardo', 23: 'Mujer posando junto a una escultura',
  16: 'Mujer a contraluz con el sol entre los árboles', 35: 'Mar con olas y montañas al fondo', 65: 'Hombre sentado en las dunas, en blanco y negro', 95: 'Joven bailando frente a un muro amarillo', 117: 'Cielo nublado sobre la silueta de un cerro', 125: 'Mujer con chaleco de mezclilla entre ramas de sauce',
  42: 'Niño con impermeable amarillo caminando', 43: 'Niña junto a un tren de paseo', 46: 'Niña con gorro tejido de búho', 54: 'Mujer bajo el letrero Canal de la Perla', 57: 'Mujer sentada frente a un portón de madera', 60: 'Bailarina arqueada frente a una ventana',
  105: 'Atardecer rojo sobre la sierra', 109: 'Águila en lo alto de una columna', 112: 'Paloma frente a un reloj', 113: 'Silueta de una mujer ante un vitral', 201: 'Niña sentada en un campo de hierba', 202: 'Retrato de una joven de mirada fija',
  147: 'Mujer con corona de flores en un parque', 153: 'Mujer con una cámara antigua, en blanco y negro', 154: 'Mujer reflejada en un espejo redondo', 156: 'Corrida de toros en una plaza llena', 165: 'Piernas con medias de red, en blanco y negro', 169: 'Zapatillas de ballet reflejadas en el piso',
  22: 'Ventana en un muro blanco contra el cielo azul', 25: 'Pasillo de barricas en una cava', 119: 'Bailarina haciendo split en unos escalones', 120: 'Joven con abrigo rojo sonriendo', 186: 'Catedral gótica entre edificios', 187: 'Arco de piedra de un puente colgante',
  83: 'Flor roja reflejada en el agua', 91: 'Casita de muñecas sobre una rosa', 97: 'Gotas de agua en un cable', 102: 'Retrato de una joven a contraluz', 111: 'Abeja sobre flores amarillas', 121: 'Mujer recargada en un muro de ladrillo',
  99: 'Fachada antigua con letrero, en blanco y negro', 100: 'Pájaro sobre una rama con nubes', 141: 'Mirada de una mujer, en blanco y negro', 142: 'Mujer con un aro en un bosque', 181: 'Mujer con maquillaje de leopardo sobre piedra',
  191: 'Mujer con estola de piel blanca', 203: 'Silueta de una mujer en una ventana', 204: 'Flores moradas de salvia', 206: 'Fuego artificial en la noche', 207: 'Mujer con un niño en brazos entre el follaje',
};

type FotoExif = { n: number; f: string; v: string; iso: number; mm: number | null; lente: string | null; anio: string; autor: string | null };
type CamaraJson = { id: string; marca: string; modelo: string; total: number; fotos: FotoExif[] };
export type Toma = FotoExif & { foto: Foto };
export type Camara = Omit<CamaraJson, 'fotos'> & { fotos: Toma[] };

export const camaras: Camara[] = (portafolioJson as CamaraJson[]).map((c) => ({
  ...c,
  fotos: c.fotos.map((f) => ({ ...f, foto: foto(`alumno-${f.n}`, alts[f.n] ?? 'Fotografía de un alumno') })),
}));
export const fotoDe = (n: number) => camaras.flatMap((c) => c.fotos).find((f) => f.n === n)!;
export const portafolio = { total: 206, conDatos: 174, modelos: 24 };
export const logo = foto('logo', 'Susunaga Escuela de Fotografía & Arte');
