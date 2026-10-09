// Contenido de Hearts on Film, tomado de investigacion/crudo.json (su única página). Nada inventado.
// Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Hearts on Film',
  rubro: 'Videografía cinematográfica de bodas',
  ciudad: 'Monterrey, Nuevo León',
  // Su botón "Cuéntanos de su boda" (wa.link/jn1uep) abre WhatsApp con este número.
  whatsapp: '5218180772534',
  instagram: 'https://www.instagram.com/hearts.on.film/',
  anios: 8,
};

export const wa = (msg: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;
export const waGeneral = wa('¡Hola, Hearts on Film! Queremos contarles de nuestra boda.');

export const filosofia = [
  'Cada boda tiene un ritmo propio, una luz única, emociones que no se pueden planear. Mi trabajo es estar presente en cada uno de esos instantes y convertirlos en algo que te haga sentir exactamente lo mismo que sentiste ese día.',
  'Trabajo con un estilo cinematográfico, color grading detallado, música cuidadosamente elegida y una narrativa que captura la esencia de quiénes son como pareja.',
];

export const films = [
  { foto: 'valeria-pablo', pareja: 'Valeria & Pablo', lugar: 'Hotel Palladium · Cancún, MX' },
  { foto: 'silvia-hector', pareja: 'Silvia & Héctor', lugar: 'Fábrica El Porvenir · Santiago, NL' },
  { foto: 'nidia-fili', pareja: 'Nidia & Fili', lugar: 'Stock and Woods · Santiago, NL' },
];

export const highlights = [
  { foto: 'velo-ramo', alt: 'Ramo blanco bajo el velo de la novia' },
  { foto: 'velo-viento', alt: 'Novia con el velo al viento junto al novio' },
  { foto: 'primera-vista', alt: 'El novio de espaldas mira a la novia en la sierra' },
  { foto: 'abrazo-bn', alt: 'Abrazo de los novios en blanco y negro' },
  { foto: 'baile-humo', alt: 'Primer baile entre humo en blanco y negro' },
  { foto: 'beso-confeti', alt: 'Beso de los novios bajo el confeti en la pista' },
];

export const equipo = [
  { rol: 'Director / DOP', detalle: 'Hearts on Film' },
  { rol: 'Cinematografía', detalle: 'Cámara principal y secundaria' },
  { rol: 'Sonido en directo', detalle: 'Lavalier y ambient' },
  { rol: 'Color grading', detalle: 'DaVinci Resolve Studio' },
  { rol: 'Edición y narrativa', detalle: 'Post in-house' },
  { rol: 'Cobertura', detalle: 'Nuevo León y destino' },
];

export const proceso = [
  { titulo: 'Nos conocemos', texto: 'Escríbenos por WhatsApp. Agendamos una llamada de 20 minutos para conocer su historia, su estilo y lo que sueñan para su boda.' },
  { titulo: 'Reservamos tu fecha', texto: 'Una vez que decidimos trabajar juntos, separamos tu fecha con un anticipo. Trabajamos con pocas bodas al año para dar atención total a cada pareja.' },
  { titulo: 'El día de tu boda', texto: 'Llegamos antes que nadie y nos quedamos hasta el final. Capturamos cada detalle, emoción y momento espontáneo con discreción y sensibilidad cinematográfica.' },
  { titulo: 'Tu película llega', texto: 'En 6 a 10 semanas recibes tu film terminado: editado, con color grading, música y una narrativa que contará su historia para siempre.' },
];

// Destinos que nombra su sitio (sus films y su respuesta "¿Viajan a bodas fuera de Monterrey?")
export const destinos = ['Monterrey', 'Santiago, NL', 'San Miguel de Allende', 'Valle de Bravo', 'Cancún', 'Tulum', 'CDMX', 'Otro destino'];
export const entrega = { min: 6, max: 10 }; // semanas
export const anticipo = 30; // %

// Solo las reseñas de parejas cuyos films muestra su sitio.
export const resenas = [
  { texto: 'Estoy llorando, volví a revivir ese día. ¡Muchas gracias por su trabajo! Nos encantó todo lo que hicieron.', pareja: 'Valeria & Pablo' },
  { texto: 'Gracias por capturar tanta magia.', pareja: 'Silvia & Héctor' },
];

export const preguntas = [
  { p: '¿Cuánto cuesta una boda con ustedes?', r: 'Cada boda es distinta (duración, locaciones, número de eventos), así que armamos una propuesta personalizada después de conocer su historia. Nuestros films arrancan desde un rango medio-alto del mercado en Monterrey, pensados para parejas que valoran la calidad cinematográfica por encima del volumen. Te mandamos cifras concretas en cuanto sepamos qué imaginan.' },
  { p: '¿Qué incluye exactamente?', r: 'Cobertura completa del día, desde los preparativos hasta el cierre de pista, con dos cámaras, sonido en directo y micrófonos lavalier para los votos. Recibes tu película final editada con color grading profesional, música licenciada y una narrativa cuidada. Algunos paquetes incluyen también el highlight corto para redes y el trailer.' },
  { p: '¿En cuánto tiempo nos entregan el film?', r: 'Entre 6 y 10 semanas después de la boda. Trabajamos pocas bodas al año precisamente para poder dedicarle el tiempo que merece a cada edición, sin atajos, sin plantillas.' },
  { p: '¿Viajan a bodas fuera de Monterrey?', r: 'Sí. Filmamos regularmente en San Miguel de Allende, Valle de Bravo, Cancún, Tulum y CDMX. También hemos cubierto bodas internacionales. Los viáticos se cotizan transparente dentro de la propuesta.' },
  { p: '¿Trabajan con fotógrafos?', r: 'Con muchísimo gusto. Tenemos colegas fotógrafos con los que llevamos años colaborando, pero igual nos coordinamos perfecto con el equipo que ya hayan elegido. Lo importante es no estorbarnos y que ustedes vivan su boda.' },
  { p: '¿Cómo reservamos la fecha?', r: 'Después de la llamada, si todo hace clic, firmamos un contrato sencillo y reservan con un anticipo del 30%. Trabajamos máximo una boda por fin de semana, así que las fechas de temporada alta se cierran con varios meses de anticipación.' },
];
