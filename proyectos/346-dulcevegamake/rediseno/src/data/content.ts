// Contenido de Dulce Vega Make up Artist Studio, tomado de su sitio (inicio, biografía, servicios y lista de precios,
// cursos de maquillaje y peinado), revisado con curl el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const estudio = {
  nombre: 'Dulce Vega Make up Artist Studio',
  lema: 'Maquillaje para el alma de la mujer',
  frase: 'Donde la estrella eres tú',
  anios: 'más de 15 años',
  direccion: 'Av. de las Rosas 2925, Col. Chapalita, C.P. 44500, Guadalajara, Jal.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Dulce+Vega+Makeup+Av.+de+las+Rosas+2925+Chapalita+Guadalajara',
  horario: [
    ['Lunes a sábado', '8:30 a 20:30'],
    ['Domingos', 'Previa cita y cursos dominicales'],
  ] as const,
  telefonos: [
    { texto: '33 1591 3402', tel: '+523315913402' },
    { texto: '33 2306 9699', tel: '+523323069699' },
    { texto: '33 2306 9700', tel: '+523323069700' },
  ],
  whatsapp: { texto: '33 1115 5243', numero: '523311155243' },
  correo: 'info@dulcevega.mx',
  redes: [
    ['Instagram', 'https://www.instagram.com/dulcevegamakeup/'],
    ['Facebook', 'https://www.facebook.com/DulceVegaMakeupArtistStudio'],
    ['TikTok', 'https://www.tiktok.com/@dulcevegamakeup'],
  ] as const,
  tienda: 'https://dulcevega.mx/tienda/',
  marcas: ['Liverpool', 'Cklass', 'Ragazza', 'Takasami', 'Televisa', 'Intermoda'],
};

export const wa = (texto: string) => `https://wa.me/${estudio.whatsapp.numero}?text=${encodeURIComponent(texto)}`;

// Lista de precios de su página de servicios (precio publicado junto a cada paquete).
export const paquetes = {
  novia: { nombre: 'Paquete Novia', precio: 8800, incluye: 'Prueba de maquillaje y peinado, preparación de piel, y maquillaje y peinado el día del evento, por Master DV.' },
  quince: { nombre: 'Paquete Quinceañera', precio: 7500, incluye: 'Preparación de piel, prueba de maquillaje y peinado, y maquillaje y peinado el día del evento, por Master DV.' },
  social: { nombre: 'Paquete Social', precio: 2200, incluye: 'Preparación de piel, maquillaje y peinado profesional, por Masters DV.' },
};

// Quiénes pueden arreglarse con la festejada (nuestro); cada una con el Paquete Social.
export const acompanantes = [
  { id: 'mama', nombre: 'Mamá' },
  { id: 'madrina', nombre: 'Suegra o madrina' },
  { id: 'damas', nombre: 'Damas o hermanas' },
  { id: 'otras', nombre: 'Amigas y familia' },
];

export const cursos = [
  { nombre: 'Automaquillaje', texto: 'Aprende a lucir espectacular siempre.', url: 'https://dulcevega.mx/cursos/auto-maquillaje/' },
  { nombre: 'Automaquillaje intensivo', texto: 'Realza tu belleza en un solo día.', url: 'https://dulcevega.mx/cursos/auto-maquillaje-intensivo/' },
  { nombre: 'Maquillaje profesional', texto: 'Para emprender, con tips de administración.', url: 'https://dulcevega.mx/cursos/maquillaje-profesional/' },
  { nombre: 'Autopeinado', texto: 'Herramientas, productos y técnica para tu cabello.', url: 'https://dulcevega.mx/cursos/auto-peinado/' },
  { nombre: 'Peinado profesional', texto: 'Desde lo básico para estilizar a tus clientas.', url: 'https://dulcevega.mx/cursos/peinado-profesional/' },
  { nombre: 'Aplicación de hilos tensores', texto: 'Un plus para trabajar con clientas maduras.', url: 'https://dulcevega.mx/cursos/de-aplicacion-de-hilos-tensores/' },
];
