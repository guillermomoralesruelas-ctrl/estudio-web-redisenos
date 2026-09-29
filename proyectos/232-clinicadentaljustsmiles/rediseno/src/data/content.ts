// Contenido de Justsmiles Dental Clinic (Puerto Vallarta, Jalisco), tomado del sitio original en inglés:
// investigacion/crudo.json (inicio, who we are, services, dental implants, periodontics) e investigacion/original.html.
// La nube no llega a justsmiles.mx.
// Regla: nada inventado. Sin precios (el sitio no los publica) y sin promesas ("painless", "guaranteed").
// Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);
export const archivo = img;

export const negocio = {
  nombre: 'Justsmiles',
  subtitulo: 'Clínica Dental Dr. Guillén',
  desde: 1987,
  whatsapp: '523221363030',
  whatsappTexto: '+52 322 136 3030',
  telefonos: [['+52 322 223 05 05', 'tel:+523222230505'], ['+52 322 223 29 90', 'tel:+523222232990'], ['+52 322 688 55 57', 'tel:+523226885557']] as const,
  correo: 'atencionaclientes@justsmiles.com.mx',
  direccion: 'Basilio Badillo 311, Col. Emiliano Zapata, Puerto Vallarta, Jalisco, México',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Justsmiles, Basilio Badillo 311, Emiliano Zapata, Puerto Vallarta, Jalisco'),
  espanol: 'https://justsmiles.mx/es',
  sitio: 'https://justsmiles.mx',
  facebook: 'https://www.facebook.com/clinica.just.smiles',
  instagram: 'https://www.instagram.com/justsmiles_dental/',
  google: { nota: '4.7', resenas: 42 },
};

// Horario de su sitio: lunes a viernes 9:00 a 20:00, sábado 9:00 a 13:00, domingo cerrado. Índice = getDay().
export const horarioPorDia: (null | [string, string])[] = [
  null, ['9:00 am', '8:00 pm'], ['9:00 am', '8:00 pm'], ['9:00 am', '8:00 pm'], ['9:00 am', '8:00 pm'], ['9:00 am', '8:00 pm'], ['9:00 am', '1:00 pm'],
];
export const horario = [['Monday to Friday', '9:00 am to 8:00 pm'], ['Saturday', '9:00 am to 1:00 pm'], ['Sunday', 'Closed']] as const;

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waCita = wa('Hi, I would like to book an appointment at Justsmiles.');

export const porQue =
  'At Justsmiles®, we are a dedicated team of expert dentists committed to providing world-class dental care in Puerto Vallarta. Since 1987, we have proudly served our community, responding to the growing demand for professional and specialized dental services.';
export const mision =
  'Over the years, we have become a trusted choice for patients from Mexico, the United States, and Canada, who seek quality care in a comfortable and welcoming environment.';

export const puntos = [
  ['Experienced Team', 'Over 35 years of trusted dental care in Puerto Vallarta, serving local and international patients.'],
  ['Advanced Technology', 'State-of-the-art equipment and modern techniques for precise, safe, and efficient treatments.'],
  ['Personalized Care', 'Tailored treatment plans designed to meet your unique needs and enhance your smile.'],
] as const;

