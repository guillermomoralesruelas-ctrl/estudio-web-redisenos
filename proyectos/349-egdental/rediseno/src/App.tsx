import { useState } from 'react';
import { clinic, modes, prices, reviews, team, treatments, usd, wa, why, wisdomTeeth, type Mode } from './data/content';
import fotos from './data/fotos.json';

const sizes = fotos as unknown as Record<string, [number, number]>;
const photo = (n: string) => ({ src: `./${n}.webp`, width: sizes[n][0], height: sizes[n][1] });

function Icon({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iPin = 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

const hello = 'Hi, I would like a free quote from EG Dental Clinic.';

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-hueso/95 shadow-[0_1px_0_rgb(15_47_74/0.08)] backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="whitespace-nowrap font-serif text-xl text-noche sm:text-2xl">EG Dental <span className="text-teal">Clinic</span></a>
        <nav aria-label="Main" className="hidden items-center gap-6 font-semibold text-noche lg:flex">
          <a href="#chart" className="hover:text-teal">Estimate</a>
          <a href="#prices" className="hover:text-teal">Prices</a>
          <a href="#team" className="hover:text-teal">Team</a>
          <a href="#visit" className="hover:text-teal">Visit us</a>
        </nav>
        <a href={`tel:${clinic.phone.tel}`} className="btn min-h-11 bg-teal px-4 text-white hover:bg-noche sm:px-5" aria-label={`Call ${clinic.phone.text}`}><Icon d={iTel} /> <span className="hidden sm:inline">{clinic.phone.text}</span><span className="sm:hidden">Call</span></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hueso">
      <div className="container-x grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:py-20">
        <div>
          <p className="eyebrow">{clinic.place}</p>
          <h1 className="mt-3 text-[2.6rem] sm:text-6xl">Affordable dentist in Tijuana, just across the border from San Diego</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Implants, crowns, fillings, root canals, dentures and whitening in a modern office in a new medical building in Zona Río. Evaluation from {usd(prices.evaluation)}.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#chart" className="btn bg-noche text-white hover:bg-teal">Mark your teeth, see the estimate</a>
            <a href={wa(hello)} className="btn border-2 border-teal/40 text-teal hover:border-teal hover:bg-white"><Icon d={iWhats} /> WhatsApp</a>
          </div>
        </div>
        <img {...photo('equipo')} alt="The EG Dental team: five people in black and white uniforms, smiling" className="aspect-[16/10] w-full rounded-[2rem] object-cover" fetchPriority="high" />
      </div>
    </section>
  );
}

// Universal numbering chart: 1–16 upper (patient's right to left), 17–32 lower (patient's left to right).
function toothSize(i: number) {
  const d = Math.min(i, 15 - i);
  return d <= 2 ? 19.5 : d <= 4 ? 17.5 : d === 5 ? 16 : 15;
}
const teeth = Array.from({ length: 32 }, (_, k) => {
  const upper = k < 16;
  const i = upper ? k : k - 16;
  const t = upper ? Math.PI + 0.22 + (i * (Math.PI - 0.44)) / 15 : 0.22 + (i * (Math.PI - 0.44)) / 15;
  const cx = 300 + 245 * Math.cos(t);
  const cy = (upper ? 232 : 248) + 185 * Math.sin(t);
  return { n: k + 1, cx, cy, r: toothSize(i) };
});

