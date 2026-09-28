import { useState } from 'react';
import {
  habitaciones, hotel, instalaciones, pagar, pago, porQue, reservar, restaurante, salones, saludo,
  serviciosHabitacion, wa, type Foto, type Habitacion,
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
const plural = (n: number, uno: string, varios: string) => `${n} ${n === 1 ? uno : varios}`;
const fechaISO = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const masDias = (iso: string, n: number) => { const [y, m, d] = iso.split('-').map(Number); return fechaISO(new Date(y, m - 1, d + n)); };
const fechaLarga = (iso: string) => { const [y, m, d] = iso.split('-').map(Number); return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long' }).format(new Date(y, m - 1, d)); };
const desde = Math.min(...habitaciones.map((h) => h.oferta));

// ---------- Secciones ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#habitaciones', label: 'Habitaciones' },
    { href: '#cuantos', label: '¿Cuántos vienen?' },
    { href: '#restaurante', label: 'Restaurante' },
    { href: '#salones', label: 'Salones' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel Villa Margaritas, ir al inicio">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} className="h-12 w-auto md:h-16" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-tinta/80 hover:text-tinta">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={pagar} {...externo} className="hidden px-3 font-medium text-tinta underline decoration-oro decoration-2 underline-offset-4 xl:inline">Pagar reserva</a>
          <a href={reservar} {...externo} className="btn hidden sm:inline-flex">{Icono.cal} Reservar</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-crema lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-serif text-2xl text-tinta">{n.label}</a>)}
            <a href={pagar} {...externo} className="py-3 font-serif text-2xl text-tinta">Pagar reserva</a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos = [
    ['Por noche, desde', `${pesos(desde)} MXN`],
    ['Check-in', hotel.checkin],
    ['Check-out', hotel.checkout],
    ['Servicio', '24/7'],
  ];
  return (
    <section id="inicio" className="contenedor grid gap-10 pb-16 pt-10 md:grid-cols-12 md:items-center md:gap-12 md:pb-20 md:pt-14">
      <div className="min-w-0 md:col-span-7">
        <p className="text-lg font-medium text-oro-texto">Bienvenidos a Villahermosa, Tabasco</p>
        <h1 className="mt-3 text-[clamp(3rem,8vw,6rem)]">Hotel Villa <em className="text-oro-texto">Margaritas</em></h1>
        <p className="mt-5 max-w-xl text-xl text-tinta">{hotel.ubicacion}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={reservar} {...externo} className="btn">{Icono.cal} Reservar ahora</a>
          <a href={hotel.whatsapp} {...externo} className="btn-linea">{Icono.wa} Escríbenos por WhatsApp</a>
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-tinta/15 pt-6 sm:grid-cols-4">
          {datos.map(([t, d]) => (
            <div key={t} className="min-w-0">
              <dt className="text-sm">{t}</dt>
              <dd className="font-medium text-tinta">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="min-w-0 md:col-span-5">
        <div className="mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] md:aspect-[3/4]">
          <Img foto={hotel.entrada} eager className="object-[50%_65%]" />
        </div>
      </div>
    </section>
  );
}

function Cerca() {
  return (
    <section className="bg-noche text-white">
      <div className="contenedor grid gap-10 py-16 md:grid-cols-12 md:items-end md:py-20">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)] text-white">{hotel.lema}</h2>
          <p className="mt-4 text-lg text-white/85">{hotel.esencia}</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-3 md:col-span-7">
          {hotel.cerca.map((c) => (
            <li key={c.de} className="min-w-0 border-t-2 border-oro pt-4">
              <p className="font-serif text-3xl text-oro">{c.cuanto}</p>
              <p className="mt-1 text-lg font-medium text-white">{c.de}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FilaHabitacion({ h }: { h: Habitacion }) {
  return (
    <article className="grid gap-6 border-t border-tinta/15 py-9 md:grid-cols-12 md:gap-8">
      <div className="grid min-w-0 grid-cols-[2fr_1fr] gap-2 md:col-span-12">
        <div className="row-span-2 aspect-[3/2] overflow-hidden rounded-2xl"><Img foto={h.fotos[0]} /></div>
        <div className="aspect-[3/2] overflow-hidden rounded-2xl"><Img foto={h.fotos[1]} /></div>
        <div className="aspect-[3/2] overflow-hidden rounded-2xl"><Img foto={h.fotos[2]} /></div>
      </div>
      <div className="min-w-0 md:col-span-8">
        <h3 className="text-[2.1rem]">{h.nombre}</h3>
        <p className="mt-1 font-medium text-oro-texto">Hasta {h.personas} personas por habitación, {h.cuantas} habitaciones de este tipo</p>
        <p className="mt-3 max-w-2xl">{h.texto}</p>
        {h.extra && <p className="mt-3 text-[0.95rem] text-tinta">Además: {h.extra.join(', ').toLowerCase().replace(/^./, (l) => l.toUpperCase())}.</p>}
      </div>
      <div className="min-w-0 md:col-span-4 md:border-l md:border-tinta/15 md:pl-8">
        <p className="text-sm">Precio por noche</p>
        <p className="precio text-lg"><s aria-label={`Antes ${pesos(h.lista)}`}>{pesos(h.lista)}</s></p>
        <p className="precio font-serif text-5xl text-tinta">{pesos(h.oferta)} <span className="font-sans text-base text-texto">MXN</span></p>
        <p className="text-sm">Tarifa de oferta, reservando directo</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href={h.href} {...externo} className="btn px-5">Reservar</a>
          <a href={wa(`${saludo} Me interesa la habitación ${h.nombre} en el Hotel Villa Margaritas. ¿Me pueden dar información?`)} {...externo} className="btn-linea px-5">{Icono.wa} Preguntar</a>
        </div>
      </div>
    </article>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)] md:col-span-6">Confort para cada viajero</h2>
          <p className="text-lg md:col-span-6">{hotel.totalHabitaciones} habitaciones diseñadas para brindarte el máximo confort y descanso. {hotel.habitacionesTexto}</p>
        </div>
        <p className="mt-10 rounded-2xl bg-champana px-5 py-4 text-tinta">
          <span className="font-medium">Todas las habitaciones incluyen:</span> {serviciosHabitacion.join(', ').toLowerCase().replace('wi-fi', 'Wi-Fi').replace('tv', 'TV')}.
        </p>
        <div className="mt-6 border-b border-tinta/15">
          {habitaciones.map((h) => <FilaHabitacion key={h.id} h={h} />)}
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: ¿Cuántos vienen? ----------

function Contador({ etiqueta, valor, min, max, cambiar, unidad }: { etiqueta: string; valor: number; min: number; max: number; cambiar: (n: number) => void; unidad: [string, string] }) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-medium text-white/85" id={`et-${etiqueta}`}>{etiqueta}</p>
      <div className="mt-1 flex items-center gap-2" role="group" aria-labelledby={`et-${etiqueta}`}>
        <button type="button" onClick={() => cambiar(Math.max(min, valor - 1))} disabled={valor <= min} aria-label={`Menos ${etiqueta.toLowerCase()}`}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-2xl leading-none text-white hover:bg-white/10 disabled:opacity-40">−</button>
        <p className="min-w-[3rem] text-center font-serif text-3xl text-white" aria-live="polite">{valor}<span className="sr-only"> {valor === 1 ? unidad[0] : unidad[1]}</span></p>
        <button type="button" onClick={() => cambiar(Math.min(max, valor + 1))} disabled={valor >= max} aria-label={`Más ${etiqueta.toLowerCase()}`}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-2xl leading-none text-white hover:bg-white/10 disabled:opacity-40">+</button>
      </div>
    </div>
  );
}

/** Dibuja las habitaciones necesarias con un punto por persona (lleno = ocupado). */
function Cuartos({ n, cap, personas, activo }: { n: number; cap: number; personas: number; activo: boolean }) {
  const cuartos = Array.from({ length: Math.min(n, 12) }, (_, k) => Math.min(cap, Math.max(0, personas - k * cap)));
  return (
    <div className="flex flex-wrap gap-1.5" aria-hidden="true">
      {cuartos.map((ocupados, k) => (
        <span key={k} className={`flex gap-1 rounded-lg border px-2 py-1.5 ${activo ? 'border-noche/25' : 'border-white/25'}`}>
          {Array.from({ length: cap }, (_, j) => (
            <span key={j} className={`size-2.5 rounded-full ${j < ocupados ? (activo ? 'bg-noche' : 'bg-oro') : (activo ? 'bg-noche/15' : 'bg-white/20')}`} />
          ))}
        </span>
      ))}
      {n > 12 && <span className="self-center text-sm">+{n - 12}</span>}
    </div>
  );
}

function Cuantos() {
  const hoy = fechaISO(new Date());
  const [adultos, setAdultos] = useState(2);
  const [menores, setMenores] = useState(2);
  const [noches, setNoches] = useState(1);
  const [llegada, setLlegada] = useState(hoy);
  const personas = adultos + menores;

  const opciones = habitaciones.map((h) => {
    const n = Math.ceil(personas / h.personas);
    return { h, n, noche: n * h.oferta, alcanza: n <= h.cuantas };
  });
  const barata = [...opciones].filter((o) => o.alcanza).sort((a, b) => a.noche - b.noche || a.n - b.n)[0];
  const [elegida, setElegida] = useState<string | null>(null);
  const actual = opciones.find((o) => o.h.id === elegida && o.alcanza) ?? barata;
  const salida = masDias(llegada, noches);

  const grupo = `${plural(adultos, 'adulto', 'adultos')}${menores ? ` y ${plural(menores, 'menor', 'menores')}` : ''}`;
  const mensaje = `${saludo} Somos ${grupo}. Nos interesa${actual.n === 1 ? '' : 'n'} ${actual.n === 1 ? 'una habitación' : `${actual.n} habitaciones`} ${actual.h.nombre} del ${fechaLarga(llegada)} al ${fechaLarga(salida)} (${plural(noches, 'noche', 'noches')}). ¿Tienen disponibilidad?`;

  return (
    <section id="cuantos" className="bg-noche text-white">
      <div className="contenedor py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] text-white lg:col-span-6">¿Cuántos vienen?</h2>
          <p className="text-lg text-white/85 lg:col-span-6">Dinos cuántos adultos y menores viajan y te decimos cuántas habitaciones necesitan de cada tipo y cuánto pagan por noche con la tarifa de oferta.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="grid min-w-0 grid-cols-2 content-start gap-7 lg:col-span-4 lg:grid-cols-1">
            <Contador etiqueta="Adultos" valor={adultos} min={1} max={9} cambiar={setAdultos} unidad={['adulto', 'adultos']} />
            <Contador etiqueta="Menores" valor={menores} min={0} max={6} cambiar={setMenores} unidad={['menor', 'menores']} />
            <Contador etiqueta="Noches" valor={noches} min={1} max={30} cambiar={setNoches} unidad={['noche', 'noches']} />
            <label className="col-span-2 flex min-w-0 flex-col text-sm font-medium text-white/85 lg:col-span-1">Llegada
              <input type="date" className="mt-1 min-h-12 w-full max-w-56 rounded-xl border border-white/20 bg-white px-4 py-3 text-tinta" value={llegada} min={hoy} onChange={(e) => setLlegada(e.target.value || hoy)} />
            </label>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <p className="font-serif text-2xl text-white" aria-live="polite">{plural(personas, 'persona', 'personas')}, {plural(noches, 'noche', 'noches')}: del {fechaLarga(llegada)} al {fechaLarga(salida)}</p>
            <ul className="mt-5 grid gap-3">
              {opciones.map((o) => {
                const activo = o.h.id === actual.h.id;
                return (
                  <li key={o.h.id} className="min-w-0">
                    <button type="button" onClick={() => setElegida(o.h.id)} disabled={!o.alcanza} aria-pressed={activo}
                      className={`grid w-full gap-3 rounded-2xl px-5 py-4 text-left transition-colors sm:grid-cols-[1fr_auto] sm:items-center ${activo ? 'bg-champana text-noche' : 'bg-white/[0.07] text-white hover:bg-white/[0.12]'} disabled:cursor-not-allowed disabled:opacity-50`}>
                      <span className="min-w-0">
                        <span className="block font-serif text-2xl">{o.h.nombre}</span>
                        <span className={`block text-[0.95rem] ${activo ? 'text-noche/80' : 'text-white/80'}`}>
                          {o.alcanza ? `${plural(o.n, 'habitación', 'habitaciones')}, hasta ${o.h.personas} personas en cada una` : `Hacen falta ${o.n} y el hotel tiene ${o.h.cuantas} de este tipo`}
                          {o === barata && o.alcanza ? '. La opción más económica' : ''}
                        </span>
                        <span className="mt-2 block"><Cuartos n={o.n} cap={o.h.personas} personas={personas} activo={activo} /></span>
                      </span>
                      <span className="precio sm:text-right">
                        <span className="block font-serif text-3xl">{pesos(o.noche)}</span>
                        <span className={`block text-sm ${activo ? 'text-noche/80' : 'text-white/80'}`}>por noche{noches > 1 ? `, ${pesos(o.noche * noches)} en total` : ''}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-sm text-white/80">Calculamos con el máximo de personas por habitación que publica el hotel, contando adultos y menores, y con la tarifa de oferta por noche de su sitio. La disponibilidad y el total se confirman al reservar.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa(mensaje)} {...externo} className="btn-oro">{Icono.wa} Preguntar disponibilidad por WhatsApp</a>
              <a href={reservar} {...externo} className="btn-claro">{Icono.cal} Reservar en línea</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReservaDirecta() {
  return (
    <section className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
      <div className="min-w-0 md:col-span-5">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">¿Por qué reservar con nosotros?</h2>
        <div className="mt-8 rounded-2xl border border-tinta/15 bg-white p-6">
          <h3 className="text-2xl">{pago.titulo}</h3>
          <p className="mt-2">{pago.texto}</p>
          <a href={pagar} {...externo} className="btn mt-5">Pagar mi reserva</a>
        </div>
      </div>
      <dl className="grid min-w-0 gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-7">
        {porQue.map((p) => (
          <div key={p.titulo} className="min-w-0 border-l-2 border-oro pl-4">
            <dt className="font-serif text-2xl text-tinta">{p.titulo}</dt>
            <dd className="mt-1">{p.texto}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Restaurante() {
  return (
    <section id="restaurante" className="bg-champana py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)] md:col-span-7">{restaurante.titulo}</h2>
          <p className="text-lg text-tinta md:col-span-5">El hotel tiene restaurante con desayuno y servicio a cuarto: no tienes que salir para empezar el día.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {restaurante.fotos.map((f) => (
            <div key={f.src} className="aspect-[3/4] min-w-0 overflow-hidden rounded-2xl"><Img foto={f} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Salones() {
  return (
    <section id="salones" className="py-20 md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-12 md:items-end">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)]">{salones.titulo}</h2>
          <p className="mt-4 text-lg">{salones.texto}</p>
          <a href={wa(`${saludo} Me interesa uno de sus salones de eventos para una reunión o celebración. ¿Me pueden dar información?`)} {...externo} className="btn mt-7">{Icono.wa} Preguntar por un salón</a>
        </div>
        <div className="grid min-w-0 gap-3 md:col-span-7">
          <div className="aspect-[1920/700] overflow-hidden rounded-2xl"><Img foto={salones.fotos[0]} /></div>
          <div className="aspect-[16/8] overflow-hidden rounded-2xl"><Img foto={salones.fotos[1]} className="object-[50%_60%]" /></div>
        </div>
      </div>
    </section>
  );
}

function Instalaciones() {
  return (
    <section className="border-y border-tinta/10 bg-white py-20 md:py-24">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-4">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] md:aspect-[2/3]"><Img foto={hotel.elevador} className="object-[50%_40%]" /></div>
        </div>
        <div className="min-w-0 md:col-span-8">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)]">Todo lo que necesitas</h2>
          <p className="mt-4 text-lg">Disfruta de todas las comodidades de un hotel boutique en el centro de Villahermosa.</p>
          <ul className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {instalaciones.map((s) => (
              <li key={s.nombre} className="min-w-0 border-t border-tinta/15 pt-3">
                <p className="font-medium text-tinta">{s.nombre}</p>
                {s.texto && <p className="text-[0.97rem]">{s.texto}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-noche text-white">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.3rem,4.6vw,3.6rem)] text-white">En el corazón de Villahermosa</h2>
          <address className="mt-6 text-lg not-italic text-white">
            <span className="block font-medium">{hotel.nombre}</span>
            <span className="block text-white/85">{hotel.direccion}</span>
          </address>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-oro">Teléfono</dt>
              <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={hotel.telefono.href}>{hotel.telefono.visible}</a></dd>
            </div>
            <div>
              <dt className="font-medium text-oro">WhatsApp</dt>
              <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={hotel.whatsapp} {...externo}>{hotel.whatsappVisible}</a></dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-oro">Correo</dt>
              <dd className="mt-1"><a className="break-all text-lg text-white underline underline-offset-4" href={`mailto:${hotel.email}`}>{hotel.email}</a></dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-oro">Check-in y check-out</dt>
              <dd className="mt-1 text-lg">Entrada desde las {hotel.checkin}, salida hasta las {hotel.checkout}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hotel.whatsapp} {...externo} className="btn-oro">{Icono.wa} Chatear por WhatsApp</a>
            <a href={reservar} {...externo} className="btn-claro">{Icono.cal} Reservar ahora</a>
          </div>
        </div>
        <div className="min-w-0 md:col-span-6">
          <a href={hotel.mapa} {...externo} className="group block overflow-hidden rounded-3xl" aria-label="Ver el Hotel Villa Margaritas en Google Maps (abre en otra pestaña)">
            <div className="aspect-[3/2] overflow-hidden"><Img foto={hotel.lobby} className="transition-transform duration-500 group-hover:scale-[1.02]" /></div>
          </a>
          <a href={hotel.mapa} {...externo} className="btn-claro mt-5">{Icono.mapa} Cómo llegar en Google Maps</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-crema pb-28 pt-12 md:pb-12">
      <div className="contenedor grid gap-8 md:grid-cols-12 md:items-start">
        <div className="flex min-w-0 items-start gap-5 md:col-span-6">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} loading="lazy" className="h-16 w-auto" />
          <p className="text-sm"><span className="font-serif text-lg text-tinta">{hotel.lema}.</span><br />{hotel.pie}</p>
        </div>
        <div className="flex min-w-0 flex-wrap gap-x-6 gap-y-2 text-sm md:col-span-6 md:justify-end">
          <span>© {new Date().getFullYear()} {hotel.nombre}, Villahermosa, Tabasco</span>
          <a href={reservar} {...externo} className="underline underline-offset-4 hover:text-tinta">Reservar</a>
          <a href={pagar} {...externo} className="underline underline-offset-4 hover:text-tinta">Pagar reserva</a>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-2">
        <a href={reservar} {...externo} className="btn px-3">Reservar</a>
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir por WhatsApp al Hotel Villa Margaritas">{Icono.wa}</a>
        <a href={hotel.telefono.href} className="btn-linea px-0" aria-label="Llamar al Hotel Villa Margaritas">{Icono.tel}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar al Hotel Villa Margaritas">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#cuantos" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a calcular habitaciones</a>
      <Encabezado />
      <main>
        <Portada />
        <Cerca />
        <Habitaciones />
        <Cuantos />
        <ReservaDirecta />
        <Restaurante />
        <Salones />
        <Instalaciones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
