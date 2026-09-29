// Contenido de Barón Barbershop. Todo sale de su sitio (investigacion/crudo.json, captura de su página de Hostinger
// Horizons); nada es inventado. Precios en pesos mexicanos.

export const negocio = {
  nombre: 'Barón Barbershop',
  lema: 'Más que un corte, una experiencia.',
  direccion: 'Torre West, Av. Central Guillermo González Camarena 500, Valle Real, 45136 Zapopan, Jal.',
  zona: 'Ventura, Valle Real, Zapopan',
  whatsapp: '523315348449',
  whatsappTexto: '33 1534 8449',
  horario: [
    { dias: 'Lunes a sábado', horas: '10:00 a 19:00' },
    { dias: 'Domingo', horas: '10:00 a 15:00' },
  ],
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('BARÓN BARBER SHOP VENTURA, TORRE WEST, GUILLERMO GONZALEZ CAMARENA 500, 45136 Zapopan, Jal., Mexico'),
  instagram: 'https://instagram.com/baronbarbershop.oficial',
  instagramTexto: '@baronbarbershop.oficial',
  facebook: 'https://www.facebook.com/baronbarbershopgdl/',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Todo lo que incluyen sus cortes, en el orden en que los lista su sitio.
export const pasos = [
  { id: 'corte', nombre: 'Corte' },
  { id: 'ozono', nombre: 'Vaporizador de ozono' },
  { id: 'parches', nombre: 'Parches de colágeno para ojeras' },
  { id: 'puntos', nombre: 'Mascarilla de puntos negros' },
  { id: 'facewash', nombre: 'Face wash y exfoliante de aloe vera' },
  { id: 'hidratante', nombre: 'Mascarilla hidratante' },
  { id: 'lavado', nombre: 'Lavado de cabello' },
  { id: 'ampolleta', nombre: 'Lavado de cabello con ampolleta' },
  { id: 'peinado', nombre: 'Peinado' },
  { id: 'masaje', nombre: 'Masaje' },
] as const;

export type PasoId = (typeof pasos)[number]['id'];

export const cortes: { id: string; nombre: string; precio: number; incluye: PasoId[]; foto: string; alt: string }[] = [
  { id: 'basico', nombre: 'Corte Básico', precio: 300, incluye: ['corte', 'parches', 'lavado', 'peinado', 'masaje'], foto: 'corte-basico.webp', alt: 'Barbero ajustando la capa en la nuca de un cliente con corte degradado' },
  { id: 'premium', nombre: 'Corte Premium', precio: 380, incluye: ['corte', 'parches', 'puntos', 'ampolleta', 'peinado', 'masaje'], foto: 'corte-premium.webp', alt: 'Barbero de gorra trabajando el corte de un cliente frente al espejo' },
  { id: 'baron', nombre: 'Corte Barón', precio: 500, incluye: ['corte', 'ozono', 'parches', 'puntos', 'facewash', 'hidratante', 'peinado', 'masaje'], foto: 'corte-baron.webp', alt: 'Barbero de pie junto a un cliente sentado en la silla, en el salón con muros de concreto' },
];

export const barberos = [
  { nombre: 'Jahir', estilo: 'Clásicos y modernos, siempre impecables.', texto: 'Aprendió practicando hasta dominar el oficio. Cuida cada detalle para que el cliente salga fresco y relajado.', foto: 'barbero-jahir.webp', ancho: 717, alto: 1100 },
  { nombre: 'Arath', estilo: 'Especialista en cortes clásicos a tijera y máquina.', texto: 'Formado en Barber Life, combina diferentes técnicas para lograr el resultado exacto que busca cada cliente.', foto: 'barbero-arath.webp', ancho: 825, alto: 1100 },
  { nombre: 'Oscar', estilo: 'Cortes clásicos y degradados con precisión.', texto: 'Su experiencia y práctica constante le permiten adaptar cada corte al estilo y tipo de cabello del cliente.', foto: 'barbero-oscar.webp', ancho: 825, alto: 1100 },
];

export const galeria = [
  { foto: 'galeria-1.webp', alt: 'Cliente de espaldas en la silla, con degradado recién hecho, frente a los espejos', ancho: 825, alto: 1100 },
  { foto: 'galeria-2.webp', alt: 'Barbero perfilando la barba de un cliente reclinado', ancho: 825, alto: 1100 },
  { foto: 'galeria-3.webp', alt: 'Detalle de la máquina marcando la nuca de un cliente de cabello rizado', ancho: 733, alto: 1100 },
  { foto: 'galeria-4.webp', alt: 'Barbero afeitando a un cliente reclinado bajo la luz del salón', ancho: 825, alto: 1100 },
  { foto: 'galeria-5.webp', alt: 'Barbero trabajando junto a la silla reclinada sobre el piso de ajedrez', ancho: 686, alto: 1100 },
  { foto: 'galeria-6.webp', alt: 'Barbero secando con toalla el cabello de un cliente', ancho: 825, alto: 1100 },
];
