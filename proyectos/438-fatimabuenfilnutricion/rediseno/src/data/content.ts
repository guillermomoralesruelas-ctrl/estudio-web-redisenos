// Contenido de Fátima Buenfil, Nutrición Clínica (Mérida, Yucatán), tomado del sitio original: investigacion/crudo.json
// (inicio, servicios, especialidades, currículum y blog) e investigacion/original.html. La nube no llega a fatimabuenfil.com.
// Regla: nada inventado. Sin precios ni horario (el sitio no los publica) y sin promesas de resultado.
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

const sitio = 'https://www.fatimabuenfil.com';

export const negocio = {
  nombre: 'Fátima Buenfil',
  titulo: 'MNC. ED. Fátima Buenfil Rello',
  grados: ['Maestra en Nutrición Clínica', 'Educadora en Diabetes', 'Investigación Clínica'],
  cedulas: [['Cédula profesional', '7443679'], ['Cédula de especialidad', '8686291']] as const,
  whatsapp: '529992602804',
  whatsappTexto: '999 260 2804',
  telefonoHref: 'tel:+529992602804',
  consultorio: 'Hospital Star Médica de Mérida, consultorio 705',
  otroHospital: 'Hospital Centro Médico de las Américas, Mérida',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hospital Star Médica Mérida, Yucatán'),
  mapaAmericas: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Centro Médico de las Américas, Mérida, Yucatán'),
  facebook: 'https://www.facebook.com/FatimaNutricion',
  instagram: 'https://www.instagram.com/fatimanutricion/',
  sitio,
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCita = wa('Hola, quiero agendar una cita de nutrición clínica con Fátima Buenfil.');

export const queEs =
  'La nutrición clínica forma parte de la medicina, en concreto del ámbito de la medicina preventiva. Es uno de los mecanismos más eficaces para evitar la aparición de enfermedades por una alimentación inadecuada.';

// Sus tres servicios (página /servicios).
export type Modalidad = { id: string; nombre: string; texto: string; enHoja: string };
export const modalidades: Modalidad[] = [
  { id: 'consultorio', nombre: 'Consulta general', texto: 'En su consultorio 705 del Hospital Star Médica de Mérida.', enHoja: 'En consultorio (Star Médica, consultorio 705)' },
  { id: 'domicilio', nombre: 'Consulta a domicilio', texto: 'Para brindarte mayor seguridad, el equipo se traslada a tu hogar.', enHoja: 'A domicilio' },
  { id: 'distancia', nombre: 'Consulta a distancia', texto: 'Seguimiento a través de plataformas como Zoom, WhatsApp, etc.', enHoja: 'A distancia (Zoom o WhatsApp)' },
];

// Sus nueve especialidades (página /nuestras-especialidades), más la consulta general. Las institucionales piden el nombre
// de la empresa o escuela en lugar de la modalidad.
export type Motivo = { id: string; nombre: string; institucional?: boolean };
export const motivos: Motivo[] = [
  { id: 'general', nombre: 'Consulta general' },
  { id: 'metabolicas', nombre: 'Enfermedades metabólicas' },
  { id: 'terapia', nombre: 'Terapia nutricional médica' },
  { id: 'vida', nombre: 'Nutrición a lo largo de la vida' },
  { id: 'deporte', nombre: 'Nutrición para el deporte' },
  { id: 'vegetariana', nombre: 'Nutrición vegetariana' },
  { id: 'empresarial', nombre: 'Nutrición empresarial', institucional: true },
  { id: 'escolar', nombre: 'Nutrición escolar', institucional: true },
  { id: 'talleres', nombre: 'Talleres y pláticas', institucional: true },
  { id: 'menus', nombre: 'Menús y asesoría nutricia', institucional: true },
];

// Su currículum (página /curriculum), tal cual, agrupado como en su sitio.
export const curriculum: { titulo: string; items: string[] }[] = [
  {
    titulo: 'Consulta clínica dietética y nutricia hospitalaria',
    items: [
      'Nutrióloga clínica en Hospital Star Médica, consultorio 705, Mérida, Yucatán.',
      'Nutrióloga clínica en Hospital Centro Médico las Américas, Mérida, Yucatán.',
    ],
  },
  {
    titulo: 'Investigación clínica',
    items: [
      'Coordinación general de investigación en el proyecto GEMM (Genética de las Enfermedades Metabólicas en México), Universidad Marista – Texas Biomedical Research Institute.',
      'Miembro del Comité de Investigación del Hospital Regional de Alta Especialidad de la Península de Yucatán (HRAEPY).',
      'Comité de Enlace de Ética e Investigación de CALYDE.',
      'Secretario del Comité de Investigación de CALYDE.',
      'Coordinación general de estudios clínicos, Centro de Neuroinvestigación Clínica Neural-Calyde.',
      'Coordinador de estudios clínicos de la Unidad de Investigación en Salud y Atención Médica S.C.',
    ],
  },
  {
    titulo: 'Certificaciones',
    items: [
      'Certificación anual: Advanced Term Training Program in Metabolic Disease Gene Discovery and Nutrition. Texas Biomedical Research Institute, San Antonio, Texas.',
      'ESPEN, Anáhuac Norte: The Lifelong Learning (III) Programme in Clinical Nutrition and Metabolism.',
      'Nueve cursos del ESPEN Life-Long Learning Programme: apoyo nutricio en adultos mayores, nutrición parenteral, hígado y páncreas, cáncer, enfermedad gastrointestinal, prevención de enfermedades, diabetes y dislipidemias, y paciente neurológico.',
      'Servidor Público Garante de Derechos Humanos de la Niñez y Adolescencia (ISSSTE-CNDH).',
      '"Qué hacer para la atención y prevención de la violencia sexual contra niños y adolescentes" (ISSSTE-CNDH).',
    ],
  },
  {
    titulo: 'Docencia',
    items: [
      'Profesora titular de los cursos "Gerontogeriatría", "Enfermería Oncológica" y "Nutrición Pediátrica", Mérida, Yucatán.',
      'Curso de Metodología de la Investigación Clínica para residentes de medicina, HRAEPY.',
      'Profesora titular del curso "Educación de la Diabetes" y del seminario "Manejo Nutricional en el Paciente Oncológico", EP de México.',
      'Universidad Mesoamericana de San Agustín: Bioquímica molecular, Bioquímica de la nutrición, Nutrición en las patologías I y II, Psicología de la nutrición y Legislación alimentaria.',
      'Posgrado en Nutrición Clínica de la Universidad Anáhuac Mayab: Nutrición en patologías neurológicas.',
      'Bioquímica en la nutrición, Licenciatura en Nutrición de la Universidad del Valle de México.',
      'Docente y consultora de Calidad y Desarrollo CALYDE SCP: gestión y regulación sanitarias en comedores industriales.',
      'Posgrado en Nutrición Aplicada al Síndrome Metabólico y Enfermedades Degenerativas Crónicas.',
    ],
  },
  {
    titulo: 'Ponente',
    items: [
      'Seminarios internacionales en Panamá: V Congreso Regional Norte de FELANPE, VIII Congreso Panameño de Nutrición Clínica y Metabolismo y Primer Congreso Panameño de Nutrición Clínica Pediátrica, con "Fundamentos Genómicos del Inmunometabolismo del Tejido Adiposo del Metabolismo Postprandial".',
      'Nutrición clínica y enfermedades inmunometabólicas, y "Nutrición en el Paciente con Cáncer", Escuela de Excelencia EP Yucatán.',
      'Seminario en avances en genómica de enfermedades cardiometabólicas relacionadas con la nutrición: Instituto Nacional de Genómica México, Instituto de Investigación Biomédica de Texas y Asociación Mexicana de Genética.',
      '"Asociación entre la composición corporal y la actividad inflamatoria en la artritis reumatoide", IMSS Yucatán, Hospital General Regional no. 1, y Universidad Modelo Campus Valladolid.',
      '"La importancia de la nutrición en la salud mental", Hospital Psiquiátrico Yucatán.',
      '"Diabetes y obesidad: consejos con un enfoque útil para la vida diaria", Unidad Académica Sisal, UNAM.',
      'Nutrióloga auxiliar en campañas de salud y educación de diabetes de la Asociación Mexicana de Diabetes del Sureste.',
    ],
  },
];

export const blog = [
  { titulo: '¿Qué es la prueba InBody?', resumen: 'Cuando se para sobre una báscula, no puede ver cuánto músculo o grasa tiene. Todo lo que ve es qué tan pesado es.', url: `${sitio}/blog/28-que-es-la-prueba-inbody` },
  { titulo: '¿Cuánta proteína necesito para ganar músculo?', resumen: 'El cálculo de la ingesta de proteína necesaria para ganar músculo es sencillo, aunque depende de la edad y del régimen de entrenamientos.', url: `${sitio}/blog/29-cuanta-proteina-necesito-para-ganar-musculo` },
  { titulo: 'Nuevo etiquetado de alimentos', resumen: '¿Es una herramienta útil para el consumidor o causa mayor confusión?', url: `${sitio}/blog/20-nuevo-etiquetado-de-alimentos` },
];
