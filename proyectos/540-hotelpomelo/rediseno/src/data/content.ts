// Contenido de Hotel Pomelo (Troncones, Guerrero).
// Textos copiados de investigacion/crudo.json (hotelpomelo.com, 2026-09-26). Lo que es nuevo
// (títulos de sección, botones, textos del atardecer) está declarado en CAMBIOS.md → "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

const wa = (numero: string, texto: string) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
const WA_HOTEL = '525520694573';
const WA_CHIRINGUITO = '525591935494';

export const negocio = {
  nombre: 'Hotel Pomelo',
  reservar: 'https://rbe.zaviaerp.com/hotel/hotelpomelo',
  whatsapp: wa(WA_HOTEL, 'Hola, me gustaría conocer más detalles sobre Pomelo'),
  whatsappVisible: '(+52) 55 2069 4573',
  telefono: 'tel:+525539190673',
  telefonoVisible: '(+52) 55 3919 0673',
  email: 'hola@hotelpomelo.com',
  direccion: ['Av. de la Playa s/n,', 'Troncones, Guerrero,', '40807 México'],
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hotel+Pomelo+Av.+de+la+Playa+Troncones+Guerrero',
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.313642964621!2d-101.71751890000002!3d17.776950699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8433f5e21d0bcbfd%3A0xd138c22f8c83a62d!2sHotel%20Pomelo!5e0!3m2!1ses-419!2smx!4v1745888946408!5m2!1ses-419!2smx',
  instagram: 'https://www.instagram.com/hotelpomelo/',
  facebook: 'https://www.facebook.com/people/Hotel-Pomelo/61565921543677/',
  privacidad: 'https://www.hotelpomelo.com/poltica-de-privacidad',
};

