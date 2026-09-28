// Contenido de Let's Smile Dentistry (Mexicali), tomado de su sitio en inglés (inicio, About us, Clinic facilities,
// Dr. Tomás García, Dental services y Dental tourism), revisado con curl el 2026-09-28. El sitio está en inglés para
// pacientes de EE. UU. y Canadá, así que el rediseño también. Los textos marcados "nuestro" son del rediseño.

export const clinic = {
  name: "Let's Smile Dentistry",
  address: 'Calzada Cetys 4216, Local 21, Colonia Calles, C.P. 21376, Mexicali, Baja California, Mexico',
  street: 'Calzada Cetys 4216, Local 21, Col. Calles',
  border: 'About 3 minutes from the East Port of Entry (Calexico East)',
  hours: [
    ['Monday to Friday', '9:00 AM to 8:00 PM'],
    ['Saturday', '9:00 AM to 2:00 PM'],
  ] as const,
  emergencies: 'Emergency appointments based on availability',
  phone: { text: '+1 (760) 620-3040', tel: '+17606203040' },
  whatsapp: '17606203040',
  email: 'info@letssmiledentistry.com',
  map: 'https://www.google.com/maps/search/?api=1&query=Let%27s+Smile+Dentistry+Calzada+Cetys+4216+Mexicali',
  rating: { stars: '5.0', reviews: 50 },
  social: [
    ['Instagram', 'https://www.instagram.com/letssmiledentistry/'],
    ['Facebook', 'https://www.facebook.com/people/Lets-Smile-Dentistry/61585324011258/'],
    ['TikTok', 'https://www.tiktok.com/@lets.smile.dentistry'],
    ['YouTube', 'https://www.youtube.com/@letssmiledentistry'],
  ] as const,
  spanish: 'https://letssmiledentistry.com/mx/',
  tour: 'https://www.youtube.com/watch?v=PVlzCyUVzs4',
};

export const wa = (text: string) => `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;

export type Dentist = {
  id: string;
  name: string;
  focus: string;
  photo?: string;
  good: string[];
  fun: string[];
  url: string;
};

const about = (hash: string) => `https://letssmiledentistry.com/about-us/#${hash}`;

// "Good to know" y "Fun to know" como los escribe cada uno en About us (resumidos, en sus palabras).
export const dentists: Dentist[] = [
  {
    id: 'garcia', name: 'Dr. Tomás García, DDS', focus: 'Oral implantology, founder', photo: 'd-garcia',
    good: ['Bachelor’s in Dentistry, UABC, 13+ years of clinical experience', 'Master’s in Oral Implantology (CEYESOV)', 'Full-arch immediate loading training in Lisbon and at ILAPEO, Brazil', 'Member of ADA, AAID and ITI', 'More than 5,000 implants placed, with a 99% success rate (his figure)'],
    fun: ['Married to Andrea, two children: Genesis and Emilio', 'Watches NBA games (Go Knicks!)', 'Fishing, camping, traveling and cooking', 'Any music with good lyrics'],
    url: 'https://letssmiledentistry.com/dr-tomas-garcia/',
  },
  {
    id: 'alvarado', name: 'Dr. Ángel Alvarado, DDS', focus: 'Endodontics (root canals)', photo: 'd-alvarado',
    good: ['Dental surgeon and specialized endodontist', '13+ years of clinical experience', 'More than 2,500 cases treated', 'Microscope-assisted treatments, anxious patients and severe dental pain'],
    fun: ['His playlists sound like a norteño musician, a rapper, a Caribbean artist and a mom cleaning the house', 'Short series, soap operas and superhero movies', 'Travels starting with the local food'],
    url: about('dds-angel-alvarado'),
  },
  {
    id: 'aguilar', name: 'Dr. Daniel Aguilar, DDS', focus: 'Periodontics (gums and soft tissue)', photo: 'd-aguilar',
    good: ['Dental surgeon and periodontics specialist', 'Master in the Periodontics Specialty, UABC', 'Soft tissue around implants, microsurgery and full-arch immediate load'],
    fun: ['Photography, running, cycling and swimming', '“I’ve missed more flights than I’d like to admit.”'],
    url: about('dds-daniel-aguilar'),
  },
  {
    id: 'gonzalez', name: 'Dr. Rodrigo González', focus: 'Oral rehabilitation and implants', photo: 'd-gonzalez',
    good: ['Master’s in Oral Rehabilitation and Implants, BUAP', 'Digital design: Exocad, Exoplan, Blue Sky Plan and Meshmixer'],
    fun: ['Concerts, karaoke and guitar', 'Padel and basketball'],
    url: about('dds-rodrigo-gonzalez'),
  },
  {
    id: 'salinas', name: 'Dr. Martín Salinas', focus: 'Restorative dentistry', photo: 'd-salinas',
    good: ['Bachelor in Medical Dentistry, UAZ Zacatecas', 'Studying the Specialty in Oral Rehabilitation and Implantology (Dentomed, Los Mochis)', 'Digital workflow software'],
    fun: ['Loves dogs and training them', 'History and philosophy', 'Rock and classical guitar', 'Long hikes'],
    url: about('dds-martin-salinas'),
  },
  {
    id: 'ochoa', name: 'Dra. María José Ochoa', focus: 'General and preventive dentistry', photo: 'd-ochoa',
    good: ['Bachelor’s Degree in Dentistry, UABC', 'General and preventive care with a warm, calm approach'],
    fun: ['Forests, lakes and peaceful outdoor spaces', 'Good food, good music and good concerts', 'Traveling and new cultures'],
    url: about('dra-maria-ochoa'),
  },
  {
    id: 'preciado', name: 'Dr. José Preciado, DDS', focus: 'General dentistry and implants',
    good: ['Doctor of Dental Surgery, UABC (class of 2017)', 'Certificate in Implantology (NUCLEO, 2022)'],
    fun: ['Big NFL and barbecue fan', 'Plays padel now and then', 'Would have liked to be a pilot'],
    url: 'https://letssmiledentistry.com/about-us/',
  },
];

