// Contenido de Costa Dream Realty Mexico. Fuente: costadreamrealty.com (inicio, /bio, /what-do-we-do, /aboutcdr y las
// 3 páginas de /properties en EasyBroker), leído el 2026-10-10. No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'Costa Dream Realty Mexico',
  lema: 'Para compradores que no buscan el México obvio.', // "For buyers who are not looking for the obvious Mexico."
  fundadora: 'Elsa Ontiveros',
  whatsapp: '529581079570', // "Local WhatsApp: (958) 107 9570"
  whatsappTexto: '(958) 107 9570',
  nacional: '(55) 1007 6781',
  nacionalE164: '525510076781',
  internacional: '+1 (213) 550 1067',
  internacionalE164: '12135501067',
  correo: 'info@costadreamrealty.com',
  agenda: 'https://calendar.app.google/4MVjGJwwy32Loag28',
  // [PENDIENTE] No publica dirección de oficina; los mapas son los de cada propiedad.
  sitioOriginal: 'https://www.costadreamrealty.com',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/costadreamrealty/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/costadreamrealtymx/' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/@CostaDreamRealtyMX' },
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/costadreamrealty/' },
  ],
  revista: 'https://www.costadreamrealty.com/CostaDreamSubstack',
  bio: [
    'Soy Elsa Ontiveros. Desde hace casi 20 años doy clases en el Tecnológico de Monterrey y dirijo proyectos de impacto social a través de Trascendencia Social A.C.',
    'Viví diez años en Estados Unidos, donde hice mi licenciatura, maestría y prácticas en Environmental Defense Fund, y después inicié estudios doctorales en la Universidad de Essex. Esa experiencia, sumada a mi perspectiva como mexicana, me permite entender tanto al comprador extranjero como al propietario local que quiere vender con seguridad y respeto por su tierra.',
    'Trabajo con un número limitado de propiedades para asegurar un seguimiento cercano y serio.',
  ],
  servicios: [
    'Compra y venta de casas y departamentos.',
    'Representación de propietarios que desean vender o rentar.',
    'Terrenos y macrolotes para desarrollos.',
    'Hoteles boutique y proyectos de inversión.',
  ],
  revisamos: ['Uso de suelo y zonificación', 'Título y estructura de propiedad', 'Servicios y accesos', 'Expectativas de inversión realistas'],
};

export type Zona = 'pe' | 'maz' | 'zip' | 'pa' | 'hux' | 'sma' | 'otros';

// La costa de poniente a oriente; las frases salen de su página "Why the Oaxaca Coast" y de su inicio.
export const costa: { id: Zona; nombre: string; frase: string }[] = [
  { id: 'pe', nombre: 'Puerto Escondido', frase: 'La Barra, La Ventanilla, Bacocho y la costa de Tres Palmas.' },
  { id: 'maz', nombre: 'Mazunte', frase: 'Inventario limitado e identidad arquitectónica; Playa Mermejita.' },
  { id: 'zip', nombre: 'Zipolite', frase: 'Demanda internacional con muy poca oferta.' },
  { id: 'pa', nombre: 'Puerto Ángel', frase: 'Costa más tranquila: El Faro y Playa del Panteón.' },
  { id: 'hux', nombre: 'Huatulco', frase: 'Crecimiento planeado, infraestructura y renta estable.' },
];
export const adentro: { id: Zona; nombre: string; frase: string }[] = [
  { id: 'sma', nombre: 'San Miguel de Allende', frase: 'Casas en un viñedo en operación y residencias en Mexiquito.' },
  { id: 'otros', nombre: 'Otros destinos', frase: 'La sierra de San José del Pacífico y un hostal en Playa del Carmen.' },
];

export type Propiedad = {
  id: string; zona: Zona; lugar: string; tipo: string; operacion: 'venta' | 'preventa'; precio: number; moneda: 'MXN' | 'USD';
  rec: number | null; banos: number | null; m2: number | null; url: string; lat: number | null; lng: number | null; aprox: boolean; foto: string | null;
};

