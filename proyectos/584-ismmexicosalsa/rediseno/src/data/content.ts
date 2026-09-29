// Content for ISM Mexico (Salsa & Bachata, CDMX). Everything comes from investigacion/crudo.json (home, bootcamp and
// events, captured 2026-09-26). Nothing is invented; missing data goes as [PENDIENTE].

export const negocio = {
  nombre: 'ISM Mexico',
  whatsapp: '525560611877',
  whatsappPie: '+52 1 55 7884 8166',
  grupo: 'https://chat.whatsapp.com/KYHOYJYnV761gZORWrbe8P',
  correo: 'info@ismmexico.space',
  estudio: 'ISM Studio, Cerrada de Hamburgo 4, Juárez, Cuauhtémoc, 06600 Mexico City',
  otraDireccion: 'Coahuila 105, Roma Norte, CDMX',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Cerrada de Hamburgo 4, Juárez, Cuauhtémoc, 06600 Ciudad de México'),
  horario: 'Monday to Saturday, 10:00 am to 10:00 pm',
  instagram: 'https://www.instagram.com/ismmexico/',
  instagramKentaro: 'https://www.instagram.com/kentaroyoneda/',
  facebook: 'https://www.facebook.com/ISM-Mexico-102598668974104',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export const bootcamps = [
  { nombre: 'Bootcamp Lite', precio: 3000, horas: '1 hour per day', incluye: ['1 hour per day', 'Private coach', 'Free ISM group classes', 'Free ISM socials'] },
  { nombre: 'Bootcamp Focus', precio: 5750, horas: '2 hours per day', incluye: ['2 hours per day', 'Private coach', 'Free ISM group classes', 'Free ISM socials'] },
  { nombre: 'Bootcamp Combo', precio: 11000, horas: '2 hours dance + 2 hours Spanish', incluye: ['2 hours of dance per day', '2 hours of Spanish per day', 'Private coach', 'Free ISM group classes', 'Free ISM socials'], popular: true },
];

export const estancias = [
  { id: 'weekend', boleto: 'A weekend', dias: '2–3 days', titulo: 'Private classes', texto: 'Any time, any location, at your speed: salsa, bachata or any dance. Busy, or need a wedding choreography? This is the one.',
    precio: 'From 600 pesos (35 USD) per hour', extra: 'Coming with friends or a bachelor party? Ask for a group private class.', wa: "Hi! I'm in Mexico City for a weekend and I'd like a private salsa/bachata class." },
  { id: 'week', boleto: 'A week', dias: '5 days', titulo: 'Bootcamp, starting every Monday', texto: 'Five days with a private coach, plus free ISM group classes and socials. The Combo adds two hours of Spanish a day.',
    precio: '', extra: 'Want salsa and bachata? They customise the package.', wa: "Hi! I'm in Mexico City for a week and I'm interested in the bootcamp." },
  { id: 'month', boleto: 'A month', dias: '5 weeks', titulo: 'Zero to Salsa: 5-week course', texto: 'Master the salsa basics in a group: Monday and Wednesday at 7:30 pm. No experience and no partner needed.',
    precio: '', extra: 'Ask on WhatsApp for the next start date.', wa: "Hi! I'm in Mexico City for about a month and I'd like to join the 5-week salsa course." },
  { id: 'local', boleto: 'I live here', dias: 'Every week', titulo: 'Join the community', texto: 'Group classes, socials, group trips and language exchange. It is hard to meet people once you start to work: this is where they do.',
    precio: '', extra: 'Start with the WhatsApp group and come say hello.', wa: "Hi! I live in Mexico City and I'd like to join ISM's classes and community." },
];

export const cancelacion = [
  'Private class hours must be used within 2 months of purchase.',
  'Same-day cancellations count as a used session.',
  'Cancel at least 12 hours ahead and the class is rescheduled at no extra cost.',
  'If the teacher can’t schedule your classes, you can request a refund for the remaining hours.',
];

export const resenas = [
  { texto: 'I absolutely loved the class! Kentaro is a great dancer and teacher. He explains everything very precisely, and the atmosphere is relaxed and friendly.', autor: 'B.C.' },
  { texto: 'Es una gran manera de aprender a bailar: después de la clase hay un tiempo para practicar o para bailar con los que ya están más avanzados.', autor: 'Jesica Hernandez' },
  { texto: 'Kentaro’s dance classes are very well organised and explained. You never feel intimidated and can fully enjoy yourself.', autor: 'Iva Keselicova' },
  { texto: 'Bachata and Salsa classes on Parque México are my fav time of the week. Kentaro is super fun and a nice teacher.', autor: 'Pablo Pivo' },
  { texto: 'I came to my first class solo. The participants were friendly and made me feel welcome. I met a lot of my good friends in Mexico City through my classes and social events.', autor: 'Kris' },
];
