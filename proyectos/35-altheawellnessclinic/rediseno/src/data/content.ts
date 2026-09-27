// Contenido de Althea Wellness Clinic, tomado del sitio original (clon en ../sitio e investigacion/crudo.json).
// Regla: nada inventado. Si falta un dato, se deja fuera y se anota en CAMBIOS.md.
// Las fotos son copias .webp del clon en ../assets/web (ver fotos-web.mjs).
// Medicina estética: se usan sus nombres de tratamiento, lo que incluye cada uno y sus precios "Starting at";
// se quitaron las afirmaciones de salud, seguridad y resultados más fuertes (ver CAMBIOS.md).
import medidas from './fotos.json';

export const foto = (nombre: keyof typeof medidas) => ({
  src: `${import.meta.env.BASE_URL}${nombre}.webp`,
  width: medidas[nombre][0],
  height: medidas[nombre][1],
});

export const negocio = {
  nombre: 'Althea Wellness Clinic',
  whatsapp: '529841653990',
  whatsappVisible: '+52 984 165 3990',
  telefono: '+529841653990',
  correo: 'admin@altheawellnessclinic.com',
  calle: 'Calle 42 Lote 1, Número interior 101, Colonia Zazil-Ha',
  ciudad: 'Playa del Carmen, 77720, Q. Roo',
  referencia: 'Ground floor of the Casa Habanero building, corner of 42nd St & 15th Ave.',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Althea%20Wellness%20Clinic%2C%20Calle%2042%2C%20Zazil-Ha%2C%20Playa%20del%20Carmen',
  horario: [
    { dias: 'Monday to Friday', horas: '9:00 to 19:00' },
    { dias: 'Saturday', horas: '9:00 to 14:00' },
  ],
  redes: [
    { nombre: 'Instagram', url: 'https://www.instagram.com/altheawellnessclinic' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61582677239691' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@altheawellnessclinic' },
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/althea-wellness-clinic-m%C3%A9xico/' },
  ],
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hello Althea! I would like to book a consultation.');

export const portada = {
  h1: 'Premier Aesthetic & Wellness Clinic in Playa del Carmen',
  sub: 'Discover the ultimate standard in regenerative beauty, with the latest in Botox, dermal fillers, endolifting, and exclusive Sofwave™ technology.',
};

export const pilares = [
  {
    titulo: 'Advanced Aesthetic Medicine',
    lema: 'Beauty guided by science.',
    texto: 'Medical-grade aesthetic treatments, including Botox, advanced dermal fillers, and facial rejuvenation, designed with precision, ethics, and artistry through certified clinical protocols.',
  },
  {
    titulo: 'Wellness & Longevity',
    lema: 'Holistic balance and regenerative health.',
    texto: 'Personalized longevity programs that combine functional medicine, premium IV therapy, advanced bioidentical hormones, and custom nutrition.',
  },
  {
    titulo: 'Innovation & Biohacking',
    lema: 'The medicine of the future, today.',
    texto: 'Non-invasive technologies like Sofwave™ ultrasound lifting, advanced biotechnology, data-driven diagnostics, and cutting-edge devices.',
  },
  {
    titulo: 'International Standards',
    lema: 'World-class care, globally trusted.',
    texto: 'Catering to patients from the US, Canada, and Europe with a fully bilingual medical staff, FDA-approved technologies, and concierge services for medical travel in the Riviera Maya.',
  },
];

// Precios "Starting at" tal como los publica /treatments (USD y MXN, los dos suyos; nunca se convierten).
// usd/mxn en null = "Pricing upon medical evaluation" (o cotización especial).
export type Tratamiento = {
  id: string;
  nombre: string;
  incluye: string;
  usd: number | null;
  mxn: number | null;
  nota?: string; // texto de su propio sitio que acompaña el precio
  agenda?: string; // dato de agenda que su sitio publica
};
export type Categoria = { id: string; nombre: string; tratamientos: Tratamiento[] };

export const categorias: Categoria[] = [
  {
    id: 'estetica',
    nombre: 'Advanced Medical Aesthetics',
    tratamientos: [
      { id: 'botox', nombre: 'Botox & Wrinkle Relaxers', incluye: 'Full Face Botox, Baby Botox, Masseter (SlimFace/Bruxism), Axillary Hyperhidrosis and Trap Tox (Barbie Botox), with premium neuromodulators.', usd: 150, mxn: 2500 },
      { id: 'rellenos', nombre: 'Advanced Dermal Fillers', incluye: 'High-end hyaluronic acid: Lip Fillers, Tear Troughs (under-eyes), Liquid Rhinoplasty, Jawline Contour and Full Face Facial Harmonization.', usd: 350, mxn: 6000 },
      { id: 'bioestimuladores', nombre: 'Collagen Biostimulators & Sculpting', incluye: 'Radiesse® (face, neck, hands), PDO Thread Lifting and Lanluma® for non-surgical buttock contouring.', usd: 450, mxn: 8000 },
      { id: 'biorevitalizacion', nombre: 'Cellular Biorevitalization & Regenerative Therapies', incluye: 'Injectable treatments with Polynucleotides (Salmon Sperm Therapy), Exosomes, NCTC and skin boosters like Luhilo Snow.', usd: 100, mxn: 1800 },
    ],
  },
  {
    id: 'equipos',
    nombre: 'Next-Gen Skin Tightening & Devices',
    tratamientos: [
      { id: 'sofwave', nombre: 'Sofwave™ Ultrasound Therapy', incluye: 'FDA-cleared SUPERB™ ultrasound technology for non-surgical face and neck lifting, performed by certified specialists.', usd: 280, mxn: 5000, nota: 'Customized pricing upon medical consultation', agenda: 'Session of 30 to 45 minutes' },
      { id: 'endolifting', nombre: 'Endolifting (ENDOLYSE®)', incluye: 'Minimally invasive laser treatment for the lower third of the face, submental area (double chin) and body contouring.', usd: 1200, mxn: 20000, nota: 'Facial $20,000 MXN, body area $25,000 MXN', agenda: 'Includes 5 post-care medical massages' },
    ],
  },
  {
    id: 'correctivos',
    nombre: 'Targeted Medical Correctives & Scalp Therapy',
    tratamientos: [
      { id: 'despigmentante', nombre: 'Intensive Depigmenting Protocol', incluye: 'For sun spots, melasma and hyperpigmentation, with the intensive Cosmelan® by Mesoestetic® clinical protocol.', usd: 850, mxn: 15000 },
      { id: 'enzimas', nombre: 'Recombinant Enzyme Therapy', incluye: 'PBSerum® Plus Recombinant Enzymes (lipase, lyase and collagenase) via targeted subcutaneous micro-injections, for facial and body contouring and correcting previous fillers.', usd: 155, mxn: 2800 },
      { id: 'capilar', nombre: 'Advanced Hair Restoration', incluye: 'Medical trichology protocols for men and women: scalp mesotherapy paired with premium biorevitalizers.', usd: 155, mxn: 2800 },
    ],
  },
  {
    id: 'iv',
    nombre: 'Premium IV Therapy & Cellular Wellness',
    tratamientos: [
      { id: 'iv', nombre: 'Advanced IV Therapies', incluye: 'Medical-grade intravenous formulations, customized by the medical staff.', usd: 95, mxn: 1600 },
    ],
  },
  {
    id: 'peptidos',
    nombre: 'Peptides and Weight Management',
    tratamientos: [
      { id: 'glp1', nombre: 'GLP-1 Medical Weight Management', incluye: 'A supervised metabolic program with a personalized protocol, continuous medical consultations and body composition technology.', usd: 30, mxn: 500, nota: 'Consultation & Assessment', agenda: 'Starts with a consultation & assessment' },
      { id: 'peptidos', nombre: 'Personalized Peptide Therapy', incluye: 'Peptide protocols chosen after a professional medical evaluation.', usd: null, mxn: null, nota: 'Pricing upon medical evaluation' },
    ],
  },
  {
    id: 'piel',
    nombre: 'Skincare, Body Sculpting & Recovery Devices',
    tratamientos: [
      { id: 'rejuvenecimiento', nombre: 'Advanced Clinical Rejuvenation', incluye: 'Medical microneedling (Nanopore/Dermapen) with Exosomes, Collagen Boost protocols and the Idenel Spicules treatment.', usd: 85, mxn: 1500 },
      { id: 'faciales', nombre: 'Deep Purifying & Radiance Facials', incluye: 'Signature Skin Fuel and Glow Reset facials, dermatological peels and dermaplaning.', usd: 55, mxn: 1000 },
      { id: 'bodyshock', nombre: 'Body Shock mesoestetic®', incluye: 'Subcutaneous body protocols with the Bodyshock® by Mesoestetic® system.', usd: 80, mxn: 1400 },
      { id: 'postop', nombre: 'Post-Op Suite', incluye: 'Post-surgical care with therapeutic ultrasound and professional manual lymphatic drainage.', usd: 45, mxn: 800 },
      { id: 'hidrogeno', nombre: 'Molecular Hydrogen Therapy', incluye: 'Inhalation of medical-grade molecular hydrogen.', usd: 35, mxn: 600 },
      { id: 'led', nombre: 'Advanced LED Light Therapy', incluye: 'LED phototherapy protocols with specific wavelengths, customized for each skin.', usd: 30, mxn: 500 },
      { id: 'inbody', nombre: 'InBody', incluye: 'Clinical body composition analysis: muscle mass, body fat percentage and water retention levels.', usd: 30, mxn: 500 },
    ],
  },
  {
    id: 'fcells',
    nombre: 'F Cells',
    tratamientos: [
      { id: 'fcells', nombre: 'Autologous Fibroblast & Regenerative Therapy', incluye: 'Your own skin fibroblasts, cultivated in a certified laboratory and re-injected by the doctors.', usd: null, mxn: null, nota: 'Pricing upon medical evaluation' },
    ],
  },
  {
    id: 'concierge',
    nombre: 'Medical Tourism & VIP Concierge',
    tratamientos: [
      { id: 'concierge', nombre: 'VIP Aesthetic Medicine Concierge', incluye: 'For international travelers, expats and medical tourists: treatments planned to fit into your Riviera Maya itinerary.', usd: null, mxn: null, nota: 'Pricing upon special quotation depending on package' },
    ],
  },
];

export const sueros = [
  'Recovery & Rehydration',
  'Advanced Post-Op & Tissue Repair',
  'Immunity Shield & Advanced Defense',
  'Cellular Protection & Deep Detox',
  'Peak Performance & Energy Boost',
  'Cellular Longevity & Anti-Aging',
  'Neuro Boost & Brain Optimization',
  'Beauty Glow & Skin Regeneration',
  'Hair Growth & Scalp Vitality',
  'Bespoke Custom IV Formulation',
];

// Pasos de sus páginas de Sofwave y Endolifting (recortados).
export const sofwave = {
  intro: 'Sofwave™ uses Synchronous Ultrasound Parallel Beam Technology (SUPERB™) at an approximate depth of 1.5 mm in the mid-dermis, with the patented SofCool™ system cooling the surface of the skin during the session.',
  pasos: [
    { t: 'Consultation & Mapping', d: 'The medical team evaluates your skin at the Playa del Carmen clinic and designs a customized plan.' },
    { t: 'Comfort Preparation', d: 'A medical-grade topical numbing cream is applied before the session.' },
    { t: 'The Sofwave™ Session', d: 'In a private clinical suite. The session takes 30 to 45 minutes.' },
    { t: 'Back to your day', d: 'According to the clinic there is no downtime: a slight temporary redness may appear, and most patients resume their activities the same day.' },
  ],
  doctoras: [
    'Dr. Diana H. holds official international certification in Sofwave™ clinical protocols.',
    'Dr. Miriam Aguirre is trained and certified in Sofwave™ ultrasound technology.',
  ],
};

export const endolifting = {
  intro: 'ENDOLYSE® protocols use an ultra-fine optical fiber and dual-wavelength 980 nm + 1470 nm diode laser energy beneath the skin, for the double chin, lower face, neck and selected body areas.',
  pasos: [
    { t: 'Medical Assessment', d: 'Your facial or body anatomy is evaluated to design a personalized plan.' },
    { t: 'Anatomical Mapping', d: 'Treatment areas are mapped according to your proportions and goals.' },
    { t: 'Preparation & Comfort', d: 'The area is prepared following medical protocols, with local numbing.' },
    { t: 'ENDOLYSE Treatment', d: 'An ultra-fine optical fiber is introduced beneath the skin to deliver controlled laser energy.' },
    { t: 'Post-care Recovery', d: '5 post-care medical massages and follow-up evaluations with the doctor.' },
    { t: 'Progressive Changes', d: 'Collagen remodeling continues to develop over the following weeks and months.' },
  ],
  precios: [
    { zona: 'Facial Endolifting (double chin, jawline, lower face or neck)', precio: '$20,000 MXN' },
    { zona: 'Body Endolifting (selected body area)', precio: '$25,000 MXN' },
  ],
  nota: 'Final pricing is determined after medical assessment according to the treatment area and individualized protocol.',
};

export const porque = {
  titulo: 'We go beyond aesthetics.',
  texto: [
    'At Althea Wellness Clinic, we combine advanced aesthetic medicine, regenerative science, longevity-focused wellness, and cutting-edge technology. Our philosophy goes beyond treating isolated concerns: we create customized treatment plans designed to help patients age beautifully and enhance natural beauty.',
    'Our medical team specializes in Botox® and Botulinum Toxin treatments, Dermal Fillers, Facial Harmonization, Radiesse® and other Collagen Biostimulators, Skin Boosters, Polynucleotides, Medical Weight Management, IV Therapy, and regenerative protocols.',
  ],
  experiencia: 'Over 10 years of experience',
  cita: { texto: 'At Althea, I found a space where medical care feels personal, and wellness becomes a true way of living.', autor: 'Michelle G., client' },
  tienda: 'Physician-recommended skincare, wellness, and regenerative products in our physical store:',
  marcas: ['Mesoestetic®', 'Colorescience®', 'TiZO®', 'Regene Global®', 'IDENEL®', 'Dr. CYJ'],
};

// Regiones que nombra su sitio ("patients from the US, Canada, and Europe") más quien vive en México.
export const origenes = [
  { id: 'us', nombre: 'United States', corto: 'USA', local: false },
  { id: 'ca', nombre: 'Canada', corto: 'Canada', local: false },
  { id: 'eu', nombre: 'Europe', corto: 'Europe', local: false },
  { id: 'mx', nombre: 'I live in Mexico', corto: 'Mexico', local: true },
] as const;
