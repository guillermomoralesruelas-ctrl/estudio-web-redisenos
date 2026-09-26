// Contenido de Invino Cava & Copeo (San Pedro Garza García, Nuevo León). https://invino.com.mx/ (tienda Shopify "Invinomx").
// Textos copiados de investigacion/crudo.json: inicio, /collections/todos-los-productos, vino tinto, blanco y rosado.
// Se recortaron, se quitaron las mayúsculas de adorno ("SOMOS INVINO", "BEST SELLERS") y se corrigieron erratas
// ("pretenciones" por "pretensiones", "se encuéntra" por "se encuentra", "via whatsapp" por "vía WhatsApp", "Regalale" por "Regálale").
// Textos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-26 (ver CAMBIOS.md):
//   - /pages/winebar: wine & coffee bar, dirección, más de 100 etiquetas, OpenTable (rid=1432354), Star Wine List, renta del winebar;
//   - /pages/cata-winebar y /products/cata-a-ciegas1: cata presencial, Cata a ciegas, preguntas frecuentes y certificado;
//   - /pages/cata-online: Cata en Línea, cómo funciona, qué incluye y preguntas frecuentes;
//   - /pages/vino-historias: David Zárate y la consultoría Vinohistorias;
//   - /products.json (catálogo público): fichas, precios y disponibilidad de los vinos (vinos.json), la etiqueta personalizada,
//     los paquetes de regalo y la Gift Card;
//   - /blogs/news/bienvenido-a-invino (extracto que ya sale en el inicio): "El 18 de febrero de 2008…".
// Lo nuevo (títulos, botones, textos de "¿Qué vas a servir?" y mensajes de WhatsApp) está en CAMBIOS.md → "Qué se agregó".

import datosVinos from './vinos.json';

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

export const TIENDA = 'https://invino.com.mx';
export const producto = (handle: string) => `${TIENDA}/products/${handle}`;

/** Enlace del botón "Reserva tu mesa" de /pages/winebar (lo pone su sitio tal cual). */
export const OPENTABLE = 'https://www.opentable.com.mx/restref/client/?rid=1432354';

/** WhatsApp: el número que su página de catas llama "nuestro whatsapp" (81-1018-3565), el mismo del "RSVP" del cartel
 *  de la Cata a ciegas y del "Contáctanos" de la renta del winebar. El botón flotante del sitio usa otro (81 2602 0119,
 *  "Tanino, Atención al Cliente"): pendiente de confirmar cuál prefieren (CAMBIOS.md). */
export const WA = '528110183565';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, les escribo desde su sitio web.';

export const negocio = {
  nombre: 'Invino Cava & Copeo',
  cinta: 'Envío gratis a todo México en compras mayores a $1,299 MXN',
  direccion: { calle: 'Río Tamazunchale #305-A', colonia: 'Del Valle', cp: '66220', ciudad: 'San Pedro Garza García, N. L.' },
  telefono: '81 1018 3565',
  tel: 'tel:+528110183565',
  whatsapp: wa(`${saludo} Quiero información de Invino Cava & Copeo.`),
  // Búsqueda por nombre y dirección: el sitio no enlaza Google Maps ni tiene mapa.
  mapa: 'https://www.google.com/maps/search/?api=1&query=Invino+Cava+%26+Copeo%2C+R%C3%ADo+Tamazunchale+305-A%2C+Del+Valle%2C+San+Pedro+Garza+Garc%C3%ADa',
  facebook: 'https://www.facebook.com/invinomx',
  instagram: 'https://www.instagram.com/invinomx/',
  starWineList: 'https://starwinelist.com/wine-place/invino',
  logo: f('logo-blanco', 520, 362, 'Invino'),
};

export const portada = {
  titulo: 'Una experiencia única con vino sin pretensiones',
  texto: 'Somos un wine & coffee bar en San Pedro Garza García, donde el vino se disfruta sin reglas.',
  foto: f('winebar-barra', 1800, 1200, 'El bartender de Invino sirve detrás de la barra, bajo el letrero de neón amarillo con el sacacorchos de la marca y los anaqueles llenos de botellas'),
};

