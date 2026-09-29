// Contenido de Fuente de Piedra, tomado de su sitio (fuentedepiedra.mx): el clon, investigacion/crudo.json y la página
// en vivo revisada con curl el 2026-09-29 (de ahí sale el mapa de Google). No se inventó ningún dato: capacidad, metros,
// servicios y pies de foto son los de su sitio. No publica precios, horario de oficina ni testimonios.

export const negocio = {
  nombre: 'Fuente de Piedra',
  lema: 'Eventos Boutique',
  lugar: 'Tlajomulco de Zúñiga, Jalisco',
  direccion: 'Camino al Registro 122, Col. San Rafael, Tlajomulco de Zúñiga, Jal., C.P. 45645',
  telefono: { texto: '33 2781 5989', tel: '+523327815989' },
  whatsapp: '523327815989',
  correo: 'contacto@fuentedepiedra.mx',
  facebook: 'https://www.facebook.com/fuentedepiedraeventosgdl',
  instagram: 'https://instagram.com/fuentedepiedragdl',
  tiktok: 'https://www.tiktok.com/@fuentedepiedraeventos',
  mapa: 'https://www.google.com/maps/search/?api=1&query=20.533077,-103.511387',
  // El mismo mapa de Google que tiene su página de contacto.
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4443.287570916425!2d-103.5113874396073!3d20.533077155760743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5519d5fa3011%3A0xd5aaccfd9fedf7fc!2sCam.%20al%20Registro%20N%C2%B0%20122%2C%20San%20Rafael%2C%2045646%20Jal.!5e0!3m2!1ses!2smx!4v1760680431703!5m2!1ses!2smx',
  capacidad: 300,
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// El elemento memorable: la frase que se arma con sus opciones reales.
export const tiposEvento = [
  { id: 'boda', texto: 'nuestra boda' },
  { id: 'xv', texto: 'unos XV años' },
  { id: 'aniversario', texto: 'un aniversario' },
  { id: 'civil', texto: 'una ceremonia civil' },
  { id: 'otro', texto: 'otro tipo de evento' },
];

export type Espacio = { id: string; texto: string; foto: string; alt: string; pie: string; dato: string };
export const espaciosFrase: Espacio[] = [
  { id: 'explanada', texto: 'en la explanada techada', foto: 'boda-recepcion', alt: 'Recepción de noche en la explanada: mesas redondas con centros de flores, pista de cuadros blancos y negros y un techo de luces', pie: 'Boda Madelin y Carlos, agosto 2025', dato: 'Explanada de 600 m² con techo de 500 m² y vista al Bosque de la Primavera y a la ciudad.' },
  { id: 'jardin', texto: 'en el jardín', foto: 'ceremonia-jardin', alt: 'Ceremonia en el jardín: arco de madera con telas, mesa de firmas y sillas de madera sobre el pasto', pie: 'Ceremonia civil, abril 2025', dato: 'Jardín de 220 m² para uso diverso, rodeado de jardines de autor.' },
  { id: 'ambos', texto: 'en la explanada y el jardín', foto: 'aniversario-explanada', alt: 'Explanada techada de noche con mesas largas de madera, luces moradas y el muro de piedra al fondo', pie: 'Aniversario de boda, abril 2025', dato: 'Ceremonia en el jardín y recepción bajo el techo, sin salir del salón.' },
];

export const planes = [
  { id: 'todo', texto: 'el plan todo incluido' },
  { id: 'renta', texto: 'solo la renta del salón' },
];

export const siguientes = [
  { id: 'visita', texto: 'conocer el salón en persona' },
  { id: 'cotizacion', texto: 'recibir la cotización' },
];

export const cifras = [
  { valor: '300', texto: 'invitados' },
  { valor: '600 m²', texto: 'de explanada' },
  { valor: '150', texto: 'autos con valet' },
];

export type Lugar = { id: string; nombre: string; dato: string; texto: string; foto: string; alt: string };
export const lugares: Lugar[] = [
  { id: 'explanada', nombre: 'Explanada y gran recepción', dato: '600 m² · techo de 500 m²', texto: 'El salón de recepciones, con vista panorámica al Bosque de la Primavera y a la ciudad. Se transforma a tu gusto y atiende todo tipo de eventos, con horarios flexibles.', foto: 'aniversario-mesa', alt: 'Mesa larga de madera con sillas cruzadas, copas y centros de flores blancas junto al muro de piedra iluminado' },
  { id: 'jardin', nombre: 'Jardín', dato: '220 m²', texto: 'Jardín para uso diverso, entre jardines de autor e iluminación arquitectónica.', foto: 'fachada-lavanda', alt: 'El salón de muros de piedra al atardecer, con lavanda en primer plano y un olivo' },
  { id: 'fogata', nombre: 'Área de fogata', dato: 'Con vista al bosque', texto: 'Un rincón circular de piedra con fogata y vista hacia el Bosque de la Primavera.', foto: 'fogata', alt: 'Área de fogata circular de muros blancos y piedra, entre pastos altos, con las montañas al fondo' },
  { id: 'ingreso', nombre: 'Ingreso', dato: 'Iluminación arquitectónica', texto: 'El camino de entrada entre jardines, iluminado de noche.', foto: 'ingreso-noche', alt: 'Camino de entrada de noche entre árboles y jardines iluminados' },
];

export const suite = [
  { foto: 'suite-sala', alt: 'Suite de preparación con sala gris, sillones de madera, espejo y tocador', pie: 'Suite de preparación' },
  { foto: 'suite-tocador', alt: 'Tocador doble con espejos grandes, sillas negras altas y plantas', pie: 'Tocador doble' },
  { foto: 'suite-bano', alt: 'Baño completo de la suite con lavabo de madera y regadera de vidrio', pie: 'Baño completo' },
];

export const instalaciones = [
  { foto: 'fuente-pandurata', alt: 'Distribuidor de baños con una jardinera circular y un árbol al centro, cuadros y plantas', pie: 'Fuente Pandurata, distribuidor de baños de invitados' },
  { foto: 'banos-damas', alt: 'Baños de invitados: barra larga de lavabos blancos con espejos redondos y cubículos de madera', pie: 'Baños de invitados, damas' },
  { foto: 'distribuidor', alt: 'Entrada al distribuidor de baños, con un árbol al centro iluminado', pie: 'Distribuidor de baños de invitados' },
];

export const eventos = [
  { foto: 'boda-recepcion', alt: 'Recepción de boda de noche con techo de luces, pista de cuadros y mesas redondas con flores', pie: 'Boda Madelin y Carlos, agosto 2025' },
  { foto: 'aniversario-redonda', alt: 'Mesa redonda con candelabro de cristal, flores blancas y platos dorados, de noche', pie: 'Aniversario de bodas, abril 2025' },
  { foto: 'ceremonia-jardin', alt: 'Arco de madera con telas y sillas sobre el pasto del jardín', pie: 'Ceremonia civil, abril 2025' },
  { foto: 'aniversario-explanada', alt: 'Mesas largas bajo el techo de la explanada, con luces moradas', pie: 'Aniversario de boda, abril 2025' },
];

export const servicios = [
  'Planes todo incluido o solo renta',
  'Explanada de 600 m² y techo de 500 m² con vista al Bosque de la Primavera y la ciudad',
  'Área de fogata con vista al bosque',
  'Iluminación arquitectónica',
  'Suite de preparación con A/C, baño completo, sala, tocador, clóset y sofá cama',
  'Sanitarios de lujo para invitados, atendidos por su staff durante todo el evento',
  'Sanitarios exclusivos para el personal de servicio',
  'Estacionamiento privado para 150 autos con valet parking',
  'Accesibilidad universal y rampa',
  'Jardines de autor y jardín de 220 m²',
  'Bodega privada y cocina de banquetes de 75 m²',
  'Recomendaciones de wedding planner',
  'Staff del salón para supervisar montaje, evento y desmontaje',
  'Custodio en la puerta desde el inicio hasta el desmontaje',
  'Catering personalizado y selección de menú',
];

export const colaboradores = [
  { nombre: 'Monento', url: 'https://www.instagram.com/monento__/' },
  { nombre: 'Makers by Grace Cu', url: 'https://www.instagram.com/makers_bygracecu/' },
  { nombre: 'Merak Eventos', url: 'https://www.instagram.com/merak_eventos/' },
  { nombre: 'Boga Eventos', url: 'https://www.instagram.com/boga.eventos/' },
  { nombre: 'Fuziones Banquetes Gourmet', url: 'https://www.instagram.com/fuzionesbanquetesgourmet/' },
];
