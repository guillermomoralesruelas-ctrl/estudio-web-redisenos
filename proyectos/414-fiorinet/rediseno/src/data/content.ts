// Contenido de FioriNET. Textos, precios y datos tomados de su sitio (investigacion/crudo.json y,
// con curl el 2026-09-27, /df_spa/shipping-cost/, /entrega, /df_spa/physical-store/, /cdmx/hospitales,
// /cdmx/funerarias y las categorías "Todos los productos" y "Funeral"). No inventar datos.

export const negocio = {
  nombre: 'FioriNET',
  lema: 'La vida es mejor con flores',
  h1: 'Florería en CDMX — Envío de flores a domicilio el mismo día',
  queEs:
    'FioriNET es una florería mexicana fundada en 1999, especializada en el envío de flores a domicilio en Ciudad de México en 2 a 4 horas aprox. Ofrecemos arreglos florales con rosas premium, tulipanes, anturios, lilis y diseños vanguardistas para aniversarios, cumpleaños, condolencias, agradecimientos y todas las ocasiones.',
  familia:
    'Somos una empresa familiar con tienda física en Piedad Narvarte, CDMX.',
  calidad:
    'La flor utilizada para la elaboración en su arreglo será siempre la mejor disponible en el mercado pues basamos nuestra estrategia de venta en la calidad superior de las flores y el buen servicio.',
  sinPaqueteria:
    'Todos nuestros arreglos florales son enviados y entregados directamente por nosotros o alguna de nuestras florerías asociadas; en ningún caso enviamos nuestras flores por paquetería pues esto maltrata la flor y pierde la magia de un diseño armado y entregado personalmente.',
  google: { calificacion: '4.7', resenas: 122 },
  fundada: 1999,
};

export const contacto = {
  whatsapp: '525555089212',
  whatsappTexto: '+52 55 5508 9212',
  telefonos: [
    { ciudad: 'Ciudad de México', texto: '(55) 8526 1197', tel: '+525585261197' },
    { ciudad: 'Guadalajara', texto: '(33) 8526 1616', tel: '+523385261616' },
    { ciudad: 'Monterrey', texto: '(81) 4170 8140', tel: '+528141708140' },
    { ciudad: 'USA y Canadá', texto: '(213) 261 0497', tel: '+12132610497' },
  ],
  correo: 'mail@fiorinet.com',
  direccion: 'Casa del Obrero Mundial 246, col. Piedad Narvarte, alcaldía Benito Juárez, Ciudad de México, C.P. 03100',
  direccionCorta: 'Casa del Obrero Mundial 246, Piedad Narvarte',
  maps: 'https://www.google.com/maps/place/Florer%C3%ADa+Fiorinet/@19.4014973,-99.163813,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff1146da534d:0xe19eb9a524250b08!8m2!3d19.4014923!4d-99.1612381!16s%2Fg%2F1ts_6z0_',
  horario: [
    { dias: 'Lunes a viernes', horas: '9:00 a 19:00' },
    { dias: 'Sábados', horas: '9:30 a 13:30' },
  ],
  tienda: 'https://www.fiorinet.com.mx/df_spa/',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/fiorinet.com.mx/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/wwwfiorinetcommx-Florerias-con-envio-a-domicilio-en-DF-y-todo-Mexico-237256157571/' },
    { nombre: 'X (Twitter)', url: 'https://twitter.com/fiorinet' },
  ],
};

export type Arreglo = { id: string; nombre: string; precio: number; desde?: boolean; foto: string; url: string; linea: 'regalo' | 'condolencias' };