export const winebar = {
  titulo: 'Aquí no hay protocolos',
  textos: [
    'Además de poder disfrutar de vino y café durante todo el día, tenemos catas, maridajes y eventos especiales privados y públicos.',
    'En Invino Cava y Copeo puedes probar, descubrir y compartir más de 100 etiquetas por copa y por botella, acompañadas de buena comida, buena música y mejores conversaciones.',
  ],
  cierre: 'Aquí no hay protocolos, solo el placer de brindar y sentirse en casa.',
  foto: f('tabla-y-copa', 1300, 650, 'Una tabla de carnes frías, quesos y frutos secos junto a una copa de vino tinto sobre una barra de piedra'),
  starTitulo: 'La "guía Michelin" del vino nos tiene en su mapa',
  starTexto: 'Estar en Star Wine List significa que en nuestro winebar nuestros vinos, nuestra selección y la experiencia que ofrecemos cumplen los estándares que los mejores sommeliers del mundo esperan encontrar. Para quien viaja y sabe de vino, esta guía es la primera parada antes de llegar a una ciudad nueva.',
  starFoto: f('winebar-star-wine-list', 1300, 866, 'El interior del winebar de Invino, con la barra, los bancos altos y el letrero de neón, junto al distintivo rojo de Star Wine List'),
  citas: [
    { texto: 'Right in Centrito Valle, we found one of the friendliest bars in Monterrey. A small hideaway for wine lovers.', autor: 'Manuel Negrete', medio: 'Star Wine List', idioma: 'en', traduccion: 'En pleno Centrito Valle encontramos uno de los bares más amables de Monterrey. Un pequeño refugio para los amantes del vino.' },
    { texto: '…or check out Monterrey-based importer Invino and their Chef’s Selection series with leading Mexican chefs and sommeliers.', autor: 'Jancis Robinson', medio: '', idioma: 'en', traduccion: '…o busca a Invino, importador de Monterrey, y su serie Chef’s Selection con destacados chefs y sommeliers mexicanos.' },
    { texto: 'Consumidor, bodeguero e importador… al hablar del tema, David Zárate tiene la ventaja de una visión de 360 grados. En Centrito Valle se encuentra la puerta de cristal que conduce a este espacio donde la carta por botella y copeo es la misma. Sí, todo puede probarse.', autor: 'Teresa Rodríguez', medio: 'Buena Mesa Reforma', idioma: 'es' },
  ],
  renta: {
    titulo: 'Renta nuestro winebar',
    antes: '¿Tienes un evento especial en mente?',
    texto: 'Renta nuestro wine bar de forma exclusiva y ofrece a tus invitados una noche diferente, con el ambiente, los vinos y la atención que se merecen.',
    mensaje: `${saludo} Quiero información para rentar el winebar para un evento.`,
  },
};

// ---------- Catas ----------
/** Próxima cata publicada (/products/cata-a-ciegas1). Fecha y hora de Monterrey. */
export const cataCiegas = {
  nombre: 'Cata a ciegas',
  handle: 'cata-a-ciegas1',
  precio: 990,
  fechaTexto: '30 de septiembre de 2026, 8:00 pm',
  fechaISO: '2026-09-30T20:00:00-06:00',
  lugar: 'Invino Cava y Copeo',
  incluye: '3 copas y acompañamientos',
  cupo: 'Cupo limitado',
  textos: ['Prueba tres vinos, sin prejuicios y sin usar la vista.', 'Tres vinos para que te sorprendas; esta es nuestra cata a ciegas.'],
  foto: f('cata-a-ciegas', 720, 900, 'Cartel de la Cata a ciegas de Invino: una mujer con los ojos vendados sostiene una copa de vino tinto; dice "Sep 30, 8 pm, 3 copas + aperitivos, $990"'),
};

