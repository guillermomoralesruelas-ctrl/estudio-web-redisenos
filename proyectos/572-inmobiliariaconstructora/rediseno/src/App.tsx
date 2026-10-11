import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, nosotros, servicios, propietarios } from './data/content';
import { cifras, rentasCarmen, propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const portada = 'casa-residencial-en-renta-club-residenci';

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const lugar = (p: Propiedad) => (p.colonia === p.ciudad ? p.ciudad : `${p.colonia}, ${p.ciudad}`);
function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec !== null) d.push(p.rec === 0 ? 'Loft' : `${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(`${p.m2.toLocaleString('es-MX')} m²`);
  return d.join(' · ');
}
const etiqueta = { venta: 'En venta', preventa: 'Preventa', renta: 'En renta' } as const;

function Tarjeta({ p, oculta = false }: { p: Propiedad; oculta?: boolean }) {
  const precio = `${pesos(p.precio)}${p.op === 'renta' ? ' al mes' : ''}`;
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-tinta/10`}>
      <div className="relative aspect-[16/10]">
        <Foto n={p.foto} alt={`${p.tipo} en ${lugar(p)}`} className="absolute inset-0 h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-bold ${p.op === 'renta' ? 'bg-golfo text-white' : 'bg-dorado text-carbon'}`}>{etiqueta[p.op]}</span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm text-gris">{p.colonia === p.ciudad ? 'Yucatán' : p.ciudad === 'Carmen' ? 'Carmen, Campeche' : p.ciudad}</p>
        <h3 className="mt-1 text-base leading-snug">{p.tipo} en {p.colonia}</h3>
        <p className="mt-2 font-display text-xl font-bold">{precio}</p>
        {detalles(p) && <p className="mt-1 text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-bold">
          <a href={wa(`Hola, CDG Buildings. Me interesa: ${p.nombre} (${precio}). ${p.url}`)} className="text-golfo hover:underline">WhatsApp</a>
          <a href={p.url} className="text-bronce hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#rentar', 'Rentar en Carmen'], ['#negocio', 'Para tu negocio'], ['#comprar', 'Comprar'], ['#propietarios', 'Propietarios'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="CDG Buildings, Inmobiliaria & Constructora" width={360} height={265} className="h-12 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-golfo">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, CDG Buildings. Quisiera información sobre sus propiedades.')} className="btn-golfo hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const datos: [string, string][] = [
    [String(cifras.rentaCarmen), 'en renta en Carmen'],
    [String(cifras.ventaCarmen), 'en venta en Carmen'],
    [String(cifras.ventaYucatan), 'en venta en Mérida y Yucatán'],
  ];
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-golfo-2 text-white">
      <Foto n={portada} alt="Casa residencial blanca de dos niveles con cochera, en Club Residencial Azul, Ciudad del Carmen" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-golfo-2 via-golfo-2/85 to-golfo-2/30" />
      <div className="contenedor flex min-h-[32rem] flex-col justify-center py-16 sm:min-h-[38rem]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-dorado">Inmobiliaria & Constructora · Ciudad del Carmen, Campeche</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl">Renta, compra o vende en Ciudad del Carmen, con quien conoce cada colonia</h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">Casas, departamentos, locales y oficinas en la isla, y casas y departamentos en Mérida y la costa de Yucatán.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#rentar" className="btn-dorado">¿Cuánto cuesta rentar?</a>
          <a href="#comprar" className="btn-linea">Ver casas en venta</a>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
          {datos.map(([v, t]) => <div key={t} className="flex flex-col"><dt className="text-sm text-white/75">{t}</dt><dd className="order-first font-display text-3xl font-bold text-dorado sm:text-4xl">{v}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

type Tipo = 'todas' | 'Casa' | 'Departamento';
type Rec = 0 | 1 | 2 | 3 | 4;
const paso = 2500;
const tope = 50000;

function Rentar() {
  const [tipo, setTipo] = useState<Tipo>('todas');
  const [rec, setRec] = useState<Rec>(0);
  const [presupuesto, setPresupuesto] = useState(15000);

  const filtro = (precio: number, r: number | null, t: string) =>
    (tipo === 'todas' || t.startsWith(tipo)) && (rec === 0 || (rec === 4 ? (r ?? 0) >= 4 : r === rec)) && precio > 0;
  const datos = useMemo(() => rentasCarmen.filter(([p, r, t]) => filtro(p, r, t)).map(([p]) => p).sort((a, b) => a - b), [tipo, rec]);
  const cubetas = useMemo(() => {
    const n = tope / paso + 1;
    const c = Array.from({ length: n }, () => 0);
    datos.forEach((p) => { c[Math.min(n - 1, Math.floor((p - 1) / paso))] += 1; });
    return c;
  }, [datos]);
  const maxC = Math.max(1, ...cubetas);
  const caben = datos.filter((p) => p <= presupuesto).length;
  const mediana = datos.length ? datos[Math.floor((datos.length - 1) / 2)] : 0;
  const muestra = propiedades.filter((p) => p.grupo === 'renta' && filtro(p.precio, p.rec, p.tipo) && p.precio <= presupuesto).sort((a, b) => b.precio - a.precio).slice(0, 6);
  const nombreTipo = tipo === 'todas' ? 'casas y departamentos' : tipo === 'Casa' ? 'casas' : 'departamentos';
  const nombreRec = rec === 0 ? '' : rec === 4 ? ' de 4 recámaras o más' : ` de ${rec} recámara${rec > 1 ? 's' : ''}`;

  return (
    <section id="rentar" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Rentar en Ciudad del Carmen</p>
        <h2 className="mt-2 max-w-3xl text-3xl sm:text-5xl">¿Cuánto cuesta rentar en Carmen? Mira las {rentasCarmen.length} rentas de un vistazo</h2>
        <p className="mt-4 max-w-2xl text-gris">Cada barra junta las casas y departamentos en renta de un rango de $2,500. Mueve tu presupuesto y verás cuántas te alcanzan.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,20rem)_1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold">Tipo</p>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Tipo">
                {(['todas', 'Casa', 'Departamento'] as Tipo[]).map((t) => <button key={t} type="button" className="chip" aria-pressed={tipo === t} onClick={() => setTipo(t)}>{t === 'todas' ? 'Todas' : t === 'Casa' ? 'Casa' : 'Depto.'}</button>)}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">Recámaras</p>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Recámaras">
                {([0, 1, 2, 3, 4] as Rec[]).map((r) => <button key={r} type="button" className="chip min-w-11" aria-pressed={rec === r} onClick={() => setRec(r)}>{r === 0 ? 'Todas' : r === 4 ? '4+' : r}</button>)}
              </div>
            </div>
            <label className="block">
              <span className="flex items-baseline justify-between text-sm font-bold"><span>Mi presupuesto al mes</span><span className="font-display text-xl text-golfo">{pesos(presupuesto)}</span></span>
              <input type="range" min={4000} max={60000} step={500} value={presupuesto} onChange={(e) => setPresupuesto(Number(e.target.value))} className="mt-3 w-full" />
            </label>
            <div className="rounded-xl bg-golfo p-5 text-white" aria-live="polite">
              <p className="font-display text-4xl font-bold text-dorado">{caben} <span className="text-lg text-white/80">de {datos.length}</span></p>
              <p className="mt-1 text-white/90">{nombreTipo}{nombreRec} en renta te caben con {pesos(presupuesto)} al mes.</p>
              {datos.length > 0 && <p className="mt-3 border-t border-white/20 pt-3 text-sm text-white/80">La renta de en medio es de {pesos(mediana)}: la mitad cuesta menos y la mitad más.</p>}
            </div>
          </div>

          <div className="min-w-0">
            <div className="rounded-xl bg-white p-4 ring-1 ring-tinta/10 sm:p-6">
              <div className="flex h-56 items-end gap-[3px] sm:h-72" role="img" aria-label={`Histograma de rentas: ${caben} de ${datos.length} cuestan ${pesos(presupuesto)} o menos.`}>
                {cubetas.map((c, i) => {
                  const desde = i * paso;
                  const dentro = desde + 1 <= presupuesto;
                  return (
                    <div key={i} className="flex h-full flex-1 flex-col justify-end">
                      <span className={`block rounded-t-sm transition-colors ${dentro ? 'bg-golfo' : 'bg-arena-2'}`} style={{ height: `${c ? Math.max(3, (c / maxC) * 100) : 0}%` }} />
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex justify-between text-xs text-gris"><span>$0</span><span>$10 mil</span><span>$20 mil</span><span>$30 mil</span><span>$40 mil</span><span>$50 mil o más</span></div>
            </div>

            <h3 className="mt-8 text-xl">Algunas que te caben</h3>
            {muestra.length ? (
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{muestra.map((p, i) => <Tarjeta key={p.url} p={p} oculta={i >= 3} />)}</ul>
            ) : (
              <p className="mt-4 rounded-xl bg-white p-5 text-gris ring-1 ring-tinta/10">En nuestra selección con fotos no hay una con estos filtros; en el catálogo completo hay {caben}. Pregúntanos por WhatsApp.</p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa(`Hola, CDG Buildings. Busco ${nombreTipo}${nombreRec} en renta en Ciudad del Carmen, con presupuesto de ${pesos(presupuesto)} al mes.`)} className="btn-golfo">Mandar mi búsqueda por WhatsApp</a>
              <a href={negocio.rentas} className="btn border-2 border-tinta/20 hover:border-tinta">Todas las rentas</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Negocio() {
  const lista = propiedades.filter((p) => p.grupo === 'comercial');
  const conteo: [string, number][] = [['locales', cifras.comercial.Local], ['oficinas', cifras.comercial.Oficina], ['bodegas', cifras.comercial.Bodega], ['naves industriales', cifras.comercial.Nave]];
  return (
    <section id="negocio" className="bg-carbon py-16 text-white sm:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-dorado">Para tu negocio</p>
        <h2 className="mt-2 max-w-3xl text-3xl sm:text-5xl">Locales, oficinas y bodegas en renta en la isla</h2>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {conteo.map(([t, n]) => <div key={t} className="flex flex-col"><dt className="text-sm text-white/70">{t}</dt><dd className="order-first font-display text-3xl font-bold text-dorado">{n}</dd></div>)}
        </dl>
        <ul className="mt-10 grid gap-4 text-tinta sm:grid-cols-2 lg:grid-cols-4">{lista.map((p, i) => <Tarjeta key={p.url} p={p} oculta={i >= 2} />)}</ul>
        <a href={negocio.rentas} className="btn-linea mt-8">Ver todos los espacios en renta</a>
      </div>
    </section>
  );
}

function Comprar() {
  const [zona, setZona] = useState<'venta-carmen' | 'venta-merida'>('venta-carmen');
  const [todas, setTodas] = useState(false);
  const lista = propiedades.filter((p) => p.grupo === zona);
  return (
    <section id="comprar" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Comprar</p>
        <h2 className="mt-2 max-w-3xl text-3xl sm:text-5xl">Casas, terrenos y departamentos en venta</h2>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Zona">
          <button type="button" className="chip" aria-pressed={zona === 'venta-carmen'} onClick={() => { setZona('venta-carmen'); setTodas(false); }}>Carmen e Isla Aguada ({cifras.ventaCarmen})</button>
          <button type="button" className="chip" aria-pressed={zona === 'venta-merida'} onClick={() => { setZona('venta-merida'); setTodas(false); }}>Mérida y Yucatán ({cifras.ventaYucatan})</button>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{lista.map((p, i) => <Tarjeta key={p.url} p={p} oculta={!todas && i >= 3} />)}</ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => setTodas(!todas)} className="btn-golfo sm:hidden">{todas ? 'Ver menos' : `Ver las ${lista.length}`}</button>
          <a href={negocio.ventas} className="btn border-2 border-tinta/20 hover:border-tinta">Catálogo completo en venta</a>
        </div>
      </div>
    </section>
  );
}

function Propietarios() {
  return (
    <section id="propietarios" className="bg-arena-2/70 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Propietarios</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">¿Quieres vender o rentar tu casa?</h2>
          <p className="mt-4 text-lg text-gris">{propietarios}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, CDG Buildings. Quiero vender o rentar mi propiedad.')} className="btn-golfo">Publicar mi propiedad</a>
            <a href={negocio.propietarios} className="btn border-2 border-tinta/20 hover:border-tinta">Llenar el formulario</a>
          </div>
          <p className="mt-10 text-gris">{nosotros}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {servicios.map((s) => (
            <li key={s.t} className="rounded-xl bg-white p-6 ring-1 ring-tinta/10">
              <span aria-hidden className="block h-1 w-10 rounded bg-dorado" />
              <h3 className="mt-4 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-gris">{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Visítanos en la colonia Guanal o escríbenos</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, CDG Buildings. Quisiera información.')} className="btn-golfo">WhatsApp</a>
            <a href={negocio.mapa} className="btn border-2 border-tinta/20 hover:border-tinta">Cómo llegar</a>
          </div>
        </div>
        <dl className="divide-y divide-tinta/10 rounded-xl bg-white px-6 ring-1 ring-tinta/10">
          <div className="py-5"><dt className="text-sm text-gris">Oficina</dt><dd className="mt-1 text-lg font-semibold">{negocio.direccion}</dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Celulares</dt><dd className="mt-1 flex flex-wrap gap-x-6 text-lg font-semibold">{negocio.telefonos.map((t) => <a key={t.t} href={`tel:${t.link}`} className="hover:text-golfo">{t.t}</a>)}</dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Correo</dt><dd className="mt-1 break-words text-lg font-semibold"><a href={`mailto:${negocio.correo}`} className="hover:text-golfo">{negocio.correo}</a></dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Redes</dt><dd className="mt-2 flex gap-2">{[['Instagram', negocio.instagram], ['Facebook', negocio.facebook]].map(([t, h]) => <a key={t} href={h} className="chip hover:border-golfo">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#rentar" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Rentar />
        <Negocio />
        <Comprar />
        <Propietarios />
        <Contacto />
      </main>
      <footer className="bg-carbon pb-24 pt-10 text-sm text-white/70 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <p className="font-display font-bold text-white">{negocio.nombreLargo}</p>
          <p>{negocio.telefonos.map((t) => t.t).join(' · ')} · {negocio.correo}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-tinta/10 bg-white p-3 md:hidden">
        <a href={`tel:${negocio.telefonos[0].link}`} className="btn border-2 border-tinta/20 py-3">Llamar</a>
        <a href={wa('Hola, CDG Buildings. Quisiera información sobre sus propiedades.')} className="btn-golfo py-3">WhatsApp</a>
      </nav>
    </>
  );
}
