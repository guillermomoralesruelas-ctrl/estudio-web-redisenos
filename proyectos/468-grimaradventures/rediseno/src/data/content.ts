// Contenido de Grimar Adventures, tomado de investigacion/crudo.json y de su sitio en vivo (inicio, los 4 tours con sus
// modalidades y precios, y contacto; 2026-10-10). Nada inventado; textos del estudio en CAMBIOS.md.

const B = import.meta.env.BASE_URL;
export const web = (f: string) => `${B}${f}.webp`;

export const negocio = {
  nombre: 'Grimar Adventures',
  lugar: 'Punta de Mita, Nayarit',
  whatsapp: '523221047948',
  telTxt: '322 104 7948',
  telHref: 'tel:+523221047948',
  correo: 'infogrimar@playamarietas.mx',
  horario: 'Lunes a domingo, 7:00 a 20:00',
  reservar: 'https://playamarietas.mx/tours/filtrado',
  instagram: 'https://www.instagram.com/grimar_adventures.mita/',
  facebook: 'https://www.facebook.com/IslasMarietasPlayaDelAmorPescaBallenaPuntaMita',
  tripadvisor: 'https://www.tripadvisor.com.mx/Attraction_Review-g499443-d25463911-Reviews-Grimar_Adventures_Punta_Mita-Punta_de_Mita_Pacific_Coast.html',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Grimar+Adventures+Punta+de+Mita',
};
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Modalidad = { t: string; unidad: 'persona' | 'lancha'; regular: number; promo: number; pax?: number };
export type Tour = {
  id: string; t: string; corto: string; zona: string; foto: string; alt: string; duracion: string; grupo: string; dificultad: string; edad: string;
  resumen: string; incluye: string[]; nota?: string; ninos: boolean; modalidades: Modalidad[]; url: string;
};

