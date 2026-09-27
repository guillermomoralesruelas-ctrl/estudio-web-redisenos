// Contenido de HOUSE Restaurante. Regla: nada inventado; lo deducido está marcado como pendiente en CAMBIOS.md.
// De dónde sale cada texto:
//   - investigacion/crudo.json (inicio del hotel Las Casas B+B, el clon): el bloque "Restaurante Jardín en Cuernavaca |
//     HOUSE Restaurante", las preguntas frecuentes del hotel sobre HOUSE, la dirección y el WhatsApp del restaurante.
//   - Tomado con curl el 2026-09-27 (no está en crudo.json; descargas fuera del estudio): las páginas del restaurante
//     https://lascasasbb.com/es/house-restaurante-en-cuernavaca/ y sus subpáginas menu-de-desayuno/,
//     menu-de-desayuno-brunch-de-domingo/, menu-de-comida/, menu-de-cena/, para-llevar/ y feliz-cumpleanos/.
//     La carta completa sale de sus PDF (ver carta.ts).
// Las rutas de imagen son relativas a publicDir (../assets/web, copias .webp de fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export type Foto = { src: string; alt: string; w: number; h: number };

export const negocio = {
  nombre: 'HOUSE Restaurante',
  titular: 'Restaurante en Cuernavaca Centro Histórico con jardín',
  lema: 'Cocina mexicana y mediterránea. Espíritu California.',
  intro: 'Desayuno, brunch dominical, comida y cena frente al Palacio de Cortés. Abierto todos los días.',
  chef: 'Daniela Salgado Romero',
  telefono: '777 318 3782',
  tel: '+527773183782',
  whatsapp: '527773183782',
  calle: 'Fray Bartolomé de las Casas 110',
  colonia: 'Col. Centro, C.P. 62000',
  ciudad: 'Cuernavaca, Mor.',
  mapa: 'https://maps.app.goo.gl/ZybC2eHGCGTTHpct6',
  // Su enlace de OpenTable sin el parámetro de sesión "corrid" (ver CAMBIOS.md).
  opentable: 'https://www.opentable.com.mx/restref/client/?restref=162475&lang=es-MX',
  rappi: 'https://www.rappi.com.mx/restaurantes/1923222920-house-restaurant',
  paginaOriginal: 'https://lascasasbb.com/es/house-restaurante-en-cuernavaca/',
  romanticas: 'https://lascasasbb.com/es/experiencias/cena-romantica-en-house-restaurante-cuernavaca/',
  hotel: 'https://lascasasbb.com/es/',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/houserestaurante/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/HouseCuernavaca/' },
    { nombre: 'Tripadvisor', url: 'https://www.tripadvisor.com.mx/Restaurant_Review-g150797-d2650409-Reviews-House_Restaurant-Cuernavaca_Central_Mexico_and_Gulf_Coast.html' },
  ],
  logo: { src: img('logo.webp'), alt: 'HOUSE Restaurant', w: 150, h: 150 } as Foto,
  logoBlanco: { src: img('logo-blanco.webp'), alt: 'HOUSE Restaurant', w: 300, h: 300 } as Foto,
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const reservarGeneral = wa('Hola, HOUSE. Quiero reservar una mesa para el día __ a las __. Somos __ personas.');
export const pedirParaLlevar = wa('Hola, HOUSE. Quiero hacer un pedido para llevar. ¿Me pueden confirmar tiempos y disponibilidad?');
export const pedirCumple = wa('Hola, HOUSE. Quiero ordenar un Birthday Breakfast para el día __ (Pan francés o Chilaquiles HOUSE). ¿Me cotizan el envío a __?');
export const pedirEvento = wa('Hola, HOUSE. Quiero organizar una celebración para __ personas el día __.');

