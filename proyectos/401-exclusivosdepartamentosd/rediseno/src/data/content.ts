// Contenido de GIP Grupo Inmobiliario del Pacífico. Fuente: gipgrupoinmobiliariodelpacifico.com (inicio, /about, /contact,
// /owners y fichas), leído en vivo el 2026-10-12. No se inventan datos.

export const negocio = {
  nombre: 'GIP Grupo Inmobiliario del Pacífico',
  corto: 'GIP',
  // Teléfono de la cabecera y de cada ficha.
  telefono: { t: '(612) 140 8641', link: '+526121408641' },
  // El botón de WhatsApp de su sitio apunta a wa.me/6122198375 (sin el 52); aquí va con el 52 de México.
  whatsapp: '526122198375',
  // WhatsApp que publican en "Vende con GIP" (/contact) para vender tu propiedad.
  whatsappVende: '526123781913',
  correo: 'ventas@gipgrupoinmobiliariodelpacifico.com',
  correoVende: 'contacto@gipgrupoinmobiliariodelpacifico.com',
  direccion: 'Local #7, Boulevard Luis Donaldo Colosio entre Forjadores, La Paz, Baja California Sur',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Boulevard+Luis+Donaldo+Colosio+y+Forjadores+La+Paz+Baja+California+Sur',
  horario: [
    ['Lunes a viernes', '9:00 am – 8:00 pm'],
    ['Sábados', '9:00 am – 2:00 pm'],
  ] as [string, string][],
  sitio: 'https://www.gipgrupoinmobiliariodelpacifico.com',
  ventas: 'https://www.gipgrupoinmobiliariodelpacifico.com/properties',
  rentas: 'https://www.gipgrupoinmobiliariodelpacifico.com/rentals',
  temporales: 'https://www.gipgrupoinmobiliariodelpacifico.com/vacation_rentals',
  facebook: 'https://www.facebook.com/GrupoInmobiliarioDelPacifico',
  youtube: 'https://www.youtube.com/@GipGrupoInmobiliarioDelPacific',
};

export const wa = (texto: string, numero = negocio.whatsapp) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

// Textos de su sitio (Inicio y "¿Quiénes somos?"), ligeramente recortados.
export const nosotros = [
  'En GIP Grupo Inmobiliario del Pacífico somos especialistas en bienes raíces en La Paz, Baja California Sur y otras zonas estratégicas de México: compra, venta, renta y tasación de casas, departamentos, terrenos y desarrollos.',
  'Nuestro equipo de asesores inmobiliarios está comprometido en brindarte un servicio personalizado, transparente y eficiente, guiándote en cada etapa del proceso para que tomes decisiones seguras y rentables.',
];
export const cobertura = ['La Paz', 'Los Cabos', 'Monterrey', 'Mérida', 'CDMX', 'Guadalajara'];

// Asesoras de /about con su WhatsApp.
export const asesoras = [
  { n: 'Marycris S. Ruiz', t: '612 219 8375', wa: '526122198375' },
  { n: 'Erika Ruiz', t: '612 219 8318', wa: '526122198318' },
];

// "Vende con GIP" (/contact): GIP 2.0.
export const vende = {
  lema: 'GIP 2.0 — La forma inteligente de vender propiedades.',
  intro: 'Vender tu propiedad ahora es cómodo, profesional y sin salir de tu hogar. Comienza solicitando tu análisis técnico del mercado. Si tu propiedad califica, la llevamos al mercado con estrategia, marketing y equipo especializado.',
  incluye: [
    'Análisis Técnico de Mercado (AMV)',
    'Estrategia personalizada de venta',
    'Gestión legal y documental',
    'Marketing premium y difusión profesional',
    'Atención personalizada y seguimiento continuo',
    'Prospección calificada y cierre seguro',
  ],
  nota: 'El Análisis Técnico de Valor se realiza con pago previo como parte del proceso de selección y se descuenta al cerrar la venta.',
};

// La ficha que guardó el fabricador: preventa sobre Calzada del Valle, San Pedro Garza García.
export const calzada = {
  titulo: 'Exclusivos departamentos de lujo sobre Calzada del Valle',
  lugar: 'Del Valle, San Pedro Garza García, Nuevo León',
  precio: '$18,700,000 MXN',
  op: 'En preventa',
  detalle: '2 recámaras · 2 baños y medio · 137.3 m² · 2 estacionamientos',
  texto: 'Desarrollo boutique de solo 49 departamentos con acceso directo a Calzada del Valle y vista a la Sierra Madre. Tres tipologías de 137, 144 y 201 m², todas con balcón, bodega, cuarto de servicio y dos cajones.',
  amenidades: ['Alberca con carril de nado', 'Pabellón culinario', 'Sport bar', 'Gimnasio', 'Co-work', 'Ludoteca con jardín'],
  url: 'https://www.gipgrupoinmobiliariodelpacifico.com/property/exclusivos-departamentos-de-lujo-sobre-calzada-del-valle-en-san-pedro',
  foto: 'exclusivos-departamentos-calzada-del-valle',
};
