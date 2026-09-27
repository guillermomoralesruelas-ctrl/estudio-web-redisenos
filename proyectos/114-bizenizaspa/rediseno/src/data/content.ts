// Contenido de Bizé Nizá Spa, tomado del sitio original (investigacion/crudo.json: Inicio, Corporal, Facial, Rituales
// y Otros; y /domicilio y /promocion leídos con curl el 2026-09-27). Nada inventado: lo redactado por nosotros
// (títulos, bajadas, la asignación de cada servicio a una zona del cuerpo) está declarado en CAMBIOS.md.
// Rutas de imagen relativas a publicDir (../assets/web).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = img;

export const negocio = {
  nombre: 'Bizé Nizá Spa',
  whatsapp: '522227284970',
  whatsappTexto: '222 728 4970',
  telefono: '222 225 0935',
  telLink: '+522222250935',
  calle: 'Vía Volkswagen No. 4501, Local 2',
  colonia: 'Col. La Paz',
  cp: '72160',
  ciudad: 'Puebla, Pue.',
  horario: [
    ['Lunes a viernes', '10:00 a 21:00'],
    ['Sábados', '10:00 a 16:00'],
  ] as const,
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Bizé Nizá Spa, Vía Volkswagen 4501, La Paz, 72160 Puebla, Pue.'),
  instagram: 'https://www.instagram.com/bizeniza/',
  facebook: 'https://es-la.facebook.com/bizenizaspa/',
  twitter: 'https://twitter.com/BizeNizaSpa',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waGeneral = wa('Hola, buen día. Quisiera información sobre los servicios de Bizé Nizá Spa.');

export type Foto = { src: string; w: number; h: number; alt: string };
const f = (src: string, w: number, h: number, alt: string): Foto => ({ src: img(`${src}.webp`), w, h, alt });

export const fotos = {
  pareja: f('pareja-cabina', 800, 800, 'Una pareja con batas blancas bordadas con el logo de Bizé Nizá, sentada en las camillas de una cabina del spa'),
  espalda: f('masaje-espalda', 800, 800, 'Masaje de espalda a una clienta recostada sobre toallas blancas'),
  piedras: f('piedras-calientes', 800, 800, 'Clienta relajada con piedras calientes negras sobre la espalda'),
  pantuflas: f('pantuflas-bata', 336, 336, 'Pantuflas, bata y toallas blancas con el logo de Bizé Nizá Spa bordado'),
};

export type Categoria = 'corporal' | 'facial' | 'rituales' | 'otros';
export type Zona = 'cabeza' | 'rostro' | 'ojos' | 'espalda' | 'brazos' | 'manos' | 'vientre' | 'piernas' | 'pies' | 'cuerpo';

export type Servicio = {
  nombre: string;
  cat: Categoria;
  desc: string;
  dur: string;
  // Precio tal como lo dice su texto; null = "Pregunta el precio" (su sitio muestra 0.00 MXN).
  precio: string | null;
  zonas: Zona[];
  // Aparece en su página /domicilio con el botón "Pedir Servicio".
  domicilio?: boolean;
};

export const servicios: Servicio[] = [
  // Corporal
  { cat: 'corporal', nombre: 'Masaje Personalizado', desc: 'Son masajes en los que el cliente lo que escoge es el tiempo del servicio; se trabaja relajante y/o descontracturante, aplicando diferentes técnicas, dependiendo de las necesidades de cada cliente.', dur: '40, 60, 90 y 120 min', precio: 'De $670 a $1,950', zonas: ['cuerpo', 'espalda'] },
  { cat: 'corporal', nombre: 'Metzonalli', desc: 'Masaje relajante con el uso de aceite en vela.', dur: '80 min', precio: '$1,575', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Yiri', desc: 'Masaje con pindas: un preparado de hierbas aromáticas mezcladas con aceites esenciales, envueltas en una tela en forma de saco y calentadas al vapor.', dur: '90 min', precio: '$1,470', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Pamiwuari', desc: 'Masaje con fuego: éste es liberado en la atmósfera y la energía que libera es absorbida por nuestro cuerpo.', dur: '90 min', precio: '$1,575', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Yamania, piedras calientes', desc: 'Masaje que se realiza con piedras calientes de río u obsidiana a temperatura moderada.', dur: '40 u 80 min', precio: '$620 (40 min) o $1,300 (80 min)', zonas: ['cuerpo', 'espalda'] },
  { cat: 'corporal', nombre: 'Momotlalo', desc: 'Masaje profundo, fuerte y rápido; ayuda a recuperar la tonificación y la elasticidad.', dur: '60 min', precio: '$1,150', zonas: ['cuerpo', 'piernas'] },
  { cat: 'corporal', nombre: 'Sueco', desc: 'Masaje relajante o descontracturante, profundo, de cuerpo completo, con estiramientos.', dur: '80 min', precio: '$1,050', zonas: ['cuerpo'], domicilio: true },
  { cat: 'corporal', nombre: 'Suki', desc: 'Masaje aromaterapéutico, relajante. Se realiza con diferentes esencias y toallas calientes.', dur: '80 min', precio: '$1,050', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Xanthe', desc: 'Masaje relajante que se realiza con el uso de 9 esencias en el cuerpo.', dur: '60 min', precio: '$1,050', zonas: ['cuerpo'], domicilio: true },
  { cat: 'corporal', nombre: 'Kab yeet', desc: 'Masaje realizado con antebrazos en cuerpo completo.', dur: '60 min', precio: '$998', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Maya', desc: 'Masaje con rebozos.', dur: '60 min', precio: '$950', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Nanyotl', desc: 'Ideal para desestresar a la futura mamá y al bebé: un momento de conexión profunda y amorosa desde el vientre.', dur: '80 min', precio: '$945', zonas: ['vientre'], domicilio: true },
  { cat: 'corporal', nombre: 'Yolitia', desc: 'Masaje relajante en cuerpo completo con movimientos pausados, largos, firmes y progresivos.', dur: '60 min', precio: '$915', zonas: ['cuerpo'] },
  { cat: 'corporal', nombre: 'Nelpilollia', desc: 'Masaje con toallas calientes solo en espalda.', dur: '40 min', precio: '$630', zonas: ['espalda'] },
  { cat: 'corporal', nombre: 'Yen Cose Sika', desc: 'Masaje descontracturante de espalda, cuello y brazos.', dur: '40 min', precio: '$680', zonas: ['espalda', 'brazos'] },
  { cat: 'corporal', nombre: 'Reflexología en manos o pies', desc: 'Es la práctica de estimular puntos sobre los pies o manos llamados zonas reflejas.', dur: '30 min', precio: '$480', zonas: ['manos', 'pies'] },
  { cat: 'corporal', nombre: 'Tankugni', desc: 'Masaje neurocraneal.', dur: '30 min', precio: '$350', zonas: ['cabeza'] },
  { cat: 'corporal', nombre: 'Bari', desc: 'Masajes para bebés a partir de 3 meses de edad.', dur: '20 min', precio: '$300', zonas: [] },
  // Facial
  { cat: 'facial', nombre: 'Xitse', desc: 'Facial oxigenante, recomendado para pieles desvitalizadas y asfixiadas, para una piel renovada y de tono uniforme.', dur: '90 min', precio: '$1,260', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Microdermoabrasión', desc: 'Remoción mecánica y controlada de los estratos superficiales de la piel; ayuda progresivamente a desvanecer manchas, líneas de expresión y poros abiertos.', dur: '90 min', precio: '$1,575', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Sepori', desc: 'Facial integral: se realiza un diagnóstico y en base a ello se trabaja la piel para lograr el objetivo del cliente, una piel luminosa, tersa y limpia.', dur: '90 min', precio: '$1,625', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Tuchkiin', desc: 'Facial anti acné, que trabaja gradualmente el acné y las manchas de brotes anteriores con la combinación de diversas herramientas.', dur: '60 a 90 min', precio: 'De $1,115 a $1,650', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Haki Muki', desc: 'Facial despigmentante.', dur: '60 min', precio: '$1,525', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Tlanextia', desc: 'Aporta nutrientes y vitaminas a la piel para que mantenga su luminosidad.', dur: '60 min', precio: '$990', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Hiyuul', desc: 'Tensor flash; se recomienda días antes de un evento social.', dur: '60 min', precio: '$1,040', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Chichilihui', desc: 'Facial desensibilizante, recomendado para pieles sensibles.', dur: '60 min', precio: '$970', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Bajichi', desc: 'Hidratación profunda y nutrición. Ideal para pieles secas y desvitalizadas.', dur: '60 min', precio: '$700', zonas: ['rostro'] },
  { cat: 'facial', nombre: 'Petlani', desc: 'Tratamiento específico de ojos.', dur: '50 min', precio: '$630', zonas: ['ojos'] },
  { cat: 'facial', nombre: 'Yumari', desc: 'Limpieza básica: solo se realiza extracción de puntos negros en nariz.', dur: '50 min', precio: '$490', zonas: ['rostro'] },
  // Rituales
  { cat: 'rituales', nombre: 'Batsi, ritual princesa', desc: 'Un espacio estimulante y relajante para las princesas de la casa: baño y facial de chocolate.', dur: '1 h 30 min', precio: '$1,450', zonas: [] },
  { cat: 'rituales', nombre: 'Kiimak, ritual de parejas', desc: 'Un ritual para la unión de la pareja donde disfrutarán de un masaje con el tratamiento de su elección.', dur: 'De 2 h a 4 h 30 min', precio: 'Desde $2,950 por 2 personas', zonas: [] },
  { cat: 'rituales', nombre: 'Yeto Lut, velo de novia', desc: 'Para las novias que no se quieren perder de nada en la aventura de casarse: una experiencia relajante que prepara la piel para el día tan esperado.', dur: 'De 2 h a 4 h 30 min', precio: '$3,700', zonas: [] },
  { cat: 'rituales', nombre: 'Paxia, ritual mamá e hija', desc: 'Un tratamiento ideal para escapar del estrés cotidiano, dejando la piel suave y con una sensación de frescura.', dur: '4 h', precio: '$3,700', zonas: [] },
  { cat: 'rituales', nombre: 'Hopi, ritual de cumpleaños', desc: 'Déjate consentir el día de tu cumpleaños con una experiencia que te dejará la piel hidratada y con un agradable aroma.', dur: '3 h 30 min', precio: '$2,575', zonas: [] },
  // Otros
  { cat: 'otros', nombre: 'Xütha Jati, purificante de espalda', desc: 'Limpieza profunda y extracción de impurezas de la piel de la espalda.', dur: '1 h a 1 h 30 min', precio: '$1,680', zonas: ['espalda'] },
  { cat: 'otros', nombre: 'Arihua, posparto', desc: 'Un baño de calor que provoca sudoración, con un ligero masaje y una serie de maniobras con vendas después del embarazo.', dur: '90 min aprox.', precio: '$1,525', zonas: ['vientre'] },
  { cat: 'otros', nombre: 'Envoltura corporal', desc: 'Hidrata y tonifica la piel. Incluye exfoliación corporal.', dur: '50 min', precio: '$950', zonas: ['cuerpo'] },
  { cat: 'otros', nombre: 'Xhinte-xitse', desc: 'Tratamiento para piernas.', dur: '60 min', precio: '$735', zonas: ['piernas'] },
  { cat: 'otros', nombre: 'Presoterapia', desc: 'Utiliza la presión de aire, a modo de masaje, sobre el sistema linfático.', dur: '30 a 60 min', precio: '$500', zonas: ['piernas', 'cuerpo'] },
  { cat: 'otros', nombre: 'Exfoliante corporal', desc: 'Elimina las células muertas que se acumulan en la superficie de la piel.', dur: '30 min', precio: '$400', zonas: ['cuerpo'] },
  { cat: 'otros', nombre: 'Maderoterapia', desc: 'Masaje con diversos utensilios de madera, para reafirmar y tonificar el cuerpo.', dur: 'Pregunta', precio: null, zonas: ['cuerpo', 'piernas'] },
  { cat: 'otros', nombre: 'Tlahueltic, depilación', desc: 'Depilación de diferentes zonas con cera española y de roll on. Pregunta precio por área.', dur: 'Según el área', precio: null, zonas: [] },
  { cat: 'otros', nombre: 'Cepanca', desc: 'Combina diferentes terapias: faciales, masajes de cuerpo completo, jacuzzi, reductivo, aparatología. Cada vez que asistas solo firmas el tiempo de servicio que tomaste. Para una o dos personas. No incluye depilaciones.', dur: 'Paquetes de 10, 15 o 20 h', precio: null, zonas: [] },
];

export const categorias: { id: Categoria; nombre: string; lema: string; texto: string }[] = [
  { id: 'corporal', nombre: 'Corporal', lema: 'Relájate. Revitalízate. Renace…', texto: 'Masajes relajantes y descontracturantes, con aceite en vela, pindas, piedras calientes, rebozos o toallas calientes.' },
  { id: 'facial', nombre: 'Facial', lema: 'Relajación, balance, paz interior…', texto: 'Tratamientos integrales y personalizados: los beneficios dependen del objetivo y las necesidades de tu piel.' },
  { id: 'rituales', nombre: 'Rituales', lema: 'Alivia tensión…', texto: 'Experiencias largas para celebrar: en pareja, entre mamá e hija, antes de la boda o el día de tu cumpleaños.' },
  { id: 'otros', nombre: 'Otros', lema: 'Específicamente para ti…', texto: 'Para ti que haces deporte, que eres mamá, etc. Podemos hacerte paquetes de varios de nuestros servicios.' },
];

export const zonas: { id: Zona; nombre: string; frase: string }[] = [
  { id: 'cabeza', nombre: 'Cabeza', frase: 'para soltar la cabeza' },
  { id: 'ojos', nombre: 'Ojos', frase: 'para tus ojos' },
  { id: 'rostro', nombre: 'Rostro', frase: 'para tu piel' },
  { id: 'espalda', nombre: 'Cuello y espalda', frase: 'para el cuello y la espalda' },
  { id: 'brazos', nombre: 'Brazos', frase: 'para los brazos' },
  { id: 'manos', nombre: 'Manos', frase: 'para las manos' },
  { id: 'vientre', nombre: 'Vientre', frase: 'para antes y después del bebé' },
  { id: 'piernas', nombre: 'Piernas', frase: 'para las piernas' },
  { id: 'pies', nombre: 'Pies', frase: 'para los pies' },
  { id: 'cuerpo', nombre: 'Cuerpo completo', frase: 'para todo el cuerpo' },
];
