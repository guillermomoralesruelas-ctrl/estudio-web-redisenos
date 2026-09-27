// Contenido de Escuela de Vuelo FLUMEN (parapente en El Peñón, Temascaltepec, cerca de Valle de Bravo, Edo. Méx.).
// Textos copiados de investigacion/crudo.json (parapentevalledebravo.com: inicio, /experiencias/aventurero,
// /explorador, /explorer-vip y /volar-en-grupo, 2026-09-26). Se recortaron y se corrigieron erratas
// ("no han sensaciones" → "no hay sensaciones", "muncicipo" → "municipio", "increibles" → "increíbles",
// "Si le gusta el SIXFLAGS, te va gustar" → "Si te gusta Six Flags, te va a gustar", mayúsculas).
// No están en crudo.json y se tomaron del sitio real el 2026-09-27 con curl vía Jina Reader (el sitio bloquea curl
// directo con Mod_Security; ver CAMBIOS.md):
//   - el WhatsApp +52 722 521 0695, "¡Las reservaciones no son válidas sin el pago previo!", de /reservaciones;
//   - punto de encuentro, preguntas frecuentes, correo, horario del WhatsApp, cancelaciones y clima, de /experiencias/faq;
//   - precios y términos del Precio amigos, de /experiencias/precio-amigo;
//   - el descuento entre semana, de /experiencias/promo.
// Lo nuevo (títulos, botones, mensajes de WhatsApp y textos de "El recorrido de tu vuelo") está en CAMBIOS.md →
// "Qué se agregó".

const base = import.meta.env.BASE_URL;
const f = (nombre: string, w: number, h: number, alt: string) => ({ src: `${base}${nombre}.webp`, w, h, alt });
export type Foto = ReturnType<typeof f>;

/** El WhatsApp de su página /reservaciones y de su FAQ ("WA 7225210695"). */
export const WA = '527225210695';
export const wa = (texto: string) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
export const mensajeBase = 'Hola, me gustaría reservar un vuelo en parapente con FLUMEN. ¿Qué fechas tienen disponibles?';

const sitio = 'https://www.parapentevalledebravo.com';

export const escuela = {
  nombre: 'FLUMEN Escuela de Vuelo',
  reservar: `${sitio}/reservaciones`,
  whatsapp: wa(mensajeBase),
  whatsappVisible: '722 521 0695',
  horarioWhatsapp: '8:30 a 19:30',
  avisoWhatsapp: 'A veces estamos volando y no contestamos en el momento.',
  telefono: { visible: '+52 722 521 0695', href: 'tel:+527225210695' },
  email: 'info@parapentevalledebravo.com',
  encuentro: 'Oficina FLUMEN, en la calle Del Salitre',
  encuentroTexto: 'Todos los vuelos tándem que se llevan a cabo en la zona de vuelo conocida como "El Peñón" tienen su punto de reunión en la Oficina de FLUMEN. Nuestra transportación te recogerá y te regresará a este punto.',
  llegar: 'Si vienes desde Valle de Bravo, recomendamos que calcules salir por lo menos una hora antes de tu cita de vuelo.',
  // Su enlace "Oficina FLUMEN" de /experiencias/faq
  mapa: 'https://maps.app.goo.gl/CXFosgnGZYn7AXdV8',
  redes: [
    { nombre: 'Instagram', usuario: '@flumenparagliding', url: 'https://www.instagram.com/flumenparagliding/' },
    { nombre: 'Facebook', usuario: 'aprendeavolar.com.mx', url: 'https://www.facebook.com/aprendeavolar.com.mx/' },
    { nombre: 'YouTube', usuario: 'Su canal', url: 'https://www.youtube.com/channel/UCtgNJ11DHwO9DUeioFi8LnQ/feed' },
  ],
  cursos: 'https://aprendeavolar.com.mx/es/',
  faq: `${sitio}/experiencias/faq`,
  cancelaciones: `${sitio}/?view=article&id=24:cancelaciones&catid=12:informacion`,
  carta: `${sitio}/experiencias/faq/carta-responsiva`,
  privacidad: `${sitio}/?view=article&id=25:privacidad&catid=12:informacion`,
  promo: `${sitio}/experiencias/promo`,
  appi: 'https://appifly.org/?APPI-professionals-list&lang=en',
  logo: f('logo-flumen', 300, 68, 'Parapente Valle de Bravo, El Peñón, Temascaltepec, Edo. Méx.'),
};

