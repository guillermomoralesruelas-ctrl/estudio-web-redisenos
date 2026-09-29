// Contenido de Clandestino Hotel (San Miguel de Allende). Todo sale de investigacion/crudo.json (inicio, hoteles,
// Hotel Recreo, Hotel Pila Seca y experiencias, captura del 2026-09-26). No se inventan datos: lo que falta va como [PENDIENTE].

export type CasaId = 'recreo' | 'pila';

export const negocio = {
  nombre: 'Clandestino Hotel',
  desde: 2019,
  ciudad: 'San Miguel de Allende, Guanajuato',
  correo: 'reservaciones@clandestinohotel.com',
  instagram: 'https://www.instagram.com/clandestinohotel',
  facebook: 'https://www.facebook.com/clandestinohotel',
  checkIn: '15:00',
  checkOut: '12:00',
  incluye: ['Impuestos', 'Desayuno', 'Estacionamiento (valet parking)'],
};

export const casas: Record<CasaId, {
  nombre: string; corto: string; direccion: string; ubicacion: string; suites: number; para: string;
  texto: string; puntos: string[]; tel: string; telVisible: string; whatsapp: string; whatsappVisible: string;
  foto: string; fotoAlt: string; foto2: string; foto2Alt: string;
}> = {
  recreo: {
    nombre: 'Hotel Recreo', corto: 'Recreo', direccion: 'Recreo #31, Col. Centro', ubicacion: 'A una cuadra del Jardín Principal', suites: 8,
    para: 'Para vivir la ciudad',
    texto: 'La antigua casona y su anexo, protegidos por el INAH y con más de cien años. Sales por la puerta y en cuatro minutos estás frente a la Parroquia; vuelves, subes al rooftop y ves caer el sol sobre las cúpulas.',
    puntos: ['8 suites de autor', 'Rooftop con vista a la Parroquia', 'Casona protegida por el INAH', 'Ideal para parejas y escapadas románticas'],
    tel: '+524156881272', telVisible: '+52 415 688 1272', whatsapp: '524151245141', whatsappVisible: '+52 415 124 5141',
    foto: 'recreo-rooftop.webp', fotoAlt: 'Rooftop de Hotel Recreo al atardecer con la Parroquia de San Miguel al fondo',
    foto2: 'recreo-calle.webp', foto2Alt: 'Fachadas de colores en la calle Recreo, San Miguel de Allende',
  },
  pila: {
    nombre: 'Hotel Pila Seca', corto: 'Pila Seca', direccion: 'Pila Seca #2, Col. Centro', ubicacion: 'A tres cuadras del Jardín Principal', suites: 13,
    para: 'Para descansar de verdad',
    texto: 'La casa más tranquila: patios, rincones para leer, arte en todos los muros y tinas para tardes largas. Dentro conviven el Spa y el restaurante Florios, y el centro queda a tres cuadras.',
    puntos: ['13 suites amplias', 'Patios y ambiente colonial', 'Spa y restaurante Florios en la casa', 'Más tranquilo y silencioso'],
    tel: '+524156883717', telVisible: '+52 415 688 3717', whatsapp: '524151177901', whatsappVisible: '+52 415 117 7901',
    foto: 'pila-patio.webp', fotoAlt: 'Patio de Hotel Pila Seca con sala, muro de cantera y arte colgado',
    foto2: 'pila-arcos.webp', foto2Alt: 'Arcos encalados y puerta de madera en Hotel Pila Seca',
  },
};

// Tarifas por noche en MXN, de su tabla "Tarifas por noche". Entre semana: domingo a jueves. Fin de semana: viernes y sábado.
// Cuando una suite cambia de una casa a otra, el dato va como { recreo, pila } ('' = no aplica en esa casa).
export type PorCasa = string | Record<CasaId, string>;
export const enCasa = (v: PorCasa, casa: CasaId) => (typeof v === 'string' ? v : v[casa]);

export type Suite = {
  id: string; nombre: string; casas: CasaId[]; etiqueta: string; personas: string; cama: PorCasa; bano: PorCasa;
  extras: PorCasa[]; texto: PorCasa; semana: number; finde: number;
  // Suite Doble: la tarifa cambia según el número de huéspedes.
  porPersonas?: Record<2 | 3 | 4, { semana: number; finde: number }>;
};

