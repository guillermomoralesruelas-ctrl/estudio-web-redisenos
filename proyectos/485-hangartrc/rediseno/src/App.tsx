import { useState } from 'react';
import medidasJson from './data/fotos.json';
import { clases, correo, diferencias, estancia, fotos, horario, negocio, pases, planes, preguntas, web, type Disciplina } from './data/content';

const medidas = medidasJson as unknown as Record<string, [number, number]>;
const mxn = (n: number) => `$${n.toLocaleString('es-MX')}`;
const hora = (h: number) => {
  const hh = Math.floor(h);
  const mm = h % 1 ? '30' : '00';
  const ampm = hh < 12 ? 'AM' : 'PM';
  return `${hh > 12 ? hh - 12 : hh}:${mm} ${ampm}`;
};

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n] ?? [1400, 933];
  return <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />;
}

const Ico = {
  tel: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>,
  mail: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></svg>,
  pin: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  avion: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5Z" /></svg>,
};

// ── Elemento memorable: "Tu pase de abordar" ──────────────────────────────────
// Hangar = aviación. Eliges disciplina, a qué hora puedes y cuánto tiempo; el pase muestra tus clases reales
// a esa hora, tu tarifa (regular o restringida, según su regla de 10 AM a 4 PM) y el total con su equivalente al mes.
type Franja = 'temprano' | 'mediodia' | 'noche' | 'sabado';
const franjas: { id: Franja; nombre: string; rango: string; desde: number; hasta: number }[] = [
  { id: 'temprano', nombre: 'Temprano', rango: 'L-V 5 a 10 AM', desde: 5, hasta: 10 },
  { id: 'mediodia', nombre: 'Mediodía', rango: 'L-V 10 AM a 4 PM', desde: 10, hasta: 16 },
  { id: 'noche', nombre: 'Tarde y noche', rango: 'L-V 4 a 10 PM', desde: 16, hasta: 22 },
  { id: 'sabado', nombre: 'Sábado', rango: '6 AM a 3 PM', desde: 6, hasta: 15 },
];
const disciplinas: { id: Disciplina; nombre: string }[] = [
  { id: 'pesas', nombre: 'Pesas' },
  { id: 'box', nombre: 'Box' },
  { id: 'crossfit', nombre: 'Crossfit / Hyrox' },
];

