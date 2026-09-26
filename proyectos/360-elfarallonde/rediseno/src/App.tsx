import { useState } from 'react';
import {
  bascula, foto, galeria, historia, mesa, negocio, opiniones, saludo, wa, type Foto, type Pesable,
} from './data/content';
import menu from './data/menu.json';

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
};

function Img({ foto: fo, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={fo.src} alt={fo.alt} width={fo.w} height={fo.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;
const telPrincipal = negocio.telefonos[0];

// ---------- Encabezado y portada ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#zarandeados', label: 'Zarandeados' },
    { href: '#menu', label: 'Menú' },
    { href: '#historia', label: 'Historia' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#visitanos', label: 'Visítanos' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="El Farallón de Tepic, ir al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="size-11 md:size-14" />
          <span className="font-serif text-xl font-bold leading-none text-carbon md:text-2xl">El Farallón <span className="text-brasa">de Tepic</span></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-bold text-carbon/80 hover:text-brasa">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={telPrincipal.href} className="btn hidden sm:inline-flex">{Icono.tel} {telPrincipal.visible}</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-carbon/20 text-carbon lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-carbon/10 bg-crema lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-carbon/10 py-3 font-serif text-2xl font-bold text-carbon">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos = [
    ['Horario', negocio.horarioCorto],
    ['Dónde', `${negocio.direccion.calle}, Chapalita, Zapopan`],
    ['Servicio a domicilio', 'Sí, llámanos o escríbenos'],
    ['Desde', `${negocio.desde}, en Tepic`],
  ];
  return (
    <section id="inicio" className="contenedor grid gap-10 pb-16 pt-10 md:grid-cols-12 md:items-center md:gap-12 md:pb-24 md:pt-14">
      <div className="min-w-0 md:col-span-7">
        <p className="text-lg font-bold text-brasa">{negocio.lema}</p>
        <h1 className="mt-3 text-[clamp(3.3rem,8.4vw,6.6rem)]">El Farallón <span className="italic text-brasa">de Tepic</span></h1>
        <p className="mt-5 max-w-xl text-xl text-carbon">{negocio.frase}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.whatsapp} {...externo} className="btn">{Icono.wa} Reservar por WhatsApp</a>
          <a href="#menu" className="btn-linea">Ver el menú con precios</a>
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-carbon/15 pt-6">
          {datos.map(([t, d]) => (
            <div key={t} className="min-w-0">
              <dt className="text-sm">{t}</dt>
              <dd className="font-bold text-carbon">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative min-w-0 md:col-span-5">
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Img foto={negocio.hero} eager />
        </div>
        <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h}
          className="absolute -bottom-6 -left-4 size-28 drop-shadow-lg md:-left-10 md:size-36" />
      </div>
    </section>
  );
}

// ---------- Elemento memorable: la báscula del zarandeado ----------

const MAX_KG = 3;
const kgTexto = (kg: number) => {
  const ent = Math.floor(kg);
  const frac = ({ 0: '', 0.25: '¼', 0.5: '½', 0.75: '¾' } as Record<number, string>)[kg - ent] ?? '';
  return `${ent > 0 ? ent : ''}${frac} kg`;
};
const pesoTexto = (p: Pesable, kg: number) => (p.modo === 'kilo' ? kgTexto(kg) : `${p.gramos} g`);

function Caratula({ kg }: { kg: number }) {
  const cx = 160, cy = 150, r = 104;
  const ang = (k: number) => (k / MAX_KG) * 270 - 135;
  const punto = (k: number, rr: number) => {
    const a = ((ang(k) - 90) * Math.PI) / 180;
    return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)];
  };
  const marcas = Array.from({ length: MAX_KG * 4 + 1 }, (_, i) => i / 4);
  return (
    <svg viewBox="0 0 320 300" className="w-full" aria-hidden="true">
      {/* cuerpo de la báscula */}
      <path d="M40 60 Q40 36 64 36 H256 Q280 36 280 60 V250 Q280 286 244 286 H76 Q40 286 40 250 Z" fill="#d9a640" />
      <path d="M52 64 Q52 48 68 48 H252 Q268 48 268 64 V246 Q268 274 240 274 H80 Q52 274 52 246 Z" fill="#c4902c" />
      <circle cx={cx} cy={cy} r={r + 10} fill="#211a16" />
      <circle cx={cx} cy={cy} r={r} fill="#f6efe4" />
      {marcas.map((k) => {
        const mayor = Number.isInteger(k);
        const [x1, y1] = punto(k, r - 4);
        const [x2, y2] = punto(k, r - (mayor ? 20 : 11));
        return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={mayor ? '#211a16' : '#4a3f38'} strokeWidth={mayor ? 3 : 1.5} strokeLinecap="round" />;
      })}
      {[0, 1, 2, 3].map((k) => {
        const [x, y] = punto(k, r - 36);
        return <text key={k} x={x} y={y + 7} textAnchor="middle" fontFamily="Lato, sans-serif" fontWeight="700" fontSize="20" fill="#211a16">{k}</text>;
      })}
      <text x={cx} y={cy + 52} textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontWeight="700" fontSize="22" fill="#a34b00">kg</text>
      <g className="aguja" style={{ transform: `rotate(${ang(Math.min(kg, MAX_KG))}deg)`, transformOrigin: `${cx}px ${cy}px` }}>
        <path d={`M${cx - 4} ${cy + 16} L${cx} ${cy - r + 14} L${cx + 4} ${cy + 16} Z`} fill="#a34b00" />
      </g>
      <circle cx={cx} cy={cy} r="9" fill="#211a16" />
      <circle cx={cx} cy={cy} r="3.5" fill="#d9a640" />
    </svg>
  );
}

function Bascula() {
  const [id, setId] = useState(bascula[0].id);
  const [kg, setKg] = useState(1.5);
  const [lugar, setLugar] = useState<'aca' | 'domicilio'>('aca');
  const p = bascula.find((b) => b.id === id)!;
  const pesoKg = p.modo === 'kilo' ? kg : (p.gramos ?? 0) / 1000;
  const total = p.modo === 'kilo' ? p.precio * kg : p.precio;
  const detalle = p.modo === 'kilo'
    ? `${kgTexto(kg)} a ${pesos(p.precio)} el kilo`
    : `Porción de ${p.gramos} g, precio del menú`;
  const mensaje = `${saludo} Me interesa ${p.modo === 'kilo' ? `un ${p.nombre} de unos ${kgTexto(kg)} (según su menú, ${pesos(p.precio)} el kilo: unos ${pesos(total)})` : `el ${p.nombre} (${p.gramos} g, ${pesos(p.precio)} según su menú)`}, ${lugar === 'aca' ? 'para comer en el restaurante. ¿Me ayudan a reservar una mesa?' : 'con servicio a domicilio. ¿Me confirman si llegan a mi zona?'}`;

  return (
    <section id="zarandeados" className="oscuro bg-carbon text-white">
      <div className="contenedor py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)] text-white">Los zarandeados, <span className="italic text-oro">al peso</span></h2>
          <p className="mt-4 text-lg text-white/90">El pescado zarandeado se cobra por kilo. Elige el platillo y cuánto quieres: la báscula te dice cuánto sale con los precios de nuestro menú.</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="mx-auto w-full max-w-[15rem] min-w-0 sm:max-w-sm md:col-span-5">
            <div className="relative z-10 mx-auto -mb-6 aspect-square w-[72%] overflow-hidden rounded-full border-[10px] border-[#c4902c] bg-papel shadow-2xl">
              {p.foto ? <Img foto={p.foto} /> : (
                <p className="grid size-full place-items-center p-6 text-center font-serif text-2xl font-bold text-carbon">{p.nombre}</p>
              )}
            </div>
            <Caratula kg={pesoKg} />
          </div>

          <div className="min-w-0 md:col-span-7">
            <fieldset>
              <legend className="font-bold text-oro">¿Qué se pone en la báscula?</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {bascula.map((b) => (
                  <button key={b.id} type="button" aria-pressed={b.id === id} onClick={() => setId(b.id)}
                    className={`min-w-0 rounded-2xl border px-3 py-3 text-left sm:px-4 transition-colors ${b.id === id ? 'border-oro bg-oro text-carbon' : 'border-white/25 text-white hover:border-white/60'}`}>
                    <span className="block font-serif text-xl font-bold leading-tight sm:text-2xl">{b.nombre}</span>
                    <span className="precio text-sm">{b.modo === 'kilo' ? `${pesos(b.precio)} el kilo` : `${b.gramos} g, ${pesos(b.precio)}`}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-2 sm:items-end">
              <div className="min-w-0">
                <p className="text-sm text-white/85">{p.modo === 'kilo' ? '¿Cuánto quieres?' : 'Viene en porción de'}</p>
                {p.modo === 'kilo' ? (
                  <div className="mt-2 flex items-center gap-3">
                    <button type="button" onClick={() => setKg((k) => Math.max(0.5, k - 0.25))} disabled={kg <= 0.5}
                      className="grid size-12 place-items-center rounded-full border border-white/40 text-2xl font-bold disabled:opacity-40" aria-label="Un cuarto de kilo menos">−</button>
                    <span className="precio min-w-[5ch] text-center text-3xl font-bold" aria-live="polite">{kgTexto(kg)}</span>
                    <button type="button" onClick={() => setKg((k) => Math.min(MAX_KG, k + 0.25))} disabled={kg >= MAX_KG}
                      className="grid size-12 place-items-center rounded-full border border-white/40 text-2xl font-bold disabled:opacity-40" aria-label="Un cuarto de kilo más">+</button>
                  </div>
                ) : (
                  <p className="mt-2 text-3xl font-bold">{pesoTexto(p, kg)}</p>
                )}
              </div>
              <div className="min-w-0" aria-live="polite">
                <p className="text-sm text-white/85">{detalle}</p>
                <p className="precio mt-1 font-serif text-5xl font-bold text-oro">{p.modo === 'kilo' ? '≈ ' : ''}{pesos(total)}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="¿Dónde lo quieres?">
              {([['aca', 'Para comer allá'], ['domicilio', 'A domicilio']] as const).map(([v, t]) => (
                <button key={v} type="button" aria-pressed={lugar === v} onClick={() => setLugar(v)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold ${lugar === v ? 'border-white bg-white text-carbon' : 'border-white/30 text-white hover:border-white/70'}`}>{t}</button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={wa(mensaje)} {...externo} className="btn">{Icono.wa} Pedirlo por WhatsApp</a>
              <a href={telPrincipal.href} className="btn-claro">{Icono.tel} Llamar</a>
            </div>
            <p className="mt-5 max-w-xl text-sm text-white/80">Total aproximado con los precios publicados en nuestro menú. En los platillos por kilo, la cuenta depende del peso de la pieza.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Historia ----------

function Historia() {
  return (
    <section id="historia" className="contenedor py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="order-2 min-w-0 md:order-none md:col-span-5">
          <div className="aspect-square overflow-hidden rounded-[2rem]"><Img foto={historia.foto} /></div>
          <p className="mt-6 font-serif text-3xl font-bold leading-tight text-carbon">{historia.promesa}</p>
        </div>
        <div className="min-w-0 md:col-span-7">
          <h2 className="text-[clamp(2.6rem,5vw,4.2rem)]">{historia.titulo}, <span className="italic text-brasa">desde {negocio.desde}</span></h2>
          <div className="mt-6 space-y-5 text-lg">
            {historia.parrafos.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
          <dl className="mt-8 space-y-3 border-l-4 border-naranja pl-5">
            {historia.valores.map((v) => (
              <div key={v.t}><dt className="inline font-bold text-carbon">{v.t}. </dt><dd className="inline">{v.d}</dd></div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-12">
        <h3 className="text-3xl md:col-span-12">Nuestros estandartes</h3>
        {historia.estandartes.map((e) => (
          <figure key={e.nombre} className="min-w-0 md:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem]"><Img foto={e.foto} /></div>
            <figcaption className="mt-3 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-carbon">{e.nombre}</span>
              {e.nota && <span className="text-sm">{e.nota}</span>}
              <span className="puntos" aria-hidden="true" />
              <span className="precio font-bold text-brasa">{e.precio}</span>
            </figcaption>
          </figure>
        ))}
        <a href="#zarandeados" className="group flex min-w-0 flex-col justify-end rounded-[1.5rem] bg-naranja p-6 text-carbon md:col-span-2">
          <span className="font-serif text-2xl font-bold leading-tight">Y el Pescado Zarandeado</span>
          <span className="mt-2 text-sm font-bold underline underline-offset-4 group-hover:no-underline">Pésalo en la báscula</span>
        </a>
      </div>
    </section>
  );
}

// ---------- Menú ----------

// En el menú original, "(3)" junto a un platillo indica cuántas piezas trae la orden.
const notaVisible = (n: string) => (/^\(\d+\)$/.test(n) ? `Orden de ${n.slice(1, -1)} ${n === "(1)" ? "pieza" : "piezas"}` : n);
type Platillo = { nombre: string; nota?: string; precio: string; foto?: string };

function Menu() {
  const [tab, setTab] = useState(menu.pestanas[0].id);
  const actual = menu.pestanas.find((p) => p.id === tab)!;
  return (
    <section id="menu" className="bg-papel">
      <div className="contenedor py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.6rem,5vw,4.2rem)]">Nuestro menú</h2>
            <p className="mt-3 text-lg">Todos los platillos con su precio, sin descargar nada.</p>
          </div>
          <a href={negocio.menuPdf} {...externo} className="font-bold text-brasa underline underline-offset-4">Menú 2025 en PDF</a>
        </div>

        <div role="tablist" aria-label="Secciones del menú" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {menu.pestanas.map((p) => (
            <button key={p.id} id={`tab-${p.id}`} role="tab" type="button" aria-selected={p.id === tab} aria-controls="panel-menu" onClick={() => setTab(p.id)}
              className={`shrink-0 rounded-full border px-4 py-2 font-bold transition-colors ${p.id === tab ? 'border-carbon bg-carbon text-white' : 'border-carbon/25 text-carbon hover:border-carbon'}`}>{p.nombre}</button>
          ))}
        </div>

        <div id="panel-menu" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-8 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {actual.grupos.map((g) => (
            <div key={g.titulo} className="min-w-0">
              <h3 className="text-3xl text-brasa">{g.titulo}</h3>
              <ul className="mt-4 divide-y divide-carbon/10">
                {(g.platillos as Platillo[]).map((pl) => (
                  <li key={pl.nombre} className="flex items-center gap-4 py-3">
                    {pl.foto && (
                      <img src={foto(pl.foto, 120, 120, '').src} alt={`${pl.nombre}`} width="120" height="120" loading="lazy" decoding="async" className="size-16 shrink-0 rounded-xl object-cover" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="font-bold text-carbon">{pl.nombre}</span>
                        <span className="puntos" aria-hidden="true" />
                        <span className="precio shrink-0 text-right font-bold text-carbon">{pl.precio}</span>
                      </div>
                      {pl.nota && <p className="text-sm">{notaVisible(pl.nota)}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm">Precios en pesos mexicanos, tal como aparecen en nuestro menú.</p>
      </div>
    </section>
  );
}

// ---------- Opiniones, galería, contacto ----------

function Opiniones() {
  const [primera, ...resto] = opiniones;
  return (
    <section id="opiniones" className="contenedor py-20 md:py-28">
      <h2 className="text-[clamp(2.6rem,5vw,4.2rem)]">Lo que dicen nuestros clientes</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <figure className="min-w-0 md:col-span-7">
          <blockquote className="font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold italic leading-snug text-carbon">“{primera.texto}”</blockquote>
          <figcaption className="mt-4 font-bold text-brasa">{primera.autor}</figcaption>
        </figure>
        <div className="grid min-w-0 content-start gap-8 md:col-span-5">
          {resto.map((o) => (
            <figure key={o.autor} className="border-l-4 border-naranja pl-5">
              <blockquote className="text-lg">“{o.texto}”</blockquote>
              <figcaption className="mt-2 font-bold text-carbon">{o.autor}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section aria-labelledby="galeria-titulo" className="contenedor pb-20 md:pb-28">
      <h2 id="galeria-titulo" className="text-[clamp(2.2rem,4vw,3.4rem)]">De la cocina a la mesa</h2>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {galeria.map((g) => (
          <div key={g.src} className="aspect-[4/3] min-w-0 overflow-hidden rounded-2xl"><Img foto={g} /></div>
        ))}
      </div>
    </section>
  );
}

function Visitanos() {
  const d = negocio.direccion;
  return (
    <section id="visitanos" className="oscuro bg-carbon text-white">
      <a href={negocio.mapa} {...externo} className="block aspect-[1339/413] max-h-80 w-full overflow-hidden" aria-label="Abrir El Farallón de Tepic en Google Maps">
        <Img foto={mesa} className="opacity-90" />
      </a>
      <div className="contenedor grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.4rem,4.6vw,3.8rem)] text-white">Visítanos en Chapalita</h2>
          <p className="mt-4 text-lg text-white/90">{negocio.horario}. {negocio.domicilio}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.whatsapp} {...externo} className="btn">{Icono.wa} Reservar por WhatsApp</a>
            <a href={telPrincipal.href} className="btn-claro">{Icono.tel} Llamar</a>
          </div>
        </div>
        <dl className="grid min-w-0 content-start gap-6 sm:grid-cols-2 md:col-span-6">
          <div className="sm:col-span-2">
            <dt className="font-bold text-oro">Dirección</dt>
            <dd className="mt-1 text-lg">{d.calle}, {d.colonia}, CP {d.cp}, {d.ciudad}</dd>
            <dd className="mt-3"><a href={negocio.mapa} {...externo} className="inline-flex items-center gap-2 font-bold text-white underline decoration-oro decoration-2 underline-offset-4">{Icono.mapa} Cómo llegar en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-bold text-oro">Teléfonos</dt>
            {negocio.telefonos.map((t) => (
              <dd key={t.href} className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={t.href}>{t.visible}</a></dd>
            ))}
          </div>
          <div>
            <dt className="font-bold text-oro">Síguenos</dt>
            <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={negocio.facebook} {...externo}>Facebook</a></dd>
            <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={negocio.instagram} {...externo}>Instagram</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-bold text-oro">Correo</dt>
            <dd className="mt-1"><a className="break-all text-white underline underline-offset-4 sm:text-lg" href={`mailto:${negocio.email}?subject=${encodeURIComponent('Reservación en El Farallón de Tepic')}`}>{negocio.email}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-crema pb-28 pt-12 md:pb-12">
      <div className="contenedor grid gap-8 md:grid-cols-12 md:items-center">
        <div className="flex min-w-0 items-center gap-5 md:col-span-7">
          <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} loading="lazy" className="size-16" />
          <p className="font-serif text-xl font-semibold italic text-carbon">{negocio.pie}</p>
        </div>
        <p className="text-sm md:col-span-5 md:text-right">© {new Date().getFullYear()} {negocio.nombre}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-carbon/10 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.8fr_1fr_1fr] gap-2">
        <a href={negocio.whatsapp} {...externo} className="btn px-3">{Icono.wa} Reservar</a>
        <a href={telPrincipal.href} className="btn-linea px-0" aria-label="Llamar a El Farallón de Tepic">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar a El Farallón de Tepic">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#zarandeados" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a la báscula del zarandeado</a>
      <Encabezado />
      <main>
        <Portada />
        <Bascula />
        <Historia />
        <Menu />
        <Opiniones />
        <Galeria />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
