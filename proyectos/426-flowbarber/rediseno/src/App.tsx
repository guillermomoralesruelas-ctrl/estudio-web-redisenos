import { useMemo, useState } from 'react';
import { dias, equipo, filosofia, historia, horario, lema, negocio, pilares, servicios, web } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const hora = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
const duracion = (m: number) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}`);

function Foto({ n, alt, className = '', prioridad = false, sizes }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string }) {
  const [w, h] = medidas[n] ?? [1280, 1920];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  cal: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>,
  ig: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#servicios', 'Servicios'], ['#tu-visita', 'Arma tu visita'], ['#equipo', 'Equipo'], ['#espacio', 'El espacio'], ['#ubicacion', 'Ubicación']];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-carbon/95 text-white backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Flow Barber, inicio"><img src={web('logo-blanco.png')} alt="Flow Barber" width={medidas.logo[0]} height={medidas.logo[1]} className="h-7 w-auto sm:h-8" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold uppercase tracking-wider">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-laton">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-laton hidden !py-3 sm:inline-flex">{Icono.cal}Reservar</a>
          <button type="button" className="p-2 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">Menú</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/10 lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-carbon text-white">
      <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-laton">Barbería · Centro de Playa del Carmen</p>
          <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl">Cortes de cabello y barba profesionales</h1>
          <p className="mt-6 max-w-lg text-lg text-white/85">{lema}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-laton">{Icono.cal}Reservar en Fresha</a>
            <a href="#tu-visita" className="btn-linea text-white">Arma tu visita</a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
            <div><dt className="text-white/70">Corte</dt><dd className="font-[family-name:var(--font-display)] text-3xl font-bold">$300</dd></div>
            <div><dt className="text-white/70">Lun a vie</dt><dd className="font-[family-name:var(--font-display)] text-3xl font-bold">10–20 h</dd></div>
            <div><dt className="text-white/70">Sábado</dt><dd className="font-[family-name:var(--font-display)] text-3xl font-bold">10–18 h</dd></div>
          </dl>
        </div>
        <div className="grid grid-cols-[1.25fr_1fr] gap-3">
          <Foto n="barbershop-1" alt="Barberos de Flow Barber cortando a dos clientes" prioridad sizes="(min-width:1024px) 26vw, 55vw" className="row-span-2 h-full w-full" />
          <Foto n="barbershop-2" alt="Interior de Flow Barber: luces hexagonales en el techo, piso de mármol y barbero trabajando" prioridad sizes="(min-width:1024px) 20vw, 45vw" className="aspect-[4/5] w-full" />
          <Foto n="gallery-clipper-detail" alt="Barbero con guantes negros haciendo un fade con máquina" sizes="(min-width:1024px) 20vw, 45vw" className="aspect-[4/5] w-full" />
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Corte de cabello para hombre</h2>
          <p className="mt-4 text-lg text-gris">Técnicas profesionales y atención personalizada.</p>
          <Foto n="gallery-trimmer-closeup" alt="Detalle de una máquina de acabado perfilando la nuca" sizes="(min-width:1024px) 30vw, 100vw" className="mt-8 hidden aspect-[4/3] w-full lg:block" />
        </div>
        <ul className="divide-y divide-black/10 border-y border-black/10">
          {servicios.map((s) => (
            <li key={s.id} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-6">
              <h3 className="text-3xl">{s.nombre}</h3>
              <p className="row-span-2 text-right"><span className="font-[family-name:var(--font-display)] text-4xl font-bold">${s.precio}</span><span className="block text-xs text-gris">MXN · ~${s.usd} USD</span></p>
              <p className="text-gris">{s.desc} <span className="whitespace-nowrap font-semibold text-tinta">· {duracion(s.min)}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ——— Elemento memorable: Arma tu visita ———
const ABRE = 600, CIERRA = 1200; // la escala del día: 10:00 a 20:00
function TuVisita() {
  const hoy = new Date();
  const proximos = useMemo(() => Array.from({ length: 7 }, (_, i) => { const d = new Date(hoy); d.setDate(hoy.getDate() + i); return d; }), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [tuyo, setTuyo] = useState<'ninguno' | 'corte' | 'barba' | 'combo'>('combo');
  const [ninos, setNinos] = useState(0);
  const [diaIdx, setDiaIdx] = useState(() => proximos.findIndex((d) => horario[d.getDay()] !== null));
  const [inicio, setInicio] = useState(660);

  const sel = servicios.find((s) => s.id === tuyo);
  const nino = servicios.find((s) => s.id === 'nino')!;
  const minutos = (sel?.min ?? 0) + ninos * nino.min;
  const precio = (sel?.precio ?? 0) + ninos * nino.precio;
  const dia = proximos[Math.max(0, diaIdx)];
  const h = horario[dia.getDay()];
  const ultimo = h ? h[1] - Math.max(minutos, 30) : 0;
  const horas = h ? Array.from({ length: Math.floor((ultimo - h[0]) / 30) + 1 }, (_, i) => h[0] + i * 30) : [];
  const ini = horas.includes(inicio) ? inicio : horas[horas.length - 1] ?? 0;
  const fin = ini + minutos;
  const etiqueta = (d: Date, i: number) => (i === 0 ? 'Hoy' : i === 1 ? 'Mañana' : dias[d.getDay()].slice(0, 3));
  const pct = (m: number) => `${((m - ABRE) / (CIERRA - ABRE)) * 100}%`;

  return (
    <section id="tu-visita" className="bg-carbon py-16 text-white lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-laton">Arma tu visita</p>
            <h2 className="mt-3 text-5xl sm:text-6xl lg:text-7xl">¿Cuánto tiempo y a qué hora sales?</h2>
          </div>
          <p className="text-lg text-white/80">Elige lo que te vas a hacer, si traes niños y el día. Te decimos cuánto cuesta, cuánto dura y hasta qué hora puedes llegar. La disponibilidad real la confirmas al reservar en Fresha.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-7 border border-white/15 p-5 sm:p-8">
            <fieldset>
              <legend className="text-sm font-bold uppercase tracking-wider text-white/75">Para ti</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {([['corte', 'Corte'], ['barba', 'Barba'], ['combo', 'Corte y barba'], ['ninguno', 'Nada, solo niños']] as const).map(([id, t]) => (
                  <button key={id} type="button" aria-pressed={tuyo === id} onClick={() => setTuyo(id)}
                    className={`border px-3 py-3 text-left text-sm font-semibold transition-colors ${tuyo === id ? 'border-laton bg-laton text-carbon' : 'border-white/25 hover:border-white'}`}>{t}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-bold uppercase tracking-wider text-white/75">Cortes infantiles</legend>
              <div className="mt-3 flex items-center gap-3">
                <button type="button" onClick={() => setNinos(Math.max(0, ninos - 1))} className="size-11 border border-white/30 text-xl hover:border-white" aria-label="Uno menos">−</button>
                <output className="w-10 text-center font-[family-name:var(--font-display)] text-4xl font-bold" aria-live="polite">{ninos}</output>
                <button type="button" onClick={() => setNinos(Math.min(3, ninos + 1))} className="size-11 border border-white/30 text-xl hover:border-white" aria-label="Uno más">+</button>
                <span className="text-sm text-white/70">${nino.precio} y {nino.min} min cada uno</span>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-bold uppercase tracking-wider text-white/75">Día</legend>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {proximos.map((d, i) => {
                  const cerrado = horario[d.getDay()] === null;
                  return (
                    <button key={i} type="button" disabled={cerrado} aria-pressed={diaIdx === i} onClick={() => setDiaIdx(i)}
                      className={`border px-1 py-2 text-center text-sm transition-colors disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/60 ${diaIdx === i ? 'border-laton bg-laton font-bold text-carbon' : 'border-white/25 hover:border-white'}`}>
                      <span className="block font-semibold">{etiqueta(d, i)}</span><span className="block text-xs">{cerrado ? 'Cerrado' : d.getDate()}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
            {h && minutos > 0 && (
              <div>
                <label htmlFor="llegada" className="text-sm font-bold uppercase tracking-wider text-white/75">Llegas a las</label>
                <select id="llegada" value={ini} onChange={(e) => setInicio(Number(e.target.value))} className="mt-3 block w-full border border-white/25 bg-grafito px-3 py-3 text-lg">
                  {horas.map((m) => <option key={m} value={m}>{hora(m)}</option>)}
                </select>
              </div>
            )}
          </div>

          <div className="flex flex-col bg-marmol p-5 text-tinta sm:p-8">
            {minutos === 0 ? (
              <p className="text-lg">Elige un servicio o agrega un corte infantil.</p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4" aria-live="polite">
                  <div><p className="text-sm text-gris">Total</p><p className="font-[family-name:var(--font-display)] text-6xl font-bold">${precio}</p><p className="text-xs text-gris">MXN</p></div>
                  <div><p className="text-sm text-gris">Tiempo de servicio</p><p className="font-[family-name:var(--font-display)] text-6xl font-bold">{duracion(minutos)}</p></div>
                </div>
                <p className="mt-6 text-2xl font-semibold">{dias[dia.getDay()]} {dia.getDate()}: llegas a las {hora(ini)} y sales a las {hora(fin)}.</p>
                {h && <p className="mt-1 text-gris">Ese día abren de {hora(h[0])} a {hora(h[1])}; para lo que elegiste, llega a más tardar a las {hora(ultimo)}.</p>}
                <div className="mt-8" aria-hidden="true">
                  <div className="relative h-14 bg-humo">
                    {h && h[1] < CIERRA && <div className="absolute inset-y-0 right-0 bg-[repeating-linear-gradient(45deg,#cfcabe_0_6px,#e2ded5_6px_12px)]" style={{ left: pct(h[1]) }} />}
                    <div className="absolute inset-y-1.5 bg-carbon transition-all duration-300" style={{ left: pct(ini), width: `${(minutos / (CIERRA - ABRE)) * 100}%` }}>
                      <span className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden px-1 text-xs font-bold text-laton">
                        {Array.from({ length: Math.max(1, Math.round(minutos / 30)) }, (_, i) => <span key={i} className="hex inline-block size-4 shrink-0 bg-laton" />)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gris">{[600, 720, 840, 960, 1080, 1200].map((m) => <span key={m}>{hora(m)}</span>)}</div>
                </div>
                <div className="mt-auto pt-8">
                  <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-negro w-full">{Icono.cal}Reservar en Fresha</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Equipo</p>
        <h2 className="mt-3 text-5xl sm:text-6xl">Los expertos detrás de cada corte</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {equipo.map((b) => (
            <li key={b.nombre} className="group grid grid-cols-[0.9fr_1.1fr] overflow-hidden bg-white">
              <Foto n={b.foto} prioridad alt={`${b.nombre}, ${b.rol.toLowerCase()} de Flow Barber`} sizes="(min-width:640px) 22vw, 45vw" className="aspect-[3/4] h-full w-full" />
              <div className="flex flex-col justify-end p-5 sm:p-7">
                <p className="font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-madera">{b.anos}</p>
                <p className="text-sm text-gris">años de experiencia</p>
                <h3 className="mt-5 text-4xl">{b.nombre}</h3>
                <p className="font-semibold">{b.rol}</p>
                <p className="text-gris">{b.estilo}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Espacio() {
  return (
    <section id="espacio" className="bg-humo py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">El espacio</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">Más que una barbería, una experiencia</h2>
          </div>
          <div className="space-y-4 text-lg text-gris">
            <p>{historia}</p>
            <p>{filosofia}</p>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {pilares.map((p) => <li key={p} className="bg-carbon px-4 py-2 text-sm font-bold uppercase tracking-wider text-white">{p}</li>)}
        </ul>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
          <Foto n="gallery-interior-2" alt="Recepción con muro de madera, repisas de productos y sillón de piel" sizes="(min-width:1024px) 33vw, 100vw" className="col-span-2 aspect-[4/3] w-full lg:col-span-1 lg:aspect-[3/4]" />
          <Foto n="gallery-dog" alt="La mascota de Flow Barber, un bulldog francés, sentada en un sillón de barbero" sizes="(min-width:1024px) 33vw, 50vw" className="aspect-[3/4] w-full" />
          <Foto n="gallery-storefront" alt="Fachada de Flow Barber de día" sizes="(min-width:1024px) 33vw, 50vw" className="aspect-[3/4] w-full" />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-negro">{Icono.ig}{negocio.instagramTxt}</a>
          <a href={negocio.resenaGoogle} target="_blank" rel="noopener" className="font-semibold text-madera underline-offset-4 hover:underline">¿Te gustó tu corte? Déjales una reseña en Google</a>
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Ubicación y horario</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Calle 1 Sur, Playa del Carmen</h2>
          <p className="mt-4 text-lg text-gris">{negocio.direccion}, {negocio.ciudad}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-negro">{Icono.pin}Cómo llegar</a>
            <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-linea text-tinta">{Icono.cal}Reservar</a>
          </div>
        </div>
        <dl className="divide-y divide-black/10 border-y border-black/10">
          {[['Lunes a viernes', '10:00 a 20:00'], ['Sábado', '10:00 a 18:00'], ['Domingo', 'Cerrado'], ['Instagram', negocio.instagramTxt]].map(([t, v]) => (
            <div key={t} className="grid grid-cols-[9rem_1fr] gap-4 py-4"><dt className="text-sm font-bold uppercase tracking-wider text-gris">{t}</dt><dd className="font-semibold">{t === 'Instagram' ? <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:underline">{v}</a> : v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-carbon pb-28 pt-10 text-white/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('logo-blanco.png')} alt="Flow Barber" width={medidas.logo[0]} height={medidas.logo[1]} className="h-8 w-auto" loading="lazy" />
        <p className="text-xs">© {new Date().getFullYear()} Flow Barber · Barbería moderna en Playa del Carmen</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-carbon text-white lg:hidden">
      <a href={negocio.reservar} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-laton py-3 text-xs font-bold text-carbon">{Icono.cal}Reservar</a>
      <a href={negocio.instagram} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.ig}Instagram</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Servicios />
        <TuVisita />
        <Equipo />
        <Espacio />
        <Ubicacion />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
