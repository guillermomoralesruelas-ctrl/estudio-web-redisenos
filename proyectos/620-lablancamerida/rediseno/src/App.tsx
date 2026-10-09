import { useMemo, useState } from 'react';
import {
  carta, cochinita, diasPromo, horario, marquesitas, negocio, porQue, promos, resenas, top3, web, type Platillo,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const ZONA = 'America/Mexico_City';
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

function ahoraLeon() {
  const partes = new Intl.DateTimeFormat('en-US', { timeZone: ZONA, weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date());
  const v = (t: string) => partes.find((p) => p.type === t)?.value ?? '0';
  return { dia: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(v('weekday')), hora: Number(v('hour')) % 24 };
}

const Icono = {
  tel: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  menu: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h5" /></svg>,
};

// Precio de un pedido, con o sin las promociones de martes a jueves.
type Pedido = Record<string, number>;
function cuenta(p: Pedido, conPromo: boolean) {
  const precio = (id: string) => carta.find((c) => c.id === id)!.precio;
  let total = Object.entries(p).reduce((s, [id, n]) => s + precio(id) * n, 0);
  const aplicadas: string[] = [];
  if (conPromo) {
    // Tacos: los sueltos y los de las órdenes de 3 cuentan juntos; cada 3 tacos cuestan $80.
    const tacos = (p.taco ?? 0) + 3 * (p.orden ?? 0);
    const g = Math.floor(tacos / 3);
    if (g) { total += g * 80 - g * 3 * 40 - (p.orden ?? 0) * (120 - 3 * 40); aplicadas.push(`${g} × 3 x 2 en tacos`); }
    const t = Math.floor((p.torta ?? 0) / 2);
    if (t) { total += t * 80 - t * 2 * 50; aplicadas.push(`${t} × 2 tortas por $80`); }
    const bebidas = (p.vaso ?? 0) + (p.refresco ?? 0);
    const s = Math.min(Math.floor((p.salbute ?? 0) / 2), bebidas);
    if (s) { total += s * 85 - s * (2 * 35 + 40); aplicadas.push(`${s} × 2 salbutes + bebida`); }
  }
  return { total, aplicadas };
}

function Cabecera({ abiertoAhora }: { abiertoAhora: boolean }) {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#favoritos', 'Favoritos'], ['#menu', 'Menú'], ['#antojo', 'Promociones'], ['#nosotros', 'Nosotros'], ['#visitanos', 'Visítanos']];
  return (
    <header className="sticky top-0 z-40 border-b border-morado/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="La Blanca Mérida, inicio">
          <img src={web('logo.png')} alt="" width={480} height={388} className="h-11 w-auto" />
          <span className="font-[family-name:var(--font-display)] text-xl text-morado">La Blanca Mérida</span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 font-semibold">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-achiote">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={negocio.telefonoHref} className="btn-achiote hidden !px-5 !py-3 sm:inline-flex">{Icono.tel} {abiertoAhora ? 'Ordena ahora' : negocio.telefono}</a>
          <button type="button" className="rounded-full p-2.5 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-morado/10 bg-cal lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg font-semibold">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada({ abiertoAhora, hoy }: { abiertoAhora: boolean; hoy: number }) {
  return (
    <section id="inicio" className="overflow-hidden bg-morado text-white">
      <div className="contenedor grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <span className={`size-2.5 rounded-full ${abiertoAhora ? 'bg-huano' : 'bg-white/50'}`} aria-hidden="true" />
            {abiertoAhora ? 'Abierto ahora, hasta las 10:00 pm' : hoy === 1 ? 'Hoy lunes descansamos · abrimos martes a las 2:00 pm' : 'Abrimos de 2:00 pm a 10:00 pm'}
          </p>
          <h1 className="mt-6 text-5xl leading-[1.02] sm:text-7xl">La Blanca Mérida, <span className="italic text-huano">comida yucateca en León</span></h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">Conoce con tu familia los mejores sabores de Mérida: cochinita pibil, panuchos, salbutes, sopa de lima y marquesitas.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.telefonoHref} className="btn-huano">{Icono.tel} Ordena al {negocio.telefono}</a>
            <a href="#menu" className="btn-linea">{Icono.menu} Ver el menú</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Foto n="cochinita-plato" alt="Plato de cochinita pibil con frijol colado, cebolla morada y agua de chaya" prioridad className="aspect-[4/5] w-full rounded-[2rem] lg:aspect-[5/6]" />
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-cal p-4 text-tinta shadow-xl sm:-left-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gris">Taco de cochinita</p>
            <p className="font-[family-name:var(--font-display)] text-3xl text-achiote">$40</p>
          </div>
        </div>
      </div>
      <div className="cenefa" aria-hidden="true" />
    </section>
  );
}

function Favoritos() {
  return (
    <section id="favoritos" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="eyebrow">Los favoritos</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Nuestro top 3</h2>
          <p className="mt-4 text-gris">En Yucatán, comer es un ritual de herencia y sabor. De entre todas nuestras recetas familiares, hemos seleccionado los tres tesoros que han conquistado el paladar de quienes nos visitan.</p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {top3.map((t, i) => (
            <li key={t.nombre} className="group relative overflow-hidden rounded-3xl bg-masa">
              {t.foto
                ? <Foto n={t.foto} alt={t.alt} className="aspect-[4/3] w-full transition-transform md:aspect-[4/5] duration-500 group-hover:scale-[1.03]" />
                : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-chaya md:aspect-[4/5]" aria-hidden="true">
                    <svg viewBox="0 0 120 120" className="w-1/2 text-white/90"><circle cx="60" cy="60" r="52" fill="#C9D86A" /><circle cx="60" cy="60" r="44" fill="#EEF2B8" />{Array.from({ length: 8 }, (_, k) => <path key={k} d="M60 60 L60 20" stroke="#C9D86A" strokeWidth="4" transform={`rotate(${k * 45} 60 60)`} />)}<circle cx="60" cy="60" r="5" fill="#C9D86A" /></svg>
                  </div>
                )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/90 to-transparent p-6 pt-16 text-white">
                <p className="font-[family-name:var(--font-display)] text-5xl text-huano">{i + 1}</p>
                <h3 className="text-2xl">{t.nombre}</h3>
                <a href={negocio.telefonoHref} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">Pídelo</a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Estrella() {
  return (
    <section className="bg-masa py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 gap-3">
          <Foto n="tacos-cochinita" alt="Tacos de cochinita con cebolla morada y agua de jamaica sobre mesa de madera" className="row-span-2 h-full w-full rounded-2xl" />
          <Foto n="frijol-con-puerco" alt="Cazuela de barro con caldo de frijol y carne de cerdo" className="aspect-square w-full rounded-2xl" />
          <Foto n="marquesita" alt="Marquesita en la mano dentro del restaurante" className="aspect-square w-full rounded-2xl" />
        </div>
        <div>
          <p className="eyebrow">Nuestro platillo estrella</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Cochinita pibil</h2>
          <p className="mt-5 text-gris">{cochinita}</p>
          <a href={negocio.telefonoHref} className="btn-achiote mt-8">{Icono.tel} Ordena ahora</a>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const grupos: [Platillo['grupo'], string][] = [['platillos', 'Platillos yucatecos'], ['bebidas', 'Bebidas'], ['postres', 'Postres típicos']];
  const [g, setG] = useState<Platillo['grupo']>('platillos');
  const lista = carta.filter((c) => c.grupo === g);
  return (
    <section id="menu" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Menú</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Conoce los demás platillos</h2>
          </div>
          <div role="tablist" aria-label="Secciones del menú" className="flex flex-wrap gap-2">
            {grupos.map(([id, t]) => (
              <button key={id} role="tab" type="button" aria-selected={g === id} aria-controls="lista-menu" onClick={() => setG(id)}
                className={`rounded-full px-5 py-2.5 font-semibold ${g === id ? 'bg-morado text-white' : 'bg-masa hover:bg-huano/50'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div id="lista-menu" role="tabpanel" className="mt-10 grid gap-x-12 gap-y-1 md:grid-cols-2">
          {lista.map((c) => (
            <article key={c.id} className="flex gap-4 border-b border-morado/10 py-5">
              {c.foto && <Foto n={c.foto} alt={c.alt ?? ''} className="size-20 shrink-0 rounded-xl sm:size-24" />}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl">{c.nombre}</h3>
                  <span className="flex-1 border-b-2 border-dotted border-morado/20" aria-hidden="true" />
                  <p className="font-semibold text-achiote">{pesos(c.precio)}</p>
                </div>
                {c.texto && <p className="mt-1 text-sm text-gris">{c.texto}</p>}
              </div>
            </article>
          ))}
          {g === 'postres' && <p className="py-5 font-semibold text-morado">{marquesitas}</p>}
        </div>
      </div>
    </section>
  );
}

// Elemento memorable: "Tu antojo de hoy". Arma el pedido y aplica solas las promociones si es martes, miércoles o jueves.
function Antojo({ hoy }: { hoy: number }) {
  const [dia, setDia] = useState(hoy);
  const [pedido, setPedido] = useState<Pedido>({ taco: 3, vaso: 1 });
  const cambia = (id: string, d: number) => setPedido((p) => {
    const n = Math.max(0, Math.min(20, (p[id] ?? 0) + d));
    const sig = { ...p, [id]: n };
    if (!n) delete sig[id];
    return sig;
  });
  const esPromo = diasPromo.includes(dia);
  const cerrado = !horario.dias.includes(dia);
  const conPromo = useMemo(() => cuenta(pedido, true), [pedido]);
  const sinPromo = useMemo(() => cuenta(pedido, false), [pedido]);
  const hoyCuenta = esPromo ? conPromo : sinPromo;
  const ahorro = sinPromo.total - conPromo.total;
  const elegibles = ['taco', 'orden', 'torta', 'salbute', 'panucho', 'sopa', 'empanadas', 'vaporcitos', 'vaso', 'refresco', 'chocolate', 'helado'];
  const piezas = Object.values(pedido).reduce((a, b) => a + b, 0);

  return (
    <section id="antojo" className="bg-chaya py-20 text-white sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-huano">Nuestras promociones</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Tu antojo de hoy</h2>
          <p className="mt-4 text-white/85">Arma tu pedido. De martes a jueves se aplican solas sus promociones: 3 x 2 en tacos de cochinita, 2 tortas por $80 y 2 salbutes con bebida por $85.</p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {promos.map((p) => (
            <li key={p.id} className={`rounded-2xl p-5 ring-1 ${esPromo ? 'bg-huano text-tinta ring-huano' : 'bg-white/[0.06] ring-white/15'}`}>
              <p className="font-[family-name:var(--font-display)] text-3xl">{pesos(p.precio)}</p>
              <p className="mt-1 font-semibold">{p.nombre}</p>
              <p className={`text-sm ${esPromo ? 'text-tinta/75' : 'text-white/70'}`}>Martes a jueves</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl bg-cal p-5 text-tinta sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-semibold">¿Qué día?</p>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="Día del pedido">
                {DIAS.map((d, i) => (
                  <button key={d} type="button" aria-pressed={dia === i} onClick={() => setDia(i)}
                    className={`min-w-11 rounded-full px-3 py-2 text-sm font-semibold ${dia === i ? 'bg-morado text-white' : diasPromo.includes(i) ? 'bg-huano/40 hover:bg-huano/70' : 'bg-masa hover:bg-huano/40'}`}>
                    {d}{i === hoy ? ' · hoy' : ''}
                  </button>
                ))}
              </div>
            </div>
            <ul className="mt-5 divide-y divide-morado/10">
              {elegibles.map((id) => {
                const c = carta.find((x) => x.id === id)!;
                const n = pedido[id] ?? 0;
                return (
                  <li key={id} className="flex items-center gap-3 py-2.5">
                    <p className="min-w-0 flex-1"><span className="font-semibold">{c.nombre}</span> <span className="text-sm text-gris">{pesos(c.precio)}</span></p>
                    <div className="flex items-center gap-2" role="group" aria-label={c.nombre}>
                      <button type="button" onClick={() => cambia(id, -1)} disabled={!n} className="size-9 rounded-full border-2 border-morado/25 font-bold hover:border-morado disabled:opacity-30" aria-label={`Quitar ${c.nombre}`}>−</button>
                      <span className="w-6 text-center font-bold">{n}</span>
                      <button type="button" onClick={() => cambia(id, 1)} className="size-9 rounded-full bg-morado font-bold text-white hover:bg-achiote" aria-label={`Agregar ${c.nombre}`}>+</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="flex flex-col rounded-3xl bg-tinta p-6 sm:p-7" aria-live="polite">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-huano">Tu pedido del {DIAS_LARGOS[dia]}</p>
            {cerrado
              ? <p className="mt-3 rounded-xl bg-white/10 px-4 py-3 text-sm">Los lunes descansamos. Abrimos de martes a domingo, de 2:00 pm a 10:00 pm.</p>
              : null}
            <ul className="mt-4 space-y-1.5 text-sm text-white/85">
              {Object.entries(pedido).map(([id, n]) => <li key={id} className="flex justify-between gap-3"><span>{n} × {carta.find((c) => c.id === id)!.nombre}</span><span>{pesos(carta.find((c) => c.id === id)!.precio * n)}</span></li>)}
              {!piezas && <li>Agrega algo para empezar.</li>}
            </ul>
            {esPromo && conPromo.aplicadas.length > 0 && (
              <ul className="mt-4 space-y-1 border-t border-white/15 pt-4 text-sm font-semibold text-huano">
                {conPromo.aplicadas.map((a) => <li key={a}>Promoción: {a}</li>)}
              </ul>
            )}
            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="text-sm text-white/70">Total</p>
              <p className="font-[family-name:var(--font-display)] text-5xl text-white">{pesos(hoyCuenta.total)}</p>
              {esPromo && ahorro > 0 && <p className="mt-1 font-semibold text-huano">Ahorras {pesos(ahorro)}</p>}
              {!esPromo && ahorro > 0 && <p className="mt-1 text-sm text-white/80">De martes a jueves, este mismo pedido sale en <strong className="text-huano">{pesos(conPromo.total)}</strong>.</p>}
            </div>
            <a href={negocio.telefonoHref} className="btn-huano mt-6">{Icono.tel} Ordenar al {negocio.telefono}</a>
            <p className="mt-3 text-xs text-white/60">Se ordena por teléfono. Precios de su menú; las promociones aplican de martes a jueves.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Nuestra historia</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Cada sabor cuenta una historia</h2>
          <p className="mt-5 text-lg text-gris">{negocio.historia}</p>
          <ul className="mt-8 space-y-3">
            {porQue.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 size-2 shrink-0 rotate-45 bg-achiote" aria-hidden="true" />{p}</li>)}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-3">
            <Foto n="agua-chaya" alt="Vaso de agua de chaya junto a una jarra de barro" className="aspect-square w-full rounded-2xl" />
            <Foto n="cafe-jarro" alt="Bebida espumosa en jarro de barro" className="aspect-square w-full rounded-2xl" />
            <Foto n="malteada" alt="Malteada de chocolate con crema y cereza" className="aspect-square w-full rounded-2xl" />
          </div>
        </div>
        <div>
          <p className="eyebrow">Lo que dicen</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {resenas.map((r, i) => (
              <li key={r.nombre} className={`rounded-2xl p-6 ${i === 0 ? 'bg-morado text-white sm:col-span-2' : 'bg-masa'}`}>
                <p className={i === 0 ? 'font-[family-name:var(--font-display)] text-2xl leading-snug' : ''}>“{r.texto}”</p>
                <p className={`mt-4 text-sm font-semibold ${i === 0 ? 'text-huano' : 'text-morado'}`}>{r.nombre}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="bg-masa py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Visítanos</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Un pedacito de Mérida en el Parque Manzanares</h2>
          <address className="mt-6 not-italic">
            <p className="text-xl font-semibold">{negocio.direccion}</p>
            <p className="text-gris">{negocio.cp}</p>
          </address>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div><dt className="text-sm font-semibold uppercase tracking-[0.14em] text-achiote">Horario</dt><dd className="text-lg font-semibold">{horario.texto}</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.14em] text-achiote">Pedidos y reservas</dt><dd><a href={negocio.telefonoHref} className="text-lg font-semibold hover:text-achiote">{negocio.telefono}</a></dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.14em] text-achiote">Correo</dt><dd><a href={`mailto:${negocio.email}`} className="break-all text-lg font-semibold hover:text-achiote">{negocio.email}</a></dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.14em] text-achiote">Redes</dt><dd className="flex gap-4 text-lg font-semibold"><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-achiote">Facebook</a><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-achiote">Instagram</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-achiote">{Icono.pin} Cómo llegar</a>
            <a href={negocio.telefonoHref} className="btn-linea text-morado">{Icono.tel} Reservar mesa</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Foto n="salbutes" alt="Dos salbutes con lechuga y cebolla morada en plato de barro" className="aspect-[3/4] w-full rounded-2xl" />
          <Foto n="empanadas" alt="Empanadas doradas en plato de barro con salsas" className="mt-10 aspect-[3/4] w-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-14 text-white/80 lg:pb-14">
      <div className="cenefa -mt-14 mb-14" aria-hidden="true" />
      <div className="contenedor flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <img src={web('logo.png')} alt="La Blanca Mérida" width={480} height={388} loading="lazy" className="h-20 w-auto" />
          <p className="max-w-xs text-sm">{negocio.direccion}, {negocio.cp}. {horario.texto}.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <li><a href="#menu" className="hover:text-huano">Menú</a></li>
            <li><a href="#antojo" className="hover:text-huano">Promociones</a></li>
            <li><a href="#nosotros" className="hover:text-huano">Nosotros</a></li>
            <li><a href="#visitanos" className="hover:text-huano">Visítanos</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-huano">Facebook</a></li>
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-huano">Instagram</a></li>
          </ul>
        </nav>
      </div>
      <p className="contenedor mt-10 text-xs text-white/60">© {new Date().getFullYear()} La Blanca Mérida, León, Guanajuato.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-morado text-white lg:hidden">
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 bg-achiote py-3 text-xs font-semibold">{Icono.tel}Ordenar</a>
      <a href="#menu" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.menu}Menú</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  const [{ dia, hora }] = useState(ahoraLeon);
  const abiertoAhora = horario.dias.includes(dia) && hora >= horario.abre && hora < horario.cierra;
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Cabecera abiertoAhora={abiertoAhora} />
      <main id="contenido">
        <Portada abiertoAhora={abiertoAhora} hoy={dia} />
        <Favoritos />
        <Estrella />
        <Menu />
        <Antojo hoy={dia} />
        <Nosotros />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
