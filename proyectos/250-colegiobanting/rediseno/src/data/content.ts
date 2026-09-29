// Contenido de Colegio Banting (Coyoacán, CDMX). Todo sale de investigacion/crudo.json (inicio, nosotros, equipo,
// comunidad y modelo educativo, captura del 2026-09-26). No se inventan datos: lo que falta va como [PENDIENTE].

export const negocio = {
  nombre: 'Colegio Banting',
  desde: 1994,
  whatsapp: '525575839898',
  tel: '+525575839898',
  telVisible: '55 7583 9898',
  admisiones: 'admisiones@colegiobanting.edu.mx',
  empleos: 'empleos@colegiobanting.edu.mx',
  direccion: 'Chichimecas MZ70 LT20, Ajusco, CP 04300, Coyoacán, CDMX',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Colegio Banting, Chichimecas MZ70 LT20, Ajusco, 04300 Coyoacán, CDMX'),
  oficina: 'Lunes a viernes, 7:00 a 18:00',
  colegiatura: 3316,
  instagram: 'https://www.instagram.com/colegiobanting',
  facebook: 'https://www.facebook.com/CentrodeFormacionEscolarBanting',
  linkedin: 'https://www.linkedin.com/company/bantingschools',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// "Un día en Banting": horas en minutos desde las 0:00. La salida es la de su página; el horario extendido llega a las 19:00.
export type Bloque = { hora: number; nombre: string; texto: string };
export type Nivel = { id: string; nombre: string; edades: string; entrada: number; salida: number; bloques: Bloque[]; logro: string };
const h = (t: string) => { const [a, b] = t.split(':').map(Number); return a * 60 + b; };

export const niveles: Nivel[] = [
  { id: 'preescolar', nombre: 'Preescolar', edades: '3 a 6 años', entrada: h('9:00'), salida: h('13:30'),
    logro: 'Expresarse con confianza, comenzar su camino en el inglés, convivir sanamente y reconocer sus emociones mientras aprende jugando.',
    bloques: [
      { hora: h('9:00'), nombre: 'Bienvenida', texto: 'Círculo de la mañana, asamblea emocional y saludo bilingüe.' },
      { hora: h('9:30'), nombre: 'Lectoescritura bilingüe', texto: 'Fonética en español e inglés con método lúdico y estaciones.' },
      { hora: h('10:45'), nombre: 'STEAM y exploración', texto: 'Proyectos sensoriales, arte, música y primeros experimentos.' },
      { hora: h('12:00'), nombre: 'Comida y recreo', texto: 'Lunch supervisado y juego libre en áreas seguras.' },
      { hora: h('13:00'), nombre: 'Cierre socioemocional', texto: 'Programa Insight: reflexión del día y despedida.' },
    ] },
  { id: 'primaria', nombre: 'Primaria', edades: '6 a 12 años', entrada: h('7:45'), salida: h('14:30'),
    logro: 'Certificarse en inglés, programar un robot, liderar proyectos de emprendimiento y enfrentar retos con inteligencia emocional.',
    bloques: [
      { hora: h('7:45'), nombre: 'Honores y entrada', texto: 'Formación cívica, activación y arranque del día.' },
      { hora: h('8:00'), nombre: 'Bloque bilingüe', texto: 'Materias curriculares en inglés con Google for Education.' },
      { hora: h('10:00'), nombre: 'Tech y robótica', texto: 'Chromebook 1:1, programación y proyectos STEAM.' },
      { hora: h('11:00'), nombre: 'Recreo y deporte', texto: 'Actividad física, juego libre supervisado y lunch.' },
      { hora: h('12:00'), nombre: 'Bloque académico', texto: 'Matemáticas, ciencias y español resolviendo problemas.' },
      { hora: h('13:30'), nombre: 'Emprendimiento y cierre', texto: 'Taller de emprendimiento, certificación Oxford y reflexión.' },
    ] },
  { id: 'secundaria', nombre: 'Secundaria', edades: '12 a 15 años', entrada: h('6:45'), salida: h('15:30'),
    logro: 'Consolidar su inglés, desarrollar proyectos tecnológicos y enfrentar la adolescencia con criterio y seguridad personal.',
    bloques: [
      { hora: h('6:45'), nombre: 'Entrada temprana', texto: 'Acceso controlado, formación y arranque de jornada.' },
      { hora: h('7:00'), nombre: 'Bloque académico I', texto: 'Materias SEP y contenido bilingüe avanzado, con certificación Oxford / Cambridge.' },
      { hora: h('10:00'), nombre: 'Design Thinking y tech', texto: 'Robótica avanzada, programación y proyectos.' },
      { hora: h('11:30'), nombre: 'Comida y convivencia', texto: 'Comedor supervisado y convivencia entre pares.' },
      { hora: h('12:30'), nombre: 'Bloque académico II', texto: 'Preparación COMIPEMS, ciencias y humanidades.' },
      { hora: h('14:30'), nombre: 'Portafolio y cierre', texto: 'Taller de portafolio, mentoría y reflexión de cierre.' },
    ] },
];
export const extendidoHasta = h('19:00');
export const extendido = ['Supervisión académica y recreativa', 'Club de Tareas con apoyo académico', 'Talleres extracurriculares sin costo extra', 'Clubes: robótica, arte y taekwondo'];

export const pilares = [
  { nombre: 'Habilidades para la vida', texto: 'Hábitos, criterio, autonomía y empatía que se forman todos los días.' },
  { nombre: 'Carácter emprendedor', texto: 'Emprendimiento Junior: educación financiera y ferias donde cada alumno presenta un proyecto real.' },
  { nombre: 'Bilingüe y bicultural', texto: 'Inglés integrado (CLIL), docentes con nivel C1 y certificaciones Oxford y Cambridge en 6º de primaria y 3º de secundaria.' },
  { nombre: 'Innovación y STEAM', texto: 'Robótica, programación, enfoque maker y proyectos que se presentan ante familias y jurados.' },
  { nombre: 'Bienestar socioemocional', texto: 'Programa Insight: inteligencia emocional, empatía y relaciones sanas.' },
];

export const rutaIngles = [
  { etapa: 'Preescolar', meta: 'Inmersión inicial' }, { etapa: 'Primaria baja', meta: 'Comunicación básica' },
  { etapa: 'Primaria alta', meta: 'Fluidez conversacional' }, { etapa: 'Secundaria', meta: 'Dominio académico y certificación' },
];

export const seguridad = [
  { nombre: 'Solo entra quien tú autorices', texto: 'Control biométrico Kigo, código QR temporal para visitantes y CCTV en cada acceso.' },
  { nombre: 'Cero tolerancia al bullying', texto: 'Psicopedagogía preventiva con intervención temprana, seguimiento individual y soporte emocional.' },
  { nombre: 'Seguro escolar', texto: 'Seguro contra accidentes y convenio con red de clínicas y hospitales.' },
];

export const incluye = ['Material digital y Google Workspace', 'Seguro escolar contra accidentes', 'Talleres extracurriculares sin costo extra', 'Certificaciones de inglés Oxford y Cambridge'];

export const servicios = [
  { nombre: 'Comedor', texto: 'Con asesoría de nutriólogos certificados para el ciclo 2026-2027.' },
  { nombre: 'Horario extendido', texto: 'Hasta las 19:00 con supervisión académica y recreativa.' },
  { nombre: 'Club de Tareas', texto: 'Espacio supervisado para terminar la tarea con apoyo.' },
  { nombre: 'Transporte', texto: 'Rutas monitoreadas.' },
];

export const testimonios = [
  { texto: 'Mi hija llega feliz todos los días. Como papá, lo que más valoro es saber que está segura y que las instalaciones están bien cuidadas.', quien: 'Padre de familia, primaria', foto: 'familia-1', alt: 'Un papá abraza a su hija pequeña en un evento del colegio' },
  { texto: 'Buscábamos calidad sin que nos costara una fortuna. En Banting encontramos formación integral, instalaciones seguras y un precio accesible.', quien: 'Padre de familia, primaria', foto: 'familia-2', alt: 'Familias conviviendo en una mesa durante un evento del colegio' },
  { texto: 'Cuando mi hijo entró a Banting no hablaba inglés. En diciembre presentó su primer proyecto de ciencias completo en inglés frente a 30 personas.', quien: 'Madre de familia, primaria', foto: '', alt: '' },
];

export const historia = [
  { anio: '1994', texto: 'Los biólogos Patricia Macías y Álvaro Salinas fundan el Centro de Formación Escolar Banting con seis alumnos.' },
  { anio: '2012', texto: 'David Medel asume la dirección general.' },
  { anio: '2013–2015', texto: 'Google lo reconoce como caso de referencia en integración digital.' },
  { anio: '2015', texto: 'Reconocimiento Great Place to Work.' },
  { anio: '2017–2018', texto: 'Expansión a Querétaro.' },
];
