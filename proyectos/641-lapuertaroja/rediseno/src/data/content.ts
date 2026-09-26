// Contenido de La Puerta Roja Hotel Boutique, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, se deja fuera y se anota en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../sitio/assets/images).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const fotos = {
  logo: img('jWtWFhQ5b9jtz1gngLa29NgxHM.svg'), // logotipo "LA PUERTA ROJA" (514x82)
  emblema: img('Ht38fMRPWLtKhsVyPeLpQ7xV0.svg'), // fachada con la puerta roja + "Hotel Boutique" (514x266)
  alberca: img('5wLFQwprk613ajEBDoF3vi6tj8.jpg'),
  sala: img('aMl5DylWvTpPaZC0hueTumI36Lo.jpg'),
  fuente: img('x60ce6lvmktNvnKjVYVmszbxxA.jpg'),
  fachada: img('Iz6IzNotTZKzs2PG18kQU55dDsY.jpg'),
  cocina: img('d1WfLQYVMX6Xww5jYdQBCYzb4Q.jpg'),
  tapiz: img('dTpI8JAI8jPAfRxnPaUgdzG5m1w.jpg'),
  elefante: img('Dqv6TlIK6ygyoCJEVOvnzON5k4w.jpg'),
  indigo: img('kLDPigad7yC0YR0l84QBnyPvQwU.jpg'),
  concha: img('7Sxafsc1qkskFahkBDHKgYVwRo.jpg'),
  novia: img('8DbNCrhEuBJON5NXkKZeNSlelc.jpg'),
  mesaLarga: img('IbLGkiYGWckZWymeHf7WJD4XHE.jpg'),
  jardin: img('nqwryBdXq0pQV2miIHQswJ577Jo.jpg'),
  // Collages de 1024x575 de Teresita's y Le Bleu
  resto1: img('1uhjy4hcta50kMO9NLbDDDOHg_scale-down-to-1024.jpg'),
  resto2: img('n71flf0fG64Fxmoi5BVMUth89E_scale-down-to-1024.jpg'),
  resto3: img('3H1xN7wHmfxOkBOMqwAyHBubuQo_scale-down-to-1024.jpg'),
  resto4: img('dv5wEmM7OhZemjzivXoTCz3k4RQ_scale-down-to-1024.jpg'),
  resto5: img('Cfbhidh4l4n2aY3ElbU4fvQ9gOY_scale-down-to-1024.jpg'),
  resto6: img('XZCnXEBjrJuqBDVACWPvhOXzL28_scale-down-to-1024.jpg'),
};

export const negocio = {
  nombre: 'La Puerta Roja Hotel Boutique',
  ciudad: 'Álamos, Sonora',
  direccion: 'Calle Galeana No. 46, La Colorada, Álamos, Sonora, México',
  telefono: '(647) 428 1552',
  telefonoLink: 'tel:+526474281552',
  // Motor de reservas del hotel (Cloudbeds). El original lo enlazaba con fechas rotas; aquí va sin fechas.
  reservar: 'https://hotels.cloudbeds.com/reservation/9aLNU4',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('La Puerta Roja Hotel Boutique, Calle Galeana 46, Álamos, Sonora'),
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/lapuertarojahotel/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/lapuertarojahotel/' },
  ],
  teresitas: 'https://teresitas.com.mx/',
};

export const nav = [
  { href: '#casa', label: 'La casa' },
  { href: '#habitaciones', label: 'Habitaciones' },
  { href: '#restaurantes', label: 'Restaurantes' },
  { href: '#eventos', label: 'Eventos' },
];

export const hero = {
  lugar: 'Álamos, Sonora',
  titulo: 'Compartiendo doscientos años de historia',
  fotos: [
    { src: fotos.alberca, alt: 'Huésped junto a la alberca frente a un muro de piedra y un pavorreal', w: 1920, h: 1080 },
    { src: fotos.sala, alt: 'Sala con retrato antiguo, muebles de piel y arcos hacia el patio', w: 1920, h: 1080 },
    { src: fotos.fuente, alt: 'Fuente de cantera en un patio de muros azules', w: 1920, h: 1080 },
  ],
};

export const casa = {
  titulo: 'Una casa antigua al estilo Colonial',
  texto: 'Descubre un rincón encantador de un pueblo mágico, donde podrás hospedarte y relajarte en una casa que ha preservado su arquitectura desde la época colonial y que te ofrece todas las comodidades modernas sin perder su encanto histórico.',
  fotos: [
    { src: fotos.fachada, alt: 'Fachada blanca con arcos y bugambilias bajo cielo azul', w: 1920, h: 1080 },
    { src: fotos.cocina, alt: 'Cocina con azulejo azul, vitrinas blancas y piezas de barro', w: 1920, h: 1886 },
    { src: fotos.tapiz, alt: 'Huésped caminando frente a un tapiz antiguo', w: 1920, h: 2880 },
  ],
};

