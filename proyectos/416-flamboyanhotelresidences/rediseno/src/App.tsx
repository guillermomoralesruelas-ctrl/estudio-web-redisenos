import { useMemo, useState } from 'react';
import fotos from './data/fotos.json';
import { apartamentos, artWalk, cerca, correo, correoGeneral, descuento, incluye, negocio, resenas, servicios, web, type Apto, type Exterior } from './data/content';

const medidas = fotos as unknown as Record<string, [number, number]>;
const mxn = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />;
}

const Ico = {
  mail: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></svg>,
  tel: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>,
  pin: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
};

const exteriores: { id: Exterior | 'todos'; nombre: string }[] = [
  { id: 'todos', nombre: 'Da igual' },
  { id: 'balcon', nombre: 'Balcón' },
  { id: 'patio', nombre: 'Patio' },
  { id: 'terraza', nombre: 'Terraza' },
  { id: 'vista', nombre: 'Esquina con vista' },
];

// ── Elemento memorable: "Sus 14 apartamentos, a escala" ───────────────────────
// Cada cuadro mide lo que mide el apartamento (lado proporcional a la raíz de sus m²: de 29 a 108 m²).
// Al decir cuántos son, qué exterior quieren y si necesitan cocina completa, se encienden los que sirven.
function Plano() {
  const [personas, setPersonas] = useState(2);
  const [exterior, setExterior] = useState<Exterior | 'todos'>('todos');
  const [cocina, setCocina] = useState(false);
  const sirve = (a: Apto) => a.personas >= personas && (exterior === 'todos' || a.exterior === exterior) && (!cocina || a.cocina === 'completa');
  const opciones = useMemo(() => apartamentos.filter(sirve), [personas, exterior, cocina]);
  const [elegido, setElegido] = useState<string>(apartamentos[0].id);
  const actual = opciones.find((a) => a.id === elegido) ?? opciones[0];

  const pedir = (a: Apto) => correo(`Reservación: ${a.nombre}`, `Hola, quisiera reservar el ${a.nombre} en Flamboyan Hotel & Residences para ${personas} ${personas === 1 ? 'persona' : 'personas'}.\n\nFechas de llegada y salida:\n`);

  return (
    <section id="apartamentos" aria-labelledby="plano-titulo" className="bg-arena py-20 sm:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="eyebrow">Apartamentos de ensueño</p>
          <h2 id="plano-titulo" className="mt-3 text-4xl sm:text-5xl">Sus 14 apartamentos, a escala</h2>
          <p className="mt-5 text-lg text-gris">Todos con cocina, decorados en un estilo mexicano contemporáneo con arte curado. Cada cuadro mide lo que mide el apartamento: dinos cuántos vienen y se encienden los que les quedan.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_1fr]">
          <div className="space-y-7">
            <fieldset>
              <legend className="text-sm font-bold">¿Cuántos son?</legend>
              <div className="mt-3 flex items-center gap-3">
                <button type="button" onClick={() => setPersonas((p) => Math.max(1, p - 1))} aria-label="Una persona menos" className="h-11 w-11 border-2 border-tinta text-xl font-bold hover:bg-tinta hover:text-white">−</button>
                <output aria-live="polite" className="w-28 text-center font-[family-name:var(--font-display)] text-3xl">{personas} <span className="text-base">{personas === 1 ? 'persona' : 'personas'}</span></output>
                <button type="button" onClick={() => setPersonas((p) => Math.min(8, p + 1))} aria-label="Una persona más" className="h-11 w-11 border-2 border-tinta text-xl font-bold hover:bg-tinta hover:text-white">+</button>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-bold">Al aire libre</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {exteriores.map((e) => (
                  <button key={e.nombre} type="button" aria-pressed={exterior === e.id} onClick={() => setExterior(e.id)} className={`border-2 px-3 py-2 text-sm font-semibold transition-colors ${exterior === e.id ? 'border-hoja bg-hoja text-white' : 'border-tinta/20 bg-cal hover:border-hoja'}`}>{e.nombre}</button>
                ))}
              </div>
            </fieldset>
            <label className="flex cursor-pointer items-center gap-3 text-sm font-bold">
              <input type="checkbox" checked={cocina} onChange={(e) => setCocina(e.target.checked)} className="h-5 w-5 accent-[#2F5A2E]" />
              Cocina completa (lavadora, secadora o lavavajillas)
            </label>
            <p className="border-t border-tinta/15 pt-5 text-sm text-gris" aria-live="polite">
              {opciones.length === 0 ? 'Ninguno junta todo eso: prueba con otro exterior.' : `${opciones.length} de 14 les quedan, desde ${mxn(Math.min(...opciones.map((a) => a.desde)))} MXN por noche.`}
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap items-end gap-2 sm:gap-3" aria-label="Apartamentos a escala">
              {apartamentos.map((a) => {
                const on = sirve(a);
                const lado = Math.round(Math.sqrt(a.m2) * 10.5);
                const sel = actual?.id === a.id;
                return (
                  <li key={a.id}>
                    <button
                      type="button"
                      disabled={!on}
                      aria-pressed={sel}
                      aria-label={`${a.nombre}, ${a.m2} m², hasta ${a.personas} personas, desde ${mxn(a.desde)} MXN`}
                      onClick={() => setElegido(a.id)}
                      style={{ width: lado, height: lado }}
                      className={`cuadro relative flex flex-col justify-end p-1.5 text-left text-[0.7rem] font-bold leading-tight ${on ? (sel ? 'bg-flor-honda text-white' : 'bg-flor text-tinta hover:bg-flor-honda hover:text-white') : 'cursor-not-allowed bg-tinta/10 text-tinta/40'} ${sel ? 'ring-4 ring-tinta ring-offset-2 ring-offset-arena' : ''}`}
                    >
                      <span aria-hidden="true">{a.m2} m²</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-gris">Cada cuadro, a escala de sus m². Precios por noche que publicaba su sitio el 26 de septiembre de 2026, sin impuestos.</p>

            {actual && (
              <article className="mt-8 grid gap-0 overflow-hidden bg-cal sm:grid-cols-2">
                <Foto n={`room-${actual.id}`} alt={`Apartamento ${actual.nombre} de Flamboyan`} className="aspect-[4/3] h-full w-full" />
                <div className="flex flex-col p-6">
                  <h3 className="text-2xl">{actual.nombre}</h3>
                  <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-tinta/10 py-3 text-center text-sm">
                    <div><dt className="text-gris">Hasta</dt><dd className="font-bold">{actual.personas} pers.</dd></div>
                    <div><dt className="text-gris">Mide</dt><dd className="font-bold">{actual.m2} m²</dd></div>
                    <div><dt className="text-gris">Recámaras</dt><dd className="font-bold">{actual.recamaras}</dd></div>
                  </dl>
                  <p className="mt-4 text-sm"><strong>{actual.camas}.</strong> {actual.extra}. {actual.cocina === 'completa' ? 'Cocina completa.' : 'Cocineta con parrilla y microondas.'}</p>
                  <p className="mt-auto pt-5 text-sm text-gris">Desde <strong className="font-[family-name:var(--font-display)] text-3xl font-medium text-tinta">{mxn(actual.desde)}</strong> MXN por noche</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={pedir(actual)} className="btn-flor">{Ico.mail} Pedir este</a>
                    <a href={actual.url} target="_blank" rel="noopener" className="btn-linea">Ver fechas</a>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-tinta/15 pt-8">
          <h3 className="font-[family-name:var(--font-sans)] text-sm font-bold uppercase tracking-[0.18em]">En todos</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {incluye.map((i) => <li key={i} className="bg-cal px-3 py-1.5 text-sm">{i}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Próximo Art Walk: jueves de noviembre a junio, con la hora de Los Cabos.
function proximoArtWalk() {
  const ahora = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Mazatlan' }));
  const d = new Date(ahora);
  for (let i = 0; i < 400; i++) {
    if (d.getDay() === artWalk.dia && artWalk.meses.includes(d.getMonth()) && !(i === 0 && ahora.getHours() >= 21)) {
      return { fecha: d, hoy: i === 0 };
    }
    d.setDate(d.getDate() + 1);
  }
  return null;
}

function ArtWalk() {
  const p = proximoArtWalk();
  const fecha = p ? p.fecha.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' }) : '';
  return (
    <div className="bg-hoja p-7 text-white">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F2C9B8]">Art Walk · a una cuadra</p>
      <p className="mt-3 font-[family-name:var(--font-display)] text-3xl">{p?.hoy ? 'Hoy hay Art Walk' : `Próximo: ${fecha.charAt(0).toUpperCase()}${fecha.slice(1)}`}</p>
      <p className="mt-3 text-white/85">Todos los jueves de noviembre a junio, de {artWalk.desde} a {artWalk.hasta}: las calles del Distrito del Arte se vuelven peatonales, con más de {artWalk.galerias} galerías, catas de vino y cenas.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>

      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" aria-label="Flamboyan, inicio"><img src={web('logo.png')} alt="Flamboyan Hotel & Residences" width={209} height={120} className="h-11 w-auto" /></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="#apartamentos" className="hover:text-flor-honda">Apartamentos</a>
            <a href="#rooftop" className="hover:text-flor-honda">Rooftop</a>
            <a href="#servicios" className="hover:text-flor-honda">Servicios</a>
            <a href="#ubicacion" className="hover:text-flor-honda">Ubicación</a>
          </nav>
          <a href={correoGeneral} className="btn-flor hidden sm:inline-flex">Reservar</a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative">
          <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:py-16">
            <div>
              <p className="eyebrow">{negocio.lema}</p>
              <h1 className="mt-4 text-5xl leading-[1.02] sm:text-6xl">Flamboyan, hotel y residencias en el Distrito del Arte de San José del Cabo</h1>
              <p className="mt-6 max-w-xl text-lg text-gris">Apartamentos con cocina en el corazón de San José del Cabo, a una cuadra del Art Walk y de la plaza del centro histórico, con rooftop y alberca para ver el atardecer.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#apartamentos" className="btn-flor">Elegir apartamento</a>
                <a href={negocio.centralMexHref} className="btn-linea">{Ico.tel} {negocio.centralMex}</a>
              </div>
              <p className="mt-6 border-l-4 border-flor pl-4 text-sm font-semibold">{descuento}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Foto n="fachada" alt="Fachada del Flamboyan Hotel & Residences en la Avenida Centenario" eager className="col-span-2 row-span-2 aspect-[4/5] h-full w-full" />
              <Foto n="alberca-rooftop" alt="Alberca del rooftop con vista a San José del Cabo" eager className="aspect-square w-full" />
              <Foto n="room-FXg0dg" alt="Corner Residence con comedor y cocina" eager className="aspect-square w-full" />
            </div>
          </div>
        </section>

        <Plano />

        <section id="rooftop" aria-labelledby="rooftop-titulo" className="relative overflow-hidden bg-tinta text-white">
          <Foto n="atardecer" alt="Atardecer desde el rooftop del Flamboyan" className="absolute inset-0 h-full w-full opacity-55" />
          <div className="contenedor relative py-28 sm:py-36">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F2C9B8]">Roof top con una alberca</p>
            <h2 id="rooftop-titulo" className="mt-3 max-w-2xl text-4xl sm:text-6xl">Amaneceres y atardeceres sobre San José</h2>
            <p className="mt-5 max-w-xl text-lg text-white/90">Un lugar ideal para tomar el sol, disfrutar de los amaneceres y atardeceres, y de las vistas incomparables de San José del Cabo.</p>
          </div>
        </section>
        <div className="contenedor -mt-10 grid grid-cols-2 gap-3 pb-6 md:grid-cols-4">
          <Foto n="camastro" alt="Camastro con bugambilias en el rooftop" className="relative aspect-[4/3] w-full" />
          <Foto n="terraza" alt="Camastros y sombrillas en el rooftop" className="relative aspect-[4/3] w-full" />
          <Foto n="aerea" alt="Vista aérea de la alberca del rooftop" className="relative aspect-[4/3] w-full" />
          <Foto n="vista-palmas" alt="Vista de palmeras y el mar desde un balcón del hotel" className="relative aspect-[4/3] w-full" />
        </div>

        <section id="servicios" aria-labelledby="servicios-titulo" className="py-20 sm:py-24">
          <div className="contenedor">
            <p className="eyebrow">Nuestros servicios</p>
            <h2 id="servicios-titulo" className="mt-3 text-4xl sm:text-5xl">Para que la estancia sea aún más tuya</h2>
            <ul className="mt-10 grid gap-px bg-tinta/10 sm:grid-cols-2 lg:grid-cols-3">
              {servicios.map((s) => (
                <li key={s.nombre} className="bg-cal p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-hoja">{s.etiqueta}</p>
                  <h3 className="mt-2 text-2xl">{s.nombre}</h3>
                  <p className="mt-3 text-gris">{s.texto}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3">
              <Foto n="florista" alt="Florería Flor de Mar con arreglos de flores" className="aspect-square w-full sm:aspect-[4/3]" />
              <Foto n="huesped-balcon" alt="Huésped leyendo en su balcón" className="aspect-square w-full sm:aspect-[4/3]" />
              <Foto n="pasillo" alt="Pasillo del hotel con barandales de herrería" className="aspect-square w-full sm:aspect-[4/3]" />
            </div>
          </div>
        </section>

        <section id="arte" aria-labelledby="arte-titulo" className="bg-arena py-20 sm:py-24">
          <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
            <Foto n="obra-andrade" alt="Obra de Mónica Andrade de la serie Rendición, exhibida en el hotel" className="aspect-[4/3] w-full" />
            <div>
              <p className="eyebrow">Colección actual en el hotel</p>
              <h2 id="arte-titulo" className="mt-3 text-4xl">Mónica Andrade, <em>Rendición</em></h2>
              <p className="mt-5 text-lg text-gris">Rendición no significa darse por vencido, sino entregarse a la vida tal como es. A través del agua, la artista expresa aspectos de la vida, sus matices y perspectivas.</p>
              <a href="https://images.mirai.com/HOST/100379091/Monica_Andrade_Obra.pdf" target="_blank" rel="noopener" className="btn-linea mt-7">Ver la obra (PDF)</a>
            </div>
          </div>
        </section>

        <section aria-labelledby="resenas-titulo" className="py-20 sm:py-24">
          <div className="contenedor">
            <h2 id="resenas-titulo" className="text-4xl">Lo que dicen los huéspedes</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {resenas.map((r) => (
                <figure key={r.autor} className="border-l-4 border-flor pl-6">
                  <blockquote className="font-[family-name:var(--font-display)] text-xl leading-relaxed">“{r.texto}”</blockquote>
                  <figcaption className="mt-4 text-sm font-bold">{r.autor} · <span className="font-normal text-gris">{r.fuente}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" aria-labelledby="ubicacion-titulo" className="bg-cal pb-20 sm:pb-24">
          <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="eyebrow">En el corazón de San José del Cabo</p>
              <h2 id="ubicacion-titulo" className="mt-3 text-4xl sm:text-5xl">Todo a pie, la playa a unos minutos</h2>
              <p className="mt-5 text-lg text-gris">{negocio.direccion}, {negocio.cp}. A una cuadra del Art Walk y de la plaza del centro histórico.</p>
              <ol className="mt-8 space-y-3" aria-label="Distancias desde el hotel">
                {cerca.map((c) => (
                  <li key={c.lugar} className="grid grid-cols-[1fr_4.5rem] items-center gap-3 text-sm">
                    <span>
                      <span className="font-semibold">{c.lugar}</span>
                      <span aria-hidden="true" className="mt-1 block h-1.5 bg-tinta/10"><span className="block h-full bg-flor" style={{ width: `${Math.max(3, Math.sqrt(c.km / 13.1) * 100)}%` }} /></span>
                    </span>
                    <span className="text-right font-bold">{c.km < 1 ? `${Math.round(c.km * 1000)} m` : `${c.km.toLocaleString('es-MX')} km`}</span>
                  </li>
                ))}
              </ol>
              <a href={negocio.maps} target="_blank" rel="noopener" className="btn-flor mt-8">{Ico.pin} Cómo llegar</a>
            </div>
            <div className="space-y-6">
              <ArtWalk />
              <div className="border-2 border-tinta/10 p-7">
                <h3 className="text-2xl">Reservaciones</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3">{Ico.tel} <span>Central México: <a href={negocio.centralMexHref} className="font-bold underline">{negocio.centralMex}</a></span></li>
                  <li className="flex items-center gap-3">{Ico.tel} <span>Central USA: <a href={negocio.centralUsaHref} className="font-bold underline">{negocio.centralUsa}</a></span></li>
                  <li className="flex items-center gap-3">{Ico.tel} <span>Hotel: <a href={negocio.telefonoHref} className="font-bold underline">{negocio.telefono}</a></span></li>
                  <li className="flex items-center gap-3">{Ico.mail} <a href={correoGeneral} className="font-bold underline">{negocio.email}</a></li>
                </ul>
                <p className="mt-5 text-sm text-gris">Transfer aeropuerto–hotel a pedido al reservar. <a href={negocio.mesa} target="_blank" rel="noopener" className="font-semibold text-flor-honda underline">Reservar una mesa</a> en OpenTable.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-tinta pb-28 pt-12 text-white/80 md:pb-12">
        <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={web('logo.png')} alt="Flamboyan Hotel & Residences" width={209} height={120} className="h-14 w-auto bg-white p-1.5" />
            <p className="mt-3 text-sm">{negocio.direccion}, {negocio.cp}</p>
          </div>
          <ul className="flex flex-wrap gap-5 text-sm font-semibold">
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a></li>
            <li><a href={negocio.apartamentos} target="_blank" rel="noopener" className="hover:text-white">Reservar en su sitio</a></li>
          </ul>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/10 bg-cal text-xs font-bold md:hidden">
        <a href={correoGeneral} className="flex flex-col items-center gap-1 bg-flor-honda py-3 text-white">{Ico.mail} Reservar</a>
        <a href={negocio.centralMexHref} className="flex flex-col items-center gap-1 py-3 text-flor-honda">{Ico.tel} Llamar</a>
        <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-flor-honda">{Ico.pin} Cómo llegar</a>
      </nav>
    </>
  );
}
