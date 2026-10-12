import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, lema, historia, razones } from './data/content';
import { socios } from './data/socios';
import type { Socio, Tipo } from './data/socios';
import { cifras, propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const dinero = (n: number) => `$${Math.round(n).toLocaleString('es-MX')} MXN`;
const num = (n: number) => n.toLocaleString('es-MX');
// Solo se enlaza un teléfono cuando trae los 10 dígitos; los de 7 se muestran tal cual.
const telLink = (t: string) => { const d = t.replace(/\D/g, ''); return d.length === 10 ? `tel:+52${d}` : null; };
const quitarAcentos = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Logo({ s, className = '' }: { s: Socio; className?: string }) {
  return <img src={src(s.logo)} alt={`Logotipo de ${s.nombre}`} width={s.lw} height={s.lh} loading="lazy" decoding="async" className={`max-h-full max-w-full object-contain ${className}`} />;
}

function Encabezado() {
  const enlaces = [['#socios', 'Socios'], ['#propiedades', 'Propiedades'], ['#por-que', '¿Por qué AMPI?'], ['#afiliate', 'Afíliate'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-verde text-white shadow-sm">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo-ampi-colima.png`} alt="AMPI Colima" width={420} height={140} className="h-9 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 font-display text-[0.95rem]">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-menta">{t}</a></li>)}</ul>
        </nav>
        <a href={`tel:${negocio.telefonoLink}`} className="btn-blanco hidden px-4 py-2.5 sm:inline-flex">{negocio.telefono}</a>
      </div>
    </header>
  );
}