function Chart() {
  const [mode, setMode] = useState<Mode>('filling');
  const [marks, setMarks] = useState<Record<number, Mode>>({ 3: 'filling', 14: 'filling', 32: 'wisdom' });
  const [evaluation, setEvaluation] = useState(true);
  const [cleaning, setCleaning] = useState<'none' | 'regular' | 'semi' | 'deep'>('regular');
  const [quadrants, setQuadrants] = useState(2);
  const [whitening, setWhitening] = useState(false);
  const [graft, setGraft] = useState(false);
  const [pin, setPin] = useState(false);
  const [note, setNote] = useState('');

  const tap = (n: number) => {
    const m = modes.find((x) => x.id === mode)!;
    if (m.wisdomOnly && !wisdomTeeth.includes(n)) {
      setNote(`Tooth ${n} is not a wisdom tooth (those are 1, 16, 17 and 32).`);
      return;
    }
    setNote('');
    setMarks((prev) => {
      const next = { ...prev };
      if (next[n] === mode) delete next[n];
      else next[n] = mode;
      return next;
    });
  };

  const lines: { label: string; qty: number; price: number }[] = [];
  if (evaluation) lines.push({ label: 'Evaluation', qty: 1, price: prices.evaluation });
  if (cleaning === 'regular') lines.push({ label: 'Regular cleaning', qty: 1, price: prices.regularCleaning });
  if (cleaning === 'semi') lines.push({ label: 'Semi deep cleaning (whole mouth)', qty: 1, price: prices.semiDeepCleaning });
  if (cleaning === 'deep') lines.push({ label: 'Deep cleaning (per quadrant)', qty: quadrants, price: prices.deepCleaning });
  for (const m of modes) {
    const list = Object.entries(marks).filter(([, v]) => v === m.id).map(([k]) => k);
    if (list.length) lines.push({ label: `${m.label} (#${list.join(', #')})`, qty: list.length, price: m.price });
  }
  const pulled = Object.values(marks).filter((v) => v !== 'filling').length;
  if (graft && pulled) lines.push({ label: 'Bone graft in extraction', qty: pulled, price: prices.boneGraft });
  if (pin && pulled) lines.push({ label: 'Healing pin in extraction', qty: pulled, price: prices.healingPin });
  if (whitening) lines.push({ label: 'Zoom whitening, upper and lower', qty: 1, price: prices.whitening });
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);
  const message = `Hi EG Dental, I'd like a quote for: ${lines.map((l) => `${l.label}${l.qty > 1 ? ` x${l.qty}` : ''}`).join('; ')}. Estimate from your price list: ${usd(total)}.`;

  return (
    <section id="chart" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">Plan your visit</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Mark your teeth, see the estimate</h2>
          <p className="mt-4 text-lg text-gris">Pick a treatment, tap the teeth on the chart and add a cleaning or whitening. The estimate uses EG Dental’s published prices in US dollars; your final plan comes after the evaluation.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="min-w-0 rounded-[2rem] bg-white p-5 ring-1 ring-noche/10 sm:p-8">
            <fieldset>
              <legend className="font-semibold">1. Choose a treatment, then tap the teeth</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {modes.map((m) => (
                  <button key={m.id} type="button" aria-pressed={mode === m.id} onClick={() => setMode(m.id)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold ring-1 transition ${mode === m.id ? 'bg-noche text-white ring-noche' : 'bg-hueso text-noche ring-noche/15 hover:ring-noche/40'}`}>
                    <span className="size-3 rounded-full" style={{ background: m.color }} aria-hidden="true" />
                    {m.label} · {usd(m.price)}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="-mx-5 mt-6 overflow-x-auto px-3 sm:mx-0 sm:px-0">
            <svg viewBox="0 0 600 480" className="w-full min-w-[460px]" aria-label="Dental chart with 32 teeth, universal numbering">
              <text x="300" y="120" textAnchor="middle" className="fill-gris text-[15px] font-semibold">Upper</text>
              <text x="300" y="370" textAnchor="middle" className="fill-gris text-[15px] font-semibold">Lower</text>
              <text x="30" y="245" className="fill-gris text-[13px]">Right</text>
              <text x="570" y="245" textAnchor="end" className="fill-gris text-[13px]">Left</text>
              {teeth.map((t) => {
                const m = marks[t.n] ? modes.find((x) => x.id === marks[t.n])! : null;
                const wise = wisdomTeeth.includes(t.n);
                return (
                  <g key={t.n} role="button" tabIndex={0} aria-pressed={!!m} aria-label={`Tooth ${t.n}${wise ? ', wisdom tooth' : ''}${m ? `: ${m.label}` : ''}`}
                    onClick={() => tap(t.n)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(t.n); } }}
                    className="cursor-pointer outline-none [&:focus-visible>circle]:stroke-[#0a7178] [&:focus-visible>circle]:stroke-[4]">
                    <circle cx={t.cx} cy={t.cy} r={t.r} fill={m ? m.color : '#ffffff'} stroke={wise ? '#9aa8b4' : '#c8d3dc'} strokeWidth={2} strokeDasharray={wise && !m ? '4 3' : undefined} />
                    <text x={t.cx} y={t.cy + 4.5} textAnchor="middle" className={`pointer-events-none text-[13px] font-bold ${m ? 'fill-white' : 'fill-noche'}`}>{t.n}</text>
                  </g>
                );
              })}
            </svg>
            </div>
            <p className="mt-2 text-sm text-gris" aria-live="polite">{note || 'Tap a marked tooth again to clear it. Dashed circles are wisdom teeth.'}<span className="sm:hidden"> Swipe sideways to see the whole mouth.</span></p>

            <div className="mt-6 grid gap-5 border-t border-noche/10 pt-6 sm:grid-cols-2">
              <fieldset>
                <legend className="font-semibold">2. Cleaning</legend>
                {([['none', 'No cleaning'], ['regular', `Regular · ${usd(prices.regularCleaning)}`], ['semi', `Semi deep, whole mouth · ${usd(prices.semiDeepCleaning)}`], ['deep', `Deep, per quadrant · ${usd(prices.deepCleaning)}`]] as const).map(([v, l]) => (
                  <label key={v} className="mt-2 flex min-h-10 items-center gap-3">
                    <input type="radio" name="cleaning" checked={cleaning === v} onChange={() => setCleaning(v)} className="size-5 accent-[#0a7178]" /> {l}
                  </label>
                ))}
                {cleaning === 'deep' && (
                  <label className="mt-2 flex items-center gap-3 pl-8 text-sm">Quadrants
                    <select value={quadrants} onChange={(e) => setQuadrants(Number(e.target.value))} className="min-h-10 rounded-lg border border-noche/20 bg-white px-2">
                      {[1, 2, 3, 4].map((q) => <option key={q} value={q}>{q}</option>)}
                    </select>
                  </label>
                )}
              </fieldset>
              <fieldset>
                <legend className="font-semibold">3. Extras</legend>
                {([[evaluation, setEvaluation, `Evaluation · ${usd(prices.evaluation)}`], [whitening, setWhitening, `Zoom whitening · ${usd(prices.whitening)}`], [graft, setGraft, `Bone graft with each extraction · ${usd(prices.boneGraft)}`], [pin, setPin, `Healing pin with each extraction · ${usd(prices.healingPin)}`]] as const).map(([v, set, l]) => (
                  <label key={l} className="mt-2 flex min-h-10 items-center gap-3">
                    <input type="checkbox" checked={v} onChange={(e) => set(e.target.checked)} className="size-5 accent-[#0a7178]" /> {l}
                  </label>
                ))}
              </fieldset>
            </div>
          </div>

          <aside className="oscuro rounded-[2rem] bg-noche p-6 text-white sm:p-8 lg:sticky lg:top-24" aria-live="polite">
            <p className="eyebrow">Your estimate</p>
            <ul className="mt-4 divide-y divide-white/10">
              {lines.length === 0 && <li className="py-3 text-white/75">Nothing marked yet.</li>}
              {lines.map((l) => (
                <li key={l.label} className="flex items-baseline justify-between gap-4 py-3">
                  <span>{l.label}{l.qty > 1 && <span className="text-white/70"> × {l.qty}</span>}</span>
                  <span className="font-semibold tabular-nums">{usd(l.qty * l.price)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-baseline justify-between border-t border-white/25 pt-4">
              <span className="text-lg">Total</span>
              <span className="font-serif text-5xl text-sol">{usd(total)}</span>
            </div>
            <p className="mt-3 text-sm text-white/75">From their published price list. Crowns, implants and root canals are quoted after the evaluation.</p>
            <a href={wa(message)} className="btn mt-6 w-full bg-sol text-noche hover:bg-white"><Icon d={iWhats} /> Send this estimate</a>
            <a href={`tel:${clinic.phone.tel}`} className="btn mt-3 w-full border-2 border-white/40 hover:bg-white/10"><Icon d={iTel} /> Call {clinic.phone.text}</a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Prices() {
  const rows: [string, string, number][] = [
    ['Evaluation', 'Regular evaluation', prices.evaluation],
    ['Regular cleaning', 'Teeth cleaning', prices.regularCleaning],
    ['Semi deep cleaning', 'Whole mouth', prices.semiDeepCleaning],
    ['Deep cleaning', 'Per quadrant', prices.deepCleaning],
    ['White composite filling', 'Per filling', prices.filling],
    ['Extraction', 'Regular extraction', prices.extraction],
    ['Surgical extraction', 'Surgery extraction', prices.surgicalExtraction],
    ['Wisdom tooth extraction', 'Erupted', prices.wisdom],
    ['Wisdom tooth extraction', 'Fully impacted', prices.wisdomImpacted],
    ['Bone graft', 'In extraction', prices.boneGraft],
    ['Healing pin', 'In extraction', prices.healingPin],
    ['Zoom teeth whitening', 'Upper and lower', prices.whitening],
  ];
  return (
    <section id="prices" className="bg-white py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="eyebrow">General treatment services</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Their rates, in US dollars</h2>
          <p className="mt-4 text-gris">The prices published on their home page. For implants, crowns, root canals, dentures and posts, ask for a free quote.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {treatments.map((t) => (
              <li key={t.name}><span className="font-semibold text-noche">{t.name}.</span> <span className="text-gris">{t.text}</span></li>
            ))}
          </ul>
        </div>
        <table className="w-full self-start text-left">
          <caption className="sr-only">Price list in US dollars</caption>
          <tbody>
            {rows.map(([a, b, p]) => (
              <tr key={a + b} className="border-b border-noche/10">
                <th scope="row" className="py-3 pr-4 font-semibold text-noche">{a}<span className="block text-sm font-normal text-gris">{b}</span></th>
                <td className="py-3 text-right font-serif text-2xl text-teal tabular-nums">{usd(p)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Meet the team</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Approachable and friendly</h2>
            <ul className="mt-8 divide-y divide-noche/10">
              {team.map((m) => (
                <li key={m.name} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3">
                  <span className="font-serif text-2xl text-noche">{m.name}</span>
                  <span className="text-gris">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <img {...photo('equipo-tres')} alt="Three members of the EG Dental team in white coats" className="aspect-[16/10] w-full rounded-[2rem] object-cover" loading="lazy" />
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-3xl bg-cielo p-6">
              <blockquote className="font-serif text-xl text-noche">“{r.text}”</blockquote>
              <p className="mt-3 text-sm font-semibold text-teal">{r.name} · testimonial on their site</p>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <h3 className="text-3xl">Before &amp; after</h3>
          <p className="mt-2 text-gris">Cases from EG Dental’s own gallery. Every mouth is different: results depend on your evaluation.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[['caso-1', 'Before and after photo of upper front teeth, closed gap after treatment'], ['caso-2', 'Before and after photo of a patient’s upper teeth with retractor'], ['caso-3', 'Before and after photo of a patient’s smile, front teeth restored']].map(([f, a]) => (
              <li key={f}><img {...photo(f)} alt={a} className="aspect-square w-full rounded-2xl object-cover" loading="lazy" /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow">Visit us</p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Why patients cross for EG Dental</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <li key={w.title} className="rounded-3xl bg-hueso p-6 ring-1 ring-noche/5">
              <h3 className="text-2xl">{w.title}</h3>
              <p className="mt-2 text-gris">{w.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <img {...photo('edificio')} alt="The glass medical building in Zona Río, Tijuana, where the clinic is located" className="aspect-square w-full rounded-[2rem] object-cover" loading="lazy" />
          <div className="relative min-h-80 overflow-hidden rounded-[2rem] bg-cielo ring-1 ring-noche/10">
            <a href={clinic.map} className="absolute inset-0 grid place-items-center font-semibold text-teal underline underline-offset-4">Open EG Dental in Google Maps</a>
            <iframe src={clinic.mapEmbed} width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="EG Dental Clinic on Google Maps" className="relative block h-full min-h-80 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="oscuro bg-teal py-16 text-white sm:py-20">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl">Get your free quote</h2>
          <p className="mt-3 text-lg text-white/90">Call, message or email them about your dental concern.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a href={`tel:${clinic.phone.tel}`} className="btn bg-white text-teal hover:bg-hueso"><Icon d={iTel} /> {clinic.phone.text}</a>
          <a href={wa(hello)} className="btn border-2 border-white/60 hover:bg-white/10"><Icon d={iWhats} /> WhatsApp</a>
          <a href={`mailto:${clinic.email}`} className="btn border-2 border-white/60 hover:bg-white/10">Email</a>
          <a href={clinic.instagram} className="btn border border-white/40 hover:bg-white/10">Instagram</a>
          <a href={clinic.youtube} className="btn border border-white/40 hover:bg-white/10">YouTube</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="oscuro bg-noche py-10 pb-24 text-sm text-white/80 md:pb-10">
      <div className="container-x flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="font-serif text-xl text-white">EG Dental Clinic</p>
        <p>{clinic.place}</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-noche/10 bg-white text-noche md:hidden">
      <a href={`tel:${clinic.phone.tel}`} className="flex min-h-15 items-center justify-center gap-2 bg-teal font-semibold text-white"><Icon d={iTel} /> Call</a>
      <a href={wa(hello)} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icon d={iWhats} /> WhatsApp</a>
      <a href={clinic.map} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icon d={iPin} /> Map</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Chart />
        <Prices />
        <Team />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