export const fotos = {
  comedor: { src: img('comedor-noche.webp'), alt: 'El comedor de HOUSE de noche junto a la alberca: mesas blancas con velas, copas y flores, cortinas de lino y muros de piedra', w: 1086, h: 724 },
  jardin: { src: img('jardin.webp'), alt: 'Salas con cojines azules bajo sombrillas blancas en el jardín de Las Casas B+B', w: 1200, h: 801 },
  jardinAlberca: { src: img('jardin-alberca.webp'), alt: 'El jardín y la alberca de Las Casas B+B al atardecer, con sombrillas, palmeras y la casa iluminada al fondo', w: 1400, h: 935 },
  mesero: { src: img('alberca-mesero.webp'), alt: 'Un mesero camina junto a la alberca, al pie de la escalera del jardín', w: 800, h: 1199 },
} satisfies Record<string, Foto>;

// Reconocimientos, como los escribe su página principal y la de cena (pendiente de confirmar vigencia).
export const reconocimientos = [
  'Fodor’s Choice',
  'Recomendado por Marco Beteta',
  'Más de 1,250 reseñas en Google',
  '4.8/5 en OpenTable',
  '#1 Brunch en Cuernavaca, según OpenTable',
  '#1 Desayuno y brunch y #1 para cenar en Cuernavaca, según Wanderlog 2026',
];

// "Restaurante jardín en el Centro Histórico de Cuernavaca" (su página principal), sus tres párrafos.
export const cocina = {
  titulo: 'México y el Mediterráneo se encuentran en la mesa de HOUSE.',
  parrafos: [
    'Aceite de oliva, aceitunas kalamata y limón amarillo. Labneh con dukkah, muhammara y pan tatemado. Cilantro criollo, hoja de aguacate y chiles que tienen nombre: cascabel, guajillo, chilhuacle. El encuentro sucede en los platos: mantequilla de chipotle junto al mezze del desayuno; limón preservado, chile serrano y menta entre los linguini.',
    'En la cocina de Daniela Salgado Romero, los ravioles se hacen en casa y los jitomates de su salsa pasan por el horno; los pimientos, por el fuego directo. El mole negro lleva chiles, chocolate, ajonjolí y tiempo. Amasamos el pan y hacemos nuestros postres. Por la mañana, la miel en panal de Tepoztlán acompaña el pan rústico; por la noche, llegan el pork belly de cocción lenta, los vinos mexicanos y otra cuchara para compartir el postre.',
    'Frente al Palacio de Cortés, en el Centro Histórico de Cuernavaca, la mesa cambia con el día: desayuno, brunch dominical, comida y cena. Puedes venir por pan y café, reunir amigos para comer o hacer del viernes una buena cena.',
  ],
  cierre: 'En pareja, con amigos, en familia. Para hablar de negocios o celebrar algo bueno.',
};

// "Dónde desayunar, comer y cenar en Cuernavaca" (su página principal): los cuatro momentos, con su horario.
export type Momento = { id: 'desayuno' | 'brunch' | 'comida' | 'postres'; nombre: string; cuando: string; hora: string; texto: string };
export const momentosIntro = 'Pan recién horneado para empezar. Platos al centro para alargar la comida. Una cena que empieza con la primera copa. Y los domingos, brunch para tomarse la mañana.';
export const momentos: (Momento & { menu: 'desayuno' | 'brunch' | 'comida' })[] = [
  { id: 'desayuno', menu: 'desayuno', nombre: 'Desayuno', hora: '8:00', cuando: 'Lunes a viernes, 8:00 a.m. a 12:00 p.m.; sábados, 8:00 a.m. a 1:00 p.m.', texto: 'Pan recién horneado, mermelada hecha en casa y miel en panal de Tepoztlán. Chilaquiles HOUSE con morita, cascabel y guajillo; benedictinos con holandesa de chipotle. Para compartir entre dos, el Mezze del Jardín: muhammara, labneh con dukkah, feta y pan tomàquet con jamón serrano.' },
  { id: 'brunch', menu: 'brunch', nombre: 'Brunch dominical', hora: '9:00', cuando: 'Domingos, 9:00 a.m. a 1:00 p.m.', texto: 'El domingo merece una mesa larga. Huevos benedictinos, Chilaquiles HOUSE o pan francés de brioche. Una mimosa, café y tiempo para pedir algo más. El brunch se sirve a la carta: cada quien elige su antojo.' },
  { id: 'comida', menu: 'comida', nombre: 'Comida', hora: '12:00', cuando: 'Todos los días, 12:00 p.m. a 6:00 p.m.', texto: 'Empieza al centro: mezze mediterráneo con rib eye en harissa, hummus, tzatziki y aceitunas kalamata. Ceviches, tostadas y pan a la parrilla para compartir. Después, róbalo con risotto, ravioles hechos en casa o mole negro. Una copa de vino mexicano acompaña la mesa.' },
  { id: 'comida', menu: 'comida', nombre: 'Cena', hora: '18:00', cuando: 'Todos los días, desde las 6:00 p.m.', texto: 'Ravioles hechos en casa, con jitomates al horno y pimientos al fuego en la salsa. Pork belly: cuatro horas de cocción lenta y un último paso por la plancha. Mole negro preparado en nuestra cocina. Empieza con un Rosa Mexicano o un Limoncello Spritz; después, vino mexicano y un buñuelo de guayaba para compartir.' },
];