export const catas = {
  titulo: 'Hay experiencias que se viven mejor en persona',
  frase: 'Sin pretensiones, con mucho sabor.',
  texto: 'En Invino Cava y Copeo te esperamos para una cata íntima y guiada, donde nuestros expertos te llevan de la mano por una selección de vinos en un espacio diseñado para que cada sorbo cuente.',
  foto: f('copas', 1032, 688, 'Una mano sostiene una copa de vino tinto junto a otras dos copas servidas, con luz cálida sobre una mesa oscura'),
  privada: {
    pregunta: '¿Puedo reservar una cata privada para un grupo?',
    respuesta: 'Sí. Podemos organizar una sesión exclusiva para tu grupo. Escríbenos por WhatsApp para coordinar los detalles.',
    mensaje: `${saludo} Quiero organizar una cata privada para un grupo.`,
  },
  certificado: 'Al finalizar tu cata de vinos recibes un certificado que reconoce tu asistencia y participación: impreso en la cata presencial y digital en la cata en línea.',
  preguntas: [
    { p: '¿Dónde se realizan las catas?', r: 'En Invino Cava y Copeo, nuestro wine bar en Río Tamazunchale 305-A, en San Pedro Garza García. Un espacio íntimo y acogedor diseñado para vivir el vino de otra manera.' },
    { p: '¿Necesito saber de vinos para asistir?', r: 'No es necesario. Nuestras catas están pensadas para todos los niveles. Nuestros expertos adaptan la sesión para que tanto principiantes como amantes del vino disfruten y aprendan por igual.' },
    { p: '¿Las catas son siempre del mismo tema o varían?', r: 'Cada cata tiene una temática diferente: por región, variedad, estilo o maridaje.' },
  ],
};

export const cataEnLinea = {
  nombre: 'Cata en Línea',
  handle: 'cata-en-linea',
  precio: 6000,
  titulo: 'Desde la comodidad de tu casa',
  texto: 'Solo, con tu pareja o tus amigos. Crea una experiencia que los una a distancia y los transporte a otro lugar, sin salir del comedor.',
  descripcion: 'Recibe en casa dos vinos cuidadosamente seleccionados por David, junto con tu kit de cata completo. Luego conéctate en vivo: durante una hora, David te guía copa a copa por aromas, texturas y sabores que quizás nunca habías notado. No necesitas saber de vinos para disfrutarlo; solo traer curiosidad y ganas de aprender.',
  pasos: [
    { titulo: 'Compra tu cata', texto: 'Elige la fecha y hora de tu cata, agrégala al carrito y reserva tu lugar. Tú decides cuándo y con quién vivirla.' },
    { titulo: 'Recibe en casa', texto: 'Te enviamos las botellas seleccionadas y tu kit de cata completo. Solo prepara las copas y la música.' },
    { titulo: 'Conéctate y descorcha', texto: 'Únete a la sesión en vivo con nuestro experto, abre tus vinos y déjate llevar. Él se encarga de guiarte copa a copa.' },
  ],
  incluye: ['2 botellas de vino', 'Mantel de cata', 'Certificado de cata', '1 hora de sesión en vivo por Zoom con David', 'Envío express incluido'],
  notas: [
    'Cómprala de 3 a 4 días hábiles antes, para recibir el kit con al menos un día de anticipación y que los vinos reposen antes de la sesión.',
    'Cada kit es para 2 personas. Si son varias personas en distintas ubicaciones, cada quien necesita su propio kit.',
    'Es un regalo perfecto: al finalizar tu compra puedes indicarnos que es para alguien más y te ayudamos con los detalles.',
  ],
};

// ---------- ¿Qué vas a servir? ----------
export type Vino = (typeof datosVinos.vinos)[number] & { burbujas?: boolean };
export const vinos: Vino[] = datosVinos.vinos;

