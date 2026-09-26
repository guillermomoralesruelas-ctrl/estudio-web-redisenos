// Amanecer y atardecer (ecuación del amanecer, precisión de ±1-2 minutos). Sin servicios externos.
const rad = Math.PI / 180;
const DIA = 86400000;

export type DiaSolar = { amanecer: Date; atardecer: Date };

/** Fecha (año, mes, día) en la zona horaria dada. */
export function fechaLocal(momento: Date, zona: string) {
  const p = new Intl.DateTimeFormat('en-CA', { timeZone: zona, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(momento);
  const v = (t: string) => Number(p.find((x) => x.type === t)!.value);
  return { y: v('year'), m: v('month'), d: v('day') };
}

/** Amanecer y atardecer del día civil (y, m, d) en la latitud y longitud dadas (longitud oeste negativa). */
export function diaSolar(y: number, m: number, d: number, lat: number, lon: number): DiaSolar {
  const jFecha = Date.UTC(y, m - 1, d) / DIA + 2440587.5;
  const n = Math.ceil(jFecha - 2451545 + 0.0008);
  const jEstrella = n - lon / 360;
  const M = (357.5291 + 0.98560028 * jEstrella) % 360;
  const C = 1.9148 * Math.sin(M * rad) + 0.02 * Math.sin(2 * M * rad) + 0.0003 * Math.sin(3 * M * rad);
  const lambda = (M + C + 180 + 102.9372) % 360;
  const jTransito = 2451545 + jEstrella + 0.0053 * Math.sin(M * rad) - 0.0069 * Math.sin(2 * lambda * rad);
  const sinDecl = Math.sin(lambda * rad) * Math.sin(23.4397 * rad);
  const cosDecl = Math.cos(Math.asin(sinDecl));
  const cosW = (Math.sin(-0.833 * rad) - Math.sin(lat * rad) * sinDecl) / (Math.cos(lat * rad) * cosDecl);
  const w = Math.acos(Math.min(1, Math.max(-1, cosW))) / rad;
  const aFecha = (j: number) => new Date((j - 2440587.5) * DIA);
  return { amanecer: aFecha(jTransito - w / 360), atardecer: aFecha(jTransito + w / 360) };
}

export function hora(momento: Date, zona: string) {
  return new Intl.DateTimeFormat('es-MX', { timeZone: zona, hour: 'numeric', minute: '2-digit', hour12: false }).format(momento);
}

export function duracion(ms: number) {
  const min = Math.max(0, Math.round(ms / 60000));
  const h = Math.floor(min / 60);
  const r = min % 60;
  if (h === 0) return `${r} min`;
  return r === 0 ? `${h} h` : `${h} h ${r} min`;
}
