// Contenido de Alas del Hombre, tomado del sitio original: investigacion/crudo.json (Inicio, Vuelo en Parapente en Valle
// de Bravo, Paragliding, Enamorados y Vuelo Terapia) y las 11 páginas de paquetes leídas en vivo con curl el 2026-09-27
// (solo texto; precios visibles, sin los comentados en el HTML). Nada inventado; lo redactado por nosotros está en
// CAMBIOS.md. Rutas de imágenes relativas a publicDir (../assets/web).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Alas del Hombre',
  whatsapp: '527222541403',
  whatsappTexto: '722 254 1403',
  telefono: '726 262 6382',
  telLink: '+527262626382',
  correo: 'reservaciones@alas.com.mx',
  direccion: 'Plaza Valle, local 22, Valle de Bravo, Estado de México',
  // Su propio mapa de Google (el iframe de sus páginas de paquetes) apunta a "Alas Del Hombre" en estas coordenadas.
  mapa: 'https://www.google.com/maps/search/?api=1&query=Alas%20del%20Hombre%2C%20Valle%20de%20Bravo',
  rnt: '32151100001',
  facebook: 'https://www.facebook.com/alas.del.hombre/',
  instagram: 'https://www.instagram.com/alasdelhombre/',
  youtube: 'https://www.youtube.com/user/alasdelhombre1976',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, quiero reservar un vuelo en parapente en Valle de Bravo.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  lago: f('lago-parapentes', 1920, 1080, 'Cinco parapentes sobre la presa de Valle de Bravo, con el pueblo en la orilla y las montañas al fondo'),
  selfie: f('tandem-selfie', 1400, 788, 'Piloto y pasajera en vuelo tándem, sonriendo a la cámara bajo el ala del parapente'),
  ala: f('ala-sobre-lago', 1400, 788, 'Parapente tándem volando sobre el lago de Valle de Bravo'),
  pueblo: f('tandem-pueblo', 1128, 880, 'Vuelo tándem visto desde arriba, con los techos de Valle de Bravo y el lago abajo'),
  orilla: f('tandem-lago', 800, 600, 'Pareja en vuelo tándem sobre la orilla del lago y el pueblo'),
  penon: f('tandem-penon', 800, 600, 'Vuelo tándem junto a la pared de roca de El Peñón de Temascaltepec'),
  presa: f('lago-orilla', 800, 600, 'La orilla de la presa de Valle de Bravo con lanchas y el cerro al fondo'),
  sol: f('tandem-sol', 900, 480, 'Vuelo tándem a contraluz, con el sol detrás del ala'),
};

export const logo = img('logo.webp');

export const vuelo = {
  precio: 1980,
  duracion: '20 minutos',
  incluye: 'Diploma, transporte local, seguro e impuestos',
  fotoVideo: 395,
  traer: 'Gafas, chamarra, zapatos cómodos para correr (tipo bota de preferencia) y protector solar.',
};

// Lo que cada paquete suma al vuelo. Las etiquetas son nuestras; lo que agrupan sale de la lista "Incluye" de cada paquete.
export type Extra = 'mesa' | 'hotel' | 'masaje' | 'lancha' | 'brindis' | 'propuesta' | 'karts' | 'video' | 'cascadas' | 'temascaltepec' | 'stupa' | 'traslado';
export const extras: { id: Extra; nombre: string }[] = [
  { id: 'mesa', nombre: 'Comer o cenar en La Michoacana' },
  { id: 'hotel', nombre: 'Noche de hotel' },
  { id: 'masaje', nombre: 'Masaje' },
  { id: 'lancha', nombre: 'Paseo en lancha' },
  { id: 'brindis', nombre: 'Vino espumoso' },
  { id: 'propuesta', nombre: 'Pedir matrimonio' },
  { id: 'karts', nombre: 'Go karts' },
  { id: 'video', nombre: 'Video del vuelo' },
  { id: 'cascadas', nombre: 'Cascadas y Pueblo Mágico' },
  { id: 'temascaltepec', nombre: 'Tirolesa y finca de café' },
  { id: 'stupa', nombre: 'Stupa budista' },
  { id: 'traslado', nombre: 'Traslado desde CDMX' },
];

