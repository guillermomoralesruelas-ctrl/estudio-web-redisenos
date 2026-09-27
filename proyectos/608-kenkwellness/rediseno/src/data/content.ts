// Contenido de Kenkō Wellness, tomado del sitio original: investigacion/crudo.json (Inicio, Gift Card, Filosofía y
// Fórmula KenKo 360) y el texto de /catalogo-2/, /clases/, /talleres/, /membresia/, /promociones/ y /equipo-kenko/
// (tomado con curl el 2026-09-27). Nada inventado; lo redactado por nosotros (títulos, microcopy, textos de
// "Tu Plan 360") está declarado en CAMBIOS.md. Se dejan fuera las descripciones que prometen resultados de salud.
// Las rutas de imagen son relativas a publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Kenkō Wellness',
  // WhatsApp de casi todos sus botones (phone=5215519398546). Su Gift Card usa otro: 55 6435 9242 (pendiente).
  whatsapp: '525519398546',
  whatsappVisible: '(55) 1939 8546',
  // Teléfono de la barra superior de su sitio (tel://5555487500).
  telefono: { visible: '(55) 5548 7500', tel: '+525555487500' },
  correo: 'claudia.garcia@kenkowellness.com.mx',
  // Dirección del pie en Inicio, Clases y Catálogo. Gift Card y Membresía dicen Interlomas (pendiente).
  direccion: 'Calle Gral. Felipe Ángeles #22, Col. Lomas del Huizachal, Naucalpan de Juárez, Edo. Méx., C.P. 53840',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Calle Gral. Felipe Ángeles 22, Lomas del Huizachal, 53840 Naucalpan de Juárez, Méx.'),
  instagram: 'https://www.instagram.com/wellness.kenko',
  facebook: 'https://www.facebook.com/profile.php?id=61569814375033',
  tiktok: 'https://www.tiktok.com/@kenkowellnessmx',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, vi su página y quiero agendar en Kenkō Wellness.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  loto: f('yoga-loto', 1600, 1067, 'Instructora sentada en flor de loto con las manos juntas sobre un tapete naranja, frente al muro de piedra de la sala de yoga'),
  invertida: f('yoga-invertida', 1200, 800, 'Postura invertida sobre la cabeza en la sala de yoga de Kenkō'),
  luna: f('yoga-luna', 1200, 800, 'Instructora en postura de luna creciente sobre un tapete verde, con los brazos arriba'),
  recepcion: f('recepcion', 1400, 933, 'Recepción de la casa con sillones de mimbre, repisas iluminadas y globos verdes y blancos en el techo'),
  giftcard: f('giftcard', 1000, 667, 'Gift Card de Kenkō junto a una bolsa de regalo lila y una maceta con flores'),
  equipo: f('equipo', 1200, 800, 'Cuatro integrantes del equipo de Kenkō sonriendo en la casa, con globos y repisas detrás'),
  repisas: f('repisas', 1200, 800, 'Repisas iluminadas de la tienda holística con plantas, velas y figuras'),
};

// "Tu Plan 360": sus servicios por pilar, con el precio publicado en /catalogo-2/, /talleres/ y /membresia/.
export type Pilar = 'cuerpo' | 'mente' | 'espiritu';
export type Servicio = { id: string; pilar: Pilar; nombre: string; precio: number | null; detalle: string };

export const pilares: { id: Pilar; nombre: string; texto: string }[] = [
  { id: 'cuerpo', nombre: 'Cuerpo', texto: 'Cárgate de energía con un rico masaje, un facial rejuvenecedor y experimenta las técnicas más innovadoras, de la mano de nuestras expertas.' },
  { id: 'mente', nombre: 'Mente', texto: 'Entender nuestras emociones, procesarlas mejor y superar momentos retadores en nuestra vida.' },
  { id: 'espiritu', nombre: 'Espíritu', texto: 'En KenKo creemos en el poder de la energía y el manejo adecuado de nuestras emociones para poder experimentar la paz interior.' },
];