/** Opciones agrupadas a partir del "Maridaje" de cada ficha (vinos.json → platillos). */
export const platillos = [
  { id: 'mar', nombre: 'Pescados, mariscos y ceviche', corto: 'pescados, mariscos o ceviche' },
  { id: 'ensaladas', nombre: 'Ensaladas', corto: 'ensaladas' },
  { id: 'quesos', nombre: 'Quesos y carnes frías', corto: 'quesos o carnes frías' },
  { id: 'carnes', nombre: 'Carnes rojas y cortes', corto: 'carnes rojas o cortes' },
  { id: 'aves', nombre: 'Cerdo, cordero, pato y aves', corto: 'cerdo, cordero, pato o aves' },
  { id: 'pastas', nombre: 'Pastas', corto: 'pastas' },
  { id: 'guisos', nombre: 'Guisos, moles y cazuelas', corto: 'guisos, moles o cazuelas' },
  { id: 'asiatica', nombre: 'Comida asiática', corto: 'comida asiática' },
  { id: 'postres', nombre: 'Postres y fruta', corto: 'postres o fruta' },
  { id: 'solo', nombre: 'Nada, solo la copa', corto: 'solo la copa' },
] as const;
export type PlatilloId = (typeof platillos)[number]['id'];

export const tienda = {
  envio: 'Envíos express gratis a todo México en compras mayores a $1,299 MXN.',
  asesoria: 'Te asesoramos vía WhatsApp en tu compra para que llegues a tu vino ideal.',
  pagos: 'Utilizamos plataformas de pago 100% seguras y cifradas.',
};

// ---------- Regalos ----------
export const etiqueta = {
  nombre: 'Etiqueta Premium de Vino Personalizada',
  handle: 'etiqueta-premium-personalizada',
  precio: 450,
  texto: 'Convierte una botella de vino en un recuerdo que no se olvida. Elige tu vino favorito, personaliza la etiqueta con el nombre, fecha o mensaje que quieras, y nosotros nos encargamos del resto.',
  // Opciones de la tienda: "Celebración", "Diseño" (1 a 4 según la celebración) y "Foil" (dorado o plateado).
  celebraciones: [
    { nombre: 'Aniversario', disenos: 4 }, { nombre: 'Cumpleaños', disenos: 4 }, { nombre: 'Bodas y civiles', disenos: 2 },
    { nombre: 'Padrinos', disenos: 4 }, { nombre: 'Graduaciones', disenos: 2 }, { nombre: 'Anillos', disenos: 3 },
  ],
  nota: 'No olvides agregar a tu carrito el vino en el que quieres la etiqueta. El tiempo de entrega es de 3 a 4 días hábiles.',
  foto: f('botella-personalizada', 666, 1000, 'Una botella de vino tinto con etiqueta personalizada color crema y letras doradas, bajo el letrero de neón de Invino'),
};

export const paquetes = {
  titulo: 'Paquetes de regalo',
  nota: 'Se puede seleccionar otro vino y otro tipo de empaque bajo pedido. La presentación de algunos productos puede variar.',
  foto: f('caja-de-regalo', 666, 1000, 'Una caja de regalo de Invino abierta con una botella de vino tinto, embutidos empacados y una botella de aceite, junto a otra botella de tinto'),
  lista: [
    { nombre: 'Madrid', handle: 'madrid', precio: 535, incluye: ['Vino tinto Vacceos Tempranillo', 'Mango enchilado, 120 g', 'Caja de cartón "Brindemos"'] },
    { nombre: 'Ámsterdam', handle: 'amsterdam', precio: 815, incluye: ['Vino tinto Milflores Tempranillo', 'Tortuga de chocolate, 1 pieza', 'Jamón serrano, 100 g', 'Caja de cartón "Brindemos"'] },
    { nombre: 'Monterrey', handle: 'monterrey-1', precio: 850, incluye: ['Vino tinto Padrillos Malbec', 'Mango enchilado, 120 g', 'Guayaba enchilada, 120 g', 'Nuez de la India tostada con romero, 120 g', 'Caja de cartón "Brindemos"'] },
    { nombre: 'Londres', handle: 'londres-1', precio: 1000, incluye: ['Vino tinto Padrillos Malbec', 'Tortuga de chocolate, 1 pieza', 'Chorizo de Salamanca, 100 g', 'Jamón serrano, 100 g', 'Caja de cartón "Brindemos" para unboxing'] },
    { nombre: 'París', handle: 'paris', precio: 1060, incluye: ['Vino tinto Glorioso Crianza Tempranillo', 'Tortugas de chocolate, 4 piezas', 'Nuez de la India tostada con romero, 120 g', 'Jamón serrano reserva, 100 g', 'Caja de cartón "Brindemos"'] },
    { nombre: 'Capri', handle: 'capri2', precio: 1435, incluye: ['Vino tinto Glorioso Crianza Tempranillo', 'Salsa Mava, 1 pieza', 'Café blend molido para filtro, 250 g', 'Mango enchilado, 120 g', 'Jamón serrano, 100 g', 'Almendra con chocolate, 150 g', 'Bombones T-Bites, 4 piezas', 'Caja de cartón "Brindemos"'] },
  ],
};

