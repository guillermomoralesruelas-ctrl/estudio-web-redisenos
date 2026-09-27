// Contenido de Fotoproducto, tomado del sitio original (investigacion/crudo.json y las páginas en vivo del 2026-09-27).
// Regla: nada inventado. Lo deducido está marcado en CAMBIOS.md como pendiente de confirmar.
// Las fotos son copias .webp de las del clon, hechas con fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (nombre: string, alt: string, w = 800, h = 1000): Foto => ({ src: img(`${nombre}.webp`), w, h, alt });

export const negocio = {
  nombre: 'Fotoproducto',
  telefono: '33 3559 6393',
  telLink: '+523335596393',
  whatsapp: '523335596393',
  correo: 'fotoproducto675@gmail.com',
  direccion: 'Calle Vista Alta 675, Col. Vista Hermosa, Zapopan, Jalisco',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Calle+Vista+Alta+675%2C+Vista+Hermosa%2C+Zapopan%2C+Jalisco',
  instagram: 'https://www.instagram.com/foto_producto.com1/',
  facebook: 'https://www.facebook.com/fotoproductogdl',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, te contacto desde el sitio web de Fotoproducto. Me gustaría recibir más información, por favor.');
export const foto = img;

export const fotos = {
  portada: f('moda-fondo-naranja', 'Sesión de moda deportiva: tres modelos con chamarras y leggings sobre un fondo naranja de estudio', 1080, 1350),
  flores: f('ecommerce-flores', 'Ramo de rosas y girasoles en florero sobre fondo celeste, foto para comercio electrónico'),
  video: f('video-institucional', 'Grabación de un video institucional: entrevistada frente a una cámara de cine con monitor', 799, 1000),
  logo: { src: img('logo.webp'), w: 600, h: 415, alt: 'Fotoproducto' },
};

export type Especialidad = { id: string; nombre: string; titulo: string; texto: string; fotos: Foto[] };

// Títulos y textos de la página Servicios (recortados). Las fotos son las de cada especialidad en su galería.
export const especialidades: Especialidad[] = [
  {
    id: 'moda',
    nombre: 'Moda',
    titulo: 'Fotografía de moda que deslumbra',
    texto: 'Desde capturas con modelos que encarnan la elegancia hasta el minimalismo de maniquíes ghost y la precisión de maniquíes, Fotoproducto ofrece una variedad de enfoques para mostrar tus prendas en su mejor luz.',
    fotos: [
      f('moda-grupo', 'Tres modelos con ropa deportiva sentadas en cubos sobre fondo café'),
      f('moda-chaleco', 'Modelo con chaleco acolchado amarillo sobre fondo café'),
      f('moda-bolsa', 'Bolsa amarilla de gamuza con mascada estampada, sobre fondo blanco'),
      f('moda-zapatos', 'Zapatos negros de piel con reflejo en espejo, fondo azul y plantas'),
    ],
  },
  {
    id: 'muebles',
    nombre: 'Muebles',
    titulo: 'Fotografía de muebles que inspira',
    texto: 'Desde la textura de la madera hasta los detalles de la tapicería, cada aspecto se inmortaliza con precisión y estilo. Cada fotografía es una ventana a la comodidad y el diseño que tus muebles ofrecen.',
    fotos: [
      f('muebles-recamara', 'Recámara completa con cabecera de madera, burós y colchón, sobre fondo blanco'),
      f('muebles-silla', 'Sillón de madera maciza con asiento de tablillas, sobre fondo blanco'),
      f('muebles-camastro', 'Camastro plegable de madera con asiento de piel, sobre fondo blanco'),
      f('muebles-comedor', 'Comedor de madera con cuatro sillas, sobre fondo blanco'),
    ],
  },
  {
    id: 'alimentos',
    nombre: 'Alimentos',
    titulo: 'Fotografía de alimentos que despierta los sentidos',
    texto: 'Cada imagen está meticulosamente creada para despertar el apetito y resaltar la frescura y presentación de cada ingrediente. Desde la jugosidad de una hamburguesa hasta la delicadeza de un postre.',
    fotos: [
      f('alimentos-pan', 'Panadero con filipina estampada sosteniendo un panqué recién horneado'),
      f('alimentos-salsas', 'Salteado de verduras en sartén con tres botellas de aceite de ajonjolí'),
      f('alimentos-pizza', 'Pizza de pepperoni con una botella de vino tinto, vista desde arriba'),
      f('alimentos-galleta', 'Mano tomando una galleta con relleno de mermelada, sobre plato blanco y fondo rosa'),
    ],
  },
  {
    id: 'vinos',
    nombre: 'Vinos y licores',
    titulo: 'Fotografía de vinos y licores',
    texto: 'Cada imagen refleja la elegancia y el sabor de las bebidas, desde la riqueza de los tintos hasta la sutileza de los destilados. Cada detalle, desde las etiquetas hasta las texturas, se presenta con precisión.',
    fotos: [
      f('vinos-rosado', 'Botella de vino rosado espumoso junto a dos postres de chocolate con fresas sobre tabla de madera'),
      f('vinos-tequila', 'Botella de tequila reposado con tres caballitos en una base de madera'),
      f('vinos-quos', 'Botella de tequila Quo’s añejo sobre fondo blanco'),
      f('vinos-whisky', 'Botella de whisky escocés de 12 años sobre fondo blanco'),
    ],
  },
  {
    id: 'redes',
    nombre: 'Redes sociales',
    titulo: 'Fotografía para redes sociales',
    texto: 'Cada composición vendedora está diseñada para detener el desplazamiento y atraer la atención de tu audiencia. Desde productos irresistibles hasta mensajes impactantes, creamos contenido visual que se destaca en el ruido digital.',
    fotos: [
      f('redes-lata', 'Lata de proteína vegetal con ilustración de halcón junto a fresas sobre mármol'),
      f('redes-galletas', 'Tres galletas y un vaso turquesa con popote sobre fondo azul'),
      f('redes-panes', 'Panes con relleno de fresa y fresas acomodados en patrón sobre fondo rosa'),
      f('redes-aceites', 'Aceites de chía y linaza con un licuado de mango sobre tabla de madera'),
    ],
  },
];

// Sus videos en YouTube (canal "Foto Producto"), los que muestra la página Servicios.
export const videos = [
  { id: 'TBb-RHqrSEg', titulo: 'Fotoproducto, Video Corporativo' },
  { id: '82WHsQKsDqg', titulo: 'Video institucional Cartographic' },
  { id: 'jOtOrzi6a-8', titulo: 'Video institucional Altimetrik' },
  { id: '2CKrk0FNdkY', titulo: 'Conferencia Eesy Gro' },
  { id: 'phqs9lmK6OA', titulo: 'Di sémola horizontal' },
];

// Renta del estudio, página Nuestro Estudio, tal como la publican.
export type Modalidad = 'dia' | 'medio';
export const renta = {
  dia: { nombre: 'Estudio 1 día', horas: '6 a 10 horas continuas', min: 6, max: 10, precio: 3000, luz: 1000, luzNota: 'por 8 hrs' },
  medio: { nombre: 'Estudio medio día', horas: '3 a 5 horas continuas', min: 3, max: 5, precio: 2000, luz: 600, luzNota: 'por 4 hrs' },
  ciclorama: 300,
  cupo: 12,
  incluye: ['Fondo blanco', 'Aire acondicionado', 'Tocador con luces para maquillaje', '2 baños', '4 espacios de estacionamiento', 'Jardín para catering y descanso'],
} as const;

export const valores = [
  { titulo: 'Experiencia experta', texto: 'Con años de experiencia, Fotoproducto ofrece habilidades profesionales en la captura y presentación de productos.' },
  { titulo: 'Estilo personalizado', texto: 'Reconociendo la unicidad de cada producto, creamos un estilo visual exclusivo que realza sus características únicas y su atractivo.' },
  { titulo: 'Calidad sin compromisos', texto: 'Utilizamos equipos avanzados para presentar cada detalle, color y textura de manera excepcional.' },
  { titulo: 'Impulso de ventas efectivo', texto: 'Creamos imágenes atractivas y estratégicas que generan interés y conexiones emocionales, brindando un retorno real de inversión.' },
];