export const arreglos: Arreglo[] = [
  { id: 'calas', nombre: '10 Calas en Florero de Vidrio', precio: 990, foto: 'calas-florero', url: 'https://www.fiorinet.com.mx/df_spa/enviar-flores-10-calas-en-florero-de-vidrio.html', linea: 'regalo' },
  { id: 'tulipanes', nombre: '15 Tulipanes en Florero de Vidrio', precio: 1490, foto: 'tulipanes-florero', url: 'https://www.fiorinet.com.mx/df_spa/15-tulipanes-en-florero-de-vidrio.html', linea: 'regalo' },
  { id: 'amor', nombre: 'Amor a primera vista', precio: 1090, foto: 'amor-primera-vista', url: 'https://www.fiorinet.com.mx/df_spa/amor-a-primera-vista.html', linea: 'regalo' },
  { id: 'bouquet', nombre: 'Bouquet de rosas, de 12 a 150 rosas', precio: 699, desde: true, foto: 'bouquet-rosas', url: 'https://www.fiorinet.com.mx/df_spa/bouquet-de-rosas-12a150-rosas.html', linea: 'regalo' },
  { id: 'calasrosas', nombre: 'Calas y Rosas', precio: 1490, foto: 'calas-rosas', url: 'https://www.fiorinet.com.mx/df_spa/calas-y-rosas1.html', linea: 'regalo' },
  { id: 'centro', nombre: 'Centro de Rosas Multicolor', precio: 1730, foto: 'centro-rosas', url: 'https://www.fiorinet.com.mx/df_spa/centro-de-rosas-multicolor-42.html', linea: 'regalo' },
  { id: 'cielo', nombre: 'Cielo', precio: 1390, foto: 'cielo', url: 'https://www.fiorinet.com.mx/df_spa/cielo.html', linea: 'regalo' },
  { id: 'colorful', nombre: 'Colorful', precio: 2590, foto: 'colorful', url: 'https://www.fiorinet.com.mx/df_spa/colorful.html', linea: 'regalo' },
  { id: 'santuario', nombre: 'Santuario, orquídea phalaenopsis blanca 4 tallos', precio: 2390, foto: 'santuario-orquidea', url: 'https://www.fiorinet.com.mx/df_spa/santuario-orquideas.html', linea: 'condolencias' },
  { id: 'corona', nombre: 'Corona Orquídea Phalaenopsis Blanca (0.70 × 1.60 m)', precio: 3450, foto: 'corona-orquidea-blanca', url: 'https://www.fiorinet.com.mx/df_spa/orquidea-gold-998.html', linea: 'condolencias' },
  { id: 'pesame', nombre: 'Flores para Pésame', precio: 1850, foto: 'flores-pesame', url: 'https://www.fiorinet.com.mx/df_spa/sympathy-flowers.html', linea: 'condolencias' },
  { id: 'rosasblancas', nombre: 'Arreglo de 24 Rosas Blancas', precio: 1225, foto: 'rosas-blancas-24', url: 'https://www.fiorinet.com.mx/df_spa/two-dozen-white-roses-arranged.html', linea: 'condolencias' },
];

// Costo de entrega por zona (de /df_spa/shipping-cost/, "se lee de las plantillas de entrega de la tienda").
// 0 = sin costo.
export type Alcaldia = { nombre: string; corto: string; costo: number; col: number; fila: number };
export const alcaldias: Alcaldia[] = [
  { nombre: 'Azcapotzalco', corto: 'AZC', costo: 0, col: 1, fila: 0 },
  { nombre: 'Gustavo A. Madero', corto: 'GAM', costo: 0, col: 2, fila: 0 },
  { nombre: 'Miguel Hidalgo', corto: 'MH', costo: 0, col: 1, fila: 1 },
  { nombre: 'Cuauhtémoc', corto: 'CUA', costo: 0, col: 2, fila: 1 },
  { nombre: 'Venustiano Carranza', corto: 'VC', costo: 0, col: 3, fila: 1 },
  { nombre: 'Cuajimalpa', corto: 'CUJ', costo: 0, col: 0, fila: 2 },
  { nombre: 'Álvaro Obregón', corto: 'AO', costo: 0, col: 1, fila: 2 },
  { nombre: 'Benito Juárez', corto: 'BJ', costo: 0, col: 2, fila: 2 },
  { nombre: 'Iztacalco', corto: 'IZC', costo: 0, col: 3, fila: 2 },
  { nombre: 'La Magdalena Contreras', corto: 'MC', costo: 0, col: 1, fila: 3 },
  { nombre: 'Coyoacán', corto: 'COY', costo: 0, col: 2, fila: 3 },
  { nombre: 'Iztapalapa', corto: 'IZP', costo: 0, col: 3, fila: 3 },
  { nombre: 'Tlalpan', corto: 'TLP', costo: 0, col: 2, fila: 4 },
  { nombre: 'Xochimilco', corto: 'XOC', costo: 100, col: 3, fila: 4 },
  { nombre: 'Tláhuac', corto: 'TLH', costo: 180, col: 4, fila: 4 },
  { nombre: 'Milpa Alta', corto: 'MA', costo: 200, col: 3, fila: 5 },
];

