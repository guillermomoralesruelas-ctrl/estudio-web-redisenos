// Contenido de Casa Orígenes, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Edita aquí textos, horarios y datos de contacto. El menú con precios está en menu.json.
import menuJson from './menu.json';

const img = (f: string) => `${import.meta.env.BASE_URL}_astro/${f}`;

export const fotos = {
  alberca1: img('alberca1.5pXux0XZ_1ab4Ce.webp'),
  alberca2: img('alberca2.C851IR8K_Z21kmGS.webp'),
  alberca3: img('alberca3.Btd6yvW-_Z22dnHa.webp'),
  benedictos: img('benedictos.CZVpOkV9_ZLBCCh.webp'),
  salmon: img('carta10.BpRaWyg7_Z10GJPz.webp'),
  cafe: img('carta2.HS0ESYzY_Z1X9JP2.webp'),
  enchiladas: img('carta23.BGwKPGyA_3jlaT.webp'),
  mesa: img('carta29.Rh0XlYTl_Z23xzsh.webp'),
  parfait: img('carta3.DT-f3K55_ZGdrRf.webp'),
  mesaRedonda: img('carta5.CsxIt_gJ_Z1EWuM5.webp'),
  waffle: img('carta6.fxeLi-1-_Z2jzuEx.webp'),
  toastMesa: img('carta7.CQeRHrOe_Z2wl15D.webp'),
  chilaquiles: img('chilaquiles.g3U8eFDW_159SrU.webp'),
  terraza1: img('instalaciones1.Ct-qcijC_Z1VLAhz.webp'),
  terraza13: img('instalaciones13.Dn_E1mCs_2uvEsP.webp'),
  terraza15: img('instalaciones15.BoMUUSPq_Z1wNgIe.webp'),
  jardin: img('instalaciones2.QhZfCNCS_FPaCy.webp'),
  terraza5: img('instalaciones5.DSBdM9QJ_ZWEXOQ.webp'),
  pergola: img('instalaciones8.kxZD0X3h_ZWdJRt.webp'),
  plato: img('nose5.DNjYGhmB_ZxoLII.webp'),
  waffleHelado: img('platillos5.Bl6NyhCI_XHkqf.webp'),
  rol: img('rol-de-canela.BBt6BPvX_Z2hebpM.webp'),
  burger: img('smash-chicken-burger.D2mNrM3s_ZXld4w.webp'),
  toast: img('toast-durazno-prosciutto.DMdBXMf5_Z1kXr0x.webp'),
  logo: img('logo.C_Y8Fu_X_1iumK5.svg'),
};

export const negocio = {
  nombre: 'Casa Orígenes',
  lema: 'Cocina con raíces',
  ciudad: 'Xalapa, Veracruz',
  zonaHoraria: 'America/Mexico_City',
  abre: 9,
  cierra: 18,
  horario: 'Lunes a domingo, de 9 am a 6 pm',
  horarioNota: 'Cerrado en días festivos',
  telefono: '(228) 163 5761',
  telefonoLink: 'tel:+522281635761',
  whatsapp: '5212281635761',
  direccion: 'Blvd. Europa esq. Tokio, Col. Monte Magno, C.P. 91193, Xalapa, Ver.',
  mapa: 'https://maps.app.goo.gl/owBsB5VS9MRriEpU7',
  mapaEmbed: 'https://www.google.com/maps?q=' + encodeURIComponent('Casa Orígenes, Blvd. Europa esq. Tokio, Monte Magno, Xalapa, Veracruz') + '&output=embed',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/origenes.xlp/' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@origenes.xlp' },
    { nombre: 'Pinterest', url: 'https://www.pinterest.com/origenes.xlp/' },
  ],
};

