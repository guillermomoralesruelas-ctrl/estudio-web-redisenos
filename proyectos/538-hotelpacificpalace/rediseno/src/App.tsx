import { useEffect, useState, type FormEvent } from 'react';
import {
  amenidades, amenidadesHabitacion, grupo, habitaciones, hotel, motor, opiniones, planes, planesIntro, restaurantes,
  type Foto, type PlanId, type Tramo,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

// ---------- Horas (Mazatlán usa la zona America/Mazatlan, UTC-7 todo el año) ----------

function horaMazatlan(): number {
  const partes = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Mazatlan', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const h = Number(partes.find((p) => p.type === 'hour')?.value ?? 0);
  const m = Number(partes.find((p) => p.type === 'minute')?.value ?? 0);
  return (h % 24) + m / 60;
}

/** 7 → "7:00 am", 13.5 → "1:30 pm", 0 → "12:00 am". */
function hora12(h: number): string {
  const total = Math.round(h * 60) % 1440;
  const hh = Math.floor(total / 60);
  const mm = total % 60;
  const sufijo = hh < 12 ? 'am' : 'pm';
  return `${hh % 12 === 0 ? 12 : hh % 12}:${String(mm).padStart(2, '0')} ${sufijo}`;
}

const enTramo = (h: number, t: Tramo) => (t.desde < t.hasta ? h >= t.desde && h < t.hasta : h >= t.desde || h < t.hasta);

function useHoraMazatlan() {
  const [ahora, setAhora] = useState(horaMazatlan);
  useEffect(() => {
    const id = window.setInterval(() => setAhora(horaMazatlan()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return ahora;
}

// ---------- Secciones ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#un-dia', label: 'Planes' },
    { href: '#hotel', label: 'El hotel' },
    { href: '#habitaciones', label: 'Habitaciones' },
    { href: '#restaurantes', label: 'Restaurantes' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel Pacific Palace, ir al inicio">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} className="h-10 w-auto md:h-14" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-tinta/80 hover:text-agua-texto">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={hotel.telefono} className="hidden items-center gap-2 px-3 font-semibold text-tinta xl:inline-flex">{Icono.tel} {hotel.telefonoVisible}</a>
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
  const datos = [
    ['Hotel', '4 estrellas'],
    ['Ubicación', 'Zona Dorada, a pie de playa'],
    ['Check-in', 'desde las 3:00 pm'],
    ['Check-out', 'hasta las 12:00 pm'],
  ];
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-marino text-white">
      <img src={hotel.portada.src} alt={hotel.portada.alt} width={hotel.portada.w} height={hotel.portada.h} fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-[38%_40%]" />
      <span className="absolute inset-0 -z-10 bg-gradient-to-t from-marino via-marino/80 to-marino/35 md:bg-gradient-to-r md:from-marino/90 md:via-marino/45 md:to-marino/0" aria-hidden="true" />
      <div className="contenedor flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-28 pt-40 md:min-h-[42rem] md:justify-center md:pb-16 md:pt-16">
        <p className="font-cond text-lg font-semibold tracking-wide text-atardecer">{hotel.subtitulo}</p>
        <h1 className="mt-2 max-w-2xl text-[clamp(2.7rem,7vw,5.2rem)] text-white">Hotel a pie de playa en Mazatlán</h1>
        <p className="mt-4 max-w-xl text-xl text-white/90">{hotel.lema}. {hotel.bienvenida}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reservar" className="btn-sol">{Icono.cal} Reservar ahora</a>
          <a href={hotel.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos por WhatsApp</a>
        </div>
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/25 pt-6 sm:grid-cols-4">
          {datos.map(([t, d]) => (
            <div key={t} className="min-w-0">
              <dt className="text-sm text-white/75">{t}</dt>
              <dd className="dato text-white">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const fechaISO = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const masDias = (iso: string, n: number) => { const [y, m, d] = iso.split('-').map(Number); return fechaISO(new Date(y, m - 1, d + n)); };
const fechaMotor = (iso: string) => iso.split('-').reverse().join('-'); // el motor de Hoteles Palace pide DD-MM-AAAA

function Reservar() {
  const hoy = fechaISO(new Date());
  const [llegada, setLlegada] = useState(hoy);
  const [salida, setSalida] = useState(masDias(hoy, 1));
  const [adultos, setAdultos] = useState(2);
  const [edades, setEdades] = useState<number[]>([]);
  const [promo, setPromo] = useState('');

  const cambiarLlegada = (v: string) => { setLlegada(v); if (salida <= v) setSalida(masDias(v, 1)); };
  const cambiarNinos = (n: number) => setEdades((e) => Array.from({ length: n }, (_, i) => e[i] ?? 5));

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    let url = `${motor.url}Reservacion-hotel:${motor.hotel}/Reservacion-fecha_checking:${fechaMotor(llegada)}/Reservacion-fecha_checkout:${fechaMotor(salida)}/Reservacion-divisa:1/Reservacion-habitaciones_num:1/Reservacion-habitaciones-0-adultos:${adultos}/`;
    if (edades.length) {
      url += `Reservacion-habitaciones-0-ninos:${edades.length}/`;
      edades.forEach((edad, i) => { url += `Reservacion-habitaciones-0-edades-${i}:${edad}/`; });
    }
    if (promo.trim()) url += `Reservacion-codigo_cupon:${encodeURIComponent(promo.trim())}/`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="reservar" className="border-b border-tinta/10 bg-white">
      <div className="contenedor grid gap-8 py-10 lg:grid-cols-12 lg:items-end lg:py-12">
        <div className="min-w-0 lg:col-span-3">
          <h2 className="text-3xl">Reserva directo con el hotel</h2>
          <p className="mt-2 text-[0.95rem]">Una habitación por reserva desde aquí. Para más habitaciones o grupos, llámanos al <a className="enlace" href={hotel.telefono}>{hotel.telefonoVisible}</a>.</p>
        </div>
        <form onSubmit={enviar} className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-[1.2fr_1.2fr_0.8fr_0.8fr_1fr_auto]">
          <label className="min-w-0 text-sm font-semibold text-tinta">Llegada
            <input type="date" className="campo mt-1" value={llegada} min={hoy} onChange={(e) => cambiarLlegada(e.target.value)} required />
          </label>
          <label className="min-w-0 text-sm font-semibold text-tinta">Salida
            <input type="date" className="campo mt-1" value={salida} min={masDias(llegada, 1)} onChange={(e) => setSalida(e.target.value)} required />
          </label>
          <label className="min-w-0 text-sm font-semibold text-tinta">Adultos
            <select className="campo mt-1" value={adultos} onChange={(e) => setAdultos(Number(e.target.value))}>
              {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <label className="min-w-0 text-sm font-semibold text-tinta">Niños
            <select className="campo mt-1" value={edades.length} onChange={(e) => cambiarNinos(Number(e.target.value))}>
              {[0, 1, 2, 3].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <label className="min-w-0 text-sm font-semibold text-tinta">Código promocional
            <input type="text" className="campo mt-1" value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Opcional" />
          </label>
          <button type="submit" className="btn self-end sm:col-span-3 lg:col-span-1">Ver disponibilidad</button>
          {edades.length > 0 && (
            <fieldset className="col-span-2 flex flex-wrap gap-3 sm:col-span-3 lg:col-span-6">
              <legend className="mb-1 text-sm font-semibold text-tinta">Edad de cada niño</legend>
              {edades.map((edad, i) => (
                <label key={i} className="text-sm text-tinta">Niño {i + 1}
                  <select className="campo mt-1 w-28" value={edad} onChange={(e) => setEdades((v) => v.map((x, j) => (j === i ? Number(e.target.value) : x)))}>
                    {Array.from({ length: 17 }, (_, k) => k + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? 'año' : 'años'}</option>)}
                  </select>
                </label>
              ))}
            </fieldset>
          )}
        </form>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: el reloj de 24 horas con los horarios reales de cada plan ----------

const C = 180;
const ang = (h: number) => ((h - 12) / 24) * 2 * Math.PI; // 12:00 pm arriba, medianoche abajo
const punto = (h: number, r: number) => [C + r * Math.sin(ang(h)), C - r * Math.cos(ang(h))] as const;
function arco(desde: number, hasta: number, r: number) {
  const [x1, y1] = punto(desde, r);
  const [x2, y2] = punto(hasta, r);
  const lapso = (hasta - desde + 24) % 24;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${lapso > 12 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

function Reloj({ h, tramos }: { h: number; tramos: Tramo[] }) {
  const radios = [132, 110];
  const color = { agua: 'var(--color-agua)', atardecer: 'var(--color-atardecer)' };
  const marcas = [
    { h: 12, texto: 'Check-out' },
    { h: 15, texto: 'Check-in' },
  ];
  return (
    <svg viewBox="0 0 360 360" className="mx-auto w-full max-w-[26rem]" role="img"
      aria-label={`Reloj de 24 horas. Marca las ${hora12(h)}. ${tramos.map((t) => `${t.nombre} de ${hora12(t.desde)} a ${hora12(t.hasta)}`).join('. ')}.`}>
      <circle cx={C} cy={C} r={150} fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
      {radios.slice(0, tramos.length).map((r) => <circle key={r} cx={C} cy={C} r={r} fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="14" />)}
      {Array.from({ length: 24 }, (_, i) => {
        const [x1, y1] = punto(i, i % 3 === 0 ? 142 : 146);
        const [x2, y2] = punto(i, 151);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeOpacity={i % 3 === 0 ? 0.7 : 0.3} strokeWidth="1.5" />;
      })}
      {[0, 3, 6, 9, 12, 15, 18, 21].map((i) => {
        const [x, y] = punto(i, 165);
        return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="white" fillOpacity="0.8" fontSize="13" fontFamily="var(--font-cond)">{i === 0 ? '0' : i}</text>;
      })}
      {tramos.map((t, i) => (
        <path key={t.nombre} d={arco(t.desde, t.hasta, radios[i])} fill="none" stroke={color[t.color]} strokeWidth="14" strokeLinecap="round"
          strokeOpacity={enTramo(h, t) ? 1 : 0.45} />
      ))}
      {marcas.map((m) => {
        const [x, y] = punto(m.h, 90);
        const [tx, ty] = [x - (m.h === 12 ? 0 : 12), y + 15];
        return (
          <g key={m.texto}>
            <circle cx={x} cy={y} r="4" fill="white" />
            <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central" fill="white" fillOpacity="0.85" fontSize="11.5" fontFamily="var(--font-cond)">{m.texto}</text>
          </g>
        );
      })}
      <g className="aguja" style={{ transform: `rotate(${((h - 12) / 24) * 360}deg)`, transformOrigin: `${C}px ${C}px` }}>
        <line x1={C} y1={C} x2={C} y2={C - 150} stroke="white" strokeWidth="2" />
        <circle cx={C} cy={C - 150} r="9" fill="var(--color-atardecer)" stroke="var(--color-marino)" strokeWidth="3" />
      </g>
      <circle cx={C} cy={C} r="42" fill="var(--color-marino-2)" />
      <text x={C} y={C + 2} textAnchor="middle" fill="white" fontSize="23" fontFamily="var(--font-cond)" fontWeight="600">{hora12(h).split(' ')[0]}</text>
      <text x={C} y={C + 20} textAnchor="middle" fill="white" fillOpacity="0.8" fontSize="13" fontFamily="var(--font-cond)">{hora12(h).split(' ')[1]}</text>
    </svg>
  );
}

function UnDia() {
  const ahora = useHoraMazatlan();
  const [planId, setPlanId] = useState<PlanId>('todo');
  const [explorada, setExplorada] = useState<number | null>(null);
  const plan = planes[planId];
  const h = explorada ?? ahora;
  const activos = plan.tramos.filter((t) => enTramo(h, t));
  const siguiente = [...plan.tramos].sort((a, b) => ((a.desde - h + 24) % 24) - ((b.desde - h + 24) % 24))[0];

  const hasta = (x: number) => `${x === 1 ? 'la' : 'las'} ${hora12(x)}`;
  let resumen: string;
  if (activos.length === plan.tramos.length) {
    resumen = `con ${plan.enFrase} tienes incluido${activos.length > 1 ? 's' : ''} ${activos.map((t) => t.corto).join(' y ')} hasta ${hasta(activos[0].hasta)}.`;
  } else if (activos.length) {
    const falta = plan.tramos.find((t) => !enTramo(h, t))!;
    resumen = `con ${plan.enFrase} tienes incluidos ${activos.map((t) => t.corto).join(' y ')}; ${falta.servicio} abre a ${hasta(falta.desde)}.`;
  } else {
    resumen = `con ${plan.enFrase}, ${siguiente.servicio} abre a ${hasta(siguiente.desde)}.`;
  }

  return (
    <section id="un-dia" className="bg-marino text-white">
      <div className="contenedor grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="min-w-0 lg:col-span-6">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.6rem)] text-white">Un día en el Pacific Palace, a la hora de Mazatlán</h2>
          <p className="mt-5 text-lg text-white/85">{planesIntro.destacado} {planesIntro.detalle}</p>

          <div className="mt-8 inline-flex rounded-full bg-white/10 p-1" role="group" aria-label="Elige un plan">
            {(Object.keys(planes) as PlanId[]).map((id) => (
              <button key={id} type="button" aria-pressed={id === planId} onClick={() => setPlanId(id)}
                className={`rounded-full px-4 py-2.5 text-[0.95rem] font-semibold transition-colors sm:px-5 ${id === planId ? 'bg-white text-marino' : 'text-white hover:bg-white/10'}`}>
                {planes[id].corto}
              </button>
            ))}
          </div>

          <p className="mt-8 text-2xl leading-snug text-white" aria-live="polite">
            <span className="font-semibold text-atardecer">{explorada === null ? `En Mazatlán son las ${hora12(h)}` : `A las ${hora12(h)}`}:</span>{' '}{resumen}
          </p>

          <ul className="mt-6 grid gap-3">
            {plan.tramos.map((t) => (
              <li key={t.nombre} className="flex items-center gap-3">
                <span className={`h-3 w-8 shrink-0 rounded-full ${t.color === 'agua' ? 'bg-agua' : 'bg-atardecer'}`} aria-hidden="true" />
                <span className="min-w-0"><span className="font-semibold">{t.nombre}</span> <span className="dato text-white/80">de {hora12(t.desde)} a {hora12(t.hasta)}</span></span>
              </li>
            ))}
            {planId === 'desayuno' && <li className="text-white/80">Restaurantes y bares con costo adicional.</li>}
          </ul>

          <div className="mt-8">
            <label htmlFor="explorar-hora" className="text-sm font-semibold text-white/85">Mueve la hora para ver otro momento del día</label>
            <input id="explorar-hora" type="range" min={0} max={23.5} step={0.5} value={Math.floor(h * 2) / 2}
              onChange={(e) => setExplorada(Number(e.target.value))} className="mt-2 block w-full accent-[var(--color-atardecer)]" />
            {explorada !== null && (
              <button type="button" onClick={() => setExplorada(null)} className="mt-3 text-[0.95rem] font-semibold text-white underline underline-offset-4">Volver a la hora de Mazatlán</button>
            )}
          </div>
        </div>
        <div className="min-w-0 lg:col-span-6">
          <Reloj h={h} tramos={plan.tramos} />
          <p className="mt-4 text-center text-sm text-white/75">Check-in desde las 3:00 pm y check-out hasta las 12:00 pm.</p>
        </div>
      </div>

      <div className="bg-marino-2">
        <div className="contenedor grid gap-10 py-14 md:grid-cols-12 md:items-center md:py-16">
          <div className="aspect-[16/9] min-w-0 overflow-hidden rounded-2xl md:col-span-5">
            <Img key={plan.id} foto={plan.foto} />
          </div>
          <div className="min-w-0 md:col-span-7">
            <h3 className="text-3xl text-white">{plan.nombre}</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {plan.incluye.map((i) => <li key={i} className="flex gap-2 text-white/90"><span className="mt-0.5 text-agua">{Icono.check}</span>{i}</li>)}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={plan.whatsapp} {...externo} className="btn-sol">{Icono.wa} Cotizar {plan.enFrase} por WhatsApp</a>
              <a href="#reservar" className="btn-claro">{Icono.cal} Reservar</a>
            </div>
            <p className="mt-4 text-sm text-white/75">Reservaciones: <a href={hotel.telefono} className="font-semibold text-white underline underline-offset-4">{hotel.telefonoVisible}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ElHotel() {
  return (
    <section id="hotel" className="contenedor grid gap-12 py-20 md:py-24 lg:grid-cols-12">
      <div className="min-w-0 lg:col-span-7">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">Bienvenido a Pacific Palace Mazatlán</h2>
        {hotel.intro.map((p) => <p key={p} className="mt-5 text-lg">{p}</p>)}
        <p className="mt-5 border-l-4 border-agua pl-5 text-lg font-medium text-tinta">{hotel.zonaDorada}</p>
        {hotel.instalaciones.map((p) => <p key={p} className="mt-5">{p}</p>)}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={hotel.whatsapp} {...externo} className="btn">{Icono.wa} Pregúntanos por WhatsApp</a>
          <a href={hotel.video} {...externo} className="btn-linea">Ver el video del hotel en YouTube</a>
        </div>
      </div>
      <aside className="min-w-0 self-start rounded-2xl bg-concha p-7 md:p-8 lg:col-span-5 lg:mt-3">
        <h3 className="text-2xl">Llegada y salida</h3>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="dato text-agua-texto">Check-in</p>
            <ul className="mt-1 grid gap-1">{hotel.checkin.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <p className="dato text-agua-texto">Check-out</p>
            <ul className="mt-1 grid gap-1">{hotel.checkout.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
        <p className="mt-6 border-t border-tinta/10 pt-5 text-[0.95rem]">{hotel.estrellas}</p>
      </aside>
    </section>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="bg-concha py-20 md:py-24">
      <div className="contenedor">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">Habitaciones Pacific Palace</h2>
        <div className="mt-12 grid gap-14">
          {habitaciones.map((h, i) => (
            <article key={h.nombre} className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className={`aspect-[3/2] min-w-0 overflow-hidden rounded-2xl md:col-span-7 ${i % 2 === 1 ? 'md:order-2 md:col-start-6' : ''}`}><Img foto={h.foto} /></div>
              <div className={`min-w-0 md:col-span-5 ${i % 2 === 1 ? 'md:order-1 md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="text-3xl">{h.nombre}</h3>
                <p className="mt-3 text-lg">{h.texto}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {h.datos.map((d) => <li key={d} className="dato rounded-full bg-white px-4 py-1.5 text-tinta">{d}</li>)}
                </ul>
                <a href="#reservar" className="btn mt-6">{Icono.cal} Reservar esta habitación</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-6 border-t border-tinta/10 pt-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-4">
            <h3 className="text-2xl">Todas las habitaciones incluyen</h3>
            <p className="mt-3 text-[0.95rem]">{amenidadesHabitacion.intro}</p>
          </div>
          <ul className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:col-span-8">
            {amenidadesHabitacion.lista.map((t) => <li key={t} className="flex gap-2"><span className="mt-0.5 text-agua-texto">{Icono.check}</span>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Restaurantes() {
  return (
    <section id="restaurantes" className="contenedor py-20 md:py-24">
      <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">Restaurantes y bar</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {restaurantes.map((r) => (
          <article key={r.nombre} className="min-w-0">
            <div className="aspect-[3/2] overflow-hidden rounded-2xl"><Img foto={r.foto} /></div>
            <p className="dato mt-6 text-agua-texto">{r.tipo}</p>
            <h3 className="mt-1 text-3xl">{r.nombre}</h3>
            {r.texto.map((p) => <p key={p} className="mt-3">{p}</p>)}
          </article>
        ))}
      </div>
    </section>
  );
}

function Amenidades() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[clamp(2.2rem,4.4vw,3.4rem)]">Amenidades del hotel</h2>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenidades.map((a) => (
            <li key={a.nombre} className="min-w-0 border-t-2 border-agua pt-4">
              <p className="text-xl font-semibold text-tinta">{a.nombre}</p>
              <p className="mt-1 text-[0.98rem]">{a.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="contenedor py-20 md:py-24">
      <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">¿Qué dicen nuestros huéspedes?</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {opiniones.map((o) => (
          <figure key={o} className="min-w-0 rounded-2xl bg-concha p-7">
            <span className="font-serif text-5xl leading-none text-agua-texto" aria-hidden="true">“</span>
            <blockquote className="mt-1">{o}</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Grupo() {
  return (
    <section className="border-y border-tinta/10 bg-white">
      <div className="contenedor grid gap-8 py-14 md:grid-cols-12 md:items-center">
        <div className="min-w-0 md:col-span-6">
          <p className="text-lg text-tinta">{grupo.texto}</p>
          <p className="mt-3 text-[0.95rem]">{grupo.gracias}</p>
        </div>
        <ul className="flex min-w-0 flex-wrap items-center justify-center gap-x-6 gap-y-4 md:col-span-6 md:justify-end">
          {grupo.hoteles.map((g) => (
            <li key={g.nombre}>
              <a href={g.href} {...externo} className="block rounded-xl p-2 hover:bg-concha" aria-label={`${g.nombre} (abre su sitio)`}>
                <img src={g.logo.src} alt={g.logo.alt} width={g.logo.w} height={g.logo.h} loading="lazy" className="h-14 w-auto md:h-16" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
      <div className="min-w-0 md:col-span-6">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">Te esperamos en la Zona Dorada</h2>
        <address className="mt-6 text-lg not-italic text-tinta">{hotel.direccion.map((l) => <span key={l} className="block">{l}</span>)}</address>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={hotel.mapa} {...externo} className="btn">{Icono.mapa} Cómo llegar en Google Maps</a>
          <a href={hotel.whatsapp} {...externo} className="btn-linea">{Icono.wa} WhatsApp</a>
        </div>
      </div>
      <dl className="grid min-w-0 gap-6 self-center sm:grid-cols-2 md:col-span-6">
        <div>
          <dt className="dato text-agua-texto">Reservaciones</dt>
          <dd className="mt-1"><a className="enlace text-lg" href={hotel.telefono}>{hotel.telefonoVisible}</a></dd>
        </div>
        <div>
          <dt className="dato text-agua-texto">WhatsApp</dt>
          <dd className="mt-1"><a className="enlace text-lg" href={hotel.whatsapp} {...externo}>{hotel.whatsappVisible}</a></dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="dato text-agua-texto">Correo</dt>
          <dd className="mt-1"><a className="enlace break-all text-lg" href={`mailto:${hotel.email}`}>{hotel.email}</a></dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="dato text-agua-texto">Síguenos</dt>
          <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">{hotel.redes.map((r) => <a key={r.nombre} href={r.href} {...externo} className="enlace">{r.nombre}</a>)}</dd>
        </div>
      </dl>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-marino pb-28 pt-12 text-white/80 md:pb-12">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-white">{hotel.nombre}</p>
          <p className="mt-1 text-sm">{hotel.estrellas}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span>© {new Date().getFullYear()} Hotel Pacific Palace, Mazatlán, Sinaloa</span>
          {hotel.politicas.map((p) => <a key={p.nombre} href={p.href} {...externo} className="underline underline-offset-4 hover:text-white">{p.nombre}</a>)}
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
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir por WhatsApp al Hotel Pacific Palace">{Icono.wa}</a>
        <a href={hotel.telefono} className="btn-linea px-0" aria-label="Llamar al Hotel Pacific Palace">{Icono.tel}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar al Hotel Pacific Palace">{Icono.mapa}</a>
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
        <UnDia />
        <ElHotel />
        <Habitaciones />
        <Restaurantes />
        <Amenidades />
        <Opiniones />
        <Grupo />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