export const portada = {
  lugar: 'Vuelos en parapente tándem en El Peñón, Temascaltepec, a 15 km de Valle de Bravo',
  titulo: 'La gran experiencia de tu vida',
  frase: 'Vuela como un superhéroe.',
  foto: f('vuelo-penon', 1600, 900, 'Vuelo tándem con parapente rojo sobre el bosque de pinos; al fondo, el monolito de El Peñón y el valle'),
};

export type VueloId = 'aventurero' | 'explorador' | 'vip';

export type Vuelo = {
  id: VueloId;
  nombre: string;
  frase: string;
  lema: string;
  texto: string;
  /** Minutos en el aire según la página de cada vuelo. */
  min: number;
  max: number | null;
  duracion: string;
  precio: number;
  incluye: string[];
  foto: Foto;
  pagina: string;
};

/** Duración, lo que incluye y precio de la página de cada vuelo (crudo.json). */
export const vuelos: Vuelo[] = [
  {
    id: 'aventurero',
    nombre: 'Aventurero',
    frase: 'Descubre cómo es andar por los cielos',
    lema: 'Está dentro de ti, ¡descúbrelo!',
    texto: 'Este vuelo en parapente es una excelente aproximación al mundo del parapente. De la mano de tu instructor, quien te brindará explicaciones muy sencillas, en cuestión de dar unos cuantos pasos, ya estarás flotando en el aire. La sensación de libertad es indescriptible. Aquí no hay sensaciones bruscas ni de caída libre y todos quienes han probado esta experiencia concuerdan en que es algo sumamente relajante.',
    min: 20,
    max: 25,
    duracion: '20 a 25 min',
    precio: 2699,
    incluye: ['Vuelo en termales', 'Fotos y video GoPro (te entregamos la Micro SD, sin editar)', 'Transporte local', 'Instructor certificado por APPI'],
    foto: f('aventurero', 600, 450, 'Pasajera con los brazos abiertos y su piloto en vuelo tándem, sobre montañas y un camino de terracería'),
    pagina: `${sitio}/experiencias/aventurero`,
  },
  {
    id: 'explorador',
    nombre: 'Explorador',
    frase: 'Vamos por más kilómetros en el aire',
    lema: '¡Ven a descubrir nuevos horizontes!',
    texto: 'A veces pasa que te quedas con ganas. Si el vuelo en parapente te ha cautivado, pero sientes que necesitas más, ésta puede ser tu opción. Este vuelo te permite recorrer más kilómetros en el aire gracias a las corrientes de aire del Peñón. Descubrirás las montañas típicas de la zona y tu perspectiva de Valle de Bravo cambiará por completo.',
    min: 30,
    max: 45,
    duracion: '30 a 45 min',
    precio: 3199,
    incluye: ['Vuelo en termales y de distancia sobre Temascaltepec y Valle de Bravo', 'Paseo por las montañas de la zona', 'Fotos y video GoPro (te entregamos la Micro SD, sin editar)', 'Transporte local', 'Instructor certificado por APPI'],
    foto: f('explorador', 610, 458, 'Pasajero con los brazos y las piernas abiertos bajo un parapente morado y amarillo, sobre una cañada'),
    pagina: `${sitio}/experiencias/explorador`,
  },
  {
    id: 'vip',
    nombre: 'Explorador VIP 360',
    frase: 'El mejor souvenir de tu viaje',
    lema: 'Nunca olvidarás esta hazaña.',
    texto: 'Un vuelo de distancia sobre la zona de Temascaltepec y Valle de Bravo, con unas vistas increíbles. Lo que hace una gran diferencia son las fotos que vamos a entregarte después del vuelo: fotos 360 originales y la versión editada en Photoshop. Somos los únicos que tenemos este servicio en México. Si te gusta Six Flags, te va a gustar terminar el vuelo con las acrobacias.',
    min: 45,
    max: null,
    duracion: '45 min o más',
    precio: 3799,
    incluye: ['Vuelo XC en termales sobre Temascaltepec y Valle de Bravo', 'Fotos y video Insta360, originales y editados', 'Acrobacias al final del vuelo', 'Transporte local', 'Piloto certificado por APPI'],
    foto: f('explorador-vip', 855, 641, 'Piloto y pasajera en vuelo tándem con parapente rojo y turquesa; abajo, praderas verdes y al fondo El Peñón'),
    pagina: `${sitio}/experiencias/explorer-vip`,
  },
];

export const pilotosAppi = 'En FLUMEN volarás únicamente con pilotos certificados APPI. Verifica la autenticidad de sus licencias aquí:';

