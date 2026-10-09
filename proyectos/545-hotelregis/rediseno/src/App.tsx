import { useEffect, useState } from 'react';
import {
  amenidades, cifras, correo, franjas, galeria, habitaciones, horarios, incluye, negocio, telefonos, villa, web,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const ZONA = 'America/Tijuana';
const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const DIAS_LARGOS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

// Día y hora actuales en Mexicali.
function ahoraMexicali() {
  const partes = new Intl.DateTimeFormat('en-US', { timeZone: ZONA, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const v = (t: string) => partes.find((p) => p.type === t)?.value ?? '0';
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(v('weekday'));
  const hora = (Number(v('hour')) % 24) + Number(v('minute')) / 60;
  return { dia, hora };
}
const horaTexto = (h: number) => {
  const hh = Math.floor(h) % 24; const mm = Math.round((h - Math.floor(h)) * 60);
  const s = hh < 12 ? 'am' : 'pm'; const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}:${String(mm).padStart(2, '0')} ${s}`;
};

const Icono = {
  tel: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  mail: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  ok: <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>,
};

function Marca({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`text-[0.6rem] font-bold uppercase tracking-[0.42em] ${claro ? 'text-ambar' : 'text-terracota'}`}>Hotel</span>
      <span className={`font-[family-name:var(--font-display)] text-[1.75rem] ${claro ? 'text-white' : 'text-regis'}`}>Regis</span>
    </span>
  );
}

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#habitaciones', 'Habitaciones'], ['#restaurante', 'Restaurante'], ['#dia', 'Horarios'], ['#amenidades', 'Amenidades'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-muro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Hotel Regis, inicio"><Marca /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-regis">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={telefonos[0].href} className="btn-regis hidden !px-5 !py-3 sm:inline-flex">{Icono.tel} {telefonos[0].numero}</a>
          <button type="button" className="rounded-md p-2.5 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-noche/10 bg-muro lg:hidden">
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
      <Foto n="fachada-esquina" alt="Fachada blanca del Hotel Regis con su franja ámbar y su escudo, bajo cielo azul" prioridad className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/60 to-noche/20" />
      <div className="contenedor flex min-h-[36rem] flex-col justify-end pb-14 pt-28 sm:min-h-[40rem]">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-ambar">{negocio.ciudad}</p>
        <h1 className="mt-3 text-6xl leading-none sm:text-8xl">Hotel Regis</h1>
        <p className="mt-4 text-lg tracking-[0.18em] text-white/90 sm:text-xl">Tradición · Confort · Hospitalidad</p>
        <p className="mt-3 max-w-xl text-white/85">Desde {pesos(habitaciones[0].precio)} por noche, con el restaurante Villa Don Nacho dentro del hotel.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={telefonos[0].href} className="btn-regis">{Icono.tel} Reservar por teléfono</a>
          <a href="#habitaciones" className="btn-linea">Ver habitaciones</a>
        </div>
      </div>
      <div className="border-t border-white/10 bg-noche">
        <dl className="contenedor grid grid-cols-2 gap-y-5 py-7 sm:grid-cols-4">
          {cifras.map((c) => (
            <div key={c.texto} className="text-center">
              <dt className="sr-only">{c.texto}</dt>
              <dd className="font-[family-name:var(--font-display)] text-3xl text-ambar">{c.valor}</dd>
              <dd className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Habitaciones() {
  const [elegida, setElegida] = useState('doble');
  const [noches, setNoches] = useState(2);
  const h = habitaciones.find((x) => x.id === elegida)!;
  const total = h.precio * noches;
  const cuerpo = `Hola, quisiera reservar una ${h.nombre} por ${noches} ${noches === 1 ? 'noche' : 'noches'} (${pesos(h.precio)} por noche, ${pesos(total)} en total según su sitio).\n\nLlegada: \nNombre: \n\nGracias.`;
  return (
    <section id="habitaciones" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="eyebrow">Nuestras habitaciones</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Espacios de confort</h2>
          <p className="mt-4 text-gris">Cada habitación ha sido diseñada para ofrecerte el descanso que mereces, combinando elegancia clásica con comodidades modernas.</p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {habitaciones.map((x) => (
            <li key={x.id} className={`flex flex-col overflow-hidden rounded-xl bg-white ring-2 transition-shadow ${elegida === x.id ? 'shadow-xl ring-regis' : 'ring-noche/5'}`}>
              <Foto n={x.foto} alt={x.alt} className="aspect-[4/3] w-full" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl">{x.nombre.replace('Habitación ', '')}</h3>
                  <p className="text-right"><span className="text-2xl font-bold text-regis">{pesos(x.precio)}</span><span className="text-sm text-gris">/noche</span></p>
                </div>
                <p className="mt-3 text-sm text-gris">{x.texto}</p>
                <ul className="mt-4 flex gap-3 text-sm font-semibold text-terracota">{incluye.map((i) => <li key={i} className="flex items-center gap-1">{Icono.ok}{i}</li>)}</ul>
                <button type="button" onClick={() => setElegida(x.id)} aria-pressed={elegida === x.id}
                  className={`mt-auto pt-5 text-left text-sm font-bold uppercase tracking-[0.1em] ${elegida === x.id ? 'text-regis' : 'text-noche hover:text-regis'}`}>
                  {elegida === x.id ? '✓ En tu cuenta' : 'Calcular esta habitación'}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-6 rounded-xl bg-arena p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" aria-live="polite">
          <div className="flex items-center gap-5">
            <div role="group" aria-label="Noches" className="flex items-center gap-3">
              <button type="button" className="size-11 rounded-md border-2 border-noche/25 text-xl font-bold hover:border-noche disabled:opacity-40" onClick={() => setNoches(Math.max(1, noches - 1))} disabled={noches <= 1} aria-label="Una noche menos">−</button>
              <p className="w-16 text-center"><span className="block text-3xl font-bold leading-none">{noches}</span><span className="text-xs font-bold uppercase tracking-[0.14em] text-gris">{noches === 1 ? 'noche' : 'noches'}</span></p>
              <button type="button" className="size-11 rounded-md border-2 border-noche/25 text-xl font-bold hover:border-noche disabled:opacity-40" onClick={() => setNoches(Math.min(30, noches + 1))} disabled={noches >= 30} aria-label="Una noche más">+</button>
            </div>
            <p className="text-sm text-gris">{h.nombre}<br />{pesos(h.precio)} × {noches}</p>
          </div>
          <p><span className="text-xs font-bold uppercase tracking-[0.14em] text-gris">Total aproximado</span><br /><span className="font-[family-name:var(--font-display)] text-4xl text-regis">{pesos(total)}</span> <span className="text-sm text-gris">MXN</span></p>
          <div className="flex flex-col gap-2 sm:items-end">
            <a href={correo(`Reservación: ${h.nombre}, ${noches} ${noches === 1 ? 'noche' : 'noches'}`, cuerpo)} className="btn-regis">{Icono.mail} Pedir por correo</a>
            <a href={telefonos[0].href} className="text-sm font-bold hover:text-regis">o llama al {telefonos[0].numero}</a>
          </div>
        </div>
        <p className="mt-3 text-xs text-gris">Precios por noche publicados en su sitio. El desayuno tiene costo adicional. Check-in {horarios.checkIn} · check-out {horarios.checkOut}.</p>
      </div>
    </section>
  );
}

function Restaurante() {
  return (
    <section id="restaurante" className="bg-arena py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 gap-3">
          <Foto n="restaurante-salon" alt="Salón del restaurante Villa Don Nacho con manteles rojos y adornos de corazones" className="row-span-2 h-full w-full rounded-xl" />
          <Foto n="restaurante-barra" alt="Comedor de Villa Don Nacho con sillas de madera y la barra al fondo" className="aspect-[4/3] w-full rounded-xl" />
          <Foto n="entrada-villa" alt="Letrero de Villa Don Nacho en la fachada del hotel" className="aspect-[4/3] w-full rounded-xl" />
        </div>
        <div>
          <p className="eyebrow">Dentro del hotel</p>
          <img src={web('logo-villa.png')} alt="Villa Don Nacho, restaurante" width={851} height={851} loading="lazy" className="-my-4 -ml-4 h-44 w-44" />
          <p className="text-gris">{villa.texto}</p>
          <p className="mt-3 font-semibold">{villa.remate}</p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {villa.horario.map((h) => (
              <div key={h.dias} className="rounded-lg bg-white p-4">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-terracota">{h.dias}</dt>
                <dd className="mt-1 font-semibold">{h.horas}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={telefonos[0].href} className="btn-regis">{Icono.tel} Reservar mesa</a>
            <a href={negocio.facebookVilla} target="_blank" rel="noopener" className="btn-linea">Villa Don Nacho en Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Elemento memorable: el día del Regis. Se mueve la hora (o se toma la de Mexicali) y se ve qué está abierto.
function DiaRegis() {
  const [inicial] = useState(ahoraMexicali);
  const [dia, setDia] = useState(inicial.dia);
  const [hora, setHora] = useState(Math.round(inicial.hora * 2) / 2);
  const [enVivo, setEnVivo] = useState(true);
  useEffect(() => {
    if (!enVivo) return;
    const t = setInterval(() => { const a = ahoraMexicali(); setDia(a.dia); setHora(Math.round(a.hora * 2) / 2); }, 60_000);
    return () => clearInterval(t);
  }, [enVivo]);
  const abierto = (f: (typeof franjas)[number]) => f.dias.includes(dia) && hora >= f.desde && hora < f.hasta;
  const abiertas = franjas.filter(abierto);
  const villaAbierta = abiertas.filter((f) => f.tipo === 'villa');
  const titular = villaAbierta.length
    ? `En Villa Don Nacho: ${villaAbierta.map((f) => f.nombre.toLowerCase()).join(' y ')}`
    : 'Villa Don Nacho está cerrado a esta hora';

  return (
    <section id="dia" className="bg-noche py-20 text-white sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ambar">Un día en el Regis</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">¿A qué hora llegas?</h2>
          <p className="mt-4 text-white/80">Mueve la hora y el día: verás si ya puedes hacer check-in y qué sirve Villa Don Nacho en ese momento. Empieza con la hora de Mexicali.</p>
        </div>

        <div className="mt-10 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div aria-live="polite">
              <p className="font-[family-name:var(--font-display)] text-5xl text-ambar sm:text-6xl">{horaTexto(hora)}</p>
              <p className="mt-1 text-white/80">{DIAS_LARGOS[dia]}{enVivo ? ' · ahora en Mexicali' : ''}</p>
              <p className="mt-3 text-lg font-semibold">{titular}</p>
            </div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Día de la semana">
              {DIAS.map((d, i) => (
                <button key={d} type="button" aria-pressed={dia === i} onClick={() => { setDia(i); setEnVivo(false); }}
                  className={`min-w-11 rounded-md px-2.5 py-2 text-sm font-bold ${dia === i ? 'bg-ambar text-noche' : 'bg-white/10 hover:bg-white/20'}`}>{d}</button>
              ))}
            </div>
          </div>
          <label className="mt-6 block">
            <span className="sr-only">Hora del día</span>
            <input type="range" className="rango" min={0} max={23.5} step={0.5} value={hora} aria-valuetext={horaTexto(hora)}
              onChange={(e) => { setHora(Number(e.target.value)); setEnVivo(false); }} />
          </label>
          <div className="flex justify-between text-xs text-white/60" aria-hidden="true"><span>12 am</span><span>6 am</span><span>12 pm</span><span>6 pm</span><span>12 am</span></div>

          <ul className="mt-8 space-y-3">
            {franjas.map((f) => {
              const hoy = f.dias.includes(dia);
              const si = abierto(f);
              return (
                <li key={f.id} className="grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[11rem_1fr_9rem]">
                  <p className={`text-sm font-bold ${si ? 'text-white' : 'text-white/60'}`}>{f.nombre}</p>
                  <div className="relative h-7 rounded bg-white/[0.07]" aria-hidden="true">
                    {hoy && <span className={`absolute inset-y-0 rounded ${f.tipo === 'villa' ? 'bg-regis' : 'bg-ambar/70'} ${si ? '' : 'opacity-45'}`} style={{ left: `${(f.desde / 24) * 100}%`, width: `${((f.hasta - f.desde) / 24) * 100}%` }} />}
                    <span className="absolute inset-y-[-3px] w-0.5 bg-white" style={{ left: `${(hora / 24) * 100}%` }} />
                  </div>
                  <p className="col-span-2 -mt-1 text-xs text-white/70 sm:col-span-1 sm:mt-0 sm:text-right">
                    {!hoy ? 'No hay este día' : si ? <span className="font-bold text-ambar">Ahora sí · </span> : null}{hoy && f.detalle}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-wrap gap-5 text-xs text-white/70">
            <span className="flex items-center gap-2"><span className="size-3 rounded-sm bg-ambar/70" />Hotel</span>
            <span className="flex items-center gap-2"><span className="size-3 rounded-sm bg-regis" />Villa Don Nacho</span>
            {!enVivo && <button type="button" onClick={() => setEnVivo(true)} className="font-bold text-ambar underline underline-offset-4">Volver a la hora actual</button>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Amenidades() {
  return (
    <section id="amenidades" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Lo que incluye tu estancia</p>
        <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Nuestras amenidades</h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {amenidades.map((a) => (
            <li key={a.nombre} className={`rounded-xl border p-5 ${a.nombre === 'Desayuno' ? 'border-terracota/40 bg-arena' : 'border-noche/10 bg-white'}`}>
              <h3 className="text-xl">{a.nombre}</h3>
              <p className="mt-1 text-sm text-gris">{a.nota}</p>
            </li>
          ))}
          <li className="rounded-xl bg-regis p-5 text-white">
            <h3 className="text-xl">Recepción 24/7</h3>
            <p className="mt-1 text-sm text-white/90">Check-in {horarios.checkIn} · check-out {horarios.checkOut}</p>
          </li>
        </ul>
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galeria.map((g, i) => (
            <li key={g.n} className={i === 0 ? 'col-span-2 row-span-2' : i === 1 || i === galeria.length - 1 ? 'col-span-2' : ''}>
              <Foto n={g.n} alt={g.alt} className={`h-full w-full rounded-xl ${i === 0 ? 'aspect-square sm:aspect-auto' : i === 1 || i === galeria.length - 1 ? 'aspect-[2/1]' : 'aspect-square'}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-arena py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Reservaciones directas</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">¿Listo para hospedarte?</h2>
          <p className="mt-4 text-gris">Contáctanos directamente y con gusto te atenderemos para hacer tu reservación.</p>
          <address className="mt-8 not-italic">
            <p className="text-xl font-semibold">{negocio.direccion}</p>
            <p className="text-gris">{negocio.cp}</p>
          </address>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {telefonos.map((t, i) => (
              <div key={t.numero}>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-terracota">Teléfono {i + 1}</dt>
                <dd><a href={t.href} className="text-lg font-semibold hover:text-regis">{t.numero}</a></dd>
              </div>
            ))}
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-terracota">Correo</dt>
              <dd><a href={`mailto:${negocio.email}`} className="break-all text-lg font-semibold hover:text-regis">{negocio.email}</a></dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-terracota">Horarios</dt>
              <dd className="font-semibold">Recepción 24/7 · Check-in {horarios.checkIn} · Check-out {horarios.checkOut}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-regis">{Icono.pin} Ver en Google Maps</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="btn-linea">Facebook</a>
          </div>
        </div>
        <Foto n="fachada-atardecer" alt="El Hotel Regis sobre el Blvd. Benito Juárez al atardecer" className="aspect-[4/3] w-full rounded-2xl" />
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche pb-28 pt-14 text-white/80 lg:pb-14">
      <div className="contenedor flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Marca claro />
          <p className="mt-4 max-w-xs text-sm">Tradición y hospitalidad en el corazón de Mexicali, Baja California.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <li><a href="#habitaciones" className="hover:text-ambar">Habitaciones</a></li>
            <li><a href="#restaurante" className="hover:text-ambar">Restaurante</a></li>
            <li><a href="#dia" className="hover:text-ambar">Horarios</a></li>
            <li><a href="#amenidades" className="hover:text-ambar">Amenidades</a></li>
            <li><a href="#contacto" className="hover:text-ambar">Contacto</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-ambar">Facebook</a></li>
          </ul>
        </nav>
      </div>
      <p className="contenedor mt-10 text-xs text-white/60">© {new Date().getFullYear()} Hotel Regis Mexicali. Todos los derechos reservados.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={telefonos[0].href} className="flex flex-col items-center gap-1 bg-regis py-3 text-xs font-bold">{Icono.tel}Llamar</a>
      <a href={`mailto:${negocio.email}`} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.mail}Correo</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Habitaciones />
        <Restaurante />
        <DiaRegis />
        <Amenidades />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
