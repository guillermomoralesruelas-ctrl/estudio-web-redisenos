// Contenido de DRECA Studio. Fuente: drecastudio.com (inicio, acerca de, galerías e invitaciones), leído el 2026-10-10.
// No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'DRECA Studio',
  fotografo: 'Frank',
  whatsapp: '5215616809392', // de sus enlaces wa.link
  whatsappTexto: '56 1680 9392',
  ciudad: 'Ciudad de México',
  // [PENDIENTE] No publica dirección del estudio; el mapa busca su nombre en la ciudad.
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('DRECA Studio Ciudad de México'),
  instagram: 'https://instagram.com/drecastudio',
  facebook: 'https://www.facebook.com/drecastudio',
  google: { calificacion: 4.9, resenas: 9 },
};

export const bio = [
  'Aunque la mayoría de la gente me dice Frank, soy ingeniero en animación digital egresado de la UVM y apasionado de la fotografía y la videografía, en constante capacitación.',
  'Tengo más de 5 años de experiencia en fotografía y video profesional. He trabajado para instituciones como Saint Luke School of Medicine y la UNAM, entre otros, y principalmente en eventos sociales.',
];

export const servicios = [
  { nombre: 'Bodas', texto: 'Paquetes completos para el día más importante de tu vida.' },
  { nombre: 'XV años', texto: 'Inmortaliza la belleza y juventud de tu princesa.' },
  { nombre: 'Sesiones', texto: 'Cumpleaños, perfil profesional, producto, familia, mascotas y más.' },
  { nombre: 'Empresas', texto: 'Conferencias, foros y eventos corporativos.' },
  { nombre: 'Gastronomía', texto: 'Platillos, bocadillos y mesas de evento.' },
];

export type Galeria = { id: string; nombre: string; fotos: { n: string; alt: string }[] };
export const galerias: Galeria[] = [
  {
    id: 'familia', nombre: 'Familia',
    fotos: [
      { n: 'norma-y-bruna-47', alt: 'Retrato en blanco y negro de una mamá con su bebé' },
      { n: 'sesion-62', alt: 'Familia recostada en el piso del estudio con su bebé' },
      { n: 'norma-y-bruna-46', alt: 'Mamá levantando a su bebé en blanco y negro' },
      { n: 'sesion-51', alt: 'Familia numerosa sentada en el piso de madera del estudio' },
      { n: 'norma-y-bruna-11', alt: 'Mamá besando a su bebé sobre fondo gris' },
      { n: 'sesion-34', alt: 'Abuelos con su nieto sobre fondo blanco' },
      { n: 'sesion-10', alt: 'Papá y mamá besando a su hijo, con color selectivo en rojo' },
      { n: 'norma-y-bruna-37', alt: 'Mamá levantando a su bebé sonriendo' },
      { n: 'sesion-47', alt: 'Bebé sentado en una silla de madera' },
    ],
  },
  {
    id: 'empresas', nombre: 'Empresas',
    fotos: [
      { n: 'confe-5', alt: 'Auditorio lleno frente al muro de Grupo Bolsa Mexicana de Valores' },
      { n: 'confe-3', alt: 'Ponente en el atril durante una conferencia' },
      { n: 'confe-6', alt: 'Panel de cuatro participantes en un foro' },
      { n: 'confe-8', alt: 'Entrega de reconocimiento en el escenario' },
      { n: 'confe-1', alt: 'Ponente con lentes hablando en el atril' },
      { n: 'confe-2', alt: 'Escenario con pantalla y presentación' },
      { n: 'confe-10', alt: 'Dos panelistas conversando en el escenario' },
      { n: 'confe-9', alt: 'Entrevista en sillones frente a la pantalla' },
    ],
  },
  {
    id: 'gastro', nombre: 'Gastronomía',
    fotos: [
      { n: 'gastro-12', alt: 'Waffle con cereza en primer plano' },
      { n: 'gastro-10', alt: 'Postre de yogur con cereza negra en un tazón' },
      { n: 'gastro-5', alt: 'Galletas saladas con jamón serrano y kiwi' },
      { n: 'gastro-1', alt: 'Vasitos de postre con fruta en una mesa de madera' },
      { n: 'gastro-14', alt: 'Bocadillo de pan con jamón serrano' },
      { n: 'gastro-9', alt: 'Trozos de chocolate con almendra' },
      { n: 'gastro-11', alt: 'Tostada con queso en un plato azul' },
      { n: 'gastro-8', alt: 'Waffle con chocolate sobre base dorada' },
    ],
  },
];

// Invitaciones digitales (página "Invitaciones"). Anticipo del 50% y el resto a la entrega.
export const invitaciones = [
  { id: 'basica', nombre: 'Básica', formato: 'Imagen JPG', precio: 250, botones: 0, largo: 1, nota: 'Tamaño pantalla de celular, fácil de enviar por WhatsApp.' },
  { id: 'pdf', nombre: 'PDF', formato: 'PDF', precio: 299, botones: 2, largo: 1, nota: 'Diseño personalizado con dos botones (botón extra $50).' },
  { id: 'mediana', nombre: 'Scroll mediano', formato: 'PDF', precio: 399, botones: 3, largo: 1.6, nota: 'Más detalles de tu evento y hasta 3 botones.' },
  { id: 'larga', nombre: 'Scrolldown largo', formato: 'PDF', precio: 499, botones: 5, largo: 2.4, nota: 'Invitación larga con un máximo de 5 botones.' },
];
export const notasInvitacion = [
  'Incluye nombres de los festejados, papás y padrinos (si aplica), fecha, lugar y hora (máximo 2 ubicaciones).',
  'Incluyen un pase para que lo puedan personalizar y enviar fácilmente.',
  'El tiempo de entrega depende del paquete. Anticipo del 50% y el resto a la entrega.',
  'Una vez aprobado el diseño, cada cambio tiene costo extra.',
];

export const resenas = [
  { autor: 'María Reyes', texto: 'El servicio es súper profesional, quedé muy contenta con los resultados, logró captar los mejores momentos de mi evento.' },
  { autor: 'Cesar Santiago Peña Martinez', texto: 'Francisco fue el encargado de capturar los mejores recuerdos del bautizo de mi hijo. Quedamos muy satisfechos con su trabajo y resultados.' },
  { autor: 'Claudia Vega', texto: 'Excelente servicio y trato a mi perrito, la sesión fue cero invasiva para la mascota.' },
  { autor: 'Pamela Davalos', texto: 'Excelente experiencia fotográfica. La calidad de las fotografías es muy alta.' },
];
