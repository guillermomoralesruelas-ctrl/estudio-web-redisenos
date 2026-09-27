// Contenido de RE/MAX Espacios Hábitat (Hermosillo), tomado del sitio original: clon en ../sitio, investigacion/crudo.json
// y, para los inmuebles, la ficha de cada uno en espacioshabitat.com/propiedad/<nombre>/ (tomada con curl el 2026-09-27).
// Regla: nada inventado. Lo que no está claro queda anotado en CAMBIOS.md como pendiente.
// Los nombres de los asesores se escriben como los publica el sitio.
// Las fotos son copias .webp de las del clon (ver fotos-web.mjs), servidas desde ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'RE/MAX Espacios Hábitat',
  telefono: '662 311 3776',
  telLink: '+526623113776',
  whatsapp: '526621150662',
  whatsappUnete: '526621150232',
  direccion: 'Blvd. Navarrete 134, Local 1, Col. Valle Grande, Hermosillo, Sonora, C. P. 83205',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Blvd.+Navarrete+134+Local+1,+Valle+Grande,+83205+Hermosillo,+Sonora',
  horario: [
    ['Lunes a viernes', '9:00 a 16:00'],
    ['Sábados', '9:00 a 13:00'],
  ] as [string, string][],
  correo: 'contacto@espacioshabitat.com',
  sitio: 'https://espacioshabitat.com/',
  facebook: 'https://www.facebook.com/espacioshabitat',
  instagram: 'https://www.instagram.com/espacioshabitat',
  linkedin: 'https://www.linkedin.com/company/remax-espacios-habitat',
};

