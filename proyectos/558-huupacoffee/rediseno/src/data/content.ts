// Contenido de Huupa Coffee (Hermosillo, Sonora). https://huupa.coffee/ (tienda Shopify).
// Textos copiados de investigacion/crudo.json: inicio, /collections/cafe-mexicano, /collections/tazas-coyotas-y-cafeteras,
// /collections/kits-de-regalo y /pages/proceso ("La diferencia"). Se recortaron y se corrigieron erratas
// ("transformació n" por "transformación", "Atitlán,dan" por "Atitlán, dan", "amigablecon" separado, "cafecero" por "cafesero",
// "a roma" y "c autivador" de las fichas, mayúsculas de adorno como "Granos Seleccionados a Mano por Expertos").
// Textos que NO están en crudo.json, tomados del sitio real con curl el 2026-09-26 (ver CAMBIOS.md):
//   - fichas de producto (/products/<handle>.js): origen, finca, productor, altura, variedad, proceso, notas, tamaños,
//     moliendas, precios, disponibilidad y variantes (precios y variantes en cafes.json);
//   - /pages/contacto: dirección, horario y enlace del mapa;
//   - /policies/shipping-policy: costos y tiempos de envío;
//   - el WhatsApp del botón flotante del sitio (configuración pública de la app Carthike): +52 662 460 0099.
// Lo nuevo (títulos, botones, textos del selector de molienda y mensajes de WhatsApp) está en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

export const TIENDA = 'https://huupa.coffee';
export const producto = (handle: string, variante?: number) => `${TIENDA}/products/${handle}${variante ? `?variant=${variante}` : ''}`;

/** WhatsApp del botón flotante del sitio (app "WhatsApp abandoned cart" de Carthike). No está escrito en ninguna página:
 *  pendiente de confirmar con el cliente (CAMBIOS.md). */
export const WA = '526624600099';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const saludo = 'Hola, les escribo desde su sitio web.';

export const negocio = {
  nombre: 'Huupa Coffee',
  cinta: 'ENVÍO GRATIS en compras mayores de $840 MX',
  titulo: ['Café tostado en leña.', 'No cualquier leña.', 'No cualquier café.'],
  frase: 'Nos tomó tiempo encontrar los mejores granos y la leña de mezquite ideal para crear cafés extraordinarios.',
  datos: ['Envíos a todo México', 'Café recién tostado', 'En grano o molido'],
  direccion: { calle: 'C. Pino Suárez 90', zona: 'Centro', cp: '83000', ciudad: 'Hermosillo, Son.' },
  horario: 'Lunes a sábado, de 8:00 am a 7:00 pm',
  cerrado: 'Domingos cerrado',
  // Enlace "Ver Mapa" de /pages/contacto (abre la ficha "HUUPA Coffee" en Google Maps).
  mapa: 'https://maps.app.goo.gl/VwPHoVrKyk8TZ79d7',
  whatsappVisible: '662 460 0099',
  whatsapp: wa(`${saludo} Tengo una pregunta sobre sus cafés.`),
  contacto: `${TIENDA}/pages/contacto`,
  facturacion: `${TIENDA}/pages/facturacion`,
  envios: `${TIENDA}/policies/shipping-policy`,
  facebook: 'https://facebook.com/huupa.coffee',
  instagram: 'https://instagram.com/huupa.coffee',
  logo: f('logo', 203, 70, 'Huupa Coffee'),
  logoClaro: f('logo-claro', 203, 70, 'Huupa Coffee'),
  hero: f('taza-fogata-fuego', 960, 960, 'Taza de peltre blanca con el logo de Huupa sobre un tronco, junto al fuego'),
};

