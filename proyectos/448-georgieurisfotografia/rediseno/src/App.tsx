import { useState } from 'react';
import { bio, clientes, empresas, intro, luces, moda, negocio, servicios, usos, wa, web, type Luz, type Uso } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [900, 1350];
  return (
    <img src={web(n)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

function Cabecera() {
  const enlaces = [['#luz', 'Elige tu luz'], ['#servicios', 'Servicios'], ['#moda', 'Moda'], ['#sobre-mi', 'Sobre mí'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-noche/95 text-white backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-3xl leading-none">Georgie Uris</a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-[0.95rem]">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="text-white/85 hover:text-white">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola Georgie, quiero consultar precios de una sesión de fotos.')} className="btn-rojo !px-5 !py-3 text-sm">{Icono.wa} Consulta precios</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden bg-noche text-white">
      <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-14 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rojo-claro">Estudio en {negocio.ciudad}</p>
          <h1 className="mt-5 text-[3.4rem] sm:text-7xl lg:text-[6.2rem]">Fotógrafo de retrato, <em className="text-rojo-claro">moda</em> y publicidad</h1>
          <p className="mt-7 max-w-xl text-lg text-white/85">{intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#luz" className="btn-rojo">Elige tu luz</a>
            <a href={wa('Hola Georgie, quiero consultar precios de una sesión de fotos.')} className="btn-linea">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <figure>
          <Foto n="modelo-morena" alt="Retrato cercano de una mujer de mirada intensa, con luz cálida y fondo rojo" prioridad className="aspect-[4/5] w-full" />
          <figcaption className="mt-3 text-sm text-white/70">Del portafolio de retrato de Georgie Uris.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function EligeTuLuz() {
  const [luz, setLuz] = useState<Luz>('natural');
  const [uso, setUso] = useState<Uso>('marca');
  const l = luces.find((x) => x.id === luz)!;
  const u = usos.find((x) => x.id === uso)!;
  const mensaje = `Hola Georgie, quiero un retrato de ${u.t.toLowerCase()} con ${l.t.toLowerCase()}. ¿Qué precio y fechas tienes?`;
  return (
    <section id="luz" className="bg-noche pb-16 text-white lg:pb-24">
      <div className="contenedor border-t border-white/15 pt-16 lg:pt-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rojo-claro">Retrato</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">Elige tu luz</h2>
          </div>
          <p className="text-lg text-white/80">Cinco formas de iluminar un retrato, todas de su portafolio. Elige la que va contigo y para qué es la foto: el mensaje sale listo para WhatsApp.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">La luz</legend>
              <div className="mt-3 grid gap-2">
                {luces.map((x) => (
                  <label key={x.id} className={`flex cursor-pointer items-baseline gap-4 rounded-2xl border px-5 py-4 transition-colors ${luz === x.id ? 'border-rojo-claro bg-white/8' : 'border-white/15 hover:border-white/40'}`}>
                    <input type="radio" name="luz" value={x.id} checked={luz === x.id} onChange={() => setLuz(x.id)} className="sr-only" />
                    <span className={`font-display text-3xl ${luz === x.id ? 'text-rojo-claro' : ''}`}>{x.t}</span>
                    <span className="hidden text-sm text-white/70 sm:inline">{luz === x.id ? x.d : ''}</span>
                  </label>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80 sm:hidden">{l.d}</p>
            </fieldset>
            <fieldset className="mt-8">
              <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">¿Para qué es?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {usos.map((x) => (
                  <button key={x.id} type="button" onClick={() => setUso(x.id)} aria-pressed={uso === x.id}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 transition-colors ${uso === x.id ? 'bg-white text-noche ring-white' : 'ring-white/30 hover:ring-white'}`}>{x.t}</button>
                ))}
              </div>
              <p className="mt-3 text-white/80">{u.d}</p>
            </fieldset>
            <a href={wa(mensaje)} className="btn-rojo mt-8">{Icono.wa} Quiero este retrato</a>
            <p className="mt-3 text-sm text-white/65">“{mensaje}”</p>
          </div>
          <figure className="order-1 lg:order-2 lg:sticky lg:top-24">
            <Foto key={l.f} n={l.f} alt={l.alt} className="aspect-[4/5] w-full" />
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-white/70"><span className="font-display text-2xl text-white">{l.t}</span><span>Del portafolio de Georgie Uris</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Servicios</p>
        <h2 className="mt-3 max-w-3xl text-5xl sm:text-6xl">Además del retrato: publicidad, moda y empresas</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {servicios.map((s) => (
            <article key={s.id}>
              <Foto n={s.f} alt={s.alt} className="aspect-[4/5] w-full" />
              <h3 className="mt-5 text-4xl">{s.t}</h3>
              <p className="mt-3 text-gris">{s.d}</p>
              <ul className="mt-4 space-y-1.5 border-t border-tinta/15 pt-4 text-[0.95rem]">{s.items.map((i) => <li key={i}>— {i}</li>)}</ul>
              <a href={wa(`Hola Georgie, quiero cotizar fotografía de ${s.t.toLowerCase()}.`)} className="mt-5 inline-block font-semibold text-rojo underline underline-offset-4">Cotizar {s.t.toLowerCase()}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Moda() {
  return (
    <section id="moda" className="bg-papel py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Moda</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">La personalidad y el mood de una marca</h2>
          </div>
          <p className="text-lg text-gris">Campañas, lookbooks y editoriales en estudio y en exteriores.</p>
        </div>
        <ul className="mt-10 columns-2 gap-4 md:columns-4">
          {moda.map((m) => <li key={m.f} className="mb-4 break-inside-avoid"><Foto n={m.f} alt={m.alt} className="w-full" /></li>)}
        </ul>
      </div>
    </section>
  );
}

function Empresas() {
  return (
    <section className="py-16 lg:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Retrato para empresas</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">Todo el equipo con la misma luz</h2>
          </div>
          <p className="text-lg text-gris">Para LinkedIn, el sitio web y los materiales de marketing de tu empresa.</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {empresas.map((e) => <li key={e.f}><Foto n={e.f} alt={e.alt} className="aspect-[2/3] w-full" /></li>)}
        </ul>
        <a href={wa('Hola Georgie, quiero cotizar retratos corporativos para mi equipo.')} className="btn-rojo mt-8">{Icono.wa} Cotizar retratos de equipo</a>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-noche py-16 text-white lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Foto n="autorretrato" alt="Autorretrato de Georgie Uris en blanco y negro, con las manos juntas bajo la barbilla" className="aspect-square w-full" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rojo-claro">Sobre mí</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Imágenes que se sientan auténticas</h2>
          <div className="mt-6 space-y-4 text-lg text-white/85">{bio.map((p) => <p key={p}>{p}</p>)}</div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Ha trabajado para</p>
          <p className="mt-3 text-white/90">{clientes.join(' · ')}</p>
          <a href={negocio.director} className="btn-linea mt-8">Ver su trabajo como director</a>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow">Contrataciones</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Hablemos de tu sesión</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div><dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gris">México · WhatsApp</dt><dd className="mt-1"><a href={negocio.telHref} className="underline underline-offset-4">{negocio.telTxt}</a></dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gris">Correo</dt><dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gris">España</dt><dd className="mt-1"><a href="tel:+34610810566" className="underline underline-offset-4">{negocio.telEspana}</a></dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gris">Estudio</dt><dd className="mt-1">{negocio.ciudad}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola Georgie, quiero consultar precios de una sesión de fotos.')} className="btn-rojo">{Icono.wa} WhatsApp</a>
            <a href={negocio.mapa} className="btn-linea text-tinta">{Icono.pin} Ver en Maps</a>
          </div>
          <ul className="mt-8 flex gap-6 text-sm font-semibold">
            <li><a href={negocio.instagram} className="underline underline-offset-4">Instagram</a></li>
            <li><a href={negocio.facebook} className="underline underline-offset-4">Facebook</a></li>
            <li><a href={negocio.blog} className="underline underline-offset-4">Blog</a></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Foto n="familia" alt="Retrato en blanco y negro de una madre y su hija recostadas juntas" className="aspect-[3/4] w-full" />
          <Foto n="pareja" alt="Dos mujeres riendo abrazadas en el estudio" className="mt-10 aspect-[3/4] w-full" />
        </div>
      </div>
    </section>
  );
}

function BarraMovil() {
  const acciones = [
    { h: wa('Hola Georgie, quiero consultar precios de una sesión de fotos.'), t: 'WhatsApp', i: Icono.wa, c: 'bg-rojo text-white' },
    { h: negocio.telHref, t: 'Llamar', i: Icono.tel, c: '' },
    { h: negocio.mapa, t: 'Ver en Maps', i: Icono.pin, c: '' },
  ];
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-marfil lg:hidden">
      {acciones.map((a) => <a key={a.t} href={a.h} className={`flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold ${a.c}`}>{a.i}{a.t}</a>)}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#luz" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Saltar a Elige tu luz</a>
      <Cabecera />
      <main>
        <Portada />
        <EligeTuLuz />
        <Servicios />
        <Moda />
        <Empresas />
        <SobreMi />
        <Contacto />
      </main>
      <footer className="bg-noche pb-24 pt-10 text-sm text-white/75 lg:pb-10">
        <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>© 2026 Georgie Uris · Fotógrafo en Ciudad de México</p>
          <p>Fotos: Georgie Uris</p>
        </div>
      </footer>
      <BarraMovil />
    </>
  );
}
