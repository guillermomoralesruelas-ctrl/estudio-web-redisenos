import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, wa, intro, servicios, asociaciones, registros, propositos, valuador, equipo, mejoravit, preguntas } from './data/content';
import { propiedades, total, cuentas, ciudades } from './data/propiedades';
import type { Filtro, Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const dinero = (n: number, m: string) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 2 })} ${m}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 900];
  return <img src={`${base}${n}.webp`} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const tipoTitulo = (p: Propiedad) => `${p.tipo} en ${p.zona}, ${p.ciudad}`;

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(`${p.m2.toLocaleString('es-MX')} m²${p.tipo.startsWith('Terreno') || p.tipo === 'Rancho' ? ' de terreno' : ''}`);
  return d.join(' · ');
}

function Tarjeta({ p }: { p: Propiedad }) {
  const precio = `${dinero(p.precio, p.moneda)}${p.porM2 ? ' por m²' : ''}${p.op === 'renta' ? ' al mes' : ''}`;
  const op = p.op === 'preventa' ? 'Preventa' : p.op === 'renta' ? 'Renta' : 'Venta';
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(27,24,48,.08)]">
      <a href={p.url} className="relative block aspect-[4/3] overflow-hidden bg-papel-2">
        <Foto n={p.foto} alt={`${tipoTitulo(p)}: foto de la propiedad`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${p.op === 'venta' ? 'bg-white text-insa' : 'bg-insa text-white'}`}>{op}</span>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-gris">{p.zona} · {p.ciudad}</p>
        <h3 className="mt-2 text-lg leading-snug">{p.tipo} en {p.zona}</h3>
        <p className="mt-2 text-xl font-semibold text-insa">{precio}</p>
        {detalles(p) && <p className="text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-semibold">
          <a href={wa(`Hola, Grupo INSA. Me interesa: ${tipoTitulo(p)} (${precio}). ${p.url}`)} className="text-mar underline-offset-4 hover:underline">Preguntar por WhatsApp</a>
          <a href={p.url} className="underline-offset-4 hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#propiedades', 'Propiedades'], ['#avaluos', 'Avalúos'], ['#equipo', 'Equipo'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="Grupo INSA, inmobiliaria y avalúos" width={489} height={200} className="h-10 w-auto" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-7 text-[0.95rem] font-medium">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-insa">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, Grupo INSA. Quisiera información.')} className="btn-insa hidden px-5 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-white">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="eyebrow">Inmobiliaria &amp; avalúos · Ensenada, Rosarito y Tijuana</p>
          <h1 className="mt-5 text-[2.6rem] sm:text-6xl">Casas, terrenos y avalúos en <span className="text-insa">Ensenada</span></h1>
          <p className="mt-6 max-w-xl text-lg text-gris">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#propiedades" className="btn-insa">Ver propiedades</a>
            <a href="#avaluos" className="btn-linea text-insa">Necesito un avalúo</a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-tinta/10 pt-6">
            {[[String(total), 'propiedades publicadas'], ['12', 'años en operaciones inmobiliarias'], ['16', 'años en valuación']].map(([n, t]) => (
              <div key={t} className="flex flex-col"><dt className="text-sm leading-snug text-gris">{t}</dt><dd className="order-first font-display text-4xl font-semibold text-insa sm:text-5xl">{n}</dd></div>
            ))}
          </dl>
        </div>
        <figure className="relative">
          <Foto n="ensenada-ocean-front-lot-main-street-0-44acre" alt="Vista aérea de la playa de Ensenada con la ciudad junto al mar y las montañas al fondo" eager className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 text-sm shadow-lg sm:right-auto sm:max-w-xs">
            <span className="font-semibold">Terreno frente al mar, Playa Hermosa</span><br />
            <span className="text-gris">1,800 m² sobre el Blvd. Costero · una de las {total} que tienen publicadas</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const filtros: { id: Filtro | 'todas'; t: string }[] = [
  { id: 'todas', t: 'Selección' },
  { id: 'casas', t: 'Casas' },
  { id: 'terrenos', t: 'Terrenos y ranchos' },
  { id: 'mar', t: 'Frente o vista al mar' },
  { id: 'preventa', t: 'Preventa' },
  { id: 'renta', t: 'Renta' },
];

function Propiedades() {
  const [f, setF] = useState<Filtro | 'todas'>('todas');
  const [todas, setTodas] = useState(false);
  const lista = f === 'todas' ? propiedades.filter((_, i) => i % 3 === 0 || i < 4) : propiedades.filter((p) => p.tags.includes(f));
  const visibles = todas ? lista : lista.slice(0, 6);
  const enCiudad = Object.entries(ciudades).sort((a, b) => b[1] - a[1]);
  return (
    <section id="propiedades" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Propiedades</p>
            <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">{total} publicadas, casi todas en Ensenada</h2>
            <p className="mt-4 max-w-2xl text-gris">{enCiudad.map(([c, n]) => `${c} ${n}`).join(' · ')}. Abajo, una muestra con foto; la ficha completa de cada una sigue en su catálogo.</p>
          </div>
          <a href={negocio.catalogo} className="btn-linea text-insa">Catálogo completo</a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar propiedades">
          {filtros.map((x) => {
            const activo = x.id === f;
            return (
              <button key={x.id} type="button" aria-pressed={activo} onClick={() => { setF(x.id); setTodas(false); }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activo ? 'border-insa bg-insa text-white' : 'border-tinta/15 bg-white hover:border-insa'}`}>
                {x.t}{x.id !== 'todas' && <span className={`ml-2 font-mono text-xs ${activo ? 'text-white/80' : 'text-gris'}`}>{cuentas[x.id]}</span>}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">{visibles.map((p) => <Tarjeta key={p.url} p={p} />)}</ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {lista.length > 6 && !todas && <button type="button" onClick={() => setTodas(true)} className="btn-insa">Ver {lista.length - 6} más de la muestra</button>}
          {f !== 'todas' && <p className="text-sm text-gris">{cuentas[f]} publicadas en total en este filtro; aquí {lista.length} con foto.</p>}
        </div>
      </div>
    </section>
  );
}

