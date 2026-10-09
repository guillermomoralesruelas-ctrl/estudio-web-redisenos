import { useMemo, useState } from 'react';
import {
  destacadas, fechaListado, ficha, negocio, opNombre, porConfirmar, propiedades, quienes, regiones, vender, wa, web, type Propiedad,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number, mon = 'MXN') => `$${Math.round(n).toLocaleString('es-MX')}${mon === 'USD' ? ' USD' : ''}`;
const millones = (n: number) => (n >= 1_000_000 ? `$${(n / 1_000_000).toLocaleString('es-MX', { maximumFractionDigits: 2 })} millones` : pesos(n));
const milM2 = (n: number) => `$${Math.round(n / 1000).toLocaleString('es-MX')} mil`;
const m2txt = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: 1 })} m²`;
const porId = Object.fromEntries(propiedades.map((p) => [p.id, p]));
const mediana = (v: number[]) => { const s = [...v].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const lugar = (p: Propiedad) => (p.z && p.z !== p.mun ? `${p.z}, ${p.mun}` : p.mun);
const nombre = (p: Propiedad) => `${p.tipo} en ${p.z ?? p.mun}`;

function Foto({ n, alt, className = '', prioridad = false, sizes }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string }) {
  const [w, h] = medidas[n] ?? [1200, 675];
  return (
    <img src={web(`p/${n}.webp`)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  flecha: <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#metro', 'Precio por m²'], ['#destacadas', 'Destacadas'], ['#rentas', 'Rentas'], ['#vender', 'Vender mi casa'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Altura Máxima Real Estate, inicio"><img src={web('logo.png')} alt="Altura Máxima Real Estate" width={medidas.logo[0]} height={medidas.logo[1]} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem] font-medium">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-azul">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa()} target="_blank" rel="noopener" className="btn-azul hidden !py-3 sm:inline-flex">{Icono.wa}WhatsApp</a>
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
  const cuenta = (ops: string[]) => propiedades.filter((p) => ops.includes(p.op)).length;
  const enRegion = (id: string) => propiedades.filter((p) => (regiones.find((r) => r.id === id)!.municipios as readonly string[]).includes(p.mun)).length;
  const paneles = [
    { id: 'gdl', ciudad: 'Zapopan', sub: 'y Guadalajara', n: enRegion('gdl'), foto: 'EB-WV9371', alt: 'Casa de dos pisos con alberca y jardín en Valle Real, Zapopan' },
    { id: 'costa', ciudad: 'Puerto Vallarta', sub: 'y Riviera Nayarit', n: enRegion('costa'), foto: 'EB-LX7107', alt: 'Torre de departamentos con alberca entre la selva en Amapas, Puerto Vallarta' },
  ];
  return (
    <section id="inicio" className="bg-noche text-white">
      <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sol">Inmobiliaria en Zapopan, Jalisco</p>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl">Casas y departamentos en Zapopan y Puerto Vallarta</h1>
          <p className="mt-6 max-w-lg text-lg text-white/85">{quienes}</p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span><b className="text-2xl font-semibold text-white">{cuenta(['V'])}</b> en venta</span>
            <span><b className="text-2xl font-semibold text-white">{cuenta(['P'])}</b> en preventa</span>
            <span><b className="text-2xl font-semibold text-white">{cuenta(['R'])}</b> en renta</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#metro" className="btn-sol">¿Qué te alcanza por m²?</a>
            <a href={wa()} target="_blank" rel="noopener" className="btn-linea text-white">{Icono.wa}WhatsApp</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {paneles.map((p, i) => (
            <a key={p.id} href="#metro" className={`group relative block overflow-hidden rounded-[1.75rem] ${i ? 'mt-10 sm:mt-16' : ''}`}>
              <Foto n={p.foto} alt={p.alt} prioridad sizes="(min-width:1024px) 30vw, 50vw" className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noche/95 via-noche/60 to-transparent p-4 pt-16 sm:p-6 sm:pt-20">
                <span className="block font-[family-name:var(--font-display)] text-2xl leading-none sm:text-4xl">{p.ciudad}</span>
                <span className="mt-1 block text-xs text-white/85 sm:text-sm">{p.sub} · {p.n} propiedades</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— El metro cuadrado, por zona ———
type Clase = 'vivienda' | 'terreno';
const TIPOS: Record<Clase, string[]> = { vivienda: ['Casa', 'Departamento', 'Villa'], terreno: ['Terreno'] };
const RANGOS: Record<Clase, { m2: [number, number, number, number]; tope: [number, number, number, number] }> = {
  vivienda: { m2: [40, 600, 10, 100], tope: [2_000_000, 40_000_000, 250_000, 8_000_000] },
  terreno: { m2: [150, 1500, 25, 500], tope: [1_000_000, 25_000_000, 250_000, 4_000_000] },
};
type Zona = { clave: string; z: string; mun: string; lista: Propiedad[]; med: number; min: number; max: number; foto?: string };

function zonas(clase: Clase, region: string): Zona[] {
  const munis = region === 'todas' ? null : (regiones.find((r) => r.id === region)!.municipios as readonly string[]);
  const g = new Map<string, Propiedad[]>();
  for (const p of propiedades) {
    if (p.op === 'R' || p.mon !== 'MXN' || !p.m2 || !TIPOS[clase].includes(p.tipo) || (munis && !munis.includes(p.mun))) continue;
    const k = `${p.z}|${p.mun}`;
    g.set(k, [...(g.get(k) ?? []), p]);
  }
  return [...g.entries()].filter(([, l]) => l.length >= 3).map(([clave, lista]) => {
    const v = lista.map((p) => p.p / p.m2!);
    const med = mediana(v);
    const foto = [...lista].filter((p) => p.f).sort((a, b) => Math.abs(a.p / a.m2! - med) - Math.abs(b.p / b.m2! - med))[0]?.f;
    return { clave, z: lista[0].z ?? lista[0].mun, mun: lista[0].mun, lista, med, min: Math.min(...v), max: Math.max(...v), foto };
  }).sort((a, b) => a.med - b.med);
}

function Rango({ id, label, valor, rango, set, fmt }: { id: string; label: string; valor: number; rango: [number, number, number, number]; set: (n: number) => void; fmt: (n: number) => string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold uppercase tracking-wider text-white/80">{label}</label>
        <output htmlFor={id} className="font-[family-name:var(--font-display)] text-3xl text-white">{fmt(valor)}</output>
      </div>
      <input id={id} type="range" min={rango[0]} max={rango[1]} step={rango[2]} value={valor} onChange={(e) => set(Number(e.target.value))} className="mt-3 w-full" />
    </div>
  );
}

function Fila({ p }: { p: Propiedad }) {
  const confirmar = porConfirmar(p);
  return (
    <li className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-black/10 py-4 sm:grid-cols-[1.4fr_0.8fr_auto] sm:items-center">
      <div className="min-w-0">
        <p className="font-semibold">{nombre(p)} <span className="ml-1 rounded-full bg-concha px-2 py-0.5 align-middle text-xs font-medium text-gris">{opNombre[p.op]}</span></p>
        <p className="truncate text-sm text-gris" title={p.t}>{p.t}</p>
      </div>
      <p className="col-start-1 text-sm text-gris sm:col-start-auto">
        {[p.rec && `${p.rec} rec.`, p.ban && `${p.ban} baños`, p.m2 && m2txt(p.m2)].filter(Boolean).join(' · ')}
        {p.ft && <span className="block text-xs">(publicado en ft²)</span>}
      </p>
      <div className="col-start-2 row-span-2 row-start-1 text-right sm:col-start-auto sm:row-span-1 sm:row-start-auto">
        <p className="font-semibold">{confirmar ? 'Precio por confirmar' : pesos(p.p, p.mon)}{p.op === 'R' && !confirmar && <span className="text-sm font-normal text-gris"> /mes</span>}</p>
        {p.op !== 'R' && p.m2 && p.mon === 'MXN' && <p className="text-xs text-gris">{milM2(p.p / p.m2)} por m²</p>}
        <a href={ficha(p.id)} target="_blank" rel="noopener" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-azul hover:underline">Ver ficha{Icono.flecha}<span className="sr-only"> de {nombre(p)} (abre su sitio)</span></a>
      </div>
    </li>
  );
}

function Metro() {
  const [clase, setClase] = useState<Clase>('vivienda');
  const [region, setRegion] = useState('todas');
  const [m2, setM2] = useState(RANGOS.vivienda.m2[3]);
  const [tope, setTope] = useState(RANGOS.vivienda.tope[3]);
  const [sel, setSel] = useState<string | null>(null);
  const [cuantas, setCuantas] = useState(8);
  const lista = useMemo(() => zonas(clase, region), [clase, region]);
  const limite = tope / m2;
  const escala = Math.max(...lista.map((z) => z.med), limite) * 1.08;
  const caben = (p: Propiedad) => p.p <= tope && p.m2! >= m2 * 0.9;
  const zonaSel = lista.find((z) => z.clave === sel) ?? null;
  const base = useMemo(() => {
    const munis = region === 'todas' ? null : (regiones.find((r) => r.id === region)!.municipios as readonly string[]);
    return propiedades.filter((p) => p.op !== 'R' && p.mon === 'MXN' && p.m2 && TIPOS[clase].includes(p.tipo) && (!munis || munis.includes(p.mun)));
  }, [clase, region]);
  const resultados = (zonaSel ? zonaSel.lista : base).filter(caben).sort((a, b) => a.p / a.m2! - b.p / b.m2!);
  const alcanzan = lista.filter((z) => z.med <= limite);

  const cambiaClase = (c: Clase) => { setClase(c); setM2(RANGOS[c].m2[3]); setTope(RANGOS[c].tope[3]); setSel(null); setCuantas(8); };
  const mensaje = `Hola, vi su sitio. Busco ${clase === 'terreno' ? 'un terreno' : 'casa o departamento'} de unos ${m2} m² con presupuesto de hasta ${millones(tope)}${zonaSel ? ` en ${zonaSel.z}, ${zonaSel.mun}` : ''}. ¿Me pueden asesorar?`;

  return (
    <section id="metro" className="py-16 lg:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="eyebrow">El metro cuadrado, por zona</p>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl">¿Qué te alcanza, y dónde?</h2>
          <p className="mt-4 text-lg text-gris">Mueve tu presupuesto y los metros que buscas. Cada barra es el precio por m² más común (la mediana) de lo que Altura Máxima tiene en venta y preventa en esa zona, con 3 o más propiedades publicadas al {fechaListado}.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[22rem_1fr]">
          <div className="space-y-7 self-start rounded-[1.75rem] bg-noche p-6 text-white sm:p-8 lg:sticky lg:top-24">
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-wider text-white/80">Busco</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {([['vivienda', 'Casa o departamento'], ['terreno', 'Terreno']] as const).map(([c, t]) => (
                  <button key={c} type="button" aria-pressed={clase === c} onClick={() => cambiaClase(c)} className={`chip ${clase === c ? 'border-sol bg-sol text-noche' : 'border-white/40 hover:border-white'}`}>{t}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-wider text-white/80">Dónde</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {[{ id: 'todas', nombre: 'Todas' }, ...regiones].map((r) => (
                  <button key={r.id} type="button" aria-pressed={region === r.id} onClick={() => { setRegion(r.id); setSel(null); setCuantas(8); }} className={`chip ${region === r.id ? 'border-sol bg-sol text-noche' : 'border-white/40 hover:border-white'}`}>{r.nombre}</button>
                ))}
              </div>
            </fieldset>
            <Rango id="tope" label="Presupuesto" valor={tope} rango={RANGOS[clase].tope} set={(n) => { setTope(n); setCuantas(8); }} fmt={millones} />
            <Rango id="m2" label={clase === 'terreno' ? 'Terreno de' : 'Construcción de'} valor={m2} rango={RANGOS[clase].m2} set={(n) => { setM2(n); setCuantas(8); }} fmt={(n) => `${n} m²`} />
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/80">Tu presupuesto da para pagar hasta</p>
              <p className="font-[family-name:var(--font-display)] text-4xl text-sol">{milM2(limite)} <span className="text-xl text-white">por m²</span></p>
              <p className="mt-1 text-sm text-white/80" aria-live="polite">{alcanzan.length ? `Te alcanza en ${alcanzan.length} de ${lista.length} zonas.` : 'Ninguna zona tiene esa mediana; mira las propiedades más cercanas abajo.'}</p>
            </div>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-sol w-full">{Icono.wa}Pedir opciones por WhatsApp</a>
          </div>

          <div>
            <div className="flex items-center justify-between gap-3 text-xs text-gris">
              <span>Más accesible arriba</span>
              <span className="inline-flex items-center gap-2"><span className="inline-block h-4 w-0.5 bg-teja" />Tu límite por m²</span>
            </div>
            <ul className="mt-3 space-y-2">
              {lista.map((z) => {
                const ok = z.med <= limite;
                const n = z.lista.filter(caben).length;
                const activa = sel === z.clave;
                return (
                  <li key={z.clave}>
                    <button type="button" aria-pressed={activa} onClick={() => { setSel(activa ? null : z.clave); setCuantas(8); }}
                      className={`grid w-full grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 rounded-xl px-3 py-2.5 text-left transition-colors sm:grid-cols-[13rem_1fr_7.5rem] ${activa ? 'bg-white shadow-md ring-2 ring-azul' : 'hover:bg-white/70'}`}>
                      <span className="min-w-0">
                        <span className="block truncate font-semibold">{z.z}</span>
                        <span className="block truncate text-xs text-gris">{z.mun} · {z.lista.length} publicadas</span>
                      </span>
                      <span className="relative col-span-2 row-start-2 block h-8 sm:col-span-1 sm:row-start-auto">
                        <span className="absolute inset-y-0 left-0 rounded-md bg-concha" style={{ width: `${(z.max / escala) * 100 > 100 ? 100 : (z.max / escala) * 100}%`, marginLeft: 0 }} aria-hidden="true" />
                        <span className={`absolute inset-y-1 left-0 rounded-md ${ok ? 'bg-azul' : 'bg-gris/45'}`} style={{ width: `${(z.med / escala) * 100}%` }} aria-hidden="true" />
                        <span className="absolute inset-y-[-4px] w-0.5 bg-teja" style={{ left: `${Math.min(100, (limite / escala) * 100)}%` }} aria-hidden="true" />
                        <span className={`absolute inset-y-0 flex items-center px-2 text-xs font-semibold ${ok ? 'text-white' : 'text-tinta'}`}>{milM2(z.med)}/m²</span>
                      </span>
                      <span className="text-right text-xs">
                        {ok ? <b className="text-azul">Te alcanza</b> : <span className="text-gris">Arriba de tu límite</span>}
                        <span className="block text-gris">{n ? `${n} ${n === 1 ? 'cabe' : 'caben'} en tu presupuesto` : 'ninguna cabe hoy'}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-gris">La franja clara llega al precio por m² más alto de cada zona. Las zonas con menos de 3 propiedades no se grafican, pero sí aparecen en la lista. Precio de lista publicado; confírmalo con un asesor.</p>

            <div className="mt-10 rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-3xl">{zonaSel ? `${zonaSel.z}, ${zonaSel.mun}` : 'Lo que cabe en tu presupuesto'}</h3>
                  <p className="mt-1 text-sm text-gris" aria-live="polite">{resultados.length} {resultados.length === 1 ? 'propiedad' : 'propiedades'} de al menos {Math.round(m2 * 0.9)} m² por hasta {millones(tope)}, del m² más barato al más caro.</p>
                </div>
                {zonaSel && <button type="button" onClick={() => setSel(null)} className="text-sm font-semibold text-azul hover:underline">Ver todas las zonas</button>}
              </div>
              {zonaSel?.foto && (
                <figure className="mt-6 overflow-hidden rounded-2xl">
                  <Foto n={zonaSel.foto} alt={`${nombre(porFoto(zonaSel.foto)!)}: una de sus propiedades publicadas`} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[16/7] w-full" />
                </figure>
              )}
              {resultados.length ? (
                <ul className="mt-4">{resultados.slice(0, cuantas).map((p) => <Fila key={p.id} p={p} />)}</ul>
              ) : (
                <p className="mt-6 rounded-2xl bg-arena p-5">Con esos números no hay una propiedad publicada hoy {zonaSel ? 'en esta zona' : 'en estas zonas'}. Escríbeles con lo que buscas y te dicen qué opciones tienen.</p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {resultados.length > cuantas && <button type="button" onClick={() => setCuantas(cuantas + 12)} className="btn-linea text-azul">Ver {Math.min(12, resultados.length - cuantas)} más</button>}
                <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-azul">{Icono.wa}Me interesa, escríbanme</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const porFoto = (f: string) => propiedades.find((p) => p.f === f);
// De sus 9 destacadas, tres departamentos de Versalles repiten el mismo render y una es el plano de un lote:
// aquí se muestran las 6 con foto propia (las otras siguen en la calculadora y en su sitio).
const repetidas = ['296-espana-704-macaria-704-ja-puerto-vallarta', '296-espana-407-macaria-407-ja-puerto-vallarta'];
const unicas = destacadas.filter((id) => porId[id].tipo !== 'Terreno' && !repetidas.includes(id));

function Destacadas() {
  return (
    <section id="destacadas" className="bg-concha py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Propiedades destacadas</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Las que ellos destacan hoy</h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {unicas.map((id, i) => {
            const p = porId[id];
            return (
              <li key={id} className="group overflow-hidden rounded-[1.25rem] bg-white shadow-sm sm:rounded-[1.5rem]">
                <a href={ficha(id)} target="_blank" rel="noopener" className="flex h-full flex-col">
                  <span className="relative block overflow-hidden">
                    <Foto n={p.f!} alt={`${nombre(p)}, ${p.mun}`} sizes="(min-width:1024px) 33vw, 50vw" className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-2 top-2 rounded-full bg-noche/85 px-2.5 py-1 text-[0.7rem] sm:left-3 sm:top-3 sm:text-xs font-semibold text-white">{opNombre[p.op]}</span>
                  </span>
                  <span className="flex flex-1 flex-col p-3.5 sm:p-5">
                    <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">{millones(p.p)}</span>
                    <span className="mt-1 font-semibold">{nombre(p)}</span>
                    <span className="text-sm text-gris">{lugar(p)}</span>
                    <span className="mt-3 hidden text-sm text-gris sm:block">{[p.rec && `${p.rec} rec.`, p.ban && `${p.ban} baños`, p.m2 && m2txt(p.m2)].filter(Boolean).join(' · ')}{p.m2 && ` · ${milM2(p.p / p.m2)} por m²`}</span>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-azul">Ver ficha{Icono.flecha}<span className="sr-only"> (abre su sitio)</span></span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-gris">Algunas fotos de preventa son renders del desarrollo, como los publica la inmobiliaria.</p>
      </div>
    </section>
  );
}

function Rentas() {
  const [todas, setTodas] = useState(false);
  const rentas = propiedades.filter((p) => p.op === 'R').sort((a, b) => (a.mon === b.mon ? a.p - b.p : a.mon === 'MXN' ? -1 : 1));
  return (
    <section id="rentas" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">En renta</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{rentas.length} para rentar, casi todas en Zapopan y Guadalajara</h2>
          <p className="mt-4 text-lg text-gris">Departamentos amueblados, casas en coto y oficinas. Ordenadas de la renta mensual más baja a la más alta.</p>
          <a href={wa('Hola, vi su sitio y busco una propiedad en renta.')} target="_blank" rel="noopener" className="btn-azul mt-8">{Icono.wa}Preguntar por una renta</a>
        </div>
        <div>
          <ul>{(todas ? rentas : rentas.slice(0, 8)).map((p) => <Fila key={p.id} p={p} />)}</ul>
          {!todas && <button type="button" onClick={() => setTodas(true)} className="btn-linea mt-6 text-azul">Ver las {rentas.length}</button>}
        </div>
      </div>
    </section>
  );
}

function Vender() {
  return (
    <section id="vender" className="bg-noche py-16 text-white lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sol">Vender mi casa</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">¿Vas a vender en Zapopan?</h2>
          <p className="mt-4 text-lg text-white/85">{vender.intro}</p>
          <p className="mt-4 text-lg font-semibold text-sol">{vender.cierre}</p>
          <a href={wa('Hola, quiero vender mi casa y me interesa la evaluación gratuita de mi propiedad.')} target="_blank" rel="noopener" className="btn-sol mt-8">{Icono.wa}Pedir mi evaluación</a>
        </div>
        <ol className="space-y-4">
          {vender.pasos.map((s, i) => (
            <li key={s.t} className="flex gap-5 rounded-2xl border border-white/15 p-5">
              <span className="font-[family-name:var(--font-display)] text-5xl leading-none text-cielo">{i + 1}</span>
              <span><b className="block text-lg">{s.t}</b><span className="text-white/80">{s.d}</span></span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Oficina en La Estancia, Zapopan</h2>
          <p className="mt-4 max-w-xl text-lg text-gris">Escríbeles qué buscas o qué quieres vender y un asesor te contesta a la brevedad.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa()} target="_blank" rel="noopener" className="btn-azul">{Icono.wa}WhatsApp {negocio.celular}</a>
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-linea text-azul">{Icono.pin}Cómo llegar</a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <img src={web('ampi.webp')} alt="AMPI Guadalajara" width={medidas.ampi[0]} height={medidas.ampi[1]} className="h-14 w-auto rounded" loading="lazy" />
            <p className="text-sm text-gris">Su sitio muestra el sello de AMPI Guadalajara.</p>
          </div>
        </div>
        <dl className="divide-y divide-black/10 border-y border-black/10">
          {[
            ['Dirección', <a href={negocio.maps} target="_blank" rel="noopener" className="hover:underline">{negocio.direccion}, {negocio.ciudad}</a>],
            ['Teléfonos', <><a href={negocio.telefonoHref} className="hover:underline">{negocio.telefono}</a> · <a href={negocio.celularHref} className="hover:underline">{negocio.celular}</a></>],
            ['Correo', <a href={`mailto:${negocio.email}`} className="break-all hover:underline">{negocio.email}</a>],
            ['Redes', <span className="flex flex-wrap gap-x-4"><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:underline">Facebook</a><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:underline">Instagram</a><a href={negocio.youtube} target="_blank" rel="noopener" className="hover:underline">YouTube</a></span>],
          ].map(([t, v]) => (
            <div key={t as string} className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]"><dt className="text-sm font-semibold uppercase tracking-wider text-gris">{t}</dt><dd className="font-medium">{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche pb-28 pt-10 text-white/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('logo-blanco.png')} alt="Altura Máxima Real Estate" width={medidas.logo[0]} height={medidas.logo[1]} className="h-12 w-auto" loading="lazy" />
        <p className="text-xs">© {new Date().getFullYear()} Altura Máxima Real Estate · {negocio.ciudad}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={wa()} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-azul py-3 text-xs font-semibold">{Icono.wa}WhatsApp</a>
      <a href={negocio.celularHref} className="flex flex-col items-center gap-1 py-3 text-xs font-medium">{Icono.tel}Llamar</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-medium">{Icono.pin}Cómo llegar</a>
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
        <Metro />
        <Destacadas />
        <Rentas />
        <Vender />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
