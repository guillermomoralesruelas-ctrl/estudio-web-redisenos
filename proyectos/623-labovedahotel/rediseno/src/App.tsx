import { useMemo, useState } from 'react';
import {
  fiestas, historia, historiaLarga, horarios, incluye, lugares, negocio, resenas, suites, wa, web, type Fiesta,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

// Fecha de hoy en Nochistlán (hora del centro).
function hoyNochistlan() {
  const s = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const [a, m, d] = s.split('-').map(Number);
  return { a, m: m - 1, d };
}
// Último sábado de julio de un año (El Hijo Ausente es "la última fin de semana de julio").
function ultimoSabadoJulio(a: number) {
  const d = new Date(Date.UTC(a, 6, 31));
  d.setUTCDate(31 - ((d.getUTCDay() + 1) % 7));
  return d.getUTCDate();
}
// Próxima vez que toca la fiesta, desde hoy.
function proxima(f: Fiesta, hoy: { a: number; m: number; d: number }) {
  if (f.ultimoFinDeSemana) {
    let a = hoy.a; let s = ultimoSabadoJulio(a);
    if (hoy.m > 6 || (hoy.m === 6 && hoy.d > s + 1)) { a += 1; s = ultimoSabadoJulio(a); }
    const dom = s + 1 > 31 ? '1 de agosto' : `${s + 1} de julio`;
    return { a, texto: `Sábado ${s} de julio y domingo ${dom} de ${a}`, corto: `${s} jul ${a}` };
  }
  const a = hoy.m > f.mes ? hoy.a + 1 : hoy.a;
  const enCurso = hoy.m === f.mes && a === hoy.a;
  return { a, texto: `${f.cuando} de ${a}${enCurso ? ' (¡es este mes!)' : ''}`, corto: `${MESES[f.mes].slice(0, 3)} ${a}` };
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#suites', 'Suites'], ['#calendario', 'Cuándo venir'], ['#historia', 'Historia'], ['#salon', 'Salón'], ['#nochistlan', 'Nochistlán'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 bg-noche text-white">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="La Bóveda Hotel, inicio"><img src={web('logo.png')} alt="La Bóveda" width={480} height={385} className="h-14 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-oro">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa('Hola, quisiera reservar en La Bóveda Hotel.')} target="_blank" rel="noopener" className="btn-oro hidden !px-5 !py-3 sm:inline-flex">{Icono.wa} Reserva hoy</a>
          <button type="button" className="p-2.5 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/10 lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg font-semibold">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-noche text-white">
      <Foto n="patio-arcos" alt="Patio interior de La Bóveda con arcos, columnas, barandales de hierro y sillones rojos" prioridad className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/55 to-noche/25" />
      <div className="contenedor flex min-h-[38rem] flex-col justify-end pb-16 pt-28 sm:min-h-[44rem]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-oro">Pueblo Mágico · Nochistlán, Zacatecas</p>
        <h1 className="mt-4 max-w-3xl text-6xl leading-[0.95] sm:text-8xl">La Bóveda Hotel</h1>
        <p className="mt-5 font-[family-name:var(--font-display)] text-2xl italic text-white/90 sm:text-3xl">Elegancia. Historia. Comodidad.</p>
        <p className="mt-3 max-w-xl text-white/85">Una casona del siglo XIX en el corazón del pueblo, con 5 suites, salón para eventos y muebles hechos a mano por carpinteros nochistlenses.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa('Hola, quisiera reservar en La Bóveda Hotel.')} target="_blank" rel="noopener" className="btn-oro">{Icono.wa} Reserva por WhatsApp</a>
          <a href="#suites" className="btn-linea">Ver las suites</a>
        </div>
        <ul className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {resenas.map((r) => (
            <li key={r.autor} className="border-l-2 border-oro pl-4">
              <p className="text-oro" aria-label="5 estrellas">★★★★★</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-xl italic">“{r.texto}”</p>
              <p className="mt-1 text-sm text-white/75">{r.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Suites() {
  return (
    <section id="suites" className="py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">5 suites</p>
            <h2 className="mt-3 text-5xl leading-none sm:text-6xl">Donde el lujo se encuentra con la herencia mexicana</h2>
          </div>
          <p className="text-gris">Cada suite presenta muebles hechos a mano por artesanos nochistlenses, combinando la comodidad moderna con una elegancia atemporal. Desde camas con colchón pillow top hasta terrazas con vistas impresionantes, cada detalle ha sido diseñado para ofrecerte una estancia tranquila e inolvidable.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Foto n="suite-vigas" alt="Suite con vigas de madera, candil, cama con cojines bordados y escritorio" className="col-span-2 row-span-2 h-full w-full" />
          <Foto n="dos-camas" alt="Dos camas queen con cojines de lunares bajo un cuadro de madera tallada" className="aspect-[4/3] w-full" />
          <Foto n="cojines-bordados" alt="Cabecera de madera con cojines bordados de colores" className="aspect-[4/3] w-full" />
          <Foto n="suite-ventanales" alt="Suite en planta baja con cama, ventanales y piso de barro" className="aspect-[4/3] w-full" />
          <Foto n="sillon-cuero" alt="Silla de cuero junto a una puerta de madera" className="aspect-[4/3] w-full" />
        </div>

        <ul className="mt-12 divide-y divide-noche/10 border-y border-noche/10">
          {suites.map((s) => (
            <li key={s.id} className="grid gap-3 py-7 md:grid-cols-[12rem_1fr_auto] md:items-start md:gap-8">
              <div>
                <h3 className="text-4xl leading-none">{s.nombre}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-oro-hondo">{s.camas}</p>
              </div>
              <div>
                <p className="text-gris">{s.texto}</p>
                <p className="mt-2 text-sm font-semibold">Planta {s.planta} · {s.vista}</p>
              </div>
              <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
                <p className="text-right"><span className="font-[family-name:var(--font-display)] text-4xl">{pesos(s.precio)}</span><span className="block text-xs text-gris">MXN por noche, incluye IVA</span></p>
                <a href={wa(`Hola, quisiera reservar la suite ${s.nombre} (${s.camas}).`)} target="_blank" rel="noopener" className="btn-barro !px-5">Reservar</a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 rounded-sm bg-cantera p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-3xl">Cada reserva cuenta con</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {incluye.map((i) => <li key={i} className="flex items-center gap-3"><span className="size-1.5 rotate-45 bg-barro" aria-hidden="true" />{i}</li>)}
            </ul>
          </div>
          <dl className="flex gap-8 font-[family-name:var(--font-display)] text-3xl lg:flex-col lg:gap-4">
            <div><dt className="font-[family-name:var(--font-sans)] text-xs font-bold uppercase tracking-[0.2em] text-oro-hondo">Llegada</dt><dd>{horarios.llegada}</dd></div>
            <div><dt className="font-[family-name:var(--font-sans)] text-xs font-bold uppercase tracking-[0.2em] text-oro-hondo">Salida</dt><dd>{horarios.salida}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

// Elemento memorable: el calendario de Nochistlán. Las fiestas del pueblo con su próxima fecha, y la suite para ese viaje.
function Calendario() {
  const hoy = useMemo(hoyNochistlan, []);
  const [fid, setFid] = useState('hijo');
  const [sid, setSid] = useState('nochistlan');
  const [noches, setNoches] = useState(2);
  const f = fiestas.find((x) => x.id === fid)!;
  const s = suites.find((x) => x.id === sid)!;
  const p = proxima(f, hoy);
  const total = s.precio * noches;
  const mensaje = `Hola, quisiera reservar la suite ${s.nombre} (${s.camas}) para ${f.nombre}: ${p.texto}. Serían ${noches} ${noches === 1 ? 'noche' : 'noches'} (${pesos(total)} con IVA según su sitio). ¿Tienen disponibilidad?`;
  return (
    <section id="calendario" className="bg-noche py-20 text-white sm:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-oro">Nochistlán: alegre por tradición</p>
          <h2 className="mt-3 text-5xl leading-none sm:text-6xl">¿Cuándo venir?</h2>
          <p className="mt-4 text-white/80">Las fiestas del pueblo en el año, con la próxima fecha. Elige una, tu suite y las noches, y pide disponibilidad por WhatsApp.</p>
        </div>

        <div className="mt-10 overflow-x-auto pb-2">
          <ol className="grid min-w-[44rem] grid-cols-12 gap-1" aria-label="Meses del año">
            {MESES.map((m, i) => {
              const delMes = fiestas.filter((x) => x.mes === i);
              const actual = i === hoy.m;
              return (
                <li key={m} className={`flex min-h-32 flex-col rounded-sm p-2 ${delMes.some((x) => x.id === fid) ? 'bg-oro text-noche' : delMes.length ? 'bg-white/10' : 'bg-white/[0.04]'}`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.14em] ${actual && !delMes.some((x) => x.id === fid) ? 'text-oro' : ''}`}>{m.slice(0, 3)}{actual ? ' · hoy' : ''}</p>
                  <div className="mt-auto space-y-1">
                    {delMes.map((x) => (
                      <button key={x.id} type="button" onClick={() => setFid(x.id)} aria-pressed={fid === x.id}
                        className={`block w-full rounded-sm px-1.5 py-1 text-left text-[0.7rem] font-bold leading-tight ${fid === x.id ? 'bg-noche text-oro' : 'bg-white/10 hover:bg-white/20'}`}>{x.nombre}</button>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-sm bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-oro">Próxima fecha</p>
            <h3 className="mt-2 text-4xl">{f.nombre}</h3>
            <p className="mt-2 text-xl font-semibold text-oro">{p.texto}</p>
            <p className="mt-4 text-white/80">{f.texto}</p>
            <p className="mt-6 text-sm text-white/60">Fechas tomadas de la página de historia del hotel; el calendario de cada año lo fija el pueblo.</p>
          </div>
          <div className="rounded-sm bg-cal p-6 text-tinta sm:p-8">
            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[0.2em] text-oro-hondo">Tu suite</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {suites.map((x) => (
                  <label key={x.id} className={`cursor-pointer border px-3 py-2.5 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-oro ${sid === x.id ? 'border-noche bg-noche text-white' : 'border-noche/20 hover:border-noche'}`}>
                    <input type="radio" name="suite" value={x.id} checked={sid === x.id} onChange={() => setSid(x.id)} className="sr-only" />
                    <span className="block font-bold">{x.nombre}</span><span className={sid === x.id ? 'text-white/75' : 'text-gris'}>{pesos(x.precio)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3" role="group" aria-label="Noches">
                <button type="button" onClick={() => setNoches(Math.max(1, noches - 1))} disabled={noches <= 1} className="size-10 border border-noche/30 text-lg font-bold hover:border-noche disabled:opacity-30" aria-label="Una noche menos">−</button>
                <p className="w-16 text-center"><span className="block text-2xl font-bold leading-none">{noches}</span><span className="text-xs uppercase tracking-[0.14em] text-gris">{noches === 1 ? 'noche' : 'noches'}</span></p>
                <button type="button" onClick={() => setNoches(Math.min(14, noches + 1))} disabled={noches >= 14} className="size-10 border border-noche/30 text-lg font-bold hover:border-noche disabled:opacity-30" aria-label="Una noche más">+</button>
              </div>
              <p className="text-right"><span className="text-xs uppercase tracking-[0.14em] text-gris">Total con IVA</span><br /><span className="font-[family-name:var(--font-display)] text-4xl">{pesos(total)}</span></p>
            </div>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-barro mt-6 w-full">{Icono.wa} Pedir disponibilidad</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="py-20 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Historia de La Bóveda</p>
          <h2 className="mt-3 text-5xl leading-none sm:text-6xl">Una historia tan rica como sus muros</h2>
          <p className="mt-5 text-gris">{historiaLarga}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Foto n="zaguan" alt="Zaguán con arco de cantera que da a la calle" className="arco aspect-[3/4] w-full" />
            <Foto n="boveda-techo" alt="Techo de bóveda con un rosetón pintado de naranja" className="arco aspect-[3/4] w-full" />
          </div>
        </div>
        <ol className="relative border-l border-oro-hondo/40 pl-8">
          {historia.map((h) => (
            <li key={h.año} className="relative pb-10 last:pb-0">
              <span className={`absolute -left-[2.45rem] top-1 size-4 rotate-45 ${h.año === '1913' ? 'bg-barro' : 'bg-oro'}`} aria-hidden="true" />
              <p className="font-[family-name:var(--font-display)] text-3xl text-oro-hondo">{h.año}</p>
              <h3 className="text-2xl">{h.titulo}</h3>
              <p className="mt-1 text-gris">{h.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Salon() {
  return (
    <section id="salon" className="bg-cantera py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Salón de eventos</p>
            <h2 className="mt-3 text-5xl leading-none sm:text-6xl">Tus momentos especiales merecen lo mejor</h2>
          </div>
          <div className="space-y-3 text-gris">
            <p><strong className="text-tinta">Bodas, cumpleaños, quinceañeras y más.</strong> Elegancia y modernidad en un lugar con encanto colonial para tu boda, cumpleaños, bautismo o cualquier momento especial.</p>
            <p><strong className="text-tinta">Sesiones de fotos.</strong> La Bóveda ofrece amplios espacios para sesiones de fotos únicas e inolvidables.</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Foto n="candil-cupula" alt="Salón bajo una cúpula con candil de hierro y arcos alrededor" className="row-span-2 h-full w-full" />
          <Foto n="salon-columnas" alt="Salón con columnas, barandales y sillas de cuero" className="aspect-[4/3] w-full md:col-span-2" />
          <Foto n="escalera-flores" alt="Escalera decorada con flores blancas para un evento" className="aspect-[3/4] w-full md:row-span-2 md:aspect-auto md:h-full" />
          <Foto n="mesa-evento" alt="Mesa de evento con copas, flores blancas y cubiertos dorados" className="aspect-[4/3] w-full" />
          <Foto n="jardin-fiesta" alt="Jardín con mesas blancas, flores y globos para una fiesta infantil" className="aspect-[4/3] w-full" />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa('Hola, quisiera una consulta gratuita para un evento en el salón de La Bóveda.')} target="_blank" rel="noopener" className="btn-barro">{Icono.wa} Agenda tu consulta gratuita</a>
          <a href={wa('Hola, quisiera agendar una sesión de fotos en La Bóveda.')} target="_blank" rel="noopener" className="btn-linea text-noche">Agenda una sesión de fotos</a>
        </div>
      </div>
    </section>
  );
}

function Nochistlan() {
  return (
    <section id="nochistlan" className="py-20 sm:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="eyebrow">La primera Guadalajara</p>
          <h2 className="mt-3 text-5xl leading-none sm:text-6xl">Puntos de interés en Nochistlán</h2>
          <p className="mt-5 text-gris">Fundado como "Guadalajara" en 1532, Nochistlán es uno de los Pueblos Mágicos de México: calles empedradas, casonas de adobe y edificios históricos bien conservados.</p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-5">
            {lugares.map((l) => (
              <li key={l.nombre} className="border-b border-noche/10 pb-4">
                <h3 className="text-2xl">{l.nombre}</h3>
                <p className="text-sm text-gris">{l.texto}</p>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <Foto n="calle-sombrillas" alt="Calle peatonal de Nochistlán con sombrillas de colores colgadas" className="col-span-2 aspect-[16/9] w-full" />
            <Foto n="acueducto" alt="Arcos de piedra del acueducto" className="aspect-square w-full" />
            <Foto n="templo" alt="Templo de cantera al atardecer" className="aspect-square w-full" />
            <Foto n="portales-noche" alt="Portales con arcos iluminados de noche" className="aspect-square w-full" />
            <Foto n="jardin" alt="Jardín con árboles y bancas de hierro" className="aspect-square w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-noche py-20 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-oro">Reserva hoy</p>
          <h2 className="mt-3 text-5xl leading-none sm:text-6xl">En la Calle Victoria, en el centro del pueblo</h2>
          <address className="mt-6 not-italic">
            <p className="text-xl font-semibold">{negocio.direccion}</p>
            <p className="text-white/75">{negocio.cp}</p>
          </address>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div><dt className="text-xs font-bold uppercase tracking-[0.2em] text-oro">Teléfono / WhatsApp</dt><dd><a href={negocio.telefonoHref} className="text-lg font-semibold hover:text-oro">{negocio.telefono}</a></dd></div>
            <div><dt className="text-xs font-bold uppercase tracking-[0.2em] text-oro">Correo</dt><dd><a href={`mailto:${negocio.email}`} className="text-lg font-semibold hover:text-oro">{negocio.email}</a></dd></div>
            <div><dt className="text-xs font-bold uppercase tracking-[0.2em] text-oro">Llegada · Salida</dt><dd className="text-lg font-semibold">{horarios.llegada} · {horarios.salida}</dd></div>
            <div><dt className="text-xs font-bold uppercase tracking-[0.2em] text-oro">Redes</dt><dd className="flex gap-4 text-lg font-semibold"><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-oro">Facebook</a><a href={negocio.tiktok} target="_blank" rel="noopener" className="hover:text-oro">TikTok</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, quisiera reservar en La Bóveda Hotel.')} target="_blank" rel="noopener" className="btn-oro">{Icono.wa} WhatsApp</a>
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-linea">{Icono.pin} Cómo llegar</a>
          </div>
        </div>
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
          <Foto n="puerta" alt="Puerta de madera tallada con clavos de hierro" className="arco aspect-[3/5] w-full" />
          <iframe title="Mapa: La Bóveda Hotel en Calle Victoria 26, Nochistlán" src={negocio.mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-72 w-full border-0" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-noche pb-28 pt-12 text-white/75 lg:pb-12">
      <div className="contenedor flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('logo.png')} alt="La Bóveda" width={480} height={385} loading="lazy" className="h-20 w-auto self-start" />
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            <li><a href="#suites" className="hover:text-oro">Suites</a></li>
            <li><a href="#calendario" className="hover:text-oro">Cuándo venir</a></li>
            <li><a href="#historia" className="hover:text-oro">Historia</a></li>
            <li><a href="#salon" className="hover:text-oro">Salón</a></li>
            <li><a href="#nochistlan" className="hover:text-oro">Nochistlán</a></li>
          </ul>
        </nav>
      </div>
      <p className="contenedor mt-8 text-xs text-white/60">© {new Date().getFullYear()} La Bóveda Hotel Boutique. Todos los derechos reservados.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={wa('Hola, quisiera reservar en La Bóveda Hotel.')} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-oro py-3 text-xs font-bold text-noche">{Icono.wa}WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.tel}Llamar</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Suites />
        <Calendario />
        <Historia />
        <Salon />
        <Nochistlan />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