// ---------- Elemento memorable: "Molido para tu cafetera" ----------
// Las seis moliendas son las opciones "Molido" de cada café en la tienda (el texto entre comillas es el del sitio).
export type Molienda = { id: string; tienda: string; cafetera: string; grado: string; nivel: number; nota: string };
export const moliendas: Molienda[] = [
  { id: 'grano', tienda: 'Sin moler - EN GRANO', cafetera: 'En grano', grado: 'Sin moler', nivel: 0, nota: 'Para moler en casa, justo antes de preparar.' },
  { id: 'espresso', tienda: 'Para Cafetera de Espresso - FINO', cafetera: 'Espresso', grado: 'Fino', nivel: 1, nota: 'Para cafetera de espresso.' },
  { id: 'italiana', tienda: 'Para Cafetera Italiana - MEDIO FINO', cafetera: 'Italiana', grado: 'Medio fino', nivel: 2, nota: 'Para cafetera italiana (moka), la que va a la estufa.' },
  { id: 'colar', tienda: 'Para Cafeteras de Colar - MEDIO', cafetera: 'De colar', grado: 'Medio', nivel: 3, nota: 'Para las cafeteras que pasan el agua por un filtro: de goteo o de talega.' },
  { id: 'percoladora', tienda: 'Para Cafetera Percoladora - MEDIO GRUESO', cafetera: 'Percoladora', grado: 'Medio grueso', nivel: 4, nota: 'Para cafetera percoladora.' },
  { id: 'prensa', tienda: 'Para Prensa Francesa - GRUESO', cafetera: 'Prensa francesa', grado: 'Grueso', nivel: 5, nota: 'Para prensa francesa.' },
];

export type Tueste = 'Medio' | 'Medio oscuro' | 'Oscuro';
export type Cafe = {
  handle: string;
  nombre: string;
  linea: 'casa' | 'specialty';
  tueste: Tueste;
  origen: string;
  detalle?: string;
  notas: string;
  texto: string;
  foto: Foto;
};

