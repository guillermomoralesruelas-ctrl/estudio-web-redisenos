// Contenido de Estudio 070, tomado del sitio original: investigacion/crudo.json (Inicio, Bodas, 15 años, Productos y
// Alimentos). Nada inventado; lo redactado por nosotros (títulos, microcopy, textos de la hoja de contactos) está
// declarado en CAMBIOS.md. Las rutas de imagen son relativas a publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Estudio 070',
  // Su sitio enlaza api.whatsapp.com/send?phone=5529694578 (sin el 52 de México); aquí va con el 52.
  whatsapp: '525529694578',
  telefonoVisible: '55 2969 4578',
  correo: 'estudio070mx@gmail.com',
  zona: 'Colonia Narvarte, Ciudad de México',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Narvarte%2C%20Ciudad%20de%20M%C3%A9xico',
  instagram: 'https://www.instagram.com/estudio070/',
  sitio: 'https://estudio070.com/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
// El mensaje general que ya usan en su sitio.
export const waGeneral = wa('Quiero conocer más sobre sus paquetes y servicios');

export type Foto = { src: string; w: number; h: number; alt: string };
const medidas: Record<string, [number, number]> = {"boda-mirador":[1800,1200],"boda-contraluz":[1200,800],"boda-nocturna":[1200,800],"boda-antesala":[880,585],"boda-novia-cielo":[397,611],"boda-velo":[668,444],"xv-exteriores":[1200,808],"xv-retrato":[390,585],"xv-trono":[407,614],"xv-helechos":[406,611],"xv-salon":[400,610],"xv-pastel":[687,443],"embarazo-telas":[1200,975],"embarazo-bosque":[1200,800],"embarazo-estudio":[800,1200],"embarazo-pareja":[404,612],"newborn-gorro":[800,1200],"newborn-mono":[358,543],"marca-deportiva":[800,1200],"marca-zapatos":[800,1200],"marca-evento":[1200,800],"marca-conferencia":[1200,800],"marca-lancha":[1200,798],"marca-retrato":[357,537],"gastro-fresas":[1200,800],"gastro-cupcake":[800,1200],"gastro-barra":[1200,800],"gastro-paletas":[370,558],"gastro-helado":[365,550],"gastro-angel":[363,545],"sesion-modelaje":[800,1200],"sesion-baile":[800,1200],"sesion-graduacion":[1200,798],"sesion-humo":[362,546],"sesion-escalera":[405,613],"sesion-trio":[364,547]};
export const f = (nombre: string, alt: string): Foto => ({ src: img(`${nombre}.webp`), w: medidas[nombre][0], h: medidas[nombre][1], alt });

export const portada = f('boda-mirador', 'Novios sentados en el pasto frente a la ciudad, con montañas al fondo');

export type Servicio = {
  id: string;
  nombre: string;
  titulo: string;
  texto: string;
  quien: string;
  mensaje: string; // el mensaje prellenado que ya usa su sitio en esa sección
  pagina: string;
  fotos: Foto[];
};

