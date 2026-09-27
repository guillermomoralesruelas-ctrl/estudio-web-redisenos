import { useEffect, useState } from 'react';
import {
  ambiental, bienvenida, circuitos, ciudad, coleccion, experiencias, fotos, hotel, mensajeBase, opiniones, paquetes,
  servicios, wa, type CircuitoId, type Foto, type Paquete, type Renglon,
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
  cama: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-7v5M3 15h18" strokeLinecap="round" /><circle cx="7" cy="11.5" r="1.8" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

// ---------- Encabezado y portada ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#hotel', label: 'El hotel' },
    { href: '#coleccion', label: 'La colección' },
    { href: '#teje', label: 'Paquetes y tours' },
    { href: '#experiencias', label: 'Experiencias' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel Tradicional San Cristóbal, ir al inicio">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-tinta/85 hover:text-ocre">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={hotel.reservar} {...externo} className="btn hidden sm:inline-flex">Reservar ahora</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-md border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-cal lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-titulo text-xl font-bold text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos = [
    [`${servicios.habitaciones}`, 'habitaciones'],
    [`Más de ${coleccion.piezas}`, 'piezas en su colección'],
    ['4 cuadras', 'de la Catedral'],
    [`${hotel.checkIn} / ${hotel.checkOut}`, 'check-in y check-out'],
  ];
  return (
    <section id="inicio" className="pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="contenedor grid gap-8 md:grid-cols-12 md:items-end">
        <div className="min-w-0 md:col-span-7">
          <p className="text-lg font-semibold text-ocre">San Cristóbal de Las Casas, Chiapas</p>
          <h1 className="mt-3 text-[clamp(2.8rem,7.4vw,5.6rem)]">Hotel Tradicional <span className="text-grana">San Cristóbal</span></h1>
        </div>
        <div className="min-w-0 md:col-span-5">
          <p className="text-lg text-tinta">En el antiguo barrio de La Merced, a tan solo 4 cuadras de la emblemática Catedral. Todos nuestros rincones guardan historia, cultura y mucha pasión.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={hotel.reservar} {...externo} className="btn">{Icono.cama} Reservar ahora</a>
            <a href={hotel.whatsapp} {...externo} className="btn-linea">{Icono.wa} Necesito información</a>
          </div>
        </div>
      </div>
      <div className="contenedor mt-10">
        <figure className="min-w-0">
          <div className="aspect-[4/3] overflow-hidden rounded-lg sm:aspect-[2/1]"><Img foto={fotos.pasillo} eager className="object-[50%_60%]" /></div>
          <figcaption className="mt-3 text-sm">Los pasillos del hotel, con la exhibición permanente de trajes tradicionales de Chiapas.</figcaption>
        </figure>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-tinta/15 pt-6 md:grid-cols-4">
          {datos.map(([d, t]) => (
            <div key={t} className="flex min-w-0 flex-col-reverse">
              <dt className="text-[0.95rem]">{t}</dt>
              <dd className="cifra font-titulo text-2xl font-bold text-tinta sm:text-3xl">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ---------- El hotel ----------

function ElHotel() {
  return (
    <section id="hotel" className="border-t border-tinta/10 bg-papel py-20 md:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-6">
          <h2 className="text-[clamp(2.1rem,4.4vw,3.3rem)]">{bienvenida.titulo}</h2>
          {bienvenida.textos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg">{p}</p>)}
          <p className="mt-6 font-titulo text-2xl font-bold text-grana">«{hotel.frase}»</p>
        </div>
        <div className="min-w-0 lg:col-span-6">
          <div className="aspect-[2/1] overflow-hidden rounded-lg"><Img foto={fotos.habitacion} /></div>
          <h3 className="mt-8 text-2xl">{servicios.titulo}: {servicios.habitaciones} habitaciones</h3>
          <p className="mt-2">{servicios.texto}</p>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {servicios.lista.map((s) => <li key={s} className="border-b border-tinta/10 py-2 font-medium text-tinta">{s}</li>)}
          </ul>
          <p className="mt-5 rounded-md bg-cal px-4 py-3 text-[0.95rem] text-tinta">
            <span className="font-semibold">Check-in</span> después de las {hotel.checkIn} h. <span className="font-semibold">Check-out</span> antes de las {hotel.checkOut} h. Trataremos de asignar las habitaciones lo antes posible de acuerdo a nuestra disponibilidad.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={hotel.reservar} {...externo} className="btn">{Icono.cama} Ver disponibilidad y tarifas</a>
            <a href={hotel.whatsapp} {...externo} className="btn-linea">{Icono.wa} Preguntar por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coleccion() {
  return (
    <section id="coleccion" className="oscuro bg-anil text-white">
      <div className="contenedor grid gap-12 py-20 md:py-24 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="text-[clamp(2.1rem,4.4vw,3.3rem)] text-white">{coleccion.titulo}</h2>
          {coleccion.textos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-white/85">{p}</p>)}
        </div>
        <div className="min-w-0 lg:col-span-7">
          <figure>
            <div className="aspect-[2/1] overflow-hidden rounded-lg"><Img foto={fotos.telar} /></div>
            <figcaption className="mt-3 text-sm text-white/80">Telar de cintura, con traje tradicional de mujer de Zinacantán, en la colección del hotel.</figcaption>
          </figure>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="cifra font-titulo text-6xl font-bold text-oro">+{coleccion.piezas}</span>
            <span className="text-lg text-white">piezas de los grupos étnicos de Chiapas</span>
          </p>
          <p className="mt-3 text-white/85">{coleccion.rescate}</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {coleccion.salas.map((s) => (
              <li key={s.nombre} className="min-w-0 border-t-2 border-oro pt-3">
                <h3 className="text-xl text-white">{s.nombre}</h3>
                <p className="mt-1 text-[0.95rem] text-white/85">{s.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: Teje tu viaje por Chiapas ----------

type Franja = 'noche' | 'noche-palenque' | 'desayunos' | 'comida' | 'detalle' | CircuitoId;

const colorFranja: Record<Franja, string> = {
  noche: '#25285e', 'noche-palenque': '#1e5d50', desayunos: '#f3e3c3', comida: '#4f7a2c', detalle: '#a3243b',
  c1: '#1f6f8b', c2: '#2f7d6d', c3: '#b35f00', c4: '#6e3f8f', c5: '#a3243b',
};

/** Motivos geométricos dibujados para esta página (no reproducen piezas de la colección). */
function Motivos() {
  const hilo = '#f7f1e6';
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="m-noche" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill={colorFranja.noche} />
          <path d="M0 5H20M0 15H20" stroke="#33377a" strokeWidth="2" />
        </pattern>
        <pattern id="m-noche-palenque" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill={colorFranja['noche-palenque']} />
          <path d="M0 5H20M0 15H20" stroke="#2a7563" strokeWidth="2" />
        </pattern>
        <pattern id="m-desayunos" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill={colorFranja.desayunos} />
          <circle cx="7" cy="7" r="2.4" fill="#cc7100" />
        </pattern>
        <pattern id="m-comida" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill={colorFranja.comida} />
          <path d="M3 11 8 5l5 6" fill="none" stroke="#e9d9a8" strokeWidth="2" />
        </pattern>
        <pattern id="m-detalle" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill={colorFranja.detalle} />
          <path d="M8 3v10M3 8h10" stroke="#f2c9d2" strokeWidth="2" />
        </pattern>
        {/* Circuito 1, Cañón del Sumidero: zigzag, como las paredes del cañón */}
        <pattern id="m-c1" width="20" height="16" patternUnits="userSpaceOnUse">
          <rect width="20" height="16" fill={colorFranja.c1} />
          <path d="M0 12 5 4l5 8 5-8 5 8" fill="none" stroke="#e9b35f" strokeWidth="2.2" />
        </pattern>
        {/* Circuito 2, Lagunas de Montebello: ondas de agua */}
        <pattern id="m-c2" width="24" height="12" patternUnits="userSpaceOnUse">
          <rect width="24" height="12" fill={colorFranja.c2} />
          <path d="M0 6q6-6 12 0t12 0" fill="none" stroke={hilo} strokeWidth="2" />
        </pattern>
        {/* Circuito 3, Palenque: grecas escalonadas */}
        <pattern id="m-c3" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill={colorFranja.c3} />
          <path d="M2 20h20v-4h-4v-4h-4V8h-4v4H6v4H2Z" fill="#2b1f1a" />
        </pattern>
        {/* Circuito 4, Chamula y Zinacantán: rombos */}
        <pattern id="m-c4" width="20" height="24" patternUnits="userSpaceOnUse">
          <rect width="20" height="24" fill={colorFranja.c4} />
          <path d="M10 3 17 12 10 21 3 12Z" fill="none" stroke="#f2a7c3" strokeWidth="2" />
          <circle cx="10" cy="12" r="2" fill="#e9b35f" />
        </pattern>
        {/* Circuito 5, Bonampak y Yaxchilán: dientes */}
        <pattern id="m-c5" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill={colorFranja.c5} />
          <path d="M0 16 8 6l8 10Z" fill="#e9b35f" />
        </pattern>
      </defs>
    </svg>
  );
}

function Muestra({ franja, className = 'size-7' }: { franja: Franja; className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={`${className} shrink-0 rounded-sm`} aria-hidden="true">
      <rect width="28" height="28" fill={`url(#m-${franja})`} />
    </svg>
  );
}

type Columna = { franja: Franja; peso: number; renglon: number; noche?: number };

/** Convierte los renglones del paquete en columnas de la faja: una por noche y una por cada tour, desayuno o detalle. */
function columnas(p: Paquete): Columna[] {
  const cols: Columna[] = [];
  p.renglones.forEach((r, i) => {
    if (r.tipo === 'noches') {
      const palenque = r.enPalenque ?? 0;
      for (let k = 0; k < r.n; k++) cols.push({ franja: k >= r.n - palenque ? 'noche-palenque' : 'noche', peso: 1, renglon: i, noche: k + 1 });
    } else if (r.tipo === 'desayunos') cols.push({ franja: 'desayunos', peso: 0.9, renglon: i });
    else if (r.tipo === 'comida') cols.push({ franja: 'comida', peso: 1, renglon: i });
    else if (r.tipo === 'detalle') cols.push({ franja: 'detalle', peso: 1, renglon: i });
    else if (r.tipo === 'tour') cols.push({ franja: r.circuito, peso: 2.2, renglon: i });
  });
  return cols;
}

function franjaDe(r: Renglon, p: Paquete): Franja | 'souvenirs' {
  if (r.tipo === 'noches') return 'noche';
  if (r.tipo === 'tour') return r.circuito;
  if (r.tipo === 'souvenirs') return 'souvenirs';
  void p;
  return r.tipo;
}

function useAngosto() {
  const q = '(max-width: 639px)';
  const [angosto, setAngosto] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const f = () => setAngosto(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);
  return angosto;
}

/** "4 noches, 3 tours" del paquete (contado de sus renglones). */
function resumen(p: Paquete) {
  const cols = columnas(p);
  return `${cols.filter((c) => c.noche).length} noches y ${cols.filter((c) => c.franja.startsWith('c')).length} tours incluidos`;
}

function Faja({ p, resaltado }: { p: Paquete; resaltado: number | null }) {
  const cols = columnas(p);
  const angosto = useAngosto();
  // En el celular la faja se dibuja más alta para que se vean sus motivos.
  const VB = angosto ? 440 : 230, X0 = 70, X1 = 930, Y0 = 30, ALTO = VB - 60; // la faja, entre el palo del telar (izquierda) y los flecos (derecha)
  const total = cols.reduce((s, c) => s + c.peso, 0);
  const u = (X1 - X0) / total;
  const conSouvenirs = p.renglones.some((r) => r.tipo === 'souvenirs');
  const iSouv = p.renglones.findIndex((r) => r.tipo === 'souvenirs');
  const tenue = (renglon: number) => (resaltado !== null && resaltado !== renglon ? 0.3 : 1);
  let x = X0;
  return (
    <svg viewBox={`0 0 1000 ${VB}`} className="h-auto w-full" role="img" aria-label={`Faja tejida del paquete ${p.nombre}: una franja por cada noche, tour y servicio incluido`}>
      {/* palo del telar e hilos de la urdimbre */}
      <rect x="24" y={Y0 - 20} width="18" height={ALTO + 40} rx="8" fill="#6b4a2f" />
      {Array.from({ length: 9 }, (_, k) => <path key={k} d={`M42 ${Y0 + 8 + k * ((ALTO - 16) / 8)}H${X0}`} stroke="#d9c7a6" strokeWidth="1.4" />)}
      <rect x={X0 - 1} y={Y0 - 3} width={X1 - X0 + 2} height={ALTO + 6} fill="#2b1f1a" rx="2" />
      <g key={p.id}>
        {cols.map((c, k) => {
          const w = c.peso * u;
          const el = (
            <g key={k} className="franja" style={{ animationDelay: `${k * 70}ms`, opacity: tenue(c.renglon), transition: 'opacity .2s' }}>
              <rect x={x} y={Y0} width={w} height={ALTO} fill={`url(#m-${c.franja})`} />
              {k > 0 && <path d={`M${x} ${Y0}V${Y0 + ALTO}`} stroke="#f7f1e6" strokeWidth="2" opacity="0.55" />}
              <path d={`M${x} ${Y0 + 6}H${x + w}M${x} ${Y0 + ALTO - 6}H${x + w}`} stroke="#f7f1e6" strokeWidth="2" strokeDasharray="4 3" opacity="0.8" />
              {c.noche && (
                <g transform={`translate(${x + w / 2} ${Y0 + ALTO / 2})`}>
                  <circle r={Math.min(angosto ? 16 : 9, w / 3)} fill="#f7f1e6" />
                  <circle r={Math.min(angosto ? 16 : 9, w / 3)} cx={Math.min(angosto ? 7 : 4, w / 7)} cy={-Math.min(angosto ? 5 : 3, w / 9)} fill={colorFranja[c.franja]} />
                </g>
              )}
            </g>
          );
          x += w;
          return el;
        })}
      </g>
      {/* flecos: los souvenirs de obsequio */}
      {conSouvenirs && (
        <g stroke="#cc7100" strokeWidth={angosto ? 4 : 2.4} strokeLinecap="round" style={{ opacity: tenue(iSouv), transition: 'opacity .2s' }}>
          {Array.from({ length: 12 }, (_, k) => {
            const y = Y0 + 6 + k * ((ALTO - 12) / 11);
            return <path key={k} d={`M${X1 + 2} ${y}q22 ${k % 2 ? 4 : -4} 44 ${k % 2 ? 2 : -2}`} fill="none" />;
          })}
          {Array.from({ length: 4 }, (_, k) => <circle key={k} cx={X1 + 48} cy={Y0 + 18 + k * ((ALTO - 36) / 3)} r={angosto ? 8 : 5} fill="#cc7100" stroke="none" />)}
        </g>
      )}
    </svg>
  );
}

function TejeTuViaje() {
  const [id, setId] = useState(paquetes[0].id);
  const [resaltado, setResaltado] = useState<number | null>(null);
  const p = paquetes.find((x) => x.id === id) ?? paquetes[0];
  const mensaje = `Hola, me interesa el paquete ${p.nombre} (desde ${pesos(p.desde)} por ${p.por}). ¿Me pueden dar fechas, disponibilidad y precio final?`;
  return (
    <section id="teje" className="relative py-20 md:py-24">
      <Motivos />
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.3rem,5vw,3.9rem)] md:col-span-6">Teje tu viaje por Chiapas</h2>
          <p className="text-lg md:col-span-6">
            Paquetes diseñados especialmente para ti. Elige uno y se teje su faja: una franja por cada noche en el hotel y un motivo por cada tour, con los desayunos, los detalles y los flecos de los souvenirs de obsequio.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Elige un paquete">
          {paquetes.map((x) => (
            <button key={x.id} type="button" onClick={() => { setId(x.id); setResaltado(null); }} aria-pressed={x.id === p.id}
              className={`min-h-11 rounded-md border px-4 py-2 text-left font-medium transition-colors ${x.id === p.id ? 'border-anil bg-anil text-white' : 'border-tinta/20 bg-papel text-tinta hover:border-tinta'}`}>
              {x.nombre}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-tinta/10 bg-papel p-4 sm:p-6">
          <Faja p={p} resaltado={resaltado} />
          <p className="mt-3 text-sm">De izquierda a derecha: primero las noches en el hotel, luego los desayunos, los tours y los detalles; al final, los flecos.</p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <article key={p.id} className="ficha min-w-0 lg:col-span-5" aria-live="polite">
            <h3 className="text-3xl">{p.nombre}</h3>
            <p className="cifra mt-2 text-tinta"><span className="font-titulo text-5xl font-bold text-grana">{pesos(p.desde)}</span> <span className="text-lg">desde, por {p.por}</span></p>
            <p className="mt-2">{resumen(p)}.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa(mensaje)} {...externo} className="btn">{Icono.wa} Preguntar por este paquete</a>
            </div>
            <p className="mt-5 text-sm">Precios «desde» publicados en su página de paquetes, sin fechas de vigencia: se confirman por WhatsApp. Dibujo ilustrativo; los motivos son geométricos y no reproducen piezas de la colección.</p>
          </article>
          <ul className="grid min-w-0 content-start gap-2 lg:col-span-7" aria-label={`Qué incluye ${p.nombre}`}>
            {p.renglones.map((r, i) => {
              const fr = franjaDe(r, p);
              return (
                <li key={`${p.id}-${i}`} onMouseEnter={() => setResaltado(i)} onMouseLeave={() => setResaltado(null)}
                  className="flex min-w-0 items-center gap-3 rounded-md border border-tinta/10 bg-papel px-3 py-2">
                  {fr === 'souvenirs' ? (
                    <svg viewBox="0 0 28 28" className="size-7 shrink-0" aria-hidden="true"><g stroke="#cc7100" strokeWidth="2.4" strokeLinecap="round"><path d="M4 6h20M4 13h20M4 20h20" /></g></svg>
                  ) : <Muestra franja={fr} />}
                  <span className="min-w-0 font-medium text-tinta">{r.texto}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16 border-t border-tinta/15 pt-12">
          <div className="grid gap-4 md:grid-cols-12 md:items-end">
            <h3 className="text-[clamp(1.8rem,3.4vw,2.6rem)] md:col-span-6">¿Solo un día? Nuestros tours diarios</h3>
            <p className="md:col-span-6">La mejor manera de conocer Chiapas. Cada circuito lleva el mismo motivo que en las fajas de los paquetes.</p>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-2 md:grid-cols-2">
            {circuitos.map((c) => (
              <li key={c.id} className="flex min-w-0 items-center gap-4 border-b border-tinta/10 py-3">
                <Muestra franja={c.id} className="size-11" />
                <div className="min-w-0 flex-1">
                  <p className="font-titulo text-lg font-bold text-tinta">{c.nombre}: {c.corto}</p>
                  <p className="text-[0.95rem]">{c.texto}</p>
                </div>
                <a href={wa(`Hola, me interesa el ${c.nombre} (${c.texto.replace(/\.$/, '')}). ¿Qué días sale y cuál es el precio?`)} {...externo}
                  className="grid size-11 shrink-0 place-items-center rounded-md border border-tinta/20 text-ocre hover:border-tinta" aria-label={`Preguntar por el ${c.nombre} por WhatsApp`}>{Icono.wa}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Experiencias, opiniones, ciudad y compromiso ----------

function Experiencias() {
  return (
    <section id="experiencias" className="border-y border-tinta/10 bg-papel py-20 md:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <h2 className="text-[clamp(2.1rem,4.4vw,3.3rem)]">{experiencias.titulo}</h2>
          <p className="mt-5">{experiencias.texto}</p>
          <a href={wa('Hola, me interesan las experiencias exclusivas del Hotel Tradicional. ¿Me pueden dar información?')} {...externo} className="btn mt-7">{Icono.wa} Más información</a>
        </div>
        <ol className="grid min-w-0 gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {experiencias.lista.map((e) => (
            <li key={e.nombre} className="min-w-0 border-t border-tinta/15 py-4">
              <h3 className="text-xl">{e.nombre}</h3>
              <p className="mt-1 text-[0.95rem]">{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="opiniones">
      <div className="contenedor">
        <h2 id="opiniones" className="text-[clamp(2.1rem,4.4vw,3.3rem)]">Opiniones de nuestros clientes</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {opiniones.map((o, k) => (
            <figure key={o.nombre} className={`min-w-0 border-l-4 pl-5 ${k % 2 ? 'border-morado' : 'border-grana'}`}>
              <blockquote className="text-lg text-tinta">«{o.texto}»</blockquote>
              <figcaption className="mt-3 font-semibold">{o.nombre}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-sm">Opiniones publicadas en el sitio del hotel.</p>
      </div>
    </section>
  );
}

function Ciudad() {
  return (
    <section className="border-t border-tinta/10 bg-papel">
      <div className="contenedor grid gap-10 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
        <figure className="min-w-0 lg:col-span-7">
          <div className="aspect-[16/10] overflow-hidden rounded-lg"><Img foto={fotos.ciudad} /></div>
          <figcaption className="mt-3 text-sm">Foto de la ciudad publicada en el sitio del hotel.</figcaption>
        </figure>
        <div className="min-w-0 lg:col-span-5">
          <h2 className="text-[clamp(2.1rem,4.4vw,3.3rem)]">{ciudad.titulo}</h2>
          {ciudad.textos.map((p) => <p key={p.slice(0, 20)} className="mt-5">{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function Ambiental() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="ambiental">
      <div className="contenedor grid gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 id="ambiental" className="text-[clamp(2rem,4vw,3rem)]">{ambiental.titulo}</h2>
          <p className="mt-5">{ambiental.texto}</p>
          <h3 className="mt-8 text-xl">Distintivos que publica el hotel</h3>
          <p className="mt-2 text-[0.95rem] text-tinta">{ambiental.distintivos.join(', ')}.</p>
        </div>
        <div className="min-w-0 lg:col-span-7">
          {ambiental.grupos.map((g) => (
            <details key={g.nombre} className="group border-b border-tinta/15 py-1">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 font-titulo text-lg font-bold text-tinta">
                {g.nombre}
                <span aria-hidden="true" className="text-2xl text-ocre transition-transform group-open:rotate-45">+</span>
              </summary>
              <ul className="grid gap-1 pb-4 pl-1">
                {g.puntos.map((pt) => <li key={pt} className="text-[0.95rem]">{pt}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-anil text-white">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.1rem,4.4vw,3.3rem)] text-white">¡Hospédate con nosotros!</h2>
          <p className="mt-4 text-lg text-white/85">Consulta disponibilidad y tarifas en línea, o escríbenos y te ayudamos a reservar tu habitación.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hotel.reservar} {...externo} className="btn-oro">{Icono.cama} Reservar ahora</a>
            <a href={hotel.whatsapp} {...externo} className="btn-claro">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <dl className="grid min-w-0 content-start gap-6 sm:grid-cols-2 md:col-span-6">
          <div className="sm:col-span-2">
            <dt className="font-semibold text-oro">Dirección</dt>
            <dd className="mt-1 text-lg">{hotel.direccion}</dd>
            <dd className="mt-3"><a href={hotel.mapa} {...externo} className="inline-flex items-center gap-2 font-semibold text-white underline decoration-oro decoration-2 underline-offset-4">{Icono.mapa} Cómo llegar en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-oro">Teléfono</dt>
            <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={hotel.telefono.href}>{hotel.telefono.visible}</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-oro">WhatsApp</dt>
            <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={hotel.whatsapp} {...externo}>{hotel.whatsappVisible}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-semibold text-oro">Correo</dt>
            <dd className="mt-1"><a className="break-all text-white underline underline-offset-4 sm:text-lg" href={`mailto:${hotel.email}?subject=${encodeURIComponent('Reservación en Hotel Tradicional')}`}>{hotel.email}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-semibold text-oro">Redes</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
              {hotel.redes.map((r) => <a key={r.nombre} className="text-white underline underline-offset-4" href={r.url} {...externo}>{r.nombre}</a>)}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-cal pb-28 pt-12 md:pb-12">
      <div className="contenedor grid gap-6 md:grid-cols-12 md:items-center">
        <div className="flex min-w-0 items-center gap-5 md:col-span-6">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} loading="lazy" className="h-12 w-auto" />
        </div>
        <div className="min-w-0 text-sm md:col-span-6 md:text-right">
          <p className="flex flex-wrap gap-x-5 md:justify-end">
            {hotel.legales.map((l) => <a key={l.nombre} className="underline underline-offset-4 hover:text-tinta" href={l.url} {...externo}>{l.nombre}</a>)}
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {hotel.nombre}</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-cal/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-2">
        <a href={hotel.reservar} {...externo} className="btn px-2">Reservar</a>
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label={`Escribir por WhatsApp: ${mensajeBase}`}>{Icono.wa}</a>
        <a href={hotel.telefono.href} className="btn-linea px-0" aria-label="Llamar al Hotel Tradicional">{Icono.tel}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar al Hotel Tradicional">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#teje" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a Teje tu viaje por Chiapas</a>
      <Encabezado />
      <main>
        <Portada />
        <ElHotel />
        <Coleccion />
        <TejeTuViaje />
        <Experiencias />
        <Opiniones />
        <Ciudad />
        <Ambiental />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
