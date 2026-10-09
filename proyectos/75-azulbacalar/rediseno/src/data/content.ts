// Contenido de Azul Bacalar, tomado de investigacion/crudo.json y de sus dos sitios en vivo (2026-10-09):
// bacalar.com.mx (venta: inicio, servicios, por qué invertir, desarrollos, Casa de Piedra, Malena, acerca de y contacto) y
// azulbacalar.com (administración de rentas vacacionales: planes, cómo funciona, preguntas frecuentes, renta vacacional y
// renta de largo plazo). Los dos sitios comparten marca, correo, Instagram y WhatsApp. Nada inventado; textos del estudio en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Azul Bacalar',
  ciudad: 'Bacalar, Quintana Roo',
  telefono: '55 1048 9576',
  telefonoHref: 'tel:+525510489576',
  whatsappTxt: '984 167 5437',
  whatsapp: '529841675437',
  email: 'info@azulbacalar.com',
  instagram: 'https://www.instagram.com/azul_bacalar',
  facebook: 'https://www.facebook.com/realestatebacalar',
  // Sus sitios no publican la dirección de la oficina: el enlace busca el nombre en Google Maps.
  maps: 'https://www.google.com/maps/search/?api=1&query=Azul+Bacalar+inmobiliaria+Bacalar+Quintana+Roo',
  rentas: 'https://www.azulbacalar.com/renta-de-departamentos-para-vacacionar-en-bacalar/',
  administracion: 'https://www.azulbacalar.com/es/',
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const mapa = (dir: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dir)}`;

export const presentacion = 'Somos expertos en el mercado de Bacalar. Azul Bacalar es una agencia inmobiliaria de servicio completo: venta de terrenos, departamentos, propiedades residenciales y comerciales, y la administración de tu propiedad en renta vacacional.';

export const desarrollos = {
  malena: {
    nombre: 'Malena',
    lema: 'Vivir a una cuadra de la Laguna de Bacalar, en un entorno natural y tranquilo.',
    precio: 'Departamentos desde $3,096,000 MXN',
    datos: ['8 departamentos', '2 torres de 4 niveles', '2 recámaras y 2 baños completos', 'Estancia, comedor y cocina'],
    texto: 'A pocos pasos de la laguna, del Cenote Negro, del Balneario Municipal El Aserradero y del centro histórico. Diseño moderno y funcional para aprovechar la luz natural, y un proyecto que busca minimizar su impacto ambiental.',
    amenidades: [
      { t: 'Alberca infinita en el roof top', f: 'malena-alberca' },
      { t: 'Deck asoleadero con camastros', f: 'malena-asoleadero' },
      { t: 'Sky lounge', f: 'malena-skylounge' },
      { t: 'Pérgola wellness para yoga y ejercicio', f: 'malena-pergola' },
    ],
    direccion: 'Avenida 3, Región 1, Manzana 30, Lote 9, Col. Magisterial, 77930 Bacalar, Q. Roo',
  },
  casaDePiedra: {
    nombre: 'Casa de Piedra',
    estado: 'Vendido',
    texto: 'A unas cuadras de la laguna y a unos minutos caminando del centro del Pueblo Mágico: restaurantes, tiendas y el fuerte.',
    datos: ['900 m² de terreno', '12 departamentos', '4 torres de 3 niveles separadas por vegetación', 'Planta baja con jardín y piscina privada; segundo y tercer nivel con 2 habitaciones, tina y balcón'],
    amenidades: [
      { t: 'Alberca tipo cenote con asoleadero', f: 'cdp-alberca' },
      { t: 'Zona zen para yoga y meditación', f: 'cdp-zen' },
      { t: 'Coworking', f: 'cdp-coworking' },
      { t: 'Gimnasio al aire libre', f: 'cdp-gimnasio' },
    ],
    direccion: 'Calle 38, Región 2, Manzana 32, Lote 6, entre Av. 5 y 5A, 77935 Bacalar, Q. Roo',
  },
};

// Sus dos planes de administración, tal como los publica azulbacalar.com.
export const tareas = [
  { t: 'Reservas y anuncios en Airbnb', starter: 'ab', relax: 'ab' },
  { t: 'Anuncios también en Booking.com', starter: null, relax: 'ab' },
  { t: 'Coordinación de limpiezas y lavandería', starter: 'ab', relax: 'ab' },
  { t: 'Mantenimiento menor', starter: 'ab', relax: 'ab' },
  { t: 'Estrategias de precio (pricing)', starter: 'ab', relax: 'ab' },
  { t: 'Reporte mensual', starter: 'ab', relax: 'ab' },
  { t: 'Descuentos para huéspedes en terapias, tours y souvenirs', starter: 'ab', relax: 'ab' },
  { t: 'Estadísticas de mercado y análisis de la competencia', starter: null, relax: 'ab' },
  { t: 'Renovación periódica de fotografías', starter: null, relax: 'ab' },
  { t: 'Pago de servicios (luz, agua, internet), limpieza, lavandería y proveedores', starter: 'tu', relax: 'ab' },
  { t: 'Insumos de limpieza y amenidades (en Relax, también kit de bienvenida)', starter: 'tu', relax: 'ab' },
  { t: 'Mantenimiento de piscina y jardinería', starter: null, relax: 'ab' },
] as const;
export const comision = 'Desde 20% de comisión sobre el ingreso mensual';
export const comisionNota = 'Las tarifas pueden variar según el tamaño, la ubicación de la propiedad y los servicios requeridos.';

export const pasos = [
  { t: 'Visitamos tu propiedad', d: 'Analizamos el espacio para identificar sus ventajas y darte las recomendaciones clave.' },
  { t: 'Equipamos y diseñamos', d: 'El diseño más funcional y el equipamiento adecuado para que tu alojamiento destaque.' },
  { t: 'Buscamos la mejor tarifa', d: 'Analizamos la demanda y la competencia para maximizar la ocupación y tus ingresos.' },
  { t: 'Marketing inmobiliario', d: 'Fotos, video y textos de alto impacto para presentar tu propiedad.' },
  { t: 'Atención de reservas', d: 'Acompañamos a cada huésped durante toda su estancia.' },
];
export const canales = ['Airbnb y Booking', 'Motor de reservas propio', 'Campañas en Facebook, Instagram y Google'];
export const ocupacion = { cifra: '25.4%', texto: 'más alto que otras propiedades similares de la zona, en su comparativo de Airbnb de febrero de 2024 a febrero de 2025.' };

// Propiedades que administran en renta vacacional (nombres de su listado en azulbacalar.com).
export const administradas = ['Casa de Piedra', 'Villa Patos', 'Aldea Alejandra', 'Aldea Mayab', 'Nómadas', 'Cedro', 'Casa Tiago', 'Casa Masaryk', 'La Casa de la Cuarenta', 'Casa Fauna'];
export const galeriaRentas = [
  { f: 'cdp-superior', alt: 'Estancia de un departamento superior de Casa de Piedra, en renta vacacional' },
  { f: 'renta-aldea-mayab', alt: 'Departamento en Aldea Mayab, en renta vacacional' },
  { f: 'renta-hamaca', alt: 'Estancia con hamaca y cocina en una de las propiedades que administran' },
  { f: 'renta-alberca', alt: 'Alberca entre palmeras con vista a la laguna en una de sus propiedades' },
  { f: 'renta-casa-tiago', alt: 'Casa Tiago, en renta vacacional en Bacalar' },
  { f: 'renta-estancia', alt: 'Sala y comedor de una de las propiedades que administran' },
];
export const largoPlazo = [
  { t: 'Una semana', d: 'Una escapada para probar la vida en Bacalar.' },
  { t: 'Quince días', d: 'El tiempo ideal para explorar sus alrededores.' },
  { t: 'Un mes', d: 'Vive una auténtica experiencia en la laguna.' },
  { t: 'Seis meses o más', d: 'Si buscas establecerte y hacer de Bacalar tu hogar.' },
];

export const laguna = [
  { n: '55 km', d: 'de largo y hasta 2.5 km de ancho: el cuerpo de agua dulce más grande de Quintana Roo' },
  { n: '4 cenotes', d: 'la alimentan: el Azul, Cocalitos, el Esmeralda y el Negro' },
  { n: 'Estromatolitos', d: 'estructuras formadas por microorganismos, una de las formas de vida más antiguas del planeta' },
];
export const porQue = [
  { t: 'Alto potencial turístico', d: 'Un destino emergente con actividades ecoturísticas que atraen visitantes de todo el mundo.' },
  { t: 'Crecimiento económico', d: 'Turismo y población en aumento: más demanda de vivienda y alquileres.' },
  { t: 'Infraestructura', d: 'Nuevas carreteras, el Tren Maya, aeropuertos y hoteles mejoran la conectividad.' },
  { t: 'Plusvalía', d: 'La inversión y el desarrollo turístico aprecian el precio de la propiedad a largo plazo.' },
  { t: 'Costos todavía bajos', d: 'Comparado con otros destinos turísticos de México, aún tiene precios relativamente bajos.' },
  { t: 'Ingresos por renta', d: 'Su popularidad abre la puerta a rentar a corto plazo a turistas.' },
];
export const inversiones = ['Tren Maya', 'Aeropuerto de Chetumal', 'Aeropuerto de Tulum', 'Zona Arqueológica de Ichkabal', 'Perfect Day México', 'Ecoparque', 'Accesos públicos a la laguna', 'Pueblo Mágico'];

export const servicios = [
  { t: 'Terrenos', d: 'Para construir tu casa o invertir en el futuro, en diferentes ubicaciones, tamaños y características.' },
  { t: 'Residencial', d: 'Comprar o vender un departamento, una casa familiar o una villa.' },
  { t: 'Comercial', d: 'Locales, oficinas y terrenos para naves industriales.' },
  { t: 'Desarrollo de proyectos', d: 'De la planificación y el diseño a la construcción y la comercialización.' },
];
export const valores = ['Integridad', 'Excelencia', 'Compromiso', 'Innovación'];
export const respaldo = 'Opera desde 2023 con oficinas y personal en Bacalar. Grupo Bakal la respalda con más de 12 años de experiencia en turismo en Quintana Roo.';