function Portada() {
  const muro = socios.filter((s) => s.lw / s.lh > 1.2).slice(0, 12);
  return (
    <section id="inicio" className="bg-verde text-white">
      <div className="contenedor grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="font-display text-menta">{negocio.nombreLargo}</p>
          <h1 className="mt-4 text-5xl sm:text-7xl">Los profesionales inmobiliarios de Colima, en un solo lugar</h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">{socios.length} inmobiliarias, constructoras y notarías que se rigen por un Código de Ética, y {num(cifras.total)} propiedades que publican en Colima, Villa de Álvarez, Comala y el resto del estado.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#socios" className="btn-blanco">Verificar a mi asesor</a>
            <a href="#propiedades" className="btn-linea hover:bg-white/10">Ver propiedades</a>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4" aria-label="Algunos socios de AMPI Colima">
          {muro.map((s, i) => (
            <li key={s.logo} className={`${i >= 9 ? 'max-sm:hidden ' : ''}flex aspect-[3/2] items-center justify-center rounded-lg bg-losa p-3`}><Logo s={s} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const municipios = ['Colima', 'Villa de Álvarez', 'Cuauhtémoc'];
const tipos: [Tipo, string][] = [['inmobiliaria', 'Inmobiliarias'], ['construccion', 'Construcción y desarrollo'], ['notaria', 'Notaría y valuación']];

function TarjetaSocio({ s, oculta }: { s: Socio; oculta: boolean }) {
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex flex-col rounded-xl bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]`}>
      <div className="flex h-24 items-center justify-center rounded-lg bg-losa p-3"><Logo s={s} /></div>
      <h3 className="mt-4 text-xl leading-snug">{s.nombre}</h3>
      <p className="mt-1 text-sm text-gris">{s.dir || 'Dirección no publicada'}</p>
      <ul className="mt-4 space-y-1.5 text-[0.95rem]">
        {s.tel.map((t) => { const h = telLink(t); return <li key={t}>{h ? <a href={h} className="font-display font-medium text-verde hover:underline">{t}</a> : <span className="font-display">{t}</span>}</li>; })}
        {s.mail.map((m) => <li key={m} className="break-all"><a href={`mailto:${m}`} className="hover:underline">{m}</a></li>)}
      </ul>
      {(s.web || s.ig) && (
        <p className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 font-display text-sm">
          {s.web && <a href={s.web} className="underline underline-offset-4 hover:text-verde">Sitio web</a>}
          {s.ig && <a href={`https://www.instagram.com/${s.ig}/`} className="underline underline-offset-4 hover:text-verde">Instagram</a>}
        </p>
      )}
    </li>
  );
}

function Socios() {
  const [q, setQ] = useState('');
  const [mun, setMun] = useState('');
  const [tipo, setTipo] = useState<Tipo | ''>('');
  const [todos, setTodos] = useState(false);
  const busca = quitarAcentos(q.trim());
  const lista = useMemo(() => socios.filter((s) =>
    (!busca || quitarAcentos(`${s.nombre} ${s.mail.join(' ')} ${s.web} ${s.ig}`).includes(busca)) &&
    (!mun || (mun === 'otro' ? !s.mun : s.mun === mun)) &&
    (!tipo || s.tipos.includes(tipo))), [busca, mun, tipo]);
  const verificando = busca.length >= 3;
  return (
    <section id="socios" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Directorio de socios</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-6xl">¿Tu asesor es socio AMPI?</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Antes de entregar un anticipo o firmar, escribe el nombre de la inmobiliaria. Si aparece aquí, se rige por el Código de Ética de AMPI Colima.</p>

        <div className="mt-8 rounded-2xl bg-marino p-5 text-white sm:p-8">
          <label htmlFor="buscar" className="font-display text-lg">Nombre de la inmobiliaria, constructora o notaría</label>
          <input id="buscar" type="search" value={q} onChange={(e) => { setQ(e.target.value); setTodos(true); }} placeholder="Por ejemplo: Habitat, Formanzza, Century 21…" autoComplete="off"
            className="mt-3 w-full rounded-full border-0 bg-white px-6 py-4 font-display text-lg text-tinta placeholder:text-gris/70" />
          <p className="mt-4 min-h-14 text-[1.05rem]" aria-live="polite">
            {!verificando ? <span className="text-white/75">Escribe al menos tres letras.</span>
              : lista.length > 0 ? <span><strong className="font-display text-menta">Sí aparece:</strong> {lista.length === 1 ? lista[0].nombre : `${lista.length} socios coinciden`}, en el directorio publicado por AMPI Colima.</span>
                : <span><strong className="font-display text-[#FFD48A]">No aparece</strong> en el directorio publicado. Pídele su credencial AMPI o confírmalo con la asociación al <a href={`tel:${negocio.telefonoLink}`} className="underline">{negocio.telefono}</a>.</span>}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Municipio">
            {[['', 'Todos los municipios'], ...municipios.map((m) => [m, m]), ['otro', 'Sin dirección completa']].map(([v, t]) => (
              <button key={v} type="button" aria-pressed={mun === v} onClick={() => setMun(v)} className={`chip ${mun === v ? 'chip-on' : 'hover:border-verde'}`}>{t}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Especialidad">
            {[['', 'Todas las especialidades'] as [string, string], ...tipos].map(([v, t]) => (
              <button key={v} type="button" aria-pressed={tipo === v} onClick={() => setTipo(v as Tipo | '')} className={`chip ${tipo === v ? 'chip-on' : 'hover:border-verde'}`}>{t}</button>
            ))}
          </div>
        </div>

        <p className="mt-6 font-display text-gris">{lista.length} de {socios.length} socios</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{(todos ? lista : lista.slice(0, 8)).map((s, i) => <TarjetaSocio key={s.logo} s={s} oculta={!todos && i >= 4} />)}</ul>
        {!todos && lista.length > 4 && <button type="button" onClick={() => setTodos(true)} className={`btn-linea mt-6 w-full sm:w-auto ${lista.length <= 8 ? 'sm:hidden' : ''}`}>Ver los {lista.length} socios</button>}
        <p className="mt-6 text-sm text-gris">Datos tal como aparecen en la página "Socios AMPI" de ampicolima.com.mx (consultada el 11 de octubre de 2026).</p>
      </div>
    </section>
  );
}

const grupos: { id: Propiedad['grupo']; t: string; enlace: string }[] = [
  { id: 'casa', t: 'Casas en venta', enlace: negocio.catalogoVenta },
  { id: 'renta', t: 'En renta', enlace: negocio.catalogoRenta },
  { id: 'terreno', t: 'Terrenos', enlace: negocio.catalogoVenta },
];

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.sup) d.push(p.sup);
  return d.join(' · ');
}

function TarjetaPropiedad({ p, oculta }: { p: Propiedad; oculta: boolean }) {
  const precio = `${dinero(p.precio)}${p.op === 'En Renta' ? ' al mes' : ''}`;
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}group flex flex-col overflow-hidden rounded-xl bg-white`}>
      <a href={p.url} className="relative block aspect-[4/3] overflow-hidden bg-losa">
        <Foto n={p.foto} alt={`${p.tipo} en ${p.colonia}, ${p.mun}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 font-display text-sm text-verde">{p.op.replace('En ', '')}</span>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-sm text-gris">{p.mun}</p>
        <h3 className="mt-1 text-xl leading-snug">{p.tipo} en {p.colonia}</h3>
        <p className="mt-2 font-display text-lg font-semibold">{precio}</p>
        {detalles(p) && <p className="text-sm text-gris">{detalles(p)}</p>}
        <a href={p.url} className="mt-auto pt-4 font-display text-sm font-medium text-verde underline-offset-4 hover:underline">Ver ficha y contactar al socio</a>
      </div>
    </li>
  );
}

