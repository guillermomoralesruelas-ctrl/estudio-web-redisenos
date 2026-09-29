// Contenido de Harmonía Pilates. Todo sale de su sitio (investigacion/crudo.json y original.html); nada es inventado.
// Precios en pesos mexicanos.

// Su botón de WhatsApp manda a 5625700521 sin código de país; aquí se usa con el 52 de México (PENDIENTE confirmar que es su WhatsApp).
export const negocio = {
  nombre: 'Harmonía Pilates',
  subtitulo: 'Reformer Studio',
  direccion: 'Av. de los Ejidos 64, Los Reyes Ixtacala, 54090 Tlalnepantla, Edo. Méx.',
  telefono: '56 2570 0521',
  telefonoLink: 'tel:+525625700521',
  whatsapp: '525625700521',
  instagram: 'https://instagram.com/harmonia.pilates',
  facebook: 'https://facebook.com/estudio.harmonia.pilates',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Av.+de+los+Ejidos+64,+Los+Reyes+Ixtacala,+54090+Tlalnepantla,+M%C3%A9x.',
  // El mismo mapa que tiene su sitio (iframe de Google Maps, sin clave).
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.3240951350995!2d-99.19620932532395!3d19.527694637638135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d545f4d638d%3A0x1a35fca2f8b2b3ed!2sAv.%20de%20los%20Ejidos%2064%2C%20Hab%20Los%20Reyes%20Ixtacala%20Barrio%20de%20los%20%C3%81rboles%2FBarrio%20de%20los%20H%C3%A9roes%2C%2054090%20Tlalnepantla%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Su tabla "Horarios de Clases": horas con clase marcada (lunes a sábado).
export type Dia = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado';
export const horario: { dia: Dia; corto: string; horas: string[] }[] = [
  { dia: 'Lunes', corto: 'Lu', horas: ['6 pm', '7 pm'] },
  { dia: 'Martes', corto: 'Ma', horas: ['7 pm', '8 pm'] },
  { dia: 'Miércoles', corto: 'Mi', horas: ['6 pm', '7 pm'] },
  { dia: 'Jueves', corto: 'Ju', horas: ['7 pm', '8 pm'] },
  { dia: 'Viernes', corto: 'Vi', horas: ['7 am', '7 pm'] },
  { dia: 'Sábado', corto: 'Sa', horas: ['7 am', '8 am', '9 am'] },
];

export type Paquete = { id: string; nombre: string; clases: number; precio: number; antes?: number; vigencia: string; nota?: string; aparta?: boolean; popular?: boolean };
export const sueltas: Paquete[] = [
  { id: 'muestra', nombre: 'Clase muestra', clases: 1, precio: 100, antes: 200, vigencia: '7 días', nota: 'Solo alumnos de nuevo ingreso' },
  { id: 'suelta', nombre: 'Clase suelta', clases: 1, precio: 200, vigencia: '7 días' },
];
export const paquetes: Paquete[] = [
  { id: 'basico', nombre: 'Básico', clases: 2, precio: 320, antes: 400, vigencia: '15 días' },
  { id: 'esencial', nombre: 'Esencial', clases: 4, precio: 560, antes: 700, vigencia: '30 días' },
  { id: 'estandar', nombre: 'Estándar', clases: 8, precio: 800, antes: 1000, vigencia: '30 días', popular: true },
  { id: 'vip', nombre: 'VIP', clases: 12, precio: 1120, antes: 1400, vigencia: '30 días', aparta: true },
  { id: 'elite', nombre: 'Elite', clases: 16, precio: 1400, antes: 1750, vigencia: '30 días', aparta: true },
];

// Cuatro de sus seis beneficios (sin los que prometen resultados físicos o alivio de dolor).
export const beneficios = [
  { titulo: 'Potencia tu fuerza', texto: 'Desarrolla tu fuerza muscular utilizando resortes graduados que desafían tus límites de forma segura.' },
  { titulo: 'Fortalece tu core', texto: 'Activa la faja abdominal profunda para mejorar tu estabilidad, equilibrio y postura.' },
  { titulo: 'Incrementa flexibilidad', texto: 'Amplía tu rango de movimiento liberando rigidez acumulada por el ritmo de vida o el estrés.' },
  { titulo: 'Cero impacto, 100 % esfuerzo', texto: 'Entrenamiento de alta eficacia en cada repetición.' },
];

export const maestro = {
  nombre: 'Josué Miranda',
  puesto: 'Guía profesional',
  titulo: 'Enseñanza basada en años de estudio y experiencia en los mejores estudios de la CDMX',
  texto: 'En Harmonía Pilates cada clase está supervisada por nuestro maestro certificado, asegurando que ejecutes cada serie de ejercicios con la técnica exacta.',
  especialidades: ['Pilates Reformer', 'Entrenamiento para la mujer', 'Entrenamiento de fuerza'],
};

export const testimonios = [
  { nombre: 'Carla', texto: 'El ambiente es super limpio y ordenado. El maestro te corrige cada ejercicio. ¡Me encanta!' },
  { nombre: 'Andrea', texto: 'Amo que sea máximo de 8 personas, se siente súper privado y el profesor siempre está al pendiente de tu técnica.' },
  { nombre: 'Regina', texto: 'Los equipos están en excelente estado y puedo agendar cada clase según mis horarios.' },
];

export const preguntas = [
  { p: '¿Necesito experiencia previa en Pilates Reformer para tomar una clase?', r: 'No, ninguna. Nuestras clases son semipersonalizadas (máximo 8 alumnos) y se pueden hacer ajustes para tu nivel actual.' },
  { p: '¿Qué tipo de vestimenta debo llevar?', r: 'Recomendamos ropa deportiva cómoda y ajustada al cuerpo (como leggings) para permitir un movimiento libre y evitar enredarte con las cintas. Por motivos de higiene, hay que asistir con pies limpios y una toalla para la espalda.' },
  { p: '¿Cómo se realiza la reservación o cancelación de mis clases?', r: 'Puedes agendar tus clases en los horarios disponibles. En caso de no poder asistir, te solicitamos cancelar con al menos 24 horas de anticipación para que tu sesión se mantenga disponible en tu paquete y no sea tomada como impartida.' },
  { p: '¿Tienen vigencia los paquetes de clases?', r: 'Sí, cada paquete cuenta con un periodo de vigencia. El paquete de 2 clases tiene vigencia de 15 días y a partir del paquete de 4 clases tienen vigencia de 30 días. La vigencia se ajusta al día 1 o 15 del mes en curso.' },
  { p: '¿Si tengo alguna lesión previa o condición médica puedo practicar Pilates?', r: 'Es importante tener aprobación médica porque nuestras clases son de alta intensidad.' },
  { p: '¿Existe una edad mínima requerida para tomar clases?', r: 'No hay un mínimo de edad; el requisito principal es una estatura mínima de 1.45 m para garantizar que puedas mover el carro adecuadamente.' },
];
