import { useState } from 'react';
import {
  administradas, canales, comision, comisionNota, desarrollos, galeriaRentas, inversiones, laguna, largoPlazo, mapa, negocio,
  ocupacion, pasos, porQue, presentacion, respaldo, servicios, tareas, valores, wa, web,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;

function Foto({ n, alt, className = '', prioridad = false, sizes }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  ok: <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>,
  flecha: <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#desarrollos', 'Desarrollos'], ['#administracion', 'Administración'], ['#rentas', 'Rentas'], ['#bacalar', '¿Por qué Bacalar?'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Azul Bacalar, inicio"><img src={web('logo.png')} alt="Azul Bacalar" width={medidas.logo[0]} height={medidas.logo[1]} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem] font-medium">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-laguna">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa('Hola, vi su sitio y me interesa una propiedad en Bacalar.')} target="_blank" rel="noopener" className="btn-laguna hidden !py-3 sm:inline-flex">{Icono.wa}WhatsApp</a>
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
    <section id="inicio" className="relative isolate overflow-hidden bg-hondo text-white">
      <Foto n="laguna-dron" alt="La Laguna de Bacalar vista desde un dron: agua turquesa y una lancha" prioridad sizes="100vw" className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-hondo/90 via-hondo/60 to-hondo/10" aria-hidden="true" />
      <div className="contenedor flex min-h-[38rem] flex-col justify-center py-16 lg:min-h-[44rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-agua">Agencia inmobiliaria · Bacalar, Quintana Roo</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Tu propiedad en la Laguna de los Siete Colores</h1>
        <p className="mt-6 max-w-xl text-lg text-white/90">{presentacion}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#desarrollos" className="btn-agua">Ver desarrollos</a>
          <a href="#administracion" className="btn-linea text-white">Administrar mi propiedad</a>
        </div>
      </div>
      <div className="franjas h-2" aria-hidden="true" />
    </section>
  );
}

function Amenidades({ lista, alt }: { lista: readonly { t: string; f: string }[]; alt: string }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-3">
      {lista.map((a) => (
        <li key={a.t} className="overflow-hidden rounded-2xl bg-white">
          <Foto n={a.f} alt={`${alt}: ${a.t.toLowerCase()}`} sizes="(min-width:1024px) 20vw, 50vw" className="aspect-[4/3] w-full" />
          <p className="p-3 text-sm font-medium">{a.t}</p>
        </li>
      ))}
    </ul>
  );
}

function Desarrollos() {
  const { malena: m, casaDePiedra: c } = desarrollos;
  return (
    <section id="desarrollos" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Desarrollos que comercializan</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">A una cuadra de la laguna</h2>

        <article className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid grid-cols-[1.2fr_1fr] gap-3">
            <Foto n="malena-fachada" alt="Render de la fachada de Malena: edificio de 4 niveles con terrazas y vegetación" sizes="(min-width:1024px) 30vw, 55vw" className="row-span-2 h-full w-full rounded-[1.75rem]" />
            <Foto n="malena-habitacion" alt="Render de una recámara de Malena con vista a la laguna" sizes="(min-width:1024px) 25vw, 45vw" className="aspect-[4/3] w-full rounded-[1.75rem]" />
            <Foto n="malena-alberca" alt="Render de la alberca infinita del roof top de Malena" sizes="(min-width:1024px) 25vw, 45vw" className="aspect-[4/3] w-full rounded-[1.75rem]" />
          </div>
          <div>
            <p className="inline-block rounded-full bg-laguna px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">En venta</p>
            <h3 className="mt-4 text-5xl">{m.nombre}</h3>
            <p className="mt-3 text-xl">{m.lema}</p>
            <p className="mt-4 text-2xl font-semibold text-laguna">{m.precio}</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {m.datos.map((d) => <li key={d} className="flex items-start gap-2 rounded-xl bg-white p-3"><span className="mt-0.5 text-laguna">{Icono.ok}</span>{d}</li>)}
            </ul>
            <p className="mt-5 text-gris">{m.texto}</p>
            <p className="mt-3 text-sm text-gris">Imágenes del desarrollo: renders.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa('Hola, me interesa un departamento en Malena Bacalar. ¿Me pueden dar información?')} target="_blank" rel="noopener" className="btn-laguna">{Icono.wa}Pedir información</a>
              <a href={mapa(m.direccion)} target="_blank" rel="noopener" className="btn-linea text-laguna">{Icono.pin}Ubicación</a>
            </div>
          </div>
        </article>
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gris">Roof top de Malena</h4>
          <ul className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {m.amenidades.map((a) => (
              <li key={a.t} className="overflow-hidden rounded-2xl bg-white">
                <Foto n={a.f} alt={`Render de Malena: ${a.t.toLowerCase()}`} sizes="(min-width:1024px) 20vw, 50vw" className="aspect-[5/3] w-full" />
                <p className="p-3 text-sm font-medium">{a.t}</p>
              </li>
            ))}
          </ul>
        </div>

        <article className="mt-16 grid gap-8 rounded-[2rem] bg-concha p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="inline-block rounded-full bg-selva px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">{c.estado}</p>
            <h3 className="mt-4 text-5xl">{c.nombre}</h3>
            <p className="mt-3 text-lg">{c.texto}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {c.datos.map((d) => <li key={d} className="flex items-start gap-2"><span className="mt-0.5 text-selva">{Icono.ok}</span>{d}</li>)}
            </ul>
            <p className="mt-5 rounded-2xl bg-white p-4 text-sm"><b>Hoy, en renta vacacional:</b> Azul Bacalar administra departamentos de sus torres A y B (penthouse, planta baja y superior).</p>
            <a href={mapa(c.direccion)} target="_blank" rel="noopener" className="btn-linea mt-6 text-laguna">{Icono.pin}Ubicación</a>
          </div>
          <div>
            <Foto n="cdp-planta-baja" alt="Departamento de planta baja de Casa de Piedra con alberca privada y terraza" sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[16/9] w-full rounded-[1.5rem]" />
            <Amenidades lista={c.amenidades} alt="Casa de Piedra" />
          </div>
        </article>
      </div>
    </section>
  );
}