export const suites: Suite[] = [
  { id: 'chica', nombre: 'Suite Chica', casas: ['recreo', 'pila'], etiqueta: 'Esencial', personas: 'Hasta 2 personas', cama: { recreo: 'Cama Queen', pila: 'Cama King' }, bano: 'Ducha', extras: [{ recreo: 'Amenidades de baño', pila: '' }],
    texto: { recreo: 'Íntima y acogedora: la opción ligera para vivir la calle y volver solo a dormir.', pila: 'La entrada a Pila Seca: sencilla, bien puesta y con todo el silencio de la casa.' }, semana: 1996, finde: 2696 },
  { id: 'mediana', nombre: 'Suite Mediana', casas: ['recreo', 'pila'], etiqueta: 'Colonial', personas: 'Hasta 2 personas', cama: 'Cama King', bano: 'Ducha', extras: [{ recreo: 'Sala de estar', pila: '' }],
    texto: { recreo: 'Cama King y una sala de estar para leer o servir una copa, a un paso del Jardín Principal.', pila: 'Cama King con el ambiente colonial de Pila Seca y sus patios a la vuelta.' }, semana: 2296, finde: 2996 },
  { id: 'grande', nombre: 'Suite Grande', casas: ['recreo', 'pila'], etiqueta: 'Amplia', personas: 'Hasta 2 personas', cama: 'Cama King', bano: { recreo: 'Ducha y tina', pila: 'Ducha' }, extras: [{ recreo: 'Sala de estar', pila: '' }, { recreo: 'Sales de baño y bomba efervescente', pila: '' }],
    texto: { recreo: 'Amplia y luminosa, con sala de estar propia: el espacio para quedarse.', pila: 'Espacio y calma en la casa más silenciosa del centro.' }, semana: 2566, finde: 3296 },
  { id: 'balcon', nombre: 'Suite Grande con Balcón', casas: ['recreo', 'pila'], etiqueta: 'La más pedida', personas: 'Hasta 2 personas', cama: 'Cama King', bano: 'Ducha y tina', extras: [{ recreo: 'Balcón privado', pila: 'Terraza propia sobre los patios' }, 'Sales de baño y bomba efervescente'],
    texto: { recreo: 'La más pedida de Recreo: cama King, tina y un balcón privado para ver despertar el centro.', pila: 'Cama King, tina y una terraza propia sobre los patios para las tardes largas.' }, semana: 2896, finde: 3596 },
  { id: 'doble', nombre: 'Suite Doble', casas: ['pila'], etiqueta: 'Solo 2 disponibles', personas: 'Hasta 4 personas', cama: 'Dos camas Queen', bano: 'Ducha', extras: ['Amenidades de baño', 'Solo 2 suites de esta categoría'],
    texto: 'La única con dos camas Queen: espacio real para cuatro personas.', semana: 2666, finde: 3366,
    porPersonas: { 2: { semana: 2666, finde: 3366 }, 3: { semana: 3166, finde: 3866 }, 4: { semana: 3666, finde: 4366 } } },
  { id: 'clandestino', nombre: 'Suite Clandestino', casas: ['pila'], etiqueta: 'La joya', personas: 'Hasta 2 personas', cama: 'Cama King', bano: 'Ducha y tina', extras: ['Terraza privada', 'Chimenea interior', 'Sales de baño y bomba efervescente'],
    texto: 'La joya de Pila Seca, con chimenea para las noches frescas de San Miguel.', semana: 3966, finde: 4666 },
];

// Domingo a jueves: entre semana. Viernes y sábado: fin de semana (la noche que empieza ese día).
export const noches = [
  { corto: 'Dom', largo: 'domingo', finde: false }, { corto: 'Lun', largo: 'lunes', finde: false },
  { corto: 'Mar', largo: 'martes', finde: false }, { corto: 'Mié', largo: 'miércoles', finde: false },
  { corto: 'Jue', largo: 'jueves', finde: false }, { corto: 'Vie', largo: 'viernes', finde: true },
  { corto: 'Sáb', largo: 'sábado', finde: true },
];

export const pilaAdentro = [
  { nombre: 'El Spa de la casa', texto: 'Un espacio pequeño y silencioso para cerrar el día sin volver a pisar la calle, en cabina o en tu propia suite. Cita previa, sujeto a disponibilidad.',
    lista: ['Masaje relajante y descontracturante', 'Ritual de piedras calientes', 'Faciales con productos locales', 'Masaje en pareja'] },
  { nombre: 'Florios', texto: 'El restaurante de la casa, abierto también a quien no se hospeda. Aquí desayunas (va incluido en tu tarifa), comes y cenas entre los patios.',
    lista: ['Comida italo-argentina', 'Vinos del Bajío y coctelería', 'Abierto al público', 'Recomendable reservar en fin de semana'] },
];

export const experiencias = [
  { nombre: 'Escapadas románticas', texto: 'Suites con tina para dos, cena en el centro y regreso caminando bajo faroles.' },
  { nombre: 'Luna de miel y aniversarios', texto: 'Decoración especial, rooftop al atardecer y recomendaciones a la medida.' },
  { nombre: 'Turismo gastronómico', texto: 'Mercados, cafés de especialidad, cocina de autor y cantinas a menos de diez minutos a pie.' },
  { nombre: 'Recorridos culturales', texto: 'Museos, galerías, arquitectura barroca y la Fábrica La Aurora, sin coche.' },
  { nombre: 'Ruta de viñedos', texto: 'Visita a viñedos del Bajío con cata, comida y transporte de ida y vuelta.' },
  { nombre: 'Golf', texto: 'Campos a minutos de la ciudad; te reservan el tee time.' },
  { nombre: 'Master classes y talleres', texto: 'Cocina mexicana, cata de mezcal, cerámica, textil y pintura con maestros locales.' },
  { nombre: 'Trabajo remoto', texto: 'Wifi en todas las suites y patios silenciosos.' },
  { nombre: 'Viajar con tu perro', texto: 'Tu perro entra contigo a las dos casonas. Avísales al reservar.' },
];

export const soloParaTi = {
  texto: 'Privatizan una de las casonas para tu grupo: patios, suites, terraza y el equipo completo para un solo festejo, sin otros huéspedes.',
  ocasiones: ['Pedidas de mano', 'Tornabodas', 'Rompehielos', 'Cumpleaños', 'Reuniones y retiros', 'Celebraciones íntimas'],
  incluye: ['Uso exclusivo de la casona', 'Todas las suites para tus invitados', 'Menú y bebidas a la medida', 'Coordinación de montaje, flores y música', 'Desayuno del día siguiente para todos'],
};

export const porque = [
  'Dentro del Centro Histórico, Patrimonio Mundial de la UNESCO',
  'Solo adultos: calma para parejas y viajeros sin prisa',
  'Pet friendly en las dos casonas',
  'Desayuno y valet parking incluidos en la tarifa',
  'Wifi en todas las suites',
  'Concierge que arma contigo el San Miguel que quieres vivir',
];