export const servicios: Servicio[] = [
  {
    id: 'bodas', nombre: 'Bodas', titulo: 'Fotografía y video para bodas',
    texto: 'Un servicio fotográfico especializado y de alta calidad, que busca documentar un día único e irrepetible en la vida de una pareja. Nos encargamos de capturar de manera espontánea y genuina los momentos más importantes para los novios y sus familiares.',
    quien: 'Dos fotógrafos de boda profesionales, más un equipo de video y drone: una cobertura genuina y de disparos ilimitados, en calidad 4K.',
    mensaje: 'Quiero conocer más sobre sus paquetes y servicios para bodas',
    pagina: 'https://estudio070.com/fotografos-de-bodas-cdmx/',
    fotos: [
      f('boda-contraluz', 'Silueta de novios frente a un retablo dorado'),
      f('boda-antesala', 'Novia en blanco y negro junto a una ventana, en la antesala'),
      f('boda-nocturna', 'Novios mirándose de noche, con luces de bokeh'),
      f('boda-novia-cielo', 'Novia con velo al viento sobre la ciudad'),
      f('boda-velo', 'Beso de novios bajo el velo iluminado'),
      f('boda-mirador', 'Novios sentados en el pasto frente a la ciudad'),
    ],
  },
  {
    id: 'xv', nombre: '15 años', titulo: 'Fotografía y video para 15 años',
    texto: 'Nuestro servicio de fotografía y video para 15 años busca enaltecer y distinguir la imagen visual de su protagonista, la quinceañera, y a su vez documentar todos los acontecimientos e invitados, desde su antesala hasta el final de la recepción.',
    quien: 'Sabina Silva y Cristhian Cañizales acuden personalmente a cada evento con su equipo asistente, más video y drone.',
    mensaje: 'Quiero conocer más sobre sus paquetes y servicios para XV',
    pagina: 'https://estudio070.com/fotografos-de-15-anos/',
    fotos: [
      f('xv-exteriores', 'Quinceañera con vestido rosa entre árboles'),
      f('xv-trono', 'Quinceañera en un trono dorado frente a un muro de rosas'),
      f('xv-helechos', 'Quinceañera de rosa entre helechos'),
      f('xv-salon', 'Quinceañera sentada en un salón con cojines'),
      f('xv-retrato', 'Retrato de quinceañera con corona'),
      f('xv-pastel', 'Quinceañera junto a su pastel de varios pisos'),
    ],
  },
  {
    id: 'embarazo', nombre: 'Embarazo y newborn', titulo: 'Sesiones de embarazo y newborn',
    texto: 'Se realizan en un ambiente ameno, seguro y comunicativo, para lograr resultados artísticos y memorables de tan hermosa etapa, retratando de forma sutil y femenina las últimas semanas de la gestación y los primeros días del recién nacido.',
    quien: 'Sabina Silva, directora de fotografía especializada en embarazo y recién nacidos, diseña un concepto personalizado para cada sesión.',
    mensaje: 'Quiero conocer más sobre sus sesiones de retrato',
    pagina: 'https://estudio070.com/sesiones-de-fotos-de-embarazo/',
    fotos: [
      f('embarazo-telas', 'Mujer embarazada de azul con una tela al vuelo'),
      f('newborn-gorro', 'Recién nacido dormido con gorro tejido'),
      f('embarazo-bosque', 'Mujer embarazada en un bosque'),
      f('newborn-mono', 'Recién nacida dormida con moño rosa'),
      f('embarazo-estudio', 'Mujer embarazada de verde en estudio'),
      f('embarazo-pareja', 'Pareja abrazada en una sesión de embarazo'),
    ],
  },
  {
    id: 'marcas', nombre: 'Marcas', titulo: 'Fotografía para marcas, productos y eventos corporativos',
    texto: 'La imagen visual es un elemento fundamental de la identidad de tu negocio. La fotografía de productos busca impulsar el atractivo de tus productos y potenciar las oportunidades de venta y reputación de tu marca.',
    quien: 'Cristhian Cañizales, con más de 6 años de experiencia en fotografía de productos, diseña cada servicio en foto, video y drone.',
    mensaje: 'Quiero conocer más sobre sus paquetes y servicios para marcas',
    pagina: 'https://estudio070.com/fotografo-de-productos/',
    fotos: [
      f('marca-deportiva', 'Modelo con ropa deportiva y gorra en estudio'),
      f('marca-zapatos', 'Tenis infantiles rosas sobre fondo gris'),
      f('marca-evento', 'Grupo de un evento corporativo junto a letras gigantes y una alberca'),
      f('marca-retrato', 'Retrato corporativo de un hombre con lentes'),
      f('marca-conferencia', 'Conferencia corporativa con ponente en el escenario'),
      f('marca-lancha', 'Grúa bajando una lancha en un muelle'),
    ],
  },
  {
    id: 'gastronomia', nombre: 'Gastronomía', titulo: 'Fotografía gastronómica',
    texto: 'Se especializa en resaltar los mejores atributos y características del producto. Con dedicación, creatividad y cuidado se diseñan conceptos para generar imágenes apetitosas que ayuden a impulsar la identidad de tu marca y la estrategia de marketing y ventas.',
    quien: 'Cristhian Cañizales, con más de 6 años de experiencia en fotografía de alimentos y productos, en el restaurante o en estudio.',
    mensaje: 'Quiero conocer más sobre sus paquetes gastronomicos',
    pagina: 'https://estudio070.com/fotografia-de-alimentos-cdmx/',
    fotos: [
      f('gastro-fresas', 'Pastel cubierto de fresas sobre un mantel de encaje'),
      f('gastro-paletas', 'Paletas rojas sobre frutos rojos'),
      f('gastro-cupcake', 'Cupcake red velvet junto a una taza de café'),
      f('gastro-helado', 'Paleta de mango con limón sobre fondo turquesa'),
      f('gastro-barra', 'Copas con hierbabuena y fruta en una barra'),
      f('gastro-angel', 'Paleta rosa con alas y aureola sobre un cielo'),
    ],
  },
  {
    id: 'sesiones', nombre: 'Sesiones', titulo: 'Sesiones de fotos profesionales',
    texto: 'Indispensables en esta era de redes sociales: para consolidar tu imagen personal, impulsar tu carrera como figura pública o celebrar algún acontecimiento de tu vida. Tanto en estudio como en exteriores, todo dependerá del mensaje que busques transmitir.',
    quien: 'En estudio o en exteriores, con concepto y revelado digital de cada foto.',
    mensaje: 'Quiero conocer más sobre sus sesiones de retrato',
    pagina: 'https://estudio070.com/sesiones-de-fotos/',
    fotos: [
      f('sesion-baile', 'Bailarina saltando sobre fondo azul'),
      f('sesion-humo', 'Retrato de un hombre con saco de cuadros entre humo'),
      f('sesion-modelaje', 'Modelo con corona de flores recargada en un muro'),
      f('sesion-escalera', 'Mujer de amarillo en una escalera morada'),
      f('sesion-graduacion', 'Graduada con toga y birrete'),
      f('sesion-trio', 'Tres hombres de cabello platinado en una sesión de moda'),
    ],
  },
];

