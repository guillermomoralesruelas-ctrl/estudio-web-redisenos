// Contenido de Flamboyan Hotel & Residences, tomado de investigacion/crudo.json: inicio (en español, /es/),
// ubicación, galería y apartamentos (en inglés). Nada inventado. Las descripciones de los apartamentos son un
// resumen en español de sus textos; los nombres de los apartamentos se dejan como los escribe el hotel.
// Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Flamboyan Hotel & Residences',
  lema: 'Una puerta al arte, el lujo y la relajación',
  direccion: 'Avenida Centenario 1718, Centro',
  cp: '23400 San José del Cabo, B.C.S., México',
  telefono: '+52 624 142 3305',
  telefonoHref: 'tel:+526241423305',
  centralMex: '+52 55 4741 1285',
  centralMexHref: 'tel:+525547411285',
  centralUsa: '+1 442 249 0547',
  centralUsaHref: 'tel:+14422490547',
  email: 'reservations@flamboyan.com.mx',
  maps: 'https://maps.app.goo.gl/W4uVuCbnMLshridE6',
  lat: 23.0632485,
  lng: -109.6939836,
  sitio: 'https://www.flamboyan.com.mx/es/',
  apartamentos: 'https://www.flamboyan.com.mx/es/apartamentos/',
  facebook: 'https://www.facebook.com/people/Flamboyan-Art-District/61550487158790/',
  instagram: 'https://www.instagram.com/flamboyan_artdistrict/',
  mesa: 'https://www.opentable.com.mx/r/salon-nocion-reservations-san-jose-del-cabo?restref=1415911&lang=es-MX&ot_source=Restaurant%20website',
};

