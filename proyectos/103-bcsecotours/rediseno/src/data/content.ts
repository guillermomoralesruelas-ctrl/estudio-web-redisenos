// Contenido de BCS Eco Tours (Loreto, B.C.S.), tomado del sitio original: clon en ../sitio, investigacion/crudo.json y las
// páginas en español leídas en vivo el 2026-09-28 (entregables/textos-sitio-en-vivo-2026-09-28.txt): inicio, tours y el
// detalle de cada safari, ballenas azules (y su página /ballenaazul/), buceo, snorkeling, pesca, embarcaciones,
// nosotros, preguntas frecuentes, testimonios y reserva.
// Regla: nada inventado. Las fotos son copias .webp hechas con ../fotos-web.mjs en ../assets/web (publicDir).
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
export const foto = (nombre: string) => img(`${nombre}.webp`);

export const negocio = {
  nombre: 'BCS Eco Tours',
  whatsapp: '526131009373',
  telefono: '613 100 9373',
  telefonoHref: 'tel:+526131009373',
  correo: 'contacto@bcs.tours',
  direccion: 'Fco. de Ulloa 240, Loreto, B.C.S., México, 23880',
  salida: 'Marina de Loreto (Dársena)',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Francisco de Ulloa 240, Loreto, Baja California Sur 23880'),
  mapaDarsena: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Marina Dársena de Loreto, Baja California Sur'),
  facebook: 'https://www.facebook.com/ToursBCS',
  youtube: 'https://www.youtube.com/@bcstours',
  sitio: 'https://loretobaytours.com/',
};