// Datos de cada ficha de producto (/products/<handle>.js) y de la colección (filtros "Tueste" y "Origen").
export const cafes: Cafe[] = [
  {
    handle: 'huupa-clasico', nombre: 'Café Clásico', linea: 'casa', tueste: 'Medio oscuro',
    origen: 'Soconusco, Chiapas', detalle: 'Cosechado a 1,400 msnm',
    notas: 'Frutos secos y cacao. Cuerpo pleno, toques de nueces y acidez baja equilibrada.',
    texto: 'El más pedido por nuestros clientes.',
    foto: f('cafe-clasico', 800, 800, 'Bolsa naranja de Café Clásico Huupa, 250 g'),
  },
  {
    handle: 'huupa-premium', nombre: 'Café Premium', linea: 'casa', tueste: 'Medio oscuro',
    origen: 'Soconusco, Tapachula, Chiapas', detalle: 'Arábica de altura, 1,400 msnm',
    notas: 'Aroma dulce, con matices de frutos secos, almendras doradas y piloncillo.',
    texto: 'Café de altura, sabor suave y aroma dulce.',
    foto: f('cafe-premium', 800, 800, 'Bolsa naranja de Café Premium Huupa, 250 g'),
  },
  {
    handle: 'huupa-descafeinado', nombre: 'Café Descafeinado Natural', linea: 'casa', tueste: 'Medio oscuro',
    origen: 'Veracruz', detalle: 'Arábica de altura. Descafeinado con el proceso natural Mountain Water (agua de montaña), sin químicos',
    notas: 'Aroma vibrante con matices florales y frutales. Cuerpo suave y equilibrado, con notas a cacao, nueces y un toque sutil de cítricos.',
    texto: 'Café descafeinado con cuerpo y mejor sabor.',
    foto: f('cafe-descafeinado', 800, 800, 'Bolsa naranja de Café Descafeinado Natural Huupa, 250 g'),
  },
  {
    handle: 'huupa-intenso', nombre: 'Café Intenso', linea: 'casa', tueste: 'Oscuro',
    origen: 'Chiapas', detalle: 'Mezcla de Arábica y Robusta Romex',
    notas: 'Cacao y nuez. Cuerpo medio-alto, con un matiz sutilmente ahumado.',
    texto: 'Un café con más carácter.',
    foto: f('cafe-intenso', 800, 800, 'Bolsa naranja de Café Intenso Huupa, 250 g'),
  },
  {
    handle: 'huupa-extremo', nombre: 'Café Extremo', linea: 'casa', tueste: 'Oscuro',
    origen: 'Chiapas', detalle: '100% Robusta Romex, extra cafeína',
    notas: 'Un café extra cafeína y sabor fuerte. Recomendado también para preparar un café muy fuerte, tipo espresso.',
    texto: 'Úsalo en pequeñas cantidades. No apto para menores de edad.',
    foto: f('cafe-extremo', 800, 800, 'Bolsa naranja de Café Extremo Huupa, 250 g'),
  },
  {
    handle: 'specialty-bourbon-amarillo', nombre: 'Specialty: Bourbon Amarillo', linea: 'specialty', tueste: 'Medio',
    origen: 'Candelaria Loxicha, Oaxaca', detalle: 'Finca Chelín, Enrique López. 1,500 a 1,800 msnm. Proceso Hydro Honey',
    notas: 'Tamarindo, limón eureka, naranja verde, manzana roja, carambolo, granada y miel.',
    texto: 'Una taza compleja y sedosa, con un dulzor intenso y una acidez brillante y jugosa.',
    foto: f('specialty-bourbon-amarillo', 800, 800, 'Bolsa de Huupa Specialty Bourbon Amarillo, edición limitada'),
  },
  {
    handle: 'specialty-garnica-y-caturra', nombre: 'Specialty: Garnica y Caturra', linea: 'specialty', tueste: 'Medio',
    origen: 'Candelaria Loxicha, Oaxaca', detalle: 'Finca Chelín, Enrique López. Lavado y secado en patio al sol',
    notas: 'Fresa, grosella, carambolo, ciruela amarilla, manzana roja y limón eureka.',
    texto: 'Un café equilibrado, brillante y con un perfil lleno de sabor.',
    foto: f('specialty-garnica-caturra', 800, 800, 'Bolsa de Huupa Specialty Garnica y Caturra, edición limitada'),
  },
  {
    handle: 'specialty-manos-de-mujer-oaxaquena', nombre: 'Specialty: Manos de Mujer Oaxaqueña', linea: 'specialty', tueste: 'Medio',
    origen: 'Candelaria, San Pedro y San Agustín Loxicha, Pochutla, Oaxaca', detalle: 'Mujeres productoras con el maestro cafetalero Enrique López, de Finca Chelín. Variedad Pluma, lavado de 48 horas',
    notas: 'Vainilla, limón real, tamarindo, caramelo, limón, toronja y mandarina. Acidez cítrica y málica.',
    texto: 'Reconoce la participación de las mujeres que cultivan el café en sus comunidades.',
    foto: f('specialty-manos-de-mujer', 800, 800, 'Bolsa de Huupa Specialty Manos de Mujer Oaxaqueña, edición limitada'),
  },
  {
    handle: 'specialty-typica-y-bourbon-rojo', nombre: 'Specialty: Typica & Bourbon Rojo', linea: 'specialty', tueste: 'Medio',
    origen: 'Candelaria Loxicha, Oaxaca', detalle: 'Finca Chelín, Enrique López. Proceso natural',
    notas: 'Zarzamora, higo, carambolo, manzana roja, uva y granada.',
    texto: 'Una taza dulce, equilibrada y llena de sabor.',
    foto: f('specialty-typica-bourbon-rojo', 800, 800, 'Bolsa de Huupa Specialty Typica y Bourbon Rojo, edición limitada'),
  },
  {
    handle: 'specialty-bourbon-typica', nombre: 'Specialty: Bourbon Typica', linea: 'specialty', tueste: 'Medio',
    origen: 'Santiago Atitlán, Oaxaca', detalle: 'Microlote de Wilfrido Martínez. 1,500 msnm. Proceso Honey',
    notas: 'Manzana roja y arándano, notas de azúcar de caña. Sensación almibarada, acidez marcada.',
    texto: 'Una taza redonda y balanceada.',
    foto: f('specialty-bourbon-typica', 800, 800, 'Bolsa de Huupa Specialty Bourbon Typica, edición limitada'),
  },
  {
    handle: 'specialty-extraordinario-solok', nombre: 'Specialty Extraordinario: Solok', linea: 'specialty', tueste: 'Medio',
    origen: 'Solok, Sumatra (Indonesia)', detalle: 'Proceso black honey lavado. Pequeño lote: cada caja y cada bolsa están seriadas',
    notas: 'Un perfil expresivo y pulido, con la identidad marcada de los cafés de Sumatra.',
    texto: 'Solo se vende en grano.',
    foto: f('specialty-solok', 800, 800, 'Bolsa de Huupa Specialty Extraordinario Solok'),
  },
];

