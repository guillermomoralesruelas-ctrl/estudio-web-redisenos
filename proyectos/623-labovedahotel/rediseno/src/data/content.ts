// Contenido de La Bóveda Hotel, tomado de investigacion/crudo.json (inicio, habitaciones, salón, historia; 2026-09-26).
// Nada inventado. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'La Bóveda Hotel Boutique',
  direccion: 'Calle Victoria 26, Centro',
  cp: '99900 Nochistlán, Zacatecas',
  telefono: '344 103 6144',
  telefonoHref: 'tel:+523441036144',
  whatsapp: '523441036144',
  email: 'info@labovedahotel.com',
  maps: 'https://maps.google.com/maps?q=Victoria%2026%2C%20Centro%2C%2099900%20Nochistl%C3%A1n%20de%20Mej%C3%ADa%2C%20Zacatecas%2C%20Mexico',
  // Su sitio ya muestra este mapa de Google en un iframe; se conserva.
  mapaEmbed: 'https://maps.google.com/maps?q=Victoria%2026%2C%20Centro%2C%2099900%20Nochistl%C3%A1n%20de%20Mej%C3%ADa%2C%20Zacatecas%2C%20Mexico&t=m&z=16&output=embed',
  facebook: 'https://m.facebook.com/people/La-B%C3%B3veda-Hotel-Boutique/100070110456548/',
  tiktok: 'https://www.tiktok.com/@labovedahotel',
};

// Su sitio publica el mismo número como "Teléfono / WhatsApp".
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const resenas = [
  { texto: 'Muy bonito, cómodo, céntrico, y muy buena atención.', autor: 'A. Legaspi' },
  { texto: 'La construcción es inmejorable… La atención es superior.', autor: 'O. Enriquez' },
];

export const horarios = { llegada: '3:00 PM', salida: '12:00 PM' };

export const incluye = ['Colchón con pillow top', 'Artículos de tocador premium', 'Toallas de baño de lujo', 'Desayuno de cortesía', 'Televisor de pantalla plana', 'Servicio de limpieza diario', 'Wifi', 'Estacionamiento seguro'];

export type Suite = { id: string; nombre: string; camas: string; precio: number; planta: 'alta' | 'baja'; vista: string; texto: string };
export const suites: Suite[] = [
  { id: 'nochistlan', nombre: 'Nochistlán', camas: '2 camas queen', precio: 2500, planta: 'alta', vista: 'Jardín y balcón',
    texto: 'Dos cómodas camas queen con colchones pillow top. Baño privado con regadera tipo lluvia y muebles hechos por carpinteros nochistlenses. Vista al jardín y acceso al balcón.' },
  { id: 'arte', nombre: 'Arte', camas: '1 cama king', precio: 2000, planta: 'alta', vista: 'Jardín y balcón',
    texto: 'Lujosa cama king size con colchón pillow top, rodeada de muebles artesanales. Regadera tipo lluvia y acceso directo al balcón con vista al jardín.' },
  { id: 'alegre', nombre: 'Alegre', camas: '1 cama king', precio: 2000, planta: 'alta', vista: 'Terraza con vista a la ciudad y al Tuiche',
    texto: "Cama king size con colchón pillow top, sala con la icónica silla de cuero 'Miguelito', vestidor y terraza con vista a la ciudad y el Tuiche. Baño privado con regadera tipo lluvia." },
  { id: 'caxcan', nombre: 'Caxcan', camas: '1 cama queen', precio: 1600, planta: 'baja', vista: 'Ventanales a la Calle Victoria',
    texto: 'Amplia habitación en planta baja con cama queen pillow top y baño completo con regadera tipo lluvia. Grandes ventanas con vista a la Calle Victoria.' },
  { id: 'arcos', nombre: 'Arcos', camas: '1 cama queen', precio: 1600, planta: 'baja', vista: 'Calle Victoria',
    texto: 'Amplia habitación en planta baja que deja ver los muros históricos del edificio original. Cama queen pillow top, armario empotrado y regadera tipo lluvia.' },
];

