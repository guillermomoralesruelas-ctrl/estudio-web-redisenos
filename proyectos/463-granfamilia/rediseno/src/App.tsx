import { useEffect, useMemo, useState } from 'react';
import { menus, type Menu, type Renglon } from './data/carta';
import {
  barbacoa, comidaCorrida, dias, esencia, especialesFinde, favoritos, fotos, negocio, reservarGeneral, wa,
  type Favorito, type Foto,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const hora = (h: number) => (h === 12 ? '12:00 p.m.' : h < 12 ? `${h}:00 a.m.` : `${h - 12}:00 p.m.`);

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
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

// ---------- Hora de San Luis Potosí ----------

type Ahora = { dia: number; hora: number; minuto: number; y: number; m: number; d: number };
function ahoraSLP(): Ahora {
  const partes = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/Mexico_City', weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map((p) => [p.type, p.value]),
  );
  const orden = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return { dia: orden.indexOf(partes.weekday), hora: Number(partes.hour), minuto: Number(partes.minute), y: Number(partes.year), m: Number(partes.month), d: Number(partes.day) };
}

/** Días que faltan para el próximo `dia` (0 = hoy, salvo que hoy ya cerraron). */
function faltan(dia: number, ahora: Ahora) {
  const n = (dia - ahora.dia + 7) % 7;
  return n === 0 && ahora.hora >= negocio.cierra ? 7 : n;
}
function fechaTexto(ahora: Ahora, masDias: number) {
  const f = new Date(Date.UTC(ahora.y, ahora.m - 1, ahora.d + masDias, 12));
  return new Intl.DateTimeFormat('es-MX', { timeZone: 'UTC', day: 'numeric', month: 'long' }).format(f);
}

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#favoritos', label: 'Favoritos' },
  { href: '#que-dia', label: '¿Qué día vienes?' },
  { href: '#menu', label: 'Menú' },
  { href: '#visitanos', label: 'Visítanos' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-manta/95 backdrop-blur">
      <div className="contenedor flex h-[4.75rem] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="Gran Familia, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-14 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-bold text-tinta hover:text-rojo">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={reservarGeneral} {...externo} className="btn hidden sm:inline-flex">{Icono.wa} Reservar mesa</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-tinta/25 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="titulo border-b border-tinta/10 py-3 text-2xl text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos = [
    { t: 'Abierto todos los días', d: 'De 8:00 a.m. a 6:00 p.m.' },
    { t: 'Comida corrida', d: `Lunes a viernes, de 1:00 a 5:00 p.m., ${pesos(comidaCorrida.precio)}` },
    { t: 'Barbacoa de borrego', d: 'Sábados y domingos, hasta agotar existencia' },
  ];
  return (
    <section id="inicio" className="pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="contenedor grid items-center gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <p className="titulo text-xl italic text-rojo">Cocina potosina de rancho</p>
          <h1 className="titulo mt-2 text-[clamp(3.4rem,9vw,6.6rem)] leading-[0.92]">Gran Familia</h1>
          <p className="titulo mt-6 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight text-tinta">{negocio.lema}</p>
          <p className="mt-4 max-w-lg text-lg">{negocio.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={reservarGeneral} {...externo} className="btn">{Icono.wa} Reservar mesa</a>
            <a href="#menu" className="btn-linea">Ver el menú</a>
          </div>
          <p className="mt-5 text-[0.98rem]">{negocio.calle}, {negocio.colonia}, {negocio.ciudad}</p>
        </div>
        <div className="relative min-w-0 md:col-span-6">
          <div className="aspect-[1000/1013] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-30px_rgb(28_25_23/0.6)]"><Img foto={fotos.mesa} eager /></div>
        </div>
      </div>
      <dl className="contenedor mt-12 grid gap-6 border-t border-tinta/15 pt-8 sm:grid-cols-3">
        {datos.map((x) => (
          <div key={x.t}>
            <dt className="titulo text-xl text-tinta">{x.t}</dt>
            <dd className="mt-1">{x.d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// ---------- Favoritos de la casa ----------

function ListaFavoritos({ lista }: { lista: Favorito[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {lista.map((f) => (
        <li key={f.nombre}>
          <div className="flex items-baseline gap-2">
            <span className="titulo text-xl text-tinta">{f.nombre}</span>
            <span className="puntos" aria-hidden="true" />
            <span className="precio font-bold text-rojo">{pesos(f.precio)}</span>
          </div>
          <p className="text-[0.98rem]">{f.texto}</p>
        </li>
      ))}
    </ul>
  );
}

function Favoritos() {
  return (
    <section id="favoritos" className="bg-maiz py-20 md:py-24">
      <div className="contenedor">
        <h2 className="titulo max-w-2xl text-[clamp(2.3rem,5vw,3.8rem)]">Dos momentos, el mismo sazón de hogar.</h2>
        <p className="mt-4 max-w-2xl text-lg">Desde el aroma del café de olla por la mañana hasta nuestros guisos tradicionales por la tarde. Elige tu momento favorito.</p>
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 row-span-2 aspect-square overflow-hidden rounded-2xl"><Img foto={fotos.hotcakes} /></div>
              <div className="col-span-2 aspect-square overflow-hidden rounded-2xl"><Img foto={fotos.chilaquiles} /></div>
              <div className="col-span-2 aspect-square overflow-hidden rounded-2xl"><Img foto={fotos.omelette} className="object-[70%_50%]" /></div>
            </div>
            <h3 className="titulo mt-8 text-3xl">De la mañana</h3>
            <ListaFavoritos lista={favoritos.manana} />
            <a href="#menu" onClick={() => elegirMenu('manana')} className="enlace mt-6 inline-block">Ver todo el menú de mañana</a>
          </div>
          <div className="min-w-0">
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 aspect-[3/2] overflow-hidden rounded-2xl"><Img foto={fotos.cecina} /></div>
              <div className="col-span-2 aspect-[4/3] self-end overflow-hidden rounded-2xl"><Img foto={fotos.ensaladas} /></div>
            </div>
            <h3 className="titulo mt-8 text-3xl">De la tarde</h3>
            <ListaFavoritos lista={favoritos.tarde} />
            <a href="#menu" onClick={() => elegirMenu('tarde')} className="enlace mt-6 inline-block">Ver todo el menú de tarde</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Las pestañas del menú escuchan este evento para abrir la mañana o la tarde desde los enlaces de Favoritos.
function elegirMenu(id: Menu['id']) {
  window.dispatchEvent(new CustomEvent('elegir-menu', { detail: id }));
}

// ---------- Elemento memorable: "¿Qué día vienes?" ----------

function PlatoDia({ finde }: { finde: boolean }) {
  return (
    <svg viewBox="0 0 120 120" className="block w-full" aria-hidden="true">
      <circle cx="60" cy="63" r="54" fill="#1c1917" opacity="0.18" />
      <circle cx="60" cy="60" r="54" fill="#fffdf8" />
      <circle cx="60" cy="60" r="41" fill="none" stroke="#e8dfcd" strokeWidth="1.5" />
      {finde ? (
        <g>
          {/* Dos tacos de barbacoa y su salsa */}
          <path d="M30 70a24 24 0 0 1 48 0Z" fill="#e9c98a" />
          <path d="M35 69c4-9 12-13 19-13s14 4 19 13Z" fill="#7a3b1f" />
          <path d="M44 80a22 22 0 0 1 44 0Z" fill="#efd39b" />
          <path d="M49 79c4-8 10-11 17-11s13 3 17 11Z" fill="#8a4524" />
          <circle cx="46" cy="42" r="10" fill="#b91c1c" /><circle cx="46" cy="42" r="6.5" fill="#d84a2a" />
          <circle cx="76" cy="40" r="3" fill="#166534" /><circle cx="82" cy="45" r="2.5" fill="#166534" />
        </g>
      ) : (
        <g>
          {/* Comida corrida: sopa, plato fuerte, agua fresca y postre */}
          <circle cx="42" cy="44" r="13" fill="#f3e7cf" stroke="#d9c9a8" /><circle cx="42" cy="44" r="9" fill="#d9772b" />
          <circle cx="78" cy="42" r="9" fill="#fce7ec" stroke="#e8b9c4" /><circle cx="78" cy="42" r="6" fill="#e58aa0" opacity="0.8" />
          <ellipse cx="60" cy="72" rx="23" ry="16" fill="#f1e2c4" />
          <ellipse cx="54" cy="72" rx="12" ry="9" fill="#9b3a1d" />
          <ellipse cx="71" cy="74" rx="8" ry="6" fill="#e3a03a" />
          <circle cx="86" cy="70" r="7" fill="#f2c14e" /><circle cx="86" cy="70" r="3.2" fill="#b86a1c" />
        </g>
      )}
    </svg>
  );
}

function BarraDelDia({ finde, ahora, esHoy }: { finde: boolean; ahora: Ahora; esHoy: boolean }) {
  const inicio = negocio.abre, fin = negocio.cierra, total = fin - inicio;
  const pct = (h: number) => `${((h - inicio) / total) * 100}%`;
  const hAhora = ahora.hora + ahora.minuto / 60;
  const abiertoAhora = esHoy && hAhora >= inicio && hAhora < fin;
  return (
    <div className="mt-6">
      <div className="relative h-12 rounded-xl bg-maiz">
        {finde ? (
          <div className="absolute inset-y-0 left-0 w-full rounded-xl" style={{ background: 'linear-gradient(90deg, rgb(22 101 52 / 0.85), rgb(22 101 52 / 0.55) 55%, rgb(22 101 52 / 0.1))' }}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[0.9rem] font-bold text-white">Barbacoa, hasta agotar</span>
          </div>
        ) : (
          <div className="absolute inset-y-0 rounded-lg bg-rojo" style={{ left: pct(comidaCorrida.desde), width: `${((comidaCorrida.hasta - comidaCorrida.desde) / total) * 100}%` }}>
            <span className="absolute inset-0 grid place-items-center text-[0.85rem] font-bold text-white sm:text-[0.9rem]">Comida corrida</span>
          </div>
        )}
        {abiertoAhora && (
          <div className="absolute -top-2 bottom-[-0.5rem] w-0.5 bg-tinta" style={{ left: pct(hAhora) }}>
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-tinta px-2 py-0.5 text-[0.75rem] font-bold text-manta">Ahora</span>
          </div>
        )}
      </div>
      <div className="relative mt-2 h-5 text-[0.8rem] text-texto" aria-hidden="true">
        {[8, 10, 12, 14, 16, 18].map((h) => (
          <span key={h} className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full" style={{ left: pct(h) }}>{h}:00</span>
        ))}
      </div>
      {esHoy && <p className="mt-2 text-[0.95rem] font-bold text-verde">{abiertoAhora ? `Abierto ahora, hasta las ${hora(fin)}` : ahora.hora < inicio ? `Hoy abre a las ${hora(inicio)}` : 'Hoy ya cerró; abre mañana a las 8:00 a.m.'}</p>}
    </div>
  );
}

function QueDia() {
  const ahora = useMemo(ahoraSLP, []);
  const hoy = ahora.dia >= 0 ? ahora.dia : 0;
  const [sel, setSel] = useState(hoy);
  const dia = dias[sel];
  const esHoy = sel === hoy;
  const n = faltan(sel, ahora);
  const fecha = fechaTexto(ahora, n);
  const cuando = n === 0 ? `hoy ${dia.nombre} ${fecha}` : `el ${dia.nombre} ${fecha}`;
  const mensaje = `Hola, Gran Familia. Quiero reservar mesa para ${cuando}.${dia.finde ? ' Vamos por la barbacoa de borrego.' : ''} Somos __ personas y llegaríamos a las __.`;

  return (
    <section id="que-dia" className="py-20 md:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="titulo text-[clamp(2.3rem,5vw,3.8rem)]">¿Qué día vienes?</h2>
          <p className="mt-4 text-lg">Abrimos todos los días, pero cada día tiene lo suyo: entre semana hay comida corrida por la tarde y el fin de semana, barbacoa de borrego hasta que se acaba. Elige tu día y aparta tu mesa.</p>
        </div>
        <div className="mantel mt-10 rounded-[2rem] p-4 sm:p-8">
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7 sm:gap-4" role="group" aria-label="Días de la semana">
            {dias.map((d, i) => (
              <button key={d.id} type="button" onClick={() => setSel(i)} aria-pressed={sel === i}
                className={`plato-dia rounded-2xl p-1.5 text-center outline-offset-2 ${sel === i ? 'bg-white shadow-lg ring-4 ring-tinta' : 'bg-white/0'}`}>
                <PlatoDia finde={d.finde} />
                <span className={`mt-1 block rounded-full px-1 py-0.5 text-[0.95rem] font-bold ${sel === i ? 'text-tinta' : 'bg-white text-tinta'}`}>
                  {d.corto}{i === hoy && <span className="block text-[0.8rem] leading-none text-verde">Hoy</span>}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-white p-6 shadow-xl sm:p-9" aria-live="polite">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
              <div className="min-w-0">
                <h3 className="titulo text-[clamp(2rem,4vw,2.8rem)] capitalize">{dia.nombre}</h3>
                <p className="mt-1 text-lg">Abierto de 8:00 a.m. a 6:00 p.m.</p>
                <BarraDelDia finde={dia.finde} ahora={ahora} esHoy={esHoy} />
                <p className="mt-6 text-[0.98rem]">Además, nuestros dos menús: <a href="#menu" onClick={() => elegirMenu('manana')} className="enlace">el de la mañana</a> y <a href="#menu" onClick={() => elegirMenu('tarde')} className="enlace">el de la tarde</a>.</p>
              </div>
              <div className="min-w-0 lg:border-l lg:border-tinta/10 lg:pl-12">
                {dia.finde ? (
                  <>
                    <h4 className="titulo text-2xl text-verde">{barbacoa.titulo}</h4>
                    <p className="mt-1">{barbacoa.texto}</p>
                    <ul className="mt-4 space-y-2">
                      {especialesFinde.map((e) => (
                        <li key={e.nombre} className="flex items-baseline gap-2">
                          <span className="font-bold text-tinta">{e.nombre}{e.medida && <span className="font-normal"> ({e.medida})</span>}</span>
                          <span className="puntos" aria-hidden="true" />
                          <span className="precio font-bold text-rojo">{pesos(e.precio)}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h4 className="titulo text-2xl text-rojo">Comida corrida, {pesos(comidaCorrida.precio)}</h4>
                    <p className="mt-1">De 1:00 a 5:00 p.m. Sabor casero diario.</p>
                    <ol className="mt-4 grid grid-cols-2 gap-2">
                      {comidaCorrida.tiempos.map((t) => <li key={t} className="rounded-xl bg-maiz px-3 py-2 font-bold text-tinta">{t}</li>)}
                    </ol>
                    {dia.id === 'viernes' && <p className="mt-4 text-[0.95rem]">Y mañana sábado empieza la barbacoa de borrego.</p>}
                  </>
                )}
                <a href={wa(mensaje)} {...externo} className="btn mt-7 w-full sm:w-auto">{Icono.wa} Reservar para {n === 0 ? 'hoy' : `el ${dia.nombre} ${fecha}`}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Menú completo ----------

function Linea({ r }: { r: Renglon }) {
  return (
    <li className="py-2">
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-tinta">{r.n}</span>
        <span className="puntos" aria-hidden="true" />
        {r.p && <span className="precio shrink-0 font-bold text-rojo">{r.p}</span>}
      </div>
      {r.d && <p className="text-[0.96rem]">{r.d}</p>}
    </li>
  );
}

function MenuCompleto() {
  const [activo, setActivo] = useState<Menu['id']>(() => (ahoraSLP().hora >= 13 ? 'tarde' : 'manana'));
  useEffect(() => {
    const f = (e: Event) => setActivo((e as CustomEvent<Menu['id']>).detail);
    window.addEventListener('elegir-menu', f);
    return () => window.removeEventListener('elegir-menu', f);
  }, []);
  const menu = menus.find((m) => m.id === activo)!;
  return (
    <section id="menu" className="bg-maiz py-20 md:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="titulo text-[clamp(2.3rem,5vw,3.8rem)]">El menú</h2>
            <p className="mt-3 max-w-xl text-lg">Con todos sus precios. Hay dos: el de la mañana y el de la tarde.</p>
          </div>
          <div role="tablist" aria-label="Menús" className="flex rounded-full bg-white p-1.5 shadow-sm">
            {menus.map((m) => (
              <button key={m.id} id={`tab-${m.id}`} role="tab" type="button" aria-selected={activo === m.id} aria-controls={`panel-${m.id}`} onClick={() => setActivo(m.id)}
                className={`rounded-full px-6 py-2.5 font-bold transition-colors ${activo === m.id ? 'bg-tinta text-manta' : 'text-tinta hover:text-rojo'}`}>
                Menú {m.nombre.toLowerCase()}
              </button>
            ))}
          </div>
        </div>

        <div id={`panel-${menu.id}`} role="tabpanel" aria-labelledby={`tab-${menu.id}`} className="mt-10 rounded-3xl bg-manta p-6 sm:p-10">
          <p className="titulo text-lg italic text-rojo">{menu.lema}</p>
          <h3 className="titulo mt-1 text-[clamp(1.7rem,3.5vw,2.4rem)]">{menu.titulo}</h3>
          <div className="mt-8 gap-12 lg:columns-2">
            {menu.secciones.map((s) => (
              <div key={s.id} id={s.id === 'fin-de-semana' ? `barbacoa-${menu.id}` : undefined} className="mb-10 break-inside-avoid">
                <h4 className="titulo border-b-2 border-tinta pb-1 text-2xl">{s.titulo}</h4>
                {s.intro && <p className="mt-2 font-bold text-verde">{s.intro}</p>}
                <ul className="mt-1">{s.renglones.map((r) => <Linea key={r.n} r={r} />)}</ul>
                {s.opciones?.map((o) => (
                  <div key={o.titulo} className="mt-2">
                    <p className="font-bold text-tinta">{o.titulo}:</p>
                    <p>{o.lista.join(', ')}.</p>
                  </div>
                ))}
                {s.nota && <p className="mt-2 text-[0.95rem] italic text-verde">{s.nota}</p>}
              </div>
            ))}
          </div>
          <p className="border-t border-tinta/15 pt-4 text-[0.95rem]">{menu.pie.join(' ')}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Nuestra esencia y visítanos ----------

function Esencia() {
  return (
    <section id="nosotros" className="py-20 md:py-24">
      <div className="contenedor grid items-center gap-10 md:grid-cols-12">
        <div className="aspect-square min-w-0 overflow-hidden rounded-[2rem] md:col-span-5"><Img foto={fotos.corrida} /></div>
        <div className="min-w-0 md:col-span-6 md:col-start-7">
          <h2 className="titulo text-[clamp(2.3rem,5vw,3.6rem)]">{esencia.titulo}</h2>
          {esencia.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg">{p}</p>)}
          <p className="titulo mt-6 text-xl italic text-rojo">{esencia.firma}</p>
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="oscuro bg-tinta py-20 text-manta md:py-24">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="titulo text-[clamp(2.3rem,5vw,3.8rem)] text-manta">Sé parte de la familia.</h2>
          <p className="mt-4 max-w-md text-lg text-manta/90">Aparta tu mesa por WhatsApp o llámanos.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={reservarGeneral} {...externo} className="btn">{Icono.wa} Reservar mesa</a>
            <a href={`tel:${negocio.tel}`} className="btn-blanco">{Icono.tel} Llamar ahora</a>
          </div>
        </div>
        <dl className="grid min-w-0 gap-7 sm:grid-cols-2">
          <div>
            <dt className="titulo text-xl text-white">Visítanos</dt>
            <dd className="mt-1 text-manta/90">{negocio.calle}<br />{negocio.colonia}<br />{negocio.ciudad}</dd>
            <dd className="mt-3"><a href={negocio.mapa} {...externo} className="inline-flex items-center gap-2 font-bold text-white underline decoration-white/50 decoration-2 underline-offset-4">{Icono.mapa} Cómo llegar en Google Maps</a></dd>
          </div>
          <div>
            <dt className="titulo text-xl text-white">Horario</dt>
            <dd className="mt-1 text-manta/90">{negocio.horario}</dd>
            <dd className="mt-1 text-manta/90">Comida corrida: lunes a viernes, de 1:00 a 5:00 p.m.</dd>
          </div>
          <div>
            <dt className="titulo text-xl text-white">Teléfono y WhatsApp</dt>
            <dd className="mt-1"><a href={`tel:${negocio.tel}`} className="precio font-bold text-white underline decoration-white/50 underline-offset-4">{negocio.telefono}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 bg-tinta pb-28 pt-12 text-manta/85 lg:pb-12">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img src={negocio.logoBlanco.src} alt={negocio.logoBlanco.alt} width={negocio.logoBlanco.w} height={negocio.logoBlanco.h} loading="lazy" className="h-16 w-auto" />
          <p className="max-w-xs text-[0.95rem]">{negocio.pie}</p>
        </div>
        <p className="text-[0.9rem]">© {new Date().getFullYear()} Gran Familia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-tinta/15 bg-manta shadow-[0_-8px_24px_-12px_rgb(0_0_0/0.3)] lg:hidden" aria-label="Acciones rápidas">
      <a href={reservarGeneral} {...externo} className="flex flex-col items-center gap-0.5 bg-rojo py-2.5 text-[0.85rem] font-bold text-white">{Icono.wa} Reservar</a>
      <a href={`tel:${negocio.tel}`} className="flex flex-col items-center gap-0.5 py-2.5 text-[0.85rem] font-bold text-tinta" aria-label="Llamar a Gran Familia">{Icono.tel} Llamar</a>
      <a href={negocio.mapa} {...externo} className="flex flex-col items-center gap-0.5 py-2.5 text-[0.85rem] font-bold text-tinta" aria-label="Cómo llegar a Gran Familia en Google Maps">{Icono.mapa} Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Ir al menú</a>
      <Encabezado />
      <main>
        <Portada />
        <Favoritos />
        <QueDia />
        <MenuCompleto />
        <Esencia />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
