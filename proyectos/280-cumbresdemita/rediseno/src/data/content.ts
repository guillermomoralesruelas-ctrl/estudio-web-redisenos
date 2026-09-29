// Contenido de Cumbres de Mita (Punta de Mita, Nayarit), tomado del sitio original: investigacion/crudo.json (inicio,
// lotes, Nahya, Kumo Living, amenidades). La nube no llega a cumbresdemita.com.
// Regla: nada inventado. Precios tal cual su sitio ("indicativos y sujetos a cambio"). Sin promesas de plusvalía.
// Las imágenes son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir); su sitio dice que son renders.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);

export const negocio = {
  nombre: 'Cumbres de Mita',
  whatsapp: '523112028186',
  telefono: '(311) 202 8186',
  telefonoHref: 'tel:+523112028186',
  correo: 'ventas@c21camgrupo.com',
  direccion: 'Carretera Federal 200, Corral del Risco, Punta de Mita, Nayarit',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Cumbres de Mita, Corral del Risco, Punta de Mita, Nayarit'),
  precioM2: 9500,
  totalLotes: 157,
  vendidos: 145,
};

export const wa = (m: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;
export const waInfo = wa('Hola, quiero información de Cumbres de Mita.');

export type Lote = { num: string; manzana: string; tipo: 'Compacto' | 'Mediano' | 'Amplio'; calle: string; m2: number; medidas: string; lados: number; precio: number };
// Los 12 lotes disponibles de su página /lotes, tal cual.
export const lotes: Lote[] = [
  { num: '104', manzana: 'M-3', tipo: 'Amplio', calle: 'Circuito Caracoles', m2: 287.15, medidas: '11.01 × 25.18 m', lados: 8, precio: 2728000 },
  { num: '110', manzana: 'M-1', tipo: 'Compacto', calle: 'Circuito Caracoles', m2: 189.58, medidas: '9.00 × 19.83 m', lados: 7, precio: 1801000 },
  { num: '118', manzana: 'M-2', tipo: 'Amplio', calle: 'Circuito Caracoles', m2: 311.9, medidas: '9.89 × 31.08 m', lados: 6, precio: 2963000 },
  { num: '213', manzana: 'M-2', tipo: 'Compacto', calle: 'Privada Coral', m2: 182.94, medidas: '9.15 × 18.00 m', lados: 6, precio: 1738000 },
  { num: '309', manzana: 'M-2', tipo: 'Compacto', calle: 'Circuito Caracoles', m2: 160.97, medidas: '9.00 × 17.88 m', lados: 7, precio: 1529000 },
  { num: '311', manzana: 'M-1', tipo: 'Compacto', calle: 'Circuito Caracoles', m2: 160.85, medidas: '9.00 × 19.19 m', lados: 6, precio: 1528000 },
  { num: '315', manzana: 'M-3', tipo: 'Mediano', calle: 'Circuito Caracoles', m2: 233.22, medidas: '10.49 × 24.34 m', lados: 8, precio: 2216000 },
  { num: '318', manzana: 'M-3', tipo: 'Compacto', calle: 'Circuito Caracoles', m2: 175.07, medidas: '8.18 × 18.09 m', lados: 7, precio: 1663000 },
  { num: '322', manzana: 'M-3', tipo: 'Compacto', calle: 'Circuito Caracoles', m2: 161.02, medidas: '8.99 × 18.49 m', lados: 5, precio: 1530000 },
  { num: '325', manzana: 'M-3', tipo: 'Mediano', calle: 'Circuito Caracoles', m2: 213.31, medidas: '8.97 × 23.35 m', lados: 4, precio: 2026000 },
  { num: '326', manzana: 'M-3', tipo: 'Mediano', calle: 'Circuito Caracoles', m2: 215.48, medidas: '10.00 × 22.10 m', lados: 4, precio: 2047000 },
  { num: '607', manzana: 'M-6', tipo: 'Amplio', calle: 'Privada Coral', m2: 277.78, medidas: '10.00 × 26.64 m', lados: 6, precio: 2639000 },
];

export const kumo = {
  texto: 'Edificio boutique de 27 departamentos. Cada unidad tiene vista al mar o a la selva, balcón privado y acceso a amenidades compartidas. Preventa, entrega 2027.',
  tipologias: [
    { nombre: 'Departamento 1R', precio: '$2.9M', detalle: ['1 recámara', '1 baño', 'Balcón', 'Vista a la selva'] },
    { nombre: 'Departamento 2R Compacto', precio: '$4.2M', detalle: ['2 recámaras', '2 baños', 'Balcón', 'Vista al mar'] },
    { nombre: 'Departamento 2R Premium', precio: '$6.8M', detalle: ['2 recámaras', '2 baños', 'Terraza amplia', 'Vista panorámica'] },
  ],
  amenidades: ['Alberca infinity', 'Rooftop', 'Lobby', 'Co-working', 'Cinema', 'Fire pit', 'Elevador', 'Estacionamiento techado', 'Seguridad 24/7', 'Gym compartido con la Casa Club (en planeación)'],
};

export const nahya = 'Dos torres boutique con cuatro unidades cada una, de 100 m² con acabados premium, terraza privada y vista a la selva o al mar. La primera fase de Cumbres de Mita, que se agotó en preventa.';

export const amenidades = [
  { nombre: 'Casa Club', texto: 'Salón de eventos, área de coworking y espacio social con vista panorámica.', estado: 'Construida', foto: 'casa-club', alt: 'Vista aérea de la Casa Club de Cumbres de Mita: edificios blancos, alberca y escalinata entre palmeras' },
  { nombre: 'Alberca infinity', texto: 'Climatizada, con vista al mar, área de camastros y servicio de bar.', estado: 'Construida', foto: 'alberca', alt: 'Alberca infinity de Cumbres de Mita con una cascada en un muro y selva al fondo' },
  { nombre: 'Gym + Studio', texto: 'Equipamiento profesional y studio para yoga y pilates con vista a la selva.', estado: 'En planeación' },
];
export const incluye = ['Senderos naturales (3 km)', 'Área pet-friendly', 'Seguridad 24/7 con acceso controlado', 'Estacionamiento techado', 'Jardines comunes', 'WiFi en áreas comunes'];

export const ecosistema = [
  ['12', 'playas nadables, con agua entre 23 °C y 29 °C todo el año'],
  ['50+', 'rutas aéreas con vuelos directos al aeropuerto de Puerto Vallarta'],
  ['2', 'campos de golf Jack Nicklaus Signature en la península'],
  ['300 a 500', 'ballenas jorobadas cada invierno en Bahía de Banderas'],
] as const;

export const legal = 'Los precios son indicativos y sujetos a cambio sin previo aviso. Las imágenes son renders. La plusvalía histórica no garantiza rendimientos futuros.';