export type Zona = { nombre: string; costo: number };
const z = (l: [string, number][]): Zona[] => l.map(([nombre, costo]) => ({ nombre, costo }));
export const otrosEstados: { id: string; nombre: string; zonas: Zona[] }[] = [
  {
    id: 'edomex', nombre: 'Estado de México', zonas: z([
      ['Acolman', 320], ['Amecameca', 400], ['Atizapán', 160], ['Chalco', 300], ['Chicoloapan', 200], ['Chiconcuac', 400],
      ['Chimalhuacán', 200], ['Coacalco', 250], ['Cuautitlán', 250], ['Ecatepec de Morelos', 200], ['Huixquilucan', 120],
      ['Huixquilucan de Degollado', 250], ['Ixtapaluca', 300], ['Lerma', 480], ['Los Reyes Acaquilpan', 200], ['Los Reyes La Paz', 200],
      ['Metepec', 480], ['Naucalpan', 60], ['Nezahualcóyotl', 120], ['Nicolás Romero', 240], ['Ocoyoacac', 480], ['Tecámac', 300],
      ['Tenango del Valle', 580], ['Teoloyucan', 320], ['Teotihuacán', 400], ['Tepotzotlán', 320], ['Tequixquiac', 480], ['Texcoco', 480],
      ['Tlalnepantla', 100], ['Toluca', 580], ['Tultepec', 200], ['Tultitlán', 280], ['Villa Almoloya de Juárez', 480],
      ['Villa Nicolás Romero', 250], ['Zinacantepec', 680], ['Zumpango de Ocampo', 450],
    ]),
  },
  {
    id: 'jalisco', nombre: 'Jalisco', zonas: z([
      ['El Salto', 160], ['Guadalajara', 80], ['Tlajomulco', 110], ['Tlaquepaque', 80], ['Tonalá', 160], ['Zapopan', 80],
    ]),
  },
  {
    id: 'nl', nombre: 'Nuevo León', zonas: z([
      ['Apodaca', 90], ['Escobedo', 90], ['García Nuevo León', 220], ['Guadalupe', 0], ['Monterrey', 0],
      ['San Nicolás de los Garza', 0], ['San Pedro Garza García', 0], ['Santa Catarina', 0], ['Zona Aeropuerto', 170], ['Zona Carretera Nacional', 170],
    ]),
  },
];

// Hospitales que publican por alcaldía (de /cdmx/hospitales).
export const hospitales: Record<string, string[]> = {
  'Álvaro Obregón': ['Hospital San Ángel Inn Sur', 'Star Médica Santa Fe', 'Hospital BITE Médica'],
  Azcapotzalco: ['Centro Quirúrgico Río Consulado'],
  'Benito Juárez': ['Hospital Infantil Privado', 'Hospital San Ángel Inn Universidad', 'Hospital Ángeles Universidad', 'Hospital San Ángel Inn Patriotismo', 'Sanatorio San José'],
  Coyoacán: ['Hospital MAC Periférico Sur', 'Hospital HMG Coyoacán'],
  Cuajimalpa: ['Hospital MAC Santa Fe'],
  Cuauhtémoc: ['Hospital Ángeles Metropolitano', 'Hospital San Ángel Inn Chapultepec', 'Centro Médico Dalinde', 'Hospital Ángeles Clínica Londres', 'Hospital Azura Roma Condesa', 'Star Médica Centro', 'Hospital Ángeles Roma'],
  'Gustavo A. Madero': ['Centro Médico Dalinde Lindavista', 'Hospital Ángeles Lindavista'],
  Iztapalapa: ['Hospital MAC La Viga'],
  'La Magdalena Contreras': ['Hospital Ángeles del Pedregal'],
  'Miguel Hidalgo': ['Hospital Diomed', 'Hospital Ángeles México', 'Hospital Español', 'Hospital Ángeles Mocel', 'Hospital Escandón', 'Hospital Cruz Roja Mexicana Polanco', 'Hospital Ángeles Santa Mónica'],
  Tlalpan: ['Hospital Ángeles Acoxpa', 'Medimac Cuemanco'],
  'Venustiano Carranza': ['Hospital CAMI'],
};

export const entrega = [
  { titulo: 'Entrega en 2 a 4 h', texto: 'Tiempo promedio de nuestras entregas nacionales. (No garantizamos este tiempo.)' },
  { titulo: 'Horario de reparto', texto: 'Salimos desde las 9:00 a.m. y la última entrega es a las 7:00 p.m. Los pedidos fuera de horario cuentan desde la apertura.' },
  { titulo: 'Elige tu fecha', texto: 'Nacional o internacional: puedes programar la entrega para el día que más te convenga.' },
  { titulo: 'Siempre informado', texto: 'Si surge cualquier detalle con tu entrega, uno de nuestros representantes te contactará.' },
];
export const avisoFechas = '14 de febrero y 10 de mayo: por la alta demanda, las entregas se realizan en horario abierto durante todo el día.';
export const cobertura = {
  nacional: 'Prácticamente en toda la República Mexicana. En poblados pequeños puede aplicar un costo extra de envío.',
  internacional: 'Enviamos a diversos países a través de florerías asociadas de la más alta calidad.',
  paises: ['Estados Unidos', 'España', 'Colombia', 'Canadá', 'Argentina', 'Chile', 'Perú', 'Brasil'],
  zonaNoListada: 'Si tu zona no aparece en la lista, escríbenos: muchas veces podemos llegar cotizando la entrega aparte.',
  precios: 'Todos nuestros precios están en pesos mexicanos e incluyen IVA. El costo de la entrega depende de la alcaldía o municipio donde se recibe el arreglo.',
};

