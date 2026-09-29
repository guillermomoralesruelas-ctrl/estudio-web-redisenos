// Contenido de 52 CrossFit Cinco Dos. Todo sale de su sitio (investigacion/crudo.json: inicio y el artículo
// "Ser Cinco Dos"); nada es inventado. Precios en pesos mexicanos.

export const negocio = {
  nombre: '52 CrossFit Cinco Dos',
  lema: 'Relax, have fun, workout',
  direccion: 'Calle 1° de Mayo 88, colonia 5 de Mayo, Hermosillo, Sonora',
  telefono: '662 419 5643',
  telefonoLink: 'tel:+526624195643',
  whatsapp: '526624195643',
  correo: 'info@52cincodemayo.com',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Calle 1° de Mayo 88, colonia 5 de Mayo, Hermosillo, Sonora'),
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/52cincodemayo' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/52cincodemayo' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/channel/UC9pyvww-Q0Hadc38WsX2Oqg' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const horario = [
  { dias: 'Clases', texto: 'de 5:00 a 20:30' },
  { dias: 'Open Box', texto: 'sábados de 8:00 a 12:00' },
  { dias: 'Abierto', texto: 'de lunes a sábado' },
];

// Puntos de partida (sus tres membresías). hoy = lo que se paga el primer día.
export const planes = [
  { id: 'paso', boton: 'Estoy de paso', nombre: 'One Day Pass', hoy: 150, despues: null as string | null, para: 'Para quien está de paso por Hermosillo o quiere una sesión única.', incluye: ['Una clase', 'Coaches certificados', 'Uso de instalaciones', 'Sin compromisos'] },
  { id: 'probar', boton: 'Quiero probar', nombre: 'Entrena 1 semana', hoy: 500, despues: null, para: 'Para quien quiere probar la metodología antes de quedarse.', incluye: ['Clases ilimitadas 7 días', 'Programación oficial', 'Horario libre', 'Entras a la comunidad'] },
  { id: 'quedo', boton: 'Me quedo', nombre: 'Membresía mensual', hoy: 2000, despues: '$1,500 cada mes', para: 'Para quien busca resultados constantes y ser parte de la comunidad. El primer mes incluye la inscripción de $500.', incluye: ['Acceso total al box', 'Coaching', 'Open Box sabatino', 'Beneficios de miembro'] },
];

export const servicios = ['Clases de CrossFit', 'Open Box', 'CrossFit Kids', 'Asesoría'];

export const ventajas = [
  { titulo: 'Afiliado oficial de CrossFit', texto: 'Aplican el método original con sus estándares de calidad.' },
  { titulo: 'Grupos de 15 a 20', texto: 'El coach supervisa tu técnica de cerca, en todos los niveles.' },
  { titulo: 'Sin reservas', texto: 'Eliges tu horario y llegas a entrenar, sin apartar lugar en una app.' },
  { titulo: 'Regaderas y lockers', texto: 'Baños, regaderas con agua caliente y lockers para irte directo a tu día.' },
  { titulo: 'Equipo completo', texto: 'Material de alta gama y accesorios: calleras, cuerdas y ligas.' },
];

export const galeria = [
  { foto: 'argollas.webp', alt: 'Atletas colgados de las argollas frente a un muro de madera', ancho: 1300, alto: 866 },
  { foto: 'clase-piso.webp', alt: 'Clase haciendo abdominales en el piso del box', ancho: 1300, alto: 866 },
  { foto: 'comunidad-charla.webp', alt: 'Miembras del box platicando y riendo después de entrenar', ancho: 1300, alto: 866 },
  { foto: 'saludo.webp', alt: 'Dos atletas chocando el puño frente al letrero de Cinco Dos', ancho: 976, alto: 1300 },
  { foto: 'muro-relax.webp', alt: 'Atletas con kettlebells frente al mural "Relax, have fun, workout"', ancho: 1300, alto: 866 },
  { foto: 'fachada-noche.webp', alt: 'Fachada del box de noche, con el letrero Cinco de Mayo entre palmeras', ancho: 1248, alto: 832 },
];
