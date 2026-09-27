// Contenido de Estudio 184, tomado del sitio original (investigacion/original.html, que es su WordPress en vivo)
// y de su página de reservas en Slot (estudio184.com.mx/contact, horario). Regla: nada inventado.
// Las fotos son copias .webp de las propias del estudio (ver fotos-web.mjs); publicDir = ../assets/web.
import fotos from './fotos.json';

export type NombreFoto = keyof typeof fotos;
export const foto = (nombre: NombreFoto) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: fotos[nombre][0],
  height: fotos[nombre][1],
});

export type Sucursal = 'roma' | 'valle';

export const negocio = {
  nombre: 'Estudio 184',
  lema: 'Piercing & Custom Tattoo',
  direccion: 'Colima #184, Int. 101, Col. Roma Norte, Cuauhtémoc, C.P. 06700, CDMX',
  entreCalles: 'Entre Orizaba y Jalapa',
  telefono: '5547555123',
  telefonoVisible: '55 4755 5123',
  correo: 'estudio184@gmail.com',
  facebook: 'https://www.facebook.com/estudio184/',
  instagram: 'https://www.instagram.com/estudio184/',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Estudio+184%2C+Colima+184%2C+Roma+Norte%2C+06700+CDMX',
  reservaTatuaje: 'https://estudio184.com.mx/courses/estudio-184-tatuajes-br5fa6/',
  reservaPerforacion: 'https://estudio184.com.mx/courses/estudio-184-piercings-s4x707/',
};

export const sucursales: Record<Sucursal, { nombre: string; whatsapp: string; whatsappVisible: string; nota: string }> = {
  roma: { nombre: 'Roma', whatsapp: '525537152425', whatsappVisible: '55 3715 2425', nota: 'Colima #184, Roma Norte' },
  valle: { nombre: 'Del Valle', whatsapp: '525573744110', whatsappVisible: '55 7374 4110', nota: 'Dirección por confirmar: escríbenos' },
};

export const wa = (s: Sucursal, texto: string) => `https://wa.me/${sucursales[s].whatsapp}?text=${encodeURIComponent(texto)}`;
export const waGeneral = wa('roma', 'Hola, quiero información para un tatuaje o una perforación en Estudio 184.');

// Horario publicado en su página de reservas (Slot).
export const horario = [
  { dias: 'Lunes a jueves', horas: '11:00 a 19:00' },
  { dias: 'Viernes y sábado', horas: '11:00 a 20:00' },
  { dias: 'Domingo', horas: '13:00 a 18:00' },
];

export type Artista = { id: NombreFoto; nombre: string; oficio: 'tatuador' | 'perforador'; sucursales: Sucursal[]; invitado?: boolean; alt: string };

// Del menú de su sitio: quién está en Roma, en Del Valle y como invitado. Reeky (perforador en Roma y socio) no tiene foto.
export const artistas: Artista[] = [
  { id: 'renato', nombre: 'Renato Chido', oficio: 'tatuador', sucursales: ['roma'], alt: 'Tatuaje de una sirena esqueleto en línea negra sobre un muslo' },
  { id: 'stich', nombre: 'Stich de la Catrina', oficio: 'tatuador', sucursales: ['roma', 'valle'], alt: 'Tatuaje de un catrín esqueleto con sombrero y puro, en negro, sobre la pantorrilla' },
  { id: 'jonathan', nombre: 'Jonathan Luna Tattoo', oficio: 'tatuador', sucursales: ['roma'], alt: 'Manga completa de estilo japonés a color, vista desde cuatro ángulos' },
  { id: 'mario', nombre: 'Mario Sipaktli', oficio: 'tatuador', sucursales: ['roma'], alt: 'Tatuaje de un león con ojos azules dentro de un rombo, junto a un pequeño triángulo en círculo' },
  { id: 'marley', nombre: 'Marley Esquivel', oficio: 'tatuador', sucursales: ['roma', 'valle'], alt: 'Tatuaje a color de un plato de ramen con palillos y una ola dentro, en el antebrazo' },
  { id: 'kid', nombre: 'Kid', oficio: 'tatuador', sucursales: ['roma'], alt: 'Tatuaje en negro, estilo grabado, de un fauno con cuernos en el antebrazo' },
  { id: 'wilmar', nombre: 'Wilmar Rondón', oficio: 'tatuador', sucursales: ['roma'], invitado: true, alt: 'Tatuaje realista en negro y gris que cubre hombro y brazo' },
  { id: 'dulce', nombre: 'Dulce Sweetpiercer', oficio: 'perforador', sucursales: ['roma'], alt: 'Oreja con varias perforaciones: rook, hélix con un rayo, conch con una piedra verde y lóbulos' },
  { id: 'hector', nombre: 'Héctor Malas', oficio: 'perforador', sucursales: ['roma'], alt: 'Labio inferior con una perforación labret vertical' },
  { id: 'axayacatl', nombre: 'Axayácatl', oficio: 'perforador', sucursales: ['roma'], alt: 'Retrato de una joven con una perforación septum dorada en forma de V' },
];

