// Contenido de Barberías Premium (Ciudad del Carmen, Campeche), tomado del sitio original: investigacion/crudo.json
// (inicio, franquicias, análisis facial, Plaza Real y Paseo Juárez) y el JSON-LD de sus tres sucursales en
// investigacion/original.html. La nube no llega a barberiaspremium.com.
// Regla: nada inventado. Los precios de los cortes solo aparecen en su plataforma de reservas; aquí solo van los que su
// sitio publica (Premium Service $199 y barba $139).
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Barberías Premium',
  ciudad: 'Ciudad del Carmen, Campeche',
  desde: 2006,
  whatsapp: '529381750049',
  telefono: '938 175 0049',
  telefonoHref: 'tel:+529381750049',
  correo: 'contacto@barberiaspremium.com',
  reservar: 'https://reservas.barberiaspremium.com/reservar',
  sitio: 'https://barberiaspremium.com',
  appIphone: 'https://apps.apple.com/mx/app/barber%C3%ADas-premium/id1347819362',
  facebook: 'https://www.facebook.com/barberiaspremium',
  instagram: 'https://www.instagram.com/barberiaspremium',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCita = wa('Hola, quiero agendar una cita en Barberías Premium.');

// Su oferta de primera visita (portada).
export const primeraVisita = {
  nombre: 'Premium Service',
  precio: '$199',
  minutos: 30,
  incluye: ['Corte de cabello', 'Mascarilla negra', 'Asesoría', 'Registro en Premium ID'],
  barba: { precio: '$139', minutos: 25 },
};

const mapa = (q: string) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

// Sus tres sucursales, con dirección, horario y foto de su JSON-LD y de sus páginas de sucursal.
export const sucursales = [
  {
    id: 'plaza-real', nombre: 'Plaza Real', foto: 'sucursal-plaza-real', medidas: [1000, 731] as const,
    alt: 'Entrada de cristal de Barberías Premium en Plaza Real, con sillones de barbero y un letrero luminoso adentro',
    direccion: 'Plaza Real, segunda planta, frente al área de comida',
    mapa: mapa('Barberías Premium Plaza Real, Plaza Real, segunda planta, frente al área de comida, Ciudad del Carmen, Campeche, México'),
  },
  {
    id: 'paseo-juarez', nombre: 'Centro, Paseo Juárez', foto: 'sucursal-centro', medidas: [757, 1000] as const,
    alt: 'Fachada amarilla de Barberías Premium en el Centro, con el letrero Premium y carteles en la ventana',
    direccion: 'Calle 22 entre 31 y 29B, Col. Centro, detrás de Banamex, Paseo Juárez',
    mapa: mapa('Barberías Premium Centro · Paseo Juárez, Calle 22 entre 31 y 29B, Col. Centro, detrás de Banamex, Paseo Juárez, Ciudad del Carmen, Campeche, México'),
  },
  {
    id: 'express-hsbc', nombre: 'Express HSBC', foto: 'sucursal-express', medidas: [750, 1000] as const,
    alt: 'Fachada rosa de Barberías Premium Express con su letrero y la puerta de cristal',
    direccion: 'C. 29-A 6A, entre 22 y 24, Centro, frente al estacionamiento de HSBC',
    mapa: mapa('Barberías Premium Express HSBC, C. 29-A 6A, entre 22 y 24, Centro, Ciudad del Carmen, Campeche, México'),
  },
];
export const horario = [['Lunes a sábado', '11:00 a 20:30'], ['Domingo', '11:00 a 18:00']] as const;

export const cortes = [
  { foto: 'corte-lacio', titulo: 'Para cabello lacio' },
  { foto: 'corte-rebelde', titulo: 'Para cabello rebelde' },
  { foto: 'corte-remolinos', titulo: 'Que respeta los remolinos' },
];

export const analisis = {
  cifras: [['5', 'fotos de tu rostro y cabello'], ['4', 'propuestas de corte con tres vistas'], ['1', 'reporte completo para conservar']] as const,
  incluye: [
    ['Rostro y cabello', 'Estudio a partir de cinco fotos: forma del rostro, formas mixtas, proporciones y perfil, además de densidad, textura y remolinos del cabello.'],
    ['Cuatro cortes propuestos', 'Opciones con vistas de frente, perfil y espalda. Las referencias y notas ayudan a explicar el resultado que buscas a tu barbero.'],
    ['Lentes, peinado y cuidado', 'Orientación sobre monturas, forma de peinar, productos y mantenimiento para que el corte funcione también fuera de la barbería.'],
  ] as const,
  nota: 'Lo hacemos contigo en la barbería. Recibes tu PDF por WhatsApp. Es asesoría estética, no un diagnóstico médico.',
};

export const app = [
  ['Sellos por visita', 'Sigue tu avance: seis cortes pagados elegibles te dan un corte gratis.'],
  ['Looks y preferencias', 'Consulta tus cortes, guarda referencias y recuerda los detalles que quieres repetir.'],
  ['Cada quien, su perfil', 'Gestiona las citas, looks y preferencias de tu familia desde tu cuenta, con un historial para cada persona.'],
  ['Tu saldo, a la mano', 'Consulta tu monedero electrónico, revisa sus movimientos y usa el saldo disponible en tus servicios.'],
  ['Reserva por voz', 'Envía una nota de voz al asistente desde la app. Dile qué servicio buscas y cuándo quieres venir; revisa los datos antes de confirmar.'],
] as const;

export const franquicia = {
  cifras: [['5', 'sillas en el modelo base'], ['3 años', 'plazo mínimo de contrato'], ['5%', 'regalías sobre ventas brutas'], ['$300,000', 'MXN, base aproximada']] as const,
  detalle: '$150,000 de instalación estimada + $150,000 de cuota inicial de franquicia. La instalación depende del estado del local y puede ser mayor; no es una cotización llave en mano.',
  url: 'https://barberiaspremium.com/franquicias',
};