export const tours: Tour[] = [
  {
    id: 'playa-escondida', t: 'Tour Playa Escondida (Playa del Amor)', corto: 'Playa Escondida', zona: 'Islas Marietas',
    foto: 'grupo-playa-escondida', alt: 'Grupo con los brazos arriba dentro de Playa Escondida, bajo la bóveda de roca',
    duracion: '3 h', grupo: 'Máx. 8 personas', dificultad: 'Fácil a intermedio', edad: '10 a 64 años',
    resumen: 'Acceso asegurado a Playa Escondida: unos 30 minutos dentro, nadando cerca de 100 m por el túnel natural con guía certificado. Incluye snorkel con peces tropicales, foto en el Puente de Piedra y visita a Playa Nopalera.',
    incluye: ['Chaleco salvavidas y equipo de snorkel', 'Guía y capitán certificados', 'Bebidas no alcohólicas a bordo', 'Brazalete oficial del Parque Nacional'],
    nota: 'El acceso es limitado por el Parque Nacional Islas Marietas: conviene reservar con anticipación.',
    ninos: false,
    modalidades: [
      { t: 'Colectivo', unidad: 'persona', regular: 2813, promo: 2250 },
      { t: 'Privado hasta 4', unidad: 'lancha', regular: 14063, promo: 11250, pax: 4 },
      { t: 'Privado hasta 8', unidad: 'lancha', regular: 19575, promo: 15660, pax: 8 },
    ],
    url: 'https://playamarietas.mx/tour/islas-marietas-playa-escondida',
  },
  {
    id: 'snorkel', t: 'Tour de Snorkel & Playa Nopalera', corto: 'Snorkel y Nopalera', zona: 'Islas Marietas',
    foto: 'snorkel', alt: 'Personas haciendo snorkel con chaleco naranja junto a las Islas Marietas',
    duracion: '2 h 30 min', grupo: 'Hasta 8 por lancha', dificultad: 'Fácil a intermedio', edad: 'Todas las edades',
    resumen: 'Snorkel con vida marina, visita a Playa Nopalera para nadar y explorar cuevas, foto en el Puente de Piedra y, con suerte, piqueros de patas azules.',
    incluye: ['Chaleco salvavidas', 'Equipo de snorkel', 'Capitán y guía'],
    nota: 'No incluye el ingreso a Playa Escondida.',
    ninos: true,
    modalidades: [
      { t: 'Colectivo', unidad: 'persona', regular: 1150, promo: 920 },
      { t: 'Privado', unidad: 'lancha', regular: 7900, promo: 6320, pax: 8 },
    ],
    url: 'https://playamarietas.mx/tour/islas-marietas-snorkel-playa-punta-mita',
  },
  {
    id: 'ballenas', t: 'Avistamiento de Ballenas Jorobadas', corto: 'Ballenas jorobadas', zona: 'Punta Mita',
    foto: 'ballena-salto', alt: 'Ballena jorobada saltando fuera del agua frente a Punta Mita',
    duracion: '1 h 30 min', grupo: 'Máx. 8 personas', dificultad: 'Fácil', edad: 'Todas las edades',
    resumen: 'Observación responsable de ballenas jorobadas con guía certificado. El avistamiento está garantizado en temporada: si no ven ballenas, te reembolsan.',
    incluye: ['Chaleco salvavidas', 'Capitán y guía'],
    ninos: true,
    modalidades: [
      { t: 'Colectivo', unidad: 'persona', regular: 938, promo: 750 },
      { t: 'Privado', unidad: 'lancha', regular: 5625, promo: 4500, pax: 8 },
    ],
    url: 'https://playamarietas.mx/tour/avistamiento-de-ballenas-en-punta-de-mita',
  },
  {
    id: 'costera', t: 'Experiencia Costera en Punta Mita', corto: 'Experiencia costera', zona: 'Punta Mita',
    foto: 'lancha-islas', alt: 'Lancha techada de Grimar navegando junto a las rocas de las islas',
    duracion: '2 h 30 min', grupo: 'Máx. 8 personas', dificultad: 'Fácil', edad: 'Todas las edades',
    resumen: 'La península desde el mar, en privado y sin prisas: costa, jungla y formaciones naturales, con una parada de snorkel en una zona elegida por la claridad del agua.',
    incluye: ['Capitán certificado', 'Equipo completo de snorkel', 'Chalecos salvavidas', 'Bebidas hidratantes a bordo'],
    ninos: true,
    modalidades: [{ t: 'Privado', unidad: 'lancha', regular: 6250, promo: 5000, pax: 8 }],
    url: 'https://playamarietas.mx/tour/recorrido-costero-snorkel-punta-mita',
  },
];

export const pasos = [
  { t: 'Elige tu tour', d: 'Explora sus experiencias y selecciona el tour perfecto para ti.' },
  { t: 'Reserva', d: 'Aparta tu lugar de forma rápida y segura, en línea o por WhatsApp.' },
  { t: 'Disfruta la experiencia', d: 'Llega 15 minutos antes a su oficina en Punta de Mita.' },
];

export const reglas = [
  'El bloqueador se aplica antes de abordar, no justo antes de entrar al mar.',
  'A las islas se baja sin calzado y sin bolsas, comida ni bebidas.',
  'No se permite volar drones en el Parque Nacional (reglamento de CONANP).',
  'Cancelación gratuita con al menos 24 horas de anticipación; se puede reagendar una vez.',
];

export const resenas = [
  { a: 'Maritza Paz', t: 'Johnny nuestra guía, y Jesús nuestro Capitán fueron muy amables, graciosos, y muy atentos a nuestras necesidades. Incluso tomaron el tiempo para tomarle fotos a todos los miembros del grupo.' },
  { a: 'Tere Nájera Ávila', t: 'Los tripulantes son muy amables, la embarcación muy limpia y en buenas condiciones. Gente confiable para hacer tour.' },
  { a: 'David Mason', t: 'Our crew, Ruben and Chuy, were both fantastic — very friendly and funny. On the way back to town we spotted a family of humpback whales.' },
  { a: 'Daniel F', t: 'Gran experiencia, tuvimos impresionantes vistas de las ballenas y nuestra tripulación hizo muy bien en acercarnos y navegar.' },
];
