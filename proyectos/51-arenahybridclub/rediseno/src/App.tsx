import { useState } from 'react';
import { anuales, comunidad, foto, incluye, negocio, opcionesClases, pilares, planes, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
function IconoIg({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}

const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;
const waHola = wa('Hola, quiero información de las membresías de Arena Hybrid Club.');
const secciones = [['#pilares', 'El club'], ['#carriles', 'Planes'], ['#espacio', 'El espacio'], ['#comunidad', 'Comunidad']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-hueso/10 bg-negro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.6rem] tracking-wider text-hueso">ARENA</a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-ceniza hover:text-hueso">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img src={foto('exterior-1')} alt="Fachada de Arena Hybrid Club con ladrillo, ventanales en arco y un auto estacionado al frente" width={1067} height={1600} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro via-negro/70 to-negro/30 md:bg-gradient-to-r md:from-negro md:via-negro/75 md:to-transparent" aria-hidden="true" />
      <div className="contenedor pb-16 pt-56 md:py-32">
        <p className="font-semibold text-amarillo">Aguascalientes, 2026</p>
        <h1 className="mt-3 max-w-3xl text-[3.4rem] uppercase sm:text-[5.6rem]">Gimnasio de rendimiento híbrido en Aguascalientes</h1>
        <p className="mt-5 max-w-xl text-[1.12rem]">Entrenamiento tipo HYROX, fuerza profesional y recovery en un solo lugar. El primero de su tipo en la ciudad.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#carriles" className="btn">Elige tu plan</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  return (
    <section id="pilares" className="claro py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.8rem] uppercase sm:text-[4rem]">Tres pilares, un sistema</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <article key={p.nombre}>
              <img src={foto(p.foto)} alt={p.alt} width={1400} height={933} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <h3 className="mt-4 text-[2rem] uppercase">{p.nombre}</h3>
              <p className="mt-1 text-humo">{p.texto}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-6 border-t border-negro/15 pt-8 md:grid-cols-[1fr_2fr]">
          <h3 className="text-[1.8rem] uppercase">La membresía incluye</h3>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">{incluye.map((i) => <li key={i} className="border-l-4 border-amarillo pl-3">{i}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Carriles() {
  const [n, setN] = useState(12);
  const filas = planes.map((p) => {
    const alcanza = p.clases === null || n <= p.clases;
    const costo = p.clases === null ? p.precio * n : p.precio;
    return { ...p, alcanza, costo };
  });
  const validos = filas.filter((f) => f.alcanza);
  const gana = validos.reduce((a, b) => (b.costo < a.costo ? b : a));
  const max = Math.max(...filas.map((f) => f.costo));
  return (
    <section id="carriles" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.8rem] uppercase sm:text-[4rem]">Carril por carril</h2>
        <p className="mt-3 max-w-2xl text-ceniza">¿Cuántas clases vas a tomar en 30 días? Cada plan corre en su carril con lo que pagarías en el mes. Gana el más barato que te alcanza.</p>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Clases al mes">
          {opcionesClases.map((o) => (
            <button key={o} type="button" aria-pressed={n === o} onClick={() => setN(o)}
              className={`min-h-[48px] min-w-[4.5rem] border-2 px-4 font-display text-[1.5rem] ${n === o ? 'border-amarillo bg-amarillo text-negro' : 'border-hueso/25 text-hueso hover:border-hueso'}`}>{o}</button>
          ))}
          <span className="self-center pl-2 text-ceniza">clases al mes</span>
        </div>

        <ol className="mt-8 overflow-hidden rounded-sm bg-[#8c3b2b] p-2 sm:p-3" aria-live="polite">
          {filas.map((f, i) => {
            const es = f.nombre === gana.nombre;
            return (
              <li key={f.nombre} className={`relative grid grid-cols-[2rem_1fr] items-center gap-2 border-b-2 border-dashed border-white/40 py-2 last:border-b-0 ${f.alcanza ? '' : 'opacity-60'}`}>
                <span className="text-center font-display text-[1.4rem] text-white">{i + 1}</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-white">
                    <span className="font-semibold">{f.nombre} <span className="font-normal text-white/85">({f.nota})</span></span>
                    <span className="font-display text-[1.3rem]">{f.alcanza ? pesos(f.costo) : `solo ${f.clases} clases`}</span>
                  </div>
                  <div className="mt-1 h-3 bg-black/25">
                    {f.alcanza && <div className={`barra h-3 ${es ? 'bg-amarillo' : 'bg-hueso/70'}`} style={{ width: `${(f.costo / max) * 100}%` }} />}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-2 border-amarillo p-5">
          <p className="text-[1.1rem]">Para {n} clases gana <strong className="text-amarillo">{gana.nombre}</strong>: {pesos(gana.costo)} al mes, {pesos(gana.costo / n)} por clase.</p>
          <a href={wa(`Hola, quiero el ${gana.nombre} de Arena Hybrid Club (${n} clases al mes).`)} target="_blank" rel="noopener" className="btn"><IconoWa /> Reservar este plan</a>
        </div>

        <h3 className="mt-14 text-[2rem] uppercase">Anualidades y programa de competencia</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {anuales.map((a) => (
            <article key={a.nombre} className="border border-hueso/15 p-6">
              <h4 className="font-display text-[1.6rem] uppercase text-hueso">{a.nombre}</h4>
              <p className="mt-1 font-display text-[2rem] text-amarillo">{pesos(a.precio)} <span className="font-sans text-[0.9rem] text-ceniza">MXN {a.mensual ? 'al mes' : 'al año'}</span></p>
              <ul className="mt-3 grid gap-1 text-[0.95rem]">{a.lista.map((l) => <li key={l}>— {l}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Espacio() {
  return (
    <section id="espacio" className="claro py-16 sm:py-24">
      <div className="contenedor grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-[2.8rem] uppercase sm:text-[4rem]">El espacio</h2>
          <p className="mt-4 text-humo">Estudio híbrido, zona de fuerza, área de recovery con sauna y cold plunge, y vestidores con regaderas.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={foto('sauna-coldplunge')} alt="Área de sauna y cold plunge con muros de madera y tina negra" width={1400} height={709} loading="lazy" className="col-span-2 aspect-[2/1] w-full object-cover" />
          <img src={foto('lockers-vanity')} alt="Vestidores con lavabos de mármol y espejos redondos" width={1400} height={735} loading="lazy" className="col-span-2 aspect-[2/1] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Comunidad() {
  return (
    <section id="comunidad" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.8rem] uppercase sm:text-[4rem]">Más que un gimnasio: un club que corre junto</h2>
        <p className="mt-3 max-w-2xl text-ceniza">Arena ya tiene comunidad: su club de corredores, eventos como el ATHLO Athlete Series y los 50 miembros fundadores que agotaron su anualidad.</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {comunidad.map((c) => <li key={c.foto}><img src={foto(c.foto)} alt={c.alt} width={1400} height={1400} loading="lazy" className="aspect-square w-full object-cover" /></li>)}
        </ul>
        <a href={negocio.instagram} target="_blank" rel="noopener" className="enlace mt-6 inline-flex items-center gap-2"><IconoIg /> @arenahybridclub</a>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="claro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.8rem] uppercase sm:text-[4rem]">Entra a la arena</h2>
          <p className="mt-4 flex gap-2 font-semibold"><IconoPin className="mt-1 h-5 w-5 shrink-0" />{negocio.direccion}</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="mt-2 inline-block font-semibold underline underline-offset-4">Abrir en Google Maps</a>
        </div>
        <div className="flex flex-wrap content-start gap-3">
          <a href={waHola} target="_blank" rel="noopener" className="btn !bg-negro !text-hueso hover:!bg-humo"><IconoWa /> WhatsApp {negocio.telVisible}</a>
          <a href={`tel:${negocio.tel}`} className="inline-flex min-h-[48px] items-center gap-2 border-2 border-negro/30 px-6 font-semibold uppercase tracking-wide"><IconoTel /> Llamar</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="pb-24 pt-10 md:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.6rem] tracking-wider text-hueso">ARENA HYBRID CLUB</p>
        <p className="text-[0.95rem] text-ceniza">Hybrid training, strength y recovery en Aguascalientes</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hueso/15 bg-negro text-hueso md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-amarillo text-[0.9rem] font-semibold text-negro"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-negro">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Pilares />
        <Carriles />
        <Espacio />
        <Comunidad />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
