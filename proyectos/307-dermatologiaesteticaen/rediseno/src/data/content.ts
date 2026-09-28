// Contenido del rediseño. Todo sale de investigacion/crudo.json (inicio y /doctora/)
// y de investigacion/resumen.json. Lo que no está en el sitio queda fuera o como pendiente (ver CAMBIOS.md).

export const negocio = {
  nombre: 'Dra. Dafne Arellano',
  nombreCompleto: 'Dra. Dafne Arellano Montalvo',
  especialidad: 'Medicina Estética y Láser',
  clinica: 'Clínica Dermatológica y Cirugía Estética de Puebla',
  fundada: 1971,
  telefono: '+52 221 207 8722',
  telefonoHref: 'tel:+522212078722',
  whatsapp: '522212078722',
  correo: 'contacto@drdafnearellano.mx',
  direccion: 'Calle 20 Sur 2539, Col. Bella Vista, 72500 Puebla, Pue.',
  direccionCorta: 'C. 20 Sur 2539, Bella Vista',
  maps: 'https://www.google.com/maps/search/?api=1&query=Calle+20+Sur+2539%2C+Bella+Vista%2C+72500+Puebla%2C+Pue.',
  // Horario del encabezado y del pie de su sitio (su sección de agenda dice 10:00: pendiente en CAMBIOS.md)
  horario: [
    { dias: 'Lunes a viernes', horas: '9:00 a 19:00' },
    { dias: 'Sábado', horas: '9:00 a 14:00' },
  ],
  cedulas: [
    { numero: '9048813', titulo: 'Médica Cirujana', detalle: 'Tec de Monterrey, 2015' },
    { numero: '11077470', titulo: 'Maestría en Medicina Estética y Longevidad', detalle: 'SEP, 2018' },
  ],
  verificarCedula: 'https://www.cedulaprofesional.sep.gob.mx/',
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/laserpuebla/' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/ClinicaLaserPuebla' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/@CirugiaLaserPuebla' },
  ],
  sitioOriginal: 'https://www.drdafnearellano.com/',
};

