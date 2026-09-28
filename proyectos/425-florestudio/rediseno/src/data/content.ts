// Contenido de Florestudio, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, se deja fuera o como [PENDIENTE].
// Las rutas de imagen son relativas a publicDir (../assets/web).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Florestudio',
  ciudad: 'Guadalajara, Jalisco',
  // Número del wa.me del sitio original: 523319468265 (México +52 331 946 8265)
  telefono: '+523319468265',
  whatsapp: '523319468265',
  // No hay dirección física publicada en el sitio → Maps apunta a Guadalajara centro
  mapa: 'https://www.google.com/maps/search/florestudio+guadalajara/',
};

export const wa = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const foto = img;

// ─── Ramos del catálogo (precios y nombres del sitio original) ────────────────
// Solo arreglos con foto real disponible en assets/web/.
export interface Ramo {
  slug: string;
  nombre: string;
  precio: number;
  imagen: string; // filename in assets/web/
  alt: string;
  categoria: string;
}

export const ramos: Ramo[] = [
  {
    slug: 'rosas-12-amarillas',
    nombre: 'Ramo de 12 Rosas Amarillas Premium',
    precio: 499,
    imagen: 'rosas-12-amarillas.webp',
    alt: 'Ramo de 12 Rosas Amarillas Premium – Luz de Alegría',
    categoria: 'amarillas',
  },
  {
    slug: 'rosas-12-girasoles-10',
    nombre: 'Ramo de 12 Rosas y 10 Girasoles',
    precio: 749,
    imagen: 'rosas-12-girasoles-10.webp',
    alt: 'Ramo de 12 Rosas y 10 Girasoles',
    categoria: 'mixto',
  },
  {
    slug: 'rosas-24-gypsophilia',
    nombre: 'Ramo de 24 Rosas Rojas con Gypsophilia',
    precio: 649,
    imagen: 'rosas-24-gypsophilia.webp',
    alt: 'Ramo de 24 Rosas Rojas con Gypsophilia',
    categoria: 'rojas',
  },
  {
    slug: 'rosas-24-blancas-rojas',
    nombre: 'Ramo de 24 Rosas Blancas y Rojas',
    precio: 599,
    imagen: 'rosas-24-blancas-rojas.webp',
    alt: 'Ramo de 24 Rosas Blancas y Rojas con Papel Coreano',
    categoria: 'mixto',
  },
  {
    slug: 'rosas-girasoles-24-10',
    nombre: 'Ramo de 24 Rosas y 10 Girasoles',
    precio: 1049,
    imagen: 'rosas-girasoles-24-10.webp',
    alt: 'Ramo de 24 Rosas y 10 Girasoles',
    categoria: 'mixto',
  },
  {
    slug: 'rosas-50-mix',
    nombre: 'Ramo de 50 Rosas Rosas y Rojas',
    precio: 1299,
    imagen: 'rosas-50-mix.webp',
    alt: 'Ramo de 50 Rosas Rosas y Rojas en Guadalajara',
    categoria: 'rojas',
  },
  {
    slug: 'rosas-50-blancas-rojas',
    nombre: 'Ramo de 50 Rosas Blancas y Rojas Premium',
    precio: 1499,
    imagen: 'rosas-50-blancas-rojas.webp',
    alt: 'Ramo de 50 Rosas Blancas y Rojas Premium',
    categoria: 'mixto',
  },
  {
    slug: 'rosas-50-rojas',
    nombre: 'Ramo de 50 Rosas Rojas y Blancas',
    precio: 1699,
    imagen: 'rosas-50-rojas.webp',
    alt: 'Ramo de 50 Rosas Rojas y Blancas',
    categoria: 'rojas',
  },
];

// ─── Ventajas del negocio (textos del sitio original) ────────────────────────
export const ventajas = [
  {
    titulo: 'Flores frescas del día',
    texto: 'Selección diaria para que cada ramo se vea vivo, elegante y con aroma real.',
  },
  {
    titulo: 'Entrega el mismo día',
    texto: 'Entregas en 4 a 5 horas en Guadalajara y Zona Metropolitana. Servicio express disponible.',
  },
  {
    titulo: 'Presentación premium',
    texto: 'Cuidamos cada detalle para que el ramo llegue impecable, como si lo entregaras tú mismo.',
  },
  {
    titulo: 'Atención humana por WhatsApp',
    texto: 'Te ayudamos a elegir el ramo perfecto según la ocasión, el presupuesto y el estilo.',
  },
];

// ─── FAQ (del sitio original — página de Flores para Mamá) ───────────────────
export const faq = [
  {
    pregunta: '¿Cuánto tarda la entrega?',
    respuesta:
      'Nuestro tiempo estimado es de 4 a 5 horas, aunque en muchos casos entregamos antes. Siempre buscamos ser lo más inmediatos posible.',
  },
  {
    pregunta: '¿Cómo se cobra el envío?',
    respuesta:
      'El envío se calcula a $15 pesos por kilómetro desde nuestra sucursal. Trabajamos con Uber o con nuestro servicio de mensajería de confianza.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta:
      'Aceptamos transferencias bancarias, links de pago, tarjetas, efectivo y también pago al recibir.',
  },
  {
    pregunta: '¿Puedo personalizar mi ramo?',
    respuesta:
      'Claro. Diseñamos arreglos personalizados según flores, colores y presupuesto. Contáctanos por WhatsApp y te asesoramos.',
  },
  {
    pregunta: '¿Hacen entregas el mismo día en fechas especiales?',
    respuesta:
      'Sí. En días como 14 de febrero o 10 de mayo operamos todo el día con atención activa. Te recomendamos apartar tu pedido lo antes posible.',
  },
];
