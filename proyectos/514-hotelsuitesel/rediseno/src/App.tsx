import { useState, type FormEvent } from 'react';
import {
  cloudbeds, habitaciones, hotel, largaEstancia, mar, modos, saludo, servicios, wa,
  type Foto, type Habitacion,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const fechaISO = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const masDias = (iso: string, n: number) => { const [y, m, d] = iso.split('-').map(Number); return fechaISO(new Date(y, m - 1, d + n)); };
const fechaLarga = (iso: string) => { const [y, m, d] = iso.split('-').map(Number); return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long' }).format(new Date(y, m - 1, d)); };
const plural = (n: number, uno: string, varios: string) => `${n} ${n === 1 ? uno : varios}`;

// ---------- Secciones ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#estancia', label: 'Tu estancia' },
    { href: '#habitaciones', label: 'Habitaciones' },
    { href: '#larga-estancia', label: 'Larga Estancia' },
    { href: '#mar', label: 'Actividades' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel & Suites El Moro, ir al inicio">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} className="h-9 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-tinta/80 hover:text-azulejo">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={hotel.telefonos[0].href} className="hidden items-center gap-2 px-3 font-medium text-tinta xl:inline-flex">{Icono.tel} {hotel.telefonos[0].visible}</a>
          <a href="#reservar" className="btn hidden sm:inline-flex">{Icono.cal} Reservar</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-white lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-serif text-2xl text-tinta last:border-0">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const desde = Math.min(...habitaciones.map((h) => h.directo));
  const datos = [
    ['Desde', `${pesos(desde)} MXN la noche`],
    ['Check-in', `desde las ${hotel.checkin}`],
    ['Check-out', `hasta las ${hotel.checkout}`],
    ['Recepción', 'abierta las 24 horas'],
  ];
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-moro text-white">
      <img src={hotel.portada.src} alt={hotel.portada.alt} width={hotel.portada.w} height={hotel.portada.h} fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-[45%_60%]" />
      <span className="absolute inset-0 -z-10 bg-gradient-to-t from-moro via-moro/75 to-moro/25 md:bg-gradient-to-r md:from-moro/90 md:via-moro/50 md:to-moro/0" aria-hidden="true" />
      <div className="contenedor flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-28 pt-40 md:min-h-[40rem] md:justify-center md:pb-16 md:pt-16">
        <p className="text-lg font-medium text-cobre">La Paz, Baja California Sur</p>
        <h1 className="mt-2 max-w-2xl text-[clamp(2.8rem,7vw,5.4rem)] text-white">{hotel.titulo}</h1>
        <p className="mt-4 max-w-xl text-xl text-white/90">{hotel.lema}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reservar" className="btn-cobre">{Icono.cal} Reservar ahora</a>
          <a href={hotel.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos por WhatsApp</a>
        </div>
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/25 pt-6 sm:grid-cols-4">
          {datos.map(([t, d]) => (
            <div key={t} className="min-w-0">
              <dt className="text-sm text-white/75">{t}</dt>
              <dd className="font-medium text-white">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Reservar() {
  const hoy = fechaISO(new Date());
  const [llegada, setLlegada] = useState(hoy);
  const [salida, setSalida] = useState(masDias(hoy, 1));
  const cambiarLlegada = (v: string) => { setLlegada(v); if (salida <= v) setSalida(masDias(v, 1)); };
  const enviar = (e: FormEvent) => { e.preventDefault(); window.open(cloudbeds(llegada, salida), '_blank', 'noopener'); };

  return (
    <section id="reservar" className="border-b border-tinta/10 bg-white">
      <div className="contenedor grid gap-8 py-10 lg:grid-cols-12 lg:items-end lg:py-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="text-3xl md:text-[2.2rem]">{hotel.mejorPrecio.titulo}</h2>
          <p className="mt-2">{hotel.mejorPrecio.texto}</p>
        </div>
        <form onSubmit={enviar} className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-[1fr_1fr_auto] lg:col-span-7">
          <label className="min-w-0 text-sm font-medium text-tinta">Llegada
            <input type="date" className="campo mt-1" value={llegada} min={hoy} onChange={(e) => cambiarLlegada(e.target.value)} required />
          </label>
          <label className="min-w-0 text-sm font-medium text-tinta">Salida
            <input type="date" className="campo mt-1" value={salida} min={masDias(llegada, 1)} onChange={(e) => setSalida(e.target.value)} required />
          </label>
          <button type="submit" className="btn col-span-2 self-end sm:col-span-1">Ver disponibilidad</button>
          <p className="col-span-2 text-sm sm:col-span-3">
            ¿Prefieres platicarlo primero? <a className="enlace" href={wa(`${saludo} Me gustaría reservar en el Hotel & Suites El Moro. ¿Me pueden ayudar?`)} {...externo}>Reserva por WhatsApp</a>.
            {' '}Al reservar, aceptas nuestros <a className="enlace" href={hotel.enlaces[0].href} {...externo}>términos y condiciones</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

function Rincon() {
  return (
    <section className="contenedor grid gap-12 py-20 md:grid-cols-12 md:items-center md:py-24">
      <div className="min-w-0 md:col-span-7">
        <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)]">{hotel.rincon.titulo}</h2>
        <p className="mt-5 text-xl text-tinta">{hotel.rincon.texto}</p>
        <ul className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {servicios.map((s) => (
            <li key={s.nombre} className="min-w-0 border-l-2 border-cobre pl-4">
              <p className="font-serif text-2xl text-tinta">{s.nombre}</p>
              {s.texto && <p className="text-[0.98rem]">{s.texto}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="arco mx-auto aspect-[5/4] w-full sm:aspect-[4/5] max-w-md min-w-0 overflow-hidden md:col-span-5">
        <Img foto={hotel.cupula} className="object-[35%_50%]" />
      </div>
    </section>
  );
}

// ---------- Elemento memorable: una noche, una semana o toda la temporada ----------

const NOCHES = [1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 28, 35, 42, 60, 90, 120, 150, 180];
const ULTIMO = NOCHES.length - 1;
const pos = (i: number) => (i / ULTIMO) * 100;
const inicioModo = modos.map((m) => NOCHES.findIndex((n) => n >= m.desde));

function duracion(n: number) {
  if (n < 7) return '';
  if (n >= 56) return `unos ${Math.round(n / 30)} meses`;
  if (n >= 28) return 'un mes';
  const s = Math.floor(n / 7), d = n % 7;
  return `${plural(s, 'semana', 'semanas')}${d ? ` y ${plural(d, 'noche', 'noches')}` : ''}`;
}

function Estancia() {
  const hoy = fechaISO(new Date());
  const [llegada, setLlegada] = useState(hoy);
  const [i, setI] = useState(2);
  const [personas, setPersonas] = useState(2);
  const [habId, setHabId] = useState('familiar');

  const n = NOCHES[i];
  const salida = masDias(llegada, n);
  const modo = [...modos].reverse().find((m) => n >= m.desde)!;
  const larga = modo.id !== 'noche';
  const hab = habitaciones.find((h) => h.id === habId)!;
  const semanas = Math.floor(n / 7);

  const cambiarPersonas = (p: number) => {
    setPersonas(p);
    if (hab.personas < p) setHabId(habitaciones.find((h) => h.personas >= p)!.id);
  };

  const mensaje = larga
    ? `${saludo} Quiero cotizar una larga estancia (${modo.nombre.toLowerCase()}) en la ${hab.nombre} para ${plural(personas, 'persona', 'personas')}: llegada el ${fechaLarga(llegada)}, ${n} noches.`
    : `${saludo} Quiero reservar la ${hab.nombre} para ${plural(personas, 'persona', 'personas')}, del ${fechaLarga(llegada)} al ${fechaLarga(salida)} (${plural(n, 'noche', 'noches')}).`;

  return (
    <section id="estancia" className="bg-moro text-white">
      <div className="contenedor py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[clamp(2.3rem,4.8vw,3.8rem)] text-white lg:col-span-7">Una noche, una semana o toda la temporada</h2>
          <p className="text-lg text-white/85 lg:col-span-5">{largaEstancia.cuanto} Mueve las noches y mira qué te conviene.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <p className="font-serif text-[clamp(3rem,8vw,5rem)] leading-none text-white" aria-live="polite">
                {plural(n, 'noche', 'noches')}
              </p>
              <p className="pb-2 text-white/80">{duracion(n) || `del ${fechaLarga(llegada)} al ${fechaLarga(salida)}`}</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} aria-label="Menos noches" disabled={i === 0}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-2xl leading-none text-white hover:bg-white/10 disabled:opacity-40">−</button>
              <div className="relative min-w-0 flex-1">
                <div className="pointer-events-none absolute inset-x-[11px] top-1/2 h-2 -translate-y-1/2" aria-hidden="true">
                  {modos.map((m, k) => {
                    const desde = k === 0 ? 0 : pos(inicioModo[k] - 0.5);
                    const hasta = k === modos.length - 1 ? 100 : pos(inicioModo[k + 1] - 0.5);
                    return <span key={m.id} className={`absolute top-0 h-2 rounded-full ${m.id === modo.id ? 'bg-cobre' : 'bg-white/20'}`}
                      style={{ left: `calc(${desde}% + 2px)`, width: `calc(${hasta - desde}% - 4px)` }} />;
                  })}
                </div>
                <label htmlFor="noches" className="sr-only">Noches de estancia</label>
                <input id="noches" type="range" min={0} max={ULTIMO} step={1} value={i} onChange={(e) => setI(Number(e.target.value))}
                  aria-valuetext={plural(n, 'noche', 'noches')} className="rango relative block w-full" />
              </div>
              <button type="button" onClick={() => setI((v) => Math.min(ULTIMO, v + 1))} aria-label="Más noches" disabled={i === ULTIMO}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-2xl leading-none text-white hover:bg-white/10 disabled:opacity-40">+</button>
            </div>

            <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {modos.map((m, k) => (
                <li key={m.id} className="min-w-0">
                  <button type="button" onClick={() => setI(inicioModo[k])} aria-pressed={m.id === modo.id}
                    className={`w-full rounded-xl px-3 py-2.5 text-left transition-colors ${m.id === modo.id ? 'bg-white text-moro' : 'bg-white/10 text-white hover:bg-white/15'}`}>
                    <span className="block font-medium">{m.nombre}</span>
                    <span className="block text-sm opacity-80">{m.umbral}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr]">
              <label className="flex flex-col text-sm font-medium text-white/85">Llegada
                <input type="date" className="campo mt-1 sm:w-48" value={llegada} min={hoy} onChange={(e) => setLlegada(e.target.value)} />
              </label>
              <fieldset className="min-w-0">
                <legend className="text-sm font-medium text-white/85">Personas</legend>
                <div className="mt-1 flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((p) => (
                    <button key={p} type="button" onClick={() => cambiarPersonas(p)} aria-pressed={p === personas}
                      className={`grid size-12 place-items-center rounded-xl text-lg font-medium ${p === personas ? 'bg-cobre text-moro' : 'bg-white/10 text-white hover:bg-white/15'}`}>{p}</button>
                  ))}
                </div>
              </fieldset>
            </div>

            <fieldset className="mt-6 min-w-0">
              <legend className="text-sm font-medium text-white/85">Habitación</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {habitaciones.map((h) => {
                  const cabe = h.personas >= personas;
                  return (
                    <button key={h.id} type="button" onClick={() => setHabId(h.id)} disabled={!cabe} aria-pressed={h.id === habId}
                      className={`rounded-full px-4 py-2 text-[0.95rem] font-medium ${h.id === habId ? 'bg-white text-moro' : 'border border-white/30 text-white hover:bg-white/10'} disabled:cursor-not-allowed disabled:opacity-40`}>
                      {h.nombre}<span className="sr-only">{cabe ? '' : ` (hasta ${h.personas} personas)`}</span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-white/75">{hab.nombre}: hasta {hab.personas} personas.</p>
            </fieldset>
          </div>

          <div className="min-w-0 self-start rounded-3xl bg-white p-7 text-texto md:p-9 lg:col-span-5" aria-live="polite">
            {!larga ? (
              <>
                <p className="font-medium text-cobre-texto">{hab.nombre}, precio directo</p>
                <p className="precio mt-2 font-serif text-5xl text-tinta">{pesos(hab.directo * n)} <span className="font-sans text-lg text-texto">MXN</span></p>
                <p className="mt-2">{plural(n, 'noche', 'noches')} a {pesos(hab.directo)} por noche, impuestos incluidos.</p>
                <p className="mt-4 rounded-xl bg-arena px-4 py-3 text-tinta">
                  Te ahorras <strong className="precio">{pesos((hab.lista - hab.directo) * n)}</strong> frente al precio publicado de <s className="precio">{pesos(hab.lista)}</s> por noche.
                </p>
                <p className="mt-4 text-sm">Precio por noche publicado en el sitio del hotel. La tarifa final depende de tus fechas y se confirma en el sistema de reservas.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={cloudbeds(llegada, salida)} {...externo} className="btn">{Icono.cal} Ver disponibilidad y reservar</a>
                  <a href={wa(mensaje)} {...externo} className="btn-linea">{Icono.wa} Preguntar por WhatsApp</a>
                </div>
              </>
            ) : (
              <>
                <p className="font-medium text-cobre-texto">Larga Estancia</p>
                <h3 className="mt-1 text-4xl">{modo.nombre}</h3>
                <p className="mt-3">{modo.texto}</p>
                <p className="mt-5 font-medium text-tinta">En {plural(n, 'noche', 'noches')} en la {hab.nombre} tienes incluido:</p>
                <ul className="mt-2 grid gap-1.5">
                  {hab.cocineta && <li className="flex gap-2"><span className="text-cobre-texto" aria-hidden="true">—</span>Cocineta equipada</li>}
                  <li className="flex gap-2"><span className="text-cobre-texto" aria-hidden="true">—</span>Luz, agua e internet</li>
                  <li className="flex gap-2"><span className="text-cobre-texto" aria-hidden="true">—</span>Limpieza y cambio de blancos</li>
                  <li className="flex gap-2"><span className="text-cobre-texto" aria-hidden="true">—</span>{plural(semanas, 'carga', 'cargas')} de ropa de 10 piezas y {plural(semanas, 'galón', 'galones')} de agua purificada de 6 L, uno por semana</li>
                  <li className="flex gap-2"><span className="text-cobre-texto" aria-hidden="true">—</span>Sin contrato, sin depósito y sin aval</li>
                </ul>
                {!hab.cocineta && (
                  <p className="mt-4 rounded-xl bg-arena px-4 py-3 text-[0.95rem] text-tinta">La Estándar Doble no tiene cocineta. Para estancias largas, la Suite Familiar, la Suite con Desván, la Suite Deluxe y la Master Suite tienen cocineta equipada.</p>
                )}
                <p className="mt-4 text-sm">A precio por noche serían {pesos(hab.directo * n)} MXN; la tarifa de Larga Estancia es preferente y te la cotizamos con tus fechas.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={wa(mensaje)} {...externo} className="btn">{Icono.wa} Pedir cotización por WhatsApp</a>
                  <a href="#larga-estancia" className="btn-linea">Conocer Larga Estancia</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilaHabitacion({ h }: { h: Habitacion }) {
  return (
    <article className="grid gap-6 border-t border-tinta/15 py-10 md:grid-cols-12 md:gap-8">
      <div className="aspect-[4/3] min-w-0 overflow-hidden rounded-2xl md:col-span-3 md:aspect-square">
        <Img foto={h.foto} />
      </div>
      <div className="min-w-0 md:col-span-6">
        <h3 className="text-[2rem]">{h.nombre}</h3>
        <p className="mt-1 font-medium text-cobre-texto">Hasta {h.personas} personas{h.cocineta ? ', con cocineta' : ''}</p>
        <p className="mt-3">{h.texto}</p>
        <p className="mt-3 text-[0.95rem] text-tinta/80">{h.detalles.join('. ')}.</p>
      </div>
      <div className="min-w-0 md:col-span-3 md:border-l md:border-tinta/15 md:pl-8">
        <p className="text-sm">Precio por noche</p>
        <p className="precio text-lg text-texto"><s aria-label={`Antes ${pesos(h.lista)}`}>{pesos(h.lista)}</s></p>
        <p className="precio font-serif text-4xl text-tinta">{pesos(h.directo)} <span className="font-sans text-base text-texto">MXN</span></p>
        <p className="text-sm">Impuestos incluidos, reservando directo</p>
        <div className="mt-5 flex flex-wrap gap-2 md:flex-col">
          <a href={cloudbeds()} {...externo} className="btn px-5">Reservar</a>
          <a href={wa(`${saludo} Me interesa la habitación ${h.nombre} en el Hotel & Suites El Moro. ¿Me pueden dar información?`)} {...externo} className="btn-linea px-5">{Icono.wa} Preguntar</a>
        </div>
      </div>
    </article>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="bg-arena py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)] md:col-span-6">Suites con alma mexicana frente al Mar de Cortés</h2>
          <p className="text-lg md:col-span-6">{hotel.rincon.habitaciones}</p>
        </div>
        <div className="mt-12 border-b border-tinta/15">
          {habitaciones.map((h) => <FilaHabitacion key={h.id} h={h} />)}
        </div>
      </div>
    </section>
  );
}

function LargaEstancia() {
  return (
    <section id="larga-estancia" className="py-20 md:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-6">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)]">{largaEstancia.titulo}</h2>
          <p className="mt-5 text-xl text-tinta">{largaEstancia.texto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa(`${saludo} Me interesa una larga estancia en el Hotel & Suites El Moro. ¿Me pueden enviar una cotización?`)} {...externo} className="btn">{Icono.wa} Cotiza tu estancia por WhatsApp</a>
            <a href="#estancia" className="btn-linea">Calcular mis noches</a>
          </div>
        </div>
        <div className="aspect-[16/9] min-w-0 overflow-hidden rounded-3xl lg:col-span-6 lg:aspect-auto">
          <Img foto={largaEstancia.foto} />
        </div>
      </div>

      <div className="contenedor mt-16">
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {largaEstancia.incluye.map((x) => (
            <div key={x.nombre} className="min-w-0">
              <dt className="font-serif text-2xl text-tinta">{x.nombre}</dt>
              <dd className="mt-1">{x.texto}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="contenedor mt-16 grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <h3 className="text-3xl">{largaEstancia.comparacion.titulo}</h3>
          <p className="mt-2">{largaEstancia.comparacion.texto}</p>
          <table className="mt-6 w-full border-collapse text-left text-[0.95rem]">
            <thead>
              <tr className="border-b-2 border-tinta/20">
                <th scope="col" className="py-3 pr-3 font-medium"><span className="sr-only">Concepto</span></th>
                <th scope="col" className="py-3 pr-3 font-medium text-tinta">Rentar o Airbnb</th>
                <th scope="col" className="py-3 font-medium text-azulejo">Hotel El Moro</th>
              </tr>
            </thead>
            <tbody>
              {largaEstancia.comparacion.filas.map(([c, rentar, moro]) => (
                <tr key={c} className="border-b border-tinta/10 align-top">
                  <th scope="row" className="py-3 pr-3 font-medium text-tinta">{c}</th>
                  <td className="py-3 pr-3">{rentar}</td>
                  <td className="py-3 font-medium text-tinta">{moro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <h3 className="text-3xl">Preguntas frecuentes</h3>
          <div className="mt-4">
            {largaEstancia.preguntas.map((q) => (
              <details key={q.p} className="group border-b border-tinta/15 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-tinta">
                  {q.p}<span className="text-xl leading-none text-cobre-texto group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-2">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mar() {
  return (
    <section id="mar" className="bg-moro-2 text-white">
      <div className="contenedor py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)] text-white md:col-span-6">{mar.titulo}</h2>
          <p className="text-lg text-white/85 md:col-span-6">{mar.texto} {mar.recepcion}</p>
        </div>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {mar.actividades.map((a) => (
            <article key={a.nombre} className="min-w-0 border-t border-white/20 pt-6">
              <h3 className="text-3xl text-white">{a.nombre}</h3>
              <p className="mt-3 text-white/85">{a.texto}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <a href={wa(`${saludo} Me interesa la actividad ${a.nombre} durante mi estancia en el Hotel & Suites El Moro. ¿Me pueden dar información?`)} {...externo}
                  className="inline-flex items-center gap-2 font-medium text-cobre underline underline-offset-4">{Icono.wa} Preguntar por {a.nombre}</a>
                <a href={a.href} {...externo} className="font-medium text-white/85 underline underline-offset-4 hover:text-white">Más en el sitio del hotel</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
      <div className="min-w-0 md:col-span-6">
        <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)]">Estamos para ayudarte</h2>
        <p className="mt-4 text-lg">¿Dudas sobre tu reservación, una estancia larga o simplemente cómo llegar? Escríbenos y te respondemos lo antes posible.</p>
        <address className="mt-6 text-lg not-italic text-tinta">
          <span className="block font-medium">{hotel.nombre}</span>
          {hotel.direccion.map((l) => <span key={l} className="block">{l}</span>)}
        </address>
        <p className="mt-2">{hotel.recepcion}.</p>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-medium text-cobre-texto">Teléfonos</dt>
            <dd className="mt-1 grid">{hotel.telefonos.map((t) => <a key={t.href} className="enlace text-lg" href={t.href}>{t.visible}</a>)}</dd>
          </div>
          <div>
            <dt className="font-medium text-cobre-texto">WhatsApp</dt>
            <dd className="mt-1"><a className="enlace text-lg" href={hotel.whatsapp} {...externo}>{hotel.whatsappVisible}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-cobre-texto">Correo</dt>
            <dd className="mt-1"><a className="enlace break-all text-lg" href={`mailto:${hotel.email}`}>{hotel.email}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-cobre-texto">Síguenos</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5">{hotel.redes.map((r) => <a key={r.nombre} href={r.href} {...externo} className="enlace">{r.nombre}</a>)}</dd>
          </div>
        </dl>
      </div>
      <div className="min-w-0 md:col-span-6">
        <a href={hotel.mapa} {...externo} className="group block overflow-hidden rounded-3xl" aria-label="Ver el Hotel & Suites El Moro en Google Maps (abre en otra pestaña)">
          <div className="aspect-[16/10] overflow-hidden"><Img foto={hotel.aerea} className="transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none" /></div>
        </a>
        <a href={hotel.mapa} {...externo} className="btn mt-5">{Icono.mapa} Cómo llegar en Google Maps</a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-tinta/10 bg-arena pb-28 pt-12 md:pb-12">
      <div className="contenedor grid gap-8 md:grid-cols-12 md:items-start">
        <div className="min-w-0 md:col-span-5">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} loading="lazy" className="h-12 w-auto" />
          <p className="mt-4 text-sm">{hotel.pagoSeguro}</p>
        </div>
        <div className="flex min-w-0 flex-wrap gap-x-6 gap-y-2 text-sm md:col-span-7 md:justify-end">
          <span>© {new Date().getFullYear()} {hotel.nombre}, La Paz, BCS</span>
          {hotel.enlaces.map((e) => <a key={e.nombre} href={e.href} {...externo} className="underline underline-offset-4 hover:text-tinta">{e.nombre}</a>)}
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-2">
        <a href="#reservar" className="btn px-3">Reservar</a>
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir por WhatsApp al Hotel & Suites El Moro">{Icono.wa}</a>
        <a href={hotel.telefonos[0].href} className="btn-linea px-0" aria-label="Llamar al Hotel & Suites El Moro">{Icono.tel}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar al Hotel & Suites El Moro">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#reservar" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a reservar</a>
      <Encabezado />
      <main>
        <Portada />
        <Reservar />
        <Rincon />
        <Estancia />
        <Habitaciones />
        <LargaEstancia />
        <Mar />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
