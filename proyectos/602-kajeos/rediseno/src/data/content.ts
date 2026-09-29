// Contenido de KAJEOS Grupo Inmobiliario, tomado de su sitio (kajeos.com): el clon, investigacion/original.html,
// investigacion/crudo.json (propiedades, nosotros y contacto) y el inicio en vivo revisado con curl el 2026-09-29.
// No se inventó ningún dato. Precios, superficies y recámaras son los de sus fichas. No publica WhatsApp: se usa su
// celular como WhatsApp (pendiente). La lista del lote lo ubica en Boca del Río, pero su oficina está en Puebla.

export const negocio = {
  nombre: 'KAJEOS Grupo Inmobiliario',
  lugar: 'Puebla, México',
  direccion: 'Torre Inxignia, piso 4, oficina 446, Puebla, México',
  horario: 'Lunes a viernes, de 9:00 a 21:00 · sábado y domingo, cerrado',
  celular: { texto: '222 812 5189', tel: '+522228125189' },
  telefono: { texto: '222 800 0046', tel: '+522228000046' },
  whatsapp: '522228125189',
  correo: 'contacto@kajeos.com',
  asesora: 'Cristina Córdova',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Torre Inxignia, Puebla'),
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

export type Tipo = 'Casa' | 'Terreno' | 'Departamento';
export type Propiedad = {
  id: string;
  nombre: string;
  zona: string;
  tipo: Tipo;
  precio: number;
  nota?: string;
  m2: number;
  m2Etiqueta: string;
  recamaras?: number;
  banos?: number;
  detalle: string;
  foto: string;
  alt: string;
};

// Las 8 propiedades con foto del inicio de su sitio, con los datos de su ficha.
export const propiedades: Propiedad[] = [
  { id: 'zavaleta', nombre: 'Residencia de lujo en Jardines de Zavaleta', zona: 'Jardines de Zavaleta', tipo: 'Casa', precio: 23500000, m2: 794, m2Etiqueta: 'de construcción', recamaras: 5, banos: 5.5, detalle: '685.43 m² de terreno y 793.71 m² de construcción; cochera para 6 autos.', foto: 'p-zavaleta', alt: 'Fachada de la residencia de Zavaleta con jardín de pasto y muro cubierto de enredadera' },
  { id: 'actipan', nombre: 'Casa en venta o renta, San José Actipan', zona: 'San José Actipan', tipo: 'Casa', precio: 6750000, nota: 'o renta de $20,000 al mes', m2: 390, m2Etiqueta: 'de construcción', recamaras: 3, banos: 3, detalle: 'Dos niveles; terreno de 387.40 m². Recámara principal con vestidor y baño completo con jacuzzi.', foto: 'p-actipan', alt: 'Casa de dos niveles de fachada gris con ventanales de vidrio y palmeras' },
  { id: 'avista', nombre: 'Departamento en Residencial Avista', zona: 'Lomas de Angelópolis', tipo: 'Departamento', precio: 3770000, m2: 124, m2Etiqueta: 'desde, más terraza o jardín', recamaras: 4, banos: 2, detalle: '3 recámaras (la principal con vestidor y baño privado) y una recámara secundaria; terraza o jardín privado.', foto: 'p-avista', alt: 'Comedor de madera con sillas grises junto a un ventanal con vista a la ciudad de noche' },
  { id: 'magdalena', nombre: 'Casas nuevas en privada, Barrio de la Magdalena', zona: 'Cholula', tipo: 'Casa', precio: 2850000, m2: 175, m2Etiqueta: 'de construcción', recamaras: 3, banos: 3.5, detalle: 'Conjunto de casas nuevas en privada, a 5 minutos de los Portales de Cholula y 12 del Periférico.', foto: 'p-magdalena', alt: 'Fachadas blancas de casas nuevas con detalles de madera y cochera' },
  { id: 'granito', nombre: 'Casa en Clúster Granito', zona: 'Clúster Granito', tipo: 'Casa', precio: 2193000, m2: 97, m2Etiqueta: 'de construcción', recamaras: 3, banos: 3, detalle: 'Estacionamiento semicubierto, sala y comedor, medio baño de visitas, cocina y patio posterior.', foto: 'p-granito', alt: 'Casa blanca de una planta con ventanales, arbustos al frente y cielo azul' },
  { id: 'judicial', nombre: 'Terreno en Ciudad Judicial', zona: 'Ciudad Judicial', tipo: 'Terreno', precio: 11596000, nota: '$16,000 por m²', m2: 724, m2Etiqueta: 'de terreno', detalle: 'Terreno disponible junto a la Ciudad Judicial.', foto: 'p-ciudad-judicial', alt: 'Toma de dron del terreno con construcciones y áreas verdes alrededor' },
  { id: 'torres', nombre: 'Terreno en Av. Las Torres', zona: 'Av. Las Torres', tipo: 'Terreno', precio: 7893000, nota: '$15,000 por m²', m2: 526, m2Etiqueta: 'de terreno', detalle: 'Terreno con frente a la avenida.', foto: 'p-las-torres', alt: 'Toma de dron del terreno con árboles junto a una avenida con autos' },
  { id: 'saucedal', nombre: 'Terrenos en El Saucedal', zona: 'El Saucedal', tipo: 'Terreno', precio: 2728000, nota: 'lote 1; hay otro colindante de 217 m²', m2: 248, m2Etiqueta: 'de terreno', detalle: 'Dos terrenos colindantes dentro del fraccionamiento El Saucedal.', foto: 'p-saucedal', alt: 'Vista aérea de un terreno con pasto seco y una franja roja, junto a casas' },
];

// Más propiedades de su catálogo (sin foto en el clon).
export const masPropiedades = [
  { nombre: 'Casa en La Vista Country Club', precio: 29000000, dato: '750 m² de construcción y 580 m² de terreno' },
  { nombre: 'Casa en La Vista Country Club', precio: 28000000, dato: '550 m², 4 recámaras con vestidor, 5.5 baños' },
  { nombre: 'Casa en Fraccionamiento Costa de Oro, Boca del Río', precio: 20000000, dato: '600 m² de terreno y 932.5 m² de construcción en 3 niveles' },
  { nombre: 'Terrenos en Metepec Atlimeyaya', precio: 18928441, dato: 'Dos terrenos planos, juntos o por separado' },
  { nombre: 'Dos casas conectadas, Lomas de Angelópolis II', precio: 14000000, dato: 'Unidas por jardín en 3 terrenos; 630 m²' },
];

export const servicios = [
  { titulo: 'Vende tu propiedad', texto: 'Sin costo por promoción.' },
  { titulo: 'Compra con confianza', texto: 'Sin comisiones ocultas.' },
  { titulo: 'Valuación profesional', texto: 'Gratis y sin compromiso.' },
  { titulo: 'Producción visual', texto: 'Sesión fotográfica incluida.' },
];