export const grupo = {
  titulo: 'Las mejores experiencias son las que se comparten',
  texto: 'Las dos mejores compañías, amigos y naturaleza, se conjuntan para brindarnos una experiencia mágica. En grupos de 4 personas se puede disfrutar de un mejor precio.',
  condiciones: ['Aplica el mismo tipo de vuelo para cada uno de los integrantes del grupo.', 'Indispensable solicitar disponibilidad con 1 semana de anticipación.'],
  paquetes: [
    {
      nombre: '4 Exploradores volando simultáneamente',
      detalle: 'Vuelo en termales y de distancia, 30 a 45 min, paseo por las montañas de la zona, fotos GoPro, transporte local e instructores certificados por APPI.',
      antes: 12796,
      precio: 11796,
      foto: f('grupo-exploradores', 610, 457, 'Vuelo tándem con parapente rojo y turquesa entre nubes; a lo lejos vuelan otros parapentes'),
    },
    {
      nombre: '4 Aventureros, volando 2x2',
      detalle: 'Fotos GoPro, transporte local, equipo profesional e instructores certificados por APPI. El mejor precio.',
      antes: 11796,
      precio: 9796,
      foto: f('grupo-2x2', 610, 457, 'Pasajera sonriente en vuelo tándem sobre el bosque; al fondo, otro parapente del grupo'),
    },
  ],
  amigos: {
    titulo: '¡Precio amigos!',
    texto: 'Ven con tus amigos y obtén un precio especial.',
    duracion: '7 a 15 min',
    precios: [
      ['Grupo de 4', 1999],
      ['Grupo de 6', 1899],
    ] as const,
    terminos: [
      'Sujeto a disponibilidad de horario; se programan, por lo general, en los primeros horarios del día.',
      'No incluye fotografías ni videos; pueden contratarse por separado.',
      'No hay reembolsos, excepto en caso de mal clima.',
      'Tolerancia de llegada de 15 minutos; después, el vuelo podrá cancelarse sin derecho a reembolso.',
    ],
    foto: f('precio-amigos', 610, 458, 'Pasajera con gafas oscuras y su piloto bajo un parapente rosa, con El Peñón al fondo'),
    pagina: `${sitio}/experiencias/precio-amigo`,
  },
  entreSemana: 'Entre semana, los vuelos tienen un descuento de $50 por persona (no aplica en días feriados, puentes ni periodos vacacionales).',
};

export const penon = {
  titulo: 'Los mejores vuelos se hacen en El Peñón, en Temascaltepec',
  textos: [
    'Un despegue amplio y de superficie pareja, con la inclinación y dirección del viento ideales: hemos llegado a El Peñón, en el municipio de Temascaltepec. Aquí es posible el despliegue simultáneo de varios parapentes, sin presiones innecesarias.',
    'La amplitud de la zona montañosa, así como las condiciones térmicas, nos permiten elevar las posibilidades que ofrecemos a los pasajeros. El aterrizaje oficial del Peñón, conocido localmente como "Piano" o "África", es 8 veces más grande que el aterrizaje ubicado a la orilla del lago en Valle de Bravo.',
    'La zona de Temascaltepec, ubicada al sur de Valle de Bravo, te sorprenderá con su paisaje montañoso cubierto de pinos. El Peñón, monolito de interesante formación, será el invitado de honor en tu vuelo y en tus fotos.',
  ],
  foto: f('el-penon', 1600, 995, 'La pared de roca de El Peñón asoma sobre un mar de nubes'),
  pagina: `${sitio}/experiencias/faq/el-penon`,
};

export const equipo = {
  titulo: 'Quiénes somos',
  texto: 'Somos un equipo de pilotos comprometidos al 100% con la práctica del parapente, más allá de los vuelos tándem. Participamos en competencias y en talleres internacionales de instrucción.',
  aprender: 'Si el parapente te dejó tan atrapado que quieres aprender a volar, contáctanos. Has llegado al lugar correcto.',
  pilotos: [
    ['Marko', 'Master Instructor, Red Bull X-Alps 19, APPI 14372'],
    ['Camila', 'Piloto tándem APPI 45184, asistente instructor'],
    ['Pedro', 'Piloto tándem APPI'],
    ['Salvador', 'Piloto tándem APPI'],
  ] as const,
  foto: f('piloto-flumen', 1400, 788, 'Piloto en pose acrobática bajo una vela azul con la leyenda FLUMEN Paragliding, sobre campos de cultivo'),
};

