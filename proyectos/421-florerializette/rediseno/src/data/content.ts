const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Florería Lizette',
  ciudad: 'Monterrey, Nuevo León',
  telefono: '+52 81 1918 7398',
  whatsapp: '528119187398',
  email: 'pedidos@florerializette.mx',
  direccion: 'Av. Pino Suarez #137 Norte, Col. Centro, Monterrey',
  mapa: 'https://maps.app.goo.gl/9kKbgbcg7EKTSWHN6',
  facebook: 'https://www.facebook.com/FloreriaLizette',
  instagram: 'https://www.instagram.com/floreria_lizette.mx',
  tiktok: 'https://www.tiktok.com/@floreria.lizette',
};

export const wa = (m: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;

export const foto = img;

export const arreglosDestacados = [
  {
    nombre: 'Ramo de Rosas Rojas y Alstroemerias',
    precio: '$950 MXN',
    img: img('uploads/2026/02/VP-03.webp'),
    alt: 'Ramo de rosas rojas y alstroemerias rosadas — entrega a domicilio Monterrey',
  },
  {
    nombre: 'Arreglo de Rosas y Hortensias',
    precio: '$900 MXN',
    img: img('uploads/2025/03/SV-34.webp'),
    alt: 'Arreglo de rosas y hortensias — flores a domicilio en Monterrey',
  },
  {
    nombre: 'Corona Estilizada con Crisantemos',
    precio: '$1,800 MXN',
    img: img('uploads/2025/03/CT-101-N.webp'),
    alt: 'Corona fúnebre estilizada con crisantemos — entrega inmediata Monterrey',
  },
];

export type Ocasion = {
  id: string;
  label: string;
  emoji: string;
  msgWA: string;
  arreglos: { nombre: string; precio?: string; img: string; alt: string }[];
};

export const ocasiones: Ocasion[] = [
  {
    id: 'aniversario',
    label: 'Aniversario',
    emoji: '💑',
    msgWA: 'Hola, quiero un arreglo para aniversario, ¿pueden ayudarme?',
    arreglos: [
      {
        nombre: 'Ramo de Rosas Rojas y Alstroemerias',
        precio: '$950 MXN',
        img: img('uploads/2026/02/VP-03.webp'),
        alt: 'Ramo de rosas rojas y alstroemerias — aniversario',
      },
      {
        nombre: 'Ramo de Rosas y Alstroemerias (Papel B&N)',
        precio: '$1,200 MXN',
        img: img('uploads/2025/03/VB-26.webp'),
        alt: 'Ramo Limited Love Collection rosas y alstroemerias',
      },
    ],
  },
  {
    id: 'cumpleanos',
    label: 'Cumpleaños',
    emoji: '🎂',
    msgWA: 'Hola, quiero un arreglo para cumpleaños, ¿qué me recomiendan?',
    arreglos: [
      {
        nombre: 'Caja Corazón con Rosas y Chocolates',
        precio: '$1,200 MXN',
        img: img('uploads/2025/05/MD-29.webp'),
        alt: 'Caja corazón de rosas rojas con chocolates — cumpleaños Monterrey',
      },
      {
        nombre: 'Corazón de Rosas Rojas con Chocolates',
        img: img('uploads/2025/03/SV-22.webp'),
        alt: 'Corazón de rosas rojas con chocolates — arreglo romántico',
      },
    ],
  },
  {
    id: 'amor',
    label: 'Amor / Romance',
    emoji: '🌹',
    msgWA: 'Hola, quiero un arreglo romántico, ¿qué tienen disponible?',
    arreglos: [
      {
        nombre: 'Ramo de Rosas Rojas y Alstroemerias',
        precio: '$950 MXN',
        img: img('uploads/2026/02/VP-03.webp'),
        alt: 'Ramo de rosas rojas y alstroemerias rosadas',
      },
      {
        nombre: 'Arreglo de Rosas y Hortensias',
        precio: '$900 MXN',
        img: img('uploads/2025/03/SV-34.webp'),
        alt: 'Arreglo de rosas y hortensias — flores a domicilio Monterrey',
      },
    ],
  },
  {
    id: 'amarillas',
    label: 'Flores Amarillas',
    emoji: '🌻',
    msgWA: 'Hola, me interesan las flores amarillas, ¿qué tienen?',
    arreglos: [
      {
        nombre: 'Ramo de Gerberas Amarillas',
        precio: '$900 MXN',
        img: img('uploads/2025/03/PF-08.webp'),
        alt: 'Ramo de gerberas amarillas y nube — flores amarillas Monterrey',
      },
      {
        nombre: 'Ramo de Aniversario con Rosas Rojas',
        img: img('uploads/2025/03/love-104.jpg'),
        alt: 'Ramo de aniversario con rosas rojas',
      },
    ],
  },
  {
    id: 'condolencias',
    label: 'Condolencias',
    emoji: '🕊️',
    msgWA:
      'Hola, necesito un arreglo de condolencias con entrega inmediata, ¿pueden ayudarme?',
    arreglos: [
      {
        nombre: 'Arreglo de Condolencias con Lirios y Rosas Blancas',
        img: img('uploads/2025/03/CO-108.webp'),
        alt: 'Arreglo de condolencias con lirios y rosas blancas',
      },
      {
        nombre: 'Corona Estilizada con Crisantemos',
        precio: '$1,800 MXN',
        img: img('uploads/2025/03/CT-101-N.webp'),
        alt: 'Corona fúnebre estilizada con crisantemos — entrega inmediata',
      },
    ],
  },
  {
    id: 'corona',
    label: 'Corona Fúnebre',
    emoji: '🌿',
    msgWA:
      'Hola, necesito una corona fúnebre con entrega inmediata, ¿qué tienen disponible?',
    arreglos: [
      {
        nombre: 'Corona Fúnebre con Rosas y Gerberas',
        img: img('uploads/2025/03/CT-121.webp'),
        alt: 'Corona fúnebre blanca con rosas y gerberas — entrega inmediata Monterrey',
      },
      {
        nombre: 'Arreglo Funeral en Base con Rosas Blancas',
        precio: '$1,400 MXN',
        img: img('uploads/2025/03/AP-303-1250-scaled-1.jpg'),
        alt: 'Arreglo funeral en base con rosas blancas — condolencias Monterrey',
      },
    ],
  },
];

export const faqs = [
  {
    q: '¿Entregan el mismo día?',
    a: 'Sí. Entregamos en 3 horas o menos dentro de Monterrey y su área metropolitana. Haz tu pedido y nosotros nos encargamos del resto.',
  },
  {
    q: '¿Tienen coronas y arreglos fúnebres con entrega inmediata?',
    a: 'Sí. Contamos con coronas tradicionales, arreglos de piso y condolencias listos para entregarse de inmediato en funerarias de Monterrey y el área metropolitana, las 24 horas.',
  },
  {
    q: '¿Puedo hacer mi pedido por WhatsApp?',
    a: 'Claro. Escríbenos al +52 81 1918 7398 y te ayudamos a elegir el arreglo, personalizar la dedicatoria y coordinar la entrega.',
  },
  {
    q: '¿A qué zonas llegan?',
    a: 'A toda el área metropolitana de Monterrey: Monterrey, San Pedro Garza García, Guadalupe, San Nicolás, Apodaca, Escobedo, Santa Catarina, García y Juárez. Si tu zona no aparece, pregúntanos por WhatsApp.',
  },
];
