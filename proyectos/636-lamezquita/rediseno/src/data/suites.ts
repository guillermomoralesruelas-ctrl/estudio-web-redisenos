// Las seis suites de La Mezquita, tal como las da su motor de reservas (Zavia ERP, https://rbe.zaviaerp.com/hotel/hotelspalamezquita).
// El sitio no las enlista: "Habitaciones" abre directamente ese motor. Datos tomados con curl el 2026-09-27 de su API
// pública (https://booking.zaviaerp.com/api/settings y /api/room-types, hotel_id=hotelspalamezquita), guardados en una
// carpeta temporal del sistema, fuera del estudio (ver CAMBIOS.md):
//   - nombre y tipo (el "slug" de cada suite: Suite, SuiteDoble, JuniorSuite, MasterSuite, MasterSuiteDoble, JuniorSuiteDoble);
//   - cupo máximo (max_pax) y los íconos de amenidades (air-cond, wifi, tv, bathtub, jacuzzi; "towels" no se muestra);
//   - el total por noche con impuestos, para 2 personas, de sus dos tarifas: "Plan Europeo" y "Plan Marroquí".
// Se consultaron noches de octubre de 2026 a febrero de 2027: de domingo a jueves cuestan lo mismo, y viernes y
// sábado cuestan lo mismo entre sí. Las tarifas cambian según la fecha y la disponibilidad: pendientes de confirmar.
// Patio Real no tiene amenidades en su motor y cuesta igual con los dos planes (pendiente de confirmar).
// $6,499.99 y $9,000.01 del motor se muestran como $6,500 y $9,000.

export type Amenidad = 'aire' | 'wifi' | 'pantalla' | 'tina' | 'jacuzzi';
export type Noche = 'semana' | 'finde';
export type Plan = 'europeo' | 'marroqui';

export type Suite = {
  id: string;
  nombre: string;
  tipo: string;
  personas: number;
  amenidades: Amenidad[];
  /** Total por noche con impuestos, para 2 personas. */
  precio: Record<Noche, Record<Plan, number>>;
};

export const amenidades: Record<Amenidad, string> = {
  aire: 'Aire acondicionado',
  wifi: 'Wi-Fi',
  pantalla: 'Pantalla',
  tina: 'Tina',
  jacuzzi: 'Jacuzzi',
};

export const suites: Suite[] = [
  {
    id: 'agua-de-luna', nombre: 'Agua de Luna', tipo: 'Suite', personas: 2,
    amenidades: ['aire', 'wifi'],
    precio: { semana: { europeo: 5500, marroqui: 7000 }, finde: { europeo: 6000, marroqui: 7500 } },
  },
  {
    id: 'agdal', nombre: 'Agdal', tipo: 'Suite doble', personas: 4,
    amenidades: ['aire', 'wifi', 'pantalla'],
    precio: { semana: { europeo: 6000, marroqui: 7500 }, finde: { europeo: 6500, marroqui: 8000 } },
  },
  {
    id: 'imperial', nombre: 'Imperial', tipo: 'Junior suite', personas: 2,
    amenidades: ['aire', 'tina', 'pantalla', 'wifi'],
    precio: { semana: { europeo: 6300, marroqui: 8000 }, finde: { europeo: 7500, marroqui: 8500 } },
  },
  {
    id: 'sahara', nombre: 'Sahara', tipo: 'Master suite', personas: 2,
    amenidades: ['aire', 'jacuzzi', 'wifi', 'pantalla'],
    precio: { semana: { europeo: 7300, marroqui: 8800 }, finde: { europeo: 7800, marroqui: 9300 } },
  },
  {
    id: 'oasis', nombre: 'Oasis', tipo: 'Master suite doble', personas: 4,
    amenidades: ['aire', 'jacuzzi', 'pantalla', 'wifi'],
    precio: { semana: { europeo: 7800, marroqui: 9300 }, finde: { europeo: 8300, marroqui: 9800 } },
  },
  {
    id: 'patio-real', nombre: 'Patio Real', tipo: 'Junior suite doble', personas: 4,
    amenidades: [],
    precio: { semana: { europeo: 8500, marroqui: 8500 }, finde: { europeo: 9000, marroqui: 9000 } },
  },
];

export const planes: Record<Plan, { nombre: string; corto: string; que: string }> = {
  europeo: {
    nombre: 'Plan Europeo',
    corto: 'Solo la suite',
    // Su descripción en el motor de reservas.
    que: 'La opción ideal para los viajeros independientes que buscan libertad y confort. Disfruten de nuestras exclusivas instalaciones con la flexibilidad de diseñar su propia agenda gastronómica y de actividades.',
  },
  marroqui: {
    nombre: 'Plan Marroquí',
    corto: 'Con masaje y desayuno',
    // Su descripción en el motor de reservas y lo que dice que incluye.
    que: 'Sumérjanse en una atmósfera de serenidad y exotismo diseñada para dos. Incluye masaje relajante y desayuno tipo americano para 2 personas.',
  },
};

export const noches: Record<Noche, string> = {
  semana: 'Domingo a jueves',
  finde: 'Viernes o sábado',
};

/** Política de su motor de reservas ("Política General"), recortada. */
export const politica = [
  'Solo adultos: no se aceptan menores de 18 años y todos los huéspedes presentan identificación oficial al registrarse.',
  'Al reservar se cobra el 65 %; el resto se paga al hacer check-in.',
  'Cancelar entre 6 y 7 días antes de la llegada cuesta el 50 % de la reservación; entre 0 y 5 días antes, el 100 %.',
  'Del 1 de diciembre de 2026 al 30 de enero de 2027 las reservaciones no son reembolsables.',
  'Salida tardía hasta las 6:00 p.m., sujeta a disponibilidad, por el 50 % de la tarifa del día.',
];
