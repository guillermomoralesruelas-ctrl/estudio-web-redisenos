// Contenido de Dr. Tooth Saltillo, tomado de su sitio (inicio, contacto, aviso de privacidad y las 12 páginas de
// servicios), revisado con curl el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const clinica = {
  nombre: 'Dr. Tooth Saltillo',
  lema: 'Pioneros en odontología digital en México',
  direccion: 'Ave. San Ángel N° 240, Residencial Valle San Agustín, C.P. 25210, Saltillo, Coah.',
  edificio: 'Edificio San Ángel, 2.º piso',
  telefonos: [
    { texto: '844 485 2811', tel: '+528444852811' },
    { texto: '844 180 2073', tel: '+528441802073' },
  ],
  whatsapp: { texto: '844 185 4520', numero: '528441854520' },
  correo: 'dr.tooth.saucedo@gmail.com',
  horario: [
    ['Lunes a viernes', '9:00 a 18:00'],
    ['Sábados', '9:00 a 13:00'],
  ] as const,
  mapa: 'https://www.google.com/maps/search/?api=1&query=Dr.+Tooth+Ave.+San+%C3%81ngel+240+Valle+San+Agust%C3%ADn+Saltillo',
  redes: [
    ['Facebook', 'https://www.facebook.com/Dr.Tooth.saltillo'],
    ['Instagram', 'https://www.instagram.com/dr.tooth.saltillo/'],
    ['YouTube', 'https://www.youtube.com/@Dr.LuisAlejandroSaucedo'],
    ['TikTok', 'https://www.tiktok.com/@dr.tooth.saltillo'],
  ] as const,
  implantologia: 'https://implantologiadigital.com.mx/',
  cirugias: 'Más de 3,000 cirugías guiadas para restauraciones sobre implantes',
  anios: 'Más de 20 años atendiendo casos complejos',
};

export const wa = (texto: string) => `https://wa.me/${clinica.whatsapp.numero}?text=${encodeURIComponent(texto)}`;

// Los 9 pares de antes y después de su sección "Casos extraordinarios" (solo el nombre de pila).
export const casos = [
  { id: 'anaclaudia', nombre: 'Ana Claudia' },
  { id: 'cristina', nombre: 'Cristina' },
  { id: 'daniela', nombre: 'Daniela' },
  { id: 'erikal', nombre: 'Erika Liliana' },
  { id: 'erikat', nombre: 'Erika' },
  { id: 'lucia', nombre: 'Lucía' },
  { id: 'marcela', nombre: 'Marcela' },
  { id: 'paty', nombre: 'Paty' },
  { id: 'yessica', nombre: 'Yessica' },
];

const u = (s: string) => `https://drtooth.com.mx/dr-tooth-saltillo/${s}/`;

export const primarios = [
  { nombre: 'Implantología', texto: 'Cirugías guiadas con tecnología digital para colocar coronas o puentes fijos sobre implantes.', url: u('implantologia') },
  { nombre: 'Diseño de sonrisa', texto: 'Tratamiento integral de la estética dental, gingival y perioral, con carillas de mínima invasión.', url: u('diseno-de-sonrisa') },
  { nombre: 'Ortodoncia', texto: 'Convencional, invisible o híbrida, con especialistas en ortodoncia y ortopedia maxilofacial; ortodoncia preventiva de 7 a 10 años.', url: u('ortodoncia') },
  { nombre: 'Ortodoncia invisible', texto: 'Alineadores digitales transparentes, cómodos y removibles.', url: u('ortodoncia-invencible') },
  { nombre: 'Cirugía plástica periodontal', texto: 'Recorte de encía de mínima invasión para una sonrisa con menos encía.', url: u('cirugia-periodontal') },
  { nombre: 'Mordida autodestructiva (bruxismo)', texto: 'Tratar los factores que desgastan tus dientes y restaurar la sonrisa con odontología bioestética.', url: u('mordidaautodestructiva-2') },
];

export const generales = [
  { nombre: 'Control biológico', url: u('control-biologico') },
  { nombre: 'Periodoncia', url: u('periodoncia-dr-tooth') },
  { nombre: 'Regeneración ósea', url: u('regeneracion-osea') },
  { nombre: 'Rehabilitación', url: u('rehabilitacion') },
  { nombre: 'Cirugía maxilofacial', url: u('cirugia-maxilofacial') },
  { nombre: 'Odontología libre de metal', url: u('odontologia-libre-de-metal') },
];

export const doctores = [
  {
    nombre: 'Dr. Luis Alejandro Saucedo Rivas', cargo: 'Director general. Rehabilitación oral e implantología', foto: 'f-saucedo',
    cv: ['Cirujano Dentista, UAdeC', 'Especialidad en Rehabilitación Oral y Maestría en Rehabilitación, UANL', 'Diplomado en Implantología Avanzada, Loma Linda University, California', 'Entrenamiento avanzado en odontología digital, Amann Girrbach, Austria', 'Certificado en odontología bioestética, Foundation Bioesthetic Dentistry'],
  },
  {
    nombre: 'Dra. Yolitzma Lugo Guerrero', cargo: 'Directora clínica. Ortodoncia y ortopedia maxilofacial', foto: 'f-lugo',
    cv: ['Cirujano Dentista y Especialidad en Ortodoncia, UAdeC', 'Diplomada por la Asociación Odontológica Mexicana para la Enseñanza y la Investigación', 'Constancia de elegibilidad del Consejo Mexicano de Ortodoncia y Ortopedia Dentomaxilofacial'],
  },
];
