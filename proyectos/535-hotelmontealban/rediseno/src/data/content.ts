// Contenido de Hotel Monte Albán. Todo sale de su sitio en vivo (hotelmontealban.com, revisado el 2026-09-29) y de
// investigacion/crudo.json; nada es inventado. Precios en pesos mexicanos, por noche y por habitación.

export const negocio = {
  nombre: 'Hotel Monte Albán',
  direccion: 'General Antonio de León 1, Centro, 68000 Oaxaca de Juárez, Oax.',
  whatsapp: '529513116838',
  whatsappTexto: '951 311 6838',
  telefono: '951 516 2330',
  telefonoLink: 'tel:+529515162330',
  correo: 'reservashotelmontealban@hotmail.com',
  mapa: 'https://maps.app.goo.gl/mBrjA2v17jFG2VG79',
  // El mismo mapa que usa su sitio (embed de Google Maps sin clave).
  mapaEmbed: 'https://maps.google.com/maps?q=Hotel+Monte+Alb%C3%A1n,+Alameda+de+Le%C3%B3n+1,+Centro,+68000+Oaxaca+de+Ju%C3%A1rez,+Oax.&t=&z=17&ie=UTF8&iwloc=&output=embed',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const habitaciones = [
  { id: 'sencilla', nombre: 'Sencilla', personas: '1 a 2 personas', precio: 1750, banos: 'Baño propio completo', foto: 'habitacion-sencilla.webp', alt: 'Habitación sencilla con cama matrimonial de cabecera de madera, colchas a rayas amarillas y puerta colonial de madera' },
  { id: 'triple', nombre: 'Triple', personas: '3 personas', precio: 2000, banos: 'Baño propio completo', foto: 'habitacion-triple.webp', alt: 'Habitación triple con dos camas, techo de vigas de madera y ventana con cortinas amarillas' },
  { id: 'cuadruple', nombre: 'Cuádruple', personas: '4 personas', precio: 2200, banos: 'Dos baños propios completos', foto: 'habitacion-cuadruple.webp', alt: 'Habitación cuádruple con dos camas, techo de vigas rojas, candil y balcón abierto con plantas' },
];

export const personaExtra = 250;
export const comodidades = ['Agua caliente 24/7', 'Caja fuerte digital', 'Wi-Fi en la habitación', 'Tragaluz de la época', 'Pisos de mosaico', 'Mesas de trabajo en el pasillo'];

// Zonas del plano de la casona (elemento memorable). Los textos resumen lo que dice su sitio.
export type Zona = { id: string; nombre: string; donde: string; texto: string[]; foto?: string; alt?: string; accion?: { texto: string; mensaje: string } };
export const zonas: Zona[] = [
  {
    id: 'entrada', nombre: 'La entrada', donde: 'Frente a la Catedral',
    texto: ['A menos de 30 pasos de la Catedral Metropolitana: saliendo de la recepción estás frente a su fachada mayor.', 'El Zócalo y la Alameda de León, Santo Domingo y los mercados 20 de Noviembre y Benito Juárez quedan a pie.'],
    foto: 'fachada.webp', alt: 'Fachada del Hotel Monte Albán de noche, con balcones de hierro, faroles y su letrero iluminado',
  },
  {
    id: 'patio', nombre: 'El patio central', donde: 'Planta baja',
    texto: ['Aquí se presenta la Guelaguetza: danzas, música en vivo y trajes típicos en una función íntima. $400 por boleto.', 'Hay función todos los días siempre que se vendan al menos 20 boletos.'],
    foto: 'guelaguetza-patio.webp', alt: 'Bailarinas con trajes típicos presentando la Guelaguetza en el patio del hotel, rodeado de arcos y mesas',
    accion: { texto: 'Reservar boletos', mensaje: 'Hola, deseo reservar boletos para el espectáculo de La Guelaguetza.' },
  },
  {
    id: 'restaurante', nombre: 'El restaurante', donde: 'Planta baja, alrededor del patio',
    texto: ['Cocina oaxaqueña de 8:00 a 22:00: chocolate de agua tradicional, tlayudas, tasajo y mole.', 'El desayuno se sirve diario en el restaurante y no está incluido en la tarifa.'],
  },
  {
    id: 'pasillos', nombre: 'Los pasillos', donde: 'Entre las arquerías',
    texto: ['Escritorios y mesas para huéspedes, para trabajar o leer entre los arcos coloniales.', 'Techos altos con vigas a la vista, tragaluces antiguos y arte de la casa.'],
  },
  {
    id: 'habitaciones', nombre: 'Las habitaciones', donde: 'Dos plantas, sin elevador',
    texto: ['16 habitaciones con pisos de mosaico, baño propio y tragaluz de la época.', 'El edificio conserva sus dos plantas originales; se sube por escaleras coloniales cortas y el equipo te ayuda con el equipaje.'],
  },
];

export const politicas = [
  { titulo: 'Sin anticipos', texto: 'Todo el pago se hace al llegar al hotel.' },
  { titulo: 'Mayores de 12 años', texto: 'El alojamiento es para huéspedes mayores de 12 años, para cuidar el descanso de la casona.' },
  { titulo: 'Pet friendly', texto: 'Tu mascota es bienvenida; en las áreas comunes, con correa.' },
  { titulo: 'Sin elevador', texto: 'Edificio histórico de dos plantas, con escaleras coloniales cortas y amplias.' },
];
