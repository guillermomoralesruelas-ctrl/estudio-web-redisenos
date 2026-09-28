import { useState, type ReactNode } from 'react';
import { montajes, salones, wa, type Montaje } from './data/content';

type Salon = (typeof salones)[number];
type Punto = [number, number];

const TERRAZA = 2; // fondo con que se dibuja la terraza del Scala (su medida no está publicada)

// Rejilla de n lugares repartida en un rectángulo, con la forma que daría la capacidad máxima.
function rejilla(cap: number, x0: number, y0: number, w: number, h: number): Punto[] {
  const paso = Math.sqrt((w * h) / cap);
  const cols = Math.max(1, Math.round(w / paso));
  const filas = Math.ceil(cap / cols);
  const dx = w / cols, dy = h / filas;
  const pts: Punto[] = [];
  for (let f = 0; f < filas; f++) for (let c = 0; c < cols; c++) pts.push([x0 + dx * (c + 0.5), y0 + dy * (f + 0.5)]);
  return pts.slice(0, cap);
}

function Distribucion({ s, montaje, n }: { s: Salon; montaje: Montaje; n: number }) {
  const cap = s.cap[montaje];
  const cabe = n <= cap;
  const usados = Math.min(n, cap);
  const W = s.ancho, D = s.fondo;
  const lleno = cabe ? 'var(--color-sol)' : 'var(--color-bruma)';
  const vacio = '#fff';
  const piezas: ReactNode[] = [];

  if (montaje === 'banquete') {
    const mesas = Math.ceil(cap / 10);
    const centros = rejilla(mesas, 0.4, 0.4, W - 0.8, D - 0.8);
    centros.forEach(([cx, cy], m) => {
      piezas.push(<circle key={`m${m}`} cx={cx} cy={cy} r={0.75} fill="var(--color-arena)" stroke="var(--color-cafe)" strokeWidth={0.06} />);
      for (let k = 0; k < 10; k++) {
        const i = m * 10 + k;
        if (i >= cap) break;
        const a = (k / 10) * Math.PI * 2;
        piezas.push(<circle key={`s${i}`} cx={cx + Math.cos(a) * 1.05} cy={cy + Math.sin(a) * 1.05} r={0.2} fill={i < usados ? lleno : vacio} stroke="var(--color-cafe)" strokeWidth={0.05} />);
      }
    });
  } else if (montaje === 'herradura') {
    const m = 1.1;
    const lados: [Punto, Punto][] = [[[m, 2], [m, D - m]], [[m, D - m], [W - m, D - m]], [[W - m, D - m], [W - m, 2]]];
    const largo = lados.reduce((t, [a, b]) => t + Math.hypot(b[0] - a[0], b[1] - a[1]), 0);
    lados.forEach(([a, b], k) => {
      const ix = a[0] === b[0] ? (a[0] < W / 2 ? 0.5 : -0.5) : 0;
      const iy = a[1] === b[1] ? -0.5 : 0;
      piezas.push(<line key={`t${k}`} x1={a[0] + ix} y1={a[1] + iy} x2={b[0] + ix} y2={b[1] + iy} stroke="var(--color-arena)" strokeWidth={0.6} strokeLinecap="square" />);
    });
    for (let i = 0; i < cap; i++) {
      let d = (i + 0.5) * (largo / cap);
      for (const [a, b] of lados) {
        const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (d <= l) {
          piezas.push(<circle key={`s${i}`} cx={a[0] + ((b[0] - a[0]) * d) / l} cy={a[1] + ((b[1] - a[1]) * d) / l} r={0.2} fill={i < usados ? lleno : vacio} stroke="var(--color-cafe)" strokeWidth={0.05} />);
          break;
        }
        d -= l;
      }
    }
  } else {
    const escuela = montaje === 'escuela';
    const unidades = escuela ? Math.ceil(cap / 2) : cap;
    const pts = rejilla(unidades, 0.6, 2, W - 1.2, D - 2.6);
    pts.forEach(([x, y], u) => {
      if (escuela) {
        piezas.push(<rect key={`m${u}`} x={x - 0.55} y={y - 0.55} width={1.1} height={0.3} fill="var(--color-arena)" stroke="var(--color-cafe)" strokeWidth={0.05} />);
        for (let k = 0; k < 2; k++) {
          const i = u * 2 + k;
          if (i >= cap) break;
          piezas.push(<circle key={`s${i}`} cx={x - 0.28 + k * 0.56} cy={y + 0.05} r={0.2} fill={i < usados ? lleno : vacio} stroke="var(--color-cafe)" strokeWidth={0.05} />);
        }
      } else {
        piezas.push(<circle key={`s${u}`} cx={x} cy={y} r={0.2} fill={u < usados ? lleno : vacio} stroke="var(--color-cafe)" strokeWidth={0.05} />);
      }
    });
  }

  return (
    <g opacity={cabe ? 1 : 0.6}>
      <rect x={0} y={0} width={W} height={D} fill="#fff" stroke="var(--color-cafe)" strokeWidth={0.12} />
      {montaje !== 'banquete' && (
        <>
          <rect x={W / 2 - 2} y={0.35} width={4} height={0.7} fill="var(--color-cafe)" />
          <text x={W / 2} y={0.88} textAnchor="middle" fontSize={0.45} fill="#fff" fontWeight={600}>Frente</text>
        </>
      )}
      {piezas}
      {s.terraza && (
        <>
          <rect x={0} y={D} width={W} height={TERRAZA} fill="none" stroke="var(--color-cafe)" strokeWidth={0.08} strokeDasharray="0.3 0.25" />
          <text x={W / 2} y={D + TERRAZA / 2 + 0.2} textAnchor="middle" fontSize={0.55} fill="var(--color-gris)">Terraza</text>
        </>
      )}
    </g>
  );
}

