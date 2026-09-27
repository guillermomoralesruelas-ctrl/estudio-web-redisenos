// Contenido de Juan Camaney, tomado del sitio original: investigacion/crudo.json (Inicio, Reservar, Barbería,
// Servicios y Tienda) y comprobado con curl al sitio real el 2026-09-27. Nada inventado; lo redactado por nosotros
// (títulos, microcopy, textos de la rockola) está declarado en CAMBIOS.md. Las rutas de imagen son relativas a
// publicDir (../assets/web, hechas con fotos-web.mjs).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Juan Camaney',
  whatsapp: '529999029264', // "WA: 999 902 9264" en su inicio y en todos los pies de página
  whatsappVisible: '999 902 9264',
  telefono: '+529991317745', // "Teléfono: 999 131 77 45" en todos los pies de página
  telefonoVisible: '999 131 7745',
  correo: 'barberia@juancamaney.mx',
  direccion: 'Plaza Urban Center, Calle 37 215, Monterreal, 97133 Mérida, Yucatán',
  referencia: 'Frente a Boxito Kalia, en la plaza de Chedraui',
  mapa: 'https://goo.gl/maps/crrMAtNZFfhUFkH98',
  horario: 'Lunes a domingo, de 11:00 am a 9:00 pm',
  reservar: 'https://booksy.com/es-mx/dl/show-business/43316',
  instagram: 'https://www.instagram.com/juan_camaney_barberia/',
  facebook: 'https://www.facebook.com/juancamaneybarberia',
  youtube: 'https://www.youtube.com/channel/UCtybUcR8XyzmN4nTbvaNy0w',
  mercadoLibre: 'https://juancamaneybarberia.mercadoshops.com.mx/',
  franquicias: 'https://juancamaney.com/franquicia-barberia-mexico/',
  whatsappFranquicias: '527223671354',
  menuCompleto: 'https://juancamaney.com/servicios/',
  sitio: 'https://juancamaney.com/',
};