// dia: lo que pasa después del vuelo, en el orden en que lo cuenta su descripción.
export type Paquete = {
  id: string; nombre: string; lema: string; precio: number; por: 'pareja' | 'persona'; vuelos: 1 | 2;
  despegue: string; extras: Extra[]; dia: string[]; nota?: string; url: string;
};
const u = (p: string) => `https://alas.com.mx/paquetes-de-aventura-${p}.php`;
export const paquetes: Paquete[] = [
  { id: 'enamorados', nombre: 'Enamorados', lema: 'Escápate con tu pareja a vivir una experiencia inolvidable.', precio: 9969, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['mesa', 'hotel', 'brindis'],
    dia: ['Cena en la terraza de La Michoacana', 'Noche en el Hotel Misión Grand Valle de Bravo', 'Brindis con vino espumoso'], url: u('enamorados') },
  { id: 'dos-dias', nombre: 'Dos días, una noche', lema: 'Regálate un descanso.', precio: 9269, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['mesa', 'hotel'],
    dia: ['Comida en La Michoacana', 'Noche en el Hotel Misión Grand Valle de Bravo'], url: u('dos-dias-una-noche') },
  { id: 'anillo', nombre: 'Anillo de compromiso', lema: '¿Te quieres casar conmigo?', precio: 7699, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['propuesta', 'lancha', 'brindis'],
    dia: ['En el aterrizaje: manta "¿Te quieres casar conmigo?", ramo de flores, mesa y charola de quesos', 'Brindis con vino espumoso', 'Paseo en lancha por el lago'], url: u('anillo-de-compromiso') },
  { id: 'compartiendo', nombre: 'Compartiendo el cielo', lema: 'Compartimos contigo lo que más nos gusta: ¡volar!', precio: 7589, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['masaje', 'lancha', 'brindis'],
    dia: ['Masaje relajante para los dos', 'Paseo en lancha al atardecer', 'Vino espumoso y charola de carnes frías'], url: u('compartiendo-el-cielo') },
  { id: 'terapia', nombre: 'Vuelo Terapia', lema: 'Conéctate contigo y tu entorno.', precio: 7299, por: 'persona', vuelos: 1,
    despegue: 'Reserva Monte Alto', extras: ['masaje', 'stupa', 'hotel'],
    dia: ['Masaje de relajación', 'Visita a la Gran Stupa Budista de la Paz', 'Noche en el Hotel Misión Grand Valle de Bravo'], url: u('vuelo-terapia') },
  { id: 'temascaltepec', nombre: 'Descubre Temascaltepec', lema: 'Vuela sobre El Peñón y recorre el Pueblo con Encanto.', precio: 6999, por: 'pareja', vuelos: 2,
    despegue: 'El Peñón, Temascaltepec', extras: ['temascaltepec', 'video'],
    dia: ['Tirolesa de 1,200 metros', 'Cascada y Aguas de Tehuacán en Real de Arriba', 'Finca de Café Barmor'], nota: 'Precio de promoción. Incluye video, traslado, seguros e impuestos.', url: u('descubre-temascaltepec') },
  { id: 'relajacion', nombre: 'Relajación en pareja', lema: 'Todos los días son el día del amor.', precio: 6689, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['masaje', 'mesa'],
    dia: ['Masaje de nuca, cuello y espalda para los dos', 'Cena en la terraza de La Michoacana'], url: u('relajacion-en-pareja') },
  { id: 'tour', nombre: 'Tour un día', lema: 'Celebra la vida en compañía de tus amigos.', precio: 6689, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['traslado', 'mesa'],
    dia: ['Pasan por ustedes a la Ciudad de México o Toluca', 'Comida en la terraza de La Michoacana', 'Regreso a casa'], nota: 'Solo para grupos de más de 4 personas.', url: u('tour-de-un-dia') },
  { id: 'agua', nombre: 'Agua, aire y tierra', lema: 'Flota en el aire y navega al atardecer.', precio: 6489, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['mesa', 'lancha', 'brindis'],
    dia: ['Comida en La Michoacana', 'Paseo en lancha al atardecer', 'Vino espumoso y charola de quesos'], url: u('agua-aire-tierra') },
  { id: 'adrenalina', nombre: 'Vuelo y adrenalina', lema: 'Vuela en parapente y corre en go karts.', precio: 5899, por: 'pareja', vuelos: 2,
    despegue: 'Reserva Monte Alto', extras: ['karts', 'video'],
    dia: ['Video del vuelo', 'Carrera de 30 minutos en go karts'], url: u('vuelo-y-adrenalina') },
  { id: 'puebleando', nombre: 'Volando y puebleando', lema: 'Vive Valle de Bravo desde todos los ángulos y altitudes.', precio: 3219, por: 'persona', vuelos: 1,
    despegue: 'Reserva Monte Alto', extras: ['cascadas'],
    dia: ['Recorrido por la Reserva Monte Alto', 'Tour por las cascadas y el Pueblo Mágico'], url: u('volando-y-puebleando') },
];

export const cursos = ['Curso de Iniciación', 'Curso de Progresión', 'Vuelo tándem didáctico con instructor', 'Termales y vuelo a campo traviesa (XC)', 'Curso de Paramotor'];

export const opiniones = [
  { texto: 'El sueño de volar como las aves, vistas increíbles de El Peñón Temascaltepec, muy seguro y divertido.', nombre: 'Alejandro Flores' },
  { texto: 'Si vas a practicar paragliding en México hazlo con los mejores, Alas del Hombre tiene el mejor vuelo en parapente.', nombre: 'Marcela Galván' },
  { texto: 'Volar en parapente por Valle de Bravo y Temascaltepec con Alas del Hombre fue la experiencia de mi vida.', nombre: 'Elizabeth Jazmín Michán' },
];

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