function Plano({ montaje, n, filas }: { montaje: Montaje; n: number; filas: boolean }) {
  // filas=true: los tres en fila (escritorio). false: Premium arriba y los otros dos abajo (celular).
  const gap = 1;
  const pos: [Salon, number, number][] = filas
    ? [[salones[0], 0, 1.2], [salones[1], 15 + gap, 1.2], [salones[2], 15 + gap + 8 + gap, 1.2]]
    : [[salones[0], 0.9, 1.2], [salones[1], 0, 1.2 + 12 + 2.2], [salones[2], 8 + 0.8, 1.2 + 12 + 2.2]];
  const W = filas ? 33 : 16.8;
  const H = filas ? 1.2 + 12 + TERRAZA + 0.3 : 1.2 + 12 + 2.2 + 12 + TERRAZA + 0.3;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden="true">
      {pos.map(([s, x, y]) => (
        <g key={s.id} transform={`translate(${x} ${y})`}>
          <text x={0} y={-0.4} fontSize={0.7} fontWeight={600} fill="var(--color-cafe)">
            {s.nombre.replace('Salón ', '')} <tspan fill="var(--color-gris)" fontWeight={400}>{s.ancho} × {s.fondo} m</tspan>
          </text>
          <Distribucion s={s} montaje={montaje} n={n} />
        </g>
      ))}
    </svg>
  );
}

export default function Salones() {
  const [montaje, setMontaje] = useState<Montaje>('banquete');
  const [n, setN] = useState(50);
  const caben = salones.filter((s) => n <= s.cap[montaje]);
  const justo = [...caben].sort((a, b) => a.cap[montaje] - b.cap[montaje])[0];
  const nombreMontaje = montajes.find((m) => m.id === montaje)!.nombre.toLowerCase();

  return (
    <section id="salones" className="bg-arena py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl sm:text-5xl">Acomoda a tus invitados</h2>
          <p className="mt-4 text-lg text-gris">
            Sus tres salones, dibujados a escala con sus medidas. Elige el montaje y cuántas personas van: cada punto es una silla, y ves en cuál caben con las capacidades que publica el hotel.
          </p>
        </div>

        <div className="mt-8 grid gap-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-cafe/10 sm:p-7 lg:grid-cols-[1.3fr_1fr]">
          <fieldset>
            <legend className="font-semibold">Montaje</legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {montajes.map((m) => (
                <label key={m.id} className={`cursor-pointer rounded-2xl border-2 p-3 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-sol ${m.id === montaje ? 'border-sol bg-sol/10' : 'border-cafe/10 hover:border-cafe/30'}`}>
                  <input type="radio" name="montaje" value={m.id} checked={m.id === montaje} onChange={() => setMontaje(m.id)} className="sr-only" />
                  <span className="block font-semibold">{m.nombre}</span>
                  <span className="block text-sm text-gris">{m.texto}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="personas" className="font-semibold">Personas: <span className="titulo text-3xl text-sol">{n}</span></label>
            <input id="personas" type="range" min={10} max={140} step={5} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-4 w-full accent-[#b24d14]" />
            <div className="mt-1 flex justify-between text-sm text-gris"><span>10</span><span>140</span></div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-cafe/10 sm:p-6">
          <div className="hidden md:block"><Plano montaje={montaje} n={n} filas /></div>
          <div className="md:hidden"><Plano montaje={montaje} n={n} filas={false} /></div>
          <p className="mt-3 text-sm text-gris">Dibujo a escala de las medidas publicadas; la terraza del Scala no tiene medida en su sitio y se dibuja como referencia. La distribución es ilustrativa: el hotel arma el montaje final.</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-center" aria-live="polite">
          <div>
            {caben.length > 0 ? (
              <p className="text-lg">
                <strong>{n} personas en {nombreMontaje}</strong> caben en {caben.map((s) => `${s.nombre} (hasta ${s.cap[montaje]})`).join(', ').replace(/, ([^,]*)$/, ' y $1')}.
              </p>
            ) : (
              <p className="text-lg">
                <strong>{n} personas en {nombreMontaje}</strong> no caben en un solo salón: el máximo es {Math.max(...salones.map((s) => s.cap[montaje]))} en el Premium. Pregunta por otro montaje.
              </p>
            )}
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {salones.map((s) => (
                <li key={s.id} className={`rounded-full px-3 py-1 font-semibold ${n <= s.cap[montaje] ? 'bg-sol text-white' : 'bg-bruma text-gris'}`}>
                  {s.nombre.replace('Salón ', '')}: {n <= s.cap[montaje] ? 'cabe' : `máx. ${s.cap[montaje]}`}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={wa(`Hola, quiero cotizar un evento para ${n} personas en montaje ${nombreMontaje}${justo ? ` (Salón ${justo.nombre.replace('Salón ', '')})` : ''}.`)}
            className="boton bg-cafe text-white hover:bg-sol lg:justify-self-end"
          >
            Cotizar por WhatsApp{justo ? ` el ${justo.nombre.replace('Salón ', '')}` : ''}
          </a>
        </div>
      </div>
    </section>
  );
}
