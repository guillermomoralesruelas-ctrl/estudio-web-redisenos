// Contenido de Florería Guadalajara
// Textos tomados de investigacion/crudo.json (Inicio, Nosotros, Productos, Arreglos de Flores).
// Contacto de investigacion/resumen.json y datos del brief del proyecto.
// Regla: nada inventado. Si falta un dato se deja [PENDIENTE] y se anota en CAMBIOS.md.

const base = import.meta.env.BASE_URL;
export const foto = (f: string) => `${base}${f}`;
export const waNum = '523322106699';
export const wa = (msg: string) =>
  `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;

export const negocio = {
  nombre: 'Florería Guadalajara',
  ciudad: 'Guadalajara, Jalisco',
  telefono: '3322106699',
  mapa: 'https://www.google.com/maps/search/Florería+Guadalajara+Jalisco',
  instagram: 'https://www.instagram.com/floreriaguadalajara',
  facebook: 'https://www.facebook.com/floreriagdl',
};

export const horarios = [
  { dia: 'Lun – Vie', hora: '8:30 am – 6:30 pm' },
  { dia: 'Sábado',    hora: '9:00 am – 1:00 pm' },
  { dia: 'Domingo',   hora: 'Cerrado' },
];

// ¿Para quién es? — selector de ocasión
export interface Ocasion {
  id: string;
  etiqueta: string;
  icono: string;
  foto: string;
  fotoW: number;
  fotoH: number;
  arreglo: string;
  mensaje: string;
}

export const ocasiones: Ocasion[] = [
  {
    id: 'san-valentin',
    etiqueta: '14 de Febrero',
    icono: '🌹',
    foto: 'hero-rosas-rojas.webp',
    fotoW: 1200,
    fotoH: 1200,
    arreglo: 'Ramo 100 Rosas',
    mensaje: 'Hola, quisiera pedir un arreglo para el 14 de febrero, ¿me pueden orientar?',
  },
  {
    id: 'dia-de-las-madres',
    etiqueta: '10 de Mayo',
    icono: '💐',
    foto: 'caja-rosas-premium.webp',
    fotoW: 1200,
    fotoH: 1200,
    arreglo: 'Caja Mónaco 150 Rosas',
    mensaje: 'Hola, quisiera pedir un arreglo para el 10 de mayo, ¿qué tienen disponible?',
  },
  {
    id: 'cumpleanos',
    etiqueta: 'Cumpleaños',
    icono: '🎂',
    foto: 'florero-capri.webp',
    fotoW: 1200,
    fotoH: 1200,
    arreglo: 'Florero Capri',
    mensaje: 'Hola, quisiera pedir un arreglo de cumpleaños, ¿me pueden ayudar?',
  },
  {
    id: 'boda',
    etiqueta: 'Boda',
    icono: '👰',
    foto: 'rosas-orquidea-boda.webp',
    fotoW: 1080,
    fotoH: 1080,
    arreglo: '25 Rosas Rojas con Orquídea',
    mensaje: 'Hola, me gustaría cotizar arreglos florales para boda, ¿me pueden asesorar?',
  },
  {
    id: 'sin-ocasion',
    etiqueta: 'Solo porque sí',
    icono: '✨',
    foto: 'club-de-flores.webp',
    fotoW: 1200,
    fotoH: 1200,
    arreglo: 'Club de Flores',
    mensaje: 'Hola, quisiera enviar flores como detalle, ¿qué me recomiendan?',
  },
  {
    id: 'extra-especial',
    etiqueta: 'Algo extra especial',
    icono: '⭐',
    foto: 'ramo-150-rosas.webp',
    fotoW: 1083,
    fotoH: 1200,
    arreglo: 'Ramo 150 Rosas',
    mensaje: 'Hola, busco algo extra especial, ¿tienen algo único que me puedan mostrar?',
  },
];

export const galeria = [
  { src: 'tulipanes.webp',          alt: 'Arreglo de 20 tulipanes en florero',        w: 1200, h: 1080 },
  { src: 'rosas-blancas.webp',      alt: '100 rosas blancas en arreglo espectacular', w: 1200, h: 1200 },
  { src: 'caja-mink.webp',          alt: 'Caja Mink con corazones y rosas',           w: 968,  h: 993  },
  { src: 'orquideas.webp',          alt: 'Orquídeas 360° en arreglo redondo',         w: 701,  h: 701  },
  { src: 'girasoles.webp',          alt: 'Ramo de girasoles frescos',                 w: 1000, h: 1000 },
  { src: 'ramo-amalfi.webp',        alt: 'Ramo Amalfi con flores de temporada',       w: 1000, h: 1000 },
];
