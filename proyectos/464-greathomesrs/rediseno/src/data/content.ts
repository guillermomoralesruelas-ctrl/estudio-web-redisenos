// Contenido de Great Homes RS. Fuente: greathomes.mx (inicio, nosotros, vende o renta tu propiedad, preguntas frecuentes,
// aviso de privacidad y catálogo), leído el 2026-10-11. No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'Great Homes RS',
  telefonos: [
    { t: '(55) 5550-3199', link: '+525555503199' },
    { t: '(55) 5285-3478', link: '+525552853478' },
  ],
  whatsapp: '525552853478',
  correo: 'jose@greathomes.mx',
  direccion: 'Mariscal 29, San Ángel, C.P. 01000, Álvaro Obregón, Ciudad de México',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Mariscal+29+San+%C3%81ngel+01000+Ciudad+de+M%C3%A9xico',
  venta: 'https://www.greathomes.mx/propiedades-en-venta',
  renta: 'https://www.greathomes.mx/propiedades-en-renta',
  instagram: 'https://www.instagram.com/greathomesmx/',
  facebook: 'https://www.facebook.com/GreatHomesRs/',
  linkedin: 'https://www.linkedin.com/company/great-homes-rs/about/',
};

export const zonasNosotros = ['San Ángel', 'San Ángel Inn', 'Tlacopac', 'Polanco', 'Lomas de Chapultepec', 'Bosques de las Lomas', 'Jardines del Pedregal', 'Florida', 'Santa Fe'];

export const nosotros = [
  'Más de 30 años en las zonas residenciales de mayor valor de la Ciudad de México, con un entendimiento preciso del valor, el carácter y el potencial de cada colonia.',
  'Nuestro enfoque no es transaccional, es un acompañamiento integral. No somos una plataforma ni un directorio de propiedades: somos una firma con criterio propio, discreción absoluta y una red de compradores, inversionistas y arrendatarios de perfil selecto.',
];

// "Del avalúo a la escritura": el proceso que describen en Nosotros y en Vende o renta tu propiedad.
export const proceso = [
  { t: 'Valuación', d: 'Equipo propio de valuadores certificados que determina el precio justo de mercado con datos de operaciones cerradas. Sin costo para propietarios en sus zonas.' },
  { t: 'Presentación', d: 'Producción fotográfica y de video de nivel editorial, recorridos virtuales y materiales de presentación.' },
  { t: 'Comercialización', d: 'Distribución a su red de compradores calificados; si lo pides, antes de cualquier publicación pública.' },
  { t: 'Crédito y contrato', d: 'Asesoría en créditos hipotecarios y revisión legal del contrato de compraventa o arrendamiento.' },
  { t: 'Cierre fiscal', d: 'Orientación fiscal antes de firmar, para optimizar el ISR y las implicaciones de la operación.' },
];
export const sellos = ['Valuación sin costo', 'Discreción total', 'Resultados comprobados'];

// Rangos orientativos que publica Great Homes en sus preguntas frecuentes (referencia 2025-2026).
export type Referencia = { id: string; zona: string; tipo: string; m2: [number, number | null]; renta: string };
export const referencias: Referencia[] = [
  { id: 'polanco-depto', zona: 'Polanco (Chapultepec Morales)', tipo: 'Departamento nuevo o remodelado', m2: [90000, 140000], renta: 'Departamentos de 150 a 250 m²: $45,000 a $90,000 al mes; penthouses o plantas enteras desde $100,000.' },
  { id: 'polanco-casa', zona: 'Polanco', tipo: 'Casa en zona prime', m2: [100000, null], renta: 'Departamentos de 150 a 250 m²: $45,000 a $90,000 al mes; penthouses o plantas enteras desde $100,000.' },
  { id: 'lomas-casa', zona: 'Lomas de Chapultepec', tipo: 'Casa', m2: [70000, 120000], renta: 'Lomas de Chapultepec y Bosques: casas de $80,000 a $250,000 al mes.' },
  { id: 'sanangel-casa', zona: 'San Ángel / San Ángel Inn', tipo: 'Casa o townhouse', m2: [65000, 110000], renta: 'Casas y townhouses de $60,000 a $130,000 al mes.' },
  { id: 'santafe-depto', zona: 'Santa Fe', tipo: 'Departamento de lujo', m2: [55000, 85000], renta: 'Departamentos de $35,000 a $70,000 al mes.' },
];

export const preguntas = [
  { p: '¿Cuánto tarda en venderse una propiedad en estas zonas?', r: 'En el segmento premium de la Ciudad de México, entre 3 y 9 meses desde la primera publicación hasta la firma de escritura, según el tipo de inmueble, el precio de salida y la calidad de la comercialización. Lo que más acorta el tiempo: precio correcto desde el inicio, fotografía y video profesionales y distribución activa.' },
  { p: '¿Qué documentos necesito para poner mi propiedad en venta?', r: 'Del inmueble: escritura pública, certificado de libertad de gravamen actualizado, boletas de predial y agua al corriente, planos si existen y reglamento de condominio si aplica. Del propietario: identificación oficial y RFC, entre otros. Great Homes acompaña la revisión y obtención de cada documento desde el inicio.' },
  { p: '¿Cuál es la comisión y qué incluye?', r: 'Entre el 4% y el 5% del precio de venta más IVA, pagada al cierre; en renta suele equivaler a un mes de renta. Incluye valuación técnica, producción de foto y video, comercialización activa, filtrado de compradores, negociación y gestión de la documentación.' },
  { p: '¿Cómo garantizan la discreción?', r: 'Comercialización dirigida a su red de compradores calificados antes de cualquier publicación, y presentación de la propiedad solo a candidatos previamente filtrados.' },
  { p: '¿Qué garantías pedir a un inquilino de alto nivel?', r: 'Las más comunes: depósito en garantía de 1 a 2 meses de renta y aval con inmueble libre de gravamen en la Ciudad de México. Great Homes filtra a los candidatos antes de presentarlos al propietario.' },
];