export const galeria = [
  f('vuelo-saludo', 1000, 563, 'Pasajero saluda con la mano en vuelo tándem bajo un parapente azul y rosa, con el valle y sus poblados abajo'),
  f('sin-limite-de-edad', 665, 841, 'Pasajero de barba canosa y casco blanco sonríe junto a su piloto en pleno vuelo'),
  f('vuelo-nubes', 1000, 563, 'Parapente azul y rosa entre las nubes, visto desde arriba, con el bosque abajo'),
  f('vuelo-sonrisas', 1000, 563, 'Piloto y pasajera sonríen a la cámara en pleno vuelo sobre montañas secas y bosque'),
  f('amor-y-paz', 855, 852, 'Pasajera hace la señal de amor y paz durante el vuelo tándem, con el bosque abajo'),
];

/** Testimonios publicados en su página /experiencias/explorador (texto tal cual, recortado). */
export const testimonios = [
  ['La edad no es ninguna restricción para vivir la vida al máximo. A mis 67 años hice realidad uno de mis grandes sueños: volar. Siempre estaré eternamente agradecida con mi piloto, Marko, quien me inyectó de valor, seguridad y confianza para disfrutar el vuelo como pocas cosas en la vida.', 'Carmen Estrada'],
  ['Para mi cumple nos organizamos un grupo de amigos para pasar el fin de semana en Valle y volar en parapente. La experiencia en sí es mágica, pero cuando la compartes con la gente que quieres se convierte en algo inolvidable. Aún nos reímos mucho de cómo estábamos todos nerviosos en el despegue.', 'Paula Santillán'],
  ['El contacto con la naturaleza es una gran forma de desestresarme, y vivirlo desde las alturas hace que la experiencia sea aún más grandiosa. No puedes venir a Valle y no volar en el Peñón.', 'Ignacio Beteta'],
] as const;

/** Preguntas de su FAQ (/experiencias/faq), recortadas. */
export const preguntas = [
  ['¿Qué necesito para poder volar?', 'No necesitas ningún conocimiento previo. Antes de que tu vuelo comience, el piloto te brindará unas breves y muy sencillas instrucciones. Lo único que necesitas es una condición física básica para poder correr un poco en el despegue.'],
  ['¿Cómo debo ir vestido?', 'Se recomienda ropa cómoda (no falda, vestido o shorts) y una buena chamarra, calzado cómodo para correr (tenis o botas sin tacón), lentes de sol y bloqueador.'],
  ['¿Puedo comer antes del vuelo?', 'Se recomiendan siempre comidas muy ligeras. Si eres propenso al mareo, trae contigo alguna pastilla para evitarlo durante el vuelo.'],
  ['¿Qué pasa si voy un poco retrasado?', 'Se recomienda ampliamente que seas puntual: en varias ocasiones combinamos actividades de vuelo y las condiciones climáticas pueden impedir llevar a cabo tu vuelo si llegas tarde.'],
  ['¿Puede acompañarme un amigo o familiar?', 'Solo en vuelos en El Peñón: si hay transportación disponible, es posible, previa consulta y con un costo adicional. También pueden subir en su propio vehículo al despegue o esperarte en la zona de aterrizaje.'],
  ['¿Puedo llevar cámara?', 'La mayoría de nuestros paquetes incluye fotos, así que puedes despreocuparte por sacar la mejor foto de tu vuelo.'],
] as const;

export const reservas = {
  pasos: 'En su reserva en línea eliges la fecha, la hora, el tipo de vuelo o paquete y el número de personas; si hay niños, anótalo, y en notas avisa si alguien tiene el peso bajo o alto.',
  pago: '¡Las reservaciones no son válidas sin el pago previo! Los vuelos se reservan solo con el pago anticipado completo.',
  formas: 'Transferencia bancaria, PayPal, MercadoPago o efectivo. Si prefieres evitar la comisión de Stripe, puedes hacer la transferencia bancaria del monto original.',
  reprogramar: 'No hay reprogramaciones 48 h antes del vuelo.',
  cancelaciones: [
    ['0 a 24 horas antes', '100%'],
    ['24 a 72 horas antes', '50%'],
    ['3 a 30 días antes', '20%'],
    ['30 días o más', '10%'],
  ] as const,
  clima: 'El vuelo en parapente depende de condiciones meteorológicas que no pueden ser controladas. Si FLUMEN determina, por seguridad, que el clima no es adecuado, podrá reprogramar el vuelo o reembolsar el monto pagado con una tarifa administrativa del 2%. La decisión final sobre la realización del vuelo corresponde a FLUMEN.',
};
