// Textos y datos de Darya Krylova Creative Studio, leídos de su sitio en vivo (daryakrylova.com) el 2026-10-12:
// inicio, /catalogo, /redes-sociales, /ecommerce, /portafolio, /nosotros, /contacto y /faq.
// Los titulares cortos y los textos alternativos son del estudio; los datos del negocio no se inventan.

export const negocio = {
  nombre: 'Darya Krylova',
  marca: 'Darya Krylova Creative Studio',
  ciudad: 'Guadalajara, Jalisco, México',
  telefono: '+52 33 3059 9948',
  telefonoVisible: '(+52) 33 3059 9948',
  whatsapp: '523330599948',
  correo: 'hello@daryakrylova.com',
  instagram: 'https://www.instagram.com/dk.productphotography',
  instagramUsuario: '@dk.productphotography',
  facebook: 'https://www.facebook.com/daryakrylovaphotography',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const portada = {
  titulo: 'Fotografía de producto en Guadalajara',
  bajada: 'Expertos en fotografía de producto para catálogos, e-commerce, redes sociales y más.',
  texto: 'Nos encargamos de tus imágenes mientras tú te dedicas a hacer crecer tu negocio. Ubicados en Guadalajara, México, trabajando con clientes a nivel global.',
  datos: ['Sin mínimo de productos', '2 revisiones en posproducción', 'Factura con efectos fiscales', 'Envías tus productos desde cualquier lugar'],
};

export type Servicio = { id: string; nombre: string; frase: string; foto: string; alt: string; usos: string[] };

export const servicios: Servicio[] = [
  {
    id: 'catalogo',
    nombre: 'Fotografía para catálogo',
    frase: 'Facilitar a tus clientes la decisión de compra.',
    foto: 'ecom-13',
    alt: 'Botella ámbar de jabón Luffa con dosificador, fotografiada sobre fondo blanco',
    usos: ['Fondo blanco o transparente (PNG)', 'Presentaciones comerciales', 'Catálogos de productos'],
  },
  {
    id: 'redes',
    nombre: 'Fotografía para redes sociales',
    frase: 'Imágenes que detienen el scroll y capturan el interés de tu audiencia.',
    foto: 'creativa-15',
    alt: 'Jabón líquido amarillo con gotas de aceite flotando sobre fondo rosa',
    usos: ['Planes mensuales de 8, 16 o 24 imágenes', 'Instagram y Facebook', 'Campañas y lanzamientos'],
  },
  {
    id: 'ecommerce',
    nombre: 'Fotografía para eCommerce',
    frase: 'Lo que las palabras no pueden explicar y lo que los compradores no pueden tocar.',
    foto: 'ecom-09',
    alt: 'Frasco verde de tónico capilar KUCH con tapa de madera sobre fondo blanco',
    usos: ['Varios ángulos y close ups', 'Infografías con textos personalizados', 'Listas para marketplaces'],
  },
];

// Elemento memorable: la silla para bebé de su portafolio, fotografiada en 7 tomas (ecom-18 a ecom-24).
// El orden en que se suman las tomas es una propuesta del estudio para explicar los paquetes.
export const tomas = [
  { foto: 'ecom-18', nombre: 'Frente', alt: 'Silla alta para bebé blanca, de frente, con charola y arnés' },
  { foto: 'ecom-19', nombre: 'Tres cuartos', alt: 'La misma silla alta vista en tres cuartos' },
  { foto: 'ecom-20', nombre: 'Perfil', alt: 'La silla alta de perfil, con la charola puesta' },
  { foto: 'ecom-23', nombre: 'Detalle del arnés', alt: 'Acercamiento al asiento y al arnés de cinco puntos' },
  { foto: 'ecom-21', nombre: 'Versión baja', alt: 'La silla armada con patas cortas, de frente' },
  { foto: 'ecom-22', nombre: 'Versión baja, tres cuartos', alt: 'La silla con patas cortas vista en tres cuartos' },
  { foto: 'ecom-24', nombre: 'Piezas por separado', alt: 'Charola, asiento, patas y arnés de la silla acomodados por separado' },
];

export type Nivel = { imagenes: number; paquetes: { nombre: string; linea: string }[]; para: string };

export const niveles: Nivel[] = [
  { imagenes: 1, paquetes: [{ nombre: 'Fenómeno', linea: 'Catálogo · 10 productos, 1 imagen por producto' }], para: 'Una imagen limpia de cada producto, para emprendedores y nuevos lanzamientos.' },
  { imagenes: 2, paquetes: [{ nombre: 'Ídolo', linea: 'Catálogo · 10 productos, 2 imágenes por producto' }], para: 'Mostrar el producto desde otro ángulo o resaltar una característica clave.' },
  { imagenes: 4, paquetes: [{ nombre: 'Legendario', linea: 'Catálogo · 10 productos, 4 imágenes por producto' }, { nombre: 'eCom Basics', linea: 'eCommerce · 4 imágenes por producto' }], para: 'Una presentación completa desde distintos ángulos, lista para vender en línea.' },
  { imagenes: 7, paquetes: [{ nombre: 'eCom PRO', linea: 'eCommerce · 7 imágenes por producto' }], para: 'Ángulos, close ups e infografías que resuelven las preguntas del comprador antes de que las haga.' },
];

export type Paquete = { nombre: string; cantidad: string; resumen?: string; ideal: string[] };

export const paquetes: { servicio: string; nota: string; lista: Paquete[] }[] = [
  {
    servicio: 'Catálogo',
    nota: 'Imágenes en PNG con fondo transparente, listas para diseños, presentaciones, redes e infografías.',
    lista: [
      { nombre: 'Fenómeno', cantidad: '10 productos · 1 imagen por producto', ideal: ['Emprendedores y pequeñas empresas que desean una imagen limpia de sus productos.', 'Nuevos lanzamientos de marcas y productos.'] },
      { nombre: 'Ídolo', cantidad: '10 productos · 2 imágenes por producto', ideal: ['Marcas y empresas en crecimiento que buscan mostrar mayor detalle o características especiales.', 'Resaltar características clave o mostrar el producto desde otro ángulo.'] },
      { nombre: 'Legendario', cantidad: '10 productos · 4 imágenes por producto', ideal: ['Una presentación de catálogo completa y detallada.', 'Características únicas desde todos los ángulos.', 'Una experiencia visual de alto impacto.'] },
    ],
  },
  {
    servicio: 'eCommerce',
    nota: 'Con infografías y textos personalizados para tiendas en línea y marketplaces.',
    lista: [
      { nombre: 'eCom Basics', cantidad: '4 imágenes por producto', ideal: ['Incursionar en las ventas en línea.', 'Resaltar características clave con infografías y textos personalizados.', 'Mostrar productos con claridad desde distintos ángulos.'] },
      { nombre: 'eCom PRO', cantidad: '7 imágenes por producto', ideal: ['Distintos ángulos y close ups.', 'Infografías y textos personalizados.', 'Resolver de forma visual las preguntas frecuentes de los compradores.'] },
    ],
  },
  {
    servicio: 'Redes sociales',
    nota: 'Planes mensuales para empresarios, emprendedores y agencias de marketing digital.',
    lista: [
      { nombre: 'Social', cantidad: '8 imágenes al mes', resumen: 'Fortalece tu presencia online, atrae más seguidores y clientes potenciales.', ideal: ['Nuevas marcas y pequeñas empresas.', 'Complementar tu estrategia de contenido.'] },
      { nombre: 'Creativo', cantidad: '16 imágenes al mes', resumen: 'Captura la atención de tu audiencia, mejora la interacción y el reconocimiento de tu marca.', ideal: ['Marcas en sectores altamente competitivos.', 'Mayor constancia en la comunicación visual.'] },
      { nombre: 'Influencer', cantidad: '24 imágenes al mes', resumen: 'Transforma tu marca en un referente visual en redes. Convierte interacciones en ventas.', ideal: ['Marcas establecidas que buscan liderar su nicho.', 'Campañas de alto impacto y lanzamientos.', 'Marcas con un amplio catálogo de productos.'] },
    ],
  },
];

export type Galeria = { id: string; nombre: string; fotos: { f: string; alt: string }[] };

const lista = (ids: string[], alt: string) => ids.map((f) => ({ f, alt }));

export const portafolio: Galeria[] = [
  {
    id: 'ecom', nombre: 'eCommerce y catálogo',
    fotos: [
      { f: 'ecom-03', alt: 'Tarro de gel para uñas rosa con tapa abierta, fondo blanco' },
      { f: 'ecom-04', alt: 'Frasco de esmalte en gel rosa con tapa negra, fondo blanco' },
      { f: 'ecom-05', alt: 'Frasco de suero con gotero cobre, fondo gris claro' },
      { f: 'ecom-07', alt: 'Tubo dorado de máscara de pestañas, fondo blanco' },
      { f: 'ecom-08', alt: 'Máscara de pestañas dorada abierta con su aplicador' },
      { f: 'ecom-10', alt: 'Lata verde de exfoliante Luffa vista desde arriba' },
      { f: 'ecom-11', alt: 'Tarro de exfoliante de café Luffa abierto' },
      { f: 'ecom-12', alt: 'Muestra de textura de exfoliante de café sobre fondo blanco' },
      { f: 'ecom-16', alt: 'Botella de vino rosado, fondo blanco' },
      { f: 'ecom-17', alt: 'Bolsa de Café Marino Artesanal, fondo blanco' },
      { f: 'ecom-06', alt: 'Suero con gotero cobre abierto, fondo gris claro' },
      { f: 'ecom-13', alt: 'Botella de jabón Luffa con dosificador' },
    ],
  },
  {
    id: 'info', nombre: 'Infografías para marketplaces',
    fotos: [
      { f: 'info-04', alt: 'Infografía del tónico KUCH: cómo se añade al shampoo' },
      { f: 'info-05', alt: 'Infografía de beneficios del tónico capilar KUCH' },
      { f: 'info-06', alt: 'Infografía de ingredientes naturales del tónico KUCH' },
      { f: 'info-07', alt: 'Infografía de resultados antes y después con el tónico KUCH' },
      { f: 'info-08', alt: 'Frasco KUCH sobre un tronco con sellos sin parabenos ni químicos' },
      { f: 'info-09', alt: 'Infografía de instrucciones de uso del tónico KUCH en tres pasos' },
      { f: 'info-01', alt: 'Infografía de Café Marino Artesanal, 100% mexicano' },
      { f: 'info-02', alt: 'Infografía de Café Marino: tostado intenso, café de alta montaña' },
    ],
  },
  {
    id: 'creativa', nombre: 'Fotografía creativa',
    fotos: [
      { f: 'creativa-13', alt: 'Tarros de crema de miel apilados con miel escurriendo, fondo amarillo' },
      { f: 'creativa-31', alt: 'Frasco de suero azul entre gotas de agua, fondo azul' },
      { f: 'creativa-14', alt: 'Botellas de cuidado personal entre rosas, fondo rosa' },
      { f: 'creativa-38', alt: 'Frascos verdes KUCH sobre toalla gris con peine de madera' },
      { f: 'creativa-10', alt: 'Máscara de pestañas lila frente a un cielo de nubes rosas' },
      { f: 'creativa-32', alt: 'Botella de perfume ámbar rociando, con luz morada' },
      { f: 'creativa-02', alt: 'Corrector dorado con gotas de aceite sobre fondo dorado' },
      { f: 'creativa-17', alt: 'Botella verde con tapa de corcho sobre fondo verde con gotas' },
      { f: 'creativa-07', alt: 'Pincel tomando gel de un tarro abierto, fondo blanco' },
      { f: 'creativa-16', alt: 'Botellas de aceite y jabón con tarro de miel sobre repisa, fondo durazno' },
      { f: 'creativa-28', alt: 'Tarro de crema azul abierto sobre fondo azul' },
      { f: 'creativa-18', alt: 'Labial rojo y brillo de labios sobre pedestal oscuro' },
      { f: 'creativa-11', alt: 'Delineadores lilas con un trazo sobre fondo rosa' },
      { f: 'creativa-20', alt: 'Tubo de protector solar con espuma, fondo azul' },
      { f: 'creativa-30', alt: 'Labiales rojos y negros sobre fondo rosa' },
      { f: 'creativa-08', alt: 'Tarros de gel para uñas y pincel vistos desde arriba' },
      { f: 'creativa-23', alt: 'Frasco de perfume dorado con sombra larga, fondo crema' },
      { f: 'creativa-39', alt: 'Tres frascos verdes KUCH sobre fondo beige' },
      { f: 'creativa-34', alt: 'Esmalte en gel con sombras de luz sobre tela blanca' },
      { f: 'creativa-33', alt: 'Tarros de gel abiertos con muestra de textura, fondo blanco' },
      { f: 'creativa-27', alt: 'Corrector líquido con muestra de color sobre fondo rosa' },
      { f: 'creativa-12', alt: 'Máscara de pestañas lila flotando sobre fondo lila' },
      { f: 'creativa-05', alt: 'Tarros de gel para uñas rosa y negro, fondo gris' },
    ],
  },
  {
    id: 'sitio', nombre: 'Fotografía en sitio',
    fotos: lista(['sitio-01', 'sitio-02', 'sitio-03', 'sitio-04', 'sitio-05'], '').map((x, i) => ({
      ...x,
      alt: [
        'Bocina inteligente sobre una mesa de madera en una sala',
        'Panel de control de domótica en una pared junto a una escultura',
        'Cámara de seguridad sobre un librero de madera',
        'Termómetro digital sobre una mesa de madera con luz natural',
        'Pantalla de control en la pared junto a una planta',
      ][i],
    })),
  },
];

export const proceso = [
  { titulo: 'Videollamada inicial', texto: 'Te presentamos el método de trabajo y conocemos a fondo las necesidades y objetivos de tu marca, para que cada detalle se alinee con la identidad y el estilo visual que quieres proyectar.' },
  { titulo: 'Cotización personalizada', texto: 'Con lo que platicamos preparamos una cotización ajustada a tus necesidades y al número de productos, y te enviamos una propuesta detallada para tu revisión.' },
  { titulo: 'Planeación del concepto', texto: 'Aprobada la cotización, desarrollamos el concepto visual: ángulos, iluminación, fondos y elementos clave de cada imagen. Lo apruebas antes de la sesión, para un resultado predecible.' },
  { titulo: 'Sesión fotográfica y edición', texto: 'Hacemos la sesión y la edición profesional. Te enviamos una previsualización para que pidas ajustes: incluye hasta 2 revisiones en posproducción.' },
  { titulo: 'Entrega final', texto: 'Recibes las imágenes finales en alta resolución, listas para tu catálogo, tienda o redes, en el formato acordado.' },
];

export const beneficios = [
  { titulo: 'Consultoría y acompañamiento', texto: 'Te guiamos en los ángulos y enfoques para que las imágenes comuniquen el mensaje correcto.' },
  { titulo: 'Ahorro de tiempo', texto: 'Nos encargamos de todo el proceso, desde la planeación hasta la entrega final.' },
  { titulo: 'Edición y retoque profesional', texto: 'Eliminamos imperfecciones y ajustamos colores para que tus productos luzcan impecables.' },
  { titulo: 'Consistencia visual', texto: 'Todas las fotos mantienen un estilo uniforme que refuerza tu identidad de marca.' },
  { titulo: 'Listas para usar', texto: 'Alta resolución, optimizadas para catálogos digitales, e-commerce y redes. Tú eliges cómo usarlas.' },
];

export const sobre = {
  titulo: '¡Hola! Soy Darya',
  parrafos: [
    'Fotógrafa de producto comercial en Guadalajara, Jalisco, México. Me especializo en capturar la esencia de cada producto para publicidad, páginas de internet, tiendas en línea y catálogos.',
    'Mi trayectoria incluye más de siete años perfeccionando mi arte como hobby antes de dar el paso a profesional en 2023. Mi experiencia anterior como Gerente de Proyectos y Director de Operaciones en China enriquece mi enfoque, permitiéndome gestionar eficazmente los tiempos y entender las necesidades de producción.',
    'Creo que una imagen de calidad es crucial para elevar la experiencia del cliente, mostrando el valor y cuidado que las marcas invierten desde el primer contacto.',
  ],
};

export const testimonios = [
  { texto: 'Wow de fotos!!!! Muchísimas gracias por tan perfecto trabajo. La calidad de las imágenes es excelente y agarraste perfectamente mi idea de cómo plasmarlo.', nombre: 'Natalia', producto: 'Tratamiento capilar' },
  { texto: 'Estoy muy satisfecha con la calidad de las fotografías que Darya tomó para mis productos. Las imágenes han ayudado a mejorar la visibilidad de mi marca y contribuido positivamente a mis ventas. Cada fotografía resalta los detalles esenciales de los productos.', nombre: 'Estefanía', producto: 'Silla para bebé' },
  { texto: 'Me encantaron, ya revisé las imágenes y están perfectas. La siguiente semana me llegan nuevos productos para obtener más contenido para otros 2 meses.', nombre: 'Gloria', producto: 'Productos manicure' },
  { texto: 'Estamos muy satisfechos con el trabajo de Darya. Las imágenes de nuestros productos en sitio han sido de gran utilidad en redes sociales y campañas publicitarias.', nombre: 'Alonso', producto: 'Domótica' },
  { texto: 'Están muy bien logradas las fotos y representan de manera muy profesional mi producto. Me encantan.', nombre: 'Omar', producto: 'Joyería' },
];

export const preguntas = [
  { p: '¿Cuánto cuestan las imágenes?', r: 'El precio se adapta al servicio, a la complejidad de tu producto y a la cantidad de imágenes. Hay varios paquetes y se pueden personalizar. Influyen superficies complejas, preparación del producto (limpieza, relleno, planchado), iluminación y nivel de edición.' },
  { p: '¿Hay un mínimo de artículos?', r: 'No. Se puede empezar desde un artículo, aunque los paquetes incluyen variedad de imágenes y estilos que pueden adaptarse mejor a lo que necesitas.' },
  { p: 'Estoy en otra ciudad o país, ¿pueden fotografiar mis productos?', r: 'Sí. Envías tus productos desde cualquier parte del mundo y se te devuelven después de la sesión. Las reuniones se hacen por teléfono o videollamada.' },
  { p: '¿Dónde se hacen las fotos?', r: 'En su propio estudio, con equipo profesional, luces y accesorios. Las sesiones en sitio se hacen con luz natural en un lugar acordado dentro de la Zona Metropolitana de Guadalajara; fuera de ella se suman viáticos.' },
  { p: '¿Qué es un Brief y un Shot List?', r: 'El Brief es un formulario breve con lo que necesitas para cotizar. El Shot List describe la sesión: número de imágenes, tamaño, ángulos, paleta de color y accesorios. Si no tienes uno, te ayudan a crearlo antes de la sesión.' },
  { p: '¿Cómo se paga?', r: 'Para reservar la fecha se pide un depósito del 50%. El otro 50% se paga después de la entrega: primero recibes las imágenes con marca de agua y en menor resolución, y las de alta resolución al confirmar el pago.' },
  { p: '¿Puedo pedir factura?', r: 'Sí. Para clientes en México se emiten facturas con efectos fiscales; avisa que la necesitas.' },
  { p: '¿Recibo los archivos RAW?', r: 'No: recibes imágenes editadas y listas para usar, en formato JPEG, según el Brief y Shot List acordados.' },
  { p: '¿Puedo cancelar o reprogramar?', r: 'El depósito del 50% no es reembolsable. Las reprogramaciones se piden por escrito al menos 2 días antes, sujetas a disponibilidad, y el depósito se puede aplicar a una sesión dentro de los 3 meses siguientes.' },
];
