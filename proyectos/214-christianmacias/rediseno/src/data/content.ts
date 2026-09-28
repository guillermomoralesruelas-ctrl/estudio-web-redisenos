// Contenido de Christian Macías, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, escribe [PENDIENTE] y anótalo en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../sitio/assets/images).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Christian Macías',
  ciudad: '[PENDIENTE]',
  telefono: '[PENDIENTE]',
  whatsapp: '[PENDIENTE]',
  direccion: '[PENDIENTE]',
  mapa: '[PENDIENTE]',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const foto = img;
