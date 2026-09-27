// Cálculos de luz para "El mar desde tu mesa": puesta de sol, anochecer, altura del sol y fase de la luna
// para Boca del Río (coordenadas de su ficha de Google Maps). Fórmulas de la NOAA (General Solar Position
// Calculations) y edad de la luna desde la luna nueva del 6 de enero de 2000, 18:14 UTC.
// Hora de Veracruz: UTC-6 todo el año (México quitó el horario de verano en 2022).

const RAD = Math.PI / 180;
export const DESFASE_MIN = -6 * 60;

type Dia = { y: number; m: number; d: number };

function diaDelAnio({ y, m, d }: Dia) {
  return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 1)) / 86400000) + 1;
}

function sol(dia: Dia, minutoUtc: number) {
  const bisiesto = (dia.y % 4 === 0 && dia.y % 100 !== 0) || dia.y % 400 === 0;
  const g = ((2 * Math.PI) / (bisiesto ? 366 : 365)) * (diaDelAnio(dia) - 1 + (minutoUtc / 60 - 12) / 24);
  const ecTiempo =
    229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const decl =
    0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) -
    0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
  return { ecTiempo, decl };
}

// Minuto local (desde la medianoche) en que el sol cruza el cenit dado (90.833° = puesta, 96° = fin del crepúsculo civil).
function cruce(dia: Dia, lat: number, lon: number, cenit: number) {
  let minuto = 18 * 60 - DESFASE_MIN; // primera aproximación en UTC
  for (let i = 0; i < 2; i++) {
    const { ecTiempo, decl } = sol(dia, minuto);
    const cosH = Math.cos(cenit * RAD) / (Math.cos(lat * RAD) * Math.cos(decl)) - Math.tan(lat * RAD) * Math.tan(decl);
    const h = Math.acos(Math.max(-1, Math.min(1, cosH))) / RAD;
    minuto = 720 - 4 * (lon - h) - ecTiempo;
  }
  return minuto + DESFASE_MIN;
}

export function altitudSol(dia: Dia, minutoLocal: number, lat: number, lon: number) {
  const utc = minutoLocal - DESFASE_MIN;
  const { ecTiempo, decl } = sol(dia, utc);
  const tiempoSolar = utc + ecTiempo + 4 * lon;
  const h = (tiempoSolar / 4 - 180) * RAD;
  const s = Math.sin(lat * RAD) * Math.sin(decl) + Math.cos(lat * RAD) * Math.cos(decl) * Math.cos(h);
  return Math.asin(s) / RAD;
}

export function luzDelDia(dia: Dia, lat: number, lon: number) {
  return {
    puesta: Math.round(cruce(dia, lat, lon, 90.833)),
    anochecer: Math.round(cruce(dia, lat, lon, 96)),
  };
}

const SINODICO = 29.530588853;
const LUNA_NUEVA_2000 = Date.UTC(2000, 0, 6, 18, 14);

// Fase de la luna a las 21:00 de Veracruz de ese día: edad en días y fracción iluminada.
export function luna(dia: Dia) {
  const t = Date.UTC(dia.y, dia.m - 1, dia.d, 21 - DESFASE_MIN / 60);
  const edad = ((((t - LUNA_NUEVA_2000) / 86400000) % SINODICO) + SINODICO) % SINODICO;
  const iluminada = (1 - Math.cos((2 * Math.PI * edad) / SINODICO)) / 2;
  return { edad, iluminada, creciente: edad < SINODICO / 2 };
}

export function nombreLuna(edad: number) {
  if (edad < 1.5 || edad > SINODICO - 1.5) return 'luna nueva';
  if (edad < 6.6) return 'luna creciente';
  if (edad < 8.1) return 'cuarto creciente';
  if (edad < 13.8) return 'luna creciente gibosa';
  if (edad < 15.8) return 'luna llena';
  if (edad < 21.4) return 'luna menguante gibosa';
  if (edad < 22.9) return 'cuarto menguante';
  return 'luna menguante';
}

// Fecha y hora de Veracruz ahora mismo.
export function ahoraVeracruz() {
  const t = new Date(Date.now() + DESFASE_MIN * 60000);
  return {
    dia: { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate() },
    semana: t.getUTCDay(),
    minuto: t.getUTCHours() * 60 + t.getUTCMinutes(),
  };
}

export function sumarDias(dia: Dia, n: number) {
  const t = new Date(Date.UTC(dia.y, dia.m - 1, dia.d + n));
  return { dia: { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate() }, semana: t.getUTCDay() };
}

export const hhmm = (min: number) => {
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};