function Propiedades() {
  const [g, setG] = useState<Propiedad['grupo']>('casa');
  const lista = propiedades.filter((p) => p.grupo === g);
  const actual = grupos.find((x) => x.id === g)!;
  const barras = [['Colima', cifras.colima], ['Villa de Álvarez', cifras.villa], ['Comala', cifras.comala], ['Resto del estado y fuera', cifras.otros]] as const;
  return (
    <section id="propiedades" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Propiedades de los socios</p>
            <h2 className="mt-2 text-4xl sm:text-6xl">{num(cifras.total)} propiedades, una sola bolsa</h2>
            <p className="mt-4 max-w-xl text-lg text-gris">Los socios comparten su catálogo en el sitio de la asociación: {num(cifras.venta)} en venta y {num(cifras.renta)} en renta. Cada ficha lleva al socio que la ofrece.</p>
          </div>
          <dl className="space-y-3">
            {barras.map(([t, n]) => (
              <div key={t} className="grid grid-cols-[9.5rem_1fr_3rem] items-center gap-3 text-sm sm:grid-cols-[12rem_1fr_3rem]">
                <dt className="font-display">{t}</dt>
                <dd className="h-3 overflow-hidden rounded-full bg-losa"><span className="block h-full rounded-full bg-verde" style={{ width: `${(n / cifras.total) * 100}%` }} /></dd>
                <dd className="text-right font-display font-semibold">{n}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Tipo de propiedad">
          {grupos.map((x) => <button key={x.id} type="button" aria-pressed={g === x.id} onClick={() => setG(x.id)} className={`chip text-base ${g === x.id ? 'chip-on' : 'hover:border-verde'}`}>{x.t}</button>)}
        </div>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{lista.map((p, i) => <TarjetaPropiedad key={p.url} p={p} oculta={i >= 3} />)}</ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={actual.enlace} className="btn-verde">Ver el catálogo completo</a>
          <p className="max-w-xl text-sm text-gris">Una muestra de Colima, Villa de Álvarez y Comala. Las marcas en las fotos son de la inmobiliaria socia que publica cada propiedad.</p>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section id="por-que" className="py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">¿Por qué un socio AMPI?</p>
          <h2 className="mt-2 text-4xl sm:text-6xl">Tu patrimonio no se deja en manos del primo de un amigo</h2>
          <p className="mt-5 text-lg text-gris">AMPI agrupa a nivel nacional, desde {historia.nacional}, a {historia.socios}. En Colima está desde {historia.colima} y reúne a {historia.quienes}.</p>
          <figure className="mt-8 overflow-hidden rounded-2xl">
            <Foto n="representacion" alt="Dos representantes de AMPI de traje junto a la bandera de México y la bandera de AMPI" className="aspect-[4/3] w-full object-cover object-[50%_30%]" />
          </figure>
        </div>
        <ol className="grid gap-px self-start overflow-hidden rounded-2xl bg-tinta/10 sm:grid-cols-2">
          {razones.map((r, i) => (
            <li key={r.t} className="bg-papel p-6 sm:p-8">
              <span className="font-display text-5xl font-semibold text-verde/25" aria-hidden>{i + 1}</span>
              <h3 className="mt-2 text-2xl">{r.t}</h3>
              <p className="mt-3 text-gris">{r.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Afiliate() {
  return (
    <section id="afiliate" className="bg-marino py-16 text-white sm:py-20">
      <div className="contenedor flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="font-display text-menta">Para profesionales inmobiliarios</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Afíliate o asóciate a la red más grande de profesionales inmobiliarios</h2>
          <p className="mt-4 text-white/80">Capacitación por especialidad, desayunos informativos, el Congreso Nacional Inmobiliario, el directorio de socios y la bolsa compartida de propiedades.</p>
        </div>
        <a href={wa('Hola, AMPI Colima. Me interesa afiliarme a la asociación. ¿Qué requisitos hay?')} className="btn-blanco shrink-0 self-start lg:self-center">Quiero afiliarme</a>
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
          <h2 className="mt-2 text-4xl sm:text-6xl">Oficina de AMPI Colima</h2>
          <p className="mt-4 max-w-md text-lg text-gris">{lema}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${negocio.telefonoLink}`} className="btn-verde">Llamar</a>
            <a href={wa('Hola, AMPI Colima. Tengo una pregunta.')} className="btn-linea">WhatsApp</a>
          </div>
        </div>
        <dl className="divide-y divide-tinta/15 border-y border-tinta/15">
          <div className="py-5"><dt className="font-display text-sm text-gris">Teléfono</dt><dd className="mt-1 font-display text-xl"><a href={`tel:${negocio.telefonoLink}`} className="hover:text-verde">{negocio.telefono}</a></dd></div>
          <div className="py-5"><dt className="font-display text-sm text-gris">WhatsApp</dt><dd className="mt-1 font-display text-xl"><a href={wa('Hola, AMPI Colima.')} className="hover:text-verde">{negocio.whatsappVer}</a></dd></div>
          <div className="py-5"><dt className="font-display text-sm text-gris">Correo</dt><dd className="mt-1 space-y-1 break-words text-lg">{negocio.correos.map((c) => <a key={c} href={`mailto:${c}`} className="block hover:text-verde">{c}</a>)}</dd></div>
          <div className="py-5"><dt className="font-display text-sm text-gris">Oficina</dt><dd className="mt-1 text-lg"><a href={negocio.mapa} className="hover:text-verde">{negocio.direccion}</a></dd></div>
          <div className="py-5"><dt className="font-display text-sm text-gris">Redes</dt><dd className="mt-2 flex gap-6 font-display">{[['Facebook', negocio.facebook], ['Instagram', negocio.instagram], ['YouTube', negocio.youtube]].map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#socios" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Saltar al directorio</a>
      <Encabezado />
      <main>
        <Portada />
        <Socios />
        <Propiedades />
        <PorQue />
        <Afiliate />
        <Contacto />
      </main>
      <footer className="bg-verde-2 pb-24 pt-10 text-sm text-white/80 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <img src={`${base}logo-ampi-colima.png`} alt="AMPI Colima" width={420} height={140} className="h-8 w-auto" loading="lazy" />
          <p>{negocio.direccion} · {negocio.telefono}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-verde p-3 md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="btn-linea py-3 text-white">Llamar</a>
        <a href={wa('Hola, AMPI Colima. Tengo una pregunta.')} className="btn-blanco py-3">WhatsApp</a>
      </nav>
    </>
  );
}