// "HORARIOS" de su página principal: "Abrimos todos los días. Elige tu hora y ven con hambre."
export const horarios = [
  { dias: 'Lunes a jueves', abre: '8:00 a.m.', cierra: '10:00 p.m.', ultima: '8:00 p.m.' },
  { dias: 'Viernes y sábados', abre: '8:00 a.m.', cierra: '11:00 p.m.', ultima: '9:00 p.m.' },
  { dias: 'Domingos', abre: '9:00 a.m.', cierra: '8:00 p.m.', ultima: '6:00 p.m.' },
];

// Sus preguntas frecuentes (página principal y de cena), recortadas.
export const saber = [
  { t: '¿Necesito reservar?', d: 'Puedes venir sin reservación, sujeto a disponibilidad. Para cenas de viernes y sábado, brunch dominical y grupos, recomendamos apartar tu mesa.' },
  { t: 'Valet parking', d: '$25 antes de las 6:00 p.m. y $50 a partir de las 6:00 p.m. Llega a Fray Bartolomé de las Casas 110 y nuestro equipo te ayudará con tu auto.' },
  { t: 'Pet-friendly', d: 'El jardín y la terraza son pet-friendly. Puedes venir con tu perro con correa.' },
  { t: '¿Y si llueve?', d: 'Seguimos abiertos. En temporada de lluvias, cuando el pronóstico anuncia lluvia para el día, movemos el servicio a la terraza techada. Sigues comiendo junto al jardín, a cubierto.' },
  { t: 'Vegetariano y vegano', d: 'Los ravioles de ricotta, mozzarella y espinaca, los tacos de champiñones, la pasta al pomodoro y la pizza margherita. El mole negro también está disponible con portobello, en versión vegana. Si tienes alguna alergia o restricción alimentaria, coméntala al reservar y al ordenar.' },
  { t: 'Si no tomas alcohol', d: 'Tenemos una carta completa de coctelería sin alcohol, HOUSE Zero Proof, preparada en barra con fruta fresca. El Rosa Mexicano existe en versión sin alcohol con guayaba rosa, toronja, piña asada y chile puya.' },
  { t: 'Con niños', d: 'Las familias son bienvenidas. En la carta hay pastas, pizzas y platos sencillos que funcionan bien para los niños. Al reservar, indícanos cuántos adultos y niños vienen.' },
  { t: 'Silla de ruedas', d: 'HOUSE está en una casa del Centro Histórico que no fue construida con accesibilidad universal. Nuestro equipo apoya en la llegada y el acomodo: avísanos al reservar y preparamos la mejor mesa para ti.' },
  { t: 'Formas de pago', d: 'Efectivo y todas las tarjetas de crédito y débito, incluidas American Express, Visa y Mastercard. Precios en pesos mexicanos.' },
];

