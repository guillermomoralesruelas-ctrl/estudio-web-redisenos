// Contenido de La Fortaleza Academia de Artes, tomado de investigacion/crudo.json (inicio, Diplomado AEI, Enfoques,
// Taller de Montaje, Contacto) y del sitio en vivo (Cartelera y La Sala, 2026-10-09). Nada inventado.
// No se publican los datos bancarios (CLABE y beneficiario) que su sitio muestra. Textos del estudio en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'La Fortaleza Academia de Artes',
  direccion: 'Mariano Otero 3429, piso 4, int. 4',
  referencia: 'Guadalajara, Jalisco · En contraesquina de Plaza del Sol',
  whatsapp: '528142445362',
  whatsappTexto: '81 4244 5362',
  email: 'hola@lafortalezaacademiadeartes.com',
  maps: 'https://maps.app.goo.gl/F8X6YbPrgpzPgPuw7',
  instagram: 'https://instagram.com/lafortalezaacademiadeartes',
  facebook: 'https://www.facebook.com/profile.php?id=100069212711639',
  youtube: 'https://www.youtube.com/@LAFORTALEZAACADEMIADEARTES',
  tiktok: 'https://www.tiktok.com/@lafortalezaacademiadeart',
};
export const wa = (texto?: string) => `https://wa.me/${negocio.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const atencion = [
  { dias: 'Lunes a jueves', horas: '4:00 PM – 9:00 PM' },
  { dias: 'Sábado', horas: '9:00 AM – 2:00 PM' },
  { dias: 'Domingo', horas: 'Cerrado' },
];

export const cifras = [
  { valor: '250+', texto: 'Alumnos formados' },
  { valor: '7+', texto: 'Grandes producciones' },
  { valor: '5', texto: 'Años en Guadalajara' },
];

export const trayectoria = [
  { año: '2021', obra: 'RENT' },
  { año: '2023', obra: 'In the Heights' },
  { año: '2024', obra: 'Shrek El Musical' },
  { año: '2025', obra: 'Chicago' },
  { año: '2025', obra: 'Sueño de una noche de verano' },
  { año: '2026', obra: 'Something Rotten' },
  { año: '2026', obra: 'Heathers' },
];

// Cartelera publicada en su sitio. fecha ISO para ocultar lo que ya pasó.
export const cartelera = [
  { obra: 'El Show de Terror de Rocky', lugar: 'Foro LARVA', cuando: '24 y 25 de octubre de 2026', fecha: '2026-10-25',
    texto: 'Una noche irreverente, provocadora y deliciosamente extraña: música, humor y excesos de uno de los musicales de culto más icónicos.' },
  { obra: 'Vaselina el Musical', lugar: 'Auditorio Charles Chaplin', cuando: '14 de noviembre', fecha: '2026-11-14',
    texto: 'Una producción llena de energía, romance, juventud y canciones que han marcado generaciones.' },
  { obra: 'Shrek Kids', lugar: '', cuando: 'Próximamente', fecha: '',
    texto: 'Una divertida aventura musical para toda la familia: Shrek, Burro y Fiona descubren que la verdadera belleza está en ser uno mismo.' },
  { obra: 'Next to Normal', lugar: '', cuando: 'Próximamente', fecha: '',
    texto: 'Un musical intenso y profundamente humano sobre el amor, la pérdida y la salud mental dentro de una familia.' },
];

export type Grupo = 'kids' | 'teens' | 'jovenes' | 'adultos';
export const grupos: { id: Grupo; nombre: string; edad: string }[] = [
  { id: 'kids', nombre: 'Kids', edad: '8 a 12 años' },
  { id: 'teens', nombre: 'Teens', edad: '12 a 17 años' },
  { id: 'jovenes', nombre: 'Jóvenes', edad: '15 a 25 años' },
  { id: 'adultos', nombre: 'Adultos', edad: '18 años o más' },
];

// Bloques de clase: dia 1 = lunes … 6 = sábado, 0 = domingo. Horas en 24 h.
export type Bloque = { dia: number; desde: number; hasta: number };
export type Opcion = { id: string; etiqueta: string; bloques: Bloque[]; grupos: Grupo[] };
export type Programa = { id: string; nombre: string; tipo: 'diplomado' | 'enfoque' | 'taller'; texto: string; opciones: Opcion[]; precio?: number; estado?: string; nota?: string };

const L = 1, Ma = 2, Mi = 3, J = 4, S = 6, D = 0;
export const programas: Programa[] = [
  { id: 'aei', nombre: 'Diplomado AEI', tipo: 'diplomado', precio: 750,
    texto: 'Actuación, canto y movimiento integrados. 4 horas a la semana con 3 maestros especialistas. Módulos de 4 meses, sin contrato.',
    opciones: [
      { id: 'aei-lm-ad', etiqueta: 'Lun y Mié 7–9 pm', bloques: [{ dia: L, desde: 19, hasta: 21 }, { dia: Mi, desde: 19, hasta: 21 }], grupos: ['adultos'] },
      { id: 'aei-lm-tn', etiqueta: 'Lun y Mié 5–7 pm', bloques: [{ dia: L, desde: 17, hasta: 19 }, { dia: Mi, desde: 17, hasta: 19 }], grupos: ['teens'] },
      { id: 'aei-sab', etiqueta: 'Sábados 4–8 pm', bloques: [{ dia: S, desde: 16, hasta: 20 }], grupos: ['adultos', 'teens'] },
      { id: 'aei-dom', etiqueta: 'Domingos 9 am–1 pm', bloques: [{ dia: D, desde: 9, hasta: 13 }], grupos: ['adultos', 'teens'] },
    ] },
  { id: 'canto', nombre: 'Canto', tipo: 'enfoque', texto: 'Técnica vocal contemporánea adaptable a pop, musical, balada y teatro. Grupos por nivel.',
    opciones: [
      { id: 'canto-l6', etiqueta: 'Lunes 6 pm (Teen)', bloques: [{ dia: L, desde: 18, hasta: 19 }], grupos: ['teens'] },
      { id: 'canto-l7', etiqueta: 'Lunes 7 pm (Teen)', bloques: [{ dia: L, desde: 19, hasta: 20 }], grupos: ['teens'] },
      { id: 'canto-m6', etiqueta: 'Martes 6 pm', bloques: [{ dia: Ma, desde: 18, hasta: 19 }], grupos: ['adultos'] },
      { id: 'canto-m7', etiqueta: 'Martes 7 pm', bloques: [{ dia: Ma, desde: 19, hasta: 20 }], grupos: ['adultos'] },
      { id: 'canto-m8', etiqueta: 'Martes 8 pm', bloques: [{ dia: Ma, desde: 20, hasta: 21 }], grupos: ['adultos'] },
      { id: 'canto-x7', etiqueta: 'Miércoles 7 pm', bloques: [{ dia: Mi, desde: 19, hasta: 20 }], grupos: ['adultos'] },
      { id: 'canto-j7', etiqueta: 'Jueves 7 pm', bloques: [{ dia: J, desde: 19, hasta: 20 }], grupos: ['adultos'] },
      { id: 'canto-j8', etiqueta: 'Jueves 8 pm', bloques: [{ dia: J, desde: 20, hasta: 21 }], grupos: ['adultos'] },
    ] },
  { id: 'cuerpo', nombre: 'Cuerpo Escénico', tipo: 'enfoque', texto: 'Danza con lenguaje de jazz y contemporáneo: alineación, fuerza y calidad de movimiento.',
    opciones: [
      { id: 'cuerpo-j5', etiqueta: 'Jueves 5–7 pm (Jóvenes)', bloques: [{ dia: J, desde: 17, hasta: 19 }], grupos: ['jovenes', 'teens'] },
      { id: 'cuerpo-j7', etiqueta: 'Jueves 7–9 pm (Adultos)', bloques: [{ dia: J, desde: 19, hasta: 21 }], grupos: ['adultos'] },
    ] },
  { id: 'urbana', nombre: 'Danza Urbana', tipo: 'enfoque', texto: 'Hip hop, commercial y otros estilos urbanos. Principiantes bienvenidos.',
    opciones: [{ id: 'urbana-m7', etiqueta: 'Martes 7–9 pm', bloques: [{ dia: Ma, desde: 19, hasta: 21 }], grupos: ['adultos'] }] },
  { id: 'lab', nombre: 'Laboratorio de Actuación', tipo: 'enfoque', texto: 'Presencia escénica, interpretación y conexión emocional a través de escenas y trabajo profundo.',
    opciones: [{ id: 'lab-m7', etiqueta: 'Martes 7–9 pm', bloques: [{ dia: Ma, desde: 19, hasta: 21 }], grupos: ['jovenes', 'adultos'] }] },
  { id: 'impro', nombre: 'Impro', tipo: 'enfoque', texto: 'Escucha activa, creatividad inmediata y presencia total. Sin experiencia previa.',
    opciones: [{ id: 'impro-x7', etiqueta: 'Miércoles 7–9 pm', bloques: [{ dia: Mi, desde: 19, hasta: 21 }], grupos: ['adultos'] }] },
  { id: 'kids', nombre: 'Taller Kids · Shrek El Musical', tipo: 'taller', precio: 1200, estado: 'Inscripciones abiertas',
    texto: 'Teatro musical como experiencia real, con función final en teatro. ~10 meses.',
    opciones: [{ id: 'kids-mj', etiqueta: 'Mar y Jue 5–7 pm', bloques: [{ dia: Ma, desde: 17, hasta: 19 }, { dia: J, desde: 17, hasta: 19 }], grupos: ['kids'] }] },
  { id: 'jovenes', nombre: 'Taller Jóvenes · Shrek el Musical', tipo: 'taller', precio: 1650, estado: 'Inscripciones abiertas · inicio 14 de noviembre',
    texto: 'Seis meses de trabajo vocal, escénico y coreográfico que culminan en una función en teatro. 16 a 25 años.',
    opciones: [{ id: 'jov-s', etiqueta: 'Sábados 9 am–4 pm', bloques: [{ dia: S, desde: 9, hasta: 16 }], grupos: ['jovenes'] }] },
  { id: 'mamma', nombre: 'Taller Adultos · Mamma Mia', tipo: 'taller', precio: 1650, estado: 'Cupo lleno · lista de espera',
    texto: 'El proceso completo de montar un musical, para adultos de 25 años en adelante.',
    opciones: [{ id: 'mamma-s', etiqueta: 'Sábados 9 am–4 pm', bloques: [{ dia: S, desde: 9, hasta: 16 }], grupos: ['adultos'] }] },
  { id: 'avq', nombre: 'Taller Avanzado · Avenida Q', tipo: 'taller', precio: 1950, estado: 'Ingreso por audición', nota: 'No aplica descuento',
    texto: 'Proceso escénico de alto nivel para personas con experiencia, 21 años en adelante. Cupo muy limitado.',
    opciones: [{ id: 'avq-s', etiqueta: 'Sábados 9 am–4 pm', bloques: [{ dia: S, desde: 9, hasta: 16 }], grupos: ['adultos'] }] },
];

// Tabla de precios de enfoques (por mes, + IVA), con y sin Diplomado AEI.
export const preciosEnfoques = { solo: [500, 850, 1100, 1300, 1500], conAei: [1050, 1350, 1500, 1700, 1850] };
export const inscripcion = '$650 + IVA (incluye uniforme)';
export const otrosEnfoques = 'También: tap, Club Glee y Salsa (pregunta horarios).';

export const porQue = [
  { titulo: 'Formación integral, no solo técnica', texto: 'Desarrollas presencia, criterio artístico y carácter escénico. Eso es lo que distingue a un artista de alguien que toma clases.' },
  { titulo: 'Sin importar edad ni experiencia', texto: 'Desde principiantes que nunca han pisado un escenario hasta artistas con años de trayectoria. Desde los 8 hasta los 60+ años.' },
  { titulo: 'Escenarios reales, no solo ensayos', texto: 'Lo que aprendes lo vives en escena, frente a público real, en teatros reales.' },
];

export const diferencias = [
  { titulo: 'Derechos de autor pagados', texto: 'Pagamos los derechos de cada obra. Tu producción es 100% legal, sin riesgo de cancelación.' },
  { titulo: 'Directores activos en el medio', texto: 'Directores que hoy trabajan en el teatro profesional. Te entrenan como se entrena en una producción real.' },
  { titulo: 'Producción de verdad', texto: 'Escenografía a escala, vestuario, audio e iluminación profesional. Función en teatro real, frente a público real.' },
];

export const voces = [
  { texto: 'Estoy aprendiendo mucho en el diplomado AEI, las clases son muy buenas y dinámicas, las instalaciones están muy bien y el personal es muy amable.', autor: 'Soledad · Alumna activa' },
  { texto: 'Esta es la mejor escuela en Guadalajara para aprender a bailar, cantar y actuar… Todos los maestros son expertos en su área, siempre te tratan con respeto y te motivan a dar lo mejor. Es una academia con mucho corazón.', autor: 'Angélica · Alumna 2025' },
  { texto: 'Si ya brillabas, brillas más. Te guían, te dan más armas, te comprenden. La chispa ya la tienes — en La Fortaleza te la impulsan.', autor: 'Lexy · Alumno activo' },
  { texto: 'Yo nunca había actuado en mi vida. La primera semana me temblaban las manos. Al mes ya podía estar parada frente al grupo sin querer desaparecer.', autor: 'Dasha · Alumna desde 2025' },
];

export const laSala = 'Club cultural para adultos de 55 a 80 años: movimiento con instructora especializada, coro, coreografías, talleres, "Mi Legado" para conservar tu historia y muestras con tu familia. Desde un enfoque a la semana.';

export const preguntas = [
  { p: '¿Necesito experiencia previa?', r: 'No. Todos los grupos son multinivel: conviven personas desde cero hasta con años de formación. El maestro calibra la exigencia individualmente.' },
  { p: '¿Para qué edades son los programas?', r: 'Grupos para niños (8-12), teens (12-17), jóvenes (15-25) y adultos (18+), y La Sala para 55 años o más.' },
  { p: '¿Puedo inscribirme en cualquier momento?', r: 'Los enfoques tienen ingreso continuo. El Diplomado AEI inicia cada 4 meses; si llegas en otro momento, te integran al inicio del siguiente módulo o con un protocolo de bienvenida.' },
  { p: '¿Los programas tienen función?', r: 'Los enfoques tienen presentaciones internas periódicas. El Diplomado AEI tiene una muestra de cierre cada módulo. El Taller de Montaje culmina en una función en teatro real, frente a público.' },
];
