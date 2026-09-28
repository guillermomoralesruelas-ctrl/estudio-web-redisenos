// Contenido de Humareda Prime, tomado del sitio original (clon en ../sitio e investigacion/crudo.json, una sola página).
// Regla: nada inventado. Lo que no está en el sitio se marca como pendiente en CAMBIOS.md.
// Datos que no están en crudo.json (tomados con curl el 2026-09-27): las coordenadas, de su enlace de Google Maps
// (maps.app.goo.gl/Mg2mpV4ciJ19QY2JA → ficha "Humareda Prime", 19.1078126, -96.101324).
// Las fotos son copias .webp del clon en ../assets/web (publicDir), creadas por fotos-web.mjs.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Humareda Prime',
  ciudad: 'Boca del Río, Veracruz',
  telefono: '229 550 7070',
  telefonoHref: 'tel:+522295507070',
  whatsapp: '522295507070',
  direccion: 'Blvd. Vicente Fox Quesada 106, Costa Sol, 94290 Boca del Río, Ver.',
  mapa: 'https://maps.app.goo.gl/Mg2mpV4ciJ19QY2JA',
  mapaEmbed: 'https://maps.google.com/maps?q=Humareda%20Prime%20&t=m&z=15&output=embed&iwloc=near',
  lat: 19.1078126,
  lon: -96.101324,
};

// Su mensaje de WhatsApp, tal cual lo tiene el sitio.
export const mensajeReserva = 'Hola, me gustaría hacer una reservación en Humareda Prime. ¿Podrían apoyarme con disponibilidad?';

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const foto = img;

export const portada = {
  titulo: 'Steak House Premium en Boca del Río',
  frase: 'Cortes finos a las brasas, mixología de autor y vista al mar.',
};

export const estandar = {
  titulo: 'El estándar del corte en Boca del Río, Veracruz.',
  // El sitio escribe "Veracrúz" (errata corregida).
  texto:
    'En Humareda Prime nos especializamos en cortes finos a las brasas, combinando técnica tradicional con un toque contemporáneo. Cada pieza (Cowboy, Porterhouse, Rib Eye) se selecciona con precisión y se trabaja con pasión frente al mar.',
};

// "Nuestros Cortes": los nueve, en el orden del sitio. El sitio no publica precios, pesos ni descripciones.
export const cortes: { nombre: string; nota?: string }[] = [
  { nombre: 'Rib Eye' },
  { nombre: 'Arrachera' },
  { nombre: 'T-Bone' },
  { nombre: 'Top Sirloin' },
  { nombre: 'New York' },
  // El sitio dice 'Rib Eye 2"': las comillas son pulgadas (deducido, pendiente de confirmar).
  { nombre: 'Rib Eye 2"', nota: 'de dos pulgadas de grosor' },
  { nombre: 'Cowboy' },
  { nombre: 'Porterhouse' },
  { nombre: 'Costillar de Rib Eye' },
];

// Horario del sitio: "D-J: 13:00 p.m. a 22:00 / V-S 13:00 p.m. a 24:00 a.m."
// Índice = día de la semana de JavaScript (0 = domingo). Minutos desde la medianoche.
export const horario: { abre: number; cierra: number }[] = [
  { abre: 13 * 60, cierra: 22 * 60 }, // domingo
  { abre: 13 * 60, cierra: 22 * 60 }, // lunes
  { abre: 13 * 60, cierra: 22 * 60 }, // martes
  { abre: 13 * 60, cierra: 22 * 60 }, // miércoles
  { abre: 13 * 60, cierra: 22 * 60 }, // jueves
  { abre: 13 * 60, cierra: 24 * 60 }, // viernes
  { abre: 13 * 60, cierra: 24 * 60 }, // sábado
];

export const horarioTexto = [
  { dias: 'Domingo a jueves', horas: '13:00 a 22:00' },
  { dias: 'Viernes y sábado', horas: '13:00 a 24:00' },
];

export const fotos = {
  logo: { src: img('logo.webp'), w: 500, h: 200, alt: 'Restaurante Humareda Prime' },
  flameado: { src: img('flameado.webp'), w: 853, h: 1280, alt: 'Un corte flameado en la mesa, frente al letrero de madera de Humareda Prime' },
  mesa: { src: img('mesa.webp'), w: 900, h: 1200, alt: 'Mesa de madera con una lámpara de luz cálida; al fondo, el salón con lámparas de fibras naturales y plantas en el techo' },
  ribeye: { src: img('ribeye.webp'), w: 800, h: 1200, alt: 'Rib eye a las brasas sobre plato negro, con brochetas de verduras y piña y una copa de vino tinto' },
  cortesVino: { src: img('cortes-vino.webp'), w: 1280, h: 853, alt: 'Corte a la parrilla con brochetas de verduras y piña, guarniciones y copas de vino tinto sobre una mesa de madera' },
  salon: { src: img('salon.webp'), w: 1470, h: 827, alt: 'El salón de Humareda Prime de día: mesas de madera, sillas tejidas azules y verdes, lámparas de fibra y plantas colgantes' },
  fachada: { src: img('fachada.webp'), w: 1470, h: 827, alt: 'La fachada de Humareda Prime de noche, con su letrero encendido sobre el bulevar' },
  vistaMar: { src: img('vista-mar.webp'), w: 800, h: 1200, alt: 'Una mesa de la terraza con copas y flores; al fondo, la playa, las palmeras y el mar' },
  cocteles: { src: img('cocteles.webp'), w: 733, h: 1100, alt: 'Dos cócteles: uno rosa en copa de martini y uno rojo oscuro con escarchado de chile' },
  brindis: { src: img('brindis.webp'), w: 900, h: 1200, alt: 'Brindis con vino tinto sobre una mesa servida con ensalada, molcajete y pan' },
};

export const galeria = {
  titulo: 'Una experiencia única',
};

export const cierre = {
  titulo: '¿Listo para vivir la experiencia?',
  frase: 'Reserva tu mesa hoy y disfruta el mejor corte en Boca del Río.',
};
