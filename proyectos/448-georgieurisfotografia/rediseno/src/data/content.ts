// Contenido de Georgie Uris, tomado de su sitio en vivo el 2026-10-10 (inicio, info, retrato, moda, publicidad y retrato
// para empresas). Nada inventado; textos del estudio en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}.webp`;

export const negocio = {
  nombre: 'Georgie Uris',
  oficio: 'Fotógrafo de retrato, moda y publicidad',
  ciudad: 'Ciudad de México',
  whatsapp: '525540475427',
  telTxt: '+52 55 4047 5427',
  telHref: 'tel:+525540475427',
  telEspana: '+34 610 810 566',
  correo: 'mail@georgieuris.com',
  instagram: 'https://www.instagram.com/georgie.uris',
  facebook: 'https://www.facebook.com/Georgie.Uris.fotografo.retrato.moda',
  director: 'https://georgieuris.com/director/',
  blog: 'https://georgieuris.com/blog/',
  // No publica la dirección de su estudio; el enlace busca su nombre en la ciudad.
  mapa: 'https://www.google.com/maps/search/?api=1&query=Georgie+Uris+fot%C3%B3grafo+Ciudad+de+M%C3%A9xico',
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const intro = 'En mi trabajo como fotógrafo de retrato, la verdadera belleza reside en la autenticidad. Persigo retratar emociones genuinas y la esencia única de cada individuo.';

// "Elige tu luz": los nombres de luz salen de los nombres de sus fotos de retrato (luz natural, luz de proyector,
// primerísimo primer plano); "Color y sombra" y "Blanco y negro" describen las otras dos fotos.
export const luces = [
  { id: 'natural', t: 'Luz natural', f: 'luz-natural', alt: 'Retrato de una mujer con suéter verde, iluminada de lado por luz natural sobre fondo oscuro', d: 'Suave y de lado, como la de una ventana. La piel se ve como es.' },
  { id: 'proyector', t: 'Luz de proyector', f: 'luz-proyector', alt: 'Retrato con franjas de luz de colores proyectadas sobre una persona y su sombra en la pared', d: 'Franjas y colores proyectados sobre ti y tu sombra. Para quien quiere una imagen que no se olvide.' },
  { id: 'color', t: 'Color y sombra', f: 'luz-color', alt: 'Retrato de una mujer con la cara iluminada en rojo y verde', d: 'Luces de color y mucha sombra: más dramático, más editorial.' },
  { id: 'cerca', t: 'Primerísimo primer plano', f: 'primer-plano', alt: 'Retrato en blanco y negro muy cerrado del rostro de una mujer mirando a cámara', d: 'Solo la mirada. Nada distrae.' },
  { id: 'bn', t: 'Blanco y negro', f: 'madre-hija-bn', alt: 'Retrato en blanco y negro de una madre abrazando a su hija', d: 'Sin color, queda lo que se siente.' },
] as const;
export type Luz = (typeof luces)[number]['id'];

export const usos = [
  { id: 'marca', t: 'Marca personal', d: 'Retratos que reflejan tu identidad profesional y personal.' },
  { id: 'familia', t: 'Pareja o familia', d: 'Inmortaliza la conexión y el amor entre seres queridos.' },
  { id: 'personalidad', t: 'Personalidad', d: 'Imágenes que destacan la esencia y el carácter único de cada persona.' },
  { id: 'corporativo', t: 'Corporativo', d: 'Fotografías profesionales para LinkedIn, sitios web empresariales y materiales de marketing.' },
] as const;
export type Uso = (typeof usos)[number]['id'];

export const servicios = [
  {
    id: 'publicidad', t: 'Publicidad', f: 'publicidad-bailarinas', alt: 'Bailarinas de ballet con tutú en penumbra, iluminadas por una luz cálida',
    d: 'Imágenes que realcen la identidad y el mensaje de tu marca, para marcas, agencias y productoras.',
    items: ['Fotografía para marcas', 'Fotografía para agencias de publicidad', 'Fotografía para productoras de publicidad'],
  },
  {
    id: 'moda', t: 'Moda', f: 'moda-couture', alt: 'Modelo con vestido largo dorado de lentejuelas posando sobre fondo claro',
    d: 'Capturar la personalidad y el mood de una marca. De especial interés para diseñadores, marcas de moda y editoriales.',
    items: ['Pasarela, desfiles, eventos y fashion videos', 'Campañas, lookbooks y catálogos', 'Editoriales para revistas', 'E-commerce'],
  },
  {
    id: 'empresas', t: 'Retrato para empresas', f: 'corporativo-05', alt: 'Retrato de dos socios, un hombre y una mujer, de pie con los brazos cruzados en una oficina',
    d: 'Retratos de equipo y de directivos para LinkedIn, su sitio web y sus materiales de marketing.',
    items: ['Retrato corporativo', 'Retratos de equipo', 'Personal branding'],
  },
];

export const moda = [
  { f: 'moda-verano', alt: 'Modelo con vestido amarillo al viento en la orilla del mar' },
  { f: 'moda-flores', alt: 'Modelo con corona de flores blancas y labios rojos' },
  { f: 'moda-colores', alt: 'Tres modelos con ropa de colores corriendo por la playa' },
  { f: 'moda-sombrero', alt: 'Modelo con sombrero de pañuelo de colores bebiendo de una copa sobre fondo azul' },
  { f: 'moda-playa', alt: 'Modelo con vestido rojo corriendo entre las olas' },
  { f: 'moda-kimono', alt: 'Modelo con kimono rosa en movimiento sobre fondo crema' },
  { f: 'moda-seda', alt: 'Modelo riendo con pañuelo en la cabeza sobre fondo naranja' },
  { f: 'moda-burbujas', alt: 'Modelo con burbujas de jabón sobre fondo azul' },
];

export const empresas = [
  { f: 'empresa-01', alt: 'Retrato corporativo de una mujer con blusa blanca sentada' },
  { f: 'empresa-03', alt: 'Retrato corporativo de un hombre joven con traje, corbata y lentes' },
  { f: 'empresa-04', alt: 'Retrato corporativo de un hombre con traje azul' },
  { f: 'empresa-05', alt: 'Retrato corporativo de una mujer con blusa de seda' },
  { f: 'corporativo-02', alt: 'Retrato de dos directivos sentados en un sillón de oficina' },
];

export const clientes = ['Mastercard', 'Huawei', 'National Geographic', 'Colgate', 'Estrella Galicia', 'Sagrada Familia', 'Madame Tussaud', 'Privalia', 'PEMEX', 'Discovery Channel', 'Amnistía Internacional', 'Vice Magazine', 'FCB México', 'Young & Rubicam Colombia', 'Ogilvy España', 'Disney'];

export const bio = [
  'Soy fotógrafo de moda y publicidad con especialidad en la fotografía de retrato.',
  'Todo mi trabajo fotográfico persigue una misma idea: crear imágenes que se sientan auténticas, momentos especiales. Me gusta trabajar con marcas que se dan el lujo de comunicar con honestidad, por medio de un lenguaje sutil y elegante.',
  'Estudié realización de cine y televisión en Someso, A Coruña, España. También trabajo como director y cinematógrafo, con especialidad en short form content. Actualmente tengo mi estudio en Ciudad de México.',
];
