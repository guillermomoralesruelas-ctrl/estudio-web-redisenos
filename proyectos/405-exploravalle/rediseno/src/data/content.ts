// Contenido de Explora Valle, tomado del sitio original: clon en ../sitio, investigacion/crudo.json,
// investigacion/original.html y, para las fichas de cada experiencia, sus páginas leídas con curl el 2026-09-27
// (solo texto; no se bajó ninguna imagen).
// Regla: nada inventado. Lo que falta está en CAMBIOS.md → "Pendiente de confirmar con el cliente".
// Las rutas de imagen son relativas a publicDir (../assets/web, copias .webp de fotos-web.mjs).
import medidas from './fotos.json';

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export type Foto = { src: string; alt: string; w: number; h: number };
const foto = (nombre: keyof typeof medidas, alt: string): Foto => ({ src: img(`${nombre}.webp`), alt, w: medidas[nombre][0], h: medidas[nombre][1] });

export const negocio = {
  nombre: 'Explora Valle',
  lema: 'Tours en Valle de Bravo',
  ciudad: 'Valle de Bravo, Estado de México',
  telefono: { texto: '722 851 90 81', href: 'tel:+527228519081' },
  whatsapp: '527228519081',
  correo: 'contacto@exploravalle.com',
  correoClientes: 'atencionaclientes@exploravalle.com',
  horario: '9:00 a 19:00 h',
  direccion: 'Rincón San Vicente #13, Col. Centro, Valle de Bravo, Estado de México',
  direccionCorta: 'Rincón San Vicente 13, Centro',
  // Coordenadas del mapa incrustado en su portada ("Explora Valle Mx").
  geo: { lat: 19.1915129, lng: -100.1328398 },
  mapa: 'https://www.google.com/maps/search/?api=1&query=Explora%20Valle%20Mx%2C%20Rinc%C3%B3n%20San%20Vicente%2013%2C%20Centro%2C%20Valle%20de%20Bravo',
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.084463461065!2d-100.13283978509703!3d19.191512887021737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd6596fefd7caf%3A0xdc71abd6db578234!2sExplora%20Valle%20Mx!5e0!3m2!1ses-419!2smx!4v1619751421107!5m2!1ses-419!2smx',
  logo: foto('logo-blanco', 'Explora Valle'),
  sitio: 'https://exploravalle.com/',
  redes: [
    { nombre: 'Facebook', href: 'https://www.facebook.com/exploravalle1' },
    { nombre: 'Instagram', href: 'https://www.instagram.com/exploravalle' },
    { nombre: 'X (Twitter)', href: 'https://twitter.com/ExploraValle1' },
  ],
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
// Su botón de WhatsApp (Joinchat) abre con "¡Hola! 👋 vengo de tú página web, busco descuentos de actividades en
// Valle de Bravo. ¡Me puedes brindar más información!". Aquí, el mismo mensaje sin "descuentos" como única pregunta.
export const mensajeBase = '¡Hola! Vengo de su página web, busco actividades en Valle de Bravo. ¿Me pueden brindar más información?';

export const portada = {
  foto: foto('panoramica', 'El lago de Valle de Bravo y el pueblo vistos desde la montaña, con un parapente sobre el bosque'),
  frase: 'Ven y encuéntrate a ti mismo conociendo la gran diversidad de tours en Valle de Bravo así como actividades recreativas y extremas.',
};

// ---------- Las diez experiencias (el exhibidor de postales) ----------

export type Grupo = 'tierra' | 'agua' | 'recorrido';
export type Ilustracion = 'cascada' | 'pena' | 'stupa' | 'lago' | 'pueblo';

export type Experiencia = {
  id: string;
  grupo: Grupo;
  nombre: string;
  corto: string; // nombre en la postal pequeña
  accion: string; // cómo se nombra en lo "escrito a mano" de la postal
  precio: number;
  antes: number;
  unidad: string; // qué cubre el precio
  capacidad: number; // personas por unidad (1 = por persona)
  duracion: string;
  dias: string;
  soloFinDeSemana?: boolean;
  horarios: string[];
  edad: string;
  descripcion: string;
  puntos: string[];
  incluye: string[];
  llevar: string[];
  encuentro: string;
  avisos: string[];
  minimo?: number;
  foto?: Foto;
  ilustracion?: Ilustracion;
  url: string;
};

const oficina = 'Rincón San Vicente #13, Col. Centro';

export const experiencias: Experiencia[] = [
  {
    id: 'bicicleta', grupo: 'tierra', nombre: 'Bicicleta en Valle de Bravo', corto: 'Bicicleta', accion: 'rodar en bicicleta por el bosque',
    precio: 650, antes: 850, unidad: 'por persona', capacidad: 1,
    duracion: '2:45 h', dias: 'Viernes a domingo; en puentes y vacaciones, toda la semana', soloFinDeSemana: true,
    horarios: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    edad: '8 años en adelante',
    descripcion: 'Vive la experiencia de hacer deporte y conoce los bosques mágicos de Valle de Bravo a través de un recorrido por sus exclusivos senderos, acompañado de tu familia o amigos.',
    puntos: ['Reserva Ecológica de Monte Alto', 'La Torre', 'Acatitlán', 'Laguna Negra', 'Stupa', 'Avándaro'],
    incluye: ['Bicicleta de montaña', 'Equipo de seguridad', 'Guía', 'Traslado', 'Entradas a la reserva ecológica', 'Hidratación', 'Barritas energéticas', 'Refacción', 'Seguro de gastos médicos menores'],
    llevar: ['Ropa cómoda o deportiva', 'Lentes de sol', 'Bloqueador'],
    encuentro: oficina, avisos: ['Grupos de 1 a 40 participantes.'],
    foto: foto('bicicleta', 'Una pareja con casco y bicicletas de montaña en un sendero del bosque de Valle de Bravo'),
    url: 'https://exploravalle.com/bicicleta-en-valle-de-bravo/',
  },
  {
    id: 'cuatrimoto', grupo: 'tierra', nombre: 'Cuatrimoto en Valle de Bravo', corto: 'Cuatrimoto', accion: 'manejar cuatrimoto',
    precio: 1000, antes: 1200, unidad: 'por cuatrimoto (maneja 1 y puede ir 1 acompañante)', capacidad: 2,
    duracion: '1:30 a 1:45 h (el tiempo extra tiene costo)', dias: 'Lunes a domingo',
    horarios: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '17:45'],
    edad: '18 años en adelante quien maneja; los menores van de acompañantes',
    descripcion: 'Vive la experiencia de manejar una cuatrimoto por las cascadas o miradores de Valle de Bravo más importantes, a través de sus impresionantes bosques y escenarios naturales. Es automática, de 250 cc, marca Honda.',
    puntos: ['Ruta de las cascadas', 'Reserva de Monte Alto', 'Stupa', 'Laguna Negra (preguntar)'],
    incluye: ['Cuatrimoto', 'Casco', 'Guía Vallesano', 'Instrucciones de uso'],
    llevar: ['Ropa cómoda o deportiva', 'Lentes de sol', 'Bloqueador'],
    encuentro: oficina,
    avisos: ['La ruta es mixta: carretera y terracería.', 'No se recomienda con problemas de espalda o cadera ni en el embarazo.'],
    foto: foto('cuatrimoto', 'Un grupo de amigas con casco junto a sus cuatrimotos en el bosque'),
    url: 'https://exploravalle.com/cuatrimoto-en-valle-de-bravo/',
  },
  {
    id: 'cabalgata', grupo: 'tierra', nombre: 'Cabalgata en el lago de Valle de Bravo', corto: 'Cabalgata', accion: 'la cabalgata al lago',
    precio: 650, antes: 750, unidad: 'por persona', capacidad: 1,
    duracion: '1:30 h', dias: 'Lunes a domingo',
    horarios: ['11:30', '12:00', '13:00', '14:00', '15:00', '16:00'],
    edad: '6 años en adelante',
    descripcion: 'Vive una increíble experiencia de montar a caballo por senderos fáciles hacia el lago de Valle de Bravo. Podrás escuchar durante el paseo el ruido del río y la tranquilidad que te conduce por el bosque, hasta donde el río desemboca en el lago.',
    puntos: ['Avándaro', 'Sendero por el río', 'Cerro Gordo', 'Stupa'],
    incluye: ['Caballerango y guía', 'Instrucciones básicas', 'Acceso al centro ceremonial', 'Caballo', 'Silla charra y cuerdas', 'Pláticas', 'Seguro de gastos médicos menores'],
    llevar: ['Ropa cómoda y abrigadora', 'Tenis o zapatos', 'Bloqueador', 'Sombrero o gorra', 'Lentes'],
    encuentro: 'Las caballerizas en Avándaro: te mandan la ubicación por WhatsApp',
    avisos: [],
    foto: foto('cabalgata', 'Una pareja a caballo en un sendero del bosque de pinos'),
    url: 'https://exploravalle.com/cabalgata-en-el-lago-de-valle-de-bravo/',
  },
  {
    id: 'kayak', grupo: 'agua', nombre: 'Kayak en Valle de Bravo', corto: 'Kayak', accion: 'remar en kayak',
    precio: 549, antes: 649, unidad: 'por kayak doble (2 personas)', capacidad: 2,
    duracion: '1:15 h (1:00 h sobre el kayak)', dias: 'Lunes a domingo',
    horarios: ['10:00', '11:00', '16:30', '17:00'],
    edad: '8 años en adelante',
    descripcion: 'Vive la increíble experiencia del paseo doble en kayak por el lago más grande de todo el Estado de México, a bordo de una embarcación donde eres el capitán. Puedes preguntar por los kayaks individuales.',
    puntos: ['El lago', 'La Peña', 'El muelle', 'Santa María'],
    incluye: ['Instrucciones de uso', 'Kayak', 'Remo', 'Chalecos salvavidas', 'Seguro de accidentes personales'],
    llevar: ['Ropa cómoda', 'Traje de baño', 'Gorra o sombrero', 'Bloqueador', 'Lentes obscuros'],
    encuentro: 'Embarcadero Explora Valle: te mandan la ubicación por WhatsApp',
    avisos: ['No incluye toallas.'],
    foto: foto('kayak', 'Una persona con chaleco salvavidas en un kayak rojo en el lago de Valle de Bravo'),
    url: 'https://exploravalle.com/kayak-en-valle-de-bravo/',
  },
  {
    id: 'lancha', grupo: 'agua', nombre: 'Lancha en Valle de Bravo', corto: 'Lancha', accion: 'el paseo en lancha',
    precio: 1700, antes: 1800, unidad: 'por lancha (caben hasta 5 personas)', capacidad: 5,
    duracion: '1:00 h', dias: 'Lunes a domingo',
    horarios: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    edad: '1 año en adelante',
    descripcion: 'Disfruta de un paseo en lancha rápida con la opción de hacer dona acuática, wakeboard o esquí en el lago del pueblo mágico, la presa Miguel Alemán, la que más agua aporta al sistema Cutzamala.',
    puntos: ['El lago', 'La Peña', 'El muelle', 'Santa María'],
    incluye: ['Capitán', 'Wakeboard', 'Esquí', 'Dona acuática', 'Instrucciones de uso', 'Chalecos salvavidas', 'Seguro de accidentes personales'],
    llevar: ['Ropa cómoda', 'Traje de baño', 'Gorra o sombrero', 'Bloqueador', 'Toalla', 'Lentes obscuros'],
    encuentro: 'Embarcadero: te mandan la ubicación por WhatsApp',
    avisos: [],
    foto: foto('lancha', 'Una persona esquiando en el lago de Valle de Bravo, jalada por la lancha'),
    url: 'https://exploravalle.com/lancha-en-valle-de-bravo/',
  },
  {
    id: 'cascadas', grupo: 'recorrido', nombre: 'Tour a las Cascadas de Valle de Bravo', corto: 'Cascadas', accion: 'el tour a las cascadas',
    precio: 349, antes: 449, unidad: 'por persona', capacidad: 1,
    duracion: '2:45 h', dias: 'Lunes a domingo',
    horarios: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    edad: '1 año en adelante',
    descripcion: 'Conoce la Cascada del Molino, el Velo de Novia y un mirador único Vallesano. Caminarás dentro de los bosques de pino-ocote-oyamel y, si gustas, podrás tocar el agua o dejar que la brisa recorra tu cuerpo cerca del río.',
    puntos: ['Cascada Velo de Novia', 'Avándaro', 'Cascada del Molino', 'Mirador'],
    incluye: ['Guía Vallesano', 'Traslado', 'Pláticas', 'Seguro de accidentes personales'],
    llevar: ['Ropa cómoda', 'Gorra o sombrero'],
    encuentro: oficina, avisos: [],
    ilustracion: 'cascada',
    url: 'https://exploravalle.com/tour-cascadas-en-valle-de-bravo/',
  },
  {
    id: 'pena', grupo: 'recorrido', nombre: 'Tour a la Peña de Valle de Bravo', corto: 'La Peña', accion: 'el tour a La Peña',
    precio: 350, antes: 500, unidad: 'por persona', capacidad: 1,
    duracion: '1:30 h', dias: 'Lunes a domingo',
    horarios: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    edad: '1 año en adelante',
    descripcion: 'Ven a conocer este mirador 360 del pueblo mágico: observa las reservas naturales de bosque y admira el lago. Es la montaña más alta de Valle de Bravo, con sus cuevas de roca caliza y sus leyendas.',
    puntos: ['La Peña', 'El lago', 'Valle de Bravo'],
    incluye: ['Guía', 'Transporte', 'Entradas a la Peña', 'Estacionamientos'],
    llevar: ['Calzado y ropa cómodos (la zona es pedregosa)', 'Gorra o sombrero', 'Lentes de sol', 'Bloqueador'],
    encuentro: oficina, avisos: ['Al subir se hacen 3 pausas.'],
    ilustracion: 'pena',
    url: 'https://exploravalle.com/tour-a-la-pena-de-valle-de-bravo/',
  },
  {
    id: 'stupa', grupo: 'recorrido', nombre: 'Tour a la Stupa de Valle de Bravo', corto: 'La Stupa', accion: 'el tour a la Stupa',
    precio: 400, antes: 489, unidad: 'por persona', capacidad: 1, minimo: 3,
    duracion: '1:30 a 1:45 h', dias: 'Lunes a domingo',
    horarios: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '15:30'],
    edad: '1 año en adelante',
    descripcion: 'Conoce la Gran Stupa de la Paz Mundial, un centro ceremonial en los bosques de pino-oyamel de Avándaro, donde podrás adentrarte en la paz que envuelve a este sitio.',
    puntos: ['La Gran Stupa', 'Avándaro', 'Cascada del Molino'],
    incluye: ['Guía Vallesano', 'Transporte en camioneta tipo van', 'Plática', 'Estacionamientos'],
    llevar: ['Ropa cómoda', 'Gorra o sombrero', 'Lentes de sol', 'Bloqueador'],
    encuentro: oficina, avisos: ['No incluye las entradas a los sitios.'],
    ilustracion: 'stupa',
    url: 'https://exploravalle.com/tour-a-la-stupa-de-valle-de-bravo/',
  },
  {
    id: 'todo', grupo: 'recorrido', nombre: 'Tour Todo en Valle de Bravo', corto: 'Todo Valle', accion: 'el Tour Todo en Valle',
    precio: 600, antes: 750, unidad: 'por persona', capacidad: 1,
    duracion: '5:00 h', dias: 'Lunes a domingo',
    horarios: ['10:15', '11:00', '12:00', '13:00', '14:00', '15:00'],
    edad: '1 año en adelante',
    descripcion: 'Los puntos más importantes y naturales del Pueblo Mágico en un solo tour, sin perder tiempo. El recorrido es mixto: vamos en camioneta y, llegando a cada punto, bajamos a caminar con un guía Vallesano que te explica la vida en el pueblo, sus costumbres y tradiciones.',
    puntos: ['Stupa de la Paz (Avándaro)', 'Cascada Velo de Novia', 'Cascada del Molino', 'Aterrizaje de parapentes', 'Templo del Cristo Negro', 'Mirador de la Peña', 'Mercado de Artesanías'],
    incluye: ['Guía Vallesano', 'Transporte', 'Estacionamientos', 'Seguro de gastos médicos menores'],
    llevar: ['Ropa cómoda', 'Gorra o sombrero', 'Bloqueador'],
    encuentro: oficina, avisos: [],
    ilustracion: 'lago',
    url: 'https://exploravalle.com/tour-todo-en-valle-de-bravo/',
  },
  {
    id: 'guia', grupo: 'recorrido', nombre: 'Guía turístico en Valle de Bravo', corto: 'Guía turístico', accion: 'un guía turístico',
    precio: 1600, antes: 1900, unidad: 'por guía (de 1 a 30 personas)', capacidad: 30,
    duracion: '5:00 h', dias: 'Lunes a domingo',
    horarios: ['10:00', '11:00', '12:00'],
    edad: '1 año en adelante',
    descripcion: 'Conoce el pueblo mágico de la mano de un guía Vallesano que te acompaña a los puntos que le indiques, te explica cada uno y te da consejos de qué hacer en tu estadía. El recorrido se hace en el vehículo de quien lo contrata.',
    puntos: ['Cascada Velo de Novia', 'Cascada del Molino', 'Aterrizaje de parapentes', 'Templo del Cristo Negro', 'Mirador de la Cruz de Misión', 'Mirador de la Peña', 'Iglesia de San Francisco de Asís', 'Mercado de Artesanías'],
    incluye: ['Guía Vallesano', 'Seguro de gastos médicos menores'],
    llevar: ['Ropa cómoda', 'Gorra o sombrero', 'Bloqueador'],
    encuentro: oficina, avisos: ['Van en tu vehículo; no incluye transporte.'],
    ilustracion: 'pueblo',
    url: 'https://exploravalle.com/guia-turistico-en-valle-de-bravo/',
  },
];

