// Contenido de Arena Hybrid Club (Aguascalientes). Todo sale de investigacion/crudo.json (captura del sitio en vivo).
// No se inventan datos: lo que falta va como [PENDIENTE].

export const negocio = {
  nombre: 'Arena Hybrid Club',
  whatsapp: '524497697866',
  telVisible: '449 769 7866',
  tel: '+524497697866',
  direccion: 'Blvd. Luis Donaldo Colosio Murrieta 406, Puerto las Hadas, 20110 Aguascalientes, Ags.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Blvd. Luis Donaldo Colosio Murrieta 406, Puerto las Hadas, Aguascalientes'),
  instagram: 'https://www.instagram.com/arenahybridclub/',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const pilares = [
  { nombre: 'Hybrid Training', texto: 'Entrenamientos funcionales y de resistencia inspirados en HYROX, para construir atletas completos.', foto: 'hero-poster', alt: 'Zona de entrenamiento híbrido con pista HYROX y el nombre ARENA en la pared' },
  { nombre: 'Strength', texto: 'Equipo profesional de fuerza e hipertrofia: plataformas olímpicas, racks y lo necesario para progresar.', foto: 'open-box', alt: 'Zona Open Box con racks, mancuernas y máquinas' },
  { nombre: 'Recovery', texto: 'Cold plunge, sauna, terapia de contraste y botas de compresión.', foto: 'recovery', alt: 'Área de recovery con tina de agua fría, sauna de madera y botas de compresión' },
];

export const incluye = ['Acceso al estudio de entrenamiento híbrido', 'Área completa de fuerza e hipertrofia', 'Clases grupales estructuradas', 'Vestidores y regaderas', 'Eventos de la comunidad', '2 créditos de recovery al mes'];

// Planes por número de clases al mes (30 días de vigencia).
export type Plan = { nombre: string; clases: number | null; precio: number; nota: string };
export const planes: Plan[] = [
  { nombre: 'Drop-in', clases: null, precio: 250, nota: 'Por clase' },
  { nombre: 'Hybrid Pack 8', clases: 8, precio: 1200, nota: '8 clases, 30 días' },
  { nombre: 'Hybrid Pack 12', clases: 12, precio: 1400, nota: '12 clases, 30 días' },
  { nombre: 'Hybrid Pack 18', clases: 18, precio: 1800, nota: '18 clases, 30 días' },
  { nombre: 'Hybrid Membership', clases: 24, precio: 2200, nota: '24 clases, 30 días' },
];
export const opcionesClases = [4, 8, 12, 18, 24];

export const anuales = [
  { nombre: 'Anualidad Full Access', precio: 19150, lista: ['Hybrid full access', 'Área de pesas', 'Clases híbridas (HYROX / funcional)', 'Entrenamientos estructurados', '3 meses sin intereses', '3 créditos de recovery (1 al mes los primeros 3 meses)'] },
  { nombre: 'Anualidad Área de Pesas', precio: 13200, lista: ['Área de pesas', 'Entrenamientos estructurados', 'Comunidad y eventos', '3 meses sin intereses', '3 créditos de recovery (1 al mes los primeros 3 meses)'] },
  { nombre: 'Arena Race Program', precio: 2500, mensual: true, lista: ['6 meses de preparación para competir', 'Hybrid full access y área de pesas (a partir de agosto)', 'Running sessions y simulacros de carrera', 'Seguimiento de coach', 'Rumbo a Acapulco y CDMX'] },
] as { nombre: string; precio: number; mensual?: boolean; lista: string[] }[];

export const comunidad = [
  { foto: 'group-photo', alt: 'Integrantes de la comunidad Arena posando juntos frente a una puerta de cristal' },
  { foto: 'huddle', alt: 'La comunidad reunida en círculo antes de una carrera, en blanco y negro' },
  { foto: 'street-runners', alt: 'Corredores del club en la calle, en blanco y negro' },
  { foto: 'embrace', alt: 'Dos corredoras abrazadas con playeras del club, en blanco y negro' },
  { foto: 'mural-group', alt: 'Grupo de corredores frente a un mural que dice No matter' },
  { foto: 'tshirt', alt: 'Una corredora muestra la playera Running Club Member de Arena Athletes' },
];