export type Servicio = { id: string; nombre: string; texto: string; incluye?: [string, string][] };
export const servicios: Servicio[] = [
  { id: 'cleaning', nombre: 'Check-up and cleaning', texto: 'It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.' },
  {
    id: 'implants', nombre: 'Dental Implants', texto: 'Permanent tooth replacement that restores function, comfort, and a natural smile.',
    incluye: [
      ['Dental Implant Placement (single or multiple)', 'Surgical procedure to replace one or several missing teeth with titanium implants that act as artificial roots.'],
      ['Implant-Supported Prostheses (fixed or removable)', 'Custom restorations placed over implants to restore chewing function, aesthetics, and overall comfort.'],
      ['Implant Maintenance and Follow-up', 'Regular check-ups and professional cleanings to ensure proper implant integration and prevent long-term complications.'],
      ['Full-Arch Rehabilitation', 'Restoration of an entire dental arch using implant-supported prostheses (e.g., All-on-4 / All-on-6).'],
    ],
  },
  {
    id: 'perio', nombre: 'Periodontics', texto: 'Specialized care for gums and bone, preventing and treating periodontal disease.',
    incluye: [
      ['Deep Cleanings', 'Removal of tartar and plaque accumulated beneath the gums to prevent periodontal disease.'],
      ['Treatment of Gingivitis and Periodontitis', 'Management and treatment of inflammation and loss of dental support to preserve healthy teeth and gums.'],
      ['Periodontal Surgeries', 'Surgical procedures to regenerate tissue, reduce periodontal pockets, and improve oral health.'],
      ['Periodontal Maintenance', 'Personalized check-ups and cleanings to prevent relapses and maintain healthy gums.'],
    ],
  },
  { id: 'ortho', nombre: 'Orthodontics', texto: 'Correct teeth alignment with braces or aligners for a healthier, confident smile.' },
  { id: 'endo', nombre: 'Endodontics', texto: 'Root canal treatments to save natural teeth and relieve dental pain.' },
  { id: 'prostho', nombre: 'Prosthodontics', texto: 'Restoration and replacement of missing or damaged teeth through fixed, removable, or implant-supported prostheses.' },
  { id: 'surgery', nombre: 'Oral and Maxillofacial Surgery', texto: 'Specialized treatments for the extraction of impacted or misaligned wisdom teeth.' },
];

export const equipo = [
  { foto: 'dr-martin-guillen', nombre: 'Dr. Martín Guillén' },
  { foto: 'dra-fernanda-lara', nombre: 'Dra. Fernanda Lara' },
  { foto: 'dr-manuel-martinez', nombre: 'Dr. Manuel Martínez' },
  { foto: 'dra-guillermina-estrada', nombre: 'Dra. Guillermina Estrada' },
];

// Las reseñas de su página de inicio (no se usan las de la página de periodoncia, que parecen de plantilla).
export const resenas = [
  { autor: 'Esther Tobin', texto: 'We can’t say enough good things about Just Smiles. Very affordable dental care (for Canadians), and zero hard sell. My husband and I each booked an appointment for a cleaning and whitening, and my husband’s doctor said he didn’t need the whitening. Much appreciated! The cleanings were thorough, good quality work, and everyone is super friendly.' },
  { autor: 'Faye Kelly', texto: 'I would highly recommend this Dental facility! They have amazing service, and the top end equipment and service. The dentist assured me of not needing dental implants, but a bridge would be best, I so appreciate his honesty and not upselling me.' },
  { autor: 'Raphaël Pathé', texto: 'I got a deep cleaning today with Dra. Guillermina Estrada González and I’m very satisfied: she was gentle, friendly, the room was super clean, the music was perfect.' },
  { autor: 'Kathy McCartney', texto: 'My husband and I have gone to PV for many years and finally decided to have our teeth cleaned. We were both very impressed with the service, the office and our dentists. We will probably get it done again next year.' },
  { autor: 'Frankie Arreazola', texto: 'One of my crowns needed to be re-cemented and it was done fast and inexpensively. Appointment was made and I was in and out. Staff was friendly, office was super clean.' },
  { autor: 'Joan Blomlie', texto: 'Dr Monica Moreno did a better job than my dentist in the US. She replaced a front tooth chip, porcelain, and it looks 100% better.' },
];

export const faq = [
  ['How often should I visit the dentist?', 'It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.'],
  ['What should I do in a dental emergency?', 'Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling.'],
  ['What are my options for replacing missing teeth?', 'We offer dental implants, bridges, and dentures depending on your needs and preferences.'],
  ['Is teeth whitening safe?', 'Yes, when performed by a dental professional, teeth whitening is safe and effective.'],
] as const;
