// Contenido de FORTER, tomado de investigacion/crudo.json (inicio, block, vigueta, cemento y acero) y del sitio en vivo
// (calculadoras, nosotros, guías y su configuración: WhatsApp 662 229 4406; 2026-10-09). Nada inventado; textos del estudio
// en CAMBIOS.md. Las fórmulas de "Tu obra en un pedido" son las de sus propias calculadoras (ver CAMBIOS.md).

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'FORTER',
  ciudad: 'Hermosillo, Sonora',
  whatsapp: '526622294406',
  whatsappTxt: '662 229 4406',
  facebook: 'https://www.facebook.com/forterhermosillo',
  instagram: 'https://www.instagram.com/fortermx',
  horario: 'Lun–Vie 8:00–18:00 · Sáb 8:00–14:00',
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const mapa = (dir: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dir)}`;

export const sucursales = [
  { nombre: 'Matriz', dir: 'Blvd. Mazón entronque carretera a Ures, Hermosillo, Son.', tel: '(662) 280 0212', href: 'tel:+526622800212' },
  { nombre: 'Sucursal San Pedro', dir: 'Blvd. Principal, San Pedro El Saucito, Hermosillo, Son.', tel: '(662) 280 0012', href: 'tel:+526622800012' },
  { nombre: 'Sucursal Rebeico', dir: 'Blvd. Solidaridad #722, Col. Norberto Ortega, Hermosillo, Son.', tel: '(662) 118 7788', href: 'tel:+526621187788' },
];
export const zonas = ['Hermosillo', 'Bahía de Kino', 'Miguel Alemán (La Doce)', 'San Pedro El Saucito', 'Pesqueira', 'Guaymas y Empalme'];

export const entrega = 'Entrega gratis a partir de 3 tarimas en Hermosillo y alrededores. Pago anticipado con tarjeta o transferencia.';
export const ventajas = [
  { t: 'Entrega gratis desde 3 tarimas', d: 'En Hermosillo y alrededores. Lo demás, con flete cotizado y justo.' },
  { t: 'Pago anticipado seguro', d: 'Tarjeta o transferencia. Confirmas por WhatsApp y se programa tu entrega.' },
  { t: 'Surtido para toda la obra', d: 'Desde la losa de vigueta y bovedilla hasta el último bulto de cemento.' },
];

export const catalogo = [
  {
    id: 'block', nombre: 'Block gris', foto: 'block-yard', fab: true,
    texto: 'Block gris común de fabricación propia para muros y bardas. Cotiza por tarima.',
    productos: [
      { n: 'Block Gris Común 12 × 20 × 40 cm', d: 'Muros divisorios y de relleno.', f: 'block-gris-12-20-40' },
      { n: 'Block Gris Común 15 × 20 × 40 cm', d: 'Muros de carga y bardas.', f: 'block-gris-15-20-40' },
    ],
  },
  {
    id: 'vigueta', nombre: 'Vigueta y bovedilla', foto: 'vigueta', fab: true,
    texto: 'Producimos vigueta de concreto presforzado y bovedilla para sistemas de losa aligerada.',
    productos: [
      { n: 'Vigueta Pretensada V11 (V30, V40 y V50)', d: 'Para claros y cargas estándar de vivienda.', f: 'vigueta-v11' },
      { n: 'Vigueta Pretensada V16 (V50)', d: 'Para claros mayores y mayor capacidad de carga.', f: 'vigueta-v16' },
      { n: 'Bovedilla 11 · 1.22 × 0.61 × 0.11 m', d: 'Para losa aligerada.', f: 'bovedilla-11' },
      { n: 'Bovedilla 16 · 1.22 × 0.61 × 0.16 m', d: 'Para claros mayores.', f: 'bovedilla-16' },
    ],
  },
  {
    id: 'cemento', nombre: 'Cemento y mortero', foto: 'cemento-pour', fab: false,
    texto: 'Por bulto o tarima, con planta propia y camiones revolvedores.',
    productos: [
      { n: 'Cemento Gris Campana · 25 kg', d: 'Cemento gris de uso general.', f: 'cemento-gris-campana-25kg' },
      { n: 'Mortero Óptimo · 25 kg', d: 'Mortero para pega y aplanados.', f: 'mortero-optimo-25kg' },
    ],
  },
  {
    id: 'acero', nombre: 'Acero para construcción', foto: 'varilla', fab: false,
    texto: 'Todo el acero de tu obra en un solo pedido, junto con tu block, cemento o vigueta.',
    productos: [
      { n: 'Varilla 3/8”', d: 'La más usada en castillos y cadenas de vivienda.', f: 'varilla-3-8' },
      { n: 'Varilla 1/2”', d: 'Para cimentaciones, trabes y donde el proyecto pide más acero.', f: 'varilla-1-2' },
      { n: 'Armex Castillo 15/15/4', d: 'Armado electrosoldado de sección cuadrada para castillos.', f: 'armex-castillo-15-15-4' },
      { n: 'Armex Cadena 15/20/4', d: 'Para cadenas de desplante y cerramiento.', f: 'armex-cadena-15-20-4' },
      { n: 'Malla Electrosoldada 6/6/10/10', d: 'Para firmes y capa de compresión de losas.', f: 'malla-electrosoldada-66-10-10' },
      { n: 'Alambre recocido', d: 'Para amarres del armado.', f: 'alambre-recocido' },
      { n: 'Alambrón', d: 'Para estribos y habilitado en obra.', f: 'alambron' },
    ],
  },
];

// Fórmulas de sus calculadoras en forter.mx/calculadoras (tal cual):
// Barda: block = ⌈largo × alto × 12.5 × 1.05⌉ (block 15×20×40, 5% de desperdicio); castillos = ⌈largo / 3⌉ + 1; cadena = ⌈largo × 2⌉ m (doble cadena).
// Losa: viguetas = ⌈lado mayor / 0.75⌉ + 1 (separación de 75 cm); bovedillas = ⌈área × 1.35⌉; claro (lado menor) ≤ 4.5 m → V11 y bovedilla 11; si no, V16 y bovedilla 16.
export const formula = { pzasM2: 12.5, desperdicio: 1.05, castilloCada: 3, separacion: 0.75, bovedillaM2: 1.35, claroV11: 4.5 };
export const notaBarda = 'Estimación aproximada con block 15 × 20 × 40 (12.5 pzas/m² más 5% de desperdicio), castillos a cada 3 m y doble cadena. Las cantidades finales te las confirma su equipo sin costo al cotizar.';
export const notaLosa = 'Estimación preliminar con separación usual de 75 cm entre ejes. El cálculo definitivo según tu claro y carga lo confirma su equipo sin costo; para el diseño definitivo, valídalo con tu proyecto estructural.';

export const nosotros = 'FORTER es una empresa dedicada a la producción de prefabricados de concreto presforzado, como vigueta pretensada, alma abierta y bardas, así como a la comercialización de materiales para la construcción en todo Sonora.';
export const valores = ['Calidad', 'Responsabilidad', 'Trabajo en equipo', 'Espíritu de servicio', 'Eficiencia'];
export const preguntas = [
  { p: '¿Hacen entregas a domicilio en Hermosillo?', r: 'Sí. La entrega es gratis a partir de 3 tarimas en Hermosillo y alrededores. Pedidos menores o fuera de zona llevan flete cotizado.' },
  { p: '¿Cómo pago mi pedido?', r: 'Con pago anticipado por tarjeta o transferencia. Al confirmar tu cotización por WhatsApp te envían los datos.' },
  { p: '¿Fabrican vigueta y bovedilla?', r: 'Sí, son fábrica. Producen vigueta pretensada V11 y V16 y bovedilla 11 y 16, y te ayudan a calcular tu losa.' },
  { p: '¿Surten obra completa?', r: 'Sí. En un solo pedido combinan block, cemento, varilla, armex y malla y lo entregan junto.' },
];
