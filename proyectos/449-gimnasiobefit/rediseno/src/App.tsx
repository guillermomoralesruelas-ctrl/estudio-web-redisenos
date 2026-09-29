import { useState } from 'react';
import { clases, negocio, planesGenerales, servicios, sucursales, wa, type Servicio, type Sucursal } from './data/content';


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
const waHola = wa('Hola, quiero información de las mensualidades de Befit.');
const secciones = [['#entrena', 'Sucursales'], ['#clases', 'Clases'], ['#planes', 'Planes']] as const;
const nombreServicio = (id: Servicio) => servicios.find((s) => s.id === id)?.nombre ?? id;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-hueso/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Gimnasio Befit, inicio"><img src="./logo-be-fit.webp" alt="Befit fitness center" width={103} height={62} className="h-10 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-semibold text-gris hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./zona-pesas.webp" alt="Zona de pesas de Befit con racks de mancuernas y máquinas moradas frente a paredes amarillas" width={624} height={399} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta via-tinta/80 to-tinta/30 md:bg-gradient-to-r md:from-tinta md:via-tinta/85 md:to-tinta/20" aria-hidden="true" />
      <div className="contenedor pb-14 pt-60 md:py-32">
        <p className="font-semibold text-amarillo">Dos sucursales en Mazatlán</p>
        <h1 className="mt-3 max-w-3xl text-[3.5rem] uppercase sm:text-[5.4rem]">Gimnasio en Mazatlán desde $499 al mes</h1>
        <p className="mt-5 max-w-xl text-[1.12rem]">Pesas, cardio, spinning, box y zumba en Insurgentes y Real del Valle; crossfit y funcional en Real del Valle. Nutriólogo en las dos.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#entrena" className="btn btn-amarillo">¿Qué sucursal te conviene?</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function TarjetaSucursal({ s, elegidos, mejor }: { s: Sucursal; elegidos: Servicio[]; mejor: boolean }) {
  const faltan = elegidos.filter((e) => !s.incluye.includes(e));
  const sirve = faltan.length === 0;
  const texto = `Hola, quiero inscribirme en ${s.nombre}${elegidos.length ? ` para ${elegidos.map(nombreServicio).join(', ').toLowerCase()}` : ''}.`;
  return (
    <li className={`overflow-hidden rounded-xl border-2 bg-white transition-colors ${mejor ? 'border-azul' : sirve ? 'border-tinta/10' : 'border-tinta/10 bg-white/60'}`}>
      <img src={`./${s.foto}`} alt={s.alt} width={624} height={399} loading="lazy" className={`aspect-[16/9] w-full object-cover ${sirve ? '' : 'grayscale'}`} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-[2rem] uppercase">{s.nombre}</h3>
          {mejor && <span className="rounded bg-amarillo px-2 py-0.5 text-[0.9rem] font-semibold">Te conviene</span>}
        </div>
        <p className="mt-1"><span className="font-display text-[2.4rem] font-extrabold text-azul">{pesos(s.mensual)}</span> <span className="text-gris">al mes{s.nota ? `, ${s.nota.toLowerCase()}` : ''}</span></p>
        <p className="mt-2 text-[0.98rem]" aria-live="polite">
          {sirve ? (elegidos.length ? 'Tiene todo lo que elegiste.' : 'Elige arriba lo que quieres entrenar.') : `No tiene ${faltan.map(nombreServicio).join(' ni ').toLowerCase()}.`}
        </p>
        <p className="mt-3 text-[0.98rem] text-gris">{s.direccion}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {sirve && <a href={wa(texto)} target="_blank" rel="noopener" className="btn"><IconoWa /> Inscribirme aquí</a>}
          <a href={s.mapa} target="_blank" rel="noopener" className="btn-linea"><IconoPin /> Cómo llegar</a>
        </div>
      </div>
    </li>
  );
}

