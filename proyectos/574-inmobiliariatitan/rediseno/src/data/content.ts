// Contenido de Inmobiliaria Titán, tomado de su sitio (investigacion/original.html y crudo.json). El inventario
// (propiedades.json) se armó con su API pública de WordPress (/wp-json/wp/v2/estate_property y sus taxonomías) y el texto
// de sus 14 páginas de listado de venta y renta, leídos con curl el 2026-09-28: 117 de sus 132 fichas traen precio y m².
// Regla: nada inventado. Las fotos son copias .webp de las propias (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';
import inventario from './propiedades.json';

export type NombreFoto = keyof typeof fotos;
export const foto = (nombre: NombreFoto) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});

export type Propiedad = {
  id: number; titulo: string; url: string; accion: 'venta' | 'renta'; tipo: string; zona: string | null; ciudad: string | null;
  precio: number; m2: number; rec: number | null; banos: number | null; exclusiva: boolean; caracteristicas: string[]; foto: NombreFoto | null;
};
export const propiedades = inventario as Propiedad[];

export const negocio = {
  nombre: 'Inmobiliaria Titán',
  ciudad: 'León, Guanajuato',
  telefono: '4773914080',
  telefonoVisible: '(477) 391 4080',
  // El sitio no publica WhatsApp: se usa su teléfono (pendiente de confirmar en CAMBIOS.md).
  whatsapp: '524773914080',
  correo: 'ventas@inmobiliariatitan.com',
  facebook: 'https://www.facebook.com/Inmobiliaria.titan/',
  youtube: 'https://www.youtube.com/@inmobiliariatitan',
  linkedin: 'https://www.linkedin.com/company/inmobiliaria-tit%C3%A1n/about/',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Inmobiliaria+Tit%C3%A1n+Le%C3%B3n+Guanajuato',
  horario: [
    { dias: 'Lunes a viernes', horas: '9:00 a 17:30' },
    { dias: 'Sábado y domingo', horas: '10:00 a 17:30' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const waGeneral = wa('Hola, les escribo desde su sitio web. Quisiera información sobre sus propiedades.');

export const agentes: { nombre: string; foto: NombreFoto }[] = [
  { nombre: 'Gloria Amézquita', foto: 'a-gloria' },
  { nombre: 'Jonathan Luna', foto: 'a-jonathan' },
  { nombre: 'Gustavo Cruz', foto: 'a-gustavo' },
  { nombre: 'José Vega', foto: 'a-jose' },
];

// Grupos del termómetro: solo los que tienen al menos 7 propiedades comparables.
export const grupos: { accion: 'venta' | 'renta'; tipo: string; nombre: string }[] = [
  { accion: 'venta', tipo: 'Casa', nombre: 'Casas' },
  { accion: 'venta', tipo: 'Departamento', nombre: 'Departamentos' },
  { accion: 'venta', tipo: 'Terreno', nombre: 'Terrenos' },
  { accion: 'renta', tipo: 'Local', nombre: 'Locales' },
  { accion: 'renta', tipo: 'Oficina', nombre: 'Oficinas' },
  { accion: 'renta', tipo: 'Bodega o nave', nombre: 'Bodegas y naves' },
  { accion: 'renta', tipo: 'Departamento', nombre: 'Departamentos' },
];
