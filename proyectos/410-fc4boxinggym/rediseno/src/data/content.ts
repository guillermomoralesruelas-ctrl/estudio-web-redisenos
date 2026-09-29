const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'FC4 Boxing Gym',
  ciudad: 'Ciudad de México, CDMX',
  whatsapp1: '525525601504',
  whatsapp2: '525515993032',
  instagram: 'https://www.instagram.com/fc4.box.gym',
  facebook: 'https://www.facebook.com/profile.php?id=61570594838715',
  mapaEmbed1: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5401067305215!2d-99.16450329999999!3d19.4322668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9570fb36ecb%3A0x79c7115835f38c9!2sFC4%20Boxing%20Gym!5e0!3m2!1ses!2smx!4v1742325409297!5m2!1ses!2smx',
  mapaEmbed2: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.464207212187!2d-99.1745696!3d19.435542700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9b0b17d68bd%3A0x87a467138a027a54!2sFC4%20Boxing%20Gym!5e0!3m2!1ses!2smx!4v1742325538014!5m2!1ses!2smx',
};

export const wa = (sede: '1' | '2', msg: string) =>
  `https://wa.me/${sede === '1' ? negocio.whatsapp1 : negocio.whatsapp2}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const planes = [
  { nombre: '10 clases al mes', precio: '$1,200 MXN' },
  { nombre: '12 clases al mes', precio: '$1,400 MXN' },
  { nombre: 'Clases ilimitadas', precio: '$1,600 MXN' },
];

export const coaches = [
  {
    nombre: 'Sergio', sede: 'Pánuco',
    img: img('04/Sergio-682x1024.jpeg'),
    creds: ['Campeonatos de boxeo amateur y semiprofesional', 'Certif. Boxing Conditioning y Fight Fit', 'Seminario de Muay Thai', 'Lic. Cultura Física y Deporte – Unitec'],
  },
  {
    nombre: 'Enrique', sede: 'Pánuco',
    img: img('04/Enrique-683x1024.jpeg'),
    creds: ['Metodología para enseñanza del boxeo', 'Barre Intensity (Yoga-Pilates-Funcional)', 'Cinturón Negro en Lima Lama', 'Coaching nutricional'],
  },
  {
    nombre: 'Roberto', sede: 'Anzures',
    img: img('04/Roberto-683x1024.jpeg'),
    creds: ['Certif. ejercicios para mujeres', 'Diplomado de boxeo con bases funcionales', 'Certif. Functional Training', 'Taller HIT & HIIT'],
  },
  {
    nombre: 'Brayan', sede: 'Anzures',
    img: img('04/Brayan-682x1024.jpeg'),
    creds: ['Certif. metodología y enseñanza del boxeo', 'Diplomado de Boxeo Cubano', 'Diplomado en acondicionamiento físico'],
  },
];

export const porQueFC4 = [
  { titulo: 'Coaches expertos', desc: 'Certificados y comprometidos con tu progreso.' },
  { titulo: 'Instalaciones de primer nivel', desc: 'Vestidores, duchas, AC y tienda deportiva.' },
  { titulo: 'Fisioterapia incluida', desc: 'Optimiza tu recuperación después del entrenamiento.' },
];

export const sedes = [
  { nombre: 'Pánuco', waKey: '1' as const, mapaEmbed: negocio.mapaEmbed1 },
  { nombre: 'Anzures', waKey: '2' as const, mapaEmbed: negocio.mapaEmbed2 },
];
