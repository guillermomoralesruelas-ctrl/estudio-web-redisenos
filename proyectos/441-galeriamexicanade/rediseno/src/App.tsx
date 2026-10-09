import { useMemo, useState } from 'react';
import {
  carmen, categorias, cifras, contactoTexto, curaduria, disenadores, historia, interiorismo, negocio, piezas, portada, urlCur, urlInt, wa, web,
  type Pieza,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false, sizes }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(n)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
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
  const enlaces = [['#tu-pieza', 'Encuentra tu pieza'], ['#disenadores', 'Diseñadores'], ['#interiorismo', 'Interiorismo'], ['#curaduria', 'Curaduría'], ['#visitanos', 'Visítanos']];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="Galería Mexicana de Diseño, inicio">
          <img src={`${import.meta.env.BASE_URL}logo-tinta.png`} alt="Galería Mexicana de Diseño" width={medidas['logo-tinta'][0]} height={medidas['logo-tinta'][1]} className="h-7 w-auto sm:h-8" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem] font-medium">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-rosa">{t}</a></li>)}
          </ul>
        </nav>
        <a href={wa('Hola, vi su sitio y quiero información sobre una pieza.')} className="btn-rosa hidden !py-3 sm:inline-flex">{Icono.wa} Escríbenos</a>
        <button type="button" className="rounded-full border border-tinta/30 px-4 py-2 text-sm font-semibold lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
          {abierto ? 'Cerrar' : 'Menú'}
        </button>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú" className="border-t border-tinta/10 bg-papel lg:hidden">
          <ul className="contenedor flex flex-col py-3 text-lg">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="block py-2.5" onClick={() => setAbierto(false)}>{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid gap-10 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
      <div>
        <p className="eyebrow">Desde 1990 · Roma Norte, Ciudad de México</p>
        <h1 className="mt-5 text-[2.9rem] sm:text-6xl lg:text-[4.6rem]">
          Objetos y mobiliario de <em className="text-rosa">diseño mexicano</em> contemporáneo
        </h1>
        <p className="mt-6 max-w-xl text-lg text-grafito">{portada.texto}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#tu-pieza" className="btn-tinta">Encuentra tu pieza</a>
          <a href={negocio.mapa} className="btn-linea" target="_blank" rel="noopener">{Icono.pin} Visitar el showroom</a>
        </div>
      </div>
      <figure className="relative">
        <Foto n="casa-estudio" alt="Comedor de la casa-estudio de Carmen Cordera: mesa de vidrio, sillas naranjas, lámpara negra y cactus de madera" prioridad
          className="aspect-[4/5] w-full rounded-t-[12rem] sm:aspect-square lg:aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" />
        <figcaption className="mt-4 max-w-md text-sm text-grafito">
          <span className="font-semibold text-tinta">La casa-estudio.</span> Desde 2021 la galería vive en la casa de su fundadora, Carmen Cordera.
        </figcaption>
      </figure>
    </section>
  );
}