export const grupos: { id: Grupo; nombre: string }[] = [
  { id: 'tierra', nombre: 'Por tierra' },
  { id: 'agua', nombre: 'En el lago' },
  { id: 'recorrido', nombre: 'Recorridos por Valle' },
];

// El resto de su catálogo (su menú). Sin precio: no se revisaron sus fichas.
export const otras: { nombre: string; href: string }[] = [
  { nombre: 'Senderismo al amanecer', href: 'https://exploravalle.com/senderismo-amanecer-en-valle-de-bravo/' },
  { nombre: 'Senderismo', href: 'https://exploravalle.com/senderismo-en-valle-de-bravo/' },
  { nombre: 'Rapel y escalada', href: 'https://exploravalle.com/rapel-y-escalada-en-valle-de-bravo/' },
  { nombre: 'RZR de 2, 4 o 6 personas', href: 'https://exploravalle.com/rzr-en-valle-bravo-para-4-personas/' },
  { nombre: 'Cuatrimoto grande', href: 'https://exploravalle.com/cuatrimoto-en-valle-de-bravo-polaris-canam/' },
  { nombre: 'Lunada', href: 'https://exploravalle.com/lunada-en-valle-de-bravo/' },
  { nombre: 'Cañonismo', href: 'https://exploravalle.com/canonismo-en-valle-de-bravo/' },
  { nombre: 'Velero y velero grande', href: 'https://exploravalle.com/velero-en-valle-de-bravo/' },
  { nombre: 'Kayak individual', href: 'https://exploravalle.com/kayak-en-lago-valle-de-bravo/' },
  { nombre: 'Stand up paddle', href: 'https://exploravalle.com/stand-up-paddle-en-valle-de-bravo/' },
  { nombre: 'Vuelo en parapente', href: 'https://exploravalle.com/parapente-en-valle-de-bravo/' },
  { nombre: 'Parapente con tu mascota', href: 'https://exploravalle.com/vuela-parapente-con-tu-mascota/' },
  { nombre: 'Mariposa Monarca', href: 'https://exploravalle.com/mariposa-monarca-en-valle-de-bravo/' },
  { nombre: 'Team building', href: 'https://exploravalle.com/team-building-en-valle-de-bravo' },
];

