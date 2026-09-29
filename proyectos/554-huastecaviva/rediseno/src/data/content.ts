// Contenido de Huasteca Viva, tomado de su sitio (huastecaviva.com): el clon, investigacion/crudo.json y sus páginas
// leídas en vivo el 2026-09-29 con Jina Reader (entregables/textos-sitio-en-vivo-2026-09-29.txt).
// No se inventó ningún dato: precios, alturas, escalones y condiciones son los de su sitio.

export const negocio = {
  nombre: 'Huasteca Viva',
  lugar: 'Ciudad Valles, San Luis Potosí',
  direccion: 'Calle Roberto Pérez 123-D, Fracc. Central Camionera, Cd. Valles, S.L.P.',
  horario: 'Lunes a domingo, de 8:00 a 19:00',
  whatsapp: { texto: '481 123 0715', numero: '524811230715' },
  telefono: { texto: '481 375 7339', tel: '+524813757339' },
  correo: 'huastecaviva.contacto@gmail.com',
  facebook: 'https://www.facebook.com/huasteca.viva.slp',
  instagram: 'https://www.instagram.com/huastecaviva',
  twitter: 'https://twitter.com/huastecaviva',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Calle Roberto Pérez 123, Central Camionera, Ciudad Valles, S.L.P.'),
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(texto)}`;

// Precio de todas sus rutas principales ("Precio x Adulto" y "Precio Niño (6 a 10 años)").
export const precio = { adulto: 1150, nino: 950 };

export const cifras = [
  { valor: '6+', texto: 'años de experiencia' },
  { valor: '16+', texto: 'sitios para visitar' },
  { valor: '14,000+', texto: 'viajeros' },
];

export const incluye = [
  'Transporte hotel – tour – hotel',
  'Entradas a los sitios',
  'Servicio de guía',
  'Equipo para la excursión',
  'Seguro de gastos médicos',
  'Una comida completa al final',
  'Acceso preferencial a los sitios',
  'Fotos del recorrido con nuestro equipo, sin costo',
];

export type Ruta = {
  id: string;
  nombre: string;
  corto: string;
  foto: string;
  alt: string;
  datos: string[]; // cifras de su página de la ruta
  itinerario: string[];
  aviso: string; // "no recomendado para..." o "apto para..." de su página
};

// Sus seis "Rutas principales", con el itinerario de cada página.
export const rutas: Ruta[] = [
  {
    id: 'tamtoc', nombre: 'Zona Arqueológica de Tamtoc y Nacimiento de Taninul', foto: 'r-tamtoc',
    alt: 'Viajera con los brazos abiertos en la explanada de pasto de la zona arqueológica de Tamtoc',
    corto: 'La historia de la Huasteca en su sitio arqueológico más importante y una poza dentro de una cueva bajo la roca.',
    datos: ['Recorrido tranquilo', 'Nado en poza natural'],
    itinerario: ['Salida de tu hotel en Cd. Valles', 'Zona Arqueológica de Tamtoc', 'Estructuras y restos históricos', 'Nacimiento de Taninul', 'Comida en restaurante (a la carta o buffet)', 'Regreso a tu hotel'],
    aviso: 'Lo puede hacer cualquier persona o edad: el recorrido es muy tranquilo.',
  },
  {
    id: 'xilitla', nombre: 'Jardín Escultórico y Sótano de Huahuas', foto: 'r-xilitla',
    alt: 'Estructuras de concreto del Jardín Escultórico de Edward James entre la selva de Xilitla',
    corto: 'El laberinto surrealista de Edward James en la selva de Xilitla y, al final del día, la entrada de miles de vencejos al sótano.',
    datos: ['32 estructuras', 'Sótano de 478 m', 'Vencejos a 150 km/h'],
    itinerario: ['Salida de tu hotel en Cd. Valles', 'Parada en el Pan de Canela (sujeto a disponibilidad)', 'Jardín Escultórico de Edward James', 'Cascada El General y las pozas', 'Comida en restaurante (a la carta o buffet)', 'Nieves artesanales (sujeto a disponibilidad)', 'Sótano de las Huahuas', 'Regreso a tu hotel'],
    aviso: 'No se recomienda si tienes problemas para caminar o de rodillas: es un recorrido de caminata.',
  },
  {
    id: 'puente', nombre: 'Puente de Dios y Hacienda Gómez', foto: 'r-puente',
    alt: 'Viajeros nadando con chaleco en la Poza Azul de Puente de Dios, dentro de la cueva',
    corto: 'Bajas a la Poza Azul, entras nadando a la cueva que se ilumina sola y terminas en las 7 cascadas de Hacienda Gómez.',
    datos: ['280 escalones', 'Saltos de 1, 3 y 7 m', '7 cascadas'],
    itinerario: ['Salida de tu hotel en Cd. Valles', 'Puente de Dios y la Poza Azul', 'Entrada a la cueva "Puente de Dios"', 'Sendero al Nacimiento', 'Jugo de caña artesanal (sujeto a disponibilidad)', 'Hacienda Gómez y sus 7 cascadas', 'Comida en Tamasopo (a la carta o buffet)', 'Regreso a tu hotel'],
    aviso: 'Hay que bajar y subir escalones. No es indispensable saber nadar: se usa chaleco.',
  },
  {
    id: 'tamul', nombre: 'Cascada de Tamul y Cueva del Agua', foto: 'r-tamul',
    alt: 'Viajeros con chaleco en una panga sobre el río Tampaón, con la cascada de Tamul al fondo',
    corto: 'Remas 4.5 km contra corriente en panga por el cañón del río Tampaón hasta la cascada de 105 metros.',
    datos: ['4.5 km remando', 'Cascada de 105 m', 'Cenote Cueva del Agua'],
    itinerario: ['Llegada al embarcadero de La Morena', 'Recorrido en canoa de madera, 4.5 km', 'Cascada de Tamul y fotografías', 'Nado en los rápidos del río (sujeto a disponibilidad)', 'Cueva del Agua', 'Comida en Tamul (a la carta o buffet)', 'Regreso a tu hotel'],
    aviso: 'No se recomienda con problemas de rodillas (hay que bajar escalones). No es indispensable saber nadar.',
  },
  {
    id: 'micos', nombre: 'Cascadas de Micos y Cascada de Minas Viejas', foto: 'r-micos',
    alt: 'Grupo de viajeros con chaleco y casco de pie sobre el borde de una de las cascadas de Micos',
    corto: 'Saltas las 7 cascadas de Micos (o las rodeas) y bajas 300 escalones a la caída de 50 metros de Minas Viejas.',
    datos: ['7 cascadas de 1 a 8 m', 'El Toro, 30 m', '300 escalones', 'Minas Viejas, 50 m'],
    itinerario: ['Salida de tu hotel en Cd. Valles', 'Cascadas de Micos', 'Nado en la poza de la cascada El Toro', 'Salto de las 7 cascadas (opcional, sujeto a disponibilidad)', 'Cascada de Minas Viejas y salto en poza de 3 m', 'Comida en Micos (a la carta o buffet)', 'Regreso a tu hotel'],
    aviso: 'Los saltos son opcionales: si no quieres saltar, te quedas en la poza de El Toro.',
  },
  {
    id: 'meco', nombre: 'Cascada El Meco y Pozas de El Salto', foto: 'r-meco',
    alt: 'Viajera sentada en una roca frente a la cascada de El Meco, con varias caídas de agua',
    corto: 'Nadas en las pozas turquesa de El Salto y llegas en canoa de madera a 10 metros de la caída de El Meco.',
    datos: ['El Salto, 70 m', 'Canoa a 10 m de la caída', 'Saltos de hasta 8 m'],
    itinerario: ['Salida de tu hotel en Cd. Valles', 'Cascada El Salto (depende de la temporada)', 'Nado en las pozas', 'Mirador de El Meco', 'Canoa de madera hasta la cascada', 'Saltos de hasta 8 m (opcional)', 'Comida en restaurante (a la carta o buffet)', 'Regreso a tu hotel'],
    aviso: 'No se admiten mascotas. No es indispensable saber nadar.',
  },
];

// El elemento memorable: cada nivel del agua lleva a la ruta cuya actividad más mojada es esa, según su itinerario.
export type Nivel = { id: string; etiqueta: string; titulo: string; texto: string; agua: number; ruta?: string; aventura?: string };
export const niveles: Nivel[] = [
  { id: 'pozas', etiqueta: 'Caminar y meter los pies', titulo: 'Caminar por la selva', agua: 18, ruta: 'xilitla', texto: 'Casi todo el día es caminata entre las 32 estructuras de Xilitla; el agua son las pozas de la cascada El General.' },
  { id: 'poza', etiqueta: 'Nadar tranquilo', titulo: 'Una poza, sin prisa', agua: 30, ruta: 'tamtoc', texto: 'Historia en Tamtoc y una poza natural para nadar con calma en Taninul. Apto para cualquier edad.' },
  { id: 'cueva', etiqueta: 'Entrar nadando a una cueva', titulo: 'Nadar hacia la luz', agua: 55, ruta: 'puente', texto: 'Entras nadando a la cueva de Puente de Dios, que se ilumina sola, y puedes saltar de 1, 3 o 7 metros.' },
  { id: 'remar', etiqueta: 'Remar contra corriente', titulo: 'Remar 4.5 km', agua: 68, ruta: 'tamul', texto: 'Remas en panga río arriba hasta la cascada de Tamul y regresas dejándote llevar por los rápidos.' },
  { id: 'saltar', etiqueta: 'Saltar cascadas', titulo: 'Siete saltos seguidos', agua: 84, ruta: 'micos', texto: 'Saltas las 7 cascadas de Micos, de 1 a 8 metros, y cierras con una poza de 3 metros en Minas Viejas.' },
  { id: 'rapidos', etiqueta: 'Rápidos clase III', titulo: 'Todo el día en el río', agua: 100, aventura: 'rafting', texto: 'Rafting de 14 km en el río Tampaón, con rápidos clase III, entre el cañón de piedra caliza.' },
];

export type Aventura = { id: string; nombre: string; texto: string; precio: string; nota: string; foto?: string; alt?: string; incluye: string[] };
export const aventuras: Aventura[] = [
  {
    id: 'rafting', nombre: 'Rafting en el río Tampaón', foto: 'a-rafting', alt: 'Balsa azul con remeros bajando un rápido de agua turquesa entre rocas',
    texto: '14 km en río clase III por el cañón de piedra caliza. En Puente de Dios el río "desaparece" y se cruza caminando sobre la roca.',
    precio: '$1,500', nota: 'por persona, mínimo 4',
    incluye: ['Transporte desde tu hotel', 'Equipo', 'Descenso en río', 'Seguro de gastos médicos', 'Una comida completa'],
  },
  {
    id: 'rappel', nombre: 'Rappel', foto: 'a-rappel', alt: 'Persona con casco bajando en rappel junto a una cascada de agua turquesa',
    texto: 'Bajas 50 metros junto a la cascada de Minas Viejas o 30 metros en la cascada El Toro, en Micos.',
    precio: '$600', nota: 'por persona, mínimo 4',
    incluye: ['Equipo de seguridad', 'Guías', 'Rappel en el sitio que elijas'],
  },
  {
    id: 'tirolesa', nombre: 'Tirolesas, puente colgante y skybike', foto: 'a-tirolesa', alt: 'Persona en bicicleta colgada de un cable sobre las cascadas de Micos',
    texto: 'Las cascadas de Micos desde arriba: 3 tirolesas de 175 a 720 metros, un puente colgante y un recorrido en skybike.',
    precio: '$1,150', nota: 'por persona, el paquete completo',
    incluye: ['3 tirolesas', '1 puente colgante', '1 skybike'],
  },
  {
    id: 'buceo', nombre: 'Buceo',
    texto: 'Desciende hasta 14 metros, aunque nunca lo hayas practicado.',
    precio: 'Pregunta', nota: 'precio por WhatsApp',
    incluye: [],
  },
];

export const otras = [
  { id: 'taninul', nombre: 'Nacimiento de Taninul', foto: 'o-taninul', alt: 'Entrada de la caverna de Taninul con la poza de agua azul al fondo', texto: 'Se llega caminando sobre las vías del tren o directo al río: agua cristalina, una cueva y nado en el río.' },
  { id: 'golondrinas', nombre: 'Sótano de Golondrinas', foto: 'o-golondrinas', alt: 'Viajera sonriente con los brazos abiertos junto a la pared de roca del Sótano de Golondrinas', texto: 'Un abismo de 512 metros. Bajas 600 escalones para ver la entrada o salida de miles de aves.' },
  { id: 'castillo', nombre: 'Castillo de la Salud', foto: 'o-castillo', alt: 'Fachada roja, rosa y verde del Castillo de la Salud, con banderitas de papel picado', texto: 'La historia de Beto Ramón, que se dedicó al estudio de las plantas de la región.' },
  { id: 'huichi', nombre: 'Nacimiento de Huichihuayán', foto: 'o-huichi', alt: 'Bañistas en el agua turquesa del nacimiento de Huichihuayán, bajo árboles grandes', texto: 'Agua cristalina, tranquila y un poco fría para nadar y descansar.' },
];

export const recomendaciones = [
  'Ropa cómoda, sandalias ajustables (no tipo pata de gallo) o tenis y bloqueador solar.',
  'Una mochila práctica para tus cosas; mejor sin joyas ni objetos de valor. Si llevas cámara, que sea acuática.',
  'Si tomas algún medicamento, llévalo. Si tienes alguna condición de salud, avisa antes para ajustar tiempos o rutas.',
  'Si no sabes nadar, avísale al guía, usa el chaleco y evita las aguas profundas.',
];

export const condiciones = [
  'Salida entre 9:15 y 9:30 (te recogen en tu hotel) y regreso a Cd. Valles entre 6 y 7 de la noche.',
  'Niños de 6 a 10 años pagan $950. Los menores de 5 no pagan el tour; sus gastos los cubren papás o tutores.',
  'Si el clima no permite el tour, la reservación se cambia a otra fecha, con vigencia de hasta un año. No hay reembolsos por causas de fuerza mayor.',
  'El seguro de gastos médicos cubre accidentes durante las actividades y en el horario del recorrido, con deducible de $500.',
  'Prohibido el alcohol durante el tour. No se admiten mascotas. Al iniciar se firma una carta responsiva.',
  'Las propinas son voluntarias.',
];
