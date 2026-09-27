// Contenido de Florería Mrs. Flowers
// Textos tomados de investigacion/crudo.json (Inicio, Flores con Entrega Hoy, Ramos, Funerales, Tulipanes).
// Contacto de investigacion/resumen.json y datos del brief del proyecto.
// Regla: nada inventado. Si falta un dato se deja [PENDIENTE] y se anota en CAMBIOS.md.

const base = import.meta.env.BASE_URL;
export const foto = (f: string) => `${base}${f}`;
export const waNum = '525518784901';
export const wa = (msg: string) =>
  `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;

export const negocio = {
  nombre: 'Florería Mrs. Flowers',
  ciudad: 'Ciudad de México, CDMX',
  telefono: '5518784901',
  mapa: 'https://www.google.com/maps/search/Mrs.+Flowers+CDMX',
  // No hay redes sociales publicadas en el sitio ni en investigacion/resumen.json
};

// Texto de la entrega (del clon: "Entrega el mismo dia en CDMX / Ordena antes de las 6 PM")
export const corteHora = 18; // 6 PM = 18:00 en el sistema

// Categorías de productos con WhatsApp prellenado por categoría
export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
  fotoW: number;
  fotoH: number;
  mensaje: string;
}

export const categorias: Categoria[] = [
  {
    id: 'rosas',
    nombre: 'Ramos de Rosas',
    descripcion: 'Rosas rojas, inglesas, negras y mixtas. Desde 24 hasta 200 rosas.',
    foto: 'ramo-amor.webp',
    fotoW: 590,
    fotoH: 701,
    mensaje: 'Hola, quisiera pedir un ramo de rosas con entrega hoy en CDMX, ¿me pueden ayudar?',
  },
  {
    id: 'girasoles',
    nombre: 'Girasoles',
    descripcion: 'Ramos de girasoles, conos y combinaciones con rosas y mini rosas.',
    foto: 'girasoles-rosas.webp',
    fotoW: 450,
    fotoH: 450,
    mensaje: 'Hola, quisiera pedir un arreglo con girasoles con entrega hoy en CDMX, ¿qué tienen?',
  },
  {
    id: 'rosas-especiales',
    nombre: 'Rosas Especiales',
    descripcion: 'Rosas inglesas, rosas negras y ramos 80 rosas mixtas.',
    foto: 'rosas-inglesas.webp',
    fotoW: 540,
    fotoH: 540,
    mensaje: 'Hola, quisiera pedir rosas especiales (inglesas o negras) con entrega hoy en CDMX, ¿me orientan?',
  },
  {
    id: 'funerales',
    nombre: 'Arreglos Funerales',
    descripcion: 'Coronas fúnebres, pies de caja y arreglos para funerarias e iglesias. Entrega urgente.',
    foto: 'coronas-muertos.webp',
    fotoW: 600,
    fotoH: 800,
    mensaje: 'Hola, necesito un arreglo funeral con entrega urgente hoy en CDMX, ¿me pueden ayudar?',
  },
];

export const galeria = [
  { src: 'hero-rosas.webp',      alt: 'Ramo de 50 rosas rosadas de Mrs. Flowers',             w: 540, h: 540 },
  { src: 'rosas-mixtas.webp',    alt: 'Ramo con 80 rosas mixtas de Mrs. Flowers, CDMX',       w: 540, h: 540 },
  { src: 'rosas-negras.webp',    alt: 'Ramo de 50 rosas negras de Mrs. Flowers, CDMX',        w: 540, h: 540 },
  { src: 'cono-girasol.webp',    alt: 'Cono de girasoles con rosas de Mrs. Flowers',          w: 450, h: 450 },
  { src: 'ramo-24-rosas.webp',   alt: 'Ramo de 24 rosas rojas — Mrs. Flowers CDMX',           w: 450, h: 450 },
  { src: 'ramo-gerberas.webp',   alt: 'Ramo de 12 gerberas de Mrs. Flowers',                  w: 450, h: 450 },
];