export type Treatment = {
  id: string;
  name: string;
  detail: string;
  price?: { item: string; mexicali: string; us: string; save: string }[];
  dentists: string[];
  note?: string;
  ask: string;
};

// Tratamientos de su página de servicios; precios de su tabla "What you'll pay in Mexicali vs. the U.S.".
export const treatments: Treatment[] = [
  {
    id: 'implants', name: 'Dental implants', detail: 'All-on-4, All-on-6, single implants, bone grafts and hybrid prostheses.',
    price: [
      { item: 'Single implant (implant + crown)', mexicali: '$1,650', us: '$4,000–$6,500', save: '~70%' },
      { item: 'All-on-4 full arch', mexicali: '$10,000', us: '$25,000–$35,000', save: '~65%' },
    ],
    dentists: ['garcia', 'aguilar', 'gonzalez', 'preciado'],
    ask: 'Hi! I’m interested in dental implants and would like a free quote.',
  },
  {
    id: 'cosmetic', name: 'Crowns, veneers and smile makeovers', detail: 'High-end crowns, veneers, whitening, full mouth rehab, gummy smile reduction and Invisalign.',
    price: [
      { item: 'Zirconia crown', mexicali: '$550', us: '$1,500–$2,500', save: '~70%' },
      { item: 'Porcelain veneer (per tooth)', mexicali: '$550', us: '$1,200–$2,800', save: '~70%' },
      { item: 'Full-arch smile makeover', mexicali: '$10,500', us: '$55,000–$80,000', save: '~80%' },
    ],
    dentists: ['salinas', 'gonzalez', 'garcia'],
    ask: 'Hi! I’m interested in crowns or veneers and would like a free quote.',
  },
  {
    id: 'rootcanal', name: 'Root canals', detail: 'Preserving teeth by eliminating infections and relieving severe pain, avoiding unnecessary extractions.',
    price: [{ item: 'Root canal', mexicali: '$450', us: '$1,200–$2,000', save: '~70%' }],
    dentists: ['alvarado'],
    ask: 'Hi! I need a root canal and would like a free quote.',
  },
  {
    id: 'gums', name: 'Gums and periodontics', detail: 'Soft tissue management around implants, microsurgery and long-term stability for full-arch cases.',
    dentists: ['aguilar'],
    ask: 'Hi! I’d like to see the periodontist about my gums.',
  },
  {
    id: 'general', name: 'Cleanings and general care', detail: 'Cleanings and exams, resin fillings, wisdom tooth extractions, bridges, crowns, dentures and TMJ treatment.',
    dentists: ['ochoa', 'preciado'],
    ask: 'Hi! I’d like to book a cleaning and exam.',
  },
  {
    id: 'kids', name: 'Kids’ dental care', detail: 'Gentle pediatric care, cleanings, protective sealants, sports mouthguards and infant frenectomies, in a kids’ operatory made to feel less clinical.',
    dentists: [],
    note: 'Their site does not name a dentist for kids: ask the patient coordinator.',
    ask: 'Hi! I’d like to book a dental visit for my child.',
  },
  {
    id: 'emergency', name: 'Dental emergencies', detail: 'Severe toothache, broken tooth or dental infection: same-day appointments based on availability.',
    dentists: [],
    note: 'Call or text first so they can fit you in.',
    ask: 'Hi! I have a dental emergency. Can you see me today?',
  },
];