export const giftCard = {
  handle: 'gift-card',
  valores: [100, 200, 300, 500, 600, 1000],
  texto: '¿Ni idea de cuál es el vino que le gusta? Regálale la opción con una Gift Card de Invino. Se manda por correo con instrucciones para usarla al pagar; si quieres además la tarjeta física, menciónalo en tu compra e incluye tu dirección.',
  otraCantidad: '¿No está la cantidad que te gustaría regalar? Escríbenos.',
};

// ---------- Vinohistorias y consultoría ----------
export const vinohistorias = {
  titulo: 'Detrás de cada recomendación hay una historia',
  origen: 'El 18 de febrero de 2008 comenzamos a soñar que un vino podía lograrse con una buena amistad entre dos países, y tres amigos.',
  david: [
    'David Zárate, nuestro fundador, es sommelier certificado WSET Nivel 3, emprendedor y una de las voces más influyentes del vino en México. Antes que cualquier título, es alguien que genuinamente cree que el vino es una puerta de entrada a culturas, paisajes y momentos que no se olvidan.',
    'Ha sido juez del Concurso Mundial de Bruselas y fue nominado entre los 50 mejores influencers de vino del mundo.',
  ],
  somos: 'Transformamos cada copa en una experiencia y te acompañamos en todo el camino. Ofrecemos soluciones completas de vino para negocios y particulares, desde venta, capacitación y asesoría hasta catas y maridajes en casa o en línea.',
  servicios: [
    { titulo: 'Comunicación y contenido', texto: 'Estrategias digitales y presenciales, contenido para marcas de vino, gastronomía y turismo, embajaduría y educación de marca.' },
    { titulo: 'Experiencias, eventos y catas', texto: 'Catas, viajes enoturísticos, eventos corporativos e integración de equipos, además de alianzas comerciales para experiencias únicas.' },
    { titulo: 'Consultoría especializada', texto: 'Asesoría comercial, creación de cartas de vino, capacitaciones para restaurantes, hoteles y cafeterías (el canal HORECA) y focus groups para evaluar productos.' },
  ],
  trayectoria: 'Con más de 15 años de trayectoria, acompañamos a marcas, hoteles, restaurantes y productores a contar mejor lo que hacen.',
  instagram: 'https://www.instagram.com/vinohistorias/',
  mensaje: `${saludo} Quiero información de la consultoría de vino para mi negocio.`,
};

export const politicas = [
  { texto: 'Política de privacidad', href: `${TIENDA}/policies/privacy-policy` },
  { texto: 'Política de devoluciones', href: `${TIENDA}/policies/refund-policy` },
  { texto: 'Términos y condiciones', href: `${TIENDA}/policies/terms-of-service` },
  { texto: 'Blog', href: `${TIENDA}/blogs/news` },
];
