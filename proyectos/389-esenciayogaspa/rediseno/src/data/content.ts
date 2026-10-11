// Contenido de Esencia Yoga Spa. Fuente: esenciayogaspa.com en español (inicio, quiénes somos, yoga, spa, experiencias
// y contacto), leído el 2026-10-11. Precios tal como los publica: efectivo | tarjeta, en pesos.
// Las descripciones de clases y tratamientos son resúmenes del estudio, sin promesas de salud.
// No se inventan datos: lo que falta queda como [PENDIENTE].

export const negocio = {
  nombre: 'Esencia Yoga Spa',
  direccion: 'Potrero #13, col. San Antonio, San Miguel de Allende, Guanajuato',
  telefono: '415 152 5421',
  telefonoLink: '+524151525421',
  whatsapp: '524151110464', // "WhatsApp nuevo" de su página de contacto
  whatsappTexto: '415 111 0464',
  correo: 'info@esenciayogaspa.com',
  mapa: 'https://www.google.com/maps/search/?api=1&query=20.9069498,-100.749947',
  instagram: 'https://www.instagram.com/esenciayogaspa/',
  facebook: 'https://www.facebook.com/EsenciaYogaSpaRetreat',
  tripadvisor: 'https://www.tripadvisor.com.mx/Attraction_Review-g151932-d3410299-Reviews-Esencia_Yoga_Spa-San_Miguel_de_Allende_Central_Mexico_and_Gulf_Coast.html',
  horario: [
    { dias: 'Lunes a viernes', horas: '8:00 a 18:00' },
    { dias: 'Sábado', horas: '9:00 a 13:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
};

export const intro = [
  'Escuela registrada en Yoga Alliance (RYS 200) y el centro de yoga y spa mejor valorado de San Miguel de Allende en TripAdvisor, según su sitio.',
  'Clases diarias de yoga, estudios interiores amplios y un aula en la azotea, vestidores con duchas, un bar de jugos frescos y el jardín de meditación y bienestar con jacuzzi.',
];

// [efectivo, tarjeta]
export type Precio = [number, number];

export const yogaPrecios: { nombre: string; precio: Precio; nota?: string }[] = [
  { nombre: 'Clase individual', precio: [250, 300] },
  { nombre: '10 clases', precio: [1980, 2376], nota: 'Vence en 2 meses · incluye jacuzzi' },
  { nombre: 'Yoga ilimitado mensual', precio: [2590, 3108], nota: 'Incluye jacuzzi' },
  { nombre: 'Ilimitado mensual + 4 sesiones de yoga aéreo', precio: [3850, 4620], nota: 'Incluye jacuzzi' },
  { nombre: 'Paquete Pasión', precio: [3300, 3960], nota: '1 mes de yoga ilimitado, jacuzzi ilimitado y 1 masaje de tejido profundo de 60 min (valor $5,236)' },
  { nombre: 'Paquete grupal de 4 clases de Yoga Trapecio', precio: [1400, 1680] },
  { nombre: 'Clase privada de yoga (1 a 10 alumnos)', precio: [3080, 3696], nota: 'A partir de 10 alumnos, $308 por alumno' },
];

export const clases: { nombre: string; min: number; nivel: string; texto: string; calor?: boolean }[] = [
  { nombre: 'Hot Flow', min: 75, nivel: 'Intermedio · bilingüe', calor: true, texto: 'Flujo dinámico en salón con calor infrarrojo lejano. De 30 a 35 posturas con respiración, meditación, mantra y mudra.' },
  { nombre: 'Slow Flow', min: 75, nivel: 'Todos los niveles · bilingüe', texto: 'Práctica lenta enfocada en la alineación; suele empezar con una postura restaurativa. De 20 a 25 posturas.' },
  { nombre: 'Fisio Flow', min: 75, nivel: 'Intermedio · bilingüe', texto: 'Yoga con movimiento basado en la fisioterapia: alineación, estabilidad, movilidad y fuerza, explicando el porqué de cada movimiento.' },
  { nombre: 'Gentle Yoga', min: 75, nivel: 'Todos los niveles', texto: 'Práctica suave para todos los cuerpos, edades y niveles de experiencia.' },
  { nombre: 'Yoga con música sagrada', min: 60, nivel: 'Intermedio · bilingüe', calor: true, texto: 'Secuencia fija de tradición Bikram sin indicaciones verbales: se sigue la música. Recomiendan ir un viernes a las 8:30 para aprender la secuencia.' },
  { nombre: 'Yin restaurativo', min: 75, nivel: 'Todos los niveles · bilingüe', calor: true, texto: 'Posturas largas y sostenidas en el suelo, en salón cálido con velas e infrarrojo, música a 432 Hz y cuencos tibetanos.' },
  { nombre: 'Hot Pilates', min: 75, nivel: 'Intermedio · inglés', calor: true, texto: 'Fusión de yoga y pilates en mat: planchas, guerreros y equilibrios, bandas y bloques; cierra con meditación en savasana.' },
  { nombre: 'Hot Vinyasa', min: 75, nivel: 'Avanzado · bilingüe', calor: true, texto: 'Flujo continuo que une movimiento y respiración, en salón con paneles de infrarrojo lejano. De 35 a 40 posturas.' },
  { nombre: 'Yoga aéreo', min: 60, nivel: 'Todos los niveles · bilingüe', texto: 'Posturas con el sistema de suspensión Yoga Trapeze. Requiere el curso introductorio (puede hacerse 30 min antes de la clase).' },
  { nombre: 'Kundalini', min: 75, nivel: 'Todos los niveles · bilingüe', texto: 'Respiración (60% de la clase), mantras, meditación y cinco posturas.' },
];

// Horario publicado en su página de yoga (imagen "Jan 2026 Schedule"). La imagen no dice qué clase es cada bloque.
export const horario = {
  dias: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  filas: [
    { hora: '8:30', min: 75, bloques: ['calor', 'si', 'calor', 'si', 'calor', ''] },
    { hora: '9:30', min: 60, bloques: ['', '', '', '', '', 'si'] },
    { hora: '11:00', min: 75, bloques: ['si', 'si', 'si', 'si', '', ''] },
    { hora: '16:30', min: 60, bloques: ['', '', '', '', 'calor', ''] },
    { hora: '18:15', min: 75, bloques: ['', 'calor', '', 'calor', '', ''] },
  ],
};

export const avisosYoga = [
  'Para venir a clase, descarga gratis la app Mindbody y regístrate antes.',
  'Yoga aéreo (Trapeze): avisa con anticipación, toma antes el curso introductorio y reserva en Mindbody con al menos 1 hora de anticipación.',
  'Formación de profesores RYS 200 con currículo reconocido por Yoga Alliance: al terminar puedes registrarte como RYT 200. Informes por teléfono o correo.',
];

export type Servicio = { nombre: string; min: string; precio: Precio; nota?: string };
export const spa: { id: string; nombre: string; foto: string; servicios: Servicio[] }[] = [
  {
    id: 'manos-pies', nombre: 'Manos y pies', foto: 'pedicura-petalos', servicios: [
      { nombre: 'Manicura spa', min: '60', precio: [480, 576] },
      { nombre: 'Manicura con mascarilla hidratante', min: '75', precio: [590, 708] },
      { nombre: 'Manicura con gel polish', min: '75', precio: [650, 780] },
      { nombre: 'Pedicura spa', min: '60', precio: [640, 768] },
      { nombre: 'Pedicura con mascarilla hidratante', min: '75', precio: [760, 912] },
      { nombre: 'Pedicura con reflexología', min: '90', precio: [990, 1188] },
      { nombre: 'Pedicura con gel polish', min: '75', precio: [790, 948] },
      { nombre: 'Serenity Touch: pedicura con masaje de cabeza', min: '60', precio: [860, 1032] },
      { nombre: 'Retiro de gel', min: '30', precio: [140, 168] },
      { nombre: 'Reflexología', min: '30', precio: [660, 792] },
    ],
  },
  {
    id: 'faciales', nombre: 'Faciales', foto: 'facial', servicios: [
      { nombre: 'Facial Tropical Glow', min: '60', precio: [1320, 1584] },
      { nombre: 'Facial Lavanda y Frambuesa', min: '60', precio: [1320, 1584] },
      { nombre: 'Facial Especial Esencia (Neova, con análisis digital de la piel)', min: '60', precio: [1500, 1800] },
      { nombre: 'Facial Especial Esencia con microcorriente', min: '75', precio: [1630, 1956] },
      { nombre: 'Facial Princesa con mani/pedi exprés (4 manos)', min: '75', precio: [2160, 2592] },
      { nombre: 'Esencia Radiance Ritual: facial con reflexología (4 manos)', min: '60', precio: [1830, 2196] },
      { nombre: 'Microcorriente, sesión individual', min: '—', precio: [1510, 1812] },
      { nombre: 'Microcorriente, 5 sesiones', min: '—', precio: [5920, 7104] },
      { nombre: 'Dermapen, solo cara', min: '60', precio: [1050, 1260] },
      { nombre: 'Dermapen, cara y cuello (con alta frecuencia y máscara LED)', min: '90', precio: [1375, 1650] },
      { nombre: 'Facial de espalda', min: '50', precio: [935, 1122] },
    ],
  },
  {
    id: 'masajes', nombre: 'Masajes', foto: 'piedras-calientes', servicios: [
      { nombre: 'Masaje de espalda', min: '30', precio: [595, 714] },
      { nombre: 'Reflexología podal "Despertar"', min: '30', precio: [660, 792] },
      { nombre: 'Reflexología agregada a cualquier servicio', min: '30', precio: [330, 396] },
      { nombre: 'Masaje relajante', min: '50', precio: [935, 1122] },
      { nombre: 'Masaje de tejido profundo', min: '60', precio: [1330, 1596] },
      { nombre: 'Masaje de tejido profundo', min: '80', precio: [1680, 2016] },
      { nombre: 'Masaje Esencia Especial (con estiramientos)', min: '90', precio: [1870, 2244] },
      { nombre: 'Masaje con piedras calientes', min: '80', precio: [1720, 2064] },
      { nombre: 'Sonido de vibraciones profundas (ventosas y masaje de sonido)', min: '90', precio: [1870, 2244] },
      { nombre: 'Masaje relajante con reflexología', min: '80', precio: [1265, 1518] },
    ],
  },
  {
    id: 'rituales', nombre: 'Rituales', foto: 'cabina-spa', servicios: [
      { nombre: 'Ritual de renovación capilar (radiofrecuencia, romero y masaje)', min: '45', precio: [600, 720] },
      { nombre: 'Reiki', min: '60', precio: [880, 1056] },
      { nombre: 'Envoltura de chocolate maya "La novia, la reina del día"', min: '120', precio: [3390, 4068] },
    ],
  },
];

export const especial = {
  titulo: 'Especial de spa de octubre',
  texto: '2 masajes Go Deep de tejido profundo de 60 minutos, con 15% de descuento durante octubre.',
  regular: 2660,
  precio: 2260,
  nota: 'Solo efectivo',
};

export const jardin = {
  titulo: 'Jardín de meditación y bienestar SEN',
  texto: 'Piedras de río, suculentas y un patio amplio con jacuzzi, tina de agua fría y solárium.',
  tina: { nombre: 'Tina fría o caliente', min: '30', precio: [220, 264] as Precio },
};

export const invitados: { nombre: string; quien: string; min: string; precio: Precio; foto: string; nota?: string }[] = [
  { nombre: 'Baño de sonido', quien: 'Roberto y Ana, gongs y cuencos', min: '60', precio: [4645, 5574], foto: 'bano-sonido' },
  { nombre: 'Masaje tailandés tradicional', quien: 'Lita, formada en Nuad Boran', min: '75', precio: [1500, 1800], foto: 'lita-tailandes' },
  { nombre: 'Shiatsu', quien: 'Marla Meenakshi Joy, desde 1990', min: '90', precio: [1900, 2280], foto: 'marla-shiatsu' },
  { nombre: 'Sesión de Jenni', quien: 'Acupuntura, diapasones Acutonics, gua sha y más', min: '120', precio: [2800, 3360], foto: 'jenni', nota: 'Por las tardes, a las 16:00 h' },
  { nombre: 'Tarot terapéutico', quien: 'AnaSeshat', min: '60', precio: [1070, 1284], foto: 'ana-seshat' },
  { nombre: 'Psicología de la mano', quien: 'Anabella, lectura de la palma', min: '60', precio: [2000, 2400], foto: 'psicologia-mano' },
];

export const retiros = {
  texto: 'Retiros de 3, 5 y 10 días en el centro de San Miguel, con menú a la carta: clases diarias de yoga, spa y el jardín con jacuzzi. Para amigas, hermanas, madres e hijas, novias y damas de honor; los caballeros también pueden reservar su grupo.',
  experiencias: 'Experiencias disponibles: sanación sonora, ceremonia de cacao, meditación OSHO, canto Kirtan, temazcal, paseos en globo, cata de vinos, cabalgata, Cañada de la Virgen, clases de cocina mexicana y mariposa monarca (en temporada).',
};

export const equipo: { nombre: string; rol: string; foto: string; texto: string }[] = [
  { nombre: 'Melinda Marino', rol: 'Fundadora y directora · E-RYT 500, YACEP', foto: 'melinda-marino', texto: 'Llegó al yoga hace más de 30 años desde el Aikido. Se formó en Bikram Hot Yoga en 1994 y da formación de profesores desde 2002. Dirige el programa de yoga y da clases privadas y terapéuticas.' },
  { nombre: 'Vanessa Campos', rol: 'Directora de spa y técnica superior', foto: 'vanessa-campos', texto: 'Graduada en Terapias de Bienestar por la UTSMA, más de 10 años en Esencia. Ofrece todos los servicios del menú de spa.' },
  { nombre: 'Cirila Ramírez', rol: 'Masajista, pedicura y reflexología', foto: 'cirila-ramirez', texto: 'Masajista certificada por el programa Gimmel, ocho años en el equipo. Especialista en tejido profundo.' },
  { nombre: 'Elena Gómez', rol: 'Tratamientos de spa y profesora de yoga RYS 200', foto: 'elena-gomez', texto: 'Masajista certificada por el programa Gimmel; da faciales, manicuras, pedicuras, masajes y la clase de los viernes con música.' },
  { nombre: 'Katie Tymchyshen', rol: 'Profesora de yoga · RYT 500', foto: 'katie-tymchyshen', texto: 'Clases de movimiento funcional basado en anatomía, inspiradas en el método de la fisioterapeuta Lara Heimann.' },
  { nombre: 'Claudia Anguiano', rol: 'Profesora de yoga y meditación · RYT 200', foto: 'claudia-anguiano', texto: 'Psicóloga, más de 9 años enseñando y más de 600 horas de formación: restaurativo, vinyasa, hatha y prenatal.' },
  { nombre: 'Michelle Salgado', rol: 'Recepción', foto: 'michelle-salgado', texto: 'Te recibe y te orienta para elegir tratamiento de spa o tipo de yoga según tu experiencia y lo que buscas.' },
];