export const sampler = {
  handle: 'sampler-5-cafes',
  nombre: 'Huupa® Sampler: 5 cafés',
  texto: '¿No sabes cuál elegir? ¡Llévate todos! Clásico, Intenso, Extremo, Premium y Descafeinado Natural, en bolsas de 250 g, a un precio especial.',
  foto: f('sampler', 800, 800, 'Caja con las cinco bolsas del Huupa Sampler'),
};

// ---------- La diferencia (de /pages/proceso) ----------
export const diferencia = {
  titulo: 'El alma del mezquite, el poder del fuego y la magia del café. Todo en una taza.',
  lena: {
    titulo: 'Todo inicia con la leña',
    texto: 'La leña de mezquite del desierto de Sonora es considerada como una leña de alta gama que genera una calidad superior de fuego. Es una madera dura, densa, con alta calidad calorífica y mayor período de combustión. Este tipo de calor ayuda a sacar lo mejor de nuestros granos de café.',
  },
  puntos: [
    { titulo: 'Respeta la naturaleza', texto: 'Aquí en HUUPA® utilizamos solo leña de árbol seco. Nos gusta pensar que le damos una segunda vida al mezquite. Por su misma calidad, descubrimos que se requiere poca leña para tostar los granos.' },
    { titulo: 'Es auténtica', texto: 'La leña mantiene vivas nuestras tradiciones gastronómicas. Antes de la electricidad, antes del gas, existía la leña. Y, como dicen las etnias del desierto de Sonora: el mezquite tiene alma.' },
    { titulo: 'El tostado que hace la magia', texto: 'No toda la leña es igual y no toda la leña de mezquite es la misma. Hay niveles. Tostar café a la leña de mezquite de Sonora permite ajustar de manera más precisa la intensidad del calor y la duración de la exposición al fuego.' },
  ],
  nombre: 'El mezquite, o "hoohopam" en la lengua seri, no solo nos da nuestro nombre: define nuestro perfil de sabor.',
  fuego: f('fuego-de-mezquite', 960, 660, 'Leña de mezquite ardiendo en un horno de leña'),
  lenaFoto: f('lena-de-mezquite', 256, 256, 'Trozos de leña de mezquite'),
};

