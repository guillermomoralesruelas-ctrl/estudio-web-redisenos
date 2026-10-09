import { useState } from 'react';
import {
  catalogo, entrega, formula as F, mapa, negocio, nosotros, notaBarda, notaLosa, preguntas, sucursales, valores, ventajas, wa, web, zonas,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const num = (n: number) => n.toLocaleString('es-MX');

function Foto({ n, alt, className = '', prioridad = false, sizes, p = false }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string; p?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${p ? 'p/' : ''}${n}.webp`)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  camion: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M1 6h13v10H1zM14 10h4l3 3v3h-7" /><circle cx="5" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#tu-obra', 'Tu obra en un pedido'], ['#catalogo', 'Catálogo'], ['#entrega', 'Entrega'], ['#sucursales', 'Sucursales']];
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="FORTER, inicio" className="flex items-center gap-2">
          <img src={web('mark.png')} alt="" width={medidas.mark[0]} height={medidas.mark[1]} className="h-9 w-auto" />
          <img src={web('wordmark-red.png')} alt="FORTER" width={medidas['wordmark-red'][0]} height={medidas['wordmark-red'][1]} className="h-5 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-bold uppercase tracking-wider">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-forter">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa('Hola FORTER, quiero cotizar material para mi obra.')} target="_blank" rel="noopener" className="btn-rojo hidden !py-3 sm:inline-flex">{Icono.wa}Cotiza ahora</a>
          <button type="button" className="p-2 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">Menú</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-black/10 lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-noche text-white">
      <Foto n="hero-forter" alt="Letrero de FORTER Bloquera entre palmeras en su planta de Hermosillo" prioridad sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-[70%_50%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-noche via-noche/80 to-noche/20" aria-hidden="true" />
      <div className="contenedor flex min-h-[36rem] flex-col justify-center py-16 lg:min-h-[40rem]">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-concreto">Fábrica en Hermosillo, Sonora</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Block, vigueta y bovedilla directo de fábrica</h1>
        <p className="mt-6 max-w-xl text-lg text-white/90">Y cemento, varilla y armex en el mismo pedido, entregados en obra. <b className="text-white">Entrega gratis desde 3 tarimas</b> en Hermosillo y alrededores.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#tu-obra" className="btn-rojo">Calcula tu obra</a>
          <a href={wa('Hola FORTER, quiero cotizar material para mi obra.')} target="_blank" rel="noopener" className="btn-linea text-white">{Icono.wa}Cotiza por WhatsApp</a>
        </div>
        <ul className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6 text-sm">
          <li><b className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Fábrica</b>vigueta, bovedilla y block</li>
          <li><b className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl">3</b>sucursales</li>
          <li><b className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl">3 tarimas</b>y la entrega es gratis</li>
        </ul>
      </div>
    </section>
  );
}

// ——— Elemento memorable: Tu obra en un pedido ———
function Numero({ id, label, valor, set, max }: { id: string; label: string; valor: string; set: (v: string) => void; max: number }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-gris">{label}</label>
      <input id={id} type="number" inputMode="decimal" min="0" max={max} step="0.1" value={valor} onChange={(e) => set(e.target.value)} className="campo" />
    </div>
  );
}
const ok = (v: string, max: number) => { const n = Number(v); return Number.isFinite(n) && n > 0 && n <= max ? n : 0; };

function DibujoBarda({ L, H, castillos }: { L: number; H: number; castillos: number }) {
  const esc = Math.min(560 / L, 150 / H, 60);
  const w = L * esc, h = H * esc, bw = 0.4 * esc, bh = 0.2 * esc;
  return (
    <svg viewBox={`-6 -6 ${w + 12} ${h + 34}`} className="h-auto max-h-56 w-full" role="img" aria-label={`Dibujo de una barda de ${L} m de largo por ${H} m de alto con ${castillos} castillos`}>
      <defs>
        <pattern id="aparejo" width={bw} height={bh * 2} patternUnits="userSpaceOnUse">
          <rect width={bw} height={bh * 2} fill="#CDD0CD" />
          <path d={`M0 ${bh}H${bw}M0 ${bh * 2}H${bw}M${bw} 0V${bh}M${bw / 2} ${bh}V${bh * 2}`} stroke="#9FA4A0" strokeWidth={Math.max(0.6, esc * 0.012)} />
        </pattern>
      </defs>
      <rect x="0" y="0" width={w} height={h} fill="url(#aparejo)" />
      <rect x="0" y={h - bh} width={w} height={bh} fill="#3A3F44" opacity="0.85" />
      <rect x="0" y="0" width={w} height={bh} fill="#3A3F44" opacity="0.85" />
      {Array.from({ length: castillos }, (_, i) => {
        const x = Math.min(w - bw / 2, (i * F.castilloCada * esc));
        return <rect key={i} x={x - bw / 4} y="0" width={bw / 2} height={h} fill="#C02326" />;
      })}
      <text x={w / 2} y={h + 22} textAnchor="middle" fontSize="13" fill="#565C61">{L} m</text>
    </svg>
  );
}

function DibujoLosa({ A, B, viguetas }: { A: number; B: number; viguetas: number }) {
  const largo = Math.max(A, B), claro = Math.min(A, B);
  const esc = Math.min(560 / largo, 170 / claro, 60);
  const w = largo * esc, h = claro * esc;
  return (
    <svg viewBox={`-6 -6 ${w + 12} ${h + 34}`} className="h-auto max-h-56 w-full" role="img" aria-label={`Dibujo en planta de una losa de ${largo} por ${claro} m con ${viguetas} viguetas`}>
      <rect x="0" y="0" width={w} height={h} fill="#EEEFEC" stroke="#3A3F44" strokeWidth="2" />
      {Array.from({ length: viguetas - 1 }, (_, i) => {
        const x = i * F.separacion * esc;
        const ancho = Math.min(F.separacion * esc, w - x);
        return <rect key={`b${i}`} x={x} y="1" width={ancho} height={h - 2} fill={i % 2 ? '#DADDD9' : '#E4E6E2'} />;
      })}
      {Array.from({ length: viguetas }, (_, i) => {
        const x = Math.min(w, i * F.separacion * esc);
        return <rect key={i} x={x - 1.5} y="0" width="3" height={h} fill="#C02326" />;
      })}
      <text x={w / 2} y={h + 22} textAnchor="middle" fontSize="13" fill="#565C61">{largo} m · claro {claro} m</text>
    </svg>
  );
}

function TuObra() {
  const [conBarda, setConBarda] = useState(true);
  const [conLosa, setConLosa] = useState(true);
  const [L, setL] = useState('12');
  const [H, setH] = useState('2.4');
  const [A, setA] = useState('8');
  const [B, setB] = useState('4');

  const l = ok(L, 500), h = ok(H, 4), a = ok(A, 30), b = ok(B, 30);
  const barda = conBarda && l && h ? {
    m2: l * h, block: Math.ceil(l * h * F.pzasM2 * F.desperdicio), castillos: Math.ceil(l / F.castilloCada) + 1, cadena: Math.ceil(l * 2),
  } : null;
  const claro = Math.min(a, b);
  const losa = conLosa && a && b ? {
    m2: a * b, claro, viguetas: Math.ceil(Math.max(a, b) / F.separacion) + 1, bovedillas: Math.ceil(a * b * F.bovedillaM2),
    tipo: claro <= F.claroV11 ? 'V11' : 'V16', bov: claro <= F.claroV11 ? '11' : '16',
  } : null;

  const lineas: string[] = [];
  if (barda) lineas.push(`Barda de ${l} × ${h} m (${num(Math.round(barda.m2 * 10) / 10)} m²): ${num(barda.block)} block 15×20×40, ${barda.castillos} castillos, ${barda.cadena} m de cadena`);
  if (losa) lineas.push(`Losa de ${a} × ${b} m (${num(Math.round(losa.m2 * 10) / 10)} m²): ${losa.viguetas} viguetas ${losa.tipo}, ${num(losa.bovedillas)} bovedillas ${losa.bov}`);
  const mensaje = `Hola FORTER, calculé mi obra en su sitio:\n${lineas.map((x) => `• ${x}`).join('\n')}\n¿Me confirman cantidades y precio?`;

  return (
    <section id="tu-obra" className="py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Tu obra en un pedido</p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl">Dibuja tu barda y tu losa</h2>
          </div>
          <p className="text-lg text-gris">Escribe las medidas: ves tu obra a escala, la lista de material con las fórmulas de su fábrica y la mandas completa por WhatsApp para que te confirmen precio.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            { on: conBarda, set: setConBarda, t: 'Barda', campos: <><Numero id="barda-l" label="Largo (m)" valor={L} set={setL} max={500} /><Numero id="barda-h" label="Altura (m)" valor={H} set={setH} max={4} /></>,
              dibujo: barda && <DibujoBarda L={l} H={h} castillos={barda.castillos} />, nota: notaBarda,
              res: barda && [[num(barda.block), 'block 15×20×40'], [barda.castillos, 'castillos (Armex 15/15/4)'], [`${barda.cadena} m`, 'de cadena (Armex 15/20/4)']] },
            { on: conLosa, set: setConLosa, t: 'Losa de vigueta y bovedilla', campos: <><Numero id="losa-a" label="Largo (m)" valor={A} set={setA} max={30} /><Numero id="losa-b" label="Ancho (m)" valor={B} set={setB} max={30} /></>,
              dibujo: losa && <DibujoLosa A={a} B={b} viguetas={losa.viguetas} />, nota: notaLosa,
              res: losa && [[losa.viguetas, `viguetas ${losa.tipo}`], [num(losa.bovedillas), `bovedillas ${losa.bov}`], ['+', 'malla 6/6/10/10 y cemento para la capa de compresión']] },
          ].map((p) => (
            <article key={p.t} className={`border-2 bg-white p-5 transition-opacity sm:p-7 ${p.on ? 'border-tinta' : 'border-concreto opacity-70'}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl sm:text-3xl">{p.t}</h3>
                <label className="flex cursor-pointer items-center gap-2 text-sm font-bold">
                  <input type="checkbox" checked={p.on} onChange={(e) => p.set(e.target.checked)} className="size-5 accent-[#C02326]" />Incluir
                </label>
              </div>
              {p.on && (
                <>
                  <div className="mt-5 grid grid-cols-2 gap-3">{p.campos}</div>
                  <div className="mt-6 min-h-24 bg-cemento p-3">{p.dibujo ?? <p className="p-4 text-gris">Escribe medidas válidas.</p>}</div>
                  {p.res && (
                    <dl className="mt-5 grid grid-cols-3 gap-3" aria-live="polite">
                      {p.res.map(([n, d]) => <div key={String(d)}><dt className="font-[family-name:var(--font-display)] text-3xl text-forter">{n}</dt><dd className="text-sm text-gris">{d}</dd></div>)}
                    </dl>
                  )}
                  <p className="mt-4 text-xs text-gris">{p.nota}</p>
                </>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 bg-noche p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-2xl">{lineas.length ? <>Tu pedido: <b>{lineas.length === 2 ? 'barda y losa' : barda ? 'barda' : 'losa'}</b>, junto en una sola entrega. {entrega}</> : 'Incluye tu barda o tu losa para armar el pedido.'}</p>
          <a href={wa(lineas.length ? mensaje : 'Hola FORTER, quiero cotizar material para mi obra.')} target="_blank" rel="noopener" className="btn-rojo shrink-0">{Icono.wa}Enviar mi cálculo</a>
        </div>
      </div>
    </section>
  );
}

function Catalogo() {
  return (
    <section id="catalogo" className="bg-white py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Catálogo</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Todo para construir, en un solo lugar</h2>
        <div className="mt-10 space-y-12">
          {catalogo.map((c, i) => (
            <article key={c.id} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className={i % 2 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <Foto n={c.foto} alt={`${c.nombre} en la planta de FORTER`} sizes="(min-width:1024px) 32vw, 100vw" className="aspect-[4/3] w-full" />
                  {c.fab && <span className="absolute left-0 top-4 bg-forter px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Fabricación propia</span>}
                </div>
                <h3 className="mt-5 text-3xl">{c.nombre}</h3>
                <p className="mt-2 text-gris">{c.texto}</p>
                <a href={wa(`Hola FORTER, quiero cotizar ${c.nombre.toLowerCase()}.`)} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 font-bold text-forter hover:underline">{Icono.wa}Cotizar {c.nombre.toLowerCase()}</a>
              </div>
              <ul className={`grid grid-cols-2 gap-3 self-start sm:grid-cols-3 ${i % 2 ? 'lg:order-1' : ''}`}>
                {c.productos.map((p) => (
                  <li key={p.n} className="border border-black/10 bg-cemento">
                    <Foto n={p.f} p alt={p.n} sizes="(min-width:640px) 16vw, 45vw" className="aspect-square w-full" />
                    <div className="p-3"><b className="block text-sm leading-tight">{p.n}</b><span className="mt-1 block text-xs text-gris">{p.d}</span></div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-gris">Precio y disponibilidad se confirman al momento por WhatsApp. Los bultos de cemento y mortero son de la marca Cemex.</p>
      </div>
    </section>
  );
}

function Entrega() {
  return (
    <section id="entrega" className="bg-forter py-16 text-white lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/80">Fábrica, no revendedor</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Te lo llevamos junto a tu obra</h2>
          <ul className="mt-8 space-y-5">
            {ventajas.map((v) => <li key={v.t} className="border-l-4 border-white pl-4"><b className="block text-lg">{v.t}</b><span className="text-white/90">{v.d}</span></li>)}
          </ul>
          <p className="mt-8 text-sm font-bold uppercase tracking-wider text-white/80">Zonas de entrega</p>
          <ul className="mt-3 flex flex-wrap gap-2">{zonas.map((z) => <li key={z} className="border border-white/50 px-3 py-1.5 text-sm">{z}</li>)}</ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Foto n="cemento-truck" alt="Camión revolvedor de FORTER cargando concreto en la planta" sizes="(min-width:1024px) 22vw, 50vw" className="aspect-[3/4] w-full" />
          <Foto n="block" alt="Tarimas de block gris emplayadas en el patio de FORTER" sizes="(min-width:1024px) 22vw, 50vw" className="aspect-[3/4] w-full" />
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Nosotros</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Construimos lo que sostiene Sonora</h2>
          <p className="mt-4 text-lg text-gris">{nosotros}</p>
          <ul className="mt-6 flex flex-wrap gap-2">{valores.map((v) => <li key={v} className="bg-concreto px-3 py-1.5 text-sm font-semibold">{v}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-2xl">Lo que más les preguntan</h3>
          <div className="mt-4 divide-y divide-black/10 border-y border-black/10">
            {preguntas.map((q) => (
              <details key={q.p} className="group py-4">
                <summary className="cursor-pointer list-none font-bold marker:hidden">{q.p}<span className="float-right text-forter group-open:rotate-45">+</span></summary>
                <p className="mt-2 text-gris">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sucursales() {
  return (
    <section id="sucursales" className="bg-noche py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-concreto">Estamos en Hermosillo</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Visítanos o pide a domicilio</h2>
        <p className="mt-3 text-white/80">{negocio.horario}</p>
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {sucursales.map((s) => (
            <li key={s.nombre} className="flex flex-col border border-white/20 p-6">
              <h3 className="text-2xl">{s.nombre}</h3>
              <p className="mt-2 text-white/85">{s.dir}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <a href={s.href} className="btn-blanco !px-4 !py-3">{Icono.tel}{s.tel}</a>
                <a href={mapa(`FORTER ${s.dir}`)} target="_blank" rel="noopener" className="btn-linea !px-4 !py-3 text-white">{Icono.pin}Cómo llegar</a>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={wa('Hola FORTER, quiero cotizar material para mi obra.')} target="_blank" rel="noopener" className="btn-rojo">{Icono.wa}WhatsApp {negocio.whatsappTxt}</a>
          <a href={negocio.facebook} target="_blank" rel="noopener" className="font-semibold hover:underline">Facebook</a>
          <a href={negocio.instagram} target="_blank" rel="noopener" className="font-semibold hover:underline">Instagram</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-noche pb-28 pt-10 text-white/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('wordmark-white.png')} alt="FORTER" width={medidas['wordmark-white'][0]} height={medidas['wordmark-white'][1]} className="h-5 w-auto" loading="lazy" />
        <p className="text-xs">© {new Date().getFullYear()} FORTER · Fábrica de prefabricados de concreto presforzado · {negocio.ciudad}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={wa('Hola FORTER, quiero cotizar material para mi obra.')} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-forter py-3 text-xs font-bold">{Icono.wa}Cotizar</a>
      <a href={sucursales[0].href} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.tel}Llamar</a>
      <a href={mapa(`FORTER ${sucursales[0].dir}`)} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <TuObra />
        <Catalogo />
        <Entrega />
        <Nosotros />
        <Sucursales />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
