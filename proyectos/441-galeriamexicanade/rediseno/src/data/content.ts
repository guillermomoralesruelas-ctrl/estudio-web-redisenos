// Contenido de Galería Mexicana de Diseño, tomado de investigacion/crudo.json y de su sitio en vivo (inicio, colección y su
// catálogo en JSON de Squarespace, historia, diseñadores, interiorismo, curaduría y contacto; 2026-10-09). Nada inventado;
// textos del estudio en CAMBIOS.md. Las 38 piezas, con precio y existencias de ese día, están en piezas.json.
import piezasJson from './piezas.json';

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}.webp`;

export const negocio = {
  nombre: 'Galería Mexicana de Diseño',
  corto: 'GMD',
  direccion: 'Jalapa 30B, Roma Norte',
  ciudad: 'Ciudad de México',
  mapa: 'https://share.google/mwXKZmGoyApjaVQzH',
  telefono: '+52 55 5280 0080',
  telHref: 'tel:+525552800080',
  whatsapp: '525567843869',
  whatsappTxt: '55 6784 3869',
  correo: 'info@galeriamexicana.mx',
  instagram: 'https://www.instagram.com/g_mexicana/',
  instagramTxt: '@g_mexicana',
  tienda: 'https://www.galeriamexicana.mx/coleccion',
  // Su sitio publica dos horarios distintos: "Lun - Vie (10am - 7pm)" en el pie y "Lun - Vie (8am - 5pm)" en contacto.
  horario: 'Lunes a viernes',
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const portada = {
  titulo: 'Objetos y mobiliario de diseño mexicano contemporáneo',
  texto: 'Descubre piezas originales para tu hogar, oficina o colección, creadas por diseñadores mexicanos y seleccionadas por Galería Mexicana de Diseño.',
  casa: 'En el 2021, la Galería Mexicana de Diseño se muda a casa de su fundadora, Carmen Cordera, creando un espacio donde podrás encontrar una colección de diseño con más de 30 años de existencia así como nuevos productos y colaboraciones con diseñadores mexicanos.',
};

export const cifras = [
  { n: '1990', t: 'abrió la galería' },
  { n: '+750', t: 'diseñadores' },
  { n: '+150', t: 'exposiciones' },
  { n: '+85', t: 'marcas' },
  { n: '14', t: 'países' },
];

export type Pieza = {
  id: string; t: string; dis: string | null; cat: string | null; p: number; pmax: number; oferta: number | null;
  stock: number | null; med: string | null; desc: string; url: string;
};
export const piezas = piezasJson as Pieza[];
export const categorias = ['Objetos', 'Mobiliario', 'Luminaria', 'Textil'];

export const historia = [
  'La Galería Mexicana de Diseño (GMD) abrió en 1990 con un propósito claro: promover y profesionalizar el diseño en México. Fundada por Carmen Cordera Lascuráin, la GMD nació como una plataforma pionera para acercar diseñadores y público y mostrar objetos innovadores que marcaran el diseño local e internacional.',
  'Su curaduría reúne diseño artesanal, textil, joyería, gráfico, industrial, ambiental e interiorismo, convirtiéndose en un punto clave del diseño mexicano contemporáneo.',
  'Hoy la Galería Mexicana de Diseño sigue creciendo como un lugar clave para conocer, comprar y celebrar el diseño mexicano contemporáneo.',
];
export const carmen = 'Diseñadora industrial por la Universidad Iberoamericana, con estudios en Metodología del Diseño en ELISAVA (Barcelona). En 1979 comenzó como directora de Drafft Diseñadores Asociados y en 1990 fundó la Galería Mexicana de Diseño, el primer espacio en México dedicado a mostrar, promover y vender diseño nacional e internacional. Fue socia fundadora de Quórum, Consejo de Diseñadores de México, y su presidenta de 1995 a 1997.';

export const disenadores = [
  { n: 'Davit Nava', f: 'dis-davit', d: 'Licenciado en Ciencias Ambientales y escultor autodidacta; talla aves en maderas recuperadas de desastres naturales.' },
  { n: 'Paula Ramos', f: 'dis-paula', d: 'Diseñadora industrial por Centro. Apasionada de los colores y las transparencias.' },
  { n: 'Alejandra Meschoulam', f: 'dis-alejandra', d: 'Diseñadora industrial egresada de Centro; participó en Zona Maco 2024.' },
  { n: 'Héctor Esrawe', f: 'dis-hector', d: 'Fundador de Esrawe Studio y del Colectivo NEL; premios Quórum y Bienal de Diseño.' },
  { n: 'Blanca Arcos · BABA estudio', f: 'dis-blanca', d: 'Arquitecta; desde 2022 explora la madera y el acero para crear mobiliario artesanal con alma poética.' },
  { n: 'Natural Urbano', f: 'dis-natural', d: 'Estudio fundado en 2006 por Sebastián Beltrán y Lorena Márquez: objetos utilitarios, mobiliario y gráfica.' },
  { n: 'Isidro García', f: 'dis-isidro', d: 'Crea a mano detalladas figuras de alambre, como bichos y bicicletas.' },
  { n: 'Feltum', f: 'dis-feltum', d: 'Pepa Mendoza y Michael Fischer, arquitectos: soluciones acústicas con fieltros ecológicos.' },
  { n: 'And Jacob', f: 'dis-andjacob', d: 'Jacobo Muñoz y Alexander Brucilovsky crean productos junto a artesanos.' },
];

export const interiorismo = [
  { t: "D'Andrea Ristorante Mediterraneo", f: 'int-dandrea', tipo: 'Restaurante · San Miguel de Allende', u: 'residencial-villa-marea-dr557' },
  { t: 'Marea Villa 50', f: 'int-marea', tipo: 'Residencial, con Delfina Irigoin', u: 'residencial-villa-marea' },
  { t: 'Restaurante El Lago', f: 'int-lago', tipo: 'Comercial · cocina contemporánea', u: 'comercial-el-lago-chapultepec' },
  { t: 'Redit', f: 'int-redit', tipo: 'Oficinas · Interlomas', u: 'comercial-redit' },
  { t: 'Notaría Uno', f: 'int-notaria', tipo: 'Oficinas', u: 'comercial-notaria-uno' },
  { t: 'Casa de invitados', f: 'int-invitados', tipo: 'Residencial', u: 'residencial-guest-house' },
  { t: 'Sierra Ixtlán', f: 'int-ixtlan', tipo: 'Residencial', u: 'residencial-sierra-ixtlan' },
  { t: 'Casa Albaricoque', f: 'int-albaricoque', tipo: 'Hospitalidad', u: 'residencial-casa-albaricoque' },
  { t: 'Campos Eliseos', f: 'int-campos', tipo: 'Residencial', u: 'residencial-campos-eliseos' },
];
export const urlInt = (u: string) => `https://www.galeriamexicana.mx/interiorismo/${u}`;

