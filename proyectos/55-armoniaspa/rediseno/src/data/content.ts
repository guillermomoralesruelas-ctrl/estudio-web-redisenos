// Armonía Spa — datos reales del negocio.
// Fuente: investigacion/crudo.json y investigacion/resumen.json.

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Armonía Spa',
  subtitulo: 'Tratamientos faciales, masajes, depilación láser, manicure y pedicure en Chihuahua',
  descripcion: 'En Armonía Spa creemos que el bienestar verdadero nace del equilibrio entre el cuerpo, la mente y el espíritu. Somos un espacio dedicado al descanso, la relajación y la renovación interior, donde cada detalle está pensado para ofrecerte una experiencia única de tranquilidad y cuidado personal.',
  ciudad: 'Chihuahua, Chihuahua',
  tel: '56 2055 7964',
  telLink: '525620557964',
  whatsappNum: '525620557964',
  email: 'armonia.spa32@gmail.com',
  instagram: 'https://www.instagram.com/armonia_spa30',
  facebook: 'https://www.facebook.com/share/1HsurQztsa/',
  maps: 'https://maps.google.com/?q=Armonía+Spa+Chihuahua',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsappNum}?text=${encodeURIComponent(mensaje)}`;

export const waGeneral = wa('Hola, me gustaría conocer más sobre sus servicios y agendar una cita. ¿Me pueden ayudar?');

export type Categoria = {
  id: string;
  nombre: string;
  emoji: string;
};

export const categorias: Categoria[] = [
  { id: 'facial',                   nombre: 'Faciales',             emoji: '✨' },
  { id: 'masaje',                   nombre: 'Masajes',              emoji: '🌿' },
  { id: 'depilacion-cera',          nombre: 'Depilación con cera',  emoji: '🕯️' },
  { id: 'depilacion-laser-ipl',     nombre: 'Láser IPL',            emoji: '💡' },
  { id: 'depilacion-laser-tridiodo',nombre: 'Láser tridiodo',       emoji: '🔬' },
  { id: 'manos-pies',               nombre: 'Manicure & Pedicure',  emoji: '💅' },
];

export type Servicio = {
  id: string;
  nombre: string;
  desc: string;
  precio: string;
  img: string;
  w: number;
  h: number;
  categoria: string;
};

export const servicios: Servicio[] = [
  // FACIALES
  { id: 'limpieza-facial',         nombre: 'Limpieza facial',               desc: 'Purifica y revitaliza la piel, eliminando impurezas y dejándola fresca y luminosa.',             precio: '$450 MXN',   img: 'facial.webp',              w: 1200, h: 801,  categoria: 'facial' },
  { id: 'limpieza-facial-profunda',nombre: 'Limpieza facial profunda',      desc: 'Elimina impurezas y puntos negros, dejando la piel limpia y renovada.',                         precio: '$600 MXN',   img: 'facial2.webp',             w: 900,  h: 900,  categoria: 'facial' },
  { id: 'dermapen',                nombre: 'Dermapen',                      desc: 'Estimula la regeneración de la piel, mejorando textura, firmeza y cicatrices.',                  precio: '$700 MXN',   img: 'dermapen.webp',            w: 1200, h: 800,  categoria: 'facial' },
  { id: 'hollywood-peeling',       nombre: 'Hollywood Peeling',             desc: 'Ilumina y renueva la piel, reduciendo manchas y poros.',                                         precio: '$1,000 MXN', img: 'hollywood-peeling.webp',   w: 1200, h: 800,  categoria: 'facial' },
  { id: 'limpieza-corporal',       nombre: 'Limpieza Corporal',             desc: 'Exfolia y purifica la piel, dejándola suave y revitalizada.',                                    precio: '$600 MXN',   img: 'limpieza-corporal.webp',   w: 1200, h: 800,  categoria: 'facial' },
  { id: 'fibroblast',              nombre: 'Fibroblast',                    desc: 'Reafirma la piel y reduce arrugas mediante estimulación de colágeno.',                           precio: '$700 MXN',   img: 'dermapen.webp',            w: 1200, h: 800,  categoria: 'facial' },
  // MASAJES
  { id: 'masaje-relajante',        nombre: 'Masaje Relajante',              desc: 'Libera el estrés y mejora la circulación.',                                                      precio: '$600 MXN',   img: 'masaje.webp',              w: 1200, h: 801,  categoria: 'masaje' },
  { id: 'masaje-descontracturante',nombre: 'Masaje Descontracturante',      desc: 'Alivia tensiones musculares profundas.',                                                         precio: '$700 MXN',   img: 'masaje-descontracturante.webp', w: 1200, h: 800, categoria: 'masaje' },
  // DEPILACIÓN CERA
  { id: 'cera-cuerpo',             nombre: 'Depilación con cera — cuerpo completo', desc: 'Elimina el vello desde la raíz, dejando la piel suave.',                               precio: '$600 MXN',   img: 'dep-bikini.webp',          w: 1200, h: 800,  categoria: 'depilacion-cera' },
  { id: 'cera-piernas',            nombre: 'Depilación con cera — piernas',         desc: 'Elimina el vello, dejando la piel suave y uniforme.',                                  precio: '$300 MXN',   img: 'dep-piernas.webp',         w: 1200, h: 800,  categoria: 'depilacion-cera' },
  { id: 'cera-axilas',             nombre: 'Depilación con cera — axilas',          desc: 'Elimina el vello, dejando la piel suave y libre de irritaciones.',                     precio: '$150 MXN',   img: 'dep-axila.webp',           w: 1200, h: 800,  categoria: 'depilacion-cera' },
  { id: 'cera-bikini',             nombre: 'Depilación con cera — área de bikini',  desc: 'Elimina el vello, dejando la piel suave y limpia.',                                    precio: '$200 MXN',   img: 'dep-bikini.webp',          w: 1200, h: 800,  categoria: 'depilacion-cera' },
  // DEPILACIÓN LÁSER IPL
  { id: 'ipl-cuerpo',              nombre: 'Láser IPL — cuerpo completo',   desc: 'Reduce el vello de manera duradera. (10 sesiones)',                                              precio: '$6,500 MXN', img: 'dep-ipl.webp',             w: 1200, h: 800,  categoria: 'depilacion-laser-ipl' },
  { id: 'ipl-piernas',             nombre: 'Láser IPL — piernas',           desc: 'Reduce el vello de forma duradera. (por sesión)',                                                precio: '$400 MXN',   img: 'dep-ipl-piernas.webp',     w: 1200, h: 800,  categoria: 'depilacion-laser-ipl' },
  { id: 'ipl-axilas',              nombre: 'Láser IPL — axilas',            desc: 'Reduce el vello de forma duradera. (por sesión)',                                                precio: '$200 MXN',   img: 'dep-ipl-axilas.webp',      w: 900,  h: 600,  categoria: 'depilacion-laser-ipl' },
  { id: 'ipl-bikini',              nombre: 'Láser IPL — área de bikini',    desc: 'Reduce el vello de forma duradera. (por sesión)',                                                precio: '$300 MXN',   img: 'dep-laser-bikini.webp',    w: 1200, h: 800,  categoria: 'depilacion-laser-ipl' },
  // DEPILACIÓN LÁSER TRIDIODO
  { id: 'tri-cuerpo',              nombre: 'Láser tridiodo — cuerpo completo', desc: 'Elimina el vello de manera eficaz y duradera. (10 sesiones)',                                precio: '$7,000 MXN', img: 'tridiodo.webp',            w: 1200, h: 800,  categoria: 'depilacion-laser-tridiodo' },
  { id: 'tri-piernas',             nombre: 'Láser tridiodo — piernas',      desc: 'Elimina el vello de manera eficaz y duradera. (por sesión)',                                    precio: '$450 MXN',   img: 'tridiodo-piernas.webp',    w: 1200, h: 898,  categoria: 'depilacion-laser-tridiodo' },
  { id: 'tri-axilas',              nombre: 'Láser tridiodo — axilas',       desc: 'Elimina el vello de manera eficaz y duradera.',                                                 precio: '$250 MXN',   img: 'tridiodo-axilas.webp',     w: 1200, h: 800,  categoria: 'depilacion-laser-tridiodo' },
  { id: 'tri-bikini',              nombre: 'Láser tridiodo — área de bikini', desc: 'Elimina el vello de manera eficaz y duradera.',                                               precio: '$350 MXN',   img: 'tridiodo-bikini.webp',     w: 1200, h: 800,  categoria: 'depilacion-laser-tridiodo' },
  // MANOS Y PIES
  { id: 'pedicure',                nombre: 'Pedicure',                      desc: 'Cuida y embellece los pies, dejando uñas y piel saludables y suaves.',                          precio: '$250 MXN',   img: 'pedicura.webp',            w: 1200, h: 801,  categoria: 'manos-pies' },
  { id: 'manicure',                nombre: 'Manicure',                      desc: 'Embellece y cuida las uñas y manos, dejándolas limpias y arregladas.',                          precio: '$250 MXN',   img: 'pedicura.webp',            w: 1200, h: 801,  categoria: 'manos-pies' },
  { id: 'pedicure-spa',            nombre: 'Pedicure Spa',                  desc: 'Hidrata y relaja los pies, dejando uñas y piel suaves y renovadas.',                            precio: '$300 MXN',   img: 'pedicure-spa.webp',        w: 1200, h: 806,  categoria: 'manos-pies' },
  { id: 'manicure-spa',            nombre: 'Manicure Spa',                  desc: 'Hidrata y cuida las manos, dejando uñas y piel suaves y renovadas.',                            precio: '$300 MXN',   img: 'pedicure-spa.webp',        w: 1200, h: 806,  categoria: 'manos-pies' },
  { id: 'unas-semipermanentes',    nombre: 'Uñas Semipermanentes',          desc: 'Acabado natural y duradero.',                                                                   precio: '$120 MXN',   img: 'pedicura.webp',            w: 1200, h: 801,  categoria: 'manos-pies' },
  { id: 'unas-acrilicas',          nombre: 'Uñas Acrílicas',                desc: 'Embellecen y fortalecen las uñas con acabado duradero.',                                        precio: '$200 MXN',   img: 'pedicura.webp',            w: 1200, h: 801,  categoria: 'manos-pies' },
  { id: 'unas-soft-gel',           nombre: 'Uñas Soft Gel',                 desc: 'Acabado natural y duradero.',                                                                   precio: '$200 MXN',   img: 'pedicura.webp',            w: 1200, h: 801,  categoria: 'manos-pies' },
  { id: 'unas-polygel',            nombre: 'Uñas Polygel',                  desc: 'Acabado natural y duradero.',                                                                   precio: '$250 MXN',   img: 'pedicura.webp',            w: 1200, h: 801,  categoria: 'manos-pies' },
];

// Datos para el calculador de láser — Elemento memorable
// Zona → tecnología → precio real publicado en el sitio
export type ZonaLaser = {
  id: string;
  nombre: string;
  ipl:      { precio: number; esPorSesion: boolean; };
  tridiodo: { precio: number; esPorSesion: boolean; };
};

export const zonasLaser: ZonaLaser[] = [
  {
    id: 'piernas',
    nombre: 'Piernas',
    ipl:      { precio: 400,  esPorSesion: true  },
    tridiodo: { precio: 450,  esPorSesion: true  },
  },
  {
    id: 'axilas',
    nombre: 'Axilas',
    ipl:      { precio: 200,  esPorSesion: true  },
    tridiodo: { precio: 250,  esPorSesion: true  },
  },
  {
    id: 'bikini',
    nombre: 'Área de bikini',
    ipl:      { precio: 300,  esPorSesion: true  },
    tridiodo: { precio: 350,  esPorSesion: true  },
  },
  {
    id: 'cuerpo',
    nombre: 'Cuerpo completo',
    ipl:      { precio: 6500, esPorSesion: false },
    tridiodo: { precio: 7000, esPorSesion: false },
  },
];

export const promoCaptions = [
  'Tratamientos faciales a los mejores precios',
  'Hollywood Peeling: piel luminosa y sin manchas',
  'Masaje relajante y descontracturante',
  'Depilación láser: resultados permanentes',
  'Manicure y pedicure con acabado perfecto',
  'Paquetes y promociones especiales',
];
