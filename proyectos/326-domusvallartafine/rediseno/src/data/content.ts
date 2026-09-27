// Contenido de DOMUS Vallarta Fine Real Estate, tomado del sitio original (clon en ../sitio, investigacion/crudo.json,
// investigacion/original.html) y de sus páginas Vender y Contacto (curl, 2026-09-27).
// Regla: nada inventado. Lo pendiente está anotado en CAMBIOS.md.
// Las rutas de imagen son relativas a publicDir (../assets/web, copias .webp hechas con fotos-web.mjs).
// propiedades.json: sus 114 propiedades de "Búsqueda por mapa". Tipo, recámaras, baños, precio, moneda y ficha salen de
// la variable arrayListings de original.html; ubicación, m² y foto, de la tarjeta de cada una en crudo.json.
import listado from './propiedades.json';
import medidas from './fotos.json';

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export type Tipo = 'casa' | 'depa' | 'lote';
export type Moneda = 'MXN' | 'USD';
export type Propiedad = {
  id: number; nombre: string; tipo: Tipo; ubicacion: string; zona: string; m2: number;
  rec: number; banos: number; precio: number; moneda: Moneda; url: string; foto: string;
};
export type Foto = { src: string; w: number; h: number; alt: string };

export const propiedades = listado as Propiedad[];
const tam = medidas as unknown as Record<string, [number, number]>;
export const fotoDe = (p: Propiedad): Foto => {
  const [w, h] = tam[p.id] ?? [600, 400];
  return { src: img(`p/${p.id}.webp`), w, h, alt: `${p.nombre}, ${p.ubicacion}` };
};
export const porId = (id: number) => propiedades.find((p) => p.id === id)!;