export const curaduria = [
  { t: 'Milano in Messico', f: 'cur-milano', d: 'El trabajo de 10 diseñadores mexicanos presentes en el Salón del Mueble de Milán.', u: 'milano-in-messico' },
  { t: '20 años de la GMD', f: 'cur-20anos-libro', d: 'Retrospectiva de dos décadas, con libro conmemorativo y la línea 20/20.', u: 'aniversario-20' },
  { t: 'Se Vende Diseño', f: 'cur-sevende', d: 'XV aniversario de la galería, con 70 diseñadores y artistas.', u: 'aniversario-15-se-vende-diseno' },
  { t: 'Rojo en Talavera', f: 'cur-rojo', d: 'Cerámica utilitaria de Vicente Rojo, hecha en el taller Talavera de la Reyna.', u: 'rojo-en-talavera' },
  { t: 'Pirwi en Casa', f: 'cur-pirwi', d: 'Lanzamiento de Pirwi, mobiliario sustentable diseñado y fabricado en México.', u: 'pirwi-en-casa' },
  { t: 'Kozo Sato', f: 'cur-kozo', d: 'Diseño industrial japonés: objetos utilitarios y la colección Q&C.', u: 'kozo-sato' },
  { t: 'Sopa de Letras', f: 'cur-sopa', d: 'Laura Medina Mora rinde homenaje a la tipografía con una serie de haikus.', u: 'sopa-de-letras' },
  { t: 'Olama', f: 'cur-olama', d: 'Piezas versátiles y contemporáneas con excelente ingeniería de producto.', u: 'olama' },
  { t: 'Tapetes Mary S', f: 'cur-tapetes', d: 'Tapetes tejidos a mano en Teotitlán del Valle, Oaxaca.', u: 'tejidos-a-mano' },
  { t: 'Las Tres en Verano', f: 'cur-tresverano', d: 'Tres exposiciones simultáneas, con el Colectivo Nel y Tres Tintas Barcelona.', u: 'las-tres-en-verano' },
];
export const urlCur = (u: string) => `https://www.galeriamexicana.mx/curaduria/${u}`;

export const contactoTexto = 'Envíanos un mensaje para solicitar información sobre piezas, compras, proyectos, colaboraciones o visitas guiadas a la galería.';