// No publica WhatsApp: la acción principal es escribir a reservaciones con el correo ya armado.
export const correo = (asunto: string, cuerpo: string) =>
  `mailto:${negocio.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
export const correoGeneral = correo('Reservación en Flamboyan', 'Hola, quisiera reservar en Flamboyan Hotel & Residences.\n\nFechas de llegada y salida:\nPersonas:\n');

export const descuento = 'Obtén un 10% de descuento exclusivo al realizar tu reserva en su página web.';

export type Exterior = 'balcon' | 'patio' | 'terraza' | 'vista' | null;
export type Apto = {
  id: string;
  nombre: string;
  personas: number;
  m2: number;
  recamaras: 1 | 2;
  exterior: Exterior;
  cocina: 'cocineta' | 'completa';
  camas: string;
  extra: string;
  desde: number;
  url: string;
};

// Sus 14 tipos de apartamento ("Accommodation"): máximo de personas, m², camas y precio "desde" por noche en MXN,
// tal como aparecían en su sitio el 2026-09-26 (sin impuestos).
const A = 'https://www.flamboyan.com.mx/apartments/';
export const apartamentos: Apto[] = [
  { id: 'bynYdF', nombre: 'Classic Studio King', personas: 3, m2: 29, recamaras: 1, exterior: null, cocina: 'cocineta', camas: 'Cama king y cama abatible (Murphy)', extra: 'Cocineta y comedor', desde: 1734, url: `${A}classic-studio-king-65830/` },
  { id: 'PPTONA', nombre: 'Classic Studio Double', personas: 4, m2: 29, recamaras: 1, exterior: null, cocina: 'cocineta', camas: 'Dos camas matrimoniales', extra: 'Cocineta y comedor', desde: 1890, url: `${A}classic-studio-double-101138/` },
  { id: '811SKT', nombre: 'Balcony Studio King', personas: 3, m2: 33, recamaras: 1, exterior: 'balcon', cocina: 'cocineta', camas: 'Cama king y sofá', extra: 'Balcón privado amueblado', desde: 2023, url: `${A}balcony-studio-king-65831/` },
  { id: 'i0VGWN', nombre: 'Balcony Studio Double', personas: 4, m2: 33, recamaras: 1, exterior: 'balcon', cocina: 'cocineta', camas: 'Dos camas matrimoniales', extra: 'Balcón privado amueblado', desde: 2135, url: `${A}balcony-studio-double-101140/` },
  { id: 'Qd0iWe', nombre: 'Patio Studio King', personas: 3, m2: 33, recamaras: 1, exterior: 'patio', cocina: 'cocineta', camas: 'Cama king y sofá', extra: 'Patio privado', desde: 2135, url: `${A}patio-studio-king-101141/` },
  { id: '5zySYS', nombre: 'Patio Studio Double', personas: 3, m2: 33, recamaras: 1, exterior: 'patio', cocina: 'cocineta', camas: 'Dos camas matrimoniales', extra: 'Patio privado', desde: 2223, url: `${A}patio-studio-double-101142/` },
  { id: 'yL6ybJ', nombre: 'Balcony Residence', personas: 4, m2: 41, recamaras: 1, exterior: 'balcon', cocina: 'completa', camas: 'Cama abatible (Murphy)', extra: 'Balcón privado; cocina con lavadora, secadora y lavavajillas', desde: 2335, url: `${A}balcony-residence-65832/` },
  { id: '3fFPne', nombre: 'Patio Residence', personas: 2, m2: 41, recamaras: 1, exterior: 'patio', cocina: 'completa', camas: 'Cama abatible (Murphy)', extra: 'Patio privado; cocina con lavadora, secadora y lavavajillas', desde: 2335, url: `${A}patio-residence-101144/` },
  { id: 'FXg0dg', nombre: 'Corner Residence', personas: 3, m2: 57, recamaras: 1, exterior: 'vista', cocina: 'completa', camas: 'Cama king, cama abatible y sofá cama', extra: 'Vista al Art District; lavavajillas', desde: 2668, url: `${A}corner-residence-101145/` },
  { id: 'SDevKE', nombre: 'Terrace Residence', personas: 4, m2: 72, recamaras: 1, exterior: 'terraza', cocina: 'completa', camas: 'Cama king y cama abatible', extra: 'Gran terraza privada con vista al Estero de San José y vestidor', desde: 2779, url: `${A}terrace-residence-101146/` },
  { id: 'I6vdLr', nombre: 'Signature Residence', personas: 4, m2: 102, recamaras: 1, exterior: 'balcon', cocina: 'completa', camas: 'Cama king y cama abatible', extra: 'Balcón con vista amplia al Estero de San José', desde: 2913, url: `${A}signature-residence-101147/` },
  { id: 'XMlDAu', nombre: 'Balcony Two Bedroom Residence', personas: 7, m2: 108, recamaras: 2, exterior: 'balcon', cocina: 'completa', camas: 'Cama king, dos matrimoniales y cama abatible', extra: 'Balcón privado amueblado', desde: 3669, url: `${A}balcony-two-bedroom-residence-65833/` },
  { id: 'VGH9RF', nombre: 'Patio Two Bedroom Residence', personas: 7, m2: 108, recamaras: 2, exterior: 'patio', cocina: 'completa', camas: 'Cama king, dos matrimoniales y cama abatible', extra: 'Patio privado', desde: 3780, url: `${A}patio-two-bedroom-residence-101149/` },
  { id: 'GdYqN0', nombre: 'Signature Two Bedroom Residence', personas: 8, m2: 102, recamaras: 2, exterior: 'balcon', cocina: 'completa', camas: 'Cama king, dos matrimoniales y cama abatible', extra: 'Balcón con vista panorámica al Estero de San José', desde: 4113, url: `${A}signature-two-bedroom-residence-65834/` },
];

// Lo que traen todos (su lista "Habitaciones y Residencias" y el texto común de cada apartamento)
export const incluye = [
  'Wi-Fi gratis', 'Smart TV', 'Aire acondicionado y ventilador de techo', 'Refrigerador completo con minibar (con costo)',
  'Caja fuerte gratis', 'Regadera walk-in', 'Batas y amenidades de baño', 'Agua purificada', 'Guarda equipaje 24 h', 'Arte curado en cada cuarto',
];

export const servicios = [
  { nombre: 'Rooftop con alberca', texto: 'Un lugar ideal para tomar el sol, disfrutar de los amaneceres y atardeceres, y de las vistas de San José del Cabo.', etiqueta: 'En el hotel' },
  { nombre: 'Veleros Beach Club', texto: 'Beneficios exclusivos para huéspedes con este club de playa, socio comercial del hotel.', etiqueta: 'Colaboración · 3 km' },
  { nombre: 'Flower Shop Flor de Mar', texto: 'Detalles y arreglos para que las ocasiones especiales de los huéspedes sean aún más memorables.', etiqueta: 'En el hotel' },
  { nombre: 'Gypsy Soul House Spa', texto: 'Una experiencia completa de bienestar y belleza en un santuario moderno.', etiqueta: 'Colaboración · 210 m' },
  { nombre: 'Transfer', texto: 'Transporte aeropuerto–hotel y hotel–aeropuerto a pedido al reservar, y servicio privado para moverte por el destino.', etiqueta: 'A pedido' },
  { nombre: 'Actividades', texto: 'Yoga, tours, noches de película, golf, pesca y buggy, con el hotel y sus socios comerciales.', etiqueta: 'Con socios' },
];

// Sus "Places of interest" con la distancia que da su página de ubicación.
export const cerca = [
  { lugar: 'Gypsy Soul House Spa', km: 0.21 },
  { lugar: 'Plaza Mijares', km: 0.35 },
  { lugar: 'Walmart', km: 2 },
  { lugar: 'Acceso público a la playa', km: 2.5 },
  { lugar: 'Marina Puerto Los Cabos', km: 2.6 },
  { lugar: 'Veleros Beach Club', km: 3 },
  { lugar: 'La Comer', km: 3.4 },
  { lugar: 'Aeropuerto Internacional de Los Cabos', km: 13.1 },
];

// Art Walk: "todos los jueves de noviembre a junio, de 5:00 p. m. a 9:00 p. m."; el hotel está a una cuadra.
export const artWalk = { dia: 4, meses: [10, 11, 0, 1, 2, 3, 4, 5], desde: '5:00 p. m.', hasta: '9:00 p. m.', galerias: 15, visitantes: '2,000' };

export const resenas = [
  { autor: 'Edgar V', fuente: 'Tripadvisor', texto: 'Muy recomendable, limpieza al 100%, alberca en el techo de cristal muy bonita y agradable, muy linda vista, excelente atención de Gloria en recepción, ubicación única caminando al centro de San José… playa a 10 minutos.' },
  { autor: 'Valerie M', fuente: 'Tripadvisor', texto: 'Elegante, impecable y con un servicio excelente. La ubicación es perfecta, justo al lado del centro histórico. Todas las noches íbamos caminando a cenar. El personal del hotel es muy amable y servicial; nos prestaron sillas de playa, sombrillas y toallas.' },
];
