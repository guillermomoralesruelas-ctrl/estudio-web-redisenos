// Contenido de AMATE Studio (Puerto Vallarta, Jal.). Todo sale de investigacion/crudo.json (inicio, servicios, proyectos
// y Rosamorada H5, captura del 2026-09-26). No se inventan datos: lo que falta va como [PENDIENTE].

export const negocio = {
  nombre: 'AMATE Studio',
  // Su sitio usa un enlace corto de WhatsApp (wa.me/message/…); el número publicado es el mismo teléfono.
  whatsapp: '523222642367',
  whatsappCorto: 'https://wa.me/message/ELDHF4FZPEAMM1',
  tel: '+523222642367',
  telVisible: '+52 322 264 2367',
  correo: 'contacto@arqacasillas.com',
  ciudad: 'Puerto Vallarta, Jalisco',
  zona: 'Puerto Vallarta · Bahía de Banderas · Riviera Nayarit',
  // Su sitio no publica dirección de oficina: el enlace busca el estudio por nombre en Google Maps.
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('AMATE Studio arquitectura Puerto Vallarta'),
  instagram: 'https://www.instagram.com/amatestudiomx/',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Paso = { nombre: string; texto: string; area: 'Arquitectura' | 'Interiores' | 'Construcción' | 'Desarrollo' };
const P: Record<string, Paso> = {
  conceptual: { nombre: 'Diseño conceptual', texto: 'Plantas, volumetría y fachada para confirmar la dirección antes de comprometer un peso.', area: 'Arquitectura' },
  arquitectonico: { nombre: 'Proyecto arquitectónico', texto: 'Plantas, cortes, elevaciones y perspectivas 3D para aprobar antes de la obra.', area: 'Arquitectura' },
  ejecutivo: { nombre: 'Proyecto ejecutivo', texto: 'Planos estructurales, instalaciones, detalles y especificaciones completas.', area: 'Arquitectura' },
  permisos: { nombre: 'Gestión de permisos', texto: 'Licencias de construcción, impacto urbano, uso de suelo y requisitos municipales.', area: 'Arquitectura' },
  look: { nombre: 'Look & Feel', texto: 'Moodboard, estilo, materiales y paleta antes de comprar un solo mueble.', area: 'Interiores' },
  renders: { nombre: 'Renders fotorrealistas', texto: 'Ves cómo quedará tu espacio antes de invertir en materiales.', area: 'Interiores' },
  mobiliario: { nombre: 'Mobiliario y carpintería a medida', texto: 'Cocinas, closets, vestidores y muebles hechos en su taller.', area: 'Interiores' },
  acabados: { nombre: 'Revestimientos y acabados', texto: 'Pisos, azulejos, mármoles y pinturas: eligen contigo, compran y supervisan la instalación.', area: 'Interiores' },
  staging: { nombre: 'Home staging', texto: 'Mobiliario, accesorios y sesión fotográfica para venta o renta vacacional.', area: 'Interiores' },
  construccion: { nombre: 'Construcción desde cero', texto: 'De la cimentación a la última manija, con equipo propio y supervisión permanente.', area: 'Construcción' },
  remodelacion: { nombre: 'Remodelación y rehabilitación', texto: 'Ampliaciones, redistribuciones, cocinas y baños sin demoler lo que funciona.', area: 'Construcción' },
  supervision: { nombre: 'Supervisión técnica', texto: 'Si tienes contratista: avances, calidad, planos y presupuesto bajo control.', area: 'Construcción' },
  factibilidad: { nombre: 'Análisis de factibilidad', texto: 'Unidades, tipologías, costo estimado y retorno por unidad del terreno.', area: 'Desarrollo' },
  producto: { nombre: 'Diseño de producto', texto: 'Tamaños, distribuciones y amenidades que mejor se venden en la zona.', area: 'Desarrollo' },
  licencias: { nombre: 'Licencias y permisos del desarrollo', texto: 'Impacto urbano y vial, régimen de condominio y documentos para iniciar obra.', area: 'Desarrollo' },
  licitar: { nombre: 'Proyecto integral para licitar', texto: 'Arquitectura, ingenierías y ejecutivo listos para licitar o construir con ellos.', area: 'Desarrollo' },
};

export const inicios = [
  { id: 'terreno', etiqueta: 'Tengo un terreno', pasos: [P.conceptual, P.arquitectonico, P.ejecutivo, P.permisos, P.construccion, P.mobiliario],
    ejemplo: { nombre: 'ZUL', tipo: 'Arquitectura · Construcción', foto: 'zul', alt: 'Fachada del edificio ZUL con balcones, celosía de ladrillo y bugambilias en la entrada' } },
  { id: 'obragris', etiqueta: 'Un depa en obra gris', pasos: [P.look, P.renders, P.mobiliario, P.acabados, P.supervision],
    ejemplo: { nombre: 'Harbor 401', tipo: 'Interiorismo', foto: 'harbor-401', alt: 'Sala, comedor y cocina abiertos de Harbor 401 con vista al mar al atardecer' } },
  { id: 'remodelar', etiqueta: 'Algo que remodelar', pasos: [P.look, P.renders, P.remodelacion, P.mobiliario, P.acabados],
    ejemplo: { nombre: 'Rosamorada H5', tipo: 'Diseño de interiores · Remodelación', foto: 'rosamorada-h5', alt: 'Recámara de Rosamorada H5 con muro tipo mármol de vetas doradas y cabecera en tono vino' } },
  { id: 'renta', etiqueta: 'Una propiedad para renta vacacional', pasos: [P.look, P.renders, P.mobiliario, P.acabados, P.staging],
    ejemplo: { nombre: 'Harbor 107', tipo: 'Interiorismo', foto: 'harbor-107', alt: 'Recámara de Harbor 107 en tonos claros, con ventilador de techo y cortinas de lino' } },
  { id: 'desarrollo', etiqueta: 'Soy desarrollador', pasos: [P.factibilidad, P.producto, P.licencias, P.licitar, P.construccion],
    ejemplo: { nombre: 'Obra en proceso', tipo: 'Construcción', foto: 'servicio-construccion', alt: 'Edificio de varios niveles en construcción con andamios' } },
];

export const rosamorada = {
  datos: [['Superficie', '86 m², 2 recámaras, 2 baños'], ['Ubicación', 'Versalles, Puerto Vallarta'], ['Uso', 'Renta vacacional (Airbnb)'], ['Estilo', 'Burgundy: tonos vino y dorados']],
  texto: 'El reto: que 86 m² de renta vacacional compitieran con cualquier hotel de diseño. Rojo vino sobre mármoles de vetas doradas, madera oscura y lino. Paneles de PVC con apariencia de mármol y madera, durables y de bajo mantenimiento; camas, sala, bancos, cortinas y blackout hechos a diseño para este espacio.',
};

export const resenas = [
  { texto: 'Muy profesionales, atentos a los requerimientos y deseos del cliente. Dan ideas y propuestas pero siempre respetando la idea original. Muy recomendados.', autor: 'Cinthya Feregrino Palacios', fuente: 'Google' },
  { texto: 'Alejandro helped me to fit out my raw condo space in Puerto Vallarta. As an architect myself, I have exacting standards, and he was more than equipped to meet them.', autor: 'B B, arquitecto', fuente: 'Google' },
];

export const portafolio = { total: 14, arquitectura: 8, interiorismo: 9, construccion: 4,
  nombres: ['Harbor 401', 'ZUL', 'Rosamorada H-5', 'Flamingos H-28', 'Harbor 107', 'Las Torres', 'Manglar', 'Argentina', 'Mar 2', 'Almejas 6', 'Lote 111', 'Almejas 8', 'Scala 202', 'Scala 201'] };
