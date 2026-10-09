import { useMemo, useState } from 'react';
import medidasJson from './data/fotos.json';
import { anticipo, destinos, entrega, equipo, filosofia, films, highlights, negocio, preguntas, proceso, resenas, wa, waGeneral, web } from './data/content';

const medidas = medidasJson as unknown as Record<string, [number, number]>;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n] ?? [1800, 1013];
  return <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />;
}

const IcoWa = <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>;
const IcoIg = <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;

const DIA = 86400000;
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const largo = (d: Date) => d.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const corto = (d: Date) => d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
const masDias = (d: Date, n: number) => new Date(d.getTime() + n * DIA);

function sabadoEnSeisMeses() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setMonth(d.getMonth() + 6);
  d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7));
  return d;
}

// ── Elemento memorable: "Su boda en la línea de tiempo" ────────────────────────
// Una línea de tiempo de edición (como la de DaVinci, donde hacen su color): desde hoy hasta que llega su película.
// Con su fecha, calcula cuánto falta, el fin de semana que hay que apartar y la ventana real de entrega (6 a 10 semanas).
function LineaDeTiempo() {
  const [fecha, setFecha] = useState(iso(sabadoEnSeisMeses()));
  const [destino, setDestino] = useState(destinos[0]);
  const hoy = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }, []);
  const boda = new Date(`${fecha}T00:00:00`);
  const valida = !isNaN(boda.getTime()) && boda >= hoy;
  const dias = valida ? Math.round((boda.getTime() - hoy.getTime()) / DIA) : 0;
  const desde = masDias(boda, entrega.min * 7);
  const hasta = masDias(boda, entrega.max * 7);
  const total = Math.max(1, dias + entrega.max * 7);
  const pct = (n: number) => `${(n / total) * 100}%`;
  // Fin de semana de la boda: de viernes a domingo
  const dow = boda.getDay();
  const vie = masDias(boda, dow === 0 ? -2 : 5 - dow);
  const dom = masDias(vie, 2);
  const cercana = valida && dias < 8 * 7;

  const msg = `¡Hola, Hearts on Film! Nos casamos el ${valida ? largo(boda) : '(fecha)'} en ${destino}. ¿Tienen libre ese fin de semana? Nos gustaría agendar la llamada de 20 minutos.`;

  return (
    <section id="fecha" aria-labelledby="fecha-titulo" className="bg-sala py-20 text-marfil sm:py-28">
      <div className="contenedor">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lino"><span aria-hidden="true" className="rec mr-2 inline-block h-2.5 w-2.5 rounded-full bg-rec align-middle" />Su boda, en la línea de tiempo</p>
        <h2 id="fecha-titulo" className="mt-4 max-w-3xl text-4xl sm:text-5xl">¿Cuándo se casan? Les mostramos <em>cuándo llega su película.</em></h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lino">Fecha de la boda</span>
            <input type="date" value={fecha} min={iso(hoy)} onChange={(e) => setFecha(e.target.value)} className="mt-2 block w-full rounded-none border-0 border-b-2 border-lino/40 bg-transparent py-2 text-xl text-marfil [color-scheme:dark] focus:border-rec" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lino">¿Dónde?</span>
            <select value={destino} onChange={(e) => setDestino(e.target.value)} className="mt-2 block w-full rounded-none border-0 border-b-2 border-lino/40 bg-sala py-2 text-xl text-marfil focus:border-rec">
              {destinos.map((d) => <option key={d}>{d}</option>)}
            </select>
          </label>
          <p className="font-[family-name:var(--font-display)] text-5xl tabular-nums" aria-live="polite">{valida ? dias : '—'} <span className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.2em] text-lino">días</span></p>
        </div>

        {valida ? (
          <div className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-carbon">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-xs text-lino/80">
              <span>HEARTS_ON_FILM · {destino.toUpperCase()}</span>
              <span>{String(Math.floor(dias / 7)).padStart(2, '0')}s:{String(dias % 7).padStart(2, '0')}d</span>
            </div>
            <div className="relative px-4 pb-5 pt-8" aria-hidden="true">
              <div className="absolute inset-x-4 top-2 flex justify-between font-mono text-[0.65rem] text-lino/60">
                <span>HOY</span><span className="hidden sm:inline">{corto(boda)}</span><span>{corto(hasta)}</span>
              </div>
              <div className="relative space-y-2">
                {/* V2: la boda */}
                <div className="relative h-9 rounded bg-white/5">
                  <span className="absolute inset-y-0 left-0 flex items-center rounded bg-[repeating-linear-gradient(-45deg,rgba(231,217,196,.18)_0_6px,transparent_6px_12px)] px-2 text-[0.7rem] text-lino" style={{ width: pct(dias) }}>Preparativos</span>
                  <span className="absolute inset-y-0 flex items-center justify-center rounded bg-lino px-2 text-[0.7rem] font-semibold text-tinta" style={{ left: `calc(${pct(dias)} - 2px)`, width: '4.5rem', transform: 'translateX(-50%)' }}>Su boda</span>
                </div>
                {/* V1: edición */}
                <div className="relative h-9 rounded bg-white/5">
                  <span className="absolute inset-y-0 flex items-center overflow-hidden whitespace-nowrap rounded bg-salvia px-2 text-[0.7rem] font-semibold text-white" style={{ left: pct(dias), width: pct(entrega.min * 7) }}>Edición · color · música</span>
                  <span className="absolute inset-y-0 flex items-center overflow-hidden whitespace-nowrap rounded bg-rec px-2 text-[0.7rem] font-semibold text-white" style={{ left: pct(dias + entrega.min * 7), width: pct((entrega.max - entrega.min) * 7) }}>Entrega</span>
                </div>
                {/* A1: audio de los votos */}
                <div className="relative h-6 rounded bg-white/5">
                  <svg className="absolute inset-y-0 h-full" style={{ left: `calc(${pct(dias)} - 1.5rem)`, width: '3rem' }} viewBox="0 0 48 24" preserveAspectRatio="none"><path d="M0 12h6l2-6 3 12 3-16 3 20 3-14 3 8 3-10 3 12 3-6 3 4 3-2h7" fill="none" stroke="#E7D9C4" strokeWidth="1.5" /></svg>
                </div>
                <span className="absolute -top-6 bottom-0 left-0 w-0.5 bg-rec" />
              </div>
            </div>
            <dl className="grid gap-px border-t border-white/10 bg-white/10 text-sm sm:grid-cols-3">
              <div className="bg-carbon p-4"><dt className="text-xs uppercase tracking-[0.2em] text-lino/80">Fin de semana a apartar</dt><dd className="mt-1 font-semibold">{corto(vie)} al {corto(dom)}</dd></div>
              <div className="bg-carbon p-4"><dt className="text-xs uppercase tracking-[0.2em] text-lino/80">Su película llega</dt><dd className="mt-1 font-semibold">Entre el {corto(desde)} y el {corto(hasta)}</dd></div>
              <div className="bg-carbon p-4"><dt className="text-xs uppercase tracking-[0.2em] text-lino/80">Para apartar</dt><dd className="mt-1 font-semibold">Llamada de 20 min y anticipo del {anticipo}%</dd></div>
            </dl>
          </div>
        ) : (
          <p className="mt-10 text-lino">Elige una fecha a partir de hoy.</p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a href={wa(msg)} target="_blank" rel="noopener" className="btn-rec">{IcoWa} Preguntar por esta fecha</a>
          <p className="max-w-md text-sm text-lino/90">
            {cercana ? 'Su fecha está cerca: escríbannos hoy para ver si sigue libre.' : 'Trabajan máximo una boda por fin de semana; las fechas de temporada alta se cierran con meses de anticipación.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-marfil focus:px-4 focus:py-2">Saltar al contenido</a>

      <header className="absolute inset-x-0 top-0 z-40">
        <div className="contenedor flex h-20 items-center justify-between gap-4 text-marfil">
          <a href="#inicio" className="font-[family-name:var(--font-display)] text-2xl">Hearts <em>on</em> Film</a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#films" className="hover:text-lino">Films</a>
            <a href="#proceso" className="hover:text-lino">Proceso</a>
            <a href="#fecha" className="hover:text-lino">Su fecha</a>
            <a href="#preguntas" className="hover:text-lino">Preguntas</a>
          </nav>
          <a href={waGeneral} target="_blank" rel="noopener" className="hidden rounded-full border border-marfil/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-marfil hover:text-tinta sm:inline-flex">Hablemos</a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-sala text-marfil">
          <Foto n="valeria-pablo" alt="Valeria y Pablo abrazados entre plantas, en su boda en Cancún" eager className="absolute inset-0 -z-10 h-full w-full object-[50%_30%] opacity-80" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-sala via-sala/40 to-sala/30" />
          <div className="contenedor pb-16 pt-32 sm:pb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lino">{negocio.rubro} · {negocio.ciudad}</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[1.04] sm:text-7xl">Hearts on Film: su boda en Monterrey, <em>contada como película.</em></h1>
            <p className="mt-6 max-w-xl text-lg text-marfil/90">Capturamos la emoción real de tu boda: no solo imágenes, sino el latido de cada momento que vivirás para siempre.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={waGeneral} target="_blank" rel="noopener" className="btn-rec">{IcoWa} Cuéntanos de su boda</a>
              <a href="#fecha" className="btn-linea text-marfil hover:!bg-marfil hover:!text-tinta">Ver cuándo llega su película</a>
            </div>
            <p className="mt-4 text-sm text-lino/90">Te respondemos personalmente en menos de 24 h · Sin compromiso</p>
          </div>
        </section>

        <section aria-label="En cifras" className="border-b border-tinta/10">
          <dl className="contenedor grid grid-cols-3 divide-x divide-tinta/10 py-8 text-center">
            <div><dt className="text-xs uppercase tracking-[0.2em] text-gris">Experiencia</dt><dd className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">{negocio.anios} <em>años</em></dd></div>
            <div><dt className="text-xs uppercase tracking-[0.2em] text-gris">Cobertura</dt><dd className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">MTY <em>&amp; destino</em></dd></div>
            <div><dt className="text-xs uppercase tracking-[0.2em] text-gris">Reseñas</dt><dd className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">5.0 <em>★</em></dd></div>
          </dl>
        </section>

        <section aria-labelledby="filosofia-titulo" className="py-20 sm:py-28">
          <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Foto n="ramo-tulipanes" alt="Ramo de tulipanes blancos en las manos de los novios" className="aspect-square w-full" />
            <div>
              <p className="eyebrow">Nuestra filosofía</p>
              <h2 id="filosofia-titulo" className="mt-4 text-4xl sm:text-5xl">Contamos <em>historias de amor.</em></h2>
              {filosofia.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg text-gris">{p}</p>)}
              <blockquote className="mt-8 border-l-2 border-rec pl-5 font-[family-name:var(--font-display)] text-2xl">Siente de nuevo <em>lo que sentiste ese día.</em></blockquote>
            </div>
          </div>
        </section>

        <section id="films" aria-labelledby="films-titulo" className="bg-lino/50 py-20 sm:py-28">
          <div className="contenedor">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Nuestros films</p>
                <h2 id="films-titulo" className="mt-4 text-4xl sm:text-5xl">Bodas <em>recientes</em></h2>
              </div>
              <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea">{IcoIg} Ver más en Instagram</a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {films.map((f) => (
                <figure key={f.pareja}>
                  <Foto n={f.foto} alt={`Boda de ${f.pareja}`} className="aspect-[4/5] w-full" />
                  <figcaption className="mt-4">
                    <p className="font-[family-name:var(--font-display)] text-2xl">{f.pareja}</p>
                    <p className="text-sm text-gris">{f.lugar}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="high-titulo" className="py-20 sm:py-28">
          <div className="contenedor">
            <p className="eyebrow">Highlights</p>
            <h2 id="high-titulo" className="mt-4 text-4xl sm:text-5xl">Fragmentos de <em>luz y emoción</em></h2>
            <p className="mt-4 max-w-2xl text-lg text-gris">Una selección de momentos que viven entre el silencio y la euforia: pequeños detalles que cuentan la historia completa.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
              {highlights.map((h, k) => <Foto key={h.foto} n={h.foto} alt={h.alt} className={`aspect-[16/9] w-full ${k === 0 ? 'col-span-2 md:row-span-2 md:aspect-auto md:h-full' : k === 5 ? 'col-span-2 md:col-span-1' : ''}`} />)}
            </div>
          </div>
        </section>

        <LineaDeTiempo />

        <section id="proceso" aria-labelledby="proceso-titulo" className="py-20 sm:py-28">
          <div className="contenedor grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">El proceso</p>
              <h2 id="proceso-titulo" className="mt-4 text-4xl sm:text-5xl">Así trabajamos <em>juntos</em></h2>
              <p className="mt-4 text-lg text-gris">Desde el primer mensaje hasta que tengas tu película en mano, te acompañamos en cada paso.</p>
              <h3 className="mt-10 font-[family-name:var(--font-sans)] text-xs font-semibold uppercase tracking-[0.28em] text-rec">Un estudio boutique, una historia a la vez</h3>
              <ul className="mt-4 divide-y divide-tinta/10 border-y border-tinta/10 text-sm">
                {equipo.map((e) => <li key={e.rol} className="flex justify-between gap-4 py-2.5"><span className="font-semibold">{e.rol}</span><span className="text-right text-gris">{e.detalle}</span></li>)}
              </ul>
            </div>
            <ol className="space-y-8">
              {proceso.map((p, k) => (
                <li key={p.titulo} className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <span className="font-[family-name:var(--font-display)] text-4xl italic text-rec">{String(k + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-2xl">{p.titulo}</h3>
                    <p className="mt-2 text-gris">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="resenas-titulo" className="relative isolate overflow-hidden bg-sala py-24 text-marfil">
          <Foto n="abrazo-bn" alt="" className="absolute inset-0 -z-10 h-full w-full opacity-30" />
          <div className="contenedor">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lino">Lo que dicen nuestras novias</p>
            <h2 id="resenas-titulo" className="mt-4 text-4xl sm:text-5xl">Palabras que nos <em>llenan el corazón</em></h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {resenas.map((r) => (
                <figure key={r.pareja}>
                  <p aria-label="5 de 5 estrellas" className="text-lino">★★★★★</p>
                  <blockquote className="mt-3 font-[family-name:var(--font-display)] text-2xl italic leading-snug">“{r.texto}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-lino">{r.pareja}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas" aria-labelledby="preguntas-titulo" className="py-20 sm:py-28">
          <div className="contenedor max-w-3xl">
            <p className="eyebrow">Antes de escribirnos</p>
            <h2 id="preguntas-titulo" className="mt-4 text-4xl">Lo que <em>se preguntan</em> casi todas las novias</h2>
            <div className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
              {preguntas.map((q, k) => (
                <div key={q.p}>
                  <h3 className="font-[family-name:var(--font-sans)]">
                    <button type="button" aria-expanded={abierta === k} aria-controls={`r${k}`} onClick={() => setAbierta(abierta === k ? null : k)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium">
                      {q.p}
                      <span aria-hidden="true" className={`text-2xl text-rec transition-transform ${abierta === k ? 'rotate-45' : ''}`}>+</span>
                    </button>
                  </h3>
                  <p id={`r${k}`} hidden={abierta !== k} className="pb-5 text-gris">{q.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="final-titulo" className="relative isolate overflow-hidden bg-sala py-28 text-center text-marfil">
          <Foto n="beso-confeti" alt="" className="absolute inset-0 -z-10 h-full w-full opacity-35" />
          <div className="contenedor max-w-3xl">
            <h2 id="final-titulo" className="text-4xl sm:text-6xl">Si llegaste hasta aquí, <em>algo hizo clic.</em></h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-marfil/90">No tienes que decidir nada hoy. Escríbenos por WhatsApp, cuéntanos un poco de ustedes y vemos si somos el equipo indicado para acompañarlos. Sin presión: solo una conversación.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={waGeneral} target="_blank" rel="noopener" className="btn-rec">{IcoWa} Escríbeme por WhatsApp</a>
              <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea text-marfil hover:!bg-marfil hover:!text-tinta">{IcoIg} Ver trabajo en Instagram</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sala pb-28 pt-10 text-lino/80 md:pb-10">
        <div className="contenedor flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-xl text-marfil">Hearts <em>on</em> Film</p>
          <p className="text-sm">Videografía de bodas · {negocio.ciudad}</p>
          <ul className="flex gap-5 text-sm font-semibold">
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-marfil">Instagram</a></li>
            <li><a href={waGeneral} target="_blank" rel="noopener" className="hover:text-marfil">WhatsApp</a></li>
          </ul>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-sala text-xs font-semibold text-marfil md:hidden">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-rec py-3">{IcoWa} WhatsApp</a>
        <a href="#fecha" className="flex flex-col items-center gap-1 py-3"><span aria-hidden="true" className="rec mt-1 h-3 w-3 rounded-full bg-rec" /> Su fecha</a>
        <a href={negocio.instagram} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3">{IcoIg} Instagram</a>
      </nav>
    </>
  );
}
