// Contenido de Hotel Premier Hermosillo, tomado de investigacion/crudo.json (su única página) y de los datos del
// negocio que su sitio (Duda) carga aparte: /_dm/s/rt/actions/sites/01950465/contentLibrary (2026-10-09):
// dirección, coordenadas, teléfonos, correo, Facebook y horario de 24 h.
// Nada inventado. Textos nuevos del estudio declarados en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}`;

export const negocio = {
  nombre: 'Hotel Premier Hermosillo',
  direccion: 'Carretera a Nogales 430, col. San Luis',
  cp: '83160 Hermosillo, Sonora',
  lat: 29.09774,
  lng: -110.92778,
  maps: 'https://www.google.com/maps/search/?api=1&query=29.097740%2C-110.927780',
  email: 'reservaciones@hotelpremier.com.mx',
  facebook: 'https://www.facebook.com/hotelpremiermx',
  calificacion: '4.9',
  huespedes: 'más de 2,000 huéspedes satisfechos',
};

export const telefonos = [
  { etiqueta: 'Recepción', numero: '662 215 1630', href: 'tel:+526622151630' },
  { etiqueta: 'Segunda línea', numero: '662 210 5262', href: 'tel:+526622105262' },
  { etiqueta: 'Sin costo', numero: '800 216 5990', href: 'tel:+528002165990' },
];

// Su sitio deja vacío el campo de WhatsApp: no se publica ningún número. La solicitud va por correo o teléfono.
export const correo = (asunto: string, cuerpo: string) =>
  `mailto:${negocio.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

export const destacados = [
  { foto: 'lobby-billar', titulo: 'Recepción que da confianza', texto: 'Llegue a un espacio cálido, ordenado y pensado para una experiencia ágil desde el check-in.' },
  { foto: 'habitacion-escritorio', titulo: 'Habitaciones para descansar y avanzar', texto: 'Espacios equipados para combinar productividad, privacidad y confort.' },
  { foto: 'alberca-dia', titulo: 'Alberca para toda la familia', texto: 'Una amenidad clave para relajarse y disfrutar la estancia.' },
  { foto: 'centro-negocios', titulo: 'Centro de negocios', texto: 'Todo listo para reuniones, videollamadas y trabajo productivo.' },
];

export const habitaciones = [
  { id: 'individual', nombre: 'Individual', grupo: 'Habitaciones individuales y dobles', foto: 'habitacion-una-cama', alt: 'Habitación con una cama, buró, lámpara y escritorio' },
  { id: 'doble', nombre: 'Doble', grupo: 'Habitaciones individuales y dobles', foto: 'habitacion-dos-camas', alt: 'Habitación con dos camas, frigobar, televisión y escritorio' },
  { id: 'king', nombre: 'King Size', grupo: 'Habitaciones King Size y Junior Suite', foto: 'habitacion-escritorio', alt: 'Habitación con cama amplia, muros ocres y escritorio de trabajo' },
  { id: 'junior', nombre: 'Junior Suite', grupo: 'Habitaciones King Size y Junior Suite', foto: 'habitacion-sala', alt: 'Habitación con cama, sala con sillones y escritorio' },
];
export const equipoHabitacion = ['TV', 'Horno de microondas', 'Secadora', 'Escritorio de trabajo', 'Frigobar'];

export type Viaje = 'negocios' | 'familia' | 'carretera';
export const amenidades: { grupo: string; foto: string; alt: string; items: string[]; viajes: Viaje[] }[] = [
  { grupo: 'Áreas recreativas', foto: 'videojuegos', alt: 'Máquinas de videojuegos del hotel', items: ['Alberca', 'Zona para niños', 'Gimnasio'], viajes: ['familia'] },
  { grupo: 'Restaurante y bar', foto: 'restaurante-bar', alt: 'Barra del restaurante con una malteada y botana', items: ['Restaurante', 'Servicio a la habitación', 'Servicio de buffet'], viajes: ['negocios', 'familia', 'carretera'] },
  { grupo: 'Centro de negocios', foto: 'sala-juntas', alt: 'Sala de juntas con mesas largas, tazas y jarras', items: ['Sala de juntas', 'Centro de negocios'], viajes: ['negocios'] },
  { grupo: 'Servicios adicionales', foto: 'llave', alt: 'Huésped abriendo la puerta de su habitación con tarjeta', items: ['Lavandería', 'Caja de seguridad', 'Kiosco'], viajes: ['negocios', 'familia'] },
  { grupo: 'Accesibilidad', foto: '', alt: '', items: ['Habitación para personas con discapacidad'], viajes: [] },
  { grupo: 'Estacionamiento', foto: 'estacionamiento-noche', alt: 'Estacionamiento del hotel de noche, entre palmeras', items: ['Amplio estacionamiento', 'Estacionamiento privado'], viajes: ['carretera', 'familia'] },
  { grupo: 'Conectividad', foto: 'centro-negocios', alt: 'Computadoras del centro de negocios junto a la recepción', items: ['Internet inalámbrico (WiFi) de alta velocidad', 'Conexión estable', 'Cobertura continua'], viajes: ['negocios', 'carretera'] },
  { grupo: 'Gimnasio', foto: 'gimnasio', alt: 'Gimnasio con caminadoras, elíptica y aparatos de pesas', items: ['Gimnasio'], viajes: ['negocios', 'familia'] },
];

export const viajes: { id: Viaje; nombre: string; nota: string }[] = [
  { id: 'negocios', nombre: 'Viaje de trabajo', nota: 'Escritorio en la habitación, WiFi, sala de juntas y servicio a la habitación.' },
  { id: 'familia', nombre: 'Con la familia', nota: 'Alberca, zona para niños, buffet y estacionamiento privado.' },
  { id: 'carretera', nombre: 'De paso por la carretera', nota: 'Sobre la salida a Nogales, con estacionamiento privado y recepción las 24 horas.' },
];

export const restaurante = [
  { foto: 'buffet', alt: 'Buffet de desayuno con pan dulce, fruta y bebidas' },
  { foto: 'salmon', alt: 'Filete de salmón con ensalada y elote' },
  { foto: 'hamburguesa', alt: 'Hamburguesa con papas a la francesa' },
  { foto: 'estacion-buffet', alt: 'Cocinera preparando en la estación del buffet, junto a una canasta de fruta' },
  { foto: 'donas', alt: 'Donas decoradas en el buffet' },
  { foto: 'buffet-desayuno', alt: 'Melón y papaya picados en el buffet, con jarabes al fondo' },
  { foto: 'fruta', alt: 'Manzanas y naranjas en un tazón' },
  { foto: 'salon-desayunos', alt: 'Mesas puestas con tazas en el salón' },
];
