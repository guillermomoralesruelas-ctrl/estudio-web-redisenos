import { useState } from 'react';
import { barberos, cortes, galeria, negocio, pasos, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const waHola = wa('Hola, quiero agendar una cita en Barón Barbershop.');
const secciones = [['#cortes', 'Cortes'], ['#barberos', 'Barberos'], ['#galeria', 'Galería'], ['#visitanos', 'Visítanos']] as const;

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-hueso/10 bg-negro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Barón Barbershop, inicio">
          <img src="./logo.webp" alt="" width={220} height={289} className="h-11 w-auto" />
          <span className="font-display text-[1.35rem] text-hueso">Barón</span>
        </a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-piedra hover:text-hueso">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Agendar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./barberia-interior.webp" alt="Barbero de Barón atendiendo a un cliente reclinado, en el salón de muros de concreto y piso de ajedrez" width={1100} height={619} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro via-negro/80 to-negro/30 md:bg-gradient-to-r md:from-negro md:via-negro/80 md:to-negro/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-display text-[1.4rem] italic text-durazno">{negocio.lema}</p>
        <h1 className="mt-2 max-w-2xl text-[3rem] sm:text-[4.6rem]">Barbería en Ventura, Zapopan</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Cortes, barba y estilo con tres barberos en Torre West. Cortes desde {pesos(cortes[0].precio)} con lavado, peinado y masaje.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar por WhatsApp</a>
          <a href="#cortes" className="btn-linea">Ver cortes y precios</a>
        </div>
        <p className="mt-8 text-[0.98rem] text-hueso/80">{negocio.horario.map((h) => `${h.dias}, ${h.horas}`).join('. ')}.</p>
      </div>
    </section>
  );
}

function Cortes() {
  const [id, setId] = useState('premium');
  const c = cortes.find((x) => x.id === id)!;
  const idx = cortes.indexOf(c);
  return (
    <section id="cortes" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.6rem] sm:text-[3.4rem]">¿Qué incluye tu corte?</h2>
        <p className="mt-4 max-w-2xl text-gris">Los tres cortes llevan corte, parches para ojeras, peinado y masaje. Elige uno y ve qué más se suma.</p>
        <div role="group" aria-label="Elige un corte" className="mt-8 grid grid-cols-3 gap-2 sm:inline-grid sm:gap-3">
          {cortes.map((x) => (
            <button key={x.id} type="button" aria-pressed={x.id === id} onClick={() => setId(x.id)}
              className={`min-h-[64px] rounded-sm border-2 px-3 py-2 text-left transition-colors sm:px-5 ${x.id === id ? 'border-negro bg-negro text-hueso' : 'border-negro/20 bg-white hover:border-negro'}`}>
              <span className="block text-[0.95rem] font-bold leading-tight">{x.nombre.replace('Corte ', '')}</span>
              <span className="block font-display text-[1.5rem] leading-none">{pesos(x.precio)}</span>
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_20rem] md:items-start">
          <div>
            <p className="font-display text-[2rem]" aria-live="polite">{c.nombre}: {pesos(c.precio)}{idx > 0 && <span className="ml-3 font-sans text-[1rem] font-bold text-cobre">+{pesos(c.precio - cortes[idx - 1].precio)} sobre el {cortes[idx - 1].nombre.replace('Corte ', '')}</span>}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {pasos.map((p) => {
                const si = c.incluye.includes(p.id);
                return (
                  <li key={p.id} className={`paso flex items-center gap-3 rounded-sm border px-4 py-3 ${si ? 'border-negro bg-white font-bold' : 'border-dashed border-negro/25 text-gris opacity-70'}`}>
                    <span aria-hidden="true" className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[0.8rem] ${si ? 'bg-cobre text-white' : 'border border-negro/30'}`}>{si ? '✓' : ''}</span>
                    <span>{p.nombre}<span className="sr-only">{si ? ': incluido' : ': no incluido'}</span></span>
                  </li>
                );
              })}
            </ul>
            <a href={wa(`Hola, quiero agendar un ${c.nombre} (${pesos(c.precio)}).`)} target="_blank" rel="noopener" className="btn mt-8"><IconoWa /> Agendar {c.nombre}</a>
          </div>
          <img key={c.foto} src={`./${c.foto}`} alt={c.alt} width={825} height={1100} loading="lazy" className="aspect-[3/4] w-full rounded-sm object-cover" />
        </div>
      </div>
    </section>
  );
}

function Barberos() {
  return (
    <section id="barberos" className="oscuro py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.6rem] sm:text-[3.4rem]">Tus barberos</h2>
        <p className="mt-4 max-w-2xl">Puedes pedir con quién quieres tu cita.</p>
        <ul className="mt-10 grid gap-10 sm:grid-cols-3">
          {barberos.map((b) => (
            <li key={b.nombre}>
              <img src={`./${b.foto}`} alt={`${b.nombre}, barbero de Barón Barbershop`} width={b.ancho} height={b.alto} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover object-top" />
              <h3 className="mt-4 text-[2rem]">{b.nombre}</h3>
              <p className="font-bold text-durazno">{b.estilo}</p>
              <p className="mt-2 text-[0.98rem]">{b.texto}</p>
              <a href={wa(`Hola, quiero agendar una cita con ${b.nombre}.`)} target="_blank" rel="noopener" className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-bold text-hueso underline underline-offset-4"><IconoWa className="h-4 w-4" /> Agendar con {b.nombre}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.6rem] sm:text-[3.4rem]">En la silla</h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {galeria.map((g) => (
            <li key={g.foto}><img src={`./${g.foto}`} alt={g.alt} width={g.ancho} height={g.alto} loading="lazy" className="aspect-[3/4] w-full rounded-sm object-cover" /></li>
          ))}
        </ul>
        <p className="mt-8">Más cortes en Instagram: <a href={negocio.instagram} target="_blank" rel="noopener" className="font-bold text-cobre underline underline-offset-4">{negocio.instagramTexto}</a></p>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="oscuro">
      <div className="ajedrez h-7" aria-hidden="true" />
      <div className="contenedor grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.4rem]">Visítanos en Ventura</h2>
          <p className="mt-4 max-w-md">Escríbenos qué corte quieres, con qué barbero y a qué hora.</p>
          <a href={waHola} className="btn mt-8" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-bold text-durazno">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-bold text-hueso underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-bold text-durazno">Horario</dt><dd>{negocio.horario.map((h) => <span key={h.dias} className="block">{h.dias}: {h.horas}</span>)}</dd></div>
          <div><dt className="font-bold text-durazno">Redes</dt><dd className="flex flex-wrap gap-x-5"><a href={negocio.instagram} target="_blank" rel="noopener" className="underline underline-offset-4">Instagram</a><a href={negocio.facebook} target="_blank" rel="noopener" className="underline underline-offset-4">Facebook</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-hueso/10 bg-negro pb-24 pt-8 text-[0.95rem] text-hueso/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Barón Barbershop, {negocio.zona}</p>
        <p>{negocio.lema}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hueso/15 bg-negro text-hueso md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-cobre text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href="#cortes" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><span aria-hidden="true" className="text-[1.1rem] leading-5">✂</span>Cortes</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
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
        <Cortes />
        <Barberos />
        <Galeria />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