export const wa = (mensaje: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const waInformes = wa('Hola BCS Eco Tours, quiero información de sus tours en Loreto.');

export const islas = ['Isla Coronados', 'Isla Carmen', 'Isla Danzante', 'Isla Monserrat'];

// "Posibles encuentros" que lista cada safari, en su orden.
export const fauna = [
  'Ballena azul', 'Ballenas jorobadas', 'Cachalotes', 'Orcas', 'Delfines nariz de botella', 'Lobos marinos',
  'Tortugas marinas', 'Mantas móbulas', 'Aves marinas y peces endémicos',
];

// Actividades que puede combinar cada safari (sus listas).
export const actividades = [
  'Observación de fauna marina', 'Snorkeling alrededor de las islas', 'Pesca deportiva', 'Buceo recreativo (bajo solicitud)',
  'Playas vírgenes', 'Kayak de mar', 'Paddle board', 'Del Mar a la Mesa',
];

export type Safari = {
  id: 'compartido' | 'privado' | 'especial';
  nombre: string;
  lema: string;
  precio: number;
  texto: string;
  minimo?: number;
  maximo?: number;
  ideal: string[];
};

// Precios "desde, por persona" de su página de tours. Capacidad: 10 a 16 pasajeros en compartido y privado (su texto);
// el especial no dice capacidad. Duración: el texto dice 5 a 6 horas (la ficha dice "1 horas"; ver CAMBIOS.md).
export const safaris: Safari[] = [
  {
    id: 'compartido', nombre: 'Safari Compartido', lema: 'Comparte la aventura. Vive recuerdos para siempre.', precio: 1350, minimo: 10, maximo: 16,
    texto: 'Una expedición de 5 a 6 horas por el Parque Nacional Bahía de Loreto con otros viajeros amantes de la naturaleza, en busca de ballenas, delfines, lobos marinos y la vida marina del Mar de Cortés.',
    ideal: ['Viajeros individuales', 'Parejas', 'Familias pequeñas', 'Fotógrafos'],
  },
  {
    id: 'privado', nombre: 'Safari Privado', lema: 'Tu aventura. Tu ritmo. Tu océano.', precio: 1800, minimo: 10, maximo: 16,
    texto: 'La embarcación solo para tu grupo, de 5 a 6 horas, eligiendo las actividades con el capitán y los guías locales.',
    ideal: ['Familias grandes', 'Grupos de amigos', 'Celebraciones', 'Viajes corporativos', 'Grupos de buceo'],
  },
  {
    id: 'especial', nombre: 'Safari Especial', lema: 'Tu océano. Tu aventura. Tu día perfecto.', precio: 2500,
    texto: 'El "Safari Marino Exclusivo": privado y diseñado contigo según la temporada, el mar, tus intereses y el tiempo que quieras en cada actividad.',
    ideal: ['Parejas', 'Celebraciones importantes', 'Fotógrafos profesionales', 'Viajeros premium'],
  },
];

export const equipoIncluido = [
  'Equipo completo de snorkeling: aletas, máscaras y tubos', 'Botas de neopreno', 'Trajes de neopreno en temporada fría',
  'Gorros térmicos (diciembre a mayo)', 'Equipo para pesca deportiva', 'Kayaks de mar y paddle boards',
];

export const delMarALaMesa = ['Pescado zarandeado', 'Almejas empapeladas o gratinadas', 'Mariscos frescos al vapor', 'Especialidades locales con productos del mar'];

// Su página /ballenaazul/ (landing de temporada).
export const ballenaAzul = {
  temporada: 'Diciembre a abril',
  maximo: 10,
  compartido: 2300,
  compartidoMinimo: 5,
  privado: 21000,
  incluye: 'Brazaletes de SEMARNAT, agua purificada, fruta, café, refrescos y lonche.',
  itinerario: [
    ['6:45', 'Punto de reunión en la estatua de la Ballena Azul, en la Marina Dársena de Loreto.'],
    ['7:00', 'Embarque; el estacionamiento de la Dársena es gratuito.'],
    ['7:10', 'Explicación de la ruta y del pronóstico del tiempo.'],
    ['8:00 a 13:00', 'Búsqueda y observación en el área conocida como Triángulo Azul, a distancia segura.'],
    ['14:00 a 14:30', 'Llegada al puerto de Loreto.'],
  ] as [string, string][],
};

export const keiko = [
  '30 pies (9.5 m), diseñadas por ellos mismos',
  'Motor Yamaha 250 HP de cuatro tiempos, silencioso y sin humo',
  'Espacio 360° en cubierta y barandal en proa',
  'Sombra en 60% de la cubierta y baño a bordo',
  'Fish finder, portacañas y vivero para carnada viva',
  'Escalera reforzada y compartimentos para tanques de buceo',
  'Radio VHF, WiFi Starlink, chalecos con luz y botiquín',
  'Guías naturalistas bilingües y binoculares',
];

export const otrasSalidas = [
  { titulo: 'Snorkeling en Isla Coronado', foto: 'lobo-marino', alt: 'Lobo marino nadando bajo el agua', texto: 'Arrecife, colonia de lobos marinos y playa de arena blanca, a unos minutos en lancha de la marina. Incluye equipo básico, guía bilingüe (español e inglés), permiso del Parque Nacional y agua, refrescos y picnic o box lunch.' },
  { titulo: 'Buceo recreativo', foto: 'buzo-lobo', alt: 'Buzo y lobo marino sobre un fondo de arena', texto: 'Isla Coronado, Isla Carmen, Isla Danzante, El Bajo y Las Galeras: arrecifes, cuevas y paredes con coral blando. Inmersiones guiadas para principiantes y salidas para buzos certificados.' },
  { titulo: 'Pesca deportiva', foto: 'dorado', alt: 'Pescador sosteniendo un dorado a bordo de una lancha', texto: 'Marlín rayado y azul, dorado, jurel y atún según la temporada. Todo el equipo incluido, pesca responsable y captura y liberación. Filetean y empacan tu pescado.' },
];

export const testimonios = [
  'Desde que llegamos nos sentimos en buenas manos. El capitán y los guías fueron profesionales, amables y siempre atentos. Se nota la experiencia que tienen en Loreto.',
  'Tener la embarcación exclusivamente para nuestra familia hizo toda la diferencia. Pudimos elegir qué actividades hacer y pasar más tiempo disfrutando cada lugar.',
  'Nuestros hijos estuvieron fascinados todo el día. Pudimos combinar playa, snorkeling, kayak y observar vida marina. Fue mucho más que un paseo en lancha.',
  'Después de pasar la mañana explorando el mar, disfrutar pescado y mariscos preparados ahí mismo fue el final perfecto. ¡Una experiencia deliciosa y auténtica!',
];

export const preguntas = [
  { p: '¿Necesito experiencia previa para bucear o hacer snorkeling?', r: 'No necesariamente. Hay inmersiones guiadas para principiantes y salidas especiales para buzos certificados; los instructores explican el equipo, las señales bajo el agua y las medidas de seguridad antes de cada inmersión. Para snorkeling solo necesitas saber nadar.' },
  { p: '¿Qué hace diferente a BCS Eco Tours?', r: 'Son operadores locales con más de 28 años de experiencia en Loreto. Diseñaron sus propias embarcaciones Keiko, y cada tour lo guía personal certificado, comprometido con la educación ambiental y la conservación del Parque Nacional Bahía de Loreto.' },
  { p: '¿Las actividades son seguras para toda la familia?', r: 'Sus recorridos están pensados para ser cómodos y familiares, con chalecos salvavidas para todas las edades y capitanes con experiencia. También hay tours privados, ideales para niños o personas mayores.' },
  { p: '¿Empacan el pescado?', r: 'Sí, lo filetean y lo empacan.' },
  { p: '¿Qué tipo de pesca deportiva hacen?', r: 'Pesca deportiva recreativa de marlín, dorado, jurel y atún, según la temporada. Ponen todo el equipo: cañas, curricanes, vivero para carnada viva y espacio 360° para pelear tu captura, y fomentan la captura y liberación.' },
  { p: '¿Cómo reservo?', r: 'Por WhatsApp, por correo, en su página o en sus oficinas en la Marina de Loreto.' },
  { p: '¿Cuáles son los métodos de pago?', r: 'Tarjeta de crédito, débito, transferencia y efectivo en sus oficinas.' },
];

export const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
