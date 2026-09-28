// Contenido del IAAC, tomado de su sitio: la portada y las páginas de sedes del clon (investigacion/crudo.json) y las
// páginas de cada programa leídas con curl el 2026-09-28 (copia del texto en entregables/textos-sitio-en-vivo-2026-09-28.txt).
// Regla: nada inventado. Lo que falta o no cuadra está anotado en CAMBIOS.md.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'IAAC',
  nombreLargo: 'Instituto Argentino de Artes Culinarias',
  whatsapp: '523312233268',
  whatsappTexto: '33 1223 3268',
  admisiones: '(33) 1592 9493',
  admisionesHref: 'tel:+523315929493',
  horario: 'Lunes a viernes de 9:00 a 18:00 h',
  facebook: 'https://www.facebook.com/iaacmexico/',
  instagram: 'https://www.instagram.com/iaacmexico/',
  youtube: 'https://www.youtube.com/@iaacmexico',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola IAAC, vi su página y quiero información de sus programas. Me interesa la sede de: ');

export const fotos = {
  portada: { src: img('clase-chef.webp'), alt: 'Un chef del IAAC enseña a sus alumnos, todos con filipina blanca, en una cocina de práctica', ancho: 1600, alto: 486 },
};

export type Sede = { id: string; nombre: string; direccion: string; cp: string; foto?: string };
export const sedes: Sede[] = [
  { id: 'guadalajara', nombre: 'Guadalajara', direccion: 'Libertad 1812, Col. Americana, Guadalajara, Jal.', cp: '44160', foto: img('cocina-guadalajara.webp') },
  { id: 'leon', nombre: 'León', direccion: 'Blvd. Campestre 1206, Fracc. Valle del Campestre, León, Gto.', cp: '37150', foto: img('cocina-leon.webp') },
  { id: 'queretaro', nombre: 'Querétaro Centro', direccion: 'Calle Corregidora Sur 182, segundo piso, Col. Centro, Querétaro, Qro.', cp: '76000', foto: img('cocina-queretaro.webp') },
  { id: 'campanario', nombre: 'Querétaro Campanario', direccion: 'Av. Campanario 109, local 41, planta alta, Comercial "La Reserva", El Campanario, Querétaro, Qro.', cp: '76146' },
  { id: 'merida', nombre: 'Mérida', direccion: 'Circuito Colonias (calle 31) 132, Col. Buenavista, Mérida, Yuc.', cp: '97127', foto: img('cocina-merida.webp') },
  { id: 'toluca', nombre: 'Toluca', direccion: 'Av. de los Gobernadores 1267, local 8, Col. La Providencia, Toluca, Edo. Méx.', cp: '52177', foto: img('cocina-toluca.webp') },
];
export const mapa = (s: Sede) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`IAAC ${s.direccion} ${s.cp}`)}`;

// ---- Programas: cada "comanda" es un módulo o bloque de su plan de estudios ----
export type Comanda = { titulo: string; nota?: string; clases: string[] };
export type Programa = {
  id: string;
  nombre: string;
  tipo: 'Diplomado' | 'Curso' | 'Workshop';
  duracion?: string;
  turno?: string;
  lema: string;
  extra?: string;
  comandas: Comanda[];
};

export const programas: Programa[] = [
  {
    id: 'chef', nombre: 'Chef Profesional', tipo: 'Diplomado', duracion: '1 año', turno: 'Matutino y vespertino',
    lema: 'De la pasión a la profesión.',
    extra: 'Prácticas opcionales en España y Francia.',
    comandas: [
      { titulo: 'Cocina I', nota: 'Bromatología corre de la clase 9 a la 15', clases: ['Fondo', 'Cortes de vegetales', 'Papa', 'Salsas y sopas', 'Huevos', 'Carnes rojas', 'Carnes rojas 2', 'Aves', 'Aves 2', 'Pescados redondos', 'Pescados planos', 'Cerdo', 'Pastas lisas', 'Pastas rellenas', 'Mariscos', 'Asado', 'Hierbas y especias; elaboración de curry', 'Examen final'] },
      { titulo: 'Buffet', clases: ['Canapés', 'Ensaladas y quiches', 'Buffet latinoamericano', 'Buffet asiático', 'Examen de buffet'] },
      { titulo: 'Cocina II', nota: 'Con Costos y Arquitectura de cocinas', clases: ['Montaje y equilibrio de platos', 'Menú de 7 tiempos', 'Parrilla a la llama', 'Pastas especiales', 'Mariscos 2', 'Salmónidos', 'Cordero', 'Pato y codorniz', 'Fondue', 'Menú cerrado y hongos', 'Examen final teórico y práctico'] },
      { titulo: 'Cocina mexicana', clases: ['Cocina prehispánica', 'Cocina tradicional mexicana', 'Cocina mexicana de autor', 'Cocina mexicana contemporánea'] },
      { titulo: 'Fundamentos de repostería y panadería', clases: ['Trigo, harina, levadura y agua', 'Sal, mejorantes, masa madre', 'Utensilios, ingredientes y clasificación de masas', 'Masas, cremas y chocolates', 'Examen final teórico y práctico'] },
      { titulo: 'Trabajo final', nota: 'Un menú de siete tiempos de autor', clases: ['Presentación teórica', 'Presentación práctica'] },
    ],
  },
  {
    id: 'desde-cero', nombre: 'Cocina desde Cero', tipo: 'Curso', duracion: '6 meses, 24 clases', turno: 'Matutino de 8:00 a 13:00 o vespertino de 18:30 a 23:00',
    lema: 'Aprende a cocinar desde cero aunque nunca hayas tomado una clase.',
    comandas: [
      { titulo: 'Bases que hacen la diferencia', clases: ['Técnicas de corte y manejo del cuchillo', 'Salsas madre y derivadas', 'Sopas tradicionales', 'Carnes blancas: pollo', 'La res', 'Cerdo', 'Pescados', 'Mariscos', 'Pastas y salsas', 'Pastas y salsas II'] },
      { titulo: 'Sabores, cultura y creatividad', clases: ['Cocina mexicana', 'Cocina mexicana II (prehispánica)', 'Cocina argentina', 'Cocina argentina II', 'Cocina peruana', 'Cocina francesa (fondues)', 'Cocina española', 'Cocina china cantonesa', 'Cocina japonesa', 'Cocina de Medio Oriente', 'Canapés y quiches', 'Menú cerrado', 'Cocina vegetariana de alto impacto'] },
      { titulo: 'Presentación final', nota: 'En equipos de dos, un menú de 3 tiempos', clases: ['Presentación final'] },
    ],
  },
  {
    id: 'repostero', nombre: 'Repostero Profesional', tipo: 'Diplomado', turno: 'Horarios flexibles',
    lema: 'Aprende a crear postres que enamoran.',
    comandas: [
      { titulo: 'Fundamentos de la repostería', clases: ['Bromatología', 'Batidos pesados I', 'Batidos pesados II', 'Batidos livianos I', 'Batidos livianos II', 'Masas quebradas I', 'Masas quebradas II', 'Masa bomba', 'Mousses I', 'Mousses II'] },
      { titulo: 'Repostería clásica', clases: ['Huevos', 'Bavaroise', 'Masas laminadas I', 'Masas laminadas II', 'Postres clásicos', 'Petit fours', 'Conservas', 'Repostería mexicana', 'Pasteles clásicos I'] },
      { titulo: 'Panificación', clases: ['Panadería básica', 'Panadería de masas hojaldradas', 'Panadería italiana', 'Panadería europea', 'Panadería mexicana', 'Panadería francesa', 'Panadería dulce', 'Panadería festiva'] },
      { titulo: 'Repostería avanzada', clases: ['Chocolate templado y decoraciones', 'Pasteles clásicos', 'Pasteles modernos', 'Buttercream: dripping cake y nude cake', 'Cupcakes y galletas decoradas', 'Fondant', 'Baños brillantes (miroir)', 'Pasteles helados', 'Petit gâteaux', 'Deconstrucción', 'Creación de postres y pasteles', 'Helados', 'Costos'] },
    ],
  },
  {
    id: 'panaderia', nombre: 'Panadería Profesional', tipo: 'Diplomado', turno: 'Horarios flexibles',
    lema: 'Aprende a crear productos que se venden todos los días.',
    comandas: [
      { titulo: 'Temario I', clases: ['Panadería moderna y porcentajes panaderos', 'Harina, agua, sal y levadura', 'Prefermentos: poolish y biga', 'Fermentación en bloque', 'Dividido, formado, tensión y greñado', 'Horneado profesional', 'Enfriado, conservación y control de calidad', 'Harinas y reología', 'Masa madre y levain', 'Fermentaciones prolongadas y retardos en frío'] },
      { titulo: 'Temario II', clases: ['Panes saborizados e inclusiones', 'Panes regionales reinterpretados', 'Práctica integrativa y estandarización', 'Masas enriquecidas: panettone, kouglof, babà', 'Panadería sin gluten', 'Panadería low carb / keto', 'Alta hidratación: ciabatta y focaccia', 'Panes rellenos y salados de venta', 'Pan de autor con identidad regional', 'Costos, precio y rentabilidad', 'Evaluación final tipo muestra'] },
    ],
  },
  {
    id: 'sommelier', nombre: 'Sommelier', tipo: 'Diplomado', duracion: '6 meses, 26 clases', turno: 'Vespertino',
    lema: 'Descubre el arte del vino, con catas guiadas desde la primera clase.',
    comandas: [
      { titulo: 'Análisis sensorial', clases: ['El sommelier, historia del vino, botella, corcho y etiqueta', 'Servicio, temperatura, técnica de cata y calidad', 'Ciclo de la vid y sistemas de conducción', 'Clasificación de vinos y variedades de uva', 'Vinos blancos, rosados, tintos, naturales y biodinámicos', 'Champagne y vinos espumosos'] },
      { titulo: 'Viticultura', clases: ['Jerez, Oporto, Madeira y Tokaji', 'América del Norte: Canadá, Estados Unidos y México', 'Sudamérica: Argentina, Chile y Uruguay', 'África y Oceanía', 'España y Portugal', 'Francia: Borgoña y Champagne', 'Francia II: Loira y Burdeos', 'Francia III: Alsacia y Ródano', 'Italia: norte y centro', 'Italia II: sur, islas y Grecia', 'Alemania y Austria'] },
      { titulo: 'Maridaje y más allá del vino', clases: ['Maridaje y segundo examen parcial', 'Queso y chocolate', 'Café y té', 'La cerveza', 'Vodka, tequila, mezcal y ginebra', 'Ron, brandy, cognac y whisky', 'Sake, licores y cremas (examen, grupo 1)', 'Sake, licores y cremas (examen, grupo 2)', 'Habanos'] },
    ],
  },
  {
    id: 'parrilla', nombre: 'Rey de la Parrilla', tipo: 'Workshop', duracion: '3 meses, 12 clases', turno: 'Vespertino',
    lema: '¡Consigue tu título de nobleza! 80% práctica y 20% teoría.',
    comandas: [
      { titulo: 'Módulos', nota: 'Dos clases por módulo', clases: ['La res y su despiece', 'Embutidos y escabeches', 'Hamburguesas a la leña y sus panes', 'Disco y llama', 'Larga vida al rey cerdo', 'Pescados y mariscos'] },
      { titulo: 'Res y hamburguesas', nota: 'Algunas de sus preparaciones', clases: ['Rib eye', 'Vacío argentino', 'Tomahawk', 'Tuétanos y mollejas', 'Cortes madurados y chimichurri', 'Hamburguesas de res, de cordero y de pescado y camarón', 'Panes a las brasas'] },
      { titulo: 'Leña, cerdo y mar', nota: 'Algunas de sus preparaciones', clases: ['Paella a la leña', 'Discada norteña', 'Salmón a la llama en tabla de cedro', 'Lechón a dos fuegos', 'Costillas de cerdo estilo barbecue', 'Pulpo a las brasas', 'Huachinango zarandeado'] },
    ],
  },
  {
    id: 'mar', nombre: 'Rey del Mar', tipo: 'Workshop', duracion: '12 clases',
    lema: 'Pescados y mariscos desde la técnica y el respeto al producto.',
    comandas: [
      { titulo: 'Clases 1 a 4', clases: ['Carpaccio de salmón, papillote de lenguado, ceviche peruano', 'Tapas con boquerones, paella', 'Camarones empanizados, aguachile, teppanyaki de camarón', 'Camarones al guajillo, rabas, cazuela de mariscos'] },
      { titulo: 'Clases 5 a 8', clases: ['Carpaccio de pulpo, pulpo a las brasas, piña rellena de mariscos', 'Strudel de mariscos, ostiones Rockefeller, calamar en su tinta', 'Salmón con sal de chapulines, camarones zarandeados, camarones al coco', 'Fricasé de calamar y camarón, empanadas de espárragos y camarón'] },
      { titulo: 'Clases 9 a 12', clases: ['Aguachile de callo de hacha, ravioles de langosta', 'Hamburguesas de camarón y pescado, salmón en croûte', 'Escondido de mariscos, risotto nero di seppia', 'Sashimi de atún, pappardelle nero con salsa del mar'] },
    ],
  },
  {
    id: 'mixologia', nombre: 'Mixología', tipo: 'Workshop', duracion: '3 meses', turno: 'Matutino o vespertino, según la sede',
    lema: 'Del primer cóctel a la creación de experiencias detrás de la barra.',
    comandas: [
      { titulo: 'Temario', clases: ['Introducción a la coctelería', 'Estructura del cóctel', 'Bebidas fermentadas y destiladas', 'Vinos y espumosos', 'Cervezas', 'Café y bebidas calientes', 'Bitters, licores y amaros', 'Mixología contemporánea', 'Coctelería mexicana', 'Desarrollo de carta de cócteles', 'Servicio y atención al cliente', 'Flair y estilo'] },
    ],
  },
];

// Contadores de su portada (valores de data-to-value en el HTML en vivo del 2026-09-28; el clon del 26 decía otros).
export const cifras: [string, string][] = [['16', 'años'], ['6', 'sedes'], ['1,500+', 'alumnos'], ['30+', 'docentes'], ['50+', 'convenios'], ['4,000+', 'egresados']];

export const razones = [
  'Enfoque práctico', 'Horarios flexibles', 'Bolsa de trabajo', 'Prácticas profesionales', 'Diversidad de programas',
  'Control de inversión', 'Costos accesibles', 'Calidad académica', 'Experiencia IAAC',
];

export const avales = ['DGCFT', 'IDEFT, Instituto de Formación para el Trabajo', 'Educación', 'Gobierno del Estado de Jalisco'];

export const experiencias = [
  { titulo: 'Master Class', texto: 'Una sesión de 4 a 4.5 horas para cocinar, probar y convivir. Ellos ponen los ingredientes y las recetas.' },
  { titulo: 'Team building gastronómico', texto: 'Un evento de 4 a 4.5 horas en la sede para equipos de trabajo, sin experiencia previa. Incluye insumos, chef docente e instalaciones, y termina con la comida que cocinaron juntos. En Guadalajara, León, Querétaro y Mérida.' },
  { titulo: 'Bon Appétit', texto: 'Cocina y cultura francesa con la Alianza Francesa.' },
  { titulo: 'Bolsa de trabajo', texto: 'Para restaurantes y empresas que buscan talento culinario: registran su empresa para encontrarlo entre sus alumnos y egresados.' },
];