export const negocio = {
  nombre: 'DOMUS Vallarta Fine Real Estate',
  sitio: 'https://domusvallarta.com/',
  // No publica WhatsApp: se usa el teléfono de la oficina de Bucerías (pendiente de confirmar).
  whatsapp: '523296887509',
  telefono: '(329) 688 7509',
  telLink: '+523296887509',
  instagram: 'https://www.instagram.com/domus_vallarta/',
  facebook: 'https://www.facebook.com/DomusVallartaInmobiliaria',
  tiktok: 'https://www.tiktok.com/@domusvallartainmo',
  descripcion: 'Domus Vallarta Inmobiliaria es su elección número uno para comprar y vender bienes raíces en Puerto Vallarta y Riviera Nayarit. Descubra una amplia selección de propiedades, como casas, villas, terrenos, condominios y desarrollos inmobiliarios.',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, vi su sitio y me interesa una propiedad en Puerto Vallarta o Riviera Nayarit. ¿Me pueden asesorar?');
export const waVender = wa('Hola, quiero vender mi propiedad con Domus Vallarta. ¿Podemos platicar?');

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const oficinas = [
  {
    ciudad: 'Bucerías',
    lineas: ['Lázaro Cárdenas #84 L-2, Colonia Dorada,', 'Bucerías, Bahía de Banderas, Nayarit, C.P. 63732'],
    telefonos: [['+52 (329) 688 7509', '+523296887509']],
    mapa: maps('Lázaro Cárdenas 84, Colonia Dorada, Bucerías, Nayarit 63732'),
  },
  {
    ciudad: 'Puerto Vallarta',
    lineas: ['Blvd. Fco. Medina Ascencio #2485, Int. C-07,', 'Plaza Peninsula, Zona Hotelera Norte, Puerto Vallarta, Jalisco, CP 48333'],
    telefonos: [['+52 (322) 115 5040', '+523221155040']],
    mapa: maps('Plaza Peninsula, Blvd. Francisco Medina Ascencio 2485, Puerto Vallarta, Jalisco 48333'),
  },
  {
    ciudad: 'Guadalajara',
    lineas: ['Mar Egeo Interior 1428-2, Colonia Country Club,', 'Guadalajara, Jalisco, CP 44610'],
    telefonos: [['+52 (333) 817 5022', '+523338175022'], ['+52 (333) 817 5025', '+523338175025']],
    mapa: maps('Mar Egeo 1428, Country Club, Guadalajara, Jalisco 44610'),
  },
];
export const mapaPrincipal = oficinas[0].mapa;

// "La mejor asesoría del mercado a tu alcance" (portada).
export const cifras: [string, string][] = [
  ['29', 'desarrollos vendidos'],
  ['39', 'asesores en inversiones inmobiliarias'],
  ['1,442', 'propiedades vendidas'],
];

// "Encuentra el mejor lugar para ti": las cinco de su portada. "Ajuste de precio" es su etiqueta.
export const seleccion = [
  { id: 34, nota: '' },
  { id: 112, nota: 'Ajuste de precio' },
  { id: 39, nota: '' },
  { id: 18, nota: '' },
  { id: 25, nota: 'Ajuste de precio' },
];

// "Desarrollo Destacado" de su portada, con su precio "Departamentos desde".
export const preventas = [
  { nombre: 'MCS Fluvial', lugar: 'Puerto Vallarta, Jalisco', desde: '$4,650,000 MXN', url: 'https://domusvallarta.com/desarrollo/mcs-fluvial-departamentos-en-preventa-en-puerto-vallarta' },
  { nombre: 'Quinta San Miguel Ocean & Canal', lugar: 'Bahía de Banderas, Nayarit', desde: '$10,460,000 MXN', url: 'https://domusvallarta.com/desarrollo/quinta-san-miguel-canal' },
  { nombre: 'Harbor171, Torre Norte', lugar: 'Puerto Vallarta, Jalisco', desde: '$556,713 USD', url: 'https://domusvallarta.com/desarrollo/harbor-171-torre-norte' },
  { nombre: 'The One Residences', lugar: 'Bahía de Banderas, Nayarit', desde: '$6,600,000 MXN', url: 'https://domusvallarta.com/desarrollo/condos-vista-al-mar-the-one-bucerias' },
  { nombre: 'Espacio Marina & Golf', lugar: 'Puerto Vallarta, Jalisco', desde: '$4,245,989 MXN', url: 'https://domusvallarta.com/desarrollo/espacio-marina-golf-nuevos-condominios-en-preventa' },
  { nombre: 'Tridenta Towers', lugar: 'Puerto Vallarta, Jalisco', desde: '$5,469,376 MXN', url: 'https://domusvallarta.com/desarrollo/tridenta-towers-nueva-preventa-de-condominios-frente-al-mar-en-puerto-vallarta' },
  { nombre: 'Mar de Plata', lugar: 'Bucerías, Nayarit', desde: '$6,900,000 MXN', url: 'https://domusvallarta.com/desarrollo/mar-de-plata-bucerias-condominios-de-lujo-en-zona-dorada' },
];
export const preventasUrl = 'https://domusvallarta.com/comprar-propiedades/desarrollos-inmobiliarios';
export const inventarioUrl = 'https://domusvallarta.com/propiedades-en-venta-vallarta-riviera-nayarit';

// Página Vender (https://domusvallarta.com/vender-propiedades).
export const vender = {
  titulo: 'Deja tu propiedad en nuestras manos y nosotros nos encargamos de lo demás',
  texto: 'Es importante para ambos el confiarnos tan delicada misión; conocer los motivos que te animan a la venta de tu propiedad, volcar nuestra experiencia para determinar el valor del mercado recomendable, revisar tus escenarios fiscales y así prepararnos para vender.',
  fortalezas: [
    ['Disponemos de más de 30 agentes', 'especializados en diferentes segmentos del mercado, que genera un mayor alcance.'],
    ['Brindamos asesoría legal', 'y financiera.'],
    ['Intermediamos para que obtengas', 'la mejor oferta.'],
    ['Velamos por tu seguridad', 'durante toda la operación.'],
    ['Publicamos las propiedades', 'a través de plataformas digitales (marketing digital).'],
    ['Ahorramos tiempo', 'en todos los procesos para una venta efectiva.'],
    ['Compartimos nuestros listados', 'en diferentes portales especializados en negocios y bienes raíces, y así logramos mayor alcance con agentes inmobiliarios y cliente final.'],
  ] as [string, string][],
  portales: ['ampi.org', 'flexmls.com', 'nar.realtor', 'worldproperties.com'],
  revistas: ['Property Journal', 'Vallarta Real Estate Guide'],
};

export const afiliados = [
  { src: img('ampi.png'), alt: 'AMPI', w: 100, h: 100, clase: 'h-12' },
  { src: img('realtor.svg'), alt: 'National Association of Realtors', w: 468, h: 112, clase: 'h-8' },
  { src: img('mls.svg'), alt: 'MLS Vallarta', w: 87, h: 50, clase: 'h-10' },
  { src: img('flexmls.png'), alt: 'Flex MLS', w: 150, h: 44, clase: 'h-8' },
];