// ---------- Valle de Bravo ----------

export const valle = {
  texto: 'Paraíso entre montañas, habitado en sus orígenes por indígenas Otomíes, Mazahuas y Matlatzincas y bautizado como Valle de Bravo en el siglo XVI en honor a San Francisco del Valle y Nicolás Bravo.',
  datos: [
    ['35 m', 'de caída vertical tiene el Velo de Novia, la cascada más grande del Estado de México.'],
    ['60 km', 'recorre su agua desde las faldas del Nevado de Toluca para llegar aquí.'],
    ['150 millones', 'de años tiene La Peña, la montaña más alta de Valle de Bravo y su mirador 360.'],
    ['1532', 'es el año de la fundación de Valle de Bravo, de raíces matlatzincas.'],
  ] as [string, string][],
  foto: foto('panoramica', 'El lago de Valle de Bravo con el pueblo y La Peña a la orilla'),
};

// ---------- Antes de venir (su "Información adicional" y su política) ----------

export const antes: [string, string][] = [
  ['Llega 10 minutos antes', 'Contempla el tráfico y los imprevistos: en ese tiempo se llenan las responsivas. Las actividades son bajo previa reservación y sujetas a disponibilidad.'],
  ['Come hora y media antes', 'Te recomendamos una ingesta de alimentos mayor a hora y media antes de las actividades para evitar mareos.'],
  ['Si llueve', 'Todas las actividades están sujetas a cambios por condiciones climáticas; en caso de mal clima, la actividad se pospone.'],
  ['Tolerancia de 10 minutos', 'El tiempo extra de tolerancia tiene un recargo del 20 % sobre el costo total. Si no llegas en el día y la hora asignados, la actividad se considera realizada.'],
  ['Sin estacionamiento', 'La oficina no cuenta con estacionamiento. Los tours que lo incluyen lo dicen en su postal.'],
  ['Sin alcohol y sin basura', 'La actividad se cancela si alguien llega alcoholizado. En todo momento se respeta la naturaleza y no se contamina.'],
];

// ---------- Opiniones (widget de reseñas de Google de su portada) ----------

export const google = { calificacion: '4.9', fuente: 'Google (Explora Valle Mx)' };
export const opiniones = [
  { texto: 'Excelente servicio y atención', autor: 'El Yuliusss' },
  { texto: 'Muy buen instructor.. una experiencia que no puedes dejar pasar', autor: 'karla solis' },
];
