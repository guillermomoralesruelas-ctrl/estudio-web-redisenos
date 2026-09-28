// Contenido de la Academia de baile ARIA, tomado de su sitio: portada, precios, horarios y preguntas del clon
// (investigacion/crudo.json) y las páginas de precios, preguntas frecuentes, clases, coreografía para boda y nosotros
// leídas con curl el 2026-09-28 (copia en entregables/textos-sitio-en-vivo-2026-09-28.txt).
// Regla: nada inventado. Lo que falta o no cuadra está anotado en CAMBIOS.md.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Academia de baile ARIA',
  whatsapp: '525634684421',
  telefono: '56 3468 4421',
  telefonoHref: 'tel:+525634684421',
  direccion: 'Av. Baja California 275, piso 5, Hipódromo Condesa, Cuauhtémoc, 06100, Ciudad de México',
  llegar: 'A unas calles del Metro y Metrobús Chilpancingo. La entrada está a un costado del Maxicopias, entre Av. Nuevo León y Culiacán.',
  aviso: 'De lunes a viernes después de las 7 pm y los sábados después de las 3 pm la puerta del edificio está cerrada: escríbeles por WhatsApp para que te abran.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Academia+de+baile+ARIA+Av.+Baja+California+275+Hip%C3%B3dromo+Condesa',
  // El mapa de Google que su sitio ya tiene embebido en la portada.
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.0167282954609!2d-99.17154900527837!3d19.406743933719582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff742d5de6f9%3A0x90148ccb1aee806a!2sAcademia%20de%20baile%20ARIA!5e0!3m2!1ses-419!2smx!4v1722032757072!5m2!1ses-419!2smx',
  facebook: 'https://www.facebook.com/somosaria/',
  instagram: 'https://www.instagram.com/somosaria_/',
  tiktok: 'https://www.tiktok.com/@somosaria/',
  youtube: 'https://www.youtube.com/@somosaria',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
// Su propio mensaje del botón "Agenda tu primera clase".
export const waClaseGratis = wa('Quiero tomar mi primera clase gratis');
export const waInformes = wa('Quiero informes sobre sus clases de baile');

export type Foto = { src: string; alt: string; ancho: number; alto: number };
export const fotos: Record<string, Foto> = {
  portada: { src: img('instructora-alumno.webp'), alt: 'Instructora de ARIA bailando con un alumno en el estudio', ancho: 1200, alto: 675 },
  practicando: { src: img('practicando.webp'), alt: 'Alumnos practicando pasos en pareja con los instructores', ancho: 1200, alto: 675 },
  salsaCubana: { src: img('salsa-cubana.webp'), alt: 'Pareja bailando salsa cubana en el salón de ARIA', ancho: 1200, alto: 581 },
  enClase: { src: img('alumnos-en-clase.webp'), alt: 'Alumnos en fila siguiendo al instructor frente al espejo', ancho: 1200, alto: 800 },
  bailando: { src: img('estudiantes-bailando.webp'), alt: 'Estudiantes bailando en pareja en la academia', ancho: 1024, alto: 576 },
  instructores: { src: img('instructores-alumnos.webp'), alt: 'Instructores de ARIA con alumnos en clase', ancho: 1200, alto: 420 },
  aprendiendo: { src: img('aprendiendo.webp'), alt: 'Personas aprendiendo a bailar con los instructores', ancho: 592, alto: 334 },
  bachata: { src: img('bachata.webp'), alt: 'Pareja bailando bachata junto a la ventana con el letrero de ARIA', ancho: 600, alto: 339 },
  cumbia: { src: img('cumbia.webp'), alt: 'Alumnos bailando cumbia en pareja', ancho: 600, alto: 338 },
};

export const ritmos = [
  { nombre: 'Cumbia', foto: fotos.cumbia },
  { nombre: 'Salsa para fiestas', foto: fotos.bailando },
  { nombre: 'Salsa en línea (On1 y On2)', foto: fotos.practicando },
  { nombre: 'Bachata', foto: fotos.bachata },
  { nombre: 'Salsa cubana', foto: fotos.salsaCubana },
];
export const otrosRitmos = ['Cha cha chá', 'Merengue', 'Danzón', 'Rock and roll para fiestas'];

// ---- Horario (de /horarios-ubicacion/). Domingo cerrado. ----
export const horario = [
  { dias: 'Lunes a viernes', turnos: '11:00 a 14:00 y 15:00 a 21:00' },
  { dias: 'Sábado', turnos: '10:00 a 13:00 y 15:00 a 18:00' },
];

