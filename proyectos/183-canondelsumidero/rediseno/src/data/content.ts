// Contenido de Kichan Bajlum (Palenque, Chiapas). Todo sale de investigacion/crudo.json (inicio, tours desde Palenque,
// San Cristóbal y paquetes, captura del 2026-09-26). No se inventan datos: lo que falta va como [PENDIENTE].

export const negocio = {
  nombre: 'Kichan Bajlum',
  whatsapp: '529161128394',
  whatsappVisible: '916 112 8394',
  tel: '+529163452452',
  telVisible: '916 345 2452',
  correo: 'informacion@kichantravel.com',
  direccion: 'Av. Benito Juárez s/n, Col. Centro, 29960 Palenque, Chiapas',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Kichan Bajlum, Av. Benito Juárez, Centro, Palenque, Chiapas'),
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Lugares del mapa esquemático (no a escala). x, y en un lienzo de 400 × 300.
export type LugarId = 'pal' | 'alu' | 'mis' | 'agu' | 'rob' | 'met' | 'lac' | 'bon' | 'yax' | 'tik' | 'scl';
export const lugares: Record<LugarId, { nombre: string; corto: string; x: number; y: number; tipo: 'ruinas' | 'agua' | 'selva' | 'ciudad'; lado: 'izq' | 'der' }> = {
  pal: { nombre: 'Zona arqueológica de Palenque', corto: 'Ruinas de Palenque', x: 200, y: 38, tipo: 'ruinas', lado: 'izq' },
  alu: { nombre: 'Ecoparque Aluxes', corto: 'Aluxes', x: 318, y: 30, tipo: 'selva', lado: 'der' },
  mis: { nombre: 'Misol-Ha', corto: 'Misol-Ha', x: 196, y: 108, tipo: 'agua', lado: 'der' },
  agu: { nombre: 'Agua Azul', corto: 'Agua Azul', x: 156, y: 146, tipo: 'agua', lado: 'der' },
  rob: { nombre: 'Roberto Barrios', corto: 'Roberto Barrios', x: 296, y: 100, tipo: 'agua', lado: 'der' },
  met: { nombre: 'Laguna Metzabok / Nahá', corto: 'Metzabok / Nahá', x: 232, y: 182, tipo: 'selva', lado: 'der' },
  lac: { nombre: 'Selva Lacandona', corto: 'Selva Lacandona', x: 288, y: 218, tipo: 'selva', lado: 'izq' },
  bon: { nombre: 'Bonampak', corto: 'Bonampak', x: 332, y: 256, tipo: 'ruinas', lado: 'izq' },
  yax: { nombre: 'Yaxchilán', corto: 'Yaxchilán', x: 372, y: 206, tipo: 'ruinas', lado: 'izq' },
  tik: { nombre: 'Tikal (Guatemala)', corto: 'Tikal', x: 392, y: 140, tipo: 'ruinas', lado: 'izq' },
  scl: { nombre: 'San Cristóbal (llegada)', corto: 'San Cristóbal', x: 70, y: 246, tipo: 'ciudad', lado: 'der' },
};
export const salida = { x: 250, y: 70 };

export type Tour = { nombre: string; paradas: LugarId[]; duracion: string; salida: string; precio: number; opinion: string };
// Tours compartidos desde Palenque, precio por persona en MXN. Opinión: calificación y número de reseñas de su página.
export const tours: Tour[] = [
  { nombre: 'Yaxchilán y Bonampak 1 día', paradas: ['yax', 'bon'], duracion: '15 horas', salida: '05:30', precio: 1860, opinion: '4.9 (91)' },
  { nombre: 'Cascadas de Misol-Ha y Agua Azul', paradas: ['mis', 'agu'], duracion: '7 horas', salida: '12:00', precio: 780, opinion: '4.9 (40)' },
  { nombre: 'Zona arqueológica de Palenque, Misol-Ha y Agua Azul', paradas: ['pal', 'mis', 'agu'], duracion: '11 horas', salida: '08:00', precio: 1300, opinion: '4.9 (36)' },
  { nombre: 'Yaxchilán, Bonampak y senderismo en la Selva Lacandona', paradas: ['yax', 'bon', 'lac'], duracion: '2 días, 1 noche', salida: '05:30', precio: 2600, opinion: '4.8 (23)' },
  { nombre: 'Misol-Ha, Agua Azul y traslado a San Cristóbal', paradas: ['mis', 'agu', 'scl'], duracion: '10 horas', salida: '12:00', precio: 1140, opinion: '4.7 (18)' },
  { nombre: 'Cascadas Roberto Barrios', paradas: ['rob'], duracion: '6 horas', salida: '11:00', precio: 600, opinion: '4.7 (18)' },
  { nombre: 'Zona arqueológica de Palenque y Roberto Barrios', paradas: ['pal', 'rob'], duracion: '9 horas', salida: '08:00', precio: 1100, opinion: '4.7 (17)' },
  { nombre: 'Selva Lacandona y Bonampak', paradas: ['lac', 'bon'], duracion: '15 horas', salida: '05:30', precio: 1600, opinion: '4.7 (14)' },
  { nombre: 'Zona arqueológica, Misol-Ha, Agua Azul y traslado a San Cristóbal', paradas: ['pal', 'mis', 'agu', 'scl'], duracion: '14 horas', salida: '08:00', precio: 1600, opinion: '4.6 (11)' },
  { nombre: 'Roberto Barrios y traslado a San Cristóbal', paradas: ['rob', 'scl'], duracion: '', salida: '11:00', precio: 960, opinion: '4.5 (10)' },
  { nombre: 'Zona arqueológica de Palenque', paradas: ['pal'], duracion: '5 horas', salida: '08:00', precio: 840, opinion: '4.5 (9)' },
  { nombre: 'Ecoparque Aluxes y Roberto Barrios', paradas: ['alu', 'rob'], duracion: '8 horas', salida: '09:00', precio: 700, opinion: '4.4 (8)' },
  { nombre: 'Aluxes y Roberto Barrios con traslado a San Cristóbal', paradas: ['alu', 'rob', 'scl'], duracion: '13 horas', salida: '09:00', precio: 950, opinion: '4.2 (6)' },
  { nombre: 'Caminata en la Selva Lacandona', paradas: ['lac'], duracion: '15 horas', salida: '05:30', precio: 1140, opinion: '4.2 (6)' },
  { nombre: 'Selva Lacandona: rafting, Yaxchilán y Bonampak', paradas: ['lac', 'yax', 'bon'], duracion: '2 días', salida: '05:30', precio: 3800, opinion: '4.5 (5)' },
  { nombre: 'Rafting y caminata en la Selva Lacandona', paradas: ['lac'], duracion: '15 horas', salida: '05:30', precio: 2340, opinion: '4.5 (4)' },
  { nombre: 'Zona arqueológica de Palenque y Ecoparque Aluxes', paradas: ['pal', 'alu'], duracion: '7 horas', salida: '08:00', precio: 1200, opinion: '4.5 (3)' },
  { nombre: 'Zona arqueológica, Roberto Barrios y traslado a San Cristóbal', paradas: ['pal', 'rob', 'scl'], duracion: '14 horas', salida: '08:00', precio: 1500, opinion: '4.5 (2)' },
  { nombre: 'Laguna de Metzabok, Selva Lacandona', paradas: ['met'], duracion: '11 horas', salida: '08:00', precio: 2200, opinion: '4.5 (2)' },
  { nombre: 'Tikal, Guatemala: 3 días y 2 noches', paradas: ['tik'], duracion: '3 días', salida: '08:30', precio: 6800, opinion: '4.5 (2)' },
  { nombre: 'Ecoparque Aluxes, Misol-Ha y Agua Azul', paradas: ['alu', 'mis', 'agu'], duracion: '10 horas', salida: '09:00', precio: 850, opinion: '4.5 (1)' },
  { nombre: 'Aluxes, Misol-Ha y Agua Azul con traslado a San Cristóbal', paradas: ['alu', 'mis', 'agu', 'scl'], duracion: '13 horas', salida: '09:00', precio: 1100, opinion: '4.5 (1)' },
  { nombre: 'Selva Lacandona: Nahá y Metzabok 2 días', paradas: ['met'], duracion: '2 días', salida: '08:00', precio: 5500, opinion: '4.5 (1)' },
];

export const traslados = [
  { nombre: 'Estación del Tren Maya a tu hotel en Palenque', salida: '19:30', precio: 150 },
  { nombre: 'Tu hotel en Palenque a la Estación del Tren Maya', salida: '07:30', precio: 150 },
  { nombre: 'Palenque a San Cristóbal de las Casas', salida: '16:20', precio: 450 },
  { nombre: 'Palenque a Flores, Guatemala', salida: '09:00', precio: 1200 },
];

export const paquetes = [
  { nombre: 'Chiapas Express', dias: '4 días, 3 noches', precio: 4999 },
  { nombre: 'Aventura Chiapas', dias: '5 días, 4 noches', precio: 3700 },
  { nombre: 'Explora Chiapas', dias: '6 días, 5 noches', precio: 7875 },
];

export const llevar = ['Ropa ligera', 'Calzado cómodo', 'Protector solar biodegradable', 'Repelente', 'Agua', 'Efectivo para gastos personales'];

export const opiniones = [
  { texto: 'El guía y el conductor fueron excelentes; disfrutamos el Usumacinta y las ruinas en medio de la selva. Muy recomendable.', autor: 'Emi J. GaMo', fuente: 'Google' },
  { texto: 'Hicimos dos tours. El conductor fue puntual, cortés y eficiente; todo salió de acuerdo con lo programado.', autor: 'Sergio Sánchez', fuente: 'Facebook, agosto 2025' },
  { texto: 'Excelente experiencia para quienes disfrutan la naturaleza. Los paisajes y la cercanía con la cascada hacen que el recorrido valga la pena.', autor: 'Blanca R.', fuente: 'Tripadvisor, agosto 2025' },
];