export const granos = {
  titulo: 'Solo granos de las mejores montañas cafetaleras de México',
  parrafos: [
    'Buscamos y cuidamos mucho la relación con pequeños cafetaleros de las montañas del sur de México. Ellos tienen la maestría y tradición heredada a través de generaciones. De ellos aprendimos cuáles son los granos indicados para transformarlos con leña de mezquite y darles ese sabor muy de HUUPA®.',
    'Descubrimos cómo los increíbles granos cultivados en nano y micro lotes, de forma muy personal, en regiones como Amatenango de la Frontera o Atitlán, dan cafés de altísima calidad y reconocimiento internacional.',
    'En las regiones cafetaleras de Veracruz aprovechamos la experiencia de su gente para extraer la cafeína de forma natural y amigable con la naturaleza, para crear un café descafeinado con cuerpo y mejor sabor.',
  ],
  regiones: [
    ['Soconusco, Chiapas', 'Clásico, Premium, Intenso y Extremo'],
    ['Loxicha, Oaxaca', 'Finca Chelín: Bourbon Amarillo, Garnica y Caturra, Typica & Bourbon Rojo y Manos de Mujer Oaxaqueña'],
    ['Santiago Atitlán, Oaxaca', 'Bourbon Typica, de Wilfrido Martínez'],
    ['Veracruz', 'Descafeinado Natural'],
  ],
  foto: f('manos-de-mujer-cafetal', 900, 900, 'Manos sosteniendo una bolsa de Huupa Specialty Manos de Mujer Oaxaqueña en un cafetal'),
};

// ---------- Accesorios y antojos (de /collections/tazas-coyotas-y-cafeteras y sus fichas) ----------
export const accesoriosIntro = 'Logra mejores extracciones, sabores, notas y texturas con nuestras cafeteras. Disfruta más el sabor con nuestras tazas y termos. Complementa tu experiencia con los sabores de nuestras coyotas horneadas en leña y el caramelo de rancho.';
export type Accesorio = { handle: string; nombre: string; precio: string; detalle: string; foto?: Foto };
export const accesorios: Accesorio[] = [
  { handle: 'cafetera-italiana-edicion-especial', nombre: 'Cafetera italiana edición especial', precio: '$932', detalle: '300 ml, en naranja Huupa. La de 150 ml ($723) está agotada.', foto: f('cafetera-italiana', 700, 700, 'Cafetera italiana naranja de Huupa sobre la estufa') },
  { handle: 'cafetera-talega', nombre: 'Cafetera de Talega', precio: '$633', detalle: 'Mini de 600 ml, en blanco, negro o azul. La de 2 L ($872) está agotada.', foto: f('cafetera-talega', 700, 700, 'Café colándose en una talega de tela sobre una cafetera de peltre') },
  { handle: 'prensa-francesa', nombre: 'Prensa Francesa', precio: '$993', detalle: '1 L / 34 oz, acero inoxidable 304 de doble pared.', foto: f('prensa-francesa', 700, 700, 'Prensa francesa naranja con dos tazas pequeñas junto a una fogata') },
  { handle: 'molino-manual-de-muescas', nombre: 'Molino Manual de Muescas', precio: '$1,823', detalle: 'Cuchillas de acero inoxidable y 52 clics de ajuste, desde espresso hasta prensa francesa.', foto: f('molino-manual', 700, 700, 'Molino manual negro de Huupa sobre una mesa de madera') },
  { handle: 'termo-huupa', nombre: 'Termo Huupa', precio: '$392', detalle: 'Naranja, 14 oz (414 ml). Caliente hasta 6 horas y frío hasta 12. Antes $492.', foto: f('termo', 700, 700, 'Termo naranja de Huupa') },
  { handle: 'taza-peltre-360-ml', nombre: 'Taza Peltre', precio: '$162', detalle: '360 ml, en negro, blanco o azul. La de espresso cuesta $143.', foto: f('tazas-peltre', 700, 700, 'Tazas de peltre azules, blancas y negras con el logo de Huupa') },
  { handle: 'taza-fogata', nombre: 'Taza Fogata', precio: '$193', detalle: '360 ml, negra por fuera y naranja Huupa por dentro.', foto: f('taza-fogata', 700, 700, 'Taza negra de Huupa con la frase "que la vida es un tesoro"') },
];
export const antojos: Accesorio[] = [
  { handle: 'coyotas-5-piezas', nombre: 'Coyotas a la Leña (5 pzs)', precio: '$132', detalle: 'El pan dulce de los pueblos de Sonora, horneado lentamente en leña de mezquite. De caramelo de rancho, piloncillo, caramelo de rancho con nuez o mixto.' },
  { handle: 'caramelo-liquido', nombre: 'Caramelo de rancho', precio: '$94', detalle: '300 ml, hecho con leche 100% de vaca en su Rancho Ave de Platta, en Hermosillo.' },
  { handle: 'talega-para-cafe', nombre: 'Filtro de talega', precio: 'Desde $30', detalle: 'Franela 100% algodón: mini, mediana o grande, según tu cafetera.' },
  { handle: 'huupa-shot', nombre: 'Huupa Shot', precio: '$150', detalle: 'Taza para espresso de 80 ml, acero inoxidable de doble pared.' },
  { handle: 'sun-kit', nombre: 'Sun Kit', precio: '$1,193', detalle: 'Prensa francesa de 1 L, frasco de vidrio de 100 ml y 2 Huupa Shots.' },
];

