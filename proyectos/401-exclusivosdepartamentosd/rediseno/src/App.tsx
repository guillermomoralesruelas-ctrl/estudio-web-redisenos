import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, wa, nosotros, cobertura, asesoras, vende, calzada } from './data/content';
import { cifras, zonas, tipos, mercado, propiedades, destacadas } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const mil = (n: number) => n.toLocaleString('es-MX');
const portada = '799-has-chuenque-tripui-playa-juncalito';

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={`${base}${n}.webp`} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const etiqueta = { venta: 'En venta', preventa: 'Preventa', renta: 'En renta' } as const;

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(p.m2);
  return d.join(' · ');
}

function Tarjeta({ p, oculta = false }: { p: Propiedad; oculta?: boolean }) {
  const precio = p.precio + (p.op === 'renta' ? ' al mes' : '');
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-tinta/5`}>
      <div className="relative aspect-[4/3]">
        <Foto n={p.foto} alt={`${p.tipo} en ${p.colonia}, ${p.zona}`} className="absolute inset-0 h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${p.op === 'renta' ? 'bg-mar text-white' : 'bg-sol text-mar-2'}`}>{etiqueta[p.op]}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gris">{p.zona}, B. C. S.</p>
        <h3 className="mt-1 text-xl">{p.tipo} en {p.colonia}</h3>
        <p className="mt-2 font-display text-2xl font-semibold text-mar">{precio}</p>
        {detalles(p) && <p className="mt-1 text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-bold">
          <a href={wa(`Hola, GIP. Me interesa: ${p.titulo} (${precio}). ${p.url}`)} className="text-ocre hover:underline">WhatsApp</a>
          <a href={p.url} className="text-mar hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#propiedades', 'Propiedades'], ['#vende', 'Vende con GIP'], ['#destacadas', 'Destacadas'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-white/95 shadow-sm backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
          <img src={`${base}logo.png`} alt="" width={200} height={200} className="h-11 w-11" />
          <span className="font-display text-base font-semibold leading-tight text-mar">GIP<span className="block text-[0.65rem] font-medium tracking-[0.12em] text-gris">GRUPO INMOBILIARIO DEL PACÍFICO</span></span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-ocre">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, GIP. Quisiera información sobre sus propiedades.')} className="btn-sol hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const datos: [number, string][] = [[cifras.paz, 'en La Paz'], [cifras.cabos, 'en Los Cabos'], [cifras.otros, 'en el resto del estado']];
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-mar-2 text-white">
      <Foto n={portada} alt="Bahía de arena blanca y agua turquesa al atardecer, vista desde un cerro de roca en la costa de Loreto, Baja California Sur" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-mar-2 via-mar-2/75 to-mar-2/45" />
      <div className="contenedor flex min-h-[34rem] flex-col justify-end pb-12 pt-24 sm:min-h-[40rem]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sol">La Paz, Baja California Sur</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Tu nuevo hogar o inversión en el Pacífico te espera</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">Compra, venta y renta de casas, departamentos, terrenos y desarrollos en La Paz, Los Cabos y otras ciudades estratégicas de México.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#propiedades" className="btn-sol">Ver propiedades</a>
          <a href="#vende" className="btn-linea">Quiero vender</a>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/25 pt-6">
          {datos.map(([v, t]) => <div key={t} className="flex flex-col"><dt className="text-sm leading-snug text-white/80">propiedades {t}</dt><dd className="order-first font-display text-4xl font-semibold text-sol">{mil(v)}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

const filtrosZona = ['Toda B. C. S.', 'La Paz', 'Los Cabos', 'Resto del estado'] as const;
const filtrosOp = ['Venta y renta', 'Venta', 'Renta'] as const;

function Propiedades() {
  const [zona, setZona] = useState<(typeof filtrosZona)[number]>('Toda B. C. S.');
  const [op, setOp] = useState<(typeof filtrosOp)[number]>('Venta y renta');
  const [todas, setTodas] = useState(false);
  const lista = useMemo(() => propiedades.filter((p) =>
    (zona === 'Toda B. C. S.' || (zona === 'Resto del estado' ? !['La Paz', 'Los Cabos'].includes(p.zona) : p.zona === zona)) &&
    (op === 'Venta y renta' || (op === 'Renta' ? p.op === 'renta' : p.op !== 'renta'))), [zona, op]);
  const visibles = todas ? lista : lista.slice(0, 8);
  return (
    <section id="propiedades" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Propiedades en Baja California Sur</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">{mil(cifras.total)} propiedades entre el Golfo y el Pacífico</h2>
        <p className="mt-4 max-w-2xl text-gris">Una muestra de su catálogo: casas, condominios con vista al mar, terrenos frente a la playa y rentas. {mil(cifras.usd)} de las fichas de B. C. S. se anuncian en dólares; el precio va tal como se publica.</p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Zona">{filtrosZona.map((z) => <button key={z} type="button" className="chip" aria-pressed={zona === z} onClick={() => { setZona(z); setTodas(false); }}>{z}</button>)}</div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Operación">{filtrosOp.map((o) => <button key={o} type="button" className="chip" aria-pressed={op === o} onClick={() => { setOp(o); setTodas(false); }}>{o}</button>)}</div>
        </div>
        <p className="mt-5 text-sm font-semibold text-gris" aria-live="polite">{lista.length} {lista.length === 1 ? 'propiedad' : 'propiedades'} en la muestra</p>
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visibles.map((p, i) => <Tarjeta key={p.url} p={p} oculta={!todas && i >= 4} />)}</ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {lista.length > 8 && !todas && <button type="button" onClick={() => setTodas(true)} className="btn-mar">Ver las {lista.length}</button>}
          <a href={negocio.ventas} className="btn border-2 border-mar text-mar hover:bg-mar hover:text-white">Catálogo en venta</a>
          <a href={negocio.rentas} className="btn border-2 border-mar text-mar hover:bg-mar hover:text-white">Rentas</a>
          <a href={negocio.temporales} className="btn border-2 border-mar text-mar hover:bg-mar hover:text-white">Rentas temporales</a>
        </div>
      </div>
    </section>
  );
}

// Elemento memorable: "Arma la ficha de tu propiedad".
type Zona = (typeof zonas)[number];
type Tipo = (typeof tipos)[number];
const nombreTipo: Record<Tipo, [string, string]> = { Casa: ['Casa', 'casas'], Departamento: ['Departamento', 'departamentos'], Terreno: ['Terreno', 'terrenos'], Comercial: ['Local o comercial', 'locales y comerciales'] };

function Vende() {
  const [zona, setZona] = useState<Zona>('La Paz');
  const [tipo, setTipo] = useState<Tipo>('Casa');
  const [op, setOp] = useState<'venta' | 'renta'>('venta');
  const [colonia, setColonia] = useState('');
  const [rec, setRec] = useState(3);
  const [m2, setM2] = useState(180);
  const [precio, setPrecio] = useState('');
  const [moneda, setMoneda] = useState<'MXN' | 'USD'>('MXN');
  const [n, usd] = mercado[`${zona}|${tipo}|${op}`] ?? [0, 0];
  const pctUsd = n ? Math.round((usd / n) * 100) : 0;
  const conRec = tipo === 'Casa' || tipo === 'Departamento';
  const lugar = colonia.trim() ? `${colonia.trim()}, ${zona}` : zona;
  const precioTxt = precio ? `$${mil(Number(precio))} ${moneda}${op === 'renta' ? ' al mes' : ''}` : 'Precio por definir';
  const det = [conRec ? `${rec} rec.` : '', m2 ? `${mil(m2)} m²` : ''].filter(Boolean).join(' · ');
  const mensaje = `Hola, GIP. Quiero ${op === 'venta' ? 'vender' : 'rentar'} mi propiedad y solicitar el análisis técnico del mercado.\n` +
    `Tipo: ${nombreTipo[tipo][0]}\nUbicación: ${lugar}, B. C. S.\n${det ? `Medidas: ${det}\n` : ''}Precio que tengo en mente: ${precioTxt}`;

  return (
    <section id="vende" className="relative overflow-hidden bg-mar py-16 text-white sm:py-24">
      <div className="puntos pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-25" aria-hidden="true" />
      <div className="contenedor relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sol">Vende con GIP</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">Arma la ficha de tu propiedad sin salir de casa</h2>
        <p className="mt-4 max-w-2xl text-white/85">{vende.intro} Llena tus datos, mira cómo se vería tu ficha y cuántas propiedades como la tuya hay publicadas en su catálogo, y mándala por WhatsApp.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-12">
          <form className="grid gap-5 rounded-3xl bg-white p-5 text-tinta sm:grid-cols-2 sm:p-7" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-bold">Quiero</legend>
              <div className="mt-2 flex gap-2">{(['venta', 'renta'] as const).map((o) => <button key={o} type="button" className="chip" aria-pressed={op === o} onClick={() => setOp(o)}>{o === 'venta' ? 'Vender' : 'Rentar'}</button>)}</div>
            </fieldset>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-bold">Tipo de propiedad</legend>
              <div className="mt-2 flex flex-wrap gap-2">{tipos.map((t) => <button key={t} type="button" className="chip" aria-pressed={tipo === t} onClick={() => setTipo(t)}>{nombreTipo[t][0]}</button>)}</div>
            </fieldset>
            <label className="text-sm font-bold">Municipio o zona
              <select className="campo" value={zona} onChange={(e) => setZona(e.target.value as Zona)}>{zonas.map((z) => <option key={z}>{z}</option>)}</select>
            </label>
            <label className="text-sm font-bold">Colonia (opcional)
              <input className="campo" value={colonia} maxLength={40} onChange={(e) => setColonia(e.target.value)} placeholder="p. ej. El Centenario" />
            </label>
            {conRec && (
              <label className="text-sm font-bold">Recámaras
                <select className="campo" value={rec} onChange={(e) => setRec(Number(e.target.value))}>{[1, 2, 3, 4, 5, 6].map((r) => <option key={r} value={r}>{r}</option>)}</select>
              </label>
            )}
            <label className={`text-sm font-bold ${conRec ? '' : 'sm:col-span-2'}`}>
              <span className="flex justify-between"><span>{tipo === 'Terreno' ? 'Terreno' : 'Construcción'}</span><span className="text-mar">{mil(m2)} m²</span></span>
              <input type="range" min={tipo === 'Terreno' ? 100 : 30} max={tipo === 'Terreno' ? 20000 : 1000} step={tipo === 'Terreno' ? 100 : 10} value={m2} onChange={(e) => setM2(Number(e.target.value))} className="mt-3 w-full" />
            </label>
            <label className="text-sm font-bold">Precio que tienes en mente (opcional)
              <input className="campo" inputMode="numeric" value={precio} onChange={(e) => setPrecio(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Solo números" />
            </label>
            <fieldset>
              <legend className="text-sm font-bold">Moneda</legend>
              <div className="mt-2 flex gap-2">{(['MXN', 'USD'] as const).map((m) => <button key={m} type="button" className="chip" aria-pressed={moneda === m} onClick={() => setMoneda(m)}>{m === 'MXN' ? 'Pesos' : 'Dólares'}</button>)}</div>
            </fieldset>
          </form>

          <div className="space-y-5" aria-live="polite">
            <div className="overflow-hidden rounded-3xl bg-white text-tinta shadow-xl">
              <div className="puntos relative flex aspect-[16/9] items-center justify-center bg-arena-2">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gris">Aquí va la foto de tu propiedad</span>
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${op === 'renta' ? 'bg-mar text-white' : 'bg-sol text-mar-2'}`}>{op === 'renta' ? 'En renta' : 'En venta'}</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gris">{zona}, B. C. S.</p>
                <p className="mt-1 font-display text-xl font-semibold">{nombreTipo[tipo][0]} en {colonia.trim() || zona}</p>
                <p className="mt-2 font-display text-2xl font-semibold text-mar">{precioTxt}</p>
                {det && <p className="mt-1 text-sm text-gris">{det}</p>}
              </div>
            </div>
            <div className="rounded-3xl bg-mar-2 p-6">
              <p className="font-display text-5xl font-semibold text-sol">{mil(n)}</p>
              <p className="mt-1 text-white/90">{nombreTipo[tipo][1]} en {op} en {zona} hay hoy en su catálogo.{n ? ` ${pctUsd}% se anuncian en dólares.` : ''}</p>
              <p className="mt-3 text-xs text-white/70">Conteo del estudio sobre {mil(cifras.total)} fichas de B. C. S. publicadas en su sitio el 12 de octubre de 2026.</p>
            </div>
            <a href={wa(mensaje, negocio.whatsappVende)} className="btn-sol w-full py-4 text-base">Enviar mi ficha por WhatsApp</a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-12">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {vende.incluye.map((i) => <li key={i} className="flex gap-3"><span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-sol" aria-hidden="true" /><span>{i}</span></li>)}
          </ul>
          <div className="text-sm text-white/80">
            <p>{vende.nota}</p>
            <p className="mt-3 font-display text-lg font-semibold text-white">{vende.lema}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Destacadas() {
  const conFoto = destacadas.filter((d) => d.foto);
  const sinFoto = destacadas.filter((d) => !d.foto);
  return (
    <section id="destacadas" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Destacadas en el resto del país</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">De San Pedro a Tulum, también con GIP</h2>
        <article className="mt-10 grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-tinta/5 lg:grid-cols-2">
          <div className="relative min-h-[16rem]">
            <Foto n={calzada.foto} alt="Ilustración del desarrollo: alberca y terraza techada al pie de la torre de departamentos sobre Calzada del Valle" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-sol px-3 py-1 text-xs font-bold text-mar-2">{calzada.op}</span>
          </div>
          <div className="p-6 sm:p-9">
            <p className="text-sm text-gris">{calzada.lugar}</p>
            <h3 className="mt-1 text-3xl">{calzada.titulo}</h3>
            <p className="mt-3 font-display text-3xl font-semibold text-mar">Desde {calzada.precio}</p>
            <p className="mt-1 text-sm text-gris">{calzada.detalle}</p>
            <p className="mt-4 text-gris">{calzada.texto}</p>
            <ul className="mt-4 flex flex-wrap gap-2">{calzada.amenidades.map((a) => <li key={a} className="rounded-full bg-arena-2 px-3 py-1 text-sm font-semibold">{a}</li>)}</ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa(`Hola, GIP. Me interesan los departamentos sobre Calzada del Valle en San Pedro (${calzada.precio}). ${calzada.url}`)} className="btn-sol">WhatsApp</a>
              <a href={calzada.url} className="btn border-2 border-mar text-mar hover:bg-mar hover:text-white">Ver ficha</a>
            </div>
          </div>
        </article>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {conFoto.map((d) => (
            <li key={d.url} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-tinta/5">
              <div className="relative aspect-[4/3]"><Foto n={d.foto!} alt={d.lugar} className="absolute inset-0 h-full w-full object-cover" /><span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${d.op === 'En Renta' ? 'bg-mar text-white' : 'bg-sol text-mar-2'}`}>{d.op}</span></div>
              <div className="p-5">
                <h3 className="text-lg">{d.lugar}</h3>
                <p className="mt-1 font-display text-xl font-semibold text-mar">{d.precio}{d.op === 'En Renta' ? ' al mes' : ''}</p>
                {d.detalle && <p className="text-sm text-gris">{d.detalle}</p>}
                <a href={d.url} className="mt-3 inline-block text-sm font-bold text-mar hover:underline">Ver ficha</a>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mt-6 divide-y divide-tinta/10 rounded-3xl bg-white px-5 shadow-sm ring-1 ring-tinta/5 sm:px-7">
          {sinFoto.map((d) => (
            <li key={d.url}><a href={d.url} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 hover:text-ocre">
              <span className="min-w-0"><span className="mr-2 text-xs font-bold uppercase tracking-wider text-gris">{d.op}</span>{d.lugar}</span>
              <span className="shrink-0 font-display font-semibold">{d.precio}</span>
            </a></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="bg-arena-2/70 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
        <div>
          <p className="eyebrow">¿Quiénes somos?</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Real estate boutique e inversión inteligente</h2>
          {nosotros.map((t) => <p key={t} className="mt-5 text-lg text-gris">{t}</p>)}
          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-mar">Cobertura</p>
          <ul className="mt-3 flex flex-wrap gap-2">{cobertura.map((c) => <li key={c} className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold">{c}</li>)}</ul>
        </div>
        <div className="space-y-4">
          <img src={`${base}logo.png`} alt="Sello de GIP Grupo Inmobiliario del Pacífico" width={200} height={200} loading="lazy" className="h-32 w-32" />
          {asesoras.map((a) => (
            <div key={a.n} className="flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-tinta/5">
              <div><p className="font-display text-lg font-semibold">{a.n}</p><p className="text-sm text-gris">Asesora · {a.t}</p></div>
              <a href={wa('Hola, vi el sitio de GIP y quisiera información.', a.wa)} className="shrink-0 text-sm font-bold text-ocre hover:underline" aria-label={`WhatsApp a ${a.n}`}>WhatsApp</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-mar py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sol">Contacto</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Visítanos en La Paz o escríbenos</h2>
          <p className="mt-4 max-w-md text-white/85">Un asesor especializado te responderá lo antes posible.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, GIP. Quisiera información.')} className="btn-sol">WhatsApp</a>
            <a href={negocio.mapa} className="btn-linea">Cómo llegar</a>
          </div>
        </div>
        <dl className="grid min-w-0 gap-6 sm:grid-cols-2 [&>div]:min-w-0">
          <div className="sm:col-span-2"><dt className="text-sm text-white/70">Oficina</dt><dd className="mt-1 text-lg font-semibold [overflow-wrap:anywhere]">{negocio.direccion}</dd></div>
          <div><dt className="text-sm text-white/70">Teléfono</dt><dd className="mt-1 text-lg font-semibold"><a href={`tel:${negocio.telefono.link}`} className="hover:underline">{negocio.telefono.t}</a></dd></div>
          <div><dt className="text-sm text-white/70">Horario</dt><dd className="mt-1 space-y-0.5 font-semibold">{negocio.horario.map(([d, h]) => <p key={d}>{d}: {h}</p>)}</dd></div>
          <div className="sm:col-span-2"><dt className="text-sm text-white/70">Correo</dt><dd className="mt-1 text-lg font-semibold [overflow-wrap:anywhere]"><a href={`mailto:${negocio.correo}`} className="hover:underline">{negocio.correo}</a></dd></div>
          <div className="sm:col-span-2"><dt className="text-sm text-white/70">Redes</dt><dd className="mt-2 flex gap-6 font-semibold">{[['Facebook', negocio.facebook], ['YouTube', negocio.youtube]].map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#propiedades" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Propiedades />
        <Vende />
        <Destacadas />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-mar-2 pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <p className="font-display font-semibold text-white">GIP Grupo Inmobiliario del Pacífico® · La Paz, B. C. S.</p>
          <p>Compra, venta y renta en La Paz, Los Cabos y más.</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-tinta/10 bg-white p-3 md:hidden">
        <a href={`tel:${negocio.telefono.link}`} className="btn border-2 border-mar py-3 text-mar">Llamar</a>
        <a href={wa('Hola, GIP. Quisiera información sobre sus propiedades.')} className="btn-sol py-3">WhatsApp</a>
      </nav>
    </>
  );
}