export const propiedades: Propiedad[] = [{"id": "EB-XB0186", "zona": "otros", "lugar": "San Mateo Río Hondo (sierra)", "tipo": "Casa", "operacion": "venta", "precio": 310000, "moneda": "USD", "rec": 5, "banos": 3, "m2": 1012, "url": "/property/5-bedroom-mountain-property-with-two-homes-near-san-jose-del-pacifico-oaxaca", "lat": 16.14452, "lng": -96.4471, "aprox": false, "foto": "EB-XB0186"},
 {"id": "EB-XA6966", "zona": "pe", "lugar": "La Barra de Colotepec", "tipo": "Casa", "operacion": "venta", "precio": 6900000, "moneda": "MXN", "rec": 2, "banos": 2, "m2": 165, "url": "/property/2-bedroom-house-with-private-pool-in-la-barra-puerto-escondido-165-m", "lat": 15.8273, "lng": -97.03001, "aprox": false, "foto": "EB-XA6966"},
 {"id": "EB-XA6904", "zona": "hux", "lugar": "Sector K, Huatulco", "tipo": "Departamento", "operacion": "venta", "precio": 4500000, "moneda": "MXN", "rec": 2, "banos": 1, "m2": 94, "url": "/property/2-bedroom-residence-for-sale-in-huatulco-94-m-1-011-81-sq-ft-for-longer-sta", "lat": 15.77096, "lng": -96.12884, "aprox": false, "foto": "EB-XA6904"},
 {"id": "EB-XA6861", "zona": "hux", "lugar": "Sector K, Huatulco", "tipo": "Departamento", "operacion": "venta", "precio": 4080000, "moneda": "MXN", "rec": 2, "banos": 1, "m2": 94, "url": "/property/2-bedroom-condo-for-sale-in-huatulco-94-m-1-011-81-sq-ft-with-rooftop-pool", "lat": 15.77096, "lng": -96.12884, "aprox": false, "foto": "EB-XA6861"},
 {"id": "EB-XA6839", "zona": "hux", "lugar": "Sector K, Huatulco", "tipo": "Departamento", "operacion": "preventa", "precio": 2580000, "moneda": "MXN", "rec": null, "banos": 1, "m2": 56, "url": "/property/1-bedroom-studio-for-sale-in-huatulco-56-45-m-607-62-sq-ft-with-rooftop-poo", "lat": 15.77096, "lng": -96.12884, "aprox": false, "foto": "EB-XA6839"},
 {"id": "EB-XA6796", "zona": "zip", "lugar": "Playa Zipolite", "tipo": "Departamento", "operacion": "venta", "precio": 500000, "moneda": "USD", "rec": 2, "banos": 2, "m2": 90, "url": "/property/penthouse-ocean-view-2br-in-zipolite-89-25-m-961-sq-ft-5-min-to-beach", "lat": 15.6669, "lng": -96.52046, "aprox": false, "foto": "EB-XA6796"},
 {"id": "EB-XA6706", "zona": "zip", "lugar": "Playa Zipolite", "tipo": "Departamento", "operacion": "venta", "precio": 439000, "moneda": "USD", "rec": null, "banos": null, "m2": 90, "url": "/property/ocean-view-2br-condo-in-zipolite-89-25-m-961-sq-ft-5-min-to-beach", "lat": 15.6669, "lng": -96.52046, "aprox": false, "foto": "EB-XA6706"},
 {"id": "EB-XA5219", "zona": "zip", "lugar": "Playa Zipolite", "tipo": "Departamento", "operacion": "venta", "precio": 399000, "moneda": "USD", "rec": 2, "banos": 2, "m2": 90, "url": "/property/ocean-view-2br-condo-in-zipolite-89-m-961-sq-ft-5-min-to-beach", "lat": 15.6669, "lng": -96.52046, "aprox": false, "foto": "EB-XA5219"},
 {"id": "EB-XA2873", "zona": "hux", "lugar": "Sector M, Huatulco", "tipo": "Casa", "operacion": "venta", "precio": 9700000, "moneda": "MXN", "rec": 3, "banos": 2, "m2": 325, "url": "/property/3-bedroom-home-for-sale-in-sector-m-walk-to-chahue-beach-huatulco", "lat": 15.76596, "lng": -96.12782, "aprox": false, "foto": "EB-XA2873"},
 {"id": "EB-WY3646", "zona": "hux", "lugar": "Sector U2 Norte, Huatulco", "tipo": "Terreno", "operacion": "venta", "precio": 1300000, "moneda": "MXN", "rec": null, "banos": null, "m2": 3040, "url": "/property/3-040-m-lot-in-huatulco-with-bioclimatic-home-cabin-project", "lat": 15.7858, "lng": -96.14256, "aprox": false, "foto": "EB-WY3646"},
 {"id": "EB-WP5179", "zona": "sma", "lugar": "Corralejo de Arriba", "tipo": "Casa", "operacion": "venta", "precio": 13271360, "moneda": "MXN", "rec": 2, "banos": 2, "m2": 294, "url": "/property/signature-single-level-vineyard-home-in-san-miguel-de-allende", "lat": 20.89465, "lng": -100.65719, "aprox": false, "foto": "EB-WP5179"},
 {"id": "EB-WP5166", "zona": "sma", "lugar": "Corralejo de Arriba", "tipo": "Casa", "operacion": "venta", "precio": 12344050, "moneda": "MXN", "rec": 2, "banos": 2, "m2": 245, "url": "/property/vineyard-home-with-large-garden-in-san-miguel-de-allende", "lat": 20.89954, "lng": -100.65144, "aprox": true, "foto": "EB-WP5166"},
 {"id": "EB-WP5135", "zona": "hux", "lugar": "Playa Violín", "tipo": "Terreno", "operacion": "venta", "precio": 11000000, "moneda": "MXN", "rec": null, "banos": null, "m2": 1166.05, "url": "/property/ocean-view-lot-in-playa-violin-huatulco-1-166-m-12-550-sq-ft", "lat": 15.73979, "lng": -96.13421, "aprox": false, "foto": "EB-WP5135"},
 {"id": "EB-WP5114", "zona": "sma", "lugar": "Corralejo de Arriba", "tipo": "Casa", "operacion": "preventa", "precio": 9300000, "moneda": "MXN", "rec": 2, "banos": 3, "m2": 176, "url": "/property/single-level-vineyard-home-for-sale-in-san-miguel-de-allende-casa-chardonnay", "lat": 20.89027, "lng": -100.6593, "aprox": true, "foto": "EB-WP5114"},
 {"id": "EB-WO6953", "zona": "pe", "lugar": "La Ventanilla, Colotepec", "tipo": "Casa en condominio", "operacion": "preventa", "precio": 3400000, "moneda": "MXN", "rec": 1, "banos": 1, "m2": 78.4, "url": "/property/1-bedroom-pre-sale-villa-with-pool-in-la-ventanilla-oaxaca-78-4-m-844-sq-f", "lat": 15.81911, "lng": -97.00424, "aprox": true, "foto": "EB-WO6953"},
 {"id": "EB-WO6909", "zona": "pa", "lugar": "El Faro", "tipo": "Departamento", "operacion": "preventa", "precio": 6234600, "moneda": "MXN", "rec": 2, "banos": 1, "m2": 113, "url": "/property/two-bedroom-cliffside-residence-with-pacific-views-puerto-angel", "lat": 15.6651, "lng": -96.48821, "aprox": false, "foto": "EB-WO6909"},
 {"id": "EB-WO6872", "zona": "pa", "lugar": "Puerto Ángel", "tipo": "Departamento", "operacion": "preventa", "precio": 4066700, "moneda": "MXN", "rec": 1, "banos": 1, "m2": 76.6, "url": "/property/large-1-bedroom-cliffside-residence-in-puerto-angel", "lat": 15.66521, "lng": -96.48819, "aprox": false, "foto": "EB-WO6872"},
 {"id": "EB-WO6853", "zona": "pa", "lugar": "El Faro", "tipo": "Departamento", "operacion": "preventa", "precio": 3347850, "moneda": "MXN", "rec": 1, "banos": 1, "m2": 60.87, "url": "/property/1-bedroom-ocean-view-residence-in-puerto-angel", "lat": 15.65607, "lng": -96.50128, "aprox": true, "foto": "EB-WO6853"},
 {"id": "EB-WO0467", "zona": "sma", "lugar": "Mexiquito", "tipo": "Casa", "operacion": "venta", "precio": 7500000, "moneda": "MXN", "rec": 3, "banos": 2, "m2": 217, "url": "/property/residence-with-independent-rental-unit-in-san-miguel-de-allende-217-m", "lat": 20.92654, "lng": -100.74485, "aprox": false, "foto": "EB-WO0467"},
 {"id": "EB-WN8990", "zona": "hux", "lugar": "Sector O, Huatulco", "tipo": "Terreno", "operacion": "venta", "precio": 2500000, "moneda": "MXN", "rec": null, "banos": null, "m2": 395, "url": "/property/residential-lot-with-three-level-home-plans-in-sector-o-huatulco", "lat": 15.76846, "lng": -96.1202, "aprox": false, "foto": "EB-WN8990"},
 {"id": "EB-WI3011", "zona": "hux", "lugar": "Bahías de Huatulco", "tipo": "Departamento", "operacion": "venta", "precio": 8399000, "moneda": "MXN", "rec": 3, "banos": 3, "m2": 189, "url": "/property/marina-view-corner-residence-in-bahias-de-huatulco-3-bedrooms-3-bathrooms-wit", "lat": 15.7657, "lng": -96.12292, "aprox": false, "foto": "EB-WI3011"},
 {"id": "EB-WH6643", "zona": "zip", "lugar": "Playa Zipolite", "tipo": "Casa", "operacion": "venta", "precio": 4500000, "moneda": "MXN", "rec": 1, "banos": 2, "m2": 140, "url": "/property/newly-built-home-with-pool-solar-energy-expansion-potential-in-zipolite-oax", "lat": null, "lng": null, "aprox": false, "foto": "EB-WH6643"},
 {"id": "EB-WE9148", "zona": "hux", "lugar": "Bahías de Huatulco", "tipo": "Terreno", "operacion": "venta", "precio": 19989000, "moneda": "MXN", "rec": null, "banos": null, "m2": 1278, "url": "/property/premium-oceanfront-land-for-sale-huatulco-coast-1-278-m", "lat": 15.75111, "lng": -96.13145, "aprox": false, "foto": "EB-WE9148"},
 {"id": "EB-WE9139", "zona": "hux", "lugar": "Bahías de Huatulco", "tipo": "Terreno", "operacion": "venta", "precio": 12404000, "moneda": "MXN", "rec": null, "banos": null, "m2": 886, "url": "/property/premium-oceanfront-land-for-sale-huatulco-coast-886-m", "lat": 15.74257, "lng": -96.1257, "aprox": false, "foto": "EB-WE9139"},
 {"id": "EB-VV4084", "zona": "hux", "lugar": "Bahías de Huatulco", "tipo": "Departamento", "operacion": "venta", "precio": 4974550, "moneda": "MXN", "rec": 1, "banos": 1, "m2": 85, "url": "/property/beachfront-condo-for-sale-in-huatulco-mexico-1-bedroom-oceanview-residence-in", "lat": 15.75553, "lng": -96.12998, "aprox": false, "foto": "EB-VV4084"},
 {"id": "EB-VN2207", "zona": "pa", "lugar": "El Faro", "tipo": "Terreno", "operacion": "venta", "precio": 5000000, "moneda": "MXN", "rec": null, "banos": null, "m2": 300, "url": "/property/oceanfront-development-lot-with-architectural-project-el-faro-puerto-angel-el-faro", "lat": 15.65815, "lng": -96.50013, "aprox": false, "foto": "EB-VN2207"},
 {"id": "EB-VN2082", "zona": "pa", "lugar": "El Faro", "tipo": "Casa", "operacion": "venta", "precio": 8000000, "moneda": "MXN", "rec": 1, "banos": 2, "m2": 235, "url": "/property/oceanfront-home-with-private-pool-for-sale-el-faro-puerto-angel-oaxaca", "lat": 15.65883, "lng": -96.49983, "aprox": false, "foto": "EB-VN2082"},
 {"id": "EB-VL2330", "zona": "maz", "lugar": "Playa Mermejita", "tipo": "Terreno", "operacion": "venta", "precio": 6000000, "moneda": "MXN", "rec": null, "banos": null, "m2": 1000, "url": "/property/beach-adjacent-lot-in-playa-mermejita-mazunte", "lat": 15.66274, "lng": -96.56, "aprox": false, "foto": "EB-VL2330"},
 {"id": "EB-VL1178", "zona": "pa", "lugar": "Playa del Panteón", "tipo": "Terreno", "operacion": "venta", "precio": 13000000, "moneda": "MXN", "rec": null, "banos": null, "m2": 828, "url": "/property/beachfront-lot-playa-panteon-puerto-angel-828-m-8-913-sq-ft-10-m", "lat": 15.66475, "lng": -96.49579, "aprox": false, "foto": "EB-VL1178"},
 {"id": "EB-VK9221", "zona": "pa", "lugar": "El Faro", "tipo": "Casa", "operacion": "venta", "precio": 980000, "moneda": "USD", "rec": 4, "banos": 3, "m2": 750, "url": "/property/oceanfront-villa-in-puerto-angel-2-746-m-land-29-557-sq-ft", "lat": 15.65861, "lng": -96.50117, "aprox": false, "foto": "EB-VK9221"},
 {"id": "EB-VD8931", "zona": "zip", "lugar": "Arroyo Tres", "tipo": "Terreno", "operacion": "venta", "precio": 1400000, "moneda": "MXN", "rec": null, "banos": null, "m2": 3000, "url": "/property/terreno-de-3-000-m-en-arroyo-tres-zipolite-vista-lejana-al-mar", "lat": 15.67122, "lng": -96.52391, "aprox": true, "foto": "EB-VD8931"},
 {"id": "EB-UY7398", "zona": "maz", "lugar": "Playa Mermejita", "tipo": "Terreno", "operacion": "venta", "precio": 4200000, "moneda": "MXN", "rec": null, "banos": null, "m2": 1195, "url": "/property/terreno-con-vista-al-mar-playa-mermejita-1-195-79-m-en-entorno-natural", "lat": 15.66565, "lng": -96.56533, "aprox": false, "foto": "EB-UY7398"},
 {"id": "EB-UX7049", "zona": "otros", "lugar": "Playa del Carmen", "tipo": "Hostal en operación", "operacion": "venta", "precio": 8500000, "moneda": "MXN", "rec": null, "banos": null, "m2": 613, "url": "/property/hostal-en-venta-negocio-turistico-listo-para-operar-con-alto-rendimiento", "lat": 20.6314, "lng": -87.09453, "aprox": false, "foto": "EB-UX7049"},
 {"id": "EB-UO9634", "zona": "hux", "lugar": "Bahías de Huatulco", "tipo": "Local comercial", "operacion": "preventa", "precio": 4700000, "moneda": "MXN", "rec": null, "banos": 1, "m2": 83, "url": "/property/local-comercial-en-venta-frente-a-la-marina-esquina-principal-en-bahias-de-hua", "lat": 15.76563, "lng": -96.12287, "aprox": false, "foto": "EB-UO9634"},
 {"id": "EB-UO6466", "zona": "hux", "lugar": "Santa Cruz, Huatulco", "tipo": "Departamento", "operacion": "preventa", "precio": 19900000, "moneda": "MXN", "rec": 3, "banos": 3, "m2": 240, "url": "/property/award-winning-oceanfront-residence-in-huatulco-3-bedroom-condo-with-wellness-c", "lat": 15.73682, "lng": -96.13901, "aprox": false, "foto": "EB-UO6466"},
 {"id": "EB-UO6431", "zona": "maz", "lugar": "Mazunte", "tipo": "Terreno", "operacion": "venta", "precio": 3000000, "moneda": "MXN", "rec": null, "banos": null, "m2": 15000, "url": "/property/macrolotes-en-mazunte-desde-6-000-m-hasta-15-000-m", "lat": 15.67029, "lng": -96.55477, "aprox": false, "foto": "EB-UO6431"},
 {"id": "EB-UO0256", "zona": "maz", "lugar": "Playa Mermejita", "tipo": "Terreno", "operacion": "venta", "precio": 8000000, "moneda": "MXN", "rec": null, "banos": null, "m2": 1880, "url": "/property/terreno-con-vista-al-mar-en-mermejita-mazunte-1-880-m-cerca-de-la-playa", "lat": 15.66382, "lng": -96.5643, "aprox": false, "foto": "EB-UO0256"},
 {"id": "EB-UK8666", "zona": "maz", "lugar": "Playa Mermejita", "tipo": "Terreno", "operacion": "venta", "precio": 13500000, "moneda": "MXN", "rec": null, "banos": null, "m2": 2000, "url": "/property/terreno-frente-al-mar-en-playa-mermejita-mazunte-2-000-m", "lat": 15.66466, "lng": -96.55962, "aprox": true, "foto": "EB-UK8666"},
 {"id": "EB-TX3640", "zona": "hux", "lugar": "Chahué, Huatulco", "tipo": "Departamento", "operacion": "venta", "precio": 6299000, "moneda": "MXN", "rec": 2, "banos": 2, "m2": 114.24, "url": "/property/departamentos-frente-a-la-marina-en-huatulco-2-7-m-de-altura-amenidades", "lat": 15.76747, "lng": -96.11988, "aprox": false, "foto": "EB-TX3640"},
 {"id": "EB-TV5789", "zona": "maz", "lugar": "Mazunte", "tipo": "Hotel boutique", "operacion": "venta", "precio": 3900000, "moneda": "USD", "rec": 8, "banos": 10, "m2": 8000, "url": "/property/hotel-boutique-curado-en-mazunte-retiro-de-lujo-con-casitas-con-vista-al-mar", "lat": 15.66573, "lng": -96.55652, "aprox": true, "foto": "EB-TV5789"},
 {"id": "EB-TV5750", "zona": "maz", "lugar": "Mazunte", "tipo": "Hotel boutique", "operacion": "venta", "precio": 9900000, "moneda": "MXN", "rec": 3, "banos": 4, "m2": 300, "url": "/property/hotel-boutique-en-venta-900-m-terreno-con-3-unidades-alberca-y-proyecto-de-e", "lat": 15.66542, "lng": -96.55667, "aprox": false, "foto": "EB-TV5750"},
 {"id": "EB-TU7154", "zona": "maz", "lugar": "Mazunte", "tipo": "Casa", "operacion": "venta", "precio": 4880000, "moneda": "MXN", "rec": 2, "banos": 1, "m2": 480, "url": "/property/casa-en-construccion-con-vista-al-mar-en-mazunte-480-m-terreno-5-167-sq-ft", "lat": 15.66542, "lng": -96.55667, "aprox": false, "foto": "EB-TU7154"},
 {"id": "EB-TU7104", "zona": "maz", "lugar": "Mazunte", "tipo": "Terreno", "operacion": "venta", "precio": 1650000, "moneda": "MXN", "rec": null, "banos": null, "m2": 310, "url": "/property/terreno-bien-ubicado-en-mazunte-310-m-3-336-sq-ft-a-2-minutos-del-centro-de", "lat": 15.66832, "lng": -96.55967, "aprox": false, "foto": "EB-TU7104"},
 {"id": "EB-TU7064", "zona": "pe", "lugar": "Las Tres Palmas", "tipo": "Departamento", "operacion": "venta", "precio": 450000, "moneda": "USD", "rec": 3, "banos": 3, "m2": 148.9, "url": "/property/condominio-frente-al-mar-en-la-costa-de-puerto-escondido-148-9-m-1-602-sq-f", "lat": 15.91606, "lng": -97.18461, "aprox": false, "foto": "EB-TU7064"},
 {"id": "EB-TI7513", "zona": "maz", "lugar": "Mazunte", "tipo": "Casa", "operacion": "venta", "precio": 1467000, "moneda": "USD", "rec": 4, "banos": 2, "m2": 40000, "url": "/property/ocean-view-4-hectare-property-in-mazunte-two-homes-pool-and-rainwater-lake", "lat": 15.66876, "lng": -96.55703, "aprox": true, "foto": "EB-TI7513"},
 {"id": "EB-TB7547", "zona": "zip", "lugar": "Playa Zipolite", "tipo": "Terreno", "operacion": "venta", "precio": 336789, "moneda": "USD", "rec": null, "banos": null, "m2": 1500, "url": "/property/exclusivo-terreno-con-vista-al-mar-en-zipolite-1-500-m-a-8-minutos-de-la-play", "lat": 15.66583, "lng": -96.51535, "aprox": false, "foto": "EB-TB7547"},
 {"id": "EB-TB7446", "zona": "maz", "lugar": "Playa Mermejita", "tipo": "Terreno", "operacion": "venta", "precio": 145370, "moneda": "USD", "rec": null, "banos": null, "m2": 1500, "url": "/property/terreno-en-altos-de-mermejita-650-m-con-vista-lejana-al-mar-y-acceso-desde-ca", "lat": 15.67008, "lng": -96.56255, "aprox": false, "foto": null},
 {"id": "EB-SX2768", "zona": "zip", "lugar": "Playa Zipolite", "tipo": "Terreno", "operacion": "venta", "precio": 150000, "moneda": "USD", "rec": null, "banos": null, "m2": 1225, "url": "/property/ocean-view-lot-for-sale-in-zipolite-1-225-m-13-186-sq-ft-with-hotel-projec", "lat": 15.66312, "lng": -96.50208, "aprox": false, "foto": "EB-SX2768"},
 {"id": "EB-SX2694", "zona": "pe", "lugar": "Bacocho", "tipo": "Terreno", "operacion": "venta", "precio": 3695000, "moneda": "MXN", "rec": null, "banos": null, "m2": 312, "url": "/property/exclusive-lot-in-bacocho-312-m-ready-to-build-in-one-of-puerto-escondido-s-mo", "lat": 15.8654, "lng": -97.07882, "aprox": false, "foto": "EB-SX2694"},
 {"id": "EB-SV1183", "zona": "maz", "lugar": "Mazunte", "tipo": "Casa", "operacion": "venta", "precio": 7000000, "moneda": "MXN", "rec": 3, "banos": 3, "m2": 790, "url": "/property/casa-en-construccion-con-diseno-excepcional-jungla-vista-al-mar-mazunte", "lat": 15.66931, "lng": -96.55951, "aprox": false, "foto": "EB-SV1183"}];
