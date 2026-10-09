// Contenido de Hiya, tomado de investigacion/crudo.json (su única página) y de su sitio en vivo (2026-10-09).
// La carta (src/data/carta.json) sale tal cual de su sitio, con sus nombres y precios. Nada inventado.
// Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Hiya',
  tipo: 'Robata & Wine bar',
  frase: 'Así como la vida, los humanos vamos y venimos. Así que disfrutemos este momento, que es único e irrepetible.',
  direccion: 'Sinaloa 156A, Roma Nte., Cuauhtémoc',
  cp: '06700 Ciudad de México, CDMX',
  maps: 'https://maps.app.goo.gl/i7FiXi6nm9YmbZDt8',
  reservar: 'https://www.opentable.com.mx/r/hiya-ciudad-de-mexico',
  instagram: 'https://www.instagram.com/hiya.winebar/',
};

// Su sitio publica tres horarios distintos. Se usa el del pie, junto a su ubicación (el de "Lunes a sábado 8:00 am"
// va con el logotipo de otro negocio, Malcriado). Pendiente de confirmar (ver CAMBIOS.md).
export const horario = [
  { dias: 'Miércoles a sábado', horas: '6 pm – 2 am' },
  { dias: 'Domingos', horas: '6 pm – 11 pm' },
];
// Horario que su carta pone a los temakis
export const horarioTemakis = 'Domingo a martes de 5 a 10 pm · Miércoles y jueves de 5 a 10:45 pm · Viernes de 5 a 11:30 pm';

export const tiposVino: Record<string, string> = {
  blanco: '#E9D98B', tinto: '#7A1F2B', naranja: '#D9822B', rosado: '#E7A1A0', 'pet nat': '#C9D3A5', otros: '#9AA79E',
};