function Entrena() {
  const [elegidos, setElegidos] = useState<Servicio[]>([]);
  const alternar = (id: Servicio) => setElegidos((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
  const sirven = sucursales.filter((s) => elegidos.every((e) => s.incluye.includes(e)));
  const mejor = elegidos.length ? sirven.reduce<Sucursal | null>((m, s) => (!m || s.mensual < m.mensual ? s : m), null) : null;
  const otra = sirven.find((s) => s !== mejor);
  return (
    <section id="entrena" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[2.8rem] uppercase sm:text-[3.8rem]">¿Qué quieres entrenar?</h2>
        <p className="mt-4 max-w-2xl text-gris">Las dos sucursales no tienen lo mismo ni cuestan igual. Marca lo que te interesa y te decimos cuál te conviene.</p>
        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Lo que quieres entrenar">
          {servicios.map((s) => {
            const on = elegidos.includes(s.id);
            return (
              <li key={s.id}>
                <button type="button" aria-pressed={on} onClick={() => alternar(s.id)}
                  className={`ficha min-h-[46px] rounded-full border-2 px-5 font-semibold ${on ? 'border-azul bg-azul text-white' : 'border-tinta/20 bg-white hover:border-tinta'}`}>
                  {on ? '✓ ' : ''}{s.nombre}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 min-h-[3.2rem] max-w-3xl text-[1.1rem] font-semibold" aria-live="polite">
          {!elegidos.length ? '' : mejor && otra ? `Te sirven las dos. ${mejor.nombre} cuesta ${pesos(otra.mensual - mejor.mensual)} menos al mes.` : mejor ? `Solo ${mejor.nombre} tiene todo lo que elegiste.` : ''}
        </p>
        <ul className="mt-4 grid gap-6 md:grid-cols-2">
          {sucursales.map((s) => <TarjetaSucursal key={s.id} s={s} elegidos={elegidos} mejor={mejor === s} />)}
        </ul>
      </div>
    </section>
  );
}

function Clases() {
  return (
    <section id="clases" className="oscuro py-20 md:py-28">
      <div className="contenedor grid items-center gap-12 md:grid-cols-2">
        <img src="./clase-funcional.webp" alt="Clase de entrenamiento funcional en Befit: un grupo estira frente a pelotas, cuerdas de suspensión y tapetes" width={406} height={396} loading="lazy" className="w-full rounded-xl object-cover" />
        <div>
          <h2 className="text-[2.6rem] uppercase sm:text-[3.4rem]">Clases a diferentes horarios</h2>
          <p className="mt-4">Además de pesas y cardio con instructor de piso, Befit da estas clases:</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 font-display text-[1.6rem] font-bold uppercase text-hueso">
            {clases.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="mt-6 text-hueso/80">Los horarios no están en su sitio: pregúntalos por WhatsApp.</p>
          <a href={wa('Hola, ¿me pasan los horarios de las clases?')} target="_blank" rel="noopener" className="btn btn-amarillo mt-6"><IconoWa /> Pedir horarios</a>
        </div>
      </div>
    </section>
  );
}

function Planes() {
  return (
    <section id="planes" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.6rem] uppercase sm:text-[3.4rem]">Si no quieres pagar el mes</h2>
        <p className="mt-4 max-w-2xl text-gris">Planes por semana, quincena, visitas o año, y la visita suelta en cada sucursal.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {planesGenerales.map((p) => (
            <li key={p.nombre} className="rounded-xl border border-tinta/10 bg-white p-6">
              <h3 className="text-[1.7rem] uppercase">{p.nombre}</h3>
              <p className="font-display text-[2.4rem] font-extrabold text-azul">{pesos(p.precio)}</p>
              <p className="text-[0.98rem] text-gris">{p.nota}</p>
            </li>
          ))}
          <li className="rounded-xl border border-tinta/10 bg-white p-6">
            <h3 className="text-[1.7rem] uppercase">Visita</h3>
            <ul className="mt-1 grid gap-1">
              {sucursales.map((s) => <li key={s.id} className="flex items-baseline justify-between gap-3"><span>{s.nombre.replace('Befit ', '')}</span><span className="font-display text-[2rem] font-extrabold text-azul">{pesos(s.visita)}</span></li>)}
            </ul>
          </li>
        </ul>
        <a href={waHola} target="_blank" rel="noopener" className="btn mt-10"><IconoWa /> Preguntar por WhatsApp</a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-14 md:pb-10">
      <div className="contenedor grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-[2rem] font-extrabold uppercase text-hueso">Befit</p>
          <p className="text-hueso/80">Gimnasio en {negocio.ciudad}</p>
        </div>
        {sucursales.map((s) => (
          <div key={s.id}>
            <p className="font-semibold text-amarillo">{s.nombre}</p>
            <p className="text-[0.98rem]">{s.direccion}</p>
            <p className="mt-1 flex flex-wrap gap-x-4"><a href={s.telefonoLink} className="underline underline-offset-4">Tel. {s.telefono}</a><a href={s.mapa} target="_blank" rel="noopener" className="underline underline-offset-4">Google Maps</a></p>
          </div>
        ))}
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hueso/15 bg-tinta text-hueso md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-amarillo text-[0.9rem] font-semibold text-tinta"><IconoWa />WhatsApp</a>
      <a href={sucursales[0].telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href="#entrena" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Sucursales</a>
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
        <Entrena />
        <Clases />
        <Planes />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
