// Contenido de COEC, Centro Odontológico Especializado de la Costa (Puerto Escondido, Oaxaca), tomado del sitio original:
// investigacion/crudo.json e investigacion/original.html (la nube no llega a coec.com.mx).
// Regla: nada inventado. Sin promesas de salud: solo sus propios textos de servicio.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Centro Odontológico Especializado de la Costa',
  corto: 'COEC',
  ciudad: 'Puerto Escondido, Oaxaca',
  // Su botón flotante de WhatsApp (api.whatsapp.com/send?phone=529541270671).
  whatsapp: '529541270671',
  whatsappTexto: '954 127 0671',
  // Su teléfono de la barra superior y de "¡Llámanos ahora!".
  telefono: '954 104 2659',
  telefonoHref: 'tel:+529541042659',
  horario: '9:00 a 18:00',
  citas: 'https://www.coec.com.mx/citas/coec/',
  facebook: 'https://www.facebook.com/coeccentroodontologico/',
  videoPromocional: 'https://www.youtube.com/watch?v=DtX80eKeXlg',
  videoInvisalign: 'https://www.youtube.com/watch?v=n2M2O-xWIv8',
  // El mapa incrustado de su sección de contacto (Google Maps con su ficha "COEC Centro Odontológico Especializado de la Costa").
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.583863792761!2d-97.08203609472304!3d15.866279466025711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f7effe801a81%3A0xd9e01161d1017f33!2sCOEC%20Centro%20Odontol%C3%B3gico%20Especializado%20de%20la%20Costa!5e0!3m2!1ses-419!2smx!4v1625188223089!5m2!1ses-419!2smx',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('COEC Centro Odontológico Especializado de la Costa, Puerto Escondido, Oaxaca'),
  anios: 14,
  servicios: '8,405+',
};

