// Contenido de Float Sano (San Miguel de Allende, Guanajuato), tomado del sitio original: investigacion/crudo.json
// (inicio, contacto, flotación, sauna infrarrojo y masaje) e investigacion/original.html (su mapa de Google).
// Regla: nada inventado. Sin promesas de salud: solo cómo funciona cada terapia y cómo se siente.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);

export const negocio = {
  nombre: 'Float Sano',
  direccion: 'Hernández Macías 12, Centro, San Miguel de Allende, Gto.',
  citas: '415-121-1314',
  citasHref: 'tel:+524151211314',
  whatsapp: '524151888488',
  whatsappTexto: '415-188-8488',
  correo: 'info@floatsano.com',
  horario: [['Lunes a sábado', '10:00 a 18:00'], ['Domingo', 'Solo con cita']] as const,
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.851232957581!2d-100.7451851!3d20.9183041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b51593929a37b%3A0xf349269b72429565!2sFloat%20Sano!5e0!3m2!1ses-419!2smx!4v1757702191814!5m2!1ses-419!2smx',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Float Sano, Hernández Macías 12, San Miguel de Allende'),
};

export const wa = (m: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;
export const waInfo = wa('Hola, quiero más información y hacer una reservación en Float Sano.');

export const flotacion = {
  precio45: '$1,000',
  como: [
    ['30 cm de agua con sales de Epsom', 'Una solución de agua altamente saturada con 500 kg de sales de Epsom, a la temperatura de tu piel, soporta completamente tu cuerpo sin ningún punto de presión.'],
    ['Un entorno con menos información sensorial', 'La tapa del flotario se puede bajar o cerrar por completo, minimizando la luz y el sonido del exterior, para entrar a un estado entre el dormir y el despertar.'],
  ] as const,
  duraciones: [
    { min: 45, texto: 'Recomendada para personas nuevas a la flotación.', precio: '$1,000 MXN' },
    { min: 75, texto: 'Ideal si ya conoces la flotación o la meditación y quieres prolongar el tiempo.', precio: 'Pregunta el precio' },
  ],
  saber: [
    ['No hay que traer nada', 'Ni siquiera traje de baño: cada flotario está en su propia suite privada. Hay toallas, chanclas, bata, champú, acondicionador, jabón, tapones para los oídos, solución para lentes de contacto y secadora de cabello.'],
    ['Dos cámaras de flotación', 'Amplias, cada una en su propia suite. Tú decides si flotas con la tapa abierta o cerrada, con luces interiores y con música.'],
    ['Cómo prepararte', 'Evita rasurarte unas horas antes y evita la cafeína y la comida pesada. Si usas tinte en el cabello, espera a que ya no quede color residual.'],
  ] as const,
};

export const otros = [
  { nombre: 'Sauna infrarrojo', precio: '$700 MXN', dur: '45 minutos', texto: 'Un calor más suave que el sauna tradicional: calienta a 60 °C en lugar de 85 °C. Suite privada con regadera, hasta 6 personas sentadas o 2 acostadas y 2 sentadas; no se comparte con desconocidos. No es apto para embarazadas.' },
  { nombre: 'Masaje esencial', precio: '$1,200 MXN', dur: '60 minutos (también de 90)', texto: 'Un masaje adaptado a tus necesidades, con presión personalizada, que alivia la tensión y relaja los músculos.' },
  { nombre: 'Piedras volcánicas', precio: '$1,500 MXN', dur: '75 minutos', texto: 'Masaje con piedras volcánicas calientes y movimientos lentos y suaves que liberan la tensión del cuerpo.' },
  { nombre: 'Tratamiento facial', precio: 'Pregunta el precio', dur: '50 minutos', texto: 'Exfoliación suave, mascarilla y masaje de cuello, cabeza, hombros y pies; termina con una ampolleta según tu piel.' },
  { nombre: 'Exfoliación corporal', precio: 'Pregunta el precio', dur: '1 hora', texto: 'Productos exfoliantes aplicados con un masaje ligero; recomendada antes de un masaje o del sauna.' },
];
export const extras = ['Para parejas', 'Fiestas privadas de spa', 'Paquetes y membresías mensuales', 'Reinicio de bienestar de 7 días', 'Paquete para el embarazo'];

export const filosofia = [
  ['Terapias probadas', 'Sauna, masaje y flotación han sido probados a través de la historia y de estudios científicos.'],
  ['Holístico', 'Terapias que funcionan de manera integral, además de hacerte sentir increíble.'],
  ['¿"Spa"?', 'Debatimos con llamar a Float Sano un spa, porque "spa" implica lujo. Procuramos ofrecer los mejores precios posibles para que el autocuidado pueda ser parte de tu rutina.'],
] as const;

export const historia =
  'Float Sano es un negocio familiar y proviene de una lucha personal con el estrés, la ansiedad y el insomnio. Descubrí la terapia de flotación por accidente y me sorprendió la facilidad con la que mi mente se calmó la primera vez en la cápsula. Abrimos Float Sano para ofrecer algo que me ha ayudado tanto, para que otras personas también puedan encontrar la relajación aquí.';

// Reseñas de Google que muestra su sitio (sin la de una clase de yoga).
export const resenas = [
  ['Altamente recomendado, una experiencia agradable: sauna, flotación y masaje increíble. Gracias por sus servicios.', 'Fernando Vázquez', 'marzo de 2024'],
  ['Por segunda vez tuve la oportunidad de estar en la cámara de flotación y es una buena experiencia donde me ayudó a relajarme y olvidarme del estrés. Enseguida entré al sauna. Recomendado este lugar y su amable personal.', 'Pablo Escobedo', 'noviembre de 2023'],
  ['Desde el momento que entré fui recibido con una cálida sonrisa. El punto culminante fue la experiencia en las camas de flotación: la sensación de flotar en un estado de ingravidez fue absolutamente increíble.', 'David Soto', 'octubre de 2023'],
] as const;
