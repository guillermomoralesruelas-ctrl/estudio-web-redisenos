// Content for EG Dental Clinic, taken from its site (egdentalmex.com, WordPress in English): the clone,
// investigacion/original.html and investigacion/crudo.json (home, about). The live site sits behind a captcha
// (checked 2026-09-29), so the full price list page could not be read: only the prices on the home page are used.
// Nothing was invented. The site publishes no WhatsApp, address text or hours: its US phone is used as WhatsApp (pending).

export const clinic = {
  name: 'EG Dental Clinic',
  place: 'Zona Río, Tijuana, Mexico',
  phone: { text: '(619) 373-8375', tel: '+16193738375' },
  whatsapp: '16193738375',
  email: 'bajadentalsolutions@gmail.com',
  instagram: 'https://www.instagram.com/egdentalclinictj/',
  youtube: 'https://www.youtube.com/channel/UC5xCiXIMoeIWQbhXbNLLZgQ',
  map: 'https://www.google.com/maps/search/?api=1&query=32.52078,-117.012516',
  // The same Google map embedded on their site.
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13456.80373789532!2d-117.012516!3d32.52078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a3bfbb6289a7e2e!2sClinica%20EG%20DENTAL!5e0!3m2!1sen!2sus!4v1646688845053!5m2!1sen!2sus',
};

export const wa = (text: string) => `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

// "Our Affordable Dental Rates · General treatment services" (home page), in USD.
export const prices = {
  evaluation: 40,
  regularCleaning: 40,
  semiDeepCleaning: 90, // whole mouth
  deepCleaning: 80, // per quadrant
  whitening: 350, // Zoom, upper and lower
  filling: 70, // white composite
  extraction: 120,
  surgicalExtraction: 160,
  wisdom: 240,
  wisdomImpacted: 280,
  boneGraft: 290, // in extraction
  healingPin: 80, // in extraction
};

export type Mode = 'filling' | 'extraction' | 'surgical' | 'wisdom' | 'impacted';
export const modes: { id: Mode; label: string; price: number; color: string; wisdomOnly?: boolean }[] = [
  { id: 'filling', label: 'White filling', price: prices.filling, color: '#0a7178' },
  { id: 'extraction', label: 'Extraction', price: prices.extraction, color: '#c2410c' },
  { id: 'surgical', label: 'Surgical extraction', price: prices.surgicalExtraction, color: '#7c2d12' },
  { id: 'wisdom', label: 'Wisdom tooth', price: prices.wisdom, color: '#6d28d9', wisdomOnly: true },
  { id: 'impacted', label: 'Impacted wisdom tooth', price: prices.wisdomImpacted, color: '#3b0764', wisdomOnly: true },
];
export const wisdomTeeth = [1, 16, 17, 32];

export const treatments = [
  { name: 'Dental implants', text: 'Replace missing teeth with a natural-looking, functional smile.' },
  { name: 'Dental crowns', text: 'Protective caps that restore strength and shape to damaged teeth.' },
  { name: 'White composite fillings', text: 'Fix cavities with a filling that blends with your teeth.' },
  { name: 'Root canals', text: 'Done by their head dentist, a root canal specialist.' },
  { name: 'Dentures', text: 'Custom-made removable prosthetics.' },
  { name: 'Bone grafts', text: 'Build up the jaw to support dental implants.' },
  { name: 'Dental posts and extractions', text: 'Including wisdom teeth, regular and surgical extractions.' },
  { name: 'Zoom laser whitening', text: 'Upper and lower whitening in the office.' },
];

export const team = [
  { name: 'Dra. Eva Guerrero', role: 'Head dentist · Root canal specialist' },
  { name: 'Dr. Carlos Guerrero', role: 'Orthodontist' },
  { name: 'Dr. Alan Martínez', role: 'Dental implant specialist' },
  { name: 'Dra. Damaris Zúñiga', role: 'Dentist' },
  { name: 'Ms. Lorena López', role: 'Dental assistant' },
];

export const why = [
  { title: 'In Zona Río', text: 'A spacious, professional office in a new medical building near major medical facilities, not in the old downtown.' },
  { title: 'Help getting here', text: 'Transportation assistance from border pickups to airport transfers, and hotel reservations.' },
  { title: 'Modern office', text: 'Digital X-rays and HD monitors so you can see and understand your dental health.' },
  { title: 'Insurance', text: 'They say they are contracted by your insurance: ask them about yours.' },
];

// Testimonials published on their home page.
export const reviews = [
  { name: 'John', text: 'Dr. EVA is so very gentle, I couldn’t even tell when she injected me with the anesthetic. She was very conscientious of making me feel comfortable while she worked.' },
  { name: 'Judy', text: 'In Tijuana, I found everything to be very clean and nice, at least in the part of town where the clinic is at. The facilities are nicer than the local clinic in my town.' },
];