export const zonasTatuaje = ['Antebrazo', 'Brazo', 'Hombro', 'Espalda', 'Pecho', 'Costillas', 'Pierna', 'Pantorrilla', 'Mano', 'Cuello', 'Otra'];
export const zonasPerforacion = ['Oreja', 'Nariz', 'Labio', 'Ceja', 'Ombligo', 'Otra'];

// Lo que dijo la prensa de ellos (bloque "Opiniones" de su portada), con su enlace original.
export const prensa = [
  { medio: 'MXCITY, Guía Insider', url: 'http://mxcity.mx/2014/09/estudios-de-tatuaje-para-adictos-a-la-tinta/', cita: 'Este legendario estudio es el lugar al que entrarás sin saber exactamente qué quieres y saldrás exactamente con lo que buscabas. Su regla de oro lo dice todo: “No copiar diseños”.' },
  { medio: 'Cultura Colectiva', url: 'http://culturacolectiva.com/7-estudios-de-tatuaje-en-el-d-f-que-debes-conocer/', cita: 'Estudio en el D.F. donde los tatuadores son verdaderos artistas.' },
  { medio: 'El Universal Destinos', url: 'http://archivo.eluniversal.com.mx/articulos/71291.html', cita: 'Al entrar a este taller se puede ver el desempeño de los tatuadores, una vitrina repleta de piercings y un mural muy femenino, creación de los artistas que aquí trabajan. Música alternativa, metal y rock a un volumen considerable, mientras los presentes calman los nervios, platican o miran catálogos.' },
  { medio: 'Querido México', url: 'http://querido.mx/cultura/estudio-184-el-arte-de-la-piel/4585', cita: 'En el corazón de la Colonia Roma, exactamente en la calle de Colima, entre Orizaba y Jalapa, se encuentra El Estudio 184. Son diferentes artistas, con estilos variados, los que ahí trabajan; sin embargo, todos ellos tienen algo que los une: el talento.' },
  { medio: 'LazyCobra', url: 'http://www.lazycobra.net/estudio-184/', cita: 'Obras únicas y especializadas que se funden con el cuerpo creando una sola idea en cada cliente. Esta no es una tienda, es un estudio.' },
  { medio: 'COC4INE', url: 'http://www.coc4ine.com/2014/07/estudio-184-tatuajes-y-algo-mas.html', cita: 'Justo en la calle Colima encuentras este particular edificio en el que dentro resguarda la creatividad de artistas plasmando obras hasta en el cuerpo.' },
  { medio: 'Zona Preferente', url: 'http://zonapreferente.com/estudio-184/', cita: 'Nos metimos a Estudio 184 y conocimos sobre los diseños, limpieza y cuidados que debes tener.' },
];