export const doctor = {
  nombre: 'C. D. E. E. Mario Cruz Pérez',
  cedulas: [['Cédula profesional', '6452234'], ['Cédula de especialidad', '6926390']] as const,
  verificar: 'https://www.cedulaprofesional.sep.gob.mx/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCita = wa('Hola, quiero agendar una cita en COEC Centro Odontológico.');

export const sobre =
  'Buscamos ofrecer a la comunidad de Puerto Escondido y alrededores la oportunidad de acceder en un mismo lugar a los mejores especialistas y tratamientos dentales, con el objeto de regresarle la confianza, la funcionalidad y la sonrisa al paciente, prescribiendo tratamientos que causen el mayor beneficio con la menor intervención posible.';

export type Especialidad = { id: string; nombre: string; texto: string };

// Sus nueve servicios, con su texto (recortado donde era muy largo).
export const especialidades: Record<string, Especialidad> = {
  minima: {
    id: 'minima', nombre: 'Odontología de mínima invasión',
    texto: 'Se enfoca en entender que las eventuales enfermedades de la cavidad bucal se pueden prevenir y/o tratar en sus estadios iniciales, antes de que se produzcan lesiones evidentes.',
  },
  protesis: {
    id: 'protesis', nombre: 'Prótesis dental',
    texto: 'Gracias a las técnicas actuales, hoy se pueden rehabilitar bocas con la ausencia total de dientes y recuperar la comodidad, la sonrisa y el hecho de sentirse seguro y a gusto con uno mismo. Si te faltan todas las piezas dentales, puedes elegir una solución permanente mediante la prótesis dental fija.',
  },
  endodoncia: {
    id: 'endodoncia', nombre: 'Endodoncia',
    texto: 'Es un tratamiento en el cual se remueve el tejido pulpar afectado o necrótico (muerto) que se encuentra dentro de los conductos del diente. Este tejido está comprendido por vasos sanguíneos y nervios, por lo cual cuando se ve afectado por diversas razones, hay presencia de dolor intenso a moderado.',
  },
  periodoncia: {
    id: 'periodoncia', nombre: 'Periodoncia',
    texto: 'El tratamiento consiste en remover la placa y cálculos de las bolsas alrededor de los dientes puliendo y alisando las raíces. Así se eliminan las bacterias y los irritantes que causan la inflamación.',
  },
  implantes: {
    id: 'implantes', nombre: 'Implantes dentales',
    texto: 'Los implantes dentales son un tratamiento moderno y eficaz para reemplazar dientes ausentes o perdidos por cualquier causa, capaces de osteointegrarse (unirse al hueso) hasta el punto de convivir de forma sana y natural con el resto de los tejidos de la boca.',
  },
  cirugia: {
    id: 'cirugia', nombre: 'Cirugía maxilofacial',
    texto: 'Tratamiento de las enfermedades de los tejidos blandos de la cavidad bucal y de las estructuras óseas de la zona maxilofacial: diagnóstico, cirugía y tratamientos relacionados con enfermedades y aspectos estéticos de la boca, dientes, cara, cabeza y cuello.',
  },
  odontopediatria: {
    id: 'odontopediatria', nombre: 'Odontopediatría',
    texto: 'La salud oral es una parte integral de la salud general del niño. La odontopediatría es la especialidad de la odontología que trata el cuidado oral preventivo y terapéutico de niños y adolescentes.',
  },
  ortodoncia: {
    id: 'ortodoncia', nombre: 'Ortodoncia e Invisalign®',
    texto: 'Los dientes en mala posición y los que no muerden correctamente unos contra otros son difíciles de mantener limpios, corren riesgos de pérdida precoz debido a caries y enfermedades periodontales, y ocasionan una tensión extra sobre los músculos de la masticación. Hacen ortodoncia convencional, Invisalign® y paquetes para ortodoncia.',
  },
  conebeam: {
    id: 'conebeam', nombre: 'Diagnóstico dental digital 3D',
    texto: 'El servicio de tomografía Cone Beam es un tipo especial de rayos X que mediante una sola exposición produce imágenes 3D de los dientes, los tejidos blandos, los huesos y los nervios. Esta valiosa información hace aún más certero el diagnóstico del médico tratante.',
  },
};

// Las capas del diente dibujado y qué especialidades las atienden.
export type Capa = { id: string; nombre: string; donde: string; especialidades: string[] };
export const capas: Capa[] = [
  { id: 'esmalte', nombre: 'Esmalte y corona', donde: 'Lo que se ve al sonreír', especialidades: ['minima', 'protesis'] },
  { id: 'pulpa', nombre: 'Pulpa y conductos', donde: 'El nervio, dentro del diente', especialidades: ['endodoncia'] },
  { id: 'encia', nombre: 'Encía', donde: 'Lo que rodea al diente', especialidades: ['periodoncia'] },
  { id: 'hueso', nombre: 'Hueso', donde: 'Donde se sostiene el diente, o un implante si falta', especialidades: ['implantes', 'cirugia'] },
];
export const aparte: Capa[] = [
  { id: 'nino', nombre: 'Es para un niño', donde: 'Niños y adolescentes', especialidades: ['odontopediatria'] },
  { id: 'mordida', nombre: 'Los dientes no cierran bien', donde: 'Posición y mordida', especialidades: ['ortodoncia'] },
  { id: '3d', nombre: 'Verlo en 3D', donde: 'Todo el diente, el hueso y los nervios', especialidades: ['conebeam'] },
];

// Su lista de "Sobre nuestra clínica", tal cual (con la ortografía corregida).
export const listaServicios = [
  'Mínima invasión', 'Endodoncia', 'Prótesis', 'Periodoncia', 'Cirugía maxilofacial', 'Odontopediatría',
  'Ortodoncia convencional', 'Ortodoncia Invisalign®', 'Servicios radiológicos dentofaciales', 'Tomografía Cone Beam',
  'Paquetes para ortodoncia',
];

export const caracteristicas = [
  ['Calidad de materiales', 'Todos nuestros materiales son de la más alta calidad para que su sonrisa sea perdurable.'],
  ['Dentistas certificados', 'Contamos con un excelente equipo de profesionales realmente comprometidos con tu salud bucal, y en constante capacitación.'],
  ['Experiencia', 'Llevamos 14 años trabajando en pro de tu salud bucal, con más de 8000 servicios prestados.'],
  ['Cuidado de los pacientes', 'Ofrecemos seguimiento durante y después de nuestros servicios para mantener su salud bucal.'],
  ['Alta tecnología', 'Nuestra experiencia se ve apoyada por la tecnología más actualizada.'],
] as const;

// Sus cuatro reseñas, en inglés como están en su sitio.
export const resenas = [
  { texto: 'I have been to many dentists in Mexico and Canada and the quality and detail and professionalism of all the staff and doctors at COEC was so very impressive. They took my dentist phobia away completely! I also really appreciated that they operate a very sterile environment which is not easy to find here. 10/10!', autor: 'Melissa SuKasa' },
  { texto: 'I highly recommend COEC to anyone looking for professional dentistry, from cleanings to implants and everything in between. I have had root canals, crowns, bridges and implants all performed there. The staff is friendly and knowledgeable. The office is as comfortable and professional as what most expats find in the U.S. and Canada. The work is excellent for a fraction of the price. You won\'t be disappointed placing your faith in COEC.', autor: 'Ellen DeAngelis' },
  { texto: 'Very professional attention, well done, very clean and friendly. Absolutely recommended.', autor: 'Blue Horizon Real Estate' },
  { texto: 'Consult was excellent.', autor: 'Debra Curry' },
];