export const hospitalTextos = {
  intro: 'Tenemos amplia experiencia en envíos a hospitales (IMSS, ABC, Médica Sur, Ángeles, etc.), velatorios y panteones de la Ciudad de México y el Estado de México. Confirmamos protocolo de acceso al destino antes de programar la entrega.',
  datos: 'Es muy recomendable el número de habitación. Si no lo tienes, déjanos al menos: nombre completo del paciente, hospital y, si lo conoces, médico tratante o piso.',
  areas: [
    { area: 'Habitación general (cuarto privado)', texto: 'Cualquier arreglo mediano funciona. Sugerimos rosas premium, tulipanes u orquídeas en maceta. Evita arreglos muy altos (más de 50 cm).' },
    { area: 'UCI o pediatría', texto: 'Algunas UCIs y pediatría restringen flores. Recomendamos regalos sin flor: globos, peluches, dulces o canastas para nuevo bebé.' },
    { area: 'Oncología o trasplantes', texto: 'Suelen prohibir flores naturales. Recomendamos flores preservadas, peluches o canastas con productos light.' },
  ],
};

export const funeralTextos = {
  urgente: 'Si necesitas entrega para un velorio próximo, llámanos por WhatsApp +52 555 508 9212 y damos prioridad inmediata a tu pedido.',
  tipos: 'Los más comunes son: coronas redondas u ovaladas (las más tradicionales, desde $1,490), cruces florales (para servicios católicos), cubre cajas florales (para acompañar el ataúd), ramos de pie con tripié (verticales, muy elegantes) y arreglos de florero (más íntimos).',
  cinta: 'Incluimos cinta personalizada sin costo extra con el mensaje y la firma que indiques al hacer el pedido.',
  lugares: 'Gayosso, J. García López, panteones Francés, Español, Jardín, Civil de Dolores, Mausoleos del Ángel, Jardines del Recuerdo, Memorial Park, velatorios IMSS e ISSSTE y muchas funerarias independientes.',
};

export const pagos = 'Aceptamos pago en efectivo, tarjeta de crédito y débito (Visa, Mastercard, AMEX), transferencia bancaria SPEI y PayPal. Todos los pagos en línea son procesados con cifrado SSL.';
export const factura = 'Emitimos factura electrónica CFDI 4.0. Solicítala al hacer tu pedido indicando tu RFC, razón social, uso de CFDI y régimen fiscal.';

export const preguntas = [
  { p: '¿En cuánto tiempo entregan flores en CDMX?', r: 'Entregamos arreglos florales en Ciudad de México en un tiempo promedio de 2 a 4 horas aprox. Para zonas dentro del Valle de México podemos confirmar entrega el mismo día si el pedido se realiza antes de las 14:00 hrs.' },
  { p: '¿Puedo personalizar mi arreglo floral?', r: 'Sí. Personalizamos flores, colores, tamaño y estilo del arreglo. Escríbenos por WhatsApp o déjanos tus indicaciones al hacer el pedido y lo diseñamos a tu gusto.' },
  { p: '¿Incluyen tarjeta de dedicatoria?', r: 'Sí, todos nuestros arreglos incluyen una tarjeta con tu mensaje personalizado sin costo adicional. Escribe tu dedicatoria al finalizar el pedido.' },
  { p: '¿Puedo programar la entrega para una fecha y hora específica?', r: 'Sí. Al hacer tu pedido puedes elegir la fecha y una franja horaria de entrega. Para horas exactas o eventos especiales, confírmanos por WhatsApp y lo coordinamos.' },
  { p: '¿Puedo hacer mi pedido por WhatsApp?', r: 'Sí. Atendemos y tomamos pedidos por WhatsApp, ideal para arreglos personalizados, cotizaciones o entregas de último momento el mismo día.' },
  { p: '¿Puedo recoger mi pedido en tienda?', r: 'Sí. Además del envío a domicilio, puedes recoger en nuestra tienda física en Piedad Narvarte, Benito Juárez, CDMX. Coordina la hora al confirmar tu pedido.' },
  { p: '¿Manejan rosas premium y flores de importación?', r: 'Sí. Trabajamos rosa premium de tallo largo, tulipanes holandeses, orquídeas, lirios y anturios, con flor fresca recibida cada semana de importación y temporada nacional.' },
  { p: '¿Qué métodos de pago aceptan?', r: pagos },
  { p: '¿Emiten factura (CFDI)?', r: 'Sí. ' + factura },
];