export const wa = (mensaje = 'Hola, quisiera hacer una reservación en Casa Orígenes.') =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const nav = [
  { href: '#menu', label: 'Menú' },
  { href: '#casa', label: 'La casa' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#visitanos', label: 'Visítanos' },
];

export const hero = {
  titulo: 'Cocina con raíces',
  frase: 'Aquí no solo comes, vuelves a lo esencial.',
  texto: 'Buscamos crear sabores que nacen de la raíz, en un espacio pensado para compartir y quedarse.',
  fotos: [
    { src: fotos.alberca3, alt: 'Alberca y terraza de Casa Orígenes bajo el sol' },
    { src: fotos.jardin, alt: 'Jardín con fuente y pared de piedra en Casa Orígenes' },
    { src: fotos.terraza5, alt: 'Mesas de madera bajo la pérgola con sombrillas' },
  ],
};

export const historia = {
  titulo: 'Todo gran sabor tiene una gran historia',
  parrafos: [
    'Descubre un mundo donde cada platillo es cuidadosamente creado, con la mayor excelencia; desde los ingredientes, hasta el servicio que llega a tu mesa.',
    'Queremos servir el desayuno sin prisas. Pan dorado a la perfección, notas dulces, texturas que reconfortan y sabores que regresan a lo esencial.',
  ],
  fotos: [
    { src: fotos.terraza15, alt: 'Terraza con sillas de rejilla y sombrillas' },
    { src: fotos.mesaRedonda, alt: 'Mesa redonda servida con varios platillos y café' },
  ],
};

export const favoritos = [
  { nombre: 'Benedictos', desc: 'Muffin inglés, salsa bearnesa, tocino y aguacate.', precio: '$185', src: fotos.benedictos },
  { nombre: 'Toast de durazno y prosciutto', desc: 'Masa madre, dip de limoncello y ricota.', precio: '$185', src: fotos.toast },
  { nombre: 'Chilaquiles verdes o rojos', desc: 'Con huevo, pollo o chorizo, queso y aguacate.', precio: '$165', src: fotos.chilaquiles },
  { nombre: 'Smash Chicken Burger', desc: 'Pan brioche, pollo crujiente y coleslaw.', precio: '$185', src: fotos.burger },
];

export type Platillo = { nombre: string; desc: string; precio: string };
export type Categoria = { categoria: string; nota: string; items: Platillo[] };
const menu = menuJson as Categoria[];
const cat = (n: string) => menu.find((c) => c.categoria === n)!;

export type Momento = { id: string; titulo: string; categorias: Categoria[] };
export const momentos: Momento[] = [
  { id: 'desayuno', titulo: 'Desayuno', categorias: ['Huevos', 'Crujientes', 'Toast', 'Frutales', 'Sándwiches', 'Burritos'].map(cat) },
  { id: 'tarde', titulo: 'Media tarde', categorias: ['Media Tarde', 'Ensaladas'].map(cat) },
  { id: 'bebidas', titulo: 'Café y bebidas', categorias: ['Café Caliente', 'Café Frío', 'Smoothies', 'Jugos', 'Shots', 'Bebidas'].map(cat) },
  { id: 'pan', titulo: 'Panadería', categorias: ['Panadería y Repostería'].map(cat) },
];
export const totalPlatillos = menu.reduce((n, c) => n + c.items.length, 0);

// "¿Qué se antoja ahora?": recomendación según la hora de Xalapa.
export const antojos = {
  desayuno: { saludo: 'Buenos días', texto: 'Es hora de desayunar. Unos chilaquiles o unos benedictos con café de la casa.', momento: 'desayuno', src: fotos.chilaquiles, alt: 'Chilaquiles con aguacate y queso' },
  tarde: { saludo: 'Buenas tardes', texto: 'La media tarde pide una Smash Chicken Burger, o un rol de canela con un latte.', momento: 'tarde', src: fotos.rol, alt: 'Rol de canela glaseado' },
  cerrado: { saludo: 'Ahora estamos cerrados', texto: 'Abrimos a las 9 de la mañana. Reserva tu mesa y te esperamos con el café listo.', momento: 'desayuno', src: fotos.cafe, alt: 'Taza de café sobre mesa de mármol' },
};

export const diferentes = {
  titulo: '¿Qué nos hace diferentes?',
  cierre: 'Hay lugares que no se explican, se viven. Orígenes es uno de ellos.',
  puntos: [
    { titulo: 'Gastronomía de autor', texto: 'Un espacio donde el chef comparte sus propuestas culinarias con el objetivo de que, en cada bocado, te sientas satisfecho, cómodo y restaurado.' },
    { titulo: 'Ambiente íntimo', texto: 'El mejor espacio para compartir cualquier tipo de reunión con los que más quieres.' },
    { titulo: 'Hospitalidad premium', texto: 'Servicio de calidad para tu estadía dentro de las instalaciones.' },
    { titulo: 'Ingredientes de calidad', texto: 'Seleccionamos los mejores insumos para entregarte un platillo visualmente hermoso y apetecible al paladar.' },
  ],
  foto: { src: fotos.mesa, alt: 'Vista desde arriba de una mesa con platillos, jugos y café' },
};

export const equipo = {
  titulo: 'La magia detrás de nuestra cocina',
  texto: 'El equipo que día a día transforma ingredientes locales en experiencias culinarias.',
  chef: {
    nombre: 'Lesly Benitez',
    puesto: 'Jefa de cocina',
    bio: [
      'Con una sólida formación como licenciada en Gastronomía, Lesly ha forjado desde 2019 una carrera marcada por la pasión, el arte y un compromiso con la sustentabilidad.',
      'Su talento la ha llevado desde las cocinas más emblemáticas de Xalapa hasta escenarios internacionales. Hoy forma parte de la familia Orígenes y aporta a cada plato una mezcla única de herencia veracruzana.',
    ],
    cita: 'Mi función en la vida es la de servir en todos los aspectos, y el que más disfruto es servir comida.',
  },
  cocina: [
    { nombre: 'Marco Antonio Zamora', puesto: 'Chef' },
    { nombre: 'Aldair Ortega', puesto: 'Sous chef' },
    { nombre: 'Salvador Sánchez', puesto: 'Sous chef' },
    { nombre: 'Michel Torres', puesto: 'Auxiliar de cocina' },
    { nombre: 'Rose Cruz', puesto: 'Auxiliar de cocina' },
  ],
};

export const galeria = [
  { src: fotos.alberca1, alt: 'Alberca rodeada de palmeras', w: 1066, h: 1600 },
  { src: fotos.waffle, alt: 'Waffle con frutos rojos y almendras', w: 854, h: 1280 },
  { src: fotos.pergola, alt: 'Pérgola con enredadera sobre las mesas', w: 1707, h: 2560 },
  { src: fotos.parfait, alt: 'Parfaits de fruta y yogurt sobre mesa de madera', w: 854, h: 1280 },
  { src: fotos.salmon, alt: 'Toast de salmón ahumado con lechugas', w: 1536, h: 2048 },
];
