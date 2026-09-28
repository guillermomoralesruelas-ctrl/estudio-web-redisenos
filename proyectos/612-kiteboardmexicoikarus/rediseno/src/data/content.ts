// Content from Kiteboard Mexico Ikarus (kiteboardmexico.com: home, Kiteboard Lessons, Accommodations, Restaurant),
// checked with curl on 2026-09-28. The site is in English (with a French version), so the redesign is in English.
// Texts marked "nuestro" are the redesign's own.

export const place = {
  name: 'Ikarus Kite & Wing Center',
  brand: 'Kiteboard Mexico Ikarus',
  since: 2002,
  address: 'SM 14 MZ 3 LT 5, Predio La Esperanza, Playa Mujeres, Isla Blanca, 77400 Cancún, Q.R.',
  where: 'On the Chacmuchuch lagoon natural reserve, 20 minutes north of downtown Cancún',
  whatsapp: { text: '+52 998 874 4245', number: '529988744245' },
  email: 'info@kiteboardmexico.com',
  map: 'https://www.google.com/maps/search/?api=1&query=Ikarus+Kiteboarding+Centre+Isla+Blanca+Cancun',
  social: [
    ['Instagram', 'https://www.instagram.com/ikaruskiteboarding'],
    ['Facebook', 'https://www.facebook.com/kiteboardmexico/'],
    ['YouTube', 'https://www.youtube.com/user/ikaruskiteboarding'],
  ] as const,
  languages: 'English, Spanish, German, Italian and French',
};

export const wa = (text: string) => `https://wa.me/${place.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const why = [
  ['Flat, shallow water', 'Suitable with any wind direction: they say you learn 30 to 50% faster than in deep or wavy water.'],
  ['Boat and jet ski support', 'Every lesson is backed by a rescue boat; they take you upwind so you spend more time riding.'],
  ['Since 2002', 'The first kiteboarding school in the Riviera Maya, with certified instructors.'],
  ['Any age that swims', 'From first lesson to advanced tricks, in kiteboard, kitefoil, wingfoil and wing SUP.'],
] as const;

export type Lesson = { id: string; kind: 'group' | 'private'; hours: number; price: number; perPerson: boolean };

export const lessons: Lesson[] = [
  { id: 'g2', kind: 'group', hours: 2, price: 3300, perPerson: true },
  { id: 'g3', kind: 'group', hours: 3, price: 4800, perPerson: true },
  { id: 'g6', kind: 'group', hours: 6, price: 8400, perPerson: true },
  { id: 'p1', kind: 'private', hours: 1, price: 2300, perPerson: false },
  { id: 'p2', kind: 'private', hours: 2, price: 4500, perPerson: false },
  { id: 'p3', kind: 'private', hours: 3, price: 6600, perPerson: false },
  { id: 'p6', kind: 'private', hours: 6, price: 12000, perPerson: false },
];

// Rates per night from the Accommodations page. Extra person $250, child $120 (their figures).
export const stays = [
  { id: 'none', name: 'I have my own place', price: 0, people: 0, photo: '' },
  { id: 'king', name: 'King size studio', price: 2772, people: 2, photo: 'f-king' },
  { id: 'triple', name: 'Triple room', price: 2244, people: 3, photo: '' },
  { id: 'double', name: 'Double room', price: 1980, people: 2, photo: 'f-doble' },
  { id: 'camp2', name: 'Camping, two people', price: 840, people: 2, photo: '' },
  { id: 'camp1', name: 'Camping, one person', price: 600, people: 1, photo: '' },
];

export const extraPerson = 250;

export const rentals = [
  ['Complete kite equipment', '2 h $1,900, 4 h $3,000'],
  ['Kite', '2 h $1,300, 4 h $2,000'],
  ['Board', '2 h $700, 4 h $1,100'],
  ['Complete wing gear', '1 h $1,100'],
  ['S.U.P.', '2 h $300, 4 h $400'],
  ['Supervision with your own gear', '1 h $1,500 per person'],
] as const;

export const reviews = [
  { name: 'Alexandre R', text: 'I spent one week at Ikarus to learn kitesurfing as a beginner. It was a blast! Both the natural conditions and the crew were perfect to learn.' },
  { name: 'D O', text: 'I took 6 hours of kiteboarding lessons at Ikarus over two days, and it was a great experience. My instructor, Enrique (Kike), was incredibly skilled.' },
  { name: 'Catherine S', text: 'Wonderful, family-run, low key spot for kite surfers visiting from around the world. Excellent accommodations, lovely setting on the lagoon.' },
  { name: 'Patsy H', text: 'We just spent 2 weeks at Ikarus, and it was our second time there. There really is no better place to learn to kitesurf, disconnect and regain your perspective.' },
];

export const hotel = {
  rooms: '10 rooms with private bathroom, hot shower, free Wi-Fi and fan (no air conditioning); camping, tents and hammocks',
  solar: 'They generate their own electricity with a solar system.',
  extras: ['Swimming pool', 'Private beach', 'Garden', 'Kids playground', 'Bar and restaurant', 'S.U.P. and kayaks', 'Sunsets'],
  restaurant: 'Breakfast, salads, tacos, quesadillas and ceviche, with homemade bread and organic produce.',
};
