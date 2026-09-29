// Contenido del Hospital Veterinario Carson (Iztapalapa, CDMX), tomado del sitio original: investigacion/crudo.json
// (inicio y cuatro servicios) e investigacion/original.html. La nube no llega a hospitalcarson.com.
// Regla: nada inventado. No se usan sus testimonios (parecen de plantilla).
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Hospital Veterinario Carson',
  lema: 'Porque también sienten como Tú.',
  telefonos: [['55-72-58-45-83', 'tel:+525572584583'], ['55-59-22-61-94', 'tel:+525559226194']] as const,
  whatsapp: '529992740946',
  whatsappTexto: '999 274 0946',
  correo: 'contacto@hospitalcarson.com',
  direccion: 'San Andrés Tetepilco 95, Col. San Andrés Tetepilco, Iztapalapa, Ciudad de México, CP 09440',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hospital Veterinario Carson, San Andrés Tetepilco 95, Iztapalapa, CDMX 09440'),
  sitio: 'https://hospitalcarson.com',
};

export const wa = (m: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;
export const waInfo = wa('Hola, me gustaría obtener información sobre sus servicios veterinarios.');

export const intro =
  'Hospital veterinario Carson, con servicio las 24 horas en Iztapalapa, CDMX. Urgencias, consultas especializadas, cirugías, hospitalización, laboratorio, ultrasonido veterinario y más.';
export const porque =
  'Abiertos las 24 horas los 365 días del año, con más de 15 años de experiencia en clínica veterinaria, atención hospitalaria y cuidados especializados, salvaguardando la salud de perros y gatos en Iztapalapa y toda la Ciudad de México.';
export const urgencias =
  'Disponibles las 24 horas, los 365 días del año para atender casos de emergencia como traumatismos, enfermedades urológicas, hemorragias, desbalances metabólicos y enfermedades crónicas.';

// Sus servicios, con el texto corto de su catálogo.
export const servicios: Record<string, [string, string]> = {
  consultas: ['Consultas generales', 'Atención veterinaria completa: evaluación física, historial médico, peso y condición corporal, oídos y piel, evaluación dental y recomendaciones de cuidado.'],
  urgencias: ['Urgencias veterinarias 24 horas', 'Servicio de emergencias las 24 horas del día.'],
  ortopedia: ['Ortopedia veterinaria', 'Cirugías, consultas y tratamientos de ortopedia veterinaria para perros y gatos.'],
  nefrologia: ['Nefrólogo veterinario', 'Especialistas en nefrología veterinaria para perros y gatos.'],
  cardiologia: ['Cardiólogo veterinario', 'Diagnóstico y tratamiento de enfermedades cardíacas.'],
  interna: ['Medicina interna veterinaria', 'Diagnóstico y tratamiento de diversas enfermedades en perros y gatos.'],
  oftalmologia: ['Oftalmología veterinaria', 'Cuidado especializado de los ojos.'],
  rayosx: ['Rayos X digitales', 'Imágenes de alta calidad para diagnóstico preciso.'],
  ultrasonido: ['Ultrasonido para perros y gatos', 'Estudios de ultrasonido veterinario para diagnóstico.'],
  hospitalizacion: ['Hospitalización 24/7', 'Cuidado intensivo para perros y gatos las 24 horas.'],
  electro: ['Electrocardiograma', 'Estudio especializado en evaluar la conducción eléctrica del corazón en perros y gatos.'],
  dental: ['Profilaxis dental', 'Limpieza y cuidado dental profesional para perros y gatos.'],
  estetica: ['Estética canina y felina', 'Baño, corte y cuidado estético para perros y gatos.'],
  farmacia: ['Farmacia veterinaria 24/7', 'Medicamentos y productos veterinarios las 24 horas del día.'],
  microchip: ['Microchip', 'Identificación permanente con microchips ISO para perros y gatos.'],
  cirugia: ['Cirugía de especialidad', 'Procedimientos quirúrgicos avanzados en perros y gatos.'],
  certificado: ['Certificado de salud', 'Documentación oficial para viajes nacionales e internacionales.'],
  domicilio: ['Servicio a domicilio', 'Atención veterinaria en tu hogar.'],
  cremacion: ['Cremación', 'Servicios funerarios para perros, gatos y otras mascotas.'],
  acupuntura: ['Acupuntura veterinaria', 'Acupuntura veterinaria para perros y gatos.'],
  laboratorio: ['Laboratorio veterinario', 'Laboratorio para el diagnóstico certero de tu mascota.'],
  pension: ['Pensión para perros y gatos', 'Hospedaje para tu mascota.'],
  adopciones: ['Adopciones', 'Encuentra un nuevo amigo.'],
};

export const grupos: [string, string[]][] = [
  ['Atención', ['urgencias', 'consultas', 'hospitalizacion', 'domicilio', 'farmacia']],
  ['Especialidades', ['cirugia', 'ortopedia', 'cardiologia', 'nefrologia', 'interna', 'oftalmologia', 'acupuntura']],
  ['Estudios', ['laboratorio', 'rayosx', 'ultrasonido', 'electro']],
  ['Cuidado y trámites', ['dental', 'estetica', 'microchip', 'certificado', 'pension', 'cremacion', 'adopciones']],
];

// Los puntos del cuerpo del elemento memorable.
export const zonas = [
  { id: 'ojos', nombre: 'Ojos', servicios: ['oftalmologia'] },
  { id: 'dientes', nombre: 'Dientes', servicios: ['dental'] },
  { id: 'corazon', nombre: 'Corazón', servicios: ['cardiologia', 'electro'] },
  { id: 'rinones', nombre: 'Riñones', servicios: ['nefrologia', 'ultrasonido', 'laboratorio'] },
  { id: 'huesos', nombre: 'Huesos y articulaciones', servicios: ['ortopedia', 'rayosx'] },
  { id: 'piel', nombre: 'Piel y pelo', servicios: ['estetica', 'consultas'] },
];

export const planes = [
  { especie: 'Perros', vacunacion: '$710', salud: '$3,600' },
  { especie: 'Gatos', vacunacion: '$890', salud: '$3,720' },
];
export const petcare = { precio: '$1,900', texto: 'Consultas veterinarias ilimitadas por 1 año. Incluye video consultas, asesoría nutricional y descuentos exclusivos.' };

export const galeria = [
  ['pasillo', 'Pasillo de consultorios del Hospital Carson con su logo de perro y gato en la pared'],
  ['cirugia', 'Dos veterinarios con bata quirúrgica azul operando en el quirófano del hospital'],
  ['radiografia', 'Radiografía digital de perfil de la columna y el abdomen de un perro'],
  ['gato-hospital', 'Gato blanco y naranja hospitalizado con vendaje en la pata y una bomba de infusión'],
  ['bulldog', 'Bulldog inglés blanco en consulta sobre la mesa'],
] as const;
