// Contenido de Evelio Sport Fishing, tomado de su sitio (una página en IONOS), revisado con curl el 2026-09-28.
// Los textos marcados "nuestro" son del rediseño.

export const negocio = {
  nombre: 'Evelio Sport Fishing',
  lugar: 'Puerto Escondido, Oaxaca',
  telefono: { texto: '954 100 9497', tel: '+529541009497' },
  whatsapp: '529541009497',
  facebook: 'https://www.facebook.com/evelio.cruzmorales',
  youtube: 'https://www.youtube.com/@Eveliosportfishing',
  premio: 'Segundo lugar en la categoría de captura de Dorado del Torneo de Pesca Puerto Escondido Oaxaca 2024',
  quienes: 'Empresa turística especializada en pesca deportiva y paseos recreativos, con diversas embarcaciones y personal capacitado para llevar a profesionales o a quien quiera iniciarse en la pesca.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Evelio+Sport+Fishing+Puerto+Escondido',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
export const mesesLargos = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export type Salida = {
  id: string;
  nombre: string;
  texto: string;
  foto: string;
  alt: string;
  temporada?: number[]; // meses (0 = enero) en que la ofrecen, si su sitio lo dice
  precio: (personas: number) => { total: number | null; nota: string };
};

// Precios de "Conoce nuestros paquetes".
export const salidas: Salida[] = [
  {
    id: 'pesca', nombre: 'Pesca deportiva de alta mar', foto: 'f-marlin',
    alt: 'Cuatro pescadores en la playa junto a un marlín colgado, más alto que ellos',
    texto: 'Cinco horas para buscar pez vela, marlín y atún con guías y equipo.',
    precio: () => ({ total: 7000, nota: 'Por salida de 5 horas' }),
  },
  {
    id: 'paseo', nombre: 'Paseo a las playas', foto: 'f-lancha',
    alt: 'Su lancha blanca con toldo, anclada en agua turquesa',
    texto: 'Un día de playas de Puerto Escondido, con avistamiento de tortugas y delfines.',
    precio: (n) =>
      n <= 5 ? { total: 1500, nota: 'De dos a cinco personas' }
      : n >= 7 ? { total: 2000, nota: 'De siete a diez personas' }
      : { total: null, nota: 'Su sitio no publica el precio para seis personas' },
  },
  {
    id: 'ballenas', nombre: 'Avistamiento de ballenas', foto: 'f-ballena',
    alt: 'Lomo de una ballena jorobada frente a la costa de Puerto Escondido',
    texto: 'Observar a las ballenas en su entorno natural, de noviembre a marzo.',
    temporada: [10, 11, 0, 1, 2],
    precio: (n) => ({ total: 700 * n, nota: '$700 por persona' }),
  },
  {
    id: 'delfines', nombre: 'Avistamiento de delfines', foto: 'f-delfines',
    alt: 'Grupo de delfines nadando bajo el agua azul',
    texto: 'Navegar para ver delfines en libertad.',
    precio: () => ({ total: null, nota: 'Precio por WhatsApp' }),
  },
];