// ---------- Regalos (de /collections/kits-de-regalo y sus fichas) ----------
export const regalosIntro = 'Esa persona especial a la que le quieres regalar algo especial ¿es cafesera? No se diga más. Porque un buen café no solo se toma, también se comparte.';
export const kits = [
  { handle: 'kit-cafesero', nombre: 'Kit Cafesero', precio: '$753', incluye: 'Taza de peltre de 360 ml, 5 coyotas, caramelo de rancho de 300 ml y Café Clásico y Café Intenso de 250 g.', foto: f('kit-cafesero', 700, 700, 'Caja del Kit Cafesero con taza de peltre, coyotas, caramelo y café') },
  { handle: 'kit-termo', nombre: 'Kit Termo', precio: '$693', incluye: 'Termo Huupa naranja de 14 oz, Café Clásico de 250 g y caramelo de rancho de 300 ml. Antes $769.', foto: f('kit-termo', 700, 700, 'Caja del Kit Termo con termo naranja, café y caramelo') },
  { handle: 'kit-fogata', nombre: 'Kit Fogata', precio: '$1,923', incluye: '2 tazas de cerámica de 360 ml, cafetera italiana de 300 ml y Café Clásico, Premium y Descafeinado de 250 g.', foto: f('kit-fogata', 700, 700, 'Caja del Kit Fogata con dos tazas negras, cafetera italiana y tres bolsas de café') },
  { handle: 'kit-barista', nombre: 'Kit Barista', precio: '$3,236', incluye: 'Molino manual de muelas de acero inoxidable, prensa francesa de 1 L con frasco de vidrio de 100 ml, Café Premium y un Café Specialty de 250 g.', foto: f('kit-barista', 700, 700, 'Caja del Kit Barista con molino, prensa francesa naranja y dos bolsas de café') },
];
export const giftCard = {
  handle: 'huupa-gift-card',
  nombre: 'Huupa® Gift Card',
  precio: '$400, $600 o $1,000',
  texto: 'Le llega por correo electrónico de inmediato, y puedes programar la fecha de envío.',
  foto: f('gift-card', 700, 700, 'Tarjeta de regalo amarilla de Huupa de $400'),
};
export const kitsNota = 'Todos los kits llevan moño de regalo y el café se muele como lo pidas.';

// ---------- Envíos (de /policies/shipping-policy) ----------
export const envios = [
  ['Estándar', '$120 MXN, de 5 a 7 días hábiles'],
  ['Express', '$195 MXN, de 2 a 3 días hábiles'],
  ['Gratis', 'Envío estándar en compras mayores a $840 MXN (sujeto a vigencia)'],
  ['El mismo día', 'Pedidos pagados antes de las 12:00 pm, de lunes a viernes. Los de fin de semana salen el lunes.'],
];