export const wa = (mensaje: string, numero = negocio.whatsapp) => `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, me interesa contactar a un asesor inmobiliario de RE/MAX Espacios Hábitat en Hermosillo.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (archivo: string, alt: string): Foto => ({ src: img(`${archivo}.webp`), w: 584, h: 438, alt });

export type Inmueble = {
  id: string;
  corto: string;
  titulo: string;
  grupo: 'vivir' | 'invertir';
  operacion: 'Venta' | 'Renta';
  precio: number;
  /** m² de terreno; en el departamento, la superficie del departamento. */
  terreno: number;
  construccion?: number;
  recamaras?: number;
  banos?: string;
  zona: string;
  detalle: string;
  asesor: string;
  telAsesor: string;
  ficha: string;
  foto?: Foto;
  sinFoto?: string;
};

// Los nueve "Inmuebles destacados" de su inicio. Precio y medidas de la ficha de cada uno.
export const inmuebles: Inmueble[] = [
  {
    id: 'lomas-altas', corto: 'Departamento en Lomas Altas', titulo: 'Departamento en renta amueblado en Lomas Altas', grupo: 'vivir',
    operacion: 'Renta', precio: 19000, terreno: 65.82, recamaras: 2, banos: '1 baño completo y 1 WC',
    zona: 'Nuevo Laredo 7, Lomas Altas, al norte de Hermosillo',
    detalle: 'En planta baja, totalmente amueblado y equipado, con un cajón de estacionamiento. La renta incluye mantenimiento, agua e internet. No se aceptan mascotas.',
    asesor: 'Emiliano Oviedo Moreno', telAsesor: '6622068212',
    ficha: 'https://espacioshabitat.com/propiedad/departamento-en-renta-amueblado-en-lomas-altas/',
    foto: f('depto-lomas-altas', 'Vista aérea del edificio de departamentos en Lomas Altas, Hermosillo'),
  },
  {
    id: 'montecarlo', corto: 'Casa en Montecarlo', titulo: 'Casa en venta en Montecarlo Residencial', grupo: 'vivir',
    operacion: 'Venta', precio: 2300000, terreno: 142.5, construccion: 101.3, recamaras: 3, banos: '1.5 baños',
    zona: 'Montecarlo Residencial, privada con acceso controlado al sur poniente',
    detalle: 'Planta baja con sala, comedor, cocina, medio baño y estacionamiento para 2 autos. El precio no incluye gastos notariales.',
    asesor: 'Eneida Obregon Yepiz', telAsesor: '6623771867',
    ficha: 'https://espacioshabitat.com/propiedad/casa-en-venta-en-hermosillo-en-montecarlo-residencial/',
    foto: f('casa-montecarlo', 'Fachada de la casa de dos plantas en Montecarlo Residencial'),
  },
  {
    id: 'villa-bonita', corto: 'Casa en Villa Bonita', titulo: 'Casa en venta en Villa Bonita Residencial', grupo: 'vivir',
    operacion: 'Venta', precio: 2800000, terreno: 241, construccion: 173, recamaras: 3, banos: '2.5 baños',
    zona: 'Villa Bonita Residencial, cerrada privada con acceso controlado al sur poniente',
    detalle: 'Dos plantas, cochera para dos o tres autos, jardín y patio amplio. Se entrega equipada con minisplits, cocina integral y cisterna.',
    asesor: 'Silvana Medina Ramirez', telAsesor: '6623771668',
    ficha: 'https://espacioshabitat.com/propiedad/casa-en-venta-en-villa-bonita/',
    foto: f('casa-villa-bonita', 'Casa de dos plantas en Villa Bonita Residencial, con árboles al frente'),
  },
  {
    id: 'los-santos', corto: 'Casa en Los Santos', titulo: 'Casa en venta de un piso en Los Santos Residencial', grupo: 'vivir',
    operacion: 'Venta', precio: 8300000, terreno: 381.82, construccion: 264.28, recamaras: 3, banos: '2 baños',
    zona: 'Los Santos Residencial, al poniente de Hermosillo',
    detalle: 'Todo en un nivel, techos de 3.20 metros, puerta de parota y cocina de madera Alder con cubierta de cuarzo. No incluye muebles.',
    asesor: 'Sandra Miranda Verdugo', telAsesor: '6624164122',
    ficha: 'https://espacioshabitat.com/propiedad/casa-en-venta-de-un-piso-en-los-santos-residencial/',
    foto: f('casa-los-santos', 'Fachada moderna de la casa de un piso en Los Santos Residencial'),
  },
  {
    id: 'casa-obregon', corto: 'Casa en Obregón', titulo: 'Casa en venta en Ciudad Obregón, Zona Norte', grupo: 'vivir',
    operacion: 'Venta', precio: 21236000, terreno: 1601.4, construccion: 1247.64,
    zona: 'Calle Sonora esquina con 5 de Febrero y Lago Managua, Zona Norte de Ciudad Obregón',
    detalle: 'Terreno urbano con casa unifamiliar en construcción, para terminar, personalizar o adaptar. La zona tiene infraestructura urbana completa.',
    asesor: 'Karim Oviedo', telAsesor: '6621150232',
    ficha: 'https://espacioshabitat.com/propiedad/terreno-en-venta-en-obregon-2/',
    sinFoto: 'Pide fotos de la obra a su asesor.',
  },
  {
    id: 'casa-grande', corto: 'Edificio en Casa Grande', titulo: 'Edificio comercial en venta en Casa Grande', grupo: 'invertir',
    operacion: 'Venta', precio: 14000000, terreno: 1005.13, construccion: 636.67, banos: '7.5 baños',
    zona: 'Blvd. San Bernardino 90, Casa Grande, a unos metros de Residencial Los Lagos',
    detalle: 'Dos niveles listos para operar, con 4 oficinas privadas y 5 cocheras, y terreno de sobra para crecer.',
    asesor: 'Magdiel Ramos', telAsesor: '6623278103',
    ficha: 'https://espacioshabitat.com/propiedad/edificio-comercial-en-venta-en-casa-grande/',
    foto: f('edificio-casa-grande', 'Fachada del edificio comercial sobre el Blvd. San Bernardino, en Casa Grande'),
  },
  {
    id: 'obregon-terreno', corto: 'Terreno en Obregón', titulo: 'Terreno en venta en Ciudad Obregón, Zona Norte', grupo: 'invertir',
    operacion: 'Venta', precio: 31000000, terreno: 4917.77,
    zona: 'Calle 5 de Febrero y Lago Managua, Zona Norte de Ciudad Obregón',
    detalle: 'Cabecera de manzana con tres frentes y uso mixto, libre de construcción.',
    asesor: 'Karim Oviedo', telAsesor: '6621150232',
    ficha: 'https://espacioshabitat.com/propiedad/terreno-en-venta-en-obregon/',
    foto: f('terreno-obregon', 'Foto aérea del terreno en Ciudad Obregón con sus medidas marcadas'),
  },
  {
    id: 'camino-seri', corto: 'Terreno en Camino del Seri', titulo: 'Terreno en venta en Camino del Seri', grupo: 'invertir',
    operacion: 'Venta', precio: 20380000, terreno: 6000,
    zona: 'Camino del Seri, a un costado del COBACH Villa Bonita y cerca del Blvd. Quiroga',
    detalle: 'Agua potable, energía eléctrica y drenaje a pie de calle, con frente al Blvd. Camino del Seri.',
    asesor: 'Karim Oviedo', telAsesor: '6621150232',
    ficha: 'https://espacioshabitat.com/propiedad/terreno-en-venta-en-camino-del-seri/',
    sinFoto: 'Pide fotos del terreno a su asesor.',
  },
  {
    id: 'luz-valencia', corto: 'Terreno en Luz Valencia', titulo: 'Terreno en venta en el Blvd. Luz Valencia', grupo: 'invertir',
    operacion: 'Venta', precio: 20000000, terreno: 12675,
    zona: 'Blvd. Luz Valencia, sector Villa del Real y Fuente de la Cascada, al norte poniente',
    detalle: 'Frente al Blvd. Luz Valencia y conexión inmediata al Blvd. José María Escrivá de Balaguer, rodeado de fraccionamientos habitados.',
    asesor: 'Rossy Moreno', telAsesor: '6621150662',
    ficha: 'https://espacioshabitat.com/propiedad/terreno-en-venta-en-hermosillo-en-boulevard-luz-valencia/',
    foto: f('terreno-luz-valencia', 'Foto aérea del terreno sobre el Blvd. Luz Valencia, marcado en rojo'),
  },
];

// Servicios (página Nosotros) y asesores (página Asesores, primera hoja, con su celular publicado).
export const servicios = ['Promoción', 'Desarrollos', 'Compraventa', 'Valuación', 'Arrendamiento', 'Administración'];

export const asesores: [string, string][] = [
  ['Andrea Lemus Silva', '6221129070'],
  ['Ana Lorenia Ramirez Suarez', '6621426156'],
  ['Xochitl Nieves Lopez', '6444209993'],
  ['Rossy Moreno', '6621150662'],
  ['Alfredo Angel Perez', '6624189464'],
  ['Monica Rivera Zavala', '6621734312'],
  ['Karim Oviedo', '6621150232'],
  ['Alejandro Acosta', '6624183955'],
  ['Emiliano Oviedo Moreno', '6622068212'],
];