export const servicios: Servicio[] = [
  { id: 'masaje', pilar: 'cuerpo', nombre: 'Masaje', precio: 1200, detalle: 'Descontracturante, reductivo, antiestrés (relajante), drenaje linfático, craneofacial, shiatsu (sueco) o postoperatorio' },
  { id: 'terapias', pilar: 'cuerpo', nombre: 'Terapias', precio: 1100, detalle: 'Reiki, reflexología, acupuntura, vendas calientes o piedras calientes' },
  { id: 'facial', pilar: 'cuerpo', nombre: 'Facial', precio: 1100, detalle: 'Limpieza profunda, hidratación o lifting' },
  { id: 'dermapen', pilar: 'cuerpo', nombre: 'Dermapen', precio: 1900, detalle: 'Tratamiento con microneedling' },
  { id: 'peeling', pilar: 'cuerpo', nombre: 'Peeling', precio: 3000, detalle: 'Tratamiento facial' },
  { id: 'yoga', pilar: 'cuerpo', nombre: 'Yoga, 10 clases', precio: 2000, detalle: 'Paquete "Yoga a tu ritmo" para usar en 3 meses, en cualquier horario; incluye una sesión de meditación' },
  { id: 'psicologia', pilar: 'mente', nombre: 'Psicología', precio: 1300, detalle: 'Clínica, integrativa y transpersonal; procesos individuales y de pareja' },
  { id: 'tanatologia', pilar: 'mente', nombre: 'Tanatología', precio: 1000, detalle: 'Acompañamiento en la pérdida de un ser querido' },
  { id: 'coaching', pilar: 'mente', nombre: 'Coaching', precio: 1000, detalle: 'Acompañamiento uno a uno para alcanzar metas' },
  { id: 'mindfulness', pilar: 'mente', nombre: 'Taller Mindfulness', precio: 1800, detalle: '8 sesiones semanales de hora y media, con Mercedes Domínguez' },
  { id: 'ikigai', pilar: 'mente', nombre: 'Taller Propósito de Vida', precio: 1100, detalle: 'Metodología japonesa Ikigai, con Claudia García' },
  { id: 'karmica', pilar: 'espiritu', nombre: 'Sanación kármica', precio: 1200, detalle: 'Sesiones para armonizar y liberar huellas emocionales' },
  { id: 'armonizacion', pilar: 'espiritu', nombre: 'Armonización energética', precio: 1800, detalle: 'Terapia para alinear chakras' },
  { id: 'angeloterapia', pilar: 'espiritu', nombre: 'Angeloterapia', precio: 1400, detalle: 'Rituales, meditaciones y ejercicios para conectar con los ángeles' },
  { id: 'meditacion', pilar: 'espiritu', nombre: 'Meditación', precio: null, detalle: 'Clases con Rosy García, grupos de máximo 15 personas' },
  { id: 'respiracion', pilar: 'espiritu', nombre: 'Respiración', precio: null, detalle: 'Clases con Claudia García, grupos de máximo 9 personas' },
  { id: 'tarot', pilar: 'espiritu', nombre: 'Tarot', precio: null, detalle: 'Lecturas: reflexión y autoconocimiento con un lenguaje simbólico' },
];

export const clases = {
  texto: 'Únete a nuestras clases de Yoga, Meditación y Respiración. Tenemos horarios matutinos y vespertinos. Nuestros grupos son pequeños de máximo 9 personas, con el propósito de que nuestras instructoras puedan guiarte y así ofrecer un servicio personalizado.',
  yoga: 'Hatha, Vinyasa y Ashtanga, con Claudia García y Ariadna de la Cruz.',
  horario: 'Lunes a viernes de 8:30 a 9:30 am y de 8:00 a 9:00 pm',
  paquetes: [
    { nombre: '10 clases', precio: '$2,000' },
    { nombre: '20 clases', precio: '$3,795' },
    { nombre: '25 clases', precio: '$3,975' },
    { nombre: 'Yoga + Meditación', precio: '$2,550 al mes', nota: 'Dos clases de yoga por semana y una de meditación al mes' },
  ],
  notaPaquetes: 'Los paquetes se pueden ejercer en un lapso de 3 meses en cualquiera de los horarios disponibles, y en todos se obsequia una sesión de meditación.',
};

export const membresias = [
  { nombre: 'Premium', precio: '$389 al mes o $3,999 al año', incluye: ['1 clase de yoga al mes', '10% de descuento en faciales y masajes', '1 invitado al mes a clase de yoga', '50% en un taller al mes'] },
  { nombre: 'Platinum', precio: '$699 al mes o $6,399 al año', incluye: ['1 clase de yoga al mes', '1 masterclass de meditación al año', '15% de descuento en faciales y masajes', 'Acceso gratuito a dos talleres al año'] },
];

export const equipo = [
  { nombre: 'Claudia García', rol: 'Socia fundadora, Coach Wellness, instructora de yoga y meditación' },
  { nombre: 'Lucía García', rol: 'Socia fundadora, experta en herbolaria' },
  { nombre: 'Rosario García', rol: 'Guía de meditación con 17 años de experiencia' },
  { nombre: 'Ariadna de la Cruz', rol: 'Instructora de Hatha Yoga, certificada en India' },
  { nombre: 'Mercedes Domínguez', rol: 'Psicoterapeuta Gestalt e instructora de Mindfulness' },
  { nombre: 'Haydee Mancilla', rol: 'Psicóloga clínica y psicoterapeuta integrativa' },
  { nombre: 'Angélica López', rol: 'Terapeuta en acupuntura y masajista, 18 años de experiencia' },
  { nombre: 'Isabel Apanco', rol: 'Cosmetóloga certificada' },
];
