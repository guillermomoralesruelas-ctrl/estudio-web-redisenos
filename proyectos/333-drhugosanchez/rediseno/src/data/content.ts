// Contenido de la clínica del Dr. Hugo Sánchez. Todo sale de su sitio (investigacion/crudo.json: inicio, equipo,
// servicios y contacto); nada es inventado. Su sitio no publica precios.

// Su sitio no publica WhatsApp. Por regla se usa el teléfono (951 254 4724) como WhatsApp: PENDIENTE confirmar.
export const negocio = {
  nombre: 'Clínica del Dr. Hugo Sánchez',
  doctor: 'Dr. Hugo Sánchez Martínez',
  cedula: '11815555',
  universidad: 'Universidad Autónoma Benito Juárez de Oaxaca',
  direccion: 'Calzada Cuauhtémoc 406, esquina Leandro Valle, Oaxaca de Juárez, Oax.',
  referencia: 'Cerca del Instituto Gillow y a minutos del centro histórico.',
  telefono: '951 254 4724',
  telefonoLink: 'tel:+529512544724',
  whatsapp: '529512544724',
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Calzada Cuauhtémoc 406, esquina Leandro Valle, Oaxaca de Juárez, Oaxaca'),
  horario: [
    { dias: 'Lunes a viernes', horas: '10:00 a 19:00' },
    { dias: 'Sábados', horas: '10:00 a 18:00' },
  ],
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/dr.hugosanchezmtz/' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/clinicahugosanchez/' },
  ],
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

// Resúmenes de sus propias descripciones de servicio, sin promesas de resultado.
export const servicios: Record<string, { nombre: string; texto: string }> = {
  urgencias: { nombre: 'Urgencias dentales', texto: 'Atienden abscesos, traumatismos, fracturas, sangrados, inflamación, dolor agudo y restauraciones desprendidas.' },
  endodoncia: { nombre: 'Endodoncia', texto: 'Tratamiento de conductos para conservar un diente cuya pulpa se afectó por caries profunda, golpe o infección. Con instrumental rotatorio y radiografía digital.' },
  periodoncia: { nombre: 'Periodoncia', texto: 'Diagnóstico y tratamiento de encías inflamadas, desde gingivitis hasta periodontitis, con raspado y alisado radicular y seguimiento.' },
  implantes: { nombre: 'Implantología', texto: 'Implante de titanio como raíz artificial y corona encima, con planeación a partir de estudios radiográficos digitales.' },
  protesis: { nombre: 'Prótesis bucal', texto: 'Prótesis fijas, removibles y sobre implantes para reemplazar dientes ausentes o deteriorados.' },
  rehabilitacion: { nombre: 'Rehabilitación bucal', texto: 'Plan integral cuando hay pérdidas dentales, desgaste severo o alteraciones de la mordida.' },
  estetica: { nombre: 'Estética dental', texto: 'Corrección de forma, color, tamaño o posición de los dientes con materiales de alta calidad.' },
  ortodoncia: { nombre: 'Ortodoncia', texto: 'Brackets metálicos, opciones estéticas y alineadores invisibles, según la edad y el caso.' },
  coronas: { nombre: 'Coronas de cerámica y resinas', texto: 'Restauraciones que recubren un diente debilitado por caries, fractura o después de una endodoncia.' },
  profilaxis: { nombre: 'Profilaxis y limpieza', texto: 'Limpieza con ultrasonido, pulido y flúor cuando hace falta, para retirar placa, sarro y manchas superficiales.' },
  examen: { nombre: 'Higiene oral y examen intraoral', texto: 'Revisión de dientes, encías, lengua y tejidos, con orientación de cepillado, hilo dental y hábitos.' },
  integral: { nombre: 'Odontología integral', texto: 'Valoración completa para armar un plan que integra diagnóstico, prevención y tratamiento.' },
};

export const motivos = [
  { id: 'dolor', boton: 'Me duele', titulo: 'Si tienes dolor o una molestia', servicios: ['urgencias', 'endodoncia', 'periodoncia'], mensaje: 'Hola, tengo dolor o una molestia dental y quiero una cita.' },
  { id: 'falta', boton: 'Me falta un diente', titulo: 'Si perdiste uno o varios dientes', servicios: ['implantes', 'protesis', 'rehabilitacion'], mensaje: 'Hola, me falta un diente y quiero una valoración.' },
  { id: 'sonrisa', boton: 'Quiero mejorar mi sonrisa', titulo: 'Si quieres cambiar cómo se ve tu sonrisa', servicios: ['estetica', 'ortodoncia', 'coronas'], mensaje: 'Hola, quiero una valoración para mejorar mi sonrisa.' },
  { id: 'revision', boton: 'Revisión y limpieza', titulo: 'Si toca revisión o limpieza', servicios: ['profilaxis', 'examen', 'integral'], mensaje: 'Hola, quiero agendar una revisión y limpieza dental.' },
];

export const equipo = ['Microscopía óptica', 'Endodoncia rotatoria', 'Diagnóstico y radiografía digital', 'Equipos de profilaxis profesional', 'Blanqueamiento profesional'];