// Semana de HOUSE, de su pregunta "¿Qué recomiendan para comer y compartir?" y las siguientes.
export const semana = [
  { dia: 'Martes', texto: 'Nos gusta darle espacio al romance: vino mexicano, ravioles hechos en casa y un postre con dos cucharas.' },
  { dia: 'Miércoles', texto: 'Celebramos lo que merece una mesa: un cumpleaños, un ascenso o una buena noticia.' },
  { dia: 'Jueves', texto: 'Son «al centro»: distintos platos en medio de la mesa.' },
  { dia: 'Viernes y sábado', texto: 'Reúne a tus amigos: hay tacos, pizzas y platos para compartir.' },
];

export const paraLlevar = {
  titulo: 'Comida para llevar',
  texto: 'Delivery y pick-up con el sabor de HOUSE: cocina mexicana–mediterránea, porciones generosas y listo para disfrutar.',
  formas: [
    { t: 'WhatsApp', d: 'Te confirmamos tiempos y disponibilidad.' },
    { t: 'Pick-up en HOUSE', d: 'Recoge en el Centro Histórico.' },
    { t: 'Rappi', d: 'Disponible con costo de envío según la zona.' },
  ],
  horario: [
    { dias: 'Lunes a jueves', h: '8:00 a.m. a 8:30 p.m.' },
    { dias: 'Viernes y sábado', h: '8:00 a.m. a 9:00 p.m.' },
    { dias: 'Domingo', h: '9:00 a.m. a 6:00 p.m.' },
  ],
  pdfs: [
    { t: 'Menú para llevar: desayuno y brunch (PDF)', url: 'https://lascasasbb.com/wp-content/uploads/Menu-Go-To-Desayuno-y-brunch-v-15-01-26.pdf' },
    { t: 'Menú para llevar: comida y cena (PDF)', url: 'https://lascasasbb.com/wp-content/uploads/Menu-Go-To-Comida-Cena-v-15-01-26.pdf' },
  ],
};

export const cumple = {
  titulo: 'Birthday Breakfast',
  subtitulo: 'Desayuno sorpresa de cumpleaños a domicilio',
  precio: 625,
  incluye: [
    'Platillo principal a elegir: pan francés o Chilaquiles HOUSE',
    'Café a elegir: cappuccino, latte, americano o té',
    'Jugo de naranja fresco',
    'Mega galleta de chocolate chip recién horneada',
    'Decoración especial',
    'Mimosa de cortesía',
  ],
  notas: 'Más envío (se cotiza al ordenar según la zona) o pick up sin costo en HOUSE. Ordena con mínimo 24 horas de anticipación. Agrega el Berry-Banana Cake personal por $210 y una tarjeta con dedicatoria sin costo.',
};

export const evento = 'Organizamos cumpleaños, aniversarios y reuniones de 10 a 50 personas, con comida, bebidas y servicio coordinados. Cuéntanos la fecha, cuántos vienen y qué tienes en mente; nosotros te ayudamos a darle forma.';

export const citas = [
  { texto: 'La comida es deliciosa. Hacía tiempo que no disfrutaba una cena así.', quien: 'Shannon M., San Diego (OpenTable)' },
  { texto: 'Mi lugar de brunch favorito.', quien: 'Gon Vivant (@gon_vivant)' },
];

// Donde está: lo que dice el sitio del hotel.
export const lugar = {
  titulo: 'Aquí nos encuentras.',
  texto: 'En Fray Bartolomé de las Casas 110, Centro Histórico de Cuernavaca, frente al Palacio de Cortés. Busca el gran 110 en la fachada de Las Casas B+B: ahí nos encuentras, a unos pasos de la vida del Centro.',
  hotel: 'HOUSE está dentro de Las Casas B+B, un hotel boutique de 11 habitaciones con alberca climatizada y The White Spa. Sus huéspedes desayunan en HOUSE y, si su estancia incluye domingo, disfrutan el Sunday Brunch.',
};

export const cierre = {
  titulo: 'La próxima buena mesa puede ser la tuya.',
  texto: 'Ven por un desayuno recién hecho, una comida que se alarga o una cena con tu gente. Los domingos, empieza con brunch y deja que la tarde encuentre su ritmo.',
};