export const historia = [
  { año: '1532', titulo: 'La primera Guadalajara', texto: 'Nochistlán se funda con el nombre de "Guadalajara".' },
  { año: '1793', titulo: 'El acueducto', texto: 'Se termina el Acueducto Los Arcos, uno de los símbolos del pueblo.' },
  { año: '1810', titulo: 'El primer grito de Zacatecas', texto: 'En la Casa de los Ruiz se da el primer grito de independencia en Zacatecas.' },
  { año: 'Siglo XIX', titulo: 'La mansión y su bóveda', texto: 'Se construye la casona, que también guardaba granos, frijol y otros productos esenciales para el pueblo y la exportación.' },
  { año: '1866', titulo: 'El Parián', texto: 'Se construye el corazón comercial del pueblo, con columnas de cantera y arcos.' },
  { año: '1913', titulo: 'La defensa', texto: 'Entre 80 y 90 nochistlenses defienden el pueblo frente a unos 500 hombres bajo las órdenes de Pancho Villa. Nochistlán nunca fue ocupado ni sufrió hambruna durante la Revolución.' },
  { año: 'Hoy', titulo: 'La Bóveda Hotel', texto: 'Después de servir como bóveda y luego como hogar, el edificio se renueva como hotel boutique y espacio para eventos.' },
];

export const historiaLarga = 'La Bóveda Hotel, con una historia tan rica como sus muros, es un reflejo de la resistencia y la elegancia que han definido a Nochistlán a lo largo de los años.';

// Fiestas de Nochistlán según su página de historia. mes: 0 = enero.
export type Fiesta = { id: string; nombre: string; mes: number; cuando: string; texto: string; ultimoFinDeSemana?: boolean };
export const fiestas: Fiesta[] = [
  { id: 'sebastian', nombre: 'Fiesta de San Sebastián', mes: 0, cuando: 'Enero', texto: 'Las "empinoladas" en honor a San Sebastián llenan las calles de música, baile y coloridas procesiones.' },
  { id: 'hijo', nombre: 'El Hijo Ausente', mes: 6, cuando: 'Último fin de semana de julio', ultimoFinDeSemana: true, texto: 'El pueblo recibe a sus "hijos ausentes" que viven en el extranjero con juegos, desfiles, bandas, charreadas y fiestas.' },
  { id: 'feria', nombre: 'Feria de Octubre', mes: 9, cuando: 'Todo octubre', texto: 'Un mes de corridas de toros, charreadas, danzas folclóricas y un animado desfile que atrae a toda la región.' },
  { id: 'francisco', nombre: 'Fiestas de San Francisco de Asís', mes: 9, cuando: 'Octubre', texto: 'Las festividades del santo patrono llenan de vida el pueblo.' },
];

export const lugares = [
  { nombre: 'Templo de San Francisco de Asís', texto: 'Templo del siglo XVII dedicado al santo patrono.' },
  { nombre: 'El Parián', texto: 'Corazón comercial de Nochistlán (1866), con columnas de cantera y arcos.' },
  { nombre: 'Acueducto Los Arcos', texto: 'Obra colonial terminada en 1793, con sus arcos de piedra.' },
  { nombre: 'Jardín Morelos', texto: 'La plaza principal, con su kiosco y edificios históricos.' },
  { nombre: 'Templo de San Sebastián', texto: 'Templo del siglo XVII, famoso por las "empinoladas" de enero.' },
  { nombre: 'Casa de los Ruiz', texto: 'Donde se dio el primer grito de independencia en Zacatecas, en 1810.' },
  { nombre: 'Cerro del Tuiche', texto: 'Sagrado para la cultura caxcana, con vestigios de cerámica del 300 al 900 d. C. y vistas panorámicas.' },
];