function Avaluos() {
  const [id, setId] = useState(propositos[0].id);
  const p = propositos.find((x) => x.id === id)!;
  const folio = String(propositos.indexOf(p) + 1).padStart(2, '0');
  return (
    <section id="avaluos" className="bg-noche py-16 text-white sm:py-24">
      <div className="contenedor">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-insa-claro">Avalúos · valuación inmobiliaria</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">¿Para qué necesitas el avalúo?</h2>
        <p className="mt-4 max-w-2xl text-white/75">Cada trámite pide un avalúo distinto. Elige el tuyo y te mostramos cuál es, quién lo firma, qué papeles llevar y cómo se cobra, con los datos que Grupo INSA publica.</p>
        <p className="mt-6 font-mono text-xs text-white/60 lg:hidden">Desliza para ver los nueve trámites →</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0" role="group" aria-label="Propósito del avalúo">
            {propositos.map((x, i) => {
              const activo = x.id === id;
              return (
                <button key={x.id} type="button" aria-pressed={activo} onClick={() => setId(x.id)}
                  className={`flex w-60 shrink-0 snap-start items-start gap-3 rounded-xl px-4 py-3 lg:w-auto text-left text-[0.95rem] leading-snug transition-colors ${activo ? 'bg-white text-insa' : 'bg-noche-2 text-white/90 hover:bg-white/15'}`}>
                  <span className={`font-mono text-xs ${activo ? 'text-insa' : 'text-insa-claro'} pt-0.5`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-medium">{x.para}</span>
                </button>
              );
            })}
          </div>

          <article key={p.id} className="hoja relative overflow-hidden rounded-sm bg-dictamen p-6 text-tinta shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] sm:p-10" aria-live="polite">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-tinta pb-4">
              <div className="flex items-center gap-3">
                <img src={`${base}logo-icono.png`} alt="" width={165} height={200} className="h-10 w-auto" />
                <div className="font-mono text-[0.7rem] uppercase leading-tight tracking-[0.14em] text-gris">Grupo INSA<br />Inmobiliaria &amp; avalúos</div>
              </div>
              <p className="font-mono text-xs text-gris">Hoja de trámite · {folio}/{String(propositos.length).padStart(2, '0')}</p>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-gris">Para</p>
            <p className="mt-1 text-lg">{p.para}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-gris">Lo que necesitas</p>
            <h3 className="mt-1 text-3xl text-insa sm:text-4xl">{p.tipo}</h3>
            <p className="mt-3 max-w-2xl text-gris">{p.que}</p>

            <dl className="mt-6 grid gap-x-8 gap-y-5 border-t border-dashed border-tinta/30 pt-5 md:grid-cols-2">
              <div><dt className="font-mono text-xs uppercase tracking-[0.16em] text-gris">Firma y registro</dt><dd className="mt-1 text-[0.95rem]">{p.registro}</dd></div>
              <div><dt className="font-mono text-xs uppercase tracking-[0.16em] text-gris">Cobertura</dt><dd className="mt-1 text-[0.95rem]">{p.cobertura}</dd></div>
              <div className="md:col-span-2"><dt className="font-mono text-xs uppercase tracking-[0.16em] text-gris">Cómo se cobra</dt><dd className="mt-1 text-[0.95rem] font-medium">{p.costo}{p.ejemplo && <span className="block font-normal text-gris">{p.ejemplo}</span>}</dd></div>
            </dl>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-gris">Papeles para llevar</p>
            <ol className="mt-3 grid gap-x-8 gap-y-2 text-[0.95rem] md:grid-cols-2">
              {p.papeles.map((x, i) => <li key={x} className="flex gap-3 border-b border-tinta/10 pb-2"><span className="font-mono text-xs text-insa pt-1">{String(i + 1).padStart(2, '0')}</span>{x}</li>)}
            </ol>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <a href={wa(`Hola, Grupo INSA. Necesito un avalúo para: ${p.para.toLowerCase()} (${p.tipo}). ¿Qué sigue?`)} className="btn-insa">Pedir este avalúo por WhatsApp</a>
              <div key={`s-${p.id}`} aria-hidden className="sello pointer-events-none select-none rounded-full border-[3px] border-insa/70 px-5 py-3 text-center font-mono text-[0.65rem] font-medium uppercase leading-tight tracking-[0.16em] text-insa/80">
                Valuador profesional<br />SHF · Ensenada, B.C.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Respaldo() {
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Foto n="oficina-avaluo-firma" alt="Manos firmando un avalúo con la foto de la propiedad, en la oficina de Grupo INSA" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
        <div>
          <p className="eyebrow">Quién firma</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{valuador.nombre}</h2>
          <p className="mt-3 text-lg text-gris">{valuador.cargo}. Ingenieros civiles con posgrado en valuación, autorizados por las dependencias de gobierno para cada servicio que ofrecen.</p>
          <ul className="mt-6 space-y-2">{valuador.trayectoria.map((t) => <li key={t} className="flex gap-3 border-t border-tinta/10 pt-2"><span aria-hidden className="text-insa">—</span>{t}</li>)}</ul>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {registros.map(([t, v]) => <div key={t} className="rounded-xl bg-white p-4"><dt className="text-sm text-gris">{t}</dt><dd className="mt-1 font-mono font-medium text-insa">{v}</dd></div>)}
          </dl>
        </div>
      </div>
      <div className="contenedor mt-16">
        <p className="text-sm text-gris">Miembros activos de</p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {asociaciones.map(([s, t]) => <li key={s} className="rounded-xl border border-tinta/10 bg-white p-4"><span className="font-display text-lg font-semibold text-insa">{s}</span><span className="mt-1 block text-sm text-gris">{t}</span></li>)}
        </ul>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Equipo</p>
        <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Quién te atiende en la oficina del centro de Ensenada</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {equipo.map((e) => (
            <li key={e.nombre} className="flex flex-col overflow-hidden rounded-2xl bg-papel">
              <div className="aspect-[4/3] overflow-hidden bg-papel-2">
                {e.foto
                  ? <Foto n={e.foto} alt={`Retrato de ${e.nombre}`} className="h-full w-full object-cover object-top" />
                  : <div className="flex h-full items-center justify-center font-display text-6xl font-semibold text-insa/70" aria-hidden>MG</div>}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl">{e.nombre}</h3>
                <p className="mt-1 text-sm text-gris">{e.cargo}</p>
                <p className="mt-3 break-words text-sm">{e.correo}</p>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-semibold">
                  <a href={`https://wa.me/${e.wa}?text=${encodeURIComponent(`Hola, ${e.nombre.split(' ')[0]}. Te escribo desde el sitio de Grupo INSA.`)}`} className="text-mar underline-offset-4 hover:underline">WhatsApp {e.tel}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-3 text-4xl">Todo el trámite en un solo lugar</h2>
          <ul className="mt-6 space-y-2">{servicios.map((s) => <li key={s} className="flex gap-3 border-t border-tinta/10 pt-2"><span aria-hidden className="text-insa">—</span>{s}</li>)}</ul>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-insa p-7 text-white sm:p-9">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-insa-claro">Propietarios</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight">¿Quieres vender o rentar tu casa o terreno?</p>
            <p className="mt-3 text-white/80">Asesoría gratuita para vender al mejor precio posible, con valuadores en la misma oficina.</p>
          </div>
          <a href={wa('Hola, Grupo INSA. Quiero vender o rentar mi propiedad.')} className="btn-blanco mt-8 self-start">Vender o rentar con ellos</a>
        </div>
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white">
          <Foto n="oficina-asesoria" alt="Leonardo Sánchez atendiendo a un cliente en el escritorio de la oficina" className="aspect-[16/9] w-full object-cover" />
          <div className="p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-insa">{mejoravit.t} · {mejoravit.costo}</p>
            <p className="mt-3 text-gris">{mejoravit.d}</p>
            <a href={wa('Hola, Grupo INSA. Me interesa el trámite Mejoravit.')} className="mt-4 inline-block text-sm font-semibold text-mar underline-offset-4 hover:underline">Preguntar por el trámite</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="contenedor max-w-4xl">
        <h2 className="text-3xl sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-tinta/10 border-y border-tinta/10">
          {preguntas.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">{q}<span aria-hidden className="text-2xl text-insa transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-3 text-gris">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-papel-2 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Visítanos en el Centro Profesional Quince</h2>
          <p className="mt-4 text-gris">Citas en línea y servicio en sitio. Escríbenos y te atendemos a la brevedad.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Grupo INSA. Quisiera información.')} className="btn-insa">WhatsApp</a>
            <a href={`tel:${negocio.telefonoLink}`} className="btn-linea text-insa">Llamar</a>
            <a href={negocio.mapa} className="btn-linea text-insa">Cómo llegar</a>
          </div>
        </div>
        <dl className="divide-y divide-tinta/15 border-y border-tinta/15">
          <div className="py-4"><dt className="text-sm text-gris">Celular y WhatsApp</dt><dd className="mt-1 text-xl"><a href={`tel:${negocio.telefonoLink}`} className="hover:text-insa">{negocio.telefono}</a></dd></div>
          <div className="py-4"><dt className="text-sm text-gris">Oficina</dt><dd className="mt-1 text-lg">{negocio.fijos.join(' · ')}</dd></div>
          <div className="py-4"><dt className="text-sm text-gris">Correo</dt><dd className="mt-1 break-words text-lg"><a href={`mailto:${negocio.correo}`} className="hover:text-insa">{negocio.correo}</a></dd></div>
          <div className="py-4"><dt className="text-sm text-gris">Dirección</dt><dd className="mt-1 text-lg"><a href={negocio.mapa} className="hover:text-insa">{negocio.calle}, {negocio.colonia}, {negocio.ciudad}</a></dd></div>
          <div className="py-4"><dt className="text-sm text-gris">Horario</dt><dd className="mt-1 grid gap-1">{negocio.horario.map(([d, h]) => <span key={d} className="flex justify-between gap-4"><span>{d}</span><span className="font-mono">{h}</span></span>)}</dd></div>
          <div className="py-4"><dt className="text-sm text-gris">Redes</dt><dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2">{negocio.redes.map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#propiedades" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Propiedades />
        <Avaluos />
        <Respaldo />
        <Equipo />
        <Servicios />
        <Preguntas />
        <Contacto />
      </main>
      <footer className="bg-noche pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={`${base}logo-icono.png`} alt="" width={165} height={200} className="h-9 w-auto rounded-md bg-white p-1" />
            <p className="font-display text-lg font-semibold text-white">{negocio.nombre}</p>
          </div>
          <p>{negocio.telefono} · {negocio.correo} · Licencia ENS20240001</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-white/10 bg-noche p-3 md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="btn border-2 border-white/40 px-2 py-3 text-white">Llamar</a>
        <a href="#avaluos" className="btn border-2 border-white/40 px-2 py-3 text-white">Avalúo</a>
        <a href={wa('Hola, Grupo INSA. Quisiera información.')} className="btn bg-white px-2 py-3 text-insa">WhatsApp</a>
      </nav>
    </>
  );
}
