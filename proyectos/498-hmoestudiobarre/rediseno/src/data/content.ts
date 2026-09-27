// Contenido de HMO Estudio BARRE 7, tomado del sitio original: investigacion/crudo.json (Inicio, Blog, Comunidad,
// Tienda) y el texto de /beneficios/ y /preguntas-frecuentes/ (tomado con curl el 2026-09-27). Nada inventado; lo
// redactado por nosotros (títulos, microcopy, textos de "Tu mes en la barra") está declarado en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'BARRE 7',
  estudio: 'HMO Estudio BARRE 7',
  // Su único número: el de todos sus botones de WhatsApp (phone=5216621502587). "Llamar" usa el mismo (pendiente).
  whatsapp: '526621502587',
  telefono: { visible: '662 150 2587', tel: '+526621502587' },
  direccion: 'Bv. Paseo de las Quintas, entre Navarrete y Soriana Encinas, Hermosillo, Sonora',
  // Su sitio no da número ni coordenadas: se busca el estudio sobre el bulevar (pendiente de confirmar el punto).
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('BARRE 7, Bv. Paseo de las Quintas, Hermosillo, Sonora'),
  facebook: 'https://www.facebook.com/BARRE-7-767301326952339/',
  instagram: 'https://www.instagram.com/barre.7/',
  enLinea: 'https://barre-7.com/pages/suscripciones',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waPrueba = wa('Hola, quiero agendar mi clase de prueba en el estudio de Hermosillo.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  sentadilla: f('clase-sentadilla', 900, 1200, 'Clase en el estudio: alumnas en sentadilla sosteniéndose de la barra, sobre tapetes de colores y piso de madera'),
  barra: f('clase-barra', 1200, 1008, 'Alumnas de pie frente a la barra y al espejo del estudio, con pelotas y ligas en la pared'),
  fila: f('clase-fila', 1084, 1044, 'Alumnas en fila frente a la barra, de espaldas, al inicio de la clase'),
  grupo: f('clase-grupo', 927, 908, 'Grupo de alumnas recargadas en la barra, con aros y mancuernas en el piso'),
  espalda: f('espalda-tapete', 1000, 1000, 'Alumna de espaldas sobre el tapete con las manos en la nuca'),
  cocoy: f('cocoy', 1024, 574, 'Cocoy Landavazo, instructora de BARRE 7, sonriendo con ropa deportiva'),
  fachada: f('fachada', 1600, 898, 'Fachada del estudio en Hermosillo: muro de ladrillo con el letrero redondo de BARRE 7 y un toldo blanco'),
};

// Paquetes, tal cual su inicio (todos con vigencia de 30 días). Su sitio los ordena 8, 12, 16, 20, 4 y 1.
export type Paquete = { clases: number; precio: number };
export const paquetes: Paquete[] = [
  { clases: 1, precio: 200 },
  { clases: 4, precio: 500 },
  { clases: 8, precio: 900 },
  { clases: 12, precio: 1100 },
  { clases: 16, precio: 1200 },
  { clases: 20, precio: 1300 },
];
export const VIGENCIA = 30;

// Qué pasa en una clase: frases de su entrada "Beneficios" (Cocoy Landavazo, 2021), recortadas a lo que describe la clase.
export const clase = [
  { t: 'Pilates, Ballet y Entrenamiento Funcional', d: 'Cuando me preguntan que es BARRE siempre contesto: es una fusión de PILATES, BALLET y ENTRENAMIENTO FUNCIONAL.' },
  { t: 'Un músculo a la vez', d: 'Hacemos ejercicios isométricos, movimientos repetitivos enfocados a un músculo en específico, lo cual te dará la sensación de que el ejercicio “quema” o “arda”.' },
  { t: 'Pesas de dos libras, si quieres', d: 'En clase se utilizan pesas de dos libras de manera opcional. El secreto es que trabajamos un músculo por tiempo prolongado.' },
  { t: 'No necesitas ser flexible', d: 'No se necesita ser flexible para practicar barre: cada clase trae muchos estiramientos.' },
  { t: 'Postura, instrucciones y buena música', d: 'Durante toda la clase te daremos instrucciones para mantener una postura correcta; entre las instrucciones y la buena música, no te deja pensar en otras cosas.' },
];

export const cocoy = {
  nombre: 'Cocoy Landavazo',
  cita: 'Lo que más me ha gustado de practicar BARRE son los resultados que he visto en mí, pero aún más los que he visto en mis alumnas: es sentirte cómoda contigo misma, verte feliz y fuerte. Me toca verlas llegar muchas veces cansadas, desveladas, con mucho trabajo, estrés, etc., y verlas terminar la clase felices y con energía es de lo mejor de ser instructora.',
};

// Testimonios de su inicio, recortados (sin las frases de salud).
export const testimonios = [
  { nombre: 'Guillermina M.', texto: 'Barre llegó a cambiar mi manera de ver el ejercicio. ¡A barre voy con entusiasmo! ¡Sin flojera! Se hace trabajo completo y de mucho esfuerzo. Sin querer y con muchas ganas he creado el hábito de ejercitarme, algo que pensé que nunca lograría. ¡Gracias Cocoy!' },
  { nombre: 'Viry C.', texto: 'Cuando estás haciendo barre 5 días a la semana o a veces más lo adoptas como un estilo de vida. Es algo que te motiva por las mañanas a levantarte y seguir; en realidad rara vez quieres que se acabe la clase. Muchísimas gracias al equipo de Barre7, que los veo ya como mi segundo hogar.' },
];
