// Contenido de Jungle Realtor, tomado de su sitio en vivo el 2026-10-10 (inicio en inglés y en español, about-us,
// contact-form y las páginas de Bacalar, Tulum, Playa del Carmen, Puerto Aventuras y Cancún). investigacion/crudo.json
// no tiene textos: Jina chocó con un reto anti-bot. Nada inventado; textos del estudio en CAMBIOS.md.
// Los títulos de las propiedades se pasaron al español a partir de sus títulos (en su sitio en español van cortados).

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}.webp`;

const SITIO = 'https://junglerealtor.com';

export const negocio = {
  nombre: 'Jungle Realtor',
  lema: 'Bienvenido a la Jungla, déjanos guiarte',
  zona: 'Tulum, Playa del Carmen, Puerto Aventuras y Bacalar',
  whatsapp: '529841361005',
  telTxt: '+52 984 136 1005',
  telHref: 'tel:+529841361005',
  correo: 'info@junglerealtor.com',
  sitio: SITIO,
  buscar: `${SITIO}/real-estate-search/`,
  guia: `${SITIO}/download-the-buyers-guide/`,
  avisos: `${SITIO}/new-listings-notification/`,
  facebook: 'https://www.facebook.com/JungleRealtor',
  instagram: 'https://www.instagram.com/junglerealtor',
  x: 'https://twitter.com/jungle_realtor',
  // Perfil de Google de sus reseñas (el mismo que muestra su sitio); no publican una dirección.
  mapa: 'https://www.google.com/maps/place/?q=place_id:ChIJf4_5eSXRT48RcIx5lOtlGgc',
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const intro = 'Descubre las ventajas de invertir en desarrollos residenciales en pre-construcción, donde tu retorno de inversión es significativamente mayor: urbanizaciones frente al mar y complejos turísticos en las zonas más de moda, como Playa del Carmen, Tulum y Puerto Aventuras.';

export type Tipo = 'terreno' | 'condominio' | 'casa';
export type Destino = 'cancun' | 'playa' | 'puerto' | 'tulum' | 'bacalar' | 'cuyo';

export const destinos: { id: Destino; t: string; foto?: string; d: string; url: string; x: number; y: number }[] = [
  { id: 'cuyo', t: 'El Cuyo, Yucatán', d: 'Costa norte de Yucatán.', url: `${SITIO}/all-riviera-maya-real-estate/`, x: 118, y: 46 },
  { id: 'cancun', t: 'Cancún', d: 'Playas del Caribe y vida de ciudad, con servicios de primer nivel.', url: `${SITIO}/cancun-real-estate/`, x: 262, y: 84 },
  { id: 'playa', t: 'Playa del Carmen', foto: 'destino-playa-del-carmen', d: 'Arena blanca, agua cristalina y calles con vida: desde torres con vista al mar hasta residencias boutique.', url: `${SITIO}/playa-del-carmen-real-estate/`, x: 232, y: 176 },
  { id: 'puerto', t: 'Puerto Aventuras', foto: 'destino-puerto-aventuras', d: 'Comunidad cerrada con marina y campos de golf, tranquila y con todo cerca.', url: `${SITIO}/puerto-aventuras-real-estate/`, x: 214, y: 214 },
  { id: 'tulum', t: 'Tulum', foto: 'destino-tulum', d: 'Ruinas mayas, cenotes y el Caribe turquesa; condominios pensados con sustentabilidad.', url: `${SITIO}/tulum-real-estate/`, x: 192, y: 254 },
  { id: 'bacalar', t: 'Bacalar', foto: 'destino-bacalar', d: 'La Laguna de los Siete Colores: condominios con vista panorámica y casas entre la selva.', url: `${SITIO}/bacalar-real-estate/`, x: 112, y: 404 },
];

export type Propiedad = {
  mls?: string; t: string; lugar: string; destino: Destino; tipo: Tipo; precio: number;
  rec?: number; banos?: number; m2?: number; foto: string; alt: string; url: string; nueva?: boolean;
};

const R = (s: string) => `${SITIO}/real-estate/${s}/`;
// Precios en USD tal como los publica su inicio en inglés el 2026-10-10. Las superficies que su sitio marca en "Sq. Ft."
// con valores imposibles (p. ej. 252 ft² para 4 recámaras) no se muestran; ver OPORTUNIDADES.md.
export const propiedades: Propiedad[] = [
  { mls: 'LTCUYJR', t: 'Terreno en El Cuyo, Yucatán, a 130 m de la playa', lugar: 'El Cuyo, Yucatán', destino: 'cuyo', tipo: 'terreno', precio: 240000, foto: 'p-ltcuyjr', alt: 'Vista aérea de El Cuyo con su muelle largo y el mar turquesa', url: R('land-for-sale-in-el-cuyo-yucatan-130m-from-the-beach'), nueva: true },
  { mls: 'BACLT21', t: 'Terreno de 1 acre frente a la laguna de Bacalar', lugar: 'Bacalar', destino: 'bacalar', tipo: 'terreno', precio: 349000, foto: 'p-baclt21', alt: 'Orilla de la laguna de Bacalar con selva y agua verde turquesa', url: R('prime-bacalar-waterfront-lot-1-acre-on-the-lagoon') },
  { mls: 'MUNTULUM301', t: 'Penthouse en Tulum con alberca privada', lugar: 'Tulum', destino: 'tulum', tipo: 'condominio', precio: 276000, rec: 3, banos: 3, m2: 141.14, foto: 'p-muntulum301', alt: 'Recámara abierta a una terraza de madera con vista a la selva de Tulum', url: R('63922') },
  { mls: 'KAYBLOTJUNGRE', t: 'Terreno residencial en comunidad cerrada a la entrada de Tulum', lugar: 'Tulum', destino: 'tulum', tipo: 'terreno', precio: 182857, foto: 'p-kayblotjungre', alt: 'Alberca grande frente a un edificio con techo de palma, entre la selva de Tulum', url: R('residential-land-for-sale-in-tulum-mexico-%c2%b7-gated-community-investment-at-tulum-entrance') },
  { mls: 'LOT2MAYAKANABAC', t: 'Gran terreno residencial en Bacalar', lugar: 'Bacalar', destino: 'bacalar', tipo: 'terreno', precio: 127288, foto: 'p-lot2mayakanabac', alt: 'Casa club con techo de dos aguas y alberca entre la selva de Bacalar', url: R('stunning-2br-eco-villa-for-sale-near-bacalars-lagoon') },
  { mls: 'LOTE8MAYAKANABAC', t: 'Terreno residencial en el centro de Bacalar', lugar: 'Centro, Bacalar', destino: 'bacalar', tipo: 'terreno', precio: 101563, foto: 'p-lote8mayakanabac', alt: 'Villas con techo de palma a lo largo de un andador iluminado, en Bacalar', url: R('luxury-2br-private-rooftop-pool-eco-villa-near-bacalar-lagoon') },
  { mls: 'VILLESC23TUL', t: 'Villa de 3 recámaras con alberca privada, en reventa', lugar: 'La Veleta, Tulum', destino: 'tulum', tipo: 'casa', precio: 419000, rec: 3, banos: 2, m2: 335.94, foto: 'p-villesc23tul', alt: 'Villa de madera oscura con una alberca larga y camastros en La Veleta, Tulum', url: R('exclusive-resale-opportunity-stunning-3-bedroom-villa-with-private-pool-nestled-in-nature-in-tulum') },
  { mls: 'ALKAVENA302BAC', t: 'Penthouse de 3 recámaras con jardín en la laguna de Bacalar', lugar: 'Bacalar', destino: 'bacalar', tipo: 'condominio', precio: 487303, rec: 3, banos: 2, m2: 261.05, foto: 'p-alkavena302bac', alt: 'Edificios escalonados con jardines entre la selva y la laguna de Bacalar al fondo', url: R('bacalar-lagoon-penthouse') },
  { t: 'Casa de 4 recámaras en la selva, llave en mano, en reventa', lugar: 'Tulum', destino: 'tulum', tipo: 'casa', precio: 390000, rec: 4, banos: 4, foto: 'p-tulum-4br', alt: 'Casa de dos niveles con muros blancos y jardín de palmas en Tulum', url: R('great-opportunity-resale-of-beautiful-turnkey-4-br-jungle-home-in-tulum') },
  { t: 'Villa de 2 recámaras llave en mano, en reventa', lugar: 'Tulum', destino: 'tulum', tipo: 'casa', precio: 410000, rec: 2, banos: 2, foto: 'p-tulum-2br', alt: 'Comedor de madera y sala con ventanales en una villa de Tulum', url: R('fantastic-opportunity-re-selling-an-exclusive-turnkey-2-br-villa-in-tulum') },
  { mls: 'ONIRIC-INSP201TUL', t: 'Oniric Tulum: condominio de 1 recámara llave en mano', lugar: 'Región 8, Tulum', destino: 'tulum', tipo: 'condominio', precio: 174770, rec: 1, banos: 1, m2: 69.11, foto: 'p-oniric-insp201tul', alt: 'Vista hacia abajo de una alberca circular dentro de Oniric Tulum', url: R('oniric-tulum-unique-exclusive-1br-garden-condos-for-sale-in-tulum') },
  { t: 'Villa de 2 recámaras con terraza y balcón', lugar: 'Bacalar', destino: 'bacalar', tipo: 'casa', precio: 200000, rec: 2, banos: 2, m2: 87, foto: 'p-bacalar-2br', alt: 'Villa blanca de dos niveles con ventanales entre la vegetación de Bacalar', url: R('stunning-2-br-villa-with-terrace-and-balcony-for-sale-in-magical-bacalar') },
  { mls: 'ONIRICLIBPH', t: 'Oniric Tulum: penthouse de 3 recámaras', lugar: 'Tulum', destino: 'tulum', tipo: 'condominio', precio: 411429, rec: 3, banos: 3, m2: 249.78, foto: 'p-oniriclibph', alt: 'Alberca con muros de celosía en el desarrollo Oniric Tulum', url: R('oniric-tulum-marvelous-ph-in-tulum-surreal-living') },
  { mls: 'ONLIB201TUL', t: 'Oniric Tulum: 3 recámaras con alberca privada', lugar: 'Tulum', destino: 'tulum', tipo: 'condominio', precio: 299000, rec: 3, banos: 3, m2: 136.25, foto: 'p-onlib201tul', alt: 'Interior de lobby con muros de piedra y luz cálida en Oniric Tulum', url: R('oniric-tulum-incredible-3br-condo-with-private-pool') },
  { mls: 'ONIRICLIB101', t: 'Oniric Tulum: condominio de 3 recámaras con alberca privada', lugar: 'Tulum', destino: 'tulum', tipo: 'condominio', precio: 322857, rec: 3, banos: 2, m2: 150.89, foto: 'p-oniriclib101', alt: 'Vista aérea del edificio circular de Oniric Tulum entre la selva', url: R('oniric-tulum-surreal-3br-condo-with-private-pool-great-location') },
  { mls: 'ZAN1002TUL', t: 'Estudio junto a la alberca, llave en mano', lugar: 'Tulum', destino: 'tulum', tipo: 'condominio', precio: 188571, rec: 1, banos: 1, foto: 'p-zan1002tul', alt: 'Estudio con terraza, camastros y alberca entre muros de piedra en Tulum', url: R('incredible-poolside-studio-available-in-tulum-completely-turnkey-and-ready-for-you-to-move-in') },
  { mls: 'MAN3BRLK', t: 'Condominio con lock-off en Cumbres', lugar: 'Cumbres, Cancún', destino: 'cancun', tipo: 'condominio', precio: 470891, foto: 'p-man3brlk', alt: 'Torres residenciales iluminadas al atardecer con jardín y alberca en Cancún', url: R('3br-condo-with-lock-off-for-sale-cancun') },
  { mls: 'BLW101BAC', t: 'Departamento de 2 recámaras con vista a la laguna', lugar: 'Laguna, Bacalar', destino: 'bacalar', tipo: 'condominio', precio: 260761, rec: 2, m2: 106.25, foto: 'p-blw101bac', alt: 'Edificio moderno con terrazas y palmeras en Bacalar', url: R('marvelous-2-br-apartment-for-sale-in-bacalar-with-the-best-lagoon-view') },
  { mls: 'TSL246', t: 'Penthouse llave en mano, un oasis tropical', lugar: 'Tulum', destino: 'tulum', tipo: 'condominio', precio: 190286, rec: 1, banos: 1, m2: 79, foto: 'p-tsl246', alt: 'Fachada color arena con ventanas en arco y plantas en un desarrollo de Tulum', url: R('alluring-ph-in-tulum-tropical-oasis') },
];

export const equipo = [
  { n: 'Sebastian Papworth', r: 'Director asociado de Ventas y Marketing', c: 'sebastian@junglerealtor.com', f: 'equipo-sebastian' },
  { n: 'Ana Castillo', r: 'Directora asociada de Ventas y Marketing', c: 'ana@junglerealtor.com', f: 'equipo-ana-castillo' },
  { n: 'Paola Castillo', r: 'Coordinadora general', c: 'paola@junglerealtor.com', f: 'equipo-paola-castillo' },
  { n: 'Salvador Torres', r: 'Gerente general', c: 'salvador@junglerealtor.com', f: 'equipo-salvador' },
  { n: 'Alejandro Nava', r: 'Asesor inmobiliario', c: 'alejandro@junglerealtor.com', f: 'equipo-alejandro' },
  { n: 'Ana Elisa Lopez', r: 'Asesora inmobiliaria', c: 'elisa@junglerealtor.com', f: 'equipo-ana-elisa' },
  { n: 'Mark Niesl', r: 'Asesor inmobiliario', c: 'mark@junglerealtor.com', f: 'equipo-mark' },
  { n: 'Ricardo Ruiz', r: 'Asesor inmobiliario', c: 'ricardo@junglerealtor.com', f: 'equipo-ricardo' },
];

// Reseñas de Google que muestra su inicio (fragmentos textuales, en el idioma original).
export const resenas = [
  { a: 'Claudia G.', t: 'She made everything feel simple and stress-free, and we always felt like she genuinely had our family’s best interest at heart.' },
  { a: 'Mirna G.', t: 'They are wonderful people who truly care about your investment, your assets, and your life experience when purchasing a property in the Mexican Caribbean.' },
  { a: 'James D.', t: 'Mark showed me a variety of land options that he thought I would consider, and he offered me valuable advice on how to best buy land in Tulum.' },
  { a: 'Shadi Kiarash Olad S.', t: 'He would vet the developers of different projects, to make sure that we only deal with the ones that are reliable, and trustworthy.' },
];
