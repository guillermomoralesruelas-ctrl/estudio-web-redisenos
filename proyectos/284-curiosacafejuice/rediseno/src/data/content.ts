// Contenido de Curiosa Café & Juice Bar, tomado de investigacion/crudo.json: el inicio (en inglés) y su propio
// "Menú de Curiosa Café & Juice Bar en La Condesa: Precios 2026" del blog (en español), que es la fuente de
// src/data/carta.json. Nada inventado. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Curiosa Café & Juice Bar',
  direccion: 'Aguascalientes 214 B, Hipódromo, Cuauhtémoc',
  cp: '06100 Ciudad de México, CDMX',
  zona: 'La Condesa, a unas cuadras del Parque México',
  telefono: '+52 56 1855 2013',
  telefonoHref: 'tel:+525618552013',
  whatsapp: '525618552013',
  maps: 'https://maps.app.goo.gl/PESGxE663ZYNEuzLA',
  // El mismo iframe de Google Maps de su sitio
  mapaEmbed: 'https://maps.google.com/maps?q=Curiosa%20cafe&z=15&output=embed',
  ubereats: 'https://www.ubereats.com/mx/store/curiosa-mexico-city/N08oiT4HX6SBgMxq06I3Hg',
  instagram: 'https://www.instagram.com/curiosacafe',
  tiktok: 'https://www.tiktok.com/@curiosa.cafe',
  facebook: 'https://www.facebook.com/p/Curiosa-Juice-Bar-Cafe-61573098625185/',
  desde: '2025',
};

export const horario = [
  { dias: 'Lunes a viernes', horas: '8:00 a 19:00' },
  { dias: 'Sábado y domingo', horas: '9:00 a 18:00' },
];

export const wa = (msg: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;
export const waGeneral = wa('¡Hola, Curiosa! Quiero pedir antes de pasar.');

// Jugos prensados en frío: 350 ml $120 c/u; Juice Flight (3 jugos) $140.
// Los colores de cada botella salen de sus ingredientes y de sus fotos (verde, betabel, manzana, zanahoria).
export const precioJugo = 120;
export const precioFlight = 140;
export const jugos = [
  { id: 'greens', nombre: 'Daily Greens', funcion: 'Detox', ingredientes: 'Apio, pepino, perejil, manzana verde, jengibre, limón.', color: '#6AA33A' },
  { id: 'raiz', nombre: 'Dulce Raíz', funcion: 'Revive', ingredientes: 'Betabel, manzana gala, jengibre, pepino, limón verde.', color: '#A3244B' },
  { id: 'sidra', nombre: 'Sidra Natural', funcion: 'Digest', ingredientes: 'Manzana golden, mackintosh y granny smith, jengibre, canela, toque de vinagre de manzana, limón.', color: '#D6A53A' },
  { id: 'sol', nombre: 'Puro Sol', funcion: 'Energía', ingredientes: 'Zanahoria, manzana, jengibre.', color: '#EE8526' },
];
export const shots = [
  { nombre: 'Feel Better Shot', precio: 65, ingredientes: 'Echinacea, naranja, lúcuma, cúrcuma, jengibre, polen de abeja.' },
  { nombre: 'The Hulk Logan', precio: 60, ingredientes: 'Espirulina, jugo verde, cítricos, sal de mar.' },
  { nombre: 'Shot of Ginger', precio: 45, ingredientes: 'Jengibre puro.' },
];

// Sus etiquetas de dieta (inicio)
export const etiquetas = ['Sin lácteos', 'Sin gluten', 'Picante', 'Pescetariano', 'Vegano'];

// Preguntas frecuentes: solo las preguntas de su sitio con respuestas que el propio sitio da en su blog.
export const preguntas = [
  { p: '¿Aceptan mascotas?', r: 'Sí: mesas afuera y adentro, y perros bienvenidos.' },
  { p: '¿Tienen para llevar o a domicilio?', r: 'Pide antes por WhatsApp o por DM a @curiosacafe. A domicilio: Uber Eats, Rappi y otras plataformas locales.' },
  { p: '¿Tienen opciones vegetarianas o veganas?', r: 'Casi todo el menú es sin lácteos, y las etiquetas de dieta (vegano, sin gluten, pescetariano) están marcadas platillo por platillo.' },
  { p: '¿Sirven café todo el día?', r: 'El desayuno se sirve todo el día, y el café y los lattes están en la carta de lunes a domingo, en todo el horario.' },
];
