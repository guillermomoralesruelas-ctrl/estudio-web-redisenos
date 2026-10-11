// Contenido de GlobalKey International Real Estate. Fuente: globalkeyrealestate.com (inicio, ¿Quiénes somos?, preventas,
// pool de rentas, hoteles, renta temporal y catálogo), leído el 2026-10-11. No se inventan datos: lo que falta queda como [PENDIENTE].
import type { Meta } from './propiedades';

export const negocio = {
  nombre: 'GlobalKey International Real Estate',
  director: 'Emiliano Yzak García',
  telefono: '33 3673 7940',
  telefonoLink: '+523336737940',
  whatsapp: '523336737940',
  correo: 'contacto@globalkeyrealestate.com',
  direccion: 'Solares Residencial, C.P. 45019, Zapopan, Jalisco (Zona Real)',
  sitio: 'https://www.globalkeyrealestate.com',
  instagram: 'https://www.instagram.com/globalkey_realestate/',
  facebook: 'https://www.facebook.com/profile.php?id=100066923851279',
  propietarios: 'https://www.globalkeyrealestate.com/owners',
  amueblado: 'https://www.globalkeyrealestate.com/nueva-p%C3%A1gina24',
  hoteles: 'https://www.globalkeyrealestate.com/nueva-p%C3%A1gina30',
};

export const lema = 'Tu patrimonio merece más que una propiedad. Merece una estrategia.';
export const intro = 'Conectamos personas e inversionistas con propiedades y oportunidades inmobiliarias cuidadosamente seleccionadas para comprar, vender, rentar e invertir, con asesoría personalizada desde la búsqueda y el análisis hasta la negociación y el cierre.';

export const metas: { id: Meta; t: string; d: string; enlace: string }[] = [
  { id: 'preventa', t: 'Preventa en Guadalajara', d: 'Preventas exclusivas en Guadalajara y Zapopan: Americana, Providencia, Valle Real, Puerta de Hierro.', enlace: 'https://www.globalkeyrealestate.com/nueva-p%C3%A1gina1' },
  { id: 'pool', t: 'Pool de rentas', d: 'Pools de rentas 100% enfocados en inversión: tickets y suites en hoteles y centros comerciales de la zona metropolitana.', enlace: 'https://www.globalkeyrealestate.com/nueva-p%C3%A1gina15' },
  { id: 'dolares', t: 'En dólares, en Miami', d: 'Propiedades productoras de ingresos y de lujo en Miami: Brickell, Miami Beach, Sunny Isles, North Bay Village.', enlace: 'https://www.globalkeyrealestate.com/nueva-p%C3%A1gina1' },
  { id: 'playa', t: 'Playa', d: 'Otros destinos clave: Puerto Vallarta, Riviera Nayarit, Riviera Maya y Manzanillo.', enlace: 'https://www.globalkeyrealestate.com/properties' },
  { id: 'lista', t: 'Comprar en Guadalajara', d: 'Departamentos, casas y terrenos en venta en Guadalajara, Zapopan, Tlaquepaque y Tlajomulco.', enlace: 'https://www.globalkeyrealestate.com/properties' },
];

export const servicios = ['Asesoría fiscal, legal y comercial en cada paso', 'Análisis de oportunidades, negociación y cierre', 'Propiedades de inversión y bienes raíces de lujo'];

export const internacional = [
  { t: 'Estados Unidos', d: 'Plazas comerciales en Texas y Orlando bajo esquemas de pool de rentas; propiedades productoras de ingresos y de lujo en Miami.' },
  { t: 'Dubái', d: 'Proyectos exclusivos en preventa con los desarrolladores más importantes, enfocados en inversión y propiedades premium.' },
  { t: 'República Dominicana', d: 'Preventas en ubicaciones turísticas clave, para diversificar con ingresos en dólares.' },
];
export const otrosDestinos = ['Querétaro', 'Tapalpa', 'Mazamitla', 'Tequila'];
export const sellos = [
  { n: 'logo-_ampi_logo_agua', alt: 'AMPI', w: 147, h: 160 },
  { n: 'logo-realtor', alt: 'REALTOR', w: 147, h: 160 },
  { n: 'logo-fiabci_logo1', alt: 'FIABCI', w: 200, h: 125 },
  { n: 'logo-world-properties', alt: 'World Properties', w: 219, h: 81 },
];