export const wa = (texto: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const mensajeBase = 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano Montalvo.';

export const presentacion =
  'Evaluación médica especializada con tecnología láser de última generación. Protocolos clínicos personalizados diseñados por la Dra. Dafne Arellano en su clínica de Puebla, México.';

export const valoracion = {
  precio: '$600 MXN',
  nota: 'reembolsable al hacer el tratamiento',
  duracion: '45 a 60 minutos',
  intro:
    'Todo tratamiento en la clínica inicia con un diagnóstico VISIA. Esta tecnología analiza las capas profundas de tu piel para crear un plan de tratamiento personalizado y seguro.',
  incluye: [
    'Historia clínica',
    'Análisis facial VISIA: manchas, poros, textura y arrugas; daño solar invisible a simple vista; patrón vascular y rojez; edad cutánea comparativa para seguimiento',
    'Plan escrito con presupuesto',
    'Tres escenarios: mínimo, estándar e ideal',
  ],
  preparacion: [
    { t: 'Llega sin maquillaje', d: 'o con maquillaje mínimo que se pueda retirar en la clínica: el análisis VISIA necesita la piel limpia.' },
    { t: 'Trae tu historia', d: 'qué te aplicaron en otras clínicas, cuándo, qué producto y en qué zona. Si tienes la receta o una foto del producto, tráela.' },
    { t: 'Define un objetivo', d: '"qué cambiarías si pudieras cambiar una sola cosa". La doctora lo traduce en un plan ordenado.' },
    { t: 'Una foto tuya', d: 'de hace 5 a 10 años, no de una actriz o influencer: es la referencia realista.' },
  ],
};

export type Tema = 'toxina' | 'rellenos' | 'bioestimuladores' | 'laser' | 'hilos' | 'corporal' | 'longevidad' | 'base';

export type Ciudad = {
  id: string;
  nombre: string;
  pais: string;
  lat: number;
  lon: number;
  lamina: 'america' | 'europa';
  // posición de la etiqueta respecto al punto
  etiqueta: 'arriba' | 'abajo' | 'izq' | 'der';
};

// Coordenadas reales de cada ciudad; Puebla es el punto de la clínica en el JSON-LD de su sitio (19.0269, -98.1924)
export const ciudades: Ciudad[] = [
  { id: 'monterrey', nombre: 'Monterrey', pais: 'México', lat: 25.67, lon: -100.31, lamina: 'america', etiqueta: 'der' },
  { id: 'cdmx', nombre: 'Ciudad de México', pais: 'México', lat: 19.43, lon: -99.13, lamina: 'america', etiqueta: 'arriba' },
  { id: 'puebla', nombre: 'Puebla', pais: 'México', lat: 19.0269, lon: -98.1924, lamina: 'america', etiqueta: 'abajo' },
  { id: 'veracruz', nombre: 'Veracruz', pais: 'México', lat: 19.17, lon: -96.13, lamina: 'america', etiqueta: 'der' },
  { id: 'cancun', nombre: 'Cancún', pais: 'México', lat: 21.16, lon: -86.85, lamina: 'america', etiqueta: 'der' },
  { id: 'bogota', nombre: 'Bogotá', pais: 'Colombia', lat: 4.71, lon: -74.07, lamina: 'america', etiqueta: 'izq' },
  { id: 'barcelona', nombre: 'Barcelona', pais: 'España', lat: 41.39, lon: 2.17, lamina: 'europa', etiqueta: 'der' },
  { id: 'niza', nombre: 'Niza', pais: 'Francia', lat: 43.7, lon: 7.27, lamina: 'europa', etiqueta: 'izq' },
  { id: 'monaco', nombre: 'Mónaco', pais: 'Mónaco', lat: 43.74, lon: 7.42, lamina: 'europa', etiqueta: 'abajo' },
  { id: 'paris', nombre: 'París', pais: 'Francia', lat: 48.86, lon: 2.35, lamina: 'europa', etiqueta: 'der' },
  { id: 'gante', nombre: 'Gante', pais: 'Bélgica', lat: 51.05, lon: 3.72, lamina: 'europa', etiqueta: 'der' },
];

export type Constancia = {
  fecha: string;
  orden: number; // año para ordenar
  titulo: string;
  institucion: string;
  ciudad?: string; // id de ciudades; sin ciudad = sin sede indicada en su sitio
  temas: Tema[];
};

// Constancias publicadas en /doctora/ (títulos resumidos). La relación con cada tratamiento (temas)
// es nuestra lectura del título: pendiente de confirmar con la doctora.
export const constancias: Constancia[] = [
  { fecha: '2015', orden: 2015.0, titulo: 'Título de Médica Cirujana', institucion: 'Tec de Monterrey, Campus Monterrey', ciudad: 'monterrey', temas: ['base'] },
  { fecha: '2015', orden: 2015.1, titulo: 'XX Encuentro Antienvejecimiento y Dermocosmética', institucion: 'Encuentro Antienvejecimiento', ciudad: 'cdmx', temas: ['longevidad'] },
  { fecha: 'Oct 2015', orden: 2015.8, titulo: 'Congreso Mundial de Medicina Antienvejecimiento', institucion: 'A3M, Academia Latinoamericana de Medicina de Longevidad y otras', ciudad: 'monterrey', temas: ['longevidad'] },
  { fecha: 'Oct 2016', orden: 2016.8, titulo: 'Entrenamiento avanzado Fotona Er:YAG + Nd:YAG', institucion: 'Fotona (fabricante, Eslovenia)', ciudad: 'puebla', temas: ['laser'] },
  { fecha: '2017', orden: 2017.1, titulo: 'XVII Congreso Internacional de Medicina Estética, Cirugía Estética y Obesidad', institucion: 'Congreso Internacional de Medicina Estética', ciudad: 'veracruz', temas: ['corporal'] },
  { fecha: '2017', orden: 2017.2, titulo: 'Diploma en hilos absorbibles de sustentación', institucion: 'CUMMME', temas: ['hilos'] },
  { fecha: '2017', orden: 2017.3, titulo: 'Diploma en rinoplastia ambulatoria', institucion: 'CUMMME, Ryoga Health & Beauty y ELCES', temas: ['hilos'] },
  { fecha: '2018', orden: 2018.1, titulo: 'Maestría en Medicina Estética y Longevidad (cédula 11077470)', institucion: 'Registrada ante la SEP', temas: ['base', 'longevidad'] },
  { fecha: '2018', orden: 2018.2, titulo: 'University Master en anatomía facial superficial aplicada a técnicas de inyección', institucion: 'Université Nice Sophia Antipolis, Institut Universitaire de la Face et du Cou', ciudad: 'niza', temas: ['base', 'toxina', 'rellenos', 'bioestimuladores', 'hilos'] },
  { fecha: 'Sep 2018', orden: 2018.7, titulo: 'MCA LIVE Monte-Carlo Aesthetics, VISAGE', institucion: 'Grimaldi Forum', ciudad: 'monaco', temas: ['toxina', 'rellenos'] },
  { fecha: 'Nov 2018', orden: 2018.9, titulo: 'Terapia de reemplazo hormonal bioidéntico con pellets', institucion: 'Medicina Estética Europea', temas: ['longevidad'] },
  { fecha: '2019', orden: 2019.1, titulo: "Master's Degree in Laser and Phototherapy in Dermoaesthetic Diseases (60 ECTS)", institucion: 'Universitat de Barcelona, Facultat de Medicina', ciudad: 'barcelona', temas: ['base', 'laser'] },
  { fecha: '2019', orden: 2019.2, titulo: 'MD Codes Tour 2019', institucion: 'Allergan Medical Institute, con el Dr. Mauricio de Maio', ciudad: 'cdmx', temas: ['toxina', 'rellenos'] },
  { fecha: '2019', orden: 2019.3, titulo: 'IMCAS Annual World Congress 2019', institucion: 'IMCAS', ciudad: 'paris', temas: ['toxina', 'rellenos', 'bioestimuladores'] },
  { fecha: '2019', orden: 2019.4, titulo: 'Diploma Course in Anti-Aging & Aesthetic Medicine', institucion: 'Pinto Institute Europe', ciudad: 'gante', temas: ['longevidad'] },
  { fecha: '2019', orden: 2019.5, titulo: 'International Course of Aesthetic & Anti-Aging Medicine', institucion: 'Pinto Institute Europe', ciudad: 'gante', temas: ['longevidad'] },
  { fecha: '2019', orden: 2019.6, titulo: 'Miembro activo de la American Society for Laser Medicine & Surgery', institucion: 'ASLMS (EE. UU.)', temas: ['laser'] },
  { fecha: '2019', orden: 2019.7, titulo: 'Certificate of Training EMSCULPT', institucion: 'BTL Industries México', temas: ['corporal'] },
  { fecha: '2019–2020', orden: 2019.9, titulo: 'Instructora del Diplomado Láser Médico Quirúrgico y Dermatoestética (64 h)', institucion: 'BUAP, Facultad de Medicina', ciudad: 'puebla', temas: ['laser'] },
  { fecha: 'Nov 2021', orden: 2021.9, titulo: 'Curso teórico práctico "Tercio Inferior Facial"', institucion: 'Allergan Medical Institute', ciudad: 'puebla', temas: ['toxina', 'rellenos'] },
  { fecha: '2023', orden: 2023.1, titulo: 'Ponente en Alma Academy: Master Class México', institucion: 'Alma Lasers LATAM', ciudad: 'cdmx', temas: ['laser', 'corporal'] },
  { fecha: 'Jun 2023', orden: 2023.4, titulo: 'Aplicación de Aqualyx, hands-on workshop', institucion: 'Unidad Académica Dermavan y Marllor Biomedical', ciudad: 'puebla', temas: ['corporal'] },
  { fecha: '2024', orden: 2024.1, titulo: 'Signature Natural Lift Tour (Juvéderm, HArmonyCa y Botox)', institucion: 'Allergan Aesthetics México', temas: ['toxina', 'rellenos', 'bioestimuladores'] },
  { fecha: '2024', orden: 2024.2, titulo: 'Terapias de renovación celular en antienvejecimiento', institucion: 'Biocell Ultravital (Suiza)', ciudad: 'cdmx', temas: ['longevidad'] },
  { fecha: 'Mar 2026', orden: 2026.2, titulo: 'ISSCA: Advanced Peptide Therapies', institucion: 'International Society for Stem Cell Application', ciudad: 'cancun', temas: ['longevidad'] },
  { fecha: 'May 2026', orden: 2026.4, titulo: 'HArmonyCa REVOLUTION, Advanced Training Program', institucion: 'Allergan Medical Institute', ciudad: 'bogota', temas: ['bioestimuladores', 'rellenos'] },
];

export type Opcion = {
  id: string;
  nombre: string;
  temas: Tema[] | 'todo';
  precio?: string;
  nota?: string;
  mensaje: string;
};

export const opciones: Opcion[] = [
  { id: 'todo', nombre: 'Toda su formación', temas: 'todo', mensaje: mensajeBase },
  { id: 'toxina', nombre: 'Toxina botulínica (Botox)', temas: ['toxina'], precio: 'Desde $3,500 MXN', nota: 'Botox® original de Allergan. Entrecejo, frente, patas de gallo, bruxismo, hiperhidrosis.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para toxina botulínica (Botox).' },
  { id: 'rellenos', nombre: 'Ácido hialurónico', temas: ['rellenos'], precio: 'Desde $7,500 MXN', nota: 'Juvéderm, Restylane, Teoxane, Aliaxin. Labios, ojeras, pómulos, perfilado mandibular.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para ácido hialurónico.' },
  { id: 'armonizacion', nombre: 'Armonización facial', temas: ['toxina', 'rellenos', 'bioestimuladores'], precio: 'Desde $15,000 MXN', nota: 'Plan combinado con VISIA: toxina, rellenos y bioestimuladores según tu anatomía.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para armonización facial.' },
  { id: 'bioestimuladores', nombre: 'Bioestimuladores', temas: ['bioestimuladores'], nota: 'Sculptra, Radiesse, HArmonyCa o Profhilo según indicación.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para bioestimuladores.' },
  { id: 'laser', nombre: 'Láser', temas: ['laser'], precio: 'Láser CO2 fraccionado desde $5,500 MXN', nota: 'Lumenis AcuPulse, ResurFX y M22, Fotona SP Dynamis, Alma Hybrid.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para un tratamiento con láser.' },
  { id: 'hilos', nombre: 'Hilos y rinomodelación', temas: ['hilos'], nota: 'Hilos tensores y rinomodelación sin cirugía con ácido hialurónico.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para hilos tensores o rinomodelación.' },
  { id: 'corporal', nombre: 'Corporal', temas: ['corporal'], nota: 'Alma PrimeX, HIFU, celulitis, flacidez, estrías.', mensaje: 'Hola, me interesa agendar una valoración con la Dra. Dafne Arellano para un tratamiento corporal.' },
  { id: 'longevidad', nombre: 'Longevidad', temas: ['longevidad'], nota: 'Plan personalizado tras valoración y estudios. No publica precios.', mensaje: 'Hola, me interesa agendar una valoración de longevidad con la Dra. Dafne Arellano.' },
];

// Precios que publica su inicio (2026)
export const precios = [
  { nombre: 'Toxina botulínica (Botox)', precio: 'desde $3,500', detalle: 'Allergan original. Entrecejo, frente, patas de gallo, bruxismo, hiperhidrosis.' },
  { nombre: 'Ácido hialurónico', precio: 'desde $7,500', detalle: 'Juvéderm, Restylane, Teoxane, Aliaxin. Labios, ojeras, pómulos, perfilado mandibular.' },
  { nombre: 'Láser CO2 fraccionado', precio: 'desde $5,500', detalle: 'Lumenis AcuPulse. Cicatrices de acné, arrugas profundas, resurfacing facial.' },
  { nombre: 'Armonización facial', precio: 'desde $15,000', detalle: 'Plan combinado con VISIA: toxina, rellenos y bioestimuladores según anatomía.' },
  { nombre: 'Protocolo Estrella', precio: '$15,000', detalle: 'Paquete: 3 sesiones mensuales de EndyMed Intensif y 10 sesiones semanales de carboxiterapia. Bioestimulador a partir del tercer mes según indicación.' },
];

export const catalogo = [
  { familia: 'Faciales', items: ['Botox', 'Rellenos faciales', 'Aumento de labios', 'Mini Russian Lips', 'Armonización facial', 'Bioestimuladores', 'Hilos tensores', 'Manchas y melasma'] },
  { familia: 'Corporales', items: ['Aumento de glúteos HYAcorp', 'Lanluma X', 'Hidrolipoclasia con HIFU', 'Celulitis', 'Goldincision', 'Cambio 360', 'Estrías', 'Depilación láser', 'Flacidez corporal', 'Hormonas bioidénticas'] },
  { familia: 'Dermatología estética', items: ['Acné', 'Rosácea', 'Cicatrices', 'Caída de cabello', 'Dermatitis', 'Queratosis actínica'] },
  { familia: 'Cosmetología', items: ['HydraFacial', 'Light peelings', 'Microdermoabrasión', 'NanoPore micropunción', 'Geneo oxigenante', 'DermaPen'] },
];

export const equipos =
  'Fotona 4D, Lumenis AcuPulse, Lumenis ResurFX, Lumenis M22, Alma Hybrid, Alma PrimeX, LightSheer Desire, LightSheer QUATTRO, EndyMed Intensif, HIFU, radiofrecuencia monopolar, carboxiterapia y VISIA.';

export const metodologia = [
  { t: 'Diagnóstico VISIA primero', d: 'Toda primera valoración incluye análisis facial estandarizado VISIA (Canfield Scientific). La doctora te muestra los parámetros de tu piel medidos.' },
  { t: 'Producto original, con caja y lote a la vista', d: 'Botox® de Allergan y ácido hialurónico con registro COFEPRIS. Caja sellada, número de lote y caducidad se muestran antes de cada aplicación.' },
  { t: 'Ella aplica, no delega', d: 'La Dra. Dafne aplica personalmente Botox, rellenos, bioestimuladores e hilos. Enfermería asiste; la decisión técnica y la inyección son de la médica.' },
  { t: 'Hialuronidasa en el consultorio', d: 'Lista para revertir el ácido hialurónico, con protocolo escrito de emergencia vascular.' },
];

export const deriva = [
  { t: 'Cirugía estética', d: 'rinoplastia abierta, blefaroplastia, lifting, lipoescultura, abdominoplastia o mamoplastia: se derivan al equipo de cirugía plástica del Dr. Arístides Arellano Huacuja, dentro de la misma clínica.' },
  { t: 'Dermatología de patologías complejas', d: 'psoriasis severa, vitíligo extenso, sospecha de melanoma y similares: se derivan a dermatólogos de referencia.' },
  { t: 'Embarazo y lactancia', d: 'inyectables y láser se difieren; se ofrecen alternativas seguras.' },
  { t: 'Menores de 18 años', d: 'sin indicación médica documentada no se hacen procedimientos puramente estéticos.' },
];

export const historia = {
  texto:
    'La Clínica Dermatológica y Cirugía Estética de Puebla nació en 1971 de la mano del Dr. Francisco Arellano Ocampo, dermatólogo fundador. La segunda generación, el Dr. Arístides Arellano Huacuja, Cirujano Plástico y Reconstructivo, consolidó la práctica quirúrgica. Hoy, la Dra. Dafne Arellano Montalvo representa la tercera generación, especializada en Medicina Estética y láser.',
  aclaracion:
    'La Dra. Dafne no es dermatóloga: es médica especialista en Medicina Estética. Cuando hay sospecha de una enfermedad de la piel, la consulta se coordina con el equipo de la clínica.',
};

export const opiniones = [
  { texto: 'Excelente experiencia en armonización facial. Desde la valoración médica entendieron exactamente lo que buscaba: un resultado natural, elegante y nada exagerado.', autor: 'Ezequiel Salazar', fuente: 'Google', tratamiento: 'Armonización facial' },
  { texto: 'La verdad la recomiendo muchísimo. Es honesta, profesional y los resultados son bonitos y naturales. Ya es mi doctora de confianza y sin duda seguiré regresando.', autor: 'Maritza Pineda', fuente: 'Doctoralia', tratamiento: 'Medicina estética integral' },
];

export const avisoLegal =
  'Todos los tratamientos se realizan bajo valoración, indicación y supervisión médica. Los resultados pueden variar. Este sitio no sustituye una consulta médica profesional.';