export const testimonios = [
  { quien: 'Boda Evelys y Alberto (2022)', texto: 'Todo fue excelente. Nos ayudaron para que todo en la boda saliera muy bien. En la ceremonia tomaron muchísimas fotos, pero siempre muy discretos. El equipo se portó muy bien con nosotros, siempre atentos a los detalles.' },
  { quien: 'Boda Angélica y Ernesto (2021)', texto: 'No tenemos palabras para expresarles nuestro agradecimiento. Puntuales, atentos hasta el más mínimo detalle. ¡Profesionales y recomendadísimos! Las fotos y los videos están ESPECTACULARES!' },
];

export const preguntas = [
  { p: '¿Dónde se encuentran ubicados?', r: 'Nuestro estudio está ubicado en la Colonia Narvarte, Ciudad de México. Podemos agendar una cita para brindarte asesoría sin ningún compromiso.' },
  { p: '¿En qué formato entregan las fotos?', r: 'Toda nuestra cobertura en foto y video se exporta en formato digital JPG, tamaño 4K, a través de una plataforma de almacenamiento en la nube para su visualización y descarga. Los paquetes de boda incluyen fotografías impresas y álbumes fotográficos.' },
  { p: '¿Editan todas las fotos?', r: 'Sí. Todas las fotografías pasan por un proceso de revelado digital donde se realzan personajes, colores y texturas.' },
  { p: '¿Cuántas fotografías entregan?', r: 'Nuestra cobertura es ilimitada. La cantidad exacta varía según los momentos documentados por los dos fotógrafos durante toda la celebración. Sin embargo, cada uno de nuestros paquetes maneja un mínimo de fotos a entregar, basado en la cantidad de horas del evento.' },
];