export const steps = [
  ['Free consultation and quote', 'Send photos or x-rays; they reply with a plan, timeline and price before you travel.'],
  ['Plan your trip', 'Help with flights, border crossing, parking, shuttles and lodging.'],
  ['Cross the border', 'Cross at the East Port of Entry, about three minutes away. Some come and go the same day.'],
  ['Your treatment', 'Care in a modern clinic, with intraoral scanning, digital x-rays and CBCT.'],
  ['Aftercare and follow-up', 'Written instructions, recovery videos and the team a message away.'],
] as const;

export const rooms = [
  { photo: 'f-recepcion', name: 'Reception', text: 'A welcoming first step', alt: 'Reception with a wood-paneled wall, the green Let’s Smile logo, a white desk and orange armchairs' },
  { photo: 'f-tomografia', name: 'CBCT imaging suite', text: 'Detailed 3D diagnostic records', alt: 'Imaging room with the CBCT scanner and a desk showing a 3D scan of a jaw' },
  { photo: 'f-consultorio', name: 'Treatment rooms', text: 'Modern, organized care', alt: 'Treatment room with a dental chair, overhead light and a wall monitor' },
  { photo: 'f-infantil', name: 'Kids’ operatory', text: 'Made to feel less clinical', alt: 'Kids’ treatment room with a forest mural, a tree and a panda on the dental chair' },
];

export const tech = [
  ['CBCT + 5D planning', 'RAYPreMiere 3D records of dental and facial anatomy.'],
  ['Intraoral scanning', 'Aoralscan Elite and Medit i700, fewer conventional impressions.'],
  ['3D facial scanning', 'RAYFace joins facial scans, intraoral records and CBCT.'],
  ['CAD/CAM lab coordination', 'From scan to design and fabrication with fewer handoffs.'],
  ['Class B sterilization', 'Euronda E10 (Italy), with traceable records per patient.'],
  ['Medical-grade air', 'Dürr Dental Tornado (Germany): 100% oil-free compressed air.'],
] as const;

export const insurance = [
  ['Pay at the clinic', 'Transparent Mexican pricing, paid on your treatment day.'],
  ['They fill the paperwork', 'The bilingual team completes the ADA claim forms and itemized receipts.'],
  ['Get reimbursed', 'Submit the claim to your U.S. insurer. Most PPO plans cover out-of-network care abroad.'],
] as const;

export const reviews = [
  { name: 'Damon Baggs', text: 'Provided shuttle service to pick me up North of the border free of charge. State of the art facility and very attentive staff… It’s a third of the cost compared to any dentistry in the States.' },
  { name: 'Michelle voor den Dag', text: 'I went in for a total teeth removal, next day went in for the fitting of my implants, it only took 3 days for the treatment… They took care of hotel accommodations, shuttle service.' },
  { name: 'Irene Villa', text: 'My extraction and implant at Let’s Smile went smoothly, and the entire process was professional and comfortable… I’ve already scheduled my second implant.' },
  { name: 'Iris Villarino', text: 'Thank you so much for treating my little one so well; he didn’t suffer at all. Excellent service from all the staff.' },
];
