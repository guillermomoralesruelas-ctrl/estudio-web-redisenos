// Contenido de Homme Barbers, tomado de su sitio (inicio y páginas de corte, barba, facial y depilación), revisado con
// curl el 2026-09-28. Los textos marcados "nuestro" son del rediseño.

export const barberia = {
  nombre: 'Homme Barbers',
  lema: '¡Servicio inmediato! ¡Sin citas!',
  direccion: 'Av. Huayacán, 77533 Cancún, Q. R.',
  mapa: 'https://maps.app.goo.gl/Eo1aXiHpiEk1yPKr9',
  telefono: { texto: '998 103 3712', tel: '+529981033712' },
  // Su sitio no publica WhatsApp: se usa el mismo número (confirmar).
  whatsapp: '529981033712',
  facebook: 'https://www.facebook.com/people/Homme-Barbers/100086734545957/',
  instagram: 'https://www.instagram.com/homme.barbers/',
  incluye: 'Todos los servicios incluyen bebida, exfoliante y masaje',
};

// "Lunes a Domingo 10 a.m.–8:30 p.m. Domingos 6:30 p.m.": de lunes a sábado cierra 20:30 y el domingo 18:30.
export const horario = { abre: 10 * 60, cierra: 20 * 60 + 30, cierraDomingo: 18 * 60 + 30 };

export const wa = (texto: string) => `https://wa.me/${barberia.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Servicio = { id: string; nombre: string; precio: number; texto: string };

export const servicios: Servicio[] = [
  { id: 'corte', nombre: 'Corte de cabello', precio: 300, texto: 'Profesional y personalizado; con máquina, tijera o navaja.' },
  { id: 'barba', nombre: 'Afeitado y delineado de barba', precio: 270, texto: 'Afeitado tradicional para un rostro suave.' },
  { id: 'ceja', nombre: 'Delineado de ceja o bigote', precio: 150, texto: 'Rápido y preciso.' },
  { id: 'facial', nombre: 'Facial exfoliante y mascarilla', precio: 180, texto: 'Exfoliación, mascarilla de carbón y aceite de colágeno.' },
  { id: 'greca', nombre: 'Diseño de greca', precio: 130, texto: 'Líneas y diseños sobre tu corte.' },
  { id: 'oidos', nombre: 'Depilación con cera de oídos', precio: 130, texto: 'Cera especial para zonas sensibles.' },
  { id: 'nariz', nombre: 'Depilación con cera de nariz', precio: 130, texto: 'Cera especial para zonas sensibles.' },
];

export type Paquete = { id: string; nombre: string; precio: number; cubre: string[]; extras: string[] };

export const paquetes: Paquete[] = [
  { id: 'premium', nombre: 'Paquete Premium', precio: 350, cubre: ['corte', 'ceja', 'facial'], extras: [] },
  { id: 'gold', nombre: 'Paquete Gold', precio: 400, cubre: ['corte', 'ceja', 'facial'], extras: ['Mascarilla de colágeno', 'Hidratación con ácido hialurónico', 'Aceite de colágeno'] },
  { id: 'platino', nombre: 'Paquete Platino', precio: 630, cubre: ['corte', 'barba', 'ceja', 'facial'], extras: [] },
  { id: 'vip', nombre: 'Paquete VIP', precio: 700, cubre: ['corte', 'barba', 'ceja', 'facial'], extras: ['Mascarilla de colágeno', 'Hidratación con ácido hialurónico', 'Aceite de colágeno', 'Masaje relajante'] },
];

export const resenas = [
  { nombre: 'Hugo Alberto Samberino', texto: 'Excelente lugar para consentirse y muy buena atención; siempre salgo feliz con mi corte de cabello. Edson es toda una estrella.' },
  { nombre: 'Victor Monsalve', texto: 'Excelente servicio de todos, en especial de Alex y Nico, que atienden a mi hijo de 12 años y a mí. Su local es agradable para todos.' },
  { nombre: 'Javier Lopez', texto: 'Cool, little barber inside the mall. The customer service was great. Elliott did an awesome job with my haircut.' },
];

export const estilos = ['Fade', 'Low fade', 'Mid fade', 'High fade', 'Pompadour', 'Clásico', 'Degradado', 'Undercut', 'French crop', 'Textured crop'];
