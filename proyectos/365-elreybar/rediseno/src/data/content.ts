// Contenido de El Rey Bar & Supper Club — Puerto Vallarta, Jalisco.
// Fuentes: investigacion/crudo.json, investigacion/resumen.json, Google Maps.
// Regla: nada inventado. Si falta un dato, se deja como [PENDIENTE] en CAMBIOS.md.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'El Rey Bar & Supper Club',
  ciudad: 'Puerto Vallarta, Jalisco',
  telefono: '+523221152881',
  whatsapp: '523221152881',
  direccion: 'Lisboa 162A, Versalles, 48310 Puerto Vallarta, Jal., México',
  mapa: 'https://maps.app.goo.gl/vGQMHi7sQauLi5Sd9',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const horarios = [
  { dia: 'Lunes', horas: 'Cerrado' },
  { dia: 'Martes',    horas: '16:00 – 23:00' },
  { dia: 'Miércoles', horas: '16:00 – 23:00' },
  { dia: 'Jueves',    horas: '16:00 – 23:00' },
  { dia: 'Viernes',   horas: '16:00 – 23:00' },
  { dia: 'Sábado',    horas: '16:00 – 23:00' },
  { dia: 'Domingo',   horas: '11:00 – 23:00' },
];

export const tabComer = {
  titulo: 'Cocina BBQ de autor',
  descripcion:
    'Comfort food creativo: Smoked Pork Belly Burnt Ends, Pulled Pork Sandwiches, Chicken Wings y más botanas de patio.',
  fotoMain: img('platillos.webp'),
  fotoMainAlt: 'Selección de platillos de El Rey Bar & Supper Club',
  platos: [
    { nombre: 'Smoked Pork Belly Burnt Ends', foto: img('pork-belly.webp'), alt: 'Smoked Pork Belly Burnt Ends' },
    { nombre: 'Pulled Pork Sandwiches',       foto: img('pulled-pork.webp'), alt: 'Pulled Pork Sandwiches' },
    { nombre: 'Chicken Wings',                foto: img('wings.webp'),       alt: 'Chicken Wings' },
  ],
  wa: wa('Hola, quiero reservar una mesa para cenar en El Rey Bar esta noche.'),
};

export const tabBeber = {
  titulo: 'Bar & cocteles artesanales',
  descripcion:
    'Cocteles creativos, cervezas craft de Border Psycho Brewery y una de las selecciones de agave más amplias de Puerto Vallarta.',
  fotos: [
    { src: img('bar-1.webp'), alt: 'Bar El Rey Bar & Supper Club' },
    { src: img('bar-2.webp'), alt: 'Cocteles en El Rey Bar' },
    { src: img('bar-3.webp'), alt: 'Ambiente de bar en El Rey Bar' },
  ],
  wa: wa('Hola, quiero una mesa en el bar de El Rey esta noche.'),
};
