import { useState } from 'react';
import {
  espacios, eventos, lugar, lunch, menu, negocio, nosotros, OPENTABLE, paquetes, paraLlevar, portada, saludo, wa,
  type Espacio, type Foto, type Platillo,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 0 })}`;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  mesa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

/** Día de la semana en Hermosillo (0 = domingo). */
function diaHermosillo() {
  const d = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Hermosillo', weekday: 'short' }).format(new Date());
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(d);
}

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#menu', label: 'Menú' },
  { href: '#lunch57', label: 'Lunch 57' },
  { href: '#para-llevar', label: 'Para llevar' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#visitanos', label: 'Visítanos' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="oscuro sticky top-0 z-40 bg-cafe text-crema">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="El Café 57, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-12 w-auto" />
          <span className="hidden text-sm leading-tight text-crema/80 sm:block">Hermosillo<br />desde 2005</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-semibold text-crema/90 hover:text-oro">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={OPENTABLE} {...externo} className="btn-oro hidden sm:inline-flex">{Icono.mesa} Reservar mesa</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-crema/30 text-crema lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-crema/15 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="angosto border-b border-crema/15 py-3 text-2xl font-extrabold text-crema">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const hoy = diaHermosillo();
  return (
    <section id="inicio" className="oscuro bg-cafe text-crema/85">
      <div className="contenedor grid items-center gap-10 pb-16 pt-8 md:grid-cols-12 md:pb-24 md:pt-12">
        <div className="min-w-0 md:col-span-6">
          <p className="text-lg font-semibold text-oro">{portada.antetitulo}</p>
          <h1 className="mt-3 text-[clamp(3rem,7.4vw,6rem)] text-crema">{portada.titulo}</h1>
          <p className="mt-6 max-w-lg text-lg">Desayunos que se sirven hasta el mediodía, comida y cena, café, el Lunch 57 entre semana y espacios para tus reuniones, en la colonia Pitic.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={OPENTABLE} {...externo} className="btn-oro">{Icono.mesa} Reservar mesa</a>
            <a href="#menu" className="btn-claro">Ver el menú</a>
          </div>
          <dl className="mt-10 grid gap-x-8 gap-y-2 border-t border-crema/20 pt-5 sm:grid-cols-2">
            {negocio.horario.map((h) => {
              const esHoy = hoy >= 0 && h.aplica.includes(hoy);
              return (
                <div key={h.dias}>
                  <dt className="text-sm text-crema/75">{h.dias}{esHoy && <span className="ml-2 rounded-full bg-oro px-2 py-0.5 text-[0.75rem] font-bold text-cafe">hoy</span>}</dt>
                  <dd className="font-semibold text-crema">{h.horas}</dd>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="min-w-0 md:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem]"><Img foto={portada.foto} eager /></div>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section className="contenedor grid items-center gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-5">
        <p className="angosto text-[5.5rem] font-extrabold leading-none text-oro-oscuro md:text-[7rem]" aria-hidden="true">2005</p>
        <h2 className="mt-2 text-[clamp(2.2rem,4.4vw,3.4rem)]">{nosotros.titulo}</h2>
        <p className="mt-5 text-lg">{nosotros.texto}</p>
      </div>
      <div className="grid min-w-0 grid-cols-2 gap-4 md:col-span-7">
        {nosotros.fotos.map((fo, i) => (
          <div key={fo.src} className={`aspect-[3/4] overflow-hidden rounded-[1.5rem] ${i === 1 ? 'mt-10' : ''}`}><Img foto={fo} /></div>
        ))}
      </div>
    </section>
  );
}

// ---------- Menú ----------

function Renglon({ p }: { p: Platillo }) {
  return (
    <li className="min-w-0 py-2.5">
      <p className="flex items-baseline gap-2">
        <span className="font-semibold text-cafe">{p.nombre}</span>
        {p.precio && <><span className="puntos" aria-hidden="true" /><span className="precio shrink-0 font-bold text-oro-oscuro">{p.precio}</span></>}
      </p>
      {p.detalle && <p className="mt-0.5 text-[0.95rem] leading-snug">{p.detalle}</p>}
    </li>
  );
}

function Menu() {
  const [id, setId] = useState(menu[0].id);
  const cat = menu.find((c) => c.id === id)!;
  return (
    <section id="menu" className="bg-piedra py-20 md:py-28">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)]">Para cada momento del día</h2>
          <a href={OPENTABLE} {...externo} className="btn">{Icono.mesa} Reservar mesa</a>
        </div>
        <div role="tablist" aria-label="Partes del menú" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {menu.map((c) => (
            <button key={c.id} id={`tab-${c.id}`} role="tab" type="button" aria-selected={c.id === id} aria-controls="panel-menu" onClick={() => setId(c.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 font-bold transition-colors ${c.id === id ? 'border-cafe bg-cafe text-crema' : 'border-cafe/25 bg-crema text-cafe hover:border-cafe'}`}>
              {c.pestana}
            </button>
          ))}
          <a href="#lunch57" className="shrink-0 rounded-full border border-cafe/25 bg-oro px-5 py-2.5 font-bold text-cafe hover:border-cafe">Lunch 57</a>
        </div>

        <div id="panel-menu" role="tabpanel" aria-labelledby={`tab-${cat.id}`} className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h3 className="text-[clamp(2rem,3.6vw,3rem)]">{cat.titulo}</h3>
              <p className="mt-2 text-lg">{cat.frase}</p>
              {cat.foto && <div className="mt-6 aspect-[4/3] overflow-hidden rounded-[1.5rem]"><Img foto={cat.foto} /></div>}
              {cat.notaFinal && <p className="mt-5 text-[0.95rem]">{cat.notaFinal}</p>}
            </div>
          </div>
          <div className="grid min-w-0 gap-x-10 gap-y-10 md:grid-cols-2 lg:col-span-8">
            {cat.secciones.map((s) => (
              <div key={s.titulo} className="min-w-0">
                <h4 className="border-b-2 border-cafe pb-2 text-2xl">{s.titulo}</h4>
                <ul className="mt-1 divide-y divide-cafe/10">{s.platillos.map((p) => <Renglon key={p.nombre} p={p} />)}</ul>
                {s.nota && <p className="mt-3 rounded-xl bg-crema px-4 py-3 text-[0.93rem] leading-snug">{s.nota}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Lunch() {
  return (
    <section id="lunch57" className="bg-oro text-cafe">
      <div className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)]">{lunch.titulo}</h2>
          <p className="angosto precio mt-2 text-[5rem] font-extrabold leading-none">{lunch.precio}</p>
          <p className="mt-4 text-lg font-semibold">{lunch.frase}</p>
          <p className="mt-1 text-lg">{lunch.horario}</p>
          <p className="mt-1 text-[0.95rem]">{lunch.restricciones} Pregúntanos por WhatsApp cuáles.</p>
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-[1.5rem]"><Img foto={lunch.foto} /></div>
        </div>
        <ol className="min-w-0 md:col-span-7 md:pt-4">
          {lunch.dias.map((d) => (
            <li key={d.dia} className="grid gap-1 border-b-2 border-cafe/20 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <span className="angosto text-3xl font-extrabold">{d.dia}</span>
              <span className="text-lg leading-snug">{d.combo}</span>
            </li>
          ))}
          <li className="pt-6">
            <a href={wa(`${saludo} Quiero preguntar por el Lunch 57 de hoy.`)} {...externo} className="btn">{Icono.wa} Preguntar por el Lunch 57</a>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ParaLlevar() {
  return (
    <section id="para-llevar" className="contenedor py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.2rem,4.4vw,3.6rem)]">Para llevar y compartir</h2>
          <p className="mt-2 text-xl font-semibold text-cafe">{paraLlevar.titulo}</p>
          <p className="mt-4 text-lg">{paraLlevar.texto}</p>
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-[1.5rem]"><Img foto={paraLlevar.foto} /></div>
        </div>
        <div className="min-w-0 md:col-span-7">
          <h3 className="text-3xl">Platillos para 8 personas o más</h3>
          <ul className="mt-4 divide-y divide-cafe/15 border-y border-cafe/15">
            {paraLlevar.platillos.map((p) => (
              <li key={p.nombre} className="grid items-center gap-4 py-5 sm:grid-cols-[1fr_auto]">
                <div className="min-w-0">
                  <p className="flex items-baseline gap-2">
                    <span className="angosto text-2xl font-extrabold text-cafe">{p.nombre}</span>
                    <span className="puntos" aria-hidden="true" />
                    <span className="precio shrink-0 text-lg font-bold text-oro-oscuro">{p.precio}</span>
                  </p>
                  <p className="font-semibold text-hoja">{p.rinde}</p>
                  <p className="mt-0.5 text-[0.95rem]">{p.detalle}</p>
                </div>
                <a href={wa(`${saludo} Quiero hacer un pedido para llevar: ${p.nombre} (${p.rinde.toLowerCase()}, ${p.precio}).`)} {...externo}
                  className="btn-linea justify-self-start px-4" aria-label={`Pedir ${p.nombre} por WhatsApp`}>{Icono.wa} Pedir</a>
              </li>
            ))}
          </ul>
          <a href={wa(`${saludo} Quiero hacer un pedido para llevar.`)} {...externo} className="btn mt-8">{Icono.wa} Haz tu pedido</a>
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: "La cuenta de tu reunión" ----------

/** Posiciones de las sillas (y mesas) de cada espacio, vistas desde arriba. */
function plano(e: Espacio) {
  if (e.id === 'terraza') {
    // 10 mesas redondas de 5 lugares.
    const mesas = Array.from({ length: 10 }, (_, i) => ({ x: 50 + (i % 5) * 60, y: 55 + Math.floor(i / 5) * 80 }));
    const sillas = mesas.flatMap((m) => Array.from({ length: 5 }, (_, k) => {
      const a = (k / 5) * Math.PI * 2 - Math.PI / 2;
      return { x: m.x + Math.cos(a) * 21, y: m.y + Math.sin(a) * 21 };
    }));
    return { mesas: mesas.map((m) => ({ ...m, r: 12 })), largo: null, sillas };
  }
  const porLado = e.max === 10 ? 4 : 7;
  const paso = porLado === 4 ? 48 : 38;
  const ancho = porLado * paso;
  const x0 = 170 - ancho / 2;
  const sillas = [
    ...Array.from({ length: porLado }, (_, i) => ({ x: x0 + paso / 2 + i * paso, y: 60 })),
    ...Array.from({ length: porLado }, (_, i) => ({ x: x0 + paso / 2 + i * paso, y: 160 })),
    { x: x0 - 18, y: 110 },
    { x: x0 + ancho + 18, y: 110 },
  ];
  return { mesas: [], largo: { x: x0, y: 80, w: ancho, h: 60 }, sillas };
}

function Plano({ e, personas }: { e: Espacio; personas: number }) {
  const p = plano(e);
  const rs = e.id === 'terraza' ? 6.5 : 13;
  return (
    <svg viewBox="0 0 340 220" className="block w-full" role="img" aria-label={`${e.nombre}: ${personas} de ${e.max} lugares ocupados`}>
      <rect x="1" y="1" width="338" height="218" rx="18" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="4 6" />
      {p.largo && <rect x={p.largo.x} y={p.largo.y} width={p.largo.w} height={p.largo.h} rx="6" fill="#ece2d2" />}
      {p.mesas.map((m, i) => <circle key={i} cx={m.x} cy={m.y} r={m.r} fill="#ece2d2" />)}
      {p.sillas.map((s, i) => {
        const ocupada = i < personas;
        return <circle key={i} className="silla" cx={s.x} cy={s.y} r={rs} fill={ocupada ? '#fcb101' : 'transparent'} stroke={ocupada ? '#fcb101' : 'currentColor'} strokeOpacity={ocupada ? 1 : 0.45} strokeWidth="1.6" />;
      })}
    </svg>
  );
}

type Dia = 'semana' | 'finde';
const nombreDia: Record<Dia, string> = { semana: 'Lunes a jueves', finde: 'Viernes a domingo' };

function CuentaReunion() {
  const [eid, setEid] = useState('comedor1');
  const [dia, setDia] = useState<Dia>('semana');
  const [n, setN] = useState(8);
  const [pid, setPid] = useState<string>('chilaquiles');
  const e = espacios.find((x) => x.id === eid)!;
  const personas = Math.min(Math.max(n, e.min), e.max);
  const paq = paquetes.find((x) => x.id === pid);
  const total = paq ? paq.precio * personas : 0;
  const minimo = e.minimo[dia];
  const falta = minimo - total;

  const elegirEspacio = (x: Espacio) => { setEid(x.id); setN(x.min); };
  const mensaje = [
    `${saludo} Quiero cotizar un evento:`,
    `${e.nombre}, ${nombreDia[dia].toLowerCase()}, ${personas} personas.`,
    paq ? `Paquete ${paq.nombre} (${pesos(paq.precio)} por persona): ${pesos(total)} aprox.` : 'A la carta.',
    `Consumo mínimo de ese día: ${pesos(minimo)}.`,
    '¿Qué fechas tienen disponibles?',
  ].join(' ');

  const opcion = (activo: boolean) => `rounded-full border px-4 py-2 text-[0.95rem] font-bold transition-colors ${activo ? 'border-oro bg-oro text-cafe' : 'border-crema/30 text-crema hover:border-crema'}`;

  return (
    <section id="eventos" className="oscuro bg-cafe py-20 text-crema/85 md:py-28">
      <div className="contenedor">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="min-w-0 md:col-span-7">
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] text-crema">{eventos.titulo}</h2>
            <p className="mt-5 max-w-2xl text-lg">{eventos.texto}</p>
          </div>
          <div className="min-w-0 md:col-span-5">
            <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem]"><Img foto={eventos.foto} /></div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h3 className="text-[clamp(2rem,3.6vw,3rem)] text-oro">La cuenta de tu reunión</h3>
            <p className="mt-3 max-w-xl">{eventos.espaciosTexto} Elige el espacio, el día, cuántos son y el paquete, y te decimos cuánto sale y si cubres el consumo mínimo de ese día.</p>

            <fieldset className="mt-8">
              <legend className="angosto text-2xl font-extrabold text-crema">¿Dónde?</legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {espacios.map((x) => (
                  <button key={x.id} type="button" onClick={() => elegirEspacio(x)} aria-pressed={x.id === eid}
                    className={`min-w-0 rounded-2xl border px-2 py-3 text-center transition-colors ${x.id === eid ? 'border-oro bg-oro text-cafe' : 'border-crema/25 text-crema hover:border-crema'}`}>
                    <span className="block font-bold">{x.nombre}</span>
                    <span className="block text-[0.85rem]">{x.min} a {x.max} personas</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-crema/5 p-3 text-crema"><Plano e={e} personas={personas} /></div>
            </fieldset>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <fieldset className="min-w-0">
                <legend className="angosto text-2xl font-extrabold text-crema">¿Qué día?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(['semana', 'finde'] as Dia[]).map((d) => (
                    <button key={d} type="button" onClick={() => setDia(d)} aria-pressed={d === dia} className={opcion(d === dia)}>{nombreDia[d]}</button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="min-w-0">
                <legend className="angosto text-2xl font-extrabold text-crema">¿Cuántos son?</legend>
                <div className="mt-3 flex items-center gap-3">
                  <button type="button" onClick={() => setN(personas - 1)} disabled={personas <= e.min} aria-label="Una persona menos"
                    className="grid size-11 place-items-center rounded-full border border-crema/30 text-2xl font-bold text-crema disabled:opacity-35">−</button>
                  <output className="angosto precio w-16 text-center text-4xl font-extrabold text-crema" aria-live="polite">{personas}</output>
                  <button type="button" onClick={() => setN(personas + 1)} disabled={personas >= e.max} aria-label="Una persona más"
                    className="grid size-11 place-items-center rounded-full border border-crema/30 text-2xl font-bold text-crema disabled:opacity-35">+</button>
                </div>
                <p className="mt-2 text-[0.9rem] text-crema/75">El {e.nombre} es para {e.min} a {e.max} personas.</p>
              </fieldset>
            </div>

            <fieldset className="mt-8">
              <legend className="angosto text-2xl font-extrabold text-crema">¿Qué paquete?</legend>
              {(['Desayuno', 'Comida o cena'] as const).map((t) => (
                <div key={t} className="mt-3">
                  <p className="text-sm text-crema/75">{t === 'Desayuno' ? 'Desayunos' : 'Comida o cena'}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {paquetes.filter((x) => x.tiempo === t).map((x) => (
                      <button key={x.id} type="button" onClick={() => setPid(x.id)} aria-pressed={x.id === pid} className={opcion(x.id === pid)}>
                        {x.nombre} <span className="precio font-semibold">{pesos(x.precio)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-3">
                <button type="button" onClick={() => setPid('carta')} aria-pressed={pid === 'carta'} className={opcion(pid === 'carta')}>A la carta</button>
              </div>
              {paq && (
                <div className="mt-5 rounded-2xl border border-crema/20 p-4">
                  <p className="font-bold text-crema">El paquete {paq.nombre} incluye, por persona:</p>
                  <ul className="mt-2 grid gap-x-6 gap-y-1 text-[0.95rem] sm:grid-cols-2">
                    {paq.incluye.map((i) => <li key={i} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-oro" aria-hidden="true" />{i}</li>)}
                  </ul>
                </div>
              )}
            </fieldset>
          </div>

          {/* La nota: la cuenta impresa */}
          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <article className="nota rounded-t-xl px-6 pt-6 text-cafe shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]" aria-live="polite" aria-label="La cuenta de tu reunión">
                <div className="border-b border-dashed border-cafe/40 pb-4 text-center">
                  <p className="angosto text-3xl font-extrabold">El Café 57</p>
                  <p className="text-sm">Cuenta estimada de tu reunión</p>
                </div>
                <dl className="space-y-1.5 border-b border-dashed border-cafe/40 py-4 text-[0.95rem]">
                  <div className="flex justify-between gap-4"><dt>Espacio</dt><dd className="text-right font-bold">{e.nombre}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Día</dt><dd className="text-right font-bold">{nombreDia[dia]}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Tiempo</dt><dd className="text-right font-bold">{e.horas} horas</dd></div>
                  <div className="flex justify-between gap-4"><dt>Personas</dt><dd className="precio text-right font-bold">{personas}</dd></div>
                </dl>
                <div className="border-b border-dashed border-cafe/40 py-4">
                  {paq ? (
                    <>
                      <p className="flex items-baseline gap-2 text-[0.95rem]">
                        <span className="min-w-0">{personas} × {paq.nombre}</span>
                        <span className="puntos" aria-hidden="true" />
                        <span className="precio shrink-0">{pesos(paq.precio)} c/u</span>
                      </p>
                      <p className="mt-3 flex items-baseline justify-between gap-4">
                        <span className="font-bold">Total del paquete</span>
                        <span className="angosto precio text-4xl font-extrabold">{pesos(total)}</span>
                      </p>
                    </>
                  ) : (
                    <p className="text-[0.95rem]">A la carta: se cobra lo que pidan del menú.</p>
                  )}
                  <p className="mt-3 flex items-baseline justify-between gap-4 text-[0.95rem]">
                    <span>Consumo mínimo ({nombreDia[dia].toLowerCase()})</span>
                    <span className="precio shrink-0 font-bold">{pesos(minimo)}</span>
                  </p>
                  {paq && (
                    falta <= 0
                      ? <p className="mt-3 rounded-lg bg-hoja px-3 py-2 font-bold text-white">Cubre el consumo mínimo.</p>
                      : <p className="mt-3 rounded-lg bg-oro px-3 py-2 font-bold text-cafe">Faltan {pesos(falta)} para el consumo mínimo de ese día.</p>
                  )}
                </div>
                <ul className="space-y-1 py-4 text-[0.93rem]">
                  {e.reglas.map((r) => <li key={r}>{r}.</li>)}
                </ul>
                <p className="text-[0.8rem] leading-snug text-texto">{eventos.letraChica}</p>
              </article>
              <a href={wa(mensaje)} {...externo} className="btn-oro mt-6 w-full">{Icono.wa} Cotizar por WhatsApp</a>
              <p className="mt-3 text-center text-[0.9rem] text-crema/75">Es una cuenta aproximada con sus precios publicados; la confirmamos por WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Visítanos, pie y barra del celular ----------

function Visitanos() {
  const d = negocio.direccion;
  return (
    <section id="visitanos" className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-5">
        <h2 className="text-[clamp(2.4rem,5vw,4rem)]">Visítanos en la Pitic</h2>
        <dl className="mt-8 space-y-5 text-lg">
          <div><dt className="text-sm">Dirección</dt><dd className="font-semibold text-cafe">{d.calle}, {d.colonia}, {d.cp} {d.ciudad}</dd></div>
          <div><dt className="text-sm">Horario</dt><dd className="font-semibold text-cafe">{negocio.horario.map((h) => `${h.dias}, ${h.horas}`).join('. ')}.</dd></div>
          <div><dt className="text-sm">Teléfono</dt><dd><a href={negocio.tel} className="font-semibold text-cafe underline decoration-oro decoration-2 underline-offset-4">{negocio.telefono}</a></dd></div>
          <div><dt className="text-sm">WhatsApp</dt><dd><a href={negocio.whatsapp} {...externo} className="font-semibold text-cafe underline decoration-oro decoration-2 underline-offset-4">{negocio.whatsappVisible}</a></dd></div>
          <div><dt className="text-sm">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="font-semibold text-cafe underline decoration-oro decoration-2 underline-offset-4">{negocio.correo}</a></dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.mapa} {...externo} className="btn">{Icono.mapa} Cómo llegar</a>
          <a href={OPENTABLE} {...externo} className="btn-linea">{Icono.mesa} Reservar en OpenTable</a>
        </div>
        <p className="mt-8">
          Síguenos en <a href={negocio.instagram} {...externo} className="font-bold text-oro-oscuro underline underline-offset-4">Instagram</a> y <a href={negocio.facebook} {...externo} className="font-bold text-oro-oscuro underline underline-offset-4">Facebook</a>.
        </p>
      </div>
      <a href={negocio.mapa} {...externo} className="group relative block min-w-0 overflow-hidden rounded-[2rem] md:col-span-7" aria-label="Abrir El Café 57 en Google Maps">
        <div className="aspect-[4/3] md:aspect-auto md:h-full"><Img foto={lugar} className="transition-transform duration-500 group-hover:scale-[1.03]" /></div>
        <span className="absolute bottom-4 left-4 rounded-full bg-cafe px-4 py-2 text-sm font-bold text-crema">Ver en Google Maps</span>
      </a>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-cafe pb-28 pt-12 text-crema/80 md:pb-12">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} loading="lazy" className="h-20 w-auto" />
        <div className="text-sm">
          <p>© {new Date().getFullYear()} El Café 57, Cocina Contempo. Hermosillo, Sonora, desde 2005.</p>
          <p className="mt-1"><a href="https://elcafe57.mx/aviso-de-privacidad/" {...externo} className="underline underline-offset-4 hover:text-oro">Aviso de privacidad</a></p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cafe/15 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-2">
        <a href={OPENTABLE} {...externo} className="btn px-3">{Icono.mesa} Reservar</a>
        <a href={negocio.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir a El Café 57 por WhatsApp">{Icono.wa}</a>
        <a href={negocio.tel} className="btn-linea px-0" aria-label="Llamar a El Café 57">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar a El Café 57 en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Ir al menú</a>
      <Encabezado />
      <main>
        <Portada />
        <Nosotros />
        <Menu />
        <Lunch />
        <ParaLlevar />
        <CuentaReunion />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
