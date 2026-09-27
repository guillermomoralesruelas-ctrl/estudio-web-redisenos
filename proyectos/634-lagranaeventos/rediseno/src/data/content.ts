// Contenido de La Grana Eventos, tomado del sitio original: investigacion/crudo.json (Inicio, Paquetes, Galería,
// Ubicación y Contacto). Nada inventado; lo redactado por nosotros (títulos, microcopy, textos del plano) está
// declarado en CAMBIOS.md. Las rutas de imagen son relativas a publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'La Grana Eventos',
  // Publica tres celulares y ningún WhatsApp; se usa el de "¡Llámanos!" para WhatsApp (pendiente de confirmar).
  whatsapp: '523312272774',
  telefonos: [
    { visible: '33 1227 2774', tel: '+523312272774' },
    { visible: '33 1047 9460', tel: '+523310479460' },
    { visible: '33 2183 3491', tel: '+523321833491' },
  ],
  direccion: ['Prol. Mariano Otero 4281', 'Fracc. El Fortín', 'C.P. 45066, Zapopan, Jal.'],
  // Coordenadas del mapa de su página Ubicación.
  mapa: 'https://www.google.com/maps/search/?api=1&query=20.6209203%2C-103.4750816',
  facebook: 'https://www.facebook.com/La-GRANA-Terraza-Jardin-271753906294356/',
  instagram: 'https://www.instagram.com/lagranaeventos/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, vi su página y quiero informes para un evento en La Grana.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  lagoPuente: f('lago-puente', 1280, 960, 'Lago con puente de herrería y rocas, con el Bosque de La Primavera detrás'),
  puenteAtardecer: f('puente-atardecer', 1280, 960, 'Puente sobre el lago al atardecer, con pérgolas y pinos al fondo'),
  pista: f('pista-madera-cristal', 1280, 960, 'Pista de baile de madera con cristal en el jardín, con cortinas y equipo de sonido'),
  jardin: f('jardin-pergolas', 1280, 960, 'Jardín de pasto con pérgolas de tela blanca frente al bosque'),
  bodaNoche: f('boda-noche', 1280, 960, 'Boda de noche en el jardín con series de luces, toldos y letras gigantes'),
  arco: f('arco-bienvenidos', 960, 717, 'Arco de herrería con letrero de Bienvenidos y un toldo blanco en el jardín'),
  glorieta: f('glorieta-ingreso', 960, 717, 'Glorieta de ingreso con plantas y toldos, con el bosque detrás'),
  novios: f('novios', 1600, 886, 'Pareja de novios abrazados en el jardín'),
};

// Paquetes, tal cual su página /paquetes/ (enero de 2026).
export type Paquete = {
  id: 'basico' | 'basicoPlus' | 'todo' | 'todoPlus' | 'premium';
  nombre: string;
  precio: string;
  cobro: 'fijo' | 'persona';
  monto: number;
  desde: boolean;
  horas: number;
  minimo?: number;
  maximo?: number;
  dias?: string;
  toldo: string | null; // lo que dice el paquete
  pista: number | null; // lado de la pista en metros
  incluye: string[];
};

