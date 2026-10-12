// Contenido de Grupo INSA Inmobiliaria & Avalúos (Ensenada, B.C.). Fuente: grupoinsapropiedades.org, leído el 2026-10-12:
// inicio, Avalúos, Avalúos Infonavit, Avalúos Bancarios, ¿Cuánto se cobra un avalúo?, ¿Quiénes somos?, Elsa, Mary, FAQ,
// Licencia, PROFECO, AMPI, Mejoravit y Contacto. Nada inventado: los costos son los que publican; donde no publican costo
// se pide cotizar por WhatsApp.

export const negocio = {
  nombre: 'Grupo INSA Inmobiliaria & Avalúos',
  corto: 'Grupo INSA',
  telefono: '646 947 6421',
  telefonoLink: '+526469476421',
  whatsapp: '526469476421',
  fijos: ['646 175 3339', '646 178 0065'],
  correo: 'info@grupoinsa.org',
  calle: 'Calle 15 #577, Interior 3-B',
  colonia: 'Zona Centro, Centro Profesional Quince',
  ciudad: 'Ensenada, B.C., C.P. 22800',
  horario: [['Lunes a viernes', '9:00 a 17:00'], ['Sábados', '9:00 a 14:00']],
  mapa: 'https://maps.google.com/?q=GRUPO+INSA+%7C+Aval%C3%BAos+%7C+Inmobiliaria,+Calle+15+577-Int.+3-B,+Zona+Centro,+22800+Ensenada,+B.C.',
  catalogo: 'https://www.grupoinsapropiedades.org/properties',
  rentas: 'https://www.grupoinsapropiedades.org/rentals',
  propietarios: 'https://www.grupoinsapropiedades.org/owners',
  redes: [
    ['Facebook', 'https://www.facebook.com/grupo.insa.avaluos/'],
    ['Instagram', 'https://www.instagram.com/grupo.insa.avaluos/'],
    ['TikTok', 'https://www.tiktok.com/@grupo.insa'],
    ['YouTube', 'https://www.youtube.com/@GrupoINSAmx'],
  ] as [string, string][],
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const intro =
  'Empresa 100% bajacaliforniana con más de 12 años en operaciones inmobiliarias y 16 años en valuación. Compramos, vendemos, rentamos y valuamos casas, terrenos y locales en Ensenada, Rosarito y Tijuana.';

export const servicios = [
  'Compra y venta de propiedades',
  'Renta de bienes inmuebles',
  'Asesoría legal y notarial inmobiliaria',
  'Valuación inmobiliaria certificada',
  'Análisis de inversión',
  'Consultoría para desarrolladores',
];

export const asociaciones = [
  ['AMPI Ensenada', 'Asociación Mexicana de Profesionales Inmobiliarios, Sección Ensenada'],
  ['APIE', 'Asociación de Profesionales Inmobiliarios de Ensenada'],
  ['CEPIBC', 'Consejo Estatal de Profesionales Inmobiliarios de Baja California'],
  ['COPICE', 'Colegio de Profesionistas en Ingeniería Civil de Ensenada'],
  ['COVE', 'Colegio de Valuadores de Ensenada'],
];

export const registros = [
  ['Licencia estatal de agente inmobiliario', 'ENS20240001'],
  ['Registro PROFECO (contrato de adhesión)', '7234-2022'],
  ['Valuador profesional SHF', 'Avalúos hipotecarios y bancarios'],
  ['Perito auxiliar del Poder Judicial de B.C.', 'PJBC 000518'],
];

// "¿Para qué necesitas el avalúo?": cada propósito lleva al tipo de avalúo que el propio sitio indica, con lo que piden y cómo cobran.
export type Proposito = {
  id: string;
  para: string;
  tipo: string;
  que: string;
  registro: string;
  cobertura: string;
  papeles: string[];
  costo: string;
  ejemplo?: string;
};

const papelesGenerales = [
  'Copia de la escritura de la propiedad',
  'Boleta predial',
  'Inscripción en el RPPC',
  'Deslinde o memorias descriptivas',
  'Planos arquitectónicos',
  'Certificado de número oficial',
  'Acceso al inmueble para tomar fotografías y medidas',
];
const bc = 'Tijuana, Playas de Rosarito, Ensenada y San Quintín';
const cotiza = 'No publican tarifa para este avalúo: cotízalo por WhatsApp.';

export const propositos: Proposito[] = [
  {
    id: 'compraventa',
    para: 'Escriturar una compraventa de contado, herencia o donación',
    tipo: 'Avalúo fiscal certificado',
    que: 'Para el traslado de dominio: compraventa de contado, donación, dación en pago o adjudicación de terrenos, casas, departamentos, ranchos, parcelas, naves o locales.',
    registro: 'Perito valuador fiscal: RPR-003/14 Ensenada · RVF-301 Tijuana · PV-163/2021 Playas de Rosarito',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: 'Aproximadamente 3 al millar sobre el valor concluido (entre 2.5 y 3.5 al millar).',
    ejemplo: 'Su ejemplo publicado: un inmueble de $1,000,000 MN, avalúo de $3,000.',
  },
  {
    id: 'infonavit',
    para: 'Comprar con crédito Infonavit',
    tipo: 'Avalúo Infonavit',
    que: 'Avalúo y dictamen técnico de calidad hecho a través de la unidad de valuación ABC Appraisers de México y aprobado en el sistema del Infonavit. Línea II nueva o usada, III (construir), IV (ampliar o remodelar) y V (pago de pasivos).',
    registro: 'Unidad de valuación ABC Appraisers de México, autorizada por el Instituto',
    cobertura: bc,
    papeles: [
      'Solicitud de avalúo en PDF, capturada y firmada',
      'Certificado de número oficial (lo pueden tramitar)',
      'Deslinde o memorias descriptivas (lo pueden realizar)',
      'INE o pasaporte de comprador y vendedor',
      'Constancia de situación fiscal vigente de comprador y vendedor',
      'Precalificación con NSS del comprador',
      'Escritura con firma y sellos de notaría, contrato privado ratificado o título',
      'Boleta predial pagada del año y recibo de agua del mes',
      'Comprobantes de uso de la vivienda, según su antigüedad',
      'Línea III y IV: planos .dwg, licencia, calendario y presupuesto de obra',
    ],
    costo: '2.32 al millar + $1,700 de tarifa base, para avalúos con valor concluido mayor a $604,000. El millar se calcula sobre lo que rebase $604,000.',
  },
  {
    id: 'fovissste',
    para: 'Comprar con crédito Fovissste',
    tipo: 'Avalúo Fovissste',
    que: 'Avalúo para originación de crédito Fovissste, a través de la unidad de valuación ABC Appraisers de México.',
    registro: 'Unidad de valuación ABC Appraisers de México, autorizada por el Instituto',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: 'Valor concluido mayor a $772,000: $45 + IVA por m² construido o $3,500 + IVA, lo que resulte mayor. Fovissste Pesos (cofinanciado): 3 al millar + IVA.',
  },
  {
    id: 'banco',
    para: 'Pedir un crédito hipotecario al banco',
    tipo: 'Avalúo hipotecario',
    que: 'Para tramitar un crédito con una institución bancaria (HSBC, Banorte, Santander, Afirme) u otros organismos (IMSS, Issfam, CFE).',
    registro: 'Valuador profesional SHF, avalúos con objeto de crédito garantizado a la vivienda',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: cotiza,
  },
  {
    id: 'parcela',
    para: 'Primera escrituración de una parcela',
    tipo: 'Avalúo bancario',
    que: 'Para la primera escrituración (compraventa) de parcelas y predios desincorporados de un ejido que ya tienen título, boleta predial e inscripción en el RPPC. Lo piden en notaría o en el registro público.',
    registro: 'Certificado a través de BIM, Banco Inmobiliario Mexicano, desde 2016',
    cobertura: 'Baja California, Sonora, Sinaloa y Baja California Sur',
    papeles: ['Boleta predial', 'Inscripción en el RPPC', 'Deslinde o levantamiento', 'Título de propiedad'],
    costo: cotiza,
  },
  {
    id: 'precio',
    para: 'Saber cuánto vale antes de comprar o vender',
    tipo: 'Avalúo comercial',
    que: 'Para conocer el valor comercial de un inmueble. Lo recomiendan antes de comprar o vender una propiedad.',
    registro: 'EVI Ing. Leonardo Sánchez Díaz, especialista en valuación inmobiliaria',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: cotiza,
  },
  {
    id: 'isr',
    para: 'Calcular el ISR de una propiedad que compraste hace años',
    tipo: 'Avalúo referido',
    que: 'Determina el valor de una propiedad a una fecha anterior, por lo común cuando se adquirió el terreno o se construyó la casa o el edificio, para el cálculo de impuestos en el traslado de dominio.',
    registro: 'Perito valuador fiscal en Ensenada, Tijuana y Playas de Rosarito',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: cotiza,
  },
  {
    id: 'renta',
    para: 'Fijar la renta mensual de un inmueble',
    tipo: 'Justipreciación de rentas',
    que: 'Avalúo para fijar una renta mensual con base en el mercado de la zona.',
    registro: 'EVI Ing. Leonardo Sánchez Díaz, especialista en valuación inmobiliaria',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: cotiza,
  },
  {
    id: 'juicio',
    para: 'Un juicio o trámite judicial',
    tipo: 'Avalúo judicial',
    que: 'Avalúos para procesos ante el Poder Judicial de Baja California.',
    registro: 'Perito auxiliar del H. Tribunal Superior de Justicia de B.C., registro PJBC 000518',
    cobertura: bc,
    papeles: papelesGenerales,
    costo: cotiza,
  },
];

export const valuador = {
  nombre: 'EVI Ing. Leonardo Sánchez Díaz',
  cargo: 'Especialista en valuación inmobiliaria',
  correo: 'leonardo@grupoinsa.org',
  trayectoria: [
    'Ingeniero civil, UABC, 2010',
    'Especialidad en Valuación Inmobiliaria, IPN, 2012',
    'Ejerce desde 2009: VIP Avalúos, HSBC y Bancomer',
    'Perito valuador con registro en Tijuana, Playas de Rosarito y Ensenada',
    'Perito DRO/DRP #808',
  ],
};

export const equipo = [
  { nombre: 'Leonardo Sánchez Díaz', cargo: 'Valuador y agente inmobiliario con licencia', tel: '646 947 6421', wa: '526469476421', correo: 'leonardo@grupoinsa.org', foto: 'equipo-leonardo-sanchez' },
  { nombre: 'Elsa Tello Rodríguez', cargo: 'Asesora inmobiliaria · asesoría gratuita para vender tu propiedad', tel: '646 150 9084', wa: '526461509084', correo: 'elsa@grupoinsa.org', foto: 'equipo-elsa-tello' },
  { nombre: 'María de Jesús Grajeda', cargo: 'Asesora inmobiliaria · compraventa ágil y personalizada', tel: '646 227 5371', wa: '526462275371', correo: 'marygrajedac@gmail.com', foto: '' },
];

export const mejoravit = {
  t: 'Trámite Mejoravit',
  d: 'Arman tu expediente, lo llevan al Infonavit y gestionan tu cita para que recojas tus tarjetas y firmes. Tu patrón debe estar dado de alta en el portal empresarial del Infonavit.',
  costo: '$3,000',
};

export const preguntas = [
  ['¿Cuánto se paga a la inmobiliaria?', 'La comisión suele estar entre el 5% y el 6% de la compraventa en inmobiliarias tradicionales, para garantizar la colaboración entre agencias y una pronta comercialización.'],
  ['¿Quién paga a la inmobiliaria, el comprador o el vendedor?', 'Comúnmente el propietario asume los gastos de gestión inmobiliaria y de formalización del contrato de compraventa o arrendamiento.'],
  ['¿Cómo saber si una inmobiliaria es segura?', 'Verifica su legalidad (RFC y constancia de situación fiscal), su reputación y sus oficinas; pide el borrador del contrato de intermediación y, ante la duda, consulta a PROFECO.'],
];
