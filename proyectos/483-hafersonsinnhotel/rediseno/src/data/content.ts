// Contenido de Hafersons Inn. Todo sale de su sitio (investigacion/crudo.json y la página en vivo); nada es inventado.
// Su sitio no publica tarifas (el motor de reservas muestra "USD 0").

export const negocio = {
  nombre: 'Hafersons Inn Hotel & Suites',
  direccion: 'Av. Ejército Mexicano 1435, Loma del Gallo, Ciudad Madero, Tamaulipas',
  referencia: 'En la zona comercial de Tampico y Ciudad Madero, cerca de la central de autobuses y de Altama City Center.',
  telefono: '833 216 9070',
  telefonoLink: 'tel:+528332169070',
  whatsapp: '528331185163',
  whatsappTexto: '833 118 5163',
  mapa: 'https://www.google.com/maps/search/?api=1&query=22.2526138,-97.8571668',
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/HafersonsInnHotel/' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/hafersonsinn/' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Horarios del hotel en horas decimales (7.5 = 7:30).
export const franjas = {
  semana: [
    { nombre: 'Desayuno', de: 7, a: 10.5, texto: '7:00 a 10:30' },
    { nombre: 'Restaurante', de: 7, a: 15, texto: '7:00 a 15:00' },
    { nombre: 'Centro de negocios', de: 0, a: 24, texto: 'Las 24 horas' },
  ],
  finde: [
    { nombre: 'Desayuno', de: 7, a: 11, texto: '7:00 a 11:00' },
    { nombre: 'Restaurante', de: 7, a: 15, texto: '7:00 a 15:00' },
    { nombre: 'Centro de negocios', de: 0, a: 24, texto: 'Las 24 horas' },
  ],
};

export const servicios = [
  { nombre: 'Alberca', texto: 'Amplia alberca para refrescarte.' },
  { nombre: 'Gimnasio', texto: 'Para mantener tu rutina durante la estancia.' },
  { nombre: 'Estacionamiento', texto: 'Amplio estacionamiento para tu auto.' },
  { nombre: 'Internet inalámbrico y TV satelital', texto: 'En todas las habitaciones.' },
  { nombre: 'Microondas y frigobar', texto: 'En las Junior Suites.' },
];

export const habitaciones = [
  { foto: 'habitacion-doble.webp', alt: 'Habitación con dos camas matrimoniales, cabeceras de madera y cuadro sobre la pared amarilla', ancho: 1080, alto: 864 },
  { foto: 'habitacion-king.webp', alt: 'Habitación con cama king, dos lámparas de buró y cuadro enmarcado', ancho: 1200, alto: 800 },
  { foto: 'suite-sala.webp', alt: 'Habitación amplia con dos camas, pantalla en la pared, espejo y mesa de trabajo', ancho: 1280, alto: 960 },
  { foto: 'suite-cocineta.webp', alt: 'Suite con barra de cocineta, microondas, cafetera y frigobar junto a dos camas', ancho: 1280, alto: 960 },
];

export const salones = ['Inglés', 'Balmoral', 'Windsor', 'Francés', 'Español'];
