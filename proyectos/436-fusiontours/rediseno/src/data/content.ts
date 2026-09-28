// Contenido de Fusion Tours Riviera Maya — tomado de investigacion/crudo.json y resumen.json.
// Regla: nada inventado. Precios: no están en el scraping, se usa "Cotizar" como CTA.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Fusion Tours',
  nombreCompleto: 'Fusion Tours Riviera Maya',
  ciudad: 'Playa del Carmen, Quintana Roo',
  descripcion: 'Diseñamos experiencias que combinan aventura, cultura y relajación para que disfrutes cada minuto.',
  subDescripcion: 'Fusion Tours te conecta con las experiencias más auténticas de México.',
  whatsapp: '529842181414',
  whatsapp2: '529842785840',
  email: 'reservationsfusiontoursrvm@gmail.com',
  email2: 'fusiontoursrvm2025@gmail.com',
  facebook: 'https://www.facebook.com/fusiontoursrvm',
  instagram: 'https://www.instagram.com/fusiontoursrvm',
  twitter: 'https://x.com/FusionToursRVM',
};

export const wa = (m: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;
export const foto = img;

export const stats = [
  { numero: '+20', texto: 'años de experiencia en el mercado' },
  { numero: '+600', texto: 'clientes satisfechos en el último año' },
  { numero: '+40', texto: 'tours y actividades verificadas' },
];

export type Tour = {
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  categoria: string;
};

export type Categoria = {
  id: string;
  icono: string;
  etiqueta: string;
  descripcion: string;
  tours: Tour[];
  waTexto: string;
};

export const categorias: Categoria[] = [
  {
    id: 'cultura',
    icono: 'ruins',
    etiqueta: 'Cultura & Historia',
    descripcion: 'Arqueológicos',
    tours: [
      {
        nombre: '5×1 Tulum + Cobá Clásico',
        descripcion: 'Dos de los sitios arqueológicos más impresionantes de la Riviera Maya en un solo día.',
        imagen: img('uploads/2025/10/WhatsApp-Image-2025-10-31-at-12.07.01-AM-1024x684.jpeg'),
        alt: '5X1 Tulum + Cobá Clásico — ruinas mayas frente al Caribe',
        categoria: 'Arqueológicos',
      },
      {
        nombre: 'Chichen Itzá Clásico',
        descripcion: 'Explora una de las Siete Maravillas del Mundo moderno con guía certificado.',
        imagen: img('uploads/2025/10/WhatsApp-Image-2026-01-11-at-1.22.12-PM-1024x679.jpeg'),
        alt: 'Chichen Itzá Clásico — pirámide El Castillo',
        categoria: 'Arqueológicos',
      },
    ],
    waTexto: 'Hola, me interesa un tour de Cultura y Arqueología en la Riviera Maya. ¿Pueden darme información?',
  },
  {
    id: 'naturaleza',
    icono: 'leaf',
    etiqueta: 'Naturaleza & Cenotes',
    descripcion: 'Ecotours',
    tours: [
      {
        nombre: "Sian Ka'an Lancha + Van",
        descripcion: "Patrimonio natural de la UNESCO: lagunas, manglares y arrecifes en la Reserva de Sian Ka'an.",
        imagen: img('uploads/2025/10/Sian-Kaan-1024x682.jpg'),
        alt: "Sian Ka'an — laguna turquesa y manglares",
        categoria: 'Ecotours',
      },
      {
        nombre: 'Holbox Plus + Cenote',
        descripcion: 'La isla sin coches, aguas cristalinas y un cenote escondido en la selva.',
        imagen: img('uploads/2025/10/Holbox-1024x682.jpg'),
        alt: 'Holbox Plus — playa de aguas turquesas',
        categoria: 'Ecotours',
      },
      {
        nombre: 'Casa Tortuga',
        descripcion: 'Cuatro cenotes cristalinos rodeados de exuberante selva maya en Tulum.',
        imagen: img('uploads/2025/10/tulum-casa-tortuga-9.jpg'),
        alt: 'Casa Tortuga Tulum — cenote de selva maya',
        categoria: 'Ecotours',
      },
    ],
    waTexto: 'Hola, me interesa un tour de naturaleza o cenotes en la Riviera Maya. ¿Pueden darme información?',
  },
  {
    id: 'mar',
    icono: 'wave',
    etiqueta: 'Mar & Buceo',
    descripcion: 'Interacciones marinas',
    tours: [
      {
        nombre: 'Buceo Discovery Cozumel',
        descripcion: 'Descubre la sensación de respirar bajo el agua en el arrecife más espectacular del Caribe.',
        imagen: img('uploads/2025/11/WhatsApp-Image-2025-09-05-at-11.34.58-AM-1024x896.jpeg'),
        alt: 'Buceo Discovery Cozumel — submarino en arrecife',
        categoria: 'Interacciones',
      },
      {
        nombre: 'Delfines Nado Cozumel',
        descripcion: 'Conéctate con delfines en el Caribe mexicano.',
        imagen: img('uploads/2025/11/delfines-cozumel-3.jpg'),
        alt: 'Delfines Nado Cozumel — nado con delfines',
        categoria: 'Interacciones',
      },
    ],
    waTexto: 'Hola, me interesa una actividad de buceo o nado con delfines en Cozumel. ¿Pueden darme información?',
  },
  {
    id: 'yates',
    icono: 'sail',
    etiqueta: 'Yates & Veleros',
    descripcion: 'Lujo náutico',
    tours: [
      {
        nombre: 'Yate 28 ft Taboó',
        descripcion: 'Paseo en yate de lujo a Isla Mujeres con mar turquesa y vistas paradisíacas.',
        imagen: img('uploads/2025/11/Yate-Taboo.png'),
        alt: 'Yate 28 ft Taboó — yate en Isla Mujeres',
        categoria: 'Yates',
      },
      {
        nombre: 'Yate 45 ft Colibrí',
        descripcion: 'Yate premium para grupos con toda la experiencia náutica del Caribe.',
        imagen: img('uploads/2025/11/Yate-Colibri.png'),
        alt: 'Yate 45 ft Colibrí — yate de lujo',
        categoria: 'Yates',
      },
      {
        nombre: 'Isla Mujeres Sailing Light',
        descripcion: 'A bordo de un catamarán rumbo a Isla Mujeres navegando por el Caribe.',
        imagen: img('uploads/2025/10/Catamaran-Sayling-2-1024x402.webp'),
        alt: 'Isla Mujeres Sailing — catamarán en el Caribe',
        categoria: 'Islas',
      },
    ],
    waTexto: 'Hola, me interesa un tour en yate o velero. ¿Pueden darme información y cotización?',
  },
  {
    id: 'aventura',
    icono: 'fire',
    etiqueta: 'Adrenalina & Aventura',
    descripcion: 'Aventura extrema',
    tours: [
      {
        nombre: "Boca del Puma ATV's Doble + Caballos",
        descripcion: 'Eco-parque en la selva maya con ATVs dobles y cabalgata en cenote.',
        imagen: img('uploads/2025/11/WhatsApp-Image-2025-10-30-at-5.44.43-PM-2-1024x684.jpeg'),
        alt: 'Boca del Puma ATVs — selva maya en cuatrimoto',
        categoria: 'Ecotours',
      },
      {
        nombre: 'Selvatica Gimme All',
        descripcion: 'Aventura extrema en la jungla maya: tirolesas, ATVs, cenotes y más.',
        imagen: img('uploads/2025/11/WhatsApp-Image-2025-11-02-at-11.20.58-PM-1024x675.jpeg'),
        alt: 'Selvatica Gimme All — aventura extrema en selva',
        categoria: 'Aventura',
      },
    ],
    waTexto: 'Hola, me interesa un tour de aventura extrema o ATVs en la Riviera Maya. ¿Pueden darme información?',
  },
];

export type Actividad = {
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  badge: string;
};

export const actividades: Actividad[] = [
  {
    nombre: 'XPLOR DÍA',
    descripcion: 'Parque de aventura con ríos subterráneos, tirolesas y puentes colgantes.',
    imagen: img('uploads/2025/10/Xplor-dia-4.jpg'),
    alt: 'Xplor Día — parque de aventura Riviera Maya',
    badge: 'Parques',
  },
  {
    nombre: 'Chankanaab Aventura Todo Incluido',
    descripcion: 'Santuario natural de Cozumel: snorkel, delfines, jardín botánico y playa privada.',
    imagen: img('uploads/2025/11/Captura-de-pantalla-2025-11-02-142400-1024x650.png'),
    alt: 'Chankanaab Aventura — parque natural Cozumel',
    badge: 'Islas',
  },
  {
    nombre: 'Buceo Certificado Cozumel',
    descripcion: 'Inmersión certificada en uno de los destinos de buceo más espectaculares del mundo.',
    imagen: img('uploads/2025/11/WhatsApp-Image-2025-09-05-at-11.34.59-AM-1-1024x896.jpeg'),
    alt: 'Buceo Certificado Cozumel — arrecife de coral',
    badge: 'Interacciones',
  },
  {
    nombre: 'Bacalar Plus + Pontón',
    descripcion: 'La Laguna de los Siete Colores: aguas cristalinas en pontón privado.',
    imagen: img('uploads/2025/10/Bacalar-1.jpg'),
    alt: 'Bacalar Plus — Laguna de los Siete Colores',
    badge: 'Ecotours',
  },
];

export const faqs = [
  {
    q: '¿Cómo reservo un tour?',
    a: 'Puedes reservar directamente desde la web o escribiéndonos por WhatsApp. Confirmamos tu fecha y enviamos la orden de pago en minutos.',
  },
  {
    q: '¿Qué incluye mi tour?',
    a: 'Cada experiencia detalla lo que incluye: traslados, guías certificados, alimentos, equipo y seguros según aplique.',
  },
  {
    q: '¿Puedo modificar o cancelar mi reserva?',
    a: 'Sí, contamos con políticas flexibles. Escríbenos al menos 48 h antes de tu salida y buscamos la mejor alternativa.',
  },
  {
    q: '¿Tienen precios especiales para grupos?',
    a: 'Tenemos tarifas preferenciales para grupos, agencias y bodas destino. Envía tus fechas y número de personas para cotizar.',
  },
  {
    q: '¿En qué moneda puedo pagar?',
    a: 'Aceptamos MXN y USD. Nuestro equipo te ayuda a cerrar la operación en la moneda que te sea más conveniente.',
  },
];

export const clientes = [1, 2, 3, 4, 5].map((n) => ({
  imagen: img(`themes/blankslate/assets/lovable/images/clients/client-${n}.jpg`),
  alt: `Cliente Fusion Tours ${n}`,
}));
