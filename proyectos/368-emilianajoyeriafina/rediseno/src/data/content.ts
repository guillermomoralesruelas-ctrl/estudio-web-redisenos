// Contenido de Emiliana Joyería Fina
// Fuentes: investigacion/crudo.json (textos del sitio) e investigacion/resumen.json (contacto).
// Textos del negocio copiados del original; microcopy nuevo declarado en CAMBIOS.md.

export const negocio = {
  nombre: 'Emiliana Joyería Fina',
  slogan: 'Joyería fina hecha a mano en Mérida, Yucatán',
  descripcion:
    'Joyería fina hecha a mano en Mérida, Yucatán. Anillos, aretes, churumbelas y collares en oro de 14K con gemas naturales: esmeraldas, zafiros, rubíes y diamantes.',
  whatsapp: '529993641246',
  telefono: '+529993641246',
  email: 'oroyucateco@gmail.com',
  direccion: 'Avenida Campestre x 7 #15, Mérida, Yucatán 97120',
  mapsUrl:
    'https://www.google.com/maps/place/Bundal/data=!4m2!3m1!1s0x0:0xd9dd27389309c85a',
  facebook: 'https://www.facebook.com/EmilianaJoyeria/',
  instagram: 'https://www.instagram.com/emiliana_mx/',
  tienda: 'https://emiliana.com.mx/collections/all',
  anio: '2018',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const colecciones = [
  {
    nombre: 'Anillos',
    descripcion: 'Anillos en oro de 14K con esmeraldas, zafiros, rubíes y diamantes.',
    url: 'https://emiliana.com.mx/collections/anillos',
    foto: 'coleccion-anillos.webp',
    w: 600,
    h: 800,
  },
  {
    nombre: 'Aretes',
    descripcion: 'Broqueles de diamante, aretes con gemas de color y diseños únicos.',
    url: 'https://emiliana.com.mx/collections/aretes',
    foto: 'coleccion-aretes.webp',
    w: 800,
    h: 786,
  },
  {
    nombre: 'Collares',
    descripcion: 'Collares en oro de 14K con gemas y diamantes.',
    url: 'https://emiliana.com.mx/collections/collares',
    foto: 'coleccion-collares.webp',
    w: 800,
    h: 800,
  },
  {
    nombre: 'Engagement',
    descripcion: 'Solitarios y anillos de compromiso en oro de 14K.',
    url: 'https://emiliana.com.mx/collections/engagement',
    foto: 'coleccion-engagement.webp',
    w: 600,
    h: 800,
  },
  {
    nombre: 'Pulseras',
    descripcion: 'Pulseras tennis de diamantes y gemas naturales en oro de 14K.',
    url: 'https://emiliana.com.mx/collections/pulseras',
    foto: 'coleccion-pulseras.webp',
    w: 800,
    h: 800,
  },
  {
    nombre: 'Lab Grown',
    descripcion: 'Diamantes creados en laboratorio: el mismo brillo, trazabilidad garantizada.',
    url: 'https://emiliana.com.mx/collections/lab-grown',
    foto: 'sortija-gema.webp',
    w: 900,
    h: 1200,
  },
];

export type Birthstone = {
  mes: string;
  piedra: string;
  color: string;
  color2: string;
  significado: string;
};

// Los birthstones por mes son datos de la tradición joyera internacional (no datos del negocio).
export const birthstones: Birthstone[] = [
  {
    mes: 'Enero',
    piedra: 'Granate',
    color: '#9b2335',
    color2: '#6b1225',
    significado:
      'Protección, energía y fuerza. Se dice que el granate aleja el peligro y acompaña los nuevos comienzos.',
  },
  {
    mes: 'Febrero',
    piedra: 'Amatista',
    color: '#9b59b6',
    color2: '#7d3c98',
    significado:
      'Calma, claridad y serenidad. La amatista ha sido símbolo de sabiduría y protección desde la antigüedad.',
  },
  {
    mes: 'Marzo',
    piedra: 'Aguamarina',
    color: '#5dade2',
    color2: '#2980b9',
    significado:
      'Valor, juventud y esperanza. El nombre significa "agua del mar": una piedra de calma y comunicación.',
  },
  {
    mes: 'Abril',
    piedra: 'Diamante',
    color: '#dce5f0',
    color2: '#a0b8d0',
    significado:
      'Amor eterno, fuerza y claridad. El diamante es la piedra más dura del mundo y símbolo del compromiso.',
  },
  {
    mes: 'Mayo',
    piedra: 'Esmeralda',
    color: '#27ae60',
    color2: '#1e8449',
    significado:
      'Renovación, amor y abundancia. La esmeralda es la piedra de la primavera y de Venus, diosa del amor.',
  },
  {
    mes: 'Junio',
    piedra: 'Alejandrita',
    color: '#8e44ad',
    color2: '#6c3483',
    significado:
      'Fortuna e intuición. La alejandrita cambia de verde a púrpura según la luz: única en el mundo mineral.',
  },
  {
    mes: 'Julio',
    piedra: 'Rubí',
    color: '#c0392b',
    color2: '#922b21',
    significado:
      'Pasión, valentía y vitalidad. El rubí fue llamado "rey de las gemas" por su color y su rareza.',
  },
  {
    mes: 'Agosto',
    piedra: 'Peridoto',
    color: '#82bc27',
    color2: '#5d8a1b',
    significado:
      'Luz, prosperidad y buena suerte. El peridoto existe en un solo color: verde olivo, el color de la naturaleza.',
  },
  {
    mes: 'Septiembre',
    piedra: 'Zafiro',
    color: '#2471a3',
    color2: '#1a5276',
    significado:
      'Sabiduría, lealtad y nobleza. El zafiro azul fue la piedra favorita de la realeza europea durante siglos.',
  },
  {
    mes: 'Octubre',
    piedra: 'Ópalo',
    color: '#e8a87c',
    color2: '#c47a50',
    significado:
      'Creatividad, esperanza y amor. El ópalo guarda todos los colores del arcoíris en su interior.',
  },
  {
    mes: 'Noviembre',
    piedra: 'Citrino',
    color: '#f0a500',
    color2: '#c68700',
    significado:
      'Alegría, abundancia y optimismo. El citrino con su amarillo solar se conoce como la "piedra del sol".',
  },
  {
    mes: 'Diciembre',
    piedra: 'Tanzanita',
    color: '#5b6abf',
    color2: '#3d4a9e',
    significado:
      'Transformación e intuición. La tanzanita solo se encuentra en un lugar del mundo: Tanzania.',
  },
];
