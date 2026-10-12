// 17 propiedades de su catálogo en firmainmobiliaria.com (leído el 2026-10-12), agrupadas como el menú de su sitio.
// Precio, operación, tipo, colonia, recámaras, baños y m² tal como los publica EasyBroker. Fotos en ../assets/originales.
export type Paisaje = 'ciudad' | 'bosque' | 'playa' | 'industria';
export type Propiedad = {
  foto: string; paisaje: Paisaje; tipo: string; colonia: string; municipio: string; estado: string;
  op: 'Venta' | 'Preventa' | 'Renta'; precio: number; moneda: 'MXN' | 'USD'; rec?: number; banos?: number;
  m2?: number; m2Tipo?: 'construcción' | 'terreno'; titulo: string; url: string;
};
const u = (s: string) => `https://www.firmainmobiliaria.com/property/${s}`;

export const paisajes: { id: Paisaje; nombre: string; lugares: string; texto: string; catalogo: [string, string][] }[] = [
  { id: 'ciudad', nombre: 'Ciudad', lugares: 'Guadalajara · Zapopan · Tlajomulco', texto: 'Donde está la oficina: casas en coto, departamentos nuevos y rentas en la zona metropolitana.',
    catalogo: [['Guadalajara', 'https://www.firmainmobiliaria.com/properties/mexico/jalisco/guadalajara'], ['Zapopan', 'https://www.firmainmobiliaria.com/properties/mexico/jalisco/zapopan'], ['Rentas en Zapopan', 'https://www.firmainmobiliaria.com/rentals/mexico/jalisco/zapopan']] },
  { id: 'bosque', nombre: 'Bosque', lugares: 'Tapalpa · Mazamitla', texto: 'Cabañas y terrenos entre pinos, a la distancia de un fin de semana desde Guadalajara.',
    catalogo: [['Tapalpa', 'https://www.firmainmobiliaria.com/properties/mexico/jalisco/tapalpa'], ['Mazamitla', 'https://www.firmainmobiliaria.com/properties/mexico/jalisco/mazamitla']] },
  { id: 'playa', nombre: 'Playa', lugares: 'Bahía de Banderas · Riviera Maya · Bacalar · Todos Santos', texto: 'Del Pacífico al Caribe: departamentos con alberca, casas para rentar frente a la laguna y lotes frente al mar.',
    catalogo: [['Puerto Vallarta', 'https://www.firmainmobiliaria.com/properties/mexico/jalisco/puerto-vallarta'], ['Tulum', 'https://www.firmainmobiliaria.com/properties/mexico/quintana-roo/tulum'], ['Rentas en Cancún', 'https://www.firmainmobiliaria.com/rentals/mexico/quintana-roo/benito-juarez']] },
  { id: 'industria', nombre: 'Industria', lugares: 'El Salto · Tlajomulco', texto: 'Bodegas y naves al sur de Guadalajara, cerca del aeropuerto y de la carretera a Chapala.',
    catalogo: [['Bodega industrial', 'https://www.firmainmobiliaria.com/industrial-warehouse-type'], ['Bodega comercial', 'https://www.firmainmobiliaria.com/commercial-storage-unit-type'], ['Naves industriales', 'https://www.firmainmobiliaria.com/warehouse-type']] },
];

