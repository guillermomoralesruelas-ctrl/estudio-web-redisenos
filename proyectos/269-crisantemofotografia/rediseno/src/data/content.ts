// Contenido de Crisantemo Fotografía. Fuente: crisantemo.com.mx (Google Sites: inicio, sesiones, paquetes integrales,
// "Qué y cómo" y contacto), leído el 2026-10-10. No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'Crisantemo Fotografía',
  fotografo: 'Luis Sánchez',
  ciudad: 'Monterrey, N. L.',
  telefono: '81 8011 7764',
  telefonoE164: '528180117764',
  // [PENDIENTE] El sitio publica el número sin decir si tiene WhatsApp; se usa para los botones hasta confirmarlo.
  whatsapp: '528180117764',
  correo: 'fotografiacrisantemo@gmail.com',
  // No tienen oficina abierta al público: atienden por mensajes, llamadas o videollamadas y, cuando hace falta, se citan aquí.
  puntoDeReunion: 'Krispy Kreme de Walmart Las Torres, rumbo a la salida a carretera Nacional',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Krispy Kreme Walmart Las Torres Monterrey'),
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/crisantemof' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/crisantemo___/' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/@crisantemof/videos' },
  ],
};

// Sesiones fotográficas en locación (página "Sesiones").
export const coberturas = [
  { id: 'esencial', nombre: 'Esencial', precio: 1450, minutos: 30, fotos: 10 },
  // "Qué y cómo" dice 40 minutos para la Intermedia; la página de precios dice 1 hora. [PENDIENTE] confirmar.
  { id: 'intermedia', nombre: 'Intermedia', precio: 2000, minutos: 60, fotos: 20 },
  { id: 'extendida', nombre: 'Extendida', precio: 3000, minutos: 90, fotos: 50 },
];
export const ajusteFinDeSemana = 350; // "Precio contemplado para días entre semana (de lunes a jueves)... fin de semana $350.00 extra"

export const notasSesion = [
  'Las fotos de cada cobertura llevan retoque de luz y color y son las mínimas que garantizan; puede haber más, sin revelar, en una carpeta aparte.',
  'Locaciones dentro del área metropolitana de Monterrey; fuera de ella se agrega un costo según la distancia.',
  'Si la locación cobra estacionamiento u otro gasto, lo cubre el cliente.',
  'Precios de lunes a jueves; en fin de semana se suman $350.',
];

// Paquetes integrales: dos sesiones, fotoclip y cobertura de evento con foto y video.
export const paquetes = [
  {
    id: 'basico', nombre: 'Integral básico', precio: 9800,
    incluye: [
      'Galería en la nube con todo el material digital',
      'Sesión casual: 90 minutos en locación, todas las fotos en digital (25 con retoque)',
      'Sesión formal: 60 minutos en locación, todas las fotos en digital (20 con retoque)',
      'Fotoclip de vida en HD',
      'Evento: cobertura de la ceremonia religiosa y 4 horas de recepción con foto y video',
      'Todas las fotos del evento en digital (100 retocadas) y USB con hasta hora y media de evento en HD',
    ],
  },
  {
    id: 'completo', nombre: 'Integral completo', precio: 18850,
    incluye: [
      'Todo lo del básico, con 5 horas de recepción en lugar de 4',
      'Una hora de cobertura de la salida de casa (getting ready)',
      'Videoclip en locación (tras la escena o conviviendo con amigos) con vuelo de dron',
      'Dos fotografías 8×10″ enmarcadas y una ampliación 20×24″ montada, texturizada y enmarcada',
      '100 impresiones 6×8″ en álbum y resumen de video del evento',
    ],
  },
];
export const notasPaquete = [
  'Luis Sánchez cubre todas las sesiones; al evento va un equipo de staff.',
  'Las sesiones y el videoclip se agendan de lunes a jueves.',
  'Eventos dentro del área metropolitana de Monterrey; fuera se agrega un costo según la distancia y el tiempo de traslado.',
  'Se separa la fecha de un evento con $1,000; faltando dos meses (o al agendar la primera sesión) debe estar cubierto el 50%, y el resto un día hábil antes del evento.',
  'Las sesiones se separan con el 50% y se liquidan el día de la sesión. Pagos por depósito, transferencia o en efectivo.',
];

// Ampliaciones montadas, texturizadas y enmarcadas (pulgadas). Precios de extras, válidos al contratar un paquete integral o de sesión.
export const ampliaciones = [
  { id: '8x10', ancho: 8, alto: 10, precio: 800 },
  { id: '11x14', ancho: 11, alto: 14, precio: 1100 },
  { id: '16x20', ancho: 16, alto: 20, precio: 1800 },
  { id: '20x24', ancho: 20, alto: 24, precio: 3100 },
  { id: '30x40', ancho: 30, alto: 40, precio: 4500 }, // el sitio escribe "$,4500.00"
];

export const extras = [
  { nombre: 'Hora extra de sesión en locación', precio: 1500 },
  { nombre: 'Hora extra de foto y video en el evento (antes de la 1 a. m.)', precio: 1500 },
  { nombre: 'Segunda cámara de foto o video', precio: 4000 },
  { nombre: 'Videoclip (tras la escena o conviviendo con amigos)', precio: 2300 },
  { nombre: 'Dron en videoclip', precio: 1250 },
  { nombre: 'Resumen de video del evento', precio: 1500 },
  { nombre: 'Salida de casa: 1 hora de foto y video', precio: 1500 },
  { nombre: 'Biombo de nueve fotos 6×8″', precio: 1400 },
  { nombre: 'Álbum con 100 fotografías 6×8″', precio: 1400 },
  { nombre: 'Fotobook de 20 páginas', precio: 2500 },
  { nombre: 'Acrílico 16×20″', precio: 2500 },
];

export const galeria: { foto: string; alt: string }[] = [
  { foto: 'lancha-estanque', alt: 'Retrato en vestido de gala azul cielo sobre una lancha en un estanque con peces' },
  { foto: 'escalera-vestido-rojo', alt: 'Retrato en vestido rojo con flores en una escalera de salón' },
  { foto: 'columpio-flores', alt: 'Retrato en vestido verde en un columpio con arco de flores' },
  { foto: 'auto-rojo', alt: 'Retrato casual con lentes oscuros y chamarra junto a un auto rojo antiguo' },
  { foto: 'jardin-vestido-rosa', alt: 'Retrato en vestido rosa en un jardín con balaustrada' },
  { foto: 'caballo-blanco', alt: 'Retrato en vestido rosa junto a un caballo blanco en el bosque' },
  { foto: 'arbol-vestido-rosa', alt: 'Retrato en vestido rosa sentada en la raíz de un árbol' },
  { foto: 'lentes-portal', alt: 'Retrato casual con lentes oscuros frente a un portón de madera' },
  { foto: 'columpio-montana', alt: 'Retrato en vestido verde en un columpio de flores con montañas al fondo' },
  { foto: 'reflejo-ramo', alt: 'Retrato recostada con tiara y ramo de flores reflejado en una superficie' },
  { foto: 'aro-aereo', alt: 'Retrato de una acróbata en aro aéreo sobre fondo negro' },
];