export const paquetes: Paquete[] = [
  {
    id: 'basico', nombre: 'Paquete Básico', precio: '$10,000', cobro: 'fijo', monto: 10000, desde: false, horas: 5, maximo: 80,
    dias: 'Lunes a jueves, horario vespertino y hasta las 8:00 pm', toldo: null, pista: null,
    incluye: ['5 horas de evento', '2 tablones rectangulares con mantelería', '8 mesas redondas para 10 personas cada una', '80 sillas acojinadas', 'Mantelería blanca y cubremanteles a elegir', 'Cocineta con parrilla, refrigerador y hielera', 'Personal de limpieza en baños', 'Implementos para baño', '1 brincolín inflable'],
  },
  {
    id: 'basicoPlus', nombre: 'Básico Plus', precio: '$450 p/p', cobro: 'persona', monto: 450, desde: false, horas: 5, minimo: 100,
    toldo: 'Toldo árabe iluminado (12×18)', pista: null,
    incluye: ['Renta de la terraza por 5 horas', 'Toldo árabe iluminado (12×18)', 'Mobiliario de lujo: silla Tiffany o AvantGarde o combinadas, mesa redonda o cuadrada', 'Vaso de cristal', 'Mantelería blanca y cubremantel a elegir', 'Hielo y refresco ilimitado por 5 horas', 'Meseros (un mesero cada 25 personas)', 'Personal de seguridad en ingreso', 'Personal de limpieza', 'Insumos para baños: jabón, toallas y papel', '2 brincolines inflables'],
  },
  {
    id: 'todo', nombre: 'Todo Incluido', precio: 'desde $790 p/p', cobro: 'persona', monto: 790, desde: true, horas: 5, minimo: 100,
    toldo: 'Toldo árabe iluminado (de acuerdo al número de invitados)', pista: 5,
    incluye: ['Renta de la terraza por 5 horas', 'Toldo árabe iluminado (de acuerdo al número de invitados)', 'Mobiliario de lujo: Tiffany o AvantGarde o combinada, mesa redonda o cuadrada', 'Cristalería (vaso de cristal, plato de cerámica y cubiertos)', 'Mantelería blanca y cubremantel a elegir', 'Refresco y hielo ilimitado por 5 horas', 'Banquete de 1 tiempo y 2 acompañamientos (a escoger de su menú)', '1 mesero por cada 25 personas', 'Música tipo luz y sonido: bocinas premium, luces robóticas, máquina de humo, rayo láser, cabina iluminada y dos pantallas planas', 'Pista iluminada de 5×5 m, de acrílico con leds o de madera con cristal', '1 coordinador de evento', 'Personal de seguridad en ingreso y de limpieza', 'Implementos para baños: jabón, toallas y papel', '2 brincolines inflables'],
  },
  {
    id: 'todoPlus', nombre: 'Todo Incluido Plus', precio: 'desde $990 p/p', cobro: 'persona', monto: 990, desde: true, horas: 5, minimo: 100,
    toldo: 'Toldo árabe iluminado (de acuerdo al número de invitados)', pista: 6,
    incluye: ['Renta de la terraza por 5 horas', 'Toldo árabe iluminado (de acuerdo al número de invitados)', 'Montaje de ceremonia civil (pérgola de madera vestida)', 'Letras gigantes de LOVE o de XV AÑOS', 'Mesa de lujo y sillones para novios o XV años', 'Mobiliario de lujo: silla Tiffany, AvantGarde o combinadas', 'Cristalería (copa y vaso de cristal, plato de cerámica, cubiertos)', 'Mantelería blanca, cubremantel a elegir y servilleta de tela', 'Refresco y hielo ilimitado por 5 horas', 'Banquete de 2 tiempos y 2 acompañamientos', 'Mesa de postres (candy bar)', '1 mesero por cada 20 personas', 'Música tipo luz y sonido', 'Pista iluminada de 6×6 m', 'Artículos de animación para los invitados en pista', '1 coordinador de evento', 'Seguridad, limpieza e implementos para baños', '2 brincolines inflables'],
  },
  {
    id: 'premium', nombre: 'Todo Incluido Premium', precio: 'desde $1,300 p/p', cobro: 'persona', monto: 1300, desde: true, horas: 6, minimo: 100,
    toldo: 'Toldo árabe iluminado (de acuerdo al número de invitados)', pista: 6,
    incluye: ['Renta de la terraza por 6 horas', 'Toldo árabe iluminado (de acuerdo al número de invitados)', 'Montaje de ceremonia civil (pérgola de madera vestida)', 'Letras gigantes de LOVE o de XV AÑOS', 'Mesa de lujo y sillones para novios o XV años', 'Mobiliario de lujo y mesas de lujo en madera color nogal', 'Cristalería, mantelería, servilleta de tela y plato base de mimbre', 'Refresco y hielo ilimitado por 6 horas', 'Banquete de 2 tiempos y 2 acompañamientos', 'Mesa de postres (candy bar)', '1 mesero por cada 20 personas', 'Música tipo luz y sonido', 'Pista iluminada de 6×6 m', '100 velas flotantes', '2 pérgolas de madera vestidas en el jardín y 2 salas lounge', 'Arreglos florales (centros de mesa)', 'Iluminación arquitectónica en el área de bosque', '1 coordinador de evento', 'Seguridad, limpieza e implementos para baños', '2 brincolines inflables'],
  },
];

export const extrasBasico = ['Hora extra $2,000', 'Mesero $600 c/u', 'Persona extra $250', 'Mesa con 10 sillas $1,000'];

export const eventosGrandes = ['Bodas', 'Bautizos', 'XV Años', 'Primeras Comuniones', 'Aniversarios', 'Graduaciones'];
export const eventosIntimos = ['Comidas', 'Fiestas infantiles', 'Baby Showers', 'Cumpleaños', 'Despedidas de Soltera'];

export const preguntas = [
  { p: '¿Qué tipo de evento puedo hacer en La Grana?', r: 'En La Grana Eventos puedes hacer cualquier tipo de evento social o empresarial.' },
  { p: '¿Debo pagar por adelantado?', r: 'Sí, su evento debe de estar cubierto al 100% mínimo 48 horas antes de la fecha pactada.' },
  { p: '¿Tienen algún tipo de oferta o descuento?', r: 'Sí. Manejamos tarifas especiales para días entre semana. Revise nuestros paquetes.' },
];
