// Contenido de Aldo Castañeda Bodas, tomado de investigacion/crudo.json y del sitio en vivo (inicio, sesiones, las 16
// páginas de capítulos, precios, acerca de Aldo y contacto, 2026-10-09). Nada inventado; textos del estudio en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Aldo Castañeda Bodas',
  oficio: 'Cineasta y fotógrafo de bodas',
  direccion: 'Napoleón #132 C, Guadalajara, Jalisco',
  whatsapp: '523311094036',
  telefono: '33 1109 4036',
  telefonoHref: 'tel:+523311094036',
  email: 'aldo.cas@hotmail.com',
  instagram: 'https://www.instagram.com/aldocastanedabodas/',
  tiktok: 'https://www.tiktok.com/@aldocastanedabodas',
  facebook: 'https://www.facebook.com/AldoCastanedaBodas/',
  youtube: 'https://www.youtube.com/@aldocastanedabodas',
  maps: 'https://www.google.com/maps/place/Aldo+Casta%C3%B1eda+-+Fot%C3%B3grafo+de+bodas+y+eventos+en+Guadalajara/data=!4m2!3m1!1s0x0:0x6c02affb282e1cab',
  resenas: 'https://maps.app.goo.gl/Rf16eVE1SgSQy2Rz9',
  video: 'https://www.youtube.com/watch?v=HEOxohfrtfA',
};
export const wa = (texto?: string) => `https://wa.me/${negocio.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const cifras = [
  { valor: '+200', texto: 'parejas acompañadas' },
  { valor: '12', texto: 'años en el mundo nupcial' },
  { valor: '+146', texto: 'reseñas en Google Maps' },
];

export type Momento = 'antes' | 'arreglo' | 'ceremonia' | 'recepcion';
export const momentos: Record<Momento, string> = {
  antes: 'Antes de la boda', arreglo: 'El arreglo', ceremonia: 'La ceremonia', recepcion: 'La recepción',
};
// Los 16 capítulos, en el orden en que su sitio los presenta. Textos resumidos de la página de cada uno.
export const capitulos: { id: string; nombre: string; momento: Momento; texto: string; alt: string }[] = [
  { id: 'save-the-date', nombre: 'Save the date', momento: 'antes', texto: 'Mucho más que fotos para las invitaciones: un atardecer sin la prisa del gran día, que además los acostumbra a la cámara.', alt: 'Pareja abrazada entre columnas en un vestíbulo antiguo' },
  { id: 'getting-ready-bride', nombre: 'Getting ready bride', momento: 'arreglo', texto: 'Tu mamá ajustando cada detalle, el vestido, el anillo, tu reflejo en el espejo: el inicio de tu historia como esposa.', alt: 'Novia junto a su vestido colgado mientras su mamá la acompaña' },
  { id: 'getting-ready-groom', nombre: 'Getting ready groom', momento: 'arreglo', texto: 'Abotonarse el saco, ajustar las mancuernillas, respirar hondo frente al espejo: un ritual íntimo que también merece recordarse.', alt: 'Saco blanco del novio colgado frente a un cuadro' },
  { id: 'bridesmaids', nombre: 'Sesión Bridesmaids', momento: 'arreglo', texto: 'Tú y tus damas de honor preparándose juntas, entre nervios, risas y una copa burbujeante.', alt: 'Novia abrazada por sus damas de honor en batas de seda' },
  { id: 'first-look-papa', nombre: 'First look con papá', momento: 'arreglo', texto: 'El instante en que su primer amor, su papá, la ve vestida de blanco por primera vez.', alt: 'Novia y su papá frente a frente, emocionados' },
  { id: 'groomsmen', nombre: 'Sesión Groomsmen', momento: 'arreglo', texto: 'Los amigos y la familia que la vida regaló, afinando detalles y animando al novio antes del gran paso.', alt: 'Novio con sus amigos de traje negro y lentes oscuros' },
  { id: 'first-look', nombre: 'First look', momento: 'arreglo', texto: 'El novio ve a su prometida vestida de blanco: risa nerviosa, lágrimas que se escapan y un abrazo fuerte.', alt: 'Novios celebrando con los brazos en alto frente a una puerta de madera' },
  { id: 'familiar', nombre: 'Sesión familiar', momento: 'arreglo', texto: 'Una pausa en medio de la emoción para reunir a quienes los han acompañado en cada etapa de su vida.', alt: 'Novios con familia y amigos frente a un muro de bugambilias' },
  { id: 'ceremonia', nombre: 'Ceremonia religiosa', momento: 'ceremonia', texto: 'El momento sagrado: la novia del brazo de sus padres, los pasos hacia el altar y el sí frente a Dios y su familia.', alt: 'Novios besándose frente al altar de una iglesia' },
  { id: 'civil', nombre: 'Civil', momento: 'ceremonia', texto: 'Frente al juez y sus testigos, los novios firman el acta que simboliza su compromiso.', alt: 'Novios besándose bajo un arco de flores blancas' },
  { id: 'novios', nombre: 'Sesión de novios', momento: 'recepcion', texto: 'Antes de que lleguen los invitados, una sesión íntima de recién casados con la pista, las flores y los candiles impecables.', alt: 'Novia girando con su vestido en una pista con la frase I love you to the moon and back' },
  { id: 'entrada', nombre: 'Entrada de novios', momento: 'recepcion', texto: 'Las puertas se abren y entran de la mano entre aplausos, gritos y luces de bengala.', alt: 'Novios entrando al salón entre chispas de luz fría' },
  { id: 'vals', nombre: 'Vals', momento: 'recepcion', texto: 'Las luces bajan: el novio con su mamá, la novia con su papá, y un momento que conecta generaciones.', alt: 'Novios bailando el vals entre mariposas de papel y luces' },
  { id: 'brindis', nombre: 'Brindis', momento: 'recepcion', texto: 'Copas en alto y palabras de quienes los vieron crecer, enamorarse y llegar hasta aquí.', alt: 'Fuegos artificiales sobre los novios al aire libre' },
  { id: 'fiesta', nombre: 'Fiesta', momento: 'recepcion', texto: 'El DJ marca el beat y el amor se vuelve ritmo, luces y abrazos que no se quieren soltar.', alt: 'Novios bailando entre chispas frente a un arco de flores' },
  { id: 'ramo-liga', nombre: 'Ramo & Liga', momento: 'recepcion', texto: 'La fiesta en su punto más alto: el ramo al aire y las solteras cruzando los dedos.', alt: 'Novia lanzando el ramo con lentes oscuros bajo las luces de la fiesta' },
];

// Paquetes de su página de precios. "desde" = desde ese precio. inicio = primer capítulo cubierto (índice en capitulos).
export const paquetes = [
  { id: 'plata', nombre: 'Plata', desde: 95_000, inicio: 8, cobertura: 'A partir de la ceremonia y hasta que la novia lance el ramo o el novio retire la liga.',
    texto: 'Increíbles fotografías llenas de emociones, una película cinematográfica y un video tráiler cinematográfico espectacular.' },
  { id: 'oro', nombre: 'Oro', desde: 115_000, inicio: 6, cobertura: 'A partir del first look, ceremonia y hasta que la novia lance el ramo o el novio retire la liga.',
    texto: 'Asombrosas fotografías en alta calidad, una película cinematográfica en 4K y un video tráiler cinematográfico espectacular.' },
  { id: 'diamante', nombre: 'Diamante', desde: 135_000, inicio: 1, cobertura: 'A partir del arreglo del novio y la novia y hasta que la novia lance el ramo o el novio retire la liga.',
    texto: 'Asombrosas fotografías en alta calidad, una película cinematográfica en 4K, un tráiler cinematográfico, galería impresa en acabado tipo piel, disco duro y escenas con drone.' },
] as const;

export const entrega = 'Una película documental en 4K de todo su gran día, hasta 600 fotografías de cada parte de su boda y un tráiler cinematográfico para redes sociales.';
export const incluye = [
  'Cobertura de hasta 16 horas personalizada en cada boda por Aldo Castañeda',
  'Ambiente cálido y amable en cada sesión',
  'Edición de video estilo película cinematográfica',
  'Retoque foto a foto para que luzcas espectacular',
  'Entrega garantizada bajo contrato',
  'Entrega de todo el material editado y sin edición',
  'Servicio deducible de impuestos',
];

export const acerca = [
  'Soy un fotógrafo y cineasta apasionado con el mundo nupcial. El día que cubrí mi primera boda una cosa estaba clara: me enamoré de las bodas. Me dedico de tiempo completo a ser fotógrafo y cineasta de bodas.',
  'He estado capturando momentos toda mi vida. Aproximadamente hace 15 años compré mi primera cámara, he acompañado a más de 200 parejas en el día de su boda y he viajado por toda la República Mexicana a bodas increíbles.',
];

export const testimonios = [
  { texto: 'El trato de Aldo y de su equipo desde el momento 1 es muy cálido, amable y siempre muy profesional. Antes de la boda tuvimos un par de reuniones, en donde nos preparó con consejos para la boda y por supuesto con consejos de cómo interactuar con la cámara.', autor: 'Cristopher & Lisanne, 2025' },
  { texto: 'Encontrar a la persona correcta para inmortalizar el día de tu boda es una de las decisiones más importantes. Bastó con ver los trabajos de su página para saber que no queríamos a nadie más que no fuera él.', autor: 'Airam & Juan Carlos, 2024' },
  { texto: 'Conocí el trabajo de Aldo gracias a TikTok… superó mis expectativas por muchísimo. Agradezco muchísimo por hacernos recordar este día tan especial de tan bella manera.', autor: 'Esveidi & Erivelto, 2024' },
];

export const preguntas = [
  { p: '¿Con cuánto tiempo de anticipación debo apartar a Aldo y su equipo?', r: 'En cuanto tengas tu fecha exacta, házmelo saber para corroborar disponibilidad, aunque lo idóneo es de 10 a 12 meses de anticipación.' },
  { p: '¿Aldo nos guiará con poses lindas?', r: 'Tendremos una reunión previa a la boda donde nos conoceremos y ajustaremos todas las ideas para su boda: poses, momentos espontáneos, etc.' },
  { p: '¿Cómo recibiremos todas nuestras fotos y película?', r: 'Mediante una nube digital, además físicamente en álbum impreso y un disco duro con todo su material.' },
  { p: '¿Cómo apartar mi fecha?', r: 'Apartamos su fecha con un anticipo del 50% del paquete elegido.' },
  { p: '¿Agregan viáticos?', r: 'No agregamos viáticos a bodas dentro de la República Mexicana.' },
];
