// Contenido de Casa Pitic. Todo sale de su sitio (investigacion/crudo.json: inicio, Suite Pitic, Suite Kino, El Barrio
// y Eventos); nada es inventado. Precios en pesos mexicanos, sin IVA, para reserva directa.

export const negocio = {
  nombre: 'Casa Pitic',
  direccion: 'Roman Yocupicio 35A, Colonia Pitic, Hermosillo, Sonora',
  whatsapp: '5216626003838',
  whatsappTexto: '662 600 3838',
  correo: 'hola@casapitic.mx',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Roman Yocupicio 35A, Colonia Pitic, Hermosillo, Sonora'),
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Suite = {
  id: string; nombre: string; planta: string; resumen: string; ideal: string;
  desde: number; mes: number; recamaras: number; banos: string; m2: number; acceso: string; terraza: boolean;
  amenidades: string[]; fotos: { foto: string; alt: string }[];
};

export const suites: Suite[] = [
  {
    id: 'kino', nombre: 'Suite Kino', planta: 'Planta alta',
    resumen: 'Un baño en lugar de dos, y a cambio la terraza privada, más metros y la tarifa más accesible de la casa. Es la que rentan quienes se quedan un mes o más.',
    ideal: 'Estancias de un mes o más, y quien prioriza terraza y presupuesto sobre el segundo baño.',
    desde: 1250, mes: 28000, recamaras: 2, banos: '1 baño', m2: 140, acceso: 'Puerta propia por escalera desde el patio', terraza: true,
    amenidades: ['Terraza privada con vista', 'Sala de estar independiente'],
    fotos: [
      { foto: 'kino-terraza.webp', alt: 'Terraza privada de Suite Kino con pérgola de teja, mesa redonda y sillas de hierro' },
      { foto: 'kino-entrada.webp', alt: 'Escalera de acceso a Suite Kino junto al patio, con fuente de cantera y techos de teja' },
    ],
  },
  {
    id: 'pitic', nombre: 'Suite Pitic', planta: 'Planta baja',
    resumen: 'Sin escaleras y con dos baños privados: cada recámara tiene el suyo. La que recomiendan cuando viajan dos ejecutivos que no quieren compartir baño, o una familia que necesita espacio.',
    ideal: 'Dos ejecutivos que necesitan baño propio, familias, y quien prefiera evitar escaleras.',
    desde: 1400, mes: 32000, recamaras: 2, banos: '2 baños privados', m2: 120, acceso: 'Puerta propia desde el patio', terraza: false,
    amenidades: ['Sin escaleras', 'Cochera techada'],
    fotos: [
      { foto: 'pitic-sala.webp', alt: 'Sala de Suite Pitic con sillones blancos, mesa de centro de vidrio y piso de madera' },
      { foto: 'pitic-cocina.webp', alt: 'Cocina de Suite Pitic con gabinetes de madera, isla de granito y estufa de seis quemadores' },
      { foto: 'pitic-recamara.webp', alt: 'Recámara de Suite Pitic con cama matrimonial, banca al pie y ventilador de techo' },
    ],
  },
];

export const amenidadesComunes = ['Espacio de trabajo dedicado', 'WiFi de alta velocidad', 'Cocina completa con utensilios', 'Smart TV', 'Aire acondicionado', 'Lavadora y secadora', 'Ropa de cama hotelera'];

export const reglas = [
  { titulo: 'Llegada y salida', texto: 'Check-in 15:00 y check-out 11:00. Entrega de llaves en persona; la hora se coordina por WhatsApp.' },
  { titulo: 'Capacidad', texto: 'Hasta 4 personas por suite; 8 con las dos. Visitantes adicionales, con aviso previo.' },
  { titulo: 'La casa', texto: 'No se fuma dentro, no mascotas, no fiestas ni eventos. Silencio de 22:00 a 8:00.' },
  { titulo: 'Factura', texto: 'Facturación CFDI a solicitud y tarifas corporativas para estancias largas.' },
];

export const distancias = [
  { lugar: 'Parque La Pitic', tiempo: '1 min' },
  { lugar: 'Café 57', tiempo: '3 min' },
  { lugar: 'Centro histórico', tiempo: '5-7 min' },
  { lugar: 'Hospital San José', tiempo: '5-7 min' },
  { lugar: 'Expogan Sonora', tiempo: '10 min' },
  { lugar: 'Aeropuerto HMO', tiempo: '15-20 min' },
  { lugar: 'Ford HSAP', tiempo: '15-20 min' },
  { lugar: 'Estadio Fernando Valenzuela', tiempo: '18-22 min' },
];

export const eventos = [
  { nombre: 'Congreso Minero Internacional de Sonora', fecha: '9 al 14 de noviembre de 2026' },
  { nombre: 'Serie del Caribe 2027', fecha: 'Primera semana de febrero de 2027' },
];