export const wa = (mensaje: string, numero = negocio.whatsapp) => `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, quiero agendar una cita en Juan Camaney.');

export type Foto = { src: string; w: number; h: number; alt: string };
const medidas: Record<string, [number, number]> = {"pomada-imperial":[720,720],"pomada-burguesa":[560,560],"pomada-revolucionaria":[560,560],"aceite-citrico":[560,560],"aceite-maderas":[560,560],"por-que":[320,335],"calavera":[150,150]};
export const f = (nombre: string, alt: string): Foto => ({ src: img(`${nombre}.webp`), w: medidas[nombre][0], h: medidas[nombre][1], alt });

export const calavera = f('calavera', '');
export const porQue = f('por-que', '');
export const portada = f('pomada-imperial', 'Lata abierta de Pomada Imperial de Juan Camaney, con su etiqueta de la calavera de sombrero');

// Sus tres servicios con precio publicados en el inicio ("Los precios están sujetos a cambios", página Servicios).
export const servicios = [
  {
    id: 'corte', nombre: 'Corte de cabello', precio: 325,
    texto: 'Desde un estilo clásico hasta un corte moderno, por uno de mis maestros barberos, que sin la menor duda, te harán la mejor recomendación.',
  },
  {
    id: 'afeitado', nombre: 'Afeitado tradicional', precio: 295,
    texto: 'Un rasurado al estilo Zaragoza, mi mítico e imperial afeitado más exclusivo con navaja libre, toalla caliente, toalla helada, limpieza facial y una exquisita selección de aceites, bálsamos y fragancias.',
  },
  {
    id: 'barba', nombre: 'Arreglo de barba', precio: 325,
    texto: 'Para lucir desde una prominente barba o hasta un revolucionario mostacho, es necesario afeitar, recortar, delinear y ajustar, un arte que dominamos a la perfección. Con toalla caliente, toalla fría y una selección de mis exclusivos productos.',
  },
] as const;

// Lo que hay en el club, según su página "Barbería" y "Servicios".
export const club = [
  { nombre: 'La barra', texto: 'Ven a tomar un trago en la barra o disfruta de tu bebida espirituosa predilecta mientras te atienden.' },
  { nombre: 'Pantalla de 80 pulgadas', texto: 'Solo se proyectan partidos y competiciones de primer nivel: fútbol, box, Fórmula 1 o cualquier otro deporte.' },
  { nombre: 'Mesa de billar', texto: 'Reta a tus amigos a una partida mientras esperas tu turno o después de tu servicio.' },
  { nombre: 'Boleo de calzado', texto: 'Un servicio de limpieza y brillo para darle un toque de elegancia a tus zapatos.' },
  { nombre: 'La boutique', texto: 'Pomadas, ceras, aceites y bálsamos, lociones y fragancias, artículos de colección y objetos de estilo de vida.' },
];

// "Selección musical": sus cinco listas de Spotify, tal como las enlaza su inicio.
export const listas = [
  { id: 'rock', nombre: 'Rock', url: 'https://open.spotify.com/playlist/2OgyG2Sx1euJ5RhiShAl6H' },
  { id: 'oldschool', nombre: 'Old School', url: 'https://open.spotify.com/playlist/15klYxXpmIFlJWSHmVHaVd' },
  { id: 'fonografo', nombre: 'Fonógrafo', url: 'https://open.spotify.com/playlist/6UWT4L7tnkeA9rfDxLBOX3' },
  { id: 'rockandroll', nombre: 'Rock & Roll', url: 'https://open.spotify.com/playlist/0lFX1SubodAocVP0A5QfLI' },
  { id: 'rockespanol', nombre: 'Rock en Español', url: 'https://open.spotify.com/playlist/4KVwaycMoRJEaDQGAafyJS' },
];

// Tienda: sus ocho productos con el precio de /tienda/. Solo cinco tienen foto en el clon.
export type Producto = { nombre: string; detalle: string; precio: number; url: string; foto?: Foto };
const prod = (slug: string) => `https://juancamaney.com/product/${slug}/`;
export const pomadas: Producto[] = [
  { nombre: 'Pomada «Imperial»', detalle: 'Extrafuerte', precio: 390, url: prod('pomada-para-cabello-imperial-extra-fuerte'), foto: f('pomada-imperial', 'Pomada Imperial extrafuerte, lata abierta') },
  { nombre: 'Pomada «Revolucionaria»', detalle: 'Fijación fuerte', precio: 440, url: prod('pomada-para-cabello-revolucionaria-anticaida-fijacion-fuerte'), foto: f('pomada-revolucionaria', 'Pomada Revolucionaria, lata abierta') },
  { nombre: 'Pomada «Burguesa»', detalle: 'Acabado mate', precio: 390, url: prod('pomada-para-cabello-burguesa-acabado-mate'), foto: f('pomada-burguesa', 'Pomada Burguesa de acabado mate, lata abierta') },
];
export const aceites: Producto[] = [
  { nombre: 'Aceite para barba, Elixir Original', detalle: 'Cítrico', precio: 290, url: prod('aceite-para-barba-elixir-original-citrico'), foto: f('aceite-citrico', 'Frasco gotero de aceite para barba Elixir Original, cítrico') },
  { nombre: 'Aceite para barba, Elixir Clásico', detalle: 'Maderas', precio: 290, url: prod('aceite-para-barba-maderas'), foto: f('aceite-maderas', 'Frasco gotero de aceite para barba Elixir Clásico, maderas') },
];
export const otros: Producto[] = [
  { nombre: 'Champú tradicional para barba y cabello', detalle: '', precio: 250, url: prod('champu-para-barba-y-cabello') },
  { nombre: 'Colonia de Antaño', detalle: 'Aftershave', precio: 330, url: prod('colonia-de-antano-aftershave') },
  { nombre: 'Poción Limpia Barba', detalle: 'Spray para la barba', precio: 150, url: prod('pocion-limpia-barba-spray-sanitizante-de-barba') },
];

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
