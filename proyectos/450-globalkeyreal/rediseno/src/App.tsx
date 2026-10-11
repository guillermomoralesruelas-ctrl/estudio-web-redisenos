import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, lema, intro, metas, servicios, internacional, otrosDestinos, sellos } from './data/content';
import { cifras, propiedades } from './data/propiedades';
import type { Meta, Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const dinero = (n: number, m: string) => `$${Math.round(n).toLocaleString('es-MX')} ${m}`;
const corto = (n: number, m: string) => (n >= 1e6 ? `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 1 })} M ${m}` : `$${Math.round(n / 1e3).toLocaleString('es-MX')} mil ${m}`);
const portada = 'departamentos-en-preventa-en-zona-real-z';
const datosMeta = cifras as unknown as Record<Meta, { total: number; desdeMXN: number | null; desdeUSD: number | null; zonas: string[] }>;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function detalles(p: Propiedad) {
  if (p.tipo === 'Otro') return '';
  const d: string[] = [];
  if (p.rec !== null) d.push(p.rec === 0 ? 'Estudio' : `${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(`${p.m2.toLocaleString('es-MX')} m²`);
  return d.join(' · ');
}
const desde = (p: Propiedad) => (/(Tickets|Departamentos|Terrenos|Lotes|Suites)/.test(p.nombre) ? 'Desde ' : '');

function Tarjeta({ p, oculta = false }: { p: Propiedad; oculta?: boolean }) {
  const precio = dinero(p.precio, p.moneda);
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}group flex flex-col bg-white`}>
      <a href={p.url} className="relative block aspect-[4/5] overflow-hidden bg-negro">
        <Foto n={p.foto} alt={`${p.nombre}: imagen del desarrollo`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-0 top-4 bg-negro px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-oro">{p.op === 'preventa' ? 'Preventa' : p.op === 'renta' ? 'Renta' : 'Venta'}</span>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-gris">{p.zona}{p.ciudad && p.ciudad !== p.zona ? ` · ${p.ciudad}` : ''}</p>
        <h3 className="mt-2 text-2xl leading-tight">{p.nombre}</h3>
        <p className="mt-3 text-lg font-medium">{desde(p)}{precio}</p>
        {detalles(p) && <p className="text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-medium">
          <a href={wa(`Hola, GlobalKey. Me interesa: ${p.nombre} (${precio}). ${p.url}`)} className="text-bronce underline-offset-4 hover:underline">Asesoría por WhatsApp</a>
          <a href={p.url} className="underline-offset-4 hover:underline">Ficha</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#estrategia', 'Estrategias'], ['#internacional', 'Internacional'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-marfil/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="GlobalKey International Real Estate" width={289} height={160} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-7 text-sm font-medium uppercase tracking-[0.12em]">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-bronce">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, GlobalKey. Quisiera una asesoría de inversión inmobiliaria.')} className="btn-negro hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-negro text-white">
      <Foto n={portada} alt="Torre residencial en Zona Real, Zapopan, con la ciudad de Guadalajara de fondo" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-negro via-negro/80 to-negro/20" />
      <div className="contenedor flex min-h-[34rem] flex-col justify-center py-16 sm:min-h-[40rem]">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-oro">Zapopan · Guadalajara · Miami</p>
        <h1 className="mt-5 max-w-3xl text-5xl sm:text-7xl">{lema}</h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">{intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#estrategia" className="btn-oro">Elegir mi estrategia</a>
          <a href={wa('Hola, GlobalKey. Quisiera agendar una asesoría personalizada.')} className="btn-linea">Agendar asesoría</a>
        </div>
      </div>
    </section>
  );
}

function Estrategia() {
  const [meta, setMeta] = useState<Meta>('preventa');
  const m = metas.find((x) => x.id === meta)!;
  const d = datosMeta[meta];
  const lista = propiedades.filter((p) => p.grupo === meta);
  return (
    <section id="estrategia" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Estrategias de inversión</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-6xl">¿Qué tipo de inversión buscas?</h2>
        <p className="mt-4 max-w-2xl text-gris">Elige una y verás cuántas opciones tienen publicadas hoy, desde cuánto se entra y una selección.</p>

        <div className="mt-10 grid grid-cols-2 gap-px bg-tinta/15 sm:grid-cols-3 lg:grid-cols-5" role="group" aria-label="Estrategias">
          {metas.map((x) => {
            const dx = datosMeta[x.id];
            const activa = x.id === meta;
            return (
              <button key={x.id} type="button" aria-pressed={activa} onClick={() => setMeta(x.id)}
                className={`flex min-h-32 flex-col justify-between p-4 text-left transition-colors sm:p-5 last:max-sm:col-span-2 ${activa ? 'bg-negro text-white' : 'bg-marfil hover:bg-white'}`}>
                <span className="font-display text-2xl leading-tight">{x.t}</span>
                <span className={`mt-3 text-sm ${activa ? 'text-oro' : 'text-bronce'}`}>{dx.total} {dx.total === 1 ? 'opción' : 'opciones'}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 bg-negro p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto]" aria-live="polite">
          <div>
            <h3 className="text-4xl sm:text-5xl">{m.t}</h3>
            <p className="mt-3 max-w-xl text-white/80">{m.d}</p>
          </div>
          <dl className="flex flex-wrap gap-x-10 gap-y-4 self-end">
            <div className="flex flex-col"><dt className="text-xs uppercase tracking-[0.2em] text-white/60">Publicadas</dt><dd className="order-first font-display text-5xl text-oro">{d.total}</dd></div>
            <div className="flex flex-col"><dt className="text-xs uppercase tracking-[0.2em] text-white/60">Entrada desde</dt><dd className="order-first font-display text-5xl text-oro">{d.desdeMXN ? corto(d.desdeMXN, 'MXN') : d.desdeUSD ? corto(d.desdeUSD, 'USD') : '—'}</dd></div>
          </dl>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{lista.map((p, i) => <Tarjeta key={p.url} p={p} oculta={i >= 3} />)}</ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa(`Hola, GlobalKey. Me interesa invertir en: ${m.t}. ¿Me pueden asesorar?`)} className="btn-negro">Quiero asesoría en {m.t.toLowerCase()}</a>
          <a href={m.enlace} className="btn-linea">Ver todas en su catálogo</a>
        </div>
      </div>
    </section>
  );
}

function Internacional() {
  return (
    <section id="internacional" className="relative isolate overflow-hidden bg-negro py-16 text-white sm:py-24">
      <Foto n="club-miami" alt="Salón de juegos con mesas de billar y ventanales frente al mar en un desarrollo residencial" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="contenedor">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-oro">Presencia internacional</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-6xl">Experiencia local, oportunidades en el mundo</h2>
        <ul className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
          {internacional.map((x) => (
            <li key={x.t} className="bg-negro/85 p-6 sm:p-8">
              <h3 className="text-3xl text-oro">{x.t}</h3>
              <p className="mt-3 text-white/80">{x.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-white/75">En México, además de Guadalajara: Puerto Vallarta, Riviera Maya, {otrosDestinos.join(', ')}.</p>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="mt-3 text-4xl sm:text-6xl">Asesoría en inversiones inmobiliarias globales</h2>
          <p className="mt-5 text-lg text-gris">GlobalKey International Real Estate, liderado por {negocio.director}, se especializa en propiedades de inversión y bienes raíces de lujo con una visión estratégica e internacional.</p>
          <ul className="mt-8 space-y-3">{servicios.map((s) => <li key={s} className="flex gap-3 border-t border-tinta/15 pt-3"><span aria-hidden className="text-bronce">—</span>{s}</li>)}</ul>
        </div>
        <div className="flex flex-col justify-between gap-8 bg-white p-6 sm:p-10">
          <div>
            <p className="eyebrow">Para propietarios</p>
            <p className="mt-3 font-display text-3xl leading-tight">¿Quieres vender o rentar tu propiedad?</p>
            <a href={negocio.propietarios} className="btn-negro mt-6">Vende o renta con nosotros</a>
          </div>
          <div>
            <p className="text-sm text-gris">Miembros y afiliaciones</p>
            <ul className="mt-4 flex flex-wrap items-center gap-6">{sellos.map((s) => <li key={s.n}><img src={`${base}${s.n}.png`} alt={s.alt} width={s.w} height={s.h} className="h-12 w-auto" loading="lazy" /></li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-marfil-2 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-6xl">¿Listo para invertir de manera inteligente?</h2>
          <p className="mt-4 text-gris">Escríbenos y agendamos una asesoría personalizada.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, GlobalKey. Quisiera agendar una asesoría personalizada.')} className="btn-negro">WhatsApp</a>
            <a href={`tel:${negocio.telefonoLink}`} className="btn-linea">Llamar</a>
          </div>
        </div>
        <dl className="divide-y divide-tinta/15 border-y border-tinta/15">
          <div className="py-5"><dt className="text-sm text-gris">Llamada y WhatsApp</dt><dd className="mt-1 text-xl"><a href={`tel:${negocio.telefonoLink}`} className="hover:text-bronce">{negocio.telefono}</a></dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Correo</dt><dd className="mt-1 break-words text-xl"><a href={`mailto:${negocio.correo}`} className="hover:text-bronce">{negocio.correo}</a></dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Oficina</dt><dd className="mt-1 text-xl">{negocio.direccion}</dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Redes</dt><dd className="mt-2 flex gap-6">{[['Instagram', negocio.instagram], ['Facebook', negocio.facebook]].map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#estrategia" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Estrategia />
        <Internacional />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-negro pb-24 pt-10 text-sm text-white/70 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-xl text-white">GlobalKey International Real Estate</p>
          <p>{negocio.telefono} · {negocio.correo}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-negro p-3 md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="btn-linea py-3 text-white">Llamar</a>
        <a href={wa('Hola, GlobalKey. Quisiera una asesoría de inversión inmobiliaria.')} className="btn-oro py-3">WhatsApp</a>
      </nav>
    </>
  );
}