function PaseDeAbordar() {
  const [disc, setDisc] = useState<Disciplina>('crossfit');
  const [franja, setFranja] = useState<Franja>('noche');
  const [planId, setPlanId] = useState('tri');
  const f = franjas.find((x) => x.id === franja)!;
  const plan = planes.find((p) => p.id === planId)!;

  const horas = disc === 'pesas' ? [] : (franja === 'sabado' ? clases[disc].sab : clases[disc].lv).filter((h) => h >= f.desde && h < f.hasta);
  const restringido = disc === 'pesas' && franja === 'mediodia';
  const total = restringido ? plan.restringido! : plan.regular;
  const alMes = Math.floor(total / plan.meses);
  const ahorro = (restringido ? planes[0].restringido! : planes[0].regular) * plan.meses - total;
  const nombreDisc = disciplinas.find((d) => d.id === disc)!.nombre;

  const sinClase = disc !== 'pesas' && horas.length === 0;
  const mensaje = `Hola, quiero entrenar en Hangar TRC.\n\nDisciplina: ${nombreDisc}\nHorario: ${f.nombre} (${f.rango})${horas.length ? `\nClases: ${horas.map(hora).join(', ')}` : ''}\nPlan: ${plan.nombre} ${restringido ? 'horario restringido' : 'acceso completo'} (${mxn(total)})\n`;

  return (
    <section id="pase" aria-labelledby="pase-titulo" className="bg-asfalto py-20 sm:py-28">
      <div className="contenedor">
        <p className="eyebrow">Arma tu plan de vuelo</p>
        <h2 id="pase-titulo" className="mt-2 text-5xl sm:text-6xl">Tu pase de abordar</h2>
        <p className="mt-4 max-w-2xl text-lg text-humo">Dinos qué quieres entrenar, a qué hora puedes y por cuánto tiempo. El pase te dice tus clases, tu tarifa y cuánto ahorras frente a pagar mes a mes.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="space-y-8">
            <fieldset>
              <legend className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wider">1. ¿Qué entrenas?</legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {disciplinas.map((d) => (
                  <button key={d.id} type="button" aria-pressed={disc === d.id} onClick={() => setDisc(d.id)} className={`border-2 px-3 py-3 text-sm font-bold transition-colors ${disc === d.id ? 'border-oro bg-oro text-noche' : 'border-grafito hover:border-oro'}`}>{d.nombre}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wider">2. ¿A qué hora puedes?</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {franjas.map((x) => (
                  <button key={x.id} type="button" aria-pressed={franja === x.id} onClick={() => setFranja(x.id)} className={`border-2 px-3 py-3 text-left transition-colors ${franja === x.id ? 'border-oro bg-oro text-noche' : 'border-grafito hover:border-oro'}`}>
                    <span className="block text-sm font-bold">{x.nombre}</span>
                    <span className={`block text-xs ${franja === x.id ? 'text-noche/80' : 'text-humo'}`}>{x.rango}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wider">3. ¿Por cuánto tiempo?</legend>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {planes.map((p) => (
                  <button key={p.id} type="button" aria-pressed={planId === p.id} onClick={() => setPlanId(p.id)} className={`border-2 px-2 py-3 text-sm font-bold transition-colors ${planId === p.id ? 'border-oro bg-oro text-noche' : 'border-grafito hover:border-oro'}`}>{p.meses === 1 ? '1 mes' : `${p.meses} meses`}</button>
                ))}
              </div>
            </fieldset>
          </div>

          <article aria-live="polite" className="relative grid grid-cols-[1fr_auto] overflow-hidden bg-white text-noche shadow-2xl sm:grid-cols-[1fr_9rem]">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-noche/20 pb-4">
                <img src={web('logo.png')} alt="" width={medidas.logo[0]} height={medidas.logo[1]} className="h-9 w-auto rounded bg-noche p-1" />
                <span className="flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em]">{Ico.avion} Pase de abordar</span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
                <div><dt className="text-[0.7rem] font-bold uppercase tracking-widest text-noche/60">Destino</dt><dd className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase">{nombreDisc}</dd></div>
                <div><dt className="text-[0.7rem] font-bold uppercase tracking-widest text-noche/60">Horario</dt><dd className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase">{f.nombre}</dd></div>
                <div className="col-span-2">
                  <dt className="text-[0.7rem] font-bold uppercase tracking-widest text-noche/60">{disc === 'pesas' ? 'Acceso' : 'Salidas (clases)'}</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {disc === 'pesas' && <span className="font-semibold">Área de pesas libre en todo tu horario ({f.rango})</span>}
                    {horas.map((h) => <span key={h} className="bg-noche px-2 py-1 font-[family-name:var(--font-display)] text-base font-semibold text-oro">{hora(h)}</span>)}
                    {sinClase && <span className="font-semibold">Sin clases de {nombreDisc} en esta franja. {disc === 'box' ? 'Box: L-V 6:30, 7:30, 8:30 AM y 5:30 a 8:30 PM.' : 'Crossfit: L-V 6 a 10 AM y 6 a 9 PM; sábado 8 y 9 AM.'}</span>}
                  </dd>
                </div>
                <div><dt className="text-[0.7rem] font-bold uppercase tracking-widest text-noche/60">Tarifa</dt><dd className="font-bold">{restringido ? 'Horario restringido' : 'Acceso completo'}</dd></div>
                <div><dt className="text-[0.7rem] font-bold uppercase tracking-widest text-noche/60">Plan</dt><dd className="font-bold">{plan.nombre}</dd></div>
              </dl>
              {!restringido && disc === 'pesas' && franja !== 'sabado' && <p className="mt-4 bg-oro/30 px-3 py-2 text-sm font-semibold">¿Solo pesas de 10 AM a 4 PM? El horario restringido cuesta {mxn(planes[0].restringido!)} al mes.</p>}
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={negocio.telefonoHref} className="inline-flex items-center gap-2 bg-noche px-5 py-3 font-[family-name:var(--font-display)] text-base font-extrabold uppercase tracking-wider text-oro hover:bg-grafito">{Ico.tel} Llamar</a>
                <a href={correo('Quiero entrenar en Hangar TRC', mensaje)} className="inline-flex items-center gap-2 border-2 border-noche px-5 py-3 font-[family-name:var(--font-display)] text-base font-extrabold uppercase tracking-wider hover:bg-noche hover:text-white">{Ico.mail} Mandar mi pase</a>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-1 bg-oro px-4 py-6 text-center">
              <span aria-hidden="true" className="perforado absolute inset-y-0 -left-[5px] w-[10px]" />
              <span className="text-[0.7rem] font-bold uppercase tracking-widest">Total</span>
              <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-none">{mxn(total)}</span>
              <span className="mt-2 text-xs font-bold">{plan.meses > 1 ? `= ${mxn(alMes)} al mes` : 'al mes'}</span>
              {ahorro > 0 && <span className="mt-3 bg-noche px-2 py-1 text-xs font-bold text-oro">Ahorras {mxn(ahorro)}</span>}
              <span className="mt-3 text-[0.65rem] font-bold uppercase">Sin inscripción</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const [i, setI] = useState(1);
  const f = fotos[i];
  return (
    <section id="instalaciones" aria-labelledby="inst-titulo" className="py-20 sm:py-28">
      <div className="contenedor">
        <p className="eyebrow">Nuestras instalaciones</p>
        <h2 id="inst-titulo" className="mt-2 text-5xl sm:text-6xl">27 rincones para entrenar</h2>
        <p className="mt-4 max-w-2xl text-lg text-humo">Conoce nuestras áreas de entrenamiento, equipadas con todo lo que necesitas para alcanzar tus metas.</p>
        <figure className="mt-10">
          <Foto n={f.n} alt={f.alt} className="aspect-[3/2] w-full" />
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm">
            <span className="font-semibold">{f.alt}</span>
            <span className="font-[family-name:var(--font-display)] text-humo">{i + 1} / {fotos.length}</span>
          </figcaption>
        </figure>
        <ul className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label="Elegir foto">
          {fotos.map((x, k) => (
            <li key={x.n} className="shrink-0">
              <button type="button" aria-pressed={i === k} aria-label={x.alt} onClick={() => setI(k)} className={`block border-2 ${i === k ? 'border-oro' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                <Foto n={x.n} alt="" className="h-16 w-24" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-oro focus:px-4 focus:py-2 focus:text-noche">Saltar al contenido</a>

      <header className="sticky top-0 z-40 border-b border-grafito bg-noche/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" aria-label="Hangar TRC, inicio"><img src={web('logo.png')} alt="Hangar TRC" width={medidas.logo[0]} height={medidas.logo[1]} className="h-10 w-auto" /></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-wider lg:flex">
            <a href="#pase" className="hover:text-oro">Tu pase</a>
            <a href="#clases" className="hover:text-oro">Clases</a>
            <a href="#precios" className="hover:text-oro">Precios</a>
            <a href="#instalaciones" className="hover:text-oro">Instalaciones</a>
            <a href="#contacto" className="hover:text-oro">Contacto</a>
          </nav>
          <a href={negocio.telefonoHref} className="btn-oro hidden sm:inline-flex">{Ico.tel} {negocio.telefono}</a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative isolate overflow-hidden">
          <Foto n="sky-limit" alt="" eager className="absolute inset-0 -z-10 h-full w-full opacity-45" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-noche via-noche/80 to-noche/20" />
          <div className="contenedor py-24 sm:py-36">
            <p className="eyebrow">Gimnasio en {negocio.ciudad}</p>
            <h1 className="mt-3 max-w-3xl text-6xl leading-[0.92] sm:text-8xl">Hangar TRC: pesas, box y crossfit en Torreón</h1>
            <p className="mt-6 max-w-xl text-xl text-white/85">Únete al cambio. Todo en un solo lugar, en una sola membresía, sin inscripción y con coaches incluidos.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#pase" className="btn-oro">Arma tu pase</a>
              <a href="#precios" className="btn-linea">Ver precios</a>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
              <div><dt className="text-xs uppercase tracking-widest text-humo">Desde</dt><dd className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-oro">$608<span className="text-base text-white">/mes</span></dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-humo">Inscripción</dt><dd className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-oro">$0</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-humo">L-V</dt><dd className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-oro">5–22 h</dd></div>
            </dl>
          </div>
          <div aria-hidden="true" className="franja h-3" />
        </section>

        <section id="porque" aria-labelledby="porque-titulo" className="py-20 sm:py-28">
          <div className="contenedor">
            <p className="eyebrow">Lo que nos hace diferentes</p>
            <h2 id="porque-titulo" className="mt-2 max-w-3xl text-5xl sm:text-6xl">No somos solo un gimnasio</h2>
            <p className="mt-4 max-w-2xl text-lg text-humo">Somos el espacio más completo de Torreón: pesas, box y crossfit en un solo lugar, con todo lo que necesitas para entrenar sin pretextos.</p>
            <ul className="mt-12 grid gap-px bg-grafito sm:grid-cols-2 lg:grid-cols-3">
              {diferencias.map((d, k) => (
                <li key={d.titulo} className="bg-noche p-7">
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-oro">{String(k + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 text-2xl">{d.titulo}</h3>
                  <p className="mt-2 text-humo">{d.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PaseDeAbordar />

        <section id="clases" aria-labelledby="clases-titulo" className="py-20 sm:py-28">
          <div className="contenedor">
            <p className="eyebrow">Horarios de clases</p>
            <h2 id="clases-titulo" className="mt-2 text-5xl sm:text-6xl">Elige tu clase</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {(['box', 'crossfit'] as const).map((k) => (
                <article key={k} className="grid overflow-hidden bg-asfalto sm:grid-cols-[0.9fr_1.1fr]">
                  <Foto n={k === 'box' ? 'ring' : 'crossfit'} alt={k === 'box' ? 'Ring de boxeo' : 'Área de CrossFit'} className="aspect-[4/3] h-full w-full" />
                  <div className="p-6">
                    <h3 className="text-3xl text-oro">{clases[k].nombre}</h3>
                    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-humo">Lunes a viernes</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">{clases[k].lv.map((h) => <li key={h} className="border border-grafito px-2 py-1 text-sm font-semibold">{hora(h)}</li>)}</ul>
                    {clases[k].sab.length > 0 && (<>
                      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-humo">Sábado</p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">{clases[k].sab.map((h) => <li key={h} className="border border-grafito px-2 py-1 text-sm font-semibold">{hora(h)}</li>)}</ul>
                    </>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" aria-labelledby="precios-titulo" className="bg-asfalto py-20 sm:py-28">
          <div className="contenedor">
            <p className="eyebrow">Precios</p>
            <h2 id="precios-titulo" className="mt-2 text-5xl sm:text-6xl">Planes flexibles, sin inscripción</h2>
            <p className="mt-4 max-w-2xl text-lg text-humo">Horario regular con acceso completo: pesas, box y crossfit / Hyrox / funcional. L-V 5:00 AM – 10:00 PM · Sáb 6:00 AM – 3:00 PM.</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {pases.map((p) => (
                <div key={p.nombre} className="border border-grafito p-5">
                  <h3 className="text-xl">{p.nombre}</h3>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-4xl font-extrabold text-oro">{mxn(p.precio)}</p>
                  <p className="text-sm text-humo">{p.detalle}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {planes.map((p) => (
                <div key={p.id} className={`relative p-6 ${p.id === 'mes' ? 'bg-oro text-noche' : 'bg-noche'}`}>
                  {p.id === 'mes' && <span className="absolute right-4 top-4 bg-noche px-2 py-0.5 text-xs font-bold text-oro">FAVORITO</span>}
                  {p.id === 'anu' && <span className="absolute right-4 top-4 bg-oro px-2 py-0.5 text-xs font-bold text-noche">MEJOR VALOR</span>}
                  <h3 className="text-2xl">{p.nombre}</h3>
                  <p className={`mt-2 font-[family-name:var(--font-display)] text-5xl font-extrabold ${p.id === 'mes' ? '' : 'text-oro'}`}>{mxn(p.regular)}</p>
                  <p className={`mt-1 text-sm ${p.id === 'mes' ? 'text-noche/80' : 'text-humo'}`}>{p.meses === 1 ? 'Ideal para comenzar.' : `Equivale a ${mxn(Math.floor(p.regular / p.meses))} al mes.`}</p>
                  <p className={`mt-4 border-t pt-3 text-sm ${p.id === 'mes' ? 'border-noche/20' : 'border-grafito text-humo'}`}>Horario restringido: <strong className={p.id === 'mes' ? '' : 'text-white'}>{mxn(p.restringido!)}</strong></p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-6 border-t border-grafito pt-6 md:grid-cols-2">
              <p className="text-humo"><strong className="text-white">Horario restringido:</strong> opción económica, lunes a viernes de 10:00 AM a 4:00 PM.</p>
              <p className="text-humo"><strong className="text-white">Estancia infantil:</strong> {estancia.horario}. Visita {mxn(estancia.visita)} · Mensualidad {mxn(estancia.mensualidad)}.</p>
            </div>
            <a href={negocio.telefonoHref} className="btn-oro mt-8">{Ico.tel} Quiero entrenar en Hangar TRC</a>
          </div>
        </section>

        <Galeria />

        <section id="faq" aria-labelledby="faq-titulo" className="bg-asfalto py-20 sm:py-28">
          <div className="contenedor max-w-3xl">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="faq-titulo" className="mt-2 text-5xl">Resolvemos tus dudas</h2>
            <div className="mt-8 divide-y divide-grafito border-y border-grafito">
              {preguntas.map((q, k) => (
                <div key={q.p}>
                  <h3 className="font-[family-name:var(--font-sans)] text-base normal-case tracking-normal">
                    <button type="button" aria-expanded={abierta === k} aria-controls={`r${k}`} onClick={() => setAbierta(abierta === k ? null : k)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold">
                      {q.p}
                      <span aria-hidden="true" className={`text-2xl text-oro transition-transform ${abierta === k ? 'rotate-45' : ''}`}>+</span>
                    </button>
                  </h3>
                  <p id={`r${k}`} hidden={abierta !== k} className="pb-5 text-humo">{q.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" aria-labelledby="contacto-titulo" className="py-20 sm:py-28">
          <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Visítanos y empieza hoy</p>
              <h2 id="contacto-titulo" className="mt-2 text-5xl sm:text-6xl">¿Listo para empezar?</h2>
              <p className="mt-4 text-lg text-humo">{negocio.direccion}, {negocio.cp}</p>
              <dl className="mt-8 space-y-2">
                {horario.map((h) => (
                  <div key={h.dias} className="flex justify-between gap-4 border-b border-grafito pb-2 sm:max-w-sm"><dt>{h.dias}</dt><dd className="font-bold text-oro">{h.horas}</dd></div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={negocio.telefonoHref} className="btn-oro">{Ico.tel} {negocio.telefono}</a>
                <a href={negocio.maps} target="_blank" rel="noopener" className="btn-linea">{Ico.pin} Abrir en Google Maps</a>
              </div>
              <p className="mt-6 text-sm text-humo">Correo: <a href={`mailto:${negocio.email}`} className="font-semibold text-white underline">{negocio.email}</a> · Instagram <a href={negocio.instagram} target="_blank" rel="noopener" className="font-semibold text-white underline">@hangar.trc</a></p>
            </div>
            <Foto n="entrada-exterior" alt="Vista exterior del gym" className="aspect-[3/2] w-full" />
          </div>
        </section>
      </main>

      <footer className="border-t border-grafito pb-28 pt-10 text-humo md:pb-10">
        <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <img src={web('logo.png')} alt="Hangar TRC" width={medidas.logo[0]} height={medidas.logo[1]} className="h-12 w-auto" />
          <ul className="flex flex-wrap gap-5 text-sm font-semibold">
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a></li>
            <li><a href={negocio.video} target="_blank" rel="noopener" className="hover:text-white">Video en YouTube</a></li>
          </ul>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-grafito bg-noche text-xs font-bold md:hidden">
        <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 bg-oro py-3 text-noche">{Ico.tel} Llamar</a>
        <a href="#pase" className="flex flex-col items-center gap-1 py-3 text-oro">{Ico.avion} Tu pase</a>
        <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-oro">{Ico.pin} Cómo llegar</a>
      </nav>
    </>
  );
}
