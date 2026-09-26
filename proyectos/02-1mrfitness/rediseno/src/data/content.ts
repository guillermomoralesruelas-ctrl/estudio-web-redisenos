// Contenido de 1MR Fitness, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Edita aquí textos, precios y datos de contacto.

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: '1MR Fitness',
  ciudad: 'Hermosillo, Sonora',
  zonaHoraria: 'America/Hermosillo',
  telefono: '662-220-7196',
  telefonoLink: 'tel:6622207196',
  whatsapp: '5216623670767',
  whatsappVisible: '662-367-0767',
  telefono2Link: 'tel:6623670767',
  email: 'contacto@1mrfitness.com',
  direccion: 'Blvd. Paseo Río Sonora Norte 437, Proyecto Río Sonora, Hermosillo, Sonora 83270',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('1MR Fitness, Blvd. Paseo Río Sonora Norte 437, Hermosillo, Sonora'),
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/1onemorerepetition' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/1onemorerep/' },
  ],
  logo: img('logo.png'),
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const nav = [
  { href: '#membresias', label: 'Membresías' },
  { href: '#clases', label: 'Clases' },
  { href: '#instalaciones', label: 'Instalaciones' },
  { href: '#contacto', label: 'Contacto' },
];

export const hero = {
  titulo: 'Gym 24 horas en Hermosillo',
  subtitulo: 'Entrenamiento total, salud sin horarios. Peso libre, máquinas, clases, In Body y plan de alimentación en un solo lugar.',
  imagen: img('hero-atleta.webp'),
  alt: 'Atleta entrenando con mancuerna',
};

export const incluye = {
  titulo: 'Somos más que un gimnasio',
  texto: 'Con cada mensualidad tienes acceso a evaluación corporal, asesoría y un espacio diseñado para que avances a tu ritmo.',
  items: [
    { titulo: 'Acceso 24/7', texto: 'Abierto todo el día, todos los días. Si trabajas de noche o prefieres entrenar temprano, las puertas están abiertas.' },
    { titulo: 'Sistema In Body', texto: 'Valoración corporal profesional de grasa y masa muscular, sin costo extra con tu membresía.' },
    { titulo: 'Plan de entrenamiento y de alimentación', texto: 'Rutinas adaptadas a tu cuerpo y un plan de alimentación según tus metas. Instructores en piso para corregir tu técnica.' },
    { titulo: 'Energy Bar y café gratis', texto: 'Alimentos saludables en el Energy Bar y café gratuito por las mañanas para recargar antes o después de entrenar.' },
  ],
  fotos: [
    { src: img('fachada.webp'), alt: 'Fachada de 1MR Fitness con el letrero Workout 24/7' },
    { src: img('recepcion.webp'), alt: 'Recepción con el logo de 1MR Fitness en neón' },
    { src: img('gym-cardio.webp'), alt: 'Zona de cardio con caminadoras y elípticas' },
    { src: img('gym-maquinas.webp'), alt: 'Máquinas de fuerza moradas frente al ventanal' },
  ],
};

export type Membresia = { nombre: string; detalle: string; precio: string; periodo: string };
export const membresias = {
  titulo: 'Membresías',
  nota: 'Precios en pesos mexicanos. Todas incluyen acceso 24/7. Consulta promociones vigentes en recepción o por WhatsApp.',
  destacada: { nombre: 'Citizen', detalle: 'Acceso completo + promociones. Entras al sorteo de un viaje para dos.', precio: '$999', periodo: 'al mes' },
  grupos: [
    {
      titulo: 'Individuales',
      planes: [
        { nombre: 'One Pass', detalle: 'Acceso individual', precio: '$1,299', periodo: 'al mes' },
        { nombre: 'One', detalle: 'Plan individual', precio: '$1,499', periodo: 'al mes' },
        { nombre: 'Fitness', detalle: 'Enfocado en tu rutina', precio: '$1,699', periodo: 'al mes' },
        { nombre: 'Plus', detalle: 'Acceso ampliado', precio: '$1,999', periodo: 'al mes' },
      ],
    },
    {
      titulo: 'Para tu caso',
      planes: [
        { nombre: 'Weekend', detalle: 'Sábados y domingos', precio: '$599', periodo: 'al mes' },
        { nombre: '55+', detalle: 'Para adultos de 55 años y más', precio: '$799', periodo: 'al mes' },
        { nombre: 'Five+', detalle: 'Vigencia de 2 meses', precio: '$899', periodo: 'por 60 días' },
        { nombre: 'Duo', detalle: 'Membresía para dos personas', precio: '$2,499', periodo: 'al mes' },
      ],
    },
  ] as { titulo: string; planes: Membresia[] }[],
};

export const promo = {
  titulo: 'Entrenar tiene recompensas',
  texto: 'Inscríbete o renueva tu membresía Citizen y entras automáticamente al sorteo de un viaje para dos personas. Solo necesitas estar activo durante el mes de la promoción.',
  pie: 'Fechas, destino y condiciones se anunciarán muy pronto. Consulta las bases en recepción o por WhatsApp.',
};

export const clases = {
  titulo: 'Clases incluidas en tu membresía',
  texto: 'Para todos los niveles, de principiante a avanzado, con instructores que cuidan tu técnica y tu seguridad.',
  lista: [
    { nombre: 'Funcional', dias: 'Lunes - Miércoles' },
    { nombre: 'Pilates', dias: 'Martes - Jueves' },
    { nombre: 'Yoga', dias: 'Lunes - Jueves' },
    { nombre: 'Training Up', dias: 'Martes - Jueves' },
    { nombre: 'Combat', dias: 'Lunes - Viernes' },
    { nombre: 'Zumba', dias: 'Martes' },
    { nombre: 'Fisio Stretch', dias: 'Miércoles' },
    { nombre: 'Box', dias: 'Martes - Jueves' },
  ],
};

export const instalaciones = {
  titulo: 'Instalaciones',
  texto: 'Zonas interiores climatizadas y áreas al aire libre. Peso libre, máquinas integradas, cardio frente al ventanal y zona de boxeo.',
  fotos: [
    { src: img('gym-ventanal.webp'), alt: 'Área de cardio y fuerza con aros de luz y ventanal' },
    { src: img('gym-boxeo.webp'), alt: 'Costales de boxeo con el logo de 1MR Fitness' },
    { src: img('gym-maquinas.webp'), alt: 'Máquinas de fuerza moradas' },
    { src: img('gym-cardio.webp'), alt: 'Elípticas y caminadoras' },
    { src: img('recepcion.webp'), alt: 'Recepción con logo en neón' },
    { src: img('fachada.webp'), alt: 'Fachada del gimnasio' },
  ],
  grande: { src: img('intro-mujer.webp'), alt: 'Mujer entrenando con mancuerna en la zona de peso libre' },
};

export const equipo = {
  titulo: 'El equipo detrás de tu mejor versión',
  texto: 'Recepción, instructores, nutrición y administración te acompañan en cada etapa de tu proceso.',
  imagen: img('staff.webp'),
  alt: 'Lámina del staff de 1MR Fitness con recepción, instructores, nutrición y administración',
};

export const pagos = ['Efectivo', 'Tarjeta de crédito', 'Tarjeta de débito', 'Transferencia SPEI', 'CoDi', 'PayPal', 'Mercado Pago', 'Apple Pay', 'Google Pay', 'Oxxo', 'Seven Eleven', 'Vales'];
