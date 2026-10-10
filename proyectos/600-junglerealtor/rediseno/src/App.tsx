import { useMemo, useState } from 'react';
import { destinos, equipo, intro, negocio, propiedades, resenas, wa, web, type Destino, type Propiedad, type Tipo } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const usd = (n: number) => `US$${Math.round(n).toLocaleString('en-US')}`;
const miles = (n: number) => `US$${Math.round(n / 1000)} mil`;

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1400, 933];
  return (
    <img src={web(n)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  correo: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>,
};

const tipos: { id: Tipo; t: string }[] = [
  { id: 'terreno', t: 'Terrenos' },
  { id: 'condominio', t: 'Condominios' },
  { id: 'casa', t: 'Casas y villas' },
];
const tipoTxt: Record<Tipo, string> = { terreno: 'Terreno', condominio: 'Condominio', casa: 'Casa' };

function Cabecera() {
  const enlaces = [['#propiedades', 'Propiedades'], ['#destinos', 'Destinos'], ['#equipo', 'Equipo'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Jungle Realtor, inicio">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Jungle Realtor" width={medidas.logo[0]} height={medidas.logo[1]} className="h-9 w-auto sm:h-11" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-[0.95rem] font-medium">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-hoja">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola Jungle Realtor, quiero información sobre propiedades en la Riviera Maya.')} className="btn-selva !px-5 !py-3 text-sm">{Icono.wa} WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden bg-selva-honda text-white">
      <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-laguna-clara">{negocio.zona}</p>
          <h1 className="mt-5 text-[3rem] sm:text-7xl lg:text-[5.2rem]">Bienes raíces en la Riviera Maya</h1>
          <p className="mt-5 font-display text-2xl italic text-dorado">“{negocio.lema}”</p>
          <p className="mt-6 max-w-xl text-lg text-white/90">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#propiedades" className="btn-claro">Ver propiedades</a>
            <a href={wa('Hola Jungle Realtor, quiero asesoría para invertir en la Riviera Maya.')} className="btn-linea">{Icono.wa} Hablar con un asesor</a>
          </div>
        </div>
        <figure className="relative">
          <Foto n="p-baclt21" alt="Orilla de la laguna de Bacalar, de agua verde turquesa, rodeada de selva" prioridad className="aspect-[4/5] w-full rounded-[2rem] sm:aspect-[4/3] lg:aspect-[4/5]" />
          <figcaption className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl bg-selva-honda/85 p-3 pr-4 text-sm backdrop-blur">
            <Foto n="premio-best-in-tulum" alt="Medalla Best in Tulum 2024 de TrustFirst" className="size-16 shrink-0 rounded-full" />
            <span><strong className="block text-base">Best Tulum Real Estate Agents 2024</strong>Mención honorífica. Al fondo: la laguna de Bacalar.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* Mapa estilizado de la costa: la península de Yucatán a la izquierda y el Caribe a la derecha. */
function Mapa({ destino, setDestino, cuenta }: { destino: Destino | null; setDestino: (d: Destino | null) => void; cuenta: Record<Destino, number> }) {
  return (
    <svg viewBox="0 0 340 460" className="h-auto w-full" role="group" aria-label="Mapa de destinos: toca uno para filtrar">
      <rect width="340" height="460" rx="28" className="fill-laguna/25" />
      <path d="M0 30 L120 40 L200 52 L262 68 L276 92 L258 132 L240 170 L222 206 L200 246 L182 290 L166 340 L152 392 L142 460 L0 460 Z" className="fill-arena" />
      <path d="M0 30 L120 40 L200 52 L262 68 L276 92 L258 132 L240 170 L222 206 L200 246 L182 290 L166 340 L152 392 L142 460" className="fill-none stroke-hoja/40" strokeWidth="2" />
      <ellipse cx="276" cy="186" rx="10" ry="20" className="fill-arena stroke-hoja/40" strokeWidth="2" />
      <ellipse cx="120" cy="404" rx="5" ry="26" transform="rotate(14 120 404)" className="fill-laguna" />
      <text x="300" y="300" className="fill-selva/70 text-[13px] font-semibold tracking-[0.2em]" textAnchor="middle" transform="rotate(-70 300 300)">MAR CARIBE</text>
      <text x="70" y="250" className="fill-selva/50 text-[12px] font-semibold tracking-[0.2em]" textAnchor="middle">SELVA</text>
      {destinos.map((d) => {
        const activo = destino === d.id;
        const n = cuenta[d.id];
        const izq = d.id === 'cuyo' || d.id === 'bacalar';
        return (
          <g key={d.id}>
            <a href={`#mapa-${d.id}`} onClick={(e) => { e.preventDefault(); setDestino(activo ? null : d.id); }} aria-pressed={activo} aria-label={`${d.t}: ${n} ${n === 1 ? 'propiedad' : 'propiedades'}`}>
              <circle cx={d.x} cy={d.y} r={activo ? 15 : 12} className={activo ? 'fill-dorado' : n ? 'fill-selva' : 'fill-gris/50'} />
              <text x={d.x} y={d.y + 4.5} textAnchor="middle" className={`text-[12px] font-bold ${activo ? 'fill-selva-honda' : 'fill-white'}`}>{n}</text>
              <text x={izq ? d.x + 20 : d.x - 20} y={d.y + 5} textAnchor={izq ? 'start' : 'end'} className={`text-[13px] font-bold ${activo ? 'fill-dorado-hondo' : 'fill-tinta'}`}>{d.t.split(',')[0]}</text>
            </a>
          </g>
        );
      })}
    </svg>
  );
}

function Tarjeta({ p }: { p: Propiedad }) {
  const datos = [p.rec && `${p.rec} rec.`, p.banos && `${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`, p.m2 && `${p.m2.toLocaleString('es-MX')} m²`].filter(Boolean);
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-tinta/10">
      <div className="relative">
        <Foto n={p.foto} alt={p.alt} className="aspect-[3/2] w-full" />
        {p.nueva && <span className="absolute left-3 top-3 rounded-full bg-dorado px-3 py-1 text-xs font-bold text-selva-honda">Nueva</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-hoja">{tipoTxt[p.tipo]} · {p.lugar}</p>
        <h3 className="mt-2 text-xl">{p.t}</h3>
        {datos.length > 0 && <p className="mt-2 text-sm text-gris">{datos.join(' · ')}</p>}
        <div className="mt-auto pt-4">
          <p className="font-display text-3xl font-semibold text-selva">{usd(p.precio)}</p>
          {p.mls && <p className="text-xs text-gris">MLS {p.mls}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href={wa(`Hola Jungle Realtor, me interesa: ${p.t} (${p.lugar}${p.mls ? `, MLS ${p.mls}` : ''}), ${usd(p.precio)}. ¿Sigue disponible?`)} className="btn-selva !px-4 !py-2.5 text-sm">{Icono.wa} Preguntar</a>
            <a href={p.url} className="text-sm font-semibold underline underline-offset-4 hover:text-hoja">Ver ficha<span className="sr-only">: {p.t}</span></a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Buscador() {
  const [destino, setDestino] = useState<Destino | null>(null);
  const [tipo, setTipo] = useState<Tipo | null>(null);
  const [tope, setTope] = useState(500000);
  const caben = useMemo(() => propiedades.filter((p) => (!tipo || p.tipo === tipo) && p.precio <= tope), [tipo, tope]);
  const lista = useMemo(() => caben.filter((p) => !destino || p.destino === destino).sort((a, b) => a.precio - b.precio), [caben, destino]);
  const cuenta = useMemo(() => {
    const c = Object.fromEntries(destinos.map((d) => [d.id, 0])) as Record<Destino, number>;
    caben.forEach((p) => { c[p.destino] += 1; });
    return c;
  }, [caben]);
  const d = destinos.find((x) => x.id === destino);
  const resumen = `${lista.length} ${lista.length === 1 ? 'propiedad' : 'propiedades'}${d ? ` en ${d.t}` : ''}${tope < 500000 ? ` hasta ${miles(tope)}` : ''}`;

  return (
    <section id="propiedades" className="py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Propiedades destacadas</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Tu presupuesto, en el mapa de la costa</h2>
          </div>
          <p className="text-lg text-gris">Mueve tu presupuesto, elige el tipo y toca un destino: el mapa cuenta cuántas de sus {propiedades.length} propiedades destacadas te quedan en cada lugar.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[22rem_1fr]">
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-5 ring-1 ring-tinta/10">
              <label htmlFor="tope" className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-gris">Presupuesto</span>
                <span className="font-display text-2xl font-semibold text-selva">{tope >= 500000 ? 'Sin tope' : `hasta ${miles(tope)}`}</span>
              </label>
              <input id="tope" type="range" min={100000} max={500000} step={25000} value={tope} onChange={(e) => setTope(+e.target.value)} className="mt-3 w-full"
                aria-valuetext={tope >= 500000 ? 'Sin tope' : `hasta ${usd(tope)}`} />
              <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Tipo de propiedad">
                <button type="button" onClick={() => setTipo(null)} aria-pressed={!tipo} className={`chip ${!tipo ? 'bg-selva text-white ring-selva' : 'ring-tinta/20 hover:bg-arena'}`}>Todo</button>
                {tipos.map((t) => (
                  <button key={t.id} type="button" onClick={() => setTipo(tipo === t.id ? null : t.id)} aria-pressed={tipo === t.id}
                    className={`chip ${tipo === t.id ? 'bg-selva text-white ring-selva' : 'ring-tinta/20 hover:bg-arena'}`}>{t.t}</button>
                ))}
              </div>
              <div className="mt-5"><Mapa destino={destino} setDestino={setDestino} cuenta={cuenta} /></div>
              {destino && <button type="button" onClick={() => setDestino(null)} className="mt-3 text-sm font-semibold underline underline-offset-4">Ver todos los destinos</button>}
            </div>
          </div>

          <div>
            <p className="font-semibold" aria-live="polite">{resumen}</p>
            {lista.length > 0 ? (
              <div className="mt-5 grid gap-5 sm:grid-cols-2">{lista.map((p) => <Tarjeta key={p.foto} p={p} />)}</div>
            ) : (
              <div className="mt-5 rounded-3xl bg-laguna-clara p-8">
                <p className="font-display text-2xl">Ninguna destacada con esos filtros{d ? ` en ${d.t}` : ''}.</p>
                <p className="mt-2 text-gris">Tienen más propiedades en su buscador, o un asesor te busca opciones.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={wa(`Hola Jungle Realtor, busco ${tipo ? tipos.find((t) => t.id === tipo)!.t.toLowerCase() : 'una propiedad'}${d ? ` en ${d.t}` : ' en la Riviera Maya'}${tope < 500000 ? ` hasta ${usd(tope)}` : ''}. ¿Qué opciones tienen?`)} className="btn-selva">{Icono.wa} Pedir opciones</a>
                  <a href={d ? d.url : negocio.buscar} className="btn-linea text-selva">Ver su buscador</a>
                </div>
              </div>
            )}
            <p className="mt-6 text-sm text-gris">Precios en dólares como los publica su sitio en inglés al 10 de octubre de 2026. Confirma precio y disponibilidad con un asesor. <a href={negocio.buscar} className="font-semibold underline underline-offset-4">Ver todas en su buscador</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Destinos() {
  const conFoto = destinos.filter((d) => d.foto);
  return (
    <section id="destinos" className="bg-selva py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-laguna-clara">Destinos</p>
        <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">De la laguna de Bacalar al Caribe de Cancún</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conFoto.map((d) => (
            <a key={d.id} href={d.url} className="group overflow-hidden rounded-3xl bg-selva-honda ring-1 ring-white/10">
              <Foto n={d.foto!} alt={`Vista de ${d.t}`} className="aspect-square w-full transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-2xl">{d.t}</h3>
                <p className="mt-2 text-sm text-white/85">{d.d}</p>
                <p className="mt-3 text-sm font-semibold text-laguna-clara underline underline-offset-4">Propiedades en {d.t}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-8 text-white/85">También en <a href={destinos.find((d) => d.id === 'cancun')!.url} className="font-semibold underline underline-offset-4">Cancún</a>, Akumal, Cozumel, Holbox, Puerto Morelos y Yucatán.</p>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Equipo</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Conoce a tus próximas guías en la jungla</h2>
            <p className="mt-5 text-lg text-gris">Asesores en Tulum, Playa del Carmen, Puerto Aventuras y Bacalar. Escríbele directo a quien te atendió, o al equipo por WhatsApp.</p>
          </div>
          <Foto n="equipo-grupo" alt="El equipo de Jungle Realtor de pie sobre el pasto, con palmeras y el mar detrás" className="aspect-[4/3] w-full rounded-[2rem]" />
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {equipo.map((p) => (
            <li key={p.n} className="overflow-hidden rounded-3xl bg-white ring-1 ring-tinta/10">
              <Foto n={p.f} alt={`Retrato de ${p.n}`} className="aspect-[4/5] w-full object-top" />
              <div className="p-4">
                <h3 className="text-lg">{p.n}</h3>
                <p className="mt-1 text-sm text-gris">{p.r}</p>
                <a href={`mailto:${p.c}`} className="mt-2 block break-all text-sm font-semibold text-hoja underline underline-offset-4">{p.c}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="bg-laguna-clara py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Reseñas en Google</p>
        <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Quienes ya compraron en el Caribe</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {resenas.map((r) => (
            <figure key={r.a} className="rounded-3xl bg-white p-6 ring-1 ring-tinta/10">
              <blockquote lang="en" className="font-display text-xl leading-snug">“{r.t}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gris">{r.a}</figcaption>
            </figure>
          ))}
        </div>
        <a href={negocio.mapa} className="btn-linea mt-8 text-selva">Ver sus reseñas en Google</a>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Profesionales inmobiliarios en la Riviera Maya</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div><dt className="text-xs font-bold uppercase tracking-[0.18em] text-gris">Teléfono y WhatsApp</dt><dd className="mt-1"><a href={negocio.telHref} className="underline underline-offset-4">{negocio.telTxt}</a></dd></div>
            <div><dt className="text-xs font-bold uppercase tracking-[0.18em] text-gris">Correo</dt><dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola Jungle Realtor, quiero información sobre propiedades en la Riviera Maya.')} className="btn-selva">{Icono.wa} WhatsApp</a>
            <a href={`mailto:${negocio.correo}`} className="btn-linea text-selva">{Icono.correo} Correo</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            <li><a href={negocio.guia} className="underline underline-offset-4">Guía del comprador</a></li>
            <li><a href={negocio.avisos} className="underline underline-offset-4">Avisos de nuevas propiedades</a></li>
            <li><a href={negocio.instagram} className="underline underline-offset-4">Instagram</a></li>
            <li><a href={negocio.facebook} className="underline underline-offset-4">Facebook</a></li>
            <li><a href={negocio.x} className="underline underline-offset-4">X</a></li>
          </ul>
        </div>
        <Foto n="equipo-ana-castillo" alt="Ana Castillo, de Jungle Realtor, en un andador entre palmeras" className="aspect-[4/5] w-full rounded-[2rem] object-top lg:max-h-[38rem]" />
      </div>
    </section>
  );
}

function BarraMovil() {
  const acciones = [
    { h: wa('Hola Jungle Realtor, quiero información sobre propiedades.'), t: 'WhatsApp', i: Icono.wa, c: 'bg-selva text-white' },
    { h: negocio.telHref, t: 'Llamar', i: Icono.tel, c: '' },
    { h: negocio.mapa, t: 'Ver en Maps', i: Icono.pin, c: '' },
  ];
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-arena lg:hidden">
      {acciones.map((a) => <a key={a.t} href={a.h} className={`flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold ${a.c}`}>{a.i}{a.t}</a>)}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#propiedades" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-white">Saltar a las propiedades</a>
      <Cabecera />
      <main>
        <Portada />
        <Buscador />
        <Destinos />
        <Equipo />
        <Resenas />
        <Contacto />
      </main>
      <footer className="bg-selva-honda pb-24 pt-10 text-sm text-white/80 lg:pb-10">
        <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>© 2026 Jungle Realtor · Riviera Maya</p>
          <p>Bienes raíces en Tulum, Playa del Carmen, Puerto Aventuras y Bacalar</p>
        </div>
      </footer>
      <BarraMovil />
    </>
  );
}
