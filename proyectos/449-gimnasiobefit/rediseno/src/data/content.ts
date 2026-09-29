// Contenido de Gimnasio Befit. Todo sale de su sitio en vivo (befit.mx, revisado el 2026-09-29) y de investigacion/;
// nada es inventado. Precios en pesos mexicanos.

// Su sitio no publica WhatsApp. Por regla se usa el teléfono principal como WhatsApp, pero los dos teléfonos publicados
// tienen 9 dígitos (669-52-10-10 y 669-83-28-35): les falta uno. PENDIENTE confirmar los números con el gimnasio.
export const negocio = {
  nombre: 'Gimnasio Befit',
  ciudad: 'Mazatlán, Sinaloa',
  whatsapp: '52669521010',
};

export const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

export type Servicio = 'pesas' | 'cardio' | 'instructor' | 'spinning' | 'box' | 'zumba' | 'crossfit' | 'funcional' | 'nutriologo';

export const servicios: { id: Servicio; nombre: string }[] = [
  { id: 'pesas', nombre: 'Pesas' },
  { id: 'cardio', nombre: 'Cardio' },
  { id: 'instructor', nombre: 'Instructor de piso' },
  { id: 'spinning', nombre: 'Spinning' },
  { id: 'box', nombre: 'Box' },
  { id: 'zumba', nombre: 'Zumba' },
  { id: 'crossfit', nombre: 'Crossfit' },
  { id: 'funcional', nombre: 'Entrenamiento funcional' },
  { id: 'nutriologo', nombre: 'Nutriólogo' },
];

export type Sucursal = {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
  telefonoLink: string;
  mapa: string;
  mensual: number;
  nota: string;
  visita: number;
  incluye: Servicio[];
  foto: string;
  alt: string;
};

export const sucursales: Sucursal[] = [
  {
    id: 'insurgentes', nombre: 'Befit Insurgentes',
    direccion: 'Av. Insurgentes S/N, frente a Soriana Insurgentes',
    telefono: '669-83-28-35', telefonoLink: 'tel:+52669832835',
    mapa: 'https://www.google.com.mx/maps/place/Be+Fit+Gimnasio+Insurgentes/@23.2353019,-106.4236364,17z',
    mensual: 499, nota: 'Sin inscripción', visita: 60,
    incluye: ['pesas', 'cardio', 'instructor', 'spinning', 'box', 'zumba', 'nutriologo'],
    foto: 'sucursal-insurgentes.webp', alt: 'Área de pesas de Befit Insurgentes, con racks de mancuernas y máquinas bajo techo de lámina',
  },
  {
    id: 'real-del-valle', nombre: 'Befit Real del Valle',
    direccion: 'Av. Óscar Pérez Escobosa S/N, Real del Valle (entre los arcos de Real del Valle y Real Pacífico)',
    telefono: '669-52-10-10', telefonoLink: 'tel:+52669521010',
    mapa: 'https://www.google.com.mx/maps/place/Av+%C3%93scar+P%C3%A9rez+Escobosa,+Real+del+Valle,+Mazatl%C3%A1n,+Sin./@23.2760263,-106.4301543,17z',
    mensual: 699, nota: '', visita: 75,
    incluye: ['pesas', 'cardio', 'instructor', 'spinning', 'box', 'zumba', 'crossfit', 'funcional', 'nutriologo'],
    foto: 'sucursal-real-del-valle.webp', alt: 'Área de máquinas de Befit Real del Valle, con equipo de pesas y piso de hule',
  },
];

// Planes que su sitio dice que cuestan lo mismo en todas las sucursales.
export const planesGenerales = [
  { nombre: 'Semanal', precio: 250, nota: 'Mismo precio en todas las sucursales' },
  { nombre: 'Quincenal', precio: 400, nota: 'Mismo precio en todas las sucursales' },
  { nombre: '30 visitas', precio: 1300, nota: 'Válido por 6 meses; aplican restricciones' },
  { nombre: 'Anual', precio: 4500, nota: 'Pregunta en qué sucursal aplica' },
];

export const clases = ['Crossfit', 'Box', 'Entrenamiento funcional', 'Zumba', 'Spinning', 'Zumba Step'];