export const propiedades: Propiedad[] = [
  // Ciudad
  { foto: 'zapopan-solares', paisaje: 'ciudad', tipo: 'Casa en condominio', colonia: 'Solares', municipio: 'Zapopan', estado: 'Jal.', op: 'Venta', precio: 9500000, moneda: 'MXN', rec: 2, banos: 2, m2: 258, m2Tipo: 'construcción', titulo: 'Casa en Venta en Solares', url: u('casa-en-venta-en-solares-1de87ed7-2a08-445a-bbf5-be10ffeff5b3') },
  { foto: 'guadalajara-warhol-colomos', paisaje: 'ciudad', tipo: 'Departamento', colonia: 'Colomos Providencia', municipio: 'Guadalajara', estado: 'Jal.', op: 'Venta', precio: 9211365, moneda: 'MXN', rec: 2, banos: 2, m2: 136, m2Tipo: 'construcción', titulo: 'Departamento en Venta a Estrenar en WARHOL | Colomos Providencia | Planta Baja', url: u('departamento-en-venta-a-estrenar-en-warhol-colomos-providencia-planta-baja') },
  { foto: 'zapopan-centinela', paisaje: 'ciudad', tipo: 'Casa', colonia: 'Jardines del Vergel', municipio: 'Zapopan', estado: 'Jal.', op: 'Venta', precio: 6960000, moneda: 'MXN', rec: 3, banos: 4, m2: 330, m2Tipo: 'construcción', titulo: 'Casa en venta en Zona Centinela, Zapopan, Jal.', url: u('casa-en-venta-en-zona-centinela-zapopan-jal') },
  { foto: 'zapopan-lirica-towers', paisaje: 'ciudad', tipo: 'Departamento', colonia: 'Puerta las Lomas', municipio: 'Zapopan', estado: 'Jal.', op: 'Renta', precio: 29500, moneda: 'MXN', rec: 2, banos: 2, m2: 78, m2Tipo: 'construcción', titulo: 'Departamento en Renta en Lirica Towers en Zapopan', url: u('departamento-en-renta-en-lirica-towers-en-zapopan') },
  { foto: 'guadalajara-torre-del-bosque', paisaje: 'ciudad', tipo: 'Departamento', colonia: 'Jardines del Bosque Norte', municipio: 'Guadalajara', estado: 'Jal.', op: 'Renta', precio: 26500, moneda: 'MXN', rec: 2, banos: 2, m2: 110, m2Tipo: 'construcción', titulo: 'Departamento en Renta en Vive Torre del Bosque - Jardines del Bosque', url: u('departamento-en-renta-en-vive-torre-del-bosque-jardines-del-bosque') },
  // Bosque
  { foto: 'tapalpa-cabana-golf', paisaje: 'bosque', tipo: 'Casa', colonia: 'Tapalpa Country Club', municipio: 'Tapalpa', estado: 'Jal.', op: 'Venta', precio: 15000000, moneda: 'MXN', rec: 4, banos: 4, m2: 490, m2Tipo: 'construcción', titulo: 'Estrena cabaña de lujo frente al campo de golf en Tapalpa Country', url: u('estrena-cabana-de-lujo-frente-al-campo-de-golf-en-tapalpa-country') },
  { foto: 'tapalpa-la-lima', paisaje: 'bosque', tipo: 'Casa', colonia: 'Condominio La Lima', municipio: 'Tapalpa', estado: 'Jal.', op: 'Venta', precio: 7750000, moneda: 'MXN', rec: 4, banos: 4, m2: 286, m2Tipo: 'construcción', titulo: 'Cabaña en Venta, Condominio la Lima, Tapalpa, Jalisco', url: u('cabana-en-venta-condominio-la-lima-tapalpa-jalisco') },
  { foto: 'mazamitla-dos-cabanas', paisaje: 'bosque', tipo: 'Casa', colonia: 'Mazamitla', municipio: 'Mazamitla', estado: 'Jal.', op: 'Venta', precio: 4650000, moneda: 'MXN', rec: 3, banos: 3, m2: 189, m2Tipo: 'construcción', titulo: '2 cabañas en venta en Mazamitla', url: u('2-cabanas-en-venta-en-mazamitla-mazamitla-mazamitla') },
  { foto: 'mazamitla-paseo-del-ciervo', paisaje: 'bosque', tipo: 'Casa en condominio', colonia: 'Paseo del Ciervo', municipio: 'Mazamitla', estado: 'Jal.', op: 'Venta', precio: 4000000, moneda: 'MXN', rec: 6, banos: 2, m2: 230, m2Tipo: 'construcción', titulo: 'Cabaña en venta en Paseo del Ciervo, Mazamitla', url: u('cabana-en-venta-en-paseo-del-ciervo-mazamitla') },
  { foto: 'mazamitla-cabana-alpina', paisaje: 'bosque', tipo: 'Casa', colonia: 'Mazamitla', municipio: 'Mazamitla', estado: 'Jal.', op: 'Venta', precio: 2600000, moneda: 'MXN', rec: 2, banos: 1, m2: 100, m2Tipo: 'construcción', titulo: 'Cabaña alpina en venta en Mazamitla', url: u('venta-cabana-alpina') },
  // Playa
  { foto: 'bacalar-laguna', paisaje: 'playa', tipo: 'Casa con uso de suelo', colonia: 'Bacalar', municipio: 'Bacalar', estado: 'Q. Roo', op: 'Renta', precio: 60000, moneda: 'MXN', rec: 2, banos: 1, m2: 685, m2Tipo: 'terreno', titulo: 'Casa en renta frente a la laguna', url: u('casa-en-renta-frente-la-laguna') },
  { foto: 'bucerias-quadrant', paisaje: 'playa', tipo: 'Departamento', colonia: 'Bucerías', municipio: 'Bahía de Banderas', estado: 'Nay.', op: 'Venta', precio: 7400000, moneda: 'MXN', rec: 2, banos: 2, m2: 132, m2Tipo: 'construcción', titulo: '100 Las Palmas Av 2201, Quadrant', url: u('100-las-palmas-av-2201-quadrant') },
  { foto: 'tulum-aldea-zama', paisaje: 'playa', tipo: 'Casa', colonia: 'Aldea Zamá', municipio: 'Tulum', estado: 'Q. Roo', op: 'Venta', precio: 4000000, moneda: 'MXN', rec: 3, banos: 2, m2: 126, m2Tipo: 'construcción', titulo: 'Casa de 3 recámaras en Aldea Zamá', url: u('casa-de-3-recamaras-en-aldea-zama') },
  { foto: 'todos-santos-las-tunas', paisaje: 'playa', tipo: 'Terreno', colonia: 'Todos Santos', municipio: 'La Paz', estado: 'B.C.S.', op: 'Venta', precio: 750000, moneda: 'USD', m2: 1628, m2Tipo: 'terreno', titulo: 'Lotes con frente playa Las Tunas, Todos Santos BCS', url: u('lotes-con-frente-playa-las-tunas-todos-santos-bcs') },
  { foto: 'todos-santos-punta-lobos', paisaje: 'playa', tipo: 'Terreno', colonia: 'La Cachora', municipio: 'Todos Santos', estado: 'B.C.S.', op: 'Venta', precio: 890000, moneda: 'MXN', m2: 500, m2Tipo: 'terreno', titulo: 'Venta de terreno Punta Lobos (Todos Santos, B.C.S.)', url: u('venta-de-terreno-punta-lobos-todos-santos-b-c-s') },
  // Industria
  { foto: 'tlajomulco-bodega-las-cuatas', paisaje: 'industria', tipo: 'Bodega industrial', colonia: 'Valle de Santa Cruz', municipio: 'Tlajomulco de Zúñiga', estado: 'Jal.', op: 'Venta', precio: 44000000, moneda: 'MXN', m2: 2330, titulo: 'Bodega industrial en venta o renta en Las Cuatas', url: u('bodega-industrial-en-venta-o-renta-en-las-cuatas') },
  { foto: 'el-salto-bodega-aeropuerto', paisaje: 'industria', tipo: 'Bodega industrial', colonia: 'San José del Quince', municipio: 'El Salto', estado: 'Jal.', op: 'Venta', precio: 28000000, moneda: 'MXN', m2: 994, titulo: 'Bodega en venta frente al aeropuerto de Guadalajara', url: u('bodega-en-venta-frente-al-aeropuerto-de-guadalajara') },
];