// ——— Elemento memorable: ¿Quién se encarga de qué? ———
function Administracion() {
  const [plan, setPlan] = useState<'starter' | 'relax'>('relax');
  const filas = tareas.filter((t) => t[plan] !== null);
  const ab = filas.filter((t) => t[plan] === 'ab').length;
  const tu = filas.length - ab;
  return (
    <section id="administracion" className="bg-hondo py-16 text-white lg:py-24">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-agua">Administración de rentas vacacionales</p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl">¿Quién se encarga de qué?</h2>
          </div>
          <p className="text-lg text-white/85">La mayoría de sus clientes son inversionistas que no viven en Bacalar. Elige un plan y mira qué hace Azul Bacalar y qué te queda a ti.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[20rem_1fr]">
          <div className="space-y-5">
            <div role="radiogroup" aria-label="Plan" className="grid grid-cols-2 gap-2 rounded-full bg-white/10 p-1.5">
              {(['starter', 'relax'] as const).map((p) => (
                <button key={p} type="button" role="radio" aria-checked={plan === p} onClick={() => setPlan(p)}
                  className={`rounded-full py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${plan === p ? 'bg-agua text-hondo' : 'text-white hover:bg-white/10'}`}>
                  Plan {p === 'starter' ? 'Starter' : 'Relax'}
                </button>
              ))}
            </div>
            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <p className="font-[family-name:var(--font-display)] text-6xl text-agua" aria-live="polite">{ab}<span className="text-3xl text-white"> de {filas.length}</span></p>
              <p className="mt-1 text-white/85">tareas las hace Azul Bacalar{tu ? `; ${tu} quedan a tu cargo` : '. Tú no te encargas de nada'}.</p>
              <p className="mt-5 text-xl font-semibold">{comision}</p>
              <p className="mt-1 text-sm text-white/75">{comisionNota}</p>
            </div>
            <a href={wa(`Hola, tengo una propiedad en Bacalar y me interesa el plan ${plan === 'starter' ? 'Starter' : 'Relax'} de administración.`)} target="_blank" rel="noopener" className="btn-agua w-full">{Icono.wa}Hablar con un experto</a>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] bg-white text-tinta">
            <div className="grid grid-cols-[1fr_5.5rem_5.5rem] gap-2 border-b border-black/10 bg-concha px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gris sm:grid-cols-[1fr_8rem_8rem] sm:px-6">
              <span>Tarea</span><span className="text-center">Azul Bacalar</span><span className="text-center">Tú</span>
            </div>
            <ul>
              {tareas.map((t) => {
                const quien = t[plan];
                return (
                  <li key={t.t} className={`grid grid-cols-[1fr_5.5rem_5.5rem] items-center gap-2 border-b border-black/5 px-4 py-3 text-sm sm:grid-cols-[1fr_8rem_8rem] sm:px-6 ${quien === null ? 'text-gris/80' : ''}`}>
                    <span className={quien === null ? 'line-through decoration-gris/50' : ''}>{t.t}</span>
                    <span className="flex justify-center">{quien === 'ab' && <span className="inline-flex size-8 items-center justify-center rounded-full bg-laguna text-white transition-transform">{Icono.ok}<span className="sr-only">Azul Bacalar</span></span>}</span>
                    <span className="flex justify-center">{quien === 'tu' && <span className="inline-flex size-8 items-center justify-center rounded-full bg-concha text-tinta">{Icono.ok}<span className="sr-only">Tú</span></span>}{quien === null && <span className="text-xs">No incluido</span>}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pasos.map((p, i) => (
            <li key={p.t} className="rounded-2xl border border-white/15 p-5">
              <span className="font-[family-name:var(--font-display)] text-4xl text-agua">{i + 1}</span>
              <b className="mt-2 block text-lg">{p.t}</b>
              <span className="text-sm text-white/80">{p.d}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-6 rounded-[1.5rem] bg-white/5 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <p className="font-[family-name:var(--font-display)] text-6xl text-agua">{ocupacion.cifra}</p>
          <div>
            <p className="text-white/90">Ocupación {ocupacion.texto}</p>
            <p className="mt-2 text-sm text-white/70">Comercializan por {canales[0]}, su {canales[1].toLowerCase()} y {canales[2].toLowerCase().replace('facebook, instagram y google', 'Facebook, Instagram y Google')}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rentas() {
  return (
    <section id="rentas" className="py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Rentas en Bacalar</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Para vacacionar o para quedarte</h2>
          </div>
          <p className="text-lg text-gris">Departamentos, casas, villas, cabañas y estudios que administran: {administradas.join(', ')}.</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galeriaRentas.map((g, i) => (
            <li key={g.f} className={i === 0 ? 'col-span-2 lg:row-span-2' : i === galeriaRentas.length - 1 ? 'hidden lg:block' : ''}>
              <Foto n={g.f} alt={g.alt} sizes={i === 0 ? '(min-width:1024px) 66vw, 100vw' : '(min-width:1024px) 33vw, 50vw'} className={`w-full rounded-[1.25rem] ${i === 0 ? 'aspect-[3/2] lg:aspect-auto lg:h-full' : 'aspect-[3/2]'}`} />
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[1.5rem] bg-laguna p-6 text-white sm:p-8">
            <h3 className="text-3xl">Renta vacacional</h3>
            <p className="mt-3 text-white/85">Cada propiedad tiene sus fotos y detalles en su sitio de reservas, donde puedes reservar directo.</p>
            <a href={negocio.rentas} target="_blank" rel="noopener" className="btn-agua mt-6">Ver propiedades y reservar{Icono.flecha}</a>
          </div>
          <div>
            <h3 className="text-3xl">Renta de largo plazo</h3>
            <p className="mt-2 text-gris">Estudios para una o dos personas y departamentos de dos recámaras.</p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {largoPlazo.map((l) => <li key={l.t} className="rounded-2xl bg-white p-4"><b className="block">{l.t}</b><span className="text-sm text-gris">{l.d}</span></li>)}
            </ul>
            <a href={wa('Hola, busco una renta de largo plazo en Bacalar.')} target="_blank" rel="noopener" className="btn-laguna mt-5">{Icono.wa}Preguntar por una renta</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQueBacalar() {
  return (
    <section id="bacalar" className="bg-concha py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">¿Por qué Bacalar?</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">El nuevo hot spot del Caribe mexicano</h2>
            <p className="mt-4 text-lg text-gris">Una laguna de agua dulce alimentada por cenotes, muy cerca de Chetumal y del Mar Caribe de Mahahual. Para vivir, vacacionar o invertir.</p>
            <dl className="mt-8 space-y-5">
              {laguna.map((l) => (
                <div key={l.n} className="border-l-4 border-turquesa pl-4">
                  <dt className="font-[family-name:var(--font-display)] text-3xl text-laguna">{l.n}</dt>
                  <dd className="text-gris">{l.d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Foto n="laguna-aerea" alt="Vista aérea de la laguna de Bacalar con sus franjas de azules" sizes="(min-width:1024px) 25vw, 50vw" className="row-span-2 h-full w-full rounded-[1.5rem]" />
            <Foto n="laguna-muelle" alt="Muelle con pérgola y camastros sobre el agua turquesa de la laguna" sizes="(min-width:1024px) 25vw, 50vw" className="aspect-[4/3] w-full rounded-[1.5rem]" />
            <Foto n="laguna-cabana" alt="Cabaña entre la selva y los canales de la laguna, vista desde el aire" sizes="(min-width:1024px) 25vw, 50vw" className="aspect-[4/3] w-full rounded-[1.5rem]" />
          </div>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {porQue.map((p) => <li key={p.t} className="rounded-2xl bg-white p-5"><b className="block text-lg">{p.t}</b><span className="text-gris">{p.d}</span></li>)}
        </ul>
        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gris">Inversiones principales en la región</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {inversiones.map((i) => <li key={i} className="rounded-full border border-laguna/30 bg-white px-4 py-2 text-sm">{i}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Servicios inmobiliarios</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Compra, vende o desarrolla en Bacalar</h2>
          <p className="mt-4 text-gris">{respaldo}</p>
          <p className="mt-6 flex flex-wrap gap-2">{valores.map((v) => <span key={v} className="rounded-full bg-concha px-3 py-1 text-sm font-medium">{v}</span>)}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {servicios.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-black/10 bg-white p-6">
              <span className="block h-1.5 w-12 rounded-full" style={{ background: ['#3599BB', '#0B5B74', '#9FE3E8', '#2F5A3F'][i] }} aria-hidden="true" />
              <b className="mt-4 block text-xl">{s.t}</b>
              <span className="text-gris">{s.d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-laguna py-16 text-white lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-agua">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">¿Compras, vendes o quieres rentar tu propiedad?</h2>
          <p className="mt-4 max-w-xl text-lg text-white/85">Escríbeles por WhatsApp para una asesoría gratuita.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, vi su sitio y quiero una asesoría para una propiedad en Bacalar.')} target="_blank" rel="noopener" className="btn-agua">{Icono.wa}WhatsApp {negocio.whatsappTxt}</a>
            <a href={negocio.telefonoHref} className="btn-linea text-white">{Icono.tel}{negocio.telefono}</a>
          </div>
        </div>
        <dl className="divide-y divide-white/15 border-y border-white/15">
          {[
            ['WhatsApp', <a href={wa('Hola, vi su sitio.')} target="_blank" rel="noopener" className="hover:underline">{negocio.whatsappTxt}</a>],
            ['Teléfono', <a href={negocio.telefonoHref} className="hover:underline">{negocio.telefono}</a>],
            ['Correo', <a href={`mailto:${negocio.email}`} className="hover:underline">{negocio.email}</a>],
            ['Ciudad', <a href={negocio.maps} target="_blank" rel="noopener" className="hover:underline">{negocio.ciudad} (ver en Google Maps)</a>],
            ['Redes', <span className="flex gap-4"><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:underline">Instagram</a><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:underline">Facebook</a></span>],
          ].map(([t, v]) => (
            <div key={t as string} className="grid grid-cols-[7rem_1fr] gap-4 py-4"><dt className="text-sm font-semibold uppercase tracking-wider text-white/75">{t}</dt><dd className="font-medium">{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-hondo pb-28 pt-0 text-white/80 lg:pb-10">
      <div className="franjas h-2" aria-hidden="true" />
      <div className="contenedor flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('logo-claro.png')} alt="Azul Bacalar" width={medidas.logo[0]} height={medidas.logo[1]} className="h-12 w-auto" loading="lazy" />
        <p className="text-xs">© {new Date().getFullYear()} Azul Bacalar · {negocio.ciudad} · Un desarrollo de Grupo Bakal</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-hondo text-white lg:hidden">
      <a href={wa('Hola, vi su sitio y me interesa una propiedad en Bacalar.')} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-laguna py-3 text-xs font-semibold">{Icono.wa}WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3 text-xs font-medium">{Icono.tel}Llamar</a>
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
        <Desarrollos />
        <Administracion />
        <Rentas />
        <PorQueBacalar />
        <Servicios />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