export const nav = [
  { href: '#habitaciones', label: 'Habitaciones' },
  { href: '#chiringuito', label: 'El Chiringuito de Fran' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#nosotros', label: 'Nosotros' },
];

export const fotos = {
  logo: f('logo-pomelo', 600, 315, 'Hotel Pomelo'),
  logoChiringuito: f('logo-chiringuito', 600, 193, 'El Chiringuito de Fran'),
  portada: f('portada-piscina', 1500, 1000, 'Piscina infinita de Pomelo entre palmeras, con el Pacífico al fondo'),
  portadaVertical: f('portada-piscina-vertical', 933, 1400, 'Piscina infinita de Pomelo entre palmeras, con el Pacífico al fondo'),
  camastros: f('jardin-camastros', 933, 1400, 'Camastro con toldo a rayas en el jardín, frente al mar'),
  pergolaMar: f('pergola-mar', 1500, 1000, 'Mesa bajo la pérgola con vista a la playa'),
  fachada: f('fachada', 1400, 933, 'Jardín y habitaciones de Pomelo con techo de teja'),
  franAngela: f('fran-angela', 800, 1000, 'Ángela y Fran, fundadores de Pomelo'),
};

export const ilustraciones = [
  f('ilus-pelicano', 520, 473, ''),
  f('ilus-mono', 520, 452, ''),
  f('ilus-iguana', 468, 520, ''),
  f('ilus-ostra', 520, 456, ''),
];

export const hero = {
  titulo: ['Aquí el tiempo', 'fluye diferente'],
  bajada: 'Un refugio de solo 6 habitaciones: el cuidado, la tranquilidad y la intimidad, que sólo se dan a esta escala.',
  lugar: 'Troncones, Guerrero',
};

export const bienvenida = {
  titulo: 'Bienvenidos a Pomelo, una extensión de nuestra casa',
  parrafos: [
    'En POMELO, el verdadero lujo es medir el tiempo en atardeceres. Vivimos con el ritmo de la luz, despertamos con un baño en el mar y dejamos que el día fluya entre paseos por la playa casi desierta, sesiones de yoga, olas perfectas y momentos de calma bajo una palmera.',
    'Frente al mar, la calidez de un diseño armonioso te invita a vivir descalzo y sentir la paz de una siesta bajo las palmas. Nuestra piscina infinita invita a olvidarse del tiempo, mientras que El Chiringuito ofrece lo mejor de la gastronomía española en un entorno que celebra la vida a cada instante.',
  ],
  cita: 'En Pomelo, la única regla es desconectar, sentirte libre y descubrir el verdadero lujo: el lujo de vivir en equilibrio.',
};

export const habitaciones = {
  titulo: 'Seis habitaciones. El tamaño que hace posible el cuidado que los hoteles grandes no pueden dar.',
  intro: 'Pomelo tiene seis habitaciones. A esta escala, cada detalle importa y cada huésped se vuelve el centro de todo. La arquitectura mediterránea, los muros de piedra encalada, la madera y el bambú de Aníbal, las piezas de artesanía de Michoacán: todo construido con criterio, sin prisa, con la intención de que quien llegue sienta que está en un lugar hecho con cuidado real.',
  afuera: 'Afuera, cien metros de playa desierta. Y el Pacífico.',
  tipo: 'Habitaciones frente al mar',
  datos: ['61 m²', '2 huéspedes', 'Cama King', 'Terraza privada', 'Ducha interior y exterior'],
  descripcion: [
    'Ubicada a pasos de la arena y bañada por la luz natural que entra a través de sus grandes ventanales, la habitación captura la esencia del mar desde cada rincón. La terraza privada se convierte en el escenario perfecto para disfrutar de un café al amanecer o una copa al atardecer, mientras el sonido de las olas te envuelve.',
    'Las duchas interior y exterior te permiten elegir entre la intimidad o la conexión directa con el entorno. El pequeño bar equipado con cafetera y tetera añade un toque de comodidad, invitándote a disfrutar de momentos tranquilos a tu ritmo.',
  ],
  remate: 'Aquí, el tiempo se mide en olas, brisas y los tonos dorados del sol.',
  equipadas: ['Aire acondicionado', 'Vistas panorámicas frontales al océano', 'Terraza privada', 'Ducha interior y exterior'],
  incluido: ['Wifi de alta velocidad', 'Desayuno a la carta', 'Pequeño bar con cafetera Nespresso y tetera Smeg'],
  fotos: [
    f('hab-cama', 1500, 998, 'Cama King con cojines turquesa y tapiz de palma'),
    f('hab-terraza', 1400, 931, 'Terraza privada de la habitación con muro encalado y macetas'),
    f('hab-flores', 1400, 931, 'Sala de la habitación con bugambilias y vista al jardín'),
    f('hab-bano', 1400, 931, 'Baño con lavabos de obra y espejos de arco'),
    f('hab-ducha-exterior', 1400, 931, 'Ducha exterior entre muros de bambú'),
    f('hab-escritorio', 1400, 931, 'Rincón de trabajo junto a la ventana de la habitación'),
  ],
};

export const espacios = {
  titulo: 'Nuestros espacios',
  parrafos: [
    'Pomelo nació de una construcción de los años ochenta, desarrollada originalmente por el Fonatur. Podríamos haberlo tirado todo y empezado de nuevo. No quisimos.',
    'Los muros son de piedra natural, gruesos, encalados en blanco: los mismos de siempre, que aíslan del calor sin necesitar nada más. La estructura de madera y teja de la región también se quedó. Todo lo que podía seguir en pie, siguió. Lo que añadimos vino de manos cercanas: la carpintería artesanal, el trabajo de Aníbal con el bambú (un oficio que pocos dominan como él) y piezas de artesanía de Michoacán que dan carácter sin imponerlo.',
  ],
  remate: 'El resultado no es un hotel diseñado para parecer auténtico. Es un espacio que lo es, porque nunca dejó de serlo.',
  fotos: [
    f('pergola-sala', 1500, 1000, 'Sala bajo la pérgola con cojines de ikat y muros de carrizo'),
    f('pergola-bar', 1400, 933, 'Barra de madera bajo la pérgola con cocos y flores'),
    f('pergola-cocos', 1400, 933, 'Cocos frescos sobre una mesa de madera'),
  ],
};

export const chiringuito = {
  titulo: 'Comer, picar y beber',
  subtitulo: 'Cocina de playa con alma mediterránea',
  destacado: 'El Chiringuito de Fran no es el restaurante del hotel. Es el corazón del proyecto.',
  parrafos: [
    'Bajo la dirección de Fran López, chef y propietario de La Barra de Fran en la Ciudad de México, reconocido en la Guía Michelin 2024, 2025 y 2026, nuestra propuesta fusiona lo mejor de la cocina española de playa con ingredientes frescos del Pacífico. Los arroces conviven con pesca del día, mariscos locales y verduras de la región, logrando una cocina que respeta sus raíces pero abraza su entorno.',
    'Y los productos de una pequeña huerta ecológica que dicta el menú, cuando la temporada lo permite.',
  ],
  reconocimiento: 'Reconocido como uno de los 100 mejores restaurantes de México por la Guía Marco Beteta 2026.',
  reservar: wa(WA_CHIRINGUITO, 'Hola, quiero reservar una mesa en el Chiringuito de Fran'),
  foto: f('chiringuito-noche', 1500, 1000, 'El Chiringuito de Fran iluminado al anochecer, frente a la playa'),
  detalle: [
    f('chiringuito-arroz', 1400, 933, 'Arroz negro con camarones recién salido del horno de leña'),
    f('chiringuito-mesa', 1400, 933, 'Mesa servida con cócteles, ensalada y flores'),
  ],
  maneras: [
    { titulo: 'Pérgola y piscina', texto: 'Aperitivos frescos y ligeros en un ambiente relajado e informal.', foto: f('cocina-pergola', 1200, 800, 'Piscina junto a la pérgola') },
    { titulo: 'El Chiringuito de Fran', texto: 'Barra fría, zona lounge, cócteles y mesas bajo las palmeras para una experiencia completa.', foto: f('cocina-chiringuito', 1200, 800, 'Mesas del Chiringuito bajo las palmeras') },
    { titulo: 'Frente a tu habitación', texto: 'Disfruta la experiencia gastronómica de manera íntima, con servicio directo al jardín.', foto: f('cocina-habitacion', 1200, 800, 'Terraza de una habitación que da al jardín') },
  ],
};

export type Experiencia = { nombre: string; texto: string; foto: Foto; whatsapp?: string };

export const experiencias: Experiencia[] = [
  { nombre: 'Il Dolce Far Niente', texto: 'Disfruta del jardín y la piscina con el sonido del mar de fondo.', foto: f('exp-dolce', 1400, 933, 'Camastros con toldo en el jardín, frente al mar') },
  { nombre: 'Clases de surf', texto: 'A menos de 20 minutos hay algunos de los mejores spots de surf de la costa mexicana: beach breaks, bahías, para short boards o long boards. Como La Saladita con su famosa larguísima izquierda.', foto: f('exp-surf', 1400, 655, 'Surfista sobre una ola en el Pacífico'), whatsapp: wa(WA_HOTEL, 'Hola, quisiera agendar una clase de surf durante mi visita a Pomelo') },
  { nombre: 'Masajes relajantes', texto: 'Regálate un momento de bienestar con un masaje en la comodidad de tu habitación. Relájate, desconéctate y deja que la brisa y manos expertas renueven tus sentidos.', foto: f('exp-masaje', 800, 1200, 'Masaje frente al mar'), whatsapp: wa(WA_HOTEL, 'Hola, me gustaría agendar un masaje durante mi estancia en Pomelo') },
  { nombre: 'Clases de yoga', texto: 'Encuentra equilibrio y paz en una clase de yoga frente al mar. Respira, fluye y conéctate con la naturaleza mientras el sonido de las olas guía cada movimiento.', foto: f('exp-yoga', 800, 1200, 'Clase de yoga en el jardín, entre palmeras'), whatsapp: wa(WA_HOTEL, 'Hola, quisiera agendar una clase de yoga en Pomelo') },
  { nombre: 'Terapias holísticas', texto: 'Espacios pensados para bajar el ritmo y volver al cuerpo. Sesiones como sound bath o ceremonia de cacao que invitan a soltar, respirar y habitar el presente desde otro lugar.', foto: f('exp-holistica', 857, 1200, 'Cuencos tibetanos y velas en la playa') },
  { nombre: 'Paseos a caballo', texto: 'Explora la belleza de Troncones a lomos de un caballo. Cabalga por la orilla del mar al amanecer o al atardecer y contempla un paisaje que invita a respirar más lento.', foto: f('exp-caballo', 800, 1200, 'Dos personas a caballo por la costa rocosa'), whatsapp: wa(WA_HOTEL, 'Hola, me gustaría organizar un paseo a caballo en Pomelo') },
  { nombre: 'PicNic & Cabalgata', texto: 'Un recorrido sin prisa en la playa desierta. El camino te lleva hasta un picnic preparado especialmente para ti. Tiempo para pausar, nadar o simplemente no hacer nada.', foto: f('exp-picnic', 800, 1200, 'Picnic bajo una sombrilla en la playa desierta') },
];

export const pomeloEs = {
  titulo: 'El mar, la calma y todo lo que importa',
  frases: [
    'POMELO es playas infinitas, energía vibrante y un espectáculo natural que incluye tortugas, ballenas y mantarrayas.',
    'POMELO significa surf, olas perfectas y conexión pura con el océano.',
    'POMELO es la brisa del Pacífico que se mezcla con una arquitectura que evoca la serenidad del Mediterráneo.',
    'POMELO es un rincón único: el equilibrio entre libertad y sofisticación es parte de cada momento.',
  ],
};

export const eventos = {
  titulo: 'Celebra frente al Pacífico',
  lead: 'Tu celebración sucede en El Chiringuito de Fran, seleccionado como uno de los 100 mejores restaurantes de México por la Guía Marco Beteta 2026, a pie de playa, con la cocina de Fran y el Pacífico como fondo.',
  parrafos: [
    'Pomelo es donde te quedas. Las seis habitaciones para los protagonistas y los más cercanos: despertar el día después con el mar enfrente, sin prisa, sin tener que ir a ningún lado. El desayuno, la piscina, la resaca de felicidad.',
    'Di “sí” con el Pacífico como testigo, organiza un retiro de bienestar en total serenidad o celebra un aniversario rodeado de quienes más quieres. Nuestro equipo se encarga de cada detalle para que tu única tarea sea disfrutar y conectar.',
  ],
  remate: 'No es el escenario del evento. Es lo que hace que el evento no acabe.',
  whatsapp: wa(WA_HOTEL, 'Hola, me gustaría organizar un evento en Pomelo'),
  fotos: [
    f('evento-boda', 1500, 1000, 'Pareja de novios en la playa de Troncones'),
    f('evento-carpa', 1400, 933, 'Carpa blanca con cojines en la arena para una ceremonia'),
    f('evento-mesa', 1400, 933, 'Mesa larga decorada con flores para una celebración'),
  ],
};

export const nosotros = {
  titulo: 'Somos Ángela y Fran',
  parrafos: [
    'Somos Ángela y Fran, una pareja española que llegó a México hace casi veinte años siguiendo sueños profesionales. Sin buscarlo, este país nos robó el corazón y nos regaló un nuevo hogar.',
    'De nuestra pasión por la cocina, el mar y la vida sencilla nació Pomelo, nuestro refugio junto al mar, un hotel boutique frente al Pacífico, y El Chiringuito de Fran, un restaurante donde celebramos los sabores y los momentos compartidos.',
  ],
  remate: 'Troncones fue el lugar que nos robó el corazón en 2008, y hoy queremos compartirlo contigo.',
  historia: 'https://www.hotelpomelo.com/acercade',
};

// Coordenadas aproximadas de Troncones (dato geográfico, no del negocio), para calcular el amanecer y el atardecer.
export const troncones = { lat: 17.787, lon: -101.739, zona: 'America/Mexico_City' };
