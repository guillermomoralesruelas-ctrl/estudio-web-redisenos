// Contenido de El Patrón Barbería, sede Juárez (CDMX), tomado del sitio original en español: investigacion/original.html
// (la lectura de Jina en crudo.json salió en inglés). La nube no llega a elpatron.com.mx.
// Regla: nada inventado. Sin "servicio garantizado" ni el contador "+0".
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);

export const negocio = {
  nombre: 'El Patrón Barbería',
  whatsapp: '5215528600906',
  telefono: '55 2860 0906',
  telefonoHref: 'tel:+525528600906',
  direccion: 'Av. Insurgentes Sur 26, Colonia Juárez, CDMX',
  reservar: 'https://sistemasyservicios.mx/reservas/go.php?eb=6c8349cc7260ae62e3b1396831a8398f',
  mapa: 'https://maps.app.goo.gl/rJt3hkPfeRv5L1ph8',
  // El iframe de su sitio (ver OPORTUNIDADES.md: su identificador parece de ejemplo).
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.662664654321!2d-99.16045668509355!3d19.42936798688607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff34e7f9a2d7%3A0x6b8f3b6c2d1b7b7a!2sAv.%20Insurgentes%20Sur%2026%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1616612345678!5m2!1ses!2smx',
  horario: [['Lunes a viernes', '10:00 a 21:00'], ['Sábado', '10:00 a 19:00'], ['Domingo', '10:00 a 16:00']] as const,
  instagram: 'https://www.instagram.com/elpatronbarberiaytonicos/',
  facebook: 'https://www.facebook.com/ElPatronBarberiaJuarez',
  sedes: [
    ['Sede Arcos (Qro)', 'C. Ramón Rodríguez Familiar 48, Los Arcos, Querétaro', '442 452 3077', 'https://elpatron.com.mx/arcos'],
    ['Sede Zibatá (Qro)', 'Plaza Xentric 2do piso, Zibatá, Querétaro', '442 782 0265', 'https://elpatron.com.mx/zibata'],
  ] as const,
  google: '4.9',
  visagista: 'https://gemini.google.com/gem/1YRpnXZMreulJ3JaD709CmjNRr7meY0r7?usp=sharing',
};

export const wa = (m: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;
export const waCita = wa('¡Hola! Quiero agendar una cita en El Patrón Juárez.');

export type Servicio = { id: string; nombre: string; precio: number; duracion: string; foto: string; alt: string; incluye: string[] };
export const servicios: Servicio[] = [
  { id: 'corte', nombre: 'Corte de cabello', precio: 290, duracion: '30 a 45 min', foto: 'corte', alt: 'Barbero de El Patrón con cubrebocas y guantes cortando el cabello a un joven', incluye: ['Asesoría de imagen: visagismo y estilo', 'Corte de precisión a tijera o máquina', 'Lavado y styling con productos naturales', 'Masaje relajante de cortesía'] },
  { id: 'barba', nombre: 'Ritual de barba', precio: 290, duracion: '30 a 45 min', foto: 'barba', alt: 'Barbero delineando la barba de un cliente con navaja', incluye: ['Vapor de ozono y toalla caliente', 'Exfoliación facial antes del afeitado', 'Afeitado y delineado de precisión', 'Hidratación y aromaterapia'] },
  { id: 'facial', nombre: 'Facial premium', precio: 290, duracion: '30 a 45 min', foto: 'facial', alt: 'Cliente con mascarilla dorada y negra durante un facial', incluye: ['Anti-edad (oro 24k)', 'Detox profundo (carbón activado)', 'Hidratación (ácido hialurónico)', 'Control graso (arcilla volcánica)'] },
  { id: 'experiencia', nombre: 'Experiencia Patrón', precio: 800, duracion: '1 h 45 min', foto: 'experiencia', alt: 'Cliente recostado con toalla caliente y vapor mientras el barbero lo atiende', incluye: ['Corte + barba', 'Facial express revitalizante', 'Depilación de nariz, oídos y cejas', 'Relajación premium extensa'] },
  { id: 'patroncitos', nombre: 'Patroncitos', precio: 220, duracion: '45 min', foto: 'patroncito', alt: 'Niño pequeño con capa de El Patrón sentado en el sillón de barbero', incluye: ['Lavado y corte personalizado', 'Peinado premium', 'Juguete o juego incluido'] },
];

export const membresia = {
  adulto: { precio: 2650, credito: 3480 },
  ninos: { precio: 2000, credito: 2640 },
};

export const equipo = [
  { nombre: 'Marcelo', rol: 'Maestro en tijera y ritual', especialidades: ['Tijera de precisión', 'Ritual de barba', 'Estilo clásico'], foto: 'marcelo', alt: 'Marcelo, barbero de El Patrón, con playera negra frente al muro con el logo' },
  { nombre: 'Yosef', rol: 'Maestro en fades y estilo', especialidades: ['Fades quirúrgicos', 'Grecas artísticas', 'Texturizado'] },
  { nombre: 'Melisa', rol: 'Especialista en tijera y detalle', especialidades: ['Corte a tijera', 'Delineado con navaja', 'Atención detallada'], foto: 'melisa', alt: 'Melisa, barbera de El Patrón, bajo el letrero de neón "Yo soy el Patrón"' },
  { nombre: 'Uriel', rol: 'Especialista en estilo', especialidades: ['Fades quirúrgicos', 'Diseño de imagen', 'Afeitado clásico'] },
];

export const faq = [
  ['¿Tienen estacionamiento en la Colonia Juárez?', 'Sí, hay un estacionamiento público (con costo extra) justo al lado de la barbería. Es la opción más práctica si vienes en auto desde Reforma o la zona corporativa.'],
  ['¿Necesito hacer cita previa?', 'Recomiendan reservar para asegurar tu lugar, especialmente en fin de semana. Si pasas y tienen espacio, te atienden con gusto. La agenda se llena: reserva con 24 horas de anticipación.'],
  ['¿Qué es el Visagismo IA?', 'Subes tu foto y su asistente te recomienda el corte para la forma de tu rostro (en fase beta).'],
] as const;