function Cifras() {
  return (
    <section aria-label="La galería en cifras" className="border-y border-tinta/15 bg-hueso">
      <ul className="contenedor grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-5">
        {cifras.map((c, i) => (
          <li key={c.t} className={`text-center ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}>
            <span className="block font-serif text-5xl leading-none">{c.n}</span>
            <span className="mt-1 block text-sm text-grafito">{c.t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Elemento memorable: las 38 piezas de su colección, filtradas por presupuesto, tipo y existencias.
const topes = [600, 1000, 1700, 2500, 4000, 6000, 9000, 15000, 25000, 0];
const precioDe = (p: Pieza) => p.oferta ?? p.p;

function Etiqueta({ p }: { p: Pieza }) {
  let t = '';
  if (p.stock === 0) t = 'Agotado';
  else if (p.oferta) t = `−${Math.round((1 - p.oferta / p.p) * 100)}%`;
  else if (p.stock === 1) t = 'Última pieza';
  else if (p.stock !== null && p.stock <= 3) t = `Quedan ${p.stock}`;
  if (!t) return null;
  const tono = p.stock === 0 ? 'bg-tinta text-hueso' : 'bg-rosa text-white';
  return <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${tono}`}>{t}</span>;
}

function Tarjeta({ p }: { p: Pieza }) {
  const varias = p.pmax > p.p;
  return (
    <li className="group flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-hueso">
        <Foto n={`p/${p.id}`} alt={`${p.t}${p.dis ? `, de ${p.dis}` : ''}`} className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 50vw" />
        <Etiqueta p={p} />
      </div>
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="font-sans text-[1.02rem] font-semibold leading-snug tracking-normal">{p.t}</h3>
        {p.dis && <p className="text-sm text-grafito">{p.dis}</p>}
        <p className="mt-1 text-[0.95rem]">
          {varias && <span className="text-grafito">desde </span>}
          <span className="font-semibold">{pesos(precioDe(p))}</span>
          {p.oferta && <s className="ml-2 text-sm text-grafito">{pesos(p.p)}</s>}
        </p>
        {p.med && <p className="text-xs text-grafito">{p.med}</p>}
        <div className="mt-3 flex items-center gap-3 text-sm font-semibold">
          <a href={p.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 underline decoration-rosa decoration-2 underline-offset-4 hover:text-rosa">
            {p.stock === 0 ? 'Ver pieza' : 'Comprar'} {Icono.flecha}<span className="sr-only">: {p.t} en su tienda</span>
          </a>
          <a href={wa(`Hola, me interesa la pieza "${p.t}"${p.dis ? ` de ${p.dis}` : ''}. ¿Me dan más información?`)} className="inline-flex items-center gap-1 text-grafito hover:text-rosa">
            {Icono.wa}<span className="sr-only sm:not-sr-only">Preguntar</span><span className="sr-only sm:hidden"> por {p.t}</span>
          </a>
        </div>
      </div>
    </li>
  );
}

function TuPieza() {
  const [i, setI] = useState(5);
  const [cat, setCat] = useState('Todo');
  const [disponibles, setDisponibles] = useState(true);
  const [todas, setTodas] = useState(false);
  const tope = topes[i];
  const lista = useMemo(() => piezas
    .filter((p) => (tope === 0 || precioDe(p) <= tope) && (cat === 'Todo' || p.cat === cat) && (!disponibles || p.stock !== 0))
    .sort((a, b) => precioDe(a) - precioDe(b)), [tope, cat, disponibles]);
  const nDis = new Set(lista.map((p) => p.dis).filter(Boolean)).size;
  const visibles = todas ? lista : lista.slice(0, 8);
  return (
    <section id="tu-pieza" className="bg-hueso py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Encuentra tu pieza</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">¿Cuánto quieres invertir en diseño?</h2>
          </div>
          <p className="text-lg text-grafito lg:pb-2">Mueve el presupuesto y elige qué buscas: ves las piezas de su colección que caben, de quién son y cuántas quedan. Para un regalo, para tu mesa o para empezar una colección.</p>
        </div>

        <div className="mt-10 rounded-3xl border border-tinta/15 bg-papel p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <label htmlFor="presupuesto" className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-grafito">Presupuesto</span>
                <span className="font-serif text-4xl sm:text-5xl" aria-live="polite">{tope === 0 ? 'Sin límite' : `hasta ${pesos(tope)}`}</span>
              </label>
              <input id="presupuesto" type="range" min={0} max={topes.length - 1} step={1} value={i} onChange={(e) => { setI(+e.target.value); setTodas(false); }}
                aria-valuetext={tope === 0 ? 'Sin límite' : `hasta ${pesos(tope)} pesos`} className="mt-4 w-full" />
              <div className="mt-1 flex justify-between text-xs text-grafito"><span>{pesos(topes[0])}</span><span>Sin límite</span></div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-grafito" id="tipo">Qué buscas</p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="tipo">
                {['Todo', ...categorias].map((c) => (
                  <button key={c} type="button" aria-pressed={cat === c} onClick={() => { setCat(c); setTodas(false); }}
                    className={`chip ${cat === c ? 'border-tinta bg-tinta text-hueso' : 'hover:border-tinta'}`}>{c}</button>
                ))}
              </div>
              <label className="mt-4 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={disponibles} onChange={(e) => setDisponibles(e.target.checked)} className="size-4 accent-[var(--color-rosa)]" />
                Solo piezas con existencias
              </label>
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg" aria-live="polite">
          {lista.length === 0 ? 'Ninguna pieza en ese rango. Sube el presupuesto o cambia el tipo.' : <><strong>{lista.length} {lista.length === 1 ? 'pieza' : 'piezas'}</strong> de {nDis} {nDis === 1 ? 'diseñador' : 'diseñadores'}</>}
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {visibles.map((p) => <Tarjeta key={p.id} p={p} />)}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {lista.length > visibles.length && <button type="button" className="btn-tinta" onClick={() => setTodas(true)}>Ver las {lista.length} piezas</button>}
          <a href={negocio.tienda} target="_blank" rel="noopener" className="btn-linea">Ir a su tienda en línea {Icono.flecha}</a>
        </div>
        <p className="mt-6 max-w-3xl text-xs text-grafito">Precios en pesos mexicanos y existencias tomados de su tienda el 9 de octubre de 2026; la compra y el envío se hacen en su tienda en línea o por WhatsApp.</p>
      </div>
    </section>
  );
}

function Disenadores() {
  return (
    <section id="disenadores" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Diseñadores</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-5xl sm:text-6xl">Detrás de cada pieza hay un nombre</h2>
          <p className="text-lg text-grafito lg:pb-2">Galería Mexicana de Diseño ha presentado el trabajo de más de 750 diseñadores. Estos son algunos de los que hoy están en su colección.</p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {disenadores.map((d, k) => (
            <li key={d.n} className={k === disenadores.length - 1 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''}>
              <Foto n={d.f} alt={`Retrato de ${d.n}`} className={`w-full rounded-2xl grayscale ${k === disenadores.length - 1 ? 'aspect-[2/1] sm:aspect-[4/5]' : 'aspect-[4/5]'}`} sizes="(min-width: 1024px) 18vw, 45vw" />
              <h3 className="mt-3 text-2xl">{d.n}</h3>
              <p className="mt-1 text-sm text-grafito">{d.d}</p>
            </li>
          ))}
          <li className="hidden flex-col justify-end rounded-2xl bg-rosa p-6 text-white lg:flex">
            <p className="font-serif text-3xl leading-tight">¿Eres diseñador?</p>
            <p className="mt-2 text-sm">Escríbeles para proponer una colaboración.</p>
            <a href={wa('Hola, soy diseñador y me gustaría proponer una colaboración con la galería.')} className="mt-4 inline-flex items-center gap-2 font-semibold underline underline-offset-4">{Icono.wa} Escribir</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="bg-tinta py-16 text-hueso lg:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-arena">Historia</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Más de 30 años impulsando el diseño mexicano</h2>
          <div className="mt-8 space-y-5 text-lg text-hueso/85">
            {historia.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
        </div>
        <figure>
          <Foto n="dis-carmen" alt="Carmen Cordera Lascuráin, fundadora de la Galería Mexicana de Diseño" className="aspect-[4/3] w-full rounded-2xl grayscale" sizes="(min-width: 1024px) 38vw, 100vw" />
          <figcaption className="mt-5">
            <p className="font-serif text-3xl">Carmen Cordera Lascuráin</p>
            <p className="mt-3 text-[0.95rem] text-hueso/80">{carmen}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Interiorismo() {
  return (
    <section id="interiorismo" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Interiorismo</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-5xl sm:text-6xl">Espacios con piezas 100% mexicanas</h2>
          <div className="lg:pb-2">
            <p className="text-lg text-grafito">Carmen Cordera diseña casas, restaurantes, oficinas y espacios de hospitalidad: concepto, paleta de colores, mobiliario, iluminación y arte.</p>
            <a href={wa('Hola, quiero platicar de un proyecto de interiorismo.')} className="btn-rosa mt-5">{Icono.wa} Platicar mi proyecto</a>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {interiorismo.map((p, k) => (
            <li key={p.u} className={k === 0 ? 'col-span-2 row-span-2' : ''}>
              <a href={urlInt(p.u)} target="_blank" rel="noopener" className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <Foto n={p.f} alt={`Proyecto ${p.t}`} className={`w-full transition-transform duration-500 group-hover:scale-[1.03] ${k === 0 ? 'aspect-square' : 'aspect-[4/3]'}`} sizes={k === 0 ? '(min-width: 1024px) 48vw, 100vw' : '(min-width: 1024px) 24vw, 50vw'} />
                </div>
                <h3 className={`mt-3 ${k === 0 ? 'text-3xl' : 'text-xl sm:text-2xl'}`}>{p.t}</h3>
                <p className="text-sm text-grafito">{p.tipo}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Curaduria() {
  return (
    <section id="curaduria" className="bg-arena/50 py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Curaduría y exposiciones</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-5xl sm:text-6xl">Más de 150 exposiciones</h2>
          <p className="text-lg text-grafito lg:pb-2">De Milán a la Roma Norte: diseño artesanal, textil, joyería, gráfico, industrial e interiorismo, mostrado desde 1990.</p>
        </div>
      </div>
      <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" aria-label="Exposiciones (desliza)">
        {curaduria.map((c) => (
          <li key={c.u} className="w-[78%] shrink-0 snap-start sm:w-[40%] lg:w-[23%]">
            <a href={urlCur(c.u)} target="_blank" rel="noopener" className="group block">
              <div className="overflow-hidden rounded-2xl">
                <Foto n={c.f} alt={`Exposición ${c.t}`} className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 23vw, 78vw" />
              </div>
              <h3 className="mt-3 text-2xl">{c.t}</h3>
              <p className="text-sm text-grafito">{c.d}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Visítanos</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Jalapa 30B, Roma Norte</h2>
          <p className="mt-5 text-lg text-grafito">{contactoTexto}</p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-grafito">Dirección</dt><dd className="mt-1">{negocio.direccion}, {negocio.ciudad}, CDMX 06700</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-grafito">Horario</dt><dd className="mt-1">{negocio.horario} · confirma el horario de tu visita por WhatsApp</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-grafito">Teléfono</dt><dd className="mt-1"><a href={negocio.telHref} className="underline underline-offset-4">55 5280 0080</a></dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-grafito">Correo</dt><dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, quiero agendar una visita a la galería.')} className="btn-rosa">{Icono.wa} WhatsApp {negocio.whatsappTxt}</a>
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea">{Icono.pin} Cómo llegar</a>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea">Instagram {negocio.instagramTxt}</a>
          </div>
        </div>
        <Foto n="cur-20anos" alt="Exposición por los 20 años de la galería: muros a rayas blanco y negro y piezas sobre pedestales" className="aspect-[4/3] w-full rounded-2xl" sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-12 text-hueso/80 lg:pb-12">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={`${import.meta.env.BASE_URL}logo-blanco.png`} alt="Galería Mexicana de Diseño" width={medidas['logo-blanco'][0]} height={medidas['logo-blanco'][1]} loading="lazy" className="h-8 w-auto" />
        <p className="text-sm">© 2026 Galería Mexicana de Diseño · Jalapa 30B, Roma Norte, Ciudad de México</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  const acciones = [
    { h: wa('Hola, vi su sitio y quiero información.'), t: 'WhatsApp', i: Icono.wa, c: 'bg-rosa text-white' },
    { h: negocio.telHref, t: 'Llamar', i: Icono.tel, c: '' },
    { h: negocio.mapa, t: 'Cómo llegar', i: Icono.pin, c: '' },
  ];
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-papel lg:hidden">
      {acciones.map((a) => (
        <a key={a.t} href={a.h} className={`flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold ${a.c}`}>{a.i}{a.t}</a>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#tu-pieza" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-hueso">Saltar a la colección</a>
      <Cabecera />
      <main>
        <Portada />
        <Cifras />
        <TuPieza />
        <Disenadores />
        <Historia />
        <Interiorismo />
        <Curaduria />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
