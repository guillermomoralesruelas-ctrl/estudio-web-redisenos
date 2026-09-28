// Contenido de Go México Adventures, tomado de su sitio (investigacion/original.html y su versión en español /es/,
// con las fichas de cada experiencia en /es/trip/…, leídas con curl el 2026-09-28). Regla: nada inventado.
// Las fotos son copias .webp de las propias (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';

export type NombreFoto = keyof typeof fotos;
export const foto = (nombre: NombreFoto) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});

export const negocio = {
  nombre: 'Go México Adventures',
  lema: 'Experiencias ecoturísticas',
  whatsapp: '525659271819',
  telefonoVisible: '+52 56 5927 1819',
  correo: 'info@gomexicoadventures.com',
  horario: 'Abierto de 5:00 a 23:00 todos los días',
  encuentro: 'Pilares “San Marcos”, Xochimilco',
  muelle: 'Muelle Ampl. San Marcos',
  estacionamiento: 'Vía pública y estacionamiento privado',
  temporada: 'Todo el año; la mejor temporada es de febrero a mayo',
  mapa: 'https://www.google.com/maps/search/?api=1&query=PILARES+San+Marcos+Xochimilco+CDMX',
  facebook: 'https://www.facebook.com/gomexicoadventures/',
  instagram: 'https://www.instagram.com/gomexicoadventures',
  tiktok: 'https://www.tiktok.com/@gomexicoadventures',
  youtube: 'https://www.youtube.com/@gomexicoadventures',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const waGeneral = wa('Hola, quiero información sobre sus experiencias en la Laguna del Toro, Xochimilco.');

export type Momento = 'amanecer' | 'manana' | 'tarde' | 'noche';
export const momentos: { id: Momento; nombre: string }[] = [
  { id: 'amanecer', nombre: 'Al amanecer' },
  { id: 'manana', nombre: 'En la mañana' },
  { id: 'tarde', nombre: 'En la tarde' },
  { id: 'noche', nombre: 'De noche' },
];

export type Experiencia = {
  id: string;
  nombre: string;
  tipo: 'Kayak' | 'Trajinera' | 'Chinampa';
  horas: string;
  maxPersonas: number;
  precio: number;
  cobro: 'persona' | 'grupo';
  precioAntes?: number;
  edad?: string;
  horarios: string;
  momentos: Momento[] | null;
  resumen: string;
  incluye: string[];
  foto: NombreFoto;
  alt: string;
  url: string;
  nota?: string;
};

const ficha = (slug: string) => `https://gomexicoadventures.com/es/trip/${slug}/`;

// Precio "por persona" o "por grupo", horarios, edades e "incluye" tal como vienen en la ficha de cada experiencia.
export const experiencias: Experiencia[] = [
  {
    id: 'kayak-toro', nombre: 'Ruta del Toro: kayak en Xochimilco', tipo: 'Kayak', horas: '2 horas', maxPersonas: 12,
    precio: 299, cobro: 'persona', edad: 'De 3 a 65 años',
    horarios: 'Amanecer, matutino, día, atardecer y nocturno', momentos: ['amanecer', 'manana', 'tarde', 'noche'],
    resumen: 'La experiencia clásica de Acalli Kayak Club dentro de la Reserva Ecológica Laguna del Toro: canales históricos, zonas de ahuehuetes y corredores naturales del sistema lacustre. Para principiantes.',
    incluye: ['Kayak inflable de alta estabilidad, con sistema antivolcaduras y antiponchaduras', 'Remo y chaleco salvavidas', 'Guía e introducción de seguridad'],
    foto: 'kayaks-atardecer', alt: 'Cuatro personas con chalecos naranjas en dos kayaks sobre el agua quieta de la laguna al atardecer',
    url: ficha('bull-route-kayaking-in-xochimilco'),
  },
  {
    id: 'kayak-amanecer', nombre: 'Kayak al amanecer en la Laguna del Toro', tipo: 'Kayak', horas: '2 horas', maxPersonas: 6,
    precio: 300, cobro: 'persona', edad: 'De 12 a 65 años',
    horarios: 'Empieza en las últimas horas de la noche y acompaña la llegada del día', momentos: ['amanecer'],
    resumen: 'La Ruta del Toro al amanecer, para descubrir los paisajes y los canales ecológicos de la Laguna del Toro mientras sale el sol. Sin experiencia previa.',
    incluye: ['Recorrido guiado en kayak rígido recreativo de alta estabilidad', 'Remo y chaleco salvavidas', 'Guía local e introducción de seguridad y navegación'],
    foto: 'laguna-kayaks', alt: 'Laguna del Toro en calma, con árboles reflejados en el agua y dos kayaks a lo lejos',
    url: ficha('sunrise-kayaking-in-laguna-del-toro-xochimilco'),
  },
  {
    id: 'trajinera', nombre: 'Trajinera privada en la Reserva Ecológica Laguna del Toro', tipo: 'Trajinera', horas: '3 horas', maxPersonas: 15,
    precio: 750, precioAntes: 1050, cobro: 'grupo',
    horarios: 'Amanecer, matutino, día, atardecer y nocturno', momentos: ['amanecer', 'manana', 'tarde', 'noche'],
    resumen: 'Los canales ecológicos de Xochimilco a bordo de una trajinera solo para tu grupo, por la Ruta del Toro: tranquila y lejos de las zonas más concurridas.',
    incluye: ['Trajinera privada con remador', 'Navegación por la Ruta del Toro', 'Chalecos salvavidas disponibles e introducción al recorrido'],
    foto: 'trajinera-grupo', alt: 'Un grupo sentado en las bancas de una trajinera techada, sonriendo a la cámara',
    url: ficha('private-trajinera-in-the-laguna-del-toro-ecological-reserve'),
  },
  {
    id: 'sabores', nombre: 'Sabores en la Chinampa Cueyatl Cuicatl', tipo: 'Chinampa', horas: '2 horas', maxPersonas: 10,
    precio: 199, cobro: 'persona',
    horarios: 'Menú de acuerdo con el horario de la experiencia', momentos: null,
    resumen: 'Una chinampa a la que solo se llega por agua, dentro de la reserva, con menú tradicional o de especialidad (cecina de Yecapixtla, mixiote de carnero, chilaquiles verdes, enchiladas de mole), fruta de temporada y una bebida.',
    incluye: ['Traslado de ida y vuelta en trajinera privada o canoa desde el muelle', 'Alimentos del menú elegido, fruta de temporada y una bebida', 'Tiempo libre en el jardín y el mirador'],
    foto: 'chinampa-carpa', alt: 'Mesa bajo una carpa roja en el jardín de la chinampa, rodeada de árboles',
    url: ficha('flavors-at-chinampa-cueyatl-cuicatl'),
    nota: 'Su ficha dice “desde $199 por persona”; en la portada del sitio aparece en $399.',
  },
  {
    id: 'chinampa-4', nombre: 'Convivencia en la Chinampa Cueyatl Cuicatl, hasta 4 personas', tipo: 'Chinampa', horas: '4 horas', maxPersonas: 4,
    precio: 1499, cobro: 'grupo',
    horarios: 'Matutino y vespertino', momentos: ['manana', 'tarde'],
    resumen: 'Una mañana o una tarde en la chinampa con tu familia o amigos, con mesa reservada y asado.',
    incluye: ['Navegación de ida y vuelta en trajinera privada o canoa', 'Mesa reservada para el grupo', 'Aproximadamente 1 kg de carne, aguacate, nopales asados, cebolla caramelizada, tortillas hechas a mano, salsa y limones'],
    foto: 'chinampa-jardin', alt: 'Jardín de la chinampa con pasto, un andador de piedra y una mesa a la sombra de los árboles',
    url: ficha('gathering-at-chinampa-cueyatl-cuicatl-up-to-4-guests'),
  },
  {
    id: 'chinampa-10', nombre: 'Convivencia en la Chinampa Cueyatl Cuicatl, hasta 10 personas', tipo: 'Chinampa', horas: '4 horas', maxPersonas: 10,
    precio: 3599, cobro: 'grupo',
    horarios: 'Matutino y vespertino', momentos: ['manana', 'tarde'],
    resumen: 'Para reunir a la familia, amigos o compañeros una mañana o una tarde en la reserva, con mesa reservada y asado.',
    incluye: ['Navegación de ida y vuelta en trajinera privada o canoa', 'Mesa reservada para el grupo', 'Aproximadamente 2.5 kg de carne, aguacate, nopales asados, cebolla caramelizada, tortillas hechas a mano, salsa y limones'],
    foto: 'chinampa-carpa', alt: 'Mesa bajo una carpa roja en el jardín de la chinampa, rodeada de árboles',
    url: ficha('gathering-at-chinampa-cueyatl-cuicatl-up-to-10-guests'),
  },
  {
    id: 'atlicpac', nombre: 'Chinampa privada Atlicpac, hasta 30 personas', tipo: 'Chinampa', horas: '6 horas (12:30 a 18:30)', maxPersonas: 30,
    precio: 4449, cobro: 'grupo',
    horarios: '12:30 p.m. a 6:30 p.m.', momentos: ['tarde'],
    resumen: 'Una chinampa entera solo para tu grupo, con vista a toda la Laguna del Toro, jardín amplio y comedor techado. La comida la llevan ustedes.',
    incluye: ['Uso exclusivo de la chinampa durante seis horas', 'Traslado redondo en trajinera privada o canoas', 'Comedor techado con lona, mesas y asientos, anafre tradicional y leña'],
    foto: 'chinampa-jardin', alt: 'Jardín de la chinampa con pasto, un andador de piedra y una mesa a la sombra de los árboles',
    url: ficha('private-chinampa-atlicpac-up-to-30-guests'),
  },
];

export const opiniones = [
  { texto: '¡Excelente recorrido! Los guías son muy amables y están totalmente al pendiente durante el trayecto; su equipo, en excelentes condiciones. Si vas con niños, ampliamente recomendable, pues les tienen mucha paciencia.', autor: 'Adriana Bernadet', ruta: 'Ruta del Toro', foto: 'cliente-1' as NombreFoto },
  { texto: 'Muy buen servicio en todo el recorrido: el guía está al pendiente de cómo va uno y te capacitan para manejar bien el remo. Estuvo 10/10.', autor: 'García Raamses', ruta: 'Ruta Tlilac', foto: 'cliente-2' as NombreFoto },
  { texto: 'El recorrido es súper tranquilo, el equipo que brindan está en muy buenas condiciones, son puntuales, amables, con muy buena actitud. Nos divertimos mucho. 10 de 10.', autor: 'Yaz García', ruta: 'Ruta del Toro', foto: 'cliente-3' as NombreFoto },
  { texto: 'Gracias por este regalo tan bonito. Gracias a Acalli Kayak Club Xochimilco, excelente servicio y súper recomendado.', autor: 'Karen López', ruta: 'Ruta del Toro', foto: 'cliente-4' as NombreFoto },
];

export const porQue = [
  { titulo: 'Diseñadas por nosotros', texto: 'Cada experiencia está cuidadosamente diseñada para brindar una aventura auténtica, segura y bien organizada.' },
  { titulo: 'Turismo responsable', texto: 'Promovemos experiencias que respetan la naturaleza, la cultura y las comunidades locales.' },
  { titulo: 'Atención personalizada', texto: 'Te acompañamos desde el momento de tu reserva hasta el final de tu experiencia.' },
];
