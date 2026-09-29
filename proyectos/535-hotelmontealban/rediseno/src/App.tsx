import { useState } from 'react';
import { comodidades, habitaciones, negocio, personaExtra, politicas, wa, zonas } from './data/content';


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

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const waHola = wa('Hola, quiero consultar disponibilidad en el Hotel Monte Albán.');
const secciones = [['#casona', 'La casona'], ['#habitaciones', 'Habitaciones'], ['#politicas', 'Antes de venir'], ['#ubicacion', 'Ubicación']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Hotel Monte Albán, inicio">
          <img src="./logo.webp" alt="" width={240} height={240} className="h-11 w-11 rounded" />
          <span className="font-display text-[1.25rem] leading-none">Hotel Monte Albán</span>
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-tierra hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./fachada.webp" alt="Fachada del Hotel Monte Albán de noche, con balcones de hierro, faroles y su letrero iluminado" width={1400} height={1054} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta via-tinta/80 to-tinta/25 md:bg-gradient-to-r md:from-tinta md:via-tinta/80 md:to-tinta/5" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-display text-[1.35rem] italic text-ocre">Casona colonial del siglo XVIII</p>
        <h1 className="mt-2 max-w-2xl text-[2.8rem] sm:text-[4.2rem]">Hotel en el centro de Oaxaca, frente a la Catedral</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">16 habitaciones con pisos de mosaico y vigas a la vista, Guelaguetza en el patio y restaurante oaxaqueño. Sin anticipos: pagas al llegar.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> Consultar disponibilidad</a>
          <a href="#casona" className="btn-linea">Recorrer la casona</a>
        </div>
        <p className="mt-8 text-[0.98rem] text-cal/80">Desde {pesos(habitaciones[0].precio)} la noche por habitación. Mayores de 12 años. Pet friendly.</p>
      </div>
    </section>
  );
}

function Plano() {
  const [activa, setActiva] = useState('patio');
  const z = zonas.find((x) => x.id === activa)!;
  const boton = (id: string, clase = '') => {
    const zona = zonas.find((x) => x.id === id)!;
    return (
      <button type="button" aria-pressed={activa === id} aria-controls="detalle-zona" onClick={() => setActiva(id)} className={`zona min-h-[76px] ${clase}`}>
        <span className="text-[1rem] leading-tight">{(() => { const n = zona.nombre.replace(/^(La|El|Los|Las) /, ''); return n[0].toUpperCase() + n.slice(1); })()}</span>
        <span className="text-[0.8rem] font-normal opacity-85">{zona.donde}</span>
      </button>
    );
  };
  return (
    <section id="casona" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.4rem] sm:text-[3.2rem]">Recorre la casona antes de llegar</h2>
        <p className="mt-4 max-w-2xl text-tierra">Así se reparte la mansión alrededor de su patio. Toca cada parte para ver qué hay ahí.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-start">
          <div>
            <div className="grid grid-cols-3 gap-2 rounded-xl border-2 border-cantera/30 bg-arena p-3" role="group" aria-label="Plano de la casona">
              {boton('habitaciones', 'col-span-3')}
              {boton('pasillos', 'min-h-[150px]')}
              {boton('patio', 'min-h-[150px]')}
              {boton('restaurante', 'min-h-[150px]')}
              {boton('entrada', 'col-span-3')}
            </div>
            <p className="mt-3 text-center text-[0.95rem] text-tierra">Al salir: la Catedral Metropolitana, a menos de 30 pasos</p>
          </div>
          <div id="detalle-zona" aria-live="polite" className="overflow-hidden rounded-xl border border-tinta/10 bg-white">
            {z.foto && <img key={z.foto} src={`./${z.foto}`} alt={z.alt} width={1400} height={935} loading="lazy" className="aspect-[3/2] w-full object-cover" />}
            <div className="p-6 sm:p-8">
              <p className="text-[0.95rem] font-semibold text-cantera">{z.donde}</p>
              <h3 className="mt-1 text-[2rem]">{z.nombre}</h3>
              {z.texto.map((t) => <p key={t} className="mt-3">{t}</p>)}
              {z.accion && <a href={wa(z.accion.mensaje)} target="_blank" rel="noopener" className="btn mt-6"><IconoWa /> {z.accion.texto}</a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="bg-arena py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.4rem] sm:text-[3.2rem]">Habitaciones y tarifas</h2>
        <p className="mt-4 max-w-2xl text-tierra">Precio por noche y por habitación, según cuántos son. Persona extra: {pesos(personaExtra)} por noche.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {habitaciones.map((h) => (
            <li key={h.id} className="flex flex-col overflow-hidden rounded-xl bg-cal">
              <img src={`./${h.foto}`} alt={h.alt} width={1400} height={935} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.8rem]">{h.nombre}</h3>
                <p className="text-tierra">{h.personas}. {h.banos}.</p>
                <p className="mt-4 font-display text-[2.2rem] leading-none text-terracota">{pesos(h.precio)} <span className="font-sans text-[0.95rem] text-tierra">la noche</span></p>
                <a href={wa(`Hola, quiero reservar una habitación ${h.nombre.toLowerCase()} (${h.personas}). ¿Tienen disponibilidad para estas fechas: `)} target="_blank" rel="noopener" className="btn mt-6 self-start"><IconoWa /> Reservar</a>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-semibold">Todas incluyen:</p>
        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-tierra">{comodidades.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
  );
}

function Politicas() {
  return (
    <section id="politicas" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.4rem] sm:text-[3.2rem]">Antes de venir</h2>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          {politicas.map((p) => (
            <div key={p.titulo} className="border-t-2 border-cantera/40 pt-4">
              <dt className="font-display text-[1.6rem]">{p.titulo}</dt>
              <dd className="mt-1 text-tierra">{p.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.2rem]">Reserva directo con el hotel</h2>
          <p className="mt-4 max-w-md">Escribe tus fechas y cuántos son. No pedimos anticipo: pagas al llegar.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
          <dl className="mt-10 grid gap-5">
            <div><dt className="font-semibold text-ocre">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-semibold text-cal underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
            <div><dt className="font-semibold text-ocre">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="break-all underline underline-offset-4">{negocio.correo}</a></dd></div>
          </dl>
        </div>
        <iframe title="Mapa del Hotel Monte Albán en el Centro Histórico de Oaxaca" src={negocio.mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[22rem] w-full rounded-xl border-0 md:h-full md:min-h-[26rem]" />
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-cal/10 bg-tinta pb-24 pt-8 text-[0.95rem] text-cal/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Hotel Monte Albán, Oaxaca de Juárez</p>
        <p>Tel. {negocio.telefono}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cal/15 bg-tinta text-cal md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-terracota text-[0.9rem] font-semibold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Plano />
        <Habitaciones />
        <Politicas />
        <Ubicacion />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
