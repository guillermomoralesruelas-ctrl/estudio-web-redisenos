// Contenido de Hangar TRC, tomado de investigacion/crudo.json (su única página) y de las respuestas de sus
// preguntas frecuentes, que su sitio guarda en su código (hangartrc.com/assets/index-*.js, 2026-10-09).
// Nada inventado. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Hangar TRC',
  ciudad: 'Torreón, Coahuila',
  direccion: 'Blvd. Francisco Sarabia 850, int. 13, Aviación',
  cp: '27050 Torreón, Coah.',
  telefono: '871 942 3133',
  telefonoHref: 'tel:+528719423133',
  email: 'info@hangartrc.com',
  maps: 'https://maps.app.goo.gl/89tDKbnVQAWq1Gao7',
  instagram: 'https://www.instagram.com/hangar.trc/',
  facebook: 'https://www.facebook.com/hangar.trc/',
  video: 'https://www.youtube.com/watch?v=JPIraRkQsT8',
};

// No publica WhatsApp: su botón "Quiero entrenar en Hangar TRC" llama por teléfono. Se suma un correo ya armado.
export const correo = (asunto: string, cuerpo: string) =>
  `mailto:${negocio.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

export const horario = [
  { dias: 'Lunes a viernes', horas: '5:00 AM – 10:00 PM' },
  { dias: 'Sábados', horas: '6:00 AM – 3:00 PM' },
];

export const diferencias = [
  { titulo: 'Todo en uno', texto: 'Pesas, Box y Crossfit en una sola membresía. No es solo gimnasio, es entrenamiento completo.' },
  { titulo: 'Sin inscripción', texto: 'A diferencia de otros gimnasios, aquí no pagas inscripción. Solo tu membresía.' },
  { titulo: 'Coaches incluidos', texto: 'Entrenadores disponibles sin costo adicional para guiarte en tu entrenamiento.' },
  { titulo: 'Área de cardio', texto: 'Caminadoras, elípticas y escaladoras en un área amplia y equipada.' },
  { titulo: 'Estancia infantil', texto: 'Espacio supervisado para tus hijos con juegos, libros y TV mientras entrenas.' },
  { titulo: 'Estacionamiento vigilado', texto: 'Estacionamiento con videovigilancia para que entrenes tranquilo.' },
  { titulo: 'Baños y duchas impecables', texto: 'Limpieza rigurosa todos los días. Baños con duchas siempre en excelentes condiciones.' },
  { titulo: 'Licuados y snacks', texto: 'Recarga energía después de entrenar con licuados y snacks disponibles en el gym.' },
  { titulo: 'Lockers', texto: 'Guarda tus pertenencias de forma segura mientras entrenas.' },
];

// Clases: horas en formato 24 h para poder filtrarlas. Box solo lunes a viernes.
export type Disciplina = 'box' | 'crossfit' | 'pesas';
export const clases: Record<'box' | 'crossfit', { nombre: string; lv: number[]; sab: number[] }> = {
  box: { nombre: 'Box', lv: [6.5, 7.5, 8.5, 17.5, 18.5, 19.5, 20.5], sab: [] },
  crossfit: { nombre: 'Crossfit / Hyrox', lv: [6, 7, 8, 9, 10, 18, 19, 20, 21], sab: [8, 9] },
};

// Planes de acceso completo (horario regular) y de horario restringido (lunes a viernes, 10:00 AM a 4:00 PM).
export type Plan = { id: string; nombre: string; meses: number; regular: number; restringido?: number };
export const planes: Plan[] = [
  { id: 'mes', nombre: 'Mensualidad', meses: 1, regular: 850, restringido: 600 },
  { id: 'tri', nombre: 'Trimestre', meses: 3, regular: 2300, restringido: 1700 },
  { id: 'sem', nombre: 'Semestre', meses: 6, regular: 4200, restringido: 3100 },
  { id: 'anu', nombre: 'Anualidad', meses: 12, regular: 7300, restringido: 5600 },
];
export const pases = [
  { nombre: 'Visita', precio: 100, detalle: 'Pase de un día.' },
  { nombre: 'Semana', precio: 350, detalle: '7 días de acceso.' },
  { nombre: 'Quincena', precio: 500, detalle: '15 días de acceso.' },
];
export const estancia = { horario: 'L-V: 8–2 PM y 4–9:30 PM · Sáb: 8 AM–3 PM', visita: 20, mensualidad: 200 };

export const fotos = [
  { n: 'entrada', alt: 'Entrada y área de máquinas' },
  { n: 'sky-limit', alt: 'Área de peso libre - Sky is the Limit' },
  { n: 'weights', alt: 'Área de pesas y máquinas' },
  { n: 'cardio', alt: 'Zona de cardio' },
  { n: 'logo-wall', alt: 'Mural Hangar y mancuernas' },
  { n: 'bancas', alt: 'Bancas y peso libre' },
  { n: 'peso-libre2', alt: 'Zona de peso libre y logo Hangar' },
  { n: 'maquinas-poleas', alt: 'Máquinas y poleas' },
  { n: 'maquinas-area', alt: 'Área de máquinas y mural' },
  { n: 'gym-panoramica', alt: 'Vista panorámica del gimnasio' },
  { n: 'barras-poleas', alt: 'Barras y poleas' },
  { n: 'racks', alt: 'Racks de sentadilla' },
  { n: 'racks2', alt: 'Zona de racks y peso libre' },
  { n: 'mancuernas-pasto', alt: 'Mancuernas y área funcional' },
  { n: 'area-funcional', alt: 'Área funcional' },
  { n: 'maquinas-pierna', alt: 'Máquinas de pierna' },
  { n: 'crossfit', alt: 'Área de CrossFit' },
  { n: 'crossfit2', alt: 'CrossFit y kettlebells' },
  { n: 'crossfit3', alt: 'Zona de trineos y CrossFit' },
  { n: 'area-hiit', alt: 'Área HIIT y assault bikes' },
  { n: 'entrada-exterior', alt: 'Vista exterior del gym' },
  { n: 'ring', alt: 'Ring de boxeo' },
  { n: 'ring2', alt: 'Área de boxeo y costales' },
  { n: 'costal', alt: 'Costales de boxeo' },
  { n: 'speed-bags', alt: 'Peras de velocidad' },
  { n: 'treadmills', alt: 'Caminadoras' },
  { n: 'bikes', alt: 'Bicicletas estacionarias' },
];

export const preguntas = [
  { p: '¿Necesito experiencia previa para entrenar aquí?', r: 'No. Todos los niveles son bienvenidos. Nuestros coaches se encargan de adaptar los ejercicios a tu condición física y te guían desde el primer día.' },
  { p: '¿Qué es el horario restringido?', r: 'Es una membresía con tarifa reducida que te permite acceder al gimnasio únicamente de lunes a viernes entre 10:00 AM y 4:00 PM. Es ideal si tienes flexibilidad de horarios y quieres entrenar a un menor costo.' },
  { p: '¿Tienen día de prueba?', r: 'No contamos con un día de prueba como tal, pero puedes pasar a conocer las instalaciones antes de contratar cualquier membresía. Si quieres entrenar, también puedes pagar una membresía por día.' },
  { p: '¿Qué incluye la membresía de acceso completo?', r: 'Acceso ilimitado al área de pesas, zona de crossfit/funcional, clases de box y todas las clases grupales dentro del horario regular (lunes a viernes 5:00 AM – 10:00 PM, sábados 6:00 AM – 3:00 PM).' },
  { p: '¿Tienen estancia infantil?', r: 'Sí. Cuidamos a tus hijos mientras entrenas. Están supervisados por un adulto responsable y tienen juegos, libros, colores y TV. Además, es un espacio donde hacen amigos en un entorno seguro y divertido.' },
  { p: '¿Cuáles son los métodos de pago?', r: 'Efectivo, transferencia bancaria y tarjeta de débito o crédito. Puedes pagar directamente en recepción o por transferencia antes de tu visita.' },
];