export type Habitacion = {
  id: string;
  nombre: string;
  capacidad: string;
  tarifa: string;
  cama?: string;
  titulo?: string;
  descripcion?: string;
  amenidades?: string[];
  foto?: { src: string; alt: string };
};

export const habitaciones = {
  titulo: 'Cada habitación, un mundo y una historia que contar',
  texto: 'Hemos encontrado inspiración en algunos de los distintos rincones de este mundo para brindarte un fragmento de su esencia en cada una de las habitaciones de La Puerta Roja. Y las hemos diseñado con gran atención al detalle logrando crear un ambiente y una atmósfera única en cada una de ellas.',
  nota: 'Tarifas en pesos mexicanos, publicadas en el sitio actual. Para conocer nuestras promociones y para más información comunícate con nosotros.',
  lista: [
    {
      id: 'elefante', nombre: 'Elefante', capacidad: '2 adultos', cama: '1 cama Queen Size', tarifa: '$2,700',
      titulo: 'Experiencia con un toque asiático',
      descripcion: 'Arte y artesanías de elefantes embellecen cada rincón de esta habitación, creando un pequeño y cálido espacio. Sus toques arquitectónicos influenciados por la cultura hindú te invitan a vivir una experiencia única, donde la comodidad y el confort son prioridad.',
      amenidades: ['WiFi', 'Chimenea', 'Tina', 'Alberca', 'Aire acondicionado', 'Secadora', 'Bocadillos'],
      foto: { src: fotos.elefante, alt: 'Habitación Elefante: cama blanca con cojines naranjas y colmillos tallados en la pared' },
    },
    { id: 'indigo', nombre: 'Índigo', capacidad: '2 adultos', tarifa: '$2,700', foto: { src: fotos.indigo, alt: 'Habitación Índigo: muros azul añil, cama con dosel y tapete' } },
    { id: 'concha', nombre: 'Concha', capacidad: '4 adultos', tarifa: '$3,100', foto: { src: fotos.concha, alt: 'Habitación Concha: camas con cojines estampados y cuadro antiguo' } },
    { id: 'escher', nombre: 'Escher', capacidad: '2 adultos', tarifa: '$2,700' },
    { id: 'turquesa', nombre: 'Turquesa', capacidad: '4 adultos', tarifa: '$2,500' },
    { id: 'azul', nombre: 'Azul', capacidad: '2 adultos', tarifa: '$1,500' },
    { id: 'rosa', nombre: 'Rosa', capacidad: '3 adultos', tarifa: '$1,700' },
  ] as Habitacion[],
};

export const restaurantes = {
  titulo: 'Conoce nuestros restaurantes y complementa tu estadía',
  teresitas: {
    nombre: "Teresita's",
    texto: 'Comienza tus mañanas con el aroma tentador de la panadería francesa Teresita’s, donde encontrarás una selección de panes recién horneados, junto con deliciosos desayunos y postres.',
    extra: 'Despierta cada mañana con el servicio de desayunos a la puerta de tu habitación en nuestra extensión Teresita’s.',
  },
  lebleu: {
    nombre: 'Le Bleu',
    texto: 'Por la noche, disfruta de la animada atmósfera de Le Bleu, donde podrás disfrutar de música en vivo mientras saboreas su exquisita comida, tapas y mixología.',
  },
  fotos: [
    { src: fotos.resto1, alt: 'Desayunos y comensales en la terraza' },
    { src: fotos.resto2, alt: 'Pastel, terraza con sombrillas y pan dulce' },
    { src: fotos.resto3, alt: 'Tostadas, patio con plantas y platillo con limón' },
    { src: fotos.resto4, alt: 'Crema, coctel con naranja y platillo' },
    { src: fotos.resto6, alt: 'Copa de vino, brindis y coctel rosa' },
    { src: fotos.resto5, alt: 'Música en vivo y cena' },
  ],
};

export const eventos = {
  titulo: 'Un encantador entorno para conmemorar tus momentos',
  texto: 'Nos inspiramos en tu evento para crear algo especial y celebrar contigo en ese momento tan especial.',
  fotos: [
    { src: fotos.mesaLarga, alt: 'Mesa larga de banquete con flores blancas bajo toldo y luces', w: 1562, h: 1954 },
    { src: fotos.novia, alt: 'Novia bajo un arco de cantera, en blanco y negro', w: 1920, h: 2880 },
    { src: fotos.jardin, alt: 'Invitados en el jardín con vista a la sierra de Álamos', w: 1920, h: 2880 },
  ],
};