// ---- Paquetes (de /precios/): clases = horas; vigencia en días desde el inicio del paquete ----
export type Paquete = { clases: number; vigencia: number; individual: number; pareja: number; inscripcion: 'incluida' | 'aparte' | 'sin dato' };
export const paquetes: Paquete[] = [
  { clases: 8, vigencia: 16, individual: 899, pareja: 1259, inscripcion: 'aparte' },
  { clases: 12, vigencia: 20, individual: 1369, pareja: 1789, inscripcion: 'aparte' },
  { clases: 18, vigencia: 30, individual: 1789, pareja: 2189, inscripcion: 'incluida' },
  { clases: 24, vigencia: 38, individual: 2099, pareja: 2599, inscripcion: 'incluida' },
];
export const inscripcion = 250;
export const claseSuelta = { individual: 170, pareja: 240 };
export const boda = [
  { clases: 5, precio: 3299 },
  { clases: 8, precio: 4699 },
  { clases: 10, precio: 5299 },
];
// Promoción publicada: 15% en paquetes tradicionales con el cupón VIVAMEXICO15, del 1 al 30 de septiembre de 2026.
export const promo = { texto: 'En septiembre tienen 15% de descuento en paquetes con el cupón VIVAMEXICO15 o mencionándolo en sucursal.', hasta: '2026-09-30T23:59:59-06:00' };

// De /totalpass/, /wellhub/ y /empresas/ en vivo.
export const otrasFormas = [
  { titulo: 'Con TotalPass', texto: 'Con la membresía TP3+ tienes 10 visitas al mes, sin reservar.', mensaje: 'Hola ARIA, tengo TotalPass y quiero información para ir a clase.' },
  { titulo: 'Con Wellhub', texto: 'Con la membresía Gold+ tienes hasta 20 visitas al mes (hasta 4 por semana), sin reservar.', mensaje: 'Hola ARIA, tengo Wellhub y quiero información para ir a clase.' },
  { titulo: 'Para tu empresa', texto: 'Talleres y clases de baile corporativo en la CDMX para activar a tu equipo.', mensaje: 'Hola ARIA, quiero cotizar clases de baile para mi empresa.' },
];

export const cifras = [
  { n: '4.8', t: 'de calificación en Google' },
  { n: '+4 mil', t: 'alumnos han aprendido con ellos' },
  { n: '+13 mil', t: 'clases impartidas desde 2022' },
];

export const equipo = ['Abigail, directora', 'Iván, instructor', 'Evelyn, instructora', 'Mariana'];

export const resenas = [
  { nombre: 'Montse Sánchez', texto: 'Recién salgo de mi primer clase y en verdad me muero porque sea sábado y volver, ambos profesores van a tu ritmo y es relajado así que el estrés de pánico escénico no existe.' },
  { nombre: 'Gustavo Cruz', texto: 'Altamente recomendado para todo tipo de baile latino. Clases son semi-personalizadas, lo cual se ajustan a tu horario y no necesitas llevar pareja. Iván y Abi son muy buena onda y divertidos.' },
  { nombre: 'Laura Rodríguez', texto: 'Excelentes Aby e Iván, súper pacientes, nos armaron una coreografía para nuestra boda, les quedó increíble, fueron muy flexibles con los horarios y muy atentos.' },
  { nombre: 'Luz Patricia Orendain', texto: 'Me hace muy feliz asistir a clase, los profesores son respetuosos, amables, profesionales. Y además de pasar un momento agradable.' },
];

export const preguntas = [
  { p: '¿Cuánto dura cada clase?', r: 'Una hora. La clase muestra, gratis, dura 40 minutos y no necesita cita.' },
  { p: '¿Hay horario para cada ritmo?', r: 'No. Llegas a cualquier hora dentro del horario y empiezan cuando llegas, con el ritmo que quieras.' },
  { p: '¿Necesito llevar pareja?', r: 'No. Trabajas con tu instructor y practicas con compañeros. Si vienes acompañado hay paquetes en pareja, sin importar el sexo.' },
  { p: '¿Qué son las clases semi-personalizadas?', r: 'Cada alumno aprende sus propios pasos con el instructor, al lado de compañeros que aprenden otros; tres instructores se alternan. No hay clases grupales.' },
  { p: '¿Cuántas clases puedo tomar al día?', r: 'Las que quieras, desde media hora (media clase). Ellos llevan el conteo de tu paquete.' },
  { p: '¿Cómo funciona la vigencia?', r: 'Es el total de días que tienes para usar tus clases desde que inicias el paquete.' },
  { p: '¿Puedo aprender más de un ritmo con un paquete?', r: 'Sí. Recomiendan uno a la vez, pero puedes empezar con cumbia y cambiar a salsa.' },
  { p: '¿Hay edad mínima?', r: 'No. Los menores de edad vienen con su padre, madre o tutor; la mayoría de los alumnos tiene 17 años o más.' },
  { p: '¿Cómo puedo pagar?', r: 'Tarjeta de débito o crédito (Visa, Mastercard, American Express e internacionales), efectivo en sucursal, o transferencia o depósito.' },
];

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
