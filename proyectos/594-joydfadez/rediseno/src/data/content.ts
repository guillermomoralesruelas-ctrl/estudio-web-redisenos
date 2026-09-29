// Contenido de Joy D Fadez (Monterrey, N. L.). Todo sale de investigacion/crudo.json (inicio y productos, captura del
// 2026-09-26). No se inventan datos: lo que falta va como [PENDIENTE].

export const negocio = {
  nombre: 'Joy D Fadez',
  whatsapp: '527206371461',
  whatsappVisible: '+52 720 637 1461',
  ciudad: 'Monterrey, Nuevo León',
  horario: [
    { dias: 'Miércoles a domingo', horas: '10:00 a 19:00' },
    { dias: 'Lunes y martes', horas: 'Solo con cita previa' },
  ],
  instagram: 'https://instagram.com/joyd.fadez',
  facebook: 'https://www.facebook.com/joyd.barber.1005',
  // Su sitio no publica calle: el mapa usa las coordenadas que muestra (25°40′17″N, 100°18′32″W).
  mapa: 'https://www.google.com/maps/search/?api=1&query=25.67139,-100.30889',
};

export const foto = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Servicio = { id: string; nombre: string; lema: string; minutos: number | null; precio: number; color: string };
// Precios "desde" y duración aproximada, de su menú (no dice la moneda). Domicilio: "a medida".
export const servicios: Servicio[] = [
  { id: 'corte', nombre: 'Corte de cabello', lema: 'Consulta, corte de precisión, peinado y acabado', minutos: 45, precio: 150, color: '#d4ae62' },
  { id: 'barba', nombre: 'Barba', lema: 'Detalle clínico', minutos: 25, precio: 50, color: '#b8893a' },
  { id: 'tinte', nombre: 'Tinte de cabello', lema: 'Color autoral', minutos: 90, precio: 300, color: '#8a5a12' },
  { id: 'unas', nombre: 'Uñas', lema: 'Pulcritud arquitectónica', minutos: 60, precio: 250, color: '#a8b0a8' },
  { id: 'pedicura', nombre: 'Pedicura', lema: 'Cuidado meticuloso', minutos: 60, precio: 250, color: '#7d857d' },
  { id: 'pedibox', nombre: 'Pedi (In-A-Box)', lema: 'Ritual completo', minutos: 60, precio: 500, color: '#5f665f' },
  { id: 'ejecutivo', nombre: 'Complemento Ejecutivo', lema: 'Solución cromática', minutos: 20, precio: 60, color: '#e8d3a2' },
  { id: 'domicilio', nombre: 'Servicio a domicilio', lema: 'El estudio va contigo, en Monterrey y zona metropolitana', minutos: null, precio: 200, color: '#f2eee8' },
];

export const historia = [
  { anio: '2013', texto: 'Primera silla (prestada)' },
  { anio: '2017', texto: 'Estudio propio' },
  { anio: '2020', texto: 'Servicio a domicilio' },
  { anio: '2023', texto: 'Apertura de uñas' },
];

export const preguntas = [
  { p: '¿Necesito pagar para reservar?', r: 'No. La reserva solo aparta el horario; pagas al terminar, en el estudio o a domicilio.' },
  { p: '¿Aceptan walk-ins?', r: 'Cuando hay disponibilidad, sí, pero el calendario tiene prioridad. Si reservaste, llega 5 minutos antes.' },
  { p: '¿Hasta dónde va a domicilio?', r: 'Monterrey y zona metropolitana. Para distancias mayores se cotiza aparte por WhatsApp.' },
  { p: '¿Puedo cancelar o mover mi cita?', r: 'Sí, hasta 4 horas antes. Después, escríbele por WhatsApp para reagendar.' },
];
