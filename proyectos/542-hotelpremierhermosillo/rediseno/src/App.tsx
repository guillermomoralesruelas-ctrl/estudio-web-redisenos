import { useEffect, useMemo, useState } from 'react';
import {
  amenidades, correo, destacados, equipoHabitacion, habitaciones, negocio, restaurante, telefonos, viajes, web,
  type Viaje,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const ZONA = 'America/Hermosillo';

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

// Hora de Hermosillo (Sonora no cambia de horario). Su recepción atiende las 24 horas, todos los días.
function useHoraHermosillo() {
  const [ahora, setAhora] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  const hora = new Intl.DateTimeFormat('es-MX', { timeZone: ZONA, hour: 'numeric', minute: '2-digit', hour12: true }).format(ahora);
  const hoy = new Intl.DateTimeFormat('en-CA', { timeZone: ZONA, year: 'numeric', month: '2-digit', day: '2-digit' }).format(ahora);
  return { hora, hoy };
}

const Icono = {
  tel: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  mail: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  ok: <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#habitaciones', 'Habitaciones'], ['#amenidades', 'Amenidades'], ['#restaurante', 'Restaurante'], ['#registro', 'Disponibilidad'], ['#ubicacion', 'Ubicación']];
  return (
    <header className="sticky top-0 z-40 border-b border-vino/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center" aria-label="Hotel Premier Hermosillo, inicio">
          <img src={web('logo.png')} alt="Hotel Premier" width={250} height={105} className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-rojo">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={telefonos[0].href} className="btn-rojo hidden !px-5 !py-3 sm:inline-flex">{Icono.tel} {telefonos[0].numero}</a>
          <button type="button" className="rounded-full p-2.5 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-vino/10 bg-cal lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg font-semibold">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada({ hora }: { hora: string }) {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-vino text-white">
      <Foto n="alberca-noche" alt="Alberca del Hotel Premier iluminada al anochecer, con los edificios del hotel y palmeras al fondo" prioridad
        className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-vino/95 via-vino/75 to-vino/10" />
      <div className="contenedor flex min-h-[38rem] flex-col justify-center py-20 sm:min-h-[42rem]">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm font-semibold">
          <span className="size-2.5 rounded-full bg-oro" aria-hidden="true" />
          Recepción abierta las 24 h · en Hermosillo son las {hora}
        </p>
        <h1 className="mt-6 max-w-2xl text-5xl leading-[1.02] sm:text-7xl">Hotel Premier <span className="italic text-oro">Hermosillo</span></h1>
        <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">Comodidad y excelente ubicación en la zona norte, sobre la salida a Nogales.</p>
        <p className="mt-4 text-sm font-semibold text-white/85"><span className="text-oro" aria-hidden="true">★★★★★</span> {negocio.calificacion} · {negocio.huespedes}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#registro" className="btn-oro">Pedir disponibilidad</a>
          <a href={telefonos[0].href} className="btn-linea">{Icono.tel} Llamar a recepción</a>
        </div>
      </div>
    </section>
  );
}

function Bienvenida() {
  return (
    <section className="bg-cantera py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Servicios de hospedaje</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Hospedaje cómodo y bien ubicado en la zona norte</h2>
          </div>
          <div className="space-y-4 text-gris">
            <p>En Hotel Premier combinamos descanso, productividad y una ubicación estratégica en la zona norte de Hermosillo, con acceso directo hacia la salida a Nogales. Ofrecemos una estancia práctica y reconfortante para ejecutivos y familias que buscan calidad, seguridad y servicio en el corazón comercial de la ciudad.</p>
            <p>Habitaciones equipadas, atención personalizada, áreas de trabajo y amenidades que elevan su descanso.</p>
          </div>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {destacados.map((d) => (
            <li key={d.titulo} className="overflow-hidden rounded-2xl bg-cal shadow-sm">
              <Foto n={d.foto} alt="" className="aspect-[4/3] w-full" />
              <div className="p-4 sm:p-5">
                <h3 className="text-lg leading-snug sm:text-xl">{d.titulo}</h3>
                <p className="mt-2 text-sm text-gris">{d.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Habitaciones</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Individuales, dobles, King Size y Junior Suite</h2>
            <p className="mt-4 text-gris">Nuestras habitaciones están equipadas para ofrecer una experiencia completa durante su estancia.</p>
          </div>
          <ul className="flex max-w-md flex-wrap gap-2" aria-label="Equipo de las habitaciones">
            {equipoHabitacion.map((e) => <li key={e} className="rounded-full border border-vino/20 px-4 py-2 text-sm font-semibold">{e}</li>)}
          </ul>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-6 lg:grid-cols-4">
          {habitaciones.map((h) => (
            <li key={h.id}>
              <Foto n={h.foto} alt={h.alt} className="aspect-[4/5] w-full rounded-2xl" />
              <p className="mt-3 hidden text-xs font-bold uppercase tracking-[0.18em] text-gris sm:block">{h.grupo}</p>
              <h3 className="mt-1 text-xl sm:text-2xl">{h.nombre}</h3>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gris">Las fotos muestran habitaciones del hotel; su sitio no indica cuál corresponde a cada tipo. Contamos también con habitación para personas con discapacidad.</p>
      </div>
    </section>
  );
}

function Amenidades() {
  return (
    <section id="amenidades" className="bg-vino py-20 text-white sm:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-oro">Nuestros servicios</p>
        <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">Todo lo que necesita sin salir del hotel</h2>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {amenidades.map((a) => (
            <li key={a.grupo} className="flex flex-col overflow-hidden rounded-2xl bg-white/[0.07] ring-1 ring-white/10">
              {a.foto
                ? <Foto n={a.foto} alt={a.alt} className="aspect-[16/10] w-full" />
                : <div className="flex aspect-[16/10] items-center justify-center bg-oro/15" aria-hidden="true"><svg viewBox="0 0 24 24" className="size-14 text-oro" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="4.5" r="2" /><path d="M12 7v6h5l2 6M12 10h5M9.5 11.5a5.5 5.5 0 1 0 6.9 6.9" /></svg></div>}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg text-oro sm:text-xl">{a.grupo}</h3>
                <ul className="mt-3 space-y-1.5 text-[0.8125rem] text-white/90 sm:text-sm">
                  {a.items.map((i) => <li key={i} className="flex gap-2">{Icono.ok}<span>{i}</span></li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Restaurante() {
  return (
    <section id="restaurante" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow">Restaurante y bar</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Del buffet a su habitación</h2>
          <p className="mt-4 text-gris">Disfrute de alimentos y bebidas sin salir del hotel.</p>
          <ul className="mt-6 space-y-3 font-semibold">
            {['Restaurante', 'Servicio a la habitación', 'Servicio de buffet'].map((s) => (
              <li key={s} className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-rojo text-white">{Icono.ok}</span>{s}</li>
            ))}
          </ul>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {restaurante.map((r, i) => (
            <li key={r.foto} className={i === 0 ? 'col-span-2 row-span-2' : i === restaurante.length - 1 ? 'col-span-2' : ''}>
              <Foto n={r.foto} alt={r.alt} className={`h-full w-full rounded-xl ${i === restaurante.length - 1 ? 'aspect-[2/1]' : 'aspect-square'}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Elemento memorable: la tarjeta de registro de recepción. Se llena como la de papel y sale como correo a reservaciones.
function TarjetaRegistro({ hora, hoy }: { hora: string; hoy: string }) {
  const [nombre, setNombre] = useState('');
  const [llegada, setLlegada] = useState('');
  const [salida, setSalida] = useState('');
  const [habitacion, setHabitacion] = useState('doble');
  const [adultos, setAdultos] = useState(2);
  const [ninos, setNinos] = useState(0);
  const [viaje, setViaje] = useState<Viaje>('negocios');
  const [accesible, setAccesible] = useState(false);
  const [juntas, setJuntas] = useState(false);

  const noches = useMemo(() => {
    if (!llegada || !salida) return 0;
    const d = (Date.parse(salida) - Date.parse(llegada)) / 86_400_000;
    return d > 0 ? Math.round(d) : 0;
  }, [llegada, salida]);
  const fechaLarga = (f: string) => f ? new Intl.DateTimeFormat('es-MX', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short' }).format(new Date(f)) : '—';
  const tipo = habitaciones.find((h) => h.id === habitacion)!;
  const paraTi = amenidades.filter((a) => a.viajes.includes(viaje)).flatMap((a) => a.items).filter((v, i, arr) => arr.indexOf(v) === i);
  const fechasMal = llegada && salida && noches === 0;

  const cuerpo = [
    'Hola, quisiera saber la disponibilidad y la tarifa para esta estancia:',
    '',
    `Nombre: ${nombre || '(escriba su nombre)'}`,
    `Llegada: ${fechaLarga(llegada)} · Salida: ${fechaLarga(salida)}${noches ? ` (${noches} ${noches === 1 ? 'noche' : 'noches'})` : ''}`,
    `Habitación: ${tipo.nombre}`,
    `Huéspedes: ${adultos} ${adultos === 1 ? 'adulto' : 'adultos'}${ninos ? `, ${ninos} ${ninos === 1 ? 'niño' : 'niños'}` : ''}`,
    `Motivo del viaje: ${viajes.find((v) => v.id === viaje)!.nombre}`,
    accesible ? 'Necesito habitación para persona con discapacidad.' : '',
    juntas ? 'Me interesa la sala de juntas.' : '',
    '',
    'Gracias.',
  ].filter((l, i, a) => l !== '' || a[i - 1] !== '').join('\n');
  const mailto = correo(`Disponibilidad: ${tipo.nombre}${noches ? `, ${noches} ${noches === 1 ? 'noche' : 'noches'}` : ''}`, cuerpo);

  return (
    <section id="registro" className="bg-cantera py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="eyebrow">Reserva y contacto</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Llene su tarjeta de registro</h2>
          <p className="mt-4 text-gris">La misma tarjeta que firmaría en recepción. Al terminar, se la mandamos por correo a reservaciones para que le confirmen disponibilidad y tarifa, o llame: la recepción contesta a cualquier hora.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <form className="tarjeta relative rounded-md p-6 shadow-[0_18px_40px_-20px_rgba(110,28,26,0.45)] ring-1 ring-vino/15 sm:p-10" onSubmit={(e) => e.preventDefault()} aria-labelledby="titulo-tarjeta">
            <div className="flex items-start justify-between gap-4 border-b-4 border-double border-vino pb-4">
              <div>
                <p id="titulo-tarjeta" className="font-[family-name:var(--font-display)] text-2xl text-vino sm:text-3xl">Tarjeta de registro</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gris">Hotel Premier · Hermosillo, Son.</p>
              </div>
              <div className="sello hidden shrink-0 rounded-md border-[3px] border-rojo px-3 py-1.5 text-center text-rojo sm:block" aria-hidden="true">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">Recepción 24 h</p>
                <p className="text-lg font-bold leading-tight">{hora}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <label className="block sm:col-span-2"><span className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Nombre del huésped</span>
                <input className="campo" value={nombre} onChange={(e) => setNombre(e.target.value)} autoComplete="name" /></label>
              <label className="block"><span className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Llegada</span>
                <input type="date" className="campo" min={hoy} value={llegada} onChange={(e) => setLlegada(e.target.value)} /></label>
              <label className="block"><span className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Salida</span>
                <input type="date" className="campo" min={llegada || hoy} value={salida} onChange={(e) => setSalida(e.target.value)} /></label>
              <fieldset className="sm:col-span-2">
                <legend className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Habitación</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {habitaciones.map((h) => (
                    <label key={h.id} className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-oro ${habitacion === h.id ? 'border-vino bg-vino text-white' : 'border-vino/25 hover:border-vino'}`}>
                      <input type="radio" name="habitacion" value={h.id} checked={habitacion === h.id} onChange={() => setHabitacion(h.id)} className="sr-only" />{h.nombre}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:max-w-sm">
                {([['Adultos', adultos, setAdultos, 1], ['Niños', ninos, setNinos, 0]] as const).map(([t, v, set, min]) => (
                  <div key={t}>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gris" id={`n-${t}`}>{t}</p>
                    <div className="mt-2 flex items-center gap-3" role="group" aria-labelledby={`n-${t}`}>
                      <button type="button" className="size-10 rounded-full border-2 border-vino/30 text-lg font-bold hover:border-vino disabled:opacity-40" onClick={() => set(Math.max(min, v - 1))} disabled={v <= min} aria-label={`Quitar ${t.toLowerCase()}`}>−</button>
                      <span className="w-6 text-center text-xl font-bold" aria-live="polite">{v}</span>
                      <button type="button" className="size-10 rounded-full border-2 border-vino/30 text-lg font-bold hover:border-vino disabled:opacity-40" onClick={() => set(Math.min(8, v + 1))} disabled={v >= 8} aria-label={`Agregar ${t.toLowerCase()}`}>+</button>
                    </div>
                  </div>
                ))}
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Motivo del viaje</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {viajes.map((v) => (
                    <label key={v.id} className={`cursor-pointer rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-oro ${viaje === v.id ? 'border-rojo bg-rojo text-white' : 'border-vino/25 hover:border-vino'}`}>
                      <input type="radio" name="viaje" value={v.id} checked={viaje === v.id} onChange={() => setViaje(v.id)} className="sr-only" />{v.nombre}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:gap-8">
                <label className="flex items-center gap-3 text-sm font-semibold"><input type="checkbox" className="size-5 accent-rojo" checked={accesible} onChange={(e) => setAccesible(e.target.checked)} />Habitación para persona con discapacidad</label>
                <label className="flex items-center gap-3 text-sm font-semibold"><input type="checkbox" className="size-5 accent-rojo" checked={juntas} onChange={(e) => setJuntas(e.target.checked)} />Me interesa la sala de juntas</label>
              </div>
            </div>
          </form>

          <aside className="flex flex-col rounded-2xl bg-vino p-6 text-white sm:p-8" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-oro">Su estancia</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-6xl leading-none">{noches || '—'}</p>
            <p className="mt-1 text-white/85">{noches === 1 ? 'noche' : 'noches'}{llegada && salida && noches ? ` · ${fechaLarga(llegada)} al ${fechaLarga(salida)}` : ''}</p>
            {fechasMal && <p className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-sm">La salida debe ser después de la llegada.</p>}
            <p className="mt-5 text-sm text-white/85">{tipo.nombre} · {adultos} {adultos === 1 ? 'adulto' : 'adultos'}{ninos ? ` y ${ninos} ${ninos === 1 ? 'niño' : 'niños'}` : ''}</p>
            <div className="mt-6 border-t border-white/15 pt-5">
              <p className="text-sm font-bold text-oro">Para su {viajes.find((v) => v.id === viaje)!.nombre.toLowerCase()}</p>
              <p className="mt-1 text-sm text-white/80">{viajes.find((v) => v.id === viaje)!.nota}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {paraTi.map((i) => <li key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">{i}</li>)}
              </ul>
            </div>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <a href={mailto} className="btn-oro">{Icono.mail} Enviar a reservaciones</a>
              <a href={telefonos[0].href} className="btn-linea">{Icono.tel} Llamar al {telefonos[0].numero}</a>
            </div>
            <p className="mt-4 text-xs text-white/70">No es una reserva confirmada: el hotel le responde con disponibilidad y tarifa.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <Foto n="fachada" alt="Fachada del Hotel Premier sobre la carretera a Nogales" className="aspect-[4/3] w-full rounded-2xl" />
        <div>
          <p className="eyebrow">Ubicación</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Zona norte, salida a Nogales</h2>
          <address className="mt-6 not-italic">
            <p className="text-xl font-semibold">{negocio.direccion}</p>
            <p className="text-gris">{negocio.cp}</p>
          </address>
          <a href={negocio.maps} target="_blank" rel="noopener" className="btn-rojo mt-6">{Icono.pin} Cómo llegar en Google Maps</a>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {telefonos.map((t) => (
              <div key={t.numero}>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gris">{t.etiqueta}</dt>
                <dd><a href={t.href} className="text-lg font-semibold hover:text-rojo">{t.numero}</a></dd>
              </div>
            ))}
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Correo</dt>
              <dd><a href={`mailto:${negocio.email}`} className="break-all text-lg font-semibold hover:text-rojo">{negocio.email}</a></dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Horario</dt>
              <dd className="text-lg font-semibold">Abierto las 24 horas, todos los días</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gris">Facebook</dt>
              <dd><a href={negocio.facebook} target="_blank" rel="noopener" className="text-lg font-semibold hover:text-rojo">hotelpremiermx</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-14 text-white/80 lg:pb-14">
      <div className="contenedor flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="w-fit rounded-xl bg-cal px-4 py-2"><img src={web('logo.png')} alt="Hotel Premier" width={250} height={105} className="h-12 w-auto" loading="lazy" /></div>
          <p className="mt-4 max-w-xs text-sm">{negocio.direccion}, {negocio.cp}.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <li><a href="#habitaciones" className="hover:text-oro">Habitaciones</a></li>
            <li><a href="#amenidades" className="hover:text-oro">Amenidades</a></li>
            <li><a href="#restaurante" className="hover:text-oro">Restaurante</a></li>
            <li><a href="#registro" className="hover:text-oro">Disponibilidad</a></li>
            <li><a href="#ubicacion" className="hover:text-oro">Ubicación</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-oro">Facebook</a></li>
          </ul>
        </nav>
      </div>
      <p className="contenedor mt-10 text-xs text-white/60">© {new Date().getFullYear()} Hotel Premier Hermosillo.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-vino text-white lg:hidden">
      <a href={telefonos[0].href} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.tel}Llamar</a>
      <a href="#registro" className="flex flex-col items-center gap-1 bg-oro py-3 text-xs font-bold text-vino">{Icono.mail}Disponibilidad</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  const { hora, hoy } = useHoraHermosillo();
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada hora={hora} />
        <Bienvenida />
        <Habitaciones />
        <Amenidades />
        <Restaurante />
        <TarjetaRegistro hora={hora} hoy={hoy} />
        <Ubicacion />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
